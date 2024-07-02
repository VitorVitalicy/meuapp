//OPERAÇÕES DO BANCO DE DADOS:

import { useSQLiteContext } from "expo-sqlite"

export type ClientDB = {
    id: number
    id_bontempo: number
    nome_cliente: string
    contrato:number
    projetista: string
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
                $nome_cliente: data.nome_cliente,
                $contrato: data.contrato,
                $projetista: data.projetista
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
    
    async function searchByName(nome_cliente: string){
        try{
            const query = "SELECT * FROM clients WHERE nome_cliente LIKE ?"
            const response = await database.getAllAsync<ClientDB>(query, `%${nome_cliente}%`)
            return response
        }catch(err){
            throw(err)
        }
    }

    async function remove(){
        try {
            await database.execAsync("DELETE FROM clients") 
        } catch (error) {
            throw(error)
        }
    }

    return {create, searchByName, remove}
}

