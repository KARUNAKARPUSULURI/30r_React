conditional rendering: -

conditional :- based on a condition

rendering :- displaying content in the ui 

name = ""

<h1>{}</h1>

if - else

else if ladder

switch

ternary operator -> cond ? name : "not found"


-> login authentication -> 

online book store -> 
landing page -> login -> public routes
landing page -> dashboard -> private routes
{
    data : [{},{}],
    status : 200 || "OK",
    token : "dfghjklgdfghjkl;kjhg.udfghjklfdkljfdghjkydflog.jfgdxgfxdfglgfdxfgd"
}
fetch(url/login).then(res => res.json()).then(data => {
    if(data.status == 200){
        window.location.href = "/dashboard"
    }
} )
