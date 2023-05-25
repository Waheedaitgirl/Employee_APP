import React, {useReducer} from 'react';
import {SafeAreaView, ScrollView,Image, Text, StatusBar, View} from 'react-native';
import {commonStyles} from '../../styles';
import CalenderInput from '../../components/DateInputMethod';
import {colors, fonts} from '../../constants/theme';
import CustomTextInput from '../../components/TextInput';
import {scale} from 'react-native-size-matters';
import {AppScreenWidth} from '../../constants/sacling';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/Button';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import moment from 'moment';
const initialState = {
  companyName: '',
  jobTitle: '',
  startDate: '',
  endDate: '',
  currentlyWorking: true,
  jobDuties: '',
};
const AddExperienceScreen = ({navigation}) => {
  const [experienceData, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'companyName':
        return {...state, companyName: action.payload};
      case 'jobTitle':
        return {...state, jobTitle: action.payload};
      case 'startDate':
        return {...state, startDate: action.payload};
      case 'endDate':
        return {...state, endDate: action.payload};
      case 'jobDuties':
        return {...state, jobDuties: action.payload};
      case 'currentlyWorking':
        return {...state, currentlyWorking: action.payload};
      default:
        return initialState;
    }
  }

  const AddExperience = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 4545980ce66bd555d903f7dc739f91e631606eb1");
    myHeaders.append("Cookie", "PHPSESSID=u1tqldsnh1mp6tjjiratbpsk1q");
    
    var raw = JSON.stringify({
      "candidate_id": "1336",
      "candidate_employer": "3",
      "job_title": "UP Zend Developer",
      "job_duties": "UP Create Dynamic Web Pages and API services",
      "experience_start_date": "2022-05-06",
      "experience_end_date": "2023-05-06",
      "is_currently_working": "0"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://xapi.recruitbpm.com/experiences", requestOptions)
      .then(response => response.json())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
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
        Alert.alert('THere is some issue with request. Please try agian later',error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle={'light-content'} />
      <View style={commonStyles.container}>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width:wp(25), 
                height:wp(25),
                marginVertical:wp(5),
               // tintColor:colors.dark_primary_color, 
                borderRadius:wp(15)
              }}
              source={require('../../assets/images/job.png')}
            />
          </View>
          <CustomTextInput
            placeholder={'Company name'}
            value={experienceData.companyName}
            borderWidth={1}
            lableColor={colors.dark_primary_color}
            borderRadius={scale(5)}
            onChangeText={text => {
              dispatch({type: 'companyName', payload: text});
            }}
            errorMessage={''}
          />
          <CustomTextInput
            placeholder={'Job Title'}
            value={experienceData.jobTitle}
            borderWidth={1}
            lableColor={colors.dark_primary_color}
            borderRadius={scale(5)}
            onChangeText={text => {
              dispatch({type: 'jobTitle', payload: text});
            }}
            errorMessage={''}
          />
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
            placeholder={'Job Duties'}
            value={experienceData.jobDuties}
            borderWidth={1}
            lableColor={colors.dark_primary_color}
            borderRadius={scale(5)}
            onChangeText={text => {
              dispatch({type: 'jobDuties', payload: text});
            }}
            errorMessage={''}
          />
          <View
            style={{
              width: AppScreenWidth,
              marginVertical: scale(15),
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: colors.dark_primary_color,
                fontFamily: fonts.Medium,
                fontSize: scale(12),
              }}>
              Currently Working
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch({
                  type: 'currentlyWorking',
                  payload: !experienceData.currentlyWorking,
                });
              }}
              style={{
                width: scale(25),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: experienceData.currentlyWorking
                  ? colors.dark_primary_color
                  : '#fff',
                height: scale(25),
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
            onPress={() => AddExperience()}
            text={'Save'}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddExperienceScreen;
