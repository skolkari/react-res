import React, { Component } from 'react';
import { render } from 'react-dom';
import './css/bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './css/magnific-popup.css';
import './css/slick.css';
import './fontawesome/css/all.min.css';
import './css/style.css';

class DreamRS extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <header className="main_menu home_menu">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo"/> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse main-menu-item" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">about</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="services.html">Services</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            blog
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="blog.html">blog</a>
                                            <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            pages
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="project.html">Project</a>
                                            <a className="dropdown-item" href="apartment.html">Apartment</a>
                                            <a className="dropdown-item" href="elements.html">Elements</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <section className="banner_part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 col-sm-8 offset-sm-2">
                        <div className="banner_text aling-items-center">
                            <div className="banner_text_iner">
                                <h5>Dream</h5>
                                <h2>Proparties <br></br>
                                    Now In City</h2>
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do
                                    eiusmod tempor incididunt ut labore et dolore magna. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about_part section-padding">
            <div className="container">
                <div className="row">
                    <div className="section_tittle">
                        <h2><span>about</span> us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about_img">
                            <img src="img/about.png" alt=""/>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5 col-sm-8 col-md-6">
                        <div className="about_text">
                            <h2>Hello City We are
                                leader in <span>proparties.</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ips
                                eiusmod tempor incididunt ut labore et dolore magna aliqua isuspendisse
                                ultrices gravida. Risus. </p>
                            <a href="#" className="btn_1">learn More</a>
                            <div className="about_part_counter">
                                <div className="single_counter">
                                    <span className="counter">100</span>
                                    <p>project</p>
                                </div>
                                <div className="single_counter">
                                    <span className="counter">300</span>
                                    <p>clients</p>
                                </div>
                                <div className="single_counter">
                                    <span className="counter">150</span>
                                    <p>member</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="portfolio_area pt_30 padding_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_tittle">
                            <h2><span>our</span> project</h2>
                        </div>
                        <div className="portfolio-filter">
                            <h2>Hello City We are <br></br>
                                leader in <span>Projects .</span></h2>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li>
                                    <a className="active" id="Architecture-tab" data-toggle="tab" href="#Architecture" role="tab"
                                        aria-controls="Architecture" aria-selected="true">
                                        Architecture
                                    </a>
                                </li>
                                <li>
                                    <a id="Interior-tab" data-toggle="tab" href="#Interior" role="tab" aria-controls="Interior"
                                        aria-selected="false">
                                        Interior
                                    </a>
                                </li>
                                <li>
                                    <a id="Exterior-tab" data-toggle="tab" href="#Exterior" role="tab" aria-controls="Exterior"
                                        aria-selected="false">
                                        Exterior
                                    </a>
                                </li>
                                <li>
                                    <a id="Landing-tab" data-toggle="tab" href="#Landing" role="tab" aria-controls="Landing"
                                        aria-selected="false">
                                        Drafting Landing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="portfolio_item tab-content" id="myTabContent">
                            <div className="row align-items-center justify-content-between tab-pane fade show active"
                                id="Architecture" role="tabpanel" aria-labelledby="Architecture-tab">
                                <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="portfolio_box">
                                        <a href="img/project-1.png" className="img-gal">
                                            <div className="single_portfolio">
                                                <img className="img-fluid w-100" src="img/project-1.png" alt=""/>
                                            </div>
                                        </a>
                                        <div className="short_info">
                                            <p>Exclusive Project</p>
                                            <h4><a href="#">Etiam tortor <br></br>
                                                    aliquet habitant</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-2.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-2.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-3.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-3.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>Exclusive Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between tab-pane fade" id="Interior"
                                role="tabpanel" aria-labelledby="Interior-tab">
                                <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="portfolio_box">
                                        <a href="img/project-2.png" className="img-gal">
                                            <div className="single_portfolio">
                                                <img className="img-fluid w-100" src="img/project-2.png" alt=""/>
                                            </div>
                                        </a>
                                        <div className="short_info">
                                            <p>new Project</p>
                                            <h4><a href="#">Etiam tortor <br></br>
                                                    aliquet habitant</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-1.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-1.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-3.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-3.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between tab-pane fade" id="Exterior"
                                role="tabpanel" aria-labelledby="Exterior-tab">
                                <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="portfolio_box">
                                        <a href="img/project-3.png" className="img-gal">
                                            <div className="single_portfolio">
                                                <img className="img-fluid w-100" src="img/project-3.png" alt=""/>
                                            </div>
                                        </a>
                                        <div className="short_info">
                                            <p>new Project</p>
                                            <h4><a href="#">Etiam tortor <br></br>
                                                    aliquet habitant</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-2.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-2.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-1.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-1.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between tab-pane fade" id="Landing"
                                role="tabpanel" aria-labelledby="Landing-tab">
                                <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="portfolio_box">
                                        <a href="img/project-1.png" className="img-gal">
                                            <div className="single_portfolio">
                                                <img className="img-fluid w-100" src="img/project-1.png" alt=""/>
                                            </div>
                                        </a>
                                        <div className="short_info">
                                            <p>new Project</p>
                                            <h4><a href="#">Etiam tortor <br></br>
                                                    aliquet habitant</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-4.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-5.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 col-md-12 single_portfolio_project">
                                            <div className="portfolio_box">
                                                <a href="img/project-3.png" className="img-gal">
                                                    <div className="single_portfolio">
                                                        <img className="img-fluid w-100" src="img/project-3.png" alt=""/>
                                                    </div>
                                                </a>
                                                <div className="short_info">
                                                    <p>new Project</p>
                                                    <h4><a href="#">Etiam tortor <br></br>
                                                            aliquet habitant</a></h4>
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
        </section>

        <section className="service_part">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7 col-xl-6">
                        <div className="section_tittle">
                            <h2>our <span>services</span></h2>
                        </div>
                        <div className="service_part_iner">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single_service_text ">
                                        <img src="img/icon/service_1.svg" alt=""/>
                                        <h4>house Planning</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single_service_text">
                                        <img src="img/icon/service_2.svg" alt=""/>
                                        <h4>house Build</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single_service_text">
                                        <img src="img/icon/service_3.svg" alt=""/>
                                        <h4>Design&
                                            Build</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single_service_text">
                                        <img src="img/icon/service_4.svg" alt=""/>
                                        <h4>Design&
                                            Build</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-10">
                        <div className="service_text">
                            <h2>Hello City We are
                                leader in <span> Services.</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit,
                                sed do eiusmodtemporincididunt u labore et dolore magna aliqua.
                                Quis ipsum pendisse ultrices gravida. Risus commodo viverra
                                maecenas accumsan lacus vel </p>
                            <a href="service.html" className="btn_1">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="project_gallery section-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project_gallery_tittle">
                            <h2><span>Luxuries</span> Apartment</h2>
                        </div>
                        <div className="grid">
                            <div className="grid-sizer"></div>
                            <div className="grid-item big_weight">
                                <div className="project_img">
                                    <img src="img/gallery/gallery_1.png" alt=""/>
                                    <div className="project_gallery_hover_text">
                                        <p>Home Apartment</p>
                                        <h3><a href="apartment.html"> Detached House For Sale</a></h3>
                                        <ul>
                                            <li><a href=""><span className="flaticon-bath"></span></a> 04</li>
                                            <li><a href=""><span className="flaticon-bed"></span></a> 03</li>
                                            <li><a href=""><span className="flaticon-frame"></span></a> 2400 sqft</li>
                                            <li><a href=""><span className="ti-heart"></span></a> like</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item big_height">
                                <div className="project_img">
                                    <img src="img/gallery/gallery_4.png" alt=""/>
                                    <div className="project_gallery_hover_text">
                                        <p>Home Apartment</p>
                                        <h3><a href="apartment.html"> Detached House For Sale</a></h3>
                                        <ul>
                                            <li><a href=""><span className="flaticon-bath"></span></a> 04</li>
                                            <li><a href=""><span className="flaticon-bed"></span></a> 03</li>
                                            <li><a href=""><span className="flaticon-frame"></span></a> 2400 sqft</li>
                                            <li><a href=""><span className="ti-heart"></span></a> like</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="project_img">
                                    <img src="img/gallery/gallery_2.png" alt=""/>
                                    <div className="project_gallery_hover_text">
                                        <p>Home Apartment</p>
                                        <h3><a href="apartment.html"> Detached House For Sale</a></h3>
                                        <ul>
                                            <li><a href=""><span className="flaticon-bath"></span></a> 04</li>
                                            <li><a href=""><span className="flaticon-bed"></span></a> 03</li>
                                            <li><a href=""><span className="flaticon-frame"></span></a> 2400 sqft</li>
                                            <li><a href=""><span className="ti-heart"></span></a> like</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="project_img">
                                    <img src="img/gallery/gallery_3.png" alt=""/>
                                    <div className="project_gallery_hover_text">
                                        <p>Home Apartment</p>
                                        <h3><a href="apartment.html"> Detached House For Sale</a></h3>
                                        <ul>
                                            <li><a href=""><span className="flaticon-bath"></span></a> 04</li>
                                            <li><a href=""><span className="flaticon-bed"></span></a> 03</li>
                                            <li><a href=""><span className="flaticon-frame"></span></a> 2400 sqft</li>
                                            <li><a href=""><span className="ti-heart"></span></a> like</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="blog_part padding_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-5">
                        <div className="blog_part_tittle">
                            <h2>our <span>blog</span> </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="single_blog">
                            <div className="appartment_img">
                                <img src="img/blog_1.png" alt=""/>
                            </div>
                            <div className="single_appartment_content">
                                <p><a href="#">Apartment</a> / March 20, 2019</p>
                                <a href="blog.html">
                                    <h4>Doee lights without darkness that said
                                        good deep years very.</h4>
                                </a>
                                <ul className="list-unstyled">
                                    <li><a href=""> <span className="ti-comment"></span> </a> 2 comment</li>
                                    <li><a href=""> <span className="ti-heart"></span> </a> 0 like</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="right_single_blog">
                            <div className="single_blog">
                                <div className="media">
                                    <div className="media-body align-self-center">
                                        <p><a href="#">Apartment</a> / March 20, 2019</p>
                                        <a href="blog.html">
                                            <h5 className="mt-0"> lights without darkness that said.</h5>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li><a href=""> <span className="ti-time"></span> </a> Mar 12</li>
                                            <li><a href=""> <span className="ti-heart"></span> </a> 0 like</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single_blog">
                                <div className="media">
                                    <div className="media-body align-self-center">
                                        <p><a href="#">Apartment</a> / March 20, 2019</p>
                                        <a href="blog.html">
                                            <h5 className="mt-0"> lights without darkness that said.</h5>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li><a href=""> <span className="ti-time"></span> </a> Mar 12</li>
                                            <li><a href=""> <span className="ti-heart"></span> </a> 0 like</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className="footer_part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer_logo">
                            <a href="index.html" className="footer_logo_iner"> <img src="img/footer_logo.png" alt="#"/> </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="single_footer_part">
                            <h4>About Us</h4>
                            <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                            <div className="footer_icon social_icon">
                                <ul className="list-unstyled">
                                    <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="single_social_icon"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="single_social_icon"><i className="fas fa-globe"></i></a></li>
                                    <li><a href="#" className="single_social_icon"><i className="fab fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="single_footer_part">
                            <h4>Contact Info</h4>
                            <p>Address : Your address goes
                                here, your demo address.</p>
                            <p>Phone : +8880 44338899</p>
                            <p>Email : info@colorlib.com</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="single_footer_part">
                            <h4>Important Link</h4>
                            <ul className="list-unstyled">
                                <li><a href=""> WHMCS-bridge</a></li>
                                <li><a href="">Search Domain</a></li>
                                <li><a href="">My Account</a></li>
                                <li><a href="">Shopping Cart</a></li>
                                <li><a href="">Our Shop</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="single_footer_part">
                            <h4>Newsletter</h4>
                            <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days
                                open
                            </p>
                            <div id="mc_embed_signup">
                                <form className="subscribe_form relative mail_part" required>
                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                        className="placeholder hide-on-focus"  required="" type="email"/>
                                    <button type="submit" name="submit" id="newsletter-submit"
                                        className="email_icon newsletter-submit button-contactForm"><i
                                            className="far fa-paper-plane"></i></button>
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default DreamRS;
