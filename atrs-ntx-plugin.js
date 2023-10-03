import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class AssetTransferRS extends LitElement {
  
  static properties = {
    repeatingSection: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Asset Transfer Repeating Section',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        repeatingSection: {
          type: 'string',
          title: 'Repeating Section Data',
          description: 'Asset Transfer Repeating Section data to reconfigure'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.repeatingSection = `<th class="ms-rteTableHeaderFirstCol-default" style="text-align: right"><strong>Cost Breakdown</strong></th><table class="ms-rteTable-default " border="1" cellspacing="0" style="font-size: 1em"><tr><th>Item Description</th><th>Transfer From Asset Number (DAX #)</th><th>Transfer From Equipment Number (EAM #)</th><th>Transfer To Asset Number (DAX #)</th><th>Transfer To Equipment Number (EAM #)</th><th>Net Book Value</th><th>Transfer Value</th></tr><tr><td>Line 1</td><td>AN 1</td><td></td><td></td><td></td><td>$1.00</td><td>$1.00</td></tr><tr><td>Line 2</td><td></td><td>EN 2</td><td></td><td></td><td>$2.02</td><td>$2.02</td></tr><tr><td>Line 3</td><td></td><td></td><td>EN 3</td><td></td><td>$3.00</td><td>$3.00</td></tr><tr><td>Line 4</td><td></td><td></td><td></td><td>EN 4</td><td>$4.40</td><td>$4.40</td></tr></table>`;
  }

  render() {
    return html ``;
  }

}

// registering the web component
const elementName = 'repeating-section-table';
customElements.define(elementName, AssetTransferRS);