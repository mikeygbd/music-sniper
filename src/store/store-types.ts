import { Action, Thunk, Select } from 'easy-peasy'
import { AuthStore } from './auth/auth-store'
import { CommentStore } from './comment/comment-store'
import { UserStore } from './user-store'
import { User } from './user-store';
import { Tag } from '../types/music-types';

export interface IStoreInit {
  init: Thunk<IStoreInit, void, void, IGlobalStore>,
}

export interface ISettingsStore {

}

export interface IAuthStore {

}

export interface ITagStore {
  items: Tag[],
  setTags: Action<ITagStore, Tag[]>,
}

export interface IUserStore {
  users: User[],
  fetchUsers: Thunk<IUserStore, void, void, IGlobalStore>,
  addUsers: Action<IUserStore, User[]>,

  currentUserId: number,
  currentUser: Select<IUserStore, User>,
  setCurrentUser: Action<IUserStore, User>,
  uploadAvatar: Thunk<IUserStore, File, void, IGlobalStore>,
}

export interface ISongStore {
  fetchAudioFiles: Thunk<ISongStore, void, void, IGlobalStore>,
}

export interface ICommentStore {
  fetchComments: Thunk<ICommentStore, void, void, IGlobalStore>,
}

export type IGlobalStore = {
  store: IStoreInit,
  auth: IAuthStore,
  users: IUserStore,
  songs: ISongStore,
  tags: ITagStore,
  comments: ICommentStore,
  settings: ISettingsStore,
}