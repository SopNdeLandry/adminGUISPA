import React, { useContext, useState , useEffect } from 'react';
import { Space, Table, Button, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';


import { HomeContext } from '../../context';
import AddDeliveryModal from '../AddDeliveryModal';
import { deleteDelivery, getDelivery } from '../../actions/admin.actions';

const DeliveryContainer = ({ }) => {
    const { arrayOfDelivery, setArrayOfDelivery, currentUser } = useContext(HomeContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getDelivery(currentUser?.token).then((arrayOfDeliveries) => {
            setArrayOfDelivery(arrayOfDeliveries);
        }).catch((err) => {
            console.error(err);
            return navigate('/');
        })
    }, []);

    const handleOpenAddDeliveryModal = () => {
        setOpen(true);
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleDelete = async (deliveryId) => {
        const deleteRes = await deleteDelivery(deliveryId, currentUser.token);
        if (deleteRes?.delivery_id) {
            const filterArrayDelivery = arrayOfDelivery.filter((item) => item.delivery_id !== deliveryId);
            setArrayOfDelivery(filterArrayDelivery);
        }
    }

    const columns = [
        {
            title: 'delivery_id',
            dataIndex: 'delivery_id',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'package_id',
            dataIndex: 'package_id',
            key: 'deliveryId',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'createdAt',
            key: 'createdAt',
            dataIndex: 'createdAt',
        },
        {
            title: 'start_time',
            key: 'start_time',
            dataIndex: 'start_time',
        },
        {
            title: 'pickup_time',
            key: 'pickup_time',
            dataIndex: 'pickup_time',
        },
        {
            title: 'end_time',
            key: 'end_time',
            dataIndex: 'end_time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.delivery_id)}>
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
            <AddDeliveryModal open={open} onCancel={handleCloseModal} />
            <Button type='primary' onClick={handleOpenAddDeliveryModal} >
                Add Delivery
            </Button>
            <Table columns={columns} dataSource={arrayOfDelivery} />;
        </>
    )
}

export default DeliveryContainer;