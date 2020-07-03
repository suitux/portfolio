import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  overrides: {
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: 'dark',
    primary: blue,
    secondary: grey,
    text: {
      primary: '#2f2f2f',
      secondary: '#FFFFFF'
    },
    background: {
      default: grey[300]
    }
  }
})

export default theme
