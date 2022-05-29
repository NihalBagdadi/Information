document.getElementById("btnHit").addEventListener("click", function(){
   var fn=document.getElementById("txtFirstName").value
   var ln=document.getElementById("txtLastName").value
   var p={firstname:fn,lastname:ln} 
    // const {data}=await axios.post("https://localhost:7025/api/AddInfo",
    // p
    // )
    
    // console.log(data)
    axios.post("https://localhost:7025/api/AddInfo",
    p).then(function(res){
        console.log(res)
    }).catch(function(err){
        console.log(err)
    })

    // axios.post("https://localhost:7025/api/AddInfo",
    // {firstname:fn,lastname:ln}).then(res=>{
    //     console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    // })

})