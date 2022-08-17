import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../../Components/Popper';
import AccountItem from '../../../AccountItem';
import { useDebounce } from '../../../../hooks';

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const deBounced = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if(!deBounced.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(deBounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
    }, [deBounced])

    const handleHideResult = () => {
        setShowResult(false)
    }
    
    const handleChange = e => {
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }
    }

    return ( 
        // warning tippy
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className="header__search-result" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className='header__search-result-title' >Accounts</h4>
                            {searchResult.map(result => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className='header__search'>
                    <input 
                        ref={inputRef}
                        placeholder='Search acounts and videos' 
                        spellCheck={false} 
                        value={searchValue} 
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className='header__search-clear' onClick={() => {
                            setSearchValue('')
                            inputRef.current.focus()
                            setSearchResult([])
                        }}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    
                    {loading &&  <FontAwesomeIcon className='header__search-loading' icon={faSpinner} />}
                
                    <button className='header__search-btn' onMouseDown={e => e.preventDefault()}> 
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
     );
}

export default Search;