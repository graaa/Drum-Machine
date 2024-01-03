import './App.css';
import React, { useState } from 'react';

const soundGroup = [
    {
      key:'Q',
      id:'chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name:'Heater 1'
    },
    {
      key:'W',
      id:'chord-2',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name:'Heater 2'
    },
    {
      key:'E',
      id:'chord-3',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name:'Heater 3'
    },
    {
      key:'A',
      id:'chord-4',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name:'Heater 4'
    },
    {
      key:'S',
      id:'chord-5',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name:'Clap'
    },
    {
      key:'D',
      id:'chord-6',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name:'Open-HH'
    },
    {
      key:'Z',
      id:'chord-7',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name:'Kick n Hat'
    },
    {
      key:'X',
      id:'chord-8',
      url:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name:'Kick'
    },
    {
      key:'C',
      id:'chord-9',
      url:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name:'Closed-HH'
    }
  ];

function DrumControler({name}){
  return (<div className='controls-container'>
        <h1>Drum-Machine</h1>
        <h2>{name}</h2>
      </div>)
}

function Keyboard({play}){
  return soundGroup.map(sound => {
    return <div className={'drum-pad'} id={sound.id} onClick={() => play(sound.key)}>
        <audio id={sound.key} src={sound.url}/>{sound.key}
      </div>
  })
}

function App(){
  const [soundName, setSoundName] = React.useState("");
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    const sound = soundGroup.find(sound => sound.key === key);
    setSoundName(sound.name);
  }
  return(
    <div className = 'inner-container' id='drumMachine'>
      <div id='display' className = 'pad-bank'>
        <Keyboard play={play}/>
      </div>
      <div className='logo'>
        <img src="https://i.postimg.cc/0jvKZJ5T/brand-yamaha-icon-256x256-49id2eu2.png" width='10'/>
      </div>
      <DrumControler name={soundName}/>
    </div>
    
  );
}

export default App;
