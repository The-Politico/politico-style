import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Loader from 'react-loader-spinner';
import { Typeahead } from 'react-bootstrap-typeahead';
import hexRgb from 'hex-rgb';

var Header = function Header(props) {
  return React.createElement("header", null, React.createElement("h5", {
    className: "text-center"
  }, props.subhed), React.createElement("h1", null, props.title));
};

Header.defaultProps = {
  subhed: 'Welcome to',
  title: null
};
Header.propTypes = {
  subhed: PropTypes.string,
  title: PropTypes.string.isRequired
};

var InstructionsList = function InstructionsList(props) {
  return React.createElement("section", null, React.createElement("ol", {
    className: "instructions"
  }, props.children));
};

var Button = function Button(props) {
  var outline = props.outline,
      type = props.type;
  var classes = classnames('btn', {
    'btn-primary': !outline && type === 'primary',
    'btn-outline-primary': outline && type === 'primary',
    'btn-secondary': !outline && type === 'secondary',
    'btn-outline-secondary': outline && type === 'secondary',
    'btn-dark': !outline && type === 'dark',
    'btn-outline-dark': outline && type === 'dark'
  });
  return React.createElement("button", {
    type: "button",
    className: classes,
    onClick: props.onClick
  }, props.children);
};

Button.defaultProps = {
  outline: false,
  type: 'primary'
};
Button.propTypes = {
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'dark']),
  onClick: PropTypes.func
};

var Checkbox = function Checkbox(props) {
  return React.createElement("div", {
    className: "custom-control custom-checkbox"
  }, React.createElement("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: 'checkbox_' + props.name,
    name: props.name,
    checked: props.checked,
    onChange: props.onChange
  }), React.createElement("label", {
    className: "custom-control-label",
    htmlFor: 'checkbox_' + props.name
  }, props.children));
};

Checkbox.defaultProps = {
  checked: false,
  name: null
};
Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var sleep = function sleep(duration) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve.apply(void 0, args);
      }, duration);
    });
  };
};

