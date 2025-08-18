import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { useAuth } from '../../hooks/useAuth';

export function ButtonLogout() {
    const { logout } = useAuth();

    const handleLogout = async () => {
    await logout();
    };

return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
}