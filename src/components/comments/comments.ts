import { Component, Input } from '@angular/core';
import { CommentsProvider } from '../../providers/comments/comments';
import { UserProvider } from '../../providers/user/user';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {
  @Input() postId: any;
  comments: any[];
  commentText: string = "";

  constructor(
    public commentService: CommentsProvider,
    public post: PostProvider,
    public user: UserProvider
  ) {}

  ngOnChanges() {
    this.getComments();
  }

  getComments() {
    let comRef = this.commentService.getComments(this.postId).valueChanges();
    comRef.forEach(res => {
      this.comments = res;
    })
  }

  submitComment() {
    if(this.commentText !== "") {
      let d = Date.now();

      let newCom = {
        t: this.commentText,
        u_id: this.user.currentUser.ui,
        u_n: this.user.currentUser.un,
        u_im: this.user.currentUser.im,
        time: (d * -1)
      }
      this.commentService.uploadComment(newCom).then(res => {
        this.commentText = "";
        this.post.updateCommentCount(this.postId, (this.comments.length))
      })
    }
  }

}
