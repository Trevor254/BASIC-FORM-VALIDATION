//validation script here

//var reg = /[a-z]/gi;  //g for global //i for case insensitive
// var reg2 = new RegExp(/[a-z]/.'i'); 
const inputs = document.querySelector('input');

const patterns = {
       telephone:/^\d[11]$/,
        username:/^[a-z\d][5,12]$/i,
        password:/^[w@-][8,20]$/
}
//validate function
function validate(field,regex){
    if (regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input)=>{ //using forEach to cycle through each input
  input.addEventListener('keyup',(e)=>{
     //console.log(e.target.attributes.name.value); 
     validate(e.target,patterns[e.target.attributes.name.value])
  })
})