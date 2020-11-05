export default function reducer(state = {articles: [], requesting: false, activeArticle: {}}, action) {
    let articles = state.articles
    switch (action.type) {
        case 'START_ADDING_HUBBLE_ARTICLES_REQUEST':
            return {...state,
                articles: articles,
                requesting: true
            }
        case 'ADD_ARTICLE':
            return {...state,
                articles: articles.concat({...action.article, like: 0}),
                requesting: false
            }
        case 'ADD_ACTIVE_ARTICLE':
            return {...state,
                articles: articles,
                activeArticle: action.articles
            }
        default:
            return state
    }
}