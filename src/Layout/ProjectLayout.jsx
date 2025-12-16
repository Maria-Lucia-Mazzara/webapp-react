import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useGlobal } from "../contexts/GlobalContext"
import Loader from "../components/Loader";

function ProjectLayout() {
    const { loading } = useGlobal();
    return (
        <>
            <Header />
            {loading && <Loader />}
            <Outlet />
        </>
    )
}
export default ProjectLayout