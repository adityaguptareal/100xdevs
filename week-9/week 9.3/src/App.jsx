import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <PostComponent />
    </>
  );
}

function PostComponent() {
  return (
    <>
      <div style={{}}>
        <img src="https://www.ifoto.ai/blog/wp-content/uploads/ai-photo-enhancer-1.jpeg" alt="" style={{ width: 500, borderRadius: 20 }} />
      </div>
    </>
  );
}

export default App;
