import React from 'react';
import {Input} from 'reactstrap';

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return 'async-validating';
  }
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const customInput = props => {
  const {input, meta, placeholder, defaultValue, id, checked} = props;
  return (
    <>
    {
      props.type === 'number' ?
        <Input {...input} type={props.type} value={defaultValue} placeholder={placeholder} autoFocus={props.autoFocus}
               className='customInput'/>
        :
        defaultValue ?
        <Input {...input} type={props.type} id={id} value={defaultValue} placeholder={placeholder} className='inp'
                 autoFocus={props.autoFocus} checked={checked}/>:
          <Input {...input} type={props.type} id={id} placeholder={placeholder} className='inp'
                  checked={checked} autoFocus={props.autoFocus}/>
    }
    {
      props.type === 'checkbox' && props.id ?
        <label htmlFor={id}>Is Verified</label> : ''
    }
    {meta.error &&
    meta.touched &&
    !meta.active && (
      <div className='feedback-text error-text input-group'>
        {meta.error}
      </div>
    )}

    </>
  );
};
