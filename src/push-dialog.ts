import {MdDialog} from '@material/web/dialog/dialog.js';

export function makePushDialog(dialog: MdDialog, stateName: string) {
  function onPopState() {
    const params = new URLSearchParams(location.search);
    if (!params.has('openDialog')) {
      window.removeEventListener('popstate', onPopState);
      dialog.close();
    }
  }

  dialog.addEventListener('opened', () => {
    const params = new URLSearchParams(location.search);
    params.set('openDialog', '');
    history.pushState({}, '', `?${params}`);
    window.addEventListener('popstate', onPopState);
  });

  dialog.addEventListener('closed', () => {
    const params = new URLSearchParams(location.search);
    window.removeEventListener('popstate', onPopState);
    if (params.has('openDialog')) {
      params.delete('openDialog');
      history.replaceState({}, '', `?${params}`);
    }
  });
}
