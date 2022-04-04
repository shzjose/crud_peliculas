export default class FilterMovieComponent{
    constructor(){
        this.input = document.getElementById("inputFilter");
        this.table = document.getElementById("table");
        this.tr = this.table.getElementsByTagName("tr");
    }
 
    onKeyUp(){
     this.input.onkeyup = () => {
        var  td, i, txtValue;
        for (i = 0; i < this.tr.length; i++) {
            td = this.tr[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.indexOf(this.input.value) > -1) {
                this.tr[i].style.display = "";
              } else {
                this.tr[i].style.display = "none";
              }
            }       
          }
       };
       
     }
     
     
}