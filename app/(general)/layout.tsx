import { Navbar } from "@/app/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center p-24  bg-gradient-to-r from-indigo-100'>
        {children}
      </div>
    </>
  );
}
