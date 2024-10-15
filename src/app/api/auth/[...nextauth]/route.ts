import userLogIn from '@/libs/userLogIn';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await userLogIn(credentials.email, credentials.password);
        return user ? user : null;
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: user.token
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        _id: string,
        name: string,
        email: string,
        role: string,
        token: string
      };
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };