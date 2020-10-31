
const ActivePicture = (props) => {
    return(
        <div class="tile is-ancestor">
            <div class="tile is-vertical">
                <div class="tile is-child">
                    <figure className="image is-4by3">
                            <img src={props.picture.image} alt={props.picture.title}/>
                    </figure>
                </div>
                <div class="tile is-child box">
                    <p class="title">{props.picture.title.split(": ")[1]}</p>
                    <article class="media has-text-justified">{props.picture.description}</article>
                </div>
                <div class="tile is-child box">
                <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="1"/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Barbara Middleton</strong>
                            <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                            <br></br>
                            <small><a href="like" >Like</a> · <a href="like" >Reply</a> · 3 hrs</small>
                        </p>
                    </div>

                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="1"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Sean Brown</strong>
                                    <br></br>
                                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                    <br></br>
                                    <small><a href="like" >Like</a> · <a href="like" >Reply</a> · 2 hrs</small>
                                </p>
                            </div>

                            <article class="media">
                            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                            </article>

                            <article class="media">
                            Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                            </article>
                        </div>
                    </article>

                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="1"/>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
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
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="1"/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="Add a comment..."></textarea>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control">
                        <button class="button">Post comment</button>
                    </p>
                    </div>
                </div>
            </article>
                </div>
            </div>
        </div>
    )
}

export default ActivePicture