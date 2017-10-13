/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {Table} from 'antd';

class Content02 extends React.Component {
    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '电话号码',
            dataIndex: 'number',
            key: 'number',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }];

        const data = [];
        for (let i = 1; i < 15; i++) {
            let obj = {
                name: '22222',
                age: 32,
                number: 123456789,
                email: '123456789@163.com',
            };
            obj.key = i;
            data.push(obj);
        }

        return (
            <Table columns={columns} dataSource={data}/>
        )
    }
}
export default Content02;
