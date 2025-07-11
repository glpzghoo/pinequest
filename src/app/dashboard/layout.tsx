import type { Metadata } from 'next';
import '../globals.css';
import { ReactNode, Suspense } from 'react';
import DashboardSidebar from './_components/sidebar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <div className='  bg-white shadow-md'>
          <DashboardSidebar />
          </div>
         
          <div className="flex-1 pt-20 pl-[260px]  ">{children}</div>
        </div>
      </div>
    </Suspense>
  );
}
