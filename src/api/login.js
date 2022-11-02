import axios from 'axios'

/*
登陆
*/
export const login = ({ userName, password }) => axios({ url: `/api/user/login`, method: 'post',data:{userName,password} });

export const register = ({ username, password }) => axios({ url: `/api/user/register`, method: 'post',data:{username,password} });

















export const test = () => axios({ url: `https://api.apiopen.top/api/getHaoKanVideo?page=0&size=2`, method: 'get'});
