import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class VideoService {
    constructor (private httpClient: HttpClient) {}

    getVideoList(): Observable<Video[]> {
        return this.httpClient.get<Video[]>
        ('http://localhost:3000/video')
    }
}

export class Video {
    title: string
    url: string
    courseId: number
}