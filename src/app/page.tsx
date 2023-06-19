import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default async function Page() {
  return <h2>Hello World!</h2>;
}
