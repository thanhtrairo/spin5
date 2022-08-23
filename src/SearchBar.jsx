import { InputAdornment, makeStyles, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'solid 1.5px #c9c9c9',
      borderRadius: 4,
      width: 488,
    },
    '& .MuiOutlinedInput-adornedStart': {
      padding: '10px 0 12px 16px',
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 14,
  },
  styleIcon: {
    fill: '#ec1b2e',
  },
  inputField: {
    '&::placeholder': {
      fontSize: 14,
      opacity: 1,
      color: '#8d8e91',
      fontFamily: 'Sarabun',
      fontWeight: 500,
      letterSpacing: 'normal',
    },
  },
})

function SearchBar(props) {
  const classes = useStyles()
  const InputProps = {
    classes: {
      input: classes.inputField,
    },
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon className={classes.styleIcon} />
      </InputAdornment>
    ),
    className: classes.input,
  }
  const rest = {}
  if (props.maxLength) {
    rest.InputProps = {
      maxLength: props.maxLength,
    }
  }
  return (
    <TextField
      className={classes.root}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      type="text"
      autoFocus={false}
      variant="outlined"
      onChange={function (e) {
        props.onChange(e.target.value)
      }}
      InputProps={InputProps}
      {...rest}
    />
  )
}

export default SearchBar
