// src/context/UserContext.jsx
import { createContext, useState, useEffect } from 'react';
import Run from "../Gemini"; 

export const dataContext = createContext();

function UserContext({ children }) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;
  const [speaking, setSpeaking] = useState(false);
  const [isListening, setListening] = useState(false);
  const [prompt, setPrompt] = useState("Listening...");
  const [response, setResponse] = useState("");
  const [isResponding, setIsResponding] = useState(false);



  // Speak text using TTS
  function speak(text) {
    if (!text || text.trim().length === 0) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-GB";

    setIsResponding(true);

    utterance.onend = () => {
      setIsResponding(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  // Run AI model
  async function aiResponse(prompt) {

    const text = await Run(prompt);
   const newText = text
      ?.replace(/google/gi, "Yash Kagwade")
      ?.replace(/\*/g, "");
    setPrompt(newText);
    setResponse(newText);
    speak(newText);
  }

  useEffect(() => {
    if (!recognition) return;

    recognition.onstart = () => {
      console.log("Recognition started");
      setSpeaking(true);
      setListening(true);
    };
recognition.onerror = (event) => {
  console.error("Speech recognition error", event.error);
};

    recognition.onend = () => {
      console.log("Recognition ended");
      setSpeaking(false);
      setListening(false);
    };
      recognition.onresult = (e) => {
      const currentIndex = e.resultIndex;
      const transcript = e.results[currentIndex][0].transcript;
      console.log("You said:", transcript);
      setPrompt(transcript);
      aiResponse(transcript);
    };
  }, [recognition]);

  const value = {
    recognition,
    speaking,
    isListening,
    prompt,
    response,
    isResponding,
    setResponse,
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
