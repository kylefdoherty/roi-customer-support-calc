import CSCalc from '../containers/cs-calc'
import Head from 'next/head'
import {
  Container,
  Title,
} from 'bloomer'

const mainHeaderStyles = {
  background: '#00d1b2',
  height: '80px',
  textAlign: 'center',
  lineHeight: '80px',
  color: '#fff',
}

const secondaryHeaderStyles = {
  textAlign: 'center',
  width: '60%',
  margin: 'auto',
  marginBottom: '2rem',
  paddingBottom: '1rem',
  paddingTop: '1rem',
}

const CSRoiPage = () =>
  <>
    <Head>
      <title>Customer Support ROI Calculator</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossOrigin="anonymous" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossOrigin="anonymous" />
    </Head>
    <Title isSize={2} style={mainHeaderStyles}>Customer Support ROI Calculator</Title>
    <Container>
      <Title isSize={5} style={secondaryHeaderStyles}>
        This calculator determines how much money you can reasonably spend to
        support your customers in order to grow your business.
      </Title>
      <CSCalc />
    </Container>
  </>


export default CSRoiPage
