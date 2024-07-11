import { useNavigation, NavigationProp } from "@react-navigation/native"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { RootStackParamList } from "../scripts/navigationProp"
import { useClientDB, ClientDB } from "../database/useClientDB";
import AsyncStorage from "@react-native-async-storage/async-storage";


type Props = TouchableOpacityProps & {
    data: {
        id: number
        nome_cliente: string
        n_contrato:number
        responsavel_vistoria: string
    }
}

export function Client({ data, ...rest }: Props){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const clientDB = useClientDB()

    // async function insert(){
    //     try {
    //         const response = await clientDB.create({
    //             nome_cliente: data.nome_cliente
    //         })
    //         console.log(`Produto cadastrado com ID ${response.insertedRowId}`)
    //     } catch (error) {
    //         throw(error)
    //     }
    // }

    async function insert(){
        try {
            await AsyncStorage.setItem('client', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <TouchableOpacity style={{
            backgroundColor:"#CCC",
            height: 120,
            padding: 12, 
            borderRadius:5, 
            gap:1
          }}
          {...rest}
          onPress={() => {
            insert()
            navigation.navigate('Assets')
          }}
        >
            <Text>{data.n_contrato} - {data.nome_cliente}</Text>
            <Text>Responsável Vistoria: {data.responsavel_vistoria}</Text>
        </TouchableOpacity>
    )
}