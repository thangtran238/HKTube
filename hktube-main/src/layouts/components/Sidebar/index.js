import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu,{MenuItem} from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBookmark, faCircleQuestion, faCommentDots, faFilm, faGear, faHistory, faHouseUser, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ContacInfo from './ContactInfo/ContacInfo';

const cx= classNames.bind(styles);

function Sidebar (){
    return <aside className={cx('wrapper')}>
        <div className={cx('item-top')}>
            <Menu>
                <MenuItem title="Home" to='/' icon={<FontAwesomeIcon icon={faHouseUser}/>}/>
                <MenuItem title="Subscriptions" to='/Subscriptions' icon={<FontAwesomeIcon icon={faFilm}/>}/>
                <MenuItem title="Reel" to='/Shorts' icon={<FontAwesomeIcon icon={faBolt}/>}/>
            </Menu>
            <hr/>
            <nav className={cx('item-2')}>
                <Menu>
                    <MenuItem title="Libarary" to='/Libarary' icon={<FontAwesomeIcon icon={faHistory}/>}/>
                    <MenuItem title="Watched" to='/Watched' icon={<FontAwesomeIcon icon={faBookmark}/>}/>
                    <MenuItem title="Liked" to='/Liked' icon={<FontAwesomeIcon icon={faThumbsUp}/>}/>
                </Menu>
            </nav>
        </div>
        <div className={cx('item-bottom')}>
            <hr/>
            <Menu>
                <MenuItem title="Setting" to='/Setting' icon={<FontAwesomeIcon icon={faGear}/>}/>
                <MenuItem title="Help" to='/Help' icon={<FontAwesomeIcon icon={faCircleQuestion}/>}/>
                <MenuItem title="Report" to='/Report' icon={<FontAwesomeIcon icon={faCommentDots}/>}/>
            </Menu>
            <hr/>
            <ContacInfo/>
        </div>
    </aside>
}
export default Sidebar;