import axios, { AxiosResponse } from 'axios'
import {
  HttpClient,
  HttpResponse,
  HttpRequest
} from '~/app/infra/protocols/http'

type HttpPostParams<T> = {
  url: string
  body?: T
}

export class AxiosHttpClient implements HttpClient {
  public async post(params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
  public async request({
    method,
    url,
    body,
    headers
  }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse<any>

    try {
      axiosResponse = await axios.request({
        url,
        data: body,
        headers,
        method
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data?.body
    }
  }
}