var ImageUpload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageUpload, _React$Component);

  function ImageUpload(props) {
    var _this;

    _classCallCheck(this, ImageUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageUpload).call(this, props));
    _this.state = {
      previewToggled: true,
      inputToggled: props.value === '',
      inputProps: {
        value: props.value
      }
    };
    _this.dndHandler = {
      enter: function enter(e) {
        _this.references.dnd.current.className = classnames('dnd', {
          hover: true
        });
        e.stopPropagation();
        e.preventDefault();
      },
      over: function over(e) {
        e.stopPropagation();
        e.preventDefault();
      },
      leave: function leave(e) {
        _this.references.dnd.current.className = classnames('dnd', {
          hover: false
        });
        e.stopPropagation();
        e.preventDefault();
      },
      drop: function drop(e) {
        if (e.dataTransfer.files.length > 1) {
          alert('Import is limited to a single file.');
        } else {
          _this.handleUpload(e.dataTransfer.files[0]);
        }

        e.stopPropagation();
        e.preventDefault();
      }
    };
    _this.references = {
      'dnd': React.createRef()
    };
    _this.parseInputProps = _this.parseInputProps.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleInputToggled = _this.toggleInputToggled.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.uploadUrl = _this.uploadUrl.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getImage = _this.getImage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageUpload, [{
    key: "parseInputProps",
    value: function parseInputProps(props) {
      var inputProps = Object.assign({}, props);
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
      this.setState({
        inputProps: inputProps
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.parseInputProps(props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.parseInputProps(this.props);
    }
  }, {
    key: "toggleInputToggled",
    value: function toggleInputToggled() {
      this.props.onDelete();
      this.setState({
        inputToggled: !this.state.inputToggled
      });
    }
  }, {
    key: "uploadUrl",
    value: function uploadUrl() {
      if (this.props.env === 'staging') {
        return 'https://staging.politicoapps.com/api/services/s3imageservice/';
      } else if (this.props.env === 'production') {
        return 'https://politicoapps.com/api/services/s3imageservice/';
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var img = event.target.files[0];
      this.handleUpload(img);
    }
  }, {
    key: "handleUpload",
    value: function handleUpload(img) {
      var _this2 = this;

      var confirmed = confirm("Are you sure you want to upload ".concat(img.name, "?"));
      this.references.dnd.current.className = classnames('dnd', {
        hover: false
      });

      if (confirmed) {
        var formData = new FormData();
        formData.append('img', img);

        if (this.props.size) {
          formData.append('sizes', "[".concat(this.props.size, "]"));
        }

        if (this.props.compression) {
          formData.append('compression', this.props.compression);
        }

        if (this.props.progressive) {
          formData.append('progressive', this.props.progressive);
        }

        fetch(this.uploadUrl(), {
          method: 'POST',
          headers: {
            'Authorization': "Token ".concat(this.props.token)
          },
          body: formData
        }).then(function (resp) {
          return resp.json();
        }).then(function (d) {
          var canonicalUrl = d.canonical;
          var cacheUrl = d.urls[0];

          _this2.setState({
            inputToggled: false,
            previewToggled: false
          });

          _this2.getImage(canonicalUrl, cacheUrl, 500);
        }).catch(function (error) {
          return console.error("Image Service Error =\n", error);
        });
      }

      this.props.onChange(img);
    }
  }, {
    key: "getImage",
    value: function getImage(canonicalUrl, cacheUrl) {
      var _this3 = this;

      var intervalTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
      var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      return fetch(canonicalUrl, {
        method: 'GET',
        mode: 'no-cors'
      }).then(sleep(intervalTime)).then(function (resp) {
        if (!resp.ok && limit >= 0) {
          return _this3.getImage(canonicalUrl, cacheUrl, intervalTime, --limit);
        } else {
          _this3.props.onUpload({
            canonicalUrl: canonicalUrl,
            cacheUrl: cacheUrl
          });

          _this3.setState({
            previewToggled: true
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "".concat(this.props.id, "-container"),
        className: "s3-image-service form-group ".concat(this.props.wrapperClassName)
      }, this.props.label.length > 0 && React.createElement("label", {
        id: "label-".concat(this.props.id)
      }, this.props.label), this.state.inputToggled && React.createElement("input", _extends({
        type: "file",
        onChange: this.handleChange
      }, this.state.inputProps)), this.state.inputToggled && React.createElement("label", {
        ref: this.references.dnd,
        className: "dnd",
        htmlFor: this.props.id,
        onDragEnter: this.dndHandler.enter,
        onDragOver: this.dndHandler.over,
        onDragLeave: this.dndHandler.leave,
        onDrop: this.dndHandler.drop
      }, React.createElement("svg", {
        className: "icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 691 691"
      }, React.createElement("rect", {
        x: "6.5",
        y: "6.5",
        width: "678",
        height: "678",
        rx: "17",
        ry: "17"
      }), React.createElement("path", {
        d: "M390,470,507.21,271.72c4.76-8,9.78-15.19,11.16-15.87s7.72,7.9,12.32,16L684,543"
      }), React.createElement("path", {
        d: "M7,482,196.11,146.1a5.7,5.7,0,0,1,9.86,0L515.58,682"
      }), React.createElement("circle", {
        cx: "455",
        cy: "129",
        r: "66.5"
      }), React.createElement("path", {
        d: "M296,306.5l-48.74,59.95a1.67,1.67,0,0,1-2.6.07l-46.32-51a1.83,1.83,0,0,0-2.72,0l-38.24,40.1a1.86,1.86,0,0,1-2.74,0L109,306"
      }))), !this.state.inputToggled && React.createElement("div", {
        className: "preview"
      }, this.state.previewToggled && React.createElement("img", {
        className: "image-preview",
        src: this.props.value
      }), this.state.previewToggled && React.createElement("div", {
        className: "delete-container"
      }, React.createElement("div", {
        className: "delete",
        onClick: this.toggleInputToggled
      }, React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 220 240.07"
      }, React.createElement("path", {
        d: "M20,60.06H6.81C1.56,60,0,58.47,0,53.16c0-2.33,0-4.66,0-7,0-4.31,1.76-6,6.11-6,14.83,0,29.66-.06,44.49,0,2.11,0,3-.7,3.79-2.56,3.09-7.63,6.2-15.26,9.54-22.79C68.11,5.39,75.53.31,85.81.16q24.12-.33,48.24,0c10.39.13,17.86,5.23,22.07,14.76,3.35,7.61,6.5,15.31,9.64,23A3,3,0,0,0,169,40.15c14.75-.08,29.5,0,44.24,0,5.2,0,6.73,1.53,6.74,6.68,0,2.41,0,4.83,0,7.24-.06,4.19-1.76,6-5.92,6-4.58.06-9.15,0-14.08,0v3q0,72,0,144c0,10.16-2.81,19.16-10.11,26.53A21,21,0,0,1,174.43,240q-64.74,0-129.47,0c-10.21,0-16.5-6.16-21.06-14.51-3-5.55-3.9-11.6-3.9-17.85q0-49.36,0-98.73Zm20,.08v2.73q0,45.62,0,91.23,0,26.49,0,53c0,4,.57,7.88,3.09,11.08A5.42,5.42,0,0,0,46.75,220q63.24.14,126.48.11a4.26,4.26,0,0,0,3.91-2.12A19,19,0,0,0,180,207.09q0-72.48,0-145c0-.64-.09-1.27-.14-2ZM75,40h70c-2.52-6.1-4.83-12-7.5-17.83a4.73,4.73,0,0,0-3.63-2q-23.85-.21-47.71,0A4.54,4.54,0,0,0,82.68,22C80,27.87,77.57,33.87,75,40Z"
      }), React.createElement("path", {
        d: "M80,140.1q0,21.61,0,43.22c0,5.11-1.61,6.72-6.71,6.73-2.58,0-5.17.08-7.75,0-3.73-.14-5.49-1.9-5.49-5.65q0-44.35,0-88.7c0-3.71,1.82-5.47,5.57-5.56,2.83-.07,5.66-.05,8.49,0,4.15.07,5.88,1.81,5.89,6Q80,118.12,80,140.1Z"
      }), React.createElement("path", {
        d: "M100,139.83v-43c0-5.17,1.55-6.74,6.66-6.75,2.41,0,4.83,0,7.24,0,4.33,0,6.06,1.75,6.07,6.1q0,19.61,0,39.22,0,23.87,0,47.72c0,5.3-1.56,6.89-6.78,6.9-2.33,0-4.67,0-7,0-4.47-.05-6.18-1.76-6.19-6.25Q100,161.82,100,139.83Z"
      }), React.createElement("path", {
        d: "M140,140.1q0-21.61,0-43.23c0-5.18,1.55-6.75,6.65-6.76,2.49,0,5,0,7.49,0,4,.07,5.8,1.81,5.82,5.83,0,9.08,0,18.16,0,27.23q0,30,0,60c0,5.42-1.53,6.92-7,6.92-2.25,0-4.5,0-6.75,0-4.47-.05-6.19-1.75-6.19-6.23Q140,162,140,140.1Z"
      })))), !this.state.previewToggled && React.createElement(Loader, {
        type: "Oval",
        color: "#9e0000",
        height: "50",
        width: "50"
      })), this.state.inputToggled && this.props.help.length > 0 && React.createElement("small", {
        id: "help-".concat(this.props.id),
        className: "form-text text-muted"
      }, this.props.help));
    }
  }]);

  return ImageUpload;
}(React.Component);

ImageUpload.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  env: 'production',
  value: '',
  label: '',
  help: '',
  onChange: function onChange() {},
  onUpload: function onUpload() {},
  onDelete: function onDelete() {}
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
  onDelete: PropTypes.func
};

var RadioButton = function RadioButton(props) {
  return React.createElement("div", {
    className: "custom-control custom-radio"
  }, React.createElement("input", {
    name: props.name,
    id: props.id,
    type: "radio",
    className: "custom-control-input",
    checked: props.checked,
    onChange: props.onChange
  }), React.createElement("label", {
    className: "custom-control-label",
    htmlFor: props.id
  }, props.children));
};

RadioButton.defaultProps = {
  checked: false,
  name: null,
  id: null
};
RadioButton.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
var RadioGroup = function RadioGroup(name) {
  return function (props) {
    return React.createElement(RadioButton, _extends({
      name: name
    }, props));
  };
};

var ActiveBadge = function ActiveBadge() {
  return React.createElement("span", {
    className: "badge badge-light"
  }, "\u2713");
};

var PillFilter = function PillFilter(props) {
  var active = props.active;
  var classes = classnames('filter', 'btn', {
    active: active
  });
  return React.createElement("button", {
    type: "button",
    className: classes,
    onClick: props.onClick
  }, props.children, active && React.createElement(ActiveBadge, null));
};

PillFilter.defaultProps = {
  active: false
};
PillFilter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

var TextInput = function TextInput(props) {
  var inputProps = Object.assign({}, props);
  delete inputProps.help;
  delete inputProps.label;
  delete inputProps.wrapperClassName;
  inputProps.className = 'form-control ' + props.className;
  var wrapperClassName = 'form-group ' + props.wrapperClassName;
  return React.createElement("div", {
    id: "container-".concat(props.id),
    className: wrapperClassName
  }, props.label.length > 0 && React.createElement("label", {
    id: "label-".concat(props.id),
    htmlFor: props.id
  }, props.label), props.type === 'textarea' && React.createElement("textarea", inputProps), props.type !== 'textarea' && React.createElement("input", inputProps), props.help.length > 0 && React.createElement("small", {
    id: "help-".concat(props.id),
    className: "form-text text-muted"
  }, props.help));
};

TextInput.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  help: '',
  label: '',
  value: ''
};
TextInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf(['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'textarea', 'time', 'url', 'week']),
  autocomplete: PropTypes.oneOf(['on', 'off']),
  autofocus: PropTypes.bool,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  max: PropTypes.string,
  maxlength: PropTypes.number,
  min: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  size: PropTypes.number,
  step: PropTypes.number,
  wrap: PropTypes.oneOf(['hard', 'soft'])
};

var Select = function Select(props) {
  var inputProps = Object.assign({}, props);
  delete inputProps.help;
  delete inputProps.label;
  delete inputProps.wrapperClassName;
  delete inputProps.options;
  delete inputProps.placeholder;
  inputProps.className = 'form-control ' + props.className;
  var wrapperClassName = 'form-group ' + props.wrapperClassName;
  return React.createElement("div", {
    id: "container-".concat(props.id),
    className: wrapperClassName
  }, props.label.length > 0 && React.createElement("label", {
    id: "label-".concat(props.id),
    htmlFor: props.id
  }, props.label), React.createElement("select", _extends({
    value: props.value
  }, inputProps), React.createElement("option", {
    disabled: true,
    hidden: true,
    key: "0",
    value: ""
  }, props.placeholder), props.options.map(function (option, idx) {
    return React.createElement("option", {
      key: idx + 1,
      value: option.id
    }, option.label);
  })), props.help.length > 0 && React.createElement("small", {
    id: "help-".concat(props.id),
    className: "form-text text-muted"
  }, props.help));
};

Select.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  help: '',
  label: '',
  value: '',
  placeholder: '',
  options: []
};
Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placeholder: PropTypes.string,
  options: PropTypes.array,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.number
};

