import { Container } from "@mui/material"
import { ReactNode } from "react"
import Navbar from "../components/Navbar"

const MainLayouts = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <Container style={{margin: "90px auto"}}>
                {children}
            </Container>
        </>
    )
}
export default MainLayouts