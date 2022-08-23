import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { Pagination } from '@material-ui/lab'
import React, { useState } from 'react'
import SearchBar from '../SearchBar'
import ModalMessage from './ModalMessage'

const useStyles = makeStyles({
  table: {
    width: '100%',
    borderRadius: 12,
    boxShadow: '0 0 20px 0 rgba(117, 115, 115, 0.16)',
    backgroundColor: '#fff',
  },
  headerCell: {
    fontFamily: 'Sarabun',
    fontWeight: 'bold',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  bodyRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  bodyCell: {
    '&.MuiTableCell-root': {
      borderBottom: 'none',
    },
  },
  label: {
    fontFamily: 'Sarabun',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },
  pagination: {
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: '#ec1b2e',
      color: '#f9fafc',
    },
    '& .MuiPaginationItem-root': {
      fontFamily: 'Sarabun',
      color: '#8d8e91',
    },
    '& li:first-child > button::after': {
      content: 'previous',
    },
  },
  titleCatagories: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Sarabun',
    letterSpacing: 'normal',
  },
  buttonCustom: {
    padding: '10px 43px 9px 42px',
    borderRadius: '4px',
    backgroundColor: '#ec1b2e',
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: 'normal',
    fontFamily: 'Sarabun',
    letterSpacing: 'normal',
    whiteSpace: 'nowrap',
    width: 125,
    '&:hover': {
      backgroundColor: '#ec1b2e',
      opacity: 0.8,
    },
  },
})

const SwitchCustom = withStyles((theme) => ({
  root: {
    width: 64,
    height: 32,
    padding: 0,
    display: 'flex',
    marginRight: 14,
  },
  switchBase: {
    padding: 2,
    color: '#8d8e91',
    '&$checked': {
      transform: 'translateX(12px)',
      marginLeft: 22,
      color: '#ec1b2e',
      '& + $track': {
        backgroundColor: '#e7e7e8',
        opacity: 1,
        borderColor: 'none',
      },
    },
  },
  thumb: {
    width: 26,
    height: 26,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 12,
    backgroundColor: '#e7e7e8',
    opacity: 1,
  },
  checked: {},
}))(Switch)

function Uniform(props) {
  const classes = useStyles()

  const { dataRow, headerCell, title, buttonText, isSearch, message } = props

  const [checked, setChecked] = useState(true)
  const [isCheck, setIsCheck] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [customerPerPage, setCustomerPerPage] = useState(10)
  const [modalMessage, setModalMessage] = useState(false)

  const handleChangeSwitch = () => {
    setIsCheck(!isCheck)
  }

  const handleOnChangePage = (e, page) => {
    setCurrentPage(page)
  }

  const handleChangePageOption = (e) => {
    setCustomerPerPage(e.target.value)
  }

  const handleDelete = () => {
    setModalMessage(true)
  }

  const handleCloseMessage = () => {
    setModalMessage(!modalMessage)
  }

  return (
    <Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24.5 }}>
        <Box style={{ display: 'flex', gap: 56, alignItems: 'center' }}>
          <Typography className={classes.titleCatagories}>{title}</Typography>
          {isSearch && <SearchBar placeholder="search..." />}
        </Box>
        <Box>
          <Button className={classes.buttonCustom}>{buttonText}</Button>
          <Button className={classes.buttonCustom} style={{ color: '#ec1b2e', backgroundColor: '#ffd8dc', marginLeft: 24 }} onClick={() => handleDelete()}>
            Delete
          </Button>
        </Box>
      </Box>
      <Box className={classes.table}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ height: 60 }}>
                {headerCell.map((headerCell) => (
                  <TableCell className={classes.headerCell} align="center" key={headerCell}>
                    {headerCell}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataRow.map((row) => (
                <TableRow key={row.id} style={{ height: 100 }} className={classes.bodyRow}>
                  <TableCell className={classes.bodyCell} align="center">
                    <Checkbox checked={checked} inputProps={{ 'aria-label': 'primary checkbox' }} style={{ width: 24, height: 24 }} />
                  </TableCell>
                  {Object.getOwnPropertyNames(row).map((key) => (
                    <TableCell className={classes.bodyCell} align="center" key={key}>
                      {Array.isArray(row[key]) ? (
                        key === 'image' ? (
                          <Box style={{ display: 'flex', flexWrap: 'wrap', margin: '0 auto', gap: 12, maxWidth: 292 }}>
                            {row.image.map((img, index) => (
                              <Box key={index} style={{ width: 64, height: 64 }}>
                                <img src={img} alt="" style={{ width: '100%', display: 'block' }} />
                              </Box>
                            ))}
                          </Box>
                        ) : (
                          row[key].map((item) => (
                            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <Typography className={classes.label}>{item}</Typography>
                            </Box>
                          ))
                        )
                      ) : (
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Typography className={classes.label}>{row[key]}</Typography>
                        </Box>
                      )}
                    </TableCell>
                  ))}
                  <TableCell className={classes.bodyCell} align="center">
                    <FormControlLabel
                      control={<SwitchCustom checked={isCheck} onChange={handleChangeSwitch} name="checkedB" />}
                      label={isCheck ? 'Ebable' : 'Disable'}
                      style={{ width: 127 }}
                    />
                  </TableCell>
                  <TableCell className={classes.bodyCell} align="center">
                    <SettingsIcon style={{ width: 40, height: 40, color: '#ec1b2e' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box style={{ display: 'flex', padding: '40.5px 0', justifyContent: 'center' }}>
          <Box>
            <Box style={{ marginRight: 10, display: 'inline-block' }}>Show</Box>
            <Select value={customerPerPage} onChange={handleChangePageOption} className="page-size-selector">
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </Box>
          <Pagination className={classes.pagination} component="div" count={10} page={currentPage} defaultPage={4} onChange={handleOnChangePage} />
        </Box>
      </Box>
      <Box>
        <ModalMessage open={modalMessage} onClose={handleCloseMessage} isRule message={message} />
      </Box>
    </Box>
  )
}

export default Uniform
