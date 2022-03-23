import React from 'react';

import { ReportSorter , ImgContainer} from './components/StyledComponents';

import ProfilePic from './assets/image-jeremy.png';


import './App.scss';

function App() {
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
    </div>
  );
}

export default App;
