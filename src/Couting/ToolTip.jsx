import { Box, Tooltip, Typography, withStyles } from '@material-ui/core'

const TooltipContent = () => {
  return (
    <Box style={{ padding: '10px 0' }}>
      <Typography style={{ fontSize: 12, fontWeight: 'bold', letterSpacing: 'normal' }}>04/07/2022</Typography>
      <Typography style={{ fontSize: 12, letterSpacing: 'normal', whiteSpace: 'nowrap' }}>09:00 AM - 09:59: 5 visitors</Typography>
    </Box>
  )
}
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 160,
    border: 'none',
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.15)',
  },
  arrow: {
    color: '#fff',
    transform: 'scale(3)',
  },
}))(Tooltip)

function TooltipCustom({ children }) {
  return (
    <HtmlTooltip arrow title={<TooltipContent />}>
      {children}
    </HtmlTooltip>
  )
}

export default TooltipCustom
