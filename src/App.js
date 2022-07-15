import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import TimeCard from "./TimeCard";
import DropList from "./DropList";
import Chart from "./Chart";
import DetailList from "./DetailList";

const useStyles = makeStyles({
  rootCounting: {
    padding: "24px 32px 60px",
    color: "black",
  },
  rootDropList: {
    display: "flex",
    alignItems: "center",
    gap: 32,
  },
  labelDropList: {
    fontWeight: "bold",
  },
  buttonCustom: {
    padding: "10px 43px 9px 42px",
    borderRadius: "4px",
    backgroundColor: "#ec1b2e",
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "normal",
    "&:hover": {
      backgroundColor: "#ec1b2e",
      opacity: 0.8,
    },
  },
  rootBody: {
    padding: "24px 54px 40px 24px",
    borderRadius: "12px",
    boxShadow: "0 0 20px 0 rgba(117, 115, 115, 0.16)",
    backgroundColor: "#fff",
    marginTop: 32,
  },
  titleCatagories: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Box className={classes.rootCounting}>
      <Box style={{ display: "flex" }}>
        <Box className={classes.rootDropList}>
          <Typography className={classes.labelDropList}>Area</Typography>
          <DropList />
        </Box>
        <Box
          className={classes.rootDropList}
          style={{ margin: "0 32px 0 55px" }}
        >
          <Typography className={classes.labelDropList}>Store</Typography>
          <DropList />
        </Box>
        <Box>
          <Button className={classes.buttonCustom}>Apply</Button>
        </Box>
      </Box>
      <Box style={{ display: "flex" }}>
        <Box>
          <Box className={classes.rootBody}>
            <Box>
              <Typography className={classes.titleCatagories}>
                Typical Chart
              </Typography>
              <Chart />
            </Box>
            <Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "40px 0 32px",
                }}
              >
                <Typography className={classes.titleCatagories}>
                  Time Card
                </Typography>
                <Button
                  className={classes.buttonCustom}
                  style={{ padding: "10px 11px 9px 10px" }}
                >
                  Download CSV
                </Button>
              </Box>
              <Box>
                <TimeCard />
              </Box>
            </Box>
          </Box>
          <Box
            className={classes.rootBody}
            style={{ padding: "24px 24px 32px" }}
          >
            <Typography
              className={classes.titleCatagories}
              style={{ marginBottom: "24px" }}
            >
              Detail List
            </Typography>
            <DetailList />
          </Box>
        </Box>
        <Box
          className={classes.rootBody}
          style={{ width: "400px", marginLeft: "32px" }}
        ></Box>
      </Box>
    </Box>
  );
}
