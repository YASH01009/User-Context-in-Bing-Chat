import React from 'react';

import '../styles/styles.css';

function DisplayBoxRow(props) {
  const { displayBoxRowFields, displayStyle } = props;

  return (
    <div class={`displayBoxRow ${displayStyle}`}>
      {displayBoxRowFields.map((rowField) => {
        return (
          rowField
        );
      })}
    </div>
  );
}

export default DisplayBoxRow;