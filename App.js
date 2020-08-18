import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Quotes from './components/Quotes';
import logo from './assets/Breaking_Bad_logo.svg.png';
import Axios from 'axios';

export default function App() {

  const [consult, setConsult] = useState(false)
  const [data, setData] = useState([]);
  
  const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

  useEffect(() => {
    if (consult){
      const fetchData = async () => {
        const response = await Axios.get(url)
        setData(response.data)
        setConsult(false)
      }
      fetchData()
    }
  }, [consult])

  const handlePress = () => {
    setConsult(!consult)
  }

  return (
    <View style={styles.container}>

      <View>
        <Image 
          style={styles.logo}
          source={logo}
        />
      </View>

      <Text style={styles.paragraph}>
        Breaking Bad Quotes
      </Text>

      {consult 
        ?
          <View>
            <Text style={styles.loading}>Loading ...</Text>
          </View>
        :
          <View>
            <Quotes data={data}/>
          </View>
      }

      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.buttonText}>get quote</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#1f6032',
    paddingVertical: 35,
    paddingHorizontal: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    height: 175,
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: '#194f2d',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  loading: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 20,
    color: '#fff'
  }
});
