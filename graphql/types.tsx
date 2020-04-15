/* eslint-disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type CustomPost = {
   __typename?: 'CustomPost',
  id: Scalars['Int'],
  content: Scalars['String'],
  status: PostStatus,
  title: Scalars['String'],
  author: User,
};


export type Mutation = {
   __typename?: 'Mutation',
  createOnePost: CustomPost,
  createOneUser: User,
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput
};

export type PostCreateInput = {
  title: Scalars['String'],
  content: Scalars['String'],
  status: PostStatus,
  author: UserCreateOneWithoutPostsInput,
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateWithoutAuthorInput = {
  title: Scalars['String'],
  content: Scalars['String'],
  status: PostStatus,
};

export enum PostStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  users: Array<User>,
  user?: Maybe<User>,
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<UserWhereUniqueInput>,
  before?: Maybe<UserWhereUniqueInput>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>
};

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  posts: Array<CustomPost>,
};


export type UserPostsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<PostWhereUniqueInput>,
  before?: Maybe<PostWhereUniqueInput>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutAuthorInput>,
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

