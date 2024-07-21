export default function SectionHeader({ title }: { title: string }) {
  return (
    <h3 className="text-black text-[32px] font-bold">{title as string}</h3>
  );
}
