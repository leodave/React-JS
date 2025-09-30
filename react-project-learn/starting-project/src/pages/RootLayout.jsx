import { Outlet } from "react-router";
import MainHeader from "../components/postList/MainHeader";

function RootLayout(){
    return (
        <>
        <MainHeader />
        <Outlet/>
        </>
    )
}
export default RootLayout