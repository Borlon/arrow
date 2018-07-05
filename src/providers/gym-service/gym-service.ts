import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { EjercicioBean } from '../../beans/ejercicio';

/*
  Generated class for the GymServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GymServiceProvider {

  db: SQLiteObject = null;

  ejercicios: any[];

  constructor(public http: HttpClient) {
    console.log('Hello GymServiceProvider Provider');
  }

  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }

  createTable() {
    // tslint:disable-next-line:max-line-length
    const sql = 'CREATE TABLE IF NOT EXISTS ejercicios(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descripcion TEXT, musculo TEXT, imagen TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll() {
    const sql = 'SELECT * FROM ejercicios';
    return this.db.executeSql(sql, [])
      .then(response => {
        console.log('Respuesta correcta getAll');
        this.ejercicios = [];
        for (let index = 0; index < response.rows.length; index++) {
          this.ejercicios.push(response.rows.item(index));
        }
        return Promise.resolve(this.ejercicios);
      })
      .catch(error => Promise.reject(error));
  }

  create(ejercicio: EjercicioBean) {
    console.log('Entra en create');
    console.log(ejercicio);
    const sql = 'INSERT INTO ejercicios(titulo, descripcion, musculo, imagen) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [ejercicio.titulo, ejercicio.descripcion, ejercicio.musculo, ejercicio.imagen]);
  }
}
