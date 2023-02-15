import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {
  
const spaces = data.map(( { title, address, images, hours } ) => {
  return (
    <POPOSSpace
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
})
    return (
      <div className="POPOSList">
        { spaces }
      </div>
    )
}
//  // return (
//       <div className="POPOSList">
//         <POPOSSpace
//           name="Ron DeSantis"
//           address="46th Governor of Florida"
//           image="Ron_DeSantis_official_photo.jpg"
//         />
//         <POPOSSpace
//           name="Nikki Haley"
//           address="29th United Nations Ambassador"
//           image="Nikki_Haley_official_photo.jpg"
//         />
//         <POPOSSpace 
//           name="Mike Pence" 
//           address="48th Vice President of the United States" 
//           image="Mike_Pence_official_photo.jpg"
//           />
//         <POPOSSpace 
//           name="Tim Scott" 
//           address="Senator from South Carolina" 
//           image="Tim_Scott,_official_photo.jpg" 
//           />
//         <POPOSSpace 
//           name="Mike Pompeo" 
//           address="70th Secretary of State" 
//           image="Mike_Pompeo_official_photo.jpg"
//           />
//         <POPOSSpace 
//           name="Kristi Noem" 
//           address="33rd Governor of South Dakota" 
//           image="Kristi_Noem_official_photo.jpg" 
//           />
//       </div>
//    )
// }/

export default POPOSList

