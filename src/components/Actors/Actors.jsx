import React from 'react'
import {getOriginalImg} from '../../config';

const Actors = ({actorsList}) => {


  return (
    <div className="actorsList">
          {actorsList.map(item => {
                    return (<React.Fragment key={item.id}>  <div className='actors'><img className='imgActor' src={getOriginalImg(item.profile_path)} alt=""/> <h2>{item.name}</h2></div> </React.Fragment>)
                  })}  
  </div>
  )
}

export default Actors