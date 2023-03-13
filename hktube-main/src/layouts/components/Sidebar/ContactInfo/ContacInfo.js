import classNames from "classnames/bind";
import styles from './ContacInfo.module.scss';

const cx = classNames.bind(styles);

function ContacInfo(){
    return(
        <div className={cx('wrapper')}>
           <span className={cx('info')}>
                Control   Private Privacy <br/>
                Policy and Security  <br/>
                How HKTube works <br/>
                Try new features
            </span>
            <br/>
            <br/>
            <span className={cx('day')}>© 2022 Google LLC</span>
        </div>
    )
}

export default ContacInfo;