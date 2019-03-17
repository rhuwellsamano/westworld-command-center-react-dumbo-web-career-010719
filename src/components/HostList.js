import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  let hosts = props.hosts.map(hostObj => <Host key={hostObj.id} host={hostObj} selectedHost={props.selectedHost} clickHandler={props.clickHandler}
  selectedHostTextForCss={hostObj === props.selectedHost ? "selected host" : "host"}/>)

  return(
    <Card.Group itemsPerRow={6}>
      {hosts}
    </Card.Group>
  )
}

export default HostList
