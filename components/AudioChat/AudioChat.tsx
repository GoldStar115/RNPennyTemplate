import { stringToNumber } from '@lib'
import { Config } from '@services'
import { iChatRoom, iChatRoomParticipant, iUser } from '@types'
import React, { useEffect, useRef, useState } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
import RtcEngine, { ChannelProfile, ClientRole } from 'react-native-agora'
import { isEqual } from 'lodash'
import { ChatRoomSubscription } from '@firestore'

export const AudioChat = ({
  chatRoom,
  user,
  muted,
  activeSpeakersCallback,
}: {
  chatRoom: iChatRoom
  user: iUser
  muted?: boolean
  activeSpeakersCallback(speakers: number[]): void
}) => {
  const engine = useRef<RtcEngine>()
  const activeSpeakersRef = useRef<number[]>()

  const initEngine = async () => {
    console.log('appId is', Config.auth.agoraAppId)
    const _engine = await RtcEngine.create(Config.auth.agoraAppId)
    _engine.addListener(
      'JoinChannelSuccess',
      (channel, agoraUserId, elapsed) => {
        console.info('JoinChannelSuccess', channel, agoraUserId, elapsed)
        ChatRoomSubscription.joinChatRoom({
          chatRoom,
          agoraUserId: agoraUserId,
          isHost: chatRoom.createdByUserId === user.id,
        })
      },
    )
    _engine.addListener('LeaveChannel', (stats) => {
      console.info('LeaveChannel', stats)
    })
    _engine.addListener('Error', (error) => {
      console.info('Error', error)
    })
    _engine.addListener('Warning', (warning) => {
      console.info('Warning', warning)
    })

    _engine.addListener('AudioVolumeIndication', (data) => {
      const uIds: number[] = data.map((user) => user.uid).sort()

      if (!isEqual(activeSpeakersRef.current, uIds)) {
        console.log('is NOT equal', activeSpeakersRef.current, uIds)
        activeSpeakersRef.current = uIds
        if (activeSpeakersCallback) {
          activeSpeakersCallback(uIds)
        }
      }
    })

    _engine.enableAudioVolumeIndication(200, 6, true)

    _engine.enableAudio()
    _engine.enableLocalAudio(!muted)

    await _engine.setChannelProfile(ChannelProfile.LiveBroadcasting)
    await _engine.setClientRole(ClientRole.Broadcaster)
    return _engine
  }

  const joinChannel = async (_channelId: string) => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      )
    }
    try {
      await engine.current.joinChannel(null, _channelId, null, 0)
    } catch (error) {
      console.log('error', error)
    }
  }

  const init = async () => {
    engine.current = await initEngine()
    await joinChannel(chatRoom.id)
  }

  useEffect(() => {
    init()
    return () => {
      engine.current.removeAllListeners
      engine.current.leaveChannel()
    }
  }, [])

  useEffect(() => {
    engine.current?.enableLocalAudio(!muted).catch((err) => {
      console.warn('enableLocalAudio', err)
    })
  }, [muted])

  return <>{false && <></>}</>
}
