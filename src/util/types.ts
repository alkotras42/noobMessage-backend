import {Session} from 'next-auth';

export interface GraphQLContext {
  session: Session | null;
//   prismaClient
  //pubsub
}
