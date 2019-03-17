import React, {Component} from 'react';
import '../stylesheets/Headquarters.css';
import {Grid} from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
// import HostInfo from './HostInfo'
import LogPanel from './LogPanel'

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render() {

    let inactiveHosts = this.props.hosts.filter(host => !host.active)

    return (<Grid celled='internally'>
      <Grid.Column width={8}>

        <ColdStorage areas={this.props.areas} hosts={inactiveHosts} current={this.props.current} clickHandler={this.props.clickHandler} selectedHost={this.props.selectedHost}/>

      </Grid.Column>
      <Grid.Column width={5}>

        <Details
          areas={this.props.areas}
          hosts={this.props.inactiveHosts} selectedHost={this.props.selectedHost} toggleHandler={this.props.toggleHandle} AreaChangeHandler={this.props.AreaChangeHandler}/>

      </Grid.Column>
      <Grid.Column width={3}>

        <LogPanel toggleAllHandler={this.props.toggleAllHandler} logs={this.props.logs} />

      </Grid.Column>
    </Grid>)
  }
}

export default Headquarters;
