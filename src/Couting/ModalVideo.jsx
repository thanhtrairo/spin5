import { Box, makeStyles, Modal, Paper, Typography } from '@material-ui/core'
import React, { forwardRef, useState } from 'react'
import ShareIcon from '@material-ui/icons/Share'
import GetAppIcon from '@material-ui/icons/GetApp'
import ModalLink from './ModalLink'
import MaskGroup177 from '../image/MaskGroup177.svg'

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
    marginBottom: 15,
    textAlign: 'right',
    fontWeight: 'bold',
    '&:hover': {
      opacity: 0.75,
    },
  },
  rootModal: {
    width: 900,
    backgroundColor: '#fff',
    padding: '7px 8px 34px 16px',
    borderRadius: '12px',
    boxShadow: '0 0 15px 0 rgba(75, 75, 75, 0.49)',
  },
  modalContainer: {
    outline: 'none',
    border: 'none',
  },
  video: {
    width: '100%',
  },
  videoNameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '15px 0',
  },
  videoIcon: {
    width: 32,
    height: 32,
    color: '#ec1b2e',
    cursor: 'pointer',
    '&:hover': {
      color: '#ec1b2e',
      opacity: 0.8,
    },
  },
  videoName: {
    fontSize: 18,
    fontFamily: 'Sarabun',
  },
  videoStore: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #c9c9c9',
    paddingTop: 17,
  },
  videoIconStore: {
    width: 24,
    height: 24,
    color: '#8d8e91',
    cursor: 'pointer',
    '&:hover': {
      color: '#8d8e91',
      opacity: 0.8,
    },
  },
  videoStoreLabel: {
    fontFamily: 'Sarabun',
    marginLeft: 12,
  },
})

function ModalVideo(props, ref) {
  const classes = useStyles()
  const { open, onClose, onDownload } = props

  const [modalLink, setModalLink] = useState(false)

  const handleShowLink = () => {
    setModalLink(true)
  }

  const handleCloseLink = () => {
    setModalLink(!modalLink)
  }

  return (
    <>
      <Modal open={open} onClose={onClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" className={classes.modal}>
        <Paper className={classes.modalContainer}>
          <Box className={classes.rootModal}>
            <Box className={classes.modalHeader} onClick={onClose}>
              <img src="/Solid _ Interface _Cross.svg" alt="" />
            </Box>
            <Box className={classes.videoContainer}>
              <video autoPlay className={classes.video} controls src="/video.mp4" ref={ref} />
            </Box>
            <Box>
              <Box className={classes.videoNameContainer}>
                <Typography className={classes.videoName}>Uniform_2132323_Counting_001</Typography>
                <Box>
                  <ShareIcon className={classes.videoIcon} style={{ marginRight: 24 }} onClick={handleShowLink} />
                  <GetAppIcon className={classes.videoIcon} onClick={onDownload} />
                </Box>
              </Box>
              <Box className={classes.videoStore}>
                <img className={classes.videoIconStore} alt="" src={MaskGroup177} />
                <Box>
                  <Typography className={classes.videoStoreLabel}>Store 380 LLQ</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Modal>
      <ModalLink open={modalLink} onClose={handleCloseLink} />
    </>
  )
}

export default forwardRef(ModalVideo)
