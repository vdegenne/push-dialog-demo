import {LitElement, html, unsafeCSS} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import {template} from './app-container.template.js';
import styles from './app-container.styles.css?inline';
import {MdDialog} from '@material/web/dialog/dialog.js';
import {makePushDialog} from '../push-dialog.js';

@customElement('app-container')
export class AppContainer extends LitElement {
  static styles = [unsafeCSS(styles)];

  @query('md-dialog') dialog!: MdDialog;

  render() {
    return template.call(this);
  }

  firstUpdated() {
    makePushDialog(this.dialog);
  }
}
