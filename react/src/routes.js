import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import GalleryPage from './components/gallery/GalleryPage';
import ReviewsPage from './components/reviews/ReviewsPage';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="contact" component={ContactPage} />
        <Route path="gallery" component={GalleryPage} />
        <Route path="reviews" component={ReviewsPage} />
    </Route>
);