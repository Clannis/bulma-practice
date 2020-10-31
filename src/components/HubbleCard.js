import { Component } from 'react'
import moment from 'moment'
import { addActivePicture } from '../actions/pictures'
import {connect } from 'react-redux'

class HubbleCard extends Component {

    handleClick = () => {
        this.props.addActivePicture(this.props.picture)
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

const mapDispatchToProps = (dispatch) => {
    return {
        addActivePicture: (picture) => dispatch(addActivePicture(picture))
    }
}

export default connect(null, mapDispatchToProps)(HubbleCard)