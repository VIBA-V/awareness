import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import userData from "../userData";
const fs = require("fs");

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [form, setState] = useState({
    username: "",
    email: "",
    phoneNo: "",
    collage: "",
    states: "",
  });
  let student = {
    username: form.username,
    email: form.email,
    phoneNo: form.phoneNo,
    collage: form.collage,
    states: form.states,
  };

  let data = JSON.stringify(student);

  const printValues = (e) => {
    e.preventDefault();
    console.log(form.username, form.email);
  };

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            REGISTER HERE
          </Typography>
          <form className={classes.form} onSubmit={printValues} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              value={form.username}
              name="username"
              onChange={updateField}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={form.email}
              name="email"
              onChange={updateField}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Mobile"
              label="Mobile"
              value={form.phoneNo}
              name="Mobile"
              onChange={updateField}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={form.collage}
              name="userCollagename"
              onChange={updateField}
              label="Collage"
              id="Collage"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="State"
              value={form.state}
              onChange={updateField}
              label="State"
              id="State"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={fs.writeFile(userData, data, (err) => {
                if (err) throw err;
              })}
            >
              GET IN
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
