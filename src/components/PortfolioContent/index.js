import { Box, Typography, withStyles } from "@material-ui/core";
import { styles } from './styles'
import { AboutMeSection } from '../../sections/AboutMeSection'
import { TrajectorySection } from '../../sections/TrajectorySection'
import { SkillsSection } from '../../sections/SkillsSection'
import { getCookie, setCookie } from '../../helpers/cookies'
import { AchievementAlert } from '../AchievementAlert'

const PortfolioContentComponent = ({ display, classes }) => {
  const [firstVisit, setFirstVisit] = React.useState(false)

  React.useEffect(() => {
    const visited = getCookie('portfolioReached')

    if (!visited) {
      setCookie('portfolioReached', true, 15)
      setFirstVisit(true)
    }
  }, [])

  const renderArchivements = () => {
    return (
      <AchievementAlert
        open={firstVisit}
        onClose={() => {
          setFirstVisit(false)
        }}
        text={'Reach this portfolio!'}
      />
    )
  }

  return (
    <div className={classes.container}>
      <Box
        display={{
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none'
        }}
      ><div style={{ width: '100%', height: 100, backgroundColor: 'red' }}>ONLY MOBILE</div></Box>
      <AboutMeSection />
      <TrajectorySection />
      <SkillsSection />
      {renderArchivements()}
    </div>
  )
}

export const PortfolioContent = withStyles(styles)(PortfolioContentComponent)
