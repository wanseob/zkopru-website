import React from 'react'
import { Button, Container, Title } from 'bloomer'
import { TabLink } from 'bloomer/lib/components/Tabs/TabLink'

const Playground = () => (
  <Container>
    <Title isSize="2">Playground</Title>
    <hr />
    <p>
      You can use Zkopru Playground to try the CLI wallet or monitor the
      coordinator. It simply serves the CLI applications using the web interface
      through GoTTY. Note that the application can be in use by several people
      simultaneously. Therefore it runs in an isolated environment, and
      automatically resets the system every hour. If you find any bug when using
      the playground, please report it through Github.
    </p>
    <br />
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
  </Container>
)

export default Playground
