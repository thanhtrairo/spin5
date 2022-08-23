import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import group2801 from '../image/Group 2801.svg'
import group2802 from '../image/Group 2802.svg'
import group2803 from '../image/Group 2803.svg'
import group2804 from '../image/Group 2804.svg'
import group2805 from '../image/Group 2805.svg'
import group3207 from '../image/Group 3027.svg'
import group3208 from '../image/Group 3028.svg'
import group214 from '../image/Mask Group 214.svg'
import group215 from '../image/Mask Group 215.svg'
import group216 from '../image/Mask Group 216.svg'
import group245 from '../image/Mask Group 245.svg'

const useStyles = makeStyles({
  rootItem: {
    borderRadius: 8,
    border: 'solid 1px #d3d3d3',
    display: 'flex',
    gap: 24,
  },
  labelItem: {
    fontWeight: 'bold',
    letterSpacing: 'normal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    width: 100,
    height: 80,
    textAlign: 'center',
    lineHeight: 'normal',
    padding: '0 2px',
  },
  itemRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 22,
  },
  rootNumberPercent: {
    display: 'flex',
    marginTop: 8,
    gap: 4,
  },
  summaryNumber: {
    fontWeight: 'bold',
    letterSpacing: 'normal',
    fontSize: 24,
  },
})

function Summary() {
  const classes = useStyles()
  return (
    <Box>
      <Typography style={{ fontSize: 21, fontWeight: 'bold', letterSpacing: 'normal', marginBottom: 16 }}>Summary</Typography>
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Visitors</Typography>
          <Box className={classes.itemRight}>
            <img src={group2801} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>0</Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group214} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Gender</Typography>
          <Box className={classes.itemRight}>
            <img src={group2802} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>306/116</Typography>
              <Box className={classes.rootNumberPercent} style={{ justifyContent: 'center', gap: 8 }}>
                <img src={group215} alt="" />
                <span>/</span>
                <img src={group216} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Avg. Dwell time</Typography>
          <Box className={classes.itemRight}>
            <img src={group2803} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>
                0 <span style={{ fontSize: 16 }}>min</span>
              </Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group214} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Buyers</Typography>
          <Box className={classes.itemRight}>
            <img src={group2801} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>0</Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group214} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Sales amount</Typography>
          <Box className={classes.itemRight}>
            <img src={group2804} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>0</Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group214} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Transaction count</Typography>
          <Box className={classes.itemRight}>
            <img src={group2805} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>0</Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group214} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>Conversion rate</Typography>
          <Box className={classes.itemRight}>
            <img src={group3207} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>0</Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group245} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rootItem}>
          <Typography className={classes.labelItem}>ATV</Typography>
          <Box className={classes.itemRight}>
            <img src={group3208} alt="" />
            <Box>
              <Typography className={classes.summaryNumber}>0</Typography>
              <Box className={classes.rootNumberPercent}>
                <img src={group214} alt="" />
                <Typography className={classes.summaryNumberPercent}>0.0%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Summary
