import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import cssClasses from "./MainLayout.module.css";

export default function MainLayout() {
    return (
        <div className={cssClasses.pageWrapper}>
            <Header />
            <div className={cssClasses.pageContainer}>
                <Outlet />
            </div>
        </div>
    )
}