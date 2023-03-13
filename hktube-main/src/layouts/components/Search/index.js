import { faCircleXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import useDebounce from '~/hooks/useDebounce';
import { useEffect, useState, useRef  } from 'react';
import { wrapper as SeachArea } from '~/components/SearchArea';
import * as getApi from '~/apiServices/getApi';


const cx=classNames.bind(styles);

function Search(){

    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult]= useState([]);
    
    const [showResult, setShowResult]= useState(true);

    const debounced =useDebounce(searchValue,500);

    const inputRef = useRef();

    const hendleHideResult=()=>{
        setShowResult(false)
    }
    
    useEffect(()=>{
        if(!debounced){
            setSearchResult([])
        }
        const fetchApi = async ()=>{
            const result = await getApi.search(debounced);
                setSearchResult(result)
        }

        fetchApi();
        
    },[debounced])


    return(
        <div>
            <Tippy 
                interactive
                visible={ showResult && searchResult.length >0}
                render={(attrs)=>(
                    <div className={cx('search-result')} tabIndex="-1"{...attrs}>
                        <SeachArea>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result)=>(
                                <AccountItem key={result.id} data={result}/>
                            ))}      
                        </SeachArea>
                    </div>
                )}
                onClickOutside={hendleHideResult}
            >
                <div className={cx('search')}>
                        <input 
                            placeholder='Search'
                            ref={inputRef}
                            value={searchValue}
                            onChange={e=>setSearchValue(e.target.value)} 
                            onFocus={()=>(setShowResult(true))}
                        >
                        </input>

                        {searchValue && (
                            <button className={cx('clear')} onClick={()=>{
                                setSearchValue('');
                                setSearchResult([]);
                                inputRef.current.focus();
                            }} >
                                <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                            </button>
                        )}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;