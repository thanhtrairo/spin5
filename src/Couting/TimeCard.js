import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Box, Tooltip, Typography } from '@material-ui/core'
import TooltipCustom from './ToolTip'

const useStyles = makeStyles({
  table: {
    backgroundColor: '#fff',
    fontSize: '14px',
    color: 'black',
    boxSizing: 'border-box',
    fontWeight: 500,
    overflow: 'auto',
  },
  headerCell: {
    padding: '0 0 20px',
    border: 'none',
    height: 44.5,
    fontFamily: 'Sarabun',
  },
  tableRow: {
    whiteSpace: 'nowrap',
  },
  bodyThCell: {
    border: 'none',
    height: 32,
    padding: 0,
    fontFamily: 'Sarabun',
    display: 'inline-block',
    lineHeight: '32px',
    '&:first-child': {
      width: '50px !important',
    },
  },
  bodyCell: {
    padding: 0,
    border: 'solid 1px #e7e7e8',
    height: 32,
    fontFamily: 'Sarabun',
    display: 'inline-block',
    lineHeight: '32px',
  },
})

const footerCellsWeek = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const timeCells = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '']

const footerCellMonth = ['']
for (let i = 1; i <= 30; i++) {
  if (i.toString().length === 1) {
    i = '0' + i
  }
  footerCellMonth.push(i)
}

const statusColor = ['#fff', '#f2f9f3', '#abd8b7', '#d5ecdb']

const dataRandom = (random) => {
  const data = []
  const body = []
  if (random === 1) {
    const randomBody = () => {
      for (let i = 0; i < 7; i++) {
        body.push({
          number: Math.floor(Math.random() * 30),
          status: Math.floor(Math.random() * 4),
        })
      }
    }
    randomBody()
  } else {
    for (let i = 0; i < 30; i++) {
      body.push({
        number: Math.floor(Math.random() * 30),
        status: Math.floor(Math.random() * 4),
      })
    }
  }
  for (let i = 0; i < 10; i++) {
    data.push({
      body: body,
      id: i,
      hour: Math.floor(Math.random() * 12) + 1 + 'am',
    })
  }
  return data
}

function TimeCard(props) {
  const classes = useStyles()

  const { typeDate } = props

  return (
    <Box style={{ marginLeft: 35 }}>
      {/* <Box style={{ display: 'flex', gap: 16 }}>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {timeCells.map((time) => (
            <Typography key={time} style={{ textAlign: 'right', fontSize: 14, fontWeight: 500, letterSpacing: 'normal' }}>
              {time}
            </Typography>
          ))}
        </Box> */}

      <TableContainer className={classes.table}>
        <Table stickyHeader aria-label="simple table">
          {/* <TableHead>
          <TableRow>
            {(value === 'week' ? headerCells : headerCells2).map((headerCell) => (
              <TableCell className={classes.headerCell} align="center" key={headerCell}>
                {headerCell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead> */}
          <TableBody>
            {(typeDate === 'week' ? dataRandom(1) : dataRandom(0)).map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.bodyThCell} align="right" style={{ width: 50, paddingRight: 16 }}>
                  {row.hour}
                </TableCell>
                {row.body.map((item) => (
                  <TooltipCustom key={item}>
                    <TableCell
                      className={classes.bodyCell}
                      align="center"
                      style={{ backgroundColor: `${statusColor[item.status]}`, width: typeDate !== 'week' ? 32 : 142 }}
                    >
                      {item.number}
                    </TableCell>
                  </TooltipCustom>
                ))}
              </TableRow>
            ))}
            <TableRow className={classes.tableRow}>
              {(typeDate === 'week' ? footerCellsWeek : footerCellMonth).map((date) => (
                <TableCell className={classes.bodyThCell} align="center" key={date} style={{ width: typeDate !== 'week' ? 32 : 142 }}>
                  {date}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* </Box> */}
    </Box>
  )
}

export default TimeCard
