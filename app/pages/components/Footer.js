import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #000000;
  font-weight: 600;
  color: #ffffff;
`;

const StyledFooterItems = styled.div`
  margin: 100px 0 40px 0;
  padding: 20px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    padding: 25px 0 35px 0;
    margin: 100px 0 35px 0;
    flex-direction: column;
    grid-gap: 20px 0;
  }
`;

const StyledFooterOfficialWebsite = styled.div`
  margin-right: 60px;
  cursor: pointer;

  &:hover {
    color: #ffe286;
  }

  @media (max-width: 576px) {
    margin: 0;
  }
`;

const StyledFooterLine = styled.div`
  margin-right: 60px;

  @media (max-width: 576px) {
    display: none;
    margin: 0;
  }
`;

const StyledContactUs = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContactUsText = styled.div`
  margin-right: 12px;
  font-size: 16px;
`;

const StyledContactUsButton = styled.div`
  cursor: pointer;
`;

const StyledFooterNotice = styled.div`
  text-align: center;
  background-color: #870000;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
`;

const StyledFooterNoticeImage = styled.img`
  max-width: 565px;
  width: 100%;
  max-height: 36px;
  text-align: center;
`;

const StyledFooterForBusiness = styled.div`
  margin-right: 60px;

  @media (max-width: 576px) {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItems>
        <StyledFooterForBusiness>企業專用</StyledFooterForBusiness>
        <StyledFooterLine>|</StyledFooterLine>
        <StyledFooterOfficialWebsite
          onClick={() => window.open('https://www.win-sense.com.tw/', '_blank')}
        >
          官方網站
        </StyledFooterOfficialWebsite>
        <StyledFooterLine>|</StyledFooterLine>
        <StyledContactUs>
          <StyledContactUsText>Contact Us</StyledContactUsText>
          <StyledContactUsButton
            onClick={() => window.open('https://lin.ee/S2JJBSL', '_blank')}
          >
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
              alt="加入好友"
              style={{ display: 'block' }}
              height="36"
              border="0"
            />
          </StyledContactUsButton>
        </StyledContactUs>
      </StyledFooterItems>
      <StyledFooterNotice>
        <StyledFooterNoticeImage
          src="../images/notice.webp"
          alt="notice"
          border="0"
        />
      </StyledFooterNotice>
    </StyledFooter>
  );
};

export default Footer;
