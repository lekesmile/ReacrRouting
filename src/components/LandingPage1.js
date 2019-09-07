import React from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

const LandingPage1 = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <img src={image1} alt="image1" />
                    <h3 className="landimages">So Easy to Use</h3>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        nostrum perspiciatis atque tempora eum adipisci!</p>

                </div>
                <div className="col-md-3">
                    <img src={image2} alt="image2" />
                    <h3 className="landimages">Our Servive Has it All</h3>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        nostrum perspiciatis atque tempora eum adipisci!</p>

                </div>
                <div className="col-md-3">
                    <img src={image3} alt="image3" />
                    <h3 className="landimages">20% Off Saving</h3>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        nostrum perspiciatis atque tempora eum adipisci!</p>

                </div>
                <div className="col-md-3">
                    <img src={image4} alt="image4" />
                    <h3 className="landimages">Free tutorials</h3>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        nostrum perspiciatis atque tempora eum adipisci!</p>

                </div>
            </div>
        </div>
    )
}

export default LandingPage1
