import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useGlobal } from "../contexts/GlobalContext"

function ProjectLayout() {
    const { loading } = useGlobal();
    return (
        <>
            <Header />
            {loading && <div className="loader">Loading...</div>}
            <Outlet />
        </>
    )
}
export default ProjectLayout