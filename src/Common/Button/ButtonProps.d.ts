import * as React from "react";

type classname = 'info' | 'success' | 'danger'
type size = 'large' | 'medium' | 'small'

export interface ButtonProps {
    label: string
    onClick?(e: React.MouseEvent<any>):void
    classname: classname
    size: size
}


   
  