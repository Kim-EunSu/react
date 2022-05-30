import React from 'react';
import YoutubeItem from './YoutubeItem';

function YoutubeCont(props) {
    //console.log(props);
    //React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문에 &&연산자를 사용
    return <ul>{props.videos && props.videos.map((list, index) => <YoutubeItem key={index} results={list} />)}</ul>;
}

export default YoutubeCont;
