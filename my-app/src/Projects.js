import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/231af658709499.5a060bc540a31.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5df51758709499.5a060bc540f60.jpg",
    'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/26114306_533161203710480_2590615607065709277_o.jpg?_nc_cat=0&oh=19f82b0d20e1051f7be0c2d0e00e1e69&oe=5B9DAEC3',
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34688225_618036665222933_202696373034811392_n.jpg?_nc_cat=0&_nc_eui2=AeEzUsKNkX8RDU2RyOwj8ZZaDiXZuRojemaM0F9MykfbEwazX2MJKNQUIsaddo_x5Z-Rd7pFcWFXnRWwE3yiCN2XbFsqSpzRNGPDo16cYh7nHQ&oh=d252c31f90ca56b76aaa0234d644edcd&oe=5BAFCE5D"
];

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div className={'grid-container projects-holder'}>
                <div className={'row'}>
                    <div className={'col-12 photo-gal'}>
                        <button className={'projects-light'} type="button" onClick={() => this.setState({ isOpen: true })}>
                            Check out my work!
                        </button>

                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length
                                    })
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}


export default Projects