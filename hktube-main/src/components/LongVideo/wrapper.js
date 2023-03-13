import classNames from "classnames/bind";
import styles from './LongVideo.module.scss';
import { NavLink } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(styles);

function Video({data,RL,UR,cl}){
        return (
            <NavLink to={'/Watch'} 
                onClick={()=>{
                    const sendPostRequest = async () => {
                        try {
                            await axios.put('https://63c7d600e52516043f458be8.mockapi.io/video/1', data);

                            if(UR){
                                let a=true;
                                let resp;  
                                await axios.get(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user/${UR.id}`)
                                .then(function(response){
                                    resp=response.data.watched
                                    resp.map((res)=>{
                                        if(data.id===res.id){
                                            a=false
                                        }
                                    })
                                }).catch(function(e){
                                    console.log(e);
                                })
                                
                                if(a){
                                    resp.unshift(data)
                                    await axios.put(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user/${UR.id}`, {
                                        watched: resp
                                    });
                                }                     
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    }
                    sendPostRequest();

                    if(RL===true){
                        setTimeout(() => {
                            window.location.reload(false);
                        },2100);
                    }
                }} 

                className={cx('wrapper',cl)}>
                <div className={cx(cl)}>
                    <img className={cx('img-video')} src={data.imgvideo} alt="" />

                    <div className={cx('info')}>
                        <img className={cx('avatar')} src={data.imgauthor} alt=""/>
                        
                        <div className={cx('')}>

                            <div className={cx('info-top')}>
                                <p className={cx('name-video')}>
                                    {data.namevideo}
                                </p>
                            </div>

                            <div className={cx('info-bottom')}>
                                <span className={cx('name-author')}>
                                    {data.nameauthor}
                                </span>
                                <span className={cx('views')}>
                                    {data.view}
                                </span>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </NavLink>
        )}
export default Video;
