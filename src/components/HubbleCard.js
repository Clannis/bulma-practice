import { Component } from 'react'
import moment from 'moment'

class HubbleCard extends Component {

    handleClick = () => {

    }

    render() {
        return(
            <div className="column is-3">
                <div className="card" onClick={() => this.handleClick()}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                                <img src={this.props.picture.thumbnail} alt={this.props.picture.thumbnail}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <strong>{this.props.picture.title.split(': ')[1]}</strong> 
                            <br></br>
                            <small>{moment(this.props.picture.pub_date).fromNow()}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HubbleCard