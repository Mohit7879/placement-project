
// using searchjs api to search job
module.exports.jobpage=async (req,res)=>{
  
    
    
 let body=String(req.body.search);
 let s=body.split(" ");
  // console.log(s.length);
   var str='';
 for(let i=0;i<s.length;i++){
   // str+=s[i]+"%20"
   if(i==s.length-1)
  {
      str+=s[i]+'';
  }else{
     str+=s[i]+"%20";
  }
 }



//  url 
    const url = `https://jsearch.p.rapidapi.com/search?query=${str}&page=1&num_pages=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7253a72f50msh00734362cfc7ef2p103f8ajsnddfd86466ea4',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
       
        let job=JSON.parse(result)
      // console.log(result);
        return res.render('jobs',{
            jobs:job
        })
    } catch (error) {
        console.error(error);
    }


}