import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customers';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'agus@gmail.com',
            name: 'Agustin'
        },
        {
            id: 2,
            email: 'iara@gmail.com',
            name: 'Iara'
        },
        {
            id: 3,
            email: 'alicia@gmail.com',
            name: 'Alicia'
        }
    ]

    findCustomerById(id: number) {
        return this.customers.find((customer) => customer.id === id)
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto)
    }

    getCostumers() {
        return this.customers
    }
}
