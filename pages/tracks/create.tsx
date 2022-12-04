import { Button, Grid } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import StepOne from "../../components/Steps/StepOne"
import StepThree from "../../components/Steps/StepThree"
import StepTwo from "../../components/Steps/StepTwo"
import StepWrapper from "../../components/StepWrapper"
import { useInput } from "../../hooks/useInput"
import MainLayouts from "../../layouts/MainLayouts"

const Create = () => {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState(1)
  const [picture, setPicture] = useState("")
  const [audio, setAudio] = useState("")

  const name = useInput("")
  const artist = useInput("")
  const text = useInput("")

  const next = () => {
    if (activeStep !== 3) {
      setActiveStep(prev => prev + 1)
    } else {
      const formData = new FormData()

      formData.append("name", name.value)
      formData.append("artist", artist.value)
      formData.append("text", text.value)
      formData.append("picture", picture)
      formData.append("audio", audio)

      axios.post("http://localhost:5000/tracks", formData).then(() => router.push("/tracks")).catch(() => alert("Ошибка при загрузке трека"))
    }
  }

  const back = () => {
    if (activeStep !== 1) {
      setActiveStep(prev => prev - 1)
    }
  }

  return (
    <MainLayouts>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 1 && (
          <StepOne name={name} artist={artist} text={text}/>
        )}

        {activeStep === 2 && (
          <StepTwo setFile={setPicture} file={picture}/>
        )}

        {activeStep === 3 && (
          <StepThree setFile={setAudio} file={audio}/>
        )}
      </StepWrapper>

      <Grid container justifyContent={"center"} gap={3}>
        <Button onClick={back}>
          Назад
        </Button>

        <Button onClick={next}>
          Далее
        </Button>
      </Grid>
    </MainLayouts>
  )
}
export default Create