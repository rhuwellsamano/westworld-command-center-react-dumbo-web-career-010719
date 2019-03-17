import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {

  console.log('updated area to:', props)

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(

    <Segment id="details" className="HQComps">
      {props.selectedHost ? <HostInfo areas={props.areas} selectedHost={props.selectedHost} toggleHandler={props.toggleHandler} AreaChangeHandler={props.AreaChangeHandler} /> : renderSomething()}
    </Segment>
  )
}


export default Details
