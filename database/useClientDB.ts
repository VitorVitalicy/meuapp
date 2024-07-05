//OPERAÇÕES DO BANCO DE DADOS:

import { useSQLiteContext } from "expo-sqlite"

export type ClientDB = {
    id: number
    nome_cliente: string
}

export function useClientDB(){
    const database = useSQLiteContext()

    async function create(data: Omit< ClientDB, "id">){
        const statement = await database.prepareAsync(
            "INSERT INTO clients (nome_cliente) VALUES ($nome_cliente)"
        )
        try{
            const response = await statement.executeAsync({
                $nome_cliente: data.nome_cliente
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

    async function searchLine(){
        try{
            const query = "SELECT * FROM clients WHERE nome_cliente IS NOT NULL"
            const response = await database.getFirstAsync<ClientDB>(query)
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

    return {create, searchByName, searchLine, remove}
}

