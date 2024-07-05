// INTERGAÇÃO COM O SQLite:
  //const clientDB = useClientDB()

  // async function insert(responseByGet){
  //   try{
  //     for (let obj of responseByGet){
  //       // if(isNaN(Number(id_bontempo)) || isNaN(Number(contrato))){
  //       //   return Alert.alert("Formato Inválido", "Valores de id_bontempo e contrato não são números...")
  //       // }

  //       const response = await clientDB.create({
  //         id_bontempo: obj.id,
  //         nome_cliente: obj.nome_cliente,
  //         contrato: obj.n_contrato,
  //         projetista: obj.consultor}
  //       )
  //       console.log(`Produto cadastrado com ID ${response.insertedRowId}`)
  //     }
  //     list()
  //   }catch(err){
  //     console.log(`Erro BD: ${err}`)
  //   }
  // }

  // async function remove(){
  //   try {
  //     await clientDB.remove()
  //     console.log("Remoção completa")
  //   } catch (error) {
  //     console.log(`Erro ao remover: ${error}`)
  //   }
  // }

  // async function list(){
  //   try{
  //     const response = await clientDB.searchByName(search)
  //     SetNameClient(response)
  //   }catch(err){
  //     console.log(`Erro de listagem: ${err}`)
  //   }
  // }

  // useEffect(()=>{
  //     list()
  //   },[search])