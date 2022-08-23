import { Box, Link, makeStyles, Modal, Paper, Typography } from '@material-ui/core'
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
    textAlign: 'right',
    fontWeight: 'bold',
    '&:hover': {
      opacity: 0.75,
    },
  },
  rootModal: {
    width: 435,
    backgroundColor: '#fff',
    padding: '7px 8px 32px 16px',
    borderRadius: '12px',
    boxShadow: '0 0 15px 0 rgba(75, 75, 75, 0.49)',
  },
  modalContainer: {
    outline: 'none',
    border: 'none',
  },
  modalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    fontFamily: 'Sarabun',
  },
  modalLink: {
    backgroundColor: '#f6f4f5',
    borderRadius: 4,
    padding: '10px 51px 9px 16px',
    width: 323,
    fontWeight: 500,
    letterSpacing: 'normal',
    lineHeight: 'normal',
    fontFamily: 'Sarabun',
  },
  modalLinkCopy: {
    etterSpacing: 'normal',
    lineHeight: 'normal',
    fontFamily: 'Sarabun',
    color: '#ec1b2e',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})

function ModalLink(props) {
  const classes = useStyles()
  const { open, onClose } = props

  const link = 'http://youtube.com/sdsdund'

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link)
  }

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" className={classes.modal}>
      <Paper className={classes.modalContainer}>
        <Box className={classes.rootModal}>
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 16 }}>
            <Typography className={classes.modalLabel}>Chia se</Typography>
            <Box className={classes.modalHeader} onClick={onClose}>
              <img src="/Solid _ Interface _Cross.svg" alt="" />
            </Box>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 8 }}>
            <Typography className={classes.modalLink}>{link}</Typography>
            <Link className={classes.modalLinkCopy} onClick={() => handleCopy(link)}>
              Sao chep
            </Link>
          </Box>
        </Box>
      </Paper>
    </Modal>
  )
}

export default ModalLink
