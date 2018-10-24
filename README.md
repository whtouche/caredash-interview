## Wireframe Come Alive

This is a `React` application created with `create-react-app`. It uses `react-router` for routing but otherwise has no external dependencies.

This application is deployed using `Now` and can be accessed at https://caredash-msppwpbhji.now.sh

I used [Hipster Ipsum](https://hipsum.co/) for the dummy text.

The Menu Item dropdowns contain buttons that do not trigger any routing or linking behavior.

Filling out the form and pressing either of the buttons will console.log the form data.

Clicking any of the links in the bottom-left will display the title in the center of the content area - the same component was reused for all of these.

All CSS was hand-written. The design is not much to look at, but using flexbox and relative units means the layout integrity is retained regardless of the size of the viewport. However, more could have been done for the layout, for example making it into a single column, with a hamburger menu for the drop downs, past a certain viewport size.
