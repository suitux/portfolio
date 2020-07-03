import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from "../../components/PortfolioSection";


const TrajectorySectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Trajectory'}>
      <div className={classes.experience}>
      </div>
    </PortfolioSection>
  )
}

export const TrajectorySection = withStyles(styles)(TrajectorySectionComponent)
