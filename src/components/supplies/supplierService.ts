import agricclienthttp from "../../https/AgricClientHttp";



class SupplierService{
    async get(id:number) :Promise<any>{
        try{
            let result = await agricclienthttp.get('/suppliers');
            return result.data
        }catch(e){
            return {
                name:"test",
                address:"address Test",
                phone:"373784849"
            }
        }
      
    }
}
export const supplierService= new SupplierService();
