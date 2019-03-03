import React, { Component } from 'react';

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('/api/articles')
            .then(res => res.json())
            .then(articles => this.setState({articles}));
    }

    render() {
        return (
            <div>
                <h2>Articles</h2>
                <ul>
                    {this.state.articles.map(article =>
                        <li key={article._id}>{ article.title } { article.body }</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Articles;
