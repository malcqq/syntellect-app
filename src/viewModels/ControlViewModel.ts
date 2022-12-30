import { action, makeObservable } from 'mobx';
import { BasicViewModel } from './BasicViewModel';
import { checkOnlyNumbers } from '../helpers';

export class ControlViewModel extends BasicViewModel {
	constructor(title?: string) {
		super(title);
		makeObservable(this);
	}

	@action clearText = () => {
		this.controlText = '';
	};

	@action replaceText = (replaceableText = 'Hello World') => {
		this.controlText = replaceableText;
	};

	alertControlText = () => {
		alert(this.controlText);
	};

	alertOnlyNumbersText = () => {
		if (checkOnlyNumbers(this.controlText)) {
			this.alertControlText();
		}
	};
}
