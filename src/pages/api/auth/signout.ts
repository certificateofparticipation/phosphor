import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
    cookies.delete("access-token", { path: "/" });
    cookies.delete("refresh-token", { path: "/" });
    return redirect("/signin");
};