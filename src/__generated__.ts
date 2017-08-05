/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type _ModelMutationType =
  "CREATED" |
  "UPDATED" |
  "DELETED";


export type LatestMessagesQuery = {
  allMessages:  Array< {
    id: string,
    createdAt: string,
    body: string,
    updatedAt: string,
    author:  {
      id: string,
      name: string,
      avatar: string | null,
    } | null,
  } >,
};

export type AddMessageSubscription = {
  Message:  {
    mutation: _ModelMutationType,
    node:  {
      id: string,
      createdAt: string,
      body: string,
      updatedAt: string,
      author:  {
        id: string,
        name: string,
        avatar: string | null,
      } | null,
    } | null,
  } | null,
};

export type PostMessageMutationVariables = {
  body: string,
  authorId?: string | null,
};

export type PostMessageMutation = {
  createMessage:  {
    id: string,
  } | null,
};

export type UsersQuery = {
  allUsers:  Array< {
    id: string,
    name: string,
    avatar: string | null,
  } >,
};

export type MsgDetailFragment = {
  id: string,
  createdAt: string,
  body: string,
  updatedAt: string,
  author:  {
    id: string,
    name: string,
    avatar: string | null,
  } | null,
};

export type UserSummaryFragment = {
  id: string,
  name: string,
  avatar: string | null,
};
/* tslint:enable */
