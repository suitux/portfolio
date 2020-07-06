import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const AchievementAlertComponent = ({ open, onClose, children, severity = 'success', text, classes }) => {
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {!children ? `Archivement Unlocked: ${text}` : children}
      </Alert>
    </Snackbar>
  )
}

export const AchievementAlert = withStyles(styles)(AchievementAlertComponent)
