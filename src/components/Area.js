import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => (

  <div className='area' id={props.area.name}>
    <h3 className='labels'>{/* Don't just pass in the name from the data...clean that thing up */ props.area.name}</h3>

    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    <HostList hosts={props.hosts}/>

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
