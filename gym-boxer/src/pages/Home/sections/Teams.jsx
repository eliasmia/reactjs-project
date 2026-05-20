const Teams = () => {
  return (
    <section className="team-area" id="trainer">
        <div className="container">
            <div className="row wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                <div className="col-md-12">
                    <div className="heading-section text-center">
                        <div className="subheading">Trainers</div>
                        <h2>Awesome <span className="text-primary">Trainers</span></h2>
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
                             industry's standard dummy text ever since the been when an unknown printer.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                        <div className="owl-carousel owl-theme" id="trainers-carousel">
                            <div className="item">
                                <div className="single-team text-center wow fadeInLeft" data-wow-duration="700ms" data-wow-delay="700ms">    
                                    <div className="single-team-thumb">
                                        <img className="img-fluid" src="assets/images/team/team-01.jpg" alt="" />
                                        <div className="single-team-overlay d-flex align-items-center">
                                            <ul className="m-0 p-0">
                                                <li>
                                                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-team-info">
                                        <h5>Jhon Statham</h5>
                                        <p className="team-seprator"></p>
                                        <p className="mb-0">Yoga Trainer</p>
                                    </div>
                                </div>
                                {/* End Single Team */}
                            </div>

                            <div className="item">
                                <div className="single-team text-center wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                                    <div className="single-team-thumb">
                                        <img className="img-fluid" src="assets/images/team/team-02.jpg" alt="" />
                                        <div className="single-team-overlay d-flex align-items-center">
                                            <ul className="m-0 p-0">
                                                <li>
                                                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-team-info">
                                        <h5>David William</h5>
                                        <p className="team-seprator"></p>
                                        <p className="mb-0">Aerobics Trainer</p>
                                    </div>
                                </div>
                                 {/* End Single Team */}
                            </div>

                            <div className="item">
                                <div className="single-team text-center wow fadeInRight" data-wow-duration="700ms" data-wow-delay="700ms">
                                    <div className="single-team-thumb">
                                        <img className="img-fluid" src="assets/images/team/team-03.jpg" alt="" />
                                        <div className="single-team-overlay d-flex align-items-center">
                                            <ul className="m-0 p-0">
                                                <li>
                                                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-team-info">
                                        <h5>Ana Mariea</h5>
                                        <p className="team-seprator"></p>
                                        <p className="mb-0">Boxing Trainer</p>
                                    </div>
                                </div>
                               {/* End Single Team */}
                            </div>

                            <div className="item">
                                <div className="single-team text-center wow fadeInRight" data-wow-duration="700ms" data-wow-delay="700ms">
                                    <div className="single-team-thumb">
                                        <img className="img-fluid" src="assets/images/team/team-04.jpg" alt="" />
                                        <div className="single-team-overlay d-flex align-items-center">
                                            <ul className="m-0 p-0">
                                                <li>
                                                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-team-info">
                                        <h5>David William</h5>
                                        <p className="team-seprator"></p>
                                        <p className="mb-0">Weight Loss Trainer</p>
                                    </div>
                                </div>
                                {/* End Single Team */}
                            </div>
                        </div>   

                </div>

            </div>
        </div>
    </section>
  );
};

export default Teams;