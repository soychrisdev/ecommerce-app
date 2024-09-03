"use client"
import React, { Fragment } from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { useAuthStore } from '@/store/auth/auth.store'
import { redirect } from 'next/navigation'
import { SelectScrollUpButton } from '../ui/select'

export default function HeaderMenuList() {

  const isAuthorized = useAuthStore((state) => state.status === 'authorized')
  const logout = useAuthStore((state) => state.logoutUser)


  return (
    <Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" size="icon">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" prefetch={false}>
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="orders" prefetch={false}>
              Orders
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {
            isAuthorized ? <>
              <Button onClick={() => logout()}>Logout</Button>
            </> : <><Link href="/auth/login">Login</Link></>
          }

        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  )
}
