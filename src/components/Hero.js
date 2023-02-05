import React from 'react'

const Hero = () => {
    return (
        
        <main >
            <div className="container">
            <div className="row">
                <div className=" col-lg-6 col-sm-12 ">
                    <h1>little lemon</h1>
                    <h3>chikago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem iste, eaque enim eum nesciunt architecto nobis a id porro assumenda atque eius minima molestias hic cumque placeat labore! Esse?</p>
                    <button type="button" className="btn btn-dark">reserve a table</button>
                </div>
                <div className=" col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                  <img src={require("../images/photo1.jpg")} alt="" />
                </div>
            </div>
        </div>
        </main>
    )
}

export default Hero