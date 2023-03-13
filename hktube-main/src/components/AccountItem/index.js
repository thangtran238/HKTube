import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { NavLink } from "react-router-dom";

const cx=classNames.bind(styles);

function AccountItem({data}){
    return (
    <NavLink to={`/Profile`} className={cx('wrapper')}>
        <img className={cx('avatar')} src={data.imgauthor} alt=""/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                {data.nameauthor}
            </p>
        </div>
    </NavLink>
)}

export default AccountItem;