// src/App.jsx
import { useContext, useEffect } from 'react';
import './index.css';
import * as st from './Styling';
import { RiMicAiLine } from "react-icons/ri";
import { dataContext } from './context/UserContext';
import aiVoice from './assets/aiVoice.gif';
import speakimg from './assets/speakimg.gif';
import Nova from './assets/Nova.png';
function App() {
  const {
    recognition,
    speaking,
    prompt,
    response,
    isResponding,
    setResponse,
  } = useContext(dataContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      // speak("Hello, I'm your assistant Nova");
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <st.imgDiv>
      <st.stylimg src={Nova} id="NOVA" />
      <st.cstspan>Hello, I'm your assistant NOVA here</st.cstspan>

      {!(speaking || isResponding) ? 

        <st.Button
          onClick={() => {
            try {
              
              setResponse("");
              recognition.start();
            } catch (e) {
              console.error("Speech recognition already started or not supported:", e);
            }
          }}
        >
          Click HeAre <RiMicAiLine />
        </st.Button>
       : 
        <st.spkdiv>
        {!response ?
         <img src={speakimg} alt="" id="Speaking" /> :
        
         <st.aiimg src={aiVoice} alt="Listening..." />
        
        }
        
          <p><strong>You:</strong> {prompt}</p>
          {response && <p><strong>Nova:</strong> {response}</p>}
        </st.spkdiv>
      }
    </st.imgDiv>
  );
}

export default App;
