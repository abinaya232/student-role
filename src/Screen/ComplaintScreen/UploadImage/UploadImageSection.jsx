import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './UploadImageStyles';
// import Icon from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CameraIcon from '../../../assets/CameraIcon';
import ChooseFile from '../../../assets/ChooseFile';
const UploadImageSection = () => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
        return;
      }
      const uri = response.assets?.[0]?.uri;
      setImageUri(uri);
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
        return;
      }
      const uri = response.assets?.[0]?.uri;
      setImageUri(uri);
    });
  };

  const handleUpload = () => {
    if (!imageUri) {
      Alert.alert('No Image', 'Please select or take a picture first.');
      return;
    }
    Alert.alert('Upload', 'Image uploaded successfully!');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.label}>Upload Image</Text>

      <View style={styles.uploadBox}>
        {/* Top row buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.outlinedButton} onPress={openCamera}>
            <View style={styles.iconWithText}>
              <Text style={styles.buttonText}> Take Picture</Text>
<CameraIcon/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.outlinedButton} onPress={openGallery}>
            <View style={styles.iconWithText}>
              <Text style={styles.buttonText}> Choose File</Text>
              <ChooseFile/>
            </View>
          </TouchableOpacity>
        </View>

        {/* Preview Image */}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 6,
              marginBottom: 12,
              marginTop: 10,
            }}
            resizeMode="cover"
          />
        )}

        {/* Upload Button */}
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <View style={styles.iconWithText}>
            <Text style={styles.uploadText}> Upload</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImageSection;