import Header from './header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './footer'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { getCurrentUser } from '../api/api'
import { User } from '../types/types'

export const RootLayout = () => {
  const nav = useNavigate()
  const user = useContext(UserContext)

  useEffect(() => {

    function handleSuccess(data:User){
      user?.setUser(data)
    }

    function handleError(){
      nav('/')
      user?.setUser(null)
    }

    try {
      getCurrentUser().then(handleSuccess).catch(handleError)
    } catch (error) {
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
