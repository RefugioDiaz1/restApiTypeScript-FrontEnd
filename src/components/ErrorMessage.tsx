import type { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <div className="text-center text-2xl my-4  text-red-600 font-bold p-3 uppercase">

        {children}
    </div>
  )
}
