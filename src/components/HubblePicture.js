import { Component } from 'react'
import moment from 'moment'

class HubblePicture extends Component {
    render() {
        return(
            <div className="box">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src={this.props.picture.thumbnail}/>
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{this.props.picture.title.split(': ')[1]}</strong> <small>{this.props.picture.pub_date}</small>
                                <br></br>
                                {this.props.picture.description}
                                <br></br>
                                <small><a>Like</a> · <a>Reply</a> · {moment(this.props.picture.pub_date).fromNow()}</small>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default HubblePicture