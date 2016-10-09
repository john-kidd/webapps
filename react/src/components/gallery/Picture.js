import React from 'react';

class ListItemWrapper extends React.Component {
  render() {
    return <div className="row">
        <div className="col-md-3">
            <img src={this.props.pictures[0].src} className="thumbnail picture" />
            <h5>{this.props.pictures[0].title}</h5>
            <h6>{this.props.pictures[0].subTitle}</h6>
        </div>
        <div className="col-md-3">
            <img src={this.props.pictures[1].src} className="thumbnail picture" />
            <h5>{this.props.pictures[1].title}</h5>
            <h6>{this.props.pictures[1].subTitle}</h6>
        </div>
        <div className="col-md-3">
            <img src={this.props.pictures[2].src} className="thumbnail picture" />
            <h5>{this.props.pictures[2].title}</h5>
            <h6>{this.props.pictures[2].subTitle}</h6>
        </div>
        <div className="col-md-3">
            <img src={this.props.pictures[3].src} className="thumbnail picture" />
            <h5>{this.props.pictures[3].title}</h5>
            <h6>{this.props.pictures[3].subTitle}</h6>
        </div>
    </div>;
  }
}

export default React.createClass({
    render: function() {
        const gallery = this.props.gallery.map((pictures, index) => {
            return (
                <ListItemWrapper key={index} pictures={pictures} />
            );
        });
        return <div>{gallery}</div>;
    }
});