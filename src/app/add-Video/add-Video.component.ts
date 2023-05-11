import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../model/Video';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video: Video = { id: 5, title: '', genre: '', public: false, nbrShared: 0 };
  message!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('http://localhost:3000/videos', this.video)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'La vidéo a été ajoutée avec succès.';
        },
        (error) => {
          console.log(error);
          this.message = 'Erreur lors de l\'ajout de la vidéo.';
        }
      );
  }

}
