import { Box, Tooltip, withStyles } from '@material-ui/core'
import { styles } from './styles'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import GetAppIcon from '@material-ui/icons/GetApp'
import { List, ListItem, ListItemIcon, ListItemText, Fab } from '@material-ui/core'

const PortfolioSidebarComponent = ({ display, classes }) => {
  return (
    <Box display={display} className={classes.container}>
      <img src={'./src/img/circle-xavi.png'} className={classes.imageMe} />
      <h1 className={classes.title}>Xavier Rincon Rico</h1>
      <h2 className={classes.subTitle}>Full Stack Developer</h2>
      <hr className={classes.separator} />

      <List component={'nav'}>
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

      <Tooltip title={'Curriculum'}>
        <Fab color={'primary'} aria-label={'download'} className={classes.downloadAsPdf}>
          <GetAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  )
}

export const PortfolioSidebar = withStyles(styles)(PortfolioSidebarComponent)
