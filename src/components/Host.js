import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  // {/*className=props.current.id === props.host.id ? "host selected": "host"*/}
  // {/*onClick={() => props.clickHandler(props.host)*/}

  return(
    <Card
      className="host"
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
