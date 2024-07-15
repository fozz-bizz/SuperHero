import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

const FeatureCard = ({ feature, properties }) => {
  const propertyValues = Object.values(properties)[0];
  return (
    <Paper sx={{ textAlign: "left", pt: 2, pl: 2, mb: 5 }}>
      <Typography fontSize={40}>{feature}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(propertyValues).map((property) => (
            <TableRow>
              <TableCell>{property[0]}</TableCell>
              <TableCell>{property[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default FeatureCard;
