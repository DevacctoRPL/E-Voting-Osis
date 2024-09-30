import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { LogoutFn } from '../api/api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Thanks: React.FC = () => {
  const user = useContext(UserContext);
  const { refetch } = useQuery({
    queryKey: ["logoutcog"],
    queryFn: LogoutFn,
    enabled: false,
  })
  const nav = useNavigate()
  const [Counter, setCounter] = useState(5)
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCounter((prevC) => {
        if (prevC === 0) {
          user?.setUser(null)
          refetch()
          clearInterval(countdownInterval)
          nav('/', { replace: true })
          return 0;
        } else {
          return prevC - 1;
        }
      })
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [])

  return <div className="w-full flex flex-col h-[70vh] text-white items-center justify-center">
    <p>Terimakasih</p>
    <p>Anda telah berpartisipasi dalam e-voting MPK OSIS SMK PLUS PELITA NUSANTARA</p>
    <br />
    <p>Anda akan Logout dalam:</p>
    <p className="text-2xl">{Counter}</p>
  </div>
}
export default Thanks

