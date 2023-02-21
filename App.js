/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ButtonCustom from './src/components/ButtonCustom';
import InputCustom from './src/components/InputCustom';
import ModalizeCustom from './src/components/ModalizeCustom';
import {
  account_black,
  birthday,
  dropIcon,
  location,
  mail,
} from './src/assets/images';
import InputPhoneNumber from './src/components/InputPhoneNumber';
import CodeFieldCustom from './src/components/CodeFieldCustom';
import DropDownList from './src/components/DropDownList';

const data = [
  {key: '1', label: 'Female', value: 'Female'},
  {key: '2', label: 'Male', value: 'Male'},
  {key: '3', label: 'Other', value: 'Other'},
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isVisible, setVisible] = useState(false);
  const [item, setItem] = useState({});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const modalRef = useRef();
  const modal1Ref = useRef();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{margin: 16, flex: 1}}>
          <DropDownList
            label={'Gender'}
            placeholder={'Gender'}
            items={data}
            onPress={() => setVisible(!isVisible)}
            visible={isVisible}
            // icon={birthday}
            onChangeItem={item => {
              setVisible(false);
              setItem(item);
            }}
            defaultValue={item?.value}
          />
          <ButtonCustom
            title={'APPLY FILTERS'}
            isUppercase
            style={{marginTop: 10}}
          />
          <ButtonCustom
            title={'NOTIFY ME'}
            colorText="#2E2E2E"
            backgroundColor={'#FFFFFF'}
            style={{marginTop: 10}}
            onPress={() => modalRef.current?.onOpen?.()}
          />
          <ButtonCustom
            title={'BUY NOW'}
            onPress={() => modal1Ref.current?.onOpen?.()}
            isUppercase
            width={175}
            colorText="#2E2E2E"
            backgroundColor={'#F9E076'}
            fontWeight="bold"
            style={{marginTop: 10}}
          />
          <ButtonCustom
            title={'Move to Wishlist'}
            width={160}
            outline
            style={{marginTop: 10}}
          />

          <ButtonCustom
            width={64}
            backgroundColor="#F7F8F9"
            style={{marginTop: 10}}>
            <Text>A</Text>
          </ButtonCustom>

          <ButtonCustom
            outline
            title={'XS'}
            width={61}
            height={40}
            colorText="#2E2E2E"
            backgroundColor="#F7F8F9"
            borderRadius={4}
            style={{marginTop: 10, borderColor: '#2E2E2E'}}
          />

          <InputCustom
            outline={true}
            label={'Email'}
            title="Email"
            leftIcon={account_black}
            autoCapitalize="none"
            value={'2321'}
            maxLength={100}
            rightIcon={mail}
            errorMessage="You have entered an invalid email address"
          />

          <InputCustom
            label={'Email'}
            title="Email"
            autoCapitalize="none"
            value={'2321'}
            rightIcon={mail}
            errorMessage="You have entered an invalid email address"
          />

          <InputPhoneNumber
            title={'Nhập số điện thoại...'}
            errorMessage="Số điện thoại không đúng. Vui lòng nhập lại."
            value={'02323233'}
            isError={true}
            isAreaCode
          />

          <CodeFieldCustom
            label={'One-Time Password'}
            value={'1234'}
            // onChangeText={onChange}
            cellCount={4}
            error={false}
            // editable={differenceInTime > FIFTEEN_MINUTES}
            message={'Incorrect OTP. You have XX times left'}
            // blurColor={COLOR_WHITE}
          />
        </View>
      </ScrollView>

      <ModalizeCustom
        style={styles.modal1Container}
        ref={modal1Ref}
        isHideButton={true}>
        <Text>Select Size</Text>
        <View style={styles.sizeContainer}>
          {['XS', 'S', 'M', 'L'].map((item, index) => (
            <ButtonCustom
              style={{marginRight: 12}}
              key={index + ''}
              outline
              title={item}
              width={61}
              height={40}
              colorText="#2E2E2E"
              backgroundColor="#F7F8F9"
              borderRadius={4}
            />
          ))}
        </View>
      </ModalizeCustom>

      <ModalizeCustom
        ref={modalRef}
        title="Out of Stock"
        subTitle={
          'An item from you cart is out of stock. Remove the item to proceed with checkout'
        }
        isSingleButton
        buttonSingleText={'OKAY'}
        onCallBackClose={() => {
          alert('123');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  modal1Container: {
    paddingVertical: 16,
    alignItems: 'flex-start',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 26,
  },
});

export default App;
