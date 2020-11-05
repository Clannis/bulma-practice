import { Component } from 'react'
import Title from './components/Title'
import ArticleContainer from './containers/ArticleContainer'
import fetchHubblePictures from './actions/fetchHubblePictures'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Loading from './components/Loading'


class App extends Component {

  componentDidMount() {
    this.props.fetchHubblePictures()
  }

  render() {
    return (
      <div>
        <Title />
        <Loading requesting={this.props.requesting}/>
        <Route exact path="/" render={() => <ArticleContainer articles={this.props.articles} requesting={this.props.requesting} activePicture={this.props.activePicture}/>} />
        <Route path={`/:news_id`} render={(routerProps) => <ActiveArticle {...routerProps} articles={this.props.articles}/>}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchHubblePictures: () => dispatch(fetchHubblePictures()) }
}

const mapStateToProps = (state) => {
  return {articles: state.articles, requesting: state.requesting, activePicture: state.activePicture}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
