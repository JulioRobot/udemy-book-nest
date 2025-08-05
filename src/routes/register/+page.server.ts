import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        console.log(name, email, password);

        return { success: true };

    }
}