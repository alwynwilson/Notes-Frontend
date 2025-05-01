import React, { useEffect, useState } from 'react'
import ProfileInfo from './ProfileInfo'
import { useNavigate,Link } from 'react-router-dom'


const Navbar = () => {
  const [check,setCheck] = useState(false)
  const navigate = useNavigate()

  const getuserdetails = ()=>{
    if(sessionStorage.getItem("token")){
      setCheck(true)
    }
    
  }

  useEffect(()=>{
    getuserdetails()
  },[])

  const onLogout = () => {
    sessionStorage.clear()
    navigate("/login")
  }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <Link to='/'>
      <h2 className="text-xl font-medium text-black py-2">
            KeyNOtes
        </h2>
      </Link>
        
        {
          check && (
            <ProfileInfo onLogout={onLogout}/>
          )
        }
    </div>
  )
}

export default Navbar
