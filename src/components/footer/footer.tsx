import React from 'react'
import {useStoreState, State} from 'easy-peasy'

import SongPlayer from '../song-player/song-player'
import {IGlobalStore} from '../../store/store-types'

import styles from './footer.module.scss'

export default function Footer() {
    const song = useStoreState((state: State<IGlobalStore>) => state.songs.currentPlayingSong)

    if (location.pathname === '/login') {
        return <div className={styles.footer}/>
    }

    return (
        <div className={styles.footer}>
            <SongPlayer file={song}/>
        </div>
    )
}
