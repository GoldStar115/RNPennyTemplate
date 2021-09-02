import * as React from 'react'
import { iCategory, CategoriesArray } from '@types'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { CategoryListEntry, CategoryNavText } from './styles'

interface CategoryBarProps {
  activeCategory?: iCategory
}

export const CategoryBar = ({ activeCategory }: CategoryBarProps) => {
  const navigation = useNavigation()

  return (
    <>
      <ScrollView
        indicatorStyle="white"
        horizontal
        showsHorizontalScrollIndicator={false}>
        {CategoriesArray.map((category) => (
          <CategoryListEntry
            key={category.id}
            active={category === activeCategory}
            onPress={() =>
              navigation.navigate('Category', { id: category.id })
            }>
            <CategoryNavText>{category.label}</CategoryNavText>
          </CategoryListEntry>
        ))}
      </ScrollView>
    </>
  )
}
