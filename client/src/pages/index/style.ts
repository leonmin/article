import { View } from '@tarojs/components'
import { styled } from 'linaria/react'
interface Font {
  size: 12 | 14 | 16 | 30
}
export const Title = styled(View)<Font>`
  font-size: ${props => props.size + 'rpx'}
`