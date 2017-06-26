import React, {Component} from 'react';
import ParallaxSection from './parallax';


class About extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <ParallaxSection backgroundImage="woody" centerText="CenterBoxText white" words="藝文出版.與規劃"/>
        <ParallaxSection backgroundImage="nomad" centerText="CenterBoxText gray fillBlack" words="文化節慶.規劃管理"/>
        <ParallaxSection backgroundImage="books" centerText="CenterBoxText white" words="文化品牌.規劃"/>
        <ParallaxSection backgroundImage="skybuilding" centerText="CenterBoxText gray" words="文化觀光.規劃與管理"/>
        <ParallaxSection backgroundImage="sippy" centerText="CenterBoxText gray" words="生活美儀"/>
      </div>
    );
  }
}

export default About;