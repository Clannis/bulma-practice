import { Component } from 'react'
import moment from 'moment'
import { addActiveArticle } from '../actions/articles'
import {connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Image from './Image'

class HubbleCard extends Component {

    handleClick = () => {
        this.props.addActiveArticle(this.props.article)
    }

    renderCard = () => {
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                            <Image src={this.props.article.thumbnail} alt={this.props.article.name}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <strong>{this.props.article.name}</strong> 
                        <br></br>
                        <small>{moment(this.props.article.publication).fromNow()}</small>
                    </div>
                </div>
            </div> 
        )
    }

    render() {
        return(
            <div className="column is-3" >
                <Link key={this.props.article.news_id} to={`/${this.props.article.news_id}`} onClick={() => this.handleClick()}>
                    {this.renderCard()}
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addActiveArticle: (article) => dispatch(addActiveArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(HubbleCard)