var Typeahead$1 = function Typeahead$$1(props) {
  var inputProps = Object.assign({}, props);
  delete inputProps.help;
  delete inputProps.label;
  delete inputProps.wrapperClassName;
  inputProps.className = 'form-control ' + props.className;
  var wrapperClassName = 'form-group typeahead' + props.wrapperClassName;
  return React.createElement("div", {
    id: "container-".concat(props.id),
    className: wrapperClassName
  }, props.label.length > 0 && React.createElement("label", {
    id: "label-".concat(props.id),
    htmlFor: props.id
  }, props.label), React.createElement(Typeahead, _extends({
    menuId: props.id
  }, inputProps)), props.help.length > 0 && React.createElement("small", {
    id: "help-".concat(props.id),
    className: "form-text text-muted"
  }, props.help));
};

Typeahead$1.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  help: '',
  label: ''
};
Typeahead$1.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string
};

var Home = function Home() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve"
  }, React.createElement("path", {
    d: "M79.5,81.458h-57V41.27L51,16.729L79.5,41.27V81.458z M25.5,78.458h51V42.646L51,20.688L25.5,42.646V78.458z"
  }));
};

var Nav = function Nav(props) {
  return React.createElement("nav", {
    className: "global"
  }, React.createElement("div", {
    className: "header-left bt-icon--house"
  }, React.createElement("a", {
    href: props.homeLink
  }, React.createElement(Home, null))), React.createElement("b", {
    className: "bt-icon bt-icon--politico"
  }), React.createElement("span", {
    className: "project-name"
  }, "/ ", React.createElement("a", {
    href: props.appLink
  }, props.appName)), React.createElement("div", {
    className: "float-right"
  }, props.children));
};

