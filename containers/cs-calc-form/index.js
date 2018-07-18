import React, { Component } from 'react'
import get from 'lodash.get'

const FORM_FIELDS = [
  {
    type: 'number',
    title: 'Customer Aquisition Cost',
    description: 'money spent on sales and marketing to acquire a customer; paid content, advertising, conference sponsorships etc.',
    name: 'customer_aquisition_cost',
  },
  {
    type: 'number',
    title: 'Customer Activation Cost',
    description: 'money spent on onboarding customers, product education, set up during the early stages of the customer experience.',
    name: 'customer_activation_cost',
  },
  {
    type: 'number',
    title: 'Customer Retention Cost',
    description: 'money spent to avoid churn—knowledge base upkeep, staffing, systems and technology, “customer delight”.',
    name: 'customer_retention_cost',
  },
  {
    type: 'number',
    title: 'Annual Recurring Revenue',
    description: 'money a customer pays to your business in 1 year.',
    name: 'annual_recurring_revenue',
  },
  {
    type: 'number',
    title: 'Referral Revenue',
    description: 'revenue acquired without CAC (they tell a friend, or move to a new company and buy your product).',
    name: 'referral_revenue',
  },
  {
    type: 'number',
    title: 'Expansion Revenue',
    description: 'money a customer pays above what they started paying',
    name: 'expansion_revenue',
  },

]

const INITIAL_FORM_STATE = FORM_FIELDS.reduce((formState, field) => {
  formState[field.name] = ''
  return formState
}, {})

class CSCalcForm extends Component {
  state = INITIAL_FORM_STATE

  handleInputChange = (e, inputName) => {
    this.setState({
      [inputName]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { calcRoi, calcRatio } = this.props
    const revenues = [
      this.state.annual_recurring_revenue,
      this.state.referral_revenue,
      this.state.expansion_revenue
    ]
    const costs = [
      this.state.customer_aquisition_cost,
      this.state.customer_activation_cost,
      this.state.customer_retention_cost,
    ]
    calcRoi(revenues)(costs)
    calcRatio(revenues)(this.state.customer_aquisition_cost)

    e.preventDefault()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            FORM_FIELDS.map(field => {
              return(
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.title}
                  value={get(this.state, field.name, '')}
                  onChange={(e) => { this.handleInputChange(e, field.name)}}
                />
              )
            })
          }
          <input type="submit" value="Calculate ROI" />
        </form>
      </div>
    )
  }
}

export default CSCalcForm
