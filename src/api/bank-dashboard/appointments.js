import api from './index';

const getAppointments = async(page,limit)=>{
    const res = await api.get(`appointments?page=${page}&limit=${limit}`);
    return res.data;
}

const createAppointment = async(appointmentData) => {
    const res = await api.post(`appointments`, appointmentData);
    return res.data;
}

export {getAppointments, createAppointment};