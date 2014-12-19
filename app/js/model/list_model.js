import BaseModel from 'js/model/base_model';

export default class ListModel extends BaseModel {
  getAppList() {
    return {
      'contacts': 'https://github.com/fxos/contacts/blob/master/app.zip'
    };
  }
}
