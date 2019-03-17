import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  let hosts = props.hosts.map(host => <Host key={host.id} host={host} selectedHost={props.selectedHost} clickHandler={props.clickHandler}/>)

  return(
    <Card.Group itemsPerRow={6}>
      {hosts}
    </Card.Group>
  )
}

export default HostList
