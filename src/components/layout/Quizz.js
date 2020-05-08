import React from "react";
import Grid from "@material-ui/core/Grid";
import Timer from "./utils/Timer";
import { makeStyles, useTheme, useEffect } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";
import Result from "./Result";
import "./layout.css";
import img1 from "./images/1.png";
import img2 from "./images/9.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import doc from "./images/doc.png";
import dist from "./images/dist.png";
import work from "./images/work.png";
import preq from "./images/preqs.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
const steps = data;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#FFFFFF",
  },
  image: {
    marginLeft: "12%",
    marginTop: "7%",
    width: "70%",
    height: "70",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: "-6vh",
    left: "39%",
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
  roots: {
    Width: 400,
    flexGrow: 1,
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const userData = [];
  const [activeStep, setActiveStep] = React.useState(0);
  const [answer, setAnswer] = React.useState(steps[activeStep].options);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [scores, setScores] = React.useState(0);
  const [responce, setResponce] = React.useState(0);
  const [result, setResult] = React.useState(true);
  const [form, setState] = React.useState({
    username: "",
    email: "",
    mobile: "",
    collage: "",
    state: "",
  });
  const [register, setRegister] = React.useState(true);
  const maxSteps = steps.length;
  const images = [
    img1,
    img8,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];
  const bimg = [
    doc,
    doc,
    doc,
    doc,
    doc,
    work,
    work,
    work,
    work,
    work,
    dist,
    dist,
    dist,
    dist,
    dist,
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setAnswer(steps[activeStep + 1].options);
    setSelected(null);
  };

  const handleBack = () => {
    setAnswer(steps[activeStep].options);
    setSelected(null);
    setScore(scores - 1);
    setResponce((responce) => responce - 1);
  };
  const handleClick = (select) => {
    if (select === steps[activeStep].answer) {
      setScore((score) => score + 1);
      setScores(score + 1);
    }
    setResponce(responce < 15 ? responce + 1 : 15);
  };

  let datas = JSON.stringify(form);
  userData.push(datas);

  const printValues = (e) => {
    e.preventDefault();
    setRegister(true);
  };
  console.log(userData);

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const timeoutFn = () => {
    setResult(false);
  };
  console.log(result);
  return (
    <div>
      {register ? (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7}>
            <img src={preq} alt="precautions" className={classes.image} />
          </Grid>
          <Grid
            item
            xs={false}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className="login"
          >
            <div className={classes.paper} style={{ fontSize: "3vh" }}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon fontSize="large" />
              </Avatar>
              <Typography component="h1" variant="h4">
                Register here for Certification
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
                  type="email"
                  onChange={updateField}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  value={form.mobile}
                  name="mobile"
                  type="number"
                  onChange={updateField}
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="collage"
                  label="Collage"
                  name="college"
                  onChange={updateField}
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  onChange={updateField}
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => setRegister(false)}
                >
                  GET IN
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      ) : result ? (
        <div>
          <Grid container xs={12} className="mroot">
            <Grid item xs className="root">
              <Grid container xs={12}>
                <Grid item xs={1}>
                  <div className="arrow">
                    <Link to="/">
                      <ArrowBackIosRoundedIcon
                        style={{ fontSize: "4.5vh", color: "#422057FF" }}
                      />
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className="arrow">
                    <h2>
                      <bold style={{ color: "#F93822FF", fontSize: "5vh" }}>
                        #
                      </bold>
                      {"  "}COVID Quizz
                    </h2>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="arrow">
                    <button className="but" onClick={() => setResult(false)}>
                      Submit
                    </button>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Paper square elevation={5} className="card">
                    <Avatar
                      alt="COVID"
                      src={images[activeStep]}
                      className={classes.large}
                    />
                    <div>
                      <Timer duration={600} timeoutFn={() => timeoutFn} />
                    </div>

                    <div className="header">
                      <h1 style={{ color: "#422057FF" }}>
                        Question {activeStep + 1}
                      </h1>
                      <div className="line"></div>
                      <h1>{steps[activeStep].question}</h1>
                    </div>
                    <div className="options">
                      {answer.map((option, id) => (
                        <li
                          key={id}
                          onClick={() => {
                            setAnswer([option]);
                            setSelected(option);
                            handleClick(option);
                          }}
                        >
                          {id + 1}. {option}
                        </li>
                      ))}
                    </div>
                    <MobileStepper
                      steps={maxSteps}
                      variant="text"
                      activeStep={activeStep}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        backgroundColor: "#FFFFFF",
                        borderRadius: "17px",
                        fontSize: "2vh",
                      }}
                      nextButton={
                        <Button
                          size="larger"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                        >
                          <h1>Next</h1>
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button
                          size="larger"
                          onClick={handleBack}
                          disabled={selected === null}
                        >
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          <h1>Back</h1>
                        </Button>
                      }
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className="grid2">
              <h1>{steps[activeStep].Title}</h1>
              <img src={bimg[activeStep]} />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <Result score={score} userName={form.username} email={form.email} />
        </div>
      )}
    </div>
  );
}
