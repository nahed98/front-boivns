import {
    createStore,
    dynaduxDebugMiddleware
  } from "dynadux";
  
  import {
    createBovinSection,
  } from "./bovinStore";
  import {
    createSupplierSection
  } from "./supplierStore";
  

  
  export interface IAppStoreApi extends ReturnType<typeof createAppStore> {
  }
  
  export const createAppStore = () => {
    const store = createStore({
      middlewares: [
        dynaduxDebugMiddleware({debuggerStoreName: 'debug_store'}),
      ],
      onChange: (state, action, payload) => {
        // On Logout, reset the color.
       // if (action === ELogingSectionActions.LOG_OUT) appStore.color.actions.reset();
      },
    });
  
    const appStore = {
      bovin: createBovinSection(store),
      supplier:createSupplierSection(store),
      provider: store.provider,
    };
  
    return appStore;
  };
  