Nav.defaultProps = {
  appLink: './',
  appName: 'New project',
  homeLink: './../'
};

var Footer = function Footer(props) {
  return React.createElement("footer", null, React.createElement("p", {
    className: "text-center"
  }, " Brought to you by the POLITICO Interactive News Team"));
};



var index = /*#__PURE__*/Object.freeze({
  Header: Header,
  InstructionsList: InstructionsList,
  Button: Button,
  Checkbox: Checkbox,
  ImageUpload: ImageUpload,
  RadioButton: RadioButton,
  RadioGroup: RadioGroup,
  PillFilter: PillFilter,
  TextInput: TextInput,
  Select: Select,
  Typeahead: Typeahead$1,
  Nav: Nav,
  Footer: Footer
});

/**
 * Create a color values object with hex value and two funcs
 * to return RGBA values as either a string or an array of values.
 *
 * @param  {Str} hex Hexadecimal color value.
 * @return {Object}     Color value.
 */

function createColorValues(hex) {
  return {
    hex: hex,
    rgba: function rgba(alpha) {
      var a = alpha || 255;
      var rgb = hexRgb(hex);
      return "rgba(".concat(rgb.red, ", ").concat(rgb.green, ", ").concat(rgb.blue, ", ").concat(a, ")");
    },
    rgbaArray: function rgbaArray(alpha) {
      var a = alpha || 255;
      var rgb = hexRgb(hex);
      return [rgb.red, rgb.green, rgb.blue, a];
    }
  };
}
/**
 * Convert kebob-case SCSS variable to camel-case prop.
 * @param  {Str} s
 * @return {Str}
 */


