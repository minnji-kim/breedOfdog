import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../image/dogs.jpeg';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="content" id="start">
      <p className='testTitle'>나랑 잘맞는 견종은 무엇일까?</p>
      <img src={bannerImage} alt="dogs" className="img1" />
      <p id="maker">제작자: 김민지</p>
      <p id="require">
        이 테스트는 견종에 대해 일반적으로 알려진 것을 기준으로 할 뿐 개마다 다를 수 있습니다.
      </p>
      <button className="btn btn-warning" onClick={() => navigate('/question')}>
        테스트 시작
      </button>
    </div>
  );
}

export default Start;