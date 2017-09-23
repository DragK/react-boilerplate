import * as React from 'react'
import './Styles/button.scss' 



interface ButtonProps {
    label: string
    onClick?(e: React.MouseEvent<any>):void
    classname?: string
}



class Button extends React.PureComponent<ButtonProps, null>{
    render(){
        return(
            <button className={this.props.classname} onClick={this.props.onClick}>{this.props.label}</button>
        )
    }
}



export default Button




