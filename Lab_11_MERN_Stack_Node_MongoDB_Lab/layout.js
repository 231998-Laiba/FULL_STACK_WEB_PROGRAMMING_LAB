import './globals.css';
export const metadata = {
title: 'ShopEasy - Ecommerce Store',
description: 'MERN Stack Ecommerce App - Lab 11',
};
export default function RootLayout({ children }) {
return (
<html lang="en">

<body className="bg-gray-50 min-h-screen">
{children}
</body>
</html>
);
}