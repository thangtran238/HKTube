import axios from "axios";

export const getDataVideoWatched = async ()=>{
    const res = await axios.get(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/video`);
    
    return res.data;
};
