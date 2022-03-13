export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  product: Maybe<Product>;
  quantity: Maybe<Scalars['Int']>;
  user: Maybe<User>;
};

export type CartItemCreateInput = {
  product: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity: InputMaybe<Scalars['Int']>;
  user: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CartItemManyRelationFilter = {
  every: InputMaybe<CartItemWhereInput>;
  none: InputMaybe<CartItemWhereInput>;
  some: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  id: InputMaybe<OrderDirection>;
  quantity: InputMaybe<OrderDirection>;
};

export type CartItemRelateToManyForCreateInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemRelateToManyForUpdateInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create: InputMaybe<Array<CartItemCreateInput>>;
  disconnect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set: InputMaybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  product: InputMaybe<ProductRelateToOneForUpdateInput>;
  quantity: InputMaybe<Scalars['Int']>;
  user: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CartItemWhereInput = {
  AND: InputMaybe<Array<CartItemWhereInput>>;
  NOT: InputMaybe<Array<CartItemWhereInput>>;
  OR: InputMaybe<Array<CartItemWhereInput>>;
  id: InputMaybe<IdFilter>;
  product: InputMaybe<ProductWhereInput>;
  quantity: InputMaybe<IntFilter>;
  user: InputMaybe<UserWhereInput>;
};

export type CartItemWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle: InputMaybe<Scalars['String']>;
  aspect_ratio: InputMaybe<Scalars['String']>;
  background: InputMaybe<Scalars['String']>;
  border: InputMaybe<Scalars['String']>;
  color: InputMaybe<Scalars['String']>;
  color_space: InputMaybe<Scalars['String']>;
  crop: InputMaybe<Scalars['String']>;
  default_image: InputMaybe<Scalars['String']>;
  delay: InputMaybe<Scalars['String']>;
  density: InputMaybe<Scalars['String']>;
  dpr: InputMaybe<Scalars['String']>;
  effect: InputMaybe<Scalars['String']>;
  fetch_format: InputMaybe<Scalars['String']>;
  flags: InputMaybe<Scalars['String']>;
  format: InputMaybe<Scalars['String']>;
  gravity: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['String']>;
  opacity: InputMaybe<Scalars['String']>;
  overlay: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName: InputMaybe<Scalars['String']>;
  quality: InputMaybe<Scalars['String']>;
  radius: InputMaybe<Scalars['String']>;
  transformation: InputMaybe<Scalars['String']>;
  underlay: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['String']>;
  x: InputMaybe<Scalars['String']>;
  y: InputMaybe<Scalars['String']>;
  zoom: InputMaybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding: Maybe<Scalars['String']>;
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  publicUrl: Maybe<Scalars['String']>;
  publicUrlTransformed: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<DateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals: InputMaybe<Scalars['ID']>;
  gt: InputMaybe<Scalars['ID']>;
  gte: InputMaybe<Scalars['ID']>;
  in: InputMaybe<Array<Scalars['ID']>>;
  lt: InputMaybe<Scalars['ID']>;
  lte: InputMaybe<Scalars['ID']>;
  not: InputMaybe<IdFilter>;
  notIn: InputMaybe<Array<Scalars['ID']>>;
};

