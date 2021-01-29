import React from 'react'

function Banner({ title }) {
    return (
        <>
        <div className="wrapper">
            <div className="overlay">
            </div>
            <div className="Banner m-sm-0 m-0">
                <div>
                    <h1>{title}</h1>
                </div>

            </div>
            </div>
        </>

    )
}

export default Banner
