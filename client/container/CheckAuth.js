import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class CheckAuth extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount () {
      const token = sessionStorage.getItem('token');

      if (!token) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate () {
      const token = sessionStorage.getItem('token');

      if (!token) {
        this.context.router.push('/login');
      }
    }

    render () {

      return <ComposedComponent {...this.props} />;
    }
  }

  return CheckAuth;
}

