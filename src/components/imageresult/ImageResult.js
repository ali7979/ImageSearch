import React,{ useState } from "react";
import { saveAs } from 'file-saver'
import { GridList,GridTile } from "material-ui";
import IconButton from "material-ui/IconButton";
import ActionZoomIn from "material-ui/svg-icons/action/zoom-in";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import '../../App.css'

function ImageResult(images) {
let list;
images=images.images;
const [open, setopen] = useState(false);
const [currentImg, setcurrentImg] = useState('');
var col=4;
if(document.documentElement.clientWidth<=700){
     col=3;
}
if(document.documentElement.clientWidth<=550){
     col=2;
}


var handleOpen=(img)=>{
    setopen(true)
    setcurrentImg(img)
}
var handleClose=()=>{
    setopen(false);
}
const zzz = () => {
   
      saveAs(currentImg, 'image.jpg') // Put your image url here.
    }

    if(images){
         list=(
            <GridList cols={col} cellHeight={250} style={{margin:"0.7rem"}}>{
                images.map((img)=>(
                    <GridTile  className="tiles"
                    title={img.tags}
                    key={img.id}
                    actionIcon={
                    <IconButton  onClick={()=>handleOpen(img.largeImageURL)}>
                    <ActionZoomIn color="white"/>
                    </IconButton>
                    
                    }
                    style={{margin:"0.2rem"}}
                    onClick={()=>handleOpen(img.largeImageURL)}
                    >
                    <img src={img.largeImageURL} alt=""/>
                    </GridTile>
               ))
          
    }
    </GridList>
        )
    
}
else{
list=null;
}
const actions=[
    <>
    
    <FlatButton label="Download" primary={true} onClick={zzz} 
    
    
    
    
    />
    <FlatButton label="Close" primary={true} onClick={handleClose} />
    </>
]




    return (
        <>
        
       <div>
           {list}

           <Dialog actions={actions}
           modal={false}
           open={open}
           onRequestClose={handleClose}
       >
           <img src={currentImg} style={{width:'100%'}}/>
       </Dialog>
        
    </div>
    <div className="footer">--- By- Zoheb---</div>
    
     </>
    );
    
    }
  

  export default ImageResult;