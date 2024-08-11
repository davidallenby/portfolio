export interface ApiResponseError {
  data: null;
  success: false;
}

export type ApiResponseSuccess<T> = {
  data: T;
  success: true;
} 

export type ApiResponse<T> = Promise<ApiResponseSuccess<T>|ApiResponseError>;