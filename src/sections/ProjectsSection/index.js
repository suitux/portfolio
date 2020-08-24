import { Grid, Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import { Project } from './components/Project'
import Link from '@material-ui/core/Link'
import { AchievementAlert } from '../../components/AchievementAlert'
import { getCookie, setCookie } from '../../helpers/cookies'

const ProjectsSectionComponent = ({ classes }) => {
  const [learnMoreArchievementOpen, setLearMoreArchievementOpen] = React.useState(false)

  const handleClickProjectLink = link => {
    const learnMoreArchievement = getCookie('learnMoreAchievement')

    if (!learnMoreArchievement) {
      setCookie('learnMoreAchievement', true, 15)
      setLearMoreArchievementOpen(true)

      setTimeout(() => {
        window.open(link)
      }, 2500)
    } else {
      window.open(link)
    }
  }

  return (
    <PortfolioSection title={'Projects'}>
      <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'Digestly'}
            image={'./src/img/projects/digestly.png'}
            link={'https://digestbcn.com/'}
            handleClickProjectLink={handleClickProjectLink}
          >
            <Typography variant={'body1'}>
              Multiplatform{' '}
              <Link href={'https://framework7.io/react/'} target={'_BLANK'}>
                Framework 7 React
              </Link>{' '}
              based app.
            </Typography>
            <Typography variant={'body1'}>
              App that manages the user diet and allows to introduce new food into the diet.
            </Typography>
          </Project>
        </Grid>
        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'This portfolio'}
            image={'./src/img/circle-xavi.png'}
            link={'https://gitlab.com/suitux/xavirincon-portfolio'}
            handleClickProjectLink={handleClickProjectLink}
          >
            <Typography variant={'body1'}>
              <Link href={'https://es.reactjs.org/'} target={'_BLANK'}>
                React
              </Link>{' '}
              based portfolio.
            </Typography>
            <Typography variant={'body1'}>Did it just for fun :)</Typography>
          </Project>
        </Grid>

        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'All We Pay'}
            image={'./src/img/projects/allwepay_logo.png'}
            link={'https://bitbucket.org/suitux/allwepay/src/master/'}
            handleClickProjectLink={handleClickProjectLink}
          >
            <Typography variant={'body1'}>
              App that I developed to learn{' '}
              <Link href={'https://ionicframework.com/'} target={'_BLANK'}>
                Ionic
              </Link>
              .
            </Typography>
            <Typography variant={'body1'}>
              The app divides bills/payments and tells the user what has to pay.
            </Typography>
          </Project>
        </Grid>

        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'Can I Scape'}
            image={'./src/img/projects/caniscape_logo.png'}
            handleClickProjectLink={handleClickProjectLink}
          >
            <Typography variant={'body1'}>
              App that I developed when I was doing the Development Degree as a final project.
            </Typography>
            <Typography variant={'body1'}>
              Consists of a game that is developed and customized for blind child.
            </Typography>
            <Typography variant={'body1'}>It helps child to move into a set of labyrinths with a character.</Typography>
          </Project>
        </Grid>

        <Grid item xs={12} md={10} lg={10} xl={10}>
          <Project
            title={'3D Printing'}
            image={'./src/img/projects/thingiverse_logo.png'}
            link={'https://www.thingiverse.com/suitux/about'}
            handleClickProjectLink={handleClickProjectLink}
          >
            <Typography variant={'body1'}>These are a set of projects that I have in Thingiverse.</Typography>
            <Typography variant={'body1'}>
              This web, is a repository for 3D Projects. In my repository, you will see my projects.
            </Typography>
          </Project>
        </Grid>
      </Grid>

      <AchievementAlert
        open={learnMoreArchievementOpen}
        onClose={() => {
          setLearMoreArchievementOpen(false)
        }}
        text={'Learning about my projects!'}
      />
    </PortfolioSection>
  )
}

export const ProjectsSection = withStyles(styles)(ProjectsSectionComponent)
