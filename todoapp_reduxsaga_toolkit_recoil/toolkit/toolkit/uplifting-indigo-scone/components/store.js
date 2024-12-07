import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux/toolkit';

export const store = configureStore({
  reducer: {
    jobs: todoReducer, // Đổi từ `todos` sang `jobs`
  },
});
