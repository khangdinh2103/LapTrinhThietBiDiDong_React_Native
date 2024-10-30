import { atom, selector } from 'recoil';
import axios from 'axios';

const URL = 'https://6721855b98bbb4d93ca89f7e.mockapi.io/khoahoc';

// Atom lưu trữ danh sách công việc
export const jobListState = atom({
  key: 'jobListState',
  default: selector({
    key: 'jobListState/default',
    get: async () => {
      try {
        const response = await axios.get(URL);
        return response.data;
      } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
      }
    },
  }),
});

// Selector thêm công việc mới
export const addJob = selector({
  key: 'addJob',
  get: () => null, // get là bắt buộc nhưng không sử dụng ở đây
  set: ({ set, get }, newJob) => {
    const currentJobs = get(jobListState);
    const updatedJobs = [...currentJobs, newJob];
    set(jobListState, updatedJobs);

    // Thực hiện API call để thêm công việc vào server
    axios.post(URL, newJob).catch((error) => {
      console.error('Error adding job:', error);
    });
  },
});

// Selector xóa công việc
export const deleteJob = selector({
  key: 'deleteJob',
  get: () => null,
  set: ({ set, get }, jobId) => {
    const currentJobs = get(jobListState);
    const updatedJobs = currentJobs.filter(job => job.id !== jobId);
    set(jobListState, updatedJobs);

    // Thực hiện API call để xóa công việc khỏi server
    axios.delete(`${URL}/${jobId}`).catch((error) => {
      console.error('Error deleting job:', error);
    });
  },
});
