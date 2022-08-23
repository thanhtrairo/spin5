import { Box, Checkbox, ClickAwayListener, InputAdornment, List, ListItem, makeStyles, TextField, Typography } from '@material-ui/core'
import { ArrowDropDown, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '100%',
  },
  dropWrapper: {
    position: 'absolute',
    zIndex: 10,
    top: 52,
    left: 0,
    right: 0,
    width: '100%',
    maxHeight: 274,
    padding: '16px 16px 23px',
    borderRadius: '8px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#fff',
    overflowY: 'auto',
  },
  inputRoot: {
    backgroundColor: '#fff',
    '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
      border: 'none',
      boxShadow: '0 0 10px 0 rgba(117, 115, 115, 0.16)',
    },
    '& .MuiOutlinedInput-input': {
      padding: '0 0 0 16px',
      height: 48,
      fontWeight: 500,
      color: 'black',
    },
    borderRadius: 4,
  },
  searchTextField: {
    '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      boxShadow: '0 0 10px 0 rgba(117, 115, 115, 0.16)',
    },
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  listItem: {
    cursor: 'pointer',
    height: '40px',
    '&:hover': {
      backgroundColor: '#f6f4f5',
      borderRadius: '8px',
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#ec1b2e',
    },
    padding: '10px 14px 9px 15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  itemLabel: {
    color: 'black',
    fontFamily: 'Sarabun',
  },
  itemCheckbox: {
    width: 20,
    height: 20,
  },
})

const dataDropList = ['status1', 'status2', 'status3', 'status4', 'status5', 'status6', 'status7']

function DropList(props) {
  const classes = useStyles()

  const { isAvailable } = props

  const [open, setOpen] = useState(false)
  const [textSelect, setTextSelect] = useState(dataDropList[0])
  const [selectItems, setSelectItems] = useState([dataDropList[0]])
  const [selectAll, setSelectAll] = useState(false)
  const [textSearch, setTextSearch] = useState('')

  useEffect(() => {
    if (isAvailable) {
      setTextSelect('The Store is not Available')
    } else {
      if (selectItems.length === 1) {
        setTextSelect(selectItems[0])
      } else if (selectItems.length > 1 && selectItems.length !== dataDropList.length) {
        setTextSelect(`Select ${selectItems.length} Store`)
      } else if (selectItems.length === dataDropList.length) {
        setTextSelect('All Store')
      } else {
        setTextSelect('Select status')
      }
    }
  }, [selectItems])

  useEffect(() => {
    if (!open) {
      setTextSearch('')
    }
  })

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectItems(dataDropList)
    } else {
      setSelectItems([])
    }
    setSelectAll(checked)
  }

  const handleSelectItem = (value, exist) => {
    let newValue = selectItems || []
    if (!exist) {
      newValue = [...selectItems, value]
    } else {
      newValue = selectItems.filter((item) => item !== value)
    }
    if (newValue.length === dataDropList.length) {
      setSelectAll(true)
    } else {
      setSelectAll(false)
    }
    setSelectItems(newValue)
  }

  const isItemSelect = useCallback(
    (item) => {
      const exist = selectItems.includes(item)
      if (exist) return true
      return false
    },
    [selectItems]
  )

  const handleTextSearchChange = (e) => {
    setTextSearch(e.target.value)
  }

  const renderDropDown = useMemo(() => {
    if (open && !isAvailable)
      return (
        <Box className={classes.dropWrapper}>
          <Box className={classes.dropContainer}>
            <Box className={classes.listContainer}>
              <TextField
                className={classes.searchTextField}
                fullWidth
                size={'small'}
                variant="outlined"
                placeholder={'search'}
                onChange={handleTextSearchChange}
                inputProps={{ maxLength: 50 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search fontSize="small" style={{ color: '#8D8E91' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <List>
                <ListItem className={classes.listItem} onClick={() => handleSelectAll(!selectAll)}>
                  <Typography className={classes.itemLabel}>All</Typography>
                  <Checkbox className={classes.itemCheckbox} checked={selectAll} />
                </ListItem>
                {dataDropList.map((item) => {
                  const exist = isItemSelect(item)
                  return (
                    <ListItem key={item} className={classes.listItem} onClick={() => handleSelectItem(item, exist)}>
                      <Typography className={classes.itemLabel}>{item}</Typography>
                      <Checkbox className={classes.itemCheckbox} checked={exist} />
                    </ListItem>
                  )
                })}
              </List>
            </Box>
          </Box>
        </Box>
      )
  }, [open, selectItems])
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
                    <ArrowDropDown />
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
  )
}

export default DropList
