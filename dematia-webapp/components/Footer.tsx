import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <p className="text-xs text-gray-500">© 2024 Demat IA. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>  )
}

export default Footer