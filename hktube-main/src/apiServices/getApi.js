import axios from 'axios';
export const search = async (debounced)=>{
    const res = await axios.get(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/video`);
    const ress= res.data;
    let a;
    ress.map((res,index)=>{
        if (debounced === ress[index].nameauthor){
            a = ress[index];
        }
        return a
    })

    if (a===undefined){
        return [];
    }
    else {
        return [a]
    };
};


export const videoLong = async ()=>{
    const res = await axios.get(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/video`);
    var ress=res.data;
    var longs=[];
    ress.map((res)=>{
            if(res.typevideo==='long'){
                res.video=(res.video).slice(17);
                if(res.view>=1000){
                    res.view=res.view+'K views'
                }else if(res.view===1){
                    res.view+=" view"
                }
                else {res.view+=" views"}
                longs.push(res);
            }
        return res
    })



    var a=[];
    longs.map((res)=>{
    var random =Math.floor(Math.random()* longs.length);
        a.splice(random,0,res)
        return a
    })
    return a;
};


export const videoShort = async ()=>{
    const res = await axios.get(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/video`);
    var ress=res.data;
    var shorts=[];
    ress.map((res)=>{
            if(res.typevideo==='short'){
                res.video=(res.video).replace('https://youtube.com/shorts/',"");
                res.video=(res.video).replace('?feature=share',"");
                shorts.push(res);
            }
        return shorts
    })

    var a=[];
    shorts.map((res)=>{
    var random =Math.floor(Math.random()* shorts.length);
        a.splice(random,0,res)
        return a;
    })

    return a;
};



