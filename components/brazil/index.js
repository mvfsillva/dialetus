import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import BrazilSvg from './brazilSvg'

class Brazil extends PureComponent {
  static propTypes = {
    handleSelected: PropTypes.func.isRequired,
  }

  constructor () {
    super()
    this.state = {
      stateId: '',
      stateName: '',
      language: ''
    }
  }

  onMouseOver = (stateId, stateName) => {
    this.setState(() => ({ stateName, stateId }))
  }

  onClick = language => {
    this.props.handleSelected(language)
    this.setState({ language })
  }

  render() {
    const { stateId, stateName } = this.state

    return (
      <Fragment>
        <ReactTooltip id={stateId} type="dark" effect="float">
          <span>{stateName}</span>
        </ReactTooltip>
        <BrazilSvg
          height={420}
          width={420}
          onSelect={this.onClick}
          onMouseOver={this.onMouseOver}
        />
      </Fragment>
    )
  }
}

export default Brazil
