// Copyright 2017-2018 @polkadot/app-extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Props } from '@polkadot/ui-app/Params/types';

import React from 'react';

import extrinsics from '@polkadot/extrinsics';

import Extrinsic from './Extrinsic';

const defaultValue = extrinsics.staking.public.transfer;

export default function Call ({ className, isDisabled, isError, label, onChange, style, withLabel }: Props) {
  return (
    <Extrinsic
      className={className}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isError={isError}
      isPrivate={false}
      label={label}
      onChange={onChange}
      style={style}
      withLabel={withLabel}
    />
  );
}
