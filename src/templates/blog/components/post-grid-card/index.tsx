type PostGridCardProps = {
  children: React.ReactNode;
};

export default function PostGridCard({ children }: PostGridCardProps) {
  return (
    <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
