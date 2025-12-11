import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function ProjectLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default ProjectLayout