import logo from './logo.svg'
import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div className='POPOSSpace'> 
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="100"
        height="100"
        alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace