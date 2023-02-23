import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {getLoadingSelector} from 'selectors/loading';
import ModalLoading from '../ModalLoading';

function withLoading(WrappedComponent, actionTypes) {
  function HOC({isLoading, ...props}) {
    return (
      <View style={{flex: 1}}>
        <WrappedComponent {...props} />
        <ModalLoading loading={isLoading} />
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionTypes),
  });
  return connect(mapStateToProps, null)(HOC);
}
export default withLoading;
