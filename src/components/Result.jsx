import ESTimg from '../image/ESTimg.jpeg';
import ESFimg from '../image/ESFimg.jpeg';
import ENTimg from '../image/ENTimg.jpeg';
import ENFimg from '../image/ENFimg.jpeg';
import ISTimg from '../image/ISTimg.jpeg';
import ISFimg from '../image/ISFimg.jpeg';
import INTimg from '../image/INTimg.jpeg';
import INFimg from '../image/INFimg.JPG';
import { useNavigate } from 'react-router';

const results = {
  EST:{
    mbti: '포메라니안',
    img: ESTimg,
  },
  ESF: {
    mbti: '푸들',
    img: ESFimg,
  },
  ENT: {
    mbti: '스피츠',
    img: ENTimg,
  },
  ENF: {
    mbti: '요크셔테리어',
    img: ENFimg,
  },
  IST: {
    mbti: '보더콜리',
    img: ISTimg,
  },
  ISF: {
    mbti: '골든리트리버',
    img: ISFimg,
  },
  INT: {
    mbti: '차우차우',
    img:INTimg,
  },
  INF: {
    mbti: '시바견',
    img:INFimg,
  },
};
function Result({score, resetState}){

  const navigate = useNavigate();

  const getResult = ()=>{
    let result = '';
    result += score.EI <2 ? 'I':'E';
    result += score.SN >3 ? 'S':'N';
    result += score.TF >2 ? 'T':'F';
    return results[result];
  }
  const result = getResult();

  const handleRestart = ()=>{
    resetState();
    navigate('/question');
  }
  return (
    <div className="content" id="result">
      <img id="img" src = {result.img}/>
      <p id="qu"> 나랑 잘맞는 견종은</p>
      <p id="mbti">{result.mbti}</p>
      <div className="result-btn">
        <button className="btn btn-primary" onClick={handleRestart}>
          다시하기
        </button>
      </div>
    </div>
  );
}
export default Result;