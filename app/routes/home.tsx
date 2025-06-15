import { Welcome } from '~/views/welcome/welcome';

import type { Route } from './+types/home';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <main className="min-h-dvh">
      <h1>Hello World!</h1>
      <Welcome />
    </main>
  );
}
