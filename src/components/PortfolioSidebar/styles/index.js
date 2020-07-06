export const styles = theme => {
  return {
    container: {
      minHeight: '-webkit-fill-available',
      height: '100vh',
      paddingTop: 40,
      backgroundColor: theme.palette.primary[400],
      paddingRight: '10%',
      paddingLeft: '10%',
      position: 'relative',
      color: theme.palette.text.secondary
    },
    imageMe: {
      width: '80%',
      display: 'block',
      margin: '0 auto'
    },
    title: {
      textAlign: 'center',
      letterSpacing: 6,
      fontWeight: 300,
      marginBottom: 0
    },
    subTitle: {
      textAlign: 'center',
      letterSpacing: 3,
      fontWeight: 300,
      marginTop: 5
    },
    separator: {
      borderColor: 'white',
      borderTopWidth: '1px',
      margin: '0px auto 20px auto'
    },
    link: {
      color: theme.palette.text.secondary,
      textDecoration: 'none',
      letterSpacing: 2
    },
    downloadAsPdf: {
      position: 'absolute',
      right: 30,
      bottom: 30
    }
  }
}
