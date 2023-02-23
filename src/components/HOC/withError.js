import ErrorBoundary from 'components/ErrorBoundary';
import React from 'react';
import {View} from 'react-native';

function withError(WrappedComponent) {
  function HOC({isError, ...props}) {
    return (
      <View style={{flex: 1}}>
        <WrappedComponent {...props} />
        {isError && <ErrorBoundary />}
      </View>
    );
  }

  return HOC;
}
export default withError;
