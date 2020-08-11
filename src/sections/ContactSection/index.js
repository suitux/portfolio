import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'

const ContactSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Contact'} isPage>
      Contact
    </PortfolioSection>
  )
}

export const ContactSection = withStyles(styles)(ContactSectionComponent)
