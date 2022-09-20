import React from 'react';
import Slider from "react-slick";
import client1 from './clients/client1.svg';
import client2 from './clients/client2.svg';
import client3 from './clients/client3.svg';
import client4 from './clients/client4.svg';
import client5 from './clients/client5.svg';
import client6 from './clients/client6.svg';
import client7 from './clients/client7.svg';
import client8 from './clients/client8.svg';
import client9 from './clients/client9.svg';
import client10 from './clients/client10.svg';
import client11 from './clients/client11.svg';
import client12 from './clients/client12.svg';
import client13 from './clients/client13.svg';
import client14 from './clients/client14.svg';

const BrandsBar = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    return (
        <>
        <Slider {...settings}>
          <div>
            <h3><img src={client1} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client2} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client3} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client4} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client5} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client9} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client10} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client7} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client8} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client11} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client12} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client13} width="100%" alt=""/></h3>
          </div>
          <div>
          <h3><img src={client14} width="100%" alt=""/></h3>
          </div>
        </Slider>
      </>
    )
}

export default BrandsBar;
