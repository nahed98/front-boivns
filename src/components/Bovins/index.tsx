import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { connect } from "react-dynadux";
import { IAppStoreApi } from "../../store/index";
import { Supplier } from "../../components/supplies/supplier";
import { supplierService } from "../../components/supplies/supplierService";
import { bovinService, Pagination } from "../Bovins/bovinService";
import { Component } from "react";
import '../../components/Bovins/bovins.css'
import {
    ContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
    StyledRow,
    ButtonWrapper,
  } from "./styles";

export interface IBovinProps {
    store: IAppStoreApi;
  }
  
  
  
  class bovinsComponent extends Component<IBovinProps> {
    state = { show: false };
    closePopup = () => {
      this.setState({ show: false });
    };
  
    render() {
      const {
        store: {
          bovin: {
            state: { bovins, },
            //   actions: { reset, setBovins },
          },
        },
      } = this.props;
  
      const OpenPopupSupplier = async (id: number): Promise<any> => {
        let supplier = await supplierService.get(id)
        this.props.store.supplier.actions.setSupplier(supplier)
        this.setState({ show: true });
  
      }
      const OpenPopupBreeder = () => { }
      const componentNotResult =
        <div className="empty_state">
          <i className="img-no-result"> Oops Aucun résultat trouvé</i>
  
        </div>
          return (
            <ContentSection>
              <Fade direction={'left'} triggerOnce>
                <StyledRow
                  justify="space-between"
                  align="middle"
                  id={'bovins'}
                  direction={'left'}
                >
        
                  <ContentWrapper>
                  {bovins.length == 0 ?
                        componentNotResult :
        
                        <div  style={{ overflow: 'auto' }}><table className="table" >
                          <thead>
                            <tr>
                              <th scope="col">Numéro D'identification </th>
                              <th scope="col">Etat </th>
                              <th scope="col">Centre de quarentaine </th>
                              <th scope="col">Race</th>
                              <th scope="col">Localisation de la ferme </th>
                              <th scope="col">Coordonnée GPS  </th>
                              <th scope="col">Date d'enregistrement </th>
                              <th scope="col">Déstination</th>
        
                            </tr>
                          </thead>
                          <tbody>
                            {bovins.map((d, index) => (
                              <tr key={`index-${index}`}>
                                <th scope="row">{d.bovinId}</th>
                                <td>{d.state}</td>
                                <td style={{ cursor: 'pointer' }} >{d.supplier.name}</td>
        
                                <td>{d.typeRacial}</td>
        
                                <td>{d.location}</td>
                                <td>{d.gpsCoordinate}</td>
                                <td>{d.savedDate}</td>
        
                                <td onClick={() => OpenPopupBreeder}>{d.destination}</td>
        
        
                              </tr>
                            ))}
                          </tbody>
                        </table>
                          {this.state.show && <Supplier close={() => this.closePopup()} />}
                        </div>
                      }
                  </ContentWrapper>
           
                </StyledRow>
              </Fade>
            </ContentSection>
          );
    }

};

const Bovins = connect(
    bovinsComponent,
    {
      shouldComponentUpdate: (action, payload) =>
        action.startsWith('BV__')
    },
  );
  export default Bovins;
