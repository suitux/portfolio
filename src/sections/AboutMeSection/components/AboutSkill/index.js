import { Typography, withStyles, withWidth } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const AboutSkillComponent = ({ text, image, position, width, imageSize = 175, description }) => {
  const textMargin = width === 'xs' || width === 'sm' ? 0 : 20

  const renderText = text => {
    return (
      <Grid item xs={12} style={{ marginBottom: 30, textAlign: 'center' }}>
        <Typography
          variant={'h4'}
          style={{
            textAlign: 'center'
          }}
        >
          {text}
        </Typography>
      </Grid>
    )
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          <img
            src={image}
            style={{
              width: imageSize,
              display: 'block',
              margin: '0 auto'
            }}
          />
        </Grid>
        {renderText(text)}
      </Grid>
    </Grid>
  )
}

export const AboutSkill = withWidth()(AboutSkillComponent)
