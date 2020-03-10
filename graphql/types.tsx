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
  JSON: any,
  Upload: any,
  Time: any,
  Date: any,
  Long: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>,
};

export type CreateProjectPayload = {
   __typename?: 'createProjectPayload',
  project?: Maybe<Projects>,
};

export type CreateProjectTypeInput = {
  data?: Maybe<ProjectTypeInput>,
};

export type CreateProjectTypePayload = {
   __typename?: 'createProjectTypePayload',
  projectType?: Maybe<ProjectType>,
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>,
};

export type CreateRolePayload = {
   __typename?: 'createRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type CreateTitleInput = {
  data?: Maybe<TitleInput>,
};

export type CreateTitlePayload = {
   __typename?: 'createTitlePayload',
  title?: Maybe<Titles>,
};

export type CreateUserInput = {
  data?: Maybe<UserInput>,
};

export type CreateUserPayload = {
   __typename?: 'createUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};



export type DeleteProjectInput = {
  where?: Maybe<InputId>,
};

export type DeleteProjectPayload = {
   __typename?: 'deleteProjectPayload',
  project?: Maybe<Projects>,
};

export type DeleteProjectTypeInput = {
  where?: Maybe<InputId>,
};

export type DeleteProjectTypePayload = {
   __typename?: 'deleteProjectTypePayload',
  projectType?: Maybe<ProjectType>,
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>,
};

export type DeleteRolePayload = {
   __typename?: 'deleteRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type DeleteTitleInput = {
  where?: Maybe<InputId>,
};

export type DeleteTitlePayload = {
   __typename?: 'deleteTitlePayload',
  title?: Maybe<Titles>,
};

export type DeleteUserInput = {
  where?: Maybe<InputId>,
};

export type DeleteUserPayload = {
   __typename?: 'deleteUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  url?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditProjectInput = {
  title?: Maybe<Scalars['String']>,
  coverimage?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  project_types?: Maybe<Array<Maybe<Scalars['ID']>>>,
  titles?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditProjectTypeInput = {
  type?: Maybe<Scalars['String']>,
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditTitleInput = {
  title?: Maybe<Scalars['String']>,
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['ID']>,
};

export type FileInput = {
  name: Scalars['String'],
  hash: Scalars['String'],
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime: Scalars['String'],
  size: Scalars['Float'],
  url: Scalars['String'],
  provider: Scalars['String'],
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type InputId = {
  id: Scalars['ID'],
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | ProjectType | CreateProjectTypePayload | UpdateProjectTypePayload | DeleteProjectTypePayload | Projects | CreateProjectPayload | UpdateProjectPayload | DeleteProjectPayload | Titles | CreateTitlePayload | UpdateTitlePayload | DeleteTitlePayload | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
   __typename?: 'Mutation',
  createProjectType?: Maybe<CreateProjectTypePayload>,
  updateProjectType?: Maybe<UpdateProjectTypePayload>,
  deleteProjectType?: Maybe<DeleteProjectTypePayload>,
  createProject?: Maybe<CreateProjectPayload>,
  updateProject?: Maybe<UpdateProjectPayload>,
  deleteProject?: Maybe<DeleteProjectPayload>,
  createTitle?: Maybe<CreateTitlePayload>,
  updateTitle?: Maybe<UpdateTitlePayload>,
  deleteTitle?: Maybe<DeleteTitlePayload>,
  createRole?: Maybe<CreateRolePayload>,
  updateRole?: Maybe<UpdateRolePayload>,
  deleteRole?: Maybe<DeleteRolePayload>,
  createUser?: Maybe<CreateUserPayload>,
  updateUser?: Maybe<UpdateUserPayload>,
  deleteUser?: Maybe<DeleteUserPayload>,
  upload: UploadFile,
  multipleUpload: Array<Maybe<UploadFile>>,
  login: UsersPermissionsLoginPayload,
  register: UsersPermissionsLoginPayload,
};


export type MutationCreateProjectTypeArgs = {
  input?: Maybe<CreateProjectTypeInput>
};


export type MutationUpdateProjectTypeArgs = {
  input?: Maybe<UpdateProjectTypeInput>
};


export type MutationDeleteProjectTypeArgs = {
  input?: Maybe<DeleteProjectTypeInput>
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>
};


export type MutationCreateTitleArgs = {
  input?: Maybe<CreateTitleInput>
};


export type MutationUpdateTitleArgs = {
  input?: Maybe<UpdateTitleInput>
};


export type MutationDeleteTitleArgs = {
  input?: Maybe<DeleteTitleInput>
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>,
  ref?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  file: Scalars['Upload']
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>,
  ref?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  files: Array<Maybe<Scalars['Upload']>>
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
};


export type MutationRegisterArgs = {
  input: UserInput
};

export type ProjectInput = {
  title: Scalars['String'],
  coverimage?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  project_types?: Maybe<Array<Maybe<Scalars['ID']>>>,
  titles?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type Projects = {
   __typename?: 'Projects',
  title: Scalars['String'],
  coverimage?: Maybe<UploadFile>,
  description?: Maybe<Scalars['String']>,
  project_types?: Maybe<Array<Maybe<ProjectType>>>,
  titles?: Maybe<Array<Maybe<Titles>>>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};


export type ProjectsProject_TypesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type ProjectsTitlesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type ProjectType = {
   __typename?: 'ProjectType',
  type: Scalars['String'],
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

export type ProjectTypeInput = {
  type: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  projectType?: Maybe<ProjectType>,
  projectTypes?: Maybe<Array<Maybe<ProjectType>>>,
  project?: Maybe<Projects>,
  projects?: Maybe<Array<Maybe<Projects>>>,
  title?: Maybe<Titles>,
  titles?: Maybe<Array<Maybe<Titles>>>,
  files?: Maybe<Array<Maybe<UploadFile>>>,
  role?: Maybe<UsersPermissionsRole>,
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>,
  user?: Maybe<UsersPermissionsUser>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  me?: Maybe<UsersPermissionsMe>,
};


export type QueryProjectTypeArgs = {
  id: Scalars['ID']
};


export type QueryProjectTypesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryProjectArgs = {
  id: Scalars['ID']
};


export type QueryProjectsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryTitleArgs = {
  id: Scalars['ID']
};


export type QueryTitlesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryRoleArgs = {
  id: Scalars['ID']
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type RoleInput = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};


export type TitleInput = {
  title?: Maybe<Scalars['String']>,
};

export type Titles = {
   __typename?: 'Titles',
  title?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

export type UpdateProjectInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditProjectInput>,
};

export type UpdateProjectPayload = {
   __typename?: 'updateProjectPayload',
  project?: Maybe<Projects>,
};

export type UpdateProjectTypeInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditProjectTypeInput>,
};

export type UpdateProjectTypePayload = {
   __typename?: 'updateProjectTypePayload',
  projectType?: Maybe<ProjectType>,
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditRoleInput>,
};

export type UpdateRolePayload = {
   __typename?: 'updateRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type UpdateTitleInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditTitleInput>,
};

export type UpdateTitlePayload = {
   __typename?: 'updateTitlePayload',
  title?: Maybe<Titles>,
};

export type UpdateUserInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditUserInput>,
};

export type UpdateUserPayload = {
   __typename?: 'updateUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};


export type UploadFile = {
   __typename?: 'UploadFile',
  name: Scalars['String'],
  hash: Scalars['String'],
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime: Scalars['String'],
  size: Scalars['Float'],
  url: Scalars['String'],
  provider: Scalars['String'],
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Morph>>>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['ID']>,
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'],
  password: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
};

export type UsersPermissionsLoginPayload = {
   __typename?: 'UsersPermissionsLoginPayload',
  jwt: Scalars['String'],
  user: UsersPermissionsMe,
};

export type UsersPermissionsMe = {
   __typename?: 'UsersPermissionsMe',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<UsersPermissionsMeRole>,
};

export type UsersPermissionsMeRole = {
   __typename?: 'UsersPermissionsMeRole',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type UsersPermissionsPermission = {
   __typename?: 'UsersPermissionsPermission',
  type: Scalars['String'],
  controller: Scalars['String'],
  action: Scalars['String'],
  enabled: Scalars['Boolean'],
  policy?: Maybe<Scalars['String']>,
  role?: Maybe<UsersPermissionsRole>,
  id: Scalars['ID'],
};

export type UsersPermissionsRole = {
   __typename?: 'UsersPermissionsRole',
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  id: Scalars['ID'],
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UsersPermissionsUser = {
   __typename?: 'UsersPermissionsUser',
  username: Scalars['String'],
  email: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<UsersPermissionsRole>,
  id: Scalars['ID'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

