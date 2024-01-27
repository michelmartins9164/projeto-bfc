import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  alunos: any[] = [];
  constructor(private fb: AngularFirestore) {}
  ngOnInit() {
    this.listar();
  }

  listar() {
    this.fb
      .collection('alunos')
      .valueChanges()
      .subscribe((alunos) => {
        this.alunos = alunos;
        console.log(alunos);
      });
  }
}
