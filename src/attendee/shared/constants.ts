export const enum AttendeeRoute {
  ATTENDEE = 'attendee',
  ADD_ATTENDEE = '/add',
}

export const enum TalkRoute {
  TALK = 'talk',
  ADD_TALK = '/add',
  ADD_TO_TALK = 'add/attendee',
  REMOVE_TALK = 'remove/:talkId',
}

export const enum GlobalRoute {
  PREFIX = 'api',
  // API_DOCS = "https://documenter.getpostman.com/view/16008266/TzseH5iG",
}
