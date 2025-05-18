import api from './index';

export const getBanks = async() => {
    const res = await api.get('banks')
    return res.data;
}

export const getBankById = async(id) => {
    const res = await api.get(`banks/${id}`);
    return res.data;
}

export const createBank = async(bankData) => {
    const res = await api.post('banks', bankData);
    return res.data;
}

export const updateBank = async(id, bankData) => {
    const res = await api.patch(`banks/${id}`, bankData);
    return res.data;
}