import React, { useState } from "react";
import axios from 'axios';
import ImageResult from '../imageresult/ImageResult'
function Search() {

var [searchText, setsearchText] = useState("");
const apikey="23724243-936dd0473b3ef969f2edd5ac7";
const [img, setimg] = useState([])


    var chng= async function(e) {

        await setsearchText(e.target.value);
 
    axios.get(`https://pixabay.com/api/?key=${apikey}&q=${e.target.value}&image_type=photo`)
        .then(res=>{setimg(res.data.hits)})
        .catch(err=>console.log(err));
    
    var url =`https://pixabay.com/api/?key=${apikey}&q=${e.target.value}&image_type=photo`
    
        
}


    

    return (
        <>

        
     <div className="cntr">
         <h1 className="heading">Image Search App</h1>
     <input  className="searchbox" type="text" placeholder="Search for images" name="searchText"
     value={searchText} onChange={chng} />
    
    </div>
    
    {img.length>0?<ImageResult images={img}/>:null}
    
    </>
    );

  }
  
  export default Search;