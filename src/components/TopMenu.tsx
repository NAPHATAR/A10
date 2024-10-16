import Image from 'next/image';
import Link from 'next/link';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center h-16 py-4 sm:py-6 lg:py-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <div>
          {session ? (
            <Link href="/api/auth/signout">
              <div className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out cursor-pointer">
                Sign Out
              </div>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <div className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out cursor-pointer">
                Sign In
              </div>
            </Link>
          )}
        </div>
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
          <TopMenuItem 
            href="/booking" 
            className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
          >
            Booking
          </TopMenuItem>
          <TopMenuItem href="/">
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={256}
              height={256}
              priority
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
            />
          </TopMenuItem>
        </nav>
      </div>
    </div>
  );
}