import Tippy from '@tippyjs/react/headless';
import './Menu.scss'
import MenuItem from './MenuItem';
import {Wrapper as  PopperWrapper } from '../../Popper'
import Header from './Header';
import { useState } from 'react';

const defaultFn = () => {}

function Menu({children, items = [], onChange = defaultFn}) {

    const [history, setHistory] =  useState([{data: items}]);
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children]);
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    return ( 
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className="header__actions-menu-items" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
        )}
        >

            {children}
        </Tippy>
    );
}

export default Menu;