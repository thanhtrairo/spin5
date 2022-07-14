import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: "1135.5px",
    borderRadius: "8px",
    backgroundColor: "#f6f4f5",
    fontSize: "14px",
    color: "black",
    boxSizing: "border-box",
  },
  imageCustomer: {
    width: 110,
    height: 80,
  },
  headerCell: {
    fontWeight: "bold",
    padding: 0,
    borderBottom: "0.5px solid #8d8e91",
  },
  bodyCell: {
    fontWeight: 500,
    padding: 0,
    borderBottom: "0.5px solid #8d8e91",
  },
  iconEvent: {
    width: 24,
    height: 24,
    color: "#ec1b2e",
  },
  rootIcon: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
  },
});

const headerCells = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const bodyCell = [
  {
    number: [0, 1, 4, 2, 4, 4, 5],
    status: [0, 3, 4, 2, 1, 4, 2],
    id: 1,
    hour: 1,
  },
  {
    number: [0, 1, 4, 2, 4, 4, 5],
    status: [0, 3, 4, 2, 1, 4, 2],
    id: 1,
    hour: 2,
  },
  {
    number: [0, 1, 4, 2, 4, 4, 5],
    status: [0, 3, 4, 2, 1, 4, 2],
    id: 1,
    hour: 3,
  },
  {
    number: [0, 1, 4, 2, 4, 4, 5],
    status: [0, 3, 4, 2, 1, 4, 2],
    id: 1,
    hour: 4,
  },
  {
    number: [0, 1, 4, 2, 4, 4, 5],
    status: [0, 3, 4, 2, 1, 4, 2],
    id: 1,
    hour: 5,
  },
  {
    number: [0, 1, 4, 2, 4, 4, 5],
    status: [0, 3, 4, 2, 1, 4, 2],
    id: 1,
    hour: 6,
  },
];

const headerColumnsCell = ["1", "2", "3", "4", "5", "6"];

function TimeCard() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ height: "60px" }}>
            {headerCells.map((headerCell) => (
              <TableCell
                className={classes.headerCell}
                align="center"
                key={headerCell}
              >
                {headerCell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyCell.map((row) => (
            <TableRow key={row.id} style={{ height: "100px" }}>
              <TableCell className={classes.bodyCell} align="center">
                {row.hour}
              </TableCell>
              {row.number.map((number) => (
                <TableCell
                  className={classes.bodyCell}
                  align="center"
                  key={number}
                >
                  {number}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TimeCard;
