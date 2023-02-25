import { Component } from 'react';
import styled from 'styled-components';
import data from '../../config/wineItems.js';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { checkEnvironment } from '../components/checkEnvironment.js';

const StyledProduct = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  letter-spacing: 0.5px;
  line-height: 1.7;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 20px;
`;

const StyledProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  //grid-gap: 0 30px;
  align-items: flex-start;
  justify-items: center;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 40px 0;
  }
`;

const StyledProductImage = styled.img`
  margin-top: 90px;
  max-height: 400px;

  @media (max-width: 576px) {
    margin-top: 0;
  }
`;

const StyledProductRight = styled.div`
  font-family: sans-serif;
`;

const StyledProductName = styled.div`
  color: #870000;
  font-weight: bolder;
  margin-bottom: 5px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

const StyledProductEngName = styled.div`
  color: #870000;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

const StyledProductPriceContainer = styled.div`
  color: #870000;
  text-align: end;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

const StyledProductPriceText = styled.div`
  font-weight: 200;
  font-size: 12px;
`;

const StyledProductPrice = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledProductDescriptionContainer = styled.div`
  margin-bottom: 30px;
  line-height: 2;
  font-size: 16px;
  white-space: break-spaces;
  letter-spacing: .5px;
`;

const StyledProductDescriptionTitle = styled.div`
  font-size: 14px;
  color: #870000;
  line-height: 2.5;
  
`;

const Description = ({ className, description }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: description }}></div>
);
const StyledProductDescription = styled(Description)`
  line-height: 2;
  font-size: 14px;
  white-space: break-spaces;
`;

const StyledProductSipInfo = styled(Description)`
  font-size: 14px;
`;

const StyledProductBartendInfo = styled(Description)`
  font-size: 14px;
`;

const StyledProductAwardInfo = styled(Description)`
  font-size: 14px;
`;

const StyledProductExtraInfo = styled(Description)`
  font-size: 14px;
`;

const StyledProductStarContainer = styled.div`
  display: flex;
  font-size: 15px;
  color: #870000;
  margin-top: 10px;
`;

const StyledProductStar = styled.div`
  font-weight: 400;
  margin-right: 10px;
`;

const StyledProductStarUrl = styled.div`
  cursor: pointer;
  display: flex;

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  &:hover {
    .star {
      animation: shake 0.65s infinite;
    }
  }
`;

const StyledProductStarImg = styled.img`
  margin-right: 3px;
`;

const StyledProductStarText = styled.div`
  font-weight: bolder;
`;

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { targetProduct } = this.props;

    return (
      <>
        <Navbar />
        <StyledProduct>
          {targetProduct.map(
            ({
              name,
              items,
              price,
              description,
              sipInfo,
              bartendInfo,
              awardInfo,
              extraInfo,
              img,
              star,
              vivinoUrl
            }) => (
              <StyledProductContainer key={items}>
                <StyledProductImage alt={img} src={img} />
                <StyledProductRight>
                  <StyledProductName>{name}</StyledProductName>
                  <StyledProductEngName>{items}</StyledProductEngName>
                  <StyledProductPriceContainer>
                    <StyledProductPriceText>建議售價</StyledProductPriceText>
                    <StyledProductPrice>{price}</StyledProductPrice>
                  </StyledProductPriceContainer>

                  <StyledProductDescriptionContainer>
                    <StyledProductDescription description={description} />
                  </StyledProductDescriptionContainer>

                  {sipInfo ? (
                    <StyledProductDescriptionContainer>
                      <StyledProductDescriptionTitle>品飲筆記</StyledProductDescriptionTitle>
                      <StyledProductSipInfo description={sipInfo} />
                    </StyledProductDescriptionContainer>
                  ) : null}
                  {bartendInfo ? (
                    <StyledProductDescriptionContainer>
                      <StyledProductDescriptionTitle>調酒配方</StyledProductDescriptionTitle>
                      <StyledProductBartendInfo description={bartendInfo} />
                    </StyledProductDescriptionContainer>
                  ) : null}
                  {awardInfo ? (
                    <StyledProductDescriptionContainer>
                      <StyledProductDescriptionTitle>Awards</StyledProductDescriptionTitle>
                      <StyledProductAwardInfo description={awardInfo} />
                    </StyledProductDescriptionContainer>
                  ) : null}
                  {extraInfo ? (
                    <StyledProductDescriptionContainer>
                      <StyledProductDescriptionTitle>Extra</StyledProductDescriptionTitle>
                      <StyledProductExtraInfo description={extraInfo} />
                    </StyledProductDescriptionContainer>
                  ) : null}

                  {star ? (
                    <StyledProductStarContainer>
                      <StyledProductStar>Vivino 評分</StyledProductStar>
                      <StyledProductStarUrl
                        onClick={() => window.open(vivinoUrl, '_blank')}
                      >
                        <StyledProductStarImg
                          className="star"
                          alt="star-logo"
                          src="../images/star.svg"
                        />
                        <StyledProductStarText>{star}</StyledProductStarText>
                      </StyledProductStarUrl>
                    </StyledProductStarContainer>
                  ) : null}
                </StyledProductRight>
              </StyledProductContainer>
            )
          )}
        </StyledProduct>
        <Footer />
      </>
    );
  }
}

Product.getInitialProps = async ({ query }) => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://wine-app-six.vercel.app"; 

  const { id } = query;
  const apiRes = await fetch(base_url.concat(`/api/product/${id}`));
  const { targetProduct } = await apiRes.json();

  return { targetProduct };
};

export default Product;
