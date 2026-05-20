const ContactSection = () => {
  return (
        <section className="contact pb-0 gray-bg" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="heading-section text-center">
                        <h2>Contact <span className="text-primary">with us</span></h2>
                        <p>Nullam convallis justo a vestibulum interdum ipsum mauris lobortis urna</p>
                    </div>
                </div>
            </div>

            <div className="row pb-5">
                <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="700ms"
                    data-wow-delay="700ms">
                    <div className="d-flex justify-content-center align-items-center info-block-inner">
                        <div className="icon-box">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text"><span>Address</span> Apple St, New Mexico, USA</div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="d-flex justify-content-center align-items-center info-block-inner">
                        <div className="icon-box">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="text"><span>Email</span>example@gmail.com</div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInRight" data-wow-duration="700ms"
                    data-wow-delay="700ms">
                    <div className="d-flex justify-content-center align-items-center info-block-inner">
                        <div className="icon-box">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="text"><span>Time</span> 10:00 am to 6:00 pm sun: closed</div>
                    </div>
                </div>
            </div>

            <form>
               <div className="row">
                 <div className="col-md-6 wow fadeInLeft" data-wow-duration="700ms" data-wow-delay="900ms">
                    <div className="contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="E-mail"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 wow fadeInRight" data-wow-duration="700ms" data-wow-delay="900ms">
                    <div className="contact-form">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Message" rows="11" cols="50"></textarea>
                        </div>
                    </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="900ms">
                    <div className="d-flex align-items-center">
                        <button type="submit" className="btn btn-default">Send Message</button>
                    </div> 
                </div>
              </div>
            </form>
       </div>

       {/* ================= Map Section ================== */}
        <div className="container-fluid">
            <div className="row wow fadeInUp" data-wow-duration="700ms" data-wow-delay="900ms">
                <div className="col-md-12 p-0">
                    <div className="contact-map mt-5">
                      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14526.493337838672!2d90.5541501!3d24.4638503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640415121688!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
};

export default ContactSection;