import { Container, keyframes } from "@mui/material"
import Head from "next/head"
import { FC, ReactNode } from "react"
import Navbar from "../components/Navbar"
import Player from "../components/Player"

interface MainLayoutsProps {
    children: ReactNode
    title?: string
    description?: string
    keywords?: string
}

const MainLayouts: FC<MainLayoutsProps> = ({ children, title, description, keywords }) => {
    return (
        <>
            <Head>
                <title>{title || "Lyska Music"}</title>
                <meta
                    name="description" content={"My site for music" + (description ? description : "")}
                />
                <meta
                    name="robots" content={"index, follow"}
                />
                <meta
                    name="keywords" content={keywords || "Музыка, треки, артисты"}
                />
                <meta
                    name="viewport" content={"width=device-width, initial-scale=1"}
                />
            </Head>

            <Navbar />

            <Container style={{ margin: "90px auto" }}>
                {children}
            </Container>

            <Player />
        </>
    )
}
export default MainLayouts