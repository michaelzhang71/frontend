/*
 * Javascript Engine
 *
 * V8 processing js code
 * 1. parsing code
 * 2. AST
 * 3. Ignition (interpreter): spit out bytecode
 *  - TurboFan (compiler): optimize into machine code
 * 4. Execute code
 *
 * Or another chart:
 * 1. Stream (files)
 * 2. Scanner (tokens)
 * 3. PreParser | Parser
 * 4. AST
 * 5. Bytecode
 *
 *
 *  */
