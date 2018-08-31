import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

const sleep = (duration) => (...args) => new Promise((resolve) => {
  setTimeout(() => resolve(...args), duration);
});

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previewToggled: true,
      inputToggled: props.value === '',
      inputProps: {value: props.value},
    };

    this.dndHandler = {
      enter: (e) => {
        this.references.dnd.current.className = classnames('dnd', {hover: true});
        e.stopPropagation();
        e.preventDefault();
      },

      over: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },

      leave: (e) => {
        this.references.dnd.current.className = classnames('dnd', {hover: false});
        e.stopPropagation();
        e.preventDefault();
      },

      drop: (e) => {
        if (e.dataTransfer.files.length > 1) { alert('Import is limited to a single file.'); } else { this.handleUpload(e.dataTransfer.files[0]); }

        e.stopPropagation();
        e.preventDefault();
      },
    };

    this.references = {
      'dnd': React.createRef(),
    };

    this.parseInputProps = this.parseInputProps.bind(this);
    this.toggleInputToggled = this.toggleInputToggled.bind(this);
    this.uploadUrl = this.uploadUrl.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  parseInputProps(props) {
    const inputProps = Object.assign({}, props);

    delete inputProps.help;
    delete inputProps.label;
    delete inputProps.wrapperClassName;
    delete inputProps.size;
    delete inputProps.compression;
    delete inputProps.progressive;
    delete inputProps.onUpload;
    delete inputProps.onChange;
    delete inputProps.onDelete;
    inputProps.className = 'form-control ' + props.className;

    this.setState({inputProps});
  }

  componentWillReceiveProps(props) {
    this.parseInputProps(props);
  }

  componentDidMount() {
    this.parseInputProps(this.props);
  }

  toggleInputToggled() {
    this.props.onDelete();
    this.setState({inputToggled: !this.state.inputToggled});
  }

  uploadUrl() {
    if (this.props.env === 'staging') { return 'https://staging.politicoapps.com/api/services/s3imageservice/'; } else if (this.props.env === 'production') { return 'https://politicoapps.com/api/services/s3imageservice/'; }
  }

  handleChange(event) {
    const img = event.target.files[0];
    this.handleUpload(img);
  }

  handleUpload(img) {
    const confirmed = confirm(`Are you sure you want to upload ${img.name}?`);
    this.references.dnd.current.className = classnames('dnd', {hover: false});

    if (confirmed) {
      const formData = new FormData();
      formData.append('img', img);

      if (this.props.size) { formData.append('sizes', `[${this.props.size}]`); }
      if (this.props.compression) { formData.append('compression', this.props.compression); }
      if (this.props.progressive) { formData.append('progressive', this.props.progressive); }

      fetch(this.uploadUrl(), {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.props.token}`,
        },
        body: formData,
      })
        .then(resp => resp.json())
        .then(d => {
          const canonicalUrl = d.canonical;
          const cacheUrl = d.urls[0];
          this.setState({
            inputToggled: false,
            previewToggled: false,
          });
          this.getImage(canonicalUrl, cacheUrl, 500);
        })
        .catch(error => console.error(`Image Service Error =\n`, error));
    }

    this.props.onChange(img);
  }

  getImage(canonicalUrl, cacheUrl, intervalTime = 500, limit = 10) {
    return fetch(canonicalUrl, {
      method: 'GET',
      mode: 'no-cors',
    })
      .then(sleep(intervalTime))
      .then(resp => {
        if (!resp.ok && limit >= 0) {
          return this.getImage(canonicalUrl, cacheUrl, intervalTime, --limit);
        } else {
          this.props.onUpload({canonicalUrl, cacheUrl});
          this.setState({previewToggled: true});
        }
      });
  }

  render() {
    return (
      <div id={`${this.props.id}-container`} className={`s3-image-service form-group ${this.props.wrapperClassName}`}>

        { this.props.label.length > 0 &&
          <label id={`label-${this.props.id}`} >
            {this.props.label}
          </label>
        }

        {/* If input is toggled */}
        { this.state.inputToggled &&
          <input
            type='file'
            onChange={this.handleChange}
            {...this.state.inputProps}
          />
        }

        {/* If input is toggled */}
        { this.state.inputToggled &&
          <label
            ref={this.references.dnd}
            className='dnd'
            htmlFor={this.props.id}
            onDragEnter={this.dndHandler.enter}
            onDragOver={this.dndHandler.over}
            onDragLeave={this.dndHandler.leave}
            onDrop={this.dndHandler.drop}
          >
            <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 691 691'>
              <rect x='6.5' y='6.5' width='678' height='678' rx='17' ry='17' />
              <path d='M390,470,507.21,271.72c4.76-8,9.78-15.19,11.16-15.87s7.72,7.9,12.32,16L684,543' />
              <path d='M7,482,196.11,146.1a5.7,5.7,0,0,1,9.86,0L515.58,682' />
              <circle cx='455' cy='129' r='66.5' />
              <path d='M296,306.5l-48.74,59.95a1.67,1.67,0,0,1-2.6.07l-46.32-51a1.83,1.83,0,0,0-2.72,0l-38.24,40.1a1.86,1.86,0,0,1-2.74,0L109,306' />
            </svg>
          </label>
        }

        {/* If input is NOT toggled */}
        { !this.state.inputToggled &&
          <div className='preview'>
            {/* If preview is toggled */}
            { this.state.previewToggled &&
              <img
                className='image-preview'
                src={this.props.value}
              />
            }

            {/* If preview is toggled */}
            { this.state.previewToggled &&
              <div
                className='delete-container'>
                <div className='delete' onClick={this.toggleInputToggled}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 240.07'>
                    <path d='M20,60.06H6.81C1.56,60,0,58.47,0,53.16c0-2.33,0-4.66,0-7,0-4.31,1.76-6,6.11-6,14.83,0,29.66-.06,44.49,0,2.11,0,3-.7,3.79-2.56,3.09-7.63,6.2-15.26,9.54-22.79C68.11,5.39,75.53.31,85.81.16q24.12-.33,48.24,0c10.39.13,17.86,5.23,22.07,14.76,3.35,7.61,6.5,15.31,9.64,23A3,3,0,0,0,169,40.15c14.75-.08,29.5,0,44.24,0,5.2,0,6.73,1.53,6.74,6.68,0,2.41,0,4.83,0,7.24-.06,4.19-1.76,6-5.92,6-4.58.06-9.15,0-14.08,0v3q0,72,0,144c0,10.16-2.81,19.16-10.11,26.53A21,21,0,0,1,174.43,240q-64.74,0-129.47,0c-10.21,0-16.5-6.16-21.06-14.51-3-5.55-3.9-11.6-3.9-17.85q0-49.36,0-98.73Zm20,.08v2.73q0,45.62,0,91.23,0,26.49,0,53c0,4,.57,7.88,3.09,11.08A5.42,5.42,0,0,0,46.75,220q63.24.14,126.48.11a4.26,4.26,0,0,0,3.91-2.12A19,19,0,0,0,180,207.09q0-72.48,0-145c0-.64-.09-1.27-.14-2ZM75,40h70c-2.52-6.1-4.83-12-7.5-17.83a4.73,4.73,0,0,0-3.63-2q-23.85-.21-47.71,0A4.54,4.54,0,0,0,82.68,22C80,27.87,77.57,33.87,75,40Z' />
                    <path d='M80,140.1q0,21.61,0,43.22c0,5.11-1.61,6.72-6.71,6.73-2.58,0-5.17.08-7.75,0-3.73-.14-5.49-1.9-5.49-5.65q0-44.35,0-88.7c0-3.71,1.82-5.47,5.57-5.56,2.83-.07,5.66-.05,8.49,0,4.15.07,5.88,1.81,5.89,6Q80,118.12,80,140.1Z' />
                    <path d='M100,139.83v-43c0-5.17,1.55-6.74,6.66-6.75,2.41,0,4.83,0,7.24,0,4.33,0,6.06,1.75,6.07,6.1q0,19.61,0,39.22,0,23.87,0,47.72c0,5.3-1.56,6.89-6.78,6.9-2.33,0-4.67,0-7,0-4.47-.05-6.18-1.76-6.19-6.25Q100,161.82,100,139.83Z' />
                    <path d='M140,140.1q0-21.61,0-43.23c0-5.18,1.55-6.75,6.65-6.76,2.49,0,5,0,7.49,0,4,.07,5.8,1.81,5.82,5.83,0,9.08,0,18.16,0,27.23q0,30,0,60c0,5.42-1.53,6.92-7,6.92-2.25,0-4.5,0-6.75,0-4.47-.05-6.19-1.75-6.19-6.23Q140,162,140,140.1Z' />
                  </svg>
                </div>
              </div>
            }

            {/* Else if preview is NOT toggled */}
            { !this.state.previewToggled &&
              <Loader
                type='Oval'
                color='#9e0000'
                height='50'
                width='50'
              />
            }
          </div>
        }

        {/* If input is toggled */}
        { this.state.inputToggled && this.props.help.length > 0 &&
          <small id={`help-${this.props.id}`} className='form-text text-muted'>
            {this.props.help}
          </small>
        }
      </div>
    );
  }
}

ImageUpload.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  env: 'production',
  value: '',
  label: '',
  help: '',
  onChange: () => {},
  onUpload: () => {},
  onDelete: () => {},
};

ImageUpload.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  env: PropTypes.oneOf(['production', 'staging']),
  value: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  size: PropTypes.number,
  compression: PropTypes.bool,
  progressive: PropTypes.bool,
  onChange: PropTypes.func,
  onUpload: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ImageUpload;
