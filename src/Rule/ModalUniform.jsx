import { Box, Button, makeStyles, Modal, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
  },
  modalHeader: {
    fontSize: 24,
    width: 24,
    height: 24,
    cursor: 'pointer',
    marginLeft: 'auto',
    marginBottom: 16,
    textAlign: 'right',
    fontWeight: 'bold',
    '&:hover': {
      opacity: 0.75,
    },
  },
  rootModal: {
    width: 414,
    backgroundColor: '#fff',
    padding: '8px 8px 32px 8px',
    borderRadius: '12px',
    boxShadow: '0 0 15px 0 rgba(75, 75, 75, 0.49)',
  },
  modalContainer: {
    outline: 'none',
    border: 'none',
  },
  rootImage: {
    width: 80,
    height: 80,
    margin: '0 auto',
  },
  modalImage: {
    width: '100%',
    objectFit: 'contain',
  },
  modalLabel: {
    fontFamily: 'Sarabun',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: 'normal',
    margin: '24px 0 32px',
  },
  modalBody: {
    textAlign: 'center',
    padding: '0 41px',
  },
  buttonCustom: {
    padding: '10px 51px 9px 52px',
    borderRadius: '4px',
    backgroundColor: '#ec1b2e',
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: 'normal',
    fontFamily: 'Sarabun',
    letterSpacing: 'normal',
    width: 125,
    height: 40,
    '&:hover': {
      backgroundColor: '#ec1b2e',
      opacity: 0.8,
    },
  },
})

function ModalUniform(props) {
  const classes = useStyles()
  const { open, onClose } = props

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" className={classes.modal}>
      <Paper className={classes.modalContainer}>
        <Box className={classes.rootModal}>
          <Typography className={classes.modalTitle}>Add Uniform</Typography>
          <Box>
            <Typography Typography className={classes.modalLabel}>
              Uniform Information
            </Typography>
            <Box></Box>
          </Box>
          <Button
            className={classes.buttonCustom}
            onClick={onClose}
            style={{ border: 'solid 1px #333333', backgroundColor: '#fff', color: '#333333', marginRight: 24 }}
          >
            Cancel
          </Button>
          <Button className={classes.buttonCustom} onClick={onClose}>
            ok
          </Button>
        </Box>
      </Paper>
    </Modal>
  )
}

export default ModalUniform
