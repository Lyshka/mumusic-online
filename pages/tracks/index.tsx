import { Box, Button, Card, Grid } from "@mui/material"
import { useRouter } from "next/router"

import TrackList from "../../components/TrackList"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import MainLayouts from "../../layouts/MainLayouts"
import { NextThunkDispatch, wrapper } from "../../store"
import { fetchTracks } from "../../store/actions-creators/track"

const Index = () => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)

    if(error) {
        <MainLayouts>
            <h1>{error}</h1>
        </MainLayouts>
    }

    return (
        <MainLayouts>
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

                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayouts>
    )
}
export default Index


export const getServerSideProps = wrapper.getServerSideProps(
    store => async ({ req, res, ...etc }) =>
    {
        const dispatch = store.dispatch as NextThunkDispatch
        await dispatch(fetchTracks());

        return { props: {} }
    }
);
