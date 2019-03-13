
import React from 'react';
import { Link } from 'react-router-dom';

 class SideBar extends React.Component {
    render(){
        return (<div>
    <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
        <div class="nano">
            <div class="nano-content">
                <div class="logo"><a href="index.html">
                         {/* <img src="assets/images/logo.png" alt="" /> */}
                         <span>گشت وبازرسی</span></a></div>
                <ul>
                    <li class=""><a class="sidebar-sub-toggle">ثبت تخلف</a></li>
                    <li class="active open"><a class="sidebar-sub-toggle"> چاه مجاز
                            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
                        <ul>
                            <li><a href="index.html">آب فروشی</a></li>
                            <li><a href="index1.html">اضافه برداشت</a></li>
                            <li><a href="index1.html">عدم نصب کنتور</a></li>
                            <li><a href="index.html">منصوبات غیر مجاز</a></li>
                            <li><a href="index1.html">انتقال آب</a></li>
                            <li><a href="index1.html">کف شکنی</a></li>
                            <li><a href="index.html">تغییر کاربری</a></li>
                            <li><a href="index1.html">عدم تمدید پروانه</a></li>
                            <li><a href="index1.html">آب شرین کن</a></li>
                        </ul>
                    </li>

                    <li class=""><a class="sidebar-sub-toggle">چاه غیر مجاز
                            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
                        <ul>
                            <li><a href="index.html">پلمپ</a></li>
                            <li><a href="index1.html">پر و مسلوب المنفعه بودن</a></li>
                       

                        </ul>
                    </li>
                    <li class=""><a class="sidebar-sub-toggle"> گزارشات
                            <span class="sidebar-collapse-icon ti-angle-down"></span></a>
                        <ul>
                            <li><a href="index.html">گزارش 1</a></li>
                            <li><a href="index.html">گزارش 1</a></li>
                            <li><a href="index.html">گزارش 1</a></li>
                            <li><a href="index.html">گزارش 1</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    

    <div class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="float-left">
                         {/* <div class="hamburger sidebar-toggle">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>  */}
                    </div>
                    <div class="float-right">
                        <ul>
                            <li class="header-icon dib"><i class="ti-bell"></i>
                                <div class="drop-down">
                                    <div class="dropdown-content-heading">
                                        <span class="text-left">Recent Notifications</span>
                                    </div>
                                    <div class="dropdown-content-body">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Mr. John</div>
                                                        <div class="notification-text">5 members joined today </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Mariam</div>
                                                        <div class="notification-text">likes a photo of you</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Tasnim</div>
                                                        <div class="notification-text">Hi Teddy, Just wanted to let you
                                                            ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Mr. John</div>
                                                        <div class="notification-text">Hi Teddy, Just wanted to let you
                                                            ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="text-center">
                                                <a href="#" class="more-link">See All</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="header-icon dib"><i class="ti-email"></i>
                                <div class="drop-down">
                                    <div class="dropdown-content-heading">
                                        <span class="text-left">2 New Messages</span>
                                        <a href="email.html"><i class="ti-pencil-alt pull-right"></i></a>
                                    </div>
                                    <div class="dropdown-content-body">
                                        <ul>
                                            <li class="notification-unread">
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/1.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Michael Qin</div>
                                                        <div class="notification-text">Hi Teddy, Just wanted to let you
                                                            ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="notification-unread">
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/2.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Mr. John</div>
                                                        <div class="notification-text">Hi Teddy, Just wanted to let you
                                                            ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Michael Qin</div>
                                                        <div class="notification-text">Hi Teddy, Just wanted to let you
                                                            ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="pull-left m-r-10 avatar-img" src="assets/images/avatar/2.jpg"
                                                        alt="" />
                                                    <div class="notification-content">
                                                        <small class="notification-timestamp pull-right">02:34 PM</small>
                                                        <div class="notification-heading">Mr. John</div>
                                                        <div class="notification-text">Hi Teddy, Just wanted to let you
                                                            ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="text-center">
                                                <a href="#" class="more-link">See All</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="header-icon dib"><span class="user-avatar">John <i class="ti-angle-down f-s-10"></i></span>
                                <div class="drop-down dropdown-profile">
                                    <div class="dropdown-content-heading">
                                        <span class="text-left">Upgrade Now</span>
                                        <p class="trial-day">30 Days Trail</p>
                                    </div>
                                    <div class="dropdown-content-body">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> <span>Profile</span></a></li>

                                            <li><a href="#"><i class="ti-email"></i> <span>Inbox</span></a></li>
                                            <li><a href="#"><i class="ti-settings"></i> <span>Setting</span></a></li>

                                            <li><a href="#"><i class="ti-lock"></i> <span>Lock Screen</span></a></li>
                                            <li><a href="#"><i class="ti-power-off"></i> <span>Logout</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="content-wrap">
        <div class="main">
            <div class="container-fluid">
                <section id="main-content" dir="rtl">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="card">
                                <div class="stat-widget-two">
                                    <div class="stat-content">
                                        <div class="stat-text">  تخلفات پیشبینی شده</div>
                                        <div class="stat-digit"> 32,740</div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success w-100" role="progressbar"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card">
                                <div class="stat-widget-two">
                                    <div class="stat-content">
                                        <div class="stat-text"> تخلفات شناسایی شده</div>
                                        <div class="stat-digit">17,800</div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-primary w-50" role="progressbar"
                                            aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-lg-3">
                            <div class="card">
                                <div class="stat-widget-two">
                                    <div class="stat-content">
                                        <div class="stat-text">تخلفات رفع شده</div>
                                        <div class="stat-digit"> 8,400</div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning w-60" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="col-lg-3">
                            <div class="card">
                                <div class="stat-widget-two">
                                    <div class="stat-content">
                                        <div class="stat-text">تخلفات پلمپ شده</div>
                                        <div class="stat-digit"> 3,400</div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger w-40" role="progressbar"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                      
                    </div>
                  


                    <div class="row">
                       
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Sales Overview</h4>
                                    <div id="morris-bar-chart"></div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="m-t-10">
                                    <p>Customer Feedback</p>
                                    <h5>385749</h5>
                                </div>
                                <div class="widget-card-circle pr m-t-20 m-b-20" id="info-circle-card">
                                    <i class="ti-control-shuffle pa"></i>
                                </div>
                                <ul class="widget-line-list m-b-15">
                                    <li class="border-right">92% <br/><span class="color-success"><i class="ti-hand-point-up"></i> Positive</span></li>
                                    <li>8% <br/><span class="color-danger"><i class="ti-hand-point-down"></i>Negative</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-title">
                                    <h4>Project</h4>
                                </div>
                                <div class="card-body">
                                    <div class="current-progress">
                                        <div class="progress-content">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="progress-text">Website</div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="current-progressbar">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-primary w-40" role="progressbar"
                                                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                                40%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-content">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="progress-text">Android</div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="current-progressbar">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-primary w-60" role="progressbar"
                                                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                                60%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-content">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="progress-text">Ios</div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="current-progressbar">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-primary w-70" role="progressbar"
                                                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                                70%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-content">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="progress-text">Mobile</div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="current-progressbar">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-primary w-90" role="progressbar"
                                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                                90%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div class="col-lg-4">
                            <div class="card bg-primary">
                                <div class="weather-widget">
                                    <div id="weather-one" class="weather-one p-22"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="testimonial-widget-one p-17">
                                    <div class="testimonial-widget-one owl-carousel owl-theme">
                                        <div class="item">
                                            <div class="testimonial-content">
                                                <div class="testimonial-text">
                                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation. consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                                                </div>
                                                <img class="testimonial-author-img" src="assets/images/avatar/1.jpg"
                                                    alt="" />
                                                <div class="testimonial-author">TYRION LANNISTER</div>
                                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimonial-content">
                                                <div class="testimonial-text">
                                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation. consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                                                </div>
                                                <img class="testimonial-author-img" src="assets/images/avatar/1.jpg"
                                                    alt="" />
                                                <div class="testimonial-author">TYRION LANNISTER</div>
                                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimonial-content">
                                                <div class="testimonial-text">
                                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation. consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                                                </div>
                                                <img class="testimonial-author-img" src="assets/images/avatar/1.jpg"
                                                    alt="" />
                                                <div class="testimonial-author">TYRION LANNISTER</div>
                                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimonial-content">
                                                <div class="testimonial-text">
                                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation. consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                                                </div>
                                                <img class="testimonial-author-img" src="assets/images/avatar/1.jpg"
                                                    alt="" />
                                                <div class="testimonial-author">TYRION LANNISTER</div>
                                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimonial-content">
                                                <div class="testimonial-text">
                                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation. consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                                                </div>
                                                <img class="testimonial-author-img" src="assets/images/avatar/1.jpg"
                                                    alt="" />
                                                <div class="testimonial-author">TYRION LANNISTER</div>
                                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimonial-content">
                                                <div class="testimonial-text">
                                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation. consectetur adipisicing elit.
                                                    <i class="fa fa-quote-right"></i>
                                                </div>
                                                <img class="testimonial-author-img" src="assets/images/avatar/1.jpg"
                                                    alt="" />
                                                <div class="testimonial-author">TYRION LANNISTER</div>
                                                <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card nestable-cart">
                                <div class="card-title">
                                    <h4>USA</h4>
                                    <div class="card-title-right-icon">
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                                <div class="Vector-map-js">
                                    <div id="vmap13" class="vmap"></div>
                                </div>
                            </div>
                           
                        </div>
                        
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-title">
                                    <h4>New Orders </h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Product</th>
                                                    <th>quantity</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="round-img">
                                                            <a href=""><img class="w-35" src="assets/images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td>Lew Shawon</td>
                                                    <td><span>Dell-985</span></td>
                                                    <td><span>456 pcs</span></td>
                                                    <td><span class="badge badge-success">Done</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="round-img">
                                                            <a href=""><img class="w-35" src="assets/images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td>Lew Shawon</td>
                                                    <td><span>Asus-565</span></td>
                                                    <td><span>456 pcs</span></td>
                                                    <td><span class="badge badge-warning">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="round-img">
                                                            <a href=""><img class="w-35" src="assets/images/avatar/1.jpg"  alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td>lew Shawon</td>
                                                    <td><span>Dell-985</span></td>
                                                    <td><span>456 pcs</span></td>
                                                    <td><span class="badge badge-success">Done</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="round-img">
                                                            <a href=""><img class="w-35" src="assets/images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td>Lew Shawon</td>
                                                    <td><span>Asus-565</span></td>
                                                    <td><span>456 pcs</span></td>
                                                    <td><span class="badge badge-warning">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="round-img">
                                                            <a href=""><img class="w-35" src="assets/images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td>lew Shawon</td>
                                                    <td><span>Dell-985</span></td>
                                                    <td><span>456 pcs</span></td>
                                                    <td><span class="badge badge-success">Done</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="round-img">
                                                            <a href=""><img class="w-35" src="assets/images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td>Lew Shawon</td>
                                                    <td><span>Asus-565</span></td>
                                                    <td><span>456 pcs</span></td>
                                                    <td><span class="badge badge-warning">Pending</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-title">
                                    <h4>Task</h4>
                                </div>
                                <div class="todo-list">
                                    <div class="tdl-holder">
                                        <div class="tdl-content">
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox"/><i></i><span>Post three to six times on Twitter.</span>
                                                        <a href='#' class="ti-close"></a>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" checked/><i></i><span>Post one to two
                                                            times on Facebook.</span>
                                                        <a href='#' class="ti-close"></a>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" checked/><i></i><span>Follow back those
                                                            who follow you</span>
                                                        <a href='#' class="ti-close"></a>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" checked/><i></i><span>Connect with one
                                                            new person</span>
                                                        <a href='#' class="ti-close"></a>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="text" class="tdl-new form-control" placeholder="Write new item and hit 'Enter'..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card alert">
                                <div class="card-title">
                                    <h4>Web Server</h4>
                                </div>
                                <div class="cpu-load-chart">
                                    <div id="cpu-load" class="cpu-load"></div>
                                </div>
                            </div>
                          
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-title">
                                    <h4>Ticket </h4>

                                </div>
                                <div class="recent-comment">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="assets/images/avatar/1.jpg" alt="..."/></a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">john doe</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla. </p>
                                            <div class="comment-action">
                                                <div class="badge badge-success">Done</div>
                                                <span class="m-l-10">
                                                    <a href="#"><i class="ti-check color-success"></i></a>
                                                    <a href="#"><i class="ti-close color-danger"></i></a>
                                                    <a href="#"><i class="fa fa-reply color-primary"></i></a>
                                                </span>
                                            </div>
                                            <p class="comment-date">October 21, 2017</p>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="assets/images/avatar/2.jpg" alt="..."/></a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Mr. John</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla. </p>
                                            <div class="comment-action">
                                                <div class="badge badge-warning">Pending</div>
                                                <span class="m-l-10">
                                                    <a href="#"><i class="ti-check color-success"></i></a>
                                                    <a href="#"><i class="ti-close color-danger"></i></a>
                                                    <a href="#"><i class="fa fa-reply color-primary"></i></a>
                                                </span>
                                            </div>
                                            <p class="comment-date">October 21, 2017</p>
                                        </div>
                                    </div>
                                    <div class="media no-border">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="assets/images/avatar/3.jpg" alt="..."/></a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Mr. John</h4>
                                            <p>Cras sit amet nibh libero, in gravida nulla. </p>
                                            <div class="comment-action">
                                                <div class="badge badge-success">Done</div>
                                                <span class="m-l-10">
                                                    <a href="#"><i class="ti-check color-success"></i></a>
                                                    <a href="#"><i class="ti-close color-danger"></i></a>
                                                    <a href="#"><i class="fa fa-reply color-primary"></i></a>
                                                </span>
                                            </div>
                                            <div class="comment-date">October 21, 2017</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer">
                                <p>2018 © Admin Board. - <a href="#">example.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div id="search">
        <button type="button" class="close">×</button>
        <form>
            <input type="search" value="" placeholder="type keyword(s) here" />
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    </div>
    </div>)
   
    

        }
        }
        export default SideBar
