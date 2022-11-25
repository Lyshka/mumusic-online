import { Box, Button, Card, Grid } from "@mui/material"
import { useRouter } from "next/router"
import TrackList from "../../components/TrackList"
import MainLayouts from "../../layouts/MainLayouts"
import { ITrack } from "../../types/track"

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: "1", name: "Track 1", artist: "Ispolnitel 1", text: "TEXT1 TEXT1 TEXT1", listens: 3, audio: "http://localhost:5000/audio/5b00d37b-3bc5-4bac-bcb8-d0ab56ffdeb5.mp3", picture: "http://localhost:5000/image/7e8dcf76-e4b4-4dfb-9c5c-adc55f62822a.jpg", comments: []},
        {_id: "2", name: "Track 2", artist: "Ispolnitel 2", text: "TEXT2 TEXT2 TEXT2", listens: 4, audio: "http://localhost:5000/audio/914655ec-fd31-47b1-bcd4-3a937b8b617e.mp3", picture: "http://localhost:5000/image/52c880c2-c705-4ee0-add4-8ac9c4074b17.png", comments: []},
        {_id: "3", name: "Track 3", artist: "Ispolnitel 2", text: "TEXT3 TEXT3 TEXT3", listens: 5, audio: "http://localhost:5000/audio/bb4fa247-bf9b-4d25-8540-4efe07f640bf.mp3", picture: "http://localhost:5000/image/aab3aba6-f5ef-4a5c-8f20-2508a69a8749.jpeg", comments: []},
    ]

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