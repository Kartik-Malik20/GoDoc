import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async() =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt: 'select_account'})
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await axios.post('http://localhost:3000/auth/google',{
                    name:resultsFromGoogle.user.displayName,
                    email:resultsFromGoogle.user.email,
                    googlePhotoUrl:resultsFromGoogle.user.photoURL
                })
            const data = res.data; // Access the response data directly
            if(res.status === 200){ // Check the response status
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' className='p-1 mt-4 -ml-1' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-3' />
        Continue with Google
    </Button>
  )
}
