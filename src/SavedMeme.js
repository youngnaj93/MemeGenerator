import React from "react";

export default function SavedMeme(props) {

  
  return (
    <div>
      <ul>
      <li>
        <img src={props.memeImage} className="meme-image" alt=""/>
        <h2 className="meme-text top">{props.topText}</h2>
        <h2 className="meme-text bottom">{props.bottomText}</h2></li>
      </ul>
    </div>
  )
}


// function SavedMeme(){
// class SavedMeme extends React.Component {

//   btnDelete = (event) => {
//     event.preventDefault()
//     this.props.btnDelete(this.props.item.id)
//   }

//   btnEdit = (event) => {
//     event.preventDefault()
//     this.props.btnEdit(this.props.item.id)
//   }
//   // Updates TextAreas
//   textEditTop = (event) => {
//     event.preventDefault()
//     this.props.textEditTop(
//       this.props.item.id,
//       event.target.value)
//   }

//   textEditBottom = (event) => {
//     event.preventDefault()
//     this.props.textEditBottom(
//       this.props.item.id,
//       event.target.value)
//   }

//   render() {
//     return (
//       <form className="savedMeme">
//         <textarea
//           name="topText"
//           type="text"
//           disabled={this.props.item.textDisabled}
//           onChange={this.textEditTop}
//           value={this.props.item.topText}
//         />
//         <img
//           src={this.props.item.url}
//           alt={this.props.item.name} />
//         <textarea
//           name="bottomText"
//           type="text"
//           disabled={this.props.item.textDisabled}
//           onChange={this.textEditBottom}
//           value={this.props.item.bottomText}
//         />
//         <div className="savedMemesBtn">
//           <button
//             onClick={this.btnEdit}>
//             {this.props.item.btnTextChange}</button>
//           <button
//             onClick={this.btnDelete}>
//             Delete
//           </button>
//         </div>
//       </form>
//     )
//   }

// }}






// export default SavedMeme