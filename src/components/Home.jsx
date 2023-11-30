import React, { useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar';
import TvShow from './TvShow';
import Sports from './Sports';
import Trending from './Trending';
import Kids from './Kids';
import Movies from './Movies';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://ott-details.p.rapidapi.com/advancedsearch',
            params: {
                start_year: '1970',
                end_year: '2020',
                min_imdb: '6',
                max_imdb: '7.8',
                genre: 'action',
                language: 'english',
                type: 'movie',
                sort: 'latest',
                page: '1'
            },
            headers: {
                'X-RapidAPI-Key': 'e11845cd06msh89bbd2d03c25fd6p15f489jsn0403ce5e54bc',
                'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
            }
        };
        const config = {
            headers: {
                'X-RapidAPI-Key': 'e11845cd06msh89bbd2d03c25fd6p15f489jsn0403ce5e54bc',
                'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
            }
        }
        // Call request
        const Call = async () => {
            try {
                const response = await axios.get("https://ott-details.p.rapidapi.com/advancedsearch" , config);
                console.log("response.data");
            } catch (error) {
                console.error("error");
            }
        }
        Call();
    }, []);
    return (
        <>
            <div className="hotstar-home-container">
                {/* Cricket Match Section */}
                <div className="cricket-match-section">
                    <h2>Live: India vs Pakistan Cricket Match</h2>
                    <img src="https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="cricket match" style={{ width: '350px', height: '400px' }} />
                </div>

                {/* Categories Section */}
                <div className="categories-section">
                    <h2>Categories</h2>
                    <div className="categories-list">

                        <Movies />

                        <TvShow />

                        <Sports />

                        <Trending />


                        <Kids />


                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
