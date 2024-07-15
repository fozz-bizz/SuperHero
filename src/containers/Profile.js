import { Box } from "@mui/material";
import ProfileHeader from "../components/Profile/ProfileHeader";
import FeatureCard from "../components/Profile/FeatureCard";

const Profile = ({ hero }) => {
  if (hero) {
    const { name, powerstats, biography, appearance, image } = hero;
    return (
      <Box sx={{ mt: 3, gap: 2 }}>
        <ProfileHeader name={name} image={image}></ProfileHeader>
        <FeatureCard
          feature={"Appearance"}
          properties={{ appearance }}
        ></FeatureCard>
        <FeatureCard
          feature={"PowerStats"}
          properties={{ powerstats }}
        ></FeatureCard>
        <FeatureCard
          feature={"Biography"}
          properties={{ biography }}
        ></FeatureCard>
        <FeatureCard
          feature={"Appearance"}
          properties={{ appearance }}
        ></FeatureCard>
      </Box>
    );
  }
};

export default Profile;
