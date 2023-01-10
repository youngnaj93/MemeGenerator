import React, { useState} from "react";



export default function SavedMeme(props) {

  const [showForm, setShowForm] = useState(false)

  const [meme, setMeme] = useState({ 
      topText: props.topText,
      bottomText: props.bottomText,
      randomImage:props.randomImage,
      id:props.id
  })

  const toggleShowForm = () => { 
      setShowForm(prev=>!prev)
  }

  const handleChange = (e) => { 
      const {name, value} = e.target
      setMeme(prevState=>{
          return ({
              ...prevState,
              [name]:value
          })
      })
  }

  const handleSubmit = (e) => { 
      e.preventDefault()
      props.updateMemeItem(props.id, meme)
      toggleShowForm()
  }


  return (
      <div className="meme--list">
          
          {showForm ? 
              <form className="edit-form" onSubmit={handleSubmit}>
                  <input 
                      name="topText"
                      placeholder="Top Text"
                      className="top-text-input"
                      value={meme.topText}
                      onChange={handleChange}
                  />
                  <input 
                      name="bottomText"
                      placeholder="Bottom Text"
                      className="bottom-text-input"
                      value={meme.bottomText}
                      onChange={handleChange}
                  />
                  <img src={meme.randomImage} className="meme--image" alt=""/>
                  <button>Submit</button>
              </form>
          :
          <>
              <div className="meme-container">
                  <img src={meme.randomImage} className="meme--image" alt="" />
                  <h2 className="meme-text top"> {meme.topText} </h2>{" "}
                  <h2 className="meme-text bottom"> {meme.bottomText} </h2>{" "}
              </div>{" "}
          </>
          }
          <button onClick={toggleShowForm}>{showForm ? "Close" : "Edit"}</button>
          <br></br>
          <button onClick={()=> {props.deleteMemeImage(props.id)}}>Delete</button>
      </div>
  );
}
