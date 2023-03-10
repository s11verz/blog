import './App.css';
/* eslint-disable */

import { useState } from 'react';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState(0);

    function onSortButtonClicked() {
        let copy = [...글제목];
        copy = ['강남 우동 맛집', '남자 코트 추천', '파이썬 독학'];
        글제목변경(copy);
    }

    function onEditButtonClicked() {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
    }

    function onLikeButtonClicked() {
        따봉변경(따봉 + 1);
    }

    return (
        <div className='App'>
            <div className='black-nav'>
                <h4>ReactBlog</h4>
            </div>

            <button onClick={() => onSortButtonClicked()}>
                가나다순
            </button>

            <button onClick={() => onEditButtonClicked()}>글수정</button>

            <div className='list'>
                <h4>{글제목[0]}
                    <span onClick={() => onLikeButtonClicked()}>👍</span>{따봉}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>



            <div className='list'>
                <h4>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;