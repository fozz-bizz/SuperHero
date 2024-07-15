import { Box, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { QUESTIONS } from "../mock";
import Question from "../components/Question";
import HeroCard from "../components/HeroCard";

const Search = ({ heros, setQuery, clickCard }) => {
  return (
    <Box sx={{ pt: 5 }}>
      <Carousel
        autoPlay={false}
        animation="slide"
        duration={800}
        navButtonsAlwaysVisible={true}
      >
        {QUESTIONS.map((question) => (
          <Question
            key={`${question.question}`}
            question={question}
            setQuery={setQuery}
          ></Question>
        ))}
      </Carousel>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {heros.map((hero, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <HeroCard hero={hero} clickCard={clickCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;
