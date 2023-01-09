import React, {useState, useEffect} from "react";
import axios from "axios";
import SavedMeme from "./SavedMeme";

export default function MemeBuilder(){
  
  const [memeList, setMemeList] = React.useState([])
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
      event.preventDefault()
      const randomNumber = Math.floor(Math.random() * memeData.length)
      const url = memeData[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
    }))}

    function handleBuildChange(event) {
  
      const { name, value } = event.target
      setMeme(prevState => ({
        ...prevState,
        [name]:value
      })) 
    }  

      // CREATES NEW MEME IN ARRAY
      function saveMeme(event) {
        event.preventDefault()
        console.log(newMeme)
        setMemeList(memeList => ([
                newMeme,
                ...memeList
            ]))
        } 
        
        
        function saveUpdatedMeme(memeId, updatedMeme) {
  
          setMemeList(prevList => {
              return prevList.map((currentMeme, index) => {
                  if(index === memeId) { 
                      return {
                          topText: updatedMeme.topText, 
                          bottomText: updatedMeme.bottomText,
                          randomImage: currentMeme.randomImage
                      }
                  }
                  else { 
                      return currentMeme
                  }
              })
          })
      }



    const savedMemes = memeList.map((meme, index) => {
      return <SavedMeme
                key={index}
                id={index}
                topText={newMeme.topText}
                bottomText={newMeme.bottomText}
                memeImage={newMeme.randomImage}
                // deleteMeme={deleteMeme}
                // editMeme={editMeme}
                saveUpdatedMeme={saveUpdatedMeme}
                memeList={memeList}
      />

    })

    
    // const handleBtnEdit = (id) => {
    //   const updatedMemes = this.state.SavedMeme.map(item => {
    //     if (item.id === id && item.btnTextChange === "Edit") {
    //       item.btnTextChange = "Save"
    //       item.textDisabled = ""
    //     } else if (item.id === id && item.btnTextChange === "Save") {
    //       item.btnTextChange = "Edit"
    //       item.textDisabled = "disabled"
    //     }
    //     return item
    //   })
    //   this.setState({ SavedMeme: updatedMemes })
    // }
    // // DELETE BTN
    // const handleBtnDelete = (id) => {
    //   const updatedMemes = this.state.SavedMeme.filter(item => item.id !== id)
    //   this.setState({ SavedMeme: updatedMemes })
    // } // NO NEED event.preventDefault() DUE TO METHOD CALL FROM CHILD 
  
    // // TEXTAREA CHANGES
    // const handleTextEditTop = (id, updatedTopText) => {
    //   const updatedMemes = this.state.SavedMeme.map(item => {
    //     if (item.id === id) {
    //       item.topText = updatedTopText
    //     }
    //     return item
    //   })
    //   this.setState(() => ({ SavedMeme: updatedMemes }))
    // }
  
    // const handleTextEditBottom = (id, updatedBottomText) => {
    //   const updatedMemes = this.state.SavedMeme.map(item => {
    //     if (item.id === id) {
    //       item.bottomText = updatedBottomText
    //     }
    //     return item
    //   })
    //   this.setState(() => ({ SavedMeme: updatedMemes }))
    // }
  
    return (
      // MEME-BUILDER / SELECTS PIC AND ALLOWS INPUT
      <div>
        <form className="meme-form">
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
            onClick={saveMeme}
            // onMouseUp={this.props.refresh}
            // disabled={this.isSaveDisabled()}
            >Save Meme</button>
        </form>
        {/* <div className="savedSection">
          {this.state.savedMeme.map((item, id) =>
            <savedMeme
              key={this.generateKey(id)}
              id={id}
              item={item}
              textEditTop={this.handleTextEditTop}
              textEditBottom={this.handleTextEditBottom}
              btnEdit={this.handleBtnEdit}
              btnDelete={this.handleBtnDelete} />)}
        </div> */}
        <div className="meme-container">
          <img src={newMeme.randomImage} className="meme-image" alt=""/>
          <h2 className="meme-text top">{newMeme.topText}</h2>
          <h2 className="meme-text bottom">{newMeme.bottomText}</h2>
        </div>
        <div className="saved-memes">
          {savedMemes}
        </div>
      </div>
    )
  }

