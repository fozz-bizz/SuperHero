import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useState } from "react";

const Question = ({ question, setQuery }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (e) => {
    const { feature, property } = question;
    const value = e.target.value;
    const newValue = selectedOption === value ? "" : value;
    setSelectedOption(newValue);
    setQuery({ [`${feature}_${property}`]: newValue });
  };

  return (
    <Box>
      <Typography sx={{ fontSize: { xs: "30px", md: "40px" } }}>
        {question.question}
      </Typography>
      <FormControl sx={{ pb: 3 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {question.feature}
        </FormLabel>
        <RadioGroup
          row={isMdUp}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectedOption}
          onChange={handleSelect}
        >
          {question.options.map((option, index) => (
            <FormControlLabel
              key={`${index}${option}`}
              value={option}
              control={<Radio />}
              label={option}
            >
              <Radio
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </FormControlLabel>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Question;
