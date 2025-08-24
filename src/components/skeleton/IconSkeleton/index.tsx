import { SkeletonBase } from 'src/styles/ui/skeleton';
import styled from 'styled-components';
import PictureIcon from 'public/icons/picture.svg';
import { IconSkeletonProps } from './iconSkeleton.type';

const Skeleton = styled(SkeletonBase)<IconSkeletonProps>`
  height: ${({ $height }) => ($height ? `${$height}px` : '24px')};
  width: ${({ $width }) => ($width ? `${$width}px` : '24px')};
  border-radius: var(--radius-full);

  svg {
    transform: scale(0.44);
  }
`;

export function IconSkeleton({ $height = 24, $width = 24 }: IconSkeletonProps) {
  return (
    <Skeleton role="status" $height={$height} $width={$width}>
      <PictureIcon />
    </Skeleton>
  );
}
