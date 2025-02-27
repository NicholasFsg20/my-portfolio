import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 8 }}>
                            <Typography color="primary" variant="h1" textAlign="center">Nicholas Ferreira Souza Gomes</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I'm a Copmuter Engineer student</Typography>
                            <Grid2 container display="flex" justifyContent="center">
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <MailOutlineIcon />
                                        Contact me
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            size=4
                        </Grid2>
                    </Grid2>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
