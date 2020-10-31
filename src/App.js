import { Component } from 'react'
import Title from './components/Title'
import HubbleContainer from './containers/HubbleContainer'

class App extends Component {

  

  render() {
    return (
      <div>
        <Title />
        <HubbleContainer/>
      </div>
    );
  }
}

export default App;
