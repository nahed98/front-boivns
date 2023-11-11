import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from 'react-router';
import { bovinService, Pagination } from "../Bovins/bovinService";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { connect } from "react-dynadux";
import { IAppStoreApi } from "../../store/index";
import React from "react";
import PropTypes from "prop-types";
export interface IBovinProps {
  store: IAppStoreApi;
}


export class HeaderComponent extends React.Component<RouteComponentProps & IBovinProps, { search: string | undefined | null, visible: boolean }> {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      search: undefined,
      visible: false
    }
  }

  getData() {
    let pag = {
      search: this.state.search
    } as Pagination;
    return bovinService.getAll(pag)

  }

  render() {
    const _handleKeyDown = async (e: any): Promise<void> => {

      if (e.key === 'Enter') {

        let bovins = await this.getData();
        this.props.store.bovin.actions.setBovins(bovins)
        this.props.history.push("/Dashboard");

      }

    }


    const toggleButton = () => {
      this.setState({ visible: !this.state.visible })

    };
    const setSearch = (value: string): void => {
      this.setState({ search: value })
    }
    const MenuItem = () => {
      return (

        <div style={{ display: "contents", alignItems: "baseline" }}>

          <CustomNavLinkSmall>
            <Span><Link to="/">About</Link></Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall>
            <Span>    <Link to="/Statics">Statistique</Link></Span>
          </CustomNavLinkSmall>

        </div>
      );
    };

    return (
      <HeaderSection>
        <Container>
          <Row justify="space-between">
            <LogoContainer to="/" aria-label="homepage">
              <SvgIcon src="logo.jpg" width="70px" height="50px" />

            </LogoContainer>
            <div style={{display:"flex", alignItems:"baseline"}}>
              <Input
                type="text"
                name=""
                placeholder="Recherche"
                value={""}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={(e) => _handleKeyDown(e)}

              />
              <NotHidden>

                <MenuItem />
              </NotHidden>
            </div>




            <Burger onClick={toggleButton}>
              <Outline />
            </Burger>
          </Row>



          <Drawer closable={false} open={this.state.visible} onClose={toggleButton}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <Label onClick={toggleButton}>
                <Col span={12}>
                  <Menu>Menu</Menu>
                </Col>
                <Col span={12}>
                  <Outline />
                </Col>
              </Label>
            </Col>
            <MenuItem />

          </Drawer>
        </Container>
      </HeaderSection>
    );
  }

}


//export default withTranslation()(Header);

export const Header = connect(
  withRouter(HeaderComponent),
  {
    shouldComponentUpdate: (action, payload) =>
      action.startsWith('BV__')
  },
);