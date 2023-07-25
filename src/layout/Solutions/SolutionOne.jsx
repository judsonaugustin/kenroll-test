import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { UnderLine, mobileOne } from "../../assets";
import { SolutionContent } from "../../constant/data";
import { theme } from "../../utils/Themes/Theme";
import {
  DescriptionTypography,
  DetailsTypography,
  MainGrid,
  MainTitleTypography,
  MobileDescriptionTypography,
  MobileDetailsTypography,
  MobileMainGrid,
  MobileMainTitleTypography,
} from "./style";

const SolutionOne = () => {
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      {isMobileScreen ? (
        <>
          <MobileMainGrid items container>
            <Grid sx={12} sm={6} minWidth={0}>
              <span style={{ color: "red", marginLeft: "20px" }}>01.</span>
              <Grid px={"20px"}>
                <MobileMainTitleTypography variant="h1">
                  Fostering long-term{" "}
                  <span style={{ position: "relative", paddingBottom: "15px" }}>
                    Engagement
                    <img
                      style={{ position: "absolute", bottom: 0, left: 0 }}
                      src={UnderLine}
                      alt=""
                    />
                  </span>
                </MobileMainTitleTypography>
                <MobileDescriptionTypography>
                  Streamline admissions, stay organized and drive effective
                  engagement with our comprehensive suite of services. From
                  creating programs and schedules to handling new enrollments,
                  run your business with unprecedented efficiency.
                </MobileDescriptionTypography>
              </Grid>
              <Grid sx={12} sm={6} minWidth={0}>
                <img src={mobileOne} width={"100%"} alt="" />
              </Grid>
              <Grid sx={{ display: "flex", flexWrap: "wrap", px: "20px" }}>
                {SolutionContent.map((item) => {
                  return (
                    <Grid xs={6} padding={"25px 25px 0 0"}>
                      <img src={item.icon} alt="" />
                      <hr />
                      <MobileDetailsTypography>
                        {item.details}
                      </MobileDetailsTypography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </MobileMainGrid>
        </>
      ) : (
        <>
          {" "}
          <MainGrid items container>
            <Grid
              sm={12}
              md={6}
              minWidth={0}

              //   sx={{
              //     backgroundColor: "#EEF2FF",
              //     borderRadius: "0px 100px 100px 0px",
              //   }}
            >
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#EEF2FF",
                  height: "100%",
                  width: "600px",
                  // position: "absolute",
                  zIndex: 2,
                  // position: "absolute",
                }}
              />
              <img src={mobileOne} alt="" />
            </Grid>
            <Grid sm={12} md={6} minWidth={0} px={{ sm: "30px" }}>
              <span style={{ color: "red" }}>01.</span>
              <MainTitleTypography variant="h1">
                Fostering long-term{" "}
                <span style={{ position: "relative", paddingBottom: "20px" }}>
                  Engagement
                  <img
                    style={{ position: "absolute", bottom: 0, left: 0 }}
                    src={UnderLine}
                    width={"100%"}
                    alt=""
                  />
                </span>
              </MainTitleTypography>
              <DescriptionTypography>
                Streamline admissions, stay organized and drive effective
                engagement with our comprehensive suite of services. From
                creating programs and schedules to handling new enrollments, run
                your business with unprecedented efficiency.
              </DescriptionTypography>
              <Grid
                // px={{ sm: "30px" }}
                sx={{ display: "flex", flexWrap: "wrap" }}
              >
                {SolutionContent.map((item) => {
                  return (
                    <Grid sm={6} md={4} padding={"30px 30px 0 0"}>
                      <img src={item.icon} alt="" />
                      <hr />
                      <DetailsTypography>{item.details}</DetailsTypography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </MainGrid>
        </>
      )}
    </div>
  );
};

export default SolutionOne;
