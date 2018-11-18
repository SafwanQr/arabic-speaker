import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { MonoText } from '../components/StyledText';

class DeleteAndCancel extends Component {
    constructor (props) {
        super();
      }
    
    render() {
        return (
            <View  style={styles.buttonsWrapper} >
            <TouchableOpacity>
              <MonoText style={styles.button}  onPress={this.props.onCancelClicked}>
              الغاء
                </MonoText>
            </TouchableOpacity>
            <MonoText style={styles.verticalDivider}> </MonoText>
            <TouchableOpacity  onPress={this.props.onDeleteClicked}>
            <MonoText style={styles.button} >
              حذف
                </MonoText>
            </TouchableOpacity>
            </View> 
            
        );
    }
}
export default DeleteAndCancel;

const styles = StyleSheet.create({
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FDA50F',
        paddingVertical: 20
      }, 
      button: {
        textAlign: 'center',
        color: 'white',
        flex: 1
    
      },
    verticalDivider: {
        width: 1,
        height: 15,
        backgroundColor:'#B17611',
    
      }
});
  