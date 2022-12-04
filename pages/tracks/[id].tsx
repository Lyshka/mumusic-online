import { Button, Grid, TextField } from "@mui/material"
import axios from "axios"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useInput } from "../../hooks/useInput"
import MainLayouts from "../../layouts/MainLayouts"
import { ITrack } from "../../types/track"

const TrackPage = ({serverTrack}: any) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()

    const username = useInput("")
    const text = useInput("")

    const addComment = async () => {
        try {
            const response = await axios.post("http://localhost:5000/tracks/comment", {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MainLayouts title={"Lyshka Music " + track.name + " - " + track.artist} keywords={"МУзыка, артисты, " + track.name + ", " + track.artist}>
            <Button onClick={() => router.push("/tracks")} variant={"outlined"} style={{ fontSize: 32 }}>
                К списку
            </Button>


            <Grid container style={{margin: "20px 0"}}>
                <img
                    src={"http://localhost:5000/" + track.picture}
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
                    {...username}
                />

                <TextField 
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                    {...text}
                />

                <Button onClick={addComment}>Отправить</Button>
            </Grid>

            <div>
                {track.comments.map((comment: any)=> (
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get(`http://localhost:5000/tracks/${params?.id}`)

    return {
        props: {
            serverTrack: response.data
        }
    }
}