import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Трансавтопсков — Яндекс Карты',
  description: 'Трансавтопсков, 180025, Псковская область, Псковский район, деревня Борисовичи, ул. Михаила Егорова, д. 2а, кв. 25 — отзывы, фото, время работы, телефон и адрес на карте',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
