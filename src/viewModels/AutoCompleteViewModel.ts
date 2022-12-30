import { action, observable, makeObservable } from 'mobx';
import { BasicViewModel } from './BasicViewModel';

interface IProps {
	maxCountriesShown: number;
	title?: string;
}
export class AutoCompleteViewModel extends BasicViewModel {
	@observable countries: ICountry[] = [];
	@observable countriesShown = 0;
	activeCountry = {};
	maxCountriesCanShown = 0;

	constructor({ maxCountriesShown, title }: IProps) {
		super(title);
		makeObservable(this);
		this.countriesShown = maxCountriesShown;
		this.maxCountriesCanShown = maxCountriesShown;
	}

	@action setCountries = async (countries: ICountry[]) => {
		this.countries = [...countries];
	};

	@action setActiveCountry = (activeName: string) => {
		if (!activeName) {
			this.controlText = '';
			this.activeCountry = {};
		}
		const foundedCountry = this.countries.find(
			({ name }) => name === activeName
		);
		if (foundedCountry) {
			this.controlText = foundedCountry.name;
			this.activeCountry = foundedCountry;
		}
	};

	@action changeMaxCountriesShowns = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const {
			target: { value }
		} = e;
		let curVal =
			this.maxCountriesCanShown < Number(value)
				? this.maxCountriesCanShown
				: Number(value);
		this.countriesShown = curVal;
	};
}
