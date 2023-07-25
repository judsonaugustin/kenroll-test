import React from "react";
import SolutionFive from "./SolutionFive";
import { Container, Grid, Typography, capitalize } from "@mui/material";
import SolutionFour from "./SolutionFour";
import SolutionThree from "./SolutionThree";
import SolutionTwo from "./SolutionTwo";
import SolutionOne from "./SolutionOne";

const inlineStyle = {
  color: "#c05251",
  fontSize: " 14px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: 1.3,
};

const Solutions = () => {
  return (
    <div>
      <Container>
        <Grid item container direction={"row"}>
          <Grid md={6}>
            <span style={inlineStyle}>Our Solutions</span>
            <Typography
              variant="h1"
              sx={{
                color: "#343434",
                fontSize: "48px",
                fontFamily: "DM Sans",
                fontWeight: 700,
                lineHeight: "68px",
                letterSpacing: -1.5,
                textTransform: "capitalize",
              }}
            >
              Going beyond just managing applications!
            </Typography>
          </Grid>
          <Grid md={6}>
            <hr
              style={{
                backgroundColor: "#C05251",
                marginBottom: "30px",
              }}
            />
            <Typography
              sx={{
                color: "#4c4c4c",
                fontFamily: "DM Sans",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "26px",
              }}
            >
              From attracting potential students to managing their applications,
              facilitating admissions decisions, and maintaining effective
              communication, our enrollment management system handles it all.
            </Typography>
          </Grid>
        </Grid>
        {/* <SolutionThree /> */}
        <SolutionOne />
        <SolutionTwo />
        <SolutionThree />
        <SolutionFour />
        <SolutionFive />
      </Container>
    </div>
  );
};

export default Solutions;
