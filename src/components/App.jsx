import React from"react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Header />
            <main>
                <Article />
                <Article />
            </main>
            <Footer />
        </div>
    );
}
export default App;