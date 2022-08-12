import './Menu.scss'
import Button from '../../Button';

function MenuItem({ data, onClick }) {
            return  <Button  
                leftIcon={data.icon} 
                to={data.to} 
                className='header__actions-menu-item'
                onClick={onClick}
            >
                {data.title}
            </Button>;
}

export default MenuItem;
// className='header__action-menu-item'