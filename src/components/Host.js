import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

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
