import data from '../../config/wine.js';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledProductList = styled.div`
  width: 100%;
  letter-spacing: 0.5px;
  line-height: 1.7;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 20px;
`;

const StyledProductListText = styled.div`
  font-size: 18px;
  margin: 0 0 30px 20px;
  font-weight: bolder;
`;

const StyledProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 30px;
  max-width: 850px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-gap: 35px 0;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 60px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const StyledProductListItems = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

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
    .image {
      transform: scale(1.1, 1.1);
      transition: all 0.5s ease-out;
    }

    .star {
      animation: shake 0.65s infinite;
    }
  }
`;

const StyledProductListItemsImage = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledProductListStarContainer = styled.div`
  display: flex;
  font-size: 15px;
  color: #870000;
  justify-content: center;
  margin-bottom: 6px;
`;

const StyledProductListItemsStarImg = styled.img`
  margin-right: 3px;
`;

const StyledProductListItemsStar = styled.div`
  font-weight: bolder;
`;

const StyledProductListNoStarContainer = styled.div`
  height: 25.5px;
  margin-bottom: 6px;
`;

const StyledProductListItemsName = styled.div`
  font-weight: bolder;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledProductListItemsTexts = styled.div`
  font-size: 14px;
  text-align: center;
`;

const { products } = data;

function ProductList() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <StyledProductList>
      <StyledProductListText>產品介紹 Products</StyledProductListText>
      <StyledProductListContainer>
        {products.map(({ id, name, items, img, star }) => (
          <StyledProductListItems onClick={() => handleClick(id)}>
            <StyledProductListItemsImage className="image">
              <img style={{ maxHeight: '260px' }} alt={img} src={img} />
            </StyledProductListItemsImage>
            {star ? (
              <StyledProductListStarContainer>
                <StyledProductListItemsStarImg
                  className="star"
                  alt="star-logo"
                  src="../images/star.svg"
                />
                <StyledProductListItemsStar>{star}</StyledProductListItemsStar>
              </StyledProductListStarContainer>
            ) : (
              <StyledProductListNoStarContainer />
            )}
            <StyledProductListItemsName>{name}</StyledProductListItemsName>
            <StyledProductListItemsTexts>{items}</StyledProductListItemsTexts>
          </StyledProductListItems>
        ))}
      </StyledProductListContainer>
    </StyledProductList>
  );
}

export default ProductList;
