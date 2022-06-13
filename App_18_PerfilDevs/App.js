import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { useState} from 'react';
import { styles } from './styles';


export default function App() {

  const [foto , setFoto] = useState('https://i.pinimg.com/originals/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.png');
  const [login , setLogin] = useState('');
  const [id , setId] = useState('');
  const [nome, setNome] = useState('');
  const [repos, setRepos] = useState('');
  const [seguidores, setSeguidores] = useState('');
  const [seguindo, setSeguindo] = useState('');

  




  function BuscarDev() {

      

    var url = 'https://api.github.com/users/';



    fetch(url+login, { mode: 'no-cors' })
    .then(T => T.json())
    .then(data => {
      setFoto(data.avatar_url)
      setId(data.id)
      setNome(data.name)
      setRepos(data.repos_url)
      setSeguidores(data.followers)
      setSeguindo(data.following)
    })
    .catch(err => {
      setCep("Dev não encontrado")
      console.log(err.message)});

  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTexto}> Perfil dos Devs</Text>


      <Image
          source = {{ uri: foto}}
          style={styles.img}
          
      />

      <View>
        <View style={styles.divInput}>

          <TextInput onChangeText={setLogin}
            style={styles.textInput}
            value={login} 
            placeholder="Digite login github"/>

        </View>
        <Pressable style={styles.botao} onPress={BuscarDev}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </Pressable>
      </View>

      
        
         
            <View style={{marginVertical: 16}}>
              <Text>
                Id: {id}
              </Text>

              <Text>
                Nome: {nome}
              </Text>

              <Text>
                Repositorios: {repos}
              </Text>

              <Text>
                Seguidores: {seguidores}
              </Text>

              <Text>
                Seguindo: {seguindo}
              </Text>
            </View>
      


    </View>
  );
}


