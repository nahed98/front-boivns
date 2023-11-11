import React from "react";
import { connect } from "react-dynadux";
import { IAppStoreApi } from "../../store/index";

export interface ISupplierProps {
  store: IAppStoreApi;
  close: (...args: any[]) => any,
}



class SupplierComponent extends React.Component<ISupplierProps>  {



  render() {
    return (
      
      <div className="modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg" style={{ marginTop: '2em' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Détails du fournisseur</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => this.props.close()}
              ></button>
            </div>
            <div className="modal-body">
              <div className="team-single">
                <div className="team-single-text padding-50px-left sm-no-padding-left">
                  <div className="contact-info-section margin-40px-tb">
                    <ul className="list-style9 no-margin">
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left text-cadetblue">
                              Prénom et Nom:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p>{this.props.store.supplier.state.supplier?.name}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left xs-margin-four-left text-cadetblue">
                              Adresse:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p>
                              <a>{this.props.store.supplier.state.supplier?.address}</a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left text-cadetblue">
                              Vaches et Arakhi pour l'engraissement:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p></p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left text-cadetblue">
                              Veaux de moins de 12 mois:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p></p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left text-cadetblue">

                              Veaux de plus de 12 mois:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p></p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left xs-margin-four-left text-cadetblue">
                            Numéro de téléphone:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p>{this.props.store.supplier.state.supplier?.phone}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-md-5 col-5">
                            <strong className="margin-10px-left xs-margin-four-left text-cadetblue">
                            Capacité d'absorption:
                            </strong>
                          </div>
                          <div className="col-md-7 col-7">
                            <p>
                              <a></a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
export const Supplier = connect(
  SupplierComponent,
  {
    shouldComponentUpdate: (action, payload) =>
      action.startsWith('SR__')
  },
);
