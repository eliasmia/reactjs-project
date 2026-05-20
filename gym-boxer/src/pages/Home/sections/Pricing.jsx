const pricing = () => {
  return (
        <section className="plans-pricing" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="heading-section text-center">
                        <div className="subheading">Trainers</div>
                        <h2>Choose  <span className="text-primary">Affordable</span> Plans</h2>
                        <p className="mb-0">N sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-lg-4 wow fadeInLeft" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="price-table">
                        <div className="text-center">
                            <div className="price-title">Basic Plan</div>
                            <div className="price"><sup>$</sup> <span className="number">49</span></div>
                            <hr className="divider bg-dark"/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="pricing-text mb-4">
                                <li><i className="fas fa-arrow-right"></i> Personal Trainer</li>
                                <li><i className="fas fa-arrow-right"></i> Convienient Time</li>
                                <li><i className="fas fa-arrow-right"></i> Special className</li>
                                <li><i className="fas fa-arrow-right"></i> fitness plan</li>
                                <li><i className="fas fa-arrow-right"></i> Group Traning</li>
                                <li><i className="fas fa-arrow-right"></i> Free Fitness Traning</li>
                            </ul>
                            <a className="btn btn-block btn-default m-auto mb-1" href="#">Get Started <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="price-table active">
                        <span className="popular">Popular</span>
                        <div className="text-center">
                            <div className="price-title">Premium Plan</div>
                            <div className="price"><sup>$</sup> <span className="number">109</span></div>
                            <hr className="divider bg-danger"/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="pricing-text mb-4">
                                <li><i className="fas fa-arrow-right"></i> Personal Trainer</li>
                                <li><i className="fas fa-arrow-right"></i> Convienient Time</li>
                                <li><i className="fas fa-arrow-right"></i> Special className</li>
                                <li><i className="fas fa-arrow-right"></i> fitness plan</li>
                                <li><i className="fas fa-arrow-right"></i> Group Traning</li>
                                <li><i className="fas fa-arrow-right"></i> Free Fitness Traning</li>
                            </ul>
                            <a className="btn btn-block btn-default active m-auto mb-1" href="#">Get Started  <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 wow fadeInRight" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="price-table">
                        <div className="text-center">
                            <div className="price-title">Ultimate Plan</div>
                            <div className="price"><sup>$</sup> <span className="number">149</span></div>
                            <hr className="divider bg-dark"/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="pricing-text mb-4">
                                <li><i className="fas fa-arrow-right"></i> Personal Trainer</li>
                                <li><i className="fas fa-arrow-right"></i> Convienient Time</li>
                                <li><i className="fas fa-arrow-right"></i> Special className</li>
                                <li><i className="fas fa-arrow-right"></i> fitness plan</li>
                                <li><i className="fas fa-arrow-right"></i> Group Traning</li>
                                <li><i className="fas fa-arrow-right"></i> Free Fitness Traning</li>
                            </ul>
                            <a className="btn btn-block btn-default m-auto mb-1" href="#">Get Started  <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  );
};

export default pricing;