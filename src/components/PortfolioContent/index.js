import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { AboutMeSection } from "../../sections/AboutMeSection";
import { TrajectorySection } from "../../sections/TrajectorySection";

const PortfolioContentComponent = ({ display, classes }) => {
  return (
    <div className={classes.container}>
      <AboutMeSection />
      <TrajectorySection />
    </div>
  )
}

export const PortfolioContent = withStyles(styles)(PortfolioContentComponent)
