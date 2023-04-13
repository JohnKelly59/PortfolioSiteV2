import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import Zoom from "@mui/material/Zoom";
import { SuccessAlert, FailureAlert } from "../components/Alerts";

export default function Contact(props) {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failureOpen, setFailureOpen] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const contentStyles = {
    height: "100vh",
    paddingTop: "100px",
    backgroundColor: "#FF8283",
    paddingBottom: 40,
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
    setFailureOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let template = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        "service_56sbgo6",
        "template_hib5pll",
        template,
        "user_MAPnewD6fcXNOZxvQGLnv"
      )
      .then(
        (result) => {
          setSuccessOpen(true);
        },
        (error) => {
          setFailureOpen(true);
        }
      );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    const formValues = Object.values({ ...formData, [id]: value });
    const allFilled = formValues.every((field) => field !== "");
    setFormValid(allFilled);
  };

  return (
    <>
      <SuccessAlert open={successOpen} handleClose={handleClose} />
      <FailureAlert open={failureOpen} handleClose={handleClose} />
      <Box style={contentStyles}>
        <Typography variant="h1" align="center" color="#FEEB75">
          Contact
        </Typography>
        <Zoom in={true} timeout={800}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 6, width: "85ch", height: "750px" },
            }}
            noValidate
            autoComplete="off"
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Paper sx={{ m: 5, p: 5 }} elevation={3}>
              <Stack
                sx={{ m: 5 }}
                direction={"column"}
                spacing={5}
                textAlign="center"
              >
                <Typography variant={"h5"}>Contact Form</Typography>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  type="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={5}
                  id="message"
                  label="Message"
                  variant="outlined"
                  onChange={handleChange}
                />
                <Button type="submit" variant="outlined" disabled={!formValid}>
                  Submit
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Zoom>
      </Box>
    </>
  );
}
