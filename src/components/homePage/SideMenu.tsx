import React, {useState} from 'react'
import './sideMenu.scss'

import arrowIcon from '../../imgs/homepage/arrowIcon.png'

const SideMenu = () => {
    const [selectedNode, setSelectedNode] = useState('SUV')



    return(
        <div className='side-menu' onClick={(event:any)=>{
            const tmpNode = event.target.innerText.split('\n')
            if(tmpNode.length === 1){
                setSelectedNode(tmpNode[0])
            }else{
                console.log(event.target.innerText.split('\n'))
            }    
        }}>
            <div className={`side-menu-item ${selectedNode === 'SUV' ? 'sideMenu-selected' : ''}`}>
                suv
            </div>
            <div className={`side-menu-item ${selectedNode === 'VAN' ? 'sideMenu-selected' : ''}`}>
                van
            </div>
            <div className={`side-menu-item ${selectedNode === 'SEDAN' ? 'sideMenu-selected' : ''}`}>
                sedan
            </div>
            <div className={`side-menu-item ${selectedNode === 'HATCH' ? 'sideMenu-selected' : ''}`}>
                hatch
            </div>
            <div className='side-menu-arrows'>
                <div className='side-menu-arrows-item'><img src={arrowIcon}/></div>
                <div className='side-menu-arrows-item'><img src={arrowIcon}></img></div>
            </div>
        </div>
    )

}


export default SideMenu;
