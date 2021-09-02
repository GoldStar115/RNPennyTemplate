import * as React from 'react'
import {
  Image,
  LayoutChangeEvent,
  ImageSourcePropType,
  ImageURISource,
  ImageProps,
} from 'react-native'
import { useState } from 'react'
import { getCloudimageUri } from '@lib'
import { iDimensions } from '@types'

interface Props extends ImageProps {
  source: ImageURISource
  style?: any
  rest?: any
}

export const ResponsiveImage = ({ source, style, ...rest }: Props) => {
  const [dimensions, setDimensions] = useState<iDimensions>({
    height: 100,
    width: 100,
  })

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { width, height } = nativeEvent.layout
    setDimensions({ width, height })
  }

  const adjustedSource: ImageSourcePropType = source?.uri
    ? { uri: getCloudimageUri(source.uri, dimensions.width, dimensions.height) }
    : source

  return (
    <Image
      style={style}
      source={adjustedSource}
      onLayout={onLayout}
      {...rest}
    />
  )
}
