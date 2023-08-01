import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
    return (

        <BrowserRouter>

            <div className="App">
                <NavBar />
                <div id="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/articles" element={<ArticlesList />} />
                        <Route path="/articles/:articleId" element={<ArticlePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App; 