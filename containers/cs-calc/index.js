import React, { Component, Fragment } from 'react'

import CSCalcForm from '../cs-calc-form'

class CSCalc extends Component {
  state = {
    roi: '--',
    ratio: '--',
  }

  calcRoi = (revenues) => {
    const totalRev = revenues.reduce((acc, rev) => {
      return parseInt(acc) + parseInt(rev)
    })
    return (costs) => {
      const totalCost = costs.reduce((acc, cost) => {
        return parseInt(acc) + parseInt(cost)
      })

      const roi = totalRev - totalCost
      this.setState({ roi })
    }
  }

  calcRatio = (revenues) => {
    const totalRev = revenues.reduce((acc, rev) => {
      return parseInt(acc) + parseInt(rev)
    })

    return (cac) => {
      const ratio = totalRev / parseInt(cac)
      this.setState({ ratio })
    }
  }

  render() {
    return(
      <Fragment>
        <CSCalcForm
          calcRoi={this.calcRoi}
          calcRatio={this.calcRatio}
          breakeven={this.state.roi}
          ratio={this.state.ratio}
        />
      </Fragment>
    )
  }
}

export default CSCalc
