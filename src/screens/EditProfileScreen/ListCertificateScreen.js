// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Image,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   StatusBar,
//   View,
// } from 'react-native';
// import {commonStyles} from '../../styles';
// import CustomButton from '../../components/Button';
// import {colors, fonts} from '../../constants/theme';
// import {scale, verticalScale} from 'react-native-size-matters';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import moment from 'moment';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// const ListCertificateScreen = ({navigation}) => {
//   const data = [
//     {
//       certificate_type: 'Google Analytics Certification',
//       certification_name: 'Google Analytics Certification',
//       certification_no: 'AES_529721',
//       key:"1",
//       certification_expiry: '2100-10-10',
//     },
//     {
//       certificate_type: 'IBM Data Engineering Professional Certificate',
//       certification_name: 'IBM Data Engineering Professional Certificate',
//       certification_no: 'IBM_20129',
//       key:"2",
//       certification_expiry: '2012-10-10',
//     },
//     {
//       certificate_type: 'Harvard Certificate',
//       certification_name: 'Harvard Certificate',
//       certification_no: 'HAV_912734',
//       key:"3",
//       certification_expiry: '2025-12-31',
//     },
//     {
//       certificate_type: 'Google Analytics Certification',
//       certification_name: 'Google Analytics Certification',
//       certification_no: 'AES_529721',
//       key:"4",
//       certification_expiry: '2100-10-10',
//     },
//     {
//       certificate_type: 'IBM Data Engineering Professional Certificate',
//       certification_name: 'IBM Data Engineering Professional Certificate',
//       certification_no: 'IBM_20129',
//       key:"5",
//       certification_expiry: '2012-10-10',
//     },
//     {
//       certificate_type: 'Harvard Certificate',
//       certification_name: 'Harvard Certificate',
//       certification_no: 'HAV_912734',
//       key:"6",
//       certification_expiry: '2025-12-31',
//     },
//     {
//       certificate_type: 'Google Analytics Certification',
//       certification_name: 'Google Analytics Certification',
//       certification_no: 'AES_529721',
//       key:"7",
//       certification_expiry: '2100-10-10',
//     },
//     {
//       certificate_type: 'IBM Data Engineering Professional Certificate',
//       certification_name: 'IBM Data Engineering Professional Certificate',
//       certification_no: 'IBM_20129',
//       key:"7",
//       certification_expiry: '2012-10-10',
//     },
//     {
//       certificate_type: 'Harvard Certificate',
//       certification_name: 'Harvard Certificate',
//       certification_no: 'HAV_912734',
//       key:"8",
//       certification_expiry: '2025-12-31',
//     },
//   ];
//   let rowRefs = new Map();
//   const rightButtons = () => {
//     return(
//         <View 
//             style={styles.ActionButtonRows}>
//             <TouchableOpacity
//                 onPress={() => alert("Sure to Delete")}
//                 style={{...styles.ActionButton,backgroundColor:colors.error_text}} 
//                 >
//                 <AntDesign name='delete' color={colors.white} size={scale(22)} />
//             </TouchableOpacity>
//             <TouchableOpacity 
//                 onPress={() => alert("Sure to Edit")} 
//                 style={styles.ActionButton}>
//                 <AntDesign name='edit' color={colors.white} size={scale(22)} />
//             </TouchableOpacity>
//         </View>
//     )
//   }

