import { Grid, Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import { Project } from './components/Project'
import Link from '@material-ui/core/Link'

const ProjectsSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Projects'}>
      <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project title={'Digestly'} image={'./src/img/projects/digestly.png'} link={'https://digestbcn.com/'}>
            <Typography variant={'body1'}>
              Multiplatform{' '}
              <Link href={'https://framework7.io/react/'} target={'_BLANK'}>
                Framework 7 React
              </Link>{' '}
              based app.
            </Typography>
            <Typography variant={'body1'}>
              App that manages the user diet and allows to introduce new food into her diet.
            </Typography>
          </Project>
        </Grid>
        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'This portfolio'}
            image={'./src/img/circle-xavi.png'}
            link={'https://gitlab.com/suitux/xavirincon-portfolio'}
          >
            <Typography variant={'body1'}>
              <Link href={'https://es.reactjs.org/'} target={'_BLANK'}>
                React
              </Link>{' '}
              based portfolio
            </Typography>
            <Typography variant={'body1'}>Did it just for fun :)</Typography>
          </Project>
        </Grid>

        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'All We Pay'}
            image={'./src/img/projects/allwepay_logo.png'}
            link={'https://bitbucket.org/suitux/allwepay/src/master/'}
          >
            <Typography variant={'body1'}>App that I developed to learn Ionic.</Typography>
            <Typography variant={'body1'}>
              The app divides an account and tells to the user what haves to pay.
            </Typography>
          </Project>
        </Grid>

        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project title={'Can I Scape'} image={'./src/img/projects/caniscape_logo.png'}>
            <Typography variant={'body1'}>
              App that I developed when I was doing the Development Degree as a final project.
            </Typography>
            <Typography variant={'body1'}>
              Consists of a game that are developed and customized for blind child.
            </Typography>
            <Typography variant={'body1'}>
              It helps to child to move into a set of labyrinths with a character.
            </Typography>
          </Project>
        </Grid>

        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'3D Printing'}
            image={'./src/img/projects/thingiverse_logo.png'}
            link={'https://www.thingiverse.com/suitux/about'}
          >
            <Typography variant={'body1'}>These are a set of projects that I have in Thingiverse.</Typography>
            <Typography variant={'body1'}>
              This web, is a repository for 3D Projects. In my repository, you will see my projects.
            </Typography>
          </Project>
        </Grid>
      </Grid>
    </PortfolioSection>
  )
}

export const ProjectsSection = withStyles(styles)(ProjectsSectionComponent)
