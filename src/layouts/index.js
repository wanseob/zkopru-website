import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  Icon,
  TabLink,
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zkopru - Layer 2 for private txs">
      <meta
        property="og:image"
        content="https://docs.google.com/drawings/d/e/2PACX-1vRwGTvmJAbNBZCK5syubcrWZgYc3wuK9cHZScbc5lgyLbBYsx42Xzo60unw4-oLlPg_-nwXxaE3t9c6/pub?w=1280&h=640"
      />
      <meta
        name="description"
        content="Ethereum Layer 2 scaling solution for private transactions."
      />
      <meta
        name="keywords"
        content="zkSNARK, Ethereum, L2, Layer2, Optimistic Rollup, rollup, zk, zero knowledge, privacy, SNARK"
      />
    </Helmet>
    <Hero isFullHeight isColor="primary">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>{children()}</HeroBody>

      <HeroFooter>
        <Container>
          <Tabs isAlign="centered">
            <TabList>
              <Tab>
                <TabLink href="https://docs.zkopru.network" target="_blank">
                  <Icon isSize="small" className="fa fa-book" />
                  Document
                </TabLink>
              </Tab>
              <Tab>
                <TabLink
                  href="https://github.com/wanseob/zkopru"
                  target="_blank"
                >
                  <Icon isSize="small" className="fa fa-github" />
                  Source code
                </TabLink>
              </Tab>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
