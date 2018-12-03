


import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MonoText } from '../components/StyledText';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';
import LibrariesIcons from '../constants/LibrariesIcons';
import {Card} from '../components/card';

export default class IconsScreen extends React.Component {

  constructor(props) {
    super();
    const libraryName = props.navigation.getParam('libraryName');
    this.state = {
                title: [libraryName],
                icons: LibrariesIcons[libraryName] || [],
                enableBack: true,
                categoryPath: props.navigation.getParam('categoryPath'),
                srcScreen: props.navigation.getParam('srcScreen')
              };
  }
  static navigationOptions = {
    header: null
  };
  
  render() {

    return (
      <View style={styles.container}>
         <CustomHeader navigation = {this.props.navigation} title={this.state.title} onBackClicked= { () => this.props.navigation.goBack()}/>
         {/* <Header centerComponent = {{ text: 'MY nerro', style: { color: '#fff' } }} />  */}
        {/* <ScrollView style={styles.container} > */}
    
        <ScrollView >
          <View style={styles.cardsContainer}>
          {
            this.state.icons.map((icon, index) => {
              return(
            <TouchableOpacity    onPress={() => {
                  this.iconClicked(index)
               }}>
      
              <Card key ={icon.label} cardInfo = {icon} fontSize = {12} />
              </TouchableOpacity>
                   );
                  })
                }
                </View>
                </ScrollView>
        {/* </ScrollView> */}
      </View>
    );
  }

  iconClicked(index) {
      this.props.navigation.navigate( 'NewSentenceScreen'
        // this.state.srcScreen ? this.state.srcScreen: 'NewSentenceScreen'
      , {
        imgSrc: this.state.icons[index].imgSrc,
        categoryPath: this.state.categoryPath
      });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  cardsContainer: {
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    // display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

});


