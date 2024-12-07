import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://6721855b98bbb4d93ca89f7e.mockapi.io/khoahoc";

// Async thunks
export const getJobs = createAsyncThunk("jobs/getJobs", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createJob = createAsyncThunk("jobs/createJob", async (title, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL, { title });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, newTitle }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, { title: newTitle });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return id; // Trả về ID để xóa khỏi state
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice
const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get jobs
      .addCase(getJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create job
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload); // Thêm công việc mới vào danh sách
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update job
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.jobs.findIndex((job) => job.id === action.payload.id);
        if (index !== -1) state.jobs[index] = action.payload; // Cập nhật công việc
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete job
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.payload); // Xóa công việc
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobSlice.reducer;
