import { Button, Grid } from "@mui/material"
import { useState } from "react"
import StepOne from "../../components/Steps/StepOne"
import StepThree from "../../components/Steps/StepThree"
import StepTwo from "../../components/Steps/StepTwo"
import StepWrapper from "../../components/StepWrapper"
import MainLayouts from "../../layouts/MainLayouts"

const Create = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  const next = () => {
    if (activeStep !== 3) {
      setActiveStep(prev => prev + 1)
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
          <StepOne />
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