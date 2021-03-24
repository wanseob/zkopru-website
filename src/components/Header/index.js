import React from 'react'
import Link from 'gatsby-link'
import { Container, Tabs, TabList, Icon, Tab, TabLink } from 'bloomer'

const AppHeader = () => (
  <Container>
    <Tabs isAlign="centered">
      <TabList>
        <Tab>
          <Link to="/">Home</Link>
        </Tab>
        {/* <Tab>
          <Link to="/playground/">Playground</Link>
        </Tab>
        <Tab>
          <Link to="/testnet/">Testnet</Link>
        </Tab> */}
        <Tab>
          <Link to="/roadmap/">Roadmap</Link>
        </Tab>
      </TabList>
    </Tabs>
  </Container>
)

export default AppHeader
