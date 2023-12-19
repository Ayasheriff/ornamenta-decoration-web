import { Outlet } from "react-router-dom"
import CarouselNavbar from "../CarouselNavbar/CarouselNavbar"
import Footer from "../Footer/Footer"
import { Fragment } from "react"

const Layout = () => {
  return (
    <Fragment>
      <CarouselNavbar/>
      <Outlet />
      <Footer/>
    </Fragment>
  )
}

export default Layout
