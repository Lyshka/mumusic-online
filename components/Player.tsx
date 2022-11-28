import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"

import styles from "../styles/Player.module.scss"
import { ITrack } from "../types/track"
import TrackProgress from "./TrackProgress"

const Player = () => {
    const active = false
    const track: ITrack = { _id: "1", name: "Track 1", artist: "Ispolnitel 1", text: "TEXT1 TEXT1 TEXT1", listens: 3, audio: "http://localhost:5000/audio/5b00d37b-3bc5-4bac-bcb8-d0ab56ffdeb5.mp3", picture: "http://localhost:5000/image/7e8dcf76-e4b4-4dfb-9c5c-adc55f62822a.jpg", comments: [] }

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()} style={{ marginRight: "15px" }}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>

            <Grid container direction="column" style={{width: 200, margin: "0 20px"}}>
                <div>
                    {track.name}
                </div>

                <div style={{fontSize: 12, color: "gray"}}>
                    {track.artist}
                </div>
            </Grid>

            <TrackProgress left={0} right={100} onChange={() => {}} style={{minWidth: 800}}/>

            <VolumeUp style={{marginLeft: "auto"}}/>

            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    )
}
export default Player