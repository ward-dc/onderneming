import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function SignInPage() {
	const { data: session, status } = useSession();

	useEffect(() => {
		if (status != "loading" && !session) signIn("google");
                console.log(status)
		if (status == "authenticated" ) window.close();
	}, [session, status]);

	return null;
}