//   const createEducationItem = ({item, index}) => {
//     return (
//       <Swipeable
//         key={item.key}
//         ref={ref => {
//           if (ref && !rowRefs.get(item.key)) {
//             rowRefs.set(item.key, ref);
//           }
//         }}
//         onSwipeableWillOpen={()=>{
//           [...rowRefs.entries()].forEach(([key, ref]) => {
//             if (key !== item.key && ref) ref.close();
//           });
//        }}
//        renderRightActions={rightButtons} >
//       <View    key={`${index}`} style={styles.EducationMainView}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <FontAwesome5
//             color={colors.dark_primary_color}
//             name={'medal'}
//             size={scale(40)}
//           />
//         </View>
//         <View style={{marginLeft: scale(15), width: '80%'}}>
//           <Text numberOfLines={1}   ellipsizeMode={"middle"} style={styles.job_tiltetext}>{item.certificate_type}</Text>
//           <Text numberOfLines={1} ellipsizeMode={"middle"} style={styles.Addresstext}>
//             {item.certification_name} - {item.certification_no}
//           </Text>
//           <View style={{flexDirection:"row"}} >
//             <Text style={styles.date}>{item.certification_expiry}</Text>
//             <Text style={{...styles.date,marginRight:scale(0),}}>-</Text>
//             <Text
//               style={{
//                 ...styles.date,
//                 color: '#fff',
//                 width: 75,
//                 textAlign: 'center',
//                 borderRadius: 4,
               
//                 marginLeft:scale(10),
//                 backgroundColor: moment().isAfter(
//                   moment(item.certification_expiry),
//                 )
//                   ? 'red'
//                   : 'green',
//               }}>
//               {' '}
//               {moment().isAfter(moment(item.certification_expiry))
//                 ? 'Expire'
//                 : 'Valid'}
//             </Text>
//           </View>
//         </View>
//       </View>
//       </Swipeable>
//     );
//   };

//   const EduListing = () => {
//     return (
//       <FlatList
//         disableVirtualization={false}
//         showsVerticalScrollIndicator={false}
//         data={data}
//         ListEmptyComponent={emptySection}
//         renderItem={createEducationItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     );
//   };

//   const emptySection = () => {
//     return (
//       <View style={{flex: 1}}>
//         <View
//           style={{
//             alignItems: 'center',
//             marginTop: heightPercentageToDP(10),
//           }}>
//           <Image
//             source={require('../../assets/images/study.png')}
//             style={{
//               // position: 'absolute',
//               zIndex: 20,
//               height: 200,
//               // top: -20,
//               width: 200,
//             }}
//           />
//           <Text
//             style={{
//               color: '#a4a4a4',
//               fontSize: 18,
//               marginTop: 10,
//             }}>
//             No Specility to show
//           </Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
//       <StatusBar barStyle={'light-content'} />
//       <View style={commonStyles.container}>
//         {EduListing()}
//         <CustomButton
//           loading={false}
//           loadingText={'Saving'}
//           onPress={() => alert('certificated has been added')}
//           text={'Add Certificate'}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ListCertificateScreen;

// const styles = StyleSheet.create({
//   EducationMainView: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(0,0,0,.03)',

