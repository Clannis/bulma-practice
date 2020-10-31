import { Component } from 'react'
import Title from './components/Title'
import HubbleContainer from './containers/HubbleContainer'
import fetchHubblePictures from './actions/fetchHubblePictures'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchHubblePictures()
  }

  render() {
    return (
      <div>
        <Title />
        <HubbleContainer pictures={this.props.pictures} requesting={this.props.requesting}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchHubblePictures: () => dispatch(fetchHubblePictures()) }
}

const mapStateToProps = (state) => {
  return {pictures: state.pictures, requesting: state.requesting}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
