import BubbleChatIcon from '~/shared/assets/icons/bubble-chat.svg';
import ClipboardIcon from '~/shared/assets/icons/clipboard.svg';
import FileSpecialIcon from '~/shared/assets/icons/file-special.svg';
import { Route } from '~/shared/constants/routes';

export const NAV_ITEMS_CONFIG = [
  {
    route: Route.Feed,
    key: 'feed.title.feed',
    icon: ClipboardIcon,
    notifications: 0,
  },
  {
    route: Route.Chat,
    key: 'chats.title.chat',
    icon: BubbleChatIcon,
    notifications: 1,
  },
  {
    route: Route.Tests,
    key: 'tests.title.tests',
    icon: FileSpecialIcon,
    notifications: 0,
  },
] as const;
