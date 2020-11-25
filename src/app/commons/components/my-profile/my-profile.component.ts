import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {ProfileDtoOutput} from '../../../DTOs/profile-dto-output';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
@ViewChild('lastname') lastname: ElementRef;
@ViewChild('firstname') firstname: ElementRef;
@ViewChild('matricule') matricule: ElementRef;
@ViewChild('telephone') telephone: ElementRef;
@ViewChild('descript') descript: ElementRef;

  profile : ProfileDtoOutput;
  isHidden: boolean[] = [false,false,false,false,false];
  patterntelephone = "^[0-9]{10}$";

  constructor(private profileService : ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => this.profile = profile);
  }

  confirmChange(){
    //Todo faire des vérifs sur les valeurs genre téléphone en suivant le pattern etc..
    this.profile.lastname = this.lastname.nativeElement.value;
    this.profile.firstname = this.firstname.nativeElement.value;
    this.profile.telephone = this.telephone.nativeElement.value;
    this.profile.descript = this.descript.nativeElement.value;
    let profileMod = this.profileService.createProfile(this.profile.lastname, this.profile.firstname, this.profile.matricule, this.profile.telephone, this.profile.descript);
    this.profileService.updateProfile(profileMod).subscribe(answer => {console.log(answer)});
  }


  changeHidden(nb : number) {
    this.isHidden[nb]=!this.isHidden[nb];
  }


}
