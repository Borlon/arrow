import { HomePage } from '../pages/home/home';
import { ArcheryAppPage } from '../pages/archery-app/archery-app';
import { GymAppPage } from '../pages/gym-app/gym-app';

export class NombresPages {
    public arrayPaginasMenu = [
        { title: 'Inicio', component: HomePage },
        { title: 'Arquería', component: ArcheryAppPage },
        { title: 'Gimnasio', component: GymAppPage }
    ];
}
