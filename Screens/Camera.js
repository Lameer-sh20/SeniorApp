// import React in our code
import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';

// import CameraKitCameraScreen
import colors from '../assets/colors/Colors';

class CameraPage extends Component {
  state = {
    barcodes: [],
  };

  barcodeRecognized = ({barcodes}) => {
    barcodes.forEach(barcode => console.log(barcode.data));
    this.setState({barcodes});
  };

  renderBarcodes = () => (
    <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  );

  renderBarcode = ({data}) =>
    Alert.alert(
      'Scanned Data',
      data,
      [
        {
          text: 'Okay',
          onPress: () => console.log('Okay Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.scanner}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
          {this.renderBarcodes}
        </RNCamera>
        {/* <RNCamera
          style={{flex: 1, alignItems: 'center'}}
          ref={ref => {
            this.camera = ref;
          }}
        /> */}
      </View>
    );
  }
}

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
