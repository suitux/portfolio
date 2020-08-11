import { Typography, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import Grid from '@material-ui/core/Grid'

const ContactSectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Contact'} isPage>
      <div>
        <iframe
          style={{ width: '100%', height: '30vh' }}
          src={'https://maps.google.com/maps?q=Pla%C3%A7a%20Mossen%20Homar%2017&t=&z=15&ie=UTF8&iwloc=&output=embed'}
          frameBorder={'0'}
          scrolling={'no'}
          marginHeight={'0'}
          marginWidth={'0'}
        />
      </div>

      <Grid container direction='row' justify='flex-start' alignItems='stretch'>
        <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>a</Grid>
        <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>a</Grid>
        <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>a</Grid>
        <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>a</Grid>
      </Grid>
    </PortfolioSection>
  )
}

export const ContactSection = withStyles(styles)(ContactSectionComponent)
