import React, {useReducer} from 'react';
import {SafeAreaView, ScrollView, KeyboardAvoidingView,Image,Platform, Text, StatusBar, View, Alert} from 'react-native';
import CalenderInput from '../../components/DateInputMethod';
import {colors, fonts} from '../../constants/theme';
import CustomTextInput from '../../components/TextInput';
import {scale} from 'react-native-size-matters';
import { commonStyles,selectStyles } from '../../styles';
import {AppScreenWidth} from '../../constants/sacling';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/Button';
import {NativeBaseProvider, Select } from "native-base";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import moment from 'moment';
import { useSelector } from 'react-redux';
const initialState = {
  degreeLevel: '',
  degreeTitle: '',
  startDate: '',
  endDate: '',
  currentlyWorking: true,
  educationDetails: '',
};
const AddEducationScreen = ({navigation}) => {
  const [experienceData, dispatch] = useReducer(reducer, initialState);
  // const {user, token} = useSelector(state => state.LoginReducer);
  const {user,token} = useSelector(state => state.LoginReducer)
  function reducer(state, action) {
    switch (action.type) {
      case 'degreeLevel':
        return {...state, degreeLevel: action.payload};
      case 'degreeTitle':
        return {...state, degreeTitle: action.payload};
      case 'startDate':
        return {...state, startDate: action.payload};
      case 'endDate':
        return {...state, endDate: action.payload};
      case 'educationDetails':
        return {...state, educationDetails: action.payload};
      case 'currentlyWorking':
        return {...state, currentlyWorking: action.payload};
      default:
        return initialState;
    }
  }

  const addEducation = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 4545980ce66bd555d903f7dc739f91e631606eb1");
   // myHeaders.append("Cookie", "PHPSESSID=u1tqldsnh1mp6tjjiratbpsk1q");
    
    var raw = JSON.stringify({
      "candidate_id": "1336",
      "education_title": "BS Computer Sciences",
      "education_level": "0",
      "education_details": "Loyola University, Chicago, IL Master of Science, Information Systems Management",
      "education_start_dapiate": "2022-08-09",
      "education_end_date": "2022-08-09",
      "is_currently_studying": "0"
    });
    
// adding the api'request.


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://api.recruitbpm.com/education", requestOptions)
      .then((response)=>{
        Alert.alert(response.JSON.stringify(response.data));
        var getRequestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        fetch("https://api.recruitbpm.com/education", getRequestOptions).then((response) => {
          Alert.alert(response.JSON.stringify(response.data));
        });
        
        
        })
      // .then(result => {
      //   if (result.status == 200) {
      //     Alert.alert(result.message);
      //   } else {
      //     Alert.alert(
      //       'THere is some issue with request. Please try agian later',
      //     );
      //   }
      // })
      .catch(error => {
        Alert.alert('There is some issues in your request,Please try agian later',error.message);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
  >
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle={'light-content'} />
      <View style={commonStyles.container}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: 'center',
              flex:1,
              
             
            }}>
            <Image
              style={{
                width:wp(25), 
                height:wp(25),
                marginVertical:wp(5),
               // tintColor:colors.dark_primary_color, 
                borderRadius:wp(15)
              }}
              source={require('../../assets/images/study.png')}
            />
          </View>
          <CustomTextInput
            placeholder={'Degree Title'}
            value={experienceData.degreeTitle}
            borderWidth={1}
            lableColor={colors.dark_primary_color}
            borderRadius={scale(5)}
            onChangeText={text => {
              dispatch({type: 'degreeTitle', payload: text});
            }}
            errorMessage={''}
          />
            <NativeBaseProvider>
            <View
            style={{
              width: AppScreenWidth,
              
              alignSelf: 'center',
            }}>
            <Text  style={{
                color: colors.dark_primary_color,
                fontFamily: fonts.Medium,
                fontSize: scale(12),
              }}>
              Degree Level
            </Text>
            </View>
                <Select
                   
                    selectedValue={experienceData.degreeLevel}
                    width={AppScreenWidth}
                    placeholderTextColor={colors.text_primary_color}
                
                    maxHeight={"10"}
                    alignSelf={"center"}
                    fontFamily={fonts.Medium}
                    fontSize={scale(13)}
                    placeholder="Degree Level"
                    _item={selectStyles._item}
                    _selectedItem={selectStyles._selectedItem}
                    onValueChange={(itemValue) => {
                        dispatch({type: 'degreeLevel', payload: itemValue});
                    }}>
                        <Select.Item key={"1"} label={"Associate"} value={"Associate"} />
                        <Select.Item key={"2"} label={"Bachelor"} value={"Bachelor"} />
                        <Select.Item key={"3"} label={"Masters"} value={"Masters"} />
                        <Select.Item key={`4`} label={"Doctoral"} value={"Doctoral"} />
                        <Select.Item key={`5`} label={"Post Doctoral"} value={"Post Doctoral"} />
                        <Select.Item key={`6`} label={"High School"} value={"High School"} />
                        <Select.Item key={`7`} label={"Some College"} value={"Some College"} />
                        <Select.Item key={`8`} label={"Technical College"} value={"Technical College"} />    
                </Select>
            </NativeBaseProvider>
          
          <CalenderInput
            placeholder={'Start Date'}
            value={experienceData.startDate}
            errorMessage={''}
            onChangeText={date =>
              dispatch({
                type: 'startDate',
                payload: moment(new Date(date)).format('MMM-YYYY'),
              })
            }
          />

          <CalenderInput
            placeholder={'End Date'}
            value={experienceData.endDate}
            errorMessage={''}
            onChangeText={date =>
              dispatch({
                type: 'endDate',
                payload: moment(new Date(date)).format('MMM-YYYY'),
              })
            }
          />

          <CustomTextInput
            placeholder={'Education Details'}
            value={experienceData.educationDetails}
            borderWidth={1}
            lableColor={colors.dark_primary_color}
            borderRadius={scale(5)}
            onChangeText={text => {
              dispatch({type: 'educationDetails', payload: text});
            }}
            errorMessage={''}
          />
           
          <View
            style={{
              width: AppScreenWidth,
              marginVertical: scale(10),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: colors.dark_primary_color,
                fontFamily: fonts.Medium,
                fontSize: scale(12),
              }}>
              Currently Studying
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch({
                  type: 'currentlyWorking',
                  payload: !experienceData.currentlyWorking,
                });
              }}
              style={{
                width: scale(22),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: experienceData.currentlyWorking
                  ? colors.dark_primary_color
                  : '#fff',
                height: scale(22),
                marginTop: scale(5),
                borderWidth: experienceData.currentlyWorking ? 0 : 1,
                borderRadius: scale(5),
                borderColor: '#0002',
              }}>
              {experienceData.currentlyWorking && (
                <Entypo name="check" color={'#fff'} size={scale(20)} />
              )}
            </TouchableOpacity>
          </View>
          <CustomButton
            loading={false}
            loadingText={'Saving'}
            onPress={() => {
              addEducation();
            }
            }
            text={'Save'}
          />
          

        </ScrollView>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddEducationScreen;
