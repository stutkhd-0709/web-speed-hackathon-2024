import type * as CSS from 'csstype';
import styled from 'styled-components';

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

const _Image = styled.img<{
  $backgroundColor: CSS.Property.BackgroundColor;
  $height: number | string;
  $objectFit: CSS.Property.ObjectFit;
  $width: number | string;
}>`
  object-fit: ${({ $objectFit }) => $objectFit};
  width: ${({ $width }) => addUnitIfNeeded($width)};
  height: ${({ $height }) => addUnitIfNeeded($height)};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: block;
`;

type Props = {
  backgroundColor?: CSS.Property.BackgroundColor;
  height: number | string;
  objectFit: CSS.Property.ObjectFit;
  width: number | string;
} & JSX.IntrinsicElements['img'];

export const Image: React.FC<Props> = ({ backgroundColor = 'none', height, loading = 'eager', objectFit, width, ...rest }) => {
  return <_Image {...rest} $backgroundColor={backgroundColor} $height={height} $objectFit={objectFit} $width={width} loading={loading} />;
};