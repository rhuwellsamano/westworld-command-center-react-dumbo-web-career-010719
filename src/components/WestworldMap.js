import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {
  let areas = props.areas.map(area => <Area area={area} hosts={props.hosts}/>)

  return (

    <Segment id="map" >
      {areas}
    </Segment>
  )
}

export default WestworldMap
