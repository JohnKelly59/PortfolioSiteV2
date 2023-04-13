import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function Footer({ props }) {
  return (
    <>
      <Box>
        <Paper elevation={2} sx={{ backgroundColor: "black", color: "white" }}>
          <Grid xs={12} md={12}>
            <Stack justifyContent="center" direction="row" spacing={2}>
              <IconButton
                size="large"
                color="inherit"
                href="https://www.linkedin.com/in/john-kelly-engineer/"
              >
                <LinkedInIcon sx={{ fontSize: 40, color: "#5BC5FF" }} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                href="https://github.com/JohnKelly59"
              >
                <GitHubIcon sx={{ fontSize: 40, color: "#A0EC70" }} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                to="#"
                onClick={(e) => {
                  window.location.href = "tel:404.994.7727";
                  e.preventDefault();
                }}
              >
                <CallIcon sx={{ fontSize: 40, color: "#FEEB75" }} />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:john.kellyfitness@gmail.com";
                  e.preventDefault();
                }}
              >
                <EmailIcon sx={{ fontSize: 40, color: "#FF8283" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
