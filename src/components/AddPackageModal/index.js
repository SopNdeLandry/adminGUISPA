import React, { useContext } from "react";
import { Modal, Form, Input, InputNumber, Button, Space } from 'antd';

import { HomeContext } from "../../context";
import { addPackages } from '../../actions/admin.actions';
import { generatePackageObjectFromFormObject } from '../../utils';

const AddPackageModal = ({ open = false, onCancel }) => {

    const { arrayOfPackages, setArrayOfPackages, currentUser } = useContext(HomeContext);

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = async (values) => {
        try {
            const packageResponse = await addPackages(values, currentUser.token);
            if (packageResponse?.package_id) {
                const newPackage = Object.assign({}, generatePackageObjectFromFormObject(values), { package_id: packageResponse.package_id });
                const newArrayOfPackages = [newPackage, ...arrayOfPackages];
                setArrayOfPackages(newArrayOfPackages);
            }
            onCancel()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal
            title='Add Package'
            width={'60vw'}
            open={open}
            onCancel={onCancel}
            onOk={onFinish}
            okButtonProps={{
                type: 'link',
                htmlType: "submit"
            }}
            footer={null}
        >
            <Form
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 1200,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={'description'}
                    label="description"
                    rules={[{ required: true, },]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Space>
                    <Space>
                        <Form.Item
                            name={'weight'}
                            label="weight"
                            rules={[{ required: true, },]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'width'}
                            label="width"
                            rules={[{ required: true, },]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'height'}
                            label="height"
                            rules={[{ required: true, },]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'depth'}
                            label="depth"
                            rules={[{ required: true, },]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                </Space>
                <Space>
                    <Space>
                        <Form.Item
                            name={'from_name'}
                            label="from_name"
                            rules={[{ required: true, },]}
                        >
                            <Input />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'from_address'}
                            label="from_address"
                            rules={[{ required: true, },]}
                        >
                            <Input />
                        </Form.Item>
                    </Space>
                </Space>
                <Space>
                    <Space>
                        <Form.Item
                            name={'from_Lon'}
                            label="from_lon"
                            rules={[{ required: true, },]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'from_Lat'}
                            label="from_lat"
                            rules={[{ required: true, },]}
                            wrapperCol={{ span: 8 }}
                            labelCol={{ span: 16 }}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                </Space>
                <Space>
                    <Space>
                        <Form.Item
                            name={'to_name'}
                            label="to_name"
                            rules={[{ required: true, },]}
                        >
                            <Input />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'to_address'}
                            label="to_address"
                            rules={[{ required: true, },]}
                        >
                            <Input />
                        </Form.Item>
                    </Space>
                </Space>
                <Space>
                    <Space>
                        <Form.Item
                            name={'to_Lon'}
                            label="to_lon"
                            rules={[{ required: true, },]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name={'to_Lat'}
                            label="to_lat"
                            rules={[{ required: true, },]}
                            wrapperCol={{ span: 8 }}
                            labelCol={{ span: 16 }}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                </Space>
                <Form.Item
                    wrapperCol={{ offset: 18, }}
                >
                    <Button onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )

}

export default AddPackageModal;