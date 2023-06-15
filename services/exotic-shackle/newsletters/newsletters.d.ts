import { FastifyPluginAsync } from 'fastify'

interface GetNewsletterRequest {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<string>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: string;
  'orderby.name'?: string;
}

interface GetNewsletterResponseOK {
  'id'?: number;
  'name': string;
}

interface CreateNewsletterRequest {
  'id'?: number;
  'name': string;
}

interface CreateNewsletterResponseOK {
  'id'?: number;
  'name': string;
}

interface UpdateNewsletterRequest {
  'fields'?: Array<string>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'name': string;
}

interface UpdateNewsletterResponseOK {
  'id'?: number;
  'name': string;
}

interface GetNewsletterByIdRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface GetNewsletterByIdResponseOK {
  'id'?: number;
  'name': string;
}

interface UpdateNewsletterRequest {
  'fields'?: Array<string>;
  'id': number;
  'name': string;
}

interface UpdateNewsletterResponseOK {
  'id'?: number;
  'name': string;
}

interface DeleteNewsletterRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface DeleteNewsletterResponseOK {
  'id'?: number;
  'name': string;
}

interface Newsletters {
  getNewsletter(req: GetNewsletterRequest): Promise<Array<GetNewsletterResponseOK>>;
  createNewsletter(req: CreateNewsletterRequest): Promise<CreateNewsletterResponseOK>;
  updateNewsletter(req: UpdateNewsletterRequest): Promise<Array<UpdateNewsletterResponseOK>>;
  getNewsletterById(req: GetNewsletterByIdRequest): Promise<GetNewsletterByIdResponseOK>;
  updateNewsletter(req: UpdateNewsletterRequest): Promise<UpdateNewsletterResponseOK>;
  deleteNewsletter(req: DeleteNewsletterRequest): Promise<DeleteNewsletterResponseOK>;
}

type NewslettersPlugin = FastifyPluginAsync<NonNullable<newsletters.NewslettersOptions>>

declare module 'fastify' {
  interface ConfigureNewsletters {
    async getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    'newsletters': Newsletters;
    configureNewsletters(opts: ConfigureNewsletters): unknown
  }

  interface FastifyRequest {
    'newsletters': Newsletters;
  }
}

declare namespace newsletters {
  export interface NewslettersOptions {
    url: string
  }
  export const newsletters: NewslettersPlugin;
  export { newsletters as default };
}

declare function newsletters(...params: Parameters<NewslettersPlugin>): ReturnType<NewslettersPlugin>;
export = newsletters;
