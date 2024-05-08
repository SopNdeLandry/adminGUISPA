import React, { useContext, useState, useEffect } from 'react';
import { Space, Table, Button ,Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HomeContext } from '../../context';
import { deletePackage ,getAllPackages } from '../../actions/admin.actions';
import AddPackageModal from '../AddPackageModal';


const PacakgesContainer = ({ }) => {
    const { arrayOfPackages, setArrayOfPackages, currentUser } = useContext(HomeContext);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPackages(currentUser?.token).then((arrayOfPackages) => {
            setArrayOfPackages(arrayOfPackages);
        }).catch((err) => {
            console.err(err);
            return navigate('/');
        })
    }, []);

    const handleOpenModal=()=>{
        setOpen(true);
    }
    const handleCloseModal=()=>{
        setOpen(false);
    }

    const handleDelete = (packageId)=>{
        deletePackage(packageId, currentUser.token);
        const filterArrayOfPackages = arrayOfPackages.filter((item)=> item.package_id !== packageId);
        setArrayOfPackages(filterArrayOfPackages);
    }
    
    const columns = [
        {
            title: 'Package_id',
            dataIndex: 'package_id',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'active_delivery_id',
            dataIndex: 'active_delivery_id',
            key: 'deliveryId',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Package_detail',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, row) => (
                <Space
                    direction='vertical'
                >
                    <Space><span>weight:</span><span>{row.weight}</span></Space>
                    <Space><span>width:</span><span>{row.width}</span></Space>
                    <Space><span>height:</span><span>{row.height}</span></Space>
                    <Space><span>depth:</span><span>{row.depth}</span></Space>
                </Space>
            )
    
        },
        {
            title: 'from_Data',
            dataIndex: 'from_data',
            key: 'from_data',
            render: (_, row) => (
                <Space
                    direction='vertical'
                >
                    <Space><span>from_name:</span><span>{row.from_address}</span></Space>
                    <Space><span>from_address:</span><span>{row.from_address}</span></Space>
                </Space>
            )
        },
        {
            title: 'to_Data',
            dataIndex: 'to_data',
            key: 'address',
            render: (_, row) => (
                <Space
                    direction='vertical'
                >
                    <Space><span>to_name:</span><span>{row.to_name}</span></Space>
                    <Space><span>to_address:</span><span>{row.to_address}</span></Space>
                </Space>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.package_id)}>
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];    
    return (
        <>
            <Button type='primary' onClick={handleOpenModal} >
                Add Package
            </Button>
            <AddPackageModal
                open={open}
                onCancel={handleCloseModal}
            />
            <Table columns={columns} dataSource={arrayOfPackages} />;
        </>
    )
}
export default PacakgesContainer;