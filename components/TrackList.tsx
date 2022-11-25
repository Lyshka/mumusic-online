import { Box, Grid } from "@mui/material"
import { FC } from "react"
import { ITrack } from "../types/track"
import TrackItem from "./TrackItem"

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: FC<TrackListProps> = ({tracks}) => {
  return (
    <div>
        <Grid container direction={"column"}>
            <Box p={2}>
                {tracks.map(track => (
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                ))}
            </Box>
        </Grid>
    </div>
  )
}
export default TrackList