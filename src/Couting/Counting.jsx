import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import React, { useRef, useState } from 'react'
import TimeCard from './TimeCard'
import DropList from './DropList'
import Chart from './Chart'
import DetailList from './DetailList'
import ModalVideo from './ModalVideo'
import ModalMessage from '../Rule/ModalMessage'

const useStyles = makeStyles({
  rootCounting: {
    padding: '24px 32px 60px',
    color: 'black',
  },
  rootDropList: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  },
  labelDropList: {
    fontWeight: 'bold',
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
    lineHeight: 'normal',
    fontFamily: 'Sarabun',
    letterSpacing: 'normal',
    width: 125,
    '&:hover': {
      backgroundColor: '#ec1b2e',
      opacity: 0.8,
    },
  },
  rootBody: {
    padding: '24px 54px 40px 24px',
    borderRadius: '12px',
    boxShadow: '0 0 20px 0 rgba(117, 115, 115, 0.16)',
    backgroundColor: '#fff',
    marginTop: 32,
    width: 1184,
  },
  titleCatagories: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Sarabun',
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
  rootRadio: {
    '&.MuiFormGroup-root': {
      flexDirection: 'row',
    },
    '& .MuiFormControlLabel-root': {
      marginRight: 79.1,
    },
  },
  dateRadio: {
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: '#ec1b2e',
    },
  },
})

export default function Counting() {
  const classes = useStyles()

  const [value, setValue] = useState('week')
  const [modalVideo, setModalVideo] = useState(false)
  const [modalMessage, setModalMessage] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const videoElement = useRef()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleShowVideo = () => {
    setModalVideo(true)
  }

  const handleShowMessage = () => {
    setModalMessage(true)
  }

  const handleCloseVideo = () => {
    setModalVideo(!modalVideo)
  }

  const handleCloseMessage = () => {
    setModalMessage(!modalMessage)
  }

  const handleDownloadVideo = () => {
    window.location.href = videoElement.current.src
  }

  const handleChangePage = (e, page) => {
    setCurrentPage(page)
  }

  return (
    <Box className={classes.rootCounting}>
      <Box style={{ display: 'flex' }}>
        <Box className={classes.rootDropList}>
          <Typography className={classes.labelDropList}>Area</Typography>
          <DropList />
        </Box>
        <Box className={classes.rootDropList} style={{ margin: '0 32px 0 55px' }}>
          <Typography className={classes.labelDropList}>Store</Typography>
          <DropList />
        </Box>
        <Box>
          <Button className={classes.buttonCustom} onClick={handleShowMessage}>
            Apply
          </Button>
        </Box>
      </Box>
      <Box style={{ display: 'flex' }}>
        <Box>
          <Box className={classes.rootBody}>
            <Box>
              <Typography className={classes.titleCatagories}>Typical Chart</Typography>
              <Chart />
            </Box>
            <Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '40px 0 32px',
                }}
              >
                <Typography className={classes.titleCatagories}>Time Card</Typography>
                <Button className={classes.buttonCustom} style={{ padding: '10px 11px 9px 10px' }}>
                  Download CSV
                </Button>
              </Box>
              <Box>
                <TimeCard value={value} />
              </Box>
            </Box>
          </Box>
          <Box className={classes.rootBody} style={{ padding: '24px 24px 32px' }}>
            <Typography className={classes.titleCatagories} style={{ marginBottom: '24px' }}>
              Detail List
            </Typography>
            <DetailList onShowVideo={handleShowVideo} onDownload={handleDownloadVideo} />
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 32,
              }}
            >
              <Pagination count={10} className={classes.pagination} page={currentPage} onChange={handleChangePage} />
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootBody} style={{ width: '400px', marginLeft: '32px' }}>
          <Typography className={classes.titleCatagories} style={{ marginBottom: '24px' }}>
            Date Range
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              className={classes.rootRadio}
            >
              <FormControlLabel value="week" control={<Radio />} label="Week" className={classes.dateRadio} />
              <FormControlLabel value="month" control={<Radio />} label="Month" className={classes.dateRadio} />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <ModalVideo open={modalVideo} onClose={handleCloseVideo} ref={videoElement} onDownload={handleDownloadVideo} />
        <ModalMessage open={modalMessage} onClose={handleCloseMessage} />
      </Box>
    </Box>
  )
}
