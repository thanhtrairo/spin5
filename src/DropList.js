import {
  Box,
  Checkbox,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItem,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

const useStyles = makeStyles({
  container: {
    position: "relative",
    width: 636,
    height: 40,
  },
  dropWrapper: {
    position: "absolute",
    top: 52,
    left: 0,
    right: 0,
    width: "100%",
    height: 274,
    padding: "16px 16px 23px",
    borderRadius: "8px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#fff",
    overflowY: "auto",
  },
  inputRoot: {
    backgroundColor: "#fff",
    "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      border: "none",
      boxShadow: "0 0 10px 0 rgba(117, 115, 115, 0.16)",
    },
    "& .MuiOutlinedInput-input": {
      padding: "9px 13.7px 10px 14px",
      fontWeight: 500,
      color: "black",
    },
    borderRadius: 4,
  },
  listItem: {
    cursor: "pointer",
    height: "40px",
    "&:hover": {
      backgroundColor: "#f6f4f5",
      borderRadius: "8px",
    },
    padding: "10px 14px 9px 15px",
    display: "flex",
    justifyContent: "space-between",
  },
  itemLabel: {
    color: "black",
  },
  itemCheckbox: {
    width: 20,
    height: 20,
  },
});

const dataDropList = [
  "status1",
  "status2",
  "status3",
  "status4",
  "status5",
  "status6",
  "status7",
];

function DropList() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [textSelect, setTextSelect] = useState("status1");
  const [selectItems, setSelectItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleSelectAll = () => {};

  const handleSelectItem = (value, exist) => {
    let newValue = selectItems || [];
    if (!exist) newValue = [...selectItems, value];
    else newValue = selectItems.filter((item) => item !== value);
    if (newValue.length === dataDropList.length) setSelectAll(true);
    else setSelectAll(false);
    setSelectItems(newValue);
  };

  const isItemSelect = useCallback(
    (item) => {
      const exist = selectItems.includes(item);
      if (exist) return true;
      return false;
    },
    [selectItems]
  );

  const renderDropDown = useMemo(() => {
    if (open)
      return (
        <Box className={classes.dropWrapper}>
          <Box className={classes.dropContainer}>
            <Box className={classes.listContainer}>
              <List>
                <ListItem
                  className={classes.listItem}
                  onClick={() => handleSelectAll()}
                >
                  <Typography className={classes.itemLabel}>All</Typography>
                  <Checkbox className={classes.itemCheckbox} />
                </ListItem>
                {dataDropList.map((item) => {
                  const exist = isItemSelect(item);
                  return (
                    <ListItem
                      key={item}
                      className={classes.listItem}
                      onClick={() => handleSelectItem(item, exist)}
                    >
                      <Typography>{item}</Typography>
                      <Checkbox className={classes.itemCheckbox} />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>
      );
  }, [open]);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box className={classes.container}>
        <Box className={classes.selectContainer} onClick={handleOpen}>
          <Box className={classes.selectInput}>
            <TextField
              variant="outlined"
              className={classes.inputRoot}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDownIcon />
                  </InputAdornment>
                ),
              }}
              value={textSelect}
            />
          </Box>
        </Box>
        {renderDropDown}
      </Box>
    </ClickAwayListener>
  );
}

export default DropList;
