import React from 'react';
import {SafeAreaView,StatusBar,View} from 'react-native';
import { commonStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors } from '../../constants/theme';

    const EditCertificateScreen = ({navigation}) => {
        const onEditCertificate = () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer 4545980ce66bd555d903f7dc739f91e631606eb1");
            myHeaders.append("Cookie", "PHPSESSID=u1tqldsnh1mp6tjjiratbpsk1q");
            
            var raw = JSON.stringify({
              "candidate_id": "1440",
              "account_id": "1",
              "user_id": "974",
              "certification_id": "1",
              "certification_no": "13213",
              "credentials": "Updated Cert",
              "expiry_date": "2022-12-12",
              "upload_file": "Dummy.jpg"
            });
            
            var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("https://xapi.recruitbpm.com/certifications/93", requestOptions)
              .then(response => response.json())
              .then(result => {
                if (result.status == 200) {
                  Alert.alert(result.message);
                } else {
                  Alert.alert('Ther is some issue with your request');
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
                        onPress={() => navigation.goBack()}
                        title={"Edit Certificate"}
                    />
                </View>
            </SafeAreaView>
            
        );
    };


export default EditCertificateScreen;
