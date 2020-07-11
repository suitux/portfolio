import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography, withStyles } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'

const SkillComponent = ({ title, size, image, value, style }) => {
  return (
    <Tooltip title={title}>
      <div style={{ width: size, ...style }}>
        <Box position='relative' display='inline-flex'>
          <CircularProgress variant='static' value={value} size={size} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position='absolute'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <div
              style={{
                width: '80%',
                height: '80%',
                borderRadius: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${image})`
              }}
            />
          </Box>
        </Box>
        <Typography
          variant={'caption'}
          component={'div'}
          style={{ textAlign: 'center', fontSize: 'larger', fontWeight: 'bold' }}
        >
          {value}%
        </Typography>
      </div>
    </Tooltip>
  )
}

export const Skill = SkillComponent
