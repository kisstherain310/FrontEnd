import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Header.scss'
import images from '../../../../assets/images';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../../Components/Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'jan',
                    title: 'Japanese'
                },
                {
                    type: 'language',
                    code: 'tha',
                    title: 'Thailand'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]

function Header() {
    const [searchSerult, setSearchResult] = useState([]);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;
            default:
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])
 
    return <div className='header__wrapper'>
        <div className='header__inner'>
            <div className='header__logo'>
               <img src={images.logo} alt="tik tok"/>
            </div>
            <Tippy
                interactive
                visible={searchSerult.length > 0}
                render={attrs => (
                    <div className="header__search-result" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className='header__search-result-title' >Accounts</h4> 
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className='header__search'>
                    <input placeholder='Search acounts and videos' spellCheck={false}/>
                    <button className='header__search-clear'>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                        <FontAwesomeIcon className='header__search-loading' icon={faSpinner} />
                
                        <button className='header__search-btn'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
            </Tippy>
            <div className='header__actions'>
                    <Button text>Upload</Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>

                    <Menu
                        items={MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        <button className='header__actions-more-btn'>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
            </div>
        </div>
    </div>;
}

export default Header;