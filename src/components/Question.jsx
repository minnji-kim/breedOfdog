import qs1 from '../image/허스키.jpeg';
import qs2 from '../image/시바견.jpeg'; 
import qs3 from '../image/말티즈.jpeg';
import qs4 from '../image/쉽독.jpeg';
import qs5 from '../image/비숑.jpeg';
import qs6 from '../image/닥스훈트.jpeg';
import qs7 from '../image/비글.jpeg';
import qs8 from '../image/파피용.jpeg';
import qs9 from '../image/웰시코기.jpeg';
import qs10 from '../image/사모예드.jpeg';
import qs11 from '../image/달마시안.jpeg';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const questions = {
  1: {
    title: '개를 키울때 당신은 개의 외형이 어떤 스타일이었으면 좋겠나요?',
    type: 'EI',
    image: qs1,
    A: '바라만 보고 있어도 깨물어 주고 싶은 귀엽고 사랑스러운 타입',
    B: '존재만으로도 모든 시선을 사로잡는 당당하고 멋있는 타입',
  },
  2: {
    title: '현재 주거중인 집의 형태가 어떤가요?',
    image: qs2,
    type: 'TF',
    A: '방음이 잘 되는 편이거나 마당같은 공간이 있다.',
    B: '방음이 잘 되지 않고 층간소음이 있는 편이다.',
  },
  3: {
    title: '개의 크기가 어느정도가 좋은가요?',
    image: qs3,
    type: 'EI',
    A: '한손으로 들 수 있을만한 사이즈의소형견',
    B: '든든한 사이즈의 중,대형견',
  },
  4: {
    title: '강아지 털의 기장이 어느정도였으면 좋겠나요?',
    image: qs4,
    type: 'EI',
    A: '충분히 길어서 꾸며줄 수 있으면 좋다.',
    B: '깔끔하고 짧은 스타일이 좋다.',
  },
  5: {
    title: '당신이 개에게 가까이 갔을 때',
    image: qs5,
    type: 'SN',
    A: '개가 배를 보이든가 가까이 와서 치대는 애교 많은 성격이 좋다.',
    B: '적당한 거리를 두고서 도도하게 있는 것이 좋다.',
  },
  6: {
    title: '개를 키웠을 때 당신에게 어느정도로 의존했으면 좋겠나요?',
    image: qs6,
    type: 'SN',
    A: '우리 주인! 절대 내 앞에 있어야 해!! 옆에서 절대로 안떨어지려고 하는 타입',
    B: '너는 너, 나는 나 그냥 같은 공간에 사는 주인 정도로 인식한다.',
  },
  7: {
    title: '개가 얼마나 활발했으면 좋겠나요?',
    image: qs7,
    type: 'SN',
    A: '매일 산책을 해도 눈을 뜨면 새로 산책이 가능한 에너자이너!!',
    B: '가볍게 동네 정도 돌면 지치는 체력',
  },
  8: {
    title: '당신의 개가',
    image: qs8,
    type: 'TF',
    A: '길에서 거의 본 적 있는 인기있는 종류였으면 좋겠어!',
    B: '길에서 자주 볼 수 없는 독특한 종류였으면 좋겠어!',
  },
  9: {
    title: '다른 사람이 당신의 집을 방문했을 때 ',
    image: qs9,
    type: 'SN',
    A: '새로운 사람이다!! 새로운 사람이어도 좋아 하는 성격이었으면 좋겠어!',
    B: '모르는 사람인데 여긴 왜 왔지? 경계하는 성격이면 좋겠어!',
  },
  10: {
    title: '당신은 나머지 조건이 다 만족했을때 개의 털빠짐에 대해 ',
    image: qs10,
    type: 'SN',
    A: '괜찮다. 어느 정도든 견딜 수 있을 것 같다.',
    B: '털 빠짐이 많은 건 매우 곤란해',
  },
  11: {
    title: '당신과 함께 사는 구성원은 누가 있나요?',
    image: qs11,
    type: 'TF',
    A: '아이들이나 연세가 있는 분들과 함께 살고 있지 않다.',
    B: '어린 아이 혹은 연세가 있으신 분들과 함께 살고 있다.',
  },
};

function Question({num, setNum, updateScore}) {

    const navigate = useNavigate();

    const handleAnswer = (type, value) =>{
        updateScore(type, value);

        if(num<11){
            setNum(num+1);
        }else {
            navigate('/result');
        }
    }

    const currentQuestion = questions[num];

    return(
        <div className="content" id="question">
            <p id="pgrNum">{num}/11</p>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-Info"
                style={{width: `calc(100/11*${num}%)`}}
                ></div>
            </div>
            <p id="title">{currentQuestion.title}</p>
            <div className="question-image-container">
              {currentQuestion.image &&(
                <img src={currentQuestion.image} className="question-image"/>
              )}
            </div>

            <button className="btn btn-primary" onClick={()=>handleAnswer(currentQuestion.type,1)}> 
              {currentQuestion.A}
            </button> 
            <button className="btn btn-primary" onClick={()=>handleAnswer(currentQuestion.type,0)}> 
              {currentQuestion.B}
            </button>
        </div>
    )
}
export default Question;