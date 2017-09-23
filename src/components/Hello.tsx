import * as React from 'react';

import Button from '../common/Button/Button'

 class Hello extends React.Component<{}, {}> {
  render() {
    return(
       <Button label="kill me" />
    )
  }
}

export default Hello