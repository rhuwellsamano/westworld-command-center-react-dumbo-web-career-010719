import React, {Component} from 'react';
import './stylesheets/App.css'
import {Segment} from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'
import { Log } from './services/Log'

class App extends Component {

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

  addLog = (newLog) => {
    console.log(newLog)
    let updatedLogs = [newLog.msg, ...this.state.logs]
    this.setState({
      logs: updatedLogs
    })
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

    let newLog = toggledHost.active ? Log.warn(`Activated ${toggledHost.firstName}`) : Log.notify(`Deactivated ${toggledHost.firstName}`)

    this.addLog(newLog)
  }

  toggleAllHandler = (status) => {
    let hostsList = [...this.state.hosts]
    hostsList.map(host => host.active = status)
    this.setState({
      hosts: hostsList
  })
    let newLog = status ? Log.warn('Activating all hosts!') : Log.notify('Deactivating all hosts!')
    console.log('New Log:', newLog)
    this.addLog(newLog)
}

  areaName = (name) => name.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')

  AreaChangeHandler = (newArea, selectedHost) => {
    console.log('Selected Host:', selectedHost)
    console.log('New Area:', newArea)

    let hostsList = [...this.state.hosts]
    let hostToChangeArea = hostsList.find(hostObj => hostObj.id === selectedHost.id)
    let requestedNewArea = this.state.areas.find(area => area.name === newArea)
    let numOfHostsInArea = hostsList.filter(hostObj => hostObj.area === newArea).length

    // eslint-disable-next-line
    {numOfHostsInArea < requestedNewArea.limit ? hostToChangeArea.area = newArea : null}

    console.log('Number of Hosts in Area:', numOfHostsInArea)
    console.log('AreaObj Limit:', requestedNewArea.limit)


    let newLog = numOfHostsInArea < requestedNewArea.limit ? Log.notify(`${hostToChangeArea.firstName} set in area ${this.areaName(newArea)}`) : Log.error(`Too many AI hosts. Cannot add ${hostToChangeArea.firstName} to ${this.areaName(newArea)}`)

    this.addLog(newLog)

    this.setState({
      hosts: hostsList
    })
  }

  render() {

    const activeHosts = this.state.hosts.filter(host => host.active)
    const inactiveHosts = this.state.hosts.filter(host => !host.active)

    return (<Segment id='app'>
      <WestworldMap areas={this.state.areas} hosts={activeHosts} selectedHost={this.state.selectedHost} clickHandler={this.clickHandler} />
      <Headquarters areas={this.state.areas} hosts={this.state.hosts} inactiveHosts={inactiveHosts} selectedHost={this.state.selectedHost} logs={this.state.logs} clickHandler={this.clickHandler} toggleHandler={this.toggleHandler} toggleAllHandler={this.toggleAllHandler} AreaChangeHandler={this.AreaChangeHandler}/>
    </Segment>)
  }
}

export default App;
