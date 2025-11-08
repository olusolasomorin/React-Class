import { useState, useEffect } from "react";
import './NewsApp.css'

function NewsApp() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        async function fetchNews() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts?_limit=12'
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();

                // Transform data to look like news articles
                const newsArticles = data.map(post => ({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    category: ['Politics', 'Business', 'Sports', 'Entertainment'][
                        Math.floor(Math.random() * 4)
                    ],
                    date: new Date().toLocaleDateString('en-NG'),
                    author: `Author ${post.userId}`
                }));

                setArticles(newsArticles);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchNews()
    }, [])

    // Filter articles by category
    const filteredArticles = category === 'all' ? articles : articles.filter(articles => articles.category === category);

    return (
        <div className="news-app">
            <header className="news-header">
                <h1>🇳🇬 Nigerian News</h1>
                <p>Stay updated with the latest news</p>
            </header>

            <div className="category-filter">
                {['all', 'Politics', 'Business', 'Sports', 'Entertainment'].map(cat => (
                    <button
                        key={cat}
                        className={category === cat ? 'active' : ''}
                        onClick={() => setCategory(cat)}
                    >
                        {cat === 'all' ? 'All' : cat}
                    </button>
                ))}
            </div>

            {loading && (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading news...</p>
                </div>
            )}

            {error && (
                <div className="error">
                    <p>❌ {error}</p>
                    <button onClick={() => window.location.reload()}>
                        Try Again
                    </button>
                </div>
            )}

            {!loading && !error && (
                <div className="articles">
                    {filteredArticles.length === 0 ? (
                        <p className="no-results">No articles found in this category.</p>
                    ) : (
                        filteredArticles.map(article => (
                            <div key={article.id} className="article-card">
                                <span className="category-badge">{article.category}</span>
                                <h2>{article.title}</h2>
                                <p className="article-body">{article.body}</p>
                                <div className="article-footer">
                                    <span>By {article.author}</span>
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default NewsApp;