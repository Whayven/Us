import React, { Component } from 'react';
import { Route } from "react-router-dom";

import CrossfadeImage from 'react-crossfade-image';
// import Navigation from '../components/navigation/Navigation';
import Journal from '../components/pages/Journal';
import Gallery from '../components/pages/Gallery';

import './App.css';
// import Typography from '@material-ui/core/Typography';


const images = [
  "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/51842331_2109706739096548_866928879430795264_n.jpg?_nc_cat=101&_nc_oc=AQmeQX1pJiirLfwXSMiu-DnWvxCH-pNq-foRUOJApMIKfHkfGkQx5aLq4yt9cudSDzo&_nc_ht=scontent-atl3-1.xx&oh=1ab835b7618391d7b3de7d4dedc6a2f5&oe=5DA7A12B",
  "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/14440957_1128702870530278_8249113293741367687_n.jpg?_nc_cat=104&_nc_oc=AQkpdOocgdxO_jAR_nVmpZo-3QahYjC-A05xHfOPUX_e6Zr86Ygnn3m2hAcFcsmssbg&_nc_ht=scontent-atl3-1.xx&oh=77b5f68c9a1b999fca8da1282029b74f&oe=5DA98633",
  "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13509077_1064271526973413_7856906557895806921_n.jpg?_nc_cat=100&_nc_oc=AQl0KFKCyAJQNS79QIY9yYowPfTq_GB-0MWHq_8M7BbIm3uIgizF8QRhzgllAlUg0OI&_nc_ht=scontent-atl3-1.xx&oh=6fedbd54cb3c45d1ac4e4e99e26bd3f2&oe=5DADFA17",
]

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageIndex: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    if (this.state.imageIndex === images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeImage(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // eslint-disable-next-line eqeqeq
    if (this.props.authState === "signedIn") {
      return (
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="container">
                <CrossfadeImage
                  src={images[this.state.imageIndex]}
                  duration={1000}
                  timingFunction={"ease"}
                />
              </div>
            </React.Fragment>
          )} />
          <Route path="/journal" component={Journal} />
          <Route path="/gallery" component={Gallery} />
        </div>


      );
    } else return null;
  }
}

export default App;
