import React from 'react';

export default React.createClass({
    render: function() {
        const gallery = this.props.gallery.map((pictures) => {
            return (
                <div className="row">
                    <div className="col-md-3">
                        <img src={pictures[0].src} className="thumbnail picture" />
                        <h5>{pictures[0].title}</h5>
                        <h6>{pictures[0].subTitle}</h6>
                    </div>
                    <div className="col-md-3">
                        <img src={pictures[1].src} className="thumbnail picture" />
                        <h5>{pictures[1].title}</h5>
                        <h6>{pictures[1].subTitle}</h6>
                    </div>
                    <div className="col-md-3">
                        <img src={pictures[2].src} className="thumbnail picture" />
                        <h5>{pictures[2].title}</h5>
                        <h6>{pictures[2].subTitle}</h6>
                    </div>
                    <div className="col-md-3">
                        <img src={pictures[3].src} className="thumbnail picture" />
                        <h5>{pictures[3].title}</h5>
                        <h6>{pictures[3].subTitle}</h6>
                    </div>
                </div>
            );
        });
        return <div>{gallery}</div>;
    }
});