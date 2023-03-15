// The MIT License (MIT)

// Copyright (c) 2016-present, Francois Zaninotto, Marmelab

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { supabase } from './supabase';

const supabaseDataProvider = (
    client
) => ({
    getList: async (resource, params) => {
        const resourceOptions = getResourceOptions(resource);
        return getList({ client, resource, resourceOptions, params });
    },
    getOne: async (resource, { id }) => {
        const resourceOptions = getResourceOptions(resource);
        return getOne({ client, resource, resourceOptions, id });
    },
    getMany: async (resource, { ids }) => {
        const resourceOptions = getResourceOptions(resource);

        const { data, error } = await client
            .from(resourceOptions.table)
            .select(resourceOptions.fields.join(', '))
            .in('id', ids);

        if (error) {
            throw error;
        }

        return { data };    },
    getManyReference: async (resource, originalParams) => {
        const resourceOptions = getResourceOptions(resource);
        const { target, id } = originalParams;
        const params = {
            ...originalParams,
            filter: { ...originalParams.filter, [target]: id },
        };
        return getList({ client, resource, resourceOptions, params });
    },
    create: async (resource, { data: params }) => {
        const resourceOptions = getResourceOptions(resource, resources);
        const {data, error} = await client
            .from(resourceOptions.table)
            .insert(params)
            .select()
            .single();
        if (error) {
            throw error;
        }
        return { data };
    },
    update: async (resource, { id, data }) => {
        const resourceOptions = getResourceOptions(resource);
        const { error } = await client
            .from(resourceOptions.table)
            .update(data)
            .match({ id })
            .single();

        if (error) {
            throw error;
        }
        return { data: {id: id} };
    },
    updateMany: async (resource, { ids, data }) => {
        const resourceOptions = getResourceOptions(resource);
        const { error } = await client
            .from(resourceOptions.table)
            .update(data)
            .in('id', ids);

        if (error) {
            throw error;
        }
        return { data: ids };
    },
    delete: async (resource, { id }) => {
        const resourceOptions = getResourceOptions(resource);
        const { data, error } = await client
            .from(resourceOptions.table)
            .delete()
            .match({ id })
            .single();

        if (error) {
            throw error;
        }

        return { data };
    },
    deleteMany: async (resource, { ids }) => {
        const resourceOptions = getResourceOptions(resource);
        const { error } = await client
            .from(resourceOptions.table)
            .delete()
            .in('id', ids); 
        if (error) {
            throw error;
        }
        return {data: ids };
    },
});

const getOne = async ({
    client,
    resource,
    resourceOptions,
    id,
}) => {
    const { data, error } = await client
    .from(resourceOptions.table)
    .select(resourceOptions.fields.join(', '))
    .match({ id })
    .single();

    if (error) {
        throw error;
    } 
    if(resource === 'profiles'){
        const {data: blocked} = await client.rpc('is_blocked', {user_id: data['auth_id']});
        data['is_blocked'] = blocked;
    }

    return { data }
};

const getList = async ({
    client,
    resource,
    resourceOptions,
    params,
}) => {
    const {
        pagination,
        sort,
        filter: { q, ...filter },
    } = params;

    const rangeFrom = (pagination.page - 1) * pagination.perPage;
    const rangeTo = rangeFrom + pagination.perPage;

    let query = client
        .from(resourceOptions.table)
        .select(resourceOptions.fields.join(', '), { count: 'exact' })
        .order(sort.field, { ascending: sort.order === 'ASC' })
        .match(filter)
        .range(rangeFrom, rangeTo);


    if (q) {
        let queryString = "";
        let fullTextSearchFields = resourceOptions.fullTextSearchFields;
    
        fullTextSearchFields.forEach((field, index, array) => {    
          queryString += `${field}.ilike.%${q}%`;
    
          if (index < array.length - 1) {
            queryString += ",";
          }
        });
        query.or(queryString);
    }

    const { data, error, count } = await query;

    if (error) {
        throw error;
    }

    if(resource === 'profiles'){
        for (let i = 0; i < data.length; i++) {
            const {data: blocked} = await client.rpc('is_blocked', {user_id: data[i]['auth_id']});
            data[i]['is_blocked'] = blocked;
        }
    }

    return {
        data,
        total: count ?? 0,
    };
};

const getResourceOptions = (
    resource
) => {
    const resourceOptions = resources[resource];

    return {
        table: resource,
        fields: resourceOptions.fields,
        fullTextSearchFields: resourceOptions.fullTextSearchFields,
    };
};

const resources = {
    profiles: {
        fields: ['id', 'auth_id','created_at', 'username', 'email', 'description', 'surname', 'name', 'gender'],
        fullTextSearchFields: ['name', 'username', 'email', 'description', 'surname', 'name'],
    },
    profile_features: {
        fields: ['id', 'created_at', 'profile_id', 'feature'],
        fullTextSearchFields: ['profile_id', 'feature'],
    },
    reviews: {
        fields: ['id', 'created_at', 'text','writer_id', 'receiver_id', 'rating', 'comfort_rating', 'safety_rating', 'reliability_rating', 'hospitality_rating'],
        fullTextSearchFields: ['text', 'rating'],
    },
    drives: {
        fields: ['id', 'created_at', 'start_time', 'start_lat', 'start_lng', 'start', 'end_time', 'end_lat', 'end_lng', 'end', 'driver_id', 'cancelled', 'seats', 'hide_in_list_view'],
        fullTextSearchFields: ['start_time', 'start', 'end_time', 'end', 'seats'],
    },
    rides: {
        fields: ['id', 'created_at', 'start_time', 'start_lat', 'start_lng', 'start', 'end_time', 'end_lat', 'end_lng', 'end', 'rider_id', 'drive_id', 'chat_id', 'status', 'seats', 'hide_in_list_view'],
        fullTextSearchFields: ['start_time', 'start', 'end_time', 'end', 'status', 'seats'],
    },
    chats: {
        fields: ['id', 'created_at'],
    },
    messages: {
        fields: ['id', 'created_at', 'chat_id', 'content', 'sender_id', 'read'],
        fullTextSearchFields: ['content'],
    },
    reports: {
        fields: ['id', 'created_at', 'offender_id', 'reporter_id','category', 'text'],
        fullTextSearchFields: ['category', 'text'],
    },
    push_tokens: {
        fields: ['id', 'created_at', 'user_id', 'token', 'disabled'],
        fullTextSearchFields: ['token'],
    },
    notifications: {
        fields: ['id', 'created_at', 'receiver_id', 'title', 'body', 'deep_link'],
        fullTextSearchFields: ['title', 'body', 'deep_link'],
    }
}
  
export const dataProvider = supabaseDataProvider(supabase);