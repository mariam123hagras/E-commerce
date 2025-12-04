import { Outlet } from "react-router-dom"
import Footer from "../Common/Footer"
import Header from "../Common/Header"


const UserLayout = () => {
  return (
    <div>
        {/*Header*/}
        <Header/>
        {/*Main content*/}
        <main>
            {/* Outlet for nested routes */}
            <Outlet/>
        </main>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default UserLayout
