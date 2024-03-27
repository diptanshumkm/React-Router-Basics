import React, {Component} from 'react'

class Myclass extends Component {

    componentDidMount() {
        console.log('Component has mounted.');
      }
    
      componentWillUnmount() {
        console.log('Component is about to unmount.');
      }
    
      render() {
        return <div>Lifecycle Demo</div>;
      }
  }
  
  export default Myclass;
