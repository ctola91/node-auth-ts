INSERT INTO public.users(username, userpass, userrole, is_active) VALUES ('admin', 'Kadmin123', 'admin', true);
INSERT INTO public.members(code, membertype, created_at, updated_at, user_id) VALUES ('adm', 'premium', NULL, NULL, 1);