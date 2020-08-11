import { Box, Typography, withStyles } from "@material-ui/core";
import { styles } from './styles'
import { AboutMeSection } from '../../sections/AboutMeSection'
import { TrajectorySection } from '../../sections/TrajectorySection'
import { SkillsSection } from '../../sections/SkillsSection'
import { getCookie, setCookie } from '../../helpers/cookies'
import { AchievementAlert } from '../AchievementAlert'
import { PortfolioSidebar } from "../PortfolioSidebar";
import { ProjectsSection } from "../../sections/ProjectsSection";
import { ContactSection } from "../../sections/ContactSection";

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
        style={{ height: '100%' }}
        display={{
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none'
        }}
      ><PortfolioSidebar /></Box>
      <AboutMeSection />
      <TrajectorySection />
      <SkillsSection />
      <ProjectsSection />
      <div style={{ height: 40 }} />
      {renderArchivements()}
    </div>
  )
}

export const PortfolioContent = withStyles(styles)(PortfolioContentComponent)
