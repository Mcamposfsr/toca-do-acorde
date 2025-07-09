import { Outlet } from "react-router-dom"



const PaginaPrincipal = () => {

    return (
        <main className="mt-[12.5vh]">
            <Outlet/>
        </main>
    )
}

export default PaginaPrincipal