import React from 'react'

function SectionImgRight({ title, img , children, content}) {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 align-self-center">
                    <h1 className="text-bold">{title}</h1>
                    <p className="paragrapgh" >{content}</p>
                    {children}
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                
                    <img className="img-right" src={require(`../../assets/img/${img}.jpg`).default} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionImgRight

