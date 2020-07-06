import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { withTheme } from '@material-ui/styles'
import { PortfolioSidebar } from '../../components/PortfolioSidebar'

const OnlyMobileSectionComponent = ({ theme, classes }) => {
  return (
    <div>
      <PortfolioSidebar />
    </div>
  )
}

export const OnlyMobileSection = withTheme(withStyles(styles)(OnlyMobileSectionComponent))
