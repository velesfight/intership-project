/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ChangeEmailDto {
  /**
   * Confirm new email
   * @example "email@email.com"
   */
  confirmEmail: string;
  /**
   * New email
   * @example "email@email.com"
   */
  newEmail: string;
}

export interface ChangePasswordDto {
  /**
   * Пароль должен содержать как минимум одну цифру, один спец.символ, одну строчную и одну прописную латинские буквы
   * @example "P@ssw0rd"
   */
  newPassword: string;
  /**
   * Confirm password
   * @example "P@ssw0rd"
   */
  newPasswordConfirm: string;
  /**
   * password
   * @example "P@ssw0rd"
   */
  oldPassword: string;
}

export interface CheckOtpDto {
  /**
   * User email
   * @example "email@email.com"
   */
  email: string;
  /**
   * Цифровая строка ровно 6 знаков (могут быть нули в начале)
   * @example "057482"
   */
  otp: string;
}

export interface CreateAnswerDto {
  /**
   * Количество очков за ответ (от 1 до 5)
   * @example 3
   */
  points: number;
  /**
   * ID связанного Вопроса
   * @example 1
   */
  questionId: number;
  /**
   * Текст ответа
   * @example ""Да", "Скорее да", "Нейтрально", "Скорее нет", "Нет""
   */
  text: string;
}

export interface CreateCategoryDto {
  /**
   * Описание Категории
   * Необязательное поле, может быть пустой строкой с минимум 3-мя пробелами
   * @minLength 3
   * @maxLength 255
   * @example "Категория с тестами на фильмы"
   */
  description?: string | null;
  /**
   * Имя Категории
   * Уникальное имя
   * @example "Фильмы"
   */
  name: string;
}

export interface CreateLikeDto {
  /**
   * ID профиля, к которому ставится лайк
   * @example 2
   */
  toProfileId: number;
  /** Тип лайка: simpleLike или superlike */
  type: 'simpleLike' | 'superLike';
}

export interface CreateLikeRespDto {
  /**
   * Дата и время создания GMT
   * @format date-time
   * @example "2025-03-22T21:21:43.232Z"
   */
  createdAt: string;
  /**
   * От кого Лайк
   * ID Профиля
   * @example 1
   */
  fromProfileId: number;
  /**
   * Уникальный ID
   * @example 1
   */
  id: number;
  /**
   * Случился ли Match
   * @example true
   */
  isMatch: boolean;
  /**
   * К кому Лайк
   * ID Профиля
   * @example 2
   */
  toProfileId: number;
  /** Тип Лайка */
  type: 'simpleLike' | 'superLike';
}

export interface CreateProfileDto {
  /**
   * День рождения
   * @format date-time
   * @example "2000-06-20"
   */
  birthDay: string;
  /**
   * Пол по английски: male/female
   * @example "female"
   */
  gender: string;
  /**
   * User name
   * @example "Alice"
   */
  name: string;
}

export interface CreateQuestionDto {
  /**
   * ID связанного Теста
   * @example 1
   */
  testId: number;
  /**
   * Текст вопроса (уникальный)
   * @example "Ваш любимый жанр в кино?"
   */
  text: string;
}

export interface CreateSubscriptionDto {
  /**
   * Дата конца
   * @format date-time
   */
  endDate: string;
  /** profileId */
  profileId: number;
  /**
   * Дата начала
   * @format date-time
   */
  startDate: string;
  /** Тип */
  type: 'BASIC' | 'PREMIUM';
}

export interface CreateTestDto {
  /**
   * ID Категории
   * @example 1
   */
  categoryId: number;
  /**
   * Наименование
   * Уникальное имя Теста
   * @example "Тест 1"
   */
  name: string;
  /**
   * Тип теста
   * @example "normal"
   */
  type: 'normal' | 'nude';
}

export interface CreateUserDto {
  /**
   * Почта
   * @example "email@email.com"
   */
  email: string;
  /**
   * Пароль должен быть не менее 8 символов и содержать как минимум одну цифру, один спец.символ, одну строчную и одну прописную латинские буквы
   * @example "P@ssw0rd"
   */
  password: string;
  /**
   * Роль
   * @example "regular"
   */
  role: 'regular' | 'admin';
  /**
   * Статус
   * @example "verified"
   */
  status: 'verified' | 'profile_incomplete' | 'active' | 'suspended';
}

export interface GetOtpDto {
  /**
   * User email
   * @example "email@email.com"
   */
  email: string;
}

export interface Like {
  /**
   * Дата и время создания GMT
   * @format date-time
   * @example "2025-03-22T21:21:43.232Z"
   */
  createdAt: string;
  /**
   * От кого Лайк
   * ID Профиля
   * @example 1
   */
  fromProfileId: number;
  /**
   * Уникальный ID
   * @example 1
   */
  id: number;
  /**
   * К кому Лайк
   * ID Профиля
   * @example 2
   */
  toProfileId: number;
  /** Тип Лайка */
  type: 'simpleLike' | 'superLike';
}

export interface LocationDto {
  /** Lat */
  latitude: number;
  /** Lon */
  longitude: number;
}

export type Match = object;

export interface MatchResponseDto {
  /** Профиль Юзера с которым взаимные лайки (Мэтч) */
  profile: ProfileRespDto;
  /** Платный мэтч? (Пробитие) */
  quickMatch: boolean;
}

export interface OtpResponseDto {
  /**
   * Дата и время GMT (UTC) для следующего возможного запроса
   * @example "Wed, 14 Jun 2017 07:00:00 GMT"
   */
  expires: string;
  /**
   * Если "false" это значит, что такой юзер существует в БД и при попытке регистрации письмо не высылаем
   * @example true
   */
  success: boolean;
}

export interface PaginatedReqDto {
  /**
   * Количество элементов на одной странице
   * @min 1
   * @default 1
   * @example 10
   */
  limit?: number;
  /**
   * Начальная страница для загрузки
   * Начальная страница для загрузки. Стартует с 1
   * @min 1
   * @default 1
   */
  page?: number;
}

export interface PaginatedRespDto {
  /**
   * Количество элементов на одной странице
   * @example 10
   */
  limit: number;
  /**
   * Номер текущей страницы
   * стартует с 1
   * @example 1
   */
  page: number;
  /** Массив с данными из БД */
  results: string[];
  /**
   * Всего найденных элементов в БД
   * @example 20
   */
  total: number;
}

export interface Photo {
  /**
   * Имя файла в бакете
   * @example "1__1756981237284.png"
   */
  fileName: string;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /**
   * Имя файла при загрузке пользователем
   * @example "my-photo.png"
   */
  origName: string;
  /**
   * Основное фото
   * @example true
   */
  primary: boolean;
  /**
   * АйДи связанного Профиля
   * @example 1
   */
  profileId: number;
}

export interface PhotoUrlDto {
  /**
   * Имя файла в бакете
   * @example "1__1756981237284.png"
   */
  fileName: string;
  /**
   * Уникальный идентификатор
   * @example 1
   */
  id: number;
  /**
   * Имя файла при загрузке пользователем
   * @example "my-photo.png"
   */
  origName: string;
  /**
   * Основное фото
   * @example true
   */
  primary: boolean;
  /**
   * АйДи связанного Профиля
   * @example 1
   */
  profileId: number;
  /**
   * Временная ссылка на фото
   * @example "https://bucket.s3.amazonaws.com/photo.jpg"
   */
  url: string;
}

export interface Point {
  /**
   * Широта
   * @format float
   * @example 55.7545
   */
  latitude: number;
  /**
   * Долгота
   * @format float
   * @example 37.6211
   */
  longitude: number;
}

