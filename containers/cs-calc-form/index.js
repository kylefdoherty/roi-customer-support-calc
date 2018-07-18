import React, { Component } from 'react'
import get from 'lodash.get'
import {
  Field,
  Label,
  Control,
  Title,
  Input,
  Button,
  Columns,
  Column
} from 'bloomer'

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

const COSTS = [
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
]

const REVENUES = [
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

const submitStyles = {
  margin: 'auto',
  display: 'block',
  marginTop: '3rem',
  paddingBotom: '2rem',
  width: '50%',
}

const Submit = () =>
  <Control>
    <Button type="submit" isColor='primary' style={submitStyles}>Calculate</Button>
  </Control>

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
    const fieldStyles = {
      minHeight: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
    const { breakeven, ratio } = this.props

    return(
      <div>
        <form onSubmit={this.handleSubmit} style={{ background: '#fbfbfb', paddingBottom: '2rem' }}>
          <div className="fields">
            <Columns style={{ 'width': '100%', justifyContent: 'space-around' }}>
              <Column isSize={5}>
                {
                  COSTS.map(cost => {
                    return (
                      <Field key={cost.name} style={fieldStyles}>
                        <Label>{cost.title}</Label>
                        <p>{cost.description}</p>
                        <Control>
                          <Input
                            type={cost.type}
                            name={cost.name}
                            value={get(this.state, cost.name, '')}
                            placeholder={cost.title}
                            onChange={(e) => { this.handleInputChange(e, cost.name)}}
                          />
                        </Control>
                      </Field>
                    )
                  })
                }
              </Column>
              <Column isSize={5}>
                {
                  REVENUES.map(rev => {
                    return (
                      <Field key={rev.name} style={fieldStyles}>
                        <Label>{rev.title}</Label>
                        <p>{rev.description}</p>
                        <Control>
                          <Input
                            type={rev.type}
                            name={rev.name}
                            placeholder={rev.title}
                            value={get(this.state, rev.name, '')}
                            onChange={(e) => { this.handleInputChange(e, rev.name)}}
                          />
                        </Control>
                      </Field>
                    )
                  })
                }
              </Column>
            </Columns>
          </div>
          <div>
            <Columns style={{ width: '60%', background: '#e6e6e6', margin: 'auto', marginTop: '3rem' }}>
              <Column isSize={6} style={{ textAlign: 'center' }}>
                <Title isSize={5}>Breakeven</Title>
                <Title isSize={5}>{`$ ${breakeven}`}</Title>
              </Column>
              <Column isSize={6} style={{ textAlign: 'center' }}>
                <Title isSize={5}>LTV / CAC Ratio</Title>
                <Title isSize={5}>{ratio}</Title>
              </Column>
            </Columns>
          </div>
          <Submit />
        </form>
      </div>
    )
  }
}

export default CSCalcForm

// {
//   FORM_FIELDS.map(field => {
//     return(
//       <Field key={field.name}>
//         <Label>{field.title}</Label>
//         <p>{field.description}</p>
//         <Control>
//           <Input
//             type={field.type}
//             name={field.name}
//             value={get(this.state, field.name, '')}
//             onChange={(e) => { this.handleInputChange(e, field.name)}}
//           />
//         </Control>
//       </Field>
//     )
//   })
// }
//

