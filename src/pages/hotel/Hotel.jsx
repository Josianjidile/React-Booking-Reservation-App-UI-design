import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './hotel.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
   const photos =[
    {
      src:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://plus.unsplash.com/premium_photo-1678286769630-4ea3d6878dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
   ];

   const handleOpen =(index)=>{
    setSlideNumber(index);
    setOpen(true);
   }

   const handleMove =(direction)=>{
    let newslideNumber;
    if(direction=== "l"){
  newslideNumber =slideNumber === 0 ? 5 : slideNumber-1
    }
    else{
      newslideNumber =slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newslideNumber)
   }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        { open &&<div className="slider">
         <FontAwesomeIcon icon={faCircleXmark} className="close"onClick={()=>setOpen(false)} />
         <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
         <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand melia hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Mbezi St 345 Dar es salaam</span>
            </div>
            <span className="hotelDistance">
              excelent location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
               {photos.map((photo,index)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                </div>
               ))}
            </div>
       <div className="hotelDetails">
        <div className="hotelDetailsTexts">
          <h1 className="hotelTitle">stay in the heart of love</h1>
          <p1 className="hotelDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Dolorem, voluptatum ab libero ex fugit aliquam assumenda possimus minus voluptate 
           aut doloremque sapiente nostrum aperiam, voluptas culpa labore quae, hic exercitationem!
           </p1>
        </div>
         <div className="hotelDetailsPrice">
          <h1> perfect for a 6-night stay!</h1>
          <span>
            located in the real heart of city,this property has excelent location score of 9.8!
          </span>
          <h2>
            <b>$672</b> (9 night)
          </h2>
          <button>Reserve or Book Now!</button>
         </div>
        </div>
          </div>
          <MailList/>
          <Footer/>
        </div>
      </div>
  
  )
}

export default Hotel