import React from 'react'
import { Button, Container, Title } from 'bloomer'
import { TabLink } from 'bloomer/lib/components/Tabs/TabLink'
import { Content } from 'bloomer/lib/elements/Content'
import { Box } from 'bloomer/lib/elements/Box'

const Playground = () => (
  <Container>
    <Title isSize="2">Playground</Title>
    <hr />
    <Title isSize="4">Please try in local when the server is busy :)</Title>
    <p>
      You can use Zkopru Playground to try the CLI wallet in a sandbox environment.
      It simply serves the CLI applications using the web interface
      through GoTTY. Note that the playground server may not be available due to the
      limited resources. If the server has any problem, please run it in your local environment using docker.
    </p>
    <Content>
    <br/>
    <pre>
    <code>
    docker run -it zkoprunet/playground:latest
    </code>
    </pre>
    </Content>
    <p>
      If you find any bug when using
      the playground, please report it through <a href="https://github.com/zkopru-network/zkopru/issues">Github</a>.
    </p>
    <br />
    <br/>
    <Title isSize="4">Sandbox demo</Title>
    <Box style={{backgroundColor: 'black'}}>
    <iframe src="https://playground.zkopru.network" width="100%" height="700px">
    </iframe>
    </Box>
    <br/>
    <Title isSize="4">Instruction</Title>
    <Title isSize="6">Configure your accounts</Title>
    <Content>
    <ol>
    <li>The password for your wallet is <code>helloworld</code>.</li>
    <li>Select "create a new account". You will see the new Ethereum account "0xffcf8..."</li>
    <li>Select the new account "0xffcf8..."</li>
    </ol>
    You can see the account "0xffc8..." has a babyjubjub public key "0x1b7a4a..."for Zkopru.
    </Content>
    <Title isSize="6">Deposit</Title>
    We will send 3.3 Ethers from the 1st account to the 2nd account. To send ETH on the layer 2, you must deposit your ETH first.
    <Content>
    <ol>
    <li>Select "Go to top menu" and then select the first account.</li>
    <li>Select "Deposit"</li>
    <li>Select "Ether"</li>
    <li>Type <code>10 ETH</code> for your new deposit</li>
    <li>Type <code>0.1 ETH</code> ETH for the fee. And press "y" to proceed.</li>
    </ol>
    <br/>
    Wait a few seconds for new block proposing.
    </Content>
    <Title isSize="6">Transfer</Title>
    <Content>
    <ol>
    <li>Go to "Transfer" menu, and now you can see that you have 10 ETH for your balance on the layer 2.</li>
    <li>Select "Ether" to transfer.</li>
    <li>Copy and paste this babyjubjub public key for the second account <code>0x1b7a4a17377f17dcd254e69b4e51c761ee0b2c3953b14e168f7eaf4bea9e1cab</code></li>
    <li>Type <code>3.3 ETH</code> to transfer.</li>
    <li>Type <code>100000 gwei</code> for the fee per byte. The background coordinator will generate a new block since you've offered enough fee for block proposing.</li>
    <li>Wait until it creates the SNARK and send transaction to the coordinator.</li>
    </ol>
    </Content>
    <Title isSize="6">Check transfer result</Title>
    <Content>
    <ul>
    <li>Once the transaction goes to the coordinator you can see that your ETH is locked for the transaction.</li>
    <li>Wait for the new block that includes your transaction for about 30 seconds.</li>
    <li>Select "Go back" and select "Transfer" again to check your transaction is executed.</li>
    <li>If you see that it updates the 1st account's balance, go back and select the 2nd account.</li>
    <li>And then, it should say that there is 3.3 ETH for the 2nd account on the layer 2.</li>
    </ul>
    </Content>
    <Title isSize="6">Withdraw request</Title>
    <Content>
    <ol>
    <li>Finally, go back to the menu and select "Withdrawal request".</li>
    <li>You can see "Withdraw Ether (balance: 3.3 ETH / locked: 0 ETH)" menu. Please select that item.</li>
    <li>Please copy and paste the 2nd account's address <code>0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0</code>.</li>
    <li>Type 1 ETH for the amount that you want to withdraw out.</li>
    <li>Type 100000 gwei for the fee per byte. It is also to give enough fee for the coordinator to generate a block immediately.</li>
    <li>Type 0 for instant withdrawal fee. It means we will wait the block finalization.</li>
    </ol>
    <br/>
    And then we'll wait the network to generate and finalize the block that includes your withdrawal request.
    You may need to wait about a minute in this demo. In the main network, it will spend about 7 days for its finalization.
    But, don't worry too much :) Zkopru will provide instant withdrawal feature soon.
    </Content>
    <Title isSize="6">Withdraw out</Title>
    <Content>
    <ol>
    <li>After waiting enough seconds, select "Withdraw out" menu to see the withdrawable notes.</li>
    <li>Select the 1 ETH note and withdraw out the note to the layer 1 network.</li>
    </ol>
    </Content>
    <br/>    
    <Title isSize="4">Do you want more details?</Title>
    <TabLink href="https://docs.zkopru.network/getting-started" target="_blank">
      <Button isColor="white" isOutlined>
        Getting into the details
      </Button>
    </TabLink>
  </Container>  
)

export default Playground
