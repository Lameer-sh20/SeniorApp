import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

function NormalPage() {
  return (
    <MenuProvider style={styles.container}>
      <View>
        <Menu>
          <MenuTrigger style={styles.button} text="Open menu" />
          <MenuOptions>
            <MenuOption
              onSelect={() => alert(` You clicked on Save`)}
              text="Save"
            />
            <MenuOption onSelect={() => alert(`You Clicked on Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
    textalign: 'center',
    display: 'flex',
    fontsize: 16,
    margin: 4,
  },
});
export default NormalPage;
