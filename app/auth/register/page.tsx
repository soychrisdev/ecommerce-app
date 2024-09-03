import RegisterClientForm from '@/components/auth/SignupForm/SignUpForm'
import Link from 'next/link'
import React from 'react'

export default function page() {

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Register form</h1>
      <h1 className="text-lg mb-4">Already have an account? <Link href="/auth/login">Login</Link></h1>

      <div className='flex'>
        <RegisterClientForm />
      </div>
    </div>
  )
}
