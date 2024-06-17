import {View, StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function LogoBT(){
    return(
        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require('../midia/logo4BT.png')}
                style={{width:'100%'}}
                resizeMode="contain"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerLogo:{
        flex: 1,
        backgroundColor: '#3388aa',
        alignItems:'center',
        justifyContent: 'center'
    }
});