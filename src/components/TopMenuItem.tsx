import Link from 'next/link'

interface TopMenuItemProps {
  href: string;
  children: React.ReactNode;
}

export default function TopMenuItem({ href, children }: TopMenuItemProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-800 hover:text-gray-600 font-medium px-2 py-1 sm:px-3 sm:py-2 transition-all duration-200 ease-in-out relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-100 ease-in-out group-hover:w-full"></span>
    </Link>
  )
}
