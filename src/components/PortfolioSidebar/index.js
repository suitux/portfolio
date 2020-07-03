import { Box, withStyles } from "@material-ui/core";
import { styles } from './styles'

const PortfolioSidebarComponent = ({ display }) => {
  return (
    <Box display={display} style={{ backgroundColor: 'red', height: '100%' }}>
      <span>PORTFOLIO SIDEBAR</span>
    </Box>
  )
}

export const PortfolioSidebar = withStyles(styles)(PortfolioSidebarComponent)
