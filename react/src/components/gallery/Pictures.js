import React from 'react';
import Row from './Row';

class Pictures extends React.Component {
    render() {
        const gallery = this.props.gallery.map((pictures, index) => {
            return (
                <Row key={index} pictures={pictures} />
            );
        });
        return <div>{gallery}</div>;
    }
}

export default Pictures;