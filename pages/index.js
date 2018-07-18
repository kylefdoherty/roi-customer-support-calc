import { Fragment } from 'react'
import CSCalc from '../containers/cs-calc'
import Head from 'next/head'

const CSRoiPage = () =>
  <Fragment>
     <Head>
      <title>Customer Support ROI Calculator</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossOrigin="anonymous" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossOrigin="anonymous" />
    </Head>
    <h2>Customer Support ROI Calculator</h2>
    <h3>
      This calculator determines how much money you can reasonably spend to
      support your customers in order to grow your business.
    </h3>
    <CSCalc />
  </Fragment>

export default CSRoiPage