export interface Profile {
  /**
   * Дата рождения
   * @format date-time
   * @example "2000-01-01"
   */
  birthDay: string;
  /**
   * Краткая информация
   * @example "Кратко обо мне"
   */
  brief: string;
  /**
   * Время создания профиля UTC
   * @example 1612345678901
   */
  createdAtMs: number;
  /**
   * Пол
   * @example "male"
   */
  gender: 'male' | 'female';
  /**
   * Уникальный идентификатор, равен Айди связанного Юзера
   * @example 1
   */
  id: number;
  /** Лайки ко мне */
  likesToMe: Like[];
  /**
   * Время изменения (save) профиля UTC
   * @example 1612345678901
   */
  modifiedAtMs: number;
  /** Мои Лайки */
  myLikes: Like[];
  /**
   * Имя
   * @example "Ivan"
   */
  name: string;
  /** Фото */
  photos: Photo[];
  /** Юзер */
  user: User;
}

export interface ProfileRespDto {
  /**
   * Дата рождения
   * @format date-time
   * @example "2000-01-01"
   */
  birthDay: string;
  /**
   * Краткая информация
   * @example "Кратко обо мне"
   */
  brief: string;
  /**
   * Пол
   * @example "male"
   */
  gender: 'male' | 'female';
  /**
   * Уникальный идентификатор, равен Айди связанного Юзера
   * @example 1
   */
  id: number;
  /**
   * Имя
   * @example "Ivan"
   */
  name: string;
}

export interface ProfileWithPhotoDto {
  /**
   * Дата рождения
   * @format date-time
   * @example "2000-01-01"
   */
  birthDay: string;
  /**
   * Краткая информация
   * @example "Кратко обо мне"
   */
  brief: string;
  /**
   * Время создания профиля UTC
   * @example 1612345678901
   */
  createdAtMs: number;
  /**
   * Пол
   * @example "male"
   */
  gender: 'male' | 'female';
  /**
   * Уникальный идентификатор, равен Айди связанного Юзера
   * @example 1
   */
  id: number;
  /**
   * Время изменения (save) профиля UTC
   * @example 1612345678901
   */
  modifiedAtMs: number;
  /**
   * Имя
   * @example "Ivan"
   */
  name: string;
  /** Фото */
  photos: Photo[];
}

export interface ProfileWithoutRelationsDto {
  /**
   * Дата рождения
   * @format date-time
   * @example "2000-01-01"
   */
  birthDay: string;
  /**
   * Краткая информация
   * @example "Кратко обо мне"
   */
  brief: string;
  /**
   * Время создания профиля UTC
   * @example 1612345678901
   */
  createdAtMs: number;
  /**
   * Пол
   * @example "male"
   */
  gender: 'male' | 'female';
  /**
   * Уникальный идентификатор, равен Айди связанного Юзера
   * @example 1
   */
  id: number;
  /** Лайки ко мне */
  likesToMe: Like[];
  /**
   * Время изменения (save) профиля UTC
   * @example 1612345678901
   */
  modifiedAtMs: number;
  /** Мои Лайки */
  myLikes: Like[];
  /**
   * Имя
   * @example "Ivan"
   */
  name: string;
  /** Фото */
  photos: PhotoUrlDto[];
}

export interface QuAns {
  /**
   * Answer Points (min 1, max 5)
   * @example 4
   */
  ansPoints: number;
  /**
   * Question ID
   * @example 1
   */
  qId: number;
}

export interface RefreshTokenDto {
  /**
   * Refresh token
   * @example "eyJhbGciOiCJ9.eyJzdWIjoibWUifQ.KwSC830XWZ8H4cNQ"
   */
  refreshToken: string;
}

export interface RestoreOtpResponseDto {
  /**
   * Дата и время GMT (UTC) для следующего возможного запроса
   * @format date-time
   * @example "Wed, 14 Jun 2017 07:00:00 GMT"
   */
  expires: string;
  /**
   * Успех/неуспех при расшифровке токена.
   * @example true
   */
  success: boolean;
  /**
   * Токен для сброса пароля
   * @example "f73b4x8shetc6ag:fygso39sf76eg26hG7wh3nU:7f3d4g"
   */
  token: string;
}

export interface RestorePasswordDto {
  /**
   * Пароль должен содержать как минимум одну цифру, один спец.символ, одну строчную и одну прописную латинские буквы
   * @example "P@ssw0rd"
   */
  newPassword: string;
  /**
   * Confirm password
   * @example "P@ssw0rd"
   */
  newPasswordConfirm: string;
  /**
   * Change password token
   * @example "zx2deuyt65ys:gsygd7df54vb8:8s6c4v12l3jcs"
   */
  token: string;
}

export interface SignInDto {
  /**
   * Email
   * email пользователя
   * @example "email@email.com"
   */
  email: string;
  /**
   * Широта
   * @example 55.754572
   */
  latitude?: number;
  /**
   * Долгота
   * @example 37.621182
   */
  longitude?: number;
  /**
   * Пароль
   * Минимальная длина 8 символов, должен содержать цифру, букву, спецсимвол
   * @example "P@ssw0rd"
   */
  password: string;
}

export interface SignUpDto {
  /**
   * Старше 18 лет
   * Пометка о том, что Пользователь совершеннолетний.
   * @example true
   */
  ageConfirmed: boolean;
  /**
   * Email
   * User email
   * @example "email@email.com"
   */
  email: string;
  /**
   * Password
   * Пароль должен быть не менее 8 символов и содержать как минимум одну цифру, один спец.символ, одну строчную и одну прописную латинские буквы
   * @example "P@ssw0rd"
   */
  password: string;
}

export interface SimpleProfileDto {
  /**
   * Дата рождения
   * @format date-time
   * @example "2000-01-01"
   */
  birthDay: string;
  /**
   * Краткая информация
   * @example "Кратко обо мне"
   */
  brief: string;
  /**
   * Время создания профиля UTC
   * @example 1612345678901
   */
  createdAtMs: number;
  /**
   * Пол
   * @example "male"
   */
  gender: 'male' | 'female';
  /**
   * Уникальный идентификатор, равен Айди связанного Юзера
   * @example 1
   */
  id: number;
  /**
   * Тип лайка
   * @example "simpleLike"
   */
  likeType: 'simpleLike' | 'superLike';
  /**
   * Время изменения (save) профиля UTC
   * @example 1612345678901
   */
  modifiedAtMs: number;
  /**
   * Имя
   * @example "Ivan"
   */
  name: string;
}

export type Subscription = object;

export interface TCatResponseDto {
  /**
   * Описание Категории
   * Необязательное поле, может быть пустой строкой с минимум 3-мя пробелами
   * @minLength 3
   * @maxLength 255
   * @example "Категория с тестами на фильмы"
   */
  description?: string | null;
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * Имя Категории
   * Уникальное имя
   * @example "Фильмы"
   */
  name: string;
  /**
   * ID пройденных Юзером тестов в данной категории
   * @example [1,3]
   */
  passedIds: number[];
  /**
   * Количество тестов в данной категории
   * @example 3
   */
  testCount: number;
  /**
   * ID Тестов в данной категории
   * @example [1,2,3]
   */
  testIds: number[];
}

export interface TestAnswerRespDto {
  /** ID */
  id: number;
  /**
   * Количество очков за ответ (от 1 до 5)
   * @example 3
   */
  points: number;
  /**
   * ID связанного Вопроса
   * @example 1
   */
  questionId: number;
  /**
   * Текст ответа
   * @example ""Да", "Скорее да", "Нейтрально", "Скорее нет", "Нет""
   */
  text: string;
}

export interface TestCategory {
  /**
   * Описание Категории
   * Необязательное поле, может быть пустой строкой с минимум 3-мя пробелами
   * @minLength 3
   * @maxLength 255
   * @example "Категория с тестами на фильмы"
   */
  description?: string | null;
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * Имя Категории
   * Уникальное имя
   * @example "Фильмы"
   */
  name: string;
}

