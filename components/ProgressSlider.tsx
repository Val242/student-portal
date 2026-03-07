import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { View } from 'react-native';

export default function ProgressSlider() {
  const [progress, setProgress] = useState(0);

  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={progress}
        onValueChange={setProgress}
        style={{
           height: 20,
           backgroundColor: "#a4f5a6",
           borderRadius: 20,
           marginTop: 10
        }}
      />
    </View>
  );
}