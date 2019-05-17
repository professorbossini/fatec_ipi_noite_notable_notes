export class NoteService{
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
        let index = this.notes.indexOf(note);
        if (index > -1){
            this.notes.splice(index, 1);
        }
    }
    addNote (note){
        this.notes.push(note);
    }
}