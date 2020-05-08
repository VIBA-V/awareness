import React from "react";
import "./layout.css";
import Grid from "@material-ui/core/Grid";
import trophy from "./images/trophy.jpg";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import data from "../data.json";
import Typography from "@material-ui/core/Typography";

const Result = ({ score, userName, email }) => (
  <div className="grids">
    <Grid
      container
      sm={12}
      xs={12}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "3vh",
        borderRadius: "16px",
      }}
      spacing={12}
    >
      <Grid item sm={7} xs={12} className="trophy">
        <Grid container sm={12} spacing={5}>
          <Grid item sm={12} xs={12}>
            <Paper elevation={0} className="images">
              <img src={trophy} alt="Trophy" />
              <Typography
                variant="h4"
                style={{ color: "#422057FF", textAlign: "center" }}
              >
                CONGRATULATIONS...!
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={12} xs={12} calssName="grids2">
            <Paper elevation={5} className="score" style={{ padding: "2vh" }}>
              <h1>
                {userName} Your Score is : {score}
              </h1>
              <h2>
                {score < 5 ? (
                  <Typography variant="h3" style={{ margin: "1vh" }}>
                    Beaware of COVID-19 no
                  </Typography>
                ) : score < 10 ? (
                  <Typography
                    variant="h3"
                    style={{ margin: "1vh", color: "#f93822ff" }}
                  >
                    Well Done...! Participation
                  </Typography>
                ) : (
                  <Typography variant="h3" style={{ margin: "1vh" }}>
                    Great...! Merit
                  </Typography>
                )}
                Certificate is sent to {email}
              </h2>
              <Button
                variant="outlined"
                color="secondary"
                style={{ padding: "1vh" }}
              >
                Download Certificate
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={5} xs={12} className="grids3">
        <Paper className="box" elevation={0}>
          <Typography
            variant="h3"
            style={{
              color: "#422057FF",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "3vh",
              color: "orange",
            }}
          >
            Review Questions
          </Typography>
          {data.map((ques, index) => (
            <Paper elevation={5} className="review">
              <Typography variant="h4" style={{ margin: "1vh" }}>
                {index + 1} {ques.question}
              </Typography>
              <Typography variant="h5">Ans. {ques.answer}</Typography>
            </Paper>
          ))}
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Result;
