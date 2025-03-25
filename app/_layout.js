import { Provider } from 'react-redux';
import store from '../src/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router, Slot } from 'expo-router';

export default Layout = () => {
    return (
        <Provider store={store}>
            <Slot />
        </Provider>
    );
};