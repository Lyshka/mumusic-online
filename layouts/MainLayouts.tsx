import { Container } from "@mui/material"
import { FC, ReactNode } from "react"
import Navbar from "../components/Navbar"

interface MainLayoutsProps {
    children: ReactNode
}

const MainLayouts: FC<MainLayoutsProps> = ({ children }) => {
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