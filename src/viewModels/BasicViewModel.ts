import { action, observable, makeObservable } from 'mobx';

export class BasicViewModel {
	@observable controlText: string = '';
	title?: string = '';

	constructor(title?: string) {
		makeObservable(this);
		this.title = title;
	}

	@action changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value }
		} = e;
		this.controlText = value;
	};
}
