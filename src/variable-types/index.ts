export * from './challenge.js';
export * from './checkin.js';
export * from './vshistory.js';
export * from './coophistory.js';
export * from './fest.js';
export * from './gesotown.js';
export * from './outfits.js';
export * from './replay.js';
export * from './event.js';
export * from './app.js';

type request_variables_app =
    import('./challenge.js').default &
    import('./checkin.js').default &
    import('./vshistory.js').default &
    import('./coophistory.js').default &
    import('./fest.js').default &
    import('./gesotown.js').default &
    import('./outfits.js').default &
    import('./replay.js').default &
    import('./event.js').default &
    import('./app.js').default &
    {};

export default request_variables_app;
