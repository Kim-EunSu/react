import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import Touch from '../layout/Touch';
import YoutubeCont from '../includes/YoutubeCont';
import YoutubeSearch from '../includes/YoutubeSearch';

function Youtube() {
    const [videos, setVideos] = useState([]); // 리액트 훅

    //youtubeSearch를 만들었으므로 변수를 하나 더 설정
    //query문 만들고 useEffect부분껄을 끌고 가져오면 됨
    const search = query => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyB5UfUETUb2lR2D8WXj6UAAZWl7WP2RaM0&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    };

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&key=AIzaSyB5UfUETUb2lR2D8WXj6UAAZWl7WP2RaM0&type=video', requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);
    console.log(videos); //console- 20개를 가져옴

    return (
        <>
            <Header />
            <Contents>
                <Title title={['youtube', 'reference']} />
                <section className="youtube__cont">
                    <div className="container">
                        <div className="youtube__list">
                            <YoutubeSearch onSearch={search} />
                            <YoutubeCont videos={videos} />
                        </div>
                    </div>
                </section>
                <Touch />
            </Contents>
            <Footer />
        </>
    );
}

export default Youtube;
