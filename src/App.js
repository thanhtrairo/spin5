import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import React from "react";
import DetailList from "./DetailList";
import TimeCard from "./TimeCard";

const useStyles = makeStyles({
  rootCounting: {
    padding: "24px 32px 60px",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Box className={classes.rootCounting}>
      <TimeCard />
    </Box>
  );
}
