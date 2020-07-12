import React from 'react'
import { Container, Title, Content } from 'bloomer'
import { Label } from 'bloomer/lib/elements/Form/Label'

const TestNet = () => (
  <Container>
    <Title isSize="2">Testnet</Title>
    <hr />
    <Content>
      <p>
        The default configuration of the current CLI application is the
        following:
      </p>
      <Label>Network</Label>
      <p>Running on Rinkeby</p>
      <Label>Layer-1 contract address</Label>
      <p>TBD</p>
      <Label>Coordinator HTTP API URL</Label>
      <p>
        <a href="https://coordinator.zkopru.network">
          https://coordinator.zkopru.network
        </a>
      </p>
      <Label>SNARK keys</Label>
      <p>
        <a href="https://zkopru.azureedge.net/snarkkeys/arctic-roll/1-0-0/keys.tgz">
          https://zkopru.azureedge.net/snarkkeys/arctic-roll/1-0-0/keys.tgz
        </a>
      </p>
    </Content>
  </Container>
)

export default TestNet
