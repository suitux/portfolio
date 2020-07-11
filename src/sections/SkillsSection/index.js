import { Grid, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import { Skill } from './components/Skill'
import { skills } from './data'

const SkillsSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Skills'} isPage>
      <Grid container direction='row' justify='center' alignItems='center' spacing={8}>
        {skills.map(skill => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Skill
                {...skill}
                size={150}
                style={{ margin: '0 auto' }}
              />
            </Grid>
          )
        })}
      </Grid>
    </PortfolioSection>
  )
}

export const SkillsSection = withStyles(styles)(SkillsSectionComponent)
