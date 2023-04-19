import React from 'react';
import {SafeAreaView,StatusBar,View} from 'react-native';
import { commonStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors } from '../../constants/theme';

    const EditCertificateScreen = ({navigation}) => {
    
        const editExperience = () => {
            var myHeaders = new Headers();
           myHeaders.append("Content-Type", "application/json");
           myHeaders.append("Authorization", "Bearer 4545980ce66bd555d903f7dc739f91e631606eb1");
           myHeaders.append("Cookie", "PHPSESSID=u1tqldsnh1mp6tjjiratbpsk1q");

           var raw = JSON.stringify({
           "candidate_id": "1336",
            "candidate_employer_id": "3",
            "job_title": "UP Zend Developer",
          "job_duties": "UP Create Dynamic Web Pages and API services",
          "experience_start_date": "2022-05-06",
          "experience_end_date": "2023-05-06",
           "is_currently_working": "0"
});

        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
};

fetch("https://xapi.recruitbpm.com/experience/316", requestOptions)
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


export default EditCertificateScreen;
