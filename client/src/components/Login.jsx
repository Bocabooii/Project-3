import React from 'react'

import {FcGoogle} from 'react-icons/fc'

export const Login = () => {
  return (
    <div className='relative w-screen h-screen'>
        <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
            <div>
                <FcGoogle/>
                    Sign in with Google
            </div>
        </div>
    </div>
  )
}

export default Login