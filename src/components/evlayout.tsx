import Header from './header'
import { Outlet, } from 'react-router-dom'
import Footer from './footer'
export const RootLayout = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
