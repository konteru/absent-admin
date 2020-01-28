import axios from 'axios'
export default{
    async makePOSTrequest(url,params){
        let data = ""
        await axios.post(url,params).then((response)=>{
            data  = response.data
            return data
        },(error)=>{
            console.log(error)
        })
        return data
    }
}