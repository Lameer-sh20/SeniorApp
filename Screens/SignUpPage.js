import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import SignUnHeader from '../Components/SignUpHeader';

function SignUpPage() {
  return (
    <View>
      <SignUnHeader> </SignUnHeader>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <Text styles={styles.text}>click arrow to next page</Text>
          {/* <TextInput
            placeholder="Name"
            //value={ }
            //onChangeText={text=>}
            style={styles.input}
          />

          <TextInput
            placeholder="Phone Number"
            //value={ }
            //onChangeText={text=>}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            //value={ }
            //onChangeText={text=>}
            style={styles.input}
            secureTextEntry
          /> */}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    alignself: 'center',
    justifyContent: 'center',
  },
});
export default SignUpPage;
