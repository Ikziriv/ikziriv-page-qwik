import { component$, Slot } from '@builder.io/qwik';
import { Header } from '../components/general/header';
import { Footer } from '../components/general/footer';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
