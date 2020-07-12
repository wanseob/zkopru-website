import React from 'react'
import { Container, Title, Content } from 'bloomer'
import { Label } from 'bloomer/lib/elements/Form/Label'

const TestNet = () => (
  <Container>
    <Title isSize="2">Testnet</Title>
    <hr />
    <p>Please check the default configuration of the current testnet.</p>
    <br/>
    <Title isSize="4">Layer 1 information</Title>
    <Content>
      <Label>Network</Label>
      <p>Running on Rinkeby</p>
      <Label>Contract address</Label>
      <p>TBD</p>
    </Content>
    <Title isSize="4">Layer 2 information</Title>
    <Content>
      <Label>Coordinator API</Label>
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
