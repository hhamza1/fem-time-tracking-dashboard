import React from 'react';

import { ReportSorter , ImgContainer, ReportContainer} from './components/StyledComponents';

import ProfilePic from './assets/image-jeremy.png';
import Work from './assets/icon-work.svg';
import Study from './assets/icon-study.svg';
import Ellipsis from './assets/icon-ellipsis.svg';
import Play from './assets/icon-play.svg';
import Exercise from './assets/icon-exercise.svg';
import SelfCare from './assets/icon-self-care.svg';
import Social from './assets/icon-social.svg';

import data from './data/data.json';


import './App.scss';

function App() {

  const handleIcon = (icon) =>{
    switch(icon) {
      case "Work":
        return Work;
      case "Play":
        return Play;
      case "Study":
        return Study;
      case "Exercise":
        return Exercise;
      case "Social":
        return Social;
      case "Self Care":
        return SelfCare;
      default:
        return ;
    }
  }







  return (
    <div className="App">
      <ReportSorter>
        <div className='container'>
          <ImgContainer bgImg={ProfilePic} />
          <div className='text-container'>
            <h5 className='subtext'>Report for</h5>
            <h2 className='text'>Jeremy Robson</h2>
          </div>
        </div>
        <div className='sorting-container'>
            <button className='sorting-btn'>Daily</button>
            <button className='sorting-btn'>Weekly</button>
            <button className='sorting-btn'>Monthly</button>
          </div>
      </ReportSorter>
      {
        data.map((el, index) => {
          return (
            <ReportContainer 
              index={index} 
              color={el.title} 
              icon={handleIcon(el.title)}
            >
            <div className="tracking-details">
              <div className='top-section'>
                <h3>{el.title}</h3>
                <img src={Ellipsis} alt="test"/>
              </div>
              <div className='bottom-section'>
                <h2>{el.timeframes.weekly.current}hrs</h2>
                <p>Last Week - {el.timeframes.weekly.previous}hrs</p>
              </div>
            </div>
            </ReportContainer>
          )
        })
      }
    </div>
  );
}

export default App;
