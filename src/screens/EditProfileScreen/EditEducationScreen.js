import React from 'react';
import {SafeAreaView,StatusBar,View} from 'react-native';
import { commonStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors } from '../../constants/theme';

    const EditEducationScreen = ({navigation}) => {
        const editEducation = () => {
            var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 4545980ce66bd555d903f7dc739f91e631606eb1");
myHeaders.append("Cookie", "PHPSESSID=u1tqldsnh1mp6tjjiratbpsk1q");

var raw = JSON.stringify({
  "candidate_id": "1336",
  "education_title": "BS UPdatess Computer Sciences",
  "education_level": "1",
  "education_details": "UPLoyola University, Chicago, IL Master of Science, Information Systems Management",
  "education_start_date": "2024-08-09",
  "education_end_date": "2024-08-09",
  "is_currently_studying": "1"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://xapi.recruitbpm.com/education/146", requestOptions)
              .then(response => response.json())
              .then(result => {
                if (result.status == 200) {
                  Alert.alert(result.message);
                } else {
                  Alert.alert(
                    'THere is some issue with request. Please try agian later',
                  );
                }
              })
              .catch(error => {
                Alert.alert('THere is some issue with request. Please try agian later');
              });
          };
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Edit Certificate"}
                    />
                </View>
            </SafeAreaView>
            
        );
    };


export default EditEducationScreen;
