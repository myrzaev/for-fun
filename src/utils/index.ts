import ScrollReveal from 'scrollreveal';

const isSSR = typeof document === 'undefined';
const sr = isSSR ? null : ScrollReveal();

export default sr;
