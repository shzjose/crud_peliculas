import Alert from "./alert.js";

export default class EditMovieComponent{
   constructor(){
       this.formUpdate = document.getElementById('formUpdate');
       this.btnUpdate = document.getElementById('btnUpdate');
       this.titleUpdate = document.getElementById('titleUpdate');
       this.yearUpdate = document.getElementById('yearUpdate');

       this.alert = new Alert();
   }

   onClick(callback) {
    this.btnUpdate.onclick = () => {

        if(this.titleUpdate.value === '' || this.yearUpdate.value === ''){
            this.alert.show('Title and year are required');
        }else{
            this.alert.hide();
            callback(this.titleUpdate.value, this.yearUpdate.value);
            this.formUpdate.classList.add('d-none');
        }

        
    };
}
}