import { DrawerActions, useNavigation } from '@react-navigation/native';

import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { NativeModules, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { dimensions, colors } from '../styles/theme';
import firebase from 'firebase'
import { ContextUser } from '../context/ContentUser';
import { getLettersName } from '../utils/Utils';



export const SideMenu = ({ isAdmin = false }) => {
  const { user } = useContext(ContextUser);

  const navigation = useNavigation();

  const setLayout = async () => {
    
  };

  useEffect(() => {
    setLayout();
  }, []);

  const navigateToScreen = (route, params) => async () => {
    try {
      if (route === 'Login' && Platform.OS === 'ios') {
        navigation.dispatch(DrawerActions.closeDrawer());
        firebase.auth().signOut().then(function() {
            navigation.navigate('Login')
          }).catch(function(error) {
            console.log('Error')
          });
      
      }else { 
        navigation.navigate(route, params);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderHeader = () => {
    console.log(user,'ddd')
    return (
      <View style={styles.header}>
        <View style={styles.userInfosHolder}>
          <Avatar rounded title={getLettersName(user.fullName)} size={'large'}  />
          <View style={styles.userInfos}>
            <Text type="h1White" style={styles.username}></Text>
            <Text type="h5White" style={styles.company}>
              {user.email}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      {/* <AWSpinner loading={loading}></AWSpinner> */}
      <View style={styles.sideMenu}>
        {/* <LinearGradient
          style={styles.gradient}
          colors={[colors.blueDark, colors.blueDark, colors.blueMid, colors.blueLight]}
        /> */}
        <View style={styles.contentMenu}>
          <View>
            {renderHeader()}
              <TouchableOpacity style={styles.menu} onPress={navigateToScreen('Home')}>
                
                <Text style={styles.menuText}>{SideMenuStrings.home}</Text>
              </TouchableOpacity>
            
           <TouchableOpacity
              style={styles.menu}
              onPress={navigateToScreen('ChangePassword', { withCurrent: true, backPath: 'Loading' })}
            >
              <Text style={styles.menuText}>{SideMenuStrings.changePassword}</Text>
            </TouchableOpacity> 
            
          </View>

          <TouchableOpacity style={styles.menu} onPress={navigateToScreen('Login')}>
            
            <Text style={styles.menuText}>{SideMenuStrings.logout}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <TouchableOpacity
        style={styles.outSideMenu}
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
      ></TouchableOpacity> */}
    </View>
  );
};

SideMenu.propTypes = {
  navigation: PropTypes.object,
  isAdmin: PropTypes.any,
};

const SideMenuStrings = {
  home: 'Home',
  changePicture: 'Change Picture',
  changePassword: 'Change Password',
  logout: 'Logout',
};

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    backgroundColor: colors.green,
  },
  sideMenu: {
    width: 230,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  outSideMenu: {
    width: dimensions.fullWidth - 230,
    backgroundColor: 'transparent',
  },
  contentMenu: {
    flex: 1,
    color: colors.white,
    justifyContent: 'space-between',
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  sideMenuTitle: {
    marginLeft: 20,
    marginBottom: 30,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: 'rgba(255,255,255,0.3)',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  menuText: {
    marginLeft: 20,
    fontSize: 14,
    color: colors.white,
  },
  header: {
    marginTop: 60,
    marginBottom: 20,
  },
  userInfosHolder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userInfos: {
    height: 50,
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 28,
  },
  username: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: colors.white,
  },
  company: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
  },
});
