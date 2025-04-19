import React from 'react';
import { View, Text } from 'react-native';
import UploadImageSection from '../UploadImage/UploadImageSection';
import IssueSection from '../Issue/IssueSection';
const OthersComplaint = () => {
  return (
    <View >
        <UploadImageSection/>
        <IssueSection/>
    </View>
  );
};

export default OthersComplaint;
