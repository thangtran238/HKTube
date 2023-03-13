import classNames from 'classnames/bind';
import  styles  from './Upload.module.scss';
import { useEffect, useState } from "react";
import * as getDataUser from '~/apiServices/getDataUser';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Upload(){
    const [currentUser,setCurrentUser]= useState();
    let imgvideo ;

    useEffect(()=>{
        const fetchApi = async ()=>{
            const resultUser = await getDataUser.getDataUser();
                setCurrentUser(resultUser);
            }
            
        fetchApi();
    },[]);

    function previewFile(){
        const preview = document.querySelector('#imgpreview');
        const file = document.querySelector('#img').files[0];
        const reader = new FileReader();

    

    reader.addEventListener("load",function(){
        // convert image file to base64 string
        preview.src = reader.result;
        imgvideo=preview.src;
    },false);
    
    if(file){
        reader.readAsDataURL(file);
    }
    }

    function upload(){

        var namevideo= document.getElementById("namevideo").value;
        var desc= document.getElementById("Description").value;
        var typevideo= document.getElementById("type").value;
        var video= document.getElementById("Link").value;
        var nameauthor=currentUser.name;
        var imgauthor=currentUser.img;

        var video ={
            namevideo:namevideo,
            desc:desc,
            typevideo:typevideo,
            video:video,
            nameauthor:nameauthor,
            imgauthor:imgauthor,
            imgvideo:imgvideo
        }
        axios.post("https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/video",video)
        .then(function (response) {
            console.log(response);
            alert("Upload video success!");
            window.location.reload(false);
          })
          .catch(function (error) {
            alert("Upload Failed!");
            console.log(error);
          });
    }

  return(
    <div className={cx("wrapper")}>
        <h1>Upload</h1>

        <form action="">
            <div className={cx('info-left')}>
                <label> &emsp; Title(required) &emsp;

                    <input id="namevideo" className={cx("Title")} placeholder="Add a title that describes your video (type @ to mention a channel)" ></input>

                </label>

                <label>  &emsp; &nbsp; Description &emsp;  &nbsp;

                    <textarea id="Description" className={cx("Description")} placeholder="Tell viewers about your video (type @ to mention a channel)" />

                </label>
                <span> &emsp;&emsp;&nbsp; &nbsp;Type Video &nbsp;&nbsp;&nbsp;
                    <select id="type" className={cx('type')}>
                        <option value="long">long</option>
                        <option value="short">short</option>
                    </select>
                </span>

                <label> &emsp;&nbsp;&nbsp; Video Link &emsp;&nbsp;&nbsp;&nbsp;

                    <input id="Link" className={cx("Title")} placeholder="Add a Link for video" ></input>

                </label>
                
            </div>
           

            <div className={cx('info-right')}>
                <input type="file" id="img" onChange={previewFile}/>
                <img className={cx('img')} id="imgpreview" alt="Thumbnail"/>
            </div>
        </form>

        <button className={cx("upload")} onClick={upload}>Upload</button><br/><br/>

    </div>
  )
}