export interface TestQuestionRespDto {
  /** ID */
  id: number;
  /**
   * ID связанного Теста
   * @example 1
   */
  testId: number;
  /**
   * Текст вопроса (уникальный)
   * @example "Ваш любимый жанр в кино?"
   */
  text: string;
}

export interface TestRespDto {
  /**
   * ID Категории
   * @example 1
   */
  categoryId: number;
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * Наименование
   * Уникальное имя Теста
   * @example "Тест 1"
   */
  name: string;
  /**
   * Тип теста
   * @example "normal"
   */
  type: 'normal' | 'nude';
}

export interface TestRespListDto {
  /**
   * ID Категории
   * @example 1
   */
  categoryId: number;
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * Наименование
   * Уникальное имя Теста
   * @example "Тест 1"
   */
  name: string;
  /**
   * Количество вопросов
   * @example 13
   */
  questionsCount: number;
  /**
   * Тип теста
   * @example "normal"
   */
  type: 'normal' | 'nude';
}

export interface TestResult {
  /**
   * Answer's Points
   * Points ordered by Questions(asc)
   * @example [4,2,1,3]
   */
  answerPoints: any[][];
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * Profile ID
   * @example 1
   */
  profileId: number;
  /**
   * Test ID
   * @example 1
   */
  testId: number;
}

export interface TestResultDto {
  /**
   * Question IDs and Answers Points
   * @example [{"qId":1,"ansPoints":4},{"qId":2,"ansPoints":3}]
   */
  answers: QuAns[];
  /**
   * Test ID
   * @example 1
   */
  testId: number;
}

export interface TokensResponse {
  /**
   * Access token
   * Описание что с ним делать
   * @example "AsdkkdkafF.fdsfsdfaAf.dfsdfdsg"
   */
  accessToken: string;
  /**
   * refresh token
   * Описание что с ним делать
   * @example "AsdkkdkafF.fdsfsdfaAf.dfsdfdsg"
   */
  refreshToken: string;
}

export interface UnreadCountDto {
  /** ID Партнера */
  fromId: number;
  /** Количество непрочтённых сообщений */
  unread: number;
}

export interface UpdateAnswerDto {
  /**
   * Количество очков за ответ (от 1 до 5)
   * @example 3
   */
  points: number;
  /**
   * Текст ответа
   * @example ""Да", "Скорее да", "Нейтрально", "Скорее нет", "Нет""
   */
  text: string;
}

export interface UpdateProfileDto {
  /**
   * Дата рождения
   * @format date-time
   * @example "2000-01-01"
   */
  birthDay?: string;
  /**
   * Краткая информация
   * @example "Кратко обо мне"
   */
  brief?: string;
  /**
   * Имя
   * @example "Ivan"
   */
  name?: string;
}

export interface UpdateQuestionDto {
  /**
   * Текст вопроса (уникальный)
   * @example "Ваш любимый жанр в кино?"
   */
  text: string;
}

export interface UpdateSubscriptionDto {
  /**
   * Дата конца
   * @format date-time
   */
  endDate: string;
  /** Тип */
  type: 'BASIC' | 'PREMIUM';
}

export interface UpdateTestDto {
  /**
   * ID Категории
   * @example 1
   */
  categoryId?: number;
  /**
   * Наименование
   * Уникальное имя Теста
   * @example "Тест 1"
   */
  name?: string;
  /**
   * Тип теста
   * @example "normal"
   */
  type?: 'normal' | 'nude';
}

export interface UpdateUserDto {
  /**
   * Почта
   * @example "email@email.com"
   */
  email?: string;
  /**
   * Пароль должен быть не менее 8 символов и содержать как минимум одну цифру, один спец.символ, одну строчную и одну прописную латинские буквы
   * @example "P@ssw0rd"
   */
  password?: string;
  /**
   * Координаты
   * @format object
   * @example {"latitude":55.7545,"longitude":37.6211}
   */
  point?: Point;
  /**
   * Роль
   * @example "regular"
   */
  role?: 'regular' | 'admin';
  /**
   * Статус
   * @example "verified"
   */
  status?: 'verified' | 'profile_incomplete' | 'active' | 'suspended';
}

export interface UploadPhotoDto {
  /**
   * Файл картинки для загрузки
   * @format binary
   */
  file: File;
  /** Является ли фото основным */
  isPrimary: boolean;
}

export interface User {
  /**
   * Почта
   * @example "email@email.com"
   */
  email: string;
  /**
   * ID Пользователя
   * @example 1
   */
  id: number;
  /**
   * Пароль должен быть не менее 8 символов и содержать как минимум одну цифру, один спец.символ, одну строчную и одну прописную латинские буквы
   * @example "P@ssw0rd"
   */
  password: string;
  /**
   * Координаты
   * @format object
   * @example {"latitude":55.7545,"longitude":37.6211}
   */
  point: Point;
  /**
   * ID связанного Профиля
   * @example 1
   */
  profileId: number;
  /**
   * Роль
   * @example "regular"
   */
  role: 'regular' | 'admin';
  /**
   * Статус
   * @example "verified"
   */
  status: 'verified' | 'profile_incomplete' | 'active' | 'suspended';
}

