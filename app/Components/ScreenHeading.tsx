import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ScreenHeadingProps {
    title?: string;
    iconColor?: string;
    iconSize?: number;
    style?: any;
    handleOnPress?: () => void;
}

export default function ScreenHeading({ title, iconSize, iconColor, style, handleOnPress }: ScreenHeadingProps) {

    return (
        <View>
            <TouchableOpacity
                style={style || {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center'
                }}
                onPress={handleOnPress}
            >
                <Ionicons name="arrow-back" size={iconSize || 30} color={iconColor || 'black'} />
                {title && <Text
                    style={{
                        fontSize: 25,
                        fontFamily: 'outfit-medium',
                    }}
                >{title}</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});