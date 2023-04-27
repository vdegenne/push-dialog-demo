import {html} from 'lit';
import {AppContainer} from './app-container.js';

export function template(this: AppContainer) {
  return html`
    <md-tonal-button
      @click=${() => {
        this.dialog.show();
      }}
      >Open dialog</md-tonal-button
    >
    <md-dialog fullscreen>
      <p>Now when you go back, the dialog will close.</p>
      <p>You can also close the dialog normally.</p>
      <md-tonal-button slot="footer" dialogAction="close">Close</md-tonal-button>
    </md-dialog>
  `;
}
