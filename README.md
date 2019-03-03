# Welcome to gallery lift!

Have you ever wanted a gallery view that can display images and videos the way you want it? gallery lift is a configurable tool that allows you to pick and choose how your gallery is displayed.

Please send your requests or comments through the link provided below:

[Live Demo](https://gallery-lift.stackblitz.io) | [Source code](https://github.com/msalehisedeh/gallery-lift/tree/master/src/app) | [Comments/Requests](https://github.com/msalehisedeh/gallery-lift/issues)

```
DEPENDENCIES: 
	"font-awesome": "^4.7.0", 
```

## Sample Use

```javascript
<gallery-lift
  [hoverMessage]="hoverMessage"
  [sideBySide]="true"
  [showMessageOnHover]="showMessageOnHover"
  [maxHeight]="maxHeight"
  [showTitleOnHover]="showTitleOnHover"
  [layout]="viewOption"
  [liftOnZero]="liftOnZero"
  [showRemainingCount]="showRemainingCount"
  [template]="myTeplate"
  [gallery]="myGallery"
  (onaction)="onaction($event)"
  (onselect)="onselect($event)"></gallery-lift>

<ng-template #myTeplate let-detail="data" let-current="selected" let-total="total">
    <span>{{current}} of {{total}}</span>
    <h3>{{detail.title}}</h3>
    <p>{{detail.description}}</p>
</ng-template>
```

## Attributes

| Attribute       |Details                                                                                |
|-----------------|---------------------------------------------------------------------------------------|
|template         | template to be used to display detail information about an item.                      |
|gallery          | List of items to be in the display gallery.                                           |
|liftOnZero       | Start from zero index when lifting the gallery or from the index of entry which is selected. |
|sideBySide       | Arrange the entry and content side by side or vertical.                               |
|showRemainingCount| Show the remaining number of entries on last item of preview pane.                   |
|showTitleOnHover | Show the entry title on hover over preview pane.                                      |
|showMessageOnHover| Show the view more message on hover over preview pane.                               |
|hoverMessage     | set the view more message to be displayed on hover over preview pane.                 |
|maxHeight        | set the maximum height of the preview pane. Default is 400 pixels.                    |
|layout           | How to display items in the preview pane. options are 'large-on-single', 'split-on-dual', 'large-on-right', 'split-on-quadruple', 'large-on-middle', 'large-on-left', 'large-on-sides'           |

## Layouts

| Layout          |Details                                                                                |
|-----------------|---------------------------------------------------------------------------------------|
|large-on-single  |One large entry only filling the entire pane.                                          |
|split-on-dual    |Split the pane between two entries. one row and two columns.                           |
|large-on-right   |Tow rows of small entries on left and one row of large entry on right of the pane.     |
|split-on-quadruple| Split the pane equally on 4 entries two rows and two columns.                        |
|large-on-middle  |One row of large entry in the middle and two rows of entries on each side of the middle entry.|
|large-on-left    |Tow rows of small entries on right and one row of large entry on left of the pane.     |
|large-on-sides   |One row of large entry on each sides and two rows of entries in the middle.            |


## Events
You can register to receive the following events:

| Event       |Details                                                                                    |
|-------------|-------------------------------------------------------------------------------------------|
|onselect     | published when a preview entry selected  `{action, index}`                                |
|onaction     | published when a selected entry viewed or action performed on it `{action, index, date}`  |

## Sample data

```javascript
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
    src: "https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v2680286.mp4"
  },
  {
    data: {
      title: "Atlantic Park",
      description: 'Atlantic Park is just 1,300 feet from Mallorca’s Magalluf Beach. It includes a lagoon-style swimming pool and air conditioned rooms with a private balcony and cable TV.'
    },
    type: 'image',
    src: "https://q-fa.bstatic.com/images/hotel/max1024x768/126/12642274.jpg"
  }
  ];
```

## Revision History

| Version | Description                                                                                   |
|---------|-----------------------------------------------------------------------------------------------|
| 1.0.5   | Accidentally put the full-screen option on the lift and forgot to put code behind it. Added the code and some new ideas lead to adding sideBySide attribute. |
| 1.0.4   | Added more attributes to allow you more control over is component.                            |
| 1.0.3   | Updated the READ ME file.                                                                     |
| 1.0.2   | Fixed a few CSS issues. Added liftOnZero attribute to enforce lift policy and showRemainingCount attribute to show remaining number of entries in the list. |
| 1.0.1   | Removed unused attribute. Added event handling on mouse over and play video.                  |
| 1.0.0   | Initial release.                                                                              |


![alt text](https://raw.githubusercontent.com/msalehisedeh/gallery-lift/master/sample2.png  "What you would see when a gallery is lifted.")
