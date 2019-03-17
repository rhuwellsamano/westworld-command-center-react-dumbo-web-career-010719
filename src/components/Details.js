import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  console.log(props)

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(
    
    <Segment id="details" className="HQComps">
      {props.selectedHost ? <HostInfo areas={props.areas} selectedHost={props.selectedHost} toggleHandler={props.toggleHandler} /> : renderSomething()}
    </Segment>
  )
}

export default Details
