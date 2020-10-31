import { Component } from 'react'
import HubbleCard from '../components/HubbleCard'

class HubbleContainer extends Component {

    renderHubbleCards = () => {
        return(
            this.props.pictures.map((picture) => <HubbleCard picture={picture}/>)
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