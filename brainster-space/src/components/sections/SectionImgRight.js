import React from 'react'

function SectionImgRight({ title, img , children}) {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 align-self-center">
                    <h1 className="text-bold">{title}</h1>
                    <p className="paragrapgh" >Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit error repellendus accusamus atque eligendi fugiat tenetur nemo sint distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                    <br/>
                     Vel, rerum facilis sed voluptates exercitationem sint consequatur hic impedit obcaecati explicabo asperiores inventore voluptas reiciendis doloremque adipisci harum esse atque suscipit! Excepturi sint ullam aliquid voluptatem vel repellendus omnis debitis laborum quaerat voluptas pariatur, esse magni porro autem asperiores perferendis odio.</p>
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

