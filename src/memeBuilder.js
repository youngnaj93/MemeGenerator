import React, {useState, useEffect} from "react";
import axios from "axios";
// import SavedMeme from "./SavedMeme";



export default function MemeBuilder(props){
  
  // const [memeList, setMemeList] = useState([])
  const [memeData, setAllMemes] = useState([])
  const [newMeme,setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26am.jpg"
  })



    useEffect(() => {
      async function getMemes() {
        axios.get("https://api.imgflip.com/get_memes")
        .then(data => setAllMemes(data.data.data.memes))
      }
      getMemes()
    }, [])

    function getMemeImage(event) {
      // event.preventDefault()
      const randomNumber = Math.floor(Math.random() * memeData.length)
      const url = memeData[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
    }))}

    function handleBuildChange(event) {
  
      const { name, value } = event.target
      setMeme(prevState => {
        return {
          ...prevState,
          [name]: value
        }
      }) 
    }  

    const createMeme = (e) => { 
      e.preventDefault()
      props.submit(newMeme)
      setMeme({ 
          topText: "",
          bottomText: ""
          
      })
      getMemeImage()
  }
  
    return (
      // MEME-BUILDER / SELECTS PIC AND ALLOWS INPUT
      <div>
        <form className="meme-form" onSubmit={createMeme}>
          <input
            type="text"
            placeholder="Place Top Text Here"
            className="top-text-input"
            name="topText"
            onChange={handleBuildChange}
            value={newMeme.topText} />
          <input
            type="text"
            placeholder="Place Bottom Text Here"
            className="bottom-text-input"
            name="bottomText"
            onChange={handleBuildChange}
            value={newMeme.bottomText} />
          <button
            name="newImage"
            value="true"
            className="refresh-button"
            onClick={getMemeImage}
          >New Image</button>
          <button
            className="saveBtn"
            // onMouseUp={this.props.refresh}
            // disabled={this.isSaveDisabled()}
            >Save Meme</button>
        </form>
        <div className="meme-container">
          <img src={newMeme.randomImage} className="meme-image" alt=""/>
          <h2 className="meme-text top">{newMeme.topText}</h2>
          <h2 className="meme-text bottom">{newMeme.bottomText}</h2>
        </div>
      </div>
    )
  }
