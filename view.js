import AddMovieComponent from "./components/add-movie.js";
import FilterMovieComponent from "./components/filter-movie.js";
import EditMovieComponent from "./components/edit-movie.js";

export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.updateForm = document.getElementById('formUpdate');
        this.formUpdate = document.getElementById('formUpdate');
        this.btnUpdate = document.getElementById('btnUpdate');
        this.titleUpdate = document.getElementById('titleUpdate');
        this.yearUpdate = document.getElementById('yearUpdate');

        this.addMovieComponent = new AddMovieComponent();
        this.filterMovieComponent = new FilterMovieComponent();
        this.editMovieComponent = new EditMovieComponent();

        this.addMovieComponent.onClick( (t,y) => this.addMovie(t,y) );
        this.filterMovieComponent.onKeyUp();

    }

    setModel(model){
        this.model = model;
    }

    render() {
        const movies = this.model.getMovies();
        movies.forEach(movie => this.createRow(movie));
    }

    addMovie(title, year){
        const movie = this.model.addMovie(title, year);
        this.createRow(movie);
    }

    removeMovie(id){
        this.model.removeMovie(id);
        this.removeRow(id);
    }

    editMovie(movie){
        this.titleUpdate.value = ""+movie.title+"";
        this.yearUpdate.value = ""+movie.year+"";
        this.updateForm.classList.remove('d-none');
        this.btnUpdate.onclick = () => {
            this.model.updateMovie(movie.id,this.titleUpdate.value,this.yearUpdate.value, movie.viewIt);
        }
    }

    toogleViewIt(id){
        this.model.toogleViewIt(id);
    }

    createRow(movie){

        const row = this.table.insertRow();
        row.setAttribute('id', movie.id);
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.year}</td>
            <td class="text-center"></td>
            <td class="text-right"></td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = movie.viewIt;
        checkbox.onclick = () => this.toogleViewIt(movie.id);
        row.children[2].appendChild(checkbox);

        const editBtn = document.createElement('editButton');
        editBtn.classList.add('btn', 'btn-primary',  'mb-1', 'ml-1');
        editBtn.innerHTML = '<i class="fa fa-edit"></i>';
        editBtn.onclick = () => this.editMovie(movie);
        row.children[3].appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeMovie(movie.id);
        row.children[3].appendChild(removeBtn);
    }

    removeRow(id){
        document.getElementById(id).remove();
    }
}