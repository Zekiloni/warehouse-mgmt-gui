/**
 * Warehouse Management System API
 * API for managing items, orders, locations, and customers in a warehouse.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Item } from './item';

export interface Order { 
    /**
     * Unique identifier for the order.
     */
    id?: string;
    /**
     * ID of the customer who placed the order.
     */
    customerId?: string;
    /**
     * List of ordered items.
     */
    items?: Array<Item>;
    /**
     * Total price of the order.
     */
    totalPrice?: number;
    /**
     * Date when the order was placed.
     */
    createdAt?: Date;
}