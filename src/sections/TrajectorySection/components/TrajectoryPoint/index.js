import { Typography, withStyles } from "@material-ui/core";
import { styles } from "./styles";

const TrajectoryPointComponent = ({ enterprise, job, imageUrl, dateRange, children, style, classes }) => {
  return (
    <div className={classes.container} style={style}>
      <div className={classes.logoContainer} style={{backgroundImage: `url('${imageUrl}')`}} />
      <Typography variant={'h4'} component={'h3'} className={classes.title}>{enterprise}</Typography>
      <Typography variant={'h6'} component={'h4'} className={classes.subtitle}>{job}</Typography>
      <Typography variant={'caption'} className={classes.dateRange}>{dateRange.from} - {dateRange.to}</Typography>
      <hr className={classes.separator} />
      <div>{children}</div>
    </div>
  )
}

export const TrajectoryPoint = withStyles(styles)(TrajectoryPointComponent)
