import React from 'react'

function SectionImgLeft({ title, img, children,id }) {
    return (
        <div className="container-fluid my-5" id={id}>
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">

                    <img className="img-right" src={require(`../../assets/img/${img}.jpg`).default} alt="" />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 align-self-center text-linetrough">
                <span className="pill text-bold mt-md-2 mt-sm-2 mt-2">SOLD OUT</span>
                    <h1 className="text-bold">{title}</h1>
                    <p className="paragrapgh" >Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit error repellendus accusamus atque eligendi fugiat tenetur nemo sint distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                        <br />
                </p>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default SectionImgLeft
