import { React } from "react";
import { Button, Tooltip } from 'antd';


export default function MyButton(props) {
   return (
    <Tooltip title={props.tooltip}>
    <Button
      type="primary"
      shape="round" 
      size='large'
      onClick={(props.onClick) }
      icon= {props.icon}
      style={{color: props.color}}
    >
      { props.children}
    </Button>
  </Tooltip>
    ) 
}