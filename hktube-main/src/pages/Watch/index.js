import * as getDataVideo from '~/apiServices/getDataVideo';
import classNames from "classnames/bind";
import styles from './Watch.module.scss';
import { useEffect, useState } from 'react';
import { LongVideo } from '~/components/LongVideo';
import * as getApi from '~/apiServices/getApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare, faBars, faDownload } from '@fortawesome/free-solid-svg-icons';
import * as getDataUser from '~/apiServices/getDataUser';

const cx = classNames.bind(styles);

function Watch(){

    const [dataVideo,setDataVideo]= useState([{
        nameauthor: undefined,
        imgauthor: undefined,
        video: undefined,
        view: undefined,
        namevideo: undefined,
        comment: undefined,
        like: undefined,
    }]);
    const [videos, setVideos]= useState([]);
    const [currentUser,setCurrentUser]= useState({img:undefined});

    

    useEffect(()=>{
        
       setTimeout(() => {

           const fetchApi = async ()=>{
               const resultDTV = await getDataVideo.getDataVideo();
                   setDataVideo(resultDTV);
         
                const resultVD = await getApi.videoLong();
                    resultVD.map((result,index)=>{
                        if(result.nameauthor===resultDTV.nameauthor){
                            resultVD.splice(index,1);
                        }
                    })
                    setVideos(resultVD);

                const resultUR = await getDataUser.getDataUser();
                    setCurrentUser(resultUR);
                
           }
           fetchApi();
       }, 1500);
    },[])
   
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>

                <div className={cx('video-container')}>
                    <iframe  src={`https://www.youtube.com/embed/${dataVideo.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <span className={cx('name-video')}>
                    {dataVideo.namevideo}
                </span>

                <div className={cx('container')}>
                    <div className={(cx('info-author'))}>
                        <img className={cx('img-author')} src={dataVideo.imgauthor} alt="" />

                        <div className={cx('name-sub')}>
                            <span className={cx('name-author')}>{dataVideo.nameauthor}</span>
                            <p className={cx('subscribers')}>{dataVideo.subscribers} subscribers</p>
                        </div>

                        <button className={cx('Subs')}>Subscribers</button>
                    </div> 
                    

                    <div className={cx('like-share')}>

                        <div className={cx('like')}>
                            {<FontAwesomeIcon icon={faThumbsUp}/>}
                            <span>{dataVideo.like}</span>
                        </div>
                    
                        <div className={cx('share')}>
                            {<FontAwesomeIcon icon={faShare}/>}
                            <span>Share</span>
                        </div>
                        <div className={cx('save')}>
                            {<FontAwesomeIcon icon={faDownload}/>}
                            <span>Save</span>
                        </div>

                        <div className={cx('more')}>{<FontAwesomeIcon icon={faBars}/>}</div>
                    </div>
                </div>
                
                <div className={cx('comment')}>
                    <span>{dataVideo.comment} Comments</span>
                    
                    <div className={cx("user-comment")}>
                            <img className={cx('img-user')} src={currentUser.img} alt=''/>
                            <form>
                                <label >
                                    <input type="text" name="name" placeholder='Add a comment...'/>
                                </label>
                            </form>
                       
                    </div>

                    <div className={cx("commentt")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV1ALRHUfWS21R-gnnXw15AIraNNsvxT5Sw&usqp=CAU" alt=''/>
                      
                        <div>
                            <span className={cx('name-author')}>Bảo Vy</span>
                            <p>
                                🥰🥰🥰
                            </p>
                        </div>
                    </div>

                    <div className={cx("commentt")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmEw2BDpwY3MzjEYHSPB9zdetRhfldCeYEg&usqp=CAU" alt=''/>
                      
                        <div>
                            <span className={cx('name-author')}>Gia Hân</span>
                            <p>
                                Hey nah
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={cx('menu-item')}>
                {videos.map((result)=>(
                    <LongVideo key={result.id} data={result} RL={true} UR={currentUser} cl={"cl"}/>
                ))}
            </div>

        </div>

    )
}
export default Watch;