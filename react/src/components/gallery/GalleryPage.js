import React from 'react';
import Picture from './Picture';

class GalleryPage extends React.Component {
  render() {
    const gallery = [
        [
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'Before'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'After'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'Before'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'After'
            } 
        ],            
        [
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'Before'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'After'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'Before'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'After'
            } 
        ],
        [
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'Before'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'After'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'Before'
            }, 
            { 
                src: require('../../images/about_us.jpg'),
                title: 'Gutter / valley cleaning',
                subTitle: 'After'
            } 
        ]            
    ];   
    return (
            <div>
                <h2 className="row col-md-12">Gallery</h2>
                <h5>Please view the variety and standard of the service we provide</h5>
                <Picture gallery={gallery} />
            </div>
        );
    }
}

export default GalleryPage;