import React from "react";
import './App.css';
// import savedMeme from "./savedMeme";

function memeBuilder(){
  
  const [Newmeme,setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
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

  // // CLEARS BUILDER MEME TEMPLATE AFTER SAVE 
  // clearInputs = () => {
  //   this.setState({
  //     newMeme: {
  //       bottomText: "",
  //       topText: ""
  //     }
  //   })
  // }

   // 1. CREATES & UPDATES MEME BEING BUILT
   function handleBuildChange(event) {
    const { name, value } = event.target
    setMeme(prevState => ({
      ...prevState,
      [name]:value
    }))
      
    
  }

  function getMemeImage() {
    
  }

  // // DISABLES MEME SAVE BTN
  // isSaveDisabled = () => {
  //   while (
  //     (!this.state.newMeme.topText) &&
  //     (!this.state.newMeme.bottomText)) {
  //     return "disabled"
  //   }
  // }
  // // CHANGE EDIT BTN TO SAVE
  // handleBtnEdit = (id) => {
  //   const updatedMemes = this.state.savedMeme.map(item => {
  //     if (item.id === id && item.btnTextChange === "Edit") {
  //       item.btnTextChange = "Save"
  //       item.textDisabled = ""
  //     } else if (item.id === id && item.btnTextChange === "Save") {
  //       item.btnTextChange = "Edit"
  //       item.textDisabled = "disabled"
  //     }
  //     return item
  //   })
  //   this.setState({ savedMeme: updatedMemes })
  // }
  // // DELETE BTN
  // handleBtnDelete = (id) => {
  //   const updatedMemes = this.state.savedMeme.filter(item => item.id !== id)
  //   this.setState({ savedMeme: updatedMemes })
  // } // NO NEED event.preventDefault() DUE TO METHOD CALL FROM CHILD 

  // // TEXTAREA CHANGES
  // handleTextEditTop = (id, updatedTopText) => {
  //   const updatedMemes = this.state.savedMeme.map(item => {
  //     if (item.id === id) {
  //       item.topText = updatedTopText
  //     }
  //     return item
  //   })
  //   this.setState(() => ({ savedMeme: updatedMemes }))
  // }

  // handleTextEditBottom = (id, updatedBottomText) => {
  //   const updatedMemes = this.state.savedMeme.map(item => {
  //     if (item.id === id) {
  //       item.bottomText = updatedBottomText
  //     }
  //     return item
  //   })
  //   this.setState(() => ({ savedMeme: updatedMemes }))
  // }

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
          >New Image</button>
          {/* <button
            className="saveBtn"
            onClick={this.handleSave}
            onMouseUp={this.props.refresh}
            disabled={this.isSaveDisabled()}>Save Meme
          </button> */}
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
        <div className="meme">
          <img src="{Newmeme.random.image}" className="meme--image" alt=""/>
          <h2 className="meme--topText">{Newmeme.topText}</h2>
          <h2 className="meme--bottomText">{Newmeme.bottomText}</h2>
        </div>
      </div>
    )
  }

export default memeBuilder
