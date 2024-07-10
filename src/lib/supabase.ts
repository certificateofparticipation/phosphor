import { createClient } from "@supabase/supabase-js";
import {type AstroCookies} from "astro";

export const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
        auth: {
            flowType: "pkce",
        },
    },
);

export async function isLoggedIn(cookies: AstroCookies) {

    const accessToken = cookies.get("access-token");
    const refreshToken = cookies.get("refresh-token");

    if (!accessToken || !refreshToken) {
        return null;
    }

    const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
    });

    if (error) {
        cookies.delete("access-token", {
            path: "/",
        });
        cookies.delete("refresh-token", {
            path: "/",
        });

        return null
    }
    return data
}