import React from 'react'
import { Button, Container, Title } from 'bloomer'
import { TabLink } from 'bloomer/lib/components/Tabs/TabLink'
import { Content } from 'bloomer/lib/elements/Content'

const Playground = () => (
  <Container>
    <Title isSize="2">Playground</Title>
    <hr />
    <p>
      You can use Zkopru Playground to try the CLI wallet or monitor the
      coordinator. It simply serves the CLI applications using the web interface
      through GoTTY. Note that the application can be in use by several people
      simultaneously. So, it runs the program in an isolated environment, and
      automatically resets the system every hour. If you find any bug when using
      the playground, please report it through [Github](https://github.com/zkopru-network/zkopru/issues).
    </p>
    <br />    
    <Title isSize="4">How to test</Title>
    <Content>
    <p>Try to make a private transfer transaction.</p>
    <ol>
    <li>Select any account in the list at the top menu.</li>
    <li>Send 0.5 Ether to 0xa544f842c83b24ec53910f98ff0b22c2dab69bc329ffb81e29d3ed9638bfec28.</li>
    <li>Enter the fee for your transaction.</li>
    </ol>
    <p>Your transaction will be included in a block if the coordinator aggregates enough transactions.</p>
    <TabLink href="https://playground.zkopru.network" target="_blank">
      <Button isColor="white" isOutlined>
        Try Zkopru wallet in the playground
      </Button>
    </TabLink>
    <br />
    <br />
    <TabLink href="https://monitor.playground.zkopru.network" target="_blank">
      <Button isColor="white" isOutlined>
        Monitor the playground coordinator
      </Button>
    </TabLink>
    </Content>
    <hr />
    <Title isSize="4">Or just download the CLI wallet</Title>
    <TabLink href="https://docs.zkopru.network/getting-started" target="_blank">
      <Button isColor="white" isOutlined>
        Getting started
      </Button>
    </TabLink>
  </Container>
)

export default Playground
