import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img 
      src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/324916714.jpg?k=c674cdbe8994e18585ea558ac2c99840515dd67c244ece76a5bf5c978edc8076&o=&hp=1" 
      alt="" 
      className="siImg" />
      <div className="siDesc">
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartments with air conditioning
          </span>
          <span className="siFeatures">
            Entire studio . 1 bathroom . 21m 1 full bed
          </span>
          <span className="siCancelOp">free cancellation</span>
          <span className="siCancelOpSubtitle">
            you can cancel later, so lock in this price today!
            </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
             <span>Excellent</span>
             <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See Availability</button> 
        </div>
      </div>
    </div>
  );
};

export default SearchItem;