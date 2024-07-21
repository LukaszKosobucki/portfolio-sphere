import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Roboto } from "next/font/google";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
export default function Description(document: any) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (
        _node: any,
        children:
          | string
          | number
          | bigint
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | Promise<AwaitedReactNode>
          | null
          | undefined
      ) => (
        <p className={`text-black text-base ${roboto.className} pb-4`}>
          {children}
        </p>
      ),
    },
  };

  return <div>{documentToReactComponents(document.content, options)}</div>;
}
