import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Quotes = ({data}) => {
  return(
    <View style={styles.container}>
      {data 
        ?
        <FlatList 
          data={data}
          keyExtractor={d => d.name}
          renderItem={({item}) => (
            <View>
              <Text style={styles.quote}>"{item.quote}"</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          )}
        />
        :
        null
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 150,
    marginVertical: 10,
  },
  quote:{
    fontSize: 25,
    color: 'white',
  },
  author:{
    fontSize: 16,
    textAlign: 'right',
    color: 'white'
  },
})

export default Quotes;