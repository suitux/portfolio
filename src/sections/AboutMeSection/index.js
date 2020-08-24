import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import Grid from '@material-ui/core/Grid'
import { AboutSkill } from './components/AboutSkill'

const AboutMeSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'About me'} isPage>
      <Grid
        className={classes.container}
        container
        direction='row'
        justify='flex-start'
        alignItems='stretch'
        style={{ padding: '0px 40px' }}
      >
        <AboutSkill text={'Love Programming'} position={'left'} image={'./src/img/aboutme/download.png'} />
        <AboutSkill text={'Teamworker'} position={'right'} image={'./src/img/aboutme/teamssocial-noresize.png'} imageSize={200} />
        <AboutSkill text={'Quality Oriented'} position={'left'} image={'./src/img/aboutme/quality.png'} imageSize={150} />
        <AboutSkill text={'Self Taught'} position={'right'} image={'./src/img/aboutme/stack.png'} imageSize={140} />
        <AboutSkill text={'Love Sports'} position={'right'} image={'./src/img/aboutme/haltero.png'} />
        <AboutSkill text={'Love Motorcycles'} position={'right'} image={'./src/img/aboutme/motorcycles.png'} />
      </Grid>
    </PortfolioSection>
  )
}

export const AboutMeSection = withStyles(styles)(AboutMeSectionComponent)
