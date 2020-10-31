import { Component } from 'react'
import HubbleCard from '../components/HubbleCard'
import Loading from '../components/Loading'
import ActivePicture from '../components/ActivePicture'

class HubbleContainer extends Component {

    renderHubbleCards = () => {
        if (Object.keys(this.props.activePicture).length > 0) {
            return <ActivePicture picture={this.props.activePicture}/>
        } else {
            return(
                this.props.pictures.map((picture) => <HubbleCard picture={picture}/>)
            )
        }
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
  
  export default HubbleContainer;