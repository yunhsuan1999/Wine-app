import data from '../../config/wineList.js';
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

const StyledProductListContainer = styled.div`
  padding: 0 20px;
`;

const StyledProductListTitle = styled.div`
  font-weight: bolder;
  font-size: 26px;
  margin-bottom: 10px;
  color: #870000;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const StyledProductListText = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const StyledProductListContent= styled.div`
  margin-top: 30px;
`;

const StyledProductListType = styled.div`
  margin-bottom: 20px;
  display: flex;
  border: solid 3px;
  border-color: #d07f2d;
  width: fit-content;
  padding: 2px 5px;
`;

const StyledProductListTypeImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;

  @media (max-width: 576px) {
    width: 25px;
    height: 25px;
  }
`;

const StyledProductListTypeTitle = styled.div`
  font-size: 20px;
  color: #d07f2d;
  font-weight: 500;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const StyledProductItemsContainer = styled.div`
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

  @media (max-width: 576px) {
    height: 0;
  }
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
      <StyledProductListContainer>
      <StyledProductListTitle>企業專案</StyledProductListTitle>
      <StyledProductListText>產品介紹 Products</StyledProductListText>
      { products.map((list) => (
        <StyledProductListContent id={list.id} key={list.id}>
          <StyledProductListType>
            <StyledProductListTypeImg src={list.image} alt={list.type} />
            <StyledProductListTypeTitle>{list.type}</StyledProductListTypeTitle>
          </StyledProductListType>
          <StyledProductItemsContainer>
            {list.items.map(({ id, name, engName, img, star }) => (
              <StyledProductListItems onClick={() => handleClick(id)} key={id}>
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
                <StyledProductListItemsTexts>{engName}</StyledProductListItemsTexts>
              </StyledProductListItems>
              ))}
        </StyledProductItemsContainer>
        </StyledProductListContent>
        ))}
      </StyledProductListContainer>
    </StyledProductList>
  );
}

export default ProductList;
