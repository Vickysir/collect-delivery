/*
 * @Author: your name
 * @Date: 2021-03-04 10:25:22
 * @LastEditTime: 2021-03-22 18:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fudi/src/pages/web/resetpassword/index.tsx
 */
import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import WebFooter from '@/pages/components/header/webFooter';
import WebHeader from '@/pages/components/header/webHeader';
import BaackTitle from '../../../components/baackTitle';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { apiPath } from '@/pages/api';
import { LoginRegistPost } from '@/pages/api/types/login';

const PhoneVerification = (props) => {
    const { history } = props;

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);

        // 存入store
        Object.assign(APP_STORE.registInfo, { ...values });

        // 获取store
        let authinfo: LoginRegistPost = APP_STORE.registInfo;
        console.log(`authinfo`, authinfo)

        //发送API 注册
        axios.post(apiPath.regist, authinfo)
            .then((res) => {
                console.log('res', res)
                history.push("/login");

            }).catch(err => {
                console.log('err', err)
            })
    };

    useEffect(() => {

    }, [])


    return (
        <>
            <WebHeader />
            <div>
                <BaackTitle titleContent="Set up Phone" />
                <div className="login-wrap">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="code"
                            rules={[{ required: true, message: 'Please input your 4-digits code!' }]}
                        >
                            <Input
                                placeholder="4-digits code"
                                size="large"
                                style={{ "borderRadius": "5rem", "margin": "0.5rem 0", "paddingLeft": "2rem" }}
                            />
                        </Form.Item>
                        <Form.Item className="login-wrap-tips">
                            <div>Enter a verification code from the SMS</div>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size="large"
                                shape="round"
                                block
                            >
                                Confirm
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <WebFooter />
        </>
    )
}

export default withRouter(PhoneVerification)