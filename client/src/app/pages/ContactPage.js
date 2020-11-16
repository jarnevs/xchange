import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  return (
    <div className="page page--contact">
      <div className="container">
        <div className="row">
          <div className="col-12 title-page">
            <h1>Contact</h1>
          </div>
          <div className="col-12 col-md-12">
            <h2 className="detail">
              Heeft u een vraag voor ons? Contacteer ons via dit formulier!
            </h2>
            <form>
              <input type="text" name="name" id="name" placeholder="Naam" required/>
              <input type="email" name="email" id="email" placeholder="E-mail" required/>
              <input type="text" name="subject" id="subject" placeholder="Onderwerp" required/>
              <textarea name="message" id="message" placeholder="Bericht" required></textarea>
              <input type="submit" className="cta cta--detail" value="Verzenden"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;