//     marginHorizontal: scale(12),
//     paddingVertical: verticalScale(8),
//   },
//   ImageView: {
//     width: wp(15),
//     height: wp(15),
//     // tintColor:colors.dark_primary_color,
//     borderRadius: wp(15),
//   },
//   job_tiltetext: {
//     fontFamily: fonts.Medium,
//     fontSize: scale(14),
//     includeFontPadding: false,
//     color: '#191919',
//   },
//   Addresstext: {
//     fontFamily: fonts.Medium,
//     fontSize: scale(12),
//     includeFontPadding: false,
//     color: '#191919',
//   },
//   date: {
//     fontFamily: fonts.Medium,
//     fontSize: scale(11),
//     marginRight:scale(10),
//     includeFontPadding: false,
//   },
//   ActionButtonRows:{ 
//     borderTopRightRadius:scale(5),
//     overflow:"hidden",
//     borderBottomRightRadius:scale(5),
//     justifyContent:"space-evenly", 
//     backgroundColor:"red", 
//     alignItems:"center",
//     marginVertical:scale(5)
// },
// ActionButton:{
//     paddingHorizontal:scale(10),
//     justifyContent:"center", 
//     alignItems:"center", 
//     flex:1, 
//     backgroundColor:"#e6a020"
// }
// });
import React from 'react';
import {SafeAreaView,StatusBar,View} from 'react-native';
import { commonStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors } from '../../constants/theme';

    const AddCertificateScreen = ({navigation}) => {
    const addCertificate = ()=> {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 4545980ce66bd555d903f7dc739f91e631606eb1");
myHeaders.append("Cookie", "PHPSESSID=u1tqldsnh1mp6tjjiratbpsk1q");

var raw = JSON.stringify({
  "candidate_id": "1530",
  "account_id": "1",
  "user_id": "974",
  "certification_id": "1",
  "certification_no": "13213",
  "credentials": "My CertNew",
  "expiry_date": "2022-12-12",
  "upload_file": {
    "name": "Dummy.pdf",
    "mime_type": "application/pdf",
    "content": "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ci9Gb250RmlsZTIgMTAgMCBSL0ZsYWdzIDMyL0ZvbnRCQm94Wy02NzQgLTMxNCAxMTA4IDkzNF0vRm9udE5hbWUvUkZOU09MK0FsZW8tUmVndWxhci9JdGFsaWNBbmdsZSAwL0FzY2VudCA4MDU+PgplbmRvYmoKMTIgMCBvYmoKPDwvRFcgMTAwMC9TdWJ0eXBlL0NJREZvbnRUeXBlMi9DSURTeXN0ZW1JbmZvPDwvU3VwcGxlbWVudCAwL1JlZ2lzdHJ5KEFkb2JlKS9PcmRlcmluZyhJZGVudGl0eSk+Pi9UeXBlL0ZvbnQvQmFzZUZvbnQvUkZOU09MK0FsZW8tUmVndWxhci9Gb250RGVzY3JpcHRvciAxMSAwIFIvVyBbMlsyMTVdOFs3NjUgNzAwXTE0WzUzNCAyMDggMzQxIDIxMSA0MjAgNTg5IDQ2NSA1MzEgNTMwIDU4NCA1MDcgNTM3IDU0MyA1MzcgNTIyIDIwN10zMls1MjZdMzRbNDExIDc5OSA3NzIgNjMwIDYzNSA3NDMgNTg3IDU4NCA2ODQgNzg5IDMwNSA0NDIgNzEwIDU3MCA5NTQgNzc2IDc1NCA1OTEgNzY5IDY2OSA1MDYgNjI5IDc0OSA3NzkgMTEyNV02MFs3MDEgNjA3XTY2WzUxM102OFs1MTMgNTY1IDQ1MyA1NjQgNDkyIDM3MiA1MDcgNjI1IDI4OSAyNTggNTc4IDI5MCA4OTAgNjI1IDUyOCA1NTYgNTU1IDQzMiA0MTAgMzYzIDYwNiA1OTYgODY5IDU3MSA1OTYgNDYxXTIzOVs0NDZdXS9DSURUb0dJRE1hcC9JZGVudGl0eT4+CmVuZG9iagoxMyAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDYxMj4+c3RyZWFtCnicXdVPa9tAEAXwuz6Fji09WJqd2bXBvEtLIYf+oUlLr7K0MoZaFrJzyLevvC+dQA3+gcdWsu+t0G4+Pnx6mE63evN9ufSP+VaPp2lY8vXyvPS5PuTjaapaqYdTf3v9VOzP3Vxt1osfX663fH6Yxku139ebH+uX19vyUr97evr9oXlfbb4tQ15O03GdqPz8tU4en+f5Tz7n6VY3FVAPeVz/1Jdu/tqdc70pF74Nn17mXEv53HIF/WXI17nr89JNx1ztm/WF/ef1hSpPw39fJ+NVh/Ht5wJXGpTRFq4YRzu4EjnKcOXA0QhX+jJqG7gycNTClcxR+fdURo4C3MB1tQo3tBwZ3CAcRbghcJTgBuWopKOBGduSjgZmbDu4IXF0gBu2HPVww46jAW7oykgauIFNCAMXA2NLCUyVsaUEpsrYYnCVsSXCVcaWEpgqYws3taiMLdzUojK2lMBUGVsOcJWxpYerjC0DXH2NneEqbxMZ4Spvk9DAVZYTWrjK2yQIXGVfIcA19hUUrrGvYHCNfYUI19hXSHCNfYUtXGNfYQfX2Ffo4Br7CrwbisZywgDXWI4KXGMgVbiRq1eDG7l6jXAjV68JbuTqdQs3cvW6gxu5eu3gRq5eD3Ajd1t7uJGBdIAbXwNluJG7rSPcyN22Bm7kblsLN3K3TeBGlmMBbuJum8JN7MsMbmJfFuEm9mUJbmJfxn0uJvZlO7iJfVkHN7EvK03RxL6MW19M7Mu49cXEvnKp5a7cnwP3R/a/Z/P96X0/WPww6J+XZT0nyulTToP7OXCash9Q82W+X1Wv7+ovPBiUoQplbmRzdHJlYW0KZW5kb2JqCjIgMCBvYmoKPDwvU3VidHlwZS9UeXBlMC9UeXBlL0ZvbnQvQmFzZUZvbnQvUkZOU09MK0FsZW8tUmVndWxhci9FbmNvZGluZy9JZGVudGl0eS1IL0Rlc2NlbmRhbnRGb250c1sxMiAwIFJdL1RvVW5pY29kZSAxMyAwIFI+PgplbmRvYmoKNCAwIG9iago8PC9LaWRzWzUgMCBSIDcgMCBSIDkgMCBSXS9UeXBlL1BhZ2VzL0NvdW50IDM+PgplbmRvYmoKMTQgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDQgMCBSPj4KZW5kb2JqCjE1IDAgb2JqCjw8L01vZERhdGUoRDoyMDIxMDkxMzE0NDAwMCswNScwMCcpL0NyZWF0aW9uRGF0ZShEOjIwMjEwOTEzMTQ0MDAwKzA1JzAwJykvUHJvZHVjZXIoaVRleHSuIDUuNS42IKkyMDAwLTIwMTUgaVRleHQgR3JvdXAgTlYgXChBR1BMLXZlcnNpb25cKSk+PgplbmRvYmoKeHJlZgowIDE2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwNTQxMyAwMDAwMCBuIAowMDAwMDIxMTMwIDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAyMTI2NCAwMDAwMCBuIAowMDAwMDAxNzc1IDAwMDAwIG4gCjAwMDAwMDE4OTYgMDAwMDAgbiAKMDAwMDAwMzc0MCAwMDAwMCBuIAowMDAwMDAzODYxIDAwMDAwIG4gCjAwMDAwMDUyOTIgMDAwMDAgbiAKMDAwMDAwNTUwMSAwMDAwMCBuIAowMDAwMDE5NzM0IDAwMDAwIG4gCjAwMDAwMTk5MjAgMDAwMDAgbiAKMDAwMDAyMDQ1MCAwMDAwMCBuIAowMDAwMDIxMzI3IDAwMDAwIG4gCjAwMDAwMjEzNzMgMDAwMDAgbiAKdHJhaWxlcgo8PC9JbmZvIDE1IDAgUi9JRCBbPDc3M2MzYWQwOWJlZjE1MGJiMzc5NzllZWY4NzNkZjVmPjw3NzNjM2FkMDliZWYxNTBiYjM3OTc5ZWVmODczZGY1Zj5dL1Jvb3QgMTQgMCBSL1NpemUgMTY+PgolaVRleHQtNS41LjYKc3RhcnR4cmVmCjIxNTMxCiUlRU9GCg=="
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://xapi.recruitbpm.com/certifications", requestOptions)
  .then(response => response.json())
  .then(result=>{
    if(result.status == 200){
        Alert.alert(result.message);
    }else{
        Alert.alert('There is some issue in your request')
    }
  })
  .catch(error => Alert.alert('Ther is some issue with your request',error));
    };
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.addCertificate()}
                        title={"Add Certificate"}
                    />
                </View>
            </SafeAreaView>
            
        );
    };


export default AddCertificateScreen;
