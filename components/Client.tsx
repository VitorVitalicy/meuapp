import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    data: {
        id_bontempo: number
        nome_cliente: string
        contrato:number
        projetista: string
    }
}

export function Client({ data, ...rest }: Props){
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={{
            backgroundColor:"#CCC",
            height: 120,
            padding: 24, 
            borderRadius:5, 
            gap:1
          }}
          {...rest}
          //onPress={() => navigation.navigate('Assets')}
        >
            <Text>{data.id_bontempo} - {data.nome_cliente}</Text>
            <Text>{data.contrato}</Text>
            <Text>{data.projetista}</Text>
        </TouchableOpacity>
    )
}