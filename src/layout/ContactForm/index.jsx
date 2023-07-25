import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const InlineStyle = {
  backgroundColor: "#ffffff00",
  width: "100%",
  border: "none",
  borderBottom: "1px solid #C0E5FF",
  padding: "20px 10px",
  color: "#C0E5FF",
  fontSize: "18px",
  // fontWeight: "700",
};

const StyledTypography = styled(Typography)({
  color: "white",
  fontWeight: "700",
  letterSpacing: -1,
  marginBottom: "10px",
});
const StyledBox = styled(Box)({
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  position: "sticky",
  marginBottom: "-150px",
});
const ContactForm = () => {
  return (
    <>
      <CssBaseline />
      <StyledBox
        display={"flex"}
        className="blue-gradient"
        width={{ md: "80%" }}
        borderRadius={{ md: "12px" }}
      >
        <Grid
          container
          spacing={1}
          py={{ xs: "50px", md: "50px" }}
          px={{ xs: "20px", sm: "50px", md: "100px" }}
        >
          <Grid item sx={12} md={6} minWidth={0}>
            <Box sx={{ width: "100%" }}>
              <StyledTypography
                fontSize={{ xs: "34px", md: "54px" }}
                // sx={{ fontWeight: 700 }}
              >
                Book a Demo
              </StyledTypography>
              <Typography
                fontSize={{ xs: "14px", md: "18px" }}
                lineHeight={{ md: "28px" }}
                mb={"10px"}
                sx={{
                  color: "white",
                  fontWeight: 400,
                  maxWidth: "400px",
                }}
              >
                Stay Organized, Streamline Admissions and <br /> Engage
                Effectively
              </Typography>
            </Box>
          </Grid>
          <Grid item sx={12} md={6} minWidth={0}>
            <Box sx={{ width: "100%" }}>
              <input style={InlineStyle} type="text" placeholder="Name*" />
              <input style={InlineStyle} type="text" placeholder="Email*" />
              <input style={InlineStyle} type="text" placeholder="Phone*" />

              <Button style={{ marginTop: "50px" }} variant="outlined">
                Book a Demo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
};

export default ContactForm;
