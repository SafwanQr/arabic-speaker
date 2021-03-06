import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { MonoText } from '../components/StyledText';
import Colors from "../constants/Colors";

class DeleteAndCancel extends Component {
    constructor (props) {
        super();
      }
    
    render() {
        return (
            <View  style={styles.buttonsWrapper} >
            <TouchableOpacity  onPress={this.props.onDeleteClicked}  style={{flex: 1}}>
            <MonoText style={styles.button} >
              حذف
                </MonoText>
            </TouchableOpacity>
            <MonoText style={styles.verticalDivider}> </MonoText>
            <TouchableOpacity  style={{flex: 1}}  onPress={this.props.onCancelClicked}>
              <MonoText style={styles.button} >
              إلغاء
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
        backgroundColor: Colors.orange,
        paddingVertical: 20,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10 
      }, 
      button: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
    verticalDivider: {
        width: 1,
        height: 15,
        backgroundColor:'#B17611',
    
      }
});
  