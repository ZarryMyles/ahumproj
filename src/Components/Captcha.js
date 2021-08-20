import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// const TEST_SITE_KEY = "6LcbQAEcAAAAADeZxo4NIAzE8e8ec5Qo8ZJ-YsBE";
const TEST_SITE_KEY = process.env.REACT_APP_SITE_KEY;

const DELAY = 1500;

export default class Captcha extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false",
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
  }

  handleChange = (value) => {
    if (value) this.props.captchaVerify();
    // if value is null recaptcha expired
    if (value === null) {
      this.props.captchaExpired();
      this.setState({ expired: "true" });
    }
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
  };

  render() {
    const { load } = this.state || {};
    return (
      <div className="">
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="light"
            ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}
