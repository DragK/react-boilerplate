import * as React from 'react';

import { Button } from 'Common'

 class Hello extends React.Component<{}, {}> {
  render() {
    return(
      <div>
       <Button size="large" classname="danger" label="click me" />
       <Button size="medium" classname="info" label="click me" />
       <Button size="small" classname="success" label="click me" />

      </div>
    )
  }
}

export default Hello