function camelCaser(s) {
  return s.replace('$', '').replace(/-\w/g, function (m) {
    return m[1].toUpperCase();
  });
}
/**
 * Separate variables into array of camel-cased props.
 * @param  {[type]} variables [description]
 * @return {[type]}           [description]
 */


function separateVariables(variables) {
  return variables.trim().split(' ').map(function (v) {
    return camelCaser(v);
  });
}

function createColorAliasObjects(row) {
  var values = createColorValues(row.hex);
  var variables = separateVariables(row.variables);
  var objects = variables.map(function (v) {
    var colorObject = {};
    colorObject[v] = values;
    return colorObject;
  });
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objects)));
}

function createColorScheme(rows) {
  var aliasObjects = rows.map(function (row) {
    return createColorAliasObjects(row);
  });
  var aliasScheme = Object.assign.apply(Object, [{}].concat(_toConsumableArray(aliasObjects)));
  return Object.assign({}, aliasScheme, {
    all: rows.map(function (row) {
      return Object.assign({
        variables: row.variables.trim()
      }, createColorValues(row.hex));
    })
  });
}

var brand = [{
  hex: "#DC0228",
  variables: " $politico-red"
}, {
  hex: "#AC0825",
  variables: " $politico-dark-red"
}, {
  hex: "#F4F5F7",
  variables: " $politico-light-background"
}, {
  hex: "#E5E7EB",
  variables: " $politico-line"
}, {
  hex: "#B1B4BD",
  variables: " $politico-light-gray-type"
}, {
  hex: "#6E7381",
  variables: " $politico-dark-gray-type"
}, {
  hex: "#282D40",
  variables: " $politico-black"
}, {
  hex: "#121522",
  variables: " $politico-magazine"
}, {
  hex: "#007BC7",
  variables: " $link $politico-blue"
}, {
  hex: "#0E9AF3",
  variables: " $link-hover"
}, {
  hex: "#F86F00",
  variables: " $politico-orange"
}, {
  hex: "#3B5998",
  variables: " $facebook"
}, {
  hex: "#00ACED",
  variables: " $twitter"
}, {
  hex: "#121522",
  variables: " $mail $politico-magazine"
}];

var base = [{
  hex: "#FFF1DF",
  variables: " $annotation"
}, {
  hex: "#FFF9F1",
  variables: " $annotation-hover"
}, {
  hex: "#FFFAB7",
  variables: " $highlighter-yellow"
}, {
  hex: "#FFFFFF",
  variables: " $white"
}, {
  hex: "#000000",
  variables: " $black"
}, {
  hex: "#666666",
  variables: " $satan"
}, {
  hex: "#B1B4BD",
  variables: " $gray $politico-light-type-gray"
}, {
  hex: "#E5E7EB",
  variables: " $light-gray $politico-line $button"
}, {
  hex: "#312B41",
  variables: " $midnight"
}, {
  hex: "#75CCCA",
  variables: " $positive $yes"
}, {
  hex: "#EF8B67",
  variables: " $negative $no"
}];

