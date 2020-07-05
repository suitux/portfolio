import { Typography, withStyles } from "@material-ui/core";
import { styles } from "./styles";

const TrajectoryPointComponent = ({ enterprise, job, imageUrl, children, style, classes }) => {
  return (
    <div className={classes.container} style={style}>
      <div className={classes.logoContainer} style={{backgroundImage: `url('${imageUrl}')`}} />
      <Typography variant={'h4'} component={'h3'} className={classes.title}>{enterprise}</Typography>
      <Typography variant={'h6'} component={'h4'} className={classes.subtitle}>{job}</Typography>
      <hr className={classes.separator} />
      {children}
    </div>
  )
}

export const TrajectoryPoint = withStyles(styles)(TrajectoryPointComponent)
