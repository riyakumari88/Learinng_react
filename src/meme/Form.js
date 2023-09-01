import React from 'react';
import memesData from './memesData';


function Form(){

  // function getMemeImage(){
  //   const memesArray = memesData.data.memes
  //   const randomNumber = Math.floor(Math.random() * memesArray.length)
  //   const url =memesArray[randomNumber].url
  //   console.log(url)
  // }

  //const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/7x0fve.jpg")
  
  const[meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/7x0fve.jpg"
  })

const[allMemeImages,setAllMemeImages] =React.useState(memesData)

  function getMemeImage(){
      const memesArray = allMemeImages.data.memes
     const randomNumber = Math.floor(Math.random() * memesArray.length)
     //setMemeImage(memesArray[randomNumber].url) 
     const url=memesArray[randomNumber].url
     setMeme(prev =>({
      ...prev,randomImage:url
     }))

  }
  return (
    <main>
    <div className="form">
        <input placeholder="top text" className="comp" />
        <input placeholder="bottom text"className="comp"/>
        <button className="form-button" onClick={getMemeImage}>Get a new meme image Painting</button>
    </div>
    
    {/* <img className="money_img" src={memeImage} /> */}
    <img className="money_img" src={meme.randomImage}/>
    
</main>
  )
}

export default Form