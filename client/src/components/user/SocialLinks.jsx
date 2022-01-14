import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SocialLinks = ({auth}) => {
    return(
        <div className="widget">
            <h4 className="widget-title">Redes Sociales</h4>
            <ul className="socials">
                <li className="facebook">
                    <a title href={auth.user.facebook}><i className="fa fa-facebook" /> <span>facebook</span> <ins>45 likes</ins></a>
                </li>
                <li className="twitter">
                    <a title href={auth.user.facebook}><i className="fa fa-twitter" /> <span>twitter</span><ins>25 likes</ins></a>
                </li>
                <li className="google">
                    <a title href={auth.user.facebook}><i className="fa fa-google" /> <span>google</span><ins>35 likes</ins></a>
                </li>
            </ul>
        </div>
    )
}

SocialLinks.propTypes = ({
    auth: PropTypes.object.isRequired
})

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(SocialLinks);