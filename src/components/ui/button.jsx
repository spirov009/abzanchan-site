export function Button({ children, ...props }) {
  return <button className="px-4 py-2 bg-emerald-600 text-white rounded" {...props}>{children}</button>;
}