import { HomePage } from '../pages/home/home';
import { ArcheryAppPage } from '../pages/archery-app/archery-app';
import { GymAppPage } from '../pages/gym-app/gym-app';

export class NombresPages {
    public arrayPaginasMenu: any[] = [
        { title: 'Inicio', component: HomePage, image: '' },
        { title: 'Arquería', component: ArcheryAppPage, image: '' },
        { title: 'Gimnasio', component: GymAppPage, image: '' }
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

export class LiteralesEjercicioModalPage {
    public TITULO_CABECERA_LABEL: String = 'Nuevo ejercicio';
    public TITULO_LABEL: String = 'Título';
    public DESCRIPCION_LABEL: String = 'Descripción';
    public MUSCULOS_LABEL: String = 'Seleccione tipo de ejercicio';
    public MUSCULOS_SELECCIONE: String = 'Seleccione';
    public MUSCULOS_ARRAY_SELECT: String[] = [
        'Pectorales',
        'Dorsales',
        'Lumbares',
        'Piernas',
        'Biceps',
        'Triceps',
        'Hombros',
        'Abdominales'
    ];
    public IMAGENES_LABEL: String = 'Imagen';
    public BUTTON_LABEL: String = 'Añadir ejercicio';
}
