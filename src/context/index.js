import React, { createContext, useState } from "react";

export const HomeContext = createContext();


export const HomeContextProvider = ({ children }) => {
    const [arrayOfPackages, setArrayOfPackages] = useState([...defaultPackages]);
    const [arrayOfDelivery, setArrayOfDelivery] = useState([...defaultDelivery]);
    const [currentUser, setCurrentuser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <HomeContext.Provider
            value={{
                arrayOfPackages,
                arrayOfDelivery,
                currentUser,
                setCurrentuser,
                setArrayOfPackages,
                setArrayOfDelivery,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
}

const defaultPackages = [
    {
        packageId: 'sd54545465454531213',
        deliveryId: '',
        description: ' un pacquet qui part dans l espace ',
        weight: 100,
        width: 100,
        height: 100,
        depth: 100,
        from_name: 'jack bauer',
        from_address: ' los angeles california',
        from_location: {
            lon: 14.15455,
            lat: 1.14154545,
        },
        to_name: ' patrick ',
        to_address: 'new_york brooklyn',
        to_location: {
            lon: 14.1542188,
            lat: 3.1455451,
        }
    },
    {
        packageId: 'sd54154543221',
        deliveryId: '5545fdv23vsfvfsvsv',
        description: ' un pacquet de carton de cola ',
        weight: 100,
        width: 100,
        height: 100,
        depth: 100,
        from_name: 'kodjo',
        from_address: 'lomé togo',
        from_location: {
            lon: 14.1514512,
            lat: 1.14154545112,
        },
        to_name: ' blacnko',
        to_address: 'new_york brooklyn',
        to_location: {
            lon: 14.1542188,
            lat: 3.1455451,
        }
    },
];

const defaultDelivery = [
    {
        deliveryId: '65454sd5645sdv45vsvsvs',
        packageId: '445d54s5cs4d5csds56s4c',
        pickupTime: Date.now(),
        startTime: Date.now(),
        endTime: Date.now() + 100000,
        location: {
            lon: 1.546455465,
            lat: 4.156412
        },
        status: 'open'
    },
    {
        deliveryId: '65454sd5sfsdfq45vsvsvs',
        packageId: '445d54s5csqcq454654c',
        pickupTime: Date.now(),
        startTime: Date.now(),
        endTime: Date.now() + 100000,
        location: {
            lon: 1.54445465,
            lat: 4.155512
        },
        status: 'picket-up',
    },
    {
        deliveryId: '65454sdsddc4545',
        packageId: '445d54s5csqcq454654c',
        pickupTime: Date.now(),
        startTime: Date.now(),
        endTime: Date.now() + 100000,
        location: {
            lon: 1.54445465,
            lat: 4.155512
        },
        status: 'in-transit',
    },

    {
        deliveryId: 'cddssdcsdcdcsdcsd',
        packageId: '445d54s5csqcq454654c',
        pickupTime: Date.now(),
        startTime: Date.now(),
        endTime: Date.now() + 100000,
        location: {
            lon: 1.54445465,
            lat: 4.155512
        },
        status: 'delivered',
    },
    {
        deliveryId: 'cddssds1444csdcsd',
        packageId: '445d54s5csqcq454654c',
        pickupTime: Date.now(),
        startTime: Date.now(),
        endTime: Date.now() + 100000,
        location: {
            lon: 1.54445465,
            lat: 4.155512
        },
        status: 'failed',
    },
];


