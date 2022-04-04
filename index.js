import View from '/view.js';
import MovieModel from '/model.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new MovieModel();
    const view = new View();

    view.setModel(model);
    model.setView(view);

    view.render();
});
