import React from 'react'
import Taro from '@tarojs/taro'
import { Wrap, Flex, Img, Word } from '@/components/base'
interface Article {
  title: string
  visit: string
  cover: string
  id: string
}
const Article:React.FC<Article> = ({ title, visit, id, cover }) => {
  const handleClick = () => {
    Taro.navigateTo({ url: '/pages/index/article?id=' + id })
  }
  return (
    <Wrap onClick={handleClick}>
      <Wrap>
        <Img mode='widthFix' src={cover + '?_=' + (new Date().getDate())}></Img>
      </Wrap>
      <Flex justify='space-between'>
        <Word>{title}</Word>
        <Word>{visit}浏览</Word>
      </Flex>
    </Wrap>
  )
}
export default React.memo(Article)
