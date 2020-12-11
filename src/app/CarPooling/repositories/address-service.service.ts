import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AddresseGetDtoOutput} from '../types/address-get-dto-output';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CarpoolingInfoModalComponent} from '../carpooling-research/Components/carpooling-info/carpooling-info-modal/carpooling-info-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private AdresseSubject: BehaviorSubject<AddresseGetDtoOutput>;
  private addresseVoit : Observable<AddresseGetDtoOutput>;

  infos:string;
  info: BehaviorSubject<string>;

  public URL: string = environment.serverAddress + 'api/address';

  constructor(public http: HttpClient,private dialog: MatDialog) {
    this.AdresseSubject = new BehaviorSubject<AddresseGetDtoOutput>(JSON.parse(localStorage.getItem('address')));
    this.addresseVoit = this.AdresseSubject.asObservable();
    this.info = new BehaviorSubject(this.infos)
  }

  newInfo(infos : string) {
    this.info.next(infos);
  }

  public query(): Observable<AddresseGetDtoOutput> {
    return this.http.get<AddresseGetDtoOutput>(this.URL);
  }

  //Research modal
  ResearchModalRef: MatDialogRef<CarpoolingInfoModalComponent>;

  //Opens the research modal
  openResearchModal(): void {

    this.ResearchModalRef = this.dialog.open(CarpoolingInfoModalComponent, {panelClass: 'research-dialog'});

  }

}
