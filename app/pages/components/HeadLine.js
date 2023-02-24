import data from '../../config/headLineItem';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const StyledHeadLine = styled.div`
  width: 100%;
  position: relative;
`;

const StyledHeadLineSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledHeadLineSlider = styled.div`
  height: 100%;
  white-space: nowrap;
  transform: ${({ percentage }) => `translateX(${percentage}%)`};
  ${({ isTransOn }) => (isTransOn ? 'transition: all 0.5s ease;' : '')}
`;

const StyledHeadLineItems = styled.div`
  transition: height 1s, width 1s, left 1s, margin-top 1s, line-height 1s,
    background-color 1s;
  width: 100%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
`;

const StyledHeadLineImage = styled.img`
  transition: all 0.5s ease;
  z-index: 1;
  width: 100%;
`;

const StyledHeadLineSliderDotContainer = styled.div`
  position: absolute;
  bottom: 6px;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledHeadLineSliderDot = styled.div`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${({ isActive }) =>
    isActive ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #ffffff;
  }
`;

const StyledHeadLineButtonContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 50px;
  bottom: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    transform: scale(1.4, 1.4);
    opacity: 1;
  }

  @media (max-width: 475px) { 
    width: 25px;

    &:hover {
      transform: scale(1, 1);
      opacity: .8;
    }
  }
`;

const StyledHeadLinePrevContainer = styled(StyledHeadLineButtonContainer)`
  left: 0;
  justify-content: end;
`;

const StyledHeadLineNextContainer = styled(StyledHeadLineButtonContainer)`
  right: 0;
  justify-content: start;
`;

const StyledHeadLineButton = styled.img`
  height: 25px;
  width: 25px;

  @media (max-width: 475px) { 
    width: 10px;
  }
`;

const StyledHeadLinePrev = styled(StyledHeadLineButton)``;

const StyledHeadLineNext = styled(StyledHeadLineButton)``;

const { items } = data;

function HeadLine() {
  const router = useRouter();
  const [percentage, setPercentage] = useState(-100);
  const [activeItem, setActiveItem] = useState(0);
  const [isTransOn, setIsTransOn] = useState(false);

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  const onTransEnd = () => {
    setIsTransOn(false);
    if (percentage == -100 * (items.length + 1)) {
      setActiveItem(0);
      setPercentage(-100);
    } else if (percentage == 0) {
      setActiveItem(items.length - 1);
      setPercentage(-100 * items.length);
    }
  };

  const onClickArrow = (type) => {
    if (isTransOn) return;
    setIsTransOn(true);
    if (type === 'prev') {
      setPercentage(percentage + 100);
      if (activeItem == 0) {
        setActiveItem(items.length - 1);
      } else {
        setActiveItem(activeItem - 1);
      }
    } else {
      setPercentage(percentage - 100);
      if (activeItem == items.length - 1) {
        setActiveItem(0);
      } else {
        setActiveItem(activeItem + 1);
      }
    }
  };

  const onClickDot = (index) => {
    if (index > activeItem) {
      setPercentage(percentage - (index - activeItem) * 100);
      setActiveItem(index);
    } else if (index < activeItem) {
      setPercentage(percentage + (activeItem - index) * 100);
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (percentage != -100 * (items.length + 1)) {
        setActiveItem(activeItem + 1);
        setPercentage(percentage - 100);
        setIsTransOn(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [percentage, activeItem]);

  return (
    <StyledHeadLine>
      <StyledHeadLineSliderContainer>
        <StyledHeadLinePrevContainer onClick={() => onClickArrow('prev')}>
          <StyledHeadLinePrev src="./images/previous.svg" alt="previous" />
        </StyledHeadLinePrevContainer>
        <StyledHeadLineSlider
          percentage={percentage}
          isTransOn={isTransOn}
          onTransitionEnd={() => onTransEnd()}
        >
          <StyledHeadLineItems>
            <StyledHeadLineImage src={items[items.length - 1].img} alt="" />
          </StyledHeadLineItems>
          {items.map(({ name, id, img }) => (
            <StyledHeadLineItems onClick={() => handleClick(id)}>
              <StyledHeadLineImage src={img} alt={name} />
            </StyledHeadLineItems>
          ))}
          <StyledHeadLineItems>
            <StyledHeadLineImage src={items[0].img} alt="" />
          </StyledHeadLineItems>
        </StyledHeadLineSlider>
        <StyledHeadLineNextContainer onClick={() => onClickArrow('next')}>
          <StyledHeadLineNext src="./images/next.svg" alt="next" />
        </StyledHeadLineNextContainer>
        <StyledHeadLineSliderDotContainer>
          {items.map(({ name }, index) =>
            name ? (
              <StyledHeadLineSliderDot
                onClick={() => onClickDot(index)}
                isActive={index === activeItem}
              />
            ) : null
          )}
        </StyledHeadLineSliderDotContainer>
      </StyledHeadLineSliderContainer>
    </StyledHeadLine>
  );
}

export default HeadLine;
