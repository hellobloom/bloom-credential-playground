import {ecsign, hashPersonalMessage, toBuffer, toRpcSig} from 'ethereumjs-util'

export function signupSignature(privateKey: string) {
  return personalSign('Hello, Bloom!', privateKey)
}

export function personalSign(message: string, privateKey: string) {
  const sig = ecsign(hashPersonalMessage(toBuffer(message)), toBuffer(privateKey))

  return toRpcSig(sig.v, sig.r, sig.s)
}

export function rawSign(message: string, privateKey: string) {
  const sig = ecsign(toBuffer(message), toBuffer(privateKey))

  return toRpcSig(sig.v, sig.r, sig.s)
}
