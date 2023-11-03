import { Outlet, useNavigation, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getAuthToken, getTokenDuration } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const token = getAuthToken();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [method, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
