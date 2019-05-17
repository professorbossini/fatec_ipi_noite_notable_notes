import {AngularFireDatabase} from 'angularfire2/database'
import { Injectable } from '@angular/core';


@Injectable()
export class NoteService{

    constructor (private db: AngularFireDatabase){

    }
    notes = [
        {
            id: '1',
            title: 'Firebase',
            date: '2018/01/01',
            content: 'Que tal programar Serverless?'
        },
        {
            id: '2',
            title: 'Angular',
            date: '2018/09/01',
            content: 'Importante para aprender Ionic'

        },
        {
            id: '3',
            title: 'Ionic',
            date: '2019/01/02',
            content: "Aprenda o básico de Ionic"
        }
    ];

    removeNote (note){
        this.db.object("/notes/" + note.$key)
        .remove()
        .then( ()=> {
            console.log("Apagou")
        })
        .catch( (error) =>{
            console.log ("Falhou", error);
            alert ("Falhou");
        })

        // let index = this.notes.indexOf(note);
        // if (index > -1){
        //     this.notes.splice(index, 1);
        // }
    }
    addNote (note){
        //this.notes.push(note);
        this.db.list("/notes/").push({
            title: note.title,
            content: note.content,
            date: note.date
        });
    }

    fetchNotes (){
        return this.db.list("/notes/");
    }

    editNote (note){
        this.db.object ("/notes/" + note.$key).update({
            title: note.title,
            content: note.content,
            date: note.date
        });
    }
}