import * as  React from 'react';
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
