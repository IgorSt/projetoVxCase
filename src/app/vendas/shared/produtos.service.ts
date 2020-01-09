import { Injectable } from '@angular/core';

import { Produtos } from './../shared/produtos';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private db: AngularFireDatabase) {}

  insert(produto: Produtos) {
    this.db.list('produtos').push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(produto: Produtos, key: string) {
    this.db.list('produtos').update(key, produto)
      .catch((error: any) => {
        console.log(error);
      });
  }

  getAll() {
    return this.db.list('produto')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`produto/${key}`).remove();
  }
}
