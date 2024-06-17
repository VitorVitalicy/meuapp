//OPERAÇÕES DO BANCO DE DADOS:

import { useSQLiteContext } from "expo-sqlite"

export type ClientDB = {
    id: number
    id_bontempo: number
    name: string
    contrate:number
    designer: string
}

export function useClientDB(){
    const database = useSQLiteContext()

    async function create(data: Omit< ClientDB, "id">){
        const statement = await database.prepareAsync(
            "INSERT INTO clients (id_bontempo, nome_cliente, contrato, projetista) VALUES ($id_bontempo, $nome_cliente, $contrato, $projetista)"
        )
        try{
            const response = await statement.executeAsync({
                $id_bontempo: data.id_bontempo,
                $nome_cliente: data.name,
                $contrato: data.contrate,
                $projetista: data.designer
            })
            // Recuperação do ID do cliente que acabou de ser cadastrado no banco
            const insertedRowId = response.lastInsertRowId.toLocaleString()
            return {insertedRowId}
        }catch(err){
            throw err
        }finally{
            await statement.finalizeAsync() //Boa prática! Recomendação da Documentação
        }
    }

    async function searchByName(name: string){
        try{
            const query = "SELECT * FROM clients WHERE name LIKE ?"

            const response = await database.getAllAsync<ClientDB>(query, `%${name}%`)
            return response
        }catch(err){
            throw(err)
        }
    }

    return {create, searchByName}
}

