import { Typography, withStyles } from '@material-ui/core'
import { styles } from "./styles";

const PortfolioSectionComponent = ({ title, classes, children, isPage }) => {
  return (
    <div className={classes.section} style={{height: isPage ? '100vh' : 'auto'}}>
      <Typography component={'h2'} variant={'h2'} className={classes.title}>
        {title}
      </Typography>
      {children}
    </div>
  )
}

export const PortfolioSection = withStyles(styles)(PortfolioSectionComponent)