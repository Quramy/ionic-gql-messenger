import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import {
  UsersQuery,
  LatestMessagesQuery,
  PostMessageMutation,
  PostMessageMutationVariables,
  AddMessageSubscription,
} from './types';

const users = gql`
  fragment UserSummary on User {
    id, name, avatar,
  }

  query Users {
    allUsers(last: 150) {
      ...UserSummary,
    }
  }
`;

// 直近40件のメッセージを取得するクエリ
const latestMessages = gql`
fragment MsgDetail on Message {
  id, createdAt, body, updatedAt, createdAt,
  author {
    id, name, avatar
  }
}

query LatestMessages {
  allMessages(last: 40, orderBy: createdAt_DESC) {
    ...MsgDetail,
  }
}`;

// メッセージを書き込むmutation
const postMessage = gql`
mutation PostMessage($body: String!, $authorId: ID) {
  createMessage(body: $body, authorId: $authorId) {
    id,
  }
}`;

// メッセージの追加を監視するGraphQL Suscription
const onAddMessage = gql`
subscription AddMessage {
  Message(
    filter: {}
  ) {
    mutation,
    node {
      id, createdAt, body, updatedAt, createdAt,
      author {
        id, name, avatar
      }
    }
  }
}`;

@Injectable()
export class GqlClient {
  constructor(
    public apollo: Apollo,
  ) {
  }

  queryUsers() {
    return this.apollo.query<UsersQuery>({
      query: users,
      fetchPolicy: 'network-only',
    });
  }

  queryLatestMessages() {
    return this.apollo.query<LatestMessagesQuery>({
      query: latestMessages,
      fetchPolicy: 'network-only'
    });
  }

  postNewMessage(variables: PostMessageMutationVariables) {
    return this.apollo.mutate<PostMessageMutation>({
      mutation: postMessage,
      variables,
    });
  }

  subscribeNewMessage() {
    return this.apollo.subscribe({
      query: onAddMessage,
    }) as Observable<AddMessageSubscription>;
  }
}
