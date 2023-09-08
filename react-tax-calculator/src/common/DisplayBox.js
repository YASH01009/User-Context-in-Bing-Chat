import React from 'react';

import '../styles/styles.css';
import DisplayBoxHeader from './DisplayBoxHeader';
import DisplayBoxRow from './DisplayBoxRow';

function DisplayBox(props) {
  const { displayBoxHeaderFields, displayBoxRowFields, displayStyle, isNestedParent } = props;

  const [isBodyCollapsed, setIsBodyCollapsed] = React.useState(false); 

  return (
    <div className='displayBox'>
      <DisplayBoxHeader 
        displayBoxHeaderFields={displayBoxHeaderFields}
        displayStyle={displayStyle}
        isBodyCollapsed={isBodyCollapsed}
        onIsBodyCollapsedChange={() => setIsBodyCollapsed(!isBodyCollapsed)}
      />
      <div class='displayBoxBody'>
        { !isBodyCollapsed && displayBoxRowFields.map((rowFields) => <DisplayBoxRow displayBoxRowFields={rowFields} displayStyle={displayStyle} />)} 
      </div>
    </div>
  );
}

export default DisplayBox;
