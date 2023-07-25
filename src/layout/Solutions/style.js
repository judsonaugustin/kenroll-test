import { styled, Typography, Grid } from "@mui/material";

const DetailsTypography = styled(Typography)({
  color: "#16171C",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "22px",
  letterSpacing: -0.4,
});
const MainTitleTypography = styled(Typography)({
  color: " #16171c",
  fontSize: "48px",
  fontWeight: 500,
  lineHeight: "62px",
  letterSpacing: -1.5,
  marginBottom: "10px",
});
const DescriptionTypography = styled(Typography)({
  color: "#2b2f37",
  fontFamily: "DM Sans",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "28px",
  // marginRight: "30px",
});
const MainGrid = styled(Grid)({
  paddingBottom: " 100px",
  display: "flex",
  alignItems: "center",
});
const MobileDetailsTypography = styled(Typography)({
  color: "#16171C",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "17px",
  letterSpacing: -0.3,
});
const MobileMainTitleTypography = styled(Typography)({
  color: " #16171c",
  fontSize: "28px",
  fontWeight: 500,
  lineHeight: "34px",
  letterSpacing: -1,
  marginBottom: "20px",
});
const MobileDescriptionTypography = styled(Typography)({
  color: "#2B2F37",
  fontFamily: "DM Sans",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  marginBottom: "20px",
});
const MobileMainGrid = styled(Grid)({
  paddingBottom: " 100px",
  display: "flex",
  alignItems: "center",
});

export {
  DescriptionTypography,
  MainTitleTypography,
  MainGrid,
  DetailsTypography,
  MobileDescriptionTypography,
  MobileMainTitleTypography,
  MobileMainGrid,
  MobileDetailsTypography,
};
