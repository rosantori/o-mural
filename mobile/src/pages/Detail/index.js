import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const post = route.params.post;
    const message = `Olá, @${post.username}. Estou entrando em contato pois amei a sua obra de arte "${post.title}".`;
    const phone = "5561XXXXXXXX";

    function navigateBack() {
        navigation.goBack();    
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Título: ${post.title}`,
            recipients: [post.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);
    }



    return(
        <View style= {styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name = "arrow-left" size={28} color="#e82041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.post}>
                <Text style={[styles.postProperty, {marginTop: 0}]}> Título:  </Text>
                <Text style={styles.postValue}> {post.title}  </Text>
                <Text style={[styles.postProperty, {marginTop: 0}]}> Postagem:  </Text>
                <Text style={styles.postValue}> {post.description} </Text>
                <Text style={[styles.postProperty, {marginTop:0}]}>username:</Text>
                <Text style={styles.postValue}>{['@', post.username]}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.muralTitle}>É uma bagaceira ou não é?</Text>
                <Text style={styles.muralTitle}>Bagaceira TOTAL</Text>

                <Text style = {styles.muralDescription}> Entre em contato conosco:</Text>

                <View style={styles.actions} >
                    <TouchableOpacity style ={styles.action} onPress ={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style ={styles.action} onPress ={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}