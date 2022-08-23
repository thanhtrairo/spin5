import { Box, Checkbox, makeStyles, Typography } from '@material-ui/core'
import React, { memo, useEffect, useState } from 'react'
import { XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts'
import moment from 'moment'

import group247 from '../image/Mask Group 247.svg'
import group248 from '../image/Mask Group 248.svg'

const useStyles = makeStyles({
  rootChart: {
    '& .recharts-rectangle.recharts-tooltip-cursor': {
      fill: 'transparent',
    },
  },
  iconLabel: {
    display: 'inline-block',
    width: 20,
    height: 21,
    backgroundColor: '#56b26e',
    borderColor: '#56b26e',
    marginRight: '16px',
  },
  textLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333333',
    fontFamily: 'Sarabun',
  },
})

const res = {
  maxVisitTors: 1000,
  data: [
    {
      name: new Date(),
      uv: 40,
      pv: 24,
    },
    {
      name: new Date(),
      uv: 30,
      pv: 13,
    },
    {
      name: new Date(),
      uv: 20,
      pv: 48,
    },
    {
      name: new Date(),
      uv: 27,
      pv: 39,
    },
    {
      name: new Date(),
      uv: 18,
      pv: 48,
    },
    {
      name: new Date(),
      uv: 23,
      pv: 38,
    },
    {
      name: new Date(),
      uv: 34,
      pv: 20,
    },
  ],
}

const data = [
  {
    name: 'Monday',
    uv: 40,
    pv: 24,
  },
  {
    name: 'Tuesday',
    uv: 30,
    pv: 13,
  },
  {
    name: 'Wednesday',
    uv: 20,
    pv: 48,
  },
  {
    name: 'Thursday',
    uv: 27,
    pv: 39,
  },
  {
    name: 'Friday',
    uv: 18,
    pv: 48,
  },
  {
    name: 'Saturday',
    uv: 23,
    pv: 38,
  },
  {
    name: 'Sunday',
    uv: 34,
    pv: 20,
  },
]

const CustomTooltip = ({ active, payload, label }) => {
  const classes = useStyles()
  if (active && payload && payload.length) {
    return <Box className={classes.abc}>abc</Box>
  }

  return null
}

function Chart() {
  const classes = useStyles()

  const [isPrevTime, setIsPrevTime] = useState(false)

  return (
    <Box className={classes.rootChart}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 10,
          gap: 147,
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 45,
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={classes.iconLabel} style={{ backgroundColor: '#e2e2e2' }}></Box>
            <Box className={classes.textLabel}>Selected time</Box>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={isPrevTime} onChange={() => setIsPrevTime(!isPrevTime)} style={{ transform: 'scale(1.16)' }} />
            <Box className={classes.iconLabel}></Box>
            <Box className={classes.textLabel}>Previous time</Box>
          </Box>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', gap: 23 }}>
          <img src={group247} alt="" style={{ width: 24, height: 24 }} />
          <img src={group248} alt="" style={{ width: 24, height: 24 }} />
        </Box>
      </Box>
      <BarChart width={1110} height={282.5} data={data} barGap={0}>
        <XAxis
          dataKey="name"
          tick={{ fill: '#333333' }}
          tickMargin={16}
          tickLine={false}
          axisLine={{ stroke: '#ebebeb' }}
          width={1040}
          style={{
            fontFamily: 'Sarabun',
            fontSize: '14px',
          }}
        />
        <YAxis
          type="number"
          domain={[0, 50]}
          height={218.5}
          tickCount={6}
          tick={{ fill: '#333333' }}
          tickMargin={16}
          tickLine={false}
          axisLine={{ stroke: '#ebebeb' }}
          style={{
            fontFamily: 'Sarabun',
            fontSize: '14px',
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        {isPrevTime && <Bar dataKey="pv" fill="#e2e2e2" barSize={32} />}
        <Bar dataKey="uv" fill="#56b26e" barSize={32} />
      </BarChart>
    </Box>
  )
}

export default memo(Chart)
