 import React, {}from 'react'
 import EmojiPicker from 'emoji-picker-react'
 import './index.css'

 function App() {
  const [chosenEmoji, setChosenEmoji] = React.useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Emoji Picker</h1>
      <EmojiPicker onEmojiClick={onEmojiClick} className="emoji-picker" />
{chosenEmoji &&(
<div className="chosen-emoji"><p>Selected Emoji:{chosenEmoji.emoji}</p>
<p>name:{chosenEmoji.name}</p>
</div>)}
</div>        
      );  
 }

 export default App