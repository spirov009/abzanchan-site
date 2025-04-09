export function ToggleGroup({ children }) {
  return <div className="flex space-x-2">{children}</div>;
}

export function ToggleGroupItem({ value, children, onClick }) {
  return (
    <button
      onClick={() => onClick?.(value)}
      className="px-3 py-1 border rounded bg-white hover:bg-emerald-100"
    >
      {children}
    </button>
  );
}