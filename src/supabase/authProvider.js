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

import { supabase } from "./supabase";

export const supabaseAuthProvider = (
	client,
) => ({
	async login({ email, password }) {
		const { error, data } = await client.auth.signInWithPassword({ email, password });
				
		if (error) {
			throw error;
		}

		if (data.user.app_metadata.admin !== true) {
			this.logout();
			throw new Error("Not Authorized");
		}

		return undefined;
	},
	async setPassword({ password }) {
		const { data } = await client.auth.getUser();
		const user_metadata = { ...data.user.user_metadata, has_set_password: true };
		const { error } = await client.auth.updateUser({ password, data: user_metadata });

		if (error) {
			throw error;
		}
		return undefined;
	},
	async logout() {
		const { error } = await client.auth.signOut();
		if (error) {
			throw error;
		}
		return undefined;
	},
	async checkError() {
			return;
	},
	async checkAuth() {
		const { data, error } = await client.auth.getSession();

		if (error || data.session == null) {
			throw new Error();
		}

		return Promise.resolve();
	},
	async getPermissions() {
		return;
	},
	async getIdentity() {
		const { data } = await client.auth.getUser();
		const user = data.user;

		return {
			id: user.id,
			fullName: user.email,
		};
	},
});

export const authProvider = supabaseAuthProvider(supabase)