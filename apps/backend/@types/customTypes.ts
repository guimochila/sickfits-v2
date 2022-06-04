import type { SessionContext } from '@keystone-6/core/types';

interface Session {
  id: string,
  role: string | null;
}

export type CurrentSession = SessionContext<Session>

export type ListAccessArgs = {
  itemId?: string;
  listKey: string
};
