import logo from './logo.png';
import html2canvas from 'html2canvas';
// import pattern_1 from './pattern_1.png'
import light from './light.svg'
import dark from './dark.svg'
import moon from "./moon.svg"
import sun from "./sun.svg"
import pattern_2 from './pattern_2.svg'
import pattern_3 from './pattern_3.svg'
import pattern_4 from './pattern_4.svg'
import pattern_5 from './pattern_5.svg'
import pattern_6 from './pattern_6.svg'
import pattern_7 from './pattern_7.svg'
import pattern_8 from './pattern_8.svg'
import pattern_9 from './pattern_9.svg'
import pattern_10 from './pattern_10.svg'
import pattern_11 from './pattern_11.svg'
import pattern_12 from './pattern_12.svg'
import pattern_13 from './pattern_13.svg'
import pattern_14 from './pattern_14.svg'
import pattern_15 from './pattern_15.svg'
import pattern_16 from './pattern_16.svg'

import './App.css';
import { useState } from 'react'
import { useRef } from 'react';
import { createRef } from 'react';
import * as htmlToImage from "html-to-image";
import colors from 'tailwindcss/colors'
const green = colors.green[500]
const red = colors.red[500]
const blue = colors.blue[500]
const purple = colors.purple[500]
const pink = colors.pink[500]
const yellow = colors.yellow[500]
const indigo = colors.indigo[500]
// import front from "./front";
// import "./front.css"

