import './AccountItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function AccountItem() {
    return ( 
        <div className='AccountItem__wrapper'>
            <img className='AccountItem__avatar' src='https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/297970054_786479642798720_8805994125822243835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NGLaJ6SL7dgAX-uhLzX&_nc_ht=scontent.fhan3-3.fna&oh=00_AT_GE6LehIiujbpniYF21kElnTBE8SD9egxAi2Wge2yGDg&oe=62F8F08C' alt='Hoa' />
            <div className='AccountItem__info'>
                <p className='AccountItem__name'>
                    <span>Chillin03</span>
                    <FontAwesomeIcon className='AccountItem__check' icon={faCheckCircle} />
                </p>
                <span className='AccountItem__username'>callmetulki</span>
            </div>
        </div>
     );
}

export default AccountItem;