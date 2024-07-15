import { Box, styled, Typography } from "@mui/material";

const ProfileHeader = ({ name, image }) => {
  const StyledImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "auto",
    border: "5px solid black",
    borderRadius: "50%",
    background: `url(${image.url}) no-repeat center center`,
    backgroundSize: "cover",
    [theme.breakpoints.up("xs")]: {
      width: "150px",
      height: "150px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      height: "200px"
    },
    [theme.breakpoints.up("md")]: {
      width: "300px",
      height: "300px"
    }
  }));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        border: "1px solid #0288d1",
        borderRadius: "50% 0 0 50%"
      }}
    >
      <StyledImage />
      <Typography sx={{ fontSize: { xs: 50, sm: 70, md: 90 } }}>
        {name}
      </Typography>
    </Box>
  );
};

export default ProfileHeader;
