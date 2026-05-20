const NewsletterSection = () => {
  return (
        <section className="newsletter-section bg-primary">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-lg-7 text-md-left">
                    <div className="newsletter-text">
                      <h4>Subscribe to our Newsletter!</h4>
                      <p className="mb-0">Subscribe to our Newsletter to be updated. We promise not to spam.</p>
                    </div>
                    {/* Newsletter Text */}
                </div>
    
                <div className="col-md-6 col-lg-5">
                    <div className="newsletter-form">
                        <form>
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" id="subscribe" placeholder="Subscribe with us"/>
                            </div>
                            <button type="submit" className="btn"><i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                    {/* End Newsletter Form */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default NewsletterSection;