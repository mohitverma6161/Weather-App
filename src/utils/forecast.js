const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=ff39b49abbfcc2fdfbd031678988f84f&query='+latitude+','+longitude+'&units=m'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather services',undefined)
        }
        else if(response.body.error){
        callback('Unable to find location',undefined)
        }
        else
        {
        //console.log(response.body.current)
        callback(undefined,'It is currently '+response.body.current.temperature+' degrees out.It feels like '+response.body.current.feelslike)
        }
    })
}
//

module.exports=forecast