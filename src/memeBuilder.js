import React from "react";
import './App.css';
// import SavedMeme from "./SavedMeme";
import axios from "axios";

function memeBuilder(){
  
  const [Newmeme,setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26am.jpg"
  })

  // // CREATES NEW MEME IN ARRAY
  // handleSave = (event) => {
  //   event.preventDefault()
  //   this.setState(prevState => ({
  //     savedMeme: [{
  //       ...prevState.newMeme,
  //       btnTextChange: "Edit",
  //       textDisabled: "disabled"
  //     }, ...prevState.savedMeme]
  //   }))
  //   this.clearInputs()
  // }

   // 1. CREATES & UPDATES MEME BEING BUILT

  const [memeData, setAllMemes] = React.useState([])

    React.useEffect(() => {
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
  }
  // CHANGE EDIT BTN TO SAVE
  handleBtnEdit = (id) => {
    const updatedMemes = this.state.SavedMeme.map(item => {
      if (item.id === id && item.btnTextChange === "Edit") {
        item.btnTextChange = "Save"
        item.textDisabled = ""
      } else if (item.id === id && item.btnTextChange === "Save") {
        item.btnTextChange = "Edit"
        item.textDisabled = "disabled"
      }
      return item
    })
    this.setState({ SavedMeme: updatedMemes })
  }
  // DELETE BTN
  handleBtnDelete = (id) => {
    const updatedMemes = this.state.SavedMeme.filter(item => item.id !== id)
    this.setState({ SavedMeme: updatedMemes })
  } // NO NEED event.preventDefault() DUE TO METHOD CALL FROM CHILD 

  // TEXTAREA CHANGES
  handleTextEditTop = (id, updatedTopText) => {
    const updatedMemes = this.state.SavedMeme.map(item => {
      if (item.id === id) {
        item.topText = updatedTopText
      }
      return item
    })
    this.setState(() => ({ SavedMeme: updatedMemes }))
  }

  handleTextEditBottom = (id, updatedBottomText) => {
    const updatedMemes = this.state.SavedMeme.map(item => {
      if (item.id === id) {
        item.bottomText = updatedBottomText
      }
      return item
    })
    this.setState(() => ({ SavedMeme: updatedMemes }))
  }

  // GENERATES UNIQUE KEY FOR SAVED MEMES
  // generateKey = (id) => {
  //   return `${id}_${Math.floor(Math.random())}`;
  // }

  
    return (
      // MEME-BUILDER / SELECTS PIC AND ALLOWS INPUT
      <div>
        <form>
          <input
            type="text"
            placeholder="Place Top Text Here"
            className="topText"
            name="topText"
            onChange={handleBuildChange}
            value={Newmeme.topText} />
          <input
            type="text"
            placeholder="Place Bottom Text Here"
            className="bottomText"
            name="bottomText"
            onChange={handleBuildChange}
            value={Newmeme.bottomText} />
          <button
            name="newImage"
            value="true"
            className="newImageButton"
            onClick={getMemeImage}
          >Refresh Meme Image</button>
          {/* <button
            className="saveBtn"
            onClick={this.handleSave}
            onMouseUp={this.props.refresh}
            disabled={this.isSaveDisabled()}>Save Meme
          </button> */}
        </form>
        <div className="savedSection">
          {this.state.SavedMeme.map((item, id) =>
            <SavedMeme
              key={this.generateKey(id)}
              id={id}
              item={item}
              textEditTop={this.handleTextEditTop}
              textEditBottom={this.handleTextEditBottom}
              btnEdit={this.handleBtnEdit}
              btnDelete={this.handleBtnDelete} />)}
        </div> 
        <div className="meme">
          <img src={Newmeme.randomImage} className="meme--image" alt=""/>
          <h2 className="meme--Text top">{Newmeme.topText}</h2>
          <h2 className="meme--Text bottom">{Newmeme.bottomText}</h2>
        </div>
      </div>
    )
  

export default MemeBuilder
