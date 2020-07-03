import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'

const TrajectorySectionComponent = ({ classes }) => {
  return (
    <div className={classes.section}>
      <Typography color={'secondary'} component={'h2'} variant={'h2'} className={classes.title}>
        Trajectory
      </Typography>
      <div>
        holaa
      </div>
    </div>
  )
}

export const TrajectorySection = withStyles(styles)(TrajectorySectionComponent)
