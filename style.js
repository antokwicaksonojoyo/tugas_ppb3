import {StyleSheet} from 'react-native';

const style=StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'white',
    margin:10
},
gambar: {
    width:30,
    height:30,
    margin:10
},
gambarProfil: {
    width:80,
    height:80,
    borderRadius:80/2
},
textProfil: {
    fontWeight:'bold',
    fontSize:25,
    //textAlign: 'center'
},
keteranganProfil: {
    fontSize:18
},
textBio: {
    fontSize:15,
    color:'blue'
},
viewRow: {
    backgroundColor:'White',
    flex:1,
    flexDirection:'row'
},
viewGambar: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
gridGambar:{
    width:130,
    height:130,
    borderColor:'black'
}
});

export {style};