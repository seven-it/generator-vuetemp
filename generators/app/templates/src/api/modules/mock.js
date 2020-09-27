import request from '@/utils/request';
import baseUrl from '../base';

// 测试mock
const mockApi = (data) => request.post(`${baseUrl}/mockApi`, data);
export default mockApi;
