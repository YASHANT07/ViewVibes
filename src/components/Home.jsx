import React from 'react';
import './Home.css';
import Navbar from '../Navbar';
import TvShow from './TvShow';
import Sports from './Sports';
import Trending from './Trending';
import Kids from './Kids';
import Movies from './Movies';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="hotstar-home-container">
            {/* Cricket Match Section */}
            <div className="cricket-match-section">
                <h2>Live: India vs Pakistan Cricket Match</h2>
                <img  src="https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="cricket match" style={{ width: '350px', height: '400px' }} />
            </div>

            {/* Categories Section */}
            <div className="categories-section">
                <h2>Categories</h2>
                <div className="categories-list">

                    <Movies/>

                    <TvShow/>

                    <Sports/>

                    <Trending/>
                    

                    <Kids/>


                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
