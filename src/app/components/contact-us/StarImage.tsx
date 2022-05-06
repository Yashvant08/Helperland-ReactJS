import React from 'react'
import { Star } from '../../assets'

type starImageProps = {
    heading:string;
}

const StarImage:React.FC<starImageProps> = (props:starImageProps) => {
  return (
    <React.Fragment>
        <h1 className='star-img-heading'>{props.heading}</h1>
        <div className='starimg'>
            <hr style={{width:"62px",border:"0", borderTop:"1px solid #cccccc", display:"block", height:"1px", marginRight:"9px", padding:"0"}} />
            <img src={Star} alt="Star" />
            <hr style={{width:"62px",border:"0", borderTop:"1px solid #cccccc", display:"block", height:"1px", marginLeft:"9px", padding:"0"}} />
        </div>
    </React.Fragment>
  )
}

export default StarImage