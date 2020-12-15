import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AddresseGetDtoOutput} from '../types/address-get-dto-output';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CarpoolingInfoModalComponent} from '../carpooling-research/Components/carpooling-info/carpooling-info-modal/carpooling-info-modal.component';
import {IdUserByIdAddress} from "../types/id-user-by-id-address";
import {UserService} from '../../services/user.service';
import {ConfirmationPipe} from '../pipes/confirmation.pipe';
import {AddresseOutputPipe} from '../pipes/addresse-output.pipe';
import {AddressOutput} from '../types/address-output';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private AdresseSubject: BehaviorSubject<AddresseGetDtoOutput>;
  private addresseVoit : Observable<AddresseGetDtoOutput>;

  infos:string;
  info: BehaviorSubject<string>;
  profils:string;
  profil: BehaviorSubject<string>;
  voitures:string;
  voiture: BehaviorSubject<string>;
  idRequestReceivers: number;
  idRequestReceiver: BehaviorSubject<number>;

  public URL: string = environment.serverAddress + 'api/address';

  constructor(public http: HttpClient,private dialog: MatDialog, private userService : UserService) {
    this.AdresseSubject = new BehaviorSubject<AddresseGetDtoOutput>(JSON.parse(localStorage.getItem('address')));
    this.addresseVoit = this.AdresseSubject.asObservable();
    this.info = new BehaviorSubject(this.infos);
    this.profil = new BehaviorSubject(this.profils);
    this.voiture = new BehaviorSubject(this.voitures);
    this.idRequestReceiver = new BehaviorSubject(this.idRequestReceivers)
  }

  newInfo(infos : string) {
    this.info.next(infos);
  }

  newProfil(profils : string){
    this.profil.next(profils);
  }

  newVoiture(voit : string){
    this.voiture.next(voit);
  }

  newIdRequestReceiver(idRequest : number){
    this.idRequestReceiver.next(idRequest);
  }

  public query(): Observable<AddresseGetDtoOutput> {
    return this.http.get<AddresseGetDtoOutput>(this.URL);
  }

  public getUserByIdAddress(idAddress) : Promise<IdUserByIdAddress>{
    return this.http.get<IdUserByIdAddress>(this.URL + '/' + idAddress + '/users').toPromise();
  }

  public getAddressByIdUser() : Observable<AddresseGetDtoOutput>{
    return this.http.get<AddresseGetDtoOutput>(this.URL + '/' + this.userService.userValue.id + '/address');
  }

  public createAddressOutput(street : string, number : number, postaCode : number, city : string, country : string, longitude : string, latitude : string){
    return new AddresseOutputPipe().transform(street, number, postaCode, city, country, longitude, latitude);
  }

  public updateAddress(idUser : number, inputDtoAddress : AddressOutput){
    return this.http.put(this.URL + '/' + idUser, inputDtoAddress);
  }

  //Research modal
  ResearchModalRef: MatDialogRef<CarpoolingInfoModalComponent>;

  //Opens the research modal
  openResearchModal(): void {

    this.ResearchModalRef = this.dialog.open(CarpoolingInfoModalComponent, {panelClass: 'research-dialog'});

  }

}
