import {bindable, bindingMode} from 'aurelia-framework';

/**
 * Dropdown Class. 
 * @export
 * @class Dropdown
 */
export class Dropdown {
    /**
     * The list of options for the dropdown.
     * model : [{label:'label', value:'value'}]
     * @memberOf Dropdown
     */
    @bindable options;
    /**
     * The selected value from the dropdown.
     * @memberOf Dropdown
     */
    @bindable({defaultBindingMode: bindingMode.twoWay}) selectedValue;
    /**
     * Placeholder Text for the dropdown. 
     * @memberOf Dropdown
     */
    @bindable placeholdertext;

    /**
     * Creates an instance of Dropdown.
     * @memberOf Dropdown
     */
    constructor() {
        this.placeholdertext = this.placeholdertext || 'Select an option';
    }
}
