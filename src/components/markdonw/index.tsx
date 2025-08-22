import ReactMarkdow from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export default function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdow
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-4 mt-8 text-heading-sm md:text-heading-lg">
            {children}
          </h2>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-blue-200">{children}</strong>
        )
      }}
    >
      {content}
    </ReactMarkdow>
  );
}
