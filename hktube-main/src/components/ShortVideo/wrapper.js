import classNames from "classnames/bind";
import styles from './ShortVideo.module.scss';
import "~/pages/Shorts/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({data, snap, hideinfo, classs}){

    return (
    <div  className={cx('wrapper',snap,classs)}>
                <div className={cx("video-container",classs)}>
                    <iframe src={`https://www.youtube.com/embed/${data.video}`} title="d" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className={cx('info',hideinfo)}>
                    <img className={cx('avatar')} alt="" src={data.imgauthor}/>
                    
                    <div className={cx('like')}>
                        {<FontAwesomeIcon icon={faThumbsUp}/>}
                        <span>{data.like}</span>
                    </div>

                    <div className={cx('comment')}>
                        {<FontAwesomeIcon icon={faMessage}/>}
                        <span>{data.comment}</span>
                    </div>
                    
                    <div className={cx('share')}>
                        {<FontAwesomeIcon icon={faShare}/>}
                        <span>Share</span>
                    </div>

                </div>
            </div>
)}
export default Video;