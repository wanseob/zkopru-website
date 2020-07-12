import React from 'react'
import Link from 'gatsby-link'
import { Container, Title } from 'bloomer'
import { Content } from 'bloomer/lib/elements/Content'
import { Columns } from 'bloomer/lib/grid/Columns'
import { Column } from 'bloomer/lib/grid/Column'
import { Subtitle } from 'bloomer/lib/elements/Subtitle'
import { TabLink } from 'bloomer/lib/components/Tabs/TabLink'

const Roadmap = () => (
  <Container>
    <Title isSize="2">Roadmap</Title>
    <hr />
    <Columns>
      <Column isSize="1/2">
        <TabLink
          href="https://github.com/zkopru-network/zkopru/projects/1"
          target="_blank"
        >
          <Title isSize="4">Arctic roll</Title>
        </TabLink>
        <Subtitle>(testnet)</Subtitle>
        <p>The first working testnet of zkopru.</p>
      </Column>
      <Column isSize="1/2">
        <Content>
          <ul>
            <li>Zk wallet</li>
            <li>Full node</li>
            <li>Circuits & contracts</li>
            <li>Deposit</li>
            <li>Private transfer</li>
            <li>Withdrawal</li>
          </ul>
        </Content>
      </Column>
    </Columns>
    <hr />
    <Columns>
      <Column isSize="1/2">
        <TabLink
          href="https://github.com/zkopru-network/zkopru/projects/5"
          target="_blank"
        >
          <Title isSize="4">Burrito</Title>
        </TabLink>
        <Subtitle>(testnet + mainnet)</Subtitle>
        <p>Support challenges.</p>
      </Column>
      <Column isSize="1/2">
        <Content>
          <ul>
            <li>Challenge support</li>
            <li>Updated nullifier model</li>
            <li>Soft-launching on mainnet(at your own risk)</li>
          </ul>
        </Content>
      </Column>
    </Columns>
    <hr />
    <Columns>
      <Column isSize="1/2">
        <TabLink
          href="https://github.com/zkopru-network/zkopru/projects/5"
          target="_blank"
        >
          <Title isSize="4">Grilled Burrito</Title>
        </TabLink>
        <Subtitle>(testnet + mainnet)</Subtitle>
        <p>Upgrade layer 2 features from Buritto.</p>
      </Column>
      <Column isSize="1/2">
        <Content>
          <ul>
            <li>Simple block explorer</li>
            <li>Private atomic swap</li>
            <li>Migration</li>
            <li>Instant withdrawal</li>
            <li>Simulator & benchmark</li>
          </ul>
        </Content>
      </Column>
    </Columns>
    <hr />
    <Columns>
      <Column isSize="1/2">
        <TabLink
          href="https://github.com/zkopru-network/zkopru/projects/5"
          target="_blank"
        >
          <Title isSize="4">California roll</Title>
        </TabLink>
        <Subtitle>(mainnet)</Subtitle>
        <p>Audited mainnet version.</p>
      </Column>
      <Column isSize="1/2">
        <Content>
          <ul>
            <li>Audit</li>
            <li>Trusted setup</li>
            <li>Light node</li>
            <li>Mobile wallet support</li>
            <li>Coordinator dashboard</li>
          </ul>
        </Content>
      </Column>
    </Columns>
    <hr />
    <Columns>
      <Column isSize="1/2">
        <TabLink
          href="https://github.com/zkopru-network/zkopru/projects/6"
          target="_blank"
        >
          <Title isSize="4">Dragon roll</Title>
        </TabLink>
        <Subtitle>(mainnet)</Subtitle>
        <p>Decentralized coordinator.</p>
      </Column>
      <Column isSize="1/2">
        <Content>
          <ul>
            <li>TBD</li>
          </ul>
        </Content>
      </Column>
    </Columns>
  </Container>
)

export default Roadmap
