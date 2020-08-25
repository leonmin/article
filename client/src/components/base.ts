import { View, Text, Image } from '@tarojs/components'
import { styled } from 'linaria/react'
import { px, padding } from './global'

const length = (value: number | string) => {
  const str = String(value)
  if (str.includes('%') || str.includes('px')) return value
  return str + px
}
const pad = (value: number | string) => {
  if (typeof value === 'number') return value + px
  return value
}

interface Stack {
  display?: 'flex';
  align?: 'center' | 'flex-start' | 'flex-end'
  justify?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end'
  direction?: 'row' | 'column'
}
interface View {
  width?: number | string 
  padding?: number | string
}

interface Text {
  fontSize?: 24 | 28 | 30 | 36 | 40
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}

interface Image {
  width?: string | number
  height?: string | number
}
interface Position {
  position?: 'relative' | 'absolute'
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
}

export const Flex = styled(View)<Stack>`
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  flex-direction: ${props => props.direction || 'row'};
`

export const Wrap = styled(View)<View>`
  box-sizing: border-box;
  width: ${props => length(props.width || '100%')};
  padding: ${props => pad(props.padding || 0)};
`

export const Spacer = styled(View)<View>`
  box-sizing: border-box;
  flex-grow: 1;
`

export const Word = styled(Text)<Text>`
  box-sizing: border-box;
  font-size: ${props => (props.fontSize || 28) + 'rpx'};
  font-weight: ${props => props.fontSize || 'normal'};
`

export const Img = styled(Image)<Image>`
  box-sizing: border-box;
  width: ${props => length(props.width || '100%')};
  height: ${props => length(props.height || '100%')};
`

export const Position = styled(View)<Position & Stack>`
  box-sizing: border-box;
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  display: ${props => props.display || 'block'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  flex-direction: ${props => props.direction || 'row'};
`