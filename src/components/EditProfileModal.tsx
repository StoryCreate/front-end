import React, { useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';
const { Option } = Select;

interface EditProfileModalProps {
  visible: boolean;
  confirmLoading?: boolean;
  initialValues: {
    firstName?: string;
    lastName?: string;
    profession?: string;
    bio?: string;
    location?: string;
    interests?: string[];
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  onCancel: () => void;
  onSubmit: (values: { firstName: string; lastName: string; profession?: string; bio?: string; location?: string; interests?: string[]; instagram?: string; facebook?: string; linkedin?: string }) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ visible, confirmLoading, initialValues, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(initialValues);
    }
  }, [visible, initialValues, form]);

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSubmit(values as { firstName: string; lastName: string; profession?: string; bio?: string; location?: string; interests?: string[]; instagram?: string; facebook?: string; linkedin?: string });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      visible={visible}
      title="Edit Profile"
      okText="Save"
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      onOk={handleOk}
      maskClosable={false}
    >
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter first name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter last name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Profession" name="profession" rules={[{ required: true, message: 'Please enter your profession' }]}>
          <Input placeholder="e.g. Fiction Writer" />
        </Form.Item>
        <Form.Item label="Bio" name="bio">
          <Input.TextArea rows={3} className='resize-none'/>
        </Form.Item>
        <Form.Item label="Location" name="location">
          <Input />
        </Form.Item>
        <Form.Item label="Interests" name="interests">
          <Select mode="tags" style={{ width: '100%' }} placeholder="Add interests">
            {/* Users can add custom tags */}
          </Select>
        </Form.Item>
        <Form.Item label="Instagram URL" name="instagram" rules={[{ type: 'url', message: 'Please enter a valid URL' }]}>
          <Input placeholder="Instagram profile URL" />
        </Form.Item>
        <Form.Item label="Facebook URL" name="facebook" rules={[{ type: 'url', message: 'Please enter a valid URL' }]}>
          <Input placeholder="Facebook profile URL" />
        </Form.Item>
        <Form.Item label="LinkedIn URL" name="linkedin" rules={[{ type: 'url', message: 'Please enter a valid URL' }]}>
          <Input placeholder="LinkedIn profile URL" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProfileModal; 