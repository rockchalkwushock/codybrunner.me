import React from 'react'

import { mergeStrings, sortedTags } from './helpers'
import { Tag } from '../components/commons'

describe('Helper Functions', () => {
  describe('Function: mergeStrings', () => {
    const str1 = 'hello, world, poop'
    const str2 = 'bye, Turd Ferguson, purple'
    test('should return first string if no second string provided', () => {
      expect(mergeStrings(str1)).toEqual(str1)
    })
    test('should return merged string', () => {
      expect(mergeStrings(str1, str2)).toEqual(
        'hello, world, poop, bye, Turd Ferguson, purple'
      )
    })
  })
  describe('Function: sortedTags', () => {
    const tags = [['one', [1, 2, 3]], ['two', [1, 2, 3]], ['three', [1, 2, 3]]]
    test('should return Array of React Components', () => {
      expect(sortedTags(tags, <Tag />)).toHaveLength(3)
    })
  })
})
