import React, { Fragment } from 'react'
import Link from "next/link"

export default function HeaderLinks() {
  return (
    <Fragment>
      <Link href="/" className="hover:text-accent" prefetch={false}>
        Products
      </Link>
    </Fragment>
  )
}
