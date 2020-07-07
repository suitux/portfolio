import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { withTheme } from '@material-ui/styles'
import { PortfolioSidebar } from '../../components/PortfolioSidebar'
import { PortfolioSection } from '../../components/PortfolioSection'

const OnlyMobileSectionComponent = ({ theme, classes }) => {
  return <PortfolioSidebar />
}

export const OnlyMobileSection = withTheme(withStyles(styles)(OnlyMobileSectionComponent))
