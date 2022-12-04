import { Box, Button, Card, Grid, Input, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"

import TrackList from "../../components/TrackList"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import MainLayouts from "../../layouts/MainLayouts"
import { NextThunkDispatch, wrapper } from "../../store"
import { fetchTracks, searchTracks } from "../../store/actions-creators/track"

const Index = () => {
    const [query, setQuery] = useState<string>("")

    const router = useRouter()
    const { tracks, error } = useTypedSelector(state => state.track)

    const dispatch = useDispatch() as NextThunkDispatch

    const search = async (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)

        await dispatch(await searchTracks(e.target.value))

    }

    if (error) {
        <MainLayouts>
            <h1>{error}</h1>
        </MainLayouts>
    }

    return (
        <MainLayouts title="Список треков - Lyshka Music">
            <Grid container justifyContent={"center"}>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent={"space-between"}>
                            <h1>
                                Список треков
                            </h1>

                            <Button onClick={() => router.push("/tracks/create")}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>

                    <TextField
                        value={query}
                        fullWidth
                        onChange={search}
                    />

                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayouts>
    )
}
export default Index


export const getServerSideProps = wrapper.getServerSideProps(
    store => async ({ req, res, ...etc }) => {
        const dispatch = store.dispatch as NextThunkDispatch
        await dispatch(fetchTracks());

        return { props: {} }
    }
);
