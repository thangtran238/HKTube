import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { LongVideo } from "~/components/LongVideo";
import * as getApi from '~/apiServices/getApi';
import { ShortVideo } from "~/components/ShortVideo";
import { useState, useEffect } from "react";
import * as getDataUser from '~/apiServices/getDataUser';

const cx = classNames.bind(styles);

function Home(){

    const [longvideos, setLongVideos]= useState([]);

    const [shortvideos, setShortVideos]= useState([]);

    const [currentUser,setCurrentUser]= useState();

    useEffect(()=>{
        const fetchApi = async ()=>{
            const resultLV = await getApi.videoLong();
                setLongVideos(resultLV);
                
            const resultSV = await getApi.videoShort();
                setShortVideos(resultSV);

            const resultUR = await getDataUser.getDataUser();
                setCurrentUser(resultUR);
        }
        fetchApi();
    },[])
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-item')}>
            </div>

            <div className={cx('products')}>   
                {longvideos.map((result)=>(
                    <LongVideo key={result.id} data={result} UR={currentUser}/>
                ))}
            </div>

            <div  className={cx('shortvideo')}>
                {shortvideos.map((result)=>(
                    <ShortVideo  key={result.id} data={result} hideinfo={"hideinfo"} classs={'smallvideo'} />
                ))}
            </div>
        </div>
      
    )
}
export default Home;