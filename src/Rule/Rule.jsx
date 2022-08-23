import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import React from 'react'
import Uniform from './Uniform'
import { rowsUniform, rowsRule, headerCellsUniform, headerCellsRule } from '../data'

const useStyles = makeStyles({
  rootRule: {
    padding: '24px 32px 0',
    width: '100%',
  },
})

export default function Rule() {
  const classes = useStyles()

  return (
    <Box className={classes.rootRule}>
      <Uniform dataRow={rowsUniform} headerCell={headerCellsUniform} title="Uniform list" buttonText="Add Uniform" isSearch message="Xac nhan xoa Rule" />
      <Box style={{ marginTop: 40.5 }}>
        <Uniform
          dataRow={rowsRule}
          headerCell={headerCellsRule}
          title="Rule & Alert list"
          buttonText="Add Rule & Alert"
          message="Xac nhan xoa nhung trang phuc"
        />
      </Box>
    </Box>
  )
}
