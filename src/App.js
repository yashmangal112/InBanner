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

  // const clickPattern =(pattern)=>{
  //   // setPattern(backgroundColor)
  //   // const image: URL({${pattern}});
  //   // backgroundImage: {`url(${pattern})`}
  //   // backgroundImage: `url(${pattern})`
  //   console.log(pattern)
  //   const image = `${pattern}.svg`;
  //   console.log(image)
  //   const backgroundImage = ({pattern})

  //   // const divStyle = {
  //   //   backgroundImage: `url(${image})`,
  //   // };
  //   // {console.log({background})}
  //   // console.log(backgroundImage)
  //   // <img src={pattern} alt="User Image" />
  //   console.log(backgroundImage)
  //   setPattern(backgroundImage);
  // }
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


  // const divStyle = {
  //   // backgroundImage: `url(${imageUrl})`,
  //   backgroundColor: {backgroundColor}
  // };

  const handleDownload = () => {
    const div = document.getElementById('capture');

    // html2canvas(div).then((canvas) => {
    //   const image = canvas.toDataURL('image/png');
    //   console.log(image);
    //   allowTaint: true,
    //   // useCORS: true
    //   // You can use the image data URL to display or save the screenshot
    // });

    html2canvas(div,  {
      allowTaint: true,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      useCORS: true,
      logging: true, 
      letterRendering: 1, // allowTaint: false  useCORS: true

    }).then(function(canvas) {
          const download_image = canvas.toDataURL('image/png');
          console.log(download_image);
          // window.open(download_image)
    })
    
  }
  // const targetRef = useRef(null);

  // const handleDownload = () => {
  //   const canvas = document.createElement('canvas');
  //   const div = targetRef.current;

  //   canvas.width = div.offsetWidth;
  //   canvas.height = div.offsetHeight;

  //   const context = canvas.getContext('2d');

  //   // Introduce a delay to ensure the content is fully rendered
  //   setTimeout(() => {
  //     context.drawImage(div, 0, 0);

  //     const dataURL = canvas.toDataURL('image/png');
  //     console.log(dataURL);
  //     // You can use the dataURL to display or save the captured image
  //   }, 100);
  // }


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
        Welcome to <b>Linkeder!</b> A tool to quickly create a stunning
        tweet-style Linkedin profile header (banner) to boost your personal
        brand made by{" "}
        <a href="https://linkedin.com/in/rammcodes">
          <b>Ram Maheshwari</b>
        </a>{" "}
        ⚡
      </div>
    </div>
    <div className="main__post" >
      <div className="main__post-bg" id='capture'  style={{backgroundImage, backgroundColor}} >
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
        </div>
      </div>
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
      <img src={logo} alt="Linkeder Logo" style={{width: '38px'}} />
    </div>

    {/* <button className="bottom-bar__download-btn" >Download Image 🔥</button> */}
    
    <button onClick={handleDownload} className="bottom-bar__download-btn" >Download Image 🔥</button>
    
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
              {/* <img src={sun}/> */}
                {/* <sun/>
                <moon/> */}
            </label>
        </div>
  </section>


  {/*  */}
  <div className="preview-modal preview-modal--hide">
    <div className="preview-modal__cont">
      <p className="preview-modal__txt">
        Done! Right-click (or hold down on mobile) on the image and press Save
        Image to save it to your device.
      </p>
      <span className="preview-modal__close">+</span>
      {/* <img src={download_image}></img> */}
    </div>
  </div>
  {/* Overlay and pop-up content */}
  <div className="overlay" id="yt-overlay">
    <div className="yt-popup" id="yt-popup">
      <span className="yt-close" onclick="closePopup()">
        ×
      </span>
      {/* <iframe width="100%" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?autoplay=1" frameborder="0"
          allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
      <iframe
        src="https://www.youtube.com/embed/Zr-cfaDaW-k"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
      />
    </div>
  </div>
  {/*  */}
  {/*  */}
  {/* JavaScript to control the pop-up */}
</>

  );
}

export default App;
