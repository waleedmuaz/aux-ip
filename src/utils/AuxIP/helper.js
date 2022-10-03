
function authenticiation() {
    let role = JSON.parse(localStorage.getItem('user'));
    if(role!==null){
        role=role.role[0];
        if(role==="Admin"){
            return true; 
        }
    }
    return false;
}
  
export {authenticiation}