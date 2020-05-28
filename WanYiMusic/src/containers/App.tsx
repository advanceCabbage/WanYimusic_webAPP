import * as  React from 'react';
import './App.css'
export default class APP extends React.Component{
  constructor(props:any){
    super(props)
    this.state ={}
  }
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
};
