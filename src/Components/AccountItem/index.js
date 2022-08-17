import './AccountItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


function AccountItem({data}) {
    return ( 
        <Link to={`/@${data.nickname}`} className='AccountItem__wrapper'>
            <img className='AccountItem__avatar' src={data.avatar} alt={data.full_name} />
            <div className='AccountItem__info'>
                <p className='AccountItem__name'>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className='AccountItem__check' icon={faCheckCircle} />}
                </p>
                <span className='AccountItem__username'>{data.nickname}</span>
            </div>
        </Link>
     );
}

AccountItem.propTypes = {
    data: PropTypes.object,
}

export default AccountItem;