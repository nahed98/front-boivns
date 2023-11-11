import { ICreateStoreAPI } from "dynadux";

export interface ISupplierState {
  supplier: any;
  supplies: Array<any>;

}

export enum SupplierActions {
  SET_SUPPLIES = 'SR__SET_SUPPLIES',
  SET_SUPPLIER = 'SR__SET_SUPPLIER',

}

export const createSupplierSection = (store: ICreateStoreAPI) => {
  const section = store.createSection<ISupplierState>({
    section: 'supplierSection',
    initialState: {
      supplies: [],
      supplier: undefined
    },
    reducers: {
      [SupplierActions.SET_SUPPLIES]: ({payload})=> ({supplies:payload}),
      [SupplierActions.SET_SUPPLIER]: ({payload}) => ({supplier: payload}),
    },
  });

  return {
    state: {
      get supplies(): Array<any> {
        return section.state.supplies;
      },
      get supplier():any {
        return section.state.supplier;
      },
    },
    actions: {
      setSupplies: (supplies: Array<any>): void => section.dispatch<Array<any>>(SupplierActions.SET_SUPPLIES, supplies),
      setSupplier: (supplier: any): void => section.dispatch<any>(SupplierActions.SET_SUPPLIER, supplier),

    },
  };
};
