import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux-toolkit/actions/action";
import Routing from "./routes";

function App() {
  // пример с redux-toolkit со slice
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <Routing />;
}

export default App;
