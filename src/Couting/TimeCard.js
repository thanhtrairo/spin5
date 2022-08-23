import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles({
  table: {
    width: 1135.5,
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
  bodyThCell: {
    border: 'none',
    height: 32,
    padding: '0 16px 0 0',
    fontFamily: 'Sarabun',
  },
  bodyCell: {
    padding: 0,
    border: 'solid 1px #e7e7e8',
    width: 142,
    height: 32,
    fontFamily: 'Sarabun',
  },
})

const headerCells = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const headerCells2 = ['']
for (let i = 1; i <= 30; i++) {
  if (i.toString().length === 1) {
    i = '0' + i
  }
  headerCells2.push(i)
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
  for (let i = 0; i < 7; i++) {
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

  const { value } = props

  return (
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
          {(value === 'week' ? dataRandom(1) : dataRandom(0)).map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.bodyThCell} align="right">
                {row.hour}
              </TableCell>
              {row.body.map((item) => (
                <TableCell
                  className={classes.bodyCell}
                  align="center"
                  key={item}
                  style={{ backgroundColor: `${statusColor[item.status]}`, minWidth: value !== 'week' && 35 }}
                >
                  {item.number}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TimeCard
