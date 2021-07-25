/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TripEditResponseShape } from '../models/TripEditResponseShape'
import type { TripRequestShape } from '../models/TripRequestShape'
import type { TripResponseShape } from '../models/TripResponseShape'
import { request as __request } from '../core/request'

export class Service {
  /**
   * Get all countries
   * @returns any List of all countries fetched by API
   * @throws ApiError
   */
  public static async getService(): Promise<
    Array<{
      value?: string
      label?: string
    }>
  > {
    const result = await __request({
      method: 'GET',
      path: `/country`,
    })
    return result.body
  }

  /**
   * List all saved trips
   * @returns TripResponseShape List of trips created
   * @throws ApiError
   */
  public static async getService1(): Promise<Array<TripResponseShape>> {
    const result = await __request({
      method: 'GET',
      path: `/trip`,
    })
    return result.body
  }

  /**
   * Add a new trip
   * @param requestBody
   * @returns TripEditResponseShape ID of the created trip
   * @throws ApiError
   */
  public static async postService(
    requestBody: TripRequestShape
  ): Promise<TripEditResponseShape> {
    const result = await __request({
      method: 'POST',
      path: `/trip`,
      body: requestBody,
    })
    return result.body
  }

  /**
   * Get a specific trip
   * @param id
   * @returns TripResponseShape Retrieve a trip
   * @throws ApiError
   */
  public static async getService2(id: string): Promise<TripResponseShape> {
    const result = await __request({
      method: 'GET',
      path: `/trip/${id}`,
    })
    return result.body
  }

  /**
   * Update trip information
   * @param id
   * @param requestBody
   * @returns TripEditResponseShape Trip payload
   * @throws ApiError
   */
  public static async putService(
    id: string,
    requestBody: TripRequestShape
  ): Promise<TripEditResponseShape> {
    const result = await __request({
      method: 'PUT',
      path: `/trip/${id}`,
      body: requestBody,
    })
    return result.body
  }

  /**
   * Delete a specific trip
   * @param id
   * @returns void
   * @throws ApiError
   */
  public static async deleteService(id: string): Promise<void> {
    const result = await __request({
      method: 'DELETE',
      path: `/trip/${id}`,
    })
    return result.body
  }
}
