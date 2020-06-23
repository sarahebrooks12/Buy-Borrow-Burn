import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


class Details extends  React.Component {

  
render() {
    return (
        <Card>
        {/* <Image src='' wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>TITLE</Card.Header>
          <Card.Meta>
            <span>AUTHOR</span>
          </Card.Meta>
          <Card.Description>
            SHORT DESCRIPTION
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='star' />
            GOOGLE BOOKS RATING
            <br />
            <Icon name='dollar' />
            BBB RATING --- BUY
            <br />
            <Icon name='heart outline' />
            BBB RATING --- BORROW
            <br />
            <Icon name='fire' />
            BBB RATING --- BURN
          </a>
        </Card.Content>
      </Card>
    )}
      
    
}
export default Details