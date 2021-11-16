import React from 'react';
import { Wrapper } from '../../components';
import img from '../../assets/images';

import './Clients.scss';

const Clients = () => (
  <div className="clients">
    <Wrapper>
      <div className="clients__container">
        <h2 className="clients__title">Our Clients</h2>
        <h3 className="clients__subtitle">
          We have been working with some Fortune 500 clients
        </h3>
        <div className="clients__content">
          <div className="clients__column clients__column--first">
            <div className="clients__column--elem clients__first--airbnb">
              <img
                src={img.airbnb}
                alt="Airbnb"
                className="clients__img--aitbnb"
              />
            </div>
          </div>
          <div className="clients__column clients__column--second">
            <div className="clients__column--elem clients__second--google">
              <img
                src={img.google}
                alt="Google"
                className="clients__img--google"
              />
            </div>
            <div className="clients__column--elem clients__second--bms">
              <img
                src={img.bookMyShow}
                alt="Book my show"
                className="clients__img--bms"
              />
            </div>
          </div>
          <div className="clients__column clients__column--third">
            <div className="clients__column--elem clients__third--microsoft">
              <img
                src={img.microsoft}
                alt="Microsoft"
                className="clients__img--microsoft clients__img"
              />
            </div>
            <div className="clients__column--elem clients__third--fedex">
              <img
                src={img.fedEx}
                alt="FedEx"
                className="clients__img--fedex clients__img"
              />
            </div>
            <div className="clients__column--elem clients__third--walmart">
              <img
                src={img.walmart}
                alt="Walmart"
                className="clients__img--walmart clients__img"
              />
            </div>
          </div>
          <div className="clients__column clients__column--fourth">
            <div className="clients__column--elem clients__fourth--oyo">
              <img src={img.oyo} alt="OYO" className="clients__img--oyo" />
            </div>
            <div className="clients__column--elem clients__fourth--ola">
              <img src={img.ola} alt="OLA" className="clients__img--ola" />
            </div>
          </div>
          <div className="clients__column clients__column--fiveth">
            <div className="clients__column--elem contacts__fiveth--amazon">
              <img
                src={img.amazon}
                alt="Amazon"
                className="contacts__img--amazon"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Clients;
