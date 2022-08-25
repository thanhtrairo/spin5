import { AppBar, Box, Button, Grid, Link, makeStyles, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Chart from '../Couting/Chart'
import DropList from '../Couting/DropList'
import TimeCard from '../Couting/TimeCard'
import Summary from './Summary'

const useStyles = makeStyles({
  bodyTop: {
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 64px 16px 25px',
    marginBottom: 24,
  },
  labelRetail: {
    letterSpacing: 'normal',
    fontWeight: 'bold',
    marginRight: 24,
    whiteSpace: 'nowrap',
  },
  buttonCustom: {
    backgroundColor: '#dd3d4b',
    borderRadius: 4,
    height: 48,
    width: 128,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    whiteSpace: 'nowrap',
    textRransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#dd3d4b',
      opacity: 0.8,
    },
  },
  bodyBottom: {
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    backgroundColor: '#fff',
    width: 1172,
    padding: '16px 24px',
  },
  rootAppBar: {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderBottom: '1px solid #8d8e91',
    '& .MuiTabs-indicator': {
      backgroundColor: '#dd3d4b',
      height: 4,
    },
    '& .MuiTab-wrapper': {
      textTransform: 'capitalize',
    },
  },
  tabItem: {
    border: '1px solid #ebebeb',
    borderBottom: 'none',
    minWidth: 180,
    height: 50,
    whiteSpace: 'nowrap',
    flexGrow: 0,
  },
})

const labelNavTab = ['Customer traffic', 'Demographics', 'Retention rate', 'Dwell time', 'Bussiness performance']

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-force-tabpanel-${index}`} aria-labelledby={`scrollable-force-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  )
}

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const NavTabs = ({ typeDate }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [date, setDate] = useState('week')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.rootAppBar}>
        <Tabs value={value} onChange={handleChange} aria-label="full width tabs example">
          {labelNavTab.map((item, index) => (
            <Tab label={item} {...a11yProps(index)} key={item} className={classes.tabItem} />
          ))}
        </Tabs>
      </AppBar>
      <Box style={{ marginTop: 15.5 }}>
        <TabPanel value={value} index={0}>
          <Chart typeDate={typeDate} />
          <Box style={{ marginTop: 12 }}>
            <TimeCard value={date} typeDate={typeDate} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  )
}

function SmartDetail() {
  const classes = useStyles()
  const [typeDate, setTypeDate] = useState('week')

  return (
    <Box>
      <Box className={classes.bodyTop}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={classes.labelRetail}>Store name</Typography>
          <DropList />
          <Button className={classes.buttonCustom} style={{ width: 150, marginLeft: 16 }}>
            Search
          </Button>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Box style={{ marginRight: 64 }}>
            <Button
              className={classes.buttonCustom}
              style={{ backgroundColor: '#ffd8dc', color: '#dd3d4b', marginRight: 16 }}
              onClick={() => setTypeDate('week')}
            >
              Last 7 days
            </Button>
            <Button className={classes.buttonCustom} onClick={() => setTypeDate('month')}>
              Last 30 days
            </Button>
          </Box>
          <Box>
            <Typography className={classes.labelRetail}>Date</Typography>
          </Box>
        </Box>
      </Box>
      <Box style={{ display: 'flex' }}>
        <Box className={classes.bodyBottom}>
          <NavTabs typeDate={typeDate} />
          <Link
            onClick={(e) => e.preventDefault()}
            style={{ cursor: 'pointer', color: '#dd3d4b', fontWeight: 500, letterSpacing: 'normal', marginTop: 9, display: 'block', textAlign: 'right' }}
          >
            Click here to download the display graphics
          </Link>
        </Box>
        <Box className={classes.bodyBottom} style={{ width: 400, padding: '24px 24px 33px', marginLeft: 24 }}>
          <Summary />
        </Box>
      </Box>
    </Box>
  )
}

export default SmartDetail
