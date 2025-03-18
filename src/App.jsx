 import React, {}from 'react'
 import EmojiPicker from 'emoji-picker-react'
 import './index.css'

 function App() {
  const [chosenEmoji, setChosenEmoji] = React.useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      <h1>Emoji Picker</h1>
      <EmojiPicker onEmojiClick={onEmojiClick} />
{chosenEmoji &&(
<div><p>Selected Emoji: {chosenEmoji.emoji}</p>
<p>name: {chosenEmoji.name}</p>
</div>)}
</div>        
      );  
 }