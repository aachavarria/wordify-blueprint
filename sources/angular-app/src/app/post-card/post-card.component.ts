import { Component, Input, OnInit } from '@angular/core';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() tags = '';
  @Input() model;
  @Input() showBlurb = false;
  @Input() format = PORTRAIT;
  @Input() classes;
  @Input() numOfComments;
  public mainImage_s;
  public blurb_t;
  public headline_s;
  public dateModified;
  public type;
  public authorAvatarUrl;
  public authorName;

  constructor() {
  }

  ngOnInit(): void {
    this.type = this.format;
    this.mainImage_s = this.model.mainImage_s;
    this.headline_s = this.model.headline_s;
    this.dateModified = this.model.craftercms.dateModified;
    switch (this.format) {
      case PORTRAIT : {
        this.authorAvatarUrl = this.model.authorBio_o[0].profilePic_s;
        this.authorName = this.model.authorBio_o[0].name_s;
        break;
      }
      case IMAGE_BACKGROUND: {
        this.blurb_t = this.model.blurb_t;
        break;
      }
    }
  }

}