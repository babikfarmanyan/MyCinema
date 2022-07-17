import React from 'react'
import {getOriginalImg} from '../../config';
import "./Actors.css"

const Actors = ({actorsList}) => {


  return (
    <div className="actorsList">
          {actorsList.map(item => {
                  return (  (item.profile_path)  ? <React.Fragment key={item.id}> 
                                                       <div className='actor'>
                                                          <img className='imgActor' src={getOriginalImg(item.profile_path)} alt=""/> 
                                                          <div className="name">
                                                                      <h2>{item.name}</h2>
                                                                      <h3>{item.character}</h3>
                                                                    </div>
                                                        </div> </React.Fragment>
                                                  :              
                                                    <React.Fragment key={item.id}> 
                                                              <div className='actor'>
                                                                  <div className="notImg">
                                                                      <span>{item.name[0]}</span>
                                                                    </div> 
                                                                    <div className="name">
                                                                      <h2>{item.name}</h2>
                                                                      <h3>{item.character}</h3>
                                                                    </div>
                                                                    
                                                                </div>
                                                    </React.Fragment>
                           )
                        })}  
  </div>
  )
}

export default Actors