import {type FC} from 'react'
import './styles.css'

type ParkedProps = {
  title: string
}

const Parked: FC<ParkedProps> = ({title}) => {
  return <div className="parked-container">This is a {title} page</div>
}

export default Parked
