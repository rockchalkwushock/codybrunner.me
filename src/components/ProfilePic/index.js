import styled from 'styled-components'

import profilePic from '../../assets/profile_pic.jpg'

const ProfilePic = styled.div`
  background-color: ${({ theme }) => theme.site.bg};
  background-image: url(${profilePic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
`

ProfilePic.displayName = 'ProfilePic'

export default ProfilePic
