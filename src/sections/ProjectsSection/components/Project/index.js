import { withStyles } from '@material-ui/core'
import { styles } from './style'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const ProjectComponent = ({ title, image, link, children, classes }) => {
  return (
    <div className={classes.container}>
      <Grid className={classes.container} container direction='row' justify='flex-start' alignItems='stretch'>
        <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={9} xl={9} className={classes.descriptionContainer}>
          <Typography component={'h3'} variant={'h5'} className={classes.title}>
            {title}
          </Typography>
          <hr />
          {children}

          <div className={classes.learnMoreContainer}>
            {link && <Button onClick={() => window.open(link)}>Learn more</Button>}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export const Project = withStyles(styles)(ProjectComponent)
