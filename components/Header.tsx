"use client"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import ConnectButton from '@/lib/wallet-modal'
import { useAccount, useEnsName } from 'wagmi'
import { config } from '@/lib/config'
import { getAccount } from "@wagmi/core"
const Header = () => {
  const { address } = useAccount({
    config
  });
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-white">NFT Market</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="published-contents" className="flex items-center text-lg font-semibold text-gray-400 hover:text-white">
              Explore
            </Link>
            <Link href="create" className="flex items-center text-lg font-semibold text-gray-400 hover:text-white">
              Create
            </Link>
            <Link href="#" className="flex items-center text-lg font-semibold text-gray-400 hover:text-white">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search..."
              className="hidden md:inline-flex h-9 w-[200px] lg:w-[300px] bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden text-gray-400 hover:text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </nav>
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}

export default Header
