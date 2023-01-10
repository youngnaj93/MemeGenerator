import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import MemeBuilder from './memeBuilder';
import SavedMeme from './SavedMeme';
import { v4 as uuidv4 } from 'uuid';


function App(props) {

  const [memeList, setMemeList] = useState([])
  
      const updateMemeItem = (id, updatedItem) => { 
        setMemeList(prevMemeList => { 
            return prevMemeList.map((item)=> { 
                if (item.id === id) { 
                    return updatedItem
                }
                else {
                    return item
                }
            })
        })
    }
  
    const addNewItem = (newItem) => {
      newItem.id = uuidv4()
      setMemeList(prev=>[...prev, newItem])
    }
  
    function deleteMemeImage(id) {
      console.log(id)
      setMemeList(memeList.filter((meme) => meme.id !== id))
    }
  
    const savedMemes = memeList.map((meme, index) => {
      return  <SavedMeme
        key={meme.id}
        topText={meme.topText}
        bottomText={meme.bottomText}
        randomImage={meme.randomImage}
        updateMemeItem={updateMemeItem}
        deleteMemeImage={deleteMemeImage}
        id={meme.id}
      />})

  return (
    <div>
      <Header/>
     <MemeBuilder submit={addNewItem} />
     <hr/><br></br>
      <h2 className="saved-memes">Saved Memes List</h2>
      {savedMemes}
    </div>
  )
}

export default App


