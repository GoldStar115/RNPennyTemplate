import * as React from 'react'

import { iChatRoomParticipant, iUser } from '@types'
import { getInitials } from '@lib'
import { Circle, Initials, MicMutedIcon } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

export const Avatar = ({
  participant,
  isTalking,
}: {
  participant: iChatRoomParticipant
  isTalking?: boolean
}) => {
  return (
    <Circle
      isHost={participant.role === 'host'}
      onStage={true}
      isTalking={isTalking}>
      <Initials>{getInitials(participant.name)}</Initials>
      {!!participant.isMuted && (
        <MicMutedIcon>
          <Icon name={'mic-off-outline'} size={20} color={'black'} />
        </MicMutedIcon>
      )}
    </Circle>
  )
}
