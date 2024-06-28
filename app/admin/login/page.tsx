import React from 'react'
import {LoginForm} from '@/components'
import { getServerSession } from 'next-auth'
import {authOptions} from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const page = async () => {
  const session=await getServerSession(authOptions);

  if(session) redirect('/admin');

  return (
    <div className='bg-secondary h-screen grid place-items-center'>
      <LoginForm />
    </div>
  )
}

export default page