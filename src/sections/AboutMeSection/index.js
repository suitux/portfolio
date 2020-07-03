import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'

const AboutMeSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'About me'} isPage>
      About me
    </PortfolioSection>
  )
}

export const AboutMeSection = withStyles(styles)(AboutMeSectionComponent)
