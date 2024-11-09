import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '99vh', width: '99vw', backgroundColor: 'gray', }}>
        <PostComponent name={"Aditya"} followerCount={30} time={'2d'} image={'https://i0.wp.com/adityaguptareal.com/wp-content/uploads/2024/03/Aditya-kumar-Gupta-adityaguptareal-4.png?resize=300%2C300&ssl=1'} description={"Hi this is Aditya kumar Gupta a professional fre"} />
        <PostComponent name={"Aditya"} followerCount={30} time={'2d'} image={'https://i0.wp.com/adityaguptareal.com/wp-content/uploads/2024/03/Aditya-kumar-Gupta-adityaguptareal-4.png?resize=300%2C300&ssl=1'} description={"Hi this is Aditya kumar Gupta a professional fre"} />
        <PostComponent name={"Aditya"} followerCount={30} time={'2d'} image={'https://i0.wp.com/adityaguptareal.com/wp-content/uploads/2024/03/Aditya-kumar-Gupta-adityaguptareal-4.png?resize=300%2C300&ssl=1'} description={"Hi this is Aditya kumar Gupta a professional fre"} />
        <PostComponent name={"Aditya"} followerCount={30} time={'2d'} image={'https://i0.wp.com/adityaguptareal.com/wp-content/uploads/2024/03/Aditya-kumar-Gupta-adityaguptareal-4.png?resize=300%2C300&ssl=1'} description={"Hi this is Aditya kumar Gupta a professional fre"} />
      </div>

    </>
  );
}
const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function PostComponent({ name, followerCount, time, image, description }) {
  return (
    <>
      <div style={style}>
        <div style={{ display: 'flex' }}>
          <img src={image} alt="" style={{ width: 30, height: 30, borderRadius: 20 }} />
          <div style={{ fontSize: 10, marginLeft: 10 }}>
            <b>
              {name}
            </b>
            <div>{followerCount} Followers</div>
            
            {time && <div style={{ display: 'flex' }}>

              <div>{time}</div>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/053/744/small_2x/world-globe-earth-map-png.png" alt="" style={{ width: 5, height: 5 }} />
            </div>}

          </div>
        </div>
        <div style={{ fontSize: 12 }}>
          {description}
        </div>
      </div>
    </>
  );
}


export default App;
