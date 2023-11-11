import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
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

const ContentBlock = ({
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >

          <ContentWrapper>
            <h6>BEEF TRACABILITY</h6>
            <SvgIcon
              src="about-header.png"
              width="100%"
              height="100%"
            />
            <Content>La plateforme <strong style={{ fontStyle: "italic" }}> Beef Tracability </strong> est un outil de suivi de la chaine de valeur viande bovine dans
              la région de Bizerte Sud.
              Elle vise à diffuser dans un cadre organisé et adapté au profil des utilisateurs, les données des
              différents intervenants dans la chaine de valeur viande bovine dans la région de Bizerte Nord.
              Les données de production peuvent être disséminées à différents niveaux de l’organisation, la
              plateforme <strong>BEEF TRACABILITY</strong> permet de les rassembler et de créer une continuité
              numérique au sein d’un seul et unique environnement.</Content>
            <Content>
              La complexité technologique et le manque de compétences font partie des principaux freins
              rencontrés par les fermes qui cherchent à déployer la chaine de valeur et la traçabilité de
              produit fini.  <strong>BEEF TRACABILITY</strong> apporte des réponses concrètes à ces enjeux en

              proposant une plateforme :
            </Content>

            <Content>
              Grace à ce réseau, les exploiteurs, éleveurs et les hommes d’affaires seront en mesure
              d’étudier et de reconstruire le processus par lequel un produit de bœuf spécifique a traversé,
              ce qui encouragera certainement la mise à niveau dans l’ensemble de l’industrie. les
              consommateurs peuvent également utiliser le système pour identifier l’origine de viande.
              <ol className="d">
                <li style={{ listStyleType: "square" }} >Aident les exploitations bovines à obtenir des données sur le lieu d’origine de chaque
                  animal étiqueté et enregistré.</li>
                <li style={{ listStyleType: "square" }}>Fournis des services d’orientation sur la traçabilité des produits aux fermes de boucherie,
                  aux abattoirs et aux opérations de boucherie, pour créer une chaine de données pour
                  l’industrie bovine nationale qui relie les points de commercialisation, d’abattage, des
                  marchés aux bestiaux et d’élevage.</li>

              </ol>

            </Content>

            <SvgIcon
              src="about-footer.png"
              width="100%"
              height="100%"
            />
          </ContentWrapper>
   
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