function App() {
  const [background, setBackground] = useState('pink');
  
  const [isactive, setIsactive] = useState(false);

  const changeColor = (newColor) => {
    setBackground(newColor);
    setIsactive(!isactive, newColor);
    console.log("call")
  };

  // const handleActiveToggle = () => {
  //   // You can add additional logic here to handle any theme changes in your application
  // };

  const [name, setName] = useState('Yash Mangal 😊');
  const [username, setUsername] = useState('@yashmangal112');
  const [message, setMessage] = useState('I like to learn and help people in learning new technologies and working in communities ❤️💌');
  const [profile, setProfile] = useState('https://media.licdn.com/dms/image/D4D03AQEDfL745nVuXQ/profile-displayphoto-shrink_200_200/0/1667479474816?e=1690416000&v=beta&t=lyU0EvgR6WtWZNHLhq3g6RgP9C_VBKT3LJqmVyb6Svk');
  // background-pattern color
  const [backgroundColor, setBackgroundColor] = useState('#facf0f');
  // const [pattern, setPattern] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  const imageChange = (e)=>{
    if(e.target.files && e.target.files[0]){
      setProfile(URL.createObjectURL(e.target.files[0]))
    }
  }


  const clickPattern =(pattern)=>{
    console.log(pattern)
    const image= `${pattern}.svg`;
    console.log(image)
    // setBackgroundImage((URL.createObjectURL(pattern.target.files[0])))
    setBackgroundImage(`url(${pattern})`)
    // setBackgroundImage(pattern_8)
    setIsactive(!isactive, pattern);
    console.log(backgroundImage)
    console.log(pattern)
    // console.log()
  }

  const [isScaled, setIsScaled] = useState(false);

  const targetRef = createRef(null);
  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    console.log(dataURI)
    return dataURI;
  };

  const download = (image) => {
    const a = document.createElement("a");
    a.href = image;
    // a.download = createFileName(extension, name);
    a.download = `${name}.jpg`;
    a.click();
  };

  const handleDownload = () => {
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 300);
    takeScreenShot(targetRef.current).then(download);
  }



  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // You can add additional logic here to handle any theme changes in your application
  };


  return (
    <>
  {/* Hello world */}
  <main className="main">
    <div className="main__app-info">
      <div className="main__app-info-content">
        Welcome to <b>InBanner!</b> A tool to effortlessly create personalized, visually captivating LinkedIn banners to showcase your personal brand made by{" "}
        <a href="https://yashmangal112.vercel.app">
          <b>Yash Mangal</b>
        </a>{" "}
       ❤️
      </div>
    </div>
    <div className="main__post" >
      <div className={`main__post-bg ${isScaled ? 'scaled' : ''}`} ref={targetRef} style={{backgroundImage, backgroundColor}} >
        <div className={`main__post-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id='divToDownload' >
          <div className="main__post-upper">
            <div className="main__post-user">
              <div className="main__post-user-img-cont">
                {/* https://pbs.twimg.com/profile_images/1628054594508165121/BLh_VP3W_400x400.jpg */}
                <img
                  src={profile}
                  alt="User Image"
                  className="main__post-user-img"
                />
              </div>
              <div className="main__post-user-details">
                <div className="main__post-user-name">{name}</div>
                {/* <div></div> */}
                <div className="main__post-user-prof">{username}</div>
              </div>
            </div>
            <div className="main__post-follow">
              <div className="main__post-follow-btn">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="main__post-follow-btn-txt"
                >
                  <span
                    style={{
                      marginRight: "0.2em",
                      lineHeight: 0,
                      fontSize: "1.3em"
                    }}
                  >
                    +
                  </span>
                  Follow
                </div>
              </div>
            </div>
          </div>
          <div className="main__post-text-cont">{message}</div>
          {/* <img class="main__post-img" width="100%" style="margin-top: 3rem; border-radius: 10px;"
                      src="./snexv_512.jpg" alt=""> */}
        {/* </div> */}
        </div>
      </div>
    </div>
      <div className="downlod_button">
        <button  onClick={handleDownload} className='bottom-bar__download-btn'>Download Image 🔥</button>
      </div>
  </main>
  <form action="" className="main__form">
    <div className="main__form-field">
      <label htmlFor="Name" className="main__form-label" style={{background}}>
        Name
      </label>
      <input
        name="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="main__form-input main__form-input-name"
      />
      <emoji-picker className="light main__form-input-name-emoji-picker" />
    </div>
    <div className="main__form-field">
      <label htmlFor="Profession" className="main__form-label" style={{background}}>
        Username
      </label>
      <input
        name="Profession"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="main__form-input main__form-input-prof"
      />
    </div>
    <div className="main__form-field">
      <label htmlFor="Message" className="main__form-label" style={{background}}>
        Message
      </label>
      <textarea
        className="main__form-input main__form-input-msg"
        name="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id=""
        cols={30}
        rows={8}
        defaultValue={""}
      />
      
    </div>
    <div className="main__form-field">
      <label htmlFor="Profile Picture" className="main__form-label" style={{background}}>
        Profile Picture
      </label>
      <input
        name="Profile Picture"
        // onChange={(e)=> setProfile(e.target.files[0])}
        onChange={imageChange}
        type="file"
        className="main__form-input main__form-input-ppic"
      />
    </div>
    <div className="main__form-field">
      <label htmlFor="Background Color" className="main__form-label" style={{background}}>
        Background Color
      </label>
      <input
        name="Background Color"
        type="color"
        value={backgroundColor}
        defaultValue="#facf0f"
        onChange={(e)=> setBackgroundColor(e.target.value)}
        className="main__form-input main__form-input-bgcolor"
      />
    </div>

    <div className="main__form-field">
      <label htmlFor="Background Pattern" className="main__form-label" style={{background}}>
        Background Pattern
      </label>
      {console.log(backgroundImage)}
      <div className="main__form-bg-pattern-list">
          <div onClick={() => clickPattern()} class={`main__form-bg-pattern ${(isactive, backgroundImage === "url(undefined)") ? 'isactive' : ''}`} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_2)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_2) !== -1) ? 'isactive' : ''} pattern_2 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_3)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_3) !== -1) ? 'isactive' : ''} pattern_3 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_4)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_4) !== -1) ? 'isactive' : ''} pattern_4 `} style={{backgroundColor}}></div>
          
          <div onClick={() => clickPattern(pattern_5)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_5) !== -1) ? 'isactive' : ''} pattern_5 `} style={{backgroundColor}}></div>

          <div onClick={() => clickPattern(pattern_6)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_6) !== -1) ? 'isactive' : ''} pattern_6 `} style={{backgroundColor}}></div>

          <div onClick={() => clickPattern(pattern_7)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_7) !== -1) ? 'isactive' : ''} pattern_7 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_8)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_8) !== -1) ? 'isactive' : ''} pattern_8 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_9)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_9) !== -1) ? 'isactive' : ''} pattern_9 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_10)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_10) !== -1) ? 'isactive' : ''} pattern_10 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_11)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_11) !== -1) ? 'isactive' : ''} pattern_11 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_12)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_12) !== -1) ? 'isactive' : ''} pattern_12 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_13)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_13) !== -1) ? 'isactive' : ''} pattern_13 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_14)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_14) !== -1) ? 'isactive' : ''} pattern_14 `} style={{backgroundColor}}></div>
          <div onClick={() => clickPattern(pattern_15)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_15) !== -1) ? 'isactive' : ''} pattern_15 `} style={{backgroundColor}} ></div>
          <div onClick={() => clickPattern(pattern_16)} class={`main__form-bg-pattern ${(isactive, backgroundImage.indexOf(pattern_16) !== -1) ? 'isactive' : ''} pattern_16 `} style={{backgroundColor}}></div>
          {/* <div className='' style={}></div> */}
          {/* {console.log(`${pattern_2}`)}
          {console.log({pattern_2})} */}
          {/* <div className='' style={backgroundImage}></div> */}
      </div>
    </div>
  </form>


  <section className='bottom-bar' style={{background}}>
    <div className="bottom-bar__logo-cont">
      <img src={logo} alt="Linkeder Logo" />
    </div>

    {/* <button className="bottom-bar__download-btn" >Download Image 🔥</button> */}
    
    {/* <button onClick={handleDownload} className="" >Download Image 🔥</button> */}
    
    <div className='switcher'>
      <button onClick={()=> changeColor(indigo)} data-theme="indigo" className={`theme-button ${(isactive, background === '#6366f1') ? 'isactive' : ''} bg-indigo-500`}></button>
      <button onClick={()=> changeColor(yellow)} data-theme="indigo" className={`theme-button ${(isactive, background === '#eab308') ? 'isactive' : ''} bg-yellow-500`}></button>
      <button onClick={()=> changeColor(red)} data-theme="indigo" className={`theme-button ${(isactive, background === '#ef4444') ? 'isactive' : ''} bg-red-500`}></button>
      <button onClick={()=> changeColor(purple)} data-theme="indigo" className={`theme-button ${(isactive, background === '#a855f7') ? 'isactive' : ''} bg-purple-500`}></button>
      <button onClick={()=> changeColor(blue)} data-theme="indigo" className={`theme-button ${(isactive, background === '#3b82f6') ? 'isactive' : ''} bg-blue-500`}></button>
      <button onClick={()=> changeColor(pink)} data-theme="indigo" className={`theme-button ${(isactive, background === '#ec4899') ? 'isactive' : ''} bg-pink-500`}></button>
      <button onClick={()=> changeColor(green)} data-theme="indigo" className={`theme-button ${(isactive, background === '#22c55e') ? 'isactive' : ''} bg-green-500`}></button>

    </div>
    <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label onClick={handleModeToggle} className='dark_mode_label' for='darkmode-toggle'>
            </label>
        </div>
  </section>

</>

  );
}

export default App;
