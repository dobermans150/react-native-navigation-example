import React, { FC, useContext } from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen: FC = () => {

  const { signIn, logOut, authState: { isLoggeedIn } } = useContext(AuthContext);

  return (
    <View style={styles.globaMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {
        !isLoggeedIn
          ? <Button title="Sign In" onPress={signIn} />
          : <Button title="Sign Out" onPress={logOut} />
      }
    </View>
  );
};

