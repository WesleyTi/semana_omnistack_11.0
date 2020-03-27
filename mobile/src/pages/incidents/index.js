import React, {useEffect, useState} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles'; 
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    

    const navigation = useNavigation();

    function navegateToDetail(incident) {
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length !== total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {params: { page }});
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(()=>{
        loadIncidents();
    },[]);

    return (
        <View style={style.container}>
            <View>
                <Image source={logoImg}/>
                <Text style={style.headeText}>
                    Total de <Text style={style.headeTextBold}>{total} casos.</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={[incidents]}
                style={style.incidentsList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={( {item: incident} )=>(
                    <View sytle={style.incidents}>
                        <Text style={style.incidentProperty}>ONG:</Text>
                        <Text style={style.incidentValue}>incident.name</Text>

                        <Text style={style.incidentProperty}>CASO:</Text>
                        <Text style={style.incidentValue}>incident.title</Text>

                        <Text style={style.incidentProperty}>VALOR:</Text>
                        <Text style={style.incidentValue}>
                            {Intl.NumberFormat('pt-BR', 
                            { style: 'currency', 
                            currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={style.detailsButton} 
                            onPress={ () => navegateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-rigth' size={16} color='#E02041'/>
                        </TouchableOpacity>
                    </View>
                )}
            /> 
        <View/>
    </View>    

    );  
}   