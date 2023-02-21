/* eslint-disable react-hooks/exhaustive-deps */
import {NextIconGrey} from '../assets/icons';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  Easing,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {scale} from '../utils/responsive';
import {FONT_FAMILY, FONT_SIZE} from '../constants/appFonts';
import {
  COLOR_BACKGROUND,
  COLOR_TEXT_PRIMARY,
  COLOR_WHITE,
} from '../constants/colors';
import {ITEM_SPACE} from '../constants/size';
import TransitionView from './TransitionView';

const DropDownList = ({
  visible,
  items = [],
  containerStyle,
  style,
  defaultValue,
  placeholder,
  onPress,
  onChangeItem,
}) => {
  const element = items?.find(item => item?.value === defaultValue);
  const [selectedItem, setSelectedItem] = useState(element?.value);
  const [active, setActive] = useState(false);
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    onAnimationStart();
    setActive(visible);
  }, [visible, onAnimationStart]);

  useEffect(() => {
    const itemSelected = items?.find(item => item.value === defaultValue);
    setSelectedItem(itemSelected?.label);
  }, [defaultValue]);

  const onAnimationStart = () => {
    Animated.timing(spinValue, {
      toValue: active ? 0 : 1,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const onPressItem = item => {
    setSelectedItem(item.label);
    onChangeItem(item);
  };

  const renderItem = ({item, index}) => {
    const styleItemSelected = {
      backgroundColor:
        selectedItem === item?.label ? COLOR_TEXT_PRIMARY : COLOR_BACKGROUND,
    };
    const styleTextItemSelected = {
      color: selectedItem === item?.label ? COLOR_WHITE : COLOR_TEXT_PRIMARY,
    };
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        key={index + ''}
        onPress={() => onPressItem(item)}
        style={[styles.dropDownItem, style, styleItemSelected]}>
        <Text style={[styles.titleTxt, styleTextItemSelected]}>
          {item?.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '-90deg'],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.dropDownList, style]}>
          <Text style={styles.titleTxt}>
            {defaultValue ? selectedItem : placeholder}
          </Text>
          <Animated.View style={{transform: [{rotate: spin}]}}>
            <NextIconGrey height={scale(22)} width={scale(22)} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      {active ? (
        <TransitionView style={styles.dropDownContainer} animation="fadeIn">
          <ScrollView
            style={styles.listItem}
            showsVerticalScrollIndicator={false}>
            {items.map((item, index) => renderItem({item, index}))}
          </ScrollView>
        </TransitionView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: Platform.OS === 'ios' ? 1000 : undefined,
  },
  dropDownList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: ITEM_SPACE.NORMAL,
    borderBottomColor: COLOR_TEXT_PRIMARY,
    borderBottomWidth: 2,
  },
  titleTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  dropDownContainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: COLOR_WHITE,
    top: scale(40),
    width: '100%',
    zIndex: 1000,
    borderRadius: scale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropDownItem: {
    paddingVertical: ITEM_SPACE.MEDIUM,
    paddingHorizontal: ITEM_SPACE.LARGE,
    backgroundColor: COLOR_BACKGROUND,
  },
  listItem: {
    maxHeight: scale(130),
  },
});

export default React.memo(DropDownList);
