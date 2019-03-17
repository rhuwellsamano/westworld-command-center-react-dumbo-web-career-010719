import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'

class HostInfo extends Component {

  areaName = (name) => name.split('_').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')

  state = {
    options: this.props.areas.map(area => ({key: area.name, text: this.areaName(area.name), value: area.name})),
    value: this.props.selectedHost.area
  }

  handleChange = (e, {value}) => {
    // note: in the params above, 'value' is the area selected from dropdown onchange
    this.props.AreaChangeHandler(value, this.props.selectedHost)

    this.props.areas.find(area => area.name === value)
  }

  toggle = () => {
    this.props.toggleHandler(this.props.selectedHost)
  }

  render(){

    let {firstName, active, imageUrl, gender, area} = this.props.selectedHost

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} | { gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={active ? 'Active':'Decomissioned'}
                  checked={active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
