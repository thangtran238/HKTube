import { ShortVideo } from "~/components/ShortVideo";
import classNames from "classnames/bind";
import styles from './Short.module.scss';
import * as getApi from '~/apiServices/getApi';

import { useState, useEffect} from "react";

const cx = classNames.bind(styles);

function Shorts(){
    const [shortvideos, setShortVideos]= useState([]);

    useEffect(()=>{
        const fetchApi = async ()=>{
                
            const resultSV = await getApi.videoShort();
                setShortVideos(resultSV);
        }
        fetchApi();
    },[])

    return (
    <div className={cx('wrapper')}>
        {shortvideos.map((result)=>(
            <ShortVideo key={result.id}  
                data={result} 
                snap={"snap-start"}
            />
        ))}
    </div>
    )
}
export default Shorts;