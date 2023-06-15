import { FastifyPluginAsync } from 'fastify'

interface GetMembersRequest {
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

interface GetMembersResponseOK {
  'id'?: number;
  'name': string;
}

interface CreateMemberRequest {
  'id'?: number;
  'name': string;
}

interface CreateMemberResponseOK {
  'id'?: number;
  'name': string;
}

interface UpdateMembersRequest {
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

interface UpdateMembersResponseOK {
  'id'?: number;
  'name': string;
}

interface GetMemberByIdRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface GetMemberByIdResponseOK {
  'id'?: number;
  'name': string;
}

interface UpdateMemberRequest {
  'fields'?: Array<string>;
  'id': number;
  'name': string;
}

interface UpdateMemberResponseOK {
  'id'?: number;
  'name': string;
}

interface DeleteMembersRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface DeleteMembersResponseOK {
  'id'?: number;
  'name': string;
}

interface Members {
  getMembers(req: GetMembersRequest): Promise<Array<GetMembersResponseOK>>;
  createMember(req: CreateMemberRequest): Promise<CreateMemberResponseOK>;
  updateMembers(req: UpdateMembersRequest): Promise<Array<UpdateMembersResponseOK>>;
  getMemberById(req: GetMemberByIdRequest): Promise<GetMemberByIdResponseOK>;
  updateMember(req: UpdateMemberRequest): Promise<UpdateMemberResponseOK>;
  deleteMembers(req: DeleteMembersRequest): Promise<DeleteMembersResponseOK>;
}

type MembersPlugin = FastifyPluginAsync<NonNullable<members.MembersOptions>>

declare module 'fastify' {
  interface ConfigureMembers {
    async getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    'members': Members;
    configureMembers(opts: ConfigureMembers): unknown
  }

  interface FastifyRequest {
    'members': Members;
  }
}

declare namespace members {
  export interface MembersOptions {
    url: string
  }
  export const members: MembersPlugin;
  export { members as default };
}

declare function members(...params: Parameters<MembersPlugin>): ReturnType<MembersPlugin>;
export = members;
