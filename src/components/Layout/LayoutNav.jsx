import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import NavbarComponent from "../Navbar/Navbar"
import { Fragment } from "react"

const LayoutNav = () => {
  return (
    <Fragment>
      <NavbarComponent/>
      <Outlet />
      <Footer/>
    </Fragment>
  )
}

export default LayoutNav
