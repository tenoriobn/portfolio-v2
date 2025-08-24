import { SkeletonBase } from 'src/styles/ui/skeleton';
import styled from 'styled-components';
import PictureIcon from 'public/icons/picture.svg';
import { imageSkeletonProps } from './imageSkeleton.type';

const Skeleton = styled(SkeletonBase)<imageSkeletonProps>`
  height: ${({ $height }) => ($height ? `${$height}px` : '100%')};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  border-radius: var(--radius-md);

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;


export function ImageSkeleton({ $height, $width }: imageSkeletonProps) {
  return (
    <Skeleton role="status" $height={$height} $width={$width}>
      <PictureIcon />
    </Skeleton>
  );
}
