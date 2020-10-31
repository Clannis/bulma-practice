import { Component } from 'react'
import fetchHubblePictures from './actions/fetchHubblePictures'
import { connect } from 'react-redux'
import Title from './components/Title'
import HubbleContainer from './containers/HubbleContainer'

class App extends Component {

  componentDidMount() {
    this.props.fetchHubblePictures()
  }

  render() {
    return (
      <div>
        <Title />
        <HubbleContainer pictures={this.props.pictures}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchHubblePictures: () => dispatch(fetchHubblePictures()) }
}

const mapStateToProps = (state) => {
  return {pictures: state.pictures}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
