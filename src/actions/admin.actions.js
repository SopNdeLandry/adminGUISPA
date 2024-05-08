import axios from "axios";

import { baseApiUrl, baseAuthApiUrl } from '../config';
import { generatePackageObjectFromFormObject } from '../utils';


export const loginAction = async(loginData) =>{
    try {
        const res = await axios.post(`${baseAuthApiUrl}/api/v1/login`, loginData);
        return res.data;
    } catch (error) {   
        console.error(error);
    }
}

export const addPackages = async (packageFromForm, token) => {
    try {
        const packageObj = generatePackageObjectFromFormObject(packageFromForm);
        const res = await axios.post(`${baseApiUrl}/api/v1/package`, packageObj, {
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const getAllPackages = async (token) => {
    try {
        const res = await axios.get(`${baseApiUrl}/api/v1/package`, {
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const deletePackage = async (packageId, token) => {
    try {
        const res = await axios.delete(`${baseApiUrl}/api/v1/package/${packageId}`, {
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const addDelivery = async (deliveryObj, token) => {
    try {
        const res = await axios.post(`${baseApiUrl}/api/v1/delivery`, deliveryObj , {
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const getDeliveryById = async(deliveryId, token) =>{
    try {
        const res = await axios.get(`${baseApiUrl}/api/v1/delivery/${deliveryId}`,{
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const getDelivery = async (token) => {
    try {
        const res = await axios.get(`${baseApiUrl}/api/v1/delivery`, {
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteDelivery = async (deliveryId, token) => {
    try {
        const res = await axios.delete(`${baseApiUrl}/api/v1/delivery/${deliveryId}`, {
            headers: {
                'x-access-token': token,
            }
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}