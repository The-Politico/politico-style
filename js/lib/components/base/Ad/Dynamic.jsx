import React from 'react';
import randomstring from 'randomstring';

class Ad extends React.PureComponent {
  constructor(props) {
    super(props);

    this.id = 'ad-' + randomstring.generate({
      length: 12,
      charset: 'alphabetic',
    });

    this.mountAd = this.mountAd.bind(this);
    this.waitForAdScript = this.waitForAdScript.bind(this);
  }

  mountAd() {
    if (window.generateCustomAds) {
      window.generateCustomAds(`#${this.id}`, this.props.type);
      return true;
    } else {
      return false;
    }
  }

  waitForAdScript() {
    this.waiting = setInterval(() => {
      const success = this.mountAd();
      if (success) {
        clearInterval(this.waiting);
      }
    }, 2000);
  }

  componentDidMount() {
    const success = this.mountAd();
    if (!success) {
      this.waitForAdScript();
    }
  }

  render() {
    return (
      <div className='content-group ad screenshot-remove'>
        <p>Advertisement</p>
        <div className='ad-slot flex horizontal' id={this.id} />
      </div>
    );
  }
}

Ad.defaultProps = {
  type: 'cube',
};

export default Ad;
