import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolas Cuellar</title>
        <meta name="description" content="Nicolas cuellar porfolio web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container sx={{ p: 3, justifyContent: "space-evenly" }}>
          <Grid item sx={{ display: "grid" }}>
            <Stack spacing={2} sx={{ my: "auto", maxWidth: 400 }}>
              <Typography
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: 2,
                  textAlign: "center",
                  width: "max-content",
                  py: 0.5,
                  px: 1,
                  color: "background.default",
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography sx={{}} variant="h4">
                MERN Stack
              </Typography>
              <Typography sx={{ color: "text.secondary" }} variant="body1">
                Hi there! I&apos;m Nicolas Cuellar, a software engineer based in
                Bogota, Colombia.
              </Typography>
              <Button
                variant="text"
                sx={{ width: "max-content" }}
                endIcon={<ArrowForwardIosRounded />}
              >
                See my work
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Image
              src="/images/profile.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </main>
    </>
  );
}
