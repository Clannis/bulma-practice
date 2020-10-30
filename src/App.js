import { Component } from 'react'

class App extends Component {
  render() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body ">
          <div class="container">
            <h1 class="title">
              Bulma Practice Site
            </h1>
            <h2 class="subtitle">
              Pulled from within App Component
            </h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
               Information
              </h1>
              <h2 class="subtitle">
                Short Summary of Information
              </h2>
              <div class="buttons">
                <a class="button is-info">Find out more</a>
                <a class="button is-danger is-outlined">Buy now</a>
              </div>
            </div>
            <div class="column">
              <figure class="image is-16by9">
                <img src="https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg" alt="code"/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
