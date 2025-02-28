import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export const MainLayout = () => {
  return (
      <main className="flex overflow-hidden relative flex-col px-5 pt-5 pb-9 min-h-[900px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/21124f132f0ff91fc6c7865647af81c5c99d67de132f94b5652fdb9921822a2d?placeholderIfAbsent=true"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <Header />
        <Outlet />
      </main>
  );
}
