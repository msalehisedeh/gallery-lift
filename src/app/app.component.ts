import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallery lift';
  events: string[] = [];
  maxHeight = '400';
  viewOption = 'large-on-right';
  hoverMessage='View Gallery...';
  liftOnZero = true;
  showMessageOnHover = true;
  showRemainingCount = true;
  showTitleOnHover = true;
  magnifyImageEnabled = false;
  sideBySide = true;

  myGallery= [{
    data: {
      title: "Tydings Park",
      description: 'Tydings Memorial Park is the perfect location for outdoor fun, ranging from a picnic to a day relaxing on the bay.  Located on Commerce Street, Tydings Park features 22 acres overlooking the water.'
    },
    type: 'image',
    src: "https://havredegracemd.gov/wp-content/uploads/2014/05/Tydings-Park-Havre-de-Grace-Maryland.jpg"
  },
  {
    data: {
      title: "Bute Park",
      description: 'Bute Park is a major park in the city of Cardiff, capital of Wales. It comprises 130 acres (53 ha) of landscaped gardens and parkland that once formed the grounds of Cardiff Castle. The park is named after the 3rd Marquess of Bute, whose family owned the castle.'
    },
    type: 'image',
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bute_Park%2C_Cardiff.jpg/800px-Bute_Park%2C_Cardiff.jpg"
  },
  {
    data: {
      title: "Yosemite Park",
      description: 'Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area.'
    },
    type: 'video',
    src: "https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v2680286.mp4",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nevada_Fall%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg/800px-Nevada_Fall%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg"
  },
  {
    data: {
      title: "Atlantic Park",
      description: 'Atlantic Park is just 1,300 feet from Mallorca’s Magalluf Beach. It includes a lagoon-style swimming pool and air conditioned rooms with a private balcony and cable TV.'
    },
    type: 'image',
    src: "https://q-fa.bstatic.com/images/hotel/max1024x768/126/12642274.jpg"
  },
  {
    data: {
      title: "Alfred B. Maclay Gardens State Park",
      description: 'A masterpiece of floral architecture, the gardens feature a picturesque brick walkway, secret garden, reflection pool, walled garden and hundreds of camellias and azaleas.'
    },
    type: 'image',
    src: "https://www.floridastateparks.org/sites/default/files/styles/gallery/public/media/image/30719268_Alfred_B__Maclay_Gardens_State_Park_Hidde_SV2tu5TDVo0MMSHiEBxD8pu18q0ABlZBh.jpg?itok=zLm0AMk_"
  },
  {
    data: {
      title: "Black Mudd Park",
      description: 'Louisville Parks and Recreation was established in 1968, combining the Louisville City Parks Department (founded in 1888) and the Jefferson County Parks Department (founded in the mid-1940s).'
    },
    type: 'image',
    src: "https://louisvilleky.gov/sites/default/files/styles/park_header_image/public/parks/park_event_images/black_mudd_web_header.jpg?itok=ZjuDMGwm"
  }
  ];

  constructor() {
  }

  onaction(event: any) {
    this.events.push(event);
  }
  onselect(event: any) {
    this.events.push(event);
  }
}
