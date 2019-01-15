import React, {useState} from 'react'
import {useAction} from 'easy-peasy'

import {AudioFile} from '../types/music-types'
import styles from './song-chooser/song-chooser.module.scss'

type PlayButtonProps = {
  file: AudioFile,
}

export default function PlayButton(props: PlayButtonProps) {
  const playFile = useAction((dispatch: any) => dispatch.songs.playFile)
  const pauseFile = useAction((dispatch: any) => dispatch.songs.pauseFile)

  const {file} = props
  const playing = file.playing
  const buttonLabel = file.loading ? 'Loading' : (playing ? 'Pause' : 'Play')
  const playFunc = playing ? pauseFile : playFile

  return (
    <button
      className={`btn btn-primary btn-lg ${styles.playButton}`}
      onClick={() => playFunc(file)}
      disabled={file.loading}
    >
      {buttonLabel}
    </button>
  )
}