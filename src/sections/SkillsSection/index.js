import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'

const SkillsSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Skills'} isPage>
      Skills


    </PortfolioSection>
  )
}

export const SkillsSection = withStyles(styles)(SkillsSectionComponent)
