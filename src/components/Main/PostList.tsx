import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'

const POST_ITME_DATA = {
  title: 'Post Item Title',
  date: '2023.09.05.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, nobis saepe reprehenderit necessitatibus modi aut delectus non provident quos? Quae incidunt error minima at hic dolores consectetur ab quibusdam dignissimos?',
  thumbnail:
    'https://github.com/hxxbkk/blog/assets/106261455/db56d7c1-a431-4828-9bcb-ad6b91f87888',
  link: 'https://www.google.co.kr/',
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITME_DATA} />
      <PostItem {...POST_ITME_DATA} />
      <PostItem {...POST_ITME_DATA} />
      <PostItem {...POST_ITME_DATA} />
    </PostListWrapper>
  )
}

export default PostList
