import { Grid, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import { TrajectoryPoint } from './components/TrajectoryPoint'
import Typography from "@material-ui/core/Typography";

const TrajectorySectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Trajectory'}>
      <Grid className={classes.container} container direction={'row'} justify={'center'} alignItems={'center'}>
        <Grid item xs={12} md={12} lg={10} xl={10}>
          <TrajectoryPoint
            enterprise={'Trovit'}
            job={'FullStack Developer'}
            imageUrl={'./src/img/jobs/trovit.png'}
            dateRange={{ from: 'Sep. 2019', to: 'Actually' }}
          >
            <ul>
              <li><Typography variant={'body1'}>B2C Trovit team</Typography></li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Nice People At Work (NPAW)'}
            job={'FullStack Developer'}
            imageUrl={'./src/img/jobs/nice_logo.png'}
            dateRange={{ from: 'Jan. 2019', to: 'Jun. 2020' }}
          >
            <ul>
              <li><Typography variant={'body1'}>QA Automation Framework development to manage testing in a video analytics development team.</Typography></li>
              <li><Typography variant={'body1'}>Improvements in the enterprise main web.</Typography></li>
              <li><Typography variant={'body1'}>React based platform development about internship user management.</Typography></li>
              <li><Typography variant={'body1'}>New characteristics development of Video Analytics React based platform.</Typography></li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Privalia'}
            job={'.NET Developer'}
            imageUrl={'./src/img/jobs/privalia_logo.png'}
            dateRange={{ from: 'Feb. 2018', to: 'Jan. 2019' }}
          >
            <ul>
              <li><Typography variant={'body1'}>Development of a WMS (Warehouse Management System).</Typography></li>
              <li><Typography variant={'body1'}>Testing Framework development for the WMS Project.</Typography></li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Concatel'}
            job={'.NET Developer'}
            imageUrl={'./src/img/jobs/concatel_logo.jpg'}
            dateRange={{ from: 'Nov. 2016', to: 'Feb. 2018' }}
          >
            <ul>
              <li><Typography variant={'body1'}>Development of a WMS (Warehouse Management System).</Typography></li>
              <li><Typography variant={'body1'}>Testing Framework development for the WMS Project.</Typography></li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Brainworks'}
            job={'FullStack Developer'}
            imageUrl={'./src/img/jobs/brainworks_logo.jpg'}
            dateRange={{ from: 'Jun. 2016', to: 'Nov. 2016' }}
          >
            <ul>
              <li><Typography variant={'body1'}>FullStack developer, with ASP.NET, C#, OraclePLSQL, PHP, Javascript and VisualBasic.</Typography></li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'As Software'}
            job={'Developer'}
            imageUrl={'./src/img/jobs/assoftware_logo.jpg'}
            dateRange={{ from: 'Nov. 2015', to: 'Jun. 2016' }}
          >
            <ul>
              <li><Typography variant={'body1'}>PowerBuilder developer.</Typography></li>
              <li><Typography variant={'body1'}>WMS (Warehouse Management System) developer.</Typography></li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'ONCE'}
            job={'Video game developer'}
            imageUrl={'./src/img/jobs/once_logo.jpg'}
            dateRange={{ from: 'Nov. 2014', to: 'Jul. 2015' }}
          >
            <ul>
              <li><Typography variant={'body1'}>Android Videogame developer.</Typography></li>
              <li><Typography variant={'body1'}>I developed a game orientated to blind people.</Typography></li>
            </ul>
          </TrajectoryPoint>
        </Grid>
      </Grid>
    </PortfolioSection>
  )
}

export const TrajectorySection = withStyles(styles)(TrajectorySectionComponent)
