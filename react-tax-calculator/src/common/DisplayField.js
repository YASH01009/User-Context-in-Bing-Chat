import React from 'react';

import '../styles/styles.css';

function DisplayField(props) {
  const { displayFieldValue, displayFieldOnChange, displayFieldClass, displayStyle } = props;

  if (displayFieldOnChange === undefined)
    return <div className={`displayFieldText ${displayFieldClass} ${displayStyle}`}> {displayFieldValue} </div>;
  else
    return <input className={`displayFieldText ${displayFieldClass} ${displayStyle}`} type="number" value={displayFieldValue} onChange={displayFieldOnChange} />;
}

export default DisplayField;
