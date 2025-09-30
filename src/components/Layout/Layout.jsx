import { useState, lazy } from "react";

import Header from "../Header/Header";
//import SideDrawer from "../Header/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";

const SideDrawer = lazy(() => import("../Header/SideDrawer/SideDrawer"));
const Layout = (props) => {
    const [sideDrawerisActive, setSideDrawerisActive] = useState(false);

    const showSideDrawerHandler = () => {
        setSideDrawerisActive(true);
    }

    const hideSideDrawerHanlder = () => {
        setSideDrawerisActive(false);
    }


    return (
        <>
            <Header showSideDrawer={showSideDrawerHandler} />
            <SideDrawer sideDrawerisActive={sideDrawerisActive} hideSideDrawer={hideSideDrawerHanlder} />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default Layout;