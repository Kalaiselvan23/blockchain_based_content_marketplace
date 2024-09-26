import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-800 bg-gray-900">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 md:py-10">
          <p className="text-xs text-gray-400">© 2023 NFT Market. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    )
}

export default Footer
