import * as React from 'react'
import './Styles/button.scss' 
import { ButtonProps } from './ButtonProps'
import  * as classnames from 'classnames'

export class Button extends React.PureComponent<ButtonProps, null>{
    render(){
        return(
            <button className={classnames( "button", this.props.size , this.props.classname)} onClick={this.props.onClick}>{this.props.label}</button>
        )
    }
}




export default Button