export type IntFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<IntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<IntNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex: Maybe<Scalars['Int']>;
  fieldMeta: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword: Maybe<UserAuthenticationWithPasswordResult>;
  createCartItem: Maybe<CartItem>;
  createCartItems: Maybe<Array<Maybe<CartItem>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createProduct: Maybe<Product>;
  createProductImage: Maybe<ProductImage>;
  createProductImages: Maybe<Array<Maybe<ProductImage>>>;
  createProducts: Maybe<Array<Maybe<Product>>>;
  createUser: Maybe<User>;
  createUsers: Maybe<Array<Maybe<User>>>;
  deleteCartItem: Maybe<CartItem>;
  deleteCartItems: Maybe<Array<Maybe<CartItem>>>;
  deleteProduct: Maybe<Product>;
  deleteProductImage: Maybe<ProductImage>;
  deleteProductImages: Maybe<Array<Maybe<ProductImage>>>;
  deleteProducts: Maybe<Array<Maybe<Product>>>;
  deleteUser: Maybe<User>;
  deleteUsers: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateCartItem: Maybe<CartItem>;
  updateCartItems: Maybe<Array<Maybe<CartItem>>>;
  updateProduct: Maybe<Product>;
  updateProductImage: Maybe<ProductImage>;
  updateProductImages: Maybe<Array<Maybe<ProductImage>>>;
  updateProducts: Maybe<Array<Maybe<Product>>>;
  updateUser: Maybe<User>;
  updateUsers: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationCreateCartItemsArgs = {
  data: Array<CartItemCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductImageArgs = {
  data: ProductImageCreateInput;
};


export type MutationCreateProductImagesArgs = {
  data: Array<ProductImageCreateInput>;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type MutationDeleteCartItemsArgs = {
  where: Array<CartItemWhereUniqueInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type MutationDeleteProductImagesArgs = {
  where: Array<ProductImageWhereUniqueInput>;
};


export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateCartItemsArgs = {
  data: Array<CartItemUpdateArgs>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductImageArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};


export type MutationUpdateProductImagesArgs = {
  data: Array<ProductImageUpdateArgs>;
};


export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  photo: Maybe<ProductImage>;
  price: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['String']>;
};

export type ProductCreateInput = {
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  photo: InputMaybe<ProductImageRelateToOneForCreateInput>;
  price: InputMaybe<Scalars['Int']>;
  status: InputMaybe<Scalars['String']>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  altText: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<CloudinaryImage_File>;
  product: Maybe<Product>;
};

export type ProductImageCreateInput = {
  altText: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Upload']>;
  product: InputMaybe<ProductRelateToOneForCreateInput>;
};

export type ProductImageOrderByInput = {
  altText: InputMaybe<OrderDirection>;
  id: InputMaybe<OrderDirection>;
};

export type ProductImageRelateToOneForCreateInput = {
  connect: InputMaybe<ProductImageWhereUniqueInput>;
  create: InputMaybe<ProductImageCreateInput>;
};

export type ProductImageRelateToOneForUpdateInput = {
  connect: InputMaybe<ProductImageWhereUniqueInput>;
  create: InputMaybe<ProductImageCreateInput>;
  disconnect: InputMaybe<Scalars['Boolean']>;
};

export type ProductImageUpdateArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};

export type ProductImageUpdateInput = {
  altText: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Upload']>;
  product: InputMaybe<ProductRelateToOneForUpdateInput>;
};

export type ProductImageWhereInput = {
  AND: InputMaybe<Array<ProductImageWhereInput>>;
  NOT: InputMaybe<Array<ProductImageWhereInput>>;
  OR: InputMaybe<Array<ProductImageWhereInput>>;
  altText: InputMaybe<StringFilter>;
  id: InputMaybe<IdFilter>;
  product: InputMaybe<ProductWhereInput>;
};

export type ProductImageWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type ProductOrderByInput = {
  description: InputMaybe<OrderDirection>;
  id: InputMaybe<OrderDirection>;
  name: InputMaybe<OrderDirection>;
  price: InputMaybe<OrderDirection>;
  status: InputMaybe<OrderDirection>;
};

export type ProductRelateToOneForCreateInput = {
  connect: InputMaybe<ProductWhereUniqueInput>;
  create: InputMaybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect: InputMaybe<ProductWhereUniqueInput>;
  create: InputMaybe<ProductCreateInput>;
  disconnect: InputMaybe<Scalars['Boolean']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  photo: InputMaybe<ProductImageRelateToOneForUpdateInput>;
  price: InputMaybe<Scalars['Int']>;
  status: InputMaybe<Scalars['String']>;
};

export type ProductWhereInput = {
  AND: InputMaybe<Array<ProductWhereInput>>;
  NOT: InputMaybe<Array<ProductWhereInput>>;
  OR: InputMaybe<Array<ProductWhereInput>>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<IdFilter>;
  name: InputMaybe<StringFilter>;
  photo: InputMaybe<ProductImageWhereInput>;
  price: InputMaybe<IntNullableFilter>;
  status: InputMaybe<StringNullableFilter>;
};

export type ProductWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem: Maybe<AuthenticatedItem>;
  cartItem: Maybe<CartItem>;
  cartItems: Maybe<Array<CartItem>>;
  cartItemsCount: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  product: Maybe<Product>;
  productImage: Maybe<ProductImage>;
  productImages: Maybe<Array<ProductImage>>;
  productImagesCount: Maybe<Scalars['Int']>;
  products: Maybe<Array<Product>>;
  productsCount: Maybe<Scalars['Int']>;
  user: Maybe<User>;
  users: Maybe<Array<User>>;
  usersCount: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemsArgs = {
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: CartItemWhereInput;
};


export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type QueryProductImagesArgs = {
  orderBy?: Array<ProductImageOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: ProductImageWhereInput;
};


export type QueryProductImagesCountArgs = {
  where?: ProductImageWhereInput;
};


export type QueryProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type StringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  cart: Maybe<Array<CartItem>>;
  cartCount: Maybe<Scalars['Int']>;
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  password: Maybe<PasswordState>;
  passwordResetIssuedAt: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt: Maybe<Scalars['DateTime']>;
  passwordResetToken: Maybe<PasswordState>;
};


export type UserCartArgs = {
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int'];
  take: InputMaybe<Scalars['Int']>;
  where?: CartItemWhereInput;
};


export type UserCartCountArgs = {
  where?: CartItemWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  cart: InputMaybe<CartItemRelateToManyForCreateInput>;
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt: InputMaybe<Scalars['DateTime']>;
  passwordResetToken: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  email: InputMaybe<OrderDirection>;
  id: InputMaybe<OrderDirection>;
  name: InputMaybe<OrderDirection>;
  passwordResetIssuedAt: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  create: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  create: InputMaybe<UserCreateInput>;
  disconnect: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  cart: InputMaybe<CartItemRelateToManyForUpdateInput>;
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt: InputMaybe<Scalars['DateTime']>;
  passwordResetToken: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  cart: InputMaybe<CartItemManyRelationFilter>;
  email: InputMaybe<StringFilter>;
  id: InputMaybe<IdFilter>;
  name: InputMaybe<StringFilter>;
  password: InputMaybe<PasswordFilter>;
  passwordResetIssuedAt: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken: InputMaybe<PasswordFilter>;
};

export type UserWhereUniqueInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};
