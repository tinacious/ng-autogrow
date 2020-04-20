angular
  .module('ng-autogrow', [])
  .directive('autogrow', function () {
    /**
     * Given a DOM element, resets the height depending on the computed height.
     * @param element HTMLElement
     * @param minHeight Number
     * @return Number
     */
    const autoExpand = (element, minHeight = 0) => {
      // Reset height
      element.style.height = `${minHeight}px`;

      // Get computed styles
      const computed = window.getComputedStyle(element);

      // Sum all the inner box model properties
      const boxModelValues = [
        'border-top-width',
        'border-bottom-width',
        'padding-top',
        'padding-bottom'
      ].reduce((accum, current) => (
        accum + parseInt(computed.getPropertyValue(current), 10)
      ), 0);
      const height = boxModelValues + element.scrollHeight;

      const finalHeight = Math.max(height, minHeight);
      element.style.height = `${finalHeight}px`;

      return finalHeight;
    };

    return {
      restrict: 'A',

      link: function (scope, angularElement, attributes) {
        const minHeight = parseInt(attributes.autogrowMinHeight, 10);

        // When it loads
        angularElement.ready(() => {
          autoExpand(angularElement[0], minHeight);
        });

        // When the input changes
        angularElement.bind('input', (event) => {
          autoExpand(event.target, minHeight);
        });
      }
    }
  });
