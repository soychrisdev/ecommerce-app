import LoginClientForm from '@/components/auth/SignupForm/LoginOnForm'
import Link from 'next/link'

export default function page() {


  return (
    <div className="flex flex-col justify-center items-center mt-10"> {/* Change flex to flex-col */}
      <h1 className="text-2xl font-bold mb-4">Login form</h1>
      <h1 className="text-lg mb-4">Dont have an account? <Link href="/auth/register">Register</Link></h1>

      <div className='flex'>
        <LoginClientForm />
      </div>
    </div>
  )
}
