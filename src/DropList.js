import { Box, ClickAwayListener, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useState } from "react";
import { useMemo } from "react";

const useStyles = makeStyles({
  rootCounting: {
    padding: "24px 32px 60px",
  },
});

function DropList() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const renderDropDown = useMemo(() => {}, []);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box className={classes.container}>
        <Box className={classes.selectContainer}>
          <Box className={classes.selectInput}></Box>
          <ArrowDropDownIcon />
          {renderDropDown}
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

export default DropList;
