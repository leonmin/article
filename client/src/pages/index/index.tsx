import React from 'react'
import { Wrap, Flex, Img, Word, Position } from '@/components/base'
import { View, ScrollView } from '@tarojs/components'
import Article from '@/components/pages/Article'
import index from '../../static/index.png'
const Index:React.FC = () => {
  return (
    <View>
      <ScrollView>
        <Flex>
          <Position
            position='absolute'
            top='40%'
            left='10%'
            display='flex'
            direction='column'>
            <Word fontSize={40}>探索世界</Word>
            <Word fontSize={40}>在于记录</Word>
          </Position>
          <Img src={index} mode='widthFix'></Img>
        </Flex>
        <Wrap padding='20rpx 30rpx'>
          <Article title='haha' id='xx' cover='/static/index.png' visit='10'></Article>
        </Wrap>
        <Flex><Word>已全部加载</Word></Flex>
      </ScrollView>
    </View>
  )
}
export default React.memo(Index)
