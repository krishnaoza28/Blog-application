import React from 'react'
import { useDispatch } from "react-redux";
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }


  return (
    <button
    className='inline-bock cursor-pointer px-6 py-2 duration-200 hover:text-black hover:bg-red-500 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
