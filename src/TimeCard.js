import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    maxWidth: 1135.5,
    backgroundColor: "#fff",
    fontSize: "14px",
    color: "black",
    boxSizing: "border-box",
    fontWeight: 500,
  },
  headerCell: {
    padding: "0 0 20px",
    border: "none",
    height: 44.5,
  },
  bodyThCell: {
    border: "none",
    height: 32,
    padding: "0 16px 0 0",
  },
  bodyCell: {
    padding: 0,
    border: "solid 1px #e7e7e8",
    width: 149,
    height: 32,
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

const statusColor = ["#fff", "#faedee", "#ffd8dc", "#ffa0a9"];

const bodyCell = [
  {
    body: [
      {
        number: 0,
        status: 1,
      },
      {
        number: 0,
        status: 2,
      },
      {
        number: 0,
        status: 4,
      },
      {
        number: 0,
        status: 1,
      },
      {
        number: 0,
        status: 1,
      },
      {
        number: 0,
        status: 3,
      },
      {
        number: 0,
        status: 1,
      },
    ],
    id: 1,
    hour: "1am",
  },
  {
    body: [
      {
        number: 1,
        status: 3,
      },
      {
        number: 1,
        status: 2,
      },
      {
        number: 1,
        status: 4,
      },
      {
        number: 1,
        status: 4,
      },
      {
        number: 1,
        status: 1,
      },
      {
        number: 1,
        status: 3,
      },
      {
        number: 1,
        status: 2,
      },
    ],
    id: 2,
    hour: "2am",
  },
  {
    body: [
      {
        number: 2,
        status: 1,
      },
      {
        number: 2,
        status: 2,
      },
      {
        number: 2,
        status: 1,
      },
      {
        number: 2,
        status: 1,
      },
      {
        number: 2,
        status: 1,
      },
      {
        number: 2,
        status: 2,
      },
      {
        number: 2,
        status: 1,
      },
    ],
    id: 3,
    hour: "3am",
  },
  {
    body: [
      {
        number: 3,
        status: 3,
      },
      {
        number: 3,
        status: 2,
      },
      {
        number: 3,
        status: 4,
      },
      {
        number: 3,
        status: 3,
      },
      {
        number: 3,
        status: 1,
      },
      {
        number: 3,
        status: 3,
      },
      {
        number: 3,
        status: 1,
      },
    ],
    id: 4,
    hour: "4am",
  },
  {
    body: [
      {
        number: 4,
        status: 2,
      },
      {
        number: 4,
        status: 2,
      },
      {
        number: 4,
        status: 4,
      },
      {
        number: 4,
        status: 4,
      },
      {
        number: 4,
        status: 1,
      },
      {
        number: 4,
        status: 3,
      },
      {
        number: 4,
        status: 1,
      },
    ],
    id: 5,
    hour: "5am",
  },
  {
    body: [
      {
        number: 5,
        status: 1,
      },
      {
        number: 5,
        status: 2,
      },
      {
        number: 5,
        status: 4,
      },
      {
        number: 5,
        status: 2,
      },
      {
        number: 5,
        status: 4,
      },
      {
        number: 5,
        status: 3,
      },
      {
        number: 5,
        status: 1,
      },
    ],
    id: 6,
    hour: "6am",
  },
];

function TimeCard() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
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
            <TableRow key={row.id}>
              <TableCell className={classes.bodyThCell} align="right">
                {row.hour}
              </TableCell>
              {row.body.map((item) => (
                <TableCell
                  className={classes.bodyCell}
                  align="center"
                  key={item}
                  style={{ backgroundColor: `${statusColor[item.status + 1]}` }}
                >
                  {item.number}
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
