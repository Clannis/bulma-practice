import { Component } from 'react'
import HubbleCard from '../components/HubbleCard'
import Loading from '../components/Loading'

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