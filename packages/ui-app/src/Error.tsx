// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { FormErrors } from './types';

import React from 'react';

type Props = {
  props?: FormErrors
};

export default class Error extends React.PureComponent<Props> {
  render () {
    const { props } = this.props;

    return (
      <div props={props}></div>
    );
  }
}