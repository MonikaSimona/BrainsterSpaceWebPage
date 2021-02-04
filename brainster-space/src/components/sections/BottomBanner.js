import React, { Children } from 'react'

function BottomBanner({title,content,children}) {
    return (
        <div className="BottomBanner text-center ">
            <h1 className="text-bold">{title}</h1>
            <p >{content}</p>
            {children}
        </div>
    )
}

export default BottomBanner
