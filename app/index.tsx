import { Redirect } from 'expo-router';
import { ROUTES } from "../src/routes";

const Root = () => {
  return <Redirect href={ROUTES.HOME} />;
}

export default Root;

