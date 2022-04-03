import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';




export default function App() {


  
  const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBysD2qyR5P-Z6JcFxWgKFQ6gsPZABR4H4IQ&usqp=CAU';



  return (

    

    <View style={styles.containerScroll}>


    <Text style={styles.tituloTexto}> Anúncios </Text>

    <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>


  <View style={styles.box1}>

      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



    <View style={styles.anuncioTexto}>

      <Text>Anúncios</Text>
      <Text>Anúncios</Text>
      <Text>Anúncios</Text>

    </View>

  </View>

  <View style={styles.box1}>

      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



      <View style={styles.anuncioTexto}>

      <Text>Anúncios</Text>
      <Text>Anúncios</Text>
      <Text>Anúncios</Text>

      </View>

      </View>

      <View style={styles.box1}>

      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



      <View style={styles.anuncioTexto}>

      <Text>Anúncios</Text>
      <Text>Anúncios</Text>
      <Text>Anúncios</Text>

      </View>

      </View>

      <View style={styles.box1}>

      <Image
        source = {{ uri: img}}
        style={styles.img}
      />



      <View style={styles.anuncioTexto}>

      <Text>Anúncios</Text>
      <Text>Anúncios</Text>
      <Text>Anúncios</Text>

      </View>

      </View>

      <View style={styles.box1}>

      <Image
        source = {{ uri: img}}
        style={styles.img}
/>



    <View style={styles.anuncioTexto}>

    <Text>Anúncios</Text>
    <Text>Anúncios</Text>
    <Text>Anúncios</Text>

    </View>

  </View>

    <View style={styles.box1}>

    <Image
      source = {{ uri: img}}
      style={styles.img}
    />



  <View style={styles.anuncioTexto}>

    <Text>Anúncios</Text>
    <Text>Anúncios</Text>
    <Text>Anúncios</Text>

  </View>

</View>


      
    
    </ScrollView>

<View style={styles.seta}>



</View>





  </View>
)
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ebebea',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },


  containerScroll:{
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
  },


  tituloTexto:{
    fontSize: 30,
    marginBottom:30,
    color:'red',
    fontWeight: "bold",
    paddingTop:20,
  },




  box1:{
      backgroundColor: '#87CEFA',
      height: '95%',
      width: 105,
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 5,
      margin:3,
      alignItems: 'center',
      justifyContent: 'flex-start',
  },


  scroll:{
    flex: 1,
      width: '97%',
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 5,
   },



   seta:{
    flex: 1,
    
   },


  img: {
    flex: 1,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 15,
    width: '90%',
    marginTop: 10,
  },

  anuncioTexto:{
    flex: 1,
    paddingTop:20,

  }



})
