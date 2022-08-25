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

const dataWeek = [
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

const dataMonth = [
  {
    name: '01',
    uv: 40,
    pv: 24,
  },
  {
    name: '02',
    uv: 30,
    pv: 13,
  },
  {
    name: '03',
    uv: 20,
    pv: 48,
  },
  {
    name: '04',
    uv: 27,
    pv: 39,
  },
  {
    name: '05',
    uv: 18,
    pv: 48,
  },
  {
    name: '06',
    uv: 23,
    pv: 38,
  },
  {
    name: '07',
    uv: 34,
    pv: 20,
  },
  {
    name: '08',
    uv: 34,
    pv: 20,
  },
  {
    name: '09',
    uv: 40,
    pv: 20,
  },
  {
    name: '10',
    uv: 34,
    pv: 30,
  },
  {
    name: '11',
    uv: 24,
    pv: 20,
  },
  {
    name: '12',
    uv: 33,
    pv: 42,
  },
  {
    name: '13',
    uv: 14,
    pv: 40,
  },
  {
    name: '14',
    uv: 27,
    pv: 30,
  },
  {
    name: '15',
    uv: 31,
    pv: 20,
  },
  {
    name: '16',
    uv: 32,
    pv: 23,
  },
  {
    name: '17',
    uv: 34,
    pv: 26,
  },
  {
    name: '18',
    uv: 29,
    pv: 29,
  },
  {
    name: '19',
    uv: 25,
    pv: 20,
  },
  {
    name: '20',
    uv: 35,
    pv: 20,
  },
  {
    name: '21',
    uv: 45,
    pv: 20,
  },
  {
    name: '22',
    uv: 34,
    pv: 15,
  },
  {
    name: '23',
    uv: 16,
    pv: 20,
  },
  {
    name: '24',
    uv: 34,
    pv: 35,
  },
  {
    name: '25',
    uv: 34,
    pv: 17,
  },
  {
    name: '26',
    uv: 34,
    pv: 45,
  },
  {
    name: '27',
    uv: 21,
    pv: 20,
  },
  {
    name: '28',
    uv: 34,
    pv: 24,
  },
  {
    name: '29',
    uv: 34,
    pv: 43,
  },
  {
    name: '30',
    uv: 31,
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

function Chart({ typeDate }) {
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
            <Box className={classes.iconLabel}></Box>
            <Box className={classes.textLabel}>Selected time</Box>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={isPrevTime} onChange={() => setIsPrevTime(!isPrevTime)} style={{ transform: 'scale(1.16)' }} />
            <Box className={classes.iconLabel} style={{ backgroundColor: '#e2e2e2' }}></Box>
            <Box className={classes.textLabel}>Previous time</Box>
          </Box>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', gap: 23 }}>
          <img src={group247} alt="" style={{ width: 24, height: 24 }} />
          <img src={group248} alt="" style={{ width: 24, height: 24 }} />
        </Box>
      </Box>
      <BarChart width={typeDate === 'week' ? 1072 : 1050} height={240} data={typeDate === 'week' ? dataWeek : dataMonth} barGap={0}>
        <XAxis
          dataKey="name"
          tick={{ fill: '#333333' }}
          tickMargin={16}
          tickLine={false}
          axisLine={{ stroke: '#ebebeb' }}
          width={1040}
          padding={{ left: 20 }}
          style={{
            fontFamily: 'Sarabun',
            fontSize: '14px',
          }}
        />
        <YAxis
          type="number"
          domain={[0, 50]}
          height={210}
          tickCount={6}
          tick={{ fill: '#333333' }}
          tickMargin={16}
          tickLine={false}
          axisLine={{ stroke: '#ebebeb' }}
          style={{
            fontFamily: 'Sarabun',
            fontSize: '14px',
            marginRight: 30,
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        {isPrevTime && <Bar dataKey="pv" fill="#e2e2e2" barSize={typeDate === 'week' ? 32 : 8} />}
        <Bar dataKey="uv" fill="#56b26e" barSize={typeDate === 'week' ? 32 : 8} />
      </BarChart>
    </Box>
  )
}

export default Chart
