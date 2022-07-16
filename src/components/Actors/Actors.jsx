import React from 'react'
import {getOriginalImg} from '../../config';

const Actors = ({actorsList}) => {


  return (
    <div className="actorsList">
          {actorsList.map(item => {
                  return (  (item.profile_path)  ? <React.Fragment key={item.id}> 
                                                       <div className='actors'>
                                                          <img className='imgActor' src={getOriginalImg(item.profile_path)} alt=""/> 
                                                          <h2>{item.name}</h2>
                                                          <h3>{item.character}</h3>
                                                        </div> </React.Fragment>
                                                  :              
                                                    <React.Fragment key={item.id}> 
                                                              <div className='actors'>
                                                                  <div className="notImg">
                                                                      <span>{item.name[0]}</span>
                                                                    </div> 
                                                                    <h2>{item.name}</h2>
                                                                    <h3>{item.character}</h3>
                                                                </div>
                                                    </React.Fragment>
                           )
                        })}  
  </div>
  )
}

export default Actors