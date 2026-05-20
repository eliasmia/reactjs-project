const Schedules = () => {
  return (
     <section className="schedules" id="schedules">
        <div className="container">

            <div className="row wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                <div className="col-md-12">
                    <div className="heading-section text-center">
                        <div className="subheading">Schedules</div>
                        <h2>classNamees <span className="text-primary">Schedules</span></h2>
                        <p className="mb-0">Nullam convallis justo a vestibulum interdum ipsum mauris lobortis urna</p>
                    </div>
                </div>
            </div>

            <div className="row">
              <div className="col-md-12 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="700ms">
                <div className="schedules-nav">
                   <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" id="all-tab" data-toggle="pill" href="#all" role="tab" aria-controls="all" aria-selected="true">All classNamees</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="bodypump-tab" data-toggle="pill" href="#bodypump" role="tab" aria-controls="bodypump" aria-selected="false">Bodypump</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="cycle-tab" data-toggle="pill" href="#cycle" role="tab" aria-controls="cycle" aria-selected="false">GGX Cycle</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="yoga-tab" data-toggle="pill" href="#yoga" role="tab" aria-controls="yoga" aria-selected="false">Yoga</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="school-tab" data-toggle="pill" href="#school" role="tab" aria-controls="school" aria-selected="false">Boxing School</a>
                        </li>
                   </ul>
                </div>
          

            <div className="tab-content wow fadeInUp" id="pills-tabContent" data-wow-duration="700ms" data-wow-delay="700ms">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <div className="schedules-content">
                        <div className="table-responsive">
                            <table className="table schedules-table">
                                <colgroup>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>9:00AM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                           <div className="single-schedule single-schedule-2 text-center position-relative">
                                               <div className="schedule-title">Boxing School</div>
                                               <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                               <div className="schedule-name">Frank Johnson</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Benjamin</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>10:00AM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                           <div className="single-schedule single-schedule-2 text-center position-relative">
                                               <div className="schedule-title">weight less</div>
                                               <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                               <div className="schedule-name">Kimberly Stone</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                            <div className="schedule-name">John Dewey</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Stretching</div>
                                                <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                                <div className="schedule-name">John Dewey</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>11:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">11:00 AM <br/> 12:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">11:00 AM <br/> 12:00 PM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                         <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Stretching</div>
                                                <div className="schedule-time">11:00 AM <br/> 12:00 PM</div>
                                                <div className="schedule-name">John Dewey</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>12:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">12:00 PM <br/> 1:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">12:00 PM <br/> 1:00 PM</div>
                                            <div className="schedule-name">John Dewey</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Stretching</div>
                                                <div className="schedule-time">12:00 PM <br/> 1:00 PM</div>
                                                <div className="schedule-name">John Dewey</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>1:00PM</b></td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">1:00 PM <br/> 2:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">1:00 PM <br/> 2:00 PM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                     <td>&nbsp;</td>
                                    </tr>
                                   
                               
                                    <tr>
                                        <td><b>2:00PM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                            <div className="schedule-name">John Dewey</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Stretching</div>
                                                <div className="schedule-time">11:00 AM <br/> 1:00 AM</div>
                                                <div className="schedule-name">John Dewey</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>3:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">3:00 AM <br/> 4:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">3:00 AM <br/> 4:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">3:00 AM <br/> 4:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>4:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">4:00 AM <br/> 5:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                        <td>
                                         <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">4:00 AM <br/> 5:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">4:00 AM <br/> 5:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>5:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">5:00 AM <br/> 6:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">5:00 AM <br/> 6:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">5:00 AM <br/> 6:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    
                                    <tr>
                                        <td><b>6:00PM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Stretching</div>
                                                <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                                <div className="schedule-name">John Dewey</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        {/* End Table Responsive */} 
                    </div>
                    {/* End Schedules Content */}
                </div>

                <div className="tab-pane fade" id="bodypump" role="tabpanel" aria-labelledby="bodypump-tab">
                    <div className="schedules-content">
                        <div className="table-responsive">
                            <table className="table schedules-table">
                                <colgroup>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>9:00AM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>10:00AM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>12:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>1:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>2:00PM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>3:00PM</b></td>
                                        <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>4:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>5:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    
                                    <tr>
                                        <td><b>6:00PM</b></td>
                                        <td>
                                           <div className="single-schedule text-center position-relative">
                                               <div className="schedule-title">Bodypump</div>
                                               <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                               <div className="schedule-name">Robert Cage</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                       </td>
                                       <td>&nbsp;</td>
                                       <td>&nbsp;</td>
                                       <td>&nbsp;</td>
                                       <td>&nbsp;</td>
                                       <td>
                                        <div className="single-schedule text-center position-relative">
                                            <div className="schedule-title">Bodypump</div>
                                            <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                       <td>&nbsp;</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        {/* End Table Responsive */} 
                    </div>
                    {/* End Schedules Content */} 
                </div>

                <div className="tab-pane fade" id="cycle" role="tabpanel" aria-labelledby="cycle-tab">
                    <div className="schedules-content">
                        <div className="table-responsive">
                            <table className="table schedules-table">
                                <colgroup>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>9:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>10:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>11:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">11:00 AM <br/> 12:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                         <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>12:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">12:00 PM <br/> 1:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>1:00PM</b></td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">1:00 PM <br/> 2:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>2:00PM</b></td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>3:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>4:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>5:00PM</b></td>
                                        <td>&nbsp;</td>                                       
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>6:00PM</b></td>
                                        <td>
                                           <div className="single-schedule single-schedule-3 text-center position-relative">
                                               <div className="schedule-title">Cycling</div>
                                               <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                               <div className="schedule-name">Donald Grey</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        {/* End Table Responsive */} 
                    </div>
                    {/* End Schedules Content */} 
                </div>

                <div className="tab-pane fade" id="yoga" role="tabpanel" aria-labelledby="yoga-tab">
                    <div className="schedules-content">
                        <div className="table-responsive">
                            <table className="table schedules-table">
                                <colgroup>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>9:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>10:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                     <td>&nbsp;</td>
                                     <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>11:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">11:00 AM <br/> 12:00 PM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                         <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>12:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">12:00 PM <br/> 1:00 PM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>1:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">1:00 PM <br/> 2:00 PM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                        <td>&nbsp;</td>
                                       <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>2:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>3:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">3:00 AM <br/> 4:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">3:00 AM <br/> 4:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>4:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">4:00 AM <br/> 5:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">4:00 AM <br/> 5:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>5:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-4 text-center position-relative">
                                                <div className="schedule-title">Yoga</div>
                                                <div className="schedule-time">5:00 AM <br/> 6:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                        <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">5:00 AM <br/> 6:00 AM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                     <td>&nbsp;</td>
                                    </tr>
                                    
                                    <tr>
                                       <td><b>6:00PM</b></td>
                                       <td>&nbsp;</td>
                                       <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                       <td>&nbsp;</td>
                                       <td>
                                        <div className="single-schedule single-schedule-4 text-center position-relative">
                                            <div className="schedule-title">Yoga</div>
                                            <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                            <div className="schedule-name">John Dew</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                     <td>
                                        <div className="single-schedule text-center position-relative">
                                            <div className="schedule-title">Bodypump</div>
                                            <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                            <div className="schedule-name">Robert Cage</div>
                                            <div className="schedule-button">
                                                <a className="btn" href="#">Book Now</a>
                                                <span className="button-arrow"></span>
                                             </div>
                                        </div>
                                        {/* End Single Schedule */}
                                     </td>
                                     <td>&nbsp;</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        {/* End Table Responsive */} 
                    </div>
                    {/* End Schedules Content */} 
                </div>

                <div className="tab-pane fade" id="school" role="tabpanel" aria-labelledby="school-tab">
                    <div className="schedules-content">
                        <div className="table-responsive">
                            <table className="table schedules-table">
                                <colgroup>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                    <col style="width:12.5%;"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                        <th>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>9:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                           <div className="single-schedule single-schedule-2 text-center position-relative">
                                               <div className="schedule-title">Boxing School</div>
                                               <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                               <div className="schedule-name">Frank Johnson</div>
                                               <div className="schedule-button">
                                                   <a className="btn" href="#">Book Now</a>
                                                   <span className="button-arrow"></span>
                                                </div>
                                           </div>
                                           {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Benjamin</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>10:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">10:00 AM <br/> 11:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>11:00AM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>12:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>1:00PM</b></td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                    <tr>
                                        <td><b>2:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">2:00 AM <br/> 3:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                       </tr>
                                    <tr>
                                        <td><b>3:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">3:00 AM <br/> 4:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>4:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                         <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">4:00 AM <br/> 5:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>5:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">5:00 AM <br/> 6:00 AM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><b>6:00PM</b></td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule single-schedule-3 text-center position-relative">
                                                <div className="schedule-title">Boxing School</div>
                                                <div className="schedule-time">6:00 PM <br/> 7:00 PM</div>
                                                <div className="schedule-name">Frank Johnson</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                        </td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <div className="single-schedule text-center position-relative">
                                                <div className="schedule-title">Bodypump</div>
                                                <div className="schedule-time">9:00 AM <br/> 10:00 AM</div>
                                                <div className="schedule-name">Robert Cage</div>
                                                <div className="schedule-button">
                                                    <a className="btn" href="#">Book Now</a>
                                                    <span className="button-arrow"></span>
                                                 </div>
                                            </div>
                                            {/* End Single Schedule */}
                                         </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        {/* End Table Responsive */} 
                    </div>
                    {/* End Schedules Content */} 
                </div>

            </div> 
          </div>  
            </div>

        </div>     

    </section>
  );
};

export default Schedules;