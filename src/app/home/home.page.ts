import { Component, OnInit } from '@angular/core';

//actionSheet
import { ActionSheetController } from '@ionic/angular';

//AlertController
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  //多选
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];


  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) { 

  }

  ngOnInit() {
  }

  //actionSheet 调用
  async actionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '标题提示',
      buttons: [{
        text: '删除',
        icon: 'trash',
        handler: () => {
          console.log('删除 clicked');
        }
      }, {
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        // icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: '取消',
        // icon: 'close',
        // role: 'cancel',
        role: 'destructive',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async showAlter() {

    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');

            this.showTip();
          }
        }
      ]
    });

    await alert.present();
  
  }

  async showTip(){
    const alert = await this.alertController.create({
      header: '确认提醒',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }


  //scroll
  logScrollStart() {
    console.log('logScrollStart')
  }

  logScrolling(e) {
    console.log('logScrolling',e)
  }

  logScrollEnd() {
    console.log('logScrollEnd')

  }

  //ion-content　内置方法(Methods)
  // getScrollElement() => Promise 
  // scrollByPoint(x: number, y: number, duration: number) => Promise 
  // scrollToBottom(duration?: number) => Promise
  // scrollToPoint(x: number | null | undefined, y: number | null | undefined, duration?: number) => Promise 
  // scrollToTop(duration?: number) => Promise
}
