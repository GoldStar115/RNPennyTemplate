import * as React from 'react'
import {
  ImageBackground,
  LayoutChangeEvent,
  ImageSourcePropType,
  ImageBackgroundProps,
  ImageURISource,
} from 'react-native'
import { ReactNode, useState } from 'react'
import { getCloudimageUri } from '@lib'
import { iDimensions } from '@types'

interface Props extends ImageBackgroundProps {
  source: ImageURISource
  children: ReactNode
  rest?: any
}

export const ResponsiveImageBackground = ({
  source,
  style,
  children,
  imageStyle,
  ...rest
}: Props) => {
  const [dimensions, setDimensions] = useState<iDimensions>()

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { width, height } = nativeEvent.layout
    setDimensions({ width, height })
  }

  const adjustedSource: ImageSourcePropType = source?.uri
    ? {
        uri: dimensions
          ? getCloudimageUri(source.uri, dimensions.width, dimensions.height)
          : null,
      }
    : source

  return (
    <ImageBackground
      style={style}
      source={adjustedSource}
      onLayout={onLayout}
      imageStyle={imageStyle}
      {...rest}>
      {children}
    </ImageBackground>
  )
}
