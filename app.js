const btn=document.querySelector('.button')
 btn.onclick=()=>{
    const req=new XMLHttpRequest()
     req.open("GET",'people.json')
     req.setRequestHeader("Content-type","application/json")
     req.send()
     req.addEventListener('load',()=>{
         const data=JSON.parse(req.response)
         data.forEach(people=>{
             const div=document.createElement('div')
             div.innerHTML=people.name
             document.body.append(div)
             const div2=document.createElement('div')
             div2.innerHTML=people.age+`years old`
             document.body.append(div2)
         })
     })
 }