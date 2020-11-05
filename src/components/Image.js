import { Component } from 'react'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

class Image extends Component {

    render() {
        return <img alt={this.props.alt} src={this.props.src} scrollPosition={this.props.scrollPosition}/>
    }
}

export default Image