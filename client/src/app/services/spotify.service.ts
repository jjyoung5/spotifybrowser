import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  expressBaseUrl: string = 'http://127.0.0.1:8888';

  constructor(private http: HttpClient) { }

  private sendRequestToExpress(endpoint: string): Promise<any> {
    var uri: string = this.expressBaseUrl + endpoint;

    return firstValueFrom(this.http.get(uri)).then((response) => {
      return response;
    }, (err) => {
      return err;
    });
  }

  aboutMe(): Promise<ProfileData> {
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category: string, resource: string): Promise<ResourceData[]> {
    return this.sendRequestToExpress(`/search/${category}/${encodeURIComponent(resource)}`).then((data) => {
      if (category === 'artist') {
        return data.artists.items.map((item: any) => new ArtistData(item));
      } else if (category === 'album') {
        return data.albums.items.map((item: any) => new AlbumData(item));
      } else {
        return data.tracks.items.map((item: any) => new TrackData(item));
      }
    });
  }

  getArtist(artistId: string): Promise<ArtistData> {
    return this.sendRequestToExpress(`/artist/${encodeURIComponent(artistId)}`).then((data) => {
      return new ArtistData(data);
    });
  }

  getTopTracksForArtist(artistId: string): Promise<TrackData[]> {
    return this.sendRequestToExpress(`/artist-top-tracks/${encodeURIComponent(artistId)}`).then((data) => {
      return data.tracks.map((item: any) => new TrackData(item));
    });
  }

  getAlbumsForArtist(artistId: string): Promise<AlbumData[]> {
    return this.sendRequestToExpress(`/artist-albums/${encodeURIComponent(artistId)}`).then((data) => {
      return data.items.map((item: any) => new AlbumData(item));
    });
  }

  getAlbum(albumId: string): Promise<AlbumData> {
    return this.sendRequestToExpress(`/album/${encodeURIComponent(albumId)}`).then((data) => {
      return new AlbumData(data);
    });
  }

  getTracksForAlbum(albumId: string): Promise<TrackData[]> {
    return this.sendRequestToExpress(`/album-tracks/${encodeURIComponent(albumId)}`).then((data) => {
      return data.items.map((item: any) => new TrackData(item));
    });
  }

  getTrack(trackId: string): Promise<TrackData> {
    return this.sendRequestToExpress(`/track/${encodeURIComponent(trackId)}`).then((data) => {
      return new TrackData(data);
    });
  }
}