import axios from "axios";

export const getDataVideo = async ()=>{
    const res = await axios.get(`https://63c7d600e52516043f458be8.mockapi.io/video/1`);

    if(res.data.like>=1000){
        res.data.like=res.data.like+'K'
    }else if(res.data.like===1){
        res.data.like+=" like"
    }
    else {res.data.like+=" likes"}

    return res.data;
};