var party = [{
  hex: "#3571C0",
  variables: " $dem"
}, {
  hex: "#FE5C40",
  variables: " $gop"
}];

var gop = [{
  hex: "#FE5C40",
  variables: " $gop $gop0"
}, {
  hex: "#B8948E",
  variables: " $gop1"
}, {
  hex: "#FBA723",
  variables: " $gop2"
}, {
  hex: "#FFB2CB",
  variables: " $gop3 $gop-light"
}, {
  hex: "#B41E61",
  variables: " $gop4"
}, {
  hex: "#433E76",
  variables: " $gop5"
}, {
  hex: "#AC5141",
  variables: " $gop6"
}, {
  hex: "#7957B4",
  variables: " $gop7"
}, {
  hex: "#FEE0C2",
  variables: " $gop8"
}, {
  hex: "#FD87F7",
  variables: " $gop9"
}];

var dem = [{
  hex: "#3571C0",
  variables: " $dem $dem0"
}, {
  hex: "#D9C3A5",
  variables: " $dem1"
}, {
  hex: "#8998AB",
  variables: " $dem2"
}, {
  hex: "#9AD3FC",
  variables: " $dem3 $dem-light"
}, {
  hex: "#C3F4CD",
  variables: " $dem4"
}, {
  hex: "#5DAED4",
  variables: " $dem5"
}, {
  hex: "#8ABDC0",
  variables: " $dem6"
}, {
  hex: "#775180",
  variables: " $dem7"
}, {
  hex: "#FFD682",
  variables: " $dem8"
}, {
  hex: "#948064",
  variables: " $dem9"
}];

var demgop = [{
  hex: "#3571C0",
  variables: " $dem $demgop0"
}, {
  hex: "#7392d0",
  variables: " $demgop1"
}, {
  hex: "#A4B5E0",
  variables: " $demgop2"
}, {
  hex: "#D2D9F0",
  variables: " $demgop3"
}, {
  hex: "#FFFFFF",
  variables: " $white $demgop"
}, {
  hex: "#FFD8CD",
  variables: " $gopdem3"
}, {
  hex: "#FFB19C",
  variables: " $gopdem2"
}, {
  hex: "#FF896D",
  variables: " $gopdem1"
}, {
  hex: "#FE5C40",
  variables: " $gop $gopdem0"
}];

var four = [{
  hex: "#4FC1E7",
  variables: " $q4-aqua"
}, {
  hex: "#6BAE80",
  variables: " $q4-green"
}, {
  hex: "#3D284D",
  variables: " $q4-gray"
}, {
  hex: "#694ED6",
  variables: " $q7-purple"
}];

var six = [{
  hex: "#0D3C73",
  variables: " $q6-teal"
}, {
  hex: "#329CAC",
  variables: " $q6-darkblue"
}, {
  hex: "#47BEF8",
  variables: " $q6-aqua"
}, {
  hex: "#F95100",
  variables: " $q6-orange"
}, {
  hex: "#F7A12D",
  variables: " $q6-gold"
}, {
  hex: "#AB9F8F",
  variables: " $q6-dirt"
}];

var pairs = [{
  hex: "#3D284D",
  variables: " $qp-gray"
}, {
  hex: "#8E8E98",
  variables: " $qp-lightgray"
}, {
  hex: "#7C7CE0",
  variables: " $qp-purple"
}, {
  hex: "#9D9DEA",
  variables: " $qp-lightpurple"
}, {
  hex: "#9B9B52",
  variables: " $qp-green"
}, {
  hex: "#C6C677",
  variables: " $qp-lightgreen"
}];

var maps = [{
  hex: "#3D284D",
  variables: " $q7-gray"
}, {
  hex: "#2F6CBA",
  variables: " $q7-blue"
}, {
  hex: "#88C2B2",
  variables: " $q7-green"
}, {
  hex: "#FFCAB3",
  variables: " $q7-peach"
}, {
  hex: "#DFA486",
  variables: " $q7-camel"
}, {
  hex: "#BD3232",
  variables: " $q7-red"
}, {
  hex: "#EBEB35",
  variables: " $q7-yellow"
}];

