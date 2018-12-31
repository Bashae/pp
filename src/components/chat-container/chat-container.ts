import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ChatProvider } from '../../providers/chat/chat';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'chat-container',
  templateUrl: 'chat-container.html'
})
export class ChatContainerComponent {
  @Input() sender;
  @Input() receiver;
  temp: any;
  fullChat: any = [];
  chatText: string = "";

  constructor(
    public chat: ChatProvider,
    public user: UserProvider,
    public changeDetector: ChangeDetectorRef
  ) {}

  ngOnChanges() {
    this.getFullChat();
  }

  getFullChat() {
    let chatId = this.getChatId();
    let actualId, tempChat;

    chatId.then(res => {
      console.log('res');
      if(res) {
        console.log('res a');
        res.docs.forEach(doc => {
          console.log('res b');
          actualId = doc.id;
        })
  
        // tempChat = this.chat.getUsersChat(actualId).valueChanges();
        // tempChat.forEach(res => {
        //   this.fullChat = res;
        // })
      }
    })
    .catch(err => {
      console.log('err');
      this.chat.createNewChat(this.receiver, this.sender);
    })
  }

  getChatId() {
    return this.chat.getUserChatId(this.sender, this.receiver);
  }

  sendChatMessage() {
    let time = Date.now();
    let newMesage = {
      m: this.chatText,
      s_id: this.user.currentUser.ui,
      s_im: this.user.currentUser.im,
      s_n: this.user.currentUser.un,
      time: (time * -1)
    }

    this.chat.sendChatMessage(newMesage);
  }


  //   let userChat = this.chat.getUserChat(this.sender, this.receiver);
  //   userChat.then(res => {
  //     res.forEach(it => {
  //       tempArr.push(it.data()['m']);
  //     })
  //     this.chatMessages = tempArr;
  //     this.changeDetector.detectChanges();
  //     console.log(this.chatMessages);
  //   })
  // }
}
