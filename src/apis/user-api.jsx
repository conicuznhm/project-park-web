import axios from '../config/axios';

export const getProfileUser = profileUserId => axios.get('/users/' + profileUserId);

export const updateProfileUser = newProfile => axios.patch('/users', newProfile);

export const updateProfile = formData => axios.patch('/users/image', formData);
