export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summayr: string
  thumbnail: {
    publicURL: string
  }
}

export type PostListItemType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}
