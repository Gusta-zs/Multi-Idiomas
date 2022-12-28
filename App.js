import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar, Image } from 'react-native'
import { useState } from 'react'
import './src/utils/i18n'

import { useTranslation } from 'react-i18next'

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const {t, i18n} = useTranslation()

  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then( () => setCurrentLanguage(value))
    .catch(() => {
      console.log(err)
      alert('Ocorreu um erro com a tradução')
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#141A31" />

        <View style={styles.languages}>
          <TouchableOpacity 
            style={[styles.button, {
              borderColor: currentLanguage === 'en' ? '#037CFC': 'transparent',
            }]}
            onPress={() => changeLanguage('en')}
          >
            <Text style={styles.langText}>Inglês</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, {
              borderColor: currentLanguage === 'pt' ? '#037CFC': 'transparent',
            }]}
            onPress={() => changeLanguage('pt')}
          >
            <Text style={styles.langText}>Português Brasil</Text>
          </TouchableOpacity>
        </View>

        <Image 
          source={require('./src/assets/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{t('Seja bem vindo')}</Text>

        <Text style={styles.title}>{t('ao seu app de filmes')}</Text>


        <TouchableOpacity style={styles.langButton}>
        <Text style={styles.buttonText}>
          {t('Acessar')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>
          {t('Criar uma nova conta')}
        </Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141A31',
  },
  button: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 4,
    marginRight: 4,
    marginLeft: 4
  },
  langButton:{
    alignSelf: 'center',
    backgroundColor: '#037CFC',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 28,
  },
  languages: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 18 : StatusBar.currentHeight + 58
  },
  langText: {
    color: '#FFF',
    marginRight: 4,
    marginLeft: 4
  },
  image: {
    maxWidth: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 44,
    marginTop: 200
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFF',
    left: '6%'
  },
  buttonText:{
    color: '#FFF'
  },
  linkButton:{
    marginTop: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  linkText:{
    textAlign: 'center',
    color: '#FFF',
  },
});
