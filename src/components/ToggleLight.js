import React from 'react';
import Toggle from 'react-native-toggle-element';
import Icon from 'some-icon-library'; 

const ToggleLight = ({ value, onChange }) => {
  return (
    <Toggle
      value={value}
      onPress={onChange}
      thumbActiveComponent={
        <Icon name="sun" width="40" height="40" fill={"#3BD2B5"} />
      }
      thumbInActiveComponent={
        <Icon name="night" width="40" height="40" fill={"#03452C"} />
      }
      trackBar={{
        activeBackgroundColor: "#9ee3fb",
        inActiveBackgroundColor: "#3c4145",
        borderActiveColor: "#86c3d7",
        borderInActiveColor: "#1c1c1c",
        borderWidth: 5,
        width: 100,
      }}
    />
  );
};

export default ToggleLight;