import React from 'react'

const Highlights = () => {
  return (
    <>
      <div className="container">

        <div className=" d-flex justify-content-between m-5">
          <h2>specials</h2>
          <button type="button" className="btn btn-dark">online menu</button>
        </div>
        <div className="specials">
          <div className="row m-4">
            <div className="col-lg-4 col-sm-12">
              <div className="card" >
                <img src={require('../images/photo2.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='d-flex justify-content-between '>
                  <h5 className="card-title">greek salad</h5>
                  <h5>15$</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button>order a delivery</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="card" >
                <img src={require('../images/photo2.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='d-flex justify-content-between '>
                  <h5 className="card-title">greek salad</h5>
                  <h5>15$</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button>order a delivery</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="card" >
                <img src={require('../images/photo2.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='d-flex justify-content-between '>
                  <h5 className="card-title">greek salad</h5>
                  <h5>15$</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button>order a delivery</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Highlights