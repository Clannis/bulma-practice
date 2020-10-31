import { Component } from 'react'
import fetchHubblePictures from '../actions/fetchHubblePictures'
import { connect } from 'react-redux'
import HubbleCard from '../components/HubbleCard'
import Loading from '../components/Loading'

class HubbleContainer extends Component {

    renderHubbleCards = () => {
        return(
            this.props.pictures.map((picture) => <HubbleCard picture={picture}/>)
        )
    }

    componentDidMount() {
        this.props.fetchHubblePictures()
      }

    render() {
        return(
            <section className="section">
                <div className="container">
                    <Loading requesting={this.props.requesting}/>
                    <div className="columns is-multiline">
                        {this.renderHubbleCards()}
                    </div>
                </div>
            </section>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { fetchHubblePictures: () => dispatch(fetchHubblePictures()) }
  }
  
  const mapStateToProps = (state) => {
    return {pictures: state.pictures, requesting: state.requesting}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HubbleContainer);