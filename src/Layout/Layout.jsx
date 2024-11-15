import { Outlet } from "react-router-dom";
import CardProvider from "../context/CardContext/CardProvider";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";

const Layout = () => {
  return (
    <>
        <CardProvider>
            <Header />
            <Outlet />
            <Footer />
        </CardProvider>
    </>
  )
}

export default Layout