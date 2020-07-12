import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made with
              <Icon hasTextColor="danger" className="fa fa-heart" />
              on Ethereum
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>
            The source code is licensed under{' '}
            <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">
              GNU General Public License version 3.0 or later
            </a>
            .
          </p>
        </Content>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
