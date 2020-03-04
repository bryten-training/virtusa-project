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
        (`/api/video/`)
    }

    getVideoData(): Observable<VideoDisplay[]> {
        return this.httpClient.get<VideoDisplay[]>
        ("/api/video/")
    }
}

export class Video {
    courseName: string;
    id: number;
    videoData: object[];
    icon: string;
}

export class VideoDisplay {
    id: number;
    title: string;
    url: string;
}