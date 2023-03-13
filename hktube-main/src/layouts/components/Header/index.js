import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBell, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import axios from 'axios';
import Search from '../Search';
import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { wrapper as SeachArea } from '~/components/SearchArea';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as getDataUser from '~/apiServices/getDataUser';

const cx=classNames.bind(styles);

function Header (){
    
    const [currentUser,setCurrentUser]= useState(undefined);
    useEffect(()=>{
        const fetchApi = async ()=>{
            const resultUser = await getDataUser.getDataUser();
                setCurrentUser(resultUser);
            }
        fetchApi();
    },[]);

    return <header className={cx('wrapper')}>
          <div className={cx('content')}>
                <Link to='/' className={cx('logo')}>
                    <img src={images.logo} alt='HKTube'/>
                    <h2><span className={cx('color-H')}>H</span><span className={cx('color-K')}>K</span>Tube</h2>
                </Link>

                <Search/>
            
                <div className={cx('actions')}>

                { currentUser &&
                    <> 
                        <a href='/Upload'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faVideoCamera}/>
                            </button>
                        </a>
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faBell}/>
                        </button>
                        
                        <Tippy
                            trigger='click'
                            interactive
                            render={(attrs)=>(
                                <div className={cx('Sign-out')} tabIndex="-1"{...attrs}>           
                                    <SeachArea>
                                        <div onClick={()=>{
                                            
                                            const sendPostRequest = async () => {
                                                try {
                                                    await axios.put(`https://63c2ccd0b0c286fbe5f3efa4.mockapi.io/api/user/${currentUser.id}`, 
                                                    {
                                                        login: false
                                                    }
                                                    );
                                                } catch (err) {
                                                    console.error(err);
                                                }
                                            }

                                            sendPostRequest();
                                            setTimeout(() => {
                                                window.location.reload(false);
                                            }, 1000);
                                        }}>
                                            <Button>
                                                SIGN OUT
                                            </Button>
                                        </div>
                                    </SeachArea>
                                </div>
                            )}
                        >
                            <img src={currentUser.img} className={cx('user-avatar')} alt=""/>
                            
                        </Tippy>  
                    </>  
                }
                { currentUser === false &&
                    <>
                    <Button href={'http://127.0.0.1:5500/login/login.html'} primary lefticon={<FontAwesomeIcon icon={faCircleUser} />}>
                        SIGN IN
                    </Button>
                 </>
                }
                    
                   
               
            </div>
        </div>  
    </header>
}
export default Header;
