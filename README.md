# ng-autogrow

An AngularJS directive for autogrowing textareas. 

It automagically adjusts the height of textareas so you don't have to vertically scroll.

👯 [View the demo here](https://tinacious.github.io/ng-autogrow)

## Usage

Add it as a dependency to your module.

```js
angular.module('myApp', ['ng-autogrow'])
```

Use the directive and any configuration as so:

```html
<textarea 
  autogrow 
  autogrow-min-height="100">
</textarea>
```

### Options

- `autogrow-min-height`: A minimum height for the textarea. Default: 0
