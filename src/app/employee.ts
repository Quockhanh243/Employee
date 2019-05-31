import {IDepartment} from './department';

export interface IEmployee{
    id: number;
    hoTen: string;
    ngaySinh: number;
    gioiTinh: number;
    phongBan: IDepartment;

}
