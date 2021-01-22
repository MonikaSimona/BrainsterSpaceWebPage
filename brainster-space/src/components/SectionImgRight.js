import React from 'react'

function SectionImgRight({ title, img , children}) {
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-5 align-self-center">
                    <h1 className="text-bold">{title}</h1>
                    <p className="paragrapgh" >Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit error repellendus accusamus atque eligendi fugiat tenetur nemo sint distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                    <br/>
                     Vel, rerum facilis sed voluptates exercitationem sint consequatur hic impedit obcaecati explicabo asperiores inventore voluptas reiciendis doloremque adipisci harum esse atque suscipit! Excepturi sint ullam aliquid voluptatem vel repellendus omnis debitis laborum quaerat voluptas pariatur, esse magni porro autem asperiores perferendis odio.</p>
                    {children}
                </div>
                <div className="col-md-7">
                
                    <img className="img-right" src={require(`../assets/img/${img}.jpg`).default} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionImgRight
