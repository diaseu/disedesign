import React from 'react';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import {
  Select,
  Switch,
  Radio,
  Slider,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';



const { Option } = Select;

const { Header, Content, Footer, Sider } = Layout;

const Contact = props => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

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
/* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };

  // const { getFieldDecorator } = this.props.form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>DIA SEU</Breadcrumb.Item>
        <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h1 className="line">Get in Touch</h1>
        <h2 className="text">Let's create magic together.</h2>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input />
          </Form.Item>
          {/* <Form.Item label="Select" hasFeedback>
            {getFieldDecorator('select', {
              rules: [{ required: true, message: 'Please select your country!' }],
            })(
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>,
            )}
          </Form.Item> */}
          <Form.Item name={['user', 'message']} label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
};

export default Contact