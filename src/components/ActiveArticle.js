import Image from './Image'

const ActiveArticle = ({match, articles}) => {

    let article = articles.filter(article => article.news_id === match.params.news_id)[0]

    return(
        <div className="tile is-ancestor">
            <div className="tile is-1">
                
            </div>
            <div className="tile is-10">
                <div className="tile  is-parent is-vertical">
                    <div className="tile is-child box">
                        <figure className="image is-2by1">
                                <Image alt={article.name} src={article.keystone_image_2x}/>
                        </figure>
                    </div>
                    <div className="tile is-child box">
                        <p className="title">{article.name}</p>
                        <article className="media has-text-justified">{article.abstract}</article>
                        <a target="_blank" rel="noreferrer" href={`${article.url}`}>Full Article</a>
                    </div>
                    <div className="tile is-child box">
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="1"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>Barbara Middleton</strong>
                                        <br></br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                        <br></br>
                                        <small><a href="like" >Like</a> · <a href="like" >Reply</a> · 3 hrs</small>
                                    </p>
                                </div>

                                <article className="media">
                                    <figure className="media-left">
                                        <p className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="1"/>
                                        </p>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Sean Brown</strong>
                                                <br></br>
                                                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                                <br></br>
                                                <small><a href="like" >Like</a> · <a href="like" >Reply</a> · 2 hrs</small>
                                            </p>
                                        </div>

                                        <article className="media">
                                            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                                        </article>

                                        <article className="media">
                                            Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                                        </article>
                                    </div>
                                </article>

                                <article className="media">
                                    <figure className="media-left">
                                        <p className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="1"/>
                                        </p>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Kayli Eunice </strong>
                                                <br></br>
                                                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                                <br></br>
                                                <small><a href="like" >Like</a> · <a href="like" >Reply</a> · 2 hrs</small>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="1"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="field">
                                <p className="control">
                                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                                </p>
                                </div>
                                <div className="field">
                                <p className="control">
                                    <button className="button">Post comment</button>
                                </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="tile is-1">
            
            </div>
        </div>
    )
}

export default ActiveArticle