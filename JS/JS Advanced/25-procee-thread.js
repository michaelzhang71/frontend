/*
 *
 * Process and Thread
 *
 * process: how computer manage software operation
 * thread: the basic unit of computation
 *
 * process usually has one or more threads to run software
 *
 * time slot rotation: single thread switching between computations
 *
 * Brower or Node: process container for JS operation (multiple processes and thread)
 *
 * tab --> process (multiple threads with one for JS operation)
 *
 * JS is single threaded and could be blocking for a long computation task
 *
 * Event loop mechanism
 * event queue: setTimeout, Ajax, event callback, promise then callback
 * execution: push to execution stack once ES is empty in sequence of event queue
 *
 *
 * Microtask and Macrotask queue
 *
 * Macrotask: setTimeout, setInterval, Ajax, DOM callback, UI rendering
 * Microtask: promise then callback (code after await), queueMicrotask(), Mutation Observer API
 *
 * Microtask first (queue cleared) before any Macrotask
 *
 *
 *  */
