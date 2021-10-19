import React, { useContext } from 'react';
import { Button, Text } from 'react-native'

import authContext from '../../contexts/auth';

export function Home() {
    const { signOut } = useContext(authContext)

    function handleSignOut() {
        signOut();
    }

    return (
        <>
            <Text>HOME</Text>
            <Button title="signOut" onPress={handleSignOut} />
        </>
    )
}

