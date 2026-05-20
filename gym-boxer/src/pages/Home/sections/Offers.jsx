const Offers = () => {
  return (
    <section className="offers">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="heading-section text-center mb-5 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                        <h2>welcome!</h2>
                        <hr className="divider bg-danger"/>
                        <p>Welcome to the website Intense Gym! Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="gd-offer">
                        <div className="offer-content">
                            <span className="offer-icon"><i className="fas fa-users"></i></span>
                            <h4>Free Training</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue
                                dapibus
                                convallis. Proin eu ex tellus. </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="gd-offer">
                        <div className="offer-content">
                            <span className="offer-icon"><i className="fab fa-odnoklassniki"></i></span>
                            <h4>Free className</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue
                                dapibus
                                convallis. Proin eu ex tellus. </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-duration="700ms" data-wow-delay="700ms">
                    <div className="gd-offer last-child">
                        <div className="offer-content">
                            <span className="offer-icon"><i className="fas fa-snowboarding"></i></span>
                            <h4>Personal Training</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue
                                dapibus
                                convallis. Proin eu ex tellus. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Offers;