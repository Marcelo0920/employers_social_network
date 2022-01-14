import React from 'react';


import facebook_office from "../../images/resources/facebook-office.jpg";
import Footer from '../Footer/Footer';
import SecondNavbar from '../navbar/SecondNavbar';

const OfertaDetalle = () => {
    return(
        <div className="theme-layout">
          
        <SecondNavbar />

          <section>
            <div className="gap gray-bg">
              <div className="container">
                <div className="row" id="page-contents">
                  <div className="col-lg-6">
                    <div className="employer-info">
                      <i>search job</i>
                      <h2>Web Design Engineer</h2>
                      <ul>
                        <li><span>industria:</span> <i>orbit group of companies</i></li>
                        <li><span>Puesto:</span> <i>Online Freelancers</i></li>
                        <li><span>Tipo:</span> <i>Information Technology</i></li>
                        <li><span>Ubicación:</span> <i>Full time</i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="salary-area">
                      <h4>$3000-4000</h4>
                      <span>salario mínimo</span>
                      <ul className="sociaz-media">
                        <li>
                          <a title href="#" className="facebook"><i className="fa fa-facebook-square" /> facebook</a>
                        </li>
                        <li>
                          <a title href="#" className="google"><i className="fa fa-google-plus-square" /> Google+</a>
                        </li>
                        <li>
                          <a title href="#" className="pinterest"><i className="fa fa-pinterest-square" /> Pinterest</a>
                        </li>
                        <li>
                          <a title href="#" className="twitter"><i className="fa fa-twitter-square" /> Twitter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <section>
          <div className="gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="job-detail">
                    <h3>Descripción del Puesto</h3>
                    <p>
                      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                    </p>
                    <p>
                      the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                    </p>
                    <h5>Experiencia &amp; Requerimientos</h5>
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        <span>Undergraduate degree in addition to a Master's degree or 1 - 3 years of work experience after completing an undergraduate degree</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Outstanding record of academic achievement</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Demonstrated aptitude for analytics</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Proven record of leadership in a work setting and/or through extracurricular activities</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Exceptional analytical and quantitative problem-solving skills</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Ability to work collaboratively in a team environment and effectively with people at all levels in an organization</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Ability to communicate complex ideas effectively - both verbally and in writing - in English and the local language</span>
                      </li>
                    </ul>
                    <div className="apply-bttons">
                      <a href="#" title>Apply via Winku</a>
                      <a href="#" title>Send Email</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="company-intro">
                    <h4>Acerca de la Empresa</h4>
                    <figure><img src= {facebook_office} alt /></figure>
                    <p>
                      I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,
                    </p>
                    <a href="#" title>Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />

      </div>
    )
}

export default OfertaDetalle;