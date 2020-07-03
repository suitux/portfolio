import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'

const AboutMeSectionComponent = ({ classes }) => {
  return (
    <div className={classes.section}>
      <Typography color={'secondary'} component={'h2'} variant={'h2'} className={classes.firstPageTitle}>
        About me
      </Typography>
    </div>
  )
}

export const AboutMeSection = withStyles(styles)(AboutMeSectionComponent)
