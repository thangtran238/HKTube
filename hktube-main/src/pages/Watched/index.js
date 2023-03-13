import { useEffect, useState } from "react";
import * as getDataUser from '~/apiServices/getDataUser';
import classNames from "classnames/bind";
import styles from './Watched.module.scss';
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { LongVideo } from "~/components/LongVideo";
import axios from "axios";
const cx= classNames.bind(styles);

function Watched(){
    const [currentUser,setCurrentUser]= useState();

    useEffect(()=>{
        const fetchApi = async ()=>{

            const resultUser = await getDataUser.getDataUser();
                setCurrentUser(resultUser);
            }
            
        fetchApi();
    },[]);

    if(currentUser){
        return (
            <div className={cx('wrapper')}>  
                <div className={cx("info-top")}>
                    <h2>Watch history</h2> 
                    <span onClick={()=>{
                        const sendPostRequest = async () => {
                            try {
                                await axios.put(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user/${currentUser.id}`,
                                {
                                    watched: []
                                });
                                   
                                }catch(e){
                            console.log(e);
                        }   
                        }
                        sendPostRequest();
                        setTimeout(() => {
                            window.location.reload(false)
                        }, 1500);
                    }} className={cx("icon-top")}><FontAwesomeIcon icon={faXmark} /></span>    
                </div>
                
                {(currentUser.watched).map((result,index)=>(
                    <div className={cx("video")}>
                        <LongVideo key={index} data={result} UR={currentUser} cl={"wc"}/>
                    </div>
                ))}
            </div>
        )
    }
    else if((currentUser===false)){
        return (
        <div className={cx("wrapper")}>
            <div className={cx("text")}>
                <span className={cx("icon")}>
                    {<FontAwesomeIcon icon={faBookmark}/>}
                </span>
                <h1>
                    Keep track of what you watch
                </h1>
                <span>
                    Watch history isn't viewable when signed out.
                    <p>Learn more</p>
                </span>
               
            </div>

            
            <Button href={'http://127.0.0.1:5500/login/login.html'} small lefticon={<FontAwesomeIcon icon={faCircleUser} />}>
                SIGN IN
            </Button>

        </div>
        )
    }
    
}
export default Watched;