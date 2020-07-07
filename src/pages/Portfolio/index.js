import { PortfolioSidebar } from '../../components/PortfolioSidebar'
import { Grid, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioContent } from "../../components/PortfolioContent";

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
      <Grid item xs={12} sm={12} md={7} lg={8} xl={8} style={{ height: '100%' }}>
        <PortfolioContent />
      </Grid>
    </Grid>
  )
}

export const PortfolioPage = withStyles(styles)(PortfolioPageComponent)
