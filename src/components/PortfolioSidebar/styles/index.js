export const styles = theme => {
  return {
    container: {
      height: '100vh',
      paddingTop: 40,
      backgroundColor: theme.palette.primary[400],
      paddingRight: '10%',
      paddingLeft: '10%',
      position: 'relative',
      color: theme.palette.text.secondary
    },
    imageMe: {
      width: 350,
      height: 350,
      backgroundColor: theme.palette.secondary[300],
      borderRadius: '100%',
      margin: '0 auto',
      backgroundImage:
        "url('https://media-exp1.licdn.com/dms/image/C4E03AQGKuuX_Jxx1Nw/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=_IraE4VtTxe2g1K3gwkQuJNBftCpXBlp4krk7X9RHwQ')",
      backgroundSize: 'cover'
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
