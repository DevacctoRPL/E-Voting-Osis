import Header from './header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './footer'
import {  useEffect } from 'react'
import { getCurrentUser } from '../api/api'
import { useSessionStorage } from 'usehooks-ts'
import { User } from '../types/types'

export const RootLayout = () => {
  const nav = useNavigate()
  const [data, setdata, removeData] = useSessionStorage<User | null>('user', null)

  useEffect(() => {
    try {
      getCurrentUser().then((d) => {setdata(d); console.log(d)})
      console.log(data)
    } catch (error) {
      removeData()
      nav('/')
    }
  }, [])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
