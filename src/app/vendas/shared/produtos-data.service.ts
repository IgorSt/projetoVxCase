import { ProdutosService } from './../shared/produtos.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ProdutoDataService {
    private produtoSource = new BehaviorSubject({ produto: null, key: ''});
    currentProduto = this.produtoSource.asObservable();

    constructor() {}

    changeProduto(produto: ProdutosService, key: string) {
        this.produtoSource.next({ produto: produto, key: key});
    }
}
