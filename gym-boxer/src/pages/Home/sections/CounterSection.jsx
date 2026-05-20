const CounterSection = () => {
  return (
    <section className="counter-section bg-img-fix" style={{ backgroundImage: `url(assets/images/background/bg1.jpg)` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                     <div className="counter-block text-center">
                        <div className="counter-icon mb-4">
                            <i className="fas fa-users text-primary"></i>
                        </div>
                        <p className="count-num alt-fonts mb-3">1024</p>
                        <h4 className="mb-0 font-weight-600">Total Users</h4>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="counter-block text-center">
                        <div className="counter-icon mb-4">
                            <i className="fas fa-user-tie text-primary"></i>
                        </div>
                        <p className="count-num alt-fonts mb-3">45</p>
                        <h4 className="mb-0 font-weight-600">Personal Trainer</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="counter-block text-center">
                        <div className="counter-icon mb-4">
                            <i className="far fa-heart text-primary"></i>
                        </div>
                        <p className="count-num alt-fonts mb-3">124</p>
                        <h4 className="mb-0 font-weight-600">Communities</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                     <div className="counter-block text-center">
                        <div className="counter-icon mb-4">
                            <i className="fas fa-clipboard-list text-primary"></i>
                        </div>
                        <p className="count-num alt-fonts mb-3">180</p>
                        <h4 className="mb-0 font-weight-600">Finished Projects</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CounterSection;