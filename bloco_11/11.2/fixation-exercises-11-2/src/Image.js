// import cat from 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;