import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return <>
    <div className="w-screen h-screen flex justify-center items-center dark:bg-black">
    <Spinner size="lg" />
    </div>
  </>;
}
