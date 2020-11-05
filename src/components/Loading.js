import { Component, Fragment } from 'react'

class Loading extends Component {

    renderLoading = () => {
        if (this.props.requesting) {
            console.log("Now Loading")
            return (
                <div className="features">
                    <div className="container">
                        <div className="columns is-centered is-vcentered is-mobile">
                            <div className="column is-narrow has-text-centered">
                                <div className="loading">
                                    <img loading="lazy" className="wp-image-21758 size-full" title="Loading animations / preloader gifs / UI/UX effects - 18" src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-18.gif" alt="Loading animations / preloader gifs / UI/UX effects - 18" width="400" height="300" draggable="false"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            console.log("Loaded")
            return null
        }
    }

    render() {
        return(
            <Fragment>
                {this.renderLoading()}
            </Fragment>
        )
    }
}

export default Loading