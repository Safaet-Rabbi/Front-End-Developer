import React,{CSSProperties} from 'react';

type ButtonStyleProps = {
    btnStyle: CSSProperties;
};

const ButtonStyle = (props: ButtonStyleProps) => {
  return  <div style={props.btnStyle}>Button Style </div>
  
}

export default ButtonStyle
