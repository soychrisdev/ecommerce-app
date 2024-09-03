import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { ShoppingCartIcon } from '@/icons/ShoppingCartIcon'
import HeaderLinks from './HeaderLinks'
import HeaderMenuList from './HeaderMenuList'
import HeaderShop from './HeaderShop'



export default function Header() {

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          VentiShop
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <HeaderLinks />
        </nav>
        <div className="flex items-center gap-4">
          <HeaderShop />
          <HeaderMenuList />
        </div>
      </div>
    </header>
  )
}
