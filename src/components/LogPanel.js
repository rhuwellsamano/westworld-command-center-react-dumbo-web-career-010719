import React, {Component} from 'react';
import {Segment, Button} from 'semantic-ui-react';

class LogPanel extends Component {

  state = {
    activated: false
  }

  handleToggle = () => {
    this.setState({
      activated: !this.state.activated
    })
    this.props.toggleAllHandler(!this.state.activated)
  }

  render() {

    let logs = this.props.logs.map((log, index) => <p key={index} className={log.split('] ')[1].split(':')[0]}>{log}</p>)
    console.log(logs)


    return (
      <Segment className="HQComps" id="logPanel">
        <pre>
            {logs}
          </pre>

        <Button fluid="fluid" color={this.state.activated ? "green" : "red"} content={this.state.activated === true ? "DEACTIVATE ALL" : "ACTIVATE ALL"} onClick={this.handleToggle}/>
      </Segment>
    )
  }
}

export default LogPanel
