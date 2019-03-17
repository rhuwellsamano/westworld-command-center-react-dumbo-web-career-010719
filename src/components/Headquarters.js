import React, {Component} from 'react';
import '../stylesheets/Headquarters.css';
import {Grid} from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

class Headquarters extends Component {

  render() {

    let inactiveHosts = this.props.hosts.filter(host => !host.active)

    return (<Grid celled='internally'>
      <Grid.Column width={8}>

        <ColdStorage areas={this.props.areas} hosts={inactiveHosts} current={this.props.current} clickHandler={this.props.clickHandler} selectedHost={this.props.selectedHost}/>

      </Grid.Column>
      <Grid.Column width={5}>

        <Details
          areas={this.props.areas}
          hosts={this.props.inactiveHosts} selectedHost={this.props.selectedHost} logs={this.props.logs} toggleHandler={this.props.toggleHandler} AreaChangeHandler={this.props.AreaChangeHandler}/>

      </Grid.Column>
      <Grid.Column width={3}>

        <LogPanel toggleAllHandler={this.props.toggleAllHandler} logs={this.props.logs} />

      </Grid.Column>
    </Grid>)
  }
}

export default Headquarters;
