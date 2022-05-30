import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import MovieSearch from '../includes/MovieSearch';
import MovieCont from '../includes/MovieCont';
import Title from '../layout/Title';
import Touch from '../layout/Touch';

function Movie() {
    const [videos, setVideos] = useState([]);

    const search = query => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c0567696bc620eac81b5e3baab58ee88&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=spiderman', requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }, []);
    console.log(videos);

    return (
        <>
            <Header />
            <Contents>
                <Title title={['Movie', 'search']} />
                <section className="movie_cont">
                    <div className="container">
                        <div className="movie_inner">
                            <MovieSearch onSearch={search} />
                            <MovieCont videos={videos} />
                        </div>
                    </div>
                </section>
                <Touch />
            </Contents>
            <Footer />
        </>
    );
}

export default Movie;
