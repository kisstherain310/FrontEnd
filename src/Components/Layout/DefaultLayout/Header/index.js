import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignIn, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.scss'
import images from '../../../../assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { MailBox, UploadIcon } from '../../../Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';

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
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;
            default:
        }
    }
    const currentUser = true

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@chillin'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/log out',
            separate: true
        },
    ]
 
    return <div className='header__wrapper'>
        <div className='header__inner'>
            <Link to='/' className='header__logo'>
               <img src={images.logo} alt="tik tok"/>
            </Link>
            
            {/**Search */}
            <Search />

            <div className='header__actions'>
            {currentUser ? (
                <>
                    <Tippy offset={[0, 8]} delay={[0, 100]} content="Message" placement='bottom'>
                        <button className='header__actions-btn'>
                            <UploadIcon />
                        </button>
                    </Tippy>
                    <Tippy offset={[4, 4]} delay={[0, 100]} content="Mail Box" placement='bottom'>
                        <button className='header__actions-btn'>
                            <MailBox />
                            <span className='header__actions-badge'>15</span>
                        </button>
                    </Tippy>

                </>
            ) : (
                <>
                    <Button text>Upload</Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>
                </>
            )}
                <Menu

                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <img className='header__current-user-avt' src='https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/297970054_786479642798720_8805994125822243835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=20I0d-gmlpQAX-ppp5S&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8yYjwAhL10cONOjWELviAI1-77bIqACw-n_fOY9O8RcQ&oe=62FCE50C' alt='Chillin'/>
                        //<img src='' alt='chillin'/>
                    ) : (
                        <button className='header__actions-more-btn'>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
    </div>;
}

export default Header;