import React from 'react'
import './header.scss'


const PageNameLabel = (props:any) => {


return(
    <div className='pageNameLabel'>
        <p>{props.label}</p>
    </div>
)

}


export default PageNameLabel;