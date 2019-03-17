import React, {Component} from 'react';
import './stylesheets/App.css'
import {Segment} from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    areas: [],
    hosts: [],
    current: 'Details',
    logs: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/areas')
      .then(res => res.json())
      .then(areas => this.setState({areas}))
    fetch('http://localhost:4000/hosts')
      .then(res => res.json())
      .then(hosts => this.setState({hosts}))
  }

  render() {
    return (<Segment id='app'>
      <WestworldMap areas={this.state.areas} hosts={this.state.hosts}/>
      <Headquarters areas={this.state.areas} hosts={this.state.hosts}/>
    </Segment>)
  }
}

export default App;
