import { Box, Fab, List, ListItem, ListItemIcon, ListItemText, Tooltip, withStyles } from '@material-ui/core'
import { styles } from './styles'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import GetAppIcon from '@material-ui/icons/GetApp'
import { AchievementAlert } from '../AchievementAlert'
import { getCookie, setCookie } from '../../helpers/cookies'
import { download_file } from '../../helpers/download'
import { useFirebase } from 'react-redux-firebase'

const PortfolioSidebarComponent = ({ display, classes }) => {
  const [downloadCvAchievement, setDownloadCvAchievement] = React.useState(false)

  const analytics = useFirebase().analytics()

  const handleDownloadCV = () => {
    analytics.logEvent('cv', { action: 'download' })

    const previouslyDownloadedCv = getCookie('downloadCvAchievement')
    const timeoutWait = previouslyDownloadedCv ? 0 : 1000

    if (!previouslyDownloadedCv) {
      setCookie('downloadCvAchievement', true, 15)
      setDownloadCvAchievement(true)
    }

    setTimeout(() => {
      download_file(
        'https://firebasestorage.googleapis.com/v0/b/portfolio-1539542541675.appspot.com/o/cv.pdf?alt=media',
        'xavier_rincon.pdf'
      )
    }, timeoutWait)
  }

  const renderArchivements = () => {
    return (
      <AchievementAlert
        open={downloadCvAchievement}
        onClose={() => {
          setDownloadCvAchievement(false)
        }}
        text={'Downloaded my CV!'}
      />
    )
  }

  return (
    <Box display={display} className={classes.container}>
      <img src={'./src/img/circle-xavi.png'} className={classes.imageMe} alt={'Xavier Rincon Rico'} />
      <h1 className={classes.title}>Xavier Rincon Rico</h1>
      <h2 className={classes.subTitle}>FullStack Developer</h2>
      <hr className={classes.separator} />

      <List component={'ul'}>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText>
            <a className={classes.link} href={'mailto:xavirr1994@gmail.com'}>
              xavirr1994@gmail.com
            </a>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PhoneAndroidIcon />
          </ListItemIcon>
          <ListItemText>
            <a className={classes.link} href={'tel:34692479789'}>
              +34 692479789
            </a>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText>
            <a className={classes.link} href={'https://www.linkedin.com/in/xavier-rincon-rico-588398106/'}>
              Xavier Rincon Rico
            </a>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>
            <a className={classes.link} href={'https://github.com/suitux'}>
              suitux
            </a>
          </ListItemText>
        </ListItem>
      </List>

      <Tooltip title={'Download CV'}>
        <Fab color={'primary'} aria-label={'download'} className={classes.downloadAsPdf} onClick={handleDownloadCV}>
          <GetAppIcon />
        </Fab>
      </Tooltip>

      {renderArchivements()}
    </Box>
  )
}

export const PortfolioSidebar = withStyles(styles)(PortfolioSidebarComponent)
