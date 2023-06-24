import './propertyList.css'

const PropertyList = () => {
  return (
     <div className="pList">
        <div className="pListItem">
            <img 
            src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            alt='' 
            className="img pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
            src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" 
            alt='' 
            className="img pListImg" />
            <div className="pListTitles">
                <h1>Appertment</h1>
                <h2>763 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
            src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            alt='' 
            className="img pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>309 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            alt='' 
            className="img pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>125 hotels</h2>
            </div>
        </div>
     </div>
  )
}

export default PropertyList