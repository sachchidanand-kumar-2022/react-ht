import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {

  return (
 <div className="card">
        <div>
          <div className="top">
            <img src={props.logo} alt="" />
            <button>Save <Bookmark size={13} /> </button>
          </div>
          <div className="center">
            <h3>{props.company} <span>{props.datepost}</span></h3>
            <h2>{props.carreer}</h2>
            <div className='center-div'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.price}</h3>
            <p>{props.place}</p>
          </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default card
