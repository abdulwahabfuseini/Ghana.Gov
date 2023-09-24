
import Layout from "../../layout/Layout";
import Form from "./Form";

const LogIn = () => {


  return (
    <Layout>
      <div className="grid w-full sm:px-4 sm:py-20 md:pt-32 md:pb-60 lg:py-20 bg-gray-50">
        <div className="grid w-full h-full max-w-2xl px-5 py-4 mx-auto bg-white sm:pt-20 sm:max-w-6xl sm:place-content-center place-items-center">
          <h1 className="py-6 text-2xl">Sign in to your account</h1>
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default LogIn;




















