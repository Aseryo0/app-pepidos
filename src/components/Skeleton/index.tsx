import { SkeletonElement } from './styles'

export interface SkeletonProps {
  type: 'title' | 'text' | 'thumbnail' | 'image'
}

export const Skeleton = ({ type }: SkeletonProps) => {
  return <SkeletonElement type={type} />
}
