// mock 数据统一出口
import Mock from 'mockjs'; // 引入mockjs
import test from './data/test';


Mock.mock(/\/mockApi/, 'post', test); // 拦截 /mockApi 接口
