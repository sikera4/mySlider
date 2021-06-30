import {Model} from '../Model/Model';
import {View} from '../View/View';

type PresenterType = {
  model: object,
  view: object,
}

class Presenter {
  model: object;
  view: object;
  constructor(model: object, view: object) {
    this.model = model;
    this.view = view;
  }
}

export {Presenter};