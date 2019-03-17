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
    selectedHost: null,
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


  clickHandler = (hostObj) => {
    let hostsList = [...this.state.hosts]
    let clickedHostObj = hostsList.find(host => host.id === hostObj.id)
     this.setState({
       selectedHost: clickedHostObj
     })
   }

  toggleHandler = (hostObj) => {
    let hostsList = [...this.state.hosts]
    let toggledHost = hostsList.find(host => host.id === hostObj.id)

    toggledHost.active = !toggledHost.active

      this.setState({
        hosts: hostsList
      })

  }

  render() {

    const activeHosts = this.state.hosts.filter(host => host.active)
    const inactiveHosts = this.state.hosts.filter(host => !host.active)


    return (<Segment id='app'>
      <WestworldMap areas={this.state.areas} hosts={activeHosts} selectedHost={this.state.selectedHost} clickHandler={this.clickHandler}/>
      <Headquarters areas={this.state.areas} hosts={this.state.hosts} inactiveHosts={inactiveHosts} selectedHost={this.state.selectedHost} clickHandler={this.clickHandler} toggleHandler={this.toggleHandler}/>
    </Segment>)
  }
}

export default App;
