import { Grid, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import { TrajectoryPoint } from './components/TrajectoryPoint'

const TrajectorySectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Trajectory'}>
      <Grid className={classes.container} container direction={'row'} justify={'center'} alignItems={'center'}>
        <Grid item xs={12} md={12} lg={10} xl={10}>
          <TrajectoryPoint
            enterprise={'Nice People At Work (NPAW)'}
            job={'FullStack Developer'}
            imageUrl={
              './src/img/jobs/nice_logo.png'
            }
          >
            <ul>
              <li>QA Automation Framework development to manage testing in a video analytics development team.</li>
              <li>Improvements in the enterprise main web.</li>
              <li>React based platform development about internship user management.</li>
              <li>New characteristics development of Video Analytics React based platform.</li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Privalia'}
            job={'.NET Developer'}
            imageUrl={'./src/img/jobs/privalia_logo.png'}
          >
            <ul>
              <li>Development of a WMS (Warehouse Management System).</li>
              <li>Testing Framework development for the WMS Project.</li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Concatel'}
            job={'.NET Developer'}
            imageUrl={'./src/img/jobs/concatel_logo.jpg'}
          >
            <ul>
              <li>Development of a WMS (Warehouse Management System).</li>
              <li>Testing Framework development for the WMS Project.</li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'Brainworks'}
            job={'FullStack Developer'}
            imageUrl={'./src/img/jobs/brainworks_logo.jpg'}
          >
            <ul>
              <li>FullStack developer, with ASP.NET, C#, OraclePLSQL, PHP, Javascript and VisualBasic.</li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'As Software'}
            job={'Developer'}
            imageUrl={'./src/img/jobs/assoftware_logo.jpg'}
          >
            <ul>
              <li>PowerBuilder developer.</li>
              <li>WMS (Warehouse Management System) developer.</li>
            </ul>
          </TrajectoryPoint>

          <TrajectoryPoint
            enterprise={'ONCE'}
            job={'Video game developer'}
            imageUrl={'./src/img/jobs/once_logo.jpg'}
          >
            <ul>
              <li>Android Videogame developer.</li>
              <li>I developed a game orientated to blind people.</li>
            </ul>
          </TrajectoryPoint>
        </Grid>
      </Grid>
    </PortfolioSection>
  )
}

export const TrajectorySection = withStyles(styles)(TrajectorySectionComponent)
