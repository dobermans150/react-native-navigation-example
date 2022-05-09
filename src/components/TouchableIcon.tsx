import React, { FC, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

import { colors } from '../theme/appTheme';

interface Props {
    iconName: string;

}

export const TouchableIcon: FC<Props> = ({ iconName }) => {

    const { changeFavIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => changeFavIcon(iconName)} >
            <Text>
                <Icon
                    name={iconName}
                    size={30}
                    color={colors.primary}
                />;
            </Text>
        </TouchableOpacity>
    );
};
