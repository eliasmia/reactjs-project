const AboutSection = () => {
  return (
    <section class="about-section mb-0" id="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-12 mb-lg-0 text-center text-lg-left">
                   <div class="about-image-block position-relative">
                        <div class="about-image-one">
                            <img src="assets/images/about.jpg" alt="..." class="rounded" />
                        </div>
                        <div class="about-image-two">
                            <img src="assets/images/about-02.jpg" alt="..." class="rounded" />
                        </div>
                
                        <div class="video-popup-button">
                            <a data-fancybox href="https://www.youtube.com/embed/xcJtL7QggTI&amp;autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0">
                                <div class="video-button-icon"><i class="fas fa-play"></i></div>
                                <div class="video-button-text"><span>Watch Video</span></div>
                            </a>
                        </div>
                   </div> 
                  {/* End About Image Block */}
                    
                </div>
                <div class="col-lg-6">
                    <div class="about-info">
                        <div class="subtitle-top alt-fonts">About Us</div>
                        <h2 class="subtitle alt-fonts">6 Ways to Trick Yourself Into Enjoying Your   <span class="text-primary">#Next Workout</span></h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer five centuries, but also the leap  remaining
                            essentially
                        </p>
                        <ul class="list-style1 mb-2-2">
                            <li><i class="fas fa-circle"></i> <span>Don’t compare yourself to others</span> </li>
                            <li><i class="fas fa-circle"></i> <span>Work out with friends</span> </li>
                            <li><i class="fas fa-circle"></i> <span>Play to your workout personality</span> </li>
                            <li><i class="fas fa-circle"></i> <span>Take advantage of your strengths</span> </li>
                        </ul>
                        <a href="#" class="btn view-more-btn"> <span>View More </span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;