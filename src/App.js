import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux-toolkit/actions/action";
import Routing from "./routes";

function App() {
  // пример с redux-toolkit со slice
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersToolkit.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users", users);

  return <Routing />;
}

export default App;
