import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { PortfolioSection } from '../../components/PortfolioSection'
import { TrajectoryPoint } from './components/TrajectoryPoint'

const TrajectorySectionComponent = ({ classes }) => {
  return (
    <PortfolioSection title={'Trajectory'}>
      <TrajectoryPoint
        enterprise={'Nice People At Work (NPAW)'}
        job={'FullStack Developer'}
        imageUrl={
          'https://media-exp1.licdn.com/dms/image/C4D0BAQGY1z4_iBMETg/company-logo_200_200/0?e=2159024400&v=beta&t=BfDwoOwBkJcuIo1pBd73PV3ZKZiEVVwwuRVREiNUtLM'
        }
      >
        <ul>
          <li>Desarrollo de Framework de automatización de pruebas para un equipo de analítica de videos.</li>
          <li>Mejoras de UX para la web de la empresa.</li>
          <li>Desarrollo de plataforma basada en React para administrar usuarios y permisos internos de la empresa.</li>
          <li>Desarrollo de nuevas características para una plataforma de analítica de datos basada en React.</li>
        </ul>
      </TrajectoryPoint>

      <TrajectoryPoint
        enterprise={'Privalia'}
        job={'.NET Developer'}
        imageUrl={'https://www.xavirincon.com/src/img/privalia_logo.png'}
      >
        <ul>
          <li>Desarrollo de un SGA (Sistema de gestión de Almacenes).</li>
          <li>Desarrollador de un Framework de testing para el proyecto de Sistema de Gestión de Almacenes.</li>
        </ul>
      </TrajectoryPoint>

      <TrajectoryPoint
        enterprise={'Concatel'}
        job={'.NET Developer'}
        imageUrl={'https://www.xavirincon.com/src/img/concatel_logo.jpg'}
      >
        <ul>
          <li>Desarrollo de un SGA (Sistema de gestión de Almacenes).</li>
          <li>Desarrollador de un Framework de testing para el proyecto de Sistema de Gestión de Almacenes.</li>
        </ul>
      </TrajectoryPoint>

      <TrajectoryPoint
        enterprise={'Brainworks'}
        job={'FullStack Developer'}
        imageUrl={'https://www.xavirincon.com/src/img/brainworks_logo.jpg'}
      >
        <p>
          Programador de ASP.NET, C#, OraclePLSQL, PHP, Javascript, Visual Basic. He aprendido mucho a gestionar el
          tiempo de trabajo y programar nuevas tecnologías, así como aprender a analizar proyectos.
        </p>
      </TrajectoryPoint>

      <TrajectoryPoint
        enterprise={'As Software'}
        job={'Developer'}
        imageUrl={'https://www.xavirincon.com/src/img/assoftware_logo.jpg'}
      >
        <p>
          Programador de PowerBuilder dedicado a SGA (Software de Gestión de Almacenes). He aprendido mucho sobre
          Software de Gestión Empresarial y sobre gestión del tiempo de trabajo.
        </p>
      </TrajectoryPoint>

      <TrajectoryPoint
        enterprise={'ONCE'}
        job={'Video game developer'}
        imageUrl={'https://www.xavirincon.com/src/img/once_logo.jpg'}
      >
        <p>
          I developed a game orientated to blind people. The game it's on the Play Store.
        </p>
      </TrajectoryPoint>
    </PortfolioSection>
  )
}

export const TrajectorySection = withStyles(styles)(TrajectorySectionComponent)
