import React from 'react';
import {useHeaderHeight} from '@react-navigation/stack';

function withHeader(WrappedComponent) {
  function HOC({...props}) {
    const header = useHeaderHeight();
    return <WrappedComponent header={header} {...props} />;
  }

  return HOC;
}
export default withHeader;
