import { PortfolioSidebar } from '../../components/PortfolioSidebar'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import { styles } from './styles'

const PortfolioPageComponent = ({ classes }) => {
  return (
    <Grid className={classes.container} container direction='row' justify='flex-start' alignItems='stretch'>
      <Grid item md={5} lg={4} xl={4}>
        <PortfolioSidebar
          display={{
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block'
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={8} xl={8} style={{ backgroundColor: 'blue' }}>
        jarl
      </Grid>
    </Grid>
  )
}

export const PortfolioPage = withStyles(styles)(PortfolioPageComponent)
