import { Component } from 'react'
import HubblePicture from '../components/HubblePicture'

class HubbleContainer extends Component {

    renderHubbleCards = () => {
        return(
            this.props.pictures.map((picture) => <HubblePicture picture={picture}/>)
        )
    }

    render() {
        return(
            <section className="section">
                <div className="container">
                    {this.renderHubbleCards()}
                </div>
            </section>
        )
    }
}

export default HubbleContainer