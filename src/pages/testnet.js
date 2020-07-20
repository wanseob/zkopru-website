import React from 'react'
import { Container, Title, Content } from 'bloomer'
import { Label } from 'bloomer/lib/elements/Form/Label'
import { Box } from 'bloomer/lib/elements/Box'

const TestNet = () => (
  <Container style={{width: '100%'}}>
    <Title isSize="2">Testnet</Title>
    <hr />
    <p>Please check the default configuration of the current testnet.</p>
    <br/>
    <Title isSize="4">Layer 1 information</Title>
    <Content>
      <Label>Network</Label>
      <p>Running on Goerli</p>
      <Label>Contract address</Label>
      <p>0x98a9b814B423B4D17Cd612cD7943986aB9BF8c41</p>
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
    <Title isSize="4">Coordinator is rolling up your Arctic Roll ٩( ᐛ )و</Title>
    <Box style={{backgroundColor: 'black'}}>
    <iframe src="https://coordinator.zkopru.network:8080" width="100%" height="40%">
    </iframe>
    </Box>
  </Container>
)

export default TestNet
