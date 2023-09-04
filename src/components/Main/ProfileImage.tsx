import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/106261455?s=400&u=c3f418ba97dbaadd61e51f3f7590930af1ffe9ec&v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
