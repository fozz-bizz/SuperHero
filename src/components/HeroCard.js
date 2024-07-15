import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroCard = ({ hero, clickCard }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/detail");
    clickCard(hero);
  };

  return (
    <Card onClick={handleCardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={hero.image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hero.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
