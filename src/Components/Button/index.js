import './Button.scss'
import { Link } from 'react-router-dom';

function Button({
    to, 
    href, 
    onClick, 
    primary = false, 
    outline = false, 
    text = false, 
    rounded = false,
    small = false, 
    large = false, 
    leftIcon,
    rightIcon,
    children,
    className, 
    ...passProps 
}) {
    let Component = 'button';
    let Primary = ''
    let Rounded = ''
    let Small = ''
    let ClassName = ''
    
    if(className) ClassName = `${className}`

    if(rounded) Rounded = 'rounded'

    if(outline) Primary = 'outline' 
        else if (primary) Primary = 'primary'
        else if (text) Primary = 'text'
        
    if(large) Small = 'large' 
        else if (small) Small = 'small'

    const props = {
        onClick,
        ...passProps
    }

    if(to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    const classes = `button__wrapper ${Primary} ${Small} ${Rounded} ${ClassName}`;
    return ( 
        <Component className={classes} {...props}>
            {leftIcon && <span className='button__icon'>{leftIcon}</span>}
            <span className='button__title'>{children}</span>
            {rightIcon && <span className='button__icon'>{rightIcon}</span>}
        </Component>
    );
}

export default Button;