export interface UserRespDto {
  /**
   * Почта
   * @example "email@email.com"
   */
  email: string;
  /**
   * ID Пользователя
   * @example 1
   */
  id: number;
  /**
   * Координаты
   * @format object
   * @example {"latitude":55.7545,"longitude":37.6211}
   */
  point: Point;
  /**
   * ID связанного Профиля
   * @example 1
   */
  profileId: number;
  /**
   * Роль
   * @example "regular"
   */
  role: 'regular' | 'admin';
  /**
   * Статус
   * @example "verified"
   */
  status: 'verified' | 'profile_incomplete' | 'active' | 'suspended';
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { 'Content-Type': type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Nude project
 * @version 0.0.1
 * @externalDocs /docs-yaml
 * @contact
 *
 * Api description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerChangeEmail
     * @request POST:/users/change-email
     * @secure
     * @response `201` `void`
     * @response `400` `void` Ошибка валидации или  почта не совпадает с подтверждением
     * @response `409` `void` Такая почта уже зарегистрирована
     */
    usersControllerChangeEmail: (data: ChangeEmailDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/change-email`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description - Минимум 8 символов в длину. - Содержит хотя бы одну цифру. - Содержит хотя бы одну строчную латинскую букву. - Содержит хотя бы одну заглавную латинскую букву. - Содержит хотя бы один специальный символ из набора @$!%*?&
     *
     * @tags Users
     * @name UsersControllerChangePassword
     * @summary Смена пароля
     * @request POST:/users/change-password
     * @secure
     * @response `201` `void` Успешная смена пароля, очищаются токены
     * @response `400` `void` Пароль и его подтверждение не совпадают
     * @response `403` `void` Неверный старый пароль
     */
    usersControllerChangePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/change-password`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerCreate
     * @request POST:/users/create
     * @secure
     * @response `201` `void`
     */
    usersControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Только для Админа
     *
     * @tags Users
     * @name UsersControllerFindAll
     * @summary Получить список всех пользователей
     * @request GET:/users/list
     * @secure
     * @response `200` `(UserRespDto)[]`
     */
    usersControllerFindAll: (params: RequestParams = {}) =>
      this.request<UserRespDto[], any>({
        path: `/users/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Только для Админа
     *
     * @tags Users
     * @name UsersControllerFindOne
     * @summary Получить пользователя по ID
     * @request GET:/users/{id}
     * @secure
     * @response `200` `UserRespDto`
     * @response `404` `void` Пользователь с указанным ID не найден
     */
    usersControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<UserRespDto, void>({
        path: `/users/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Только для Админа
     *
     * @tags Users
     * @name UsersControllerRemove
     * @summary Удалить пользователя по ID
     * @request DELETE:/users/{id}
     * @secure
     * @response `200` `UserRespDto` Пользователь удален
     * @response `404` `void` Пользователь с указанным ID не найден
     */
    usersControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<UserRespDto, void>({
        path: `/users/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Только для Админа
     *
     * @tags Users
     * @name UsersControllerUpdate
     * @summary Обновить пользователя по ID
     * @request PATCH:/users/{id}
     * @secure
     * @response `200` `UserRespDto`
     * @response `400` `void` Ошибки валидации
     * @response `404` `void` Пользователь с указанным ID не найден
     * @response `409` `void` Такая почта уже зарегистрирована
     */
    usersControllerUpdate: (id: number, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UserRespDto, void>({
        path: `/users/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  authentication = {
    /**
     * @description - Минимум 8 символов в длину. - Содержит хотя бы одну цифру. - Содержит хотя бы одну строчную латинскую букву. - Содержит хотя бы одну заглавную латинскую букву. - Содержит хотя бы один специальный символ из набора @$!%*?&
     *
     * @tags Authentication
     * @name AuthenticationControllerChangePassword
     * @summary Сброс пароля
     * @request POST:/authentication/restore/change-password
     * @response `201` `void`
     * @response `400` `void` Пароль и его подтверждение не совпадают
     */
    authenticationControllerChangePassword: (
      data: RestorePasswordDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/authentication/restore/change-password`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Проверяется код для указанного мейла, при успехе выдаются JWT токены
     *
     * @tags Authentication
     * @name AuthenticationControllerCheckOtp
     * @summary Проверка OTP кода
     * @request POST:/authentication/sign-up/otp/confirm
     * @response `201` `TokensResponse` Access и refresh токены
     * @response `400` `void` OTP код неверный.
     * @response `404` `void` Срок (таймер) для проверки истёк или неверный адрес почты в запросе
     * @response `429` `void` 3 запроса в минуту с одного айпи максимум
     */
    authenticationControllerCheckOtp: (data: CheckOtpDto, params: RequestParams = {}) =>
      this.request<TokensResponse, void>({
        path: `/authentication/sign-up/otp/confirm`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Код высылается на указанный мейл, стартует таймер на 5 минут
     *
     * @tags Authentication
     * @name AuthenticationControllerGenerateOtp
     * @summary Генерация и отсылка OTP кода при регистрации нового Юзера
     * @request POST:/authentication/sign-up/otp/request
     * @response `201` `OtpResponseDto` Успех / неуспех при отсылке письма и таймстамп для окончания таймера
     * @response `410` `void` Не удалось отправить письмо с ОТП кодом
     * @response `429` `void` 3 запроса в минуту с одного айпи максимум
     */
    authenticationControllerGenerateOtp: (data: GetOtpDto, params: RequestParams = {}) =>
      this.request<OtpResponseDto, void>({
        path: `/authentication/sign-up/otp/request`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаляется рефреш токен из хранилища и очищается кука "refreshToken"
     *
     * @tags Authentication
     * @name AuthenticationControllerLogout
     * @summary Логаут текущего пользователя
     * @request POST:/authentication/logout
     * @secure
     * @response `200` `string` Успешный логаут
     */
    authenticationControllerLogout: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/authentication/logout`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Обновление обоих токенов по Refresh токену
     *
     * @tags Authentication
     * @name AuthenticationControllerRefreshToken
     * @summary Рефреш токенов для мобильного приложения
     * @request POST:/authentication/refresh-tokens
     * @response `201` `TokensResponse` Возвращаются токены в теле
     * @response `401` `void` Юзер выполнил логаут или токен недействителен
     */
    authenticationControllerRefreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<TokensResponse, void>({
        path: `/authentication/refresh-tokens`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Обновление обоих токенов по Refresh токену
     *
     * @tags Authentication
     * @name AuthenticationControllerRefreshTokenWeb
     * @summary Рефреш токенов для Браузера
     * @request POST:/authentication/refresh-tokens-web
     * @response `201` `string` Возвращается аксесс токен как строка и Refresh токен в куке "refreshToken"
     * @response `401` `void` Юзер выполнил логаут или токен недействителен
     */
    authenticationControllerRefreshTokenWeb: (params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/authentication/refresh-tokens-web`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * @description Код высылается на указанный мейл, стартует таймер на 5 минут
     *
     * @tags Authentication
     * @name AuthenticationControllerRequestOtp
     * @summary Генерация и отсылка OTP кода, когда Юзер забыл пароль
     * @request POST:/authentication/restore/otp/request
     * @response `201` `OtpResponseDto` Успех / неуспех при отсылке письма и таймстамп для окончания таймера
     * @response `410` `void` Не удалось отправить письмо с ОТП кодом
     * @response `429` `void` 3 запроса в минуту с одного айпи максимум
     */
    authenticationControllerRequestOtp: (data: GetOtpDto, params: RequestParams = {}) =>
      this.request<OtpResponseDto, void>({
        path: `/authentication/restore/otp/request`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Получение токенов по email и password
     *
     * @tags Authentication
     * @name AuthenticationControllerSignIn
     * @summary Вход
     * @request POST:/authentication/sign-in
     * @response `201` `TokensResponse` Оба токена в теле и Refresh токен в куке "refreshToken"
     * @response `403` `void` Неверный логин или пароль
     * @response `429` `void` 5 запросов в минуту с одного айпи максимум
     */
    authenticationControllerSignIn: (data: SignInDto, params: RequestParams = {}) =>
      this.request<TokensResponse, void>({
        path: `/authentication/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Получение токенов по email и password
     *
     * @tags Authentication
     * @name AuthenticationControllerSignInAdmin
     * @summary Вход для Администратора
     * @request POST:/authentication/admin/sign-in
     * @response `201` `TokensResponse` Оба токена в теле и Refresh токен в куке "refreshToken"
     * @response `403` `void` Неверный логин или пароль
     * @response `429` `void` 5 запросов в минуту с одного айпи максимум
     */
    authenticationControllerSignInAdmin: (data: SignInDto, params: RequestParams = {}) =>
      this.request<TokensResponse, void>({
        path: `/authentication/admin/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Требования к паролю: - Минимум 8 символов в длину. - Содержит хотя бы одну цифру. - Содержит хотя бы одну строчную латинскую букву. - Содержит хотя бы одну заглавную латинскую букву. - Содержит хотя бы один специальный символ из набора @$!%*?&
     *
     * @tags Authentication
     * @name AuthenticationControllerSignUp
     * @summary Регистрация пользователя
     * @request POST:/authentication/sign-up
     * @response `201` `OtpResponseDto` Информация о том что ОТП код выслан на указанный email и время жизни ОТП
     * @response `400` `void` Пароль или Email не соответствуют условиям валидации
     * @response `429` `void` 5 запросов в минуту с одного айпи максимум
     */
    authenticationControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<OtpResponseDto, void>({
        path: `/authentication/sign-up`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращается новый ОТП код для смены пароля, стартует таймер на 10 минут
     *
     * @tags Authentication
     * @name AuthenticationControllerVerifyOtp
     * @summary Проверка OTP кода, высланного на мейл, когда Юзер забыл пароль
     * @request GET:/authentication/restore/otp/verify/{token}
     * @response `200` `RestoreOtpResponseDto` Успех / неуспех при проверке, таймстамп для окончания таймера и новый ОТП для смены пароля
     */
    authenticationControllerVerifyOtp: (token: string, params: RequestParams = {}) =>
      this.request<RestoreOtpResponseDto, any>({
        path: `/authentication/restore/otp/verify/${token}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  photos = {
    /**
     * @description Если удаляется ОСНОВНОЕ фото, то необходимо указать АйДи того фото, которое станет основным. НЕЛЬЗЯ удалить фото, если оно единственное в профиле
     *
     * @tags Photos
     * @name PhotosControllerDeletePhoto
     * @summary Удаление фото (Юзер может удалить только свои фото, Админ - любые)
     * @request DELETE:/photos/delete/{photoId}/{newPrimaryId}
     * @secure
     * @response `200` `PhotoUrlDto` Или ОСНОВНОЕ фото (то, которое СТАЛО основным) или удалённое фото (если удалили НЕ основное)
     * @response `400` `void` Couldnt delete photo
     * @response `403` `void` User can delete only his own photos
     */
    photosControllerDeletePhoto: (
      photoId: number,
      newPrimaryId?: number,
      params: RequestParams = {},
    ) =>
      this.request<PhotoUrlDto, void>({
        path: `/photos/delete/${photoId}/${newPrimaryId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
 * No description
 *
 * @tags Photos
 * @name PhotosControllerGetAllPhotos
 * @summary Список всех фото постранично (Админ только)
 * @request GET:/photos/list
 * @secure
 * @response `200` `(PaginatedRespDto & {
    results?: (PhotoUrlDto)[],

})`
 */
    photosControllerGetAllPhotos: (
      query?: {
        /**
         * Количество элементов на одной странице
         * @min 1
         * @default 1
         * @example 10
         */
        limit?: number;
        /**
         * Начальная страница для загрузки
         * Начальная страница для загрузки. Стартует с 1
         * @min 1
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedRespDto & {
          results?: PhotoUrlDto[];
        },
        any
      >({
        path: `/photos/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает массив фотографий со временными ссылками
     *
     * @tags Photos
     * @name PhotosControllerGetAllUrlForProfile
     * @summary Получение URL всех фотографий любого профиля
     * @request GET:/photos/all-urls/{profileId}
     * @secure
     * @response `200` `(PhotoUrlDto)[]`
     */
    photosControllerGetAllUrlForProfile: (profileId: number, params: RequestParams = {}) =>
      this.request<PhotoUrlDto[], any>({
        path: `/photos/all-urls/${profileId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает массив фотографий со временными ссылками
     *
     * @tags Photos
     * @name PhotosControllerGetAllUrls
     * @summary Получение URL всех фотографий текущего профиля
     * @request GET:/photos/all-urls
     * @secure
     * @response `200` `(PhotoUrlDto)[]`
     */
    photosControllerGetAllUrls: (params: RequestParams = {}) =>
      this.request<PhotoUrlDto[], any>({
        path: `/photos/all-urls`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает фото со временной ссылкой
     *
     * @tags Photos
     * @name PhotosControllerGetPrimaryUrl
     * @summary Получение URL основной фотографии текущего профиля
     * @request GET:/photos/primary-url
     * @secure
     * @response `200` `PhotoUrlDto`
     */
    photosControllerGetPrimaryUrl: (params: RequestParams = {}) =>
      this.request<PhotoUrlDto, any>({
        path: `/photos/primary-url`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает фото со временной ссылкой
     *
     * @tags Photos
     * @name PhotosControllerGetPrimaryUrlForProfile
     * @summary Получение URL основной фотографии для другого профиля
     * @request GET:/photos/primary-url/{profileId}
     * @secure
     * @response `200` `PhotoUrlDto`
     */
    photosControllerGetPrimaryUrlForProfile: (profileId: number, params: RequestParams = {}) =>
      this.request<PhotoUrlDto, any>({
        path: `/photos/primary-url/${profileId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаляет все фотографии, очищает S3, устанавливает Status.ProfileIncomplete если был Status.Active
     *
     * @tags Photos
     * @name PhotosControllerRemoveAll
     * @summary Удалить все фотографии Юзера (Админ только)
     * @request DELETE:/photos/remove-all/{userId}
     * @secure
     * @response `200` `(PhotoUrlDto)[]` Массив удалённых фото
     */
    photosControllerRemoveAll: (userId: number, params: RequestParams = {}) =>
      this.request<PhotoUrlDto[], any>({
        path: `/photos/remove-all/${userId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Автоматически снимает флаг основной фотографии с других фотографий и возвращает временный URL
     *
     * @tags Photos
     * @name PhotosControllerSetPrimaryPhoto
     * @summary Установка фотографии в качестве основной
     * @request PATCH:/photos/set-primary/{photoId}
     * @secure
     * @response `200` `PhotoUrlDto` Временный URL новой основной фотографии
     * @response `400` `void` Couldnt set photo as primary
     */
    photosControllerSetPrimaryPhoto: (photoId: number, params: RequestParams = {}) =>
      this.request<PhotoUrlDto, void>({
        path: `/photos/set-primary/${photoId}`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает сохранённую сущность, со временной ссылкой, которую можно использовать в качестве src для тега img
     *
     * @tags Photos
     * @name PhotosControllerUpdatePhoto
     * @summary Загрузка файла фотографии вместо существующего
     * @request PATCH:/photos/replace/{photoId}
     * @secure
     * @response `201` `PhotoUrlDto` Файл успешно загружен
     */
    photosControllerUpdatePhoto: (
      photoId: number,
      data: UploadPhotoDto,
      params: RequestParams = {},
    ) =>
      this.request<PhotoUrlDto, any>({
        path: `/photos/replace/${photoId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает сохранённую сущность, со временной ссылкой, которую можно использовать в качестве src для тега img
     *
     * @tags Photos
     * @name PhotosControllerUploadPhoto
     * @summary Загрузка файла фотографии
     * @request POST:/photos/upload
     * @secure
     * @response `201` `PhotoUrlDto` Файл успешно загружен
     * @response `400` `void` Ошибки валидации по типу файла или по размеру файла
     */
    photosControllerUploadPhoto: (data: UploadPhotoDto, params: RequestParams = {}) =>
      this.request<PhotoUrlDto, void>({
        path: `/photos/upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  };
  profiles = {
    /**
     * @description Статус Юзера становится "ProfileIncomplete"
     *
     * @tags Profiles
     * @name ProfilesControllerCreate
     * @summary Создаём профиль для текущего Пользователя
     * @request POST:/profiles/create
     * @secure
     * @response `201` `Profile`
     * @response `400` `void` Неверные данные
     * @response `409` `void` Профиль уже существует
     */
    profilesControllerCreate: (data: CreateProfileDto, params: RequestParams = {}) =>
      this.request<Profile, void>({
        path: `/profiles/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesControllerFindAll
     * @summary Показать все профили (для Админа только)
     * @request GET:/profiles/list
     * @secure
     * @response `200` `(Profile)[]`
     */
    profilesControllerFindAll: (params: RequestParams = {}) =>
      this.request<Profile[], any>({
        path: `/profiles/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
 * @description Показать ленту профилей для текущего Юзера в соответствии с переданными фильтрами
 *
 * @tags Profiles
 * @name ProfilesControllerFindAllWithFilters
 * @summary Показать ленту профилей
 * @request GET:/profiles/feed
 * @secure
 * @response `200` `(PaginatedRespDto & {
    results?: (ProfileWithoutRelationsDto)[],

})`
 * @response `400` `void` У Юзера нет координат, но он хочет фильтровать по координатам
 */
    profilesControllerFindAllWithFilters: (
      query?: {
        /**
         * Фильтр по полу
         * @example "female"
         */
        gender?: 'male' | 'female';
        /**
         * Количество загружаемых профилей за один запрос
         * @example 10
         */
        limit?: number;
        /**
         * Максимальный возраст для фильтра
         * @example 20
         */
        maxAge?: number;
        /**
         * Фильтр по максимальному расстоянию до объекта в км (целое число)
         * @example 20
         */
        maxDistance?: number;
        /**
         * Минимальный возраст для фильтра
         * @example 18
         */
        minAge?: number;
        /**
         * Фильтр по минимальному расстоянию до объекта в км (целое число)
         * @example 0
         */
        minDistance?: number;
        /**
         * Начальная страница для загрузки (начинается с 1)
         * @example 1
         */
        page?: number;
        /**
         * Имя для поля сортировки: 'age'
         * По умолчанию - сортировка по дате создания Профиля (по убыванию)
         * @example "age"
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedRespDto & {
          results?: ProfileWithoutRelationsDto[];
        },
        void
      >({
        path: `/profiles/feed`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesControllerFindAnother
     * @summary Профиль по ID
     * @request GET:/profiles/one/{profileId}
     * @secure
     * @response `200` `SimpleProfileDto`
     * @response `404` `void`
     */
    profilesControllerFindAnother: (profileId: number, params: RequestParams = {}) =>
      this.request<SimpleProfileDto, void>({
        path: `/profiles/one/${profileId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesControllerFindOne
     * @summary Показать профиль текущего Пользователя
     * @request GET:/profiles
     * @secure
     * @response `200` `ProfileWithPhotoDto`
     * @response `404` `void`
     */
    profilesControllerFindOne: (params: RequestParams = {}) =>
      this.request<ProfileWithPhotoDto, void>({
        path: `/profiles`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Статус Юзера становится "Verified"
     *
     * @tags Profiles
     * @name ProfilesControllerRemove
     * @summary Удалить профиль для текущего Пользователя
     * @request DELETE:/profiles/delete
     * @secure
     * @response `200` `Profile`
     * @response `404` `void`
     */
    profilesControllerRemove: (params: RequestParams = {}) =>
      this.request<Profile, void>({
        path: `/profiles/delete`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesControllerUpdate
     * @summary Изменить профиль текущего Пользователя
     * @request PATCH:/profiles/update
     * @secure
     * @response `201` `Profile`
     * @response `400` `void` Неверные данные
     * @response `404` `void`
     */
    profilesControllerUpdate: (data: UpdateProfileDto, params: RequestParams = {}) =>
      this.request<Profile, void>({
        path: `/profiles/update`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  s3 = {
    /**
     * No description
     *
     * @tags s3
     * @name S3ControllerDeleteFile
     * @summary Delete test.txt file from S3
     * @request GET:/s3/delete
     * @secure
     * @response `200` `void`
     */
    s3ControllerDeleteFile: (
      query?: {
        /**
         * Name of the file to delete from S3
         * @example "test.txt"
         */
        fileName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/s3/delete`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description НЕ удаляет из БД, только из S3
     *
     * @tags s3
     * @name S3ControllerDeleteUserFiles
     * @summary Delete all files (photos and from chats) for User with ID from S3
     * @request DELETE:/s3/delete/{id}
     * @secure
     * @response `200` `void`
     */
    s3ControllerDeleteUserFiles: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/s3/delete/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags s3
     * @name S3ControllerGetFile
     * @request GET:/s3/get
     * @secure
     * @response `200` `string` test.txt content
     */
    s3ControllerGetFile: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/s3/get`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags s3
     * @name S3ControllerGetUrlToDownload
     * @request GET:/s3/url/{fileName}
     * @secure
     * @response `200` `void`
     */
    s3ControllerGetUrlToDownload: (fileName: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/s3/url/${fileName}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Если id = 0, то возвращает просто 10 крайних файлов
     *
     * @tags s3
     * @name S3ControllerListFiles
     * @summary 10 Крайних файлов для Юзера с ID из S3
     * @request GET:/s3/list/{id}
     * @secure
     * @response `200` `void`
     */
    s3ControllerListFiles: (id?: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/s3/list/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Если "page" = 0, то возвращает все страницы
     *
     * @tags s3
     * @name S3ControllerListPages
     * @summary Постраничное содержание хранилища S3
     * @request GET:/s3/list/paginated/{page}/{size}
     * @secure
     * @response `200` `void`
     */
    s3ControllerListPages: (page: number, size: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/s3/list/paginated/${page}/${size}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags s3
     * @name S3ControllerSaveFile
     * @summary Save test.txt file to S3
     * @request GET:/s3/save
     * @secure
     * @response `200` `void`
     */
    s3ControllerSaveFile: (
      query: {
        content: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/s3/save`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  chats = {
    /**
     * No description
     *
     * @tags Chats
     * @name ChatsControllerDeleteOne
     * @summary Помечаем сообщение как "Удалённое Модератором" и удаляем файл  (если есть) из S3 (для Админа)
     * @request DELETE:/chats/delete-one/{id}
     * @secure
     * @response `200` `void`
     */
    chatsControllerDeleteOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/chats/delete-one/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name ChatsControllerGetChats
     * @summary Получение количества непрочтённых сообщений от каждого Контакта
     * @request GET:/chats/unread-count
     * @secure
     * @response `200` `(UnreadCountDto)[]`
     */
    chatsControllerGetChats: (params: RequestParams = {}) =>
      this.request<UnreadCountDto[], any>({
        path: `/chats/unread-count`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name ChatsControllerGetIndexChat
     * @summary Адрес страницы чата HTML
     * @request GET:/chats
     * @response `200` `void`
     */
    chatsControllerGetIndexChat: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/chats`,
        method: 'GET',
        ...params,
      }),
  };
  likes = {
    /**
     * @description Если послать лайк тому же Юзеру с другим типом лайка, то старый лайк перезапишется
     *
     * @tags Likes
     * @name LikesControllerCreateLike
     * @summary Создание сущности Like с определенным типом
     * @request POST:/likes/create
     * @secure
     * @response `201` `CreateLikeRespDto`
     */
    likesControllerCreateLike: (data: CreateLikeDto, params: RequestParams = {}) =>
      this.request<CreateLikeRespDto, any>({
        path: `/likes/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerCreateQuickMatch
     * @summary Создание быстрого Мэтча при "Пробитии"
     * @request POST:/likes/matches/create-quick/{toId}
     * @secure
     * @response `201` `Match`
     */
    likesControllerCreateQuickMatch: (toId: number, params: RequestParams = {}) =>
      this.request<Match, any>({
        path: `/likes/matches/create-quick/${toId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerDeleteMyLike
     * @summary Юзер удаляет поставленный ним Лайк
     * @request DELETE:/likes/delete/{toProfileId}
     * @secure
     * @response `200` `Like`
     * @response `404` `void` Сущность не найдена в БД
     */
    likesControllerDeleteMyLike: (toProfileId: number, params: RequestParams = {}) =>
      this.request<Like, void>({
        path: `/likes/delete/${toProfileId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
 * No description
 *
 * @tags Likes
 * @name LikesControllerGetAllMatches
 * @summary Получение списка совпадений (Match) для текущего пользователя
 * @request GET:/likes/matches/all
 * @secure
 * @response `200` `(PaginatedRespDto & {
    results?: (Match)[],

})`
 */
    likesControllerGetAllMatches: (
      query?: {
        /**
         * Количество элементов на одной странице
         * @min 1
         * @default 1
         * @example 10
         */
        limit?: number;
        /**
         * Начальная страница для загрузки
         * Начальная страница для загрузки. Стартует с 1
         * @min 1
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedRespDto & {
          results?: Match[];
        },
        any
      >({
        path: `/likes/matches/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
 * No description
 *
 * @tags Likes
 * @name LikesControllerGetListInteractions
 * @summary Получение списка Профилей, которые поставили лайк текущему Юзеру
 * @request GET:/likes/list
 * @secure
 * @response `200` `(PaginatedRespDto & {
    results?: (SimpleProfileDto)[],

})`
 */
    likesControllerGetListInteractions: (
      query?: {
        /**
         * Количество элементов на одной странице
         * @min 1
         * @default 1
         * @example 10
         */
        limit?: number;
        /**
         * Начальная страница для загрузки
         * Начальная страница для загрузки. Стартует с 1
         * @min 1
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedRespDto & {
          results?: SimpleProfileDto[];
        },
        any
      >({
        path: `/likes/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerGetMatchesCount
     * @summary Счетчик мэтчей
     * @request GET:/likes/matches/count
     * @secure
     * @response `200` `number` Количество мэтчей
     */
    likesControllerGetMatchesCount: (params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/likes/matches/count`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
 * No description
 *
 * @tags Likes
 * @name LikesControllerGetMatchesList
 * @summary Получение списка профилей с которыми лайки взаимны (Мэтч)
 * @request GET:/likes/matches/profiles
 * @secure
 * @response `200` `(PaginatedRespDto & {
    results?: (MatchResponseDto)[],

})`
 */
    likesControllerGetMatchesList: (
      query?: {
        /**
         * Количество элементов на одной странице
         * @min 1
         * @default 1
         * @example 10
         */
        limit?: number;
        /**
         * Начальная страница для загрузки
         * Начальная страница для загрузки. Стартует с 1
         * @min 1
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedRespDto & {
          results?: MatchResponseDto[];
        },
        any
      >({
        path: `/likes/matches/profiles`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerGetMyLike
     * @summary Мой лайк к указанному Юзеру
     * @request GET:/likes/my-like/{toId}
     * @secure
     * @response `200` `Like` Возвращает сущность Like, или null, если лайка нет
     */
    likesControllerGetMyLike: (toId: number, params: RequestParams = {}) =>
      this.request<Like, any>({
        path: `/likes/my-like/${toId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
 * No description
 *
 * @tags Likes
 * @name LikesControllerGetMyLikes
 * @summary Получение списка Профилей, которым поставил лайк текущий Юзер
 * @request GET:/likes/my-list
 * @secure
 * @response `200` `(PaginatedRespDto & {
    results?: (SimpleProfileDto)[],

})`
 */
    likesControllerGetMyLikes: (
      query?: {
        /**
         * Количество элементов на одной странице
         * @min 1
         * @default 1
         * @example 10
         */
        limit?: number;
        /**
         * Начальная страница для загрузки
         * Начальная страница для загрузки. Стартует с 1
         * @min 1
         * @default 1
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginatedRespDto & {
          results?: SimpleProfileDto[];
        },
        any
      >({
        path: `/likes/my-list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerLikeCounter
     * @summary Счетчик лайков текущему Юзеру
     * @request GET:/likes/count
     * @secure
     * @response `200` `number` Количество лайков
     */
    likesControllerLikeCounter: (params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/likes/count`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerUpdateLike
     * @summary Меняем тип лайка (простой/супер)
     * @request PATCH:/likes/change-type/{toProfileId}
     * @secure
     * @response `200` `Like`
     * @response `404` `void` Сущность не найдена в БД
     */
    likesControllerUpdateLike: (toProfileId: number, params: RequestParams = {}) =>
      this.request<Like, void>({
        path: `/likes/change-type/${toProfileId}`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Likes
     * @name LikesControllerUpdateMatch
     * @summary Заходим в / покидаем чат с Юзером
     * @request PATCH:/likes/matches/join-leave/{toId}
     * @secure
     * @response `200` `Match`
     * @response `404` `void` Сущность не найдена в БД
     */
    likesControllerUpdateMatch: (toId: number, params: RequestParams = {}) =>
      this.request<Match, void>({
        path: `/likes/matches/join-leave/${toId}`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  subscriptions = {
    /**
     * No description
     *
     * @tags Подписки
     * @name SubscriptionsControllerCreate
     * @summary Создание подписки
     * @request POST:/subscriptions/create
     * @secure
     * @response `201` `Subscription`
     */
    subscriptionsControllerCreate: (data: CreateSubscriptionDto, params: RequestParams = {}) =>
      this.request<Subscription, any>({
        path: `/subscriptions/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подписки
     * @name SubscriptionsControllerFindAll
     * @summary Получение всех подписок
     * @request GET:/subscriptions/all
     * @secure
     * @response `200` `(Subscription)[]`
     */
    subscriptionsControllerFindAll: (params: RequestParams = {}) =>
      this.request<Subscription[], any>({
        path: `/subscriptions/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подписки
     * @name SubscriptionsControllerRemove
     * @summary Удаление подписки
     * @request DELETE:/subscriptions/{id}
     * @secure
     * @response `200` `Subscription`
     */
    subscriptionsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<Subscription, any>({
        path: `/subscriptions/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Подписки
     * @name SubscriptionsControllerUpdate
     * @summary Обновление подписки
     * @request PUT:/subscriptions/{id}
     * @secure
     * @response `200` `Subscription`
     */
    subscriptionsControllerUpdate: (
      id: string,
      data: UpdateSubscriptionDto,
      params: RequestParams = {},
    ) =>
      this.request<Subscription, any>({
        path: `/subscriptions/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  location = {
    /**
     * No description
     *
     * @tags Location
     * @name LocationControllerSaveLocation
     * @summary Сохранение последней геолокации текущего Юзера
     * @request PUT:/location/save
     * @secure
     * @response `200` `void` Новые координаты сохранены
     */
    locationControllerSaveLocation: (data: LocationDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/location/save`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tests = {
    /**
     * @description !!! ВАЖНО. НУЖНО удалить все результаты прохождения этого Теста для всех Пользователей
     *
     * @tags Tests/Answers
     * @name AnswersControllerCreate
     * @summary Создать новый Ответ на Вопрос (только для Админа)
     * @request POST:/tests/answers/create
     * @secure
     * @response `201` `TestAnswerRespDto`
     */
    answersControllerCreate: (data: CreateAnswerDto, params: RequestParams = {}) =>
      this.request<TestAnswerRespDto, any>({
        path: `/tests/answers/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Answers
     * @name AnswersControllerFindAll
     * @summary Показать все Ответы на Вопрос с указанным ID
     * @request GET:/tests/answers/list/{questionId}
     * @secure
     * @response `200` `(TestAnswerRespDto)[]`
     */
    answersControllerFindAll: (questionId: number, params: RequestParams = {}) =>
      this.request<TestAnswerRespDto[], any>({
        path: `/tests/answers/list/${questionId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Answers
     * @name AnswersControllerFindOne
     * @summary Найти Вопрос по ID
     * @request GET:/tests/answers/one/{id}
     * @secure
     * @response `200` `TestAnswerRespDto`
     * @response `404` `void` Не найден Ответ с указанным ID
     */
    answersControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<TestAnswerRespDto, void>({
        path: `/tests/answers/one/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description !!! ВАЖНО. НУЖНО удалить все результаты прохождения этого Теста для всех Пользователей
     *
     * @tags Tests/Answers
     * @name AnswersControllerRemove
     * @summary Удалить Ответ с указанным ID (только для Админа)
     * @request DELETE:/tests/answers/delete/{id}
     * @secure
     * @response `200` `TestAnswerRespDto` Удалённая сущность
     */
    answersControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<TestAnswerRespDto, any>({
        path: `/tests/answers/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests/Answers
     * @name AnswersControllerUpdate
     * @summary Изменить Ответ с указанным ID
     * @request PATCH:/tests/answers/update/{id}
     * @secure
     * @response `200` `TestAnswerRespDto`
     * @response `404` `void` Не найден Ответ с указанным ID
     */
    answersControllerUpdate: (id: number, data: UpdateAnswerDto, params: RequestParams = {}) =>
      this.request<TestAnswerRespDto, void>({
        path: `/tests/answers/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests/Categories
     * @name CategoriesControllerCreate
     * @summary Создать новую Категорию
     * @request POST:/tests/categories/create
     * @secure
     * @response `201` `TestCategory`
     * @response `409` `void` имя Категории не уникально
     */
    categoriesControllerCreate: (data: CreateCategoryDto, params: RequestParams = {}) =>
      this.request<TestCategory, void>({
        path: `/tests/categories/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests/Categories
     * @name CategoriesControllerDelete
     * @summary Удалить Категорию
     * @request DELETE:/tests/categories/delete/{id}
     * @secure
     * @response `200` `TestCategory` Удалённая сущность
     */
    categoriesControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<TestCategory, any>({
        path: `/tests/categories/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Categories
     * @name CategoriesControllerFindAll
     * @summary Показать все Категории с информацией о Тестах
     * @request GET:/tests/categories/list
     * @secure
     * @response `200` `(TCatResponseDto)[]`
     */
    categoriesControllerFindAll: (params: RequestParams = {}) =>
      this.request<TCatResponseDto[], any>({
        path: `/tests/categories/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests/Categories
     * @name CategoriesControllerFindAllForAdmin
     * @summary Показать все Категории для Админа
     * @request GET:/tests/categories/all
     * @secure
     * @response `200` `(TestCategory)[]`
     */
    categoriesControllerFindAllForAdmin: (params: RequestParams = {}) =>
      this.request<TestCategory[], any>({
        path: `/tests/categories/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Categories
     * @name CategoriesControllerFindOne
     * @summary Показать данные по Категории для Текущего Юзера
     * @request GET:/tests/categories/one/{id}
     * @secure
     * @response `200` `TCatResponseDto`
     * @response `404` `void` Категория не найдена
     */
    categoriesControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<TCatResponseDto, void>({
        path: `/tests/categories/one/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests/Categories
     * @name CategoriesControllerUpdate
     * @summary Изменить данные в Категории
     * @request PATCH:/tests/categories/update/{id}
     * @secure
     * @response `200` `number` ID измененной сущности
     * @response `404` `void` Entity not found
     * @response `409` `void` имя Категории не уникально
     */
    categoriesControllerUpdate: (id: number, data: CreateCategoryDto, params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/tests/categories/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description !!! ВАЖНО. НУЖНО удалить все результаты прохождения этого Теста для всех Пользователей
     *
     * @tags Tests/Questions
     * @name QuestionsControllerCreate
     * @summary Создать новый Вопрос к Тесту (только для Админа)
     * @request POST:/tests/questions/create
     * @secure
     * @response `201` `TestQuestionRespDto`
     * @response `409` `void` текст Вопроса не уникальный
     */
    questionsControllerCreate: (data: CreateQuestionDto, params: RequestParams = {}) =>
      this.request<TestQuestionRespDto, void>({
        path: `/tests/questions/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Questions
     * @name QuestionsControllerFindAll
     * @summary Показать все Вопросы для Теста
     * @request GET:/tests/questions/list/{testId}
     * @secure
     * @response `200` `(TestQuestionRespDto)[]`
     */
    questionsControllerFindAll: (testId: number, params: RequestParams = {}) =>
      this.request<TestQuestionRespDto[], any>({
        path: `/tests/questions/list/${testId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Questions
     * @name QuestionsControllerFindOne
     * @summary Найти Вопрос по ID
     * @request GET:/tests/questions/one/{id}
     * @secure
     * @response `200` `TestQuestionRespDto`
     * @response `404` `void` Не найден Вопрос с указанным ID
     */
    questionsControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<TestQuestionRespDto, void>({
        path: `/tests/questions/one/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description !!! ВАЖНО. НУЖНО удалить все результаты прохождения этого Теста для всех Пользователей
     *
     * @tags Tests/Questions
     * @name QuestionsControllerRemove
     * @summary Удалить Вопрос с указанным ID (только для Админа)
     * @request DELETE:/tests/questions/delete/{id}
     * @secure
     * @response `200` `TestQuestionRespDto` Удалённая сущность
     */
    questionsControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<TestQuestionRespDto, any>({
        path: `/tests/questions/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests/Questions
     * @name QuestionsControllerUpdate
     * @summary Изменить Вопрос с указанным ID
     * @request PATCH:/tests/questions/update/{id}
     * @secure
     * @response `200` `TestQuestionRespDto`
     * @response `404` `void` Не найден Вопрос с указанным ID
     * @response `409` `void` текст Вопроса не уникальный
     */
    questionsControllerUpdate: (id: number, data: UpdateQuestionDto, params: RequestParams = {}) =>
      this.request<TestQuestionRespDto, void>({
        path: `/tests/questions/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests
     * @name TestsControllerCreate
     * @summary Создать новый Тест
     * @request POST:/tests/create
     * @secure
     * @response `201` `TestRespDto`
     * @response `409` `void` имя Теста не уникально
     */
    testsControllerCreate: (data: CreateTestDto, params: RequestParams = {}) =>
      this.request<TestRespDto, void>({
        path: `/tests/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests
     * @name TestsControllerFindAll
     * @summary Показать все Тесты для Категории
     * @request GET:/tests/list/{catId}
     * @secure
     * @response `200` `(TestRespListDto)[]`
     */
    testsControllerFindAll: (catId: number, params: RequestParams = {}) =>
      this.request<TestRespListDto[], any>({
        path: `/tests/list/${catId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests
     * @name TestsControllerFindOne
     * @summary Найти Тест по ID
     * @request GET:/tests/one/{id}
     * @secure
     * @response `200` `TestRespDto`
     * @response `404` `void` Не найден Тест с указанным ID
     */
    testsControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<TestRespDto, void>({
        path: `/tests/one/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests
     * @name TestsControllerRemove
     * @summary Удалить Тест
     * @request DELETE:/tests/delete/{id}
     * @secure
     * @response `200` `TestRespDto` Удалённая сущность
     */
    testsControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<TestRespDto, any>({
        path: `/tests/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Доступно только для Админа
     *
     * @tags Tests
     * @name TestsControllerUpdate
     * @summary Изменить тест с указанным ID
     * @request PATCH:/tests/update/{id}
     * @secure
     * @response `200` `TestRespDto`
     * @response `409` `void` имя Теста не уникально
     */
    testsControllerUpdate: (id: number, data: UpdateTestDto, params: RequestParams = {}) =>
      this.request<TestRespDto, void>({
        path: `/tests/update/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  test = {
    /**
     * @description Если расчетная совместимость по тестам меньше 20% то возвращаем 22
     *
     * @tags Tests/Results
     * @name ResultsControllerCompare
     * @summary Получить процент совместимости по тестам (или Зодиаку)
     * @request GET:/test/results/compare-with/{profileId}
     * @secure
     * @response `200` `number`
     */
    resultsControllerCompare: (profileId: number, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/test/results/compare-with/${profileId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Results
     * @name ResultsControllerFindAll
     * @summary Пройти тест
     * @request POST:/test/results/submit
     * @secure
     * @response `201` `number` Entity ID
     */
    resultsControllerFindAll: (data: TestResultDto, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/test/results/submit`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Results
     * @name ResultsControllerGetAll
     * @summary Получить результаты всех тестов для текущего Юзера
     * @request GET:/test/results/all
     * @secure
     * @response `200` `(TestResult)[]`
     */
    resultsControllerGetAll: (params: RequestParams = {}) =>
      this.request<TestResult[], any>({
        path: `/test/results/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tests/Results
     * @name ResultsControllerGetAllFor
     * @summary Получить результаты всех тестов для любого Юзера
     * @request GET:/test/results/all-for/{profileId}
     * @secure
     * @response `200` `(TestResult)[]`
     */
    resultsControllerGetAllFor: (profileId: number, params: RequestParams = {}) =>
      this.request<TestResult[], any>({
        path: `/test/results/all-for/${profileId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
