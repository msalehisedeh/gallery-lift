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
  preview="3"
  layout="large-on-sides"
  [template]="myTeplate"
  [gallery]="myGallery"
  (onselect)="onselect($event)"></gallery-lift>

```

## Attributes

| Attribute       |Details                                                                                |
|---------------------------------------------------------------------------------------------------------|
|preview          | Number of items to be displayed in preview pane.                                      |
|template         | template to be used to display detail information about an item.                      |
|gallery          | List of items to be in the display gallery.                                           |
|layout           | How to display items in the preview pane. options are 'large-on-single', 'split-on-dual', 'large-on-right', 'split-on-quadruple', 'large-on-middle', 'large-on-left', 'large-on-sides'           |

### Layouts

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
|onselect     | published when  `{action, index}`                                                         |


## Revision History

| Version | Description                                                                                   |
|---------|-----------------------------------------------------------------------------------------------|
| 1.0.0   | Initial release.                                                                              |


![alt text](https://raw.githubusercontent.com/msalehisedeh/gallery-lift/master/sample.png  "What you would see when a gallery-lift is used")

![alt text](https://raw.githubusercontent.com/msalehisedeh/gallery-lift/master/sample2.png  "What you would see when a gallery is lifted.")