var moneyFoam = [{
  hex: "#46825A",
  variables: " $moneyfoam1"
}, {
  hex: "#5D926D",
  variables: " $moneyfoam2"
}, {
  hex: "#73A281",
  variables: " $moneyfoam3"
}, {
  hex: "#88B395",
  variables: " $moneyfoam4"
}, {
  hex: "#9FC4AA",
  variables: " $moneyfoam5"
}, {
  hex: "#B6D4BF",
  variables: " $moneyfoam6"
}, {
  hex: "#CCE6D5",
  variables: " $moneyfoam7"
}, {
  hex: "#E4F7EB",
  variables: " $moneyfoam8"
}];

var redYellow = [{
  hex: "#E53516",
  variables: " $redyellow1"
}, {
  hex: "#EC5624",
  variables: " $redyellow2"
}, {
  hex: "#F17233",
  variables: " $redyellow3"
}, {
  hex: "#F68A41",
  variables: " $redyellow4"
}, {
  hex: "#FAA050",
  variables: " $redyellow5"
}, {
  hex: "#FDB75F",
  variables: " $redyellow6"
}, {
  hex: "#FECD6F",
  variables: " $redyellow7"
}, {
  hex: "#FFE37E",
  variables: " $redyellow8"
}];

var sangriaPeach = [{
  hex: "#7A0001",
  variables: " $sangriapeach1"
}, {
  hex: "#972516",
  variables: " $sangriapeach2"
}, {
  hex: "#B2422C",
  variables: " $sangriapeach3"
}, {
  hex: "#CC5F44",
  variables: " $sangriapeach4"
}, {
  hex: "#E37E61",
  variables: " $sangriapeach5"
}, {
  hex: "#F59E82",
  variables: " $sangriapeach6"
}, {
  hex: "#FFC1AA",
  variables: " $sangriapeach7"
}, {
  hex: "#FFE5D8",
  variables: " $sangriapeach8"
}];

var mossSaphire = [{
  hex: "#959632",
  variables: " $moss1"
}, {
  hex: "#A8A74E",
  variables: " $moss2"
}, {
  hex: "#BCB968",
  variables: " $moss3"
}, {
  hex: "#CFCB83",
  variables: " $moss4"
}, {
  hex: "#E3DD9E",
  variables: " $moss5"
}, {
  hex: "#F6F0B9",
  variables: " $mosssapphire"
}, {
  hex: "#D6D2BD",
  variables: " $sapphire5"
}, {
  hex: "#B4B5C0",
  variables: " $sapphire4"
}, {
  hex: "#909AC2",
  variables: " $sapphire3"
}, {
  hex: "#667FC3",
  variables: " $sapphire2"
}, {
  hex: "#2166C3",
  variables: " $sapphire1"
}];

var tealDirt = [{
  hex: "#196B66",
  variables: " $teal1"
}, {
  hex: "#218C86",
  variables: " $teal2"
}, {
  hex: "#26B1AA",
  variables: " $teal3"
}, {
  hex: "#8CD1CE",
  variables: " $teal4"
}, {
  hex: "#BCDEDD",
  variables: " $teal5"
}, {
  hex: "#E9F0EC",
  variables: " $dirtteal"
}, {
  hex: "#D2D3C4",
  variables: " $dirt5"
}, {
  hex: "#BBA88F",
  variables: " $dirt4"
}, {
  hex: "#9E7A4C",
  variables: " $dirt3"
}, {
  hex: "#784C11",
  variables: " $dirt2"
}, {
  hex: "#5D3B0F",
  variables: " $dirt1"
}];

var index$1 = {
  brand: createColorScheme(brand),
  base: createColorScheme(base),
  elections: {
    party: createColorScheme(party),
    gop: createColorScheme(gop),
    dem: createColorScheme(dem),
    demgop: createColorScheme(demgop)
  },
  qualitative: {
    four: createColorScheme(four),
    six: createColorScheme(six),
    pairs: createColorScheme(pairs),
    maps: createColorScheme(maps)
  },
  sequential: {
    moneyFoam: createColorScheme(moneyFoam),
    redYellow: createColorScheme(redYellow),
    sangriaPeach: createColorScheme(sangriaPeach)
  },
  diverging: {
    mossSapphire: createColorScheme(mossSaphire),
    tealDirt: createColorScheme(tealDirt)
  }
};

export { index as Sketch, index$1 as Colors };
