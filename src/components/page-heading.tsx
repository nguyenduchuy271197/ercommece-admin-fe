import { ReactNode } from "react";

interface PageHeadingProps {
  heading: string;
  subheading: string;
  children?: ReactNode;
}

export default function PageHeading({ heading, subheading }: PageHeadingProps) {
  return (
    <div className="text-center sm:text-left">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {heading}
      </h1>
      <p className="mt-1.5 text-sm text-gray-500">{subheading}</p>
    </div>
  );
}
