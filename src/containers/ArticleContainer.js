import { Component } from 'react'
import HubbleCard from '../components/HubbleCard'
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';

class ArticleContainer extends Component {

    renderHubbleCards = () => {
        return this.props.articles.map((article) => <LazyLoadComponent scrollPosition={this.props.scrollPosition} ><HubbleCard article={article} width="is-2"/></LazyLoadComponent>)
    }

    render() {
        if (this.props.articles.length > 0) {
            return(
                <div>
                    <div className="columns">
                        <div className="column">
                            <section className="section">
                                <div className="container">
                                    <div className="columns is-multiline">
                                        {this.renderHubbleCards()}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )
            } else {
                return null
            }
    }
}
  
  export default trackWindowScroll(ArticleContainer);