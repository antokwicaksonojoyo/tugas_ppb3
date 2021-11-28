import React from "react";
import {Text, View, Image, Button} from "react-native";
import tambah from '.img/tambah.png';
import list from '.img/list.jpg';
import account from '.img/account.jpg';
import liburan from '.img/liburan.jpg';
import hobi from '.img/hobi.jpg';
import {style} from ".style";

const App = () => {
  return(
    <View style={style.container}>
      <View style={{flex:1, backgroundColor:"white", flexDirection:'row'}}>
        <View style= {{flex:6, backgroundColor:"white",
        justifyContent:'center'}}>
          <Text style={{fontSize:20}}>wicaksonojoyo</Text>
      </View>
        <TampilanGambar simbol={tambah} />
        <TampilanGambar simbol={list} />
      </View> 
      <View style={{flex:2, backgroundColor:'white',
      flexDirection:'row'}}>
        <View style={style.ViewGambar}>
          <Image source={account} style={{width:80,
            height:80, borderRadius:80/2}
          } />
        </View>
        <CardProfile angka="37" keterangan="Postingan" />
        <CardProfile angka="1000" keterangan="Pengikut" />
        <CardProfile angka="200" keterangan="Mengikuti" />
      </View>
     <View style={{flex:2, backgroundColor:'white'}}>
       <Text style={{fontSize:20}}>Antok Nurwicaksono</Text>
       <Text style={{style.textBio}}>keterangan pertama</Text>   
     </View>
     <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
      <View style={{flex:7, backgroundColor:'white'}}>
        <Button title="Edit Profil"></Button>
     </View>
     <View style={{flex:1, backgroundColor:'white'}}>
          <Button title="v" style={{borderRadius:5}}></Button>
     </View>
     </View>
     <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
       <Sorotan gambar={liburan} keteranganSorotan="Ponorogo" />
       <Sorotan gambar={hobi} keteranganSorotan="Puter Pelung" />
       </View>
       <View style={{flex:1, backgroundColor:'gray'}}></View>
       <View style={{flex:2, backgroundColor:'white'}}></View>
       <View style={{flex:1, backgroundColor:'gray'}}></View>
  </View>>
  )
}

const TampilanGambar = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.simbol} style={style.gambar} />
      </View>
  )
}

const CardProfile = (props) => {
  return (
    <View style={style.viewGambar}>
      <Text style={style.textProfile}>{props.angka}</Text>
      <Text style={style.keteranganProfile}>
        {props.keterangan}
      </Text>
    </View>
  )
}

const Sorotan = (props) => {
  return(
    <View style={style.viewGambar}>
      <Image source={props.gambar} style={style.gambarProfil} />
      <Text>{props.keteranganSorotan}</Text>
    </View>
  )
}
export default App;