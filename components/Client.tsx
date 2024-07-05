import { useNavigation, NavigationProp } from "@react-navigation/native"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { RootStackParamList } from "../scripts/navigationProp"
import { useClientDB, ClientDB } from "../database/useClientDB";


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

    async function insert(){
        try {
            const response = await clientDB.create({
                nome_cliente: data.nome_cliente
            })
            console.log(`Produto cadastrado com ID ${response.insertedRowId}`)
        } catch (error) {
            throw(error)
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
            <Text>{data.id}</Text>
            <Text>{data.responsavel_vistoria}</Text>
        </TouchableOpacity>
    )
}