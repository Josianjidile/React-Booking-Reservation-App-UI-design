import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div>
        <div className="fp">
     
        <div className="fpItem">
            <img 
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="" 
            className="fpImg" />
            <span className="fpName">abc hotel</span>
            <span className="fpCity">Dar es salaam</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>     
     
        <div className="fpItem">
            <img 
            src="https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="" 
            className="fpImg" />
            <span className="fpName">gran melia hotel</span>
            <span className="fpCity">Arusha</span>
            <span className="fpPrice">Starting from $234</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
            src="https://media.istockphoto.com/id/1366060354/photo/hotel-maid-bringing-fresh-towels-to-the-room.webp?b=1&s=170667a&w=0&k=20&c=iya387seE8jbR5u9BlRL1lEcuYD-ommbsFsT60zKMlg="
            alt="" 
            className="fpImg" />
            <span className="fpName">morena hotel</span>
            <span className="fpCity">Dodoma</span>
            <span className="fpPrice">Starting from $320</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="" 
            className="fpImg" />
            <span className="fpName">serena hotel</span>
            <span className="fpCity">Dar es salaam</span>
            <span className="fpPrice">Starting from $442</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
   </div>
    </div>
  )
}

export default FeaturedProperties