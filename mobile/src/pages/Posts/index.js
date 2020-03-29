import React, { useState, useEffect} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import  api from '../../services/api';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToDetail(post) {
        navigation.navigate('Detail', {post});
    }
    
    async function loadPosts() {
        if(loading) {
            return;
        }

        if(total > 0 && posts.lenght === total) {
            return;
        }

        setLoading(true);

        const response = await  api.get('posts', {
            params: {page}
        }); 
        setPosts([...posts, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }
    useEffect(() => {
        loadPosts();
    }, []);

    return(
        <View style = {styles.container} >
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style=  {styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} posts</Text>.
                </Text>
            </View>

            <Text style={styles.title}> Bem-vindo. </Text>
            <Text style={styles.description}> Escolha uma mensagem abaixo para ler.</Text>

            <FlatList 
                style={styles.postList}
                data={posts}
                keyExtractor={post => String(post.id)}
                showsVerticalScrollIndicator ={false}
                onEndReached = {loadPosts} 
                onEndReachedThreshold = {0.2}
                renderItem = {({item: post})=>(
                    <View style={styles.post}>
                        <Text style={styles.postProperty}> Título:  </Text>
                        <Text style={styles.postValue}> {post.title}</Text>
                        <Text style={styles.postProperty}>username:</Text>
                        <Text style={styles.postValue}>{['@', post.username]}:</Text>
                        

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress = {()=> navigateToDetail(post)}
                        >
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            
            />
        </View>
    );
}