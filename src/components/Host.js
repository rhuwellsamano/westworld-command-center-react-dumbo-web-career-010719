import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  // {/*className=props.current.id === props.host.id ? "host selected": "host"*/}
  // {/*onClick={() => props.clickHandler(props.host)*/}
console.log(props)
  return(
    <Card
      className={props.selectedHostTextForCss}
      onClick={() => props.clickHandler(props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
