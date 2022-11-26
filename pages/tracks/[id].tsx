import { Button, Grid, TextField } from "@mui/material"
import { useRouter } from "next/router"
import MainLayouts from "../../layouts/MainLayouts"
import { ITrack } from "../../types/track"

const TrackPage = () => {
    const track: ITrack = { _id: "1", name: "Track 1", artist: "Ispolnitel 1", text: "TEXT1 TEXT1 TEXT1", listens: 3, audio: "http://localhost:5000/audio/5b00d37b-3bc5-4bac-bcb8-d0ab56ffdeb5.mp3", picture: "http://localhost:5000/image/7e8dcf76-e4b4-4dfb-9c5c-adc55f62822a.jpg", comments: [] }
    const router = useRouter()

    return (
        <MainLayouts>
            <Button onClick={() => router.push("/tracks")} variant={"outlined"} style={{ fontSize: 32 }}>
                К списку
            </Button>


            <Grid container style={{margin: "20px 0"}}>
                <img
                    src={track.picture}
                    alt="picture"
                    width={200}
                    height={200}
                />

                <div style={{marginLeft: 30}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>


            <h1>Текст трека</h1>

            <p>{track.text}</p>

            <h1>Комментарии</h1>

            <Grid container gap={2}>
                <TextField 
                    label="Имя пользователя"
                    fullWidth
                />

                <TextField 
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />

                <Button>Отправить</Button>
            </Grid>

            <div>
                {track.comments.map(comment => (
                    <div style={{marginTop: 15}} key={comment._id}>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                ))}
            </div>
        </MainLayouts>
    )
}
export default TrackPage