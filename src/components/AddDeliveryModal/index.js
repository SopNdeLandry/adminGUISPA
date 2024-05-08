import React, { useContext } from "react";
import { Modal, Form, Button, Select } from 'antd';

import { HomeContext } from "../../context";
import { addDelivery, getDeliveryById } from '../../actions/admin.actions';


const AddDeliveryModal = ({ open = false, onCancel }) => {
    const { arrayOfPackages, arrayOfDelivery, setArrayOfDelivery, currentUser } = useContext(HomeContext);

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
            const newDeliveryObj = await addDelivery({ package_id: values.package_id }, currentUser.token);
            if (newDeliveryObj?.delivery_id) {
                const deliveryObj = await getDeliveryById(newDeliveryObj.delivery_id, currentUser.token);
                if (deliveryObj?.delivery_id) {
                    const newArrayOfDelivery = [deliveryObj, ...arrayOfDelivery];
                    setArrayOfDelivery(newArrayOfDelivery);
                }
            }
            onCancel();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal
            title='Add Delivery'
            width={'50vw'}
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
                validateMessages={validateMessages}
            >
                <Form.Item
                    label="package_id"
                    name="package_id"
                    rules={[{ required: true, message: 'Please input!' }]}>
                    <Select
                        options={(arrayOfPackages)? arrayOfPackages.map((item) => {
                            return {
                                value: item.package_id,
                                label: item.package_id
                            }
                        }):[]}
                    />
                </Form.Item>
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

export default AddDeliveryModal;