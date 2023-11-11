import { ICreateStoreAPI } from "dynadux";

export interface IBovinState {
  bovins: Array<any>;
}

export enum BovinActions {
  RESET = 'BV__RESET',
  SET_BOVINS = 'BV__SET_BOVINS',
}

export const createBovinSection = (store: ICreateStoreAPI) => {
  const section = store.createSection<IBovinState>({
    section: 'bovinSection',
    initialState: {
      bovins: [],
    },
    reducers: {
      [BovinActions.RESET]: () => ({bovins:[]}),
      [BovinActions.SET_BOVINS]: ({payload}) => ({bovins: payload}),
    },
  });

  return {
    state: {
      get bovins(): Array<any> {
        return section.state.bovins;
      },
    },
    actions: {
      reset: (): void => section.dispatch<void>(BovinActions.RESET),
      setBovins: (bovins: Array<any>): void => section.dispatch<Array<any>>(BovinActions.SET_BOVINS, bovins),
    },
  };
};
