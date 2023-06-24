import './featured.css'

const featured = () => {
  return (
     <div className="featured">
      <div className="featuredItem">
        <img 
          src="https://images.unsplash.com/photo-1568216681201-1edacc6c8048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyJTIwZXMlMjBzYWxhYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dar es salaam</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
           src="https://images.unsplash.com/photo-1669123547600-28b2a1b6582d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHphbnppYmFyJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
           alt="" 
           className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Zanzibar</h1>
          <h2>789 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ1c2hhJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
          alt="" 
          className="featuredImg" />
        <div className="featuredTitles">
          <h1>Arusha</h1>
          <h2>452 properties</h2>
        </div>
      </div>
     </div>
  )
}

export default featured