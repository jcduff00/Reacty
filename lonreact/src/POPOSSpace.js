import logo from './logo.svg'
import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address, hours } = props
  return (
    <div className='POPOSSpace'> 
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="100"
        height="100"
        alt="Hello"
      />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default POPOSSpace