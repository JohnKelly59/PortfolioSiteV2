import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { Box, Container, Paper } from "@mui/material";
import projects from "../../projects.json";
import Zoom from "@mui/material/Zoom";

export default function AboutMe() {
  const contentStyles = {
    paddingTop: "100px",
    backgroundColor: "#FEEB75",
    paddingBottom: 40,
    overflowY: "auto",
  };

  return (
    <>
      <Box style={contentStyles}>
        <Typography variant="h1" align="center" color="#FF8283">
          About Me
        </Typography>
        <Zoom in={true} timeout={800}>
          <Container maxWidth="lg">
            <Paper elevation={10} style={{ padding: "2rem" }}>
            <Typography variant="h4" gutterBottom>
    "Hello! I'm John Kelly, a full-stack developer who's been in love with coding ever since I wrote my first JavaScript function. The magic of turning coffee into code and solving complex problems through technology keeps me hooked every day."
</Typography>
<Typography variant="h5" gutterBottom color="textSecondary">
    My Journey
</Typography>
<Typography variant="body1" paragraph>
    "I started my journey into the tech world right out of college, joining Cabem, Real Synch, and Ideal Therapy. These diverse roles helped me nurture my skills in various programming languages and tech stacks while also teaching me the value of teamwork, innovation, and precision."
</Typography>
<Typography variant="h5" gutterBottom color="textSecondary">
    My Toolbox
</Typography>
<Typography variant="body1" paragraph>
    "I've always believed that a great developer is not just about the number of languages they can code in, but how effectively they can solve problems. I consider myself lucky to have had the opportunity to work with a wide array of tools from JavaScript, Python, Node.js to cloud services like AWS, giving me the versatility to approach any problem from multiple angles."
</Typography>
<Typography variant="h5" gutterBottom color="textSecondary">
    My Passion
</Typography>
<Typography variant="body1" paragraph>
    "One thing I truly value is the opportunity to continue learning and improving. The tech world is ever-evolving, and every new project brings a new challenge and a chance to learn something new. I am committed to bringing enthusiasm, dedication, and a relentless pursuit of excellence to every project I work on."
</Typography>
<Typography variant="h5" gutterBottom color="textSecondary">
    My Vision
</Typography>
<Typography variant="body1">
    "As a developer, my main goal is to create robust, efficient, and scalable applications that not only fulfill the client's needs but go beyond to exceed their expectations. I want to make technology more accessible, user-friendly, and efficient - one line of code at a time."
</Typography>
            </Paper>
          </Container>
        </Zoom>
      </Box>
    </>
  );
}
