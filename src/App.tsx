import styled from "styled-components";
import { MicrophoneIcon } from "./assets/icons/microphone";
import { Speech } from "./styled";
import { useState, useEffect } from "react";

function App() {

  const [ status, setStatus ] = useState<string>("Said Hello!");
  const message = "To be able to use the voice, allow access to the microphone.";

  const [ transcript, setTranscript] = useState<string>("");
  const [ isListening, setIsListening] = useState<boolean>(false);
  const [ isChangeTheme, setIsChangeTheme ] = useState<boolean>(false);  
  
  useEffect( () => { 
    if (isListening) {
      const recognition = new window.webkitSpeechRecognition();
      console.log("aqui");
      recognition.lang = "pt-br";
      recognition.onresult = (event:any) => {
        const result = event.results[0][0].transcript;
        setTranscript(prevTranscript => prevTranscript + " " + result);
       
        if (result == "mudar tema") toggleTheme()

        setStatus("I'm listening");
        recognition.stop();
      };
      
      recognition.start();
    
    }
    
    setStatus("Say hello!")
  }, [isListening]);

  useEffect(() => {
    if(!isChangeTheme) return;


    alert("TROCOU O TEMA")
  }, [isChangeTheme])
  
  const toggleListening = () => setIsListening(!isListening);

  const toggleTheme = () => setIsChangeTheme(!isChangeTheme);
  
  
  {/*HTML ↓*/}
  
  return (
      <Speech changeTheme={isChangeTheme}>
      <div className={isListening ? "speech_microphone-1 speech-animation" : "speech_microphone-1"}>
        <div className={isListening ? "speech_microphone-2 speech-animation" : "speech_microphone-2"}>
          <div className={isListening ? "speech_microphone-3 speech-animation" : "speech_microphone-3"}  
           onClick={toggleListening}>
            <MicrophoneIcon/>
          </div>
        </div>
      </div>

      <div className="speech_information">
        <h4>{status}</h4>
        <p>{transcript ? transcript : message}</p>
      </div>
    </Speech>
  )
}

export default App
