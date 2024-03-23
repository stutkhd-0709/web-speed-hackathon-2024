import styled from 'styled-components';

const _Wrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  background: #f0f0f0; /* プレースホルダーの色 */
`;

const _Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image alt="Cyber TOON" src="/assets/header.png" />
    </_Wrapper>
  );
};
