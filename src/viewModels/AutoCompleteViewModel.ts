import { action, makeObservable } from 'mobx';
import { BasicViewModel } from './BasicViewModel';

export class AutoCompleteViewModel extends BasicViewModel {
	title?: string = '';

	constructor(title?: string) {
		super();
		makeObservable(this);
		this.title = title;
	}

	@action clearText = () => {
		this.controlText = '';
	};
}
