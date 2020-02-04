import React from 'react';
import cx from 'classnames';
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
        <Input {...input} type={props.type} id={id} value={defaultValue} placeholder={placeholder}
                 autoFocus={props.autoFocus} checked={checked}/>:
          <Input {...input} type={props.type} id={id} placeholder={placeholder}
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

const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files[0]);

export const FileInput = ({
                     input: {
                       value: omitValue,
                       onChange,
                       onBlur,
                       ...inputProps,
                     },
                     meta: omitMeta,
                     ...props,
                   }) =>
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />;

export const TextAreaInput = props => {
  const {input, type, meta, placeholder} = props;
  return (
    <div
      className={cx(
        'custom-input-container',
        {'flex-row-reverse': type === 'checkbox'},
        {dirty: meta.dirty},
        getValidityClassName(meta)
      )}
    >
      <textarea {...input} type={props.type} id={props.id} value={props.defaultValue} placeholder={placeholder} autoFocus={props.autoFocus}
                className="form-control" rows={props.rows}/>
      {meta.error &&
      meta.touched &&
      !meta.active && (
        <div className='feedback-text error-text'>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export const responseError = props => {
  if (props.error) {
    return (
      <div className='feedback-text error-text'>
        {props.error}
      </div>
    )
  } else {
    return (<React.Fragment/>);
  }
};

export const customMultiSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input} multiple value={props.input.value ? props.input.value: [] } id={props.id} className="form-control">
        {
          props.defaultValue.length > 0 ?
            props.defaultValue.map(val => {
              return (
                <option key={val.pk} value={val.pk}>{val.name}</option>
              );
            }) : ''
        }
      </select>
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input} id={props.id} className="form-control" value={props.val? props.val: props.def}>
        {
          props.defaultValue.length > 0 ?
            props.defaultValue.map((val, index) => {
              return (
                <option key={index} value={val}>{val.toUpperCase()}</option>
              );
            }) : ''
        }
      </select>
    </div>
  );
};


export const customQuestionSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input} id={props.id} className="form-control" value={props.def}>
        <option  value=''>{props.input.name.charAt(0).toUpperCase() + props.input.name.slice(1)}</option>
        {
            props.defaultValue.map((val, index) => {
              return (
                <option key={index} value={val.id}>{val.name.charAt(0).toUpperCase() + val.name.slice(1)}</option>
              );
            })
        }
      </select>
    </div>
  );
};
