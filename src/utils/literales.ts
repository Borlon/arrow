import { HomePage } from '../pages/home/home';
import { ArcheryAppPage } from '../pages/archery-app/archery-app';
import { GymAppPage } from '../pages/gym-app/gym-app';

export class NombresPages {
    public arrayPaginasMenu: any[] = [
        { title: 'Inicio', component: HomePage, image: '' },
        { title: 'Arquería', component: ArcheryAppPage, image: '../../assets/imgs/logo-arco-inicio.png' },
        { title: 'Gimnasio', component: GymAppPage, image: '../../assets/imgs/logo-gym-inicio.jpg' }
    ];
}

export class VariablesSesion {
    public PLATAFORMA: String = 'plataforma';
}

export class Plataformas {
    public ANDROID: String = 'android';
    public CORDOVA: String = 'cordova';
    public CORE: String = 'core';
    public IOS: String = 'ios';
    public IPAD: String = 'ipad';
    public IPHONE: String = 'iphone';
    public MOBILE: String = 'mobile';
    public MOBILEWEB: String = 'mobileweb';
    public PHABLET: String = 'phablet';
    public TABLET: String = 'tablet';
    public WINDOWS: String = 'windows';
}
