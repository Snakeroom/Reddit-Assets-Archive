// https://www.redditstatic.com/desktop2x/vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732.1f252485d3a8bd656fef.js
// Retrieved at 9/23/2021, 10:30:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"], {
		"./node_modules/@ethersproject/abstract-provider/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				o = (r("./node_modules/@ethersproject/bytes/lib.esm/index.js"), r("./node_modules/@ethersproject/properties/lib.esm/index.js")),
				i = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			var a = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const s = new i.a("abstract-provider/5.4.0");
			class l extends o.a {
				static isForkEvent(e) {
					return !(!e || !e._isForkEvent)
				}
			}
			class c {
				constructor() {
					s.checkAbstract(new.target, c), Object(o.d)(this, "_isProvider", !0)
				}
				getFeeData() {
					return a(this, void 0, void 0, (function*() {
						const {
							block: e,
							gasPrice: t
						} = yield Object(o.f)({
							block: this.getBlock("latest"),
							gasPrice: this.getGasPrice().catch(e => null)
						});
						let r = null,
							i = null;
						return e && e.baseFeePerGas && (i = n.a.from("1000000000"), r = e.baseFeePerGas.mul(2).add(i)), {
							maxFeePerGas: r,
							maxPriorityFeePerGas: i,
							gasPrice: t
						}
					}))
				}
				addListener(e, t) {
					return this.on(e, t)
				}
				removeListener(e, t) {
					return this.off(e, t)
				}
				static isProvider(e) {
					return !(!e || !e._isProvider)
				}
			}
		},
		"./node_modules/@ethersproject/abstract-signer/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			var i = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const a = new o.a("abstract-signer/5.4.0"),
				s = ["accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
				l = [o.a.errors.INSUFFICIENT_FUNDS, o.a.errors.NONCE_EXPIRED, o.a.errors.REPLACEMENT_UNDERPRICED];
			class c {
				constructor() {
					a.checkAbstract(new.target, c), Object(n.d)(this, "_isSigner", !0)
				}
				getBalance(e) {
					return i(this, void 0, void 0, (function*() {
						return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
					}))
				}
				getTransactionCount(e) {
					return i(this, void 0, void 0, (function*() {
						return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
					}))
				}
				estimateGas(e) {
					return i(this, void 0, void 0, (function*() {
						this._checkProvider("estimateGas");
						const t = yield Object(n.f)(this.checkTransaction(e));
						return yield this.provider.estimateGas(t)
					}))
				}
				call(e, t) {
					return i(this, void 0, void 0, (function*() {
						this._checkProvider("call");
						const r = yield Object(n.f)(this.checkTransaction(e));
						return yield this.provider.call(r, t)
					}))
				}
				sendTransaction(e) {
					return this._checkProvider("sendTransaction"), this.populateTransaction(e).then(e => this.signTransaction(e).then(e => this.provider.sendTransaction(e)))
				}
				getChainId() {
					return i(this, void 0, void 0, (function*() {
						return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
					}))
				}
				getGasPrice() {
					return i(this, void 0, void 0, (function*() {
						return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
					}))
				}
				getFeeData() {
					return i(this, void 0, void 0, (function*() {
						return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
					}))
				}
				resolveName(e) {
					return i(this, void 0, void 0, (function*() {
						return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
					}))
				}
				checkTransaction(e) {
					for (const r in e) - 1 === s.indexOf(r) && a.throwArgumentError("invalid transaction key: " + r, "transaction", e);
					const t = Object(n.g)(e);
					return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then(t => (t[0].toLowerCase() !== t[1].toLowerCase() && a.throwArgumentError("from address mismatch", "transaction", e), t[0])), t
				}
				populateTransaction(e) {
					return i(this, void 0, void 0, (function*() {
						const t = yield Object(n.f)(this.checkTransaction(e));
						null != t.to && (t.to = Promise.resolve(t.to).then(e => i(this, void 0, void 0, (function*() {
							if (null == e) return null;
							const t = yield this.resolveName(e);
							return null == t && a.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
						}))));
						const r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
						if (null == t.gasPrice || 2 !== t.type && !r ? 0 !== t.type && 1 !== t.type || !r || a.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : a.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e), 2 !== t.type && null != t.type || null == t.maxFeePerGas || null == t.maxPriorityFeePerGas)
							if (0 === t.type || 1 === t.type) null == t.gasPrice && (t.gasPrice = this.getGasPrice());
							else {
								const e = yield this.getFeeData();
								if (null == t.type)
									if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
										if (t.type = 2, null != t.gasPrice) {
											const e = t.gasPrice;
											delete t.gasPrice, t.maxFeePerGas = e, t.maxPriorityFeePerGas = e
										} else null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
								else null != e.gasPrice ? (r && a.throwError("network does not support EIP-1559", o.a.errors.UNSUPPORTED_OPERATION, {
									operation: "populateTransaction"
								}), null == t.gasPrice && (t.gasPrice = e.gasPrice), t.type = 0) : a.throwError("failed to get consistent fee data", o.a.errors.UNSUPPORTED_OPERATION, {
									operation: "signer.getFeeData"
								});
								else 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
							}
						else t.type = 2;
						return null == t.nonce && (t.nonce = this.getTransactionCount("pending")), null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch(e => {
							if (l.indexOf(e.code) >= 0) throw e;
							return a.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", o.a.errors.UNPREDICTABLE_GAS_LIMIT, {
								error: e,
								tx: t
							})
						})), null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then(t => (0 !== t[1] && t[0] !== t[1] && a.throwArgumentError("chainId address mismatch", "transaction", e), t[0])), yield Object(n.f)(t)
					}))
				}
				_checkProvider(e) {
					this.provider || a.throwError("missing provider", o.a.errors.UNSUPPORTED_OPERATION, {
						operation: e || "_checkProvider"
					})
				}
				static isSigner(e) {
					return !(!e || !e._isSigner)
				}
			}
			class u extends c {
				constructor(e, t) {
					a.checkNew(new.target, u), super(), Object(n.d)(this, "address", e), Object(n.d)(this, "provider", t || null)
				}
				getAddress() {
					return Promise.resolve(this.address)
				}
				_fail(e, t) {
					return Promise.resolve().then(() => {
						a.throwError(e, o.a.errors.UNSUPPORTED_OPERATION, {
							operation: t
						})
					})
				}
				signMessage(e) {
					return this._fail("VoidSigner cannot sign messages", "signMessage")
				}
				signTransaction(e) {
					return this._fail("VoidSigner cannot sign transactions", "signTransaction")
				}
				_signTypedData(e, t, r) {
					return this._fail("VoidSigner cannot sign typed data", "signTypedData")
				}
				connect(e) {
					return new u(this.address, e)
				}
			}
		},
		"./node_modules/@ethersproject/constants/lib.esm/addresses.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "0x0000000000000000000000000000000000000000"
		},
		"./node_modules/@ethersproject/constants/lib.esm/bignumbers.js": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return o
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
			const o = n.a.from(-1),
				i = n.a.from(0),
				a = n.a.from(1),
				s = n.a.from(2),
				l = n.a.from("1000000000000000000"),
				c = n.a.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
				u = n.a.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),
				d = n.a.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
		},
		"./node_modules/@ethersproject/constants/lib.esm/hashes.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "0x0000000000000000000000000000000000000000000000000000000000000000"
		},
		"./node_modules/@ethersproject/constants/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "AddressZero", (function() {
				return n.a
			})), r.d(t, "NegativeOne", (function() {
				return o.d
			})), r.d(t, "Zero", (function() {
				return o.h
			})), r.d(t, "One", (function() {
				return o.e
			})), r.d(t, "Two", (function() {
				return o.f
			})), r.d(t, "WeiPerEther", (function() {
				return o.g
			})), r.d(t, "MaxUint256", (function() {
				return o.b
			})), r.d(t, "MinInt256", (function() {
				return o.c
			})), r.d(t, "MaxInt256", (function() {
				return o.a
			})), r.d(t, "HashZero", (function() {
				return i.a
			})), r.d(t, "EtherSymbol", (function() {
				return a
			}));
			var n = r("./node_modules/@ethersproject/constants/lib.esm/addresses.js"),
				o = r("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js"),
				i = r("./node_modules/@ethersproject/constants/lib.esm/hashes.js");
			const a = "Ξ"
		},
		"./node_modules/@ethersproject/contracts/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Ce
			})), r.d(t, "b", (function() {
				return Ne
			})), r.d(t, "c", (function() {
				return ke
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = r("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const s = new a.a("abi/5.4.0");
			class l {
				constructor(e, t, r, n) {
					this.name = e, this.type = t, this.localName = r, this.dynamic = n
				}
				_throwError(e, t) {
					s.throwArgumentError(e, this.localName, t)
				}
			}
			class c {
				constructor(e) {
					Object(i.d)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
				}
				get data() {
					return Object(n.c)(this._data)
				}
				get length() {
					return this._dataLength
				}
				_writeData(e) {
					return this._data.push(e), this._dataLength += e.length, e.length
				}
				appendWriter(e) {
					return this._writeData(Object(n.b)(e._data))
				}
				writeBytes(e) {
					let t = Object(n.a)(e);
					const r = t.length % this.wordSize;
					return r && (t = Object(n.b)([t, this._padding.slice(r)])), this._writeData(t)
				}
				_getValue(e) {
					let t = Object(n.a)(o.a.from(e));
					return t.length > this.wordSize && s.throwError("value out-of-bounds", a.a.errors.BUFFER_OVERRUN, {
						length: this.wordSize,
						offset: t.length
					}), t.length % this.wordSize && (t = Object(n.b)([this._padding.slice(t.length % this.wordSize), t])), t
				}
				writeValue(e) {
					return this._writeData(this._getValue(e))
				}
				writeUpdatableValue() {
					const e = this._data.length;
					return this._data.push(this._padding), this._dataLength += this.wordSize, t => {
						this._data[e] = this._getValue(t)
					}
				}
			}
			class u {
				constructor(e, t, r, o) {
					Object(i.d)(this, "_data", Object(n.a)(e)), Object(i.d)(this, "wordSize", t || 32), Object(i.d)(this, "_coerceFunc", r), Object(i.d)(this, "allowLoose", o), this._offset = 0
				}
				get data() {
					return Object(n.i)(this._data)
				}
				get consumed() {
					return this._offset
				}
				static coerce(e, t) {
					let r = e.match("^u?int([0-9]+)$");
					return r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t
				}
				coerce(e, t) {
					return this._coerceFunc ? this._coerceFunc(e, t) : u.coerce(e, t)
				}
				_peekBytes(e, t, r) {
					let n = Math.ceil(t / this.wordSize) * this.wordSize;
					return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? n = t : s.throwError("data out-of-bounds", a.a.errors.BUFFER_OVERRUN, {
						length: this._data.length,
						offset: this._offset + n
					})), this._data.slice(this._offset, this._offset + n)
				}
				subReader(e) {
					return new u(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
				}
				readBytes(e, t) {
					let r = this._peekBytes(0, e, !!t);
					return this._offset += r.length, r.slice(0, e)
				}
				readValue() {
					return o.a.from(this.readBytes(this.wordSize))
				}
			}
			var d = r("./node_modules/@ethersproject/address/lib.esm/index.js"),
				h = r("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				f = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
			class m extends l {
				constructor(e) {
					super("address", "address", e, !1)
				}
				defaultValue() {
					return "0x0000000000000000000000000000000000000000"
				}
				encode(e, t) {
					try {
						Object(d.a)(t)
					} catch (r) {
						this._throwError(r.message, t)
					}
					return e.writeValue(t)
				}
				decode(e) {
					return Object(d.a)(Object(n.h)(e.readValue().toHexString(), 20))
				}
			}
			class p extends l {
				constructor(e) {
					super(e.name, e.type, void 0, e.dynamic), this.coder = e
				}
				defaultValue() {
					return this.coder.defaultValue()
				}
				encode(e, t) {
					return this.coder.encode(e, t)
				}
				decode(e) {
					return this.coder.decode(e)
				}
			}
			const g = new a.a("abi/5.4.0");

			function b(e, t, r) {
				let n = null;
				if (Array.isArray(r)) n = r;
				else if (r && "object" == typeof r) {
					let e = {};
					n = t.map(t => {
						const n = t.localName;
						return n || g.throwError("cannot encode object for signature with missing names", a.a.errors.INVALID_ARGUMENT, {
							argument: "values",
							coder: t,
							value: r
						}), e[n] && g.throwError("cannot encode object for signature with duplicate names", a.a.errors.INVALID_ARGUMENT, {
							argument: "values",
							coder: t,
							value: r
						}), e[n] = !0, r[n]
					})
				} else g.throwArgumentError("invalid tuple value", "tuple", r);
				t.length !== n.length && g.throwArgumentError("types/value length mismatch", "tuple", r);
				let o = new c(e.wordSize),
					i = new c(e.wordSize),
					s = [];
				t.forEach((e, t) => {
					let r = n[t];
					if (e.dynamic) {
						let t = i.length;
						e.encode(i, r);
						let n = o.writeUpdatableValue();
						s.push(e => {
							n(e + t)
						})
					} else e.encode(o, r)
				}), s.forEach(e => {
					e(o.length)
				});
				let l = e.appendWriter(o);
				return l += e.appendWriter(i)
			}

			function v(e, t) {
				let r = [],
					n = e.subReader(0);
				t.forEach(t => {
					let o = null;
					if (t.dynamic) {
						let r = e.readValue(),
							s = n.subReader(r.toNumber());
						try {
							o = t.decode(s)
						} catch (i) {
							if (i.code === a.a.errors.BUFFER_OVERRUN) throw i;
							(o = i).baseType = t.name, o.name = t.localName, o.type = t.type
						}
					} else try {
						o = t.decode(e)
					} catch (i) {
						if (i.code === a.a.errors.BUFFER_OVERRUN) throw i;
						(o = i).baseType = t.name, o.name = t.localName, o.type = t.type
					}
					null != o && r.push(o)
				});
				const o = t.reduce((e, t) => {
					const r = t.localName;
					return r && (e[r] || (e[r] = 0), e[r]++), e
				}, {});
				t.forEach((e, t) => {
					let n = e.localName;
					if (!n || 1 !== o[n]) return;
					if ("length" === n && (n = "_length"), null != r[n]) return;
					const i = r[t];
					i instanceof Error ? Object.defineProperty(r, n, {
						get: () => {
							throw i
						}
					}) : r[n] = i
				});
				for (let i = 0; i < r.length; i++) {
					const e = r[i];
					e instanceof Error && Object.defineProperty(r, i, {
						get: () => {
							throw e
						}
					})
				}
				return Object.freeze(r)
			}
			class y extends l {
				constructor(e, t, r) {
					super("array", e.type + "[" + (t >= 0 ? t : "") + "]", r, -1 === t || e.dynamic), this.coder = e, this.length = t
				}
				defaultValue() {
					const e = this.coder.defaultValue(),
						t = [];
					for (let r = 0; r < this.length; r++) t.push(e);
					return t
				}
				encode(e, t) {
					Array.isArray(t) || this._throwError("expected array value", t);
					let r = this.length; - 1 === r && (r = t.length, e.writeValue(t.length)), g.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
					let n = [];
					for (let o = 0; o < t.length; o++) n.push(this.coder);
					return b(e, n, t)
				}
				decode(e) {
					let t = this.length; - 1 === t && 32 * (t = e.readValue().toNumber()) > e._data.length && g.throwError("insufficient data length", a.a.errors.BUFFER_OVERRUN, {
						length: e._data.length,
						count: t
					});
					let r = [];
					for (let n = 0; n < t; n++) r.push(new p(this.coder));
					return e.coerce(this.name, v(e, r))
				}
			}
			class E extends l {
				constructor(e) {
					super("bool", "bool", e, !1)
				}
				defaultValue() {
					return !1
				}
				encode(e, t) {
					return e.writeValue(t ? 1 : 0)
				}
				decode(e) {
					return e.coerce(this.type, !e.readValue().isZero())
				}
			}
			class A extends l {
				constructor(e, t) {
					super(e, e, t, !0)
				}
				defaultValue() {
					return "0x"
				}
				encode(e, t) {
					t = Object(n.a)(t);
					let r = e.writeValue(t.length);
					return r += e.writeBytes(t)
				}
				decode(e) {
					return e.readBytes(e.readValue().toNumber(), !0)
				}
			}
			class T extends A {
				constructor(e) {
					super("bytes", e)
				}
				decode(e) {
					return e.coerce(this.name, Object(n.i)(super.decode(e)))
				}
			}
			class S extends l {
				constructor(e, t) {
					let r = "bytes" + String(e);
					super(r, r, t, !1), this.size = e
				}
				defaultValue() {
					return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
				}
				encode(e, t) {
					let r = Object(n.a)(t);
					return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r)
				}
				decode(e) {
					return e.coerce(this.name, Object(n.i)(e.readBytes(this.size)))
				}
			}
			class O extends l {
				constructor(e) {
					super("null", "", e, !1)
				}
				defaultValue() {
					return null
				}
				encode(e, t) {
					return null != t && this._throwError("not null", t), e.writeBytes([])
				}
				decode(e) {
					return e.readBytes(0), e.coerce(this.name, null)
				}
			}
			var w = r("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js");
			class P extends l {
				constructor(e, t, r) {
					const n = (t ? "int" : "uint") + 8 * e;
					super(n, n, r, !1), this.size = e, this.signed = t
				}
				defaultValue() {
					return 0
				}
				encode(e, t) {
					let r = o.a.from(t),
						n = w.b.mask(8 * e.wordSize);
					if (this.signed) {
						let e = n.mask(8 * this.size - 1);
						(r.gt(e) || r.lt(e.add(w.e).mul(w.d))) && this._throwError("value out-of-bounds", t)
					} else(r.lt(w.h) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", t);
					return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(r)
				}
				decode(e) {
					let t = e.readValue().mask(8 * this.size);
					return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t)
				}
			}
			var F = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			class C extends A {
				constructor(e) {
					super("string", e)
				}
				defaultValue() {
					return ""
				}
				encode(e, t) {
					return super.encode(e, Object(F.f)(t))
				}
				decode(e) {
					return Object(F.h)(super.decode(e))
				}
			}
			class N extends l {
				constructor(e, t) {
					let r = !1;
					const n = [];
					e.forEach(e => {
						e.dynamic && (r = !0), n.push(e.type)
					}), super("tuple", "tuple(" + n.join(",") + ")", t, r), this.coders = e
				}
				defaultValue() {
					const e = [];
					this.coders.forEach(t => {
						e.push(t.defaultValue())
					});
					const t = this.coders.reduce((e, t) => {
						const r = t.localName;
						return r && (e[r] || (e[r] = 0), e[r]++), e
					}, {});
					return this.coders.forEach((r, n) => {
						let o = r.localName;
						o && 1 === t[o] && ("length" === o && (o = "_length"), null == e[o] && (e[o] = e[n]))
					}), Object.freeze(e)
				}
				encode(e, t) {
					return b(e, this.coders, t)
				}
				decode(e) {
					return e.coerce(this.name, v(e, this.coders))
				}
			}
			const k = new a.a("abi/5.4.0"),
				R = {};
			let L = {
					calldata: !0,
					memory: !0,
					storage: !0
				},
				M = {
					calldata: !0,
					memory: !0
				};

			function B(e, t) {
				if ("bytes" === e || "string" === e) {
					if (L[t]) return !0
				} else if ("address" === e) {
					if ("payable" === t) return !0
				} else if ((e.indexOf("[") >= 0 || "tuple" === e) && M[t]) return !0;
				return (L[t] || "payable" === t) && k.throwArgumentError("invalid modifier", "name", t), !1
			}

			function J(e, t) {
				for (let r in t) Object(i.d)(e, r, t[r])
			}
			const j = Object.freeze({
					sighash: "sighash",
					minimal: "minimal",
					full: "full",
					json: "json"
				}),
				_ = new RegExp(/^(.*)\[([0-9]*)\]$/);
			class D {
				constructor(e, t) {
					e !== R && k.throwError("use fromString", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new ParamType()"
					}), J(this, t);
					let r = this.type.match(_);
					J(this, r ? {
						arrayLength: parseInt(r[2] || "-1"),
						arrayChildren: D.fromObject({
							type: r[1],
							components: this.components
						}),
						baseType: "array"
					} : {
						arrayLength: null,
						arrayChildren: null,
						baseType: null != this.components ? "tuple" : this.type
					}), this._isParamType = !0, Object.freeze(this)
				}
				format(e) {
					if (e || (e = j.sighash), j[e] || k.throwArgumentError("invalid format type", "format", e), e === j.json) {
						let t = {
							type: "tuple" === this.baseType ? "tuple" : this.type,
							name: this.name || void 0
						};
						return "boolean" == typeof this.indexed && (t.indexed = this.indexed), this.components && (t.components = this.components.map(t => JSON.parse(t.format(e)))), JSON.stringify(t)
					}
					let t = "";
					return "array" === this.baseType ? (t += this.arrayChildren.format(e), t += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== j.sighash && (t += this.type), t += "(" + this.components.map(t => t.format(e)).join(e === j.full ? ", " : ",") + ")") : t += this.type, e !== j.sighash && (!0 === this.indexed && (t += " indexed"), e === j.full && this.name && (t += " " + this.name)), t
				}
				static from(e, t) {
					return "string" == typeof e ? D.fromString(e, t) : D.fromObject(e)
				}
				static fromObject(e) {
					return D.isParamType(e) ? e : new D(R, {
						name: e.name || null,
						type: Q(e.type),
						indexed: null == e.indexed ? null : !!e.indexed,
						components: e.components ? e.components.map(D.fromObject) : null
					})
				}
				static fromString(e, t) {
					return function(e) {
						return D.fromObject({
							name: e.name,
							type: e.type,
							indexed: e.indexed,
							components: e.components
						})
					}(function(e, t) {
						let r = e;

						function n(t) {
							k.throwArgumentError(`unexpected character at position ${t}`, "param", e)
						}

						function o(e) {
							let r = {
								type: "",
								name: "",
								parent: e,
								state: {
									allowType: !0
								}
							};
							return t && (r.indexed = !1), r
						}
						e = e.replace(/\s/g, " ");
						let i = {
								type: "",
								name: "",
								state: {
									allowType: !0
								}
							},
							a = i;
						for (let s = 0; s < e.length; s++) {
							let r = e[s];
							switch (r) {
								case "(":
									a.state.allowType && "" === a.type ? a.type = "tuple" : a.state.allowParams || n(s), a.state.allowType = !1, a.type = Q(a.type), a.components = [o(a)], a = a.components[0];
									break;
								case ")":
									delete a.state, "indexed" === a.name && (t || n(s), a.indexed = !0, a.name = ""), B(a.type, a.name) && (a.name = ""), a.type = Q(a.type);
									let e = a;
									(a = a.parent) || n(s), delete e.parent, a.state.allowParams = !1, a.state.allowName = !0, a.state.allowArray = !0;
									break;
								case ",":
									delete a.state, "indexed" === a.name && (t || n(s), a.indexed = !0, a.name = ""), B(a.type, a.name) && (a.name = ""), a.type = Q(a.type);
									let i = o(a.parent);
									a.parent.components.push(i), delete a.parent, a = i;
									break;
								case " ":
									a.state.allowType && "" !== a.type && (a.type = Q(a.type), delete a.state.allowType, a.state.allowName = !0, a.state.allowParams = !0), a.state.allowName && "" !== a.name && ("indexed" === a.name ? (t || n(s), a.indexed && n(s), a.indexed = !0, a.name = "") : B(a.type, a.name) ? a.name = "" : a.state.allowName = !1);
									break;
								case "[":
									a.state.allowArray || n(s), a.type += r, a.state.allowArray = !1, a.state.allowName = !1, a.state.readArray = !0;
									break;
								case "]":
									a.state.readArray || n(s), a.type += r, a.state.readArray = !1, a.state.allowArray = !0, a.state.allowName = !0;
									break;
								default:
									a.state.allowType ? (a.type += r, a.state.allowParams = !0, a.state.allowArray = !0) : a.state.allowName ? (a.name += r, delete a.state.allowArray) : a.state.readArray ? a.type += r : n(s)
							}
						}
						return a.parent && k.throwArgumentError("unexpected eof", "param", e), delete i.state, "indexed" === a.name ? (t || n(r.length - 7), a.indexed && n(r.length - 7), a.indexed = !0, a.name = "") : B(a.type, a.name) && (a.name = ""), i.type = Q(i.type), i
					}(e, !!t))
				}
				static isParamType(e) {
					return !(null == e || !e._isParamType)
				}
			}

			function I(e, t) {
				return function(e) {
					e = e.trim();
					let t = [],
						r = "",
						n = 0;
					for (let o = 0; o < e.length; o++) {
						let i = e[o];
						"," === i && 0 === n ? (t.push(r), r = "") : (r += i, "(" === i ? n++ : ")" === i && -1 === --n && k.throwArgumentError("unbalanced parenthesis", "value", e))
					}
					r && t.push(r);
					return t
				}(e).map(e => D.fromString(e, t))
			}
			class x {
				constructor(e, t) {
					e !== R && k.throwError("use a static from method", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new Fragment()"
					}), J(this, t), this._isFragment = !0, Object.freeze(this)
				}
				static from(e) {
					return x.isFragment(e) ? e : "string" == typeof e ? x.fromString(e) : x.fromObject(e)
				}
				static fromObject(e) {
					if (x.isFragment(e)) return e;
					switch (e.type) {
						case "function":
							return z.fromObject(e);
						case "event":
							return U.fromObject(e);
						case "constructor":
							return V.fromObject(e);
						case "error":
							return K.fromObject(e);
						case "fallback":
						case "receive":
							return null
					}
					return k.throwArgumentError("invalid fragment object", "value", e)
				}
				static fromString(e) {
					return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? U.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? z.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? V.fromString(e.trim()) : "error" === e.split(" ")[0] ? K.fromString(e.substring(5).trim()) : k.throwArgumentError("unsupported fragment", "value", e)
				}
				static isFragment(e) {
					return !(!e || !e._isFragment)
				}
			}
			class U extends x {
				format(e) {
					if (e || (e = j.sighash), j[e] || k.throwArgumentError("invalid format type", "format", e), e === j.json) return JSON.stringify({
						type: "event",
						anonymous: this.anonymous,
						name: this.name,
						inputs: this.inputs.map(t => JSON.parse(t.format(e)))
					});
					let t = "";
					return e !== j.sighash && (t += "event "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === j.full ? ", " : ",") + ") ", e !== j.sighash && this.anonymous && (t += "anonymous "), t.trim()
				}
				static from(e) {
					return "string" == typeof e ? U.fromString(e) : U.fromObject(e)
				}
				static fromObject(e) {
					if (U.isEventFragment(e)) return e;
					"event" !== e.type && k.throwArgumentError("invalid event object", "value", e);
					const t = {
						name: W(e.name),
						anonymous: e.anonymous,
						inputs: e.inputs ? e.inputs.map(D.fromObject) : [],
						type: "event"
					};
					return new U(R, t)
				}
				static fromString(e) {
					let t = e.match(Y);
					t || k.throwArgumentError("invalid event string", "value", e);
					let r = !1;
					return t[3].split(" ").forEach(e => {
						switch (e.trim()) {
							case "anonymous":
								r = !0;
								break;
							case "":
								break;
							default:
								k.warn("unknown modifier: " + e)
						}
					}), U.fromObject({
						name: t[1].trim(),
						anonymous: r,
						inputs: I(t[2], !0),
						type: "event"
					})
				}
				static isEventFragment(e) {
					return e && e._isFragment && "event" === e.type
				}
			}

			function G(e, t) {
				t.gas = null;
				let r = e.split("@");
				return 1 !== r.length ? (r.length > 2 && k.throwArgumentError("invalid human-readable ABI signature", "value", e), r[1].match(/^[0-9]+$/) || k.throwArgumentError("invalid human-readable ABI signature gas", "value", e), t.gas = o.a.from(r[1]), r[0]) : e
			}

			function X(e, t) {
				t.constant = !1, t.payable = !1, t.stateMutability = "nonpayable", e.split(" ").forEach(e => {
					switch (e.trim()) {
						case "constant":
							t.constant = !0;
							break;
						case "payable":
							t.payable = !0, t.stateMutability = "payable";
							break;
						case "nonpayable":
							t.payable = !1, t.stateMutability = "nonpayable";
							break;
						case "pure":
							t.constant = !0, t.stateMutability = "pure";
							break;
						case "view":
							t.constant = !0, t.stateMutability = "view";
							break;
						case "external":
						case "public":
						case "":
							break;
						default:
							console.log("unknown modifier: " + e)
					}
				})
			}

			function H(e) {
				let t = {
					constant: !1,
					payable: !0,
					stateMutability: "payable"
				};
				return null != e.stateMutability ? (t.stateMutability = e.stateMutability, t.constant = "view" === t.stateMutability || "pure" === t.stateMutability, null != e.constant && !!e.constant !== t.constant && k.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e), t.payable = "payable" === t.stateMutability, null != e.payable && !!e.payable !== t.payable && k.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e)) : null != e.payable ? (t.payable = !!e.payable, null != e.constant || t.payable || "constructor" === e.type || k.throwArgumentError("unable to determine stateMutability", "value", e), t.constant = !!e.constant, t.constant ? t.stateMutability = "view" : t.stateMutability = t.payable ? "payable" : "nonpayable", t.payable && t.constant && k.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (t.constant = !!e.constant, t.payable = !t.constant, t.stateMutability = t.constant ? "view" : "payable") : "constructor" !== e.type && k.throwArgumentError("unable to determine stateMutability", "value", e), t
			}
			class V extends x {
				format(e) {
					if (e || (e = j.sighash), j[e] || k.throwArgumentError("invalid format type", "format", e), e === j.json) return JSON.stringify({
						type: "constructor",
						stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
						payable: this.payable,
						gas: this.gas ? this.gas.toNumber() : void 0,
						inputs: this.inputs.map(t => JSON.parse(t.format(e)))
					});
					e === j.sighash && k.throwError("cannot format a constructor for sighash", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "format(sighash)"
					});
					let t = "constructor(" + this.inputs.map(t => t.format(e)).join(e === j.full ? ", " : ",") + ") ";
					return this.stateMutability && "nonpayable" !== this.stateMutability && (t += this.stateMutability + " "), t.trim()
				}
				static from(e) {
					return "string" == typeof e ? V.fromString(e) : V.fromObject(e)
				}
				static fromObject(e) {
					if (V.isConstructorFragment(e)) return e;
					"constructor" !== e.type && k.throwArgumentError("invalid constructor object", "value", e);
					let t = H(e);
					t.constant && k.throwArgumentError("constructor cannot be constant", "value", e);
					const r = {
						name: null,
						type: e.type,
						inputs: e.inputs ? e.inputs.map(D.fromObject) : [],
						payable: t.payable,
						stateMutability: t.stateMutability,
						gas: e.gas ? o.a.from(e.gas) : null
					};
					return new V(R, r)
				}
				static fromString(e) {
					let t = {
							type: "constructor"
						},
						r = (e = G(e, t)).match(Y);
					return r && "constructor" === r[1].trim() || k.throwArgumentError("invalid constructor string", "value", e), t.inputs = I(r[2].trim(), !1), X(r[3].trim(), t), V.fromObject(t)
				}
				static isConstructorFragment(e) {
					return e && e._isFragment && "constructor" === e.type
				}
			}
			class z extends V {
				format(e) {
					if (e || (e = j.sighash), j[e] || k.throwArgumentError("invalid format type", "format", e), e === j.json) return JSON.stringify({
						type: "function",
						name: this.name,
						constant: this.constant,
						stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
						payable: this.payable,
						gas: this.gas ? this.gas.toNumber() : void 0,
						inputs: this.inputs.map(t => JSON.parse(t.format(e))),
						outputs: this.outputs.map(t => JSON.parse(t.format(e)))
					});
					let t = "";
					return e !== j.sighash && (t += "function "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === j.full ? ", " : ",") + ") ", e !== j.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map(t => t.format(e)).join(", ") + ") "), null != this.gas && (t += "@" + this.gas.toString() + " ")), t.trim()
				}
				static from(e) {
					return "string" == typeof e ? z.fromString(e) : z.fromObject(e)
				}
				static fromObject(e) {
					if (z.isFunctionFragment(e)) return e;
					"function" !== e.type && k.throwArgumentError("invalid function object", "value", e);
					let t = H(e);
					const r = {
						type: e.type,
						name: W(e.name),
						constant: t.constant,
						inputs: e.inputs ? e.inputs.map(D.fromObject) : [],
						outputs: e.outputs ? e.outputs.map(D.fromObject) : [],
						payable: t.payable,
						stateMutability: t.stateMutability,
						gas: e.gas ? o.a.from(e.gas) : null
					};
					return new z(R, r)
				}
				static fromString(e) {
					let t = {
							type: "function"
						},
						r = (e = G(e, t)).split(" returns ");
					r.length > 2 && k.throwArgumentError("invalid function string", "value", e);
					let n = r[0].match(Y);
					if (n || k.throwArgumentError("invalid function signature", "value", e), t.name = n[1].trim(), t.name && W(t.name), t.inputs = I(n[2], !1), X(n[3].trim(), t), r.length > 1) {
						let n = r[1].match(Y);
						"" == n[1].trim() && "" == n[3].trim() || k.throwArgumentError("unexpected tokens", "value", e), t.outputs = I(n[2], !1)
					} else t.outputs = [];
					return z.fromObject(t)
				}
				static isFunctionFragment(e) {
					return e && e._isFragment && "function" === e.type
				}
			}

			function Z(e) {
				const t = e.format();
				return "Error(string)" !== t && "Panic(uint256)" !== t || k.throwArgumentError(`cannot specify user defined ${t} error`, "fragment", e), e
			}
			class K extends x {
				format(e) {
					if (e || (e = j.sighash), j[e] || k.throwArgumentError("invalid format type", "format", e), e === j.json) return JSON.stringify({
						type: "error",
						name: this.name,
						inputs: this.inputs.map(t => JSON.parse(t.format(e)))
					});
					let t = "";
					return e !== j.sighash && (t += "error "), (t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === j.full ? ", " : ",") + ") ").trim()
				}
				static from(e) {
					return "string" == typeof e ? K.fromString(e) : K.fromObject(e)
				}
				static fromObject(e) {
					if (K.isErrorFragment(e)) return e;
					"error" !== e.type && k.throwArgumentError("invalid error object", "value", e);
					const t = {
						type: e.type,
						name: W(e.name),
						inputs: e.inputs ? e.inputs.map(D.fromObject) : []
					};
					return Z(new K(R, t))
				}
				static fromString(e) {
					let t = {
							type: "error"
						},
						r = e.match(Y);
					return r || k.throwArgumentError("invalid error signature", "value", e), t.name = r[1].trim(), t.name && W(t.name), t.inputs = I(r[2], !1), Z(K.fromObject(t))
				}
				static isErrorFragment(e) {
					return e && e._isFragment && "error" === e.type
				}
			}

			function Q(e) {
				return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
			}
			const q = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

			function W(e) {
				return e && e.match(q) || k.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
			}
			const Y = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
			const $ = new a.a("abi/5.4.0"),
				ee = new RegExp(/^bytes([0-9]*)$/),
				te = new RegExp(/^(u?int)([0-9]*)$/);
			class re {
				constructor(e) {
					$.checkNew(new.target, re), Object(i.d)(this, "coerceFunc", e || null)
				}
				_getCoder(e) {
					switch (e.baseType) {
						case "address":
							return new m(e.name);
						case "bool":
							return new E(e.name);
						case "string":
							return new C(e.name);
						case "bytes":
							return new T(e.name);
						case "array":
							return new y(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
						case "tuple":
							return new N((e.components || []).map(e => this._getCoder(e)), e.name);
						case "":
							return new O(e.name)
					}
					let t = e.type.match(te);
					if (t) {
						let r = parseInt(t[2] || "256");
						return (0 === r || r > 256 || r % 8 != 0) && $.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new P(r / 8, "int" === t[1], e.name)
					}
					if (t = e.type.match(ee)) {
						let r = parseInt(t[1]);
						return (0 === r || r > 32) && $.throwArgumentError("invalid bytes length", "param", e), new S(r, e.name)
					}
					return $.throwArgumentError("invalid type", "type", e.type)
				}
				_getWordSize() {
					return 32
				}
				_getReader(e, t) {
					return new u(e, this._getWordSize(), this.coerceFunc, t)
				}
				_getWriter() {
					return new c(this._getWordSize())
				}
				getDefaultValue(e) {
					const t = e.map(e => this._getCoder(D.from(e)));
					return new N(t, "_").defaultValue()
				}
				encode(e, t) {
					e.length !== t.length && $.throwError("types/values length mismatch", a.a.errors.INVALID_ARGUMENT, {
						count: {
							types: e.length,
							values: t.length
						},
						value: {
							types: e,
							values: t
						}
					});
					const r = e.map(e => this._getCoder(D.from(e))),
						n = new N(r, "_"),
						o = this._getWriter();
					return n.encode(o, t), o.data
				}
				decode(e, t, r) {
					const o = e.map(e => this._getCoder(D.from(e)));
					return new N(o, "_").decode(this._getReader(Object(n.a)(t), r))
				}
			}
			const ne = new re,
				oe = new a.a("abi/5.4.0");
			class ie extends i.a {}
			class ae extends i.a {}
			class se extends i.a {}
			class le extends i.a {
				static isIndexed(e) {
					return !(!e || !e._isIndexed)
				}
			}
			const ce = {
				"0x08c379a0": {
					signature: "Error(string)",
					name: "Error",
					inputs: ["string"],
					reason: !0
				},
				"0x4e487b71": {
					signature: "Panic(uint256)",
					name: "Panic",
					inputs: ["uint256"]
				}
			};

			function ue(e, t) {
				const r = new Error(`deferred error during ABI decoding triggered accessing ${e}`);
				return r.error = t, r
			}
			class de {
				constructor(e) {
					oe.checkNew(new.target, de);
					let t = [];
					t = "string" == typeof e ? JSON.parse(e) : e, Object(i.d)(this, "fragments", t.map(e => x.from(e)).filter(e => null != e)), Object(i.d)(this, "_abiCoder", Object(i.e)(new.target, "getAbiCoder")()), Object(i.d)(this, "functions", {}), Object(i.d)(this, "errors", {}), Object(i.d)(this, "events", {}), Object(i.d)(this, "structs", {}), this.fragments.forEach(e => {
						let t = null;
						switch (e.type) {
							case "constructor":
								return this.deploy ? void oe.warn("duplicate definition - constructor") : void Object(i.d)(this, "deploy", e);
							case "function":
								t = this.functions;
								break;
							case "event":
								t = this.events;
								break;
							case "error":
								t = this.errors;
								break;
							default:
								return
						}
						let r = e.format();
						t[r] ? oe.warn("duplicate definition - " + r) : t[r] = e
					}), this.deploy || Object(i.d)(this, "deploy", V.from({
						payable: !1,
						type: "constructor"
					})), Object(i.d)(this, "_isInterface", !0)
				}
				format(e) {
					e || (e = j.full), e === j.sighash && oe.throwArgumentError("interface does not support formatting sighash", "format", e);
					const t = this.fragments.map(t => t.format(e));
					return e === j.json ? JSON.stringify(t.map(e => JSON.parse(e))) : t
				}
				static getAbiCoder() {
					return ne
				}
				static getAddress(e) {
					return Object(d.a)(e)
				}
				static getSighash(e) {
					return Object(n.e)(Object(h.a)(e.format()), 0, 4)
				}
				static getEventTopic(e) {
					return Object(h.a)(e.format())
				}
				getFunction(e) {
					if (Object(n.l)(e)) {
						for (const t in this.functions)
							if (e === this.getSighash(t)) return this.functions[t];
						oe.throwArgumentError("no matching function", "sighash", e)
					}
					if (-1 === e.indexOf("(")) {
						const t = e.trim(),
							r = Object.keys(this.functions).filter(e => e.split("(")[0] === t);
						return 0 === r.length ? oe.throwArgumentError("no matching function", "name", t) : r.length > 1 && oe.throwArgumentError("multiple matching functions", "name", t), this.functions[r[0]]
					}
					const t = this.functions[z.fromString(e).format()];
					return t || oe.throwArgumentError("no matching function", "signature", e), t
				}
				getEvent(e) {
					if (Object(n.l)(e)) {
						const t = e.toLowerCase();
						for (const e in this.events)
							if (t === this.getEventTopic(e)) return this.events[e];
						oe.throwArgumentError("no matching event", "topichash", t)
					}
					if (-1 === e.indexOf("(")) {
						const t = e.trim(),
							r = Object.keys(this.events).filter(e => e.split("(")[0] === t);
						return 0 === r.length ? oe.throwArgumentError("no matching event", "name", t) : r.length > 1 && oe.throwArgumentError("multiple matching events", "name", t), this.events[r[0]]
					}
					const t = this.events[U.fromString(e).format()];
					return t || oe.throwArgumentError("no matching event", "signature", e), t
				}
				getError(e) {
					if (Object(n.l)(e)) {
						const t = Object(i.e)(this.constructor, "getSighash");
						for (const r in this.errors) {
							if (e === t(this.errors[r])) return this.errors[r]
						}
						oe.throwArgumentError("no matching error", "sighash", e)
					}
					if (-1 === e.indexOf("(")) {
						const t = e.trim(),
							r = Object.keys(this.errors).filter(e => e.split("(")[0] === t);
						return 0 === r.length ? oe.throwArgumentError("no matching error", "name", t) : r.length > 1 && oe.throwArgumentError("multiple matching errors", "name", t), this.errors[r[0]]
					}
					const t = this.errors[z.fromString(e).format()];
					return t || oe.throwArgumentError("no matching error", "signature", e), t
				}
				getSighash(e) {
					if ("string" == typeof e) try {
						e = this.getFunction(e)
					} catch (t) {
						try {
							e = this.getError(e)
						} catch (r) {
							throw t
						}
					}
					return Object(i.e)(this.constructor, "getSighash")(e)
				}
				getEventTopic(e) {
					return "string" == typeof e && (e = this.getEvent(e)), Object(i.e)(this.constructor, "getEventTopic")(e)
				}
				_decodeParams(e, t) {
					return this._abiCoder.decode(e, t)
				}
				_encodeParams(e, t) {
					return this._abiCoder.encode(e, t)
				}
				encodeDeploy(e) {
					return this._encodeParams(this.deploy.inputs, e || [])
				}
				decodeErrorResult(e, t) {
					"string" == typeof e && (e = this.getError(e));
					const r = Object(n.a)(t);
					return Object(n.i)(r.slice(0, 4)) !== this.getSighash(e) && oe.throwArgumentError(`data signature does not match error ${e.name}.`, "data", Object(n.i)(r)), this._decodeParams(e.inputs, r.slice(4))
				}
				encodeErrorResult(e, t) {
					return "string" == typeof e && (e = this.getError(e)), Object(n.i)(Object(n.b)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
				}
				decodeFunctionData(e, t) {
					"string" == typeof e && (e = this.getFunction(e));
					const r = Object(n.a)(t);
					return Object(n.i)(r.slice(0, 4)) !== this.getSighash(e) && oe.throwArgumentError(`data signature does not match function ${e.name}.`, "data", Object(n.i)(r)), this._decodeParams(e.inputs, r.slice(4))
				}
				encodeFunctionData(e, t) {
					return "string" == typeof e && (e = this.getFunction(e)), Object(n.i)(Object(n.b)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
				}
				decodeFunctionResult(e, t) {
					"string" == typeof e && (e = this.getFunction(e));
					let r = Object(n.a)(t),
						o = null,
						i = null,
						s = null,
						l = null;
					switch (r.length % this._abiCoder._getWordSize()) {
						case 0:
							try {
								return this._abiCoder.decode(e.outputs, r)
							} catch (c) {}
							break;
						case 4: {
							const e = Object(n.i)(r.slice(0, 4)),
								t = ce[e];
							if (t) i = this._abiCoder.decode(t.inputs, r.slice(4)), s = t.name, l = t.signature, t.reason && (o = i[0]);
							else try {
								const t = this.getError(e);
								i = this._abiCoder.decode(t.inputs, r.slice(4)), s = t.name, l = t.format()
							} catch (c) {
								console.log(c)
							}
							break
						}
					}
					return oe.throwError("call revert exception", a.a.errors.CALL_EXCEPTION, {
						method: e.format(),
						errorArgs: i,
						errorName: s,
						errorSignature: l,
						reason: o
					})
				}
				encodeFunctionResult(e, t) {
					return "string" == typeof e && (e = this.getFunction(e)), Object(n.i)(this._abiCoder.encode(e.outputs, t || []))
				}
				encodeFilterTopics(e, t) {
					"string" == typeof e && (e = this.getEvent(e)), t.length > e.inputs.length && oe.throwError("too many arguments for " + e.format(), a.a.errors.UNEXPECTED_ARGUMENT, {
						argument: "values",
						value: t
					});
					let r = [];
					e.anonymous || r.push(this.getEventTopic(e));
					const o = (e, t) => "string" === e.type ? Object(h.a)(t) : "bytes" === e.type ? Object(f.a)(Object(n.i)(t)) : ("address" === e.type && this._abiCoder.encode(["address"], [t]), Object(n.h)(Object(n.i)(t), 32));
					for (t.forEach((t, n) => {
							let i = e.inputs[n];
							i.indexed ? null == t ? r.push(null) : "array" === i.baseType || "tuple" === i.baseType ? oe.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, t) : Array.isArray(t) ? r.push(t.map(e => o(i, e))) : r.push(o(i, t)) : null != t && oe.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, t)
						}); r.length && null === r[r.length - 1];) r.pop();
					return r
				}
				encodeEventLog(e, t) {
					"string" == typeof e && (e = this.getEvent(e));
					const r = [],
						n = [],
						o = [];
					return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && oe.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach((e, i) => {
						const a = t[i];
						if (e.indexed)
							if ("string" === e.type) r.push(Object(h.a)(a));
							else if ("bytes" === e.type) r.push(Object(f.a)(a));
						else {
							if ("tuple" === e.baseType || "array" === e.baseType) throw new Error("not implemented");
							r.push(this._abiCoder.encode([e.type], [a]))
						} else n.push(e), o.push(a)
					}), {
						data: this._abiCoder.encode(n, o),
						topics: r
					}
				}
				decodeEventLog(e, t, r) {
					if ("string" == typeof e && (e = this.getEvent(e)), null != r && !e.anonymous) {
						let t = this.getEventTopic(e);
						Object(n.l)(r[0], 32) && r[0].toLowerCase() === t || oe.throwError("fragment/topic mismatch", a.a.errors.INVALID_ARGUMENT, {
							argument: "topics[0]",
							expected: t,
							value: r[0]
						}), r = r.slice(1)
					}
					let o = [],
						i = [],
						s = [];
					e.inputs.forEach((e, t) => {
						e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (o.push(D.fromObject({
							type: "bytes32",
							name: e.name
						})), s.push(!0)) : (o.push(e), s.push(!1)) : (i.push(e), s.push(!1))
					});
					let l = null != r ? this._abiCoder.decode(o, Object(n.b)(r)) : null,
						c = this._abiCoder.decode(i, t, !0),
						u = [],
						d = 0,
						h = 0;
					e.inputs.forEach((e, t) => {
						if (e.indexed)
							if (null == l) u[t] = new le({
								_isIndexed: !0,
								hash: null
							});
							else if (s[t]) u[t] = new le({
							_isIndexed: !0,
							hash: l[h++]
						});
						else try {
							u[t] = l[h++]
						} catch (r) {
							u[t] = r
						} else try {
							u[t] = c[d++]
						} catch (r) {
							u[t] = r
						}
						if (e.name && null == u[e.name]) {
							const r = u[t];
							r instanceof Error ? Object.defineProperty(u, e.name, {
								get: () => {
									throw ue(`property ${JSON.stringify(e.name)}`, r)
								}
							}) : u[e.name] = r
						}
					});
					for (let n = 0; n < u.length; n++) {
						const e = u[n];
						e instanceof Error && Object.defineProperty(u, n, {
							get: () => {
								throw ue(`index ${n}`, e)
							}
						})
					}
					return Object.freeze(u)
				}
				parseTransaction(e) {
					let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
					return t ? new ae({
						args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)),
						functionFragment: t,
						name: t.name,
						signature: t.format(),
						sighash: this.getSighash(t),
						value: o.a.from(e.value || "0")
					}) : null
				}
				parseLog(e) {
					let t = this.getEvent(e.topics[0]);
					return !t || t.anonymous ? null : new ie({
						eventFragment: t,
						name: t.name,
						signature: t.format(),
						topic: this.getEventTopic(t),
						args: this.decodeEventLog(t, e.data, e.topics)
					})
				}
				parseError(e) {
					const t = Object(n.i)(e);
					let r = this.getError(t.substring(0, 10).toLowerCase());
					return r ? new se({
						args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
						errorFragment: r,
						name: r.name,
						signature: r.format(),
						sighash: this.getSighash(r)
					}) : null
				}
				static isInterface(e) {
					return !(!e || !e._isInterface)
				}
			}
			var he = r("./node_modules/@ethersproject/abstract-provider/lib.esm/index.js"),
				fe = r("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js"),
				me = r("./node_modules/@ethersproject/transactions/lib.esm/index.js");
			var pe = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const ge = new a.a("contracts/5.4.1"),
				be = {
					chainId: !0,
					data: !0,
					from: !0,
					gasLimit: !0,
					gasPrice: !0,
					nonce: !0,
					to: !0,
					value: !0,
					type: !0,
					accessList: !0,
					maxFeePerGas: !0,
					maxPriorityFeePerGas: !0
				};

			function ve(e, t) {
				return pe(this, void 0, void 0, (function*() {
					const r = yield t;
					try {
						return Object(d.a)(r)
					} catch (o) {}
					e || ge.throwError("a provider or signer is needed to resolve ENS names", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "resolveName"
					});
					const n = yield e.resolveName(r);
					return null == n && ge.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n
				}))
			}

			function ye(e, t, r) {
				return pe(this, void 0, void 0, (function*() {
					return Array.isArray(r) ? yield Promise.all(r.map((r, n) => ye(e, Array.isArray(t) ? t[n] : t[r.name], r))): "address" === r.type ? yield ve(e, t): "tuple" === r.type ? yield ye(e, t, r.components): "array" === r.baseType ? Array.isArray(t) ? yield Promise.all(t.map(t => ye(e, t, r.arrayChildren))): Promise.reject(new Error("invalid value for array")): t
				}))
			}

			function Ee(e, t, r) {
				return pe(this, void 0, void 0, (function*() {
					let s = {};
					r.length === t.inputs.length + 1 && "object" == typeof r[r.length - 1] && (s = Object(i.g)(r.pop())), ge.checkArgumentCount(r.length, t.inputs.length, "passed to contract"), e.signer ? s.from ? s.from = Object(i.f)({
						override: ve(e.signer, s.from),
						signer: e.signer.getAddress()
					}).then(e => pe(this, void 0, void 0, (function*() {
						return Object(d.a)(e.signer) !== e.override && ge.throwError("Contract with a Signer cannot override from", a.a.errors.UNSUPPORTED_OPERATION, {
							operation: "overrides.from"
						}), e.override
					}))) : s.from = e.signer.getAddress() : s.from && (s.from = ve(e.provider, s.from));
					const l = yield Object(i.f)({
						args: ye(e.signer || e.provider, r, t.inputs),
						address: e.resolvedAddress,
						overrides: Object(i.f)(s) || {}
					}), c = e.interface.encodeFunctionData(t, l.args), u = {
						data: c,
						to: l.address
					}, h = l.overrides;
					if (null != h.nonce && (u.nonce = o.a.from(h.nonce).toNumber()), null != h.gasLimit && (u.gasLimit = o.a.from(h.gasLimit)), null != h.gasPrice && (u.gasPrice = o.a.from(h.gasPrice)), null != h.maxFeePerGas && (u.maxFeePerGas = o.a.from(h.maxFeePerGas)), null != h.maxPriorityFeePerGas && (u.maxPriorityFeePerGas = o.a.from(h.maxPriorityFeePerGas)), null != h.from && (u.from = h.from), null != h.type && (u.type = h.type), null != h.accessList && (u.accessList = Object(me.b)(h.accessList)), null == u.gasLimit && null != t.gas) {
						let e = 21e3;
						const r = Object(n.a)(c);
						for (let t = 0; t < r.length; t++) e += 4, r[t] && (e += 64);
						u.gasLimit = o.a.from(t.gas).add(e)
					}
					if (h.value) {
						const e = o.a.from(h.value);
						e.isZero() || t.payable || ge.throwError("non-payable method cannot override value", a.a.errors.UNSUPPORTED_OPERATION, {
							operation: "overrides.value",
							value: s.value
						}), u.value = e
					}
					delete s.nonce, delete s.gasLimit, delete s.gasPrice, delete s.from, delete s.value, delete s.type, delete s.accessList, delete s.maxFeePerGas, delete s.maxPriorityFeePerGas;
					const f = Object.keys(s).filter(e => null != s[e]);
					return f.length && ge.throwError(`cannot override ${f.map(e=>JSON.stringify(e)).join(",")}`, a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "overrides",
						overrides: f
					}), u
				}))
			}

			function Ae(e, t, r) {
				const n = e.signer || e.provider;
				return function(...o) {
					return pe(this, void 0, void 0, (function*() {
						let s = void 0;
						if (o.length === t.inputs.length + 1 && "object" == typeof o[o.length - 1]) {
							const e = Object(i.g)(o.pop());
							null != e.blockTag && (s = yield e.blockTag), delete e.blockTag, o.push(e)
						}
						null != e.deployTransaction && (yield e._deployed(s));
						const l = yield Ee(e, t, o), c = yield n.call(l, s);
						try {
							let n = e.interface.decodeFunctionResult(t, c);
							return r && 1 === t.outputs.length && (n = n[0]), n
						} catch (u) {
							throw u.code === a.a.errors.CALL_EXCEPTION && (u.address = e.address, u.args = o, u.transaction = l), u
						}
					}))
				}
			}

			function Te(e, t, r) {
				return t.constant ? Ae(e, t, r) : function(e, t) {
					return function(...r) {
						return pe(this, void 0, void 0, (function*() {
							e.signer || ge.throwError("sending a transaction requires a signer", a.a.errors.UNSUPPORTED_OPERATION, {
								operation: "sendTransaction"
							}), null != e.deployTransaction && (yield e._deployed());
							const n = yield Ee(e, t, r), o = yield e.signer.sendTransaction(n), s = o.wait.bind(o);
							return o.wait = t => s(t).then(t => (t.events = t.logs.map(r => {
								let n = Object(i.c)(r),
									o = null;
								try {
									o = e.interface.parseLog(r)
								} catch (a) {}
								return o && (n.args = o.args, n.decode = (t, r) => e.interface.decodeEventLog(o.eventFragment, t, r), n.event = o.name, n.eventSignature = o.signature), n.removeListener = () => e.provider, n.getBlock = () => e.provider.getBlock(t.blockHash), n.getTransaction = () => e.provider.getTransaction(t.transactionHash), n.getTransactionReceipt = () => Promise.resolve(t), n
							}), t)), o
						}))
					}
				}(e, t)
			}

			function Se(e) {
				return !e.address || null != e.topics && 0 !== e.topics.length ? (e.address || "*") + "@" + (e.topics ? e.topics.map(e => Array.isArray(e) ? e.join("|") : e).join(":") : "") : "*"
			}
			class Oe {
				constructor(e, t) {
					Object(i.d)(this, "tag", e), Object(i.d)(this, "filter", t), this._listeners = []
				}
				addListener(e, t) {
					this._listeners.push({
						listener: e,
						once: t
					})
				}
				removeListener(e) {
					let t = !1;
					this._listeners = this._listeners.filter(r => !(!t && r.listener === e) || (t = !0, !1))
				}
				removeAllListeners() {
					this._listeners = []
				}
				listeners() {
					return this._listeners.map(e => e.listener)
				}
				listenerCount() {
					return this._listeners.length
				}
				run(e) {
					const t = this.listenerCount();
					return this._listeners = this._listeners.filter(t => {
						const r = e.slice();
						return setTimeout(() => {
							t.listener.apply(this, r)
						}, 0), !t.once
					}), t
				}
				prepareEvent(e) {}
				getEmit(e) {
					return [e]
				}
			}
			class we extends Oe {
				constructor() {
					super("error", null)
				}
			}
			class Pe extends Oe {
				constructor(e, t, r, n) {
					const o = {
						address: e
					};
					let a = t.getEventTopic(r);
					n ? (a !== n[0] && ge.throwArgumentError("topic mismatch", "topics", n), o.topics = n.slice()) : o.topics = [a], super(Se(o), o), Object(i.d)(this, "address", e), Object(i.d)(this, "interface", t), Object(i.d)(this, "fragment", r)
				}
				prepareEvent(e) {
					super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (e, t) => this.interface.decodeEventLog(this.fragment, e, t);
					try {
						e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics)
					} catch (t) {
						e.args = null, e.decodeError = t
					}
				}
				getEmit(e) {
					const t = function(e) {
						const t = [],
							r = function(e, n) {
								if (Array.isArray(n))
									for (let i in n) {
										const a = e.slice();
										a.push(i);
										try {
											r(a, n[i])
										} catch (o) {
											t.push({
												path: a,
												error: o
											})
										}
									}
							};
						return r([], e), t
					}(e.args);
					if (t.length) throw t[0].error;
					const r = (e.args || []).slice();
					return r.push(e), r
				}
			}
			class Fe extends Oe {
				constructor(e, t) {
					super("*", {
						address: e
					}), Object(i.d)(this, "address", e), Object(i.d)(this, "interface", t)
				}
				prepareEvent(e) {
					super.prepareEvent(e);
					try {
						const t = this.interface.parseLog(e);
						e.event = t.name, e.eventSignature = t.signature, e.decode = (e, r) => this.interface.decodeEventLog(t.eventFragment, e, r), e.args = t.args
					} catch (t) {}
				}
			}
			class Ce {
				constructor(e, t, r) {
					ge.checkNew(new.target, Ne), Object(i.d)(this, "interface", Object(i.e)(new.target, "getInterface")(t)), null == r ? (Object(i.d)(this, "provider", null), Object(i.d)(this, "signer", null)) : fe.a.isSigner(r) ? (Object(i.d)(this, "provider", r.provider || null), Object(i.d)(this, "signer", r)) : he.b.isProvider(r) ? (Object(i.d)(this, "provider", r), Object(i.d)(this, "signer", null)) : ge.throwArgumentError("invalid signer or provider", "signerOrProvider", r), Object(i.d)(this, "callStatic", {}), Object(i.d)(this, "estimateGas", {}), Object(i.d)(this, "functions", {}), Object(i.d)(this, "populateTransaction", {}), Object(i.d)(this, "filters", {}); {
						const e = {};
						Object.keys(this.interface.events).forEach(t => {
							const r = this.interface.events[t];
							Object(i.d)(this.filters, t, (...e) => ({
								address: this.address,
								topics: this.interface.encodeFilterTopics(r, e)
							})), e[r.name] || (e[r.name] = []), e[r.name].push(t)
						}), Object.keys(e).forEach(t => {
							const r = e[t];
							1 === r.length ? Object(i.d)(this.filters, t, this.filters[r[0]]) : ge.warn(`Duplicate definition of ${t} (${r.join(", ")})`)
						})
					}
					if (Object(i.d)(this, "_runningEvents", {}), Object(i.d)(this, "_wrappedEmits", {}), null == e && ge.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), Object(i.d)(this, "address", e), this.provider) Object(i.d)(this, "resolvedAddress", ve(this.provider, e));
					else try {
						Object(i.d)(this, "resolvedAddress", Promise.resolve(Object(d.a)(e)))
					} catch (s) {
						ge.throwError("provider is required to use ENS name as contract address", a.a.errors.UNSUPPORTED_OPERATION, {
							operation: "new Contract"
						})
					}
					const n = {},
						o = {};
					Object.keys(this.interface.functions).forEach(e => {
						const t = this.interface.functions[e];
						if (o[e]) ge.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
						else {
							o[e] = !0; {
								const r = t.name;
								n[r] || (n[r] = []), n[r].push(e)
							}
							null == this[e] && Object(i.d)(this, e, Te(this, t, !0)), null == this.functions[e] && Object(i.d)(this.functions, e, Te(this, t, !1)), null == this.callStatic[e] && Object(i.d)(this.callStatic, e, Ae(this, t, !0)), null == this.populateTransaction[e] && Object(i.d)(this.populateTransaction, e, function(e, t) {
								return function(...r) {
									return Ee(e, t, r)
								}
							}(this, t)), null == this.estimateGas[e] && Object(i.d)(this.estimateGas, e, function(e, t) {
								const r = e.signer || e.provider;
								return function(...n) {
									return pe(this, void 0, void 0, (function*() {
										r || ge.throwError("estimate require a provider or signer", a.a.errors.UNSUPPORTED_OPERATION, {
											operation: "estimateGas"
										});
										const o = yield Ee(e, t, n);
										return yield r.estimateGas(o)
									}))
								}
							}(this, t))
						}
					}), Object.keys(n).forEach(e => {
						const t = n[e];
						if (t.length > 1) return;
						const r = t[0];
						try {
							null == this[e] && Object(i.d)(this, e, this[r])
						} catch (o) {}
						null == this.functions[e] && Object(i.d)(this.functions, e, this.functions[r]), null == this.callStatic[e] && Object(i.d)(this.callStatic, e, this.callStatic[r]), null == this.populateTransaction[e] && Object(i.d)(this.populateTransaction, e, this.populateTransaction[r]), null == this.estimateGas[e] && Object(i.d)(this.estimateGas, e, this.estimateGas[r])
					})
				}
				static getContractAddress(e) {
					return Object(d.b)(e)
				}
				static getInterface(e) {
					return de.isInterface(e) ? e : new de(e)
				}
				deployed() {
					return this._deployed()
				}
				_deployed(e) {
					return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then(e => ("0x" === e && ge.throwError("contract not deployed", a.a.errors.UNSUPPORTED_OPERATION, {
						contractAddress: this.address,
						operation: "getDeployed"
					}), this))), this._deployedPromise
				}
				fallback(e) {
					this.signer || ge.throwError("sending a transactions require a signer", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "sendTransaction(fallback)"
					});
					const t = Object(i.g)(e || {});
					return ["from", "to"].forEach((function(e) {
						null != t[e] && ge.throwError("cannot override " + e, a.a.errors.UNSUPPORTED_OPERATION, {
							operation: e
						})
					})), t.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(t))
				}
				connect(e) {
					"string" == typeof e && (e = new fe.b(e, this.provider));
					const t = new this.constructor(this.address, this.interface, e);
					return this.deployTransaction && Object(i.d)(t, "deployTransaction", this.deployTransaction), t
				}
				attach(e) {
					return new this.constructor(e, this.interface, this.signer || this.provider)
				}
				static isIndexed(e) {
					return le.isIndexed(e)
				}
				_normalizeRunningEvent(e) {
					return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e
				}
				_getRunningEvent(e) {
					if ("string" == typeof e) {
						if ("error" === e) return this._normalizeRunningEvent(new we);
						if ("event" === e) return this._normalizeRunningEvent(new Oe("event", null));
						if ("*" === e) return this._normalizeRunningEvent(new Fe(this.address, this.interface));
						const t = this.interface.getEvent(e);
						return this._normalizeRunningEvent(new Pe(this.address, this.interface, t))
					}
					if (e.topics && e.topics.length > 0) {
						try {
							const t = e.topics[0];
							if ("string" != typeof t) throw new Error("invalid topic");
							const r = this.interface.getEvent(t);
							return this._normalizeRunningEvent(new Pe(this.address, this.interface, r, e.topics))
						} catch (t) {}
						const r = {
							address: this.address,
							topics: e.topics
						};
						return this._normalizeRunningEvent(new Oe(Se(r), r))
					}
					return this._normalizeRunningEvent(new Fe(this.address, this.interface))
				}
				_checkRunningEvents(e) {
					if (0 === e.listenerCount()) {
						delete this._runningEvents[e.tag];
						const t = this._wrappedEmits[e.tag];
						t && e.filter && (this.provider.off(e.filter, t), delete this._wrappedEmits[e.tag])
					}
				}
				_wrapEvent(e, t, r) {
					const n = Object(i.c)(t);
					return n.removeListener = () => {
						r && (e.removeListener(r), this._checkRunningEvents(e))
					}, n.getBlock = () => this.provider.getBlock(t.blockHash), n.getTransaction = () => this.provider.getTransaction(t.transactionHash), n.getTransactionReceipt = () => this.provider.getTransactionReceipt(t.transactionHash), e.prepareEvent(n), n
				}
				_addEventListener(e, t, r) {
					if (this.provider || ge.throwError("events require a provider or a signer with a provider", a.a.errors.UNSUPPORTED_OPERATION, {
							operation: "once"
						}), e.addListener(t, r), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
						const r = r => {
							let n = this._wrapEvent(e, r, t);
							if (null == n.decodeError) try {
								const t = e.getEmit(n);
								this.emit(e.filter, ...t)
							} catch (o) {
								n.decodeError = o.error
							}
							null != e.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n)
						};
						this._wrappedEmits[e.tag] = r, null != e.filter && this.provider.on(e.filter, r)
					}
				}
				queryFilter(e, t, r) {
					const o = this._getRunningEvent(e),
						a = Object(i.g)(o.filter);
					return "string" == typeof t && Object(n.l)(t, 32) ? (null != r && ge.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), a.blockHash = t) : (a.fromBlock = null != t ? t : 0, a.toBlock = null != r ? r : "latest"), this.provider.getLogs(a).then(e => e.map(e => this._wrapEvent(o, e, null)))
				}
				on(e, t) {
					return this._addEventListener(this._getRunningEvent(e), t, !1), this
				}
				once(e, t) {
					return this._addEventListener(this._getRunningEvent(e), t, !0), this
				}
				emit(e, ...t) {
					if (!this.provider) return !1;
					const r = this._getRunningEvent(e),
						n = r.run(t) > 0;
					return this._checkRunningEvents(r), n
				}
				listenerCount(e) {
					return this.provider ? null == e ? Object.keys(this._runningEvents).reduce((e, t) => e + this._runningEvents[t].listenerCount(), 0) : this._getRunningEvent(e).listenerCount() : 0
				}
				listeners(e) {
					if (!this.provider) return [];
					if (null == e) {
						const e = [];
						for (let t in this._runningEvents) this._runningEvents[t].listeners().forEach(t => {
							e.push(t)
						});
						return e
					}
					return this._getRunningEvent(e).listeners()
				}
				removeAllListeners(e) {
					if (!this.provider) return this;
					if (null == e) {
						for (const e in this._runningEvents) {
							const t = this._runningEvents[e];
							t.removeAllListeners(), this._checkRunningEvents(t)
						}
						return this
					}
					const t = this._getRunningEvent(e);
					return t.removeAllListeners(), this._checkRunningEvents(t), this
				}
				off(e, t) {
					if (!this.provider) return this;
					const r = this._getRunningEvent(e);
					return r.removeListener(t), this._checkRunningEvents(r), this
				}
				removeListener(e, t) {
					return this.off(e, t)
				}
			}
			class Ne extends Ce {}
			class ke {
				constructor(e, t, r) {
					let o = null;
					"0x" !== (o = "string" == typeof t ? t : Object(n.j)(t) ? Object(n.i)(t) : t && "string" == typeof t.object ? t.object : "!").substring(0, 2) && (o = "0x" + o), (!Object(n.l)(o) || o.length % 2) && ge.throwArgumentError("invalid bytecode", "bytecode", t), r && !fe.a.isSigner(r) && ge.throwArgumentError("invalid signer", "signer", r), Object(i.d)(this, "bytecode", o), Object(i.d)(this, "interface", Object(i.e)(new.target, "getInterface")(e)), Object(i.d)(this, "signer", r || null)
				}
				getDeployTransaction(...e) {
					let t = {};
					if (e.length === this.interface.deploy.inputs.length + 1 && "object" == typeof e[e.length - 1]) {
						t = Object(i.g)(e.pop());
						for (const e in t)
							if (!be[e]) throw new Error("unknown transaction override " + e)
					}
					if (["data", "from", "to"].forEach(e => {
							null != t[e] && ge.throwError("cannot override " + e, a.a.errors.UNSUPPORTED_OPERATION, {
								operation: e
							})
						}), t.value) {
						o.a.from(t.value).isZero() || this.interface.deploy.payable || ge.throwError("non-payable constructor cannot override value", a.a.errors.UNSUPPORTED_OPERATION, {
							operation: "overrides.value",
							value: t.value
						})
					}
					return ge.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor"), t.data = Object(n.i)(Object(n.b)([this.bytecode, this.interface.encodeDeploy(e)])), t
				}
				deploy(...e) {
					return pe(this, void 0, void 0, (function*() {
						let t = {};
						e.length === this.interface.deploy.inputs.length + 1 && (t = e.pop()), ge.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor");
						const r = yield ye(this.signer, e, this.interface.deploy.inputs);
						r.push(t);
						const n = this.getDeployTransaction(...r),
							o = yield this.signer.sendTransaction(n), a = Object(i.e)(this.constructor, "getContractAddress")(o), s = Object(i.e)(this.constructor, "getContract")(a, this.interface, this.signer);
						return Object(i.d)(s, "deployTransaction", o), s
					}))
				}
				attach(e) {
					return this.constructor.getContract(e, this.interface, this.signer)
				}
				connect(e) {
					return new this.constructor(this.interface, this.bytecode, e)
				}
				static fromSolidity(e, t) {
					null == e && ge.throwError("missing compiler output", a.a.errors.MISSING_ARGUMENT, {
						argument: "compilerOutput"
					}), "string" == typeof e && (e = JSON.parse(e));
					const r = e.abi;
					let n = null;
					return e.bytecode ? n = e.bytecode : e.evm && e.evm.bytecode && (n = e.evm.bytecode), new this(r, n, t)
				}
				static getInterface(e) {
					return Ne.getInterface(e)
				}
				static getContractAddress(e) {
					return Object(d.b)(e)
				}
				static getContract(e, t, r) {
					return new Ne(e, t, r)
				}
			}
		},
		"./node_modules/@ethersproject/hash/lib.esm/id.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");

			function i(e) {
				return Object(n.a)(Object(o.f)(e))
			}
		},
		"./node_modules/@ethersproject/properties/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			var o = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const i = new n.a("properties/5.4.0");

			function a(e, t, r) {
				Object.defineProperty(e, t, {
					enumerable: !0,
					value: r,
					writable: !1
				})
			}

			function s(e, t) {
				for (let r = 0; r < 32; r++) {
					if (e[t]) return e[t];
					if (!e.prototype || "object" != typeof e.prototype) break;
					e = Object.getPrototypeOf(e.prototype).constructor
				}
				return null
			}

			function l(e) {
				return o(this, void 0, void 0, (function*() {
					const t = Object.keys(e).map(t => {
						const r = e[t];
						return Promise.resolve(r).then(e => ({
							key: t,
							value: e
						}))
					});
					return (yield Promise.all(t)).reduce((e, t) => (e[t.key] = t.value, e), {})
				}))
			}

			function c(e, t) {
				e && "object" == typeof e || i.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach(r => {
					t[r] || i.throwArgumentError("invalid object key - " + r, "transaction:" + r, e)
				})
			}

			function u(e) {
				const t = {};
				for (const r in e) t[r] = e[r];
				return t
			}
			const d = {
				bigint: !0,
				boolean: !0,
				function: !0,
				number: !0,
				string: !0
			};

			function h(e) {
				if (function e(t) {
						if (null == t || d[typeof t]) return !0;
						if (Array.isArray(t) || "object" == typeof t) {
							if (!Object.isFrozen(t)) return !1;
							const r = Object.keys(t);
							for (let n = 0; n < r.length; n++)
								if (!e(t[r[n]])) return !1;
							return !0
						}
						return i.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
					}(e)) return e;
				if (Array.isArray(e)) return Object.freeze(e.map(e => f(e)));
				if ("object" == typeof e) {
					const t = {};
					for (const r in e) {
						const n = e[r];
						void 0 !== n && a(t, r, f(n))
					}
					return t
				}
				return i.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
			}

			function f(e) {
				return h(e)
			}
			class m {
				constructor(e) {
					for (const t in e) this[t] = f(e[t])
				}
			}
		},
		"./node_modules/@ethersproject/random/lib.esm/_version.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "random/5.4.0"
		},
		"./node_modules/@ethersproject/random/lib.esm/random.js": function(e, t, r) {
			"use strict";
			(function(e) {
				r.d(t, "a", (function() {
					return c
				}));
				var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
					o = r("./node_modules/@ethersproject/logger/lib.esm/index.js"),
					i = r("./node_modules/@ethersproject/random/lib.esm/_version.js");
				const a = new o.a(i.a);
				let s = null;
				try {
					if (null == (s = window)) throw new Error("try next")
				} catch (u) {
					try {
						if (null == (s = e)) throw new Error("try next")
					} catch (u) {
						s = {}
					}
				}
				let l = s.crypto || s.msCrypto;

				function c(e) {
					(e <= 0 || e > 1024 || e % 1) && a.throwArgumentError("invalid length", "length", e);
					const t = new Uint8Array(e);
					return l.getRandomValues(t), Object(n.a)(t)
				}
				l && l.getRandomValues || (a.warn("WARNING: Missing strong random number source"), l = {
					getRandomValues: function(e) {
						return a.throwError("no secure random source avaialble", o.a.errors.UNSUPPORTED_OPERATION, {
							operation: "crypto.getRandomValues"
						})
					}
				})
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/signing-key/lib.esm/elliptic.js": function(e, t, r) {
			"use strict";
			(function(e) {
				r.d(t, "a", (function() {
					return G
				}));
				var n = r("./node_modules/bn.js/lib/bn.js"),
					o = r.n(n),
					i = r("./node_modules/hash.js/lib/hash.js"),
					a = r.n(i);
				"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;

				function s(e, t, r) {
					return e(r = {
						path: t,
						exports: {},
						require: function(e, t) {
							return function() {
								throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
							}(null == t && r.path)
						}
					}, r.exports), r.exports
				}
				var l = c;

				function c(e, t) {
					if (!e) throw new Error(t || "Assertion failed")
				}
				c.equal = function(e, t, r) {
					if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
				};
				var u = s((function(e, t) {
						var r = t;

						function n(e) {
							return 1 === e.length ? "0" + e : e
						}

						function o(e) {
							for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));
							return t
						}
						r.toArray = function(e, t) {
							if (Array.isArray(e)) return e.slice();
							if (!e) return [];
							var r = [];
							if ("string" != typeof e) {
								for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
								return r
							}
							if ("hex" === t) {
								(e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
								for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
							} else
								for (n = 0; n < e.length; n++) {
									var o = e.charCodeAt(n),
										i = o >> 8,
										a = 255 & o;
									i ? r.push(i, a) : r.push(a)
								}
							return r
						}, r.zero2 = n, r.toHex = o, r.encode = function(e, t) {
							return "hex" === t ? o(e) : e
						}
					})),
					d = s((function(e, t) {
						var r = t;
						r.assert = l, r.toArray = u.toArray, r.zero2 = u.zero2, r.toHex = u.toHex, r.encode = u.encode, r.getNAF = function(e, t, r) {
							var n = new Array(Math.max(e.bitLength(), r) + 1);
							n.fill(0);
							for (var o = 1 << t + 1, i = e.clone(), a = 0; a < n.length; a++) {
								var s, l = i.andln(o - 1);
								i.isOdd() ? (s = l > (o >> 1) - 1 ? (o >> 1) - l : l, i.isubn(s)) : s = 0, n[a] = s, i.iushrn(1)
							}
							return n
						}, r.getJSF = function(e, t) {
							var r = [
								[],
								[]
							];
							e = e.clone(), t = t.clone();
							for (var n, o = 0, i = 0; e.cmpn(-o) > 0 || t.cmpn(-i) > 0;) {
								var a, s, l = e.andln(3) + o & 3,
									c = t.andln(3) + i & 3;
								3 === l && (l = -1), 3 === c && (c = -1), a = 0 == (1 & l) ? 0 : 3 !== (n = e.andln(7) + o & 7) && 5 !== n || 2 !== c ? l : -l, r[0].push(a), s = 0 == (1 & c) ? 0 : 3 !== (n = t.andln(7) + i & 7) && 5 !== n || 2 !== l ? c : -c, r[1].push(s), 2 * o === a + 1 && (o = 1 - o), 2 * i === s + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
							}
							return r
						}, r.cachedProperty = function(e, t, r) {
							var n = "_" + t;
							e.prototype[t] = function() {
								return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
							}
						}, r.parseBytes = function(e) {
							return "string" == typeof e ? r.toArray(e, "hex") : e
						}, r.intFromLE = function(e) {
							return new o.a(e, "hex", "le")
						}
					})),
					h = d.getNAF,
					f = d.getJSF,
					m = d.assert;

				function p(e, t) {
					this.type = e, this.p = new o.a(t.p, 16), this.red = t.prime ? o.a.red(t.prime) : o.a.mont(this.p), this.zero = new o.a(0).toRed(this.red), this.one = new o.a(1).toRed(this.red), this.two = new o.a(2).toRed(this.red), this.n = t.n && new o.a(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
					var r = this.n && this.p.div(this.n);
					!r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
				}
				var g = p;

				function b(e, t) {
					this.curve = e, this.type = t, this.precomputed = null
				}
				p.prototype.point = function() {
					throw new Error("Not implemented")
				}, p.prototype.validate = function() {
					throw new Error("Not implemented")
				}, p.prototype._fixedNafMul = function(e, t) {
					m(e.precomputed);
					var r = e._getDoubles(),
						n = h(t, 1, this._bitLength),
						o = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
					o /= 3;
					var i, a, s = [];
					for (i = 0; i < n.length; i += r.step) {
						a = 0;
						for (var l = i + r.step - 1; l >= i; l--) a = (a << 1) + n[l];
						s.push(a)
					}
					for (var c = this.jpoint(null, null, null), u = this.jpoint(null, null, null), d = o; d > 0; d--) {
						for (i = 0; i < s.length; i++)(a = s[i]) === d ? u = u.mixedAdd(r.points[i]) : a === -d && (u = u.mixedAdd(r.points[i].neg()));
						c = c.add(u)
					}
					return c.toP()
				}, p.prototype._wnafMul = function(e, t) {
					var r = 4,
						n = e._getNAFPoints(r);
					r = n.wnd;
					for (var o = n.points, i = h(t, r, this._bitLength), a = this.jpoint(null, null, null), s = i.length - 1; s >= 0; s--) {
						for (var l = 0; s >= 0 && 0 === i[s]; s--) l++;
						if (s >= 0 && l++, a = a.dblp(l), s < 0) break;
						var c = i[s];
						m(0 !== c), a = "affine" === e.type ? c > 0 ? a.mixedAdd(o[c - 1 >> 1]) : a.mixedAdd(o[-c - 1 >> 1].neg()) : c > 0 ? a.add(o[c - 1 >> 1]) : a.add(o[-c - 1 >> 1].neg())
					}
					return "affine" === e.type ? a.toP() : a
				}, p.prototype._wnafMulAdd = function(e, t, r, n, o) {
					var i, a, s, l = this._wnafT1,
						c = this._wnafT2,
						u = this._wnafT3,
						d = 0;
					for (i = 0; i < n; i++) {
						var m = (s = t[i])._getNAFPoints(e);
						l[i] = m.wnd, c[i] = m.points
					}
					for (i = n - 1; i >= 1; i -= 2) {
						var p = i - 1,
							g = i;
						if (1 === l[p] && 1 === l[g]) {
							var b = [t[p], null, null, t[g]];
							0 === t[p].y.cmp(t[g].y) ? (b[1] = t[p].add(t[g]), b[2] = t[p].toJ().mixedAdd(t[g].neg())) : 0 === t[p].y.cmp(t[g].y.redNeg()) ? (b[1] = t[p].toJ().mixedAdd(t[g]), b[2] = t[p].add(t[g].neg())) : (b[1] = t[p].toJ().mixedAdd(t[g]), b[2] = t[p].toJ().mixedAdd(t[g].neg()));
							var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
								y = f(r[p], r[g]);
							for (d = Math.max(y[0].length, d), u[p] = new Array(d), u[g] = new Array(d), a = 0; a < d; a++) {
								var E = 0 | y[0][a],
									A = 0 | y[1][a];
								u[p][a] = v[3 * (E + 1) + (A + 1)], u[g][a] = 0, c[p] = b
							}
						} else u[p] = h(r[p], l[p], this._bitLength), u[g] = h(r[g], l[g], this._bitLength), d = Math.max(u[p].length, d), d = Math.max(u[g].length, d)
					}
					var T = this.jpoint(null, null, null),
						S = this._wnafT4;
					for (i = d; i >= 0; i--) {
						for (var O = 0; i >= 0;) {
							var w = !0;
							for (a = 0; a < n; a++) S[a] = 0 | u[a][i], 0 !== S[a] && (w = !1);
							if (!w) break;
							O++, i--
						}
						if (i >= 0 && O++, T = T.dblp(O), i < 0) break;
						for (a = 0; a < n; a++) {
							var P = S[a];
							0 !== P && (P > 0 ? s = c[a][P - 1 >> 1] : P < 0 && (s = c[a][-P - 1 >> 1].neg()), T = "affine" === s.type ? T.mixedAdd(s) : T.add(s))
						}
					}
					for (i = 0; i < n; i++) c[i] = null;
					return o ? T : T.toP()
				}, p.BasePoint = b, b.prototype.eq = function() {
					throw new Error("Not implemented")
				}, b.prototype.validate = function() {
					return this.curve.validate(this)
				}, p.prototype.decodePoint = function(e, t) {
					e = d.toArray(e, t);
					var r = this.p.byteLength();
					if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? m(e[e.length - 1] % 2 == 0) : 7 === e[0] && m(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
					if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
					throw new Error("Unknown point format")
				}, b.prototype.encodeCompressed = function(e) {
					return this.encode(e, !0)
				}, b.prototype._encode = function(e) {
					var t = this.curve.p.byteLength(),
						r = this.getX().toArray("be", t);
					return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
				}, b.prototype.encode = function(e, t) {
					return d.encode(this._encode(t), e)
				}, b.prototype.precompute = function(e) {
					if (this.precomputed) return this;
					var t = {
						doubles: null,
						naf: null,
						beta: null
					};
					return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
				}, b.prototype._hasDoubles = function(e) {
					if (!this.precomputed) return !1;
					var t = this.precomputed.doubles;
					return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
				}, b.prototype._getDoubles = function(e, t) {
					if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
					for (var r = [this], n = this, o = 0; o < t; o += e) {
						for (var i = 0; i < e; i++) n = n.dbl();
						r.push(n)
					}
					return {
						step: e,
						points: r
					}
				}, b.prototype._getNAFPoints = function(e) {
					if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
					for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), o = 1; o < r; o++) t[o] = t[o - 1].add(n);
					return {
						wnd: e,
						points: t
					}
				}, b.prototype._getBeta = function() {
					return null
				}, b.prototype.dblp = function(e) {
					for (var t = this, r = 0; r < e; r++) t = t.dbl();
					return t
				};
				var v = s((function(e) {
						"function" == typeof Object.create ? e.exports = function(e, t) {
							t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}))
						} : e.exports = function(e, t) {
							if (t) {
								e.super_ = t;
								var r = function() {};
								r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
							}
						}
					})),
					y = d.assert;

				function E(e) {
					g.call(this, "short", e), this.a = new o.a(e.a, 16).toRed(this.red), this.b = new o.a(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
				}
				v(E, g);
				var A = E;

				function T(e, t, r, n) {
					g.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new o.a(t, 16), this.y = new o.a(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
				}

				function S(e, t, r, n) {
					g.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new o.a(0)) : (this.x = new o.a(t, 16), this.y = new o.a(r, 16), this.z = new o.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
				}
				E.prototype._getEndomorphism = function(e) {
					if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
						var t, r;
						if (e.beta) t = new o.a(e.beta, 16).toRed(this.red);
						else {
							var n = this._getEndoRoots(this.p);
							t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
						}
						if (e.lambda) r = new o.a(e.lambda, 16);
						else {
							var i = this._getEndoRoots(this.n);
							0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? r = i[0] : (r = i[1], y(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
						}
						return {
							beta: t,
							lambda: r,
							basis: e.basis ? e.basis.map((function(e) {
								return {
									a: new o.a(e.a, 16),
									b: new o.a(e.b, 16)
								}
							})) : this._getEndoBasis(r)
						}
					}
				}, E.prototype._getEndoRoots = function(e) {
					var t = e === this.p ? this.red : o.a.mont(e),
						r = new o.a(2).toRed(t).redInvm(),
						n = r.redNeg(),
						i = new o.a(3).toRed(t).redNeg().redSqrt().redMul(r);
					return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
				}, E.prototype._getEndoBasis = function(e) {
					for (var t, r, n, i, a, s, l, c, u, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, f = this.n.clone(), m = new o.a(1), p = new o.a(0), g = new o.a(0), b = new o.a(1), v = 0; 0 !== h.cmpn(0);) {
						var y = f.div(h);
						c = f.sub(y.mul(h)), u = g.sub(y.mul(m));
						var E = b.sub(y.mul(p));
						if (!n && c.cmp(d) < 0) t = l.neg(), r = m, n = c.neg(), i = u;
						else if (n && 2 == ++v) break;
						l = c, f = h, h = c, g = m, m = u, b = p, p = E
					}
					a = c.neg(), s = u;
					var A = n.sqr().add(i.sqr());
					return a.sqr().add(s.sqr()).cmp(A) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), i = i.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
						a: n,
						b: i
					}, {
						a,
						b: s
					}]
				}, E.prototype._endoSplit = function(e) {
					var t = this.endo.basis,
						r = t[0],
						n = t[1],
						o = n.b.mul(e).divRound(this.n),
						i = r.b.neg().mul(e).divRound(this.n),
						a = o.mul(r.a),
						s = i.mul(n.a),
						l = o.mul(r.b),
						c = i.mul(n.b);
					return {
						k1: e.sub(a).sub(s),
						k2: l.add(c).neg()
					}
				}, E.prototype.pointFromX = function(e, t) {
					(e = new o.a(e, 16)).red || (e = e.toRed(this.red));
					var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
						n = r.redSqrt();
					if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
					var i = n.fromRed().isOdd();
					return (t && !i || !t && i) && (n = n.redNeg()), this.point(e, n)
				}, E.prototype.validate = function(e) {
					if (e.inf) return !0;
					var t = e.x,
						r = e.y,
						n = this.a.redMul(t),
						o = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
					return 0 === r.redSqr().redISub(o).cmpn(0)
				}, E.prototype._endoWnafMulAdd = function(e, t, r) {
					for (var n = this._endoWnafT1, o = this._endoWnafT2, i = 0; i < e.length; i++) {
						var a = this._endoSplit(t[i]),
							s = e[i],
							l = s._getBeta();
						a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), l = l.neg(!0)), n[2 * i] = s, n[2 * i + 1] = l, o[2 * i] = a.k1, o[2 * i + 1] = a.k2
					}
					for (var c = this._wnafMulAdd(1, n, o, 2 * i, r), u = 0; u < 2 * i; u++) n[u] = null, o[u] = null;
					return c
				}, v(T, g.BasePoint), E.prototype.point = function(e, t, r) {
					return new T(this, e, t, r)
				}, E.prototype.pointFromJSON = function(e, t) {
					return T.fromJSON(this, e, t)
				}, T.prototype._getBeta = function() {
					if (this.curve.endo) {
						var e = this.precomputed;
						if (e && e.beta) return e.beta;
						var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
						if (e) {
							var r = this.curve,
								n = function(e) {
									return r.point(e.x.redMul(r.endo.beta), e.y)
								};
							e.beta = t, t.precomputed = {
								beta: null,
								naf: e.naf && {
									wnd: e.naf.wnd,
									points: e.naf.points.map(n)
								},
								doubles: e.doubles && {
									step: e.doubles.step,
									points: e.doubles.points.map(n)
								}
							}
						}
						return t
					}
				}, T.prototype.toJSON = function() {
					return this.precomputed ? [this.x, this.y, this.precomputed && {
						doubles: this.precomputed.doubles && {
							step: this.precomputed.doubles.step,
							points: this.precomputed.doubles.points.slice(1)
						},
						naf: this.precomputed.naf && {
							wnd: this.precomputed.naf.wnd,
							points: this.precomputed.naf.points.slice(1)
						}
					}] : [this.x, this.y]
				}, T.fromJSON = function(e, t, r) {
					"string" == typeof t && (t = JSON.parse(t));
					var n = e.point(t[0], t[1], r);
					if (!t[2]) return n;

					function o(t) {
						return e.point(t[0], t[1], r)
					}
					var i = t[2];
					return n.precomputed = {
						beta: null,
						doubles: i.doubles && {
							step: i.doubles.step,
							points: [n].concat(i.doubles.points.map(o))
						},
						naf: i.naf && {
							wnd: i.naf.wnd,
							points: [n].concat(i.naf.points.map(o))
						}
					}, n
				}, T.prototype.inspect = function() {
					return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
				}, T.prototype.isInfinity = function() {
					return this.inf
				}, T.prototype.add = function(e) {
					if (this.inf) return e;
					if (e.inf) return this;
					if (this.eq(e)) return this.dbl();
					if (this.neg().eq(e)) return this.curve.point(null, null);
					if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
					var t = this.y.redSub(e.y);
					0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
					var r = t.redSqr().redISub(this.x).redISub(e.x),
						n = t.redMul(this.x.redSub(r)).redISub(this.y);
					return this.curve.point(r, n)
				}, T.prototype.dbl = function() {
					if (this.inf) return this;
					var e = this.y.redAdd(this.y);
					if (0 === e.cmpn(0)) return this.curve.point(null, null);
					var t = this.curve.a,
						r = this.x.redSqr(),
						n = e.redInvm(),
						o = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
						i = o.redSqr().redISub(this.x.redAdd(this.x)),
						a = o.redMul(this.x.redSub(i)).redISub(this.y);
					return this.curve.point(i, a)
				}, T.prototype.getX = function() {
					return this.x.fromRed()
				}, T.prototype.getY = function() {
					return this.y.fromRed()
				}, T.prototype.mul = function(e) {
					return e = new o.a(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
				}, T.prototype.mulAdd = function(e, t, r) {
					var n = [this, t],
						o = [e, r];
					return this.curve.endo ? this.curve._endoWnafMulAdd(n, o) : this.curve._wnafMulAdd(1, n, o, 2)
				}, T.prototype.jmulAdd = function(e, t, r) {
					var n = [this, t],
						o = [e, r];
					return this.curve.endo ? this.curve._endoWnafMulAdd(n, o, !0) : this.curve._wnafMulAdd(1, n, o, 2, !0)
				}, T.prototype.eq = function(e) {
					return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
				}, T.prototype.neg = function(e) {
					if (this.inf) return this;
					var t = this.curve.point(this.x, this.y.redNeg());
					if (e && this.precomputed) {
						var r = this.precomputed,
							n = function(e) {
								return e.neg()
							};
						t.precomputed = {
							naf: r.naf && {
								wnd: r.naf.wnd,
								points: r.naf.points.map(n)
							},
							doubles: r.doubles && {
								step: r.doubles.step,
								points: r.doubles.points.map(n)
							}
						}
					}
					return t
				}, T.prototype.toJ = function() {
					return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
				}, v(S, g.BasePoint), E.prototype.jpoint = function(e, t, r) {
					return new S(this, e, t, r)
				}, S.prototype.toP = function() {
					if (this.isInfinity()) return this.curve.point(null, null);
					var e = this.z.redInvm(),
						t = e.redSqr(),
						r = this.x.redMul(t),
						n = this.y.redMul(t).redMul(e);
					return this.curve.point(r, n)
				}, S.prototype.neg = function() {
					return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
				}, S.prototype.add = function(e) {
					if (this.isInfinity()) return e;
					if (e.isInfinity()) return this;
					var t = e.z.redSqr(),
						r = this.z.redSqr(),
						n = this.x.redMul(t),
						o = e.x.redMul(r),
						i = this.y.redMul(t.redMul(e.z)),
						a = e.y.redMul(r.redMul(this.z)),
						s = n.redSub(o),
						l = i.redSub(a);
					if (0 === s.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
					var c = s.redSqr(),
						u = c.redMul(s),
						d = n.redMul(c),
						h = l.redSqr().redIAdd(u).redISub(d).redISub(d),
						f = l.redMul(d.redISub(h)).redISub(i.redMul(u)),
						m = this.z.redMul(e.z).redMul(s);
					return this.curve.jpoint(h, f, m)
				}, S.prototype.mixedAdd = function(e) {
					if (this.isInfinity()) return e.toJ();
					if (e.isInfinity()) return this;
					var t = this.z.redSqr(),
						r = this.x,
						n = e.x.redMul(t),
						o = this.y,
						i = e.y.redMul(t).redMul(this.z),
						a = r.redSub(n),
						s = o.redSub(i);
					if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
					var l = a.redSqr(),
						c = l.redMul(a),
						u = r.redMul(l),
						d = s.redSqr().redIAdd(c).redISub(u).redISub(u),
						h = s.redMul(u.redISub(d)).redISub(o.redMul(c)),
						f = this.z.redMul(a);
					return this.curve.jpoint(d, h, f)
				}, S.prototype.dblp = function(e) {
					if (0 === e) return this;
					if (this.isInfinity()) return this;
					if (!e) return this.dbl();
					var t;
					if (this.curve.zeroA || this.curve.threeA) {
						var r = this;
						for (t = 0; t < e; t++) r = r.dbl();
						return r
					}
					var n = this.curve.a,
						o = this.curve.tinv,
						i = this.x,
						a = this.y,
						s = this.z,
						l = s.redSqr().redSqr(),
						c = a.redAdd(a);
					for (t = 0; t < e; t++) {
						var u = i.redSqr(),
							d = c.redSqr(),
							h = d.redSqr(),
							f = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(l)),
							m = i.redMul(d),
							p = f.redSqr().redISub(m.redAdd(m)),
							g = m.redISub(p),
							b = f.redMul(g);
						b = b.redIAdd(b).redISub(h);
						var v = c.redMul(s);
						t + 1 < e && (l = l.redMul(h)), i = p, s = v, c = b
					}
					return this.curve.jpoint(i, c.redMul(o), s)
				}, S.prototype.dbl = function() {
					return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
				}, S.prototype._zeroDbl = function() {
					var e, t, r;
					if (this.zOne) {
						var n = this.x.redSqr(),
							o = this.y.redSqr(),
							i = o.redSqr(),
							a = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
						a = a.redIAdd(a);
						var s = n.redAdd(n).redIAdd(n),
							l = s.redSqr().redISub(a).redISub(a),
							c = i.redIAdd(i);
						c = (c = c.redIAdd(c)).redIAdd(c), e = l, t = s.redMul(a.redISub(l)).redISub(c), r = this.y.redAdd(this.y)
					} else {
						var u = this.x.redSqr(),
							d = this.y.redSqr(),
							h = d.redSqr(),
							f = this.x.redAdd(d).redSqr().redISub(u).redISub(h);
						f = f.redIAdd(f);
						var m = u.redAdd(u).redIAdd(u),
							p = m.redSqr(),
							g = h.redIAdd(h);
						g = (g = g.redIAdd(g)).redIAdd(g), e = p.redISub(f).redISub(f), t = m.redMul(f.redISub(e)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
					}
					return this.curve.jpoint(e, t, r)
				}, S.prototype._threeDbl = function() {
					var e, t, r;
					if (this.zOne) {
						var n = this.x.redSqr(),
							o = this.y.redSqr(),
							i = o.redSqr(),
							a = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
						a = a.redIAdd(a);
						var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
							l = s.redSqr().redISub(a).redISub(a);
						e = l;
						var c = i.redIAdd(i);
						c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(a.redISub(l)).redISub(c), r = this.y.redAdd(this.y)
					} else {
						var u = this.z.redSqr(),
							d = this.y.redSqr(),
							h = this.x.redMul(d),
							f = this.x.redSub(u).redMul(this.x.redAdd(u));
						f = f.redAdd(f).redIAdd(f);
						var m = h.redIAdd(h),
							p = (m = m.redIAdd(m)).redAdd(m);
						e = f.redSqr().redISub(p), r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);
						var g = d.redSqr();
						g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = f.redMul(m.redISub(e)).redISub(g)
					}
					return this.curve.jpoint(e, t, r)
				}, S.prototype._dbl = function() {
					var e = this.curve.a,
						t = this.x,
						r = this.y,
						n = this.z,
						o = n.redSqr().redSqr(),
						i = t.redSqr(),
						a = r.redSqr(),
						s = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(o)),
						l = t.redAdd(t),
						c = (l = l.redIAdd(l)).redMul(a),
						u = s.redSqr().redISub(c.redAdd(c)),
						d = c.redISub(u),
						h = a.redSqr();
					h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
					var f = s.redMul(d).redISub(h),
						m = r.redAdd(r).redMul(n);
					return this.curve.jpoint(u, f, m)
				}, S.prototype.trpl = function() {
					if (!this.curve.zeroA) return this.dbl().add(this);
					var e = this.x.redSqr(),
						t = this.y.redSqr(),
						r = this.z.redSqr(),
						n = t.redSqr(),
						o = e.redAdd(e).redIAdd(e),
						i = o.redSqr(),
						a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
						s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(i)).redSqr(),
						l = n.redIAdd(n);
					l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
					var c = o.redIAdd(a).redSqr().redISub(i).redISub(s).redISub(l),
						u = t.redMul(c);
					u = (u = u.redIAdd(u)).redIAdd(u);
					var d = this.x.redMul(s).redISub(u);
					d = (d = d.redIAdd(d)).redIAdd(d);
					var h = this.y.redMul(c.redMul(l.redISub(c)).redISub(a.redMul(s)));
					h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
					var f = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
					return this.curve.jpoint(d, h, f)
				}, S.prototype.mul = function(e, t) {
					return e = new o.a(e, t), this.curve._wnafMul(this, e)
				}, S.prototype.eq = function(e) {
					if ("affine" === e.type) return this.eq(e.toJ());
					if (this === e) return !0;
					var t = this.z.redSqr(),
						r = e.z.redSqr();
					if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
					var n = t.redMul(this.z),
						o = r.redMul(e.z);
					return 0 === this.y.redMul(o).redISub(e.y.redMul(n)).cmpn(0)
				}, S.prototype.eqXToP = function(e) {
					var t = this.z.redSqr(),
						r = e.toRed(this.curve.red).redMul(t);
					if (0 === this.x.cmp(r)) return !0;
					for (var n = e.clone(), o = this.curve.redN.redMul(t);;) {
						if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
						if (r.redIAdd(o), 0 === this.x.cmp(r)) return !0
					}
				}, S.prototype.inspect = function() {
					return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
				}, S.prototype.isInfinity = function() {
					return 0 === this.z.cmpn(0)
				};
				var O = s((function(e, t) {
						var r = t;
						r.base = g, r.short = A, r.mont = null, r.edwards = null
					})),
					w = s((function(e, t) {
						var r, n = t,
							o = d.assert;

						function i(e) {
							"short" === e.type ? this.curve = new O.short(e) : "edwards" === e.type ? this.curve = new O.edwards(e) : this.curve = new O.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, o(this.g.validate(), "Invalid curve"), o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
						}

						function s(e, t) {
							Object.defineProperty(n, e, {
								configurable: !0,
								enumerable: !0,
								get: function() {
									var r = new i(t);
									return Object.defineProperty(n, e, {
										configurable: !0,
										enumerable: !0,
										value: r
									}), r
								}
							})
						}
						n.PresetCurve = i, s("p192", {
							type: "short",
							prime: "p192",
							p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
							a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
							b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
							n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
							hash: a.a.sha256,
							gRed: !1,
							g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
						}), s("p224", {
							type: "short",
							prime: "p224",
							p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
							a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
							b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
							n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
							hash: a.a.sha256,
							gRed: !1,
							g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
						}), s("p256", {
							type: "short",
							prime: null,
							p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
							a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
							b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
							n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
							hash: a.a.sha256,
							gRed: !1,
							g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
						}), s("p384", {
							type: "short",
							prime: null,
							p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
							a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
							b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
							n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
							hash: a.a.sha384,
							gRed: !1,
							g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
						}), s("p521", {
							type: "short",
							prime: null,
							p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
							a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
							b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
							n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
							hash: a.a.sha512,
							gRed: !1,
							g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
						}), s("curve25519", {
							type: "mont",
							prime: "p25519",
							p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
							a: "76d06",
							b: "1",
							n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
							hash: a.a.sha256,
							gRed: !1,
							g: ["9"]
						}), s("ed25519", {
							type: "edwards",
							prime: "p25519",
							p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
							a: "-1",
							c: "1",
							d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
							n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
							hash: a.a.sha256,
							gRed: !1,
							g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
						});
						try {
							r = null.crash()
						} catch (l) {
							r = void 0
						}
						s("secp256k1", {
							type: "short",
							prime: "k256",
							p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
							a: "0",
							b: "7",
							n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
							h: "1",
							hash: a.a.sha256,
							beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
							lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
							basis: [{
								a: "3086d221a7d46bcde86c90e49284eb15",
								b: "-e4437ed6010e88286f547fa90abfe4c3"
							}, {
								a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
								b: "3086d221a7d46bcde86c90e49284eb15"
							}],
							gRed: !1,
							g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
						})
					}));

				function P(e) {
					if (!(this instanceof P)) return new P(e);
					this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
					var t = u.toArray(e.entropy, e.entropyEnc || "hex"),
						r = u.toArray(e.nonce, e.nonceEnc || "hex"),
						n = u.toArray(e.pers, e.persEnc || "hex");
					l(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
				}
				var F = P;
				P.prototype._init = function(e, t, r) {
					var n = e.concat(t).concat(r);
					this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
					for (var o = 0; o < this.V.length; o++) this.K[o] = 0, this.V[o] = 1;
					this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
				}, P.prototype._hmac = function() {
					return new a.a.hmac(this.hash, this.K)
				}, P.prototype._update = function(e) {
					var t = this._hmac().update(this.V).update([0]);
					e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
				}, P.prototype.reseed = function(e, t, r, n) {
					"string" != typeof t && (n = r, r = t, t = null), e = u.toArray(e, t), r = u.toArray(r, n), l(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
				}, P.prototype.generate = function(e, t, r, n) {
					if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
					"string" != typeof t && (n = r, r = t, t = null), r && (r = u.toArray(r, n || "hex"), this._update(r));
					for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
					var i = o.slice(0, e);
					return this._update(r), this._reseed++, u.encode(i, t)
				};
				var C = d.assert;

				function N(e, t) {
					this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
				}
				var k = N;
				N.fromPublic = function(e, t, r) {
					return t instanceof N ? t : new N(e, {
						pub: t,
						pubEnc: r
					})
				}, N.fromPrivate = function(e, t, r) {
					return t instanceof N ? t : new N(e, {
						priv: t,
						privEnc: r
					})
				}, N.prototype.validate = function() {
					var e = this.getPublic();
					return e.isInfinity() ? {
						result: !1,
						reason: "Invalid public key"
					} : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
						result: !0,
						reason: null
					} : {
						result: !1,
						reason: "Public key * N != O"
					} : {
						result: !1,
						reason: "Public key is not a point"
					}
				}, N.prototype.getPublic = function(e, t) {
					return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
				}, N.prototype.getPrivate = function(e) {
					return "hex" === e ? this.priv.toString(16, 2) : this.priv
				}, N.prototype._importPrivate = function(e, t) {
					this.priv = new o.a(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
				}, N.prototype._importPublic = function(e, t) {
					if (e.x || e.y) return "mont" === this.ec.curve.type ? C(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || C(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
					this.pub = this.ec.curve.decodePoint(e, t)
				}, N.prototype.derive = function(e) {
					return e.validate() || C(e.validate(), "public point not validated"), e.mul(this.priv).getX()
				}, N.prototype.sign = function(e, t, r) {
					return this.ec.sign(e, this, t, r)
				}, N.prototype.verify = function(e, t) {
					return this.ec.verify(e, t, this)
				}, N.prototype.inspect = function() {
					return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
				};
				var R = d.assert;

				function L(e, t) {
					if (e instanceof L) return e;
					this._importDER(e, t) || (R(e.r && e.s, "Signature without r or s"), this.r = new o.a(e.r, 16), this.s = new o.a(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
				}
				var M = L;

				function B() {
					this.place = 0
				}

				function J(e, t) {
					var r = e[t.place++];
					if (!(128 & r)) return r;
					var n = 15 & r;
					if (0 === n || n > 4) return !1;
					for (var o = 0, i = 0, a = t.place; i < n; i++, a++) o <<= 8, o |= e[a], o >>>= 0;
					return !(o <= 127) && (t.place = a, o)
				}

				function j(e) {
					for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
					return 0 === t ? e : e.slice(t)
				}

				function _(e, t) {
					if (t < 128) e.push(t);
					else {
						var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
						for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
						e.push(t)
					}
				}
				L.prototype._importDER = function(e, t) {
					e = d.toArray(e, t);
					var r = new B;
					if (48 !== e[r.place++]) return !1;
					var n = J(e, r);
					if (!1 === n) return !1;
					if (n + r.place !== e.length) return !1;
					if (2 !== e[r.place++]) return !1;
					var i = J(e, r);
					if (!1 === i) return !1;
					var a = e.slice(r.place, i + r.place);
					if (r.place += i, 2 !== e[r.place++]) return !1;
					var s = J(e, r);
					if (!1 === s) return !1;
					if (e.length !== s + r.place) return !1;
					var l = e.slice(r.place, s + r.place);
					if (0 === a[0]) {
						if (!(128 & a[1])) return !1;
						a = a.slice(1)
					}
					if (0 === l[0]) {
						if (!(128 & l[1])) return !1;
						l = l.slice(1)
					}
					return this.r = new o.a(a), this.s = new o.a(l), this.recoveryParam = null, !0
				}, L.prototype.toDER = function(e) {
					var t = this.r.toArray(),
						r = this.s.toArray();
					for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = j(t), r = j(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
					var n = [2];
					_(n, t.length), (n = n.concat(t)).push(2), _(n, r.length);
					var o = n.concat(r),
						i = [48];
					return _(i, o.length), i = i.concat(o), d.encode(i, e)
				};
				var D = function() {
						throw new Error("unsupported")
					},
					I = d.assert;

				function x(e) {
					if (!(this instanceof x)) return new x(e);
					"string" == typeof e && (I(Object.prototype.hasOwnProperty.call(w, e), "Unknown curve " + e), e = w[e]), e instanceof w.PresetCurve && (e = {
						curve: e
					}), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
				}
				var U = x;
				x.prototype.keyPair = function(e) {
					return new k(this, e)
				}, x.prototype.keyFromPrivate = function(e, t) {
					return k.fromPrivate(this, e, t)
				}, x.prototype.keyFromPublic = function(e, t) {
					return k.fromPublic(this, e, t)
				}, x.prototype.genKeyPair = function(e) {
					e || (e = {});
					for (var t = new F({
							hash: this.hash,
							pers: e.pers,
							persEnc: e.persEnc || "utf8",
							entropy: e.entropy || D(this.hash.hmacStrength),
							entropyEnc: e.entropy && e.entropyEnc || "utf8",
							nonce: this.n.toArray()
						}), r = this.n.byteLength(), n = this.n.sub(new o.a(2));;) {
						var i = new o.a(t.generate(r));
						if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i)
					}
				}, x.prototype._truncateToN = function(e, t) {
					var r = 8 * e.byteLength() - this.n.bitLength();
					return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
				}, x.prototype.sign = function(e, t, r, n) {
					"object" == typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new o.a(e, 16));
					for (var i = this.n.byteLength(), a = t.getPrivate().toArray("be", i), s = e.toArray("be", i), l = new F({
							hash: this.hash,
							entropy: a,
							nonce: s,
							pers: n.pers,
							persEnc: n.persEnc || "utf8"
						}), c = this.n.sub(new o.a(1)), u = 0;; u++) {
						var d = n.k ? n.k(u) : new o.a(l.generate(this.n.byteLength()));
						if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || d.cmp(c) >= 0)) {
							var h = this.g.mul(d);
							if (!h.isInfinity()) {
								var f = h.getX(),
									m = f.umod(this.n);
								if (0 !== m.cmpn(0)) {
									var p = d.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
									if (0 !== (p = p.umod(this.n)).cmpn(0)) {
										var g = (h.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(m) ? 2 : 0);
										return n.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), g ^= 1), new M({
											r: m,
											s: p,
											recoveryParam: g
										})
									}
								}
							}
						}
					}
				}, x.prototype.verify = function(e, t, r, n) {
					e = this._truncateToN(new o.a(e, 16)), r = this.keyFromPublic(r, n);
					var i = (t = new M(t, "hex")).r,
						a = t.s;
					if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
					if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
					var s, l = a.invm(this.n),
						c = l.mul(e).umod(this.n),
						u = l.mul(i).umod(this.n);
					return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), u)).isInfinity() && s.eqXToP(i) : !(s = this.g.mulAdd(c, r.getPublic(), u)).isInfinity() && 0 === s.getX().umod(this.n).cmp(i)
				}, x.prototype.recoverPubKey = function(e, t, r, n) {
					I((3 & r) === r, "The recovery param is more than two bits"), t = new M(t, n);
					var i = this.n,
						a = new o.a(e),
						s = t.r,
						l = t.s,
						c = 1 & r,
						u = r >> 1;
					if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
					s = u ? this.curve.pointFromX(s.add(this.curve.n), c) : this.curve.pointFromX(s, c);
					var d = t.r.invm(i),
						h = i.sub(a).mul(d).umod(i),
						f = l.mul(d).umod(i);
					return this.g.mulAdd(h, s, f)
				}, x.prototype.getKeyRecoveryParam = function(e, t, r, n) {
					if (null !== (t = new M(t, n)).recoveryParam) return t.recoveryParam;
					for (var o = 0; o < 4; o++) {
						var i;
						try {
							i = this.recoverPubKey(e, t, o)
						} catch (e) {
							continue
						}
						if (i.eq(r)) return o
					}
					throw new Error("Unable to find valid recovery factor")
				};
				var G = s((function(e, t) {
					var r = t;
					r.version = "6.5.4", r.utils = d, r.rand = function() {
						throw new Error("unsupported")
					}, r.curve = O, r.curves = w, r.ec = U, r.eddsa = null
				})).ec
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/signing-key/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/@ethersproject/signing-key/lib.esm/elliptic.js"),
				o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
			const a = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("signing-key/5.4.0");
			let s = null;

			function l() {
				return s || (s = new n.a("secp256k1")), s
			}
			class c {
				constructor(e) {
					Object(i.d)(this, "curve", "secp256k1"), Object(i.d)(this, "privateKey", Object(o.i)(e));
					const t = l().keyFromPrivate(Object(o.a)(this.privateKey));
					Object(i.d)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), Object(i.d)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), Object(i.d)(this, "_isSigningKey", !0)
				}
				_addPoint(e) {
					const t = l().keyFromPublic(Object(o.a)(this.publicKey)),
						r = l().keyFromPublic(Object(o.a)(e));
					return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
				}
				signDigest(e) {
					const t = l().keyFromPrivate(Object(o.a)(this.privateKey)),
						r = Object(o.a)(e);
					32 !== r.length && a.throwArgumentError("bad digest length", "digest", e);
					const n = t.sign(r, {
						canonical: !0
					});
					return Object(o.n)({
						recoveryParam: n.recoveryParam,
						r: Object(o.h)("0x" + n.r.toString(16), 32),
						s: Object(o.h)("0x" + n.s.toString(16), 32)
					})
				}
				computeSharedSecret(e) {
					const t = l().keyFromPrivate(Object(o.a)(this.privateKey)),
						r = l().keyFromPublic(Object(o.a)(d(e)));
					return Object(o.h)("0x" + t.derive(r.getPublic()).toString(16), 32)
				}
				static isSigningKey(e) {
					return !(!e || !e._isSigningKey)
				}
			}

			function u(e, t) {
				const r = Object(o.n)(t),
					n = {
						r: Object(o.a)(r.r),
						s: Object(o.a)(r.s)
					};
				return "0x" + l().recoverPubKey(Object(o.a)(e), n, r.recoveryParam).encode("hex", !1)
			}

			function d(e, t) {
				const r = Object(o.a)(e);
				if (32 === r.length) {
					const e = new c(r);
					return t ? "0x" + l().keyFromPrivate(r).getPublic(!0, "hex") : e.publicKey
				}
				return 33 === r.length ? t ? Object(o.i)(r) : "0x" + l().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + l().keyFromPublic(r).getPublic(!0, "hex") : Object(o.i)(r) : a.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
			}
		},
		"./node_modules/@ethersproject/strings/lib.esm/utf8.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
			const o = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("strings/5.4.0");
			var i, a;

			function s(e, t, r, n, o) {
				if (e === a.BAD_PREFIX || e === a.UNEXPECTED_CONTINUE) {
					let e = 0;
					for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
					return e
				}
				return e === a.OVERRUN ? r.length - t - 1 : 0
			}! function(e) {
				e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD"
			}(i || (i = {})),
			function(e) {
				e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation"
			}(a || (a = {}));
			const l = Object.freeze({
				error: function(e, t, r, n, i) {
					return o.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r)
				},
				ignore: s,
				replace: function(e, t, r, n, o) {
					return e === a.OVERLONG ? (n.push(o), 0) : (n.push(65533), s(e, t, r))
				}
			});

			function c(e, t) {
				null == t && (t = l.error), e = Object(n.a)(e);
				const r = [];
				let o = 0;
				for (; o < e.length;) {
					const n = e[o++];
					if (n >> 7 == 0) {
						r.push(n);
						continue
					}
					let i = null,
						s = null;
					if (192 == (224 & n)) i = 1, s = 127;
					else if (224 == (240 & n)) i = 2, s = 2047;
					else {
						if (240 != (248 & n)) {
							o += t(128 == (192 & n) ? a.UNEXPECTED_CONTINUE : a.BAD_PREFIX, o - 1, e, r);
							continue
						}
						i = 3, s = 65535
					}
					if (o - 1 + i >= e.length) {
						o += t(a.OVERRUN, o - 1, e, r);
						continue
					}
					let l = n & (1 << 8 - i - 1) - 1;
					for (let c = 0; c < i; c++) {
						let n = e[o];
						if (128 != (192 & n)) {
							o += t(a.MISSING_CONTINUE, o, e, r), l = null;
							break
						}
						l = l << 6 | 63 & n, o++
					}
					null !== l && (l > 1114111 ? o += t(a.OUT_OF_RANGE, o - 1 - i, e, r, l) : l >= 55296 && l <= 57343 ? o += t(a.UTF16_SURROGATE, o - 1 - i, e, r, l) : l <= s ? o += t(a.OVERLONG, o - 1 - i, e, r, l) : r.push(l))
				}
				return r
			}

			function u(e, t = i.current) {
				t != i.current && (o.checkNormalize(), e = e.normalize(t));
				let r = [];
				for (let n = 0; n < e.length; n++) {
					const t = e.charCodeAt(n);
					if (t < 128) r.push(t);
					else if (t < 2048) r.push(t >> 6 | 192), r.push(63 & t | 128);
					else if (55296 == (64512 & t)) {
						n++;
						const o = e.charCodeAt(n);
						if (n >= e.length || 56320 != (64512 & o)) throw new Error("invalid utf-8 string");
						const i = 65536 + ((1023 & t) << 10) + (1023 & o);
						r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(63 & i | 128)
					} else r.push(t >> 12 | 224), r.push(t >> 6 & 63 | 128), r.push(63 & t | 128)
				}
				return Object(n.a)(r)
			}

			function d(e) {
				const t = "0000" + e.toString(16);
				return "\\u" + t.substring(t.length - 4)
			}

			function h(e, t) {
				return '"' + c(e, t).map(e => {
					if (e < 256) {
						switch (e) {
							case 8:
								return "\\b";
							case 9:
								return "\\t";
							case 10:
								return "\\n";
							case 13:
								return "\\r";
							case 34:
								return '\\"';
							case 92:
								return "\\\\"
						}
						if (e >= 32 && e < 127) return String.fromCharCode(e)
					}
					return e <= 65535 ? d(e) : d(55296 + ((e -= 65536) >> 10 & 1023)) + d(56320 + (1023 & e))
				}).join("") + '"'
			}

			function f(e) {
				return e.map(e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10 & 1023), 56320 + (1023 & e)))).join("")
			}

			function m(e, t) {
				return f(c(e, t))
			}

			function p(e, t = i.current) {
				return c(u(e, t))
			}
		},
		"./node_modules/@ethersproject/transactions/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "d", (function() {
				return C
			}));
			var n = r("./node_modules/@ethersproject/address/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js"),
				s = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				l = r("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				c = r("./node_modules/@ethersproject/rlp/lib.esm/index.js"),
				u = r("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				d = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const h = new d.a("transactions/5.4.0");
			var f;

			function m(e) {
				return "0x" === e ? null : Object(n.a)(e)
			}

			function p(e) {
				return "0x" === e ? a.h : o.a.from(e)
			}! function(e) {
				e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559"
			}(f || (f = {}));
			const g = [{
					name: "nonce",
					maxLength: 32,
					numeric: !0
				}, {
					name: "gasPrice",
					maxLength: 32,
					numeric: !0
				}, {
					name: "gasLimit",
					maxLength: 32,
					numeric: !0
				}, {
					name: "to",
					length: 20
				}, {
					name: "value",
					maxLength: 32,
					numeric: !0
				}, {
					name: "data"
				}],
				b = {
					chainId: !0,
					data: !0,
					gasLimit: !0,
					gasPrice: !0,
					nonce: !0,
					to: !0,
					type: !0,
					value: !0
				};

			function v(e) {
				const t = Object(u.b)(e);
				return Object(n.a)(Object(i.e)(Object(s.a)(Object(i.e)(t, 1)), 12))
			}

			function y(e, t) {
				return v(Object(u.c)(Object(i.a)(e), t))
			}

			function E(e, t) {
				const r = Object(i.o)(o.a.from(e).toHexString());
				return r.length > 32 && h.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r
			}

			function A(e, t) {
				return {
					address: Object(n.a)(e),
					storageKeys: (t || []).map((t, r) => (32 !== Object(i.d)(t) && h.throwArgumentError("invalid access list storageKey", `accessList[${e}:${r}]`, t), t.toLowerCase()))
				}
			}

			function T(e) {
				if (Array.isArray(e)) return e.map((e, t) => Array.isArray(e) ? (e.length > 2 && h.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e), A(e[0], e[1])) : A(e.address, e.storageKeys));
				const t = Object.keys(e).map(t => {
					const r = e[t].reduce((e, t) => (e[t] = !0, e), {});
					return A(t, Object.keys(r).sort())
				});
				return t.sort((e, t) => e.address.localeCompare(t.address)), t
			}

			function S(e) {
				return T(e).map(e => [e.address, e.storageKeys])
			}

			function O(e, t) {
				if (null != e.gasPrice) {
					const t = o.a.from(e.gasPrice),
						r = o.a.from(e.maxFeePerGas || 0);
					t.eq(r) || h.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
						gasPrice: t,
						maxFeePerGas: r
					})
				}
				const r = [E(e.chainId || 0, "chainId"), E(e.nonce || 0, "nonce"), E(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), E(e.maxFeePerGas || 0, "maxFeePerGas"), E(e.gasLimit || 0, "gasLimit"), null != e.to ? Object(n.a)(e.to) : "0x", E(e.value || 0, "value"), e.data || "0x", S(e.accessList || [])];
				if (t) {
					const e = Object(i.n)(t);
					r.push(E(e.recoveryParam, "recoveryParam")), r.push(Object(i.o)(e.r)), r.push(Object(i.o)(e.s))
				}
				return Object(i.c)(["0x02", c.encode(r)])
			}

			function w(e, t) {
				const r = [E(e.chainId || 0, "chainId"), E(e.nonce || 0, "nonce"), E(e.gasPrice || 0, "gasPrice"), E(e.gasLimit || 0, "gasLimit"), null != e.to ? Object(n.a)(e.to) : "0x", E(e.value || 0, "value"), e.data || "0x", S(e.accessList || [])];
				if (t) {
					const e = Object(i.n)(t);
					r.push(E(e.recoveryParam, "recoveryParam")), r.push(Object(i.o)(e.r)), r.push(Object(i.o)(e.s))
				}
				return Object(i.c)(["0x01", c.encode(r)])
			}

			function P(e, t) {
				if (null == e.type || 0 === e.type) return null != e.accessList && h.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
					function(e, t) {
						Object(l.b)(e, b);
						const r = [];
						g.forEach((function(t) {
							let n = e[t.name] || [];
							const o = {};
							t.numeric && (o.hexPad = "left"), n = Object(i.a)(Object(i.i)(n, o)), t.length && n.length !== t.length && n.length > 0 && h.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), t.maxLength && (n = Object(i.o)(n)).length > t.maxLength && h.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), r.push(Object(i.i)(n))
						}));
						let n = 0;
						if (null != e.chainId ? "number" != typeof(n = e.chainId) && h.throwArgumentError("invalid transaction.chainId", "transaction", e) : t && !Object(i.k)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)), 0 !== n && (r.push(Object(i.i)(n)), r.push("0x"), r.push("0x")), !t) return c.encode(r);
						const o = Object(i.n)(t);
						let a = 27 + o.recoveryParam;
						return 0 !== n ? (r.pop(), r.pop(), r.pop(), a += 2 * n + 8, o.v > 28 && o.v !== a && h.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : o.v !== a && h.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t), r.push(Object(i.i)(a)), r.push(Object(i.o)(Object(i.a)(o.r))), r.push(Object(i.o)(Object(i.a)(o.s))), c.encode(r)
					}(e, t);
				switch (e.type) {
					case 1:
						return w(e, t);
					case 2:
						return O(e, t)
				}
				return h.throwError(`unsupported transaction type: ${e.type}`, d.a.errors.UNSUPPORTED_OPERATION, {
					operation: "serializeTransaction",
					transactionType: e.type
				})
			}

			function F(e, t, r) {
				try {
					const r = p(t[0]).toNumber();
					if (0 !== r && 1 !== r) throw new Error("bad recid");
					e.v = r
				} catch (n) {
					h.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
				}
				e.r = Object(i.h)(t[1], 32), e.s = Object(i.h)(t[2], 32);
				try {
					const t = Object(s.a)(r(e));
					e.from = y(t, {
						r: e.r,
						s: e.s,
						recoveryParam: e.v
					})
				} catch (n) {
					console.log(n)
				}
			}

			function C(e) {
				const t = Object(i.a)(e);
				if (t[0] > 127) return function(e) {
					const t = c.decode(e);
					9 !== t.length && 6 !== t.length && h.throwArgumentError("invalid raw transaction", "rawTransaction", e);
					const r = {
						nonce: p(t[0]).toNumber(),
						gasPrice: p(t[1]),
						gasLimit: p(t[2]),
						to: m(t[3]),
						value: p(t[4]),
						data: t[5],
						chainId: 0
					};
					if (6 === t.length) return r;
					try {
						r.v = o.a.from(t[6]).toNumber()
					} catch (n) {
						return console.log(n), r
					}
					if (r.r = Object(i.h)(t[7], 32), r.s = Object(i.h)(t[8], 32), o.a.from(r.r).isZero() && o.a.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
					else {
						r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
						let o = r.v - 27;
						const a = t.slice(0, 6);
						0 !== r.chainId && (a.push(Object(i.i)(r.chainId)), a.push("0x"), a.push("0x"), o -= 2 * r.chainId + 8);
						const l = Object(s.a)(c.encode(a));
						try {
							r.from = y(l, {
								r: Object(i.i)(r.r),
								s: Object(i.i)(r.s),
								recoveryParam: o
							})
						} catch (n) {
							console.log(n)
						}
						r.hash = Object(s.a)(e)
					}
					return r.type = null, r
				}(t);
				switch (t[0]) {
					case 1:
						return function(e) {
							const t = c.decode(e.slice(1));
							8 !== t.length && 11 !== t.length && h.throwArgumentError("invalid component count for transaction type: 1", "payload", Object(i.i)(e));
							const r = {
								type: 1,
								chainId: p(t[0]).toNumber(),
								nonce: p(t[1]).toNumber(),
								gasPrice: p(t[2]),
								gasLimit: p(t[3]),
								to: m(t[4]),
								value: p(t[5]),
								data: t[6],
								accessList: T(t[7])
							};
							return 8 === t.length ? r : (r.hash = Object(s.a)(e), F(r, t.slice(8), w), r)
						}(t);
					case 2:
						return function(e) {
							const t = c.decode(e.slice(1));
							9 !== t.length && 12 !== t.length && h.throwArgumentError("invalid component count for transaction type: 2", "payload", Object(i.i)(e));
							const r = p(t[2]),
								n = p(t[3]),
								o = {
									type: 2,
									chainId: p(t[0]).toNumber(),
									nonce: p(t[1]).toNumber(),
									maxPriorityFeePerGas: r,
									maxFeePerGas: n,
									gasPrice: null,
									gasLimit: p(t[4]),
									to: m(t[5]),
									value: p(t[6]),
									data: t[7],
									accessList: T(t[8])
								};
							return 9 === t.length ? o : (o.hash = Object(s.a)(e), F(o, t.slice(9), O), o)
						}(t)
				}
				return h.throwError(`unsupported transaction type: ${t[0]}`, d.a.errors.UNSUPPORTED_OPERATION, {
					operation: "parseTransaction",
					transactionType: t[0]
				})
			}
		},
		"./node_modules/aes-js/index.js": function(e, t, r) {
			"use strict";
			! function(t) {
				function r(e) {
					return parseInt(e) === e
				}

				function n(e) {
					if (!r(e.length)) return !1;
					for (var t = 0; t < e.length; t++)
						if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
					return !0
				}

				function o(e, t) {
					if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
					if (Array.isArray(e)) {
						if (!n(e)) throw new Error("Array contains invalid value: " + e);
						return new Uint8Array(e)
					}
					if (r(e.length) && n(e)) return new Uint8Array(e);
					throw new Error("unsupported array-like object")
				}

				function i(e) {
					return new Uint8Array(e)
				}

				function a(e, t, r, n, o) {
					null == n && null == o || (e = e.slice ? e.slice(n, o) : Array.prototype.slice.call(e, n, o)), t.set(e, r)
				}
				var s, l = {
						toBytes: function(e) {
							var t = [],
								r = 0;
							for (e = encodeURI(e); r < e.length;) {
								var n = e.charCodeAt(r++);
								37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n)
							}
							return o(t)
						},
						fromBytes: function(e) {
							for (var t = [], r = 0; r < e.length;) {
								var n = e[r];
								n < 128 ? (t.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
							}
							return t.join("")
						}
					},
					c = (s = "0123456789abcdef", {
						toBytes: function(e) {
							for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
							return t
						},
						fromBytes: function(e) {
							for (var t = [], r = 0; r < e.length; r++) {
								var n = e[r];
								t.push(s[(240 & n) >> 4] + s[15 & n])
							}
							return t.join("")
						}
					}),
					u = {
						16: 10,
						24: 12,
						32: 14
					},
					d = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
					h = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
					f = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
					m = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
					p = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
					g = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
					b = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
					v = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
					y = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
					E = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
					A = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
					T = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
					S = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
					O = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
					w = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

				function P(e) {
					for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
					return t
				}
				var F = function(e) {
					if (!(this instanceof F)) throw Error("AES must be instanitated with `new`");
					Object.defineProperty(this, "key", {
						value: o(e, !0)
					}), this._prepare()
				};
				F.prototype._prepare = function() {
					var e = u[this.key.length];
					if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
					this._Ke = [], this._Kd = [];
					for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
					var r, n = 4 * (e + 1),
						o = this.key.length / 4,
						i = P(this.key);
					for (t = 0; t < o; t++) r = t >> 2, this._Ke[r][t % 4] = i[t], this._Kd[e - r][t % 4] = i[t];
					for (var a, s = 0, l = o; l < n;) {
						if (a = i[o - 1], i[0] ^= h[a >> 16 & 255] << 24 ^ h[a >> 8 & 255] << 16 ^ h[255 & a] << 8 ^ h[a >> 24 & 255] ^ d[s] << 24, s += 1, 8 != o)
							for (t = 1; t < o; t++) i[t] ^= i[t - 1];
						else {
							for (t = 1; t < o / 2; t++) i[t] ^= i[t - 1];
							a = i[o / 2 - 1], i[o / 2] ^= h[255 & a] ^ h[a >> 8 & 255] << 8 ^ h[a >> 16 & 255] << 16 ^ h[a >> 24 & 255] << 24;
							for (t = o / 2 + 1; t < o; t++) i[t] ^= i[t - 1]
						}
						for (t = 0; t < o && l < n;) c = l >> 2, f = l % 4, this._Ke[c][f] = i[t], this._Kd[e - c][f] = i[t++], l++
					}
					for (var c = 1; c < e; c++)
						for (var f = 0; f < 4; f++) a = this._Kd[c][f], this._Kd[c][f] = T[a >> 24 & 255] ^ S[a >> 16 & 255] ^ O[a >> 8 & 255] ^ w[255 & a]
				}, F.prototype.encrypt = function(e) {
					if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
					for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = P(e), o = 0; o < 4; o++) n[o] ^= this._Ke[0][o];
					for (var a = 1; a < t; a++) {
						for (o = 0; o < 4; o++) r[o] = m[n[o] >> 24 & 255] ^ p[n[(o + 1) % 4] >> 16 & 255] ^ g[n[(o + 2) % 4] >> 8 & 255] ^ b[255 & n[(o + 3) % 4]] ^ this._Ke[a][o];
						n = r.slice()
					}
					var s, l = i(16);
					for (o = 0; o < 4; o++) s = this._Ke[t][o], l[4 * o] = 255 & (h[n[o] >> 24 & 255] ^ s >> 24), l[4 * o + 1] = 255 & (h[n[(o + 1) % 4] >> 16 & 255] ^ s >> 16), l[4 * o + 2] = 255 & (h[n[(o + 2) % 4] >> 8 & 255] ^ s >> 8), l[4 * o + 3] = 255 & (h[255 & n[(o + 3) % 4]] ^ s);
					return l
				}, F.prototype.decrypt = function(e) {
					if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
					for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = P(e), o = 0; o < 4; o++) n[o] ^= this._Kd[0][o];
					for (var a = 1; a < t; a++) {
						for (o = 0; o < 4; o++) r[o] = v[n[o] >> 24 & 255] ^ y[n[(o + 3) % 4] >> 16 & 255] ^ E[n[(o + 2) % 4] >> 8 & 255] ^ A[255 & n[(o + 1) % 4]] ^ this._Kd[a][o];
						n = r.slice()
					}
					var s, l = i(16);
					for (o = 0; o < 4; o++) s = this._Kd[t][o], l[4 * o] = 255 & (f[n[o] >> 24 & 255] ^ s >> 24), l[4 * o + 1] = 255 & (f[n[(o + 3) % 4] >> 16 & 255] ^ s >> 16), l[4 * o + 2] = 255 & (f[n[(o + 2) % 4] >> 8 & 255] ^ s >> 8), l[4 * o + 3] = 255 & (f[255 & n[(o + 1) % 4]] ^ s);
					return l
				};
				var C = function(e) {
					if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
					this.description = "Electronic Code Block", this.name = "ecb", this._aes = new F(e)
				};
				C.prototype.encrypt = function(e) {
					if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
					for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) a(e, r, 0, n, n + 16), a(r = this._aes.encrypt(r), t, n);
					return t
				}, C.prototype.decrypt = function(e) {
					if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
					for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) a(e, r, 0, n, n + 16), a(r = this._aes.decrypt(r), t, n);
					return t
				};
				var N = function(e, t) {
					if (!(this instanceof N)) throw Error("AES must be instanitated with `new`");
					if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
						if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
					} else t = i(16);
					this._lastCipherblock = o(t, !0), this._aes = new F(e)
				};
				N.prototype.encrypt = function(e) {
					if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
					for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) {
						a(e, r, 0, n, n + 16);
						for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
						this._lastCipherblock = this._aes.encrypt(r), a(this._lastCipherblock, t, n)
					}
					return t
				}, N.prototype.decrypt = function(e) {
					if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
					for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) {
						a(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
						for (var s = 0; s < 16; s++) t[n + s] = r[s] ^ this._lastCipherblock[s];
						a(e, this._lastCipherblock, 0, n, n + 16)
					}
					return t
				};
				var k = function(e, t, r) {
					if (!(this instanceof k)) throw Error("AES must be instanitated with `new`");
					if (this.description = "Cipher Feedback", this.name = "cfb", t) {
						if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)")
					} else t = i(16);
					r || (r = 1), this.segmentSize = r, this._shiftRegister = o(t, !0), this._aes = new F(e)
				};
				k.prototype.encrypt = function(e) {
					if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
					for (var t, r = o(e, !0), n = 0; n < r.length; n += this.segmentSize) {
						t = this._aes.encrypt(this._shiftRegister);
						for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
						a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
					}
					return r
				}, k.prototype.decrypt = function(e) {
					if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
					for (var t, r = o(e, !0), n = 0; n < r.length; n += this.segmentSize) {
						t = this._aes.encrypt(this._shiftRegister);
						for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
						a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
					}
					return r
				};
				var R = function(e, t) {
					if (!(this instanceof R)) throw Error("AES must be instanitated with `new`");
					if (this.description = "Output Feedback", this.name = "ofb", t) {
						if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
					} else t = i(16);
					this._lastPrecipher = o(t, !0), this._lastPrecipherIndex = 16, this._aes = new F(e)
				};
				R.prototype.encrypt = function(e) {
					for (var t = o(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
					return t
				}, R.prototype.decrypt = R.prototype.encrypt;
				var L = function(e) {
					if (!(this instanceof L)) throw Error("Counter must be instanitated with `new`");
					0 === e || e || (e = 1), "number" == typeof e ? (this._counter = i(16), this.setValue(e)) : this.setBytes(e)
				};
				L.prototype.setValue = function(e) {
					if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
					for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e >>= 8
				}, L.prototype.setBytes = function(e) {
					if (16 != (e = o(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
					this._counter = e
				}, L.prototype.increment = function() {
					for (var e = 15; e >= 0; e--) {
						if (255 !== this._counter[e]) {
							this._counter[e]++;
							break
						}
						this._counter[e] = 0
					}
				};
				var M = function(e, t) {
					if (!(this instanceof M)) throw Error("AES must be instanitated with `new`");
					this.description = "Counter", this.name = "ctr", t instanceof L || (t = new L(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new F(e)
				};
				M.prototype.encrypt = function(e) {
					for (var t = o(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
					return t
				}, M.prototype.decrypt = M.prototype.encrypt;
				var B = {
					AES: F,
					Counter: L,
					ModeOfOperation: {
						ecb: C,
						cbc: N,
						cfb: k,
						ofb: R,
						ctr: M
					},
					utils: {
						hex: c,
						utf8: l
					},
					padding: {
						pkcs7: {
							pad: function(e) {
								var t = 16 - (e = o(e, !0)).length % 16,
									r = i(e.length + t);
								a(e, r);
								for (var n = e.length; n < r.length; n++) r[n] = t;
								return r
							},
							strip: function(e) {
								if ((e = o(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
								var t = e[e.length - 1];
								if (t > 16) throw new Error("PKCS#7 padding byte out of range");
								for (var r = e.length - t, n = 0; n < t; n++)
									if (e[r + n] !== t) throw new Error("PKCS#7 invalid padding byte");
								var s = i(r);
								return a(e, s, 0, 0, r), s
							}
						}
					},
					_arrayTest: {
						coerceArray: o,
						createArray: i,
						copyArray: a
					}
				};
				e.exports = B
			}()
		},
		"./node_modules/bech32/index.js": function(e, t, r) {
			"use strict";
			for (var n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", o = {}, i = 0; i < n.length; i++) {
				var a = n.charAt(i);
				if (void 0 !== o[a]) throw new TypeError(a + " is ambiguous");
				o[a] = i
			}

			function s(e) {
				var t = e >> 25;
				return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
			}

			function l(e) {
				for (var t = 1, r = 0; r < e.length; ++r) {
					var n = e.charCodeAt(r);
					if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
					t = s(t) ^ n >> 5
				}
				for (t = s(t), r = 0; r < e.length; ++r) {
					var o = e.charCodeAt(r);
					t = s(t) ^ 31 & o
				}
				return t
			}

			function c(e, t) {
				if (t = t || 90, e.length < 8) return e + " too short";
				if (e.length > t) return "Exceeds length limit";
				var r = e.toLowerCase(),
					n = e.toUpperCase();
				if (e !== r && e !== n) return "Mixed-case string " + e;
				var i = (e = r).lastIndexOf("1");
				if (-1 === i) return "No separator character for " + e;
				if (0 === i) return "Missing prefix for " + e;
				var a = e.slice(0, i),
					c = e.slice(i + 1);
				if (c.length < 6) return "Data too short";
				var u = l(a);
				if ("string" == typeof u) return u;
				for (var d = [], h = 0; h < c.length; ++h) {
					var f = c.charAt(h),
						m = o[f];
					if (void 0 === m) return "Unknown character " + f;
					u = s(u) ^ m, h + 6 >= c.length || d.push(m)
				}
				return 1 !== u ? "Invalid checksum for " + e : {
					prefix: a,
					words: d
				}
			}

			function u(e, t, r, n) {
				for (var o = 0, i = 0, a = (1 << r) - 1, s = [], l = 0; l < e.length; ++l)
					for (o = o << t | e[l], i += t; i >= r;) i -= r, s.push(o >> i & a);
				if (n) i > 0 && s.push(o << r - i & a);
				else {
					if (i >= t) return "Excess padding";
					if (o << r - i & a) return "Non-zero padding"
				}
				return s
			}
			e.exports = {
				decodeUnsafe: function() {
					var e = c.apply(null, arguments);
					if ("object" == typeof e) return e
				},
				decode: function(e) {
					var t = c.apply(null, arguments);
					if ("object" == typeof t) return t;
					throw new Error(t)
				},
				encode: function(e, t, r) {
					if (r = r || 90, e.length + 7 + t.length > r) throw new TypeError("Exceeds length limit");
					var o = l(e = e.toLowerCase());
					if ("string" == typeof o) throw new Error(o);
					for (var i = e + "1", a = 0; a < t.length; ++a) {
						var c = t[a];
						if (c >> 5 != 0) throw new Error("Non 5-bit word");
						o = s(o) ^ c, i += n.charAt(c)
					}
					for (a = 0; a < 6; ++a) o = s(o);
					for (o ^= 1, a = 0; a < 6; ++a) {
						var u = o >> 5 * (5 - a) & 31;
						i += n.charAt(u)
					}
					return i
				},
				toWordsUnsafe: function(e) {
					var t = u(e, 8, 5, !0);
					if (Array.isArray(t)) return t
				},
				toWords: function(e) {
					var t = u(e, 8, 5, !0);
					if (Array.isArray(t)) return t;
					throw new Error(t)
				},
				fromWordsUnsafe: function(e) {
					var t = u(e, 5, 8, !1);
					if (Array.isArray(t)) return t
				},
				fromWords: function(e) {
					var t = u(e, 5, 8, !1);
					if (Array.isArray(t)) return t;
					throw new Error(t)
				}
			}
		},
		"./node_modules/ethers/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "ethers", (function() {
				return a
			})), r.d(t, "Signer", (function() {
				return G
			})), r.d(t, "Wallet", (function() {
				return vr
			})), r.d(t, "VoidSigner", (function() {
				return X
			})), r.d(t, "getDefaultProvider", (function() {
				return Zo
			})), r.d(t, "providers", (function() {
				return n
			})), r.d(t, "BaseContract", (function() {
				return s.a
			})), r.d(t, "Contract", (function() {
				return s.b
			})), r.d(t, "ContractFactory", (function() {
				return s.c
			})), r.d(t, "BigNumber", (function() {
				return l.a
			})), r.d(t, "FixedNumber", (function() {
				return T
			})), r.d(t, "constants", (function() {
				return Ar
			})), r.d(t, "errors", (function() {
				return oa
			})), r.d(t, "logger", (function() {
				return is
			})), r.d(t, "utils", (function() {
				return i
			})), r.d(t, "wordlists", (function() {
				return Ft
			})), r.d(t, "version", (function() {
				return os
			})), r.d(t, "Wordlist", (function() {
				return Le
			}));
			var n = {};
			r.r(n), r.d(n, "Provider", (function() {
				return V.b
			})), r.d(n, "BaseProvider", (function() {
				return Nn
			})), r.d(n, "Resolver", (function() {
				return Pn
			})), r.d(n, "UrlJsonRpcProvider", (function() {
				return qn
			})), r.d(n, "FallbackProvider", (function() {
				return No
			})), r.d(n, "AlchemyProvider", (function() {
				return eo
			})), r.d(n, "AlchemyWebSocketProvider", (function() {
				return $n
			})), r.d(n, "CloudflareProvider", (function() {
				return no
			})), r.d(n, "EtherscanProvider", (function() {
				return fo
			})), r.d(n, "InfuraProvider", (function() {
				return Bo
			})), r.d(n, "InfuraWebSocketProvider", (function() {
				return Mo
			})), r.d(n, "JsonRpcProvider", (function() {
				return Un
			})), r.d(n, "JsonRpcBatchProvider", (function() {
				return Jo
			})), r.d(n, "NodesmithProvider", (function() {
				return Do
			})), r.d(n, "PocketProvider", (function() {
				return Uo
			})), r.d(n, "StaticJsonRpcProvider", (function() {
				return Qn
			})), r.d(n, "Web3Provider", (function() {
				return Vo
			})), r.d(n, "WebSocketProvider", (function() {
				return zn
			})), r.d(n, "IpcProvider", (function() {
				return ko
			})), r.d(n, "JsonRpcSigner", (function() {
				return Dn
			})), r.d(n, "getDefaultProvider", (function() {
				return Zo
			})), r.d(n, "getNetwork", (function() {
				return Nr
			})), r.d(n, "isCommunityResource", (function() {
				return dn
			})), r.d(n, "isCommunityResourcable", (function() {
				return un
			})), r.d(n, "showThrottleMessage", (function() {
				return fn
			})), r.d(n, "Formatter", (function() {
				return cn
			}));
			var o = {};
			r.r(o), r.d(o, "decode", (function() {
				return Zr
			})), r.d(o, "encode", (function() {
				return Kr
			}));
			var i = {};
			r.r(i), r.d(i, "AbiCoder", (function() {
				return xi
			})), r.d(i, "defaultAbiCoder", (function() {
				return Ui
			})), r.d(i, "Fragment", (function() {
				return Oi
			})), r.d(i, "ConstructorFragment", (function() {
				return Ni
			})), r.d(i, "ErrorFragment", (function() {
				return Li
			})), r.d(i, "EventFragment", (function() {
				return wi
			})), r.d(i, "FunctionFragment", (function() {
				return ki
			})), r.d(i, "ParamType", (function() {
				return Ti
			})), r.d(i, "FormatTypes", (function() {
				return Ei
			})), r.d(i, "checkResultErrors", (function() {
				return Qo
			})), r.d(i, "Logger", (function() {
				return aa
			})), r.d(i, "RLP", (function() {
				return Ba
			})), r.d(i, "_fetchData", (function() {
				return tn
			})), r.d(i, "fetchJson", (function() {
				return rn
			})), r.d(i, "poll", (function() {
				return nn
			})), r.d(i, "checkProperties", (function() {
				return Na
			})), r.d(i, "deepCopy", (function() {
				return Ma
			})), r.d(i, "defineReadOnly", (function() {
				return Pa
			})), r.d(i, "getStatic", (function() {
				return Fa
			})), r.d(i, "resolveProperties", (function() {
				return Ca
			})), r.d(i, "shallowCopy", (function() {
				return ka
			})), r.d(i, "arrayify", (function() {
				return c.a
			})), r.d(i, "concat", (function() {
				return c.b
			})), r.d(i, "stripZeros", (function() {
				return c.o
			})), r.d(i, "zeroPad", (function() {
				return c.p
			})), r.d(i, "isBytes", (function() {
				return c.j
			})), r.d(i, "isBytesLike", (function() {
				return c.k
			})), r.d(i, "defaultPath", (function() {
				return _t
			})), r.d(i, "HDNode", (function() {
				return Dt
			})), r.d(i, "SigningKey", (function() {
				return Ce.a
			})), r.d(i, "Interface", (function() {
				return Qi
			})), r.d(i, "LogDescription", (function() {
				return Xi
			})), r.d(i, "TransactionDescription", (function() {
				return Hi
			})), r.d(i, "base58", (function() {
				return ve
			})), r.d(i, "base64", (function() {
				return o
			})), r.d(i, "hexlify", (function() {
				return c.i
			})), r.d(i, "isHexString", (function() {
				return c.l
			})), r.d(i, "hexConcat", (function() {
				return c.c
			})), r.d(i, "hexStripZeros", (function() {
				return c.f
			})), r.d(i, "hexValue", (function() {
				return c.g
			})), r.d(i, "hexZeroPad", (function() {
				return c.h
			})), r.d(i, "hexDataLength", (function() {
				return c.d
			})), r.d(i, "hexDataSlice", (function() {
				return c.e
			})), r.d(i, "nameprep", (function() {
				return Ur
			})), r.d(i, "_toEscapedUtf8String", (function() {
				return K.d
			})), r.d(i, "toUtf8Bytes", (function() {
				return K.f
			})), r.d(i, "toUtf8CodePoints", (function() {
				return K.g
			})), r.d(i, "toUtf8String", (function() {
				return K.h
			})), r.d(i, "Utf8ErrorFuncs", (function() {
				return K.b
			})), r.d(i, "formatBytes32String", (function() {
				return Ja
			})), r.d(i, "parseBytes32String", (function() {
				return ja
			})), r.d(i, "hashMessage", (function() {
				return q
			})), r.d(i, "namehash", (function() {
				return zr
			})), r.d(i, "isValidName", (function() {
				return Vr
			})), r.d(i, "id", (function() {
				return ee.a
			})), r.d(i, "_TypedDataEncoder", (function() {
				return ge
			})), r.d(i, "getAddress", (function() {
				return H.a
			})), r.d(i, "getIcapAddress", (function() {
				return H.d
			})), r.d(i, "getContractAddress", (function() {
				return H.b
			})), r.d(i, "getCreate2Address", (function() {
				return H.c
			})), r.d(i, "isAddress", (function() {
				return H.e
			})), r.d(i, "formatEther", (function() {
				return rs
			})), r.d(i, "parseEther", (function() {
				return ns
			})), r.d(i, "formatUnits", (function() {
				return es
			})), r.d(i, "parseUnits", (function() {
				return ts
			})), r.d(i, "commify", (function() {
				return $a
			})), r.d(i, "computeHmac", (function() {
				return Pe
			})), r.d(i, "keccak256", (function() {
				return Z.a
			})), r.d(i, "ripemd160", (function() {
				return Se
			})), r.d(i, "sha256", (function() {
				return Oe
			})), r.d(i, "sha512", (function() {
				return we
			})), r.d(i, "randomBytes", (function() {
				return Ht.a
			})), r.d(i, "shuffled", (function() {
				return mo
			})), r.d(i, "solidityPack", (function() {
				return da
			})), r.d(i, "solidityKeccak256", (function() {
				return ha
			})), r.d(i, "soliditySha256", (function() {
				return fa
			})), r.d(i, "splitSignature", (function() {
				return c.n
			})), r.d(i, "joinSignature", (function() {
				return c.m
			})), r.d(i, "accessListify", (function() {
				return Ne.b
			})), r.d(i, "parseTransaction", (function() {
				return Ne.d
			})), r.d(i, "serializeTransaction", (function() {
				return Ne.f
			})), r.d(i, "TransactionTypes", (function() {
				return Ne.a
			})), r.d(i, "getJsonWalletAddress", (function() {
				return fr
			})), r.d(i, "computeAddress", (function() {
				return Ne.c
			})), r.d(i, "recoverAddress", (function() {
				return Ne.e
			})), r.d(i, "computePublicKey", (function() {
				return Ce.b
			})), r.d(i, "recoverPublicKey", (function() {
				return Ce.c
			})), r.d(i, "verifyMessage", (function() {
				return yr
			})), r.d(i, "verifyTypedData", (function() {
				return Er
			})), r.d(i, "getAccountPath", (function() {
				return Xt
			})), r.d(i, "mnemonicToEntropy", (function() {
				return xt
			})), r.d(i, "entropyToMnemonic", (function() {
				return Ut
			})), r.d(i, "isValidMnemonic", (function() {
				return Gt
			})), r.d(i, "mnemonicToSeed", (function() {
				return It
			})), r.d(i, "SupportedAlgorithm", (function() {
				return ye
			})), r.d(i, "UnicodeNormalizationForm", (function() {
				return K.a
			})), r.d(i, "Utf8ErrorReason", (function() {
				return K.c
			})), r.d(i, "Indexed", (function() {
				return zi
			}));
			var a = {};
			r.r(a), r.d(a, "Signer", (function() {
				return G
			})), r.d(a, "Wallet", (function() {
				return vr
			})), r.d(a, "VoidSigner", (function() {
				return X
			})), r.d(a, "getDefaultProvider", (function() {
				return Zo
			})), r.d(a, "providers", (function() {
				return n
			})), r.d(a, "BaseContract", (function() {
				return s.a
			})), r.d(a, "Contract", (function() {
				return s.b
			})), r.d(a, "ContractFactory", (function() {
				return s.c
			})), r.d(a, "BigNumber", (function() {
				return l.a
			})), r.d(a, "FixedNumber", (function() {
				return T
			})), r.d(a, "constants", (function() {
				return Ar
			})), r.d(a, "errors", (function() {
				return oa
			})), r.d(a, "logger", (function() {
				return is
			})), r.d(a, "utils", (function() {
				return i
			})), r.d(a, "wordlists", (function() {
				return Ft
			})), r.d(a, "version", (function() {
				return os
			})), r.d(a, "Wordlist", (function() {
				return Le
			}));
			var s = r("./node_modules/@ethersproject/contracts/lib.esm/index.js"),
				l = r("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				c = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				u = r("./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				d = r("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js");
			const h = new u.a(d.a),
				f = {},
				m = l.a.from(0),
				p = l.a.from(-1);

			function g(e, t, r, n) {
				const o = {
					fault: t,
					operation: r
				};
				return void 0 !== n && (o.value = n), h.throwError(e, u.a.errors.NUMERIC_FAULT, o)
			}
			let b = "0";
			for (; b.length < 256;) b += b;

			function v(e) {
				if ("number" != typeof e) try {
					e = l.a.from(e).toNumber()
				} catch (t) {}
				return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + b.substring(0, e) : h.throwArgumentError("invalid decimal size", "decimals", e)
			}

			function y(e, t) {
				null == t && (t = 0);
				const r = v(t),
					n = (e = l.a.from(e)).lt(m);
				n && (e = e.mul(p));
				let o = e.mod(r).toString();
				for (; o.length < r.length - 1;) o = "0" + o;
				o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
				const i = e.div(r).toString();
				return e = 1 === r.length ? i : i + "." + o, n && (e = "-" + e), e
			}

			function E(e, t) {
				null == t && (t = 0);
				const r = v(t);
				"string" == typeof e && e.match(/^-?[0-9.,]+$/) || h.throwArgumentError("invalid decimal value", "value", e);
				const n = "-" === e.substring(0, 1);
				n && (e = e.substring(1)), "." === e && h.throwArgumentError("missing value", "value", e);
				const o = e.split(".");
				o.length > 2 && h.throwArgumentError("too many decimal points", "value", e);
				let i = o[0],
					a = o[1];
				for (i || (i = "0"), a || (a = "0");
					"0" === a[a.length - 1];) a = a.substring(0, a.length - 1);
				for (a.length > r.length - 1 && g("fractional component exceeds decimals", "underflow", "parseFixed"), "" === a && (a = "0"); a.length < r.length - 1;) a += "0";
				const s = l.a.from(i),
					c = l.a.from(a);
				let u = s.mul(r).add(c);
				return n && (u = u.mul(p)), u
			}
			class A {
				constructor(e, t, r, n) {
					e !== f && h.throwError("cannot use FixedFormat constructor; use FixedFormat.from", u.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.signed = t, this.width = r, this.decimals = n, this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = v(n), Object.freeze(this)
				}
				static from(e) {
					if (e instanceof A) return e;
					"number" == typeof e && (e = `fixed128x${e}`);
					let t = !0,
						r = 128,
						n = 18;
					if ("string" == typeof e)
						if ("fixed" === e);
						else if ("ufixed" === e) t = !1;
					else {
						const o = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
						o || h.throwArgumentError("invalid fixed format", "format", e), t = "u" !== o[1], r = parseInt(o[2]), n = parseInt(o[3])
					} else if (e) {
						const o = (t, r, n) => null == e[t] ? n : (typeof e[t] !== r && h.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]);
						t = o("signed", "boolean", t), r = o("width", "number", r), n = o("decimals", "number", n)
					}
					return r % 8 && h.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && h.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new A(f, t, r, n)
				}
			}
			class T {
				constructor(e, t, r, n) {
					h.checkNew(new.target, T), e !== f && h.throwError("cannot use FixedNumber constructor; use FixedNumber.from", u.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.format = n, this._hex = t, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
				}
				_checkFormat(e) {
					this.format.name !== e.format.name && h.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
				}
				addUnsafe(e) {
					this._checkFormat(e);
					const t = E(this._value, this.format.decimals),
						r = E(e._value, e.format.decimals);
					return T.fromValue(t.add(r), this.format.decimals, this.format)
				}
				subUnsafe(e) {
					this._checkFormat(e);
					const t = E(this._value, this.format.decimals),
						r = E(e._value, e.format.decimals);
					return T.fromValue(t.sub(r), this.format.decimals, this.format)
				}
				mulUnsafe(e) {
					this._checkFormat(e);
					const t = E(this._value, this.format.decimals),
						r = E(e._value, e.format.decimals);
					return T.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
				}
				divUnsafe(e) {
					this._checkFormat(e);
					const t = E(this._value, this.format.decimals),
						r = E(e._value, e.format.decimals);
					return T.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
				}
				floor() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let t = T.from(e[0], this.format);
					const r = !e[1].match(/^(0*)$/);
					return this.isNegative() && r && (t = t.subUnsafe(S.toFormat(t.format))), t
				}
				ceiling() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let t = T.from(e[0], this.format);
					const r = !e[1].match(/^(0*)$/);
					return !this.isNegative() && r && (t = t.addUnsafe(S.toFormat(t.format))), t
				}
				round(e) {
					null == e && (e = 0);
					const t = this.toString().split(".");
					if (1 === t.length && t.push("0"), (e < 0 || e > 80 || e % 1) && h.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e) return this;
					const r = T.from("1" + b.substring(0, e), this.format),
						n = O.toFormat(this.format);
					return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
				}
				isZero() {
					return "0.0" === this._value || "0" === this._value
				}
				isNegative() {
					return "-" === this._value[0]
				}
				toString() {
					return this._value
				}
				toHexString(e) {
					if (null == e) return this._hex;
					e % 8 && h.throwArgumentError("invalid byte width", "width", e);
					const t = l.a.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
					return Object(c.h)(t, e / 8)
				}
				toUnsafeFloat() {
					return parseFloat(this.toString())
				}
				toFormat(e) {
					return T.fromString(this._value, e)
				}
				static fromValue(e, t, r) {
					return null != r || null == t || Object(l.b)(t) || (r = t, t = null), null == t && (t = 0), null == r && (r = "fixed"), T.fromString(y(e, t), A.from(r))
				}
				static fromString(e, t) {
					null == t && (t = "fixed");
					const r = A.from(t),
						n = E(e, r.decimals);
					!r.signed && n.lt(m) && g("unsigned value cannot be negative", "overflow", "value", e);
					let o = null;
					r.signed ? o = n.toTwos(r.width).toHexString() : (o = n.toHexString(), o = Object(c.h)(o, r.width / 8));
					const i = y(n, r.decimals);
					return new T(f, o, i, r)
				}
				static fromBytes(e, t) {
					null == t && (t = "fixed");
					const r = A.from(t);
					if (Object(c.a)(e).length > r.width / 8) throw new Error("overflow");
					let n = l.a.from(e);
					r.signed && (n = n.fromTwos(r.width));
					const o = n.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
						i = y(n, r.decimals);
					return new T(f, o, i, r)
				}
				static from(e, t) {
					if ("string" == typeof e) return T.fromString(e, t);
					if (Object(c.j)(e)) return T.fromBytes(e, t);
					try {
						return T.fromValue(e, 0, t)
					} catch (r) {
						if (r.code !== u.a.errors.INVALID_ARGUMENT) throw r
					}
					return h.throwArgumentError("invalid FixedNumber value", "value", e)
				}
				static isFixedNumber(e) {
					return !(!e || !e._isFixedNumber)
				}
			}
			const S = T.from(1),
				O = T.from("0.5"),
				w = "logger/5.4.0";
			let P = !1,
				F = !1;
			const C = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let N = C.default,
				k = null;
			const R = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (r) {
								e.push(t)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var L, M;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(L || (L = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(M || (M = {}));
			class B {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const r = e.toLowerCase();
					null == C[r] && this.throwArgumentError("invalid log level name", "logLevel", e), N > C[r] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(B.levels.DEBUG, e)
				}
				info(...e) {
					this._log(B.levels.INFO, e)
				}
				warn(...e) {
					this._log(B.levels.WARNING, e)
				}
				makeError(e, t, r) {
					if (F) return this.makeError("censored error", t, {});
					t || (t = B.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(r[e]))
						} catch (i) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const i = new Error(e);
					return i.reason = o, i.code = t, Object.keys(r).forEach((function(e) {
						i[e] = r[e]
					})), i
				}
				throwError(e, t, r) {
					throw this.makeError(e, t, r)
				}
				throwArgumentError(e, t, r) {
					return this.throwError(e, B.errors.INVALID_ARGUMENT, {
						argument: t,
						value: r
					})
				}
				assert(e, t, r, n) {
					e || this.throwError(t, r, n)
				}
				assertArgument(e, t, r, n) {
					e || this.throwArgumentError(t, r, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), R && this.throwError("platform missing String.prototype.normalize", B.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: R
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, B.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, B.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, r) {
					r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, B.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + r, B.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", B.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", B.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", B.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return k || (k = new B(w)), k
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", B.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), P) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", B.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					F = !!e, P = !!t
				}
				static setLogLevel(e) {
					const t = C[e.toLowerCase()];
					null != t ? N = t : B.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new B(e)
				}
			}
			B.errors = M, B.levels = L;
			var J = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			new B("properties/5.4.0");

			function j(e, t, r) {
				Object.defineProperty(e, t, {
					enumerable: !0,
					value: r,
					writable: !1
				})
			}

			function _(e) {
				return J(this, void 0, void 0, (function*() {
					const t = Object.keys(e).map(t => {
						const r = e[t];
						return Promise.resolve(r).then(e => ({
							key: t,
							value: e
						}))
					});
					return (yield Promise.all(t)).reduce((e, t) => (e[t.key] = t.value, e), {})
				}))
			}
			var D = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const I = new B("abstract-signer/5.4.1"),
				x = ["accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
				U = [B.errors.INSUFFICIENT_FUNDS, B.errors.NONCE_EXPIRED, B.errors.REPLACEMENT_UNDERPRICED];
			class G {
				constructor() {
					I.checkAbstract(new.target, G), j(this, "_isSigner", !0)
				}
				getBalance(e) {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
					}))
				}
				getTransactionCount(e) {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
					}))
				}
				estimateGas(e) {
					return D(this, void 0, void 0, (function*() {
						this._checkProvider("estimateGas");
						const t = yield _(this.checkTransaction(e));
						return yield this.provider.estimateGas(t)
					}))
				}
				call(e, t) {
					return D(this, void 0, void 0, (function*() {
						this._checkProvider("call");
						const r = yield _(this.checkTransaction(e));
						return yield this.provider.call(r, t)
					}))
				}
				sendTransaction(e) {
					return D(this, void 0, void 0, (function*() {
						this._checkProvider("sendTransaction");
						const t = yield this.populateTransaction(e), r = yield this.signTransaction(t);
						return yield this.provider.sendTransaction(r)
					}))
				}
				getChainId() {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
					}))
				}
				getGasPrice() {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
					}))
				}
				getFeeData() {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
					}))
				}
				resolveName(e) {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
					}))
				}
				checkTransaction(e) {
					for (const r in e) - 1 === x.indexOf(r) && I.throwArgumentError("invalid transaction key: " + r, "transaction", e);
					const t = function(e) {
						const t = {};
						for (const r in e) t[r] = e[r];
						return t
					}(e);
					return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then(t => (t[0].toLowerCase() !== t[1].toLowerCase() && I.throwArgumentError("from address mismatch", "transaction", e), t[0])), t
				}
				populateTransaction(e) {
					return D(this, void 0, void 0, (function*() {
						const t = yield _(this.checkTransaction(e));
						null != t.to && (t.to = Promise.resolve(t.to).then(e => D(this, void 0, void 0, (function*() {
							if (null == e) return null;
							const t = yield this.resolveName(e);
							return null == t && I.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
						}))), t.to.catch(e => {}));
						const r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
						if (null == t.gasPrice || 2 !== t.type && !r ? 0 !== t.type && 1 !== t.type || !r || I.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : I.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e), 2 !== t.type && null != t.type || null == t.maxFeePerGas || null == t.maxPriorityFeePerGas)
							if (0 === t.type || 1 === t.type) null == t.gasPrice && (t.gasPrice = this.getGasPrice());
							else {
								const e = yield this.getFeeData();
								if (null == t.type)
									if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
										if (t.type = 2, null != t.gasPrice) {
											const e = t.gasPrice;
											delete t.gasPrice, t.maxFeePerGas = e, t.maxPriorityFeePerGas = e
										} else null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
								else null != e.gasPrice ? (r && I.throwError("network does not support EIP-1559", B.errors.UNSUPPORTED_OPERATION, {
									operation: "populateTransaction"
								}), null == t.gasPrice && (t.gasPrice = e.gasPrice), t.type = 0) : I.throwError("failed to get consistent fee data", B.errors.UNSUPPORTED_OPERATION, {
									operation: "signer.getFeeData"
								});
								else 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
							}
						else t.type = 2;
						return null == t.nonce && (t.nonce = this.getTransactionCount("pending")), null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch(e => {
							if (U.indexOf(e.code) >= 0) throw e;
							return I.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", B.errors.UNPREDICTABLE_GAS_LIMIT, {
								error: e,
								tx: t
							})
						})), null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then(t => (0 !== t[1] && t[0] !== t[1] && I.throwArgumentError("chainId address mismatch", "transaction", e), t[0])), yield _(t)
					}))
				}
				_checkProvider(e) {
					this.provider || I.throwError("missing provider", B.errors.UNSUPPORTED_OPERATION, {
						operation: e || "_checkProvider"
					})
				}
				static isSigner(e) {
					return !(!e || !e._isSigner)
				}
			}
			class X extends G {
				constructor(e, t) {
					I.checkNew(new.target, X), super(), j(this, "address", e), j(this, "provider", t || null)
				}
				getAddress() {
					return Promise.resolve(this.address)
				}
				_fail(e, t) {
					return Promise.resolve().then(() => {
						I.throwError(e, B.errors.UNSUPPORTED_OPERATION, {
							operation: t
						})
					})
				}
				signMessage(e) {
					return this._fail("VoidSigner cannot sign messages", "signMessage")
				}
				signTransaction(e) {
					return this._fail("VoidSigner cannot sign transactions", "signTransaction")
				}
				_signTypedData(e, t, r) {
					return this._fail("VoidSigner cannot sign typed data", "signTypedData")
				}
				connect(e) {
					return new X(this.address, e)
				}
			}
			var H = r("./node_modules/@ethersproject/address/lib.esm/index.js"),
				V = r("./node_modules/@ethersproject/abstract-provider/lib.esm/index.js"),
				z = r("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js"),
				Z = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				K = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			const Q = "Ethereum Signed Message:\n";

			function q(e) {
				return "string" == typeof e && (e = Object(K.f)(e)), Object(Z.a)(Object(c.b)([Object(K.f)(Q), Object(K.f)(String(e.length)), e]))
			}
			var W = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				Y = r("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				$ = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			var ee = r("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				te = function(e, t, r, n) {
					return new(r || (r = Promise))((function(o, i) {
						function a(e) {
							try {
								l(n.next(e))
							} catch (t) {
								i(t)
							}
						}

						function s(e) {
							try {
								l(n.throw(e))
							} catch (t) {
								i(t)
							}
						}

						function l(e) {
							var t;
							e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
								e(t)
							}))).then(a, s)
						}
						l((n = n.apply(e, t || [])).next())
					}))
				};
			const re = new $.a("hash/5.4.0"),
				ne = new Uint8Array(32);
			ne.fill(0);
			const oe = W.a.from(-1),
				ie = W.a.from(0),
				ae = W.a.from(1),
				se = W.a.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
			const le = Object(c.h)(ae.toHexString(), 32),
				ce = Object(c.h)(ie.toHexString(), 32),
				ue = {
					name: "string",
					version: "string",
					chainId: "uint256",
					verifyingContract: "address",
					salt: "bytes32"
				},
				de = ["name", "version", "chainId", "verifyingContract", "salt"];

			function he(e) {
				return function(t) {
					return "string" != typeof t && re.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t
				}
			}
			const fe = {
				name: he("name"),
				version: he("version"),
				chainId: function(e) {
					try {
						return W.a.from(e).toString()
					} catch (t) {}
					return re.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
				},
				verifyingContract: function(e) {
					try {
						return Object(H.a)(e).toLowerCase()
					} catch (t) {}
					return re.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
				},
				salt: function(e) {
					try {
						const t = Object(c.a)(e);
						if (32 !== t.length) throw new Error("bad length");
						return Object(c.i)(t)
					} catch (t) {}
					return re.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
				}
			};

			function me(e) {
				{
					const t = e.match(/^(u?)int(\d*)$/);
					if (t) {
						const r = "" === t[1],
							n = parseInt(t[2] || "256");
						(n % 8 != 0 || n > 256 || t[2] && t[2] !== String(n)) && re.throwArgumentError("invalid numeric width", "type", e);
						const o = se.mask(r ? n - 1 : n),
							i = r ? o.add(ae).mul(oe) : ie;
						return function(t) {
							const r = W.a.from(t);
							return (r.lt(i) || r.gt(o)) && re.throwArgumentError(`value out-of-bounds for ${e}`, "value", t), Object(c.h)(r.toTwos(256).toHexString(), 32)
						}
					}
				} {
					const t = e.match(/^bytes(\d+)$/);
					if (t) {
						const r = parseInt(t[1]);
						return (0 === r || r > 32 || t[1] !== String(r)) && re.throwArgumentError("invalid bytes width", "type", e),
							function(t) {
								return Object(c.a)(t).length !== r && re.throwArgumentError(`invalid length for ${e}`, "value", t),
									function(e) {
										const t = Object(c.a)(e),
											r = t.length % 32;
										return r ? Object(c.c)([t, ne.slice(r)]) : Object(c.i)(t)
									}(t)
							}
					}
				}
				switch (e) {
					case "address":
						return function(e) {
							return Object(c.h)(Object(H.a)(e), 32)
						};
					case "bool":
						return function(e) {
							return e ? le : ce
						};
					case "bytes":
						return function(e) {
							return Object(Z.a)(e)
						};
					case "string":
						return function(e) {
							return Object(ee.a)(e)
						}
				}
				return null
			}

			function pe(e, t) {
				return `${e}(${t.map(({name:e,type:t})=>t+" "+e).join(",")})`
			}
			class ge {
				constructor(e) {
					Object(Y.d)(this, "types", Object.freeze(Object(Y.c)(e))), Object(Y.d)(this, "_encoderCache", {}), Object(Y.d)(this, "_types", {});
					const t = {},
						r = {},
						n = {};
					Object.keys(e).forEach(e => {
						t[e] = {}, r[e] = [], n[e] = {}
					});
					for (const i in e) {
						const n = {};
						e[i].forEach(o => {
							n[o.name] && re.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", e), n[o.name] = !0;
							const a = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
							a === i && re.throwArgumentError(`circular type reference to ${JSON.stringify(a)}`, "types", e), me(a) || (r[a] || re.throwArgumentError(`unknown type ${JSON.stringify(a)}`, "types", e), r[a].push(i), t[i][a] = !0)
						})
					}
					const o = Object.keys(r).filter(e => 0 === r[e].length);
					0 === o.length ? re.throwArgumentError("missing primary type", "types", e) : o.length > 1 && re.throwArgumentError(`ambiguous primary types or unused types: ${o.map(e=>JSON.stringify(e)).join(", ")}`, "types", e), Object(Y.d)(this, "primaryType", o[0]),
						function o(i, a) {
							a[i] && re.throwArgumentError(`circular type reference to ${JSON.stringify(i)}`, "types", e), a[i] = !0, Object.keys(t[i]).forEach(e => {
								r[e] && (o(e, a), Object.keys(a).forEach(t => {
									n[t][e] = !0
								}))
							}), delete a[i]
						}(this.primaryType, {});
					for (const i in n) {
						const t = Object.keys(n[i]);
						t.sort(), this._types[i] = pe(i, e[i]) + t.map(t => pe(t, e[t])).join("")
					}
				}
				getEncoder(e) {
					let t = this._encoderCache[e];
					return t || (t = this._encoderCache[e] = this._getEncoder(e)), t
				}
				_getEncoder(e) {
					{
						const t = me(e);
						if (t) return t
					}
					const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
					if (t) {
						const e = t[1],
							r = this.getEncoder(e),
							n = parseInt(t[3]);
						return t => {
							n >= 0 && t.length !== n && re.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t);
							let o = t.map(r);
							return this._types[e] && (o = o.map(Z.a)), Object(Z.a)(Object(c.c)(o))
						}
					}
					const r = this.types[e];
					if (r) {
						const t = Object(ee.a)(this._types[e]);
						return e => {
							const n = r.map(({
								name: t,
								type: r
							}) => {
								const n = this.getEncoder(r)(e[t]);
								return this._types[r] ? Object(Z.a)(n) : n
							});
							return n.unshift(t), Object(c.c)(n)
						}
					}
					return re.throwArgumentError(`unknown type: ${e}`, "type", e)
				}
				encodeType(e) {
					const t = this._types[e];
					return t || re.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t
				}
				encodeData(e, t) {
					return this.getEncoder(e)(t)
				}
				hashStruct(e, t) {
					return Object(Z.a)(this.encodeData(e, t))
				}
				encode(e) {
					return this.encodeData(this.primaryType, e)
				}
				hash(e) {
					return this.hashStruct(this.primaryType, e)
				}
				_visit(e, t, r) {
					if (me(e)) return r(e, t);
					const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
					if (n) {
						const e = n[1],
							o = parseInt(n[3]);
						return o >= 0 && t.length !== o && re.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map(t => this._visit(e, t, r))
					}
					const o = this.types[e];
					return o ? o.reduce((e, {
						name: n,
						type: o
					}) => (e[n] = this._visit(o, t[n], r), e), {}) : re.throwArgumentError(`unknown type: ${e}`, "type", e)
				}
				visit(e, t) {
					return this._visit(this.primaryType, e, t)
				}
				static from(e) {
					return new ge(e)
				}
				static getPrimaryType(e) {
					return ge.from(e).primaryType
				}
				static hashStruct(e, t, r) {
					return ge.from(t).hashStruct(e, r)
				}
				static hashDomain(e) {
					const t = [];
					for (const r in e) {
						const n = ue[r];
						n || re.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({
							name: r,
							type: n
						})
					}
					return t.sort((e, t) => de.indexOf(e.name) - de.indexOf(t.name)), ge.hashStruct("EIP712Domain", {
						EIP712Domain: t
					}, e)
				}
				static encode(e, t, r) {
					return Object(c.c)(["0x1901", ge.hashDomain(e), ge.from(t).hash(r)])
				}
				static hash(e, t, r) {
					return Object(Z.a)(ge.encode(e, t, r))
				}
				static resolveNames(e, t, r, n) {
					return te(this, void 0, void 0, (function*() {
						e = Object(Y.g)(e);
						const o = {};
						e.verifyingContract && !Object(c.l)(e.verifyingContract, 20) && (o[e.verifyingContract] = "0x");
						const i = ge.from(t);
						i.visit(r, (e, t) => ("address" !== e || Object(c.l)(t, 20) || (o[t] = "0x"), t));
						for (const e in o) o[e] = yield n(e);
						return e.verifyingContract && o[e.verifyingContract] && (e.verifyingContract = o[e.verifyingContract]), r = i.visit(r, (e, t) => "address" === e && o[t] ? o[t] : t), {
							domain: e,
							value: r
						}
					}))
				}
				static getPayload(e, t, r) {
					ge.hashDomain(e);
					const n = {},
						o = [];
					de.forEach(t => {
						const r = e[t];
						null != r && (n[t] = fe[t](r), o.push({
							name: t,
							type: ue[t]
						}))
					});
					const i = ge.from(t),
						a = Object(Y.g)(t);
					return a.EIP712Domain ? re.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : a.EIP712Domain = o, i.encode(r), {
						types: a,
						domain: n,
						primaryType: i.primaryType,
						message: i.visit(r, (e, t) => {
							if (e.match(/^bytes(\d*)/)) return Object(c.i)(Object(c.a)(t));
							if (e.match(/^u?int/)) return W.a.from(t).toString();
							switch (e) {
								case "address":
									return t.toLowerCase();
								case "bool":
									return !!t;
								case "string":
									return "string" != typeof t && re.throwArgumentError("invalid string", "value", t), t
							}
							return re.throwArgumentError("unsupported type", "type", e)
						})
					}
				}
			}
			class be {
				constructor(e) {
					Object(Y.d)(this, "alphabet", e), Object(Y.d)(this, "base", e.length), Object(Y.d)(this, "_alphabetMap", {}), Object(Y.d)(this, "_leader", e.charAt(0));
					for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t
				}
				encode(e) {
					let t = Object(c.a)(e);
					if (0 === t.length) return "";
					let r = [0];
					for (let o = 0; o < t.length; ++o) {
						let e = t[o];
						for (let t = 0; t < r.length; ++t) e += r[t] << 8, r[t] = e % this.base, e = e / this.base | 0;
						for (; e > 0;) r.push(e % this.base), e = e / this.base | 0
					}
					let n = "";
					for (let o = 0; 0 === t[o] && o < t.length - 1; ++o) n += this._leader;
					for (let o = r.length - 1; o >= 0; --o) n += this.alphabet[r[o]];
					return n
				}
				decode(e) {
					if ("string" != typeof e) throw new TypeError("Expected String");
					let t = [];
					if (0 === e.length) return new Uint8Array(t);
					t.push(0);
					for (let r = 0; r < e.length; r++) {
						let n = this._alphabetMap[e[r]];
						if (void 0 === n) throw new Error("Non-base" + this.base + " character");
						let o = n;
						for (let e = 0; e < t.length; ++e) o += t[e] * this.base, t[e] = 255 & o, o >>= 8;
						for (; o > 0;) t.push(255 & o), o >>= 8
					}
					for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r) t.push(0);
					return Object(c.a)(new Uint8Array(t.reverse()))
				}
			}
			new be("abcdefghijklmnopqrstuvwxyz234567");
			const ve = new be("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
			var ye, Ee = r("./node_modules/hash.js/lib/hash.js"),
				Ae = r.n(Ee);
			! function(e) {
				e.sha256 = "sha256", e.sha512 = "sha512"
			}(ye || (ye = {}));
			const Te = new $.a("sha2/5.4.0");

			function Se(e) {
				return "0x" + Ae.a.ripemd160().update(Object(c.a)(e)).digest("hex")
			}

			function Oe(e) {
				return "0x" + Ae.a.sha256().update(Object(c.a)(e)).digest("hex")
			}

			function we(e) {
				return "0x" + Ae.a.sha512().update(Object(c.a)(e)).digest("hex")
			}

			function Pe(e, t, r) {
				return ye[e] || Te.throwError("unsupported algorithm " + e, $.a.errors.UNSUPPORTED_OPERATION, {
					operation: "hmac",
					algorithm: e
				}), "0x" + Ae.a.hmac(Ae.a[e], Object(c.a)(t)).update(Object(c.a)(r)).digest("hex")
			}

			function Fe(e, t, r, n, o) {
				let i;
				e = Object(c.a)(e), t = Object(c.a)(t);
				let a = 1;
				const s = new Uint8Array(n),
					l = new Uint8Array(t.length + 4);
				let u, d;
				l.set(t);
				for (let h = 1; h <= a; h++) {
					l[t.length] = h >> 24 & 255, l[t.length + 1] = h >> 16 & 255, l[t.length + 2] = h >> 8 & 255, l[t.length + 3] = 255 & h;
					let f = Object(c.a)(Pe(o, e, l));
					i || (i = f.length, d = new Uint8Array(i), u = n - ((a = Math.ceil(n / i)) - 1) * i), d.set(f);
					for (let t = 1; t < r; t++) {
						f = Object(c.a)(Pe(o, e, f));
						for (let e = 0; e < i; e++) d[e] ^= f[e]
					}
					const m = (h - 1) * i,
						p = h === a ? u : i;
					s.set(Object(c.a)(d).slice(0, p), m)
				}
				return Object(c.i)(s)
			}
			var Ce = r("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				Ne = r("./node_modules/@ethersproject/transactions/lib.esm/index.js");
			const ke = !1,
				Re = new $.a("wordlists/5.4.0");
			class Le {
				constructor(e) {
					Re.checkAbstract(new.target, Le), Object(Y.d)(this, "locale", e)
				}
				split(e) {
					return e.toLowerCase().split(/ +/g)
				}
				join(e) {
					return e.join(" ")
				}
				static check(e) {
					const t = [];
					for (let r = 0; r < 2048; r++) {
						const n = e.getWord(r);
						if (r !== e.getWordIndex(n)) return "0x";
						t.push(n)
					}
					return Object(ee.a)(t.join("\n") + "\n")
				}
				static register(e, t) {
					if (t || (t = e.locale), ke) try {
						const r = window;
						r._ethers && r._ethers.wordlists && (r._ethers.wordlists[t] || Object(Y.d)(r._ethers.wordlists, t, e))
					} catch (r) {}
				}
			}
			const Me = "AbdikaceAbecedaAdresaAgreseAkceAktovkaAlejAlkoholAmputaceAnanasAndulkaAnekdotaAnketaAntikaAnulovatArchaAroganceAsfaltAsistentAspiraceAstmaAstronomAtlasAtletikaAtolAutobusAzylBabkaBachorBacilBaculkaBadatelBagetaBagrBahnoBakterieBaladaBaletkaBalkonBalonekBalvanBalzaBambusBankomatBarbarBaretBarmanBarokoBarvaBaterkaBatohBavlnaBazalkaBazilikaBazukaBednaBeranBesedaBestieBetonBezinkaBezmocBeztakBicyklBidloBiftekBikinyBilanceBiografBiologBitvaBizonBlahobytBlatouchBlechaBleduleBleskBlikatBliznaBlokovatBlouditBludBobekBobrBodlinaBodnoutBohatostBojkotBojovatBokorysBolestBorecBoroviceBotaBoubelBouchatBoudaBouleBouratBoxerBradavkaBramboraBrankaBratrBreptaBriketaBrkoBrlohBronzBroskevBrunetkaBrusinkaBrzdaBrzyBublinaBubnovatBuchtaBuditelBudkaBudovaBufetBujarostBukviceBuldokBulvaBundaBunkrBurzaButikBuvolBuzolaBydletBylinaBytovkaBzukotCapartCarevnaCedrCeduleCejchCejnCelaCelerCelkemCelniceCeninaCennostCenovkaCentrumCenzorCestopisCetkaChalupaChapadloCharitaChataChechtatChemieChichotChirurgChladChlebaChlubitChmelChmuraChobotChocholChodbaCholeraChomoutChopitChorobaChovChrapotChrlitChrtChrupChtivostChudinaChutnatChvatChvilkaChvostChybaChystatChytitCibuleCigaretaCihelnaCihlaCinkotCirkusCisternaCitaceCitrusCizinecCizostClonaCokolivCouvatCtitelCtnostCudnostCuketaCukrCupotCvaknoutCvalCvikCvrkotCyklistaDalekoDarebaDatelDatumDceraDebataDechovkaDecibelDeficitDeflaceDeklDekretDemokratDepreseDerbyDeskaDetektivDikobrazDiktovatDiodaDiplomDiskDisplejDivadloDivochDlahaDlouhoDluhopisDnesDobroDobytekDocentDochutitDodnesDohledDohodaDohraDojemDojniceDokladDokolaDoktorDokumentDolarDolevaDolinaDomaDominantDomluvitDomovDonutitDopadDopisDoplnitDoposudDoprovodDopustitDorazitDorostDortDosahDoslovDostatekDosudDosytaDotazDotekDotknoutDoufatDoutnatDovozceDozaduDoznatDozorceDrahotaDrakDramatikDravecDrazeDrdolDrobnostDrogerieDrozdDrsnostDrtitDrzostDubenDuchovnoDudekDuhaDuhovkaDusitDusnoDutostDvojiceDvorecDynamitEkologEkonomieElektronElipsaEmailEmiseEmoceEmpatieEpizodaEpochaEpopejEposEsejEsenceEskortaEskymoEtiketaEuforieEvoluceExekuceExkurzeExpediceExplozeExportExtraktFackaFajfkaFakultaFanatikFantazieFarmacieFavoritFazoleFederaceFejetonFenkaFialkaFigurantFilozofFiltrFinanceFintaFixaceFjordFlanelFlirtFlotilaFondFosforFotbalFotkaFotonFrakceFreskaFrontaFukarFunkceFyzikaGalejeGarantGenetikaGeologGilotinaGlazuraGlejtGolemGolfistaGotikaGrafGramofonGranuleGrepGrilGrogGroteskaGumaHadiceHadrHalaHalenkaHanbaHanopisHarfaHarpunaHavranHebkostHejkalHejnoHejtmanHektarHelmaHematomHerecHernaHesloHezkyHistorikHladovkaHlasivkyHlavaHledatHlenHlodavecHlohHloupostHltatHlubinaHluchotaHmatHmotaHmyzHnisHnojivoHnoutHoblinaHobojHochHodinyHodlatHodnotaHodovatHojnostHokejHolinkaHolkaHolubHomoleHonitbaHonoraceHoralHordaHorizontHorkoHorlivecHormonHorninaHoroskopHorstvoHospodaHostinaHotovostHoubaHoufHoupatHouskaHovorHradbaHraniceHravostHrazdaHrbolekHrdinaHrdloHrdostHrnekHrobkaHromadaHrotHroudaHrozenHrstkaHrubostHryzatHubenostHubnoutHudbaHukotHumrHusitaHustotaHvozdHybnostHydrantHygienaHymnaHysterikIdylkaIhnedIkonaIluzeImunitaInfekceInflaceInkasoInovaceInspekceInternetInvalidaInvestorInzerceIronieJablkoJachtaJahodaJakmileJakostJalovecJantarJarmarkJaroJasanJasnoJatkaJavorJazykJedinecJedleJednatelJehlanJekotJelenJelitoJemnostJenomJepiceJeseterJevitJezdecJezeroJinakJindyJinochJiskraJistotaJitrniceJizvaJmenovatJogurtJurtaKabaretKabelKabinetKachnaKadetKadidloKahanKajakKajutaKakaoKaktusKalamitaKalhotyKalibrKalnostKameraKamkolivKamnaKanibalKanoeKantorKapalinaKapelaKapitolaKapkaKapleKapotaKaprKapustaKapybaraKaramelKarotkaKartonKasaKatalogKatedraKauceKauzaKavalecKazajkaKazetaKazivostKdekolivKdesiKedlubenKempKeramikaKinoKlacekKladivoKlamKlapotKlasikaKlaunKlecKlenbaKlepatKlesnoutKlidKlimaKlisnaKloboukKlokanKlopaKloubKlubovnaKlusatKluzkostKmenKmitatKmotrKnihaKnotKoaliceKoberecKobkaKoblihaKobylaKocourKohoutKojenecKokosKoktejlKolapsKoledaKolizeKoloKomandoKometaKomikKomnataKomoraKompasKomunitaKonatKonceptKondiceKonecKonfeseKongresKoninaKonkursKontaktKonzervaKopanecKopieKopnoutKoprovkaKorbelKorektorKormidloKoroptevKorpusKorunaKorytoKorzetKosatecKostkaKotelKotletaKotoulKoukatKoupelnaKousekKouzloKovbojKozaKozorohKrabiceKrachKrajinaKralovatKrasopisKravataKreditKrejcarKresbaKrevetaKriketKritikKrizeKrkavecKrmelecKrmivoKrocanKrokKronikaKropitKroupaKrovkaKrtekKruhadloKrupiceKrutostKrvinkaKrychleKryptaKrystalKrytKudlankaKufrKujnostKuklaKulajdaKulichKulkaKulometKulturaKunaKupodivuKurtKurzorKutilKvalitaKvasinkaKvestorKynologKyselinaKytaraKyticeKytkaKytovecKyvadloLabradorLachtanLadnostLaikLakomecLamelaLampaLanovkaLasiceLasoLasturaLatinkaLavinaLebkaLeckdyLedenLedniceLedovkaLedvinaLegendaLegieLegraceLehceLehkostLehnoutLektvarLenochodLentilkaLepenkaLepidloLetadloLetecLetmoLetokruhLevhartLevitaceLevobokLibraLichotkaLidojedLidskostLihovinaLijavecLilekLimetkaLinieLinkaLinoleumListopadLitinaLitovatLobistaLodivodLogikaLogopedLokalitaLoketLomcovatLopataLopuchLordLososLotrLoudalLouhLoukaLouskatLovecLstivostLucernaLuciferLumpLuskLustraceLviceLyraLyrikaLysinaMadamMadloMagistrMahagonMajetekMajitelMajoritaMakakMakoviceMakrelaMalbaMalinaMalovatMalviceMaminkaMandleMankoMarnostMasakrMaskotMasopustMaticeMatrikaMaturitaMazanecMazivoMazlitMazurkaMdlobaMechanikMeditaceMedovinaMelasaMelounMentolkaMetlaMetodaMetrMezeraMigraceMihnoutMihuleMikinaMikrofonMilenecMilimetrMilostMimikaMincovnaMinibarMinometMinulostMiskaMistrMixovatMladostMlhaMlhovinaMlokMlsatMluvitMnichMnohemMobilMocnostModelkaModlitbaMohylaMokroMolekulaMomentkaMonarchaMonoklMonstrumMontovatMonzunMosazMoskytMostMotivaceMotorkaMotykaMouchaMoudrostMozaikaMozekMozolMramorMravenecMrkevMrtvolaMrzetMrzutostMstitelMudrcMuflonMulatMumieMuniceMusetMutaceMuzeumMuzikantMyslivecMzdaNabouratNachytatNadaceNadbytekNadhozNadobroNadpisNahlasNahnatNahodileNahraditNaivitaNajednouNajistoNajmoutNaklonitNakonecNakrmitNalevoNamazatNamluvitNanometrNaokoNaopakNaostroNapadatNapevnoNaplnitNapnoutNaposledNaprostoNaroditNarubyNarychloNasaditNasekatNaslepoNastatNatolikNavenekNavrchNavzdoryNazvatNebeNechatNeckyNedalekoNedbatNeduhNegaceNehetNehodaNejenNejprveNeklidNelibostNemilostNemocNeochotaNeonkaNepokojNerostNervNesmyslNesouladNetvorNeuronNevinaNezvykleNicotaNijakNikamNikdyNiklNikterakNitroNoclehNohaviceNominaceNoraNorekNositelNosnostNouzeNovinyNovotaNozdraNudaNudleNugetNutitNutnostNutrieNymfaObalObarvitObavaObdivObecObehnatObejmoutObezitaObhajobaObilniceObjasnitObjektObklopitOblastOblekOblibaOblohaObludaObnosObohatitObojekOboutObrazecObrnaObrubaObrysObsahObsluhaObstaratObuvObvazObvinitObvodObvykleObyvatelObzorOcasOcelOcenitOchladitOchotaOchranaOcitnoutOdbojOdbytOdchodOdcizitOdebratOdeslatOdevzdatOdezvaOdhadceOdhoditOdjetOdjinudOdkazOdkoupitOdlivOdlukaOdmlkaOdolnostOdpadOdpisOdploutOdporOdpustitOdpykatOdrazkaOdsouditOdstupOdsunOdtokOdtudOdvahaOdvetaOdvolatOdvracetOdznakOfinaOfsajdOhlasOhniskoOhradaOhrozitOhryzekOkapOkeniceOklikaOknoOkouzlitOkovyOkrasaOkresOkrsekOkruhOkupantOkurkaOkusitOlejninaOlizovatOmakOmeletaOmezitOmladinaOmlouvatOmluvaOmylOnehdyOpakovatOpasekOperaceOpiceOpilostOpisovatOporaOpoziceOpravduOprotiOrbitalOrchestrOrgieOrliceOrlojOrtelOsadaOschnoutOsikaOsivoOslavaOslepitOslnitOslovitOsnovaOsobaOsolitOspalecOstenOstrahaOstudaOstychOsvojitOteplitOtiskOtopOtrhatOtrlostOtrokOtrubyOtvorOvanoutOvarOvesOvlivnitOvoceOxidOzdobaPachatelPacientPadouchPahorekPaktPalandaPalecPalivoPalubaPamfletPamlsekPanenkaPanikaPannaPanovatPanstvoPantoflePaprikaParketaParodiePartaParukaParybaPasekaPasivitaPastelkaPatentPatronaPavoukPaznehtPazourekPeckaPedagogPejsekPekloPelotonPenaltaPendrekPenzePeriskopPeroPestrostPetardaPeticePetrolejPevninaPexesoPianistaPihaPijavicePiklePiknikPilinaPilnostPilulkaPinzetaPipetaPisatelPistolePitevnaPivnicePivovarPlacentaPlakatPlamenPlanetaPlastikaPlatitPlavidloPlazPlechPlemenoPlentaPlesPletivoPlevelPlivatPlnitPlnoPlochaPlodinaPlombaPloutPlukPlynPobavitPobytPochodPocitPoctivecPodatPodcenitPodepsatPodhledPodivitPodkladPodmanitPodnikPodobaPodporaPodrazPodstataPodvodPodzimPoeziePohankaPohnutkaPohovorPohromaPohybPointaPojistkaPojmoutPokazitPoklesPokojPokrokPokutaPokynPolednePolibekPolknoutPolohaPolynomPomaluPominoutPomlkaPomocPomstaPomysletPonechatPonorkaPonurostPopadatPopelPopisekPoplachPoprositPopsatPopudPoradcePorcePorodPoruchaPoryvPosaditPosedPosilaPoskokPoslanecPosouditPospoluPostavaPosudekPosypPotahPotkanPotleskPotomekPotravaPotupaPotvoraPoukazPoutoPouzdroPovahaPovidlaPovlakPovozPovrchPovstatPovykPovzdechPozdravPozemekPoznatekPozorPozvatPracovatPrahoryPraktikaPralesPraotecPraporekPrasePravdaPrincipPrknoProbuditProcentoProdejProfeseProhraProjektProlomitPromilePronikatPropadProrokProsbaProtonProutekProvazPrskavkaPrstenPrudkostPrutPrvekPrvohoryPsanecPsovodPstruhPtactvoPubertaPuchPudlPukavecPuklinaPukrlePultPumpaPuncPupenPusaPusinkaPustinaPutovatPutykaPyramidaPyskPytelRacekRachotRadiaceRadniceRadonRaftRagbyRaketaRakovinaRamenoRampouchRandeRarachRaritaRasovnaRastrRatolestRazanceRazidloReagovatReakceReceptRedaktorReferentReflexRejnokReklamaRekordRekrutRektorReputaceRevizeRevmaRevolverRezervaRiskovatRizikoRobotikaRodokmenRohovkaRokleRokokoRomanetoRopovodRopuchaRorejsRosolRostlinaRotmistrRotopedRotundaRoubenkaRouchoRoupRouraRovinaRovniceRozborRozchodRozdatRozeznatRozhodceRozinkaRozjezdRozkazRozlohaRozmarRozpadRozruchRozsahRoztokRozumRozvodRubrikaRuchadloRukaviceRukopisRybaRybolovRychlostRydloRypadloRytinaRyzostSadistaSahatSakoSamecSamizdatSamotaSanitkaSardinkaSasankaSatelitSazbaSazeniceSborSchovatSebrankaSeceseSedadloSedimentSedloSehnatSejmoutSekeraSektaSekundaSekvojeSemenoSenoServisSesaditSeshoraSeskokSeslatSestraSesuvSesypatSetbaSetinaSetkatSetnoutSetrvatSeverSeznamShodaShrnoutSifonSilniceSirkaSirotekSirupSituaceSkafandrSkaliskoSkanzenSkautSkeptikSkicaSkladbaSkleniceSkloSkluzSkobaSkokanSkoroSkriptaSkrzSkupinaSkvostSkvrnaSlabikaSladidloSlaninaSlastSlavnostSledovatSlepecSlevaSlezinaSlibSlinaSlizniceSlonSloupekSlovoSluchSluhaSlunceSlupkaSlzaSmaragdSmetanaSmilstvoSmlouvaSmogSmradSmrkSmrtkaSmutekSmyslSnadSnahaSnobSobotaSochaSodovkaSokolSopkaSotvaSoubojSoucitSoudceSouhlasSouladSoumrakSoupravaSousedSoutokSouvisetSpalovnaSpasitelSpisSplavSpodekSpojenecSpoluSponzorSpornostSpoustaSprchaSpustitSrandaSrazSrdceSrnaSrnecSrovnatSrpenSrstSrubStaniceStarostaStatikaStavbaStehnoStezkaStodolaStolekStopaStornoStoupatStrachStresStrhnoutStromStrunaStudnaStupniceStvolStykSubjektSubtropySucharSudostSuknoSundatSunoutSurikataSurovinaSvahSvalstvoSvetrSvatbaSvazekSvisleSvitekSvobodaSvodidloSvorkaSvrabSykavkaSykotSynekSynovecSypatSypkostSyrovostSyselSytostTabletkaTabuleTahounTajemnoTajfunTajgaTajitTajnostTaktikaTamhleTamponTancovatTanecTankerTapetaTaveninaTazatelTechnikaTehdyTekutinaTelefonTemnotaTendenceTenistaTenorTeplotaTepnaTeprveTerapieTermoskaTextilTichoTiskopisTitulekTkadlecTkaninaTlapkaTleskatTlukotTlupaTmelToaletaTopinkaTopolTorzoTouhaToulecTradiceTraktorTrampTrasaTraverzaTrefitTrestTrezorTrhavinaTrhlinaTrochuTrojiceTroskaTroubaTrpceTrpitelTrpkostTrubecTruchlitTruhliceTrusTrvatTudyTuhnoutTuhostTundraTuristaTurnajTuzemskoTvarohTvorbaTvrdostTvrzTygrTykevUbohostUbozeUbratUbrousekUbrusUbytovnaUchoUctivostUdivitUhraditUjednatUjistitUjmoutUkazatelUklidnitUklonitUkotvitUkrojitUliceUlitaUlovitUmyvadloUnavitUniformaUniknoutUpadnoutUplatnitUplynoutUpoutatUpravitUranUrazitUsednoutUsilovatUsmrtitUsnadnitUsnoutUsouditUstlatUstrnoutUtahovatUtkatUtlumitUtonoutUtopenecUtrousitUvalitUvolnitUvozovkaUzdravitUzelUzeninaUzlinaUznatVagonValchaValounVanaVandalVanilkaVaranVarhanyVarovatVcelkuVchodVdovaVedroVegetaceVejceVelbloudVeletrhVelitelVelmocVelrybaVenkovVerandaVerzeVeselkaVeskrzeVesniceVespoduVestaVeterinaVeverkaVibraceVichrVideohraVidinaVidleVilaViniceVisetVitalitaVizeVizitkaVjezdVkladVkusVlajkaVlakVlasecVlevoVlhkostVlivVlnovkaVloupatVnucovatVnukVodaVodivostVodoznakVodstvoVojenskyVojnaVojskoVolantVolbaVolitVolnoVoskovkaVozidloVozovnaVpravoVrabecVracetVrahVrataVrbaVrcholekVrhatVrstvaVrtuleVsaditVstoupitVstupVtipVybavitVybratVychovatVydatVydraVyfotitVyhledatVyhnoutVyhoditVyhraditVyhubitVyjasnitVyjetVyjmoutVyklopitVykonatVylekatVymazatVymezitVymizetVymysletVynechatVynikatVynutitVypadatVyplatitVypravitVypustitVyrazitVyrovnatVyrvatVyslovitVysokoVystavitVysunoutVysypatVytasitVytesatVytratitVyvinoutVyvolatVyvrhelVyzdobitVyznatVzaduVzbuditVzchopitVzdorVzduchVzdychatVzestupVzhledemVzkazVzlykatVznikVzorekVzpouraVztahVztekXylofonZabratZabydletZachovatZadarmoZadusitZafoukatZahltitZahoditZahradaZahynoutZajatecZajetZajistitZaklepatZakoupitZalepitZamezitZamotatZamysletZanechatZanikatZaplatitZapojitZapsatZarazitZastavitZasunoutZatajitZatemnitZatknoutZaujmoutZavalitZaveletZavinitZavolatZavrtatZazvonitZbavitZbrusuZbudovatZbytekZdalekaZdarmaZdatnostZdivoZdobitZdrojZdvihZdymadloZeleninaZemanZeminaZeptatZezaduZezdolaZhatitZhltnoutZhlubokaZhotovitZhrubaZimaZimniceZjemnitZklamatZkoumatZkratkaZkumavkaZlatoZlehkaZlobaZlomZlostZlozvykZmapovatZmarZmatekZmijeZmizetZmocnitZmodratZmrzlinaZmutovatZnakZnalostZnamenatZnovuZobrazitZotavitZoubekZoufaleZploditZpomalitZpravaZprostitZprudkaZprvuZradaZranitZrcadloZrnitostZrnoZrovnaZrychlitZrzavostZtichaZtratitZubovinaZubrZvednoutZvenkuZveselaZvonZvratZvukovodZvyk";
			let Be = null;

			function Je(e) {
				if (null == Be && (Be = Me.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x25f44555f4af25b51a711136e1c7d6e50ce9f8917d39d6b1f076b2bb4d2fac1a" !== Le.check(e))) throw Be = null, new Error("BIP39 Wordlist for en (English) FAILED")
			}
			const je = new class extends Le {
				constructor() {
					super("cz")
				}
				getWord(e) {
					return Je(this), Be[e]
				}
				getWordIndex(e) {
					return Je(this), Be.indexOf(e)
				}
			};
			Le.register(je);
			const _e = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
			let De = null;

			function Ie(e) {
				if (null == De && (De = _e.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== Le.check(e))) throw De = null, new Error("BIP39 Wordlist for en (English) FAILED")
			}
			const xe = new class extends Le {
				constructor() {
					super("en")
				}
				getWord(e) {
					return Ie(this), De[e]
				}
				getWordIndex(e) {
					return Ie(this), De.indexOf(e)
				}
			};
			Le.register(xe);
			const Ue = "A/bacoAbdomenAbejaAbiertoAbogadoAbonoAbortoAbrazoAbrirAbueloAbusoAcabarAcademiaAccesoAccio/nAceiteAcelgaAcentoAceptarA/cidoAclararAcne/AcogerAcosoActivoActoActrizActuarAcudirAcuerdoAcusarAdictoAdmitirAdoptarAdornoAduanaAdultoAe/reoAfectarAficio/nAfinarAfirmarA/gilAgitarAgoni/aAgostoAgotarAgregarAgrioAguaAgudoA/guilaAgujaAhogoAhorroAireAislarAjedrezAjenoAjusteAlacra/nAlambreAlarmaAlbaA/lbumAlcaldeAldeaAlegreAlejarAlertaAletaAlfilerAlgaAlgodo/nAliadoAlientoAlivioAlmaAlmejaAlmi/barAltarAltezaAltivoAltoAlturaAlumnoAlzarAmableAmanteAmapolaAmargoAmasarA/mbarA/mbitoAmenoAmigoAmistadAmorAmparoAmplioAnchoAncianoAnclaAndarAnde/nAnemiaA/nguloAnilloA/nimoAni/sAnotarAntenaAntiguoAntojoAnualAnularAnuncioA~adirA~ejoA~oApagarAparatoApetitoApioAplicarApodoAporteApoyoAprenderAprobarApuestaApuroAradoAra~aArarA/rbitroA/rbolArbustoArchivoArcoArderArdillaArduoA/reaA/ridoAriesArmoni/aArne/sAromaArpaArpo/nArregloArrozArrugaArteArtistaAsaAsadoAsaltoAscensoAsegurarAseoAsesorAsientoAsiloAsistirAsnoAsombroA/speroAstillaAstroAstutoAsumirAsuntoAtajoAtaqueAtarAtentoAteoA/ticoAtletaA/tomoAtraerAtrozAtu/nAudazAudioAugeAulaAumentoAusenteAutorAvalAvanceAvaroAveAvellanaAvenaAvestruzAvio/nAvisoAyerAyudaAyunoAzafra/nAzarAzoteAzu/carAzufreAzulBabaBaborBacheBahi/aBaileBajarBalanzaBalco/nBaldeBambu/BancoBandaBa~oBarbaBarcoBarnizBarroBa/sculaBasto/nBasuraBatallaBateri/aBatirBatutaBau/lBazarBebe/BebidaBelloBesarBesoBestiaBichoBienBingoBlancoBloqueBlusaBoaBobinaBoboBocaBocinaBodaBodegaBoinaBolaBoleroBolsaBombaBondadBonitoBonoBonsa/iBordeBorrarBosqueBoteBoti/nBo/vedaBozalBravoBrazoBrechaBreveBrilloBrincoBrisaBrocaBromaBronceBroteBrujaBruscoBrutoBuceoBucleBuenoBueyBufandaBufo/nBu/hoBuitreBultoBurbujaBurlaBurroBuscarButacaBuzo/nCaballoCabezaCabinaCabraCacaoCada/verCadenaCaerCafe/Cai/daCaima/nCajaCajo/nCalCalamarCalcioCaldoCalidadCalleCalmaCalorCalvoCamaCambioCamelloCaminoCampoCa/ncerCandilCanelaCanguroCanicaCantoCa~aCa~o/nCaobaCaosCapazCapita/nCapoteCaptarCapuchaCaraCarbo/nCa/rcelCaretaCargaCari~oCarneCarpetaCarroCartaCasaCascoCaseroCaspaCastorCatorceCatreCaudalCausaCazoCebollaCederCedroCeldaCe/lebreCelosoCe/lulaCementoCenizaCentroCercaCerdoCerezaCeroCerrarCertezaCe/spedCetroChacalChalecoChampu/ChanclaChapaCharlaChicoChisteChivoChoqueChozaChuletaChuparCiclo/nCiegoCieloCienCiertoCifraCigarroCimaCincoCineCintaCipre/sCircoCiruelaCisneCitaCiudadClamorClanClaroClaseClaveClienteClimaCli/nicaCobreCoccio/nCochinoCocinaCocoCo/digoCodoCofreCogerCoheteCoji/nCojoColaColchaColegioColgarColinaCollarColmoColumnaCombateComerComidaCo/modoCompraCondeConejoCongaConocerConsejoContarCopaCopiaCorazo/nCorbataCorchoCordo/nCoronaCorrerCoserCosmosCostaCra/neoCra/terCrearCrecerCrei/doCremaCri/aCrimenCriptaCrisisCromoCro/nicaCroquetaCrudoCruzCuadroCuartoCuatroCuboCubrirCucharaCuelloCuentoCuerdaCuestaCuevaCuidarCulebraCulpaCultoCumbreCumplirCunaCunetaCuotaCupo/nCu/pulaCurarCuriosoCursoCurvaCutisDamaDanzaDarDardoDa/tilDeberDe/bilDe/cadaDecirDedoDefensaDefinirDejarDelfi/nDelgadoDelitoDemoraDensoDentalDeporteDerechoDerrotaDesayunoDeseoDesfileDesnudoDestinoDesvi/oDetalleDetenerDeudaDi/aDiabloDiademaDiamanteDianaDiarioDibujoDictarDienteDietaDiezDifi/cilDignoDilemaDiluirDineroDirectoDirigirDiscoDise~oDisfrazDivaDivinoDobleDoceDolorDomingoDonDonarDoradoDormirDorsoDosDosisDrago/nDrogaDuchaDudaDueloDue~oDulceDu/oDuqueDurarDurezaDuroE/banoEbrioEcharEcoEcuadorEdadEdicio/nEdificioEditorEducarEfectoEficazEjeEjemploElefanteElegirElementoElevarElipseE/liteElixirElogioEludirEmbudoEmitirEmocio/nEmpateEmpe~oEmpleoEmpresaEnanoEncargoEnchufeEnci/aEnemigoEneroEnfadoEnfermoEnga~oEnigmaEnlaceEnormeEnredoEnsayoEnse~arEnteroEntrarEnvaseEnvi/oE/pocaEquipoErizoEscalaEscenaEscolarEscribirEscudoEsenciaEsferaEsfuerzoEspadaEspejoEspi/aEsposaEspumaEsqui/EstarEsteEstiloEstufaEtapaEternoE/ticaEtniaEvadirEvaluarEventoEvitarExactoExamenExcesoExcusaExentoExigirExilioExistirE/xitoExpertoExplicarExponerExtremoFa/bricaFa/bulaFachadaFa/cilFactorFaenaFajaFaldaFalloFalsoFaltarFamaFamiliaFamosoFarao/nFarmaciaFarolFarsaFaseFatigaFaunaFavorFaxFebreroFechaFelizFeoFeriaFerozFe/rtilFervorFesti/nFiableFianzaFiarFibraFiccio/nFichaFideoFiebreFielFieraFiestaFiguraFijarFijoFilaFileteFilialFiltroFinFincaFingirFinitoFirmaFlacoFlautaFlechaFlorFlotaFluirFlujoFlu/orFobiaFocaFogataFogo/nFolioFolletoFondoFormaForroFortunaForzarFosaFotoFracasoFra/gilFranjaFraseFraudeFrei/rFrenoFresaFri/oFritoFrutaFuegoFuenteFuerzaFugaFumarFuncio/nFundaFurgo/nFuriaFusilFu/tbolFuturoGacelaGafasGaitaGajoGalaGaleri/aGalloGambaGanarGanchoGangaGansoGarajeGarzaGasolinaGastarGatoGavila/nGemeloGemirGenGe/neroGenioGenteGeranioGerenteGermenGestoGiganteGimnasioGirarGiroGlaciarGloboGloriaGolGolfoGolosoGolpeGomaGordoGorilaGorraGotaGoteoGozarGradaGra/ficoGranoGrasaGratisGraveGrietaGrilloGripeGrisGritoGrosorGru/aGruesoGrumoGrupoGuanteGuapoGuardiaGuerraGui/aGui~oGuionGuisoGuitarraGusanoGustarHaberHa/bilHablarHacerHachaHadaHallarHamacaHarinaHazHaza~aHebillaHebraHechoHeladoHelioHembraHerirHermanoHe/roeHervirHieloHierroHi/gadoHigieneHijoHimnoHistoriaHocicoHogarHogueraHojaHombreHongoHonorHonraHoraHormigaHornoHostilHoyoHuecoHuelgaHuertaHuesoHuevoHuidaHuirHumanoHu/medoHumildeHumoHundirHuraca/nHurtoIconoIdealIdiomaI/doloIglesiaIglu/IgualIlegalIlusio/nImagenIma/nImitarImparImperioImponerImpulsoIncapazI/ndiceInerteInfielInformeIngenioInicioInmensoInmuneInnatoInsectoInstanteIntere/sI/ntimoIntuirInu/tilInviernoIraIrisIroni/aIslaIsloteJabali/Jabo/nJamo/nJarabeJardi/nJarraJaulaJazmi/nJefeJeringaJineteJornadaJorobaJovenJoyaJuergaJuevesJuezJugadorJugoJugueteJuicioJuncoJunglaJunioJuntarJu/piterJurarJustoJuvenilJuzgarKiloKoalaLabioLacioLacraLadoLadro/nLagartoLa/grimaLagunaLaicoLamerLa/minaLa/mparaLanaLanchaLangostaLanzaLa/pizLargoLarvaLa/stimaLataLa/texLatirLaurelLavarLazoLealLeccio/nLecheLectorLeerLegio/nLegumbreLejanoLenguaLentoLe~aLeo/nLeopardoLesio/nLetalLetraLeveLeyendaLibertadLibroLicorLi/derLidiarLienzoLigaLigeroLimaLi/miteLimo/nLimpioLinceLindoLi/neaLingoteLinoLinternaLi/quidoLisoListaLiteraLitioLitroLlagaLlamaLlantoLlaveLlegarLlenarLlevarLlorarLloverLluviaLoboLocio/nLocoLocuraLo/gicaLogroLombrizLomoLonjaLoteLuchaLucirLugarLujoLunaLunesLupaLustroLutoLuzMacetaMachoMaderaMadreMaduroMaestroMafiaMagiaMagoMai/zMaldadMaletaMallaMaloMama/MamboMamutMancoMandoManejarMangaManiqui/ManjarManoMansoMantaMa~anaMapaMa/quinaMarMarcoMareaMarfilMargenMaridoMa/rmolMarro/nMartesMarzoMasaMa/scaraMasivoMatarMateriaMatizMatrizMa/ximoMayorMazorcaMechaMedallaMedioMe/dulaMejillaMejorMelenaMelo/nMemoriaMenorMensajeMenteMenu/MercadoMerengueMe/ritoMesMeso/nMetaMeterMe/todoMetroMezclaMiedoMielMiembroMigaMilMilagroMilitarMillo/nMimoMinaMineroMi/nimoMinutoMiopeMirarMisaMiseriaMisilMismoMitadMitoMochilaMocio/nModaModeloMohoMojarMoldeMolerMolinoMomentoMomiaMonarcaMonedaMonjaMontoMo~oMoradaMorderMorenoMorirMorroMorsaMortalMoscaMostrarMotivoMoverMo/vilMozoMuchoMudarMuebleMuelaMuerteMuestraMugreMujerMulaMuletaMultaMundoMu~ecaMuralMuroMu/sculoMuseoMusgoMu/sicaMusloNa/carNacio/nNadarNaipeNaranjaNarizNarrarNasalNatalNativoNaturalNa/useaNavalNaveNavidadNecioNe/ctarNegarNegocioNegroNeo/nNervioNetoNeutroNevarNeveraNichoNidoNieblaNietoNi~ezNi~oNi/tidoNivelNoblezaNocheNo/minaNoriaNormaNorteNotaNoticiaNovatoNovelaNovioNubeNucaNu/cleoNudilloNudoNueraNueveNuezNuloNu/meroNutriaOasisObesoObispoObjetoObraObreroObservarObtenerObvioOcaOcasoOce/anoOchentaOchoOcioOcreOctavoOctubreOcultoOcuparOcurrirOdiarOdioOdiseaOesteOfensaOfertaOficioOfrecerOgroOi/doOi/rOjoOlaOleadaOlfatoOlivoOllaOlmoOlorOlvidoOmbligoOndaOnzaOpacoOpcio/nO/peraOpinarOponerOptarO/pticaOpuestoOracio/nOradorOralO/rbitaOrcaOrdenOrejaO/rganoOrgi/aOrgulloOrienteOrigenOrillaOroOrquestaOrugaOsadi/aOscuroOseznoOsoOstraOto~oOtroOvejaO/vuloO/xidoOxi/genoOyenteOzonoPactoPadrePaellaPa/ginaPagoPai/sPa/jaroPalabraPalcoPaletaPa/lidoPalmaPalomaPalparPanPanalPa/nicoPanteraPa~ueloPapa/PapelPapillaPaquetePararParcelaParedParirParoPa/rpadoParquePa/rrafoPartePasarPaseoPasio/nPasoPastaPataPatioPatriaPausaPautaPavoPayasoPeato/nPecadoPeceraPechoPedalPedirPegarPeinePelarPelda~oPeleaPeligroPellejoPeloPelucaPenaPensarPe~o/nPeo/nPeorPepinoPeque~oPeraPerchaPerderPerezaPerfilPericoPerlaPermisoPerroPersonaPesaPescaPe/simoPesta~aPe/taloPetro/leoPezPezu~aPicarPicho/nPiePiedraPiernaPiezaPijamaPilarPilotoPimientaPinoPintorPinzaPi~aPiojoPipaPirataPisarPiscinaPisoPistaPito/nPizcaPlacaPlanPlataPlayaPlazaPleitoPlenoPlomoPlumaPluralPobrePocoPoderPodioPoemaPoesi/aPoetaPolenPolici/aPolloPolvoPomadaPomeloPomoPompaPonerPorcio/nPortalPosadaPoseerPosiblePostePotenciaPotroPozoPradoPrecozPreguntaPremioPrensaPresoPrevioPrimoPri/ncipePrisio/nPrivarProaProbarProcesoProductoProezaProfesorProgramaProlePromesaProntoPropioPro/ximoPruebaPu/blicoPucheroPudorPuebloPuertaPuestoPulgaPulirPulmo/nPulpoPulsoPumaPuntoPu~alPu~oPupaPupilaPure/QuedarQuejaQuemarQuererQuesoQuietoQui/micaQuinceQuitarRa/banoRabiaRaboRacio/nRadicalRai/zRamaRampaRanchoRangoRapazRa/pidoRaptoRasgoRaspaRatoRayoRazaRazo/nReaccio/nRealidadReba~oReboteRecaerRecetaRechazoRecogerRecreoRectoRecursoRedRedondoReducirReflejoReformaRefra/nRefugioRegaloRegirReglaRegresoRehe/nReinoRei/rRejaRelatoRelevoRelieveRellenoRelojRemarRemedioRemoRencorRendirRentaRepartoRepetirReposoReptilResRescateResinaRespetoRestoResumenRetiroRetornoRetratoReunirReve/sRevistaReyRezarRicoRiegoRiendaRiesgoRifaRi/gidoRigorRinco/nRi~o/nRi/oRiquezaRisaRitmoRitoRizoRobleRoceRociarRodarRodeoRodillaRoerRojizoRojoRomeroRomperRonRoncoRondaRopaRoperoRosaRoscaRostroRotarRubi/RuborRudoRuedaRugirRuidoRuinaRuletaRuloRumboRumorRupturaRutaRutinaSa/badoSaberSabioSableSacarSagazSagradoSalaSaldoSaleroSalirSalmo/nSalo/nSalsaSaltoSaludSalvarSambaSancio/nSandi/aSanearSangreSanidadSanoSantoSapoSaqueSardinaSarte/nSastreSata/nSaunaSaxofo/nSeccio/nSecoSecretoSectaSedSeguirSeisSelloSelvaSemanaSemillaSendaSensorSe~alSe~orSepararSepiaSequi/aSerSerieSermo/nServirSesentaSesio/nSetaSetentaSeveroSexoSextoSidraSiestaSieteSigloSignoSi/labaSilbarSilencioSillaSi/mboloSimioSirenaSistemaSitioSituarSobreSocioSodioSolSolapaSoldadoSoledadSo/lidoSoltarSolucio/nSombraSondeoSonidoSonoroSonrisaSopaSoplarSoporteSordoSorpresaSorteoSoste/nSo/tanoSuaveSubirSucesoSudorSuegraSueloSue~oSuerteSufrirSujetoSulta/nSumarSuperarSuplirSuponerSupremoSurSurcoSure~oSurgirSustoSutilTabacoTabiqueTablaTabu/TacoTactoTajoTalarTalcoTalentoTallaTalo/nTama~oTamborTangoTanqueTapaTapeteTapiaTapo/nTaquillaTardeTareaTarifaTarjetaTarotTarroTartaTatuajeTauroTazaTazo/nTeatroTechoTeclaTe/cnicaTejadoTejerTejidoTelaTele/fonoTemaTemorTemploTenazTenderTenerTenisTensoTeori/aTerapiaTercoTe/rminoTernuraTerrorTesisTesoroTestigoTeteraTextoTezTibioTiburo/nTiempoTiendaTierraTiesoTigreTijeraTildeTimbreTi/midoTimoTintaTi/oTi/picoTipoTiraTiro/nTita/nTi/tereTi/tuloTizaToallaTobilloTocarTocinoTodoTogaToldoTomarTonoTontoToparTopeToqueTo/raxToreroTormentaTorneoToroTorpedoTorreTorsoTortugaTosToscoToserTo/xicoTrabajoTractorTraerTra/ficoTragoTrajeTramoTranceTratoTraumaTrazarTre/bolTreguaTreintaTrenTreparTresTribuTrigoTripaTristeTriunfoTrofeoTrompaTroncoTropaTroteTrozoTrucoTruenoTrufaTuberi/aTuboTuertoTumbaTumorTu/nelTu/nicaTurbinaTurismoTurnoTutorUbicarU/lceraUmbralUnidadUnirUniversoUnoUntarU~aUrbanoUrbeUrgenteUrnaUsarUsuarioU/tilUtopi/aUvaVacaVaci/oVacunaVagarVagoVainaVajillaValeVa/lidoValleValorVa/lvulaVampiroVaraVariarVaro/nVasoVecinoVectorVehi/culoVeinteVejezVelaVeleroVelozVenaVencerVendaVenenoVengarVenirVentaVenusVerVeranoVerboVerdeVeredaVerjaVersoVerterVi/aViajeVibrarVicioVi/ctimaVidaVi/deoVidrioViejoViernesVigorVilVillaVinagreVinoVi~edoVioli/nViralVirgoVirtudVisorVi/speraVistaVitaminaViudoVivazViveroVivirVivoVolca/nVolumenVolverVorazVotarVotoVozVueloVulgarYacerYateYeguaYemaYernoYesoYodoYogaYogurZafiroZanjaZapatoZarzaZonaZorroZumoZurdo",
				Ge = {};
			let Xe = null;

			function He(e) {
				return Re.checkNormalize(), Object(K.h)(Array.prototype.filter.call(Object(K.f)(e.normalize("NFD").toLowerCase()), e => e >= 65 && e <= 90 || e >= 97 && e <= 123))
			}

			function Ve(e) {
				if (null == Xe && ((Xe = Ue.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" ").map(e => (function(e) {
						const t = [];
						return Array.prototype.forEach.call(Object(K.f)(e), e => {
							47 === e ? (t.push(204), t.push(129)) : 126 === e ? (t.push(110), t.push(204), t.push(131)) : t.push(e)
						}), Object(K.h)(t)
					})(e))).forEach((e, t) => {
						Ge[He(e)] = t
					}), "0xf74fb7092aeacdfbf8959557de22098da512207fb9f109cb526994938cf40300" !== Le.check(e))) throw Xe = null, new Error("BIP39 Wordlist for es (Spanish) FAILED")
			}
			const ze = new class extends Le {
				constructor() {
					super("es")
				}
				getWord(e) {
					return Ve(this), Xe[e]
				}
				getWordIndex(e) {
					return Ve(this), Ge[He(e)]
				}
			};
			Le.register(ze);
			const Ze = "AbaisserAbandonAbdiquerAbeilleAbolirAborderAboutirAboyerAbrasifAbreuverAbriterAbrogerAbruptAbsenceAbsoluAbsurdeAbusifAbyssalAcade/mieAcajouAcarienAccablerAccepterAcclamerAccoladeAccrocheAccuserAcerbeAchatAcheterAcidulerAcierAcompteAcque/rirAcronymeActeurActifActuelAdepteAde/quatAdhe/sifAdjectifAdjugerAdmettreAdmirerAdopterAdorerAdoucirAdresseAdroitAdulteAdverbeAe/rerAe/ronefAffaireAffecterAfficheAffreuxAffublerAgacerAgencerAgileAgiterAgraferAgre/ableAgrumeAiderAiguilleAilierAimableAisanceAjouterAjusterAlarmerAlchimieAlerteAlge-breAlgueAlie/nerAlimentAlle/gerAlliageAllouerAllumerAlourdirAlpagaAltesseAlve/oleAmateurAmbiguAmbreAme/nagerAmertumeAmidonAmiralAmorcerAmourAmovibleAmphibieAmpleurAmusantAnalyseAnaphoreAnarchieAnatomieAncienAne/antirAngleAngoisseAnguleuxAnimalAnnexerAnnonceAnnuelAnodinAnomalieAnonymeAnormalAntenneAntidoteAnxieuxApaiserApe/ritifAplanirApologieAppareilAppelerApporterAppuyerAquariumAqueducArbitreArbusteArdeurArdoiseArgentArlequinArmatureArmementArmoireArmureArpenterArracherArriverArroserArsenicArte/rielArticleAspectAsphalteAspirerAssautAsservirAssietteAssocierAssurerAsticotAstreAstuceAtelierAtomeAtriumAtroceAttaqueAttentifAttirerAttraperAubaineAubergeAudaceAudibleAugurerAuroreAutomneAutrucheAvalerAvancerAvariceAvenirAverseAveugleAviateurAvideAvionAviserAvoineAvouerAvrilAxialAxiomeBadgeBafouerBagageBaguetteBaignadeBalancerBalconBaleineBalisageBambinBancaireBandageBanlieueBannie-reBanquierBarbierBarilBaronBarqueBarrageBassinBastionBatailleBateauBatterieBaudrierBavarderBeletteBe/lierBeloteBe/ne/ficeBerceauBergerBerlineBermudaBesaceBesogneBe/tailBeurreBiberonBicycleBiduleBijouBilanBilingueBillardBinaireBiologieBiopsieBiotypeBiscuitBisonBistouriBitumeBizarreBlafardBlagueBlanchirBlessantBlinderBlondBloquerBlousonBobardBobineBoireBoiserBolideBonbonBondirBonheurBonifierBonusBordureBorneBotteBoucleBoueuxBougieBoulonBouquinBourseBoussoleBoutiqueBoxeurBrancheBrasierBraveBrebisBre-cheBreuvageBricolerBrigadeBrillantBriocheBriqueBrochureBroderBronzerBrousseBroyeurBrumeBrusqueBrutalBruyantBuffleBuissonBulletinBureauBurinBustierButinerButoirBuvableBuvetteCabanonCabineCachetteCadeauCadreCafe/ineCaillouCaissonCalculerCalepinCalibreCalmerCalomnieCalvaireCamaradeCame/raCamionCampagneCanalCanetonCanonCantineCanularCapableCaporalCapriceCapsuleCapterCapucheCarabineCarboneCaresserCaribouCarnageCarotteCarreauCartonCascadeCasierCasqueCassureCauserCautionCavalierCaverneCaviarCe/dilleCeintureCe/lesteCelluleCendrierCensurerCentralCercleCe/re/bralCeriseCernerCerveauCesserChagrinChaiseChaleurChambreChanceChapitreCharbonChasseurChatonChaussonChavirerChemiseChenilleChe/quierChercherChevalChienChiffreChignonChime-reChiotChlorureChocolatChoisirChoseChouetteChromeChuteCigareCigogneCimenterCine/maCintrerCirculerCirerCirqueCiterneCitoyenCitronCivilClaironClameurClaquerClasseClavierClientClignerClimatClivageClocheClonageCloporteCobaltCobraCocasseCocotierCoderCodifierCoffreCognerCohe/sionCoifferCoincerCole-reColibriCollineColmaterColonelCombatCome/dieCommandeCompactConcertConduireConfierCongelerConnoterConsonneContactConvexeCopainCopieCorailCorbeauCordageCornicheCorpusCorrectCorte-geCosmiqueCostumeCotonCoudeCoupureCourageCouteauCouvrirCoyoteCrabeCrainteCravateCrayonCre/atureCre/diterCre/meuxCreuserCrevetteCriblerCrierCristalCrite-reCroireCroquerCrotaleCrucialCruelCrypterCubiqueCueillirCuille-reCuisineCuivreCulminerCultiverCumulerCupideCuratifCurseurCyanureCycleCylindreCyniqueDaignerDamierDangerDanseurDauphinDe/battreDe/biterDe/borderDe/briderDe/butantDe/calerDe/cembreDe/chirerDe/ciderDe/clarerDe/corerDe/crireDe/cuplerDe/daleDe/ductifDe/esseDe/fensifDe/filerDe/frayerDe/gagerDe/givrerDe/glutirDe/graferDe/jeunerDe/liceDe/logerDemanderDemeurerDe/molirDe/nicherDe/nouerDentelleDe/nuderDe/partDe/penserDe/phaserDe/placerDe/poserDe/rangerDe/roberDe/sastreDescenteDe/sertDe/signerDe/sobe/irDessinerDestrierDe/tacherDe/testerDe/tourerDe/tresseDevancerDevenirDevinerDevoirDiableDialogueDiamantDicterDiffe/rerDige/rerDigitalDigneDiluerDimancheDiminuerDioxydeDirectifDirigerDiscuterDisposerDissiperDistanceDivertirDiviserDocileDocteurDogmeDoigtDomaineDomicileDompterDonateurDonjonDonnerDopamineDortoirDorureDosageDoseurDossierDotationDouanierDoubleDouceurDouterDoyenDragonDraperDresserDribblerDroitureDuperieDuplexeDurableDurcirDynastieE/blouirE/carterE/charpeE/chelleE/clairerE/clipseE/cloreE/cluseE/coleE/conomieE/corceE/couterE/craserE/cre/merE/crivainE/crouE/cumeE/cureuilE/difierE/duquerEffacerEffectifEffigieEffortEffrayerEffusionE/galiserE/garerE/jecterE/laborerE/largirE/lectronE/le/gantE/le/phantE/le-veE/ligibleE/litismeE/logeE/luciderE/luderEmballerEmbellirEmbryonE/meraudeE/missionEmmenerE/motionE/mouvoirEmpereurEmployerEmporterEmpriseE/mulsionEncadrerEnche-reEnclaveEncocheEndiguerEndosserEndroitEnduireE/nergieEnfanceEnfermerEnfouirEngagerEnginEngloberE/nigmeEnjamberEnjeuEnleverEnnemiEnnuyeuxEnrichirEnrobageEnseigneEntasserEntendreEntierEntourerEntraverE/nume/rerEnvahirEnviableEnvoyerEnzymeE/olienE/paissirE/pargneE/patantE/pauleE/picerieE/pide/mieE/pierE/pilogueE/pineE/pisodeE/pitapheE/poqueE/preuveE/prouverE/puisantE/querreE/quipeE/rigerE/rosionErreurE/ruptionEscalierEspadonEspe-ceEspie-gleEspoirEspritEsquiverEssayerEssenceEssieuEssorerEstimeEstomacEstradeE/tage-reE/talerE/tancheE/tatiqueE/teindreE/tendoirE/ternelE/thanolE/thiqueEthnieE/tirerE/tofferE/toileE/tonnantE/tourdirE/trangeE/troitE/tudeEuphorieE/valuerE/vasionE/ventailE/videnceE/viterE/volutifE/voquerExactExage/rerExaucerExcellerExcitantExclusifExcuseExe/cuterExempleExercerExhalerExhorterExigenceExilerExisterExotiqueExpe/dierExplorerExposerExprimerExquisExtensifExtraireExulterFableFabuleuxFacetteFacileFactureFaiblirFalaiseFameuxFamilleFarceurFarfeluFarineFaroucheFascinerFatalFatigueFauconFautifFaveurFavoriFe/brileFe/conderFe/de/rerFe/linFemmeFe/murFendoirFe/odalFermerFe/roceFerveurFestivalFeuilleFeutreFe/vrierFiascoFicelerFictifFide-leFigureFilatureFiletageFilie-reFilleulFilmerFilouFiltrerFinancerFinirFioleFirmeFissureFixerFlairerFlammeFlasqueFlatteurFle/auFle-cheFleurFlexionFloconFloreFluctuerFluideFluvialFolieFonderieFongibleFontaineForcerForgeronFormulerFortuneFossileFoudreFouge-reFouillerFoulureFourmiFragileFraiseFranchirFrapperFrayeurFre/gateFreinerFrelonFre/mirFre/ne/sieFre-reFriableFrictionFrissonFrivoleFroidFromageFrontalFrotterFruitFugitifFuiteFureurFurieuxFurtifFusionFuturGagnerGalaxieGalerieGambaderGarantirGardienGarnirGarrigueGazelleGazonGe/antGe/latineGe/luleGendarmeGe/ne/ralGe/nieGenouGentilGe/ologieGe/ome-treGe/raniumGermeGestuelGeyserGibierGiclerGirafeGivreGlaceGlaiveGlisserGlobeGloireGlorieuxGolfeurGommeGonflerGorgeGorilleGoudronGouffreGoulotGoupilleGourmandGoutteGraduelGraffitiGraineGrandGrappinGratuitGravirGrenatGriffureGrillerGrimperGrognerGronderGrotteGroupeGrugerGrutierGruye-reGue/pardGuerrierGuideGuimauveGuitareGustatifGymnasteGyrostatHabitudeHachoirHalteHameauHangarHannetonHaricotHarmonieHarponHasardHe/liumHe/matomeHerbeHe/rissonHermineHe/ronHe/siterHeureuxHibernerHibouHilarantHistoireHiverHomardHommageHomoge-neHonneurHonorerHonteuxHordeHorizonHorlogeHormoneHorribleHouleuxHousseHublotHuileuxHumainHumbleHumideHumourHurlerHydromelHygie-neHymneHypnoseIdylleIgnorerIguaneIlliciteIllusionImageImbiberImiterImmenseImmobileImmuableImpactImpe/rialImplorerImposerImprimerImputerIncarnerIncendieIncidentInclinerIncoloreIndexerIndiceInductifIne/ditIneptieInexactInfiniInfligerInformerInfusionInge/rerInhalerInhiberInjecterInjureInnocentInoculerInonderInscrireInsecteInsigneInsoliteInspirerInstinctInsulterIntactIntenseIntimeIntrigueIntuitifInutileInvasionInventerInviterInvoquerIroniqueIrradierIrre/elIrriterIsolerIvoireIvresseJaguarJaillirJambeJanvierJardinJaugerJauneJavelotJetableJetonJeudiJeunesseJoindreJoncherJonglerJoueurJouissifJournalJovialJoyauJoyeuxJubilerJugementJuniorJuponJuristeJusticeJuteuxJuve/nileKayakKimonoKiosqueLabelLabialLabourerLace/rerLactoseLaguneLaineLaisserLaitierLambeauLamelleLampeLanceurLangageLanterneLapinLargeurLarmeLaurierLavaboLavoirLectureLe/galLe/gerLe/gumeLessiveLettreLevierLexiqueLe/zardLiasseLibe/rerLibreLicenceLicorneLie-geLie-vreLigatureLigoterLigueLimerLimiteLimonadeLimpideLine/aireLingotLionceauLiquideLisie-reListerLithiumLitigeLittoralLivreurLogiqueLointainLoisirLombricLoterieLouerLourdLoutreLouveLoyalLubieLucideLucratifLueurLugubreLuisantLumie-reLunaireLundiLuronLutterLuxueuxMachineMagasinMagentaMagiqueMaigreMaillonMaintienMairieMaisonMajorerMalaxerMale/ficeMalheurMaliceMalletteMammouthMandaterManiableManquantManteauManuelMarathonMarbreMarchandMardiMaritimeMarqueurMarronMartelerMascotteMassifMate/rielMatie-reMatraqueMaudireMaussadeMauveMaximalMe/chantMe/connuMe/dailleMe/decinMe/diterMe/duseMeilleurMe/langeMe/lodieMembreMe/moireMenacerMenerMenhirMensongeMentorMercrediMe/riteMerleMessagerMesureMe/talMe/te/oreMe/thodeMe/tierMeubleMiaulerMicrobeMietteMignonMigrerMilieuMillionMimiqueMinceMine/ralMinimalMinorerMinuteMiracleMiroiterMissileMixteMobileModerneMoelleuxMondialMoniteurMonnaieMonotoneMonstreMontagneMonumentMoqueurMorceauMorsureMortierMoteurMotifMoucheMoufleMoulinMoussonMoutonMouvantMultipleMunitionMurailleMure-neMurmureMuscleMuse/umMusicienMutationMuterMutuelMyriadeMyrtilleMyste-reMythiqueNageurNappeNarquoisNarrerNatationNationNatureNaufrageNautiqueNavireNe/buleuxNectarNe/fasteNe/gationNe/gligerNe/gocierNeigeNerveuxNettoyerNeuroneNeutronNeveuNicheNickelNitrateNiveauNobleNocifNocturneNoirceurNoisetteNomadeNombreuxNommerNormatifNotableNotifierNotoireNourrirNouveauNovateurNovembreNoviceNuageNuancerNuireNuisibleNume/roNuptialNuqueNutritifObe/irObjectifObligerObscurObserverObstacleObtenirObturerOccasionOccuperOce/anOctobreOctroyerOctuplerOculaireOdeurOdorantOffenserOfficierOffrirOgiveOiseauOisillonOlfactifOlivierOmbrageOmettreOnctueuxOndulerOne/reuxOniriqueOpaleOpaqueOpe/rerOpinionOpportunOpprimerOpterOptiqueOrageuxOrangeOrbiteOrdonnerOreilleOrganeOrgueilOrificeOrnementOrqueOrtieOscillerOsmoseOssatureOtarieOuraganOursonOutilOutragerOuvrageOvationOxydeOxyge-neOzonePaisiblePalacePalmare-sPalourdePalperPanachePandaPangolinPaniquerPanneauPanoramaPantalonPapayePapierPapoterPapyrusParadoxeParcelleParesseParfumerParlerParoleParrainParsemerPartagerParureParvenirPassionPaste-quePaternelPatiencePatronPavillonPavoiserPayerPaysagePeignePeintrePelagePe/licanPellePelousePeluchePendulePe/ne/trerPe/niblePensifPe/nuriePe/pitePe/plumPerdrixPerforerPe/riodePermuterPerplexePersilPertePeserPe/talePetitPe/trirPeuplePharaonPhobiePhoquePhotonPhrasePhysiquePianoPicturalPie-cePierrePieuvrePilotePinceauPipettePiquerPiroguePiscinePistonPivoterPixelPizzaPlacardPlafondPlaisirPlanerPlaquePlastronPlateauPleurerPlexusPliagePlombPlongerPluiePlumagePochettePoe/siePoe-tePointePoirierPoissonPoivrePolairePolicierPollenPolygonePommadePompierPonctuelPonde/rerPoneyPortiquePositionPosse/derPosturePotagerPoteauPotionPoucePoulainPoumonPourprePoussinPouvoirPrairiePratiquePre/cieuxPre/direPre/fixePre/ludePre/nomPre/sencePre/textePre/voirPrimitifPrincePrisonPriverProble-meProce/derProdigeProfondProgre-sProieProjeterProloguePromenerPropreProspe-reProte/gerProuesseProverbePrudencePruneauPsychosePublicPuceronPuiserPulpePulsarPunaisePunitifPupitrePurifierPuzzlePyramideQuasarQuerelleQuestionQuie/tudeQuitterQuotientRacineRaconterRadieuxRagondinRaideurRaisinRalentirRallongeRamasserRapideRasageRatisserRavagerRavinRayonnerRe/actifRe/agirRe/aliserRe/animerRecevoirRe/citerRe/clamerRe/colterRecruterReculerRecyclerRe/digerRedouterRefaireRe/flexeRe/formerRefrainRefugeRe/galienRe/gionRe/glageRe/gulierRe/ite/rerRejeterRejouerRelatifReleverReliefRemarqueReme-deRemiseRemonterRemplirRemuerRenardRenfortReniflerRenoncerRentrerRenvoiReplierReporterRepriseReptileRequinRe/serveRe/sineuxRe/soudreRespectResterRe/sultatRe/tablirRetenirRe/ticuleRetomberRetracerRe/unionRe/ussirRevancheRevivreRe/volteRe/vulsifRichesseRideauRieurRigideRigolerRincerRiposterRisibleRisqueRituelRivalRivie-reRocheuxRomanceRompreRonceRondinRoseauRosierRotatifRotorRotuleRougeRouilleRouleauRoutineRoyaumeRubanRubisRucheRuelleRugueuxRuinerRuisseauRuserRustiqueRythmeSablerSaboterSabreSacocheSafariSagesseSaisirSaladeSaliveSalonSaluerSamediSanctionSanglierSarcasmeSardineSaturerSaugrenuSaumonSauterSauvageSavantSavonnerScalpelScandaleSce/le/ratSce/narioSceptreSche/maScienceScinderScoreScrutinSculpterSe/anceSe/cableSe/cherSecouerSe/cre/terSe/datifSe/duireSeigneurSe/jourSe/lectifSemaineSemblerSemenceSe/minalSe/nateurSensibleSentenceSe/parerSe/quenceSereinSergentSe/rieuxSerrureSe/rumServiceSe/sameSe/virSevrageSextupleSide/ralSie-cleSie/gerSifflerSigleSignalSilenceSiliciumSimpleSince-reSinistreSiphonSiropSismiqueSituerSkierSocialSocleSodiumSoigneuxSoldatSoleilSolitudeSolubleSombreSommeilSomnolerSondeSongeurSonnetteSonoreSorcierSortirSosieSottiseSoucieuxSoudureSouffleSouleverSoupapeSourceSoutirerSouvenirSpacieuxSpatialSpe/cialSphe-reSpiralStableStationSternumStimulusStipulerStrictStudieuxStupeurStylisteSublimeSubstratSubtilSubvenirSucce-sSucreSuffixeSugge/rerSuiveurSulfateSuperbeSupplierSurfaceSuricateSurmenerSurpriseSursautSurvieSuspectSyllabeSymboleSyme/trieSynapseSyntaxeSyste-meTabacTablierTactileTaillerTalentTalismanTalonnerTambourTamiserTangibleTapisTaquinerTarderTarifTartineTasseTatamiTatouageTaupeTaureauTaxerTe/moinTemporelTenailleTendreTeneurTenirTensionTerminerTerneTerribleTe/tineTexteThe-meThe/orieThe/rapieThoraxTibiaTie-deTimideTirelireTiroirTissuTitaneTitreTituberTobogganTole/rantTomateToniqueTonneauToponymeTorcheTordreTornadeTorpilleTorrentTorseTortueTotemToucherTournageTousserToxineTractionTraficTragiqueTrahirTrainTrancherTravailTre-fleTremperTre/sorTreuilTriageTribunalTricoterTrilogieTriompheTriplerTriturerTrivialTromboneTroncTropicalTroupeauTuileTulipeTumulteTunnelTurbineTuteurTutoyerTuyauTympanTyphonTypiqueTyranUbuesqueUltimeUltrasonUnanimeUnifierUnionUniqueUnitaireUniversUraniumUrbainUrticantUsageUsineUsuelUsureUtileUtopieVacarmeVaccinVagabondVagueVaillantVaincreVaisseauValableValiseVallonValveVampireVanilleVapeurVarierVaseuxVassalVasteVecteurVedetteVe/ge/talVe/hiculeVeinardVe/loceVendrediVe/ne/rerVengerVenimeuxVentouseVerdureVe/rinVernirVerrouVerserVertuVestonVe/te/ranVe/tusteVexantVexerViaducViandeVictoireVidangeVide/oVignetteVigueurVilainVillageVinaigreViolonVipe-reVirementVirtuoseVirusVisageViseurVisionVisqueuxVisuelVitalVitesseViticoleVitrineVivaceVivipareVocationVoguerVoileVoisinVoitureVolailleVolcanVoltigerVolumeVoraceVortexVoterVouloirVoyageVoyelleWagonXe/nonYachtZe-breZe/nithZesteZoologie";
			let Ke = null;
			const Qe = {};

			function qe(e) {
				return Re.checkNormalize(), Object(K.h)(Array.prototype.filter.call(Object(K.f)(e.normalize("NFD").toLowerCase()), e => e >= 65 && e <= 90 || e >= 97 && e <= 123))
			}

			function We(e) {
				if (null == Ke && ((Ke = Ze.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" ").map(e => (function(e) {
						const t = [];
						return Array.prototype.forEach.call(Object(K.f)(e), e => {
							47 === e ? (t.push(204), t.push(129)) : 45 === e ? (t.push(204), t.push(128)) : t.push(e)
						}), Object(K.h)(t)
					})(e))).forEach((e, t) => {
						Qe[qe(e)] = t
					}), "0x51deb7ae009149dc61a6bd18a918eb7ac78d2775726c68e598b92d002519b045" !== Le.check(e))) throw Ke = null, new Error("BIP39 Wordlist for fr (French) FAILED")
			}
			const Ye = new class extends Le {
				constructor() {
					super("fr")
				}
				getWord(e) {
					return We(this), Ke[e]
				}
				getWordIndex(e) {
					return We(this), Qe[qe(e)]
				}
			};
			Le.register(Ye);
			const $e = ["AQRASRAGBAGUAIRAHBAghAURAdBAdcAnoAMEAFBAFCBKFBQRBSFBCXBCDBCHBGFBEQBpBBpQBIkBHNBeOBgFBVCBhBBhNBmOBmRBiHBiFBUFBZDBvFBsXBkFBlcBjYBwDBMBBTBBTRBWBBWXXaQXaRXQWXSRXCFXYBXpHXOQXHRXhRXuRXmXXbRXlXXwDXTRXrCXWQXWGaBWaKcaYgasFadQalmaMBacAKaRKKBKKXKKjKQRKDRKCYKCRKIDKeVKHcKlXKjHKrYNAHNBWNaRNKcNIBNIONmXNsXNdXNnBNMBNRBNrXNWDNWMNFOQABQAHQBrQXBQXFQaRQKXQKDQKOQKFQNBQNDQQgQCXQCDQGBQGDQGdQYXQpBQpQQpHQLXQHuQgBQhBQhCQuFQmXQiDQUFQZDQsFQdRQkHQbRQlOQlmQPDQjDQwXQMBQMDQcFQTBQTHQrDDXQDNFDGBDGQDGRDpFDhFDmXDZXDbRDMYDRdDTRDrXSAhSBCSBrSGQSEQSHBSVRShYShkSyQSuFSiBSdcSoESocSlmSMBSFBSFKSFNSFdSFcCByCaRCKcCSBCSRCCrCGbCEHCYXCpBCpQCIBCIHCeNCgBCgFCVECVcCmkCmwCZXCZFCdRClOClmClFCjDCjdCnXCwBCwXCcRCFQCFjGXhGNhGDEGDMGCDGCHGIFGgBGVXGVEGVRGmXGsXGdYGoSGbRGnXGwXGwDGWRGFNGFLGFOGFdGFkEABEBDEBFEXOEaBEKSENBENDEYXEIgEIkEgBEgQEgHEhFEudEuFEiBEiHEiFEZDEvBEsXEsFEdXEdREkFEbBEbRElFEPCEfkEFNYAEYAhYBNYQdYDXYSRYCEYYoYgQYgRYuRYmCYZTYdBYbEYlXYjQYRbYWRpKXpQopQnpSFpCXpIBpISphNpdBpdRpbRpcZpFBpFNpFDpFopFrLADLBuLXQLXcLaFLCXLEhLpBLpFLHXLeVLhILdHLdRLoDLbRLrXIABIBQIBCIBsIBoIBMIBRIXaIaRIKYIKRINBINuICDIGBIIDIIkIgRIxFIyQIiHIdRIbYIbRIlHIwRIMYIcRIRVITRIFBIFNIFQOABOAFOBQOaFONBONMOQFOSFOCDOGBOEQOpBOLXOIBOIFOgQOgFOyQOycOmXOsXOdIOkHOMEOMkOWWHBNHXNHXWHNXHDuHDRHSuHSRHHoHhkHmRHdRHkQHlcHlRHwBHWcgAEgAggAkgBNgBQgBEgXOgYcgLXgHjgyQgiBgsFgdagMYgWSgFQgFEVBTVXEVKBVKNVKDVKYVKRVNBVNYVDBVDxVSBVSRVCjVGNVLXVIFVhBVhcVsXVdRVbRVlRhBYhKYhDYhGShxWhmNhdahdkhbRhjohMXhTRxAXxXSxKBxNBxEQxeNxeQxhXxsFxdbxlHxjcxFBxFNxFQxFOxFoyNYyYoybcyMYuBQuBRuBruDMuCouHBudQukkuoBulVuMXuFEmCYmCRmpRmeDmiMmjdmTFmFQiADiBOiaRiKRiNBiNRiSFiGkiGFiERipRiLFiIFihYibHijBijEiMXiWBiFBiFCUBQUXFUaRUNDUNcUNRUNFUDBUSHUCDUGBUGFUEqULNULoUIRUeEUeYUgBUhFUuRUiFUsXUdFUkHUbBUjSUjYUwXUMDUcHURdUTBUrBUrXUrQZAFZXZZaRZKFZNBZQFZCXZGBZYdZpBZLDZIFZHXZHNZeQZVRZVFZmXZiBZvFZdFZkFZbHZbFZwXZcCZcRZRBvBQvBGvBLvBWvCovMYsAFsBDsaRsKFsNFsDrsSHsSFsCXsCRsEBsEHsEfspBsLBsLDsIgsIRseGsbRsFBsFQsFSdNBdSRdCVdGHdYDdHcdVbdySduDdsXdlRdwXdWYdWcdWRkBMkXOkaRkNIkNFkSFkCFkYBkpRkeNkgBkhVkmXksFklVkMBkWDkFNoBNoaQoaFoNBoNXoNaoNEoSRoEroYXoYCoYbopRopFomXojkowXorFbBEbEIbdBbjYlaRlDElMXlFDjKjjSRjGBjYBjYkjpRjLXjIBjOFjeVjbRjwBnXQnSHnpFnLXnINnMBnTRwXBwXNwXYwNFwQFwSBwGFwLXwLDweNwgBwuHwjDwnXMBXMpFMIBMeNMTHcaQcNBcDHcSFcCXcpBcLXcLDcgFcuFcnXcwXccDcTQcrFTQErXNrCHrpFrgFrbFrTHrFcWNYWNbWEHWMXWTR", "ABGHABIJAEAVAYJQALZJAIaRAHNXAHdcAHbRAZJMAZJRAZTRAdVJAklmAbcNAjdRAMnRAMWYAWpRAWgRAFgBAFhBAFdcBNJBBNJDBQKBBQhcBQlmBDEJBYJkBYJTBpNBBpJFBIJBBIJDBIcABOKXBOEJBOVJBOiJBOZJBepBBeLXBeIFBegBBgGJBVJXBuocBiJRBUJQBlXVBlITBwNFBMYVBcqXBTlmBWNFBWiJBWnRBFGHBFwXXKGJXNJBXNZJXDTTXSHSXSVRXSlHXCJDXGQJXEhXXYQJXYbRXOfXXeNcXVJFXhQJXhEJXdTRXjdXXMhBXcQTXRGBXTEBXTnQXFCXXFOFXFgFaBaFaBNJaBCJaBpBaBwXaNJKaNJDaQIBaDpRaEPDaHMFamDJalEJaMZJaFaFaFNBaFQJaFLDaFVHKBCYKBEBKBHDKXaFKXGdKXEJKXpHKXIBKXZDKXwXKKwLKNacKNYJKNJoKNWcKDGdKDTRKChXKGaRKGhBKGbRKEBTKEaRKEPTKLMDKLWRKOHDKVJcKdBcKlIBKlOPKFSBKFEPKFpFNBNJNJBQNBGHNBEPNBHXNBgFNBVXNBZDNBsXNBwXNNaRNNJDNNJENNJkNDCJNDVDNGJRNJiDNZJNNsCJNJFNNFSBNFCXNFEPNFLXNFIFQJBFQCaRQJEQQLJDQLJFQIaRQOqXQHaFQHHQQVJXQVJDQhNJQmEIQZJFQsJXQJrFQWbRDJABDBYJDXNFDXCXDXLXDXZDDXsJDQqXDSJFDJCXDEPkDEqXDYmQDpSJDOCkDOGQDHEIDVJDDuDuDWEBDJFgSBNDSBSFSBGHSBIBSBTQSKVYSJQNSJQiSJCXSEqXSJYVSIiJSOMYSHAHSHaQSeCFSepQSegBSHdHSHrFShSJSJuHSJUFSkNRSrSrSWEBSFaHSJFQSFCXSFGDSFYXSFODSFgBSFVXSFhBSFxFSFkFSFbBSFMFCADdCJXBCXaFCXKFCXNFCXCXCXGBCXEJCXYBCXLDCXIBCXOPCXHXCXgBCXhBCXiBCXlDCXcHCJNBCJNFCDCJCDGBCDVXCDhBCDiDCDJdCCmNCpJFCIaRCOqXCHCHCHZJCViJCuCuCmddCJiFCdNBCdHhClEJCnUJCreSCWlgCWTRCFBFCFNBCFYBCFVFCFhFCFdSCFTBCFWDGBNBGBQFGJBCGBEqGBpBGBgQGNBEGNJYGNkOGNJRGDUFGJpQGHaBGJeNGJeEGVBlGVKjGiJDGvJHGsVJGkEBGMIJGWjNGFBFGFCXGFGBGFYXGFpBGFMFEASJEAWpEJNFECJVEIXSEIQJEOqXEOcFEeNcEHEJEHlFEJgFEhlmEmDJEmZJEiMBEUqXEoSREPBFEPXFEPKFEPSFEPEFEPpFEPLXEPIBEJPdEPcFEPTBEJnXEqlHEMpREFCXEFODEFcFYASJYJAFYBaBYBVXYXpFYDhBYCJBYJGFYYbRYeNcYJeVYiIJYZJcYvJgYvJRYJsXYsJFYMYMYreVpBNHpBEJpBwXpQxFpYEJpeNDpJeDpeSFpeCHpHUJpHbBpHcHpmUJpiiJpUJrpsJuplITpFaBpFQqpFGBpFEfpFYBpFpBpFLJpFIDpFgBpFVXpFyQpFuFpFlFpFjDpFnXpFwXpJFMpFTBLXCJLXEFLXhFLXUJLXbFLalmLNJBLSJQLCLCLGJBLLDJLHaFLeNFLeSHLeCXLepFLhaRLZsJLsJDLsJrLocaLlLlLMdbLFNBLFSBLFEHLFkFIBBFIBXFIBaQIBKXIBSFIBpHIBLXIBgBIBhBIBuHIBmXIBiFIBZXIBvFIBbFIBjQIBwXIBWFIKTRIQUJIDGFICjQIYSRIINXIJeCIVaRImEkIZJFIvJRIsJXIdCJIJoRIbBQIjYBIcqXITFVIreVIFKFIFSFIFCJIFGFIFLDIFIBIJFOIFgBIFVXIJFhIFxFIFmXIFdHIFbBIJFrIJFWOBGBOQfXOOKjOUqXOfXBOqXEOcqXORVJOFIBOFlDHBIOHXiFHNTRHCJXHIaRHHJDHHEJHVbRHZJYHbIBHRsJHRkDHWlmgBKFgBSBgBCDgBGHgBpBgBIBgBVJgBuBgBvFgKDTgQVXgDUJgGSJgOqXgmUMgZIJgTUJgWIEgFBFgFNBgFDJgFSFgFGBgFYXgJFOgFgQgFVXgFhBgFbHgJFWVJABVQKcVDgFVOfXVeDFVhaRVmGdViJYVMaRVFNHhBNDhBCXhBEqhBpFhBLXhNJBhSJRheVXhhKEhxlmhZIJhdBQhkIJhbMNhMUJhMZJxNJgxQUJxDEkxDdFxSJRxplmxeSBxeCXxeGFxeYXxepQxegBxWVcxFEQxFLXxFIBxFgBxFxDxFZtxFdcxFbBxFwXyDJXyDlcuASJuDJpuDIBuCpJuGSJuIJFueEFuZIJusJXudWEuoIBuWGJuFBcuFKEuFNFuFQFuFDJuFGJuFVJuFUtuFdHuFTBmBYJmNJYmQhkmLJDmLJomIdXmiJYmvJRmsJRmklmmMBymMuCmclmmcnQiJABiJBNiJBDiBSFiBCJiBEFiBYBiBpFiBLXiBTHiJNciDEfiCZJiECJiJEqiOkHiHKFieNDiHJQieQcieDHieSFieCXieGFieEFieIHiegFihUJixNoioNXiFaBiFKFiFNDiFEPiFYXitFOitFHiFgBiFVEiFmXiFitiFbBiFMFiFrFUCXQUIoQUIJcUHQJUeCEUHwXUUJDUUqXUdWcUcqXUrnQUFNDUFSHUFCFUFEfUFLXUtFOZBXOZXSBZXpFZXVXZEQJZEJkZpDJZOqXZeNHZeCDZUqXZFBQZFEHZFLXvBAFvBKFvBCXvBEPvBpHvBIDvBgFvBuHvQNJvFNFvFGBvFIBvJFcsXCDsXLXsXsXsXlFsXcHsQqXsJQFsEqXseIFsFEHsFjDdBxOdNpRdNJRdEJbdpJRdhZJdnSJdrjNdFNJdFQHdFhNkNJDkYaRkHNRkHSRkVbRkuMRkjSJkcqDoSJFoEiJoYZJoOfXohEBoMGQocqXbBAFbBXFbBaFbBNDbBGBbBLXbBTBbBWDbGJYbIJHbFQqbFpQlDgQlOrFlVJRjGEBjZJRnXvJnXbBnEfHnOPDngJRnxfXnUJWwXEJwNpJwDpBwEfXwrEBMDCJMDGHMDIJMLJDcQGDcQpHcqXccqNFcqCXcFCJRBSBRBGBRBEJRBpQTBNFTBQJTBpBTBVXTFABTFSBTFCFTFGBTFMDrXCJrXLDrDNJrEfHrFQJrFitWNjdWNTR", "AKLJMANOPFASNJIAEJWXAYJNRAIIbRAIcdaAeEfDAgidRAdjNYAMYEJAMIbRAFNJBAFpJFBBIJYBDZJFBSiJhBGdEBBEJfXBEJqXBEJWRBpaUJBLXrXBIYJMBOcfXBeEfFBestXBjNJRBcDJOBFEqXXNvJRXDMBhXCJNYXOAWpXONJWXHDEBXeIaRXhYJDXZJSJXMDJOXcASJXFVJXaBQqXaBZJFasXdQaFSJQaFEfXaFpJHaFOqXKBNSRKXvJBKQJhXKEJQJKEJGFKINJBKIJjNKgJNSKVElmKVhEBKiJGFKlBgJKjnUJKwsJYKMFIJKFNJDKFIJFKFOfXNJBSFNJBCXNBpJFNJBvQNJBMBNJLJXNJOqXNJeCXNJeGFNdsJCNbTKFNwXUJQNFEPQDiJcQDMSJQSFpBQGMQJQJeOcQyCJEQUJEBQJFBrQFEJqDXDJFDJXpBDJXIMDGiJhDIJGRDJeYcDHrDJDVXgFDkAWpDkIgRDjDEqDMvJRDJFNFDJFIBSKclmSJQOFSJQVHSJQjDSJGJBSJGJFSECJoSHEJqSJHTBSJVJDSViJYSZJNBSJsJDSFSJFSFEfXSJFLXCBUJVCJXSBCJXpBCXVJXCJXsXCJXdFCJNJHCLIJgCHiJFCVNJMChCJhCUHEJCsJTRCJdYcCoQJCCFEfXCFIJgCFUJxCFstFGJBaQGJBIDGQJqXGYJNRGJHKFGeQqDGHEJFGJeLXGHIiJGHdBlGUJEBGkIJTGFQPDGJFEqEAGegEJIJBEJVJXEhQJTEiJNcEJZJFEJoEqEjDEqEPDsXEPGJBEPOqXEPeQFEfDiDEJfEFEfepQEfMiJEqXNBEqDIDEqeSFEqVJXEMvJRYXNJDYXEJHYKVJcYYJEBYJeEcYJUqXYFpJFYFstXpAZJMpBSJFpNBNFpeQPDpHLJDpHIJFpHgJFpeitFpHZJFpJFADpFSJFpJFCJpFOqXpFitBpJFZJLXIJFLIJgRLVNJWLVHJMLwNpJLFGJBLFLJDLFOqXLJFUJIBDJXIBGJBIJBYQIJBIBIBOqXIBcqDIEGJFILNJTIIJEBIOiJhIJeNBIJeIBIhiJIIWoTRIJFAHIJFpBIJFuHIFUtFIJFTHOSBYJOEcqXOHEJqOvBpFOkVJrObBVJOncqDOcNJkHhNJRHuHJuHdMhBgBUqXgBsJXgONJBgHNJDgHHJQgJeitgHsJXgJyNagyDJBgZJDrgsVJQgkEJNgkjSJgJFAHgFCJDgFZtMVJXNFVXQfXVJXDJVXoQJVQVJQVDEfXVDvJHVEqNFVeQfXVHpJFVHxfXVVJSRVVmaRVlIJOhCXVJhHjYkhxCJVhWVUJhWiJcxBNJIxeEqDxfXBFxcFEPxFSJFxFYJXyBDQJydaUJyFOPDuYCJYuLvJRuHLJXuZJLDuFOPDuFZJHuFcqXmKHJdmCQJcmOsVJiJAGFitLCFieOfXiestXiZJMEikNJQirXzFiFQqXiFIJFiFZJFiFvtFUHpJFUteIcUteOcUVCJkUhdHcUbEJEUJqXQUMNJhURjYkUFitFZDGJHZJIxDZJVJXZJFDJZJFpQvBNJBvBSJFvJxBrseQqDsVFVJdFLJDkEJNBkmNJYkFLJDoQJOPoGsJRoEAHBoEJfFbBQqDbBZJHbFVJXlFIJBjYIrXjeitcjjCEBjWMNBwXQfXwXOaFwDsJXwCJTRwrCZJMDNJQcDDJFcqDOPRYiJFTBsJXTQIJBTFEfXTFLJDrXEJFrEJXMrFZJFWEJdEWYTlm", "ABCDEFACNJTRAMBDJdAcNJVXBLNJEBXSIdWRXErNJkXYDJMBXZJCJaXMNJaYKKVJKcKDEJqXKDcNJhKVJrNYKbgJVXKFVJSBNBYBwDNJeQfXNJeEqXNhGJWENJFiJRQlIJbEQJfXxDQqXcfXQFNDEJQFwXUJDYcnUJDJIBgQDIUJTRDJFEqDSJQSJFSJQIJFSOPeZtSJFZJHCJXQfXCTDEqFGJBSJFGJBOfXGJBcqXGJHNJDGJRLiJEJfXEqEJFEJPEFpBEJYJBZJFYBwXUJYiJMEBYJZJyTYTONJXpQMFXFpeGIDdpJFstXpJFcPDLBVSJRLHQJqXLJFZJFIJBNJDIJBUqXIBkFDJIJEJPTIYJGWRIJeQPDIJeEfHIJFsJXOqGDSFHXEJqXgJCsJCgGQJqXgdQYJEgFMFNBgJFcqDVJwXUJVJFZJchIgJCCxOEJqXxOwXUJyDJBVRuscisciJBiJBieUtqXiJFDJkiFsJXQUGEZJcUJFsJXZtXIrXZDZJDrZJFNJDZJFstXvJFQqXvJFCJEsJXQJqkhkNGBbDJdTRbYJMEBlDwXUJMEFiJFcfXNJDRcNJWMTBLJXC", "BraFUtHBFSJFdbNBLJXVJQoYJNEBSJBEJfHSJHwXUJCJdAZJMGjaFVJXEJPNJBlEJfFiJFpFbFEJqIJBVJCrIBdHiJhOPFChvJVJZJNJWxGFNIFLueIBQJqUHEJfUFstOZJDrlXEASJRlXVJXSFwVJNJWD", "QJEJNNJDQJEJIBSFQJEJxegBQJEJfHEPSJBmXEJFSJCDEJqXLXNJFQqXIcQsFNJFIFEJqXUJgFsJXIJBUJEJfHNFvJxEqXNJnXUJFQqD", "IJBEJqXZJ"],
				et = "~~AzB~X~a~KN~Q~D~S~C~G~E~Y~p~L~I~O~eH~g~V~hxyumi~~U~~Z~~v~~s~~dkoblPjfnqwMcRTr~W~~~F~~~~~Jt";
			let tt = null;

			function rt(e) {
				return Object(c.i)(Object(K.f)(e))
			}
			const nt = "0xe3818de38284e3818f",
				ot = "0xe3818de38283e3818f";

			function it(e) {
				if (null !== tt) return;
				tt = [];
				const t = {};

				function r(e) {
					let r = "";
					for (let n = 0; n < e.length; n++) {
						let o = e[n];
						const i = t[o];
						!1 !== i && (i && (o = i), r += o)
					}
					return r
				}
				t[Object(K.h)([227, 130, 154])] = !1, t[Object(K.h)([227, 130, 153])] = !1, t[Object(K.h)([227, 130, 133])] = Object(K.h)([227, 130, 134]), t[Object(K.h)([227, 129, 163])] = Object(K.h)([227, 129, 164]), t[Object(K.h)([227, 130, 131])] = Object(K.h)([227, 130, 132]), t[Object(K.h)([227, 130, 135])] = Object(K.h)([227, 130, 136]);
				for (let n = 3; n <= 9; n++) {
					const e = $e[n - 3];
					for (let t = 0; t < e.length; t += n) {
						const r = [];
						for (let o = 0; o < n; o++) {
							const n = et.indexOf(e[t + o]);
							r.push(227), r.push(64 & n ? 130 : 129), r.push(128 + (63 & n))
						}
						tt.push(Object(K.h)(r))
					}
				}
				if (tt.sort((function(e, t) {
						return (e = r(e)) < (t = r(t)) ? -1 : e > t ? 1 : 0
					})), rt(tt[442]) === nt && rt(tt[443]) === ot) {
					const e = tt[442];
					tt[442] = tt[443], tt[443] = e
				}
				if ("0xcb36b09e6baa935787fd762ce65e80b0c6a8dabdfbc3a7f86ac0e2c4fd111600" !== Le.check(e)) throw tt = null, new Error("BIP39 Wordlist for ja (Japanese) FAILED")
			}
			const at = new class extends Le {
				constructor() {
					super("ja")
				}
				getWord(e) {
					return it(this), tt[e]
				}
				getWordIndex(e) {
					return it(this), tt.indexOf(e)
				}
				split(e) {
					return Re.checkNormalize(), e.split(/(?:\u3000| )+/g)
				}
				join(e) {
					return e.join("　")
				}
			};
			Le.register(at);
			const st = ["OYAa", "ATAZoATBl3ATCTrATCl8ATDloATGg3ATHT8ATJT8ATJl3ATLlvATLn4ATMT8ATMX8ATMboATMgoAToLbAToMTATrHgATvHnAT3AnAT3JbAT3MTAT8DbAT8JTAT8LmAT8MYAT8MbAT#LnAUHT8AUHZvAUJXrAUJX8AULnrAXJnvAXLUoAXLgvAXMn6AXRg3AXrMbAX3JTAX3QbAYLn3AZLgvAZrSUAZvAcAZ8AaAZ8AbAZ8AnAZ8HnAZ8LgAZ8MYAZ8MgAZ8OnAaAboAaDTrAaFTrAaJTrAaJboAaLVoAaMXvAaOl8AaSeoAbAUoAbAg8AbAl4AbGnrAbMT8AbMXrAbMn4AbQb8AbSV8AbvRlAb8AUAb8AnAb8HgAb8JTAb8NTAb8RbAcGboAcLnvAcMT8AcMX8AcSToAcrAaAcrFnAc8AbAc8MgAfGgrAfHboAfJnvAfLV8AfLkoAfMT8AfMnoAfQb8AfScrAfSgrAgAZ8AgFl3AgGX8AgHZvAgHgrAgJXoAgJX8AgJboAgLZoAgLn4AgOX8AgoATAgoAnAgoCUAgoJgAgoLXAgoMYAgoSeAgrDUAgrJTAhrFnAhrLjAhrQgAjAgoAjJnrAkMX8AkOnoAlCTvAlCV8AlClvAlFg4AlFl6AlFn3AloSnAlrAXAlrAfAlrFUAlrFbAlrGgAlrOXAlvKnAlvMTAl3AbAl3MnAnATrAnAcrAnCZ3AnCl8AnDg8AnFboAnFl3AnHX4AnHbrAnHgrAnIl3AnJgvAnLXoAnLX4AnLbrAnLgrAnLhrAnMXoAnMgrAnOn3AnSbrAnSeoAnvLnAn3OnCTGgvCTSlvCTvAUCTvKnCTvNTCT3CZCT3GUCT3MTCT8HnCUCZrCULf8CULnvCU3HnCU3JUCY6NUCbDb8CbFZoCbLnrCboOTCboScCbrFnCbvLnCb8AgCb8HgCb$LnCkLfoClBn3CloDUDTHT8DTLl3DTSU8DTrAaDTrLXDTrLjDTrOYDTrOgDTvFXDTvFnDT3HUDT3LfDUCT9DUDT4DUFVoDUFV8DUFkoDUGgrDUJnrDULl8DUMT8DUMXrDUMX4DUMg8DUOUoDUOgvDUOg8DUSToDUSZ8DbDXoDbDgoDbGT8DbJn3DbLg3DbLn4DbMXrDbMg8DbOToDboJXGTClvGTDT8GTFZrGTLVoGTLlvGTLl3GTMg8GTOTvGTSlrGToCUGTrDgGTrJYGTrScGTtLnGTvAnGTvQgGUCZrGUDTvGUFZoGUHXrGULnvGUMT8GUoMgGXoLnGXrMXGXrMnGXvFnGYLnvGZOnvGZvOnGZ8LaGZ8LmGbAl3GbDYvGbDlrGbHX3GbJl4GbLV8GbLn3GbMn4GboJTGboRfGbvFUGb3GUGb4JnGgDX3GgFl$GgJlrGgLX6GgLZoGgLf8GgOXoGgrAgGgrJXGgrMYGgrScGgvATGgvOYGnAgoGnJgvGnLZoGnLg3GnLnrGnQn8GnSbrGnrMgHTClvHTDToHTFT3HTQT8HToJTHToJgHTrDUHTrMnHTvFYHTvRfHT8MnHT8SUHUAZ8HUBb4HUDTvHUoMYHXFl6HXJX6HXQlrHXrAUHXrMnHXrSbHXvFYHXvKXHX3LjHX3MeHYvQlHZrScHZvDbHbAcrHbFT3HbFl3HbJT8HbLTrHbMT8HbMXrHbMbrHbQb8HbSX3HboDbHboJTHbrFUHbrHgHbrJTHb8JTHb8MnHb8QgHgAlrHgDT3HgGgrHgHgrHgJTrHgJT8HgLX@HgLnrHgMT8HgMX8HgMboHgOnrHgQToHgRg3HgoHgHgrCbHgrFnHgrLVHgvAcHgvAfHnAloHnCTrHnCnvHnGTrHnGZ8HnGnvHnJT8HnLf8HnLkvHnMg8HnRTrITvFUITvFnJTAXrJTCV8JTFT3JTFT8JTFn4JTGgvJTHT8JTJT8JTJXvJTJl3JTJnvJTLX4JTLf8JTLhvJTMT8JTMXrJTMnrJTObrJTQT8JTSlvJT8DUJT8FkJT8MTJT8OXJT8OgJT8QUJT8RfJUHZoJXFT4JXFlrJXGZ8JXGnrJXLV8JXLgvJXMXoJXMX3JXNboJXPlvJXoJTJXoLkJXrAXJXrHUJXrJgJXvJTJXvOnJX4KnJYAl3JYJT8JYLhvJYQToJYrQXJY6NUJbAl3JbCZrJbDloJbGT8JbGgrJbJXvJbJboJbLf8JbLhrJbLl3JbMnvJbRg8JbSZ8JboDbJbrCZJbrSUJb3KnJb8LnJfRn8JgAXrJgCZrJgDTrJgGZrJgGZ8JgHToJgJT8JgJXoJgJgvJgLX4JgLZ3JgLZ8JgLn4JgMgrJgMn4JgOgvJgPX6JgRnvJgSToJgoCZJgoJbJgoMYJgrJXJgrJgJgrLjJg6MTJlCn3JlGgvJlJl8Jl4AnJl8FnJl8HgJnAToJnATrJnAbvJnDUoJnGnrJnJXrJnJXvJnLhvJnLnrJnLnvJnMToJnMT8JnMXvJnMX3JnMg8JnMlrJnMn4JnOX8JnST4JnSX3JnoAgJnoAnJnoJTJnoObJnrAbJnrAkJnrHnJnrJTJnrJYJnrOYJnrScJnvCUJnvFaJnvJgJnvJnJnvOYJnvQUJnvRUJn3FnJn3JTKnFl3KnLT6LTDlvLTMnoLTOn3LTRl3LTSb4LTSlrLToAnLToJgLTrAULTrAcLTrCULTrHgLTrMgLT3JnLULnrLUMX8LUoJgLVATrLVDTrLVLb8LVoJgLV8MgLV8RTLXDg3LXFlrLXrCnLXrLXLX3GTLX4GgLX4OYLZAXrLZAcrLZAgrLZAhrLZDXyLZDlrLZFbrLZFl3LZJX6LZJX8LZLc8LZLnrLZSU8LZoJTLZoJnLZrAgLZrAnLZrJYLZrLULZrMgLZrSkLZvAnLZvGULZvJeLZvOTLZ3FZLZ4JXLZ8STLZ8ScLaAT3LaAl3LaHT8LaJTrLaJT8LaJXrLaJgvLaJl4LaLVoLaMXrLaMXvLaMX8LbClvLbFToLbHlrLbJn4LbLZ3LbLhvLbMXrLbMnoLbvSULcLnrLc8HnLc8MTLdrMnLeAgoLeOgvLeOn3LfAl3LfLnvLfMl3LfOX8Lf8AnLf8JXLf8LXLgJTrLgJXrLgJl8LgMX8LgRZrLhCToLhrAbLhrFULhrJXLhvJYLjHTrLjHX4LjJX8LjLhrLjSX3LjSZ4LkFX4LkGZ8LkGgvLkJTrLkMXoLkSToLkSU8LkSZ8LkoOYLl3FfLl3MgLmAZrLmCbrLmGgrLmHboLmJnoLmJn3LmLfoLmLhrLmSToLnAX6LnAb6LnCZ3LnCb3LnDTvLnDb8LnFl3LnGnrLnHZvLnHgvLnITvLnJT8LnJX8LnJlvLnLf8LnLg6LnLhvLnLnoLnMXrLnMg8LnQlvLnSbrLnrAgLnrAnLnrDbLnrFkLnrJdLnrMULnrOYLnrSTLnvAnLnvDULnvHgLnvOYLnvOnLn3GgLn4DULn4JTLn4JnMTAZoMTAloMTDb8MTFT8MTJnoMTJnrMTLZrMTLhrMTLkvMTMX8MTRTrMToATMTrDnMTrOnMT3JnMT4MnMT8FUMT8FaMT8FlMT8GTMT8GbMT8GnMT8HnMT8JTMT8JbMT8OTMUCl8MUJTrMUJU8MUMX8MURTrMUSToMXAX6MXAb6MXCZoMXFXrMXHXrMXLgvMXOgoMXrAUMXrAnMXrHgMXrJYMXrJnMXrMTMXrMgMXrOYMXrSZMXrSgMXvDUMXvOTMX3JgMX3OTMX4JnMX8DbMX8FnMX8HbMX8HgMX8HnMX8LbMX8MnMX8OnMYAb8MYGboMYHTvMYHX4MYLTrMYLnvMYMToMYOgvMYRg3MYSTrMbAToMbAXrMbAl3MbAn8MbGZ8MbJT8MbJXrMbMXvMbMX8MbMnoMbrMUMb8AfMb8FbMb8FkMcJXoMeLnrMgFl3MgGTvMgGXoMgGgrMgGnrMgHT8MgHZrMgJnoMgLnrMgLnvMgMT8MgQUoMgrHnMgvAnMg8HgMg8JYMg8LfMloJnMl8ATMl8AXMl8JYMnAToMnAT4MnAZ8MnAl3MnAl4MnCl8MnHT8MnHg8MnJnoMnLZoMnLhrMnMXoMnMX3MnMnrMnOgvMnrFbMnrFfMnrFnMnrNTMnvJXNTMl8OTCT3OTFV8OTFn3OTHZvOTJXrOTOl3OT3ATOT3JUOT3LZOT3LeOT3MbOT8ATOT8AbOT8AgOT8MbOUCXvOUMX3OXHXvOXLl3OXrMUOXvDbOX6NUOX8JbOYFZoOYLbrOYLkoOYMg8OYSX3ObHTrObHT4ObJgrObLhrObMX3ObOX8Ob8FnOeAlrOeJT8OeJXrOeJnrOeLToOeMb8OgJXoOgLXoOgMnrOgOXrOgOloOgoAgOgoJbOgoMYOgoSTOg8AbOjLX4OjMnoOjSV8OnLVoOnrAgOn3DUPXQlrPXvFXPbvFTPdAT3PlFn3PnvFbQTLn4QToAgQToMTQULV8QURg8QUoJnQXCXvQbFbrQb8AaQb8AcQb8FbQb8MYQb8ScQeAlrQeLhrQjAn3QlFXoQloJgQloSnRTLnvRTrGURTrJTRUJZrRUoJlRUrQnRZrLmRZrMnRZrSnRZ8ATRZ8JbRZ8ScRbMT8RbST3RfGZrRfMX8RfMgrRfSZrRnAbrRnGT8RnvJgRnvLfRnvMTRn8AaSTClvSTJgrSTOXrSTRg3STRnvSToAcSToAfSToAnSToHnSToLjSToMTSTrAaSTrEUST3BYST8AgST8LmSUAZvSUAgrSUDT4SUDT8SUGgvSUJXoSUJXvSULTrSU8JTSU8LjSV8AnSV8JgSXFToSXLf8SYvAnSZrDUSZrMUSZrMnSZ8HgSZ8JTSZ8JgSZ8MYSZ8QUSaQUoSbCT3SbHToSbQYvSbSl4SboJnSbvFbSb8HbSb8JgSb8OTScGZrScHgrScJTvScMT8ScSToScoHbScrMTScvAnSeAZrSeAcrSeHboSeJUoSeLhrSeMT8SeMXrSe6JgSgHTrSkJnoSkLnvSk8CUSlFl3SlrSnSl8GnSmAboSmGT8SmJU8", "ATLnDlATrAZoATrJX4ATrMT8ATrMX4ATrRTrATvDl8ATvJUoATvMl8AT3AToAT3MX8AT8CT3AT8DT8AT8HZrAT8HgoAUAgFnAUCTFnAXoMX8AXrAT8AXrGgvAXrJXvAXrOgoAXvLl3AZvAgoAZvFbrAZvJXoAZvJl8AZvJn3AZvMX8AZvSbrAZ8FZoAZ8LZ8AZ8MU8AZ8OTvAZ8SV8AZ8SX3AbAgFZAboJnoAbvGboAb8ATrAb8AZoAb8AgrAb8Al4Ab8Db8Ab8JnoAb8LX4Ab8LZrAb8LhrAb8MT8Ab8OUoAb8Qb8Ab8ST8AcrAUoAcrAc8AcrCZ3AcrFT3AcrFZrAcrJl4AcrJn3AcrMX3AcrOTvAc8AZ8Ac8MT8AfAcJXAgoFn4AgoGgvAgoGnrAgoLc8AgoMXoAgrLnrAkrSZ8AlFXCTAloHboAlrHbrAlrLhrAlrLkoAl3CZrAl3LUoAl3LZrAnrAl4AnrMT8An3HT4BT3IToBX4MnvBb!Ln$CTGXMnCToLZ4CTrHT8CT3JTrCT3RZrCT#GTvCU6GgvCU8Db8CU8GZrCU8HT8CboLl3CbrGgrCbrMU8Cb8DT3Cb8GnrCb8LX4Cb8MT8Cb8ObrCgrGgvCgrKX4Cl8FZoDTrAbvDTrDboDTrGT6DTrJgrDTrMX3DTrRZrDTrRg8DTvAVvDTvFZoDT3DT8DT3Ln3DT4HZrDT4MT8DT8AlrDT8MT8DUAkGbDUDbJnDYLnQlDbDUOYDbMTAnDbMXSnDboAT3DboFn4DboLnvDj6JTrGTCgFTGTGgFnGTJTMnGTLnPlGToJT8GTrCT3GTrLVoGTrLnvGTrMX3GTrMboGTvKl3GZClFnGZrDT3GZ8DTrGZ8FZ8GZ8MXvGZ8On8GZ8ST3GbCnQXGbMbFnGboFboGboJg3GboMXoGb3JTvGb3JboGb3Mn6Gb3Qb8GgDXLjGgMnAUGgrDloGgrHX4GgrSToGgvAXrGgvAZvGgvFbrGgvLl3GgvMnvGnDnLXGnrATrGnrMboGnuLl3HTATMnHTAgCnHTCTCTHTrGTvHTrHTvHTrJX8HTrLl8HTrMT8HTrMgoHTrOTrHTuOn3HTvAZrHTvDTvHTvGboHTvJU8HTvLl3HTvMXrHTvQb4HT4GT6HT4JT8HT4Jb#HT8Al3HT8GZrHT8GgrHT8HX4HT8Jb8HT8JnoHT8LTrHT8LgvHT8SToHT8SV8HUoJUoHUoJX8HUoLnrHXrLZoHXvAl3HX3LnrHX4FkvHX4LhrHX4MXoHX4OnoHZrAZ8HZrDb8HZrGZ8HZrJnrHZvGZ8HZvLnvHZ8JnvHZ8LhrHbCXJlHbMTAnHboJl4HbpLl3HbrJX8HbrLnrHbrMnvHbvRYrHgoSTrHgrFV8HgrGZ8HgrJXoHgrRnvHgvBb!HgvGTrHgvHX4HgvHn!HgvLTrHgvSU8HnDnLbHnFbJbHnvDn8Hn6GgvHn!BTvJTCTLnJTQgFnJTrAnvJTrLX4JTrOUoJTvFn3JTvLnrJTvNToJT3AgoJT3Jn4JT3LhvJT3ObrJT8AcrJT8Al3JT8JT8JT8JnoJT8LX4JT8LnrJT8MX3JT8Rg3JT8Sc8JUoBTvJU8AToJU8GZ8JU8GgvJU8JTrJU8JXrJU8JnrJU8LnvJU8ScvJXHnJlJXrGgvJXrJU8JXrLhrJXrMT8JXrMXrJXrQUoJXvCTvJXvGZ8JXvGgrJXvQT8JX8Ab8JX8DT8JX8GZ8JX8HZvJX8LnrJX8MT8JX8MXoJX8MnvJX8ST3JYGnCTJbAkGbJbCTAnJbLTAcJboDT3JboLb6JbrAnvJbrCn3JbrDl8JbrGboJbrIZoJbrJnvJbrMnvJbrQb4Jb8RZrJeAbAnJgJnFbJgScAnJgrATrJgvHZ8JgvMn4JlJlFbJlLiQXJlLjOnJlRbOlJlvNXoJlvRl3Jl4AcrJl8AUoJl8MnrJnFnMlJnHgGbJnoDT8JnoFV8JnoGgvJnoIT8JnoQToJnoRg3JnrCZ3JnrGgrJnrHTvJnrLf8JnrOX8JnvAT3JnvFZoJnvGT8JnvJl4JnvMT8JnvMX8JnvOXrJnvPX6JnvSX3JnvSZrJn3MT8Jn3MX8Jn3RTrLTATKnLTJnLTLTMXKnLTRTQlLToGb8LTrAZ8LTrCZ8LTrDb8LTrHT8LT3PX6LT4FZoLT$CTvLT$GgrLUvHX3LVoATrLVoAgoLVoJboLVoMX3LVoRg3LV8CZ3LV8FZoLV8GTvLXrDXoLXrFbrLXvAgvLXvFlrLXvLl3LXvRn6LX4Mb8LX8GT8LYCXMnLYrMnrLZoSTvLZrAZvLZrAloLZrFToLZrJXvLZrJboLZrJl4LZrLnrLZrMT8LZrOgvLZrRnvLZrST4LZvMX8LZvSlvLZ8AgoLZ8CT3LZ8JT8LZ8LV8LZ8LZoLZ8Lg8LZ8SV8LZ8SbrLZ$HT8LZ$Mn4La6CTvLbFbMnLbRYFTLbSnFZLboJT8LbrAT9LbrGb3LbrQb8LcrJX8LcrMXrLerHTvLerJbrLerNboLgrDb8LgrGZ8LgrHTrLgrMXrLgrSU8LgvJTrLgvLl3Lg6Ll3LhrLnrLhrMT8LhvAl4LiLnQXLkoAgrLkoJT8LkoJn4LlrSU8Ll3FZoLl3HTrLl3JX8Ll3JnoLl3LToLmLeFbLnDUFbLnLVAnLnrATrLnrAZoLnrAb8LnrAlrLnrGgvLnrJU8LnrLZrLnrLhrLnrMb8LnrOXrLnrSZ8LnvAb4LnvDTrLnvDl8LnvHTrLnvHbrLnvJT8LnvJU8LnvJbrLnvLhvLnvMX8LnvMb8LnvNnoLnvSU8Ln3Al3Ln4FZoLn4GT6Ln4JgvLn4LhrLn4MT8Ln4SToMToCZrMToJX8MToLX4MToLf8MToRg3MTrEloMTvGb6MT3BTrMT3Lb6MT8AcrMT8AgrMT8GZrMT8JnoMT8LnrMT8MX3MUOUAnMXAbFnMXoAloMXoJX8MXoLf8MXoLl8MXrAb8MXrDTvMXrGT8MXrGgrMXrHTrMXrLf8MXrMU8MXrOXvMXrQb8MXvGT8MXvHTrMXvLVoMX3AX3MX3Jn3MX3LhrMX3MX3MX4AlrMX4OboMX8GTvMX8GZrMX8GgrMX8JT8MX8JX8MX8LhrMX8MT8MYDUFbMYMgDbMbGnFfMbvLX4MbvLl3Mb8Mb8Mb8ST4MgGXCnMg8ATrMg8AgoMg8CZrMg8DTrMg8DboMg8HTrMg8JgrMg8LT8MloJXoMl8AhrMl8JT8MnLgAUMnoJXrMnoLX4MnoLhrMnoMT8MnrAl4MnrDb8MnrOTvMnrOgvMnrQb8MnrSU8MnvGgrMnvHZ8Mn3MToMn4DTrMn4LTrMn4Mg8NnBXAnOTFTFnOToAToOTrGgvOTrJX8OT3JXoOT6MTrOT8GgrOT8HTpOT8MToOUoHT8OUoJT8OUoLn3OXrAgoOXrDg8OXrMT8OXvSToOX6CTvOX8CZrOX8OgrOb6HgvOb8AToOb8MT8OcvLZ8OgvAlrOgvHTvOgvJTrOgvJnrOgvLZrOgvLn4OgvMT8OgvRTrOg8AZoOg8DbvOnrOXoOnvJn4OnvLhvOnvRTrOn3GgoOn3JnvOn6JbvOn8OTrPTGYFTPbBnFnPbGnDnPgDYQTPlrAnvPlrETvPlrLnvPlrMXvPlvFX4QTMTAnQTrJU8QYCnJlQYJlQlQbGTQbQb8JnrQb8LZoQb8LnvQb8MT8Qb8Ml8Qb8ST4QloAl4QloHZvQloJX8QloMn8QnJZOlRTrAZvRTrDTrRTvJn4RTvLhvRT4Jb8RZrAZrRZ8AkrRZ8JU8RZ8LV8RZ8LnvRbJlQXRg3GboRg3MnvRg8AZ8Rg8JboRg8Jl4RnLTCbRnvFl3RnvQb8SToAl4SToCZrSToFZoSToHXrSToJU8SToJgvSToJl4SToLhrSToMX3STrAlvSTrCT9STrCgrSTrGgrSTrHXrSTrHboSTrJnoSTrNboSTvLnrST4AZoST8Ab8ST8JT8SUoJn3SU6HZ#SU6JTvSU8Db8SU8HboSU8LgrSV8JT8SZrAcrSZrAl3SZrJT8SZrJnvSZrMT8SZvLUoSZ4FZoSZ8JnoSZ8RZrScoLnrScoMT8ScoMX8ScrAT4ScrAZ8ScrLZ8ScrLkvScvDb8ScvLf8ScvNToSgrFZrShvKnrSloHUoSloLnrSlrMXoSl8HgrSmrJUoSn3BX6", "ATFlOn3ATLgrDYAT4MTAnAT8LTMnAYJnRTrAbGgJnrAbLV8LnAbvNTAnAeFbLg3AgOYMXoAlQbFboAnDboAfAnJgoJTBToDgAnBUJbAl3BboDUAnCTDlvLnCTFTrSnCYoQTLnDTwAbAnDUDTrSnDUHgHgrDX8LXFnDbJXAcrETvLTLnGTFTQbrGTMnGToGT3DUFbGUJlPX3GbQg8LnGboJbFnGb3GgAYGgAg8ScGgMbAXrGgvAbAnGnJTLnvGnvATFgHTDT6ATHTrDlJnHYLnMn8HZrSbJTHZ8LTFnHbFTJUoHgSeMT8HgrLjAnHgvAbAnHlFUrDlHnDgvAnHnHTFT3HnQTGnrJTAaMXvJTGbCn3JTOgrAnJXvAXMnJbMg8SnJbMnRg3Jb8LTMnJnAl3OnJnGYrQlJnJlQY3LTDlCn3LTJjLg3LTLgvFXLTMg3GTLV8HUOgLXFZLg3LXNXrMnLX8QXFnLX9AlMYLYLXPXrLZAbJU8LZDUJU8LZMXrSnLZ$AgFnLaPXrDULbFYrMnLbMn8LXLboJgJgLeFbLg3LgLZrSnLgOYAgoLhrRnJlLkCTrSnLkOnLhrLnFX%AYLnFZoJXLnHTvJbLnLloAbMTATLf8MTHgJn3MTMXrAXMT3MTFnMUITvFnMXFX%AYMXMXvFbMXrFTDbMYAcMX3MbLf8SnMb8JbFnMgMXrMTMgvAXFnMgvGgCmMnAloSnMnFnJTrOXvMXSnOX8HTMnObJT8ScObLZFl3ObMXCZoPTLgrQXPUFnoQXPU3RXJlPX3RkQXPbrJXQlPlrJbFnQUAhrDbQXGnCXvQYLnHlvQbLfLnvRTOgvJbRXJYrQlRYLnrQlRbLnrQlRlFT8JlRlFnrQXSTClCn3STHTrAnSTLZQlrSTMnGTrSToHgGbSTrGTDnSTvGXCnST3HgFbSU3HXAXSbAnJn3SbFT8LnScLfLnv", "AT3JgJX8AT8FZoSnAT8JgFV8AT8LhrDbAZ8JT8DbAb8GgLhrAb8SkLnvAe8MT8SnAlMYJXLVAl3GYDTvAl3LfLnvBUDTvLl3CTOn3HTrCT3DUGgrCU8MT8AbCbFTrJUoCgrDb8MTDTLV8JX8DTLnLXQlDT8LZrSnDUQb8FZ8DUST4JnvDb8ScOUoDj6GbJl4GTLfCYMlGToAXvFnGboAXvLnGgAcrJn3GgvFnSToGnLf8JnvGn#HTDToHTLnFXJlHTvATFToHTvHTDToHTvMTAgoHT3STClvHT4AlFl6HT8HTDToHUoDgJTrHUoScMX3HbRZrMXoHboJg8LTHgDb8JTrHgMToLf8HgvLnLnoHnHn3HT4Hn6MgvAnJTJU8ScvJT3AaQT8JT8HTrAnJXrRg8AnJbAloMXoJbrATFToJbvMnoSnJgDb6GgvJgDb8MXoJgSX3JU8JguATFToJlPYLnQlJlQkDnLbJlQlFYJlJl8Lf8OTJnCTFnLbJnLTHXMnJnLXGXCnJnoFfRg3JnrMYRg3Jn3HgFl3KT8Dg8LnLTRlFnPTLTvPbLbvLVoSbrCZLXMY6HT3LXNU7DlrLXNXDTATLX8DX8LnLZDb8JU8LZMnoLhrLZSToJU8LZrLaLnrLZvJn3SnLZ8LhrSnLaJnoMT8LbFlrHTvLbrFTLnrLbvATLlvLb6OTFn3LcLnJZOlLeAT6Mn4LeJT3ObrLg6LXFlrLhrJg8LnLhvDlPX4LhvLfLnvLj6JTFT3LnFbrMXoLnQluCTvLnrQXCY6LnvLfLnvLnvMgLnvLnvSeLf8MTMbrJn3MT3JgST3MT8AnATrMT8LULnrMUMToCZrMUScvLf8MXoDT8SnMX6ATFToMX8AXMT8MX8FkMT8MX8HTrDUMX8ScoSnMYJT6CTvMgAcrMXoMg8SToAfMlvAXLg3MnFl3AnvOT3AnFl3OUoATHT8OU3RnLXrOXrOXrSnObPbvFn6Og8HgrSnOg8OX8DbPTvAgoJgPU3RYLnrPXrDnJZrPb8CTGgvPlrLTDlvPlvFUJnoQUvFXrQlQeMnoAl3QlrQlrSnRTFTrJUoSTDlLiLXSTFg6HT3STJgoMn4STrFTJTrSTrLZFl3ST4FnMXoSUrDlHUoScvHTvSnSfLkvMXo", "AUoAcrMXoAZ8HboAg8AbOg6ATFgAg8AloMXoAl3AT8JTrAl8MX8MXoCT3SToJU8Cl8Db8MXoDT8HgrATrDboOT8MXoGTOTrATMnGT8LhrAZ8GnvFnGnQXHToGgvAcrHTvAXvLl3HbrAZoMXoHgBlFXLg3HgMnFXrSnHgrSb8JUoHn6HT8LgvITvATrJUoJUoLZrRnvJU8HT8Jb8JXvFX8QT8JXvLToJTrJYrQnGnQXJgrJnoATrJnoJU8ScvJnvMnvMXoLTCTLgrJXLTJlRTvQlLbRnJlQYvLbrMb8LnvLbvFn3RnoLdCVSTGZrLeSTvGXCnLg3MnoLn3MToLlrETvMT8SToAl3MbrDU6GTvMb8LX4LhrPlrLXGXCnSToLf8Rg3STrDb8LTrSTvLTHXMnSb3RYLnMnSgOg6ATFg", "HUDlGnrQXrJTrHgLnrAcJYMb8DULc8LTvFgGnCk3Mg8JbAnLX4QYvFYHnMXrRUoJnGnvFnRlvFTJlQnoSTrBXHXrLYSUJgLfoMT8Se8DTrHbDb", "AbDl8SToJU8An3RbAb8ST8DUSTrGnrAgoLbFU6Db8LTrMg8AaHT8Jb8ObDl8SToJU8Pb3RlvFYoJl"],
				lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

			function ct(e) {
				return e >= 40 ? e = e + 168 - 40 : e >= 19 && (e = e + 97 - 19), Object(K.h)([225, 132 + (e >> 6), 128 + (63 & e)])
			}
			let ut = null;

			function dt(e) {
				if (null == ut && (ut = [], st.forEach((e, t) => {
						t += 4;
						for (let r = 0; r < e.length; r += t) {
							let n = "";
							for (let o = 0; o < t; o++) n += ct(lt.indexOf(e[r + o]));
							ut.push(n)
						}
					}), ut.sort(), "0xf9eddeace9c5d3da9c93cf7d3cd38f6a13ed3affb933259ae865714e8a3ae71a" !== Le.check(e))) throw ut = null, new Error("BIP39 Wordlist for ko (Korean) FAILED")
			}
			const ht = new class extends Le {
				constructor() {
					super("ko")
				}
				getWord(e) {
					return dt(this), ut[e]
				}
				getWordIndex(e) {
					return dt(this), ut.indexOf(e)
				}
			};
			Le.register(ht);
			const ft = "AbacoAbbaglioAbbinatoAbeteAbissoAbolireAbrasivoAbrogatoAccadereAccennoAccusatoAcetoneAchilleAcidoAcquaAcreAcrilicoAcrobataAcutoAdagioAddebitoAddomeAdeguatoAderireAdipeAdottareAdulareAffabileAffettoAffissoAffrantoAforismaAfosoAfricanoAgaveAgenteAgevoleAggancioAgireAgitareAgonismoAgricoloAgrumetoAguzzoAlabardaAlatoAlbatroAlberatoAlboAlbumeAlceAlcolicoAlettoneAlfaAlgebraAlianteAlibiAlimentoAllagatoAllegroAllievoAllodolaAllusivoAlmenoAlogenoAlpacaAlpestreAltalenaAlternoAlticcioAltroveAlunnoAlveoloAlzareAmalgamaAmanitaAmarenaAmbitoAmbratoAmebaAmericaAmetistaAmicoAmmassoAmmendaAmmirareAmmonitoAmoreAmpioAmpliareAmuletoAnacardoAnagrafeAnalistaAnarchiaAnatraAncaAncellaAncoraAndareAndreaAnelloAngeloAngolareAngustoAnimaAnnegareAnnidatoAnnoAnnuncioAnonimoAnticipoAnziApaticoAperturaApodeApparireAppetitoAppoggioApprodoAppuntoAprileArabicaArachideAragostaAraldicaArancioAraturaArazzoArbitroArchivioArditoArenileArgentoArgineArgutoAriaArmoniaArneseArredatoArringaArrostoArsenicoArsoArteficeArzilloAsciuttoAscoltoAsepsiAsetticoAsfaltoAsinoAsolaAspiratoAsproAssaggioAsseAssolutoAssurdoAstaAstenutoAsticeAstrattoAtavicoAteismoAtomicoAtonoAttesaAttivareAttornoAttritoAttualeAusilioAustriaAutistaAutonomoAutunnoAvanzatoAvereAvvenireAvvisoAvvolgereAzioneAzotoAzzimoAzzurroBabeleBaccanoBacinoBacoBadessaBadilataBagnatoBaitaBalconeBaldoBalenaBallataBalzanoBambinoBandireBaraondaBarbaroBarcaBaritonoBarlumeBaroccoBasilicoBassoBatostaBattutoBauleBavaBavosaBeccoBeffaBelgioBelvaBendaBenevoleBenignoBenzinaBereBerlinaBetaBibitaBiciBidoneBifidoBigaBilanciaBimboBinocoloBiologoBipedeBipolareBirbanteBirraBiscottoBisestoBisnonnoBisonteBisturiBizzarroBlandoBlattaBollitoBonificoBordoBoscoBotanicoBottinoBozzoloBraccioBradipoBramaBrancaBravuraBretellaBrevettoBrezzaBrigliaBrillanteBrindareBroccoloBrodoBronzinaBrulloBrunoBubboneBucaBudinoBuffoneBuioBulboBuonoBurloneBurrascaBussolaBustaCadettoCaducoCalamaroCalcoloCalesseCalibroCalmoCaloriaCambusaCamerataCamiciaCamminoCamolaCampaleCanapaCandelaCaneCaninoCanottoCantinaCapaceCapelloCapitoloCapogiroCapperoCapraCapsulaCarapaceCarcassaCardoCarismaCarovanaCarrettoCartolinaCasaccioCascataCasermaCasoCassoneCastelloCasualeCatastaCatenaCatrameCautoCavilloCedibileCedrataCefaloCelebreCellulareCenaCenoneCentesimoCeramicaCercareCertoCerumeCervelloCesoiaCespoCetoChelaChiaroChiccaChiedereChimeraChinaChirurgoChitarraCiaoCiclismoCifrareCignoCilindroCiottoloCircaCirrosiCitricoCittadinoCiuffoCivettaCivileClassicoClinicaCloroCoccoCodardoCodiceCoerenteCognomeCollareColmatoColoreColposoColtivatoColzaComaCometaCommandoComodoComputerComuneConcisoCondurreConfermaCongelareConiugeConnessoConoscereConsumoContinuoConvegnoCopertoCopioneCoppiaCopricapoCorazzaCordataCoricatoCorniceCorollaCorpoCorredoCorsiaCorteseCosmicoCostanteCotturaCovatoCratereCravattaCreatoCredereCremosoCrescitaCretaCricetoCrinaleCrisiCriticoCroceCronacaCrostataCrucialeCruscaCucireCuculoCuginoCullatoCupolaCuratoreCursoreCurvoCuscinoCustodeDadoDainoDalmataDamerinoDanielaDannosoDanzareDatatoDavantiDavveroDebuttoDecennioDecisoDeclinoDecolloDecretoDedicatoDefinitoDeformeDegnoDelegareDelfinoDelirioDeltaDemenzaDenotatoDentroDepositoDerapataDerivareDerogaDescrittoDesertoDesiderioDesumereDetersivoDevotoDiametroDicembreDiedroDifesoDiffusoDigerireDigitaleDiluvioDinamicoDinnanziDipintoDiplomaDipoloDiradareDireDirottoDirupoDisagioDiscretoDisfareDisgeloDispostoDistanzaDisumanoDitoDivanoDiveltoDividereDivoratoDobloneDocenteDoganaleDogmaDolceDomatoDomenicaDominareDondoloDonoDormireDoteDottoreDovutoDozzinaDragoDruidoDubbioDubitareDucaleDunaDuomoDupliceDuraturoEbanoEccessoEccoEclissiEconomiaEderaEdicolaEdileEditoriaEducareEgemoniaEgliEgoismoEgregioElaboratoElargireEleganteElencatoElettoElevareElficoElicaElmoElsaElusoEmanatoEmblemaEmessoEmiroEmotivoEmozioneEmpiricoEmuloEndemicoEnduroEnergiaEnfasiEnotecaEntrareEnzimaEpatiteEpilogoEpisodioEpocaleEppureEquatoreErarioErbaErbosoEredeEremitaErigereErmeticoEroeErosivoErranteEsagonoEsameEsanimeEsaudireEscaEsempioEsercitoEsibitoEsigenteEsistereEsitoEsofagoEsortatoEsosoEspansoEspressoEssenzaEssoEstesoEstimareEstoniaEstrosoEsultareEtilicoEtnicoEtruscoEttoEuclideoEuropaEvasoEvidenzaEvitatoEvolutoEvvivaFabbricaFaccendaFachiroFalcoFamigliaFanaleFanfaraFangoFantasmaFareFarfallaFarinosoFarmacoFasciaFastosoFasulloFaticareFatoFavolosoFebbreFecolaFedeFegatoFelpaFeltroFemminaFendereFenomenoFermentoFerroFertileFessuraFestivoFettaFeudoFiabaFiduciaFifaFiguratoFiloFinanzaFinestraFinireFioreFiscaleFisicoFiumeFlaconeFlamencoFleboFlemmaFloridoFluenteFluoroFobicoFocacciaFocosoFoderatoFoglioFolataFolcloreFolgoreFondenteFoneticoFoniaFontanaForbitoForchettaForestaFormicaFornaioForoFortezzaForzareFosfatoFossoFracassoFranaFrassinoFratelloFreccettaFrenataFrescoFrigoFrollinoFrondeFrugaleFruttaFucilataFucsiaFuggenteFulmineFulvoFumanteFumettoFumosoFuneFunzioneFuocoFurboFurgoneFuroreFusoFutileGabbianoGaffeGalateoGallinaGaloppoGamberoGammaGaranziaGarboGarofanoGarzoneGasdottoGasolioGastricoGattoGaudioGazeboGazzellaGecoGelatinaGelsoGemelloGemmatoGeneGenitoreGennaioGenotipoGergoGhepardoGhiaccioGhisaGialloGildaGineproGiocareGioielloGiornoGioveGiratoGironeGittataGiudizioGiuratoGiustoGlobuloGlutineGnomoGobbaGolfGomitoGommoneGonfioGonnaGovernoGracileGradoGraficoGrammoGrandeGrattareGravosoGraziaGrecaGreggeGrifoneGrigioGrinzaGrottaGruppoGuadagnoGuaioGuantoGuardareGufoGuidareIbernatoIconaIdenticoIdillioIdoloIdraIdricoIdrogenoIgieneIgnaroIgnoratoIlareIllesoIllogicoIlludereImballoImbevutoImboccoImbutoImmaneImmersoImmolatoImpaccoImpetoImpiegoImportoImprontaInalareInarcareInattivoIncantoIncendioInchinoIncisivoInclusoIncontroIncrocioIncuboIndagineIndiaIndoleIneditoInfattiInfilareInflittoIngaggioIngegnoIngleseIngordoIngrossoInnescoInodoreInoltrareInondatoInsanoInsettoInsiemeInsonniaInsulinaIntasatoInteroIntonacoIntuitoInumidireInvalidoInveceInvitoIperboleIpnoticoIpotesiIppicaIrideIrlandaIronicoIrrigatoIrrorareIsolatoIsotopoIstericoIstitutoIstriceItaliaIterareLabbroLabirintoLaccaLaceratoLacrimaLacunaLaddoveLagoLampoLancettaLanternaLardosoLargaLaringeLastraLatenzaLatinoLattugaLavagnaLavoroLegaleLeggeroLemboLentezzaLenzaLeoneLepreLesivoLessatoLestoLetteraleLevaLevigatoLiberoLidoLievitoLillaLimaturaLimitareLimpidoLineareLinguaLiquidoLiraLiricaLiscaLiteLitigioLivreaLocandaLodeLogicaLombareLondraLongevoLoquaceLorenzoLotoLotteriaLuceLucidatoLumacaLuminosoLungoLupoLuppoloLusingaLussoLuttoMacabroMacchinaMaceroMacinatoMadamaMagicoMagliaMagneteMagroMaiolicaMalafedeMalgradoMalintesoMalsanoMaltoMalumoreManaManciaMandorlaMangiareManifestoMannaroManovraMansardaMantideManubrioMappaMaratonaMarcireMarettaMarmoMarsupioMascheraMassaiaMastinoMaterassoMatricolaMattoneMaturoMazurcaMeandroMeccanicoMecenateMedesimoMeditareMegaMelassaMelisMelodiaMeningeMenoMensolaMercurioMerendaMerloMeschinoMeseMessereMestoloMetalloMetodoMettereMiagolareMicaMicelioMicheleMicroboMidolloMieleMiglioreMilanoMiliteMimosaMineraleMiniMinoreMirinoMirtilloMiscelaMissivaMistoMisurareMitezzaMitigareMitraMittenteMnemonicoModelloModificaModuloMoganoMogioMoleMolossoMonasteroMoncoMondinaMonetarioMonileMonotonoMonsoneMontatoMonvisoMoraMordereMorsicatoMostroMotivatoMotosegaMottoMovenzaMovimentoMozzoMuccaMucosaMuffaMughettoMugnaioMulattoMulinelloMultiploMummiaMuntoMuovereMuraleMusaMuscoloMusicaMutevoleMutoNababboNaftaNanometroNarcisoNariceNarratoNascereNastrareNaturaleNauticaNaviglioNebulosaNecrosiNegativoNegozioNemmenoNeofitaNerettoNervoNessunoNettunoNeutraleNeveNevroticoNicchiaNinfaNitidoNobileNocivoNodoNomeNominaNordicoNormaleNorvegeseNostranoNotareNotiziaNotturnoNovellaNucleoNullaNumeroNuovoNutrireNuvolaNuzialeOasiObbedireObbligoObeliscoOblioOboloObsoletoOccasioneOcchioOccidenteOccorrereOccultareOcraOculatoOdiernoOdorareOffertaOffrireOffuscatoOggettoOggiOgnunoOlandeseOlfattoOliatoOlivaOlogrammaOltreOmaggioOmbelicoOmbraOmegaOmissioneOndosoOnereOniceOnnivoroOnorevoleOntaOperatoOpinioneOppostoOracoloOrafoOrdineOrecchinoOreficeOrfanoOrganicoOrigineOrizzonteOrmaOrmeggioOrnativoOrologioOrrendoOrribileOrtensiaOrticaOrzataOrzoOsareOscurareOsmosiOspedaleOspiteOssaOssidareOstacoloOsteOtiteOtreOttagonoOttimoOttobreOvaleOvestOvinoOviparoOvocitoOvunqueOvviareOzioPacchettoPacePacificoPadellaPadronePaesePagaPaginaPalazzinaPalesarePallidoPaloPaludePandoroPannelloPaoloPaonazzoPapricaParabolaParcellaParerePargoloPariParlatoParolaPartireParvenzaParzialePassivoPasticcaPataccaPatologiaPattumePavonePeccatoPedalarePedonalePeggioPelosoPenarePendicePenisolaPennutoPenombraPensarePentolaPepePepitaPerbenePercorsoPerdonatoPerforarePergamenaPeriodoPermessoPernoPerplessoPersuasoPertugioPervasoPesatorePesistaPesoPestiferoPetaloPettinePetulantePezzoPiacerePiantaPiattinoPiccinoPicozzaPiegaPietraPifferoPigiamaPigolioPigroPilaPiliferoPillolaPilotaPimpantePinetaPinnaPinoloPioggiaPiomboPiramidePireticoPiritePirolisiPitonePizzicoPlaceboPlanarePlasmaPlatanoPlenarioPochezzaPoderosoPodismoPoesiaPoggiarePolentaPoligonoPollicePolmonitePolpettaPolsoPoltronaPolverePomicePomodoroPontePopolosoPorfidoPorosoPorporaPorrePortataPosaPositivoPossessoPostulatoPotassioPoterePranzoPrassiPraticaPreclusoPredicaPrefissoPregiatoPrelievoPremerePrenotarePreparatoPresenzaPretestoPrevalsoPrimaPrincipePrivatoProblemaProcuraProdurreProfumoProgettoProlungaPromessaPronomePropostaProrogaProtesoProvaPrudentePrugnaPruritoPsichePubblicoPudicaPugilatoPugnoPulcePulitoPulsantePuntarePupazzoPupillaPuroQuadroQualcosaQuasiQuerelaQuotaRaccoltoRaddoppioRadicaleRadunatoRafficaRagazzoRagioneRagnoRamarroRamingoRamoRandagioRantolareRapatoRapinaRappresoRasaturaRaschiatoRasenteRassegnaRastrelloRataRavvedutoRealeRecepireRecintoReclutaReconditoRecuperoRedditoRedimereRegalatoRegistroRegolaRegressoRelazioneRemareRemotoRennaReplicaReprimereReputareResaResidenteResponsoRestauroReteRetinaRetoricaRettificaRevocatoRiassuntoRibadireRibelleRibrezzoRicaricaRiccoRicevereRiciclatoRicordoRicredutoRidicoloRidurreRifasareRiflessoRiformaRifugioRigareRigettatoRighelloRilassatoRilevatoRimanereRimbalzoRimedioRimorchioRinascitaRincaroRinforzoRinnovoRinomatoRinsavitoRintoccoRinunciaRinvenireRiparatoRipetutoRipienoRiportareRipresaRipulireRisataRischioRiservaRisibileRisoRispettoRistoroRisultatoRisvoltoRitardoRitegnoRitmicoRitrovoRiunioneRivaRiversoRivincitaRivoltoRizomaRobaRoboticoRobustoRocciaRocoRodaggioRodereRoditoreRogitoRollioRomanticoRompereRonzioRosolareRospoRotanteRotondoRotulaRovescioRubizzoRubricaRugaRullinoRumineRumorosoRuoloRupeRussareRusticoSabatoSabbiareSabotatoSagomaSalassoSaldaturaSalgemmaSalivareSalmoneSaloneSaltareSalutoSalvoSapereSapidoSaporitoSaracenoSarcasmoSartoSassosoSatelliteSatiraSatolloSaturnoSavanaSavioSaziatoSbadiglioSbalzoSbancatoSbarraSbattereSbavareSbendareSbirciareSbloccatoSbocciatoSbrinareSbruffoneSbuffareScabrosoScadenzaScalaScambiareScandaloScapolaScarsoScatenareScavatoSceltoScenicoScettroSchedaSchienaSciarpaScienzaScindereScippoSciroppoScivoloSclerareScodellaScolpitoScompartoSconfortoScoprireScortaScossoneScozzeseScribaScrollareScrutinioScuderiaScultoreScuolaScuroScusareSdebitareSdoganareSeccaturaSecondoSedanoSeggiolaSegnalatoSegregatoSeguitoSelciatoSelettivoSellaSelvaggioSemaforoSembrareSemeSeminatoSempreSensoSentireSepoltoSequenzaSerataSerbatoSerenoSerioSerpenteSerraglioServireSestinaSetolaSettimanaSfaceloSfaldareSfamatoSfarzosoSfaticatoSferaSfidaSfilatoSfingeSfocatoSfoderareSfogoSfoltireSforzatoSfrattoSfruttatoSfuggitoSfumareSfusoSgabelloSgarbatoSgonfiareSgorbioSgrassatoSguardoSibiloSiccomeSierraSiglaSignoreSilenzioSillabaSimboloSimpaticoSimulatoSinfoniaSingoloSinistroSinoSintesiSinusoideSiparioSismaSistoleSituatoSlittaSlogaturaSlovenoSmarritoSmemoratoSmentitoSmeraldoSmilzoSmontareSmottatoSmussatoSnellireSnervatoSnodoSobbalzoSobrioSoccorsoSocialeSodaleSoffittoSognoSoldatoSolenneSolidoSollazzoSoloSolubileSolventeSomaticoSommaSondaSonettoSonniferoSopireSoppesoSopraSorgereSorpassoSorrisoSorsoSorteggioSorvolatoSospiroSostaSottileSpadaSpallaSpargereSpatolaSpaventoSpazzolaSpecieSpedireSpegnereSpelaturaSperanzaSpessoreSpettraleSpezzatoSpiaSpigolosoSpillatoSpinosoSpiraleSplendidoSportivoSposoSprangaSprecareSpronatoSpruzzoSpuntinoSquilloSradicareSrotolatoStabileStaccoStaffaStagnareStampatoStantioStarnutoStaseraStatutoSteloSteppaSterzoStilettoStimaStirpeStivaleStizzosoStonatoStoricoStrappoStregatoStriduloStrozzareStruttoStuccareStufoStupendoSubentroSuccosoSudoreSuggeritoSugoSultanoSuonareSuperboSupportoSurgelatoSurrogatoSussurroSuturaSvagareSvedeseSveglioSvelareSvenutoSveziaSviluppoSvistaSvizzeraSvoltaSvuotareTabaccoTabulatoTacciareTaciturnoTaleTalismanoTamponeTanninoTaraTardivoTargatoTariffaTarpareTartarugaTastoTatticoTavernaTavolataTazzaTecaTecnicoTelefonoTemerarioTempoTemutoTendoneTeneroTensioneTentacoloTeoremaTermeTerrazzoTerzettoTesiTesseratoTestatoTetroTettoiaTifareTigellaTimbroTintoTipicoTipografoTiraggioTiroTitanioTitoloTitubanteTizioTizzoneToccareTollerareToltoTombolaTomoTonfoTonsillaTopazioTopologiaToppaTorbaTornareTorroneTortoraToscanoTossireTostaturaTotanoTraboccoTracheaTrafilaTragediaTralcioTramontoTransitoTrapanoTrarreTraslocoTrattatoTraveTrecciaTremolioTrespoloTributoTrichecoTrifoglioTrilloTrinceaTrioTristezzaTrituratoTrivellaTrombaTronoTroppoTrottolaTrovareTruccatoTubaturaTuffatoTulipanoTumultoTunisiaTurbareTurchinoTutaTutelaUbicatoUccelloUccisoreUdireUditivoUffaUfficioUgualeUlisseUltimatoUmanoUmileUmorismoUncinettoUngereUnghereseUnicornoUnificatoUnisonoUnitarioUnteUovoUpupaUraganoUrgenzaUrloUsanzaUsatoUscitoUsignoloUsuraioUtensileUtilizzoUtopiaVacanteVaccinatoVagabondoVagliatoValangaValgoValicoVallettaValorosoValutareValvolaVampataVangareVanitosoVanoVantaggioVanveraVaporeVaranoVarcatoVarianteVascaVedettaVedovaVedutoVegetaleVeicoloVelcroVelinaVellutoVeloceVenatoVendemmiaVentoVeraceVerbaleVergognaVerificaVeroVerrucaVerticaleVescicaVessilloVestaleVeteranoVetrinaVetustoViandanteVibranteVicendaVichingoVicinanzaVidimareVigiliaVignetoVigoreVileVillanoViminiVincitoreViolaViperaVirgolaVirologoVirulentoViscosoVisioneVispoVissutoVisuraVitaVitelloVittimaVivandaVividoViziareVoceVogaVolatileVolereVolpeVoragineVulcanoZampognaZannaZappatoZatteraZavorraZefiroZelanteZeloZenzeroZerbinoZibettoZincoZirconeZittoZollaZoticoZuccheroZufoloZuluZuppa";
			let mt = null;

			function pt(e) {
				if (null == mt && (mt = ft.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x5c1362d88fd4cf614a96f3234941d29f7d37c08c5292fde03bf62c2db6ff7620" !== Le.check(e))) throw mt = null, new Error("BIP39 Wordlist for it (Italian) FAILED")
			}
			const gt = new class extends Le {
				constructor() {
					super("it")
				}
				getWord(e) {
					return pt(this), mt[e]
				}
				getWordIndex(e) {
					return pt(this), mt.indexOf(e)
				}
			};
			Le.register(gt);
			const bt = "}aE#4A=Yv&co#4N#6G=cJ&SM#66|/Z#4t&kn~46#4K~4q%b9=IR#7l,mB#7W_X2*dl}Uo~7s}Uf&Iw#9c&cw~6O&H6&wx&IG%v5=IQ~8a&Pv#47$PR&50%Ko&QM&3l#5f,D9#4L|/H&tQ;v0~6n]nN<di,AM=W5%QO&ka&ua,hM^tm=zV=JA=wR&+X]7P&NB#4J#5L|/b[dA}tJ<Do&6m&u2[U1&Kb.HM&mC=w0&MW<rY,Hq#6M}QG,13&wP}Jp]Ow%ue&Kg<HP<D9~4k~9T&I2_c6$9T#9/[C5~7O~4a=cs&O7=KK=An&l9$6U$8A&uD&QI|/Y&bg}Ux&F2#6b}E2&JN&kW&kp=U/&bb=Xl<Cj}k+~5J#6L&5z&9i}b4&Fo,ho(X0_g3~4O$Fz&QE<HN=Ww]6/%GF-Vw=tj&/D&PN#9g=YO}cL&Of&PI~5I&Ip=vU=IW#9G;0o-wU}ss&QR<BT&R9=tk$PY_dh&Pq-yh]7T,nj.Xu=EP&76=cI&Fs*Xg}z7$Gb&+I=DF,AF=cA}rL#7j=Dz&3y<Aa$52=PQ}b0(iY$Fa}oL&xV#6U=ec=WZ,xh%RY<dp#9N&Fl&44=WH*A7=sh&TB&8P=07;u+&PK}uh}J5#72)V/=xC,AB$k0&f6;1E|+5=1B,3v]6n&wR%b+&xx]7f=Ol}fl;+D^wG]7E;nB;uh^Ir&l5=JL,nS=cf=g5;u6|/Q$Gc=MH%Hg#5d%M6^86=U+$Gz,l/,ir^5y&Ba&/F-IY&FI&be%IZ#77&PW_Nu$kE(Yf&NX]7Z,Jy&FJ(Xo&Nz#/d=y7&MX<Ag}Z+;nE]Dt(iG#4D=13&Pj~4c%v8&Zo%OL&/X#4W<HR&ie~6J_1O(Y2=y5=Ad*cv_eB#6k&PX:BU#7A;uk&Ft&Fx_dD=U2;vB=U5=4F}+O&GN.HH:9s=b0%NV(jO&IH=JT}Z9=VZ<Af,Kx^4m&uJ%c6,6r;9m#+L}cf%Kh&F3~4H=vP}bu,Hz|++,1w]nv}k6;uu$jw*Kl*WX&uM[x7&Fr[m7$NO&QN]hu=JN}nR^8g#/h(ps|KC;vd}xz=V0}p6&FD$G1#7K<bG_4p~8g&cf;u4=tl}+k%5/}fz;uw<cA=u1}gU}VM=LJ=eX&+L&Pr#4U}p2:nC,2K]7H:jF&9x}uX#9O=MB<fz~8X~5m&4D&kN&u5%E/(h7(ZF&VG<de(qM|/e-Wt=3x(a+,/R]f/&ND$Ro&nU}0g=KA%kH&NK$Ke<dS}cB&IX~5g$TN]6m=Uv,Is&Py=Ef%Kz#+/%bi&+A<F4$OG&4C&FL#9V<Zk=2I_eE&6c]nw&kq$HG}y+&A8$P3}OH=XP]70%IS(AJ_gH%GZ&tY&AZ=vb~6y&/r=VI=Wv<Zi=fl=xf&eL}c8}OL=MJ=g8$F7=YT}9u=0+^xC}JH&nL^N0~4T]K2,Cy%OC#6s;vG(AC^xe^cG&MF}Br#9P;wD-7h$O/&xA}Fn^PC]6i]7G&8V$Qs;vl(TB~73~4l<mW&6V=2y&uY&+3)aP}XF;LP&kx$wU=t7;uy<FN&lz)7E=Oo*Y+;wI}9q}le;J6&Ri&4t&Qr#8B=cb&vG=J5|Ql(h5<Yy~4+}QD,Lx=wn%K/&RK=dO&Pw,Q9=co%4u;9u}g0@6a^4I%b0=zo|/c&tX=dQ=OS#+b=yz_AB&wB&Pm=W9$HP_gR=62=AO=ti=hI,oA&jr&dH=tm&b6$P2(x8=zi;nG~7F;05]0n[Ix&3m}rg=Xp=cd&uz]7t;97=cN;vV<jf&FF&F1=6Q&Ik*Kk&P4,2z=fQ]7D&3u,H0=d/}Uw<ZN<7R}Kv;0f$H7,MD]7n$F0#88~9Z%da=by;+T#/u=VF&fO&kr^kf<AB]sU,I5$Ng&Pz;0i&QD&vM=Yl:BM;nJ_xJ]U7&Kf&30,3f|Z9*dC)je_jA&Q4&Kp$NH(Yz#6S&Id%Ib=KX,AD=KV%dP}tW&Pk^+E_Ni=cq,3R}VZ(Si=b+}rv;0j}rZ]uA,/w(Sx&Jv$w9&4d&wE,NJ$Gy=J/]Ls#7k<ZQ<Y/&uj]Ov$PM;v3,2F&+u:up=On&3e,Jv;90=J+&Qm]6q}bK#+d~8Y(h2]hA;99&AS=I/}qB&dQ}yJ-VM}Vl&ui,iB&G3|Dc]7d=eQ%dX%JC_1L~4d^NP;vJ&/1)ZI#7N]9X[bQ&PL=0L(UZ,Lm&kc&IR}n7(iR<AQ<dg=33=vN}ft}au]7I,Ba=x9=dR~6R&Tq=Xi,3d$Nr&Bc}DI&ku&vf]Dn,/F&iD,Ll&Nw=0y&I7=Ls=/A&tU=Qe}Ua&uk&+F=g4=gh=Vj#+1&Qn}Uy*44#5F,Pc&Rz*Xn=oh=5W;0n_Nf(iE<Y7=vr=Zu]oz#5Z%mI=kN=Bv_Jp(T2;vt_Ml<FS&uI=L/&6P]64$M7}86<bo%QX(SI%IY&VK=Al&Ux;vv;ut*E/%uh<ZE|O3,M2(yc]yu=Wk&tp:Ex}hr,Cl&WE)+Z=8U}I2_4Q,hA_si=iw=OM=tM=yZ%Ia=U7;wT}b+;uo=Za}yS!5x}HD}fb#5O_dA;Nv%uB(yB;01(Sf}Fk;v7}Pt#8v<mZ#7L,/r&Pl~4w&f5=Ph$Fw_LF&8m,bL=yJ&BH}p/*Jn}tU~5Q;wB(h6]Df]8p^+B;E4&Wc=d+;Ea&bw$8C&FN,DM=Yf}mP~5w=fT#6V=mC=Fi=AV}jB&AN}lW}aH#/D)dZ;hl;vE}/7,CJ;31&w8,hj%u9_Js=jJ&4M~8k=TN&eC}nL&uc-wi&lX}dj=Mv=e2#6u=cr$uq$6G]8W}Jb:nm=Yg<b3(UA;vX&6n&xF=KT,jC,De&R8&oY=Zv&oB]7/=Z2&Oa}bf,hh(4h^tZ&72&Nx;D2&xL~5h~40)ZG)h+=OJ&RA]Bv$yB=Oq=df,AQ%Jn}OJ;11,3z&Tl&tj;v+^Hv,Dh(id=s+]7N&N3)9Q~8f,S4=uW=w4&uX,LX&3d]CJ&yp&8x<b2_do&lP=y/<cy_dG=Oi=7R(VH(lt_1T,Iq_AA;12^6T%k6#8K[B1{oO<AU[Bt;1b$9S&Ps<8T=St{bY,jB(Zp&63&Uv$9V,PM]6v&Af}zW[bW_oq}sm}nB&Kq&gC&ff_eq_2m&5F&TI}rf}Gf;Zr_z9;ER&jk}iz_sn<BN~+n&vo=Vi%97|ZR=Wc,WE&6t]6z%85(ly#84=KY)6m_5/=aX,N3}Tm&he&6K]tR_B2-I3;u/&hU&lH<AP=iB&IA=XL;/5&Nh=wv<BH#79=vS=zl<AA=0X_RG}Bw&9p$NW,AX&kP_Lp&/Z(Tc]Mu}hs#6I}5B&cI<bq&H9#6m=K9}vH(Y1(Y0#4B&w6,/9&gG<bE,/O=zb}I4_l8<B/;wL%Qo<HO[Mq=XX}0v&BP&F4(mG}0i}nm,EC=9u{I3,xG&/9=JY*DK&hR)BX=EI=cx=b/{6k}yX%A+&wa}Xb=la;wi^lL;0t}jo&Qb=xg=XB}iO<qo{bR=NV&8f=a0&Jy;0v=uK)HK;vN#6h&jB(h/%ud&NI%wY.X7=Pt}Cu-uL&Gs_hl%mH,tm]78=Lb^Q0#7Y=1u<Bt&+Q=Co_RH,w3;1e}ux<aU;ui}U3&Q5%bt]63&UQ|0l&uL}O7&3o,AV&dm|Nj(Xt*5+(Uu&Hh(p7(UF=VR=Bp^Jl&Hd[ix)9/=Iq]C8<67]66}mB%6f}bb}JI]8T$HA}db=YM&pa=2J}tS&Y0=PS&y4=cX$6E,hX,XP&nR;04,FQ&l0&Vm_Dv#5Y~8Z=Bi%MA]6x=JO:+p,Az&9q,Hj~6/}SD=K1:EJ}nA;Qo#/E]9R,Ie&6X%W3]61&v4=xX_MC=0q;06(Xq=fs}IG}Dv=0l}o7$iZ;9v&LH&DP-7a&OY,SZ,Kz,Cv&dh=fx|Nh,F/~7q=XF&w+;9n&Gw;0h}Z7<7O&JK(S7&LS<AD<ac=wo<Dt&zw%4B=4v#8P;9o~6p*vV=Tm,Or&I6=1q}nY=P0=gq&Bl&Uu,Ch%yb}UY=zh}dh}rl(T4_xk(YA#8R*xH,IN}Jn]7V}C4&Ty}j3]7p=cL=3h&wW%Qv<Z3=f0&RI&+S(ic_zq}oN&/Y=z1;Td=LW=0e=OI(Vc,+b^ju(UL;0r:Za%8v=Rp=zw&58&73&wK}qX]6y&8E)a2}WR=wP^ur&nQ<cH}Re=Aq&wk}Q0&+q=PP,Gc|/d^k5,Fw]8Y}Pg]p3=ju=ed}r5_yf&Cs]7z$/G<Cm&Jp&54_1G_gP_Ll}JZ;0u]k8_7k(Sg]65{9i=LN&Sx&WK,iW&fD&Lk{9a}Em-9c#8N&io=sy]8d&nT&IK(lx#7/$lW(Td<s8~49,3o<7Y=MW(T+_Jr&Wd,iL}Ct=xh&5V;v4&8n%Kx=iF&l2_0B{B+,If(J0,Lv;u8=Kx-vB=HC&vS=Z6&fU&vE^xK;3D=4h=MR#45:Jw;0d}iw=LU}I5=I0]gB*im,K9}GU,1k_4U&Tt=Vs(iX&lU(TF#7y,ZO}oA&m5#5P}PN}Uz=hM<B1&FB<aG,e6~7T<tP(UQ_ZT=wu&F8)aQ]iN,1r_Lo&/g:CD}84{J1_Ki&Na&3n$jz&FE=dc;uv;va}in}ll=fv(h1&3h}fp=Cy}BM(+E~8m}lo%v7=hC(T6$cj=BQ=Bw(DR,2j=Ks,NS|F+;00=fU=70}Mb(YU;+G&m7&hr=Sk%Co]t+(X5_Jw}0r}gC(AS-IP&QK<Z2#8Q$WC]WX}T2&pG_Ka,HC=R4&/N;Z+;ch(C7,D4$3p_Mk&B2$8D=n9%Ky#5z(CT&QJ#7B]DC]gW}nf~5M;Iw#80}Tc_1F#4Z-aC}Hl=ph=fz,/3=aW}JM}nn;DG;vm}wn,4P}T3;wx&RG$u+}zK=0b;+J_Ek{re<aZ=AS}yY#5D]7q,Cp}xN=VP*2C}GZ}aG~+m_Cs=OY#6r]6g<GS}LC(UB=3A=Bo}Jy<c4}Is;1P<AG}Op<Z1}ld}nS=1Z,yM&95&98=CJ(4t:2L$Hk=Zo}Vc;+I}np&N1}9y=iv}CO*7p=jL)px]tb^zh&GS&Vl%v/;vR=14=zJ&49|/f]hF}WG;03=8P}o/&Gg&rp;DB,Kv}Ji&Pb;aA^ll(4j%yt}+K$Ht#4y&hY]7Y<F1,eN}bG(Uh%6Z]t5%G7;+F_RE;it}tL=LS&Da=Xx(S+(4f=8G=yI}cJ}WP=37=jS}pX}hd)fp<A8=Jt~+o$HJ=M6}iX=g9}CS=dv=Cj(mP%Kd,xq|+9&LD(4/=Xm&QP=Lc}LX&fL;+K=Op(lu=Qs.qC:+e&L+=Jj#8w;SL]7S(b+#4I=c1&nG_Lf&uH;+R)ZV<bV%B/,TE&0H&Jq&Ah%OF&Ss(p2,Wv&I3=Wl}Vq;1L&lJ#9b_1H=8r=b8=JH(SZ=hD=J2#7U,/U#/X~6P,FU<eL=jx,mG=hG=CE&PU=Se(qX&LY=X6=y4&tk&QQ&tf=4g&xI}W+&mZ=Dc#7w}Lg;DA;wQ_Kb(cJ=hR%yX&Yb,hw{bX_4X;EP;1W_2M}Uc=b5(YF,CM&Tp^OJ{DD]6s=vF=Yo~8q}XH}Fu%P5(SJ=Qt;MO]s8<F3&B3&8T(Ul-BS*dw&dR<87}/8]62$PZ]Lx<Au}9Q]7c=ja=KR,Go,Us&v6(qk}pG&G2=ev^GM%w4&H4]7F&dv]J6}Ew:9w=sj-ZL}Ym$+h(Ut(Um~4n=Xs(U7%eE=Qc_JR<CA#6t<Fv|/I,IS,EG<F2(Xy$/n<Fa(h9}+9_2o&N4#7X<Zq|+f_Dp=dt&na,Ca=NJ)jY=8C=YG=s6&Q+<DO}D3=xB&R1(lw;Qn<bF(Cu|/B}HV=SS&n7,10&u0]Dm%A6^4Q=WR(TD=Xo<GH,Rj(l8)bP&n/=LM&CF,F5&ml=PJ;0k=LG=tq,Rh,D6@4i=1p&+9=YC%er_Mh;nI;0q=Fw]80=xq=FM$Gv;v6&nc;wK%H2&Kj;vs,AA=YP,66}bI(qR~5U=6q~4b$Ni=K5.X3$So&Iu(p+]8G=Cf=RY(TS_O3(iH&57=fE=Dg_Do#9z#7H;FK{qd_2k%JR}en&gh_z8;Rx}9p<cN_Ne,DO;LN_7o~/p=NF=5Y}gN<ce<C1,QE]Wv=3u<BC}GK]yq}DY&u/_hj=II(pz&rC,jV&+Z}ut=NQ;Cg-SR_ZS,+o=u/;Oy_RK_QF(Fx&xP}Wr&TA,Uh&g1=yr{ax[VF$Pg(YB;Ox=Vy;+W(Sp}XV%dd&33(l/]l4#4Y}OE=6c=bw(A7&9t%wd&N/&mo,JH&Qe)fm=Ao}fu=tH",
				vt = "FAZDC6BALcLZCA+GBARCW8wNCcDDZ8LVFBOqqDUiou+M42TFAyERXFb7EjhP+vmBFpFrUpfDV2F7eB+eCltCHJFWLFCED+pWTojEIHFXc3aFn4F68zqjEuKidS1QBVPDEhE7NA4mhMF7oThD49ot3FgtzHFCK0acW1x8DH1EmLoIlrWFBLE+y5+NA3Cx65wJHTaEZVaK1mWAmPGxgYCdxwOjTDIt/faOEhTl1vqNsKtJCOhJWuio2g07KLZEQsFBUpNtwEByBgxFslFheFbiEPvi61msDvApxCzB6rBCzox7joYA5UdDc+Cb4FSgIabpXFAj3bjkmFAxCZE+mD/SFf/0ELecYCt3nLoxC6WEZf2tKDB4oZvrEmqFkKk7BwILA7gtYBpsTq//D4jD0F0wEB9pyQ1BD5Ba0oYHDI+sbDFhvrHXdDHfgFEIJLi5r8qercNFBgFLC4bo5ERJtamWBDFy73KCEb6M8VpmEt330ygCTK58EIIFkYgF84gtGA9Uyh3m68iVrFbWFbcbqiCYHZ9J1jeRPbL8yswhMiDbhEhdNoSwFbZrLT740ABEqgCkO8J1BLd1VhKKR4sD1yUo0z+FF59Mvg71CFbyEhbHSFBKEIKyoQNgQppq9T0KAqePu0ZFGrXOHdKJqkoTFhYvpDNyuuznrN84thJbsCoO6Cu6Xlvntvy0QYuAExQEYtTUBf3CoCqwgGFZ4u1HJFzDVwEy3cjcpV4QvsPaBC3rCGyCF23o4K3pp2gberGgFEJEHo4nHICtyKH2ZqyxhN05KBBJIQlKh/Oujv/DH32VrlqFdIFC7Fz9Ct4kaqFME0UETLprnN9kfy+kFmtQBB0+5CFu0N9Ij8l/VvJDh2oq3hT6EzjTHKFN7ZjZwoTsAZ4Exsko6Fpa6WC+sduz8jyrLpegTv2h1EBeYpLpm2czQW0KoCcS0bCVXCmuWJDBjN1nQNLdF58SFJ0h7i3pC3oEOKy/FjBklL70XvBEEIWp2yZ04xObzAWDDJG7f+DbqBEA7LyiR95j7MDVdDViz2RE5vWlBMv5e4+VfhP3aXNPhvLSynb9O2x4uFBV+3jqu6d5pCG28/sETByvmu/+IJ0L3wb4rj9DNOLBF6XPIODr4L19U9RRofAG6Nxydi8Bki8BhGJbBAJKzbJxkZSlF9Q2Cu8oKqggB9hBArwLLqEBWEtFowy8XK8bEyw9snT+BeyFk1ZCSrdmgfEwFePTgCjELBEnIbjaDDPJm36rG9pztcEzT8dGk23SBhXBB1H4z+OWze0ooFzz8pDBYFvp9j9tvFByf9y4EFdVnz026CGR5qMr7fxMHN8UUdlyJAzlTBDRC28k+L4FB8078ljyD91tUj1ocnTs8vdEf7znbzm+GIjEZnoZE5rnLL700Xc7yHfz05nWxy03vBB9YGHYOWxgMQGBCR24CVYNE1hpfKxN0zKnfJDmmMgMmBWqNbjfSyFCBWSCGCgR8yFXiHyEj+VtD1FB3FpC1zI0kFbzifiKTLm9yq5zFmur+q8FHqjoOBWsBPiDbnCC2ErunV6cJ6TygXFYHYp7MKN9RUlSIS8/xBAGYLzeqUnBF4QbsTuUkUqGs6CaiDWKWjQK9EJkjpkTmNCPYXL",
				yt = {
					zh_cn: null,
					zh_tw: null
				},
				Et = {
					zh_cn: "0x17bcc4d8547e5a7135e365d1ab443aaae95e76d8230c2782c67305d4f21497a1",
					zh_tw: "0x51e720e90c7b87bec1d70eb6e74a21a449bd3ec9c020b01d3a40ed991b60ce5d"
				},
				At = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				Tt = "~!@#$%^&*_-=[]{}|;:,.()<>?";

			function St(e) {
				if (null !== yt[e.locale]) return;
				yt[e.locale] = [];
				let t = 0;
				for (let r = 0; r < 2048; r++) {
					const n = Tt.indexOf(bt[3 * r]),
						o = [228 + (n >> 2), 128 + At.indexOf(bt[3 * r + 1]), 128 + At.indexOf(bt[3 * r + 2])];
					if ("zh_tw" === e.locale) {
						for (let e = n % 4; e < 3; e++) o[e] = At.indexOf(vt[t++]) + (0 == e ? 228 : 128)
					}
					yt[e.locale].push(Object(K.h)(o))
				}
				if (Le.check(e) !== Et[e.locale]) throw yt[e.locale] = null, new Error("BIP39 Wordlist for " + e.locale + " (Chinese) FAILED")
			}
			class Ot extends Le {
				constructor(e) {
					super("zh_" + e)
				}
				getWord(e) {
					return St(this), yt[this.locale][e]
				}
				getWordIndex(e) {
					return St(this), yt[this.locale].indexOf(e)
				}
				split(e) {
					return (e = e.replace(/(?:\u3000| )+/g, "")).split("")
				}
			}
			const wt = new Ot("cn");
			Le.register(wt), Le.register(wt, "zh");
			const Pt = new Ot("tw");
			Le.register(Pt);
			const Ft = {
					cz: je,
					en: xe,
					es: ze,
					fr: Ye,
					it: gt,
					ja: at,
					ko: ht,
					zh: wt,
					zh_cn: wt,
					zh_tw: Pt
				},
				Ct = new $.a("hdnode/5.4.0"),
				Nt = W.a.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
				kt = Object(K.f)("Bitcoin seed"),
				Rt = 2147483648;

			function Lt(e) {
				return (1 << e) - 1 << 8 - e
			}

			function Mt(e) {
				return Object(c.h)(Object(c.i)(e), 32)
			}

			function Bt(e) {
				return ve.encode(Object(c.b)([e, Object(c.e)(Oe(Oe(e)), 0, 4)]))
			}

			function Jt(e) {
				if (null == e) return Ft.en;
				if ("string" == typeof e) {
					const t = Ft[e];
					return null == t && Ct.throwArgumentError("unknown locale", "wordlist", e), t
				}
				return e
			}
			const jt = {},
				_t = "m/44'/60'/0'/0/0";
			class Dt {
				constructor(e, t, r, n, o, i, a, s) {
					if (Ct.checkNew(new.target, Dt), e !== jt) throw new Error("HDNode constructor cannot be called directly");
					if (t) {
						const e = new Ce.a(t);
						Object(Y.d)(this, "privateKey", e.privateKey), Object(Y.d)(this, "publicKey", e.compressedPublicKey)
					} else Object(Y.d)(this, "privateKey", null), Object(Y.d)(this, "publicKey", Object(c.i)(r));
					Object(Y.d)(this, "parentFingerprint", n), Object(Y.d)(this, "fingerprint", Object(c.e)(Se(Oe(this.publicKey)), 0, 4)), Object(Y.d)(this, "address", Object(Ne.c)(this.publicKey)), Object(Y.d)(this, "chainCode", o), Object(Y.d)(this, "index", i), Object(Y.d)(this, "depth", a), null == s ? (Object(Y.d)(this, "mnemonic", null), Object(Y.d)(this, "path", null)) : "string" == typeof s ? (Object(Y.d)(this, "mnemonic", null), Object(Y.d)(this, "path", s)) : (Object(Y.d)(this, "mnemonic", s), Object(Y.d)(this, "path", s.path))
				}
				get extendedKey() {
					if (this.depth >= 256) throw new Error("Depth too large!");
					return Bt(Object(c.b)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", Object(c.i)(this.depth), this.parentFingerprint, Object(c.h)(Object(c.i)(this.index), 4), this.chainCode, null != this.privateKey ? Object(c.b)(["0x00", this.privateKey]) : this.publicKey]))
				}
				neuter() {
					return new Dt(jt, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path)
				}
				_derive(e) {
					if (e > 4294967295) throw new Error("invalid index - " + String(e));
					let t = this.path;
					t && (t += "/" + (e & ~Rt));
					const r = new Uint8Array(37);
					if (e & Rt) {
						if (!this.privateKey) throw new Error("cannot derive child of neutered node");
						r.set(Object(c.a)(this.privateKey), 1), t && (t += "'")
					} else r.set(Object(c.a)(this.publicKey));
					for (let c = 24; c >= 0; c -= 8) r[33 + (c >> 3)] = e >> 24 - c & 255;
					const n = Object(c.a)(Pe(ye.sha512, this.chainCode, r)),
						o = n.slice(0, 32),
						i = n.slice(32);
					let a = null,
						s = null;
					if (this.privateKey) a = Mt(W.a.from(o).add(this.privateKey).mod(Nt));
					else {
						s = new Ce.a(Object(c.i)(o))._addPoint(this.publicKey)
					}
					let l = t;
					const u = this.mnemonic;
					return u && (l = Object.freeze({
						phrase: u.phrase,
						path: t,
						locale: u.locale || "en"
					})), new Dt(jt, a, s, this.fingerprint, Mt(i), e, this.depth + 1, l)
				}
				derivePath(e) {
					const t = e.split("/");
					if (0 === t.length || "m" === t[0] && 0 !== this.depth) throw new Error("invalid path - " + e);
					"m" === t[0] && t.shift();
					let r = this;
					for (let n = 0; n < t.length; n++) {
						const e = t[n];
						if (e.match(/^[0-9]+'$/)) {
							const t = parseInt(e.substring(0, e.length - 1));
							if (t >= Rt) throw new Error("invalid path index - " + e);
							r = r._derive(Rt + t)
						} else {
							if (!e.match(/^[0-9]+$/)) throw new Error("invalid path component - " + e); {
								const t = parseInt(e);
								if (t >= Rt) throw new Error("invalid path index - " + e);
								r = r._derive(t)
							}
						}
					}
					return r
				}
				static _fromSeed(e, t) {
					const r = Object(c.a)(e);
					if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
					const n = Object(c.a)(Pe(ye.sha512, kt, r));
					return new Dt(jt, Mt(n.slice(0, 32)), null, "0x00000000", Mt(n.slice(32)), 0, 0, t)
				}
				static fromMnemonic(e, t, r) {
					return e = Ut(xt(e, r = Jt(r)), r), Dt._fromSeed(It(e, t), {
						phrase: e,
						path: "m",
						locale: r.locale
					})
				}
				static fromSeed(e) {
					return Dt._fromSeed(e, null)
				}
				static fromExtendedKey(e) {
					const t = ve.decode(e);
					82 === t.length && Bt(t.slice(0, 78)) === e || Ct.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
					const r = t[4],
						n = Object(c.i)(t.slice(5, 9)),
						o = parseInt(Object(c.i)(t.slice(9, 13)).substring(2), 16),
						i = Object(c.i)(t.slice(13, 45)),
						a = t.slice(45, 78);
					switch (Object(c.i)(t.slice(0, 4))) {
						case "0x0488b21e":
						case "0x043587cf":
							return new Dt(jt, null, Object(c.i)(a), n, i, o, r, null);
						case "0x0488ade4":
						case "0x04358394 ":
							if (0 !== a[0]) break;
							return new Dt(jt, Object(c.i)(a.slice(1)), null, n, i, o, r, null)
					}
					return Ct.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
				}
			}

			function It(e, t) {
				t || (t = "");
				const r = Object(K.f)("mnemonic" + t, K.a.NFKD);
				return Fe(Object(K.f)(e, K.a.NFKD), r, 2048, 64, "sha512")
			}

			function xt(e, t) {
				t = Jt(t), Ct.checkNormalize();
				const r = t.split(e);
				if (r.length % 3 != 0) throw new Error("invalid mnemonic");
				const n = Object(c.a)(new Uint8Array(Math.ceil(11 * r.length / 8)));
				let o = 0;
				for (let s = 0; s < r.length; s++) {
					let e = t.getWordIndex(r[s].normalize("NFKD"));
					if (-1 === e) throw new Error("invalid mnemonic");
					for (let t = 0; t < 11; t++) e & 1 << 10 - t && (n[o >> 3] |= 1 << 7 - o % 8), o++
				}
				const i = 32 * r.length / 3,
					a = Lt(r.length / 3);
				if ((Object(c.a)(Oe(n.slice(0, i / 8)))[0] & a) !== (n[n.length - 1] & a)) throw new Error("invalid checksum");
				return Object(c.i)(n.slice(0, i / 8))
			}

			function Ut(e, t) {
				if (t = Jt(t), (e = Object(c.a)(e)).length % 4 != 0 || e.length < 16 || e.length > 32) throw new Error("invalid entropy");
				const r = [0];
				let n = 11;
				for (let a = 0; a < e.length; a++) n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= e[a], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= e[a] >> 8 - n, r.push(e[a] & (1 << 8 - n) - 1), n += 3);
				const o = e.length / 4,
					i = Object(c.a)(Oe(e))[0] & Lt(o);
				return r[r.length - 1] <<= o, r[r.length - 1] |= i >> 8 - o, t.join(r.map(e => t.getWord(e)))
			}

			function Gt(e, t) {
				try {
					return xt(e, t), !0
				} catch (r) {}
				return !1
			}

			function Xt(e) {
				return ("number" != typeof e || e < 0 || e >= Rt || e % 1) && Ct.throwArgumentError("invalid account index", "index", e), `m/44'/60'/${e}'/0/0`
			}
			var Ht = r("./node_modules/@ethersproject/random/lib.esm/random.js"),
				Vt = r("./node_modules/aes-js/index.js"),
				zt = r.n(Vt),
				Zt = r("./node_modules/scrypt-js/scrypt.js"),
				Kt = r.n(Zt);

			function Qt(e) {
				return "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), Object(c.a)(e)
			}

			function qt(e, t) {
				for (e = String(e); e.length < t;) e = "0" + e;
				return e
			}

			function Wt(e) {
				return "string" == typeof e ? Object(K.f)(e, K.a.NFKC) : Object(c.a)(e)
			}

			function Yt(e, t) {
				let r = e;
				const n = t.toLowerCase().split("/");
				for (let o = 0; o < n.length; o++) {
					let e = null;
					for (const t in r)
						if (t.toLowerCase() === n[o]) {
							e = r[t];
							break
						} if (null === e) return null;
					r = e
				}
				return r
			}

			function $t(e) {
				const t = Object(c.a)(e);
				t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128;
				const r = Object(c.i)(t);
				return [r.substring(2, 10), r.substring(10, 14), r.substring(14, 18), r.substring(18, 22), r.substring(22, 34)].join("-")
			}
			var er = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const tr = new $.a("json-wallets/5.4.0");

			function rr(e) {
				return null != e && e.mnemonic && e.mnemonic.phrase
			}
			class nr extends Y.a {
				isKeystoreAccount(e) {
					return !(!e || !e._isKeystoreAccount)
				}
			}

			function or(e, t) {
				const r = Qt(Yt(e, "crypto/ciphertext"));
				if (Object(c.i)(Object(Z.a)(Object(c.b)([t.slice(16, 32), r]))).substring(2) !== Yt(e, "crypto/mac").toLowerCase()) throw new Error("invalid password");
				const n = function(e, t, r) {
					if ("aes-128-ctr" === Yt(e, "crypto/cipher")) {
						const n = Qt(Yt(e, "crypto/cipherparams/iv")),
							o = new zt.a.Counter(n),
							i = new zt.a.ModeOfOperation.ctr(t, o);
						return Object(c.a)(i.decrypt(r))
					}
					return null
				}(e, t.slice(0, 16), r);
				n || tr.throwError("unsupported cipher", $.a.errors.UNSUPPORTED_OPERATION, {
					operation: "decrypt"
				});
				const o = t.slice(32, 64),
					i = Object(Ne.c)(n);
				if (e.address) {
					let t = e.address.toLowerCase();
					if ("0x" !== t.substring(0, 2) && (t = "0x" + t), Object(H.a)(t) !== i) throw new Error("address mismatch")
				}
				const a = {
					_isKeystoreAccount: !0,
					address: i,
					privateKey: Object(c.i)(n)
				};
				if ("0.1" === Yt(e, "x-ethers/version")) {
					const t = Qt(Yt(e, "x-ethers/mnemonicCiphertext")),
						r = Qt(Yt(e, "x-ethers/mnemonicCounter")),
						n = new zt.a.Counter(r),
						i = new zt.a.ModeOfOperation.ctr(o, n),
						l = Yt(e, "x-ethers/path") || _t,
						u = Yt(e, "x-ethers/locale") || "en",
						d = Object(c.a)(i.decrypt(t));
					try {
						const e = Ut(d, u),
							t = Dt.fromMnemonic(e, null, u).derivePath(l);
						if (t.privateKey != a.privateKey) throw new Error("mnemonic mismatch");
						a.mnemonic = t.mnemonic
					} catch (s) {
						if (s.code !== $.a.errors.INVALID_ARGUMENT || "wordlist" !== s.argument) throw s
					}
				}
				return new nr(a)
			}

			function ir(e, t, r, n, o) {
				return Object(c.a)(Fe(e, t, r, n, o))
			}

			function ar(e, t, r, n, o) {
				return Promise.resolve(ir(e, t, r, n, o))
			}

			function sr(e, t, r, n, o) {
				const i = Wt(t),
					a = Yt(e, "crypto/kdf");
				if (a && "string" == typeof a) {
					const t = function(e, t) {
						return tr.throwArgumentError("invalid key-derivation function parameters", e, t)
					};
					if ("scrypt" === a.toLowerCase()) {
						const r = Qt(Yt(e, "crypto/kdfparams/salt")),
							s = parseInt(Yt(e, "crypto/kdfparams/n")),
							l = parseInt(Yt(e, "crypto/kdfparams/r")),
							c = parseInt(Yt(e, "crypto/kdfparams/p"));
						s && l && c || t("kdf", a), 0 != (s & s - 1) && t("N", s);
						const u = parseInt(Yt(e, "crypto/kdfparams/dklen"));
						return 32 !== u && t("dklen", u), n(i, r, s, l, c, 64, o)
					}
					if ("pbkdf2" === a.toLowerCase()) {
						const n = Qt(Yt(e, "crypto/kdfparams/salt"));
						let o = null;
						const a = Yt(e, "crypto/kdfparams/prf");
						"hmac-sha256" === a ? o = "sha256" : "hmac-sha512" === a ? o = "sha512" : t("prf", a);
						const s = parseInt(Yt(e, "crypto/kdfparams/c")),
							l = parseInt(Yt(e, "crypto/kdfparams/dklen"));
						return 32 !== l && t("dklen", l), r(i, n, s, l, o)
					}
				}
				return tr.throwArgumentError("unsupported key-derivation function", "kdf", a)
			}
			const lr = new $.a("json-wallets/5.4.0");
			class cr extends Y.a {
				isCrowdsaleAccount(e) {
					return !(!e || !e._isCrowdsaleAccount)
				}
			}

			function ur(e, t) {
				const r = JSON.parse(e);
				t = Wt(t);
				const n = Object(H.a)(Yt(r, "ethaddr")),
					o = Qt(Yt(r, "encseed"));
				o && o.length % 16 == 0 || lr.throwArgumentError("invalid encseed", "json", e);
				const i = Object(c.a)(Fe(t, t, 2e3, 32, "sha256")).slice(0, 16),
					a = o.slice(0, 16),
					s = o.slice(16),
					l = new zt.a.ModeOfOperation.cbc(i, a),
					u = zt.a.padding.pkcs7.strip(Object(c.a)(l.decrypt(s)));
				let d = "";
				for (let c = 0; c < u.length; c++) d += String.fromCharCode(u[c]);
				const h = Object(K.f)(d),
					f = Object(Z.a)(h);
				return new cr({
					_isCrowdsaleAccount: !0,
					address: n,
					privateKey: f
				})
			}

			function dr(e) {
				let t = null;
				try {
					t = JSON.parse(e)
				} catch (r) {
					return !1
				}
				return t.encseed && t.ethaddr
			}

			function hr(e) {
				let t = null;
				try {
					t = JSON.parse(e)
				} catch (r) {
					return !1
				}
				return !(!t.version || parseInt(t.version) !== t.version || 3 !== parseInt(t.version))
			}

			function fr(e) {
				if (dr(e)) try {
					return Object(H.a)(JSON.parse(e).ethaddr)
				} catch (t) {
					return null
				}
				if (hr(e)) try {
					return Object(H.a)(JSON.parse(e).address)
				} catch (t) {
					return null
				}
				return null
			}

			function mr(e, t, r) {
				if (dr(e)) {
					r && r(0);
					const n = ur(e, t);
					return r && r(1), Promise.resolve(n)
				}
				return hr(e) ? function(e, t, r) {
					return er(this, void 0, void 0, (function*() {
						const n = JSON.parse(e);
						return or(n, yield sr(n, t, ar, Kt.a.scrypt, r))
					}))
				}(e, t, r) : Promise.reject(new Error("invalid JSON wallet"))
			}

			function pr(e, t) {
				if (dr(e)) return ur(e, t);
				if (hr(e)) return function(e, t) {
					const r = JSON.parse(e);
					return or(r, sr(r, t, ir, Kt.a.syncScrypt))
				}(e, t);
				throw new Error("invalid JSON wallet")
			}
			var gr = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const br = new $.a("wallet/5.4.0");
			class vr extends z.a {
				constructor(e, t) {
					if (br.checkNew(new.target, vr), super(), null != (r = e) && Object(c.l)(r.privateKey, 32) && null != r.address) {
						const t = new Ce.a(e.privateKey);
						if (Object(Y.d)(this, "_signingKey", () => t), Object(Y.d)(this, "address", Object(Ne.c)(this.publicKey)), this.address !== Object(H.a)(e.address) && br.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), function(e) {
								const t = e.mnemonic;
								return t && t.phrase
							}(e)) {
							const t = e.mnemonic;
							Object(Y.d)(this, "_mnemonic", () => ({
								phrase: t.phrase,
								path: t.path || _t,
								locale: t.locale || "en"
							}));
							const r = this.mnemonic,
								n = Dt.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path);
							Object(Ne.c)(n.privateKey) !== this.address && br.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]")
						} else Object(Y.d)(this, "_mnemonic", () => null)
					} else {
						if (Ce.a.isSigningKey(e)) "secp256k1" !== e.curve && br.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), Object(Y.d)(this, "_signingKey", () => e);
						else {
							"string" == typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e);
							const t = new Ce.a(e);
							Object(Y.d)(this, "_signingKey", () => t)
						}
						Object(Y.d)(this, "_mnemonic", () => null), Object(Y.d)(this, "address", Object(Ne.c)(this.publicKey))
					}
					var r;
					t && !V.b.isProvider(t) && br.throwArgumentError("invalid provider", "provider", t), Object(Y.d)(this, "provider", t || null)
				}
				get mnemonic() {
					return this._mnemonic()
				}
				get privateKey() {
					return this._signingKey().privateKey
				}
				get publicKey() {
					return this._signingKey().publicKey
				}
				getAddress() {
					return Promise.resolve(this.address)
				}
				connect(e) {
					return new vr(this, e)
				}
				signTransaction(e) {
					return Object(Y.f)(e).then(t => {
						null != t.from && (Object(H.a)(t.from) !== this.address && br.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete t.from);
						const r = this._signingKey().signDigest(Object(Z.a)(Object(Ne.f)(t)));
						return Object(Ne.f)(t, r)
					})
				}
				signMessage(e) {
					return gr(this, void 0, void 0, (function*() {
						return Object(c.m)(this._signingKey().signDigest(q(e)))
					}))
				}
				_signTypedData(e, t, r) {
					return gr(this, void 0, void 0, (function*() {
						const n = yield ge.resolveNames(e, t, r, e => (null == this.provider && br.throwError("cannot resolve ENS names without a provider", $.a.errors.UNSUPPORTED_OPERATION, {
							operation: "resolveName",
							value: e
						}), this.provider.resolveName(e)));
						return Object(c.m)(this._signingKey().signDigest(ge.hash(n.domain, t, n.value)))
					}))
				}
				encrypt(e, t, r) {
					if ("function" != typeof t || r || (r = t, t = {}), r && "function" != typeof r) throw new Error("invalid callback");
					return t || (t = {}),
						function(e, t, r, n) {
							try {
								if (Object(H.a)(e.address) !== Object(Ne.c)(e.privateKey)) throw new Error("address/privateKey mismatch");
								if (rr(e)) {
									const t = e.mnemonic;
									if (Dt.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path || _t).privateKey != e.privateKey) throw new Error("mnemonic mismatch")
								}
							} catch (b) {
								return Promise.reject(b)
							}
							"function" != typeof r || n || (n = r, r = {}), r || (r = {});
							const o = Object(c.a)(e.privateKey),
								i = Wt(t);
							let a = null,
								s = null,
								l = null;
							if (rr(e)) {
								const t = e.mnemonic;
								a = Object(c.a)(xt(t.phrase, t.locale || "en")), s = t.path || _t, l = t.locale || "en"
							}
							let u = r.client;
							u || (u = "ethers.js");
							let d = null;
							d = r.salt ? Object(c.a)(r.salt) : Object(Ht.a)(32);
							let h = null;
							if (r.iv) {
								if (16 !== (h = Object(c.a)(r.iv)).length) throw new Error("invalid iv")
							} else h = Object(Ht.a)(16);
							let f = null;
							if (r.uuid) {
								if (16 !== (f = Object(c.a)(r.uuid)).length) throw new Error("invalid uuid")
							} else f = Object(Ht.a)(16);
							let m = 1 << 17,
								p = 8,
								g = 1;
							return r.scrypt && (r.scrypt.N && (m = r.scrypt.N), r.scrypt.r && (p = r.scrypt.r), r.scrypt.p && (g = r.scrypt.p)), Kt.a.scrypt(i, d, m, p, g, 64, n).then(t => {
								const r = (t = Object(c.a)(t)).slice(0, 16),
									n = t.slice(16, 32),
									i = t.slice(32, 64),
									b = new zt.a.Counter(h),
									v = new zt.a.ModeOfOperation.ctr(r, b),
									y = Object(c.a)(v.encrypt(o)),
									E = Object(Z.a)(Object(c.b)([n, y])),
									A = {
										address: e.address.substring(2).toLowerCase(),
										id: $t(f),
										version: 3,
										Crypto: {
											cipher: "aes-128-ctr",
											cipherparams: {
												iv: Object(c.i)(h).substring(2)
											},
											ciphertext: Object(c.i)(y).substring(2),
											kdf: "scrypt",
											kdfparams: {
												salt: Object(c.i)(d).substring(2),
												n: m,
												dklen: 32,
												p: g,
												r: p
											},
											mac: E.substring(2)
										}
									};
								if (a) {
									const e = Object(Ht.a)(16),
										t = new zt.a.Counter(e),
										r = new zt.a.ModeOfOperation.ctr(i, t),
										n = Object(c.a)(r.encrypt(a)),
										o = new Date,
										d = o.getUTCFullYear() + "-" + qt(o.getUTCMonth() + 1, 2) + "-" + qt(o.getUTCDate(), 2) + "T" + qt(o.getUTCHours(), 2) + "-" + qt(o.getUTCMinutes(), 2) + "-" + qt(o.getUTCSeconds(), 2) + ".0Z";
									A["x-ethers"] = {
										client: u,
										gethFilename: "UTC--" + d + "--" + A.address,
										mnemonicCounter: Object(c.i)(e).substring(2),
										mnemonicCiphertext: Object(c.i)(n).substring(2),
										path: s,
										locale: l,
										version: "0.1"
									}
								}
								return JSON.stringify(A)
							})
						}(this, e, t, r)
				}
				static createRandom(e) {
					let t = Object(Ht.a)(16);
					e || (e = {}), e.extraEntropy && (t = Object(c.a)(Object(c.e)(Object(Z.a)(Object(c.b)([t, e.extraEntropy])), 0, 16)));
					const r = Ut(t, e.locale);
					return vr.fromMnemonic(r, e.path, e.locale)
				}
				static fromEncryptedJson(e, t, r) {
					return mr(e, t, r).then(e => new vr(e))
				}
				static fromEncryptedJsonSync(e, t) {
					return new vr(pr(e, t))
				}
				static fromMnemonic(e, t, r) {
					return t || (t = _t), new vr(Dt.fromMnemonic(e, null, r).derivePath(t))
				}
			}

			function yr(e, t) {
				return Object(Ne.e)(q(e), t)
			}

			function Er(e, t, r, n) {
				return Object(Ne.e)(ge.hash(e, t, r), n)
			}
			var Ar = r("./node_modules/@ethersproject/constants/lib.esm/index.js");
			const Tr = new $.a("networks/5.4.1");

			function Sr(e) {
				const t = function(t, r) {
					null == r && (r = {});
					const n = [];
					if (t.InfuraProvider) try {
						n.push(new t.InfuraProvider(e, r.infura))
					} catch (o) {}
					if (t.EtherscanProvider) {
						const r = ["ropsten"];
						try {
							const o = new t.EtherscanProvider(e);
							o.network && -1 === r.indexOf(o.network.name) && n.push(o)
						} catch (o) {}
					}
					if (t.AlchemyProvider) try {
						n.push(new t.AlchemyProvider(e, r.alchemy))
					} catch (o) {}
					if (t.PocketProvider) {
						const r = ["goerli", "ropsten", "rinkeby"];
						try {
							const o = new t.PocketProvider(e);
							o.network && -1 === r.indexOf(o.network.name) && n.push(o)
						} catch (o) {}
					}
					if (t.CloudflareProvider) try {
						n.push(new t.CloudflareProvider(e))
					} catch (o) {}
					if (0 === n.length) return null;
					if (t.FallbackProvider) {
						let o = 1;
						return null != r.quorum ? o = r.quorum : "homestead" === e && (o = 2), new t.FallbackProvider(n, o)
					}
					return n[0]
				};
				return t.renetwork = function(e) {
					return Sr(e)
				}, t
			}

			function Or(e, t) {
				const r = function(r, n) {
					return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null
				};
				return r.renetwork = function(t) {
					return Or(e, t)
				}, r
			}
			const wr = {
					chainId: 1,
					ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
					name: "homestead",
					_defaultProvider: Sr("homestead")
				},
				Pr = {
					chainId: 3,
					ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
					name: "ropsten",
					_defaultProvider: Sr("ropsten")
				},
				Fr = {
					chainId: 63,
					name: "classicMordor",
					_defaultProvider: Or("https://www.ethercluster.com/mordor", "classicMordor")
				},
				Cr = {
					unspecified: {
						chainId: 0,
						name: "unspecified"
					},
					homestead: wr,
					mainnet: wr,
					morden: {
						chainId: 2,
						name: "morden"
					},
					ropsten: Pr,
					testnet: Pr,
					rinkeby: {
						chainId: 4,
						ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
						name: "rinkeby",
						_defaultProvider: Sr("rinkeby")
					},
					kovan: {
						chainId: 42,
						name: "kovan",
						_defaultProvider: Sr("kovan")
					},
					goerli: {
						chainId: 5,
						ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
						name: "goerli",
						_defaultProvider: Sr("goerli")
					},
					classic: {
						chainId: 61,
						name: "classic",
						_defaultProvider: Or("https://www.ethercluster.com/etc", "classic")
					},
					classicMorden: {
						chainId: 62,
						name: "classicMorden"
					},
					classicMordor: Fr,
					classicTestnet: Fr,
					classicKotti: {
						chainId: 6,
						name: "classicKotti",
						_defaultProvider: Or("https://www.ethercluster.com/kotti", "classicKotti")
					},
					xdai: {
						chainId: 100,
						name: "xdai"
					},
					matic: {
						chainId: 137,
						name: "matic"
					},
					maticmum: {
						chainId: 80001,
						name: "maticmum"
					},
					bnb: {
						chainId: 56,
						name: "bnb"
					},
					bnbt: {
						chainId: 97,
						name: "bnbt"
					}
				};

			function Nr(e) {
				if (null == e) return null;
				if ("number" == typeof e) {
					for (const t in Cr) {
						const r = Cr[t];
						if (r.chainId === e) return {
							name: r.name,
							chainId: r.chainId,
							ensAddress: r.ensAddress || null,
							_defaultProvider: r._defaultProvider || null
						}
					}
					return {
						chainId: e,
						name: "unknown"
					}
				}
				if ("string" == typeof e) {
					const t = Cr[e];
					return null == t ? null : {
						name: t.name,
						chainId: t.chainId,
						ensAddress: t.ensAddress,
						_defaultProvider: t._defaultProvider || null
					}
				}
				const t = Cr[e.name];
				if (!t) return "number" != typeof e.chainId && Tr.throwArgumentError("invalid network chainId", "network", e), e;
				0 !== e.chainId && e.chainId !== t.chainId && Tr.throwArgumentError("network chainId mismatch", "network", e);
				let r = e._defaultProvider || null;
				var n;
				return null == r && t._defaultProvider && (r = (n = t._defaultProvider) && "function" == typeof n.renetwork ? t._defaultProvider.renetwork(e) : t._defaultProvider), {
					name: e.name,
					chainId: t.chainId,
					ensAddress: e.ensAddress || t.ensAddress || null,
					_defaultProvider: r
				}
			}
			var kr = r("./node_modules/@ethersproject/constants/lib.esm/hashes.js");

			function Rr(e, t) {
				t || (t = function(e) {
					return [parseInt(e, 16)]
				});
				let r = 0,
					n = {};
				return e.split(",").forEach(e => {
					let o = e.split(":");
					r += parseInt(o[0], 16), n[r] = t(o[1])
				}), n
			}

			function Lr(e) {
				let t = 0;
				return e.split(",").map(e => {
					let r = e.split("-");
					return 1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1"), {
						l: t + parseInt(r[0], 16),
						h: t = parseInt(r[1], 16)
					}
				})
			}

			function Mr(e, t) {
				let r = 0;
				for (let n = 0; n < t.length; n++) {
					let o = t[n];
					if (e >= (r += o.l) && e <= r + o.h && (e - r) % (o.d || 1) == 0) {
						if (o.e && -1 !== o.e.indexOf(e - r)) continue;
						return o
					}
				}
				return null
			}
			const Br = Lr("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),
				Jr = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(e => parseInt(e, 16)),
				jr = [{
					h: 25,
					s: 32,
					l: 65
				}, {
					h: 30,
					s: 32,
					e: [23],
					l: 127
				}, {
					h: 54,
					s: 1,
					e: [48],
					l: 64,
					d: 2
				}, {
					h: 14,
					s: 1,
					l: 57,
					d: 2
				}, {
					h: 44,
					s: 1,
					l: 17,
					d: 2
				}, {
					h: 10,
					s: 1,
					e: [2, 6, 8],
					l: 61,
					d: 2
				}, {
					h: 16,
					s: 1,
					l: 68,
					d: 2
				}, {
					h: 84,
					s: 1,
					e: [18, 24, 66],
					l: 19,
					d: 2
				}, {
					h: 26,
					s: 32,
					e: [17],
					l: 435
				}, {
					h: 22,
					s: 1,
					l: 71,
					d: 2
				}, {
					h: 15,
					s: 80,
					l: 40
				}, {
					h: 31,
					s: 32,
					l: 16
				}, {
					h: 32,
					s: 1,
					l: 80,
					d: 2
				}, {
					h: 52,
					s: 1,
					l: 42,
					d: 2
				}, {
					h: 12,
					s: 1,
					l: 55,
					d: 2
				}, {
					h: 40,
					s: 1,
					e: [38],
					l: 15,
					d: 2
				}, {
					h: 14,
					s: 1,
					l: 48,
					d: 2
				}, {
					h: 37,
					s: 48,
					l: 49
				}, {
					h: 148,
					s: 1,
					l: 6351,
					d: 2
				}, {
					h: 88,
					s: 1,
					l: 160,
					d: 2
				}, {
					h: 15,
					s: 16,
					l: 704
				}, {
					h: 25,
					s: 26,
					l: 854
				}, {
					h: 25,
					s: 32,
					l: 55915
				}, {
					h: 37,
					s: 40,
					l: 1247
				}, {
					h: 25,
					s: -119711,
					l: 53248
				}, {
					h: 25,
					s: -119763,
					l: 52
				}, {
					h: 25,
					s: -119815,
					l: 52
				}, {
					h: 25,
					s: -119867,
					e: [1, 4, 5, 7, 8, 11, 12, 17],
					l: 52
				}, {
					h: 25,
					s: -119919,
					l: 52
				}, {
					h: 24,
					s: -119971,
					e: [2, 7, 8, 17],
					l: 52
				}, {
					h: 24,
					s: -120023,
					e: [2, 7, 13, 15, 16, 17],
					l: 52
				}, {
					h: 25,
					s: -120075,
					l: 52
				}, {
					h: 25,
					s: -120127,
					l: 52
				}, {
					h: 25,
					s: -120179,
					l: 52
				}, {
					h: 25,
					s: -120231,
					l: 52
				}, {
					h: 25,
					s: -120283,
					l: 52
				}, {
					h: 25,
					s: -120335,
					l: 52
				}, {
					h: 24,
					s: -119543,
					e: [17],
					l: 56
				}, {
					h: 24,
					s: -119601,
					e: [17],
					l: 58
				}, {
					h: 24,
					s: -119659,
					e: [17],
					l: 58
				}, {
					h: 24,
					s: -119717,
					e: [17],
					l: 58
				}, {
					h: 24,
					s: -119775,
					e: [17],
					l: 58
				}],
				_r = Rr("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),
				Dr = Rr("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),
				Ir = Rr("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(e) {
					if (e.length % 4 != 0) throw new Error("bad data");
					let t = [];
					for (let r = 0; r < e.length; r += 4) t.push(parseInt(e.substring(r, r + 4), 16));
					return t
				})),
				xr = Lr("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

			function Ur(e) {
				if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
				let t = Object(K.g)(e);
				var r;
				r = t.map(e => {
					if (Jr.indexOf(e) >= 0) return [];
					if (e >= 65024 && e <= 65039) return [];
					let t = function(e) {
						let t = Mr(e, jr);
						if (t) return [e + t.s];
						let r = _r[e];
						if (r) return r;
						let n = Dr[e];
						if (n) return [e + n[0]];
						let o = Ir[e];
						return o || null
					}(e);
					return t || [e]
				}), t = r.reduce((e, t) => (t.forEach(t => {
					e.push(t)
				}), e), []), (t = Object(K.g)(Object(K.e)(t), K.a.NFKC)).forEach(e => {
					if (function(e) {
							return !!Mr(e, xr)
						}(e)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
				}), t.forEach(e => {
					if (function(e) {
							return !!Mr(e, Br)
						}(e)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
				});
				let n = Object(K.e)(t);
				if ("-" === n.substring(0, 1) || "--" === n.substring(2, 4) || "-" === n.substring(n.length - 1)) throw new Error("invalid hyphen");
				if (n.length > 63) throw new Error("too long");
				return n
			}
			const Gr = new $.a("hash/5.4.0"),
				Xr = new Uint8Array(32);
			Xr.fill(0);
			const Hr = new RegExp("^((.*)\\.)?([^.]+)$");

			function Vr(e) {
				try {
					const t = e.split(".");
					for (let e = 0; e < t.length; e++)
						if (0 === Ur(t[e]).length) throw new Error("empty");
					return !0
				} catch (t) {}
				return !1
			}

			function zr(e) {
				"string" != typeof e && Gr.throwArgumentError("invalid ENS name; not a string", "name", e);
				let t = e,
					r = Xr;
				for (; t.length;) {
					const n = t.match(Hr);
					null != n && "" !== n[2] || Gr.throwArgumentError("invalid ENS address; missing component", "name", e);
					const o = Object(K.f)(Ur(n[3]));
					r = Object(Z.a)(Object(c.b)([r, Object(Z.a)(o)])), t = n[2] || ""
				}
				return Object(c.i)(r)
			}

			function Zr(e) {
				e = atob(e);
				const t = [];
				for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
				return Object(c.a)(t)
			}

			function Kr(e) {
				e = Object(c.a)(e);
				let t = "";
				for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
				return btoa(t)
			}
			var Qr = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};

			function qr(e, t) {
				return Qr(this, void 0, void 0, (function*() {
					null == t && (t = {});
					const r = {
							method: t.method || "GET",
							headers: t.headers || {},
							body: t.body || void 0,
							mode: "cors",
							cache: "no-cache",
							credentials: "same-origin",
							redirect: "follow",
							referrer: "client"
						},
						n = yield fetch(e, r), o = yield n.arrayBuffer(), i = {};
					return n.headers.forEach ? n.headers.forEach((e, t) => {
						i[t.toLowerCase()] = e
					}) : n.headers.keys().forEach(e => {
						i[e.toLowerCase()] = n.headers.get(e)
					}), {
						headers: i,
						statusCode: n.status,
						statusMessage: n.statusText,
						body: Object(c.a)(new Uint8Array(o))
					}
				}))
			}
			var Wr = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const Yr = new $.a("web/5.4.0");

			function $r(e) {
				return new Promise(t => {
					setTimeout(t, e)
				})
			}

			function en(e, t) {
				if (null == e) return null;
				if ("string" == typeof e) return e;
				if (Object(c.k)(e)) {
					if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim())) try {
						return Object(K.h)(e)
					} catch (r) {}
					return Object(c.i)(e)
				}
				return e
			}

			function tn(e, t, r) {
				const n = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
				Yr.assertArgument(n > 0 && n % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", n);
				const o = "object" == typeof e ? e.throttleCallback : null,
					i = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
				Yr.assertArgument(i > 0 && i % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", i);
				const a = {};
				let s = null;
				const l = {
					method: "GET"
				};
				let c = !1,
					u = 12e4;
				if ("string" == typeof e) s = e;
				else if ("object" == typeof e) {
					if (null != e && null != e.url || Yr.throwArgumentError("missing URL", "connection.url", e), s = e.url, "number" == typeof e.timeout && e.timeout > 0 && (u = e.timeout), e.headers)
						for (const t in e.headers) a[t.toLowerCase()] = {
							key: t,
							value: String(e.headers[t])
						}, ["if-none-match", "if-modified-since"].indexOf(t.toLowerCase()) >= 0 && (c = !0);
					if (l.allowGzip = !!e.allowGzip, null != e.user && null != e.password) {
						"https:" !== s.substring(0, 6) && !0 !== e.allowInsecureAuthentication && Yr.throwError("basic authentication requires a secure https url", $.a.errors.INVALID_ARGUMENT, {
							argument: "url",
							url: s,
							user: e.user,
							password: "[REDACTED]"
						});
						const t = e.user + ":" + e.password;
						a.authorization = {
							key: "Authorization",
							value: "Basic " + Kr(Object(K.f)(t))
						}
					}
				}
				t && (l.method = "POST", l.body = t, null == a["content-type"] && (a["content-type"] = {
					key: "Content-Type",
					value: "application/octet-stream"
				}), null == a["content-length"] && (a["content-length"] = {
					key: "Content-Length",
					value: String(t.length)
				}));
				const d = {};
				Object.keys(a).forEach(e => {
					const t = a[e];
					d[t.key] = t.value
				}), l.headers = d;
				const h = function() {
						let e = null;
						return {
							promise: new Promise((function(t, r) {
								u && (e = setTimeout(() => {
									null != e && (e = null, r(Yr.makeError("timeout", $.a.errors.TIMEOUT, {
										requestBody: en(l.body, d["content-type"]),
										requestMethod: l.method,
										timeout: u,
										url: s
									})))
								}, u))
							})),
							cancel: function() {
								null != e && (clearTimeout(e), e = null)
							}
						}
					}(),
					f = function() {
						return Wr(this, void 0, void 0, (function*() {
							for (let t = 0; t < n; t++) {
								let a = null;
								try {
									if (429 === (a = yield qr(s, l)).statusCode && t < n) {
										let e = !0;
										if (o && (e = yield o(t, s)), e) {
											let e = 0;
											const r = a.headers["retry-after"];
											e = "string" == typeof r && r.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(r) : i * parseInt(String(Math.random() * Math.pow(2, t))), yield $r(e);
											continue
										}
									}
								} catch (e) {
									null == (a = e.response) && (h.cancel(), Yr.throwError("missing response", $.a.errors.SERVER_ERROR, {
										requestBody: en(l.body, d["content-type"]),
										requestMethod: l.method,
										serverError: e,
										url: s
									}))
								}
								let u = a.body;
								if (c && 304 === a.statusCode ? u = null : (a.statusCode < 200 || a.statusCode >= 300) && (h.cancel(), Yr.throwError("bad response", $.a.errors.SERVER_ERROR, {
										status: a.statusCode,
										headers: a.headers,
										body: en(u, a.headers ? a.headers["content-type"] : null),
										requestBody: en(l.body, d["content-type"]),
										requestMethod: l.method,
										url: s
									})), r) try {
									const e = yield r(u, a);
									return h.cancel(), e
								} catch (e) {
									if (e.throttleRetry && t < n) {
										let e = !0;
										if (o && (e = yield o(t, s)), e) {
											const e = i * parseInt(String(Math.random() * Math.pow(2, t)));
											yield $r(e);
											continue
										}
									}
									h.cancel(), Yr.throwError("processing response error", $.a.errors.SERVER_ERROR, {
										body: en(u, a.headers ? a.headers["content-type"] : null),
										error: e,
										requestBody: en(l.body, d["content-type"]),
										requestMethod: l.method,
										url: s
									})
								}
								return h.cancel(), u
							}
							return Yr.throwError("failed response", $.a.errors.SERVER_ERROR, {
								requestBody: en(l.body, d["content-type"]),
								requestMethod: l.method,
								url: s
							})
						}))
					}();
				return Promise.race([h.promise, f])
			}

			function rn(e, t, r) {
				let n = null;
				if (null != t) {
					n = Object(K.f)(t);
					const r = "string" == typeof e ? {
						url: e
					} : Object(Y.g)(e);
					if (r.headers) {
						0 !== Object.keys(r.headers).filter(e => "content-type" === e.toLowerCase()).length || (r.headers = Object(Y.g)(r.headers), r.headers["content-type"] = "application/json")
					} else r.headers = {
						"content-type": "application/json"
					};
					e = r
				}
				return tn(e, n, (e, t) => {
					let n = null;
					if (null != e) try {
						n = JSON.parse(Object(K.h)(e))
					} catch (o) {
						Yr.throwError("invalid JSON", $.a.errors.SERVER_ERROR, {
							body: e,
							error: o
						})
					}
					return r && (n = r(n, t)), n
				})
			}

			function nn(e, t) {
				return t || (t = {}), null == (t = Object(Y.g)(t)).floor && (t.floor = 0), null == t.ceiling && (t.ceiling = 1e4), null == t.interval && (t.interval = 250), new Promise((function(r, n) {
					let o = null,
						i = !1;
					const a = () => !i && (i = !0, o && clearTimeout(o), !0);
					t.timeout && (o = setTimeout(() => {
						a() && n(new Error("timeout"))
					}, t.timeout));
					const s = t.retryLimit;
					let l = 0;
					! function o() {
						return e().then((function(e) {
							if (void 0 !== e) a() && r(e);
							else if (t.oncePoll) t.oncePoll.once("poll", o);
							else if (t.onceBlock) t.onceBlock.once("block", o);
							else if (!i) {
								if (++l > s) return void(a() && n(new Error("retry limit reached")));
								let e = t.interval * parseInt(String(Math.random() * Math.pow(2, l)));
								e < t.floor && (e = t.floor), e > t.ceiling && (e = t.ceiling), setTimeout(o, e)
							}
							return null
						}), (function(e) {
							a() && n(e)
						}))
					}()
				}))
			}
			var on = r("./node_modules/bech32/index.js"),
				an = r.n(on);
			var sn = r("./node_modules/@ethersproject/constants/lib.esm/addresses.js");
			const ln = new $.a("providers/5.4.5");
			class cn {
				constructor() {
					ln.checkNew(new.target, cn), this.formats = this.getDefaultFormats()
				}
				getDefaultFormats() {
					const e = {},
						t = this.address.bind(this),
						r = this.bigNumber.bind(this),
						n = this.blockTag.bind(this),
						o = this.data.bind(this),
						i = this.hash.bind(this),
						a = this.hex.bind(this),
						s = this.number.bind(this),
						l = this.type.bind(this);
					return e.transaction = {
						hash: i,
						type: l,
						accessList: cn.allowNull(this.accessList.bind(this), null),
						blockHash: cn.allowNull(i, null),
						blockNumber: cn.allowNull(s, null),
						transactionIndex: cn.allowNull(s, null),
						confirmations: cn.allowNull(s, null),
						from: t,
						gasPrice: cn.allowNull(r),
						maxPriorityFeePerGas: cn.allowNull(r),
						maxFeePerGas: cn.allowNull(r),
						gasLimit: r,
						to: cn.allowNull(t, null),
						value: r,
						nonce: s,
						data: o,
						r: cn.allowNull(this.uint256),
						s: cn.allowNull(this.uint256),
						v: cn.allowNull(s),
						creates: cn.allowNull(t, null),
						raw: cn.allowNull(o)
					}, e.transactionRequest = {
						from: cn.allowNull(t),
						nonce: cn.allowNull(s),
						gasLimit: cn.allowNull(r),
						gasPrice: cn.allowNull(r),
						maxPriorityFeePerGas: cn.allowNull(r),
						maxFeePerGas: cn.allowNull(r),
						to: cn.allowNull(t),
						value: cn.allowNull(r),
						data: cn.allowNull(e => this.data(e, !0)),
						type: cn.allowNull(s),
						accessList: cn.allowNull(this.accessList.bind(this), null)
					}, e.receiptLog = {
						transactionIndex: s,
						blockNumber: s,
						transactionHash: i,
						address: t,
						topics: cn.arrayOf(i),
						data: o,
						logIndex: s,
						blockHash: i
					}, e.receipt = {
						to: cn.allowNull(this.address, null),
						from: cn.allowNull(this.address, null),
						contractAddress: cn.allowNull(t, null),
						transactionIndex: s,
						root: cn.allowNull(a),
						gasUsed: r,
						logsBloom: cn.allowNull(o),
						blockHash: i,
						transactionHash: i,
						logs: cn.arrayOf(this.receiptLog.bind(this)),
						blockNumber: s,
						confirmations: cn.allowNull(s, null),
						cumulativeGasUsed: r,
						effectiveGasPrice: cn.allowNull(r),
						status: cn.allowNull(s),
						type: l
					}, e.block = {
						hash: i,
						parentHash: i,
						number: s,
						timestamp: s,
						nonce: cn.allowNull(a),
						difficulty: this.difficulty.bind(this),
						gasLimit: r,
						gasUsed: r,
						miner: t,
						extraData: o,
						transactions: cn.allowNull(cn.arrayOf(i)),
						baseFeePerGas: cn.allowNull(r)
					}, e.blockWithTransactions = Object(Y.g)(e.block), e.blockWithTransactions.transactions = cn.allowNull(cn.arrayOf(this.transactionResponse.bind(this))), e.filter = {
						fromBlock: cn.allowNull(n, void 0),
						toBlock: cn.allowNull(n, void 0),
						blockHash: cn.allowNull(i, void 0),
						address: cn.allowNull(t, void 0),
						topics: cn.allowNull(this.topics.bind(this), void 0)
					}, e.filterLog = {
						blockNumber: cn.allowNull(s),
						blockHash: cn.allowNull(i),
						transactionIndex: s,
						removed: cn.allowNull(this.boolean.bind(this)),
						address: t,
						data: cn.allowFalsish(o, "0x"),
						topics: cn.arrayOf(i),
						transactionHash: i,
						logIndex: s
					}, e
				}
				accessList(e) {
					return Object(Ne.b)(e || [])
				}
				number(e) {
					return "0x" === e ? 0 : W.a.from(e).toNumber()
				}
				type(e) {
					return "0x" === e || null == e ? 0 : W.a.from(e).toNumber()
				}
				bigNumber(e) {
					return W.a.from(e)
				}
				boolean(e) {
					if ("boolean" == typeof e) return e;
					if ("string" == typeof e) {
						if ("true" === (e = e.toLowerCase())) return !0;
						if ("false" === e) return !1
					}
					throw new Error("invalid boolean - " + e)
				}
				hex(e, t) {
					return "string" == typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), Object(c.l)(e)) ? e.toLowerCase() : ln.throwArgumentError("invalid hash", "value", e)
				}
				data(e, t) {
					const r = this.hex(e, t);
					if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + e);
					return r
				}
				address(e) {
					return Object(H.a)(e)
				}
				callAddress(e) {
					if (!Object(c.l)(e, 32)) return null;
					const t = Object(H.a)(Object(c.e)(e, 12));
					return t === sn.a ? null : t
				}
				contractAddress(e) {
					return Object(H.b)(e)
				}
				blockTag(e) {
					if (null == e) return "latest";
					if ("earliest" === e) return "0x0";
					if ("latest" === e || "pending" === e) return e;
					if ("number" == typeof e || Object(c.l)(e)) return Object(c.g)(e);
					throw new Error("invalid blockTag")
				}
				hash(e, t) {
					const r = this.hex(e, t);
					return 32 !== Object(c.d)(r) ? ln.throwArgumentError("invalid hash", "value", e) : r
				}
				difficulty(e) {
					if (null == e) return null;
					const t = W.a.from(e);
					try {
						return t.toNumber()
					} catch (r) {}
					return null
				}
				uint256(e) {
					if (!Object(c.l)(e)) throw new Error("invalid uint256");
					return Object(c.h)(e, 32)
				}
				_block(e, t) {
					return null != e.author && null == e.miner && (e.miner = e.author), cn.check(t, e)
				}
				block(e) {
					return this._block(e, this.formats.block)
				}
				blockWithTransactions(e) {
					return this._block(e, this.formats.blockWithTransactions)
				}
				transactionRequest(e) {
					return cn.check(this.formats.transactionRequest, e)
				}
				transactionResponse(e) {
					null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && W.a.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = this.contractAddress(e)), 1 !== e.type && 2 !== e.type || null != e.accessList || (e.accessList = []);
					const t = cn.check(this.formats.transaction, e);
					if (null != e.chainId) {
						let r = e.chainId;
						Object(c.l)(r) && (r = W.a.from(r).toNumber()), t.chainId = r
					} else {
						let r = e.networkId;
						null == r && null == t.v && (r = e.chainId), Object(c.l)(r) && (r = W.a.from(r).toNumber()), "number" != typeof r && null != t.v && ((r = (t.v - 35) / 2) < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), t.chainId = r
					}
					return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null), t
				}
				transaction(e) {
					return Object(Ne.d)(e)
				}
				receiptLog(e) {
					return cn.check(this.formats.receiptLog, e)
				}
				receipt(e) {
					const t = cn.check(this.formats.receipt, e);
					if (null != t.root)
						if (t.root.length <= 4) {
							const e = W.a.from(t.root).toNumber();
							0 === e || 1 === e ? (null != t.status && t.status !== e && ln.throwArgumentError("alt-root-status/status mismatch", "value", {
								root: t.root,
								status: t.status
							}), t.status = e, delete t.root) : ln.throwArgumentError("invalid alt-root-status", "value.root", t.root)
						} else 66 !== t.root.length && ln.throwArgumentError("invalid root hash", "value.root", t.root);
					return null != t.status && (t.byzantium = !0), t
				}
				topics(e) {
					return Array.isArray(e) ? e.map(e => this.topics(e)) : null != e ? this.hash(e, !0) : null
				}
				filter(e) {
					return cn.check(this.formats.filter, e)
				}
				filterLog(e) {
					return cn.check(this.formats.filterLog, e)
				}
				static check(e, t) {
					const r = {};
					for (const o in e) try {
						const n = e[o](t[o]);
						void 0 !== n && (r[o] = n)
					} catch (n) {
						throw n.checkKey = o, n.checkValue = t[o], n
					}
					return r
				}
				static allowNull(e, t) {
					return function(r) {
						return null == r ? t : e(r)
					}
				}
				static allowFalsish(e, t) {
					return function(r) {
						return r ? e(r) : t
					}
				}
				static arrayOf(e) {
					return function(t) {
						if (!Array.isArray(t)) throw new Error("not an array");
						const r = [];
						return t.forEach((function(t) {
							r.push(e(t))
						})), r
					}
				}
			}

			function un(e) {
				return e && "function" == typeof e.isCommunityResource
			}

			function dn(e) {
				return un(e) && e.isCommunityResource()
			}
			let hn = !1;

			function fn() {
				hn || (hn = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
			}
			var mn = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const pn = new $.a("providers/5.4.5");

			function gn(e) {
				return null == e ? "null" : (32 !== Object(c.d)(e) && pn.throwArgumentError("invalid topic", "topic", e), e.toLowerCase())
			}

			function bn(e) {
				for (e = e.slice(); e.length > 0 && null == e[e.length - 1];) e.pop();
				return e.map(e => {
					if (Array.isArray(e)) {
						const t = {};
						e.forEach(e => {
							t[gn(e)] = !0
						});
						const r = Object.keys(t);
						return r.sort(), r.join("|")
					}
					return gn(e)
				}).join("&")
			}

			function vn(e) {
				if ("string" == typeof e) {
					if (e = e.toLowerCase(), 32 === Object(c.d)(e)) return "tx:" + e;
					if (-1 === e.indexOf(":")) return e
				} else {
					if (Array.isArray(e)) return "filter:*:" + bn(e);
					if (V.a.isForkEvent(e)) throw pn.warn("not implemented"), new Error("not implemented");
					if (e && "object" == typeof e) return "filter:" + (e.address || "*") + ":" + bn(e.topics || [])
				}
				throw new Error("invalid event - " + e)
			}

			function yn() {
				return (new Date).getTime()
			}

			function En(e) {
				return new Promise(t => {
					setTimeout(t, e)
				})
			}
			const An = ["block", "network", "pending", "poll"];
			class Tn {
				constructor(e, t, r) {
					Object(Y.d)(this, "tag", e), Object(Y.d)(this, "listener", t), Object(Y.d)(this, "once", r)
				}
				get event() {
					switch (this.type) {
						case "tx":
							return this.hash;
						case "filter":
							return this.filter
					}
					return this.tag
				}
				get type() {
					return this.tag.split(":")[0]
				}
				get hash() {
					const e = this.tag.split(":");
					return "tx" !== e[0] ? null : e[1]
				}
				get filter() {
					const e = this.tag.split(":");
					if ("filter" !== e[0]) return null;
					const t = e[1],
						r = "" === (n = e[2]) ? [] : n.split(/&/g).map(e => {
							if ("" === e) return [];
							const t = e.split("|").map(e => "null" === e ? null : e);
							return 1 === t.length ? t[0] : t
						});
					var n;
					const o = {};
					return r.length > 0 && (o.topics = r), t && "*" !== t && (o.address = t), o
				}
				pollable() {
					return this.tag.indexOf(":") >= 0 || An.indexOf(this.tag) >= 0
				}
			}
			const Sn = {
				0: {
					symbol: "btc",
					p2pkh: 0,
					p2sh: 5,
					prefix: "bc"
				},
				2: {
					symbol: "ltc",
					p2pkh: 48,
					p2sh: 50,
					prefix: "ltc"
				},
				3: {
					symbol: "doge",
					p2pkh: 30,
					p2sh: 22
				},
				60: {
					symbol: "eth",
					ilk: "eth"
				},
				61: {
					symbol: "etc",
					ilk: "eth"
				},
				700: {
					symbol: "xdai",
					ilk: "eth"
				}
			};

			function On(e) {
				return Object(c.h)(W.a.from(e).toHexString(), 32)
			}

			function wn(e) {
				return ve.encode(Object(c.b)([e, Object(c.e)(Oe(Oe(e)), 0, 4)]))
			}
			class Pn {
				constructor(e, t, r) {
					Object(Y.d)(this, "provider", e), Object(Y.d)(this, "name", r), Object(Y.d)(this, "address", e.formatter.address(t))
				}
				_fetchBytes(e, t) {
					return mn(this, void 0, void 0, (function*() {
						const r = {
							to: this.address,
							data: Object(c.c)([e, zr(this.name), t || "0x"])
						};
						try {
							const e = yield this.provider.call(r);
							if ("0x" === e) return null;
							const t = W.a.from(Object(c.e)(e, 0, 32)).toNumber(),
								n = W.a.from(Object(c.e)(e, t, t + 32)).toNumber();
							return Object(c.e)(e, t + 32, t + 32 + n)
						} catch (n) {
							return n.code, $.a.errors.CALL_EXCEPTION, null
						}
					}))
				}
				_getAddress(e, t) {
					const r = Sn[String(e)];
					if (null == r && pn.throwError(`unsupported coin type: ${e}`, $.a.errors.UNSUPPORTED_OPERATION, {
							operation: `getAddress(${e})`
						}), "eth" === r.ilk) return this.provider.formatter.address(t);
					const n = Object(c.a)(t);
					if (null != r.p2pkh) {
						const e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
						if (e) {
							const t = parseInt(e[1], 16);
							if (e[2].length === 2 * t && t >= 1 && t <= 75) return wn(Object(c.b)([
								[r.p2pkh], "0x" + e[2]
							]))
						}
					}
					if (null != r.p2sh) {
						const e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
						if (e) {
							const t = parseInt(e[1], 16);
							if (e[2].length === 2 * t && t >= 1 && t <= 75) return wn(Object(c.b)([
								[r.p2sh], "0x" + e[2]
							]))
						}
					}
					if (null != r.prefix) {
						const e = n[1];
						let t = n[0];
						if (0 === t ? 20 !== e && 32 !== e && (t = -1) : t = -1, t >= 0 && n.length === 2 + e && e >= 1 && e <= 75) {
							const e = an.a.toWords(n.slice(2));
							return e.unshift(t), an.a.encode(r.prefix, e)
						}
					}
					return null
				}
				getAddress(e) {
					return mn(this, void 0, void 0, (function*() {
						if (null == e && (e = 60), 60 === e) try {
							const e = {
									to: this.address,
									data: "0x3b3b57de" + zr(this.name).substring(2)
								},
								t = yield this.provider.call(e);
							return "0x" === t || t === kr.a ? null : this.provider.formatter.callAddress(t)
						} catch (n) {
							if (n.code === $.a.errors.CALL_EXCEPTION) return null;
							throw n
						}
						const t = yield this._fetchBytes("0xf1cb7e06", On(e));
						if (null == t || "0x" === t) return null;
						const r = this._getAddress(e, t);
						return null == r && pn.throwError("invalid or unsupported coin data", $.a.errors.UNSUPPORTED_OPERATION, {
							operation: `getAddress(${e})`,
							coinType: e,
							data: t
						}), r
					}))
				}
				getContentHash() {
					return mn(this, void 0, void 0, (function*() {
						const e = yield this._fetchBytes("0xbc1c58d1");
						if (null == e || "0x" === e) return null;
						const t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
						if (t) {
							const e = parseInt(t[3], 16);
							if (t[4].length === 2 * e) return "ipfs://" + ve.encode("0x" + t[1])
						}
						const r = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
						return r && 64 === r[1].length ? "bzz://" + r[1] : pn.throwError("invalid or unsupported content hash data", $.a.errors.UNSUPPORTED_OPERATION, {
							operation: "getContentHash()",
							data: e
						})
					}))
				}
				getText(e) {
					return mn(this, void 0, void 0, (function*() {
						let t = Object(K.f)(e);
						(t = Object(c.b)([On(64), On(t.length), t])).length % 32 != 0 && (t = Object(c.b)([t, Object(c.h)("0x", 32 - e.length % 32)]));
						const r = yield this._fetchBytes("0x59d1d43c", Object(c.i)(t));
						return null == r || "0x" === r ? null : Object(K.h)(r)
					}))
				}
			}
			let Fn = null,
				Cn = 1;
			class Nn extends V.b {
				constructor(e) {
					if (pn.checkNew(new.target, V.b), super(), this._events = [], this._emitted = {
							block: -2
						}, this.formatter = new.target.getFormatter(), Object(Y.d)(this, "anyNetwork", "any" === e), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise) this._networkPromise = e, e.catch(e => {}), this._ready().catch(e => {});
					else {
						const t = Object(Y.e)(new.target, "getNetwork")(e);
						t ? (Object(Y.d)(this, "_network", t), this.emit("network", t, null)) : pn.throwArgumentError("invalid network", "network", e)
					}
					this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._pollingInterval = 4e3, this._fastQueryDate = 0
				}
				_ready() {
					return mn(this, void 0, void 0, (function*() {
						if (null == this._network) {
							let t = null;
							if (this._networkPromise) try {
								t = yield this._networkPromise
							} catch (e) {}
							null == t && (t = yield this.detectNetwork()), t || pn.throwError("no network detected", $.a.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : Object(Y.d)(this, "_network", t), this.emit("network", t, null))
						}
						return this._network
					}))
				}
				get ready() {
					return nn(() => this._ready().then(e => e, e => {
						if (e.code !== $.a.errors.NETWORK_ERROR || "noNetwork" !== e.event) throw e
					}))
				}
				static getFormatter() {
					return null == Fn && (Fn = new cn), Fn
				}
				static getNetwork(e) {
					return Nr(null == e ? "homestead" : e)
				}
				_getInternalBlockNumber(e) {
					return mn(this, void 0, void 0, (function*() {
						if (yield this._ready(), e > 0)
							for (; this._internalBlockNumber;) {
								const t = this._internalBlockNumber;
								try {
									const r = yield t;
									if (yn() - r.respTime <= e) return r.blockNumber;
									break
								} catch (n) {
									if (this._internalBlockNumber === t) break
								}
							}
						const t = yn(),
							r = Object(Y.f)({
								blockNumber: this.perform("getBlockNumber", {}),
								networkError: this.getNetwork().then(e => null, e => e)
							}).then(({
								blockNumber: e,
								networkError: n
							}) => {
								if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
								const o = yn();
								return (e = W.a.from(e).toNumber()) < this._maxInternalBlockNumber && (e = this._maxInternalBlockNumber), this._maxInternalBlockNumber = e, this._setFastBlockNumber(e), {
									blockNumber: e,
									reqTime: t,
									respTime: o
								}
							});
						return this._internalBlockNumber = r, r.catch(e => {
							this._internalBlockNumber === r && (this._internalBlockNumber = null)
						}), (yield r).blockNumber
					}))
				}
				poll() {
					return mn(this, void 0, void 0, (function*() {
						const e = Cn++,
							t = [];
						let r = null;
						try {
							r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
						} catch (n) {
							return void this.emit("error", n)
						}
						if (this._setFastBlockNumber(r), this.emit("poll", e, r), r !== this._lastBlockNumber) {
							if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) pn.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", pn.makeError("network block skew detected", $.a.errors.NETWORK_ERROR, {
								blockNumber: r,
								event: "blockSkew",
								previousBlockNumber: this._emitted.block
							})), this.emit("block", r);
							else
								for (let e = this._emitted.block + 1; e <= r; e++) this.emit("block", e);
							this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(e => {
								if ("block" === e) return;
								const t = this._emitted[e];
								"pending" !== t && r - t > 12 && delete this._emitted[e]
							})), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(e => {
								switch (e.type) {
									case "tx": {
										const r = e.hash;
										let n = this.getTransactionReceipt(r).then(e => e && null != e.blockNumber ? (this._emitted["t:" + r] = e.blockNumber, this.emit(r, e), null) : null).catch(e => {
											this.emit("error", e)
										});
										t.push(n);
										break
									}
									case "filter": {
										const n = e.filter;
										n.fromBlock = this._lastBlockNumber + 1, n.toBlock = r;
										const o = this.getLogs(n).then(e => {
											0 !== e.length && e.forEach(e => {
												this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(n, e)
											})
										}).catch(e => {
											this.emit("error", e)
										});
										t.push(o);
										break
									}
								}
							}), this._lastBlockNumber = r, Promise.all(t).then(() => {
								this.emit("didPoll", e)
							}).catch(e => {
								this.emit("error", e)
							})
						} else this.emit("didPoll", e)
					}))
				}
				resetEventsBlock(e) {
					this._lastBlockNumber = e - 1, this.polling && this.poll()
				}
				get network() {
					return this._network
				}
				detectNetwork() {
					return mn(this, void 0, void 0, (function*() {
						return pn.throwError("provider does not support network detection", $.a.errors.UNSUPPORTED_OPERATION, {
							operation: "provider.detectNetwork"
						})
					}))
				}
				getNetwork() {
					return mn(this, void 0, void 0, (function*() {
						const e = yield this._ready(), t = yield this.detectNetwork();
						if (e.chainId !== t.chainId) {
							if (this.anyNetwork) return this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e), yield En(0), this._network;
							const r = pn.makeError("underlying network changed", $.a.errors.NETWORK_ERROR, {
								event: "changed",
								network: e,
								detectedNetwork: t
							});
							throw this.emit("error", r), r
						}
						return e
					}))
				}
				get blockNumber() {
					return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(e => {
						this._setFastBlockNumber(e)
					}, e => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
				}
				get polling() {
					return null != this._poller
				}
				set polling(e) {
					e && !this._poller ? (this._poller = setInterval(() => {
						this.poll()
					}, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
						this.poll(), this._bootstrapPoll = setTimeout(() => {
							this._poller || this.poll(), this._bootstrapPoll = null
						}, this.pollingInterval)
					}, 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null)
				}
				get pollingInterval() {
					return this._pollingInterval
				}
				set pollingInterval(e) {
					if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e) throw new Error("invalid polling interval");
					this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
						this.poll()
					}, this._pollingInterval))
				}
				_getFastBlockNumber() {
					const e = yn();
					return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then(e => ((null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e), this._fastBlockNumber))), this._fastBlockNumberPromise
				}
				_setFastBlockNumber(e) {
					null != this._fastBlockNumber && e < this._fastBlockNumber || (this._fastQueryDate = yn(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)))
				}
				waitForTransaction(e, t, r) {
					return mn(this, void 0, void 0, (function*() {
						return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null)
					}))
				}
				_waitForTransaction(e, t, r, n) {
					return mn(this, void 0, void 0, (function*() {
						const o = yield this.getTransactionReceipt(e);
						return (o ? o.confirmations : 0) >= t ? o : new Promise((o, i) => {
							const a = [];
							let s = !1;
							const l = function() {
									return !!s || (s = !0, a.forEach(e => {
										e()
									}), !1)
								},
								c = e => {
									e.confirmations < t || l() || o(e)
								};
							if (this.on(e, c), a.push(() => {
									this.removeListener(e, c)
								}), n) {
								let r = n.startBlock,
									o = null;
								const c = a => mn(this, void 0, void 0, (function*() {
									s || (yield En(1e3), this.getTransactionCount(n.from).then(u => mn(this, void 0, void 0, (function*() {
										if (!s) {
											if (u <= n.nonce) r = a;
											else {
												{
													const t = yield this.getTransaction(e);
													if (t && null != t.blockNumber) return
												}
												for (null == o && (o = r - 3) < n.startBlock && (o = n.startBlock); o <= a;) {
													if (s) return;
													const r = yield this.getBlockWithTransactions(o);
													for (let o = 0; o < r.transactions.length; o++) {
														const a = r.transactions[o];
														if (a.hash === e) return;
														if (a.from === n.from && a.nonce === n.nonce) {
															if (s) return;
															const r = yield this.waitForTransaction(a.hash, t);
															if (l()) return;
															let o = "replaced";
															return a.data === n.data && a.to === n.to && a.value.eq(n.value) ? o = "repriced" : "0x" === a.data && a.from === a.to && a.value.isZero() && (o = "cancelled"), void i(pn.makeError("transaction was replaced", $.a.errors.TRANSACTION_REPLACED, {
																cancelled: "replaced" === o || "cancelled" === o,
																reason: o,
																replacement: this._wrapTransaction(a),
																hash: e,
																receipt: r
															}))
														}
													}
													o++
												}
											}
											s || this.once("block", c)
										}
									})), e => {
										s || this.once("block", c)
									}))
								}));
								if (s) return;
								this.once("block", c), a.push(() => {
									this.removeListener("block", c)
								})
							}
							if ("number" == typeof r && r > 0) {
								const e = setTimeout(() => {
									l() || i(pn.makeError("timeout exceeded", $.a.errors.TIMEOUT, {
										timeout: r
									}))
								}, r);
								e.unref && e.unref(), a.push(() => {
									clearTimeout(e)
								})
							}
						})
					}))
				}
				getBlockNumber() {
					return mn(this, void 0, void 0, (function*() {
						return this._getInternalBlockNumber(0)
					}))
				}
				getGasPrice() {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const e = yield this.perform("getGasPrice", {});
						try {
							return W.a.from(e)
						} catch (t) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "getGasPrice",
								result: e,
								error: t
							})
						}
					}))
				}
				getBalance(e, t) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Object(Y.f)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(t)
						}), n = yield this.perform("getBalance", r);
						try {
							return W.a.from(n)
						} catch (o) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "getBalance",
								params: r,
								result: n,
								error: o
							})
						}
					}))
				}
				getTransactionCount(e, t) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Object(Y.f)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(t)
						}), n = yield this.perform("getTransactionCount", r);
						try {
							return W.a.from(n).toNumber()
						} catch (o) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "getTransactionCount",
								params: r,
								result: n,
								error: o
							})
						}
					}))
				}
				getCode(e, t) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Object(Y.f)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(t)
						}), n = yield this.perform("getCode", r);
						try {
							return Object(c.i)(n)
						} catch (o) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "getCode",
								params: r,
								result: n,
								error: o
							})
						}
					}))
				}
				getStorageAt(e, t, r) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const n = yield Object(Y.f)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(r),
							position: Promise.resolve(t).then(e => Object(c.g)(e))
						}), o = yield this.perform("getStorageAt", n);
						try {
							return Object(c.i)(o)
						} catch (i) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "getStorageAt",
								params: n,
								result: o,
								error: i
							})
						}
					}))
				}
				_wrapTransaction(e, t, r) {
					if (null != t && 32 !== Object(c.d)(t)) throw new Error("invalid response - sendTransaction");
					const n = e;
					return null != t && e.hash !== t && pn.throwError("Transaction hash mismatch from Provider.sendTransaction.", $.a.errors.UNKNOWN_ERROR, {
						expectedHash: e.hash,
						returnedHash: t
					}), n.wait = (t, n) => mn(this, void 0, void 0, (function*() {
						null == t && (t = 1), null == n && (n = 0);
						let o = void 0;
						0 !== t && null != r && (o = {
							data: e.data,
							from: e.from,
							nonce: e.nonce,
							to: e.to,
							value: e.value,
							startBlock: r
						});
						const i = yield this._waitForTransaction(e.hash, t, n, o);
						return null == i && 0 === t ? null : (this._emitted["t:" + e.hash] = i.blockNumber, 0 === i.status && pn.throwError("transaction failed", $.a.errors.CALL_EXCEPTION, {
							transactionHash: e.hash,
							transaction: e,
							receipt: i
						}), i)
					})), n
				}
				sendTransaction(e) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Promise.resolve(e).then(e => Object(c.i)(e)), r = this.formatter.transaction(e);
						null == r.confirmations && (r.confirmations = 0);
						const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
						try {
							const e = yield this.perform("sendTransaction", {
								signedTransaction: t
							});
							return this._wrapTransaction(r, e, n)
						} catch (o) {
							throw o.transaction = r, o.transactionHash = r.hash, o
						}
					}))
				}
				_getTransactionRequest(e) {
					return mn(this, void 0, void 0, (function*() {
						const t = yield e, r = {};
						return ["from", "to"].forEach(e => {
							null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? this._getAddress(e) : null))
						}), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(e => {
							null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? W.a.from(e) : null))
						}), ["type"].forEach(e => {
							null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => null != e ? e : null))
						}), t.accessList && (r.accessList = this.formatter.accessList(t.accessList)), ["data"].forEach(e => {
							null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? Object(c.i)(e) : null))
						}), this.formatter.transactionRequest(yield Object(Y.f)(r))
					}))
				}
				_getFilter(e) {
					return mn(this, void 0, void 0, (function*() {
						e = yield e;
						const t = {};
						return null != e.address && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach(r => {
							null != e[r] && (t[r] = e[r])
						}), ["fromBlock", "toBlock"].forEach(r => {
							null != e[r] && (t[r] = this._getBlockTag(e[r]))
						}), this.formatter.filter(yield Object(Y.f)(t))
					}))
				}
				call(e, t) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Object(Y.f)({
							transaction: this._getTransactionRequest(e),
							blockTag: this._getBlockTag(t)
						}), n = yield this.perform("call", r);
						try {
							return Object(c.i)(n)
						} catch (o) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "call",
								params: r,
								result: n,
								error: o
							})
						}
					}))
				}
				estimateGas(e) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Object(Y.f)({
							transaction: this._getTransactionRequest(e)
						}), r = yield this.perform("estimateGas", t);
						try {
							return W.a.from(r)
						} catch (n) {
							return pn.throwError("bad result from backend", $.a.errors.SERVER_ERROR, {
								method: "estimateGas",
								params: t,
								result: r,
								error: n
							})
						}
					}))
				}
				_getAddress(e) {
					return mn(this, void 0, void 0, (function*() {
						const t = yield this.resolveName(e);
						return null == t && pn.throwError("ENS name not configured", $.a.errors.UNSUPPORTED_OPERATION, {
							operation: `resolveName(${JSON.stringify(e)})`
						}), t
					}))
				}
				_getBlock(e, t) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork(), e = yield e;
						let r = -128;
						const n = {
							includeTransactions: !!t
						};
						if (Object(c.l)(e, 32)) n.blockHash = e;
						else try {
							n.blockTag = this.formatter.blockTag(yield this._getBlockTag(e)), Object(c.l)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
						} catch (o) {
							pn.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e)
						}
						return nn(() => mn(this, void 0, void 0, (function*() {
							const e = yield this.perform("getBlock", n);
							if (null == e) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] ? null : null != n.blockTag && r > this._emitted.block ? null : void 0;
							if (t) {
								let t = null;
								for (let n = 0; n < e.transactions.length; n++) {
									const r = e.transactions[n];
									if (null == r.blockNumber) r.confirmations = 0;
									else if (null == r.confirmations) {
										null == t && (t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
										let e = t - r.blockNumber + 1;
										e <= 0 && (e = 1), r.confirmations = e
									}
								}
								const r = this.formatter.blockWithTransactions(e);
								return r.transactions = r.transactions.map(e => this._wrapTransaction(e)), r
							}
							return this.formatter.block(e)
						})), {
							oncePoll: this
						})
					}))
				}
				getBlock(e) {
					return this._getBlock(e, !1)
				}
				getBlockWithTransactions(e) {
					return this._getBlock(e, !0)
				}
				getTransaction(e) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork(), e = yield e;
						const t = {
							transactionHash: this.formatter.hash(e, !0)
						};
						return nn(() => mn(this, void 0, void 0, (function*() {
							const r = yield this.perform("getTransaction", t);
							if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
							const n = this.formatter.transactionResponse(r);
							if (null == n.blockNumber) n.confirmations = 0;
							else if (null == n.confirmations) {
								let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
								e <= 0 && (e = 1), n.confirmations = e
							}
							return this._wrapTransaction(n)
						})), {
							oncePoll: this
						})
					}))
				}
				getTransactionReceipt(e) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork(), e = yield e;
						const t = {
							transactionHash: this.formatter.hash(e, !0)
						};
						return nn(() => mn(this, void 0, void 0, (function*() {
							const r = yield this.perform("getTransactionReceipt", t);
							if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
							if (null == r.blockHash) return;
							const n = this.formatter.receipt(r);
							if (null == n.blockNumber) n.confirmations = 0;
							else if (null == n.confirmations) {
								let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
								e <= 0 && (e = 1), n.confirmations = e
							}
							return n
						})), {
							oncePoll: this
						})
					}))
				}
				getLogs(e) {
					return mn(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Object(Y.f)({
							filter: this._getFilter(e)
						}), r = yield this.perform("getLogs", t);
						return r.forEach(e => {
							null == e.removed && (e.removed = !1)
						}), cn.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
					}))
				}
				getEtherPrice() {
					return mn(this, void 0, void 0, (function*() {
						return yield this.getNetwork(), this.perform("getEtherPrice", {})
					}))
				}
				_getBlockTag(e) {
					return mn(this, void 0, void 0, (function*() {
						if ("number" == typeof(e = yield e) && e < 0) {
							e % 1 && pn.throwArgumentError("invalid BlockTag", "blockTag", e);
							let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
							return (t += e) < 0 && (t = 0), this.formatter.blockTag(t)
						}
						return this.formatter.blockTag(e)
					}))
				}
				getResolver(e) {
					return mn(this, void 0, void 0, (function*() {
						try {
							const t = yield this._getResolver(e);
							return null == t ? null : new Pn(this, t, e)
						} catch (t) {
							return t.code, $.a.errors.CALL_EXCEPTION, null
						}
					}))
				}
				_getResolver(e) {
					return mn(this, void 0, void 0, (function*() {
						const t = yield this.getNetwork();
						t.ensAddress || pn.throwError("network does not support ENS", $.a.errors.UNSUPPORTED_OPERATION, {
							operation: "ENS",
							network: t.name
						});
						const r = {
							to: t.ensAddress,
							data: "0x0178b8bf" + zr(e).substring(2)
						};
						try {
							return this.formatter.callAddress(yield this.call(r))
						} catch (n) {
							if (n.code === $.a.errors.CALL_EXCEPTION) return null;
							throw n
						}
					}))
				}
				resolveName(e) {
					return mn(this, void 0, void 0, (function*() {
						e = yield e;
						try {
							return Promise.resolve(this.formatter.address(e))
						} catch (r) {
							if (Object(c.l)(e)) throw r
						}
						"string" != typeof e && pn.throwArgumentError("invalid ENS name", "name", e);
						const t = yield this.getResolver(e);
						return t ? yield t.getAddress(): null
					}))
				}
				lookupAddress(e) {
					return mn(this, void 0, void 0, (function*() {
						e = yield e;
						const t = (e = this.formatter.address(e)).substring(2).toLowerCase() + ".addr.reverse",
							r = yield this._getResolver(t);
						if (!r) return null;
						let n = Object(c.a)(yield this.call({
							to: r,
							data: "0x691f3431" + zr(t).substring(2)
						}));
						if (n.length < 32 || !W.a.from(n.slice(0, 32)).eq(32)) return null;
						if ((n = n.slice(32)).length < 32) return null;
						const o = W.a.from(n.slice(0, 32)).toNumber();
						if (o > (n = n.slice(32)).length) return null;
						const i = Object(K.h)(n.slice(0, o));
						return (yield this.resolveName(i)) != e ? null : i
					}))
				}
				perform(e, t) {
					return pn.throwError(e + " not implemented", $.a.errors.NOT_IMPLEMENTED, {
						operation: e
					})
				}
				_startEvent(e) {
					this.polling = this._events.filter(e => e.pollable()).length > 0
				}
				_stopEvent(e) {
					this.polling = this._events.filter(e => e.pollable()).length > 0
				}
				_addEventListener(e, t, r) {
					const n = new Tn(vn(e), t, r);
					return this._events.push(n), this._startEvent(n), this
				}
				on(e, t) {
					return this._addEventListener(e, t, !1)
				}
				once(e, t) {
					return this._addEventListener(e, t, !0)
				}
				emit(e, ...t) {
					let r = !1,
						n = [],
						o = vn(e);
					return this._events = this._events.filter(e => e.tag !== o || (setTimeout(() => {
						e.listener.apply(this, t)
					}, 0), r = !0, !e.once || (n.push(e), !1))), n.forEach(e => {
						this._stopEvent(e)
					}), r
				}
				listenerCount(e) {
					if (!e) return this._events.length;
					let t = vn(e);
					return this._events.filter(e => e.tag === t).length
				}
				listeners(e) {
					if (null == e) return this._events.map(e => e.listener);
					let t = vn(e);
					return this._events.filter(e => e.tag === t).map(e => e.listener)
				}
				off(e, t) {
					if (null == t) return this.removeAllListeners(e);
					const r = [];
					let n = !1,
						o = vn(e);
					return this._events = this._events.filter(e => e.tag !== o || e.listener != t || (!!n || (n = !0, r.push(e), !1))), r.forEach(e => {
						this._stopEvent(e)
					}), this
				}
				removeAllListeners(e) {
					let t = [];
					if (null == e) t = this._events, this._events = [];
					else {
						const r = vn(e);
						this._events = this._events.filter(e => e.tag !== r || (t.push(e), !1))
					}
					return t.forEach(e => {
						this._stopEvent(e)
					}), this
				}
			}
			var kn = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const Rn = new $.a("providers/5.4.5"),
				Ln = ["call", "estimateGas"];

			function Mn(e, t, r) {
				if ("call" === e && t.code === $.a.errors.SERVER_ERROR) {
					const e = t.error;
					if (e && e.message.match("reverted") && Object(c.l)(e.data)) return e.data;
					Rn.throwError("missing revert data in call exception", $.a.errors.CALL_EXCEPTION, {
						error: t,
						data: "0x"
					})
				}
				let n = t.message;
				t.code === $.a.errors.SERVER_ERROR && t.error && "string" == typeof t.error.message ? n = t.error.message : "string" == typeof t.body ? n = t.body : "string" == typeof t.responseText && (n = t.responseText), n = (n || "").toLowerCase();
				const o = r.transaction || r.signedTransaction;
				throw n.match(/insufficient funds|base fee exceeds gas limit/) && Rn.throwError("insufficient funds for intrinsic transaction cost", $.a.errors.INSUFFICIENT_FUNDS, {
					error: t,
					method: e,
					transaction: o
				}), n.match(/nonce too low/) && Rn.throwError("nonce has already been used", $.a.errors.NONCE_EXPIRED, {
					error: t,
					method: e,
					transaction: o
				}), n.match(/replacement transaction underpriced/) && Rn.throwError("replacement fee too low", $.a.errors.REPLACEMENT_UNDERPRICED, {
					error: t,
					method: e,
					transaction: o
				}), n.match(/only replay-protected/) && Rn.throwError("legacy pre-eip-155 transactions not supported", $.a.errors.UNSUPPORTED_OPERATION, {
					error: t,
					method: e,
					transaction: o
				}), Ln.indexOf(e) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && Rn.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", $.a.errors.UNPREDICTABLE_GAS_LIMIT, {
					error: t,
					method: e,
					transaction: o
				}), t
			}

			function Bn(e) {
				return new Promise((function(t) {
					setTimeout(t, e)
				}))
			}

			function Jn(e) {
				if (e.error) {
					const t = new Error(e.error.message);
					throw t.code = e.error.code, t.data = e.error.data, t
				}
				return e.result
			}

			function jn(e) {
				return e ? e.toLowerCase() : e
			}
			const _n = {};
			class Dn extends z.a {
				constructor(e, t, r) {
					if (Rn.checkNew(new.target, Dn), super(), e !== _n) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
					Object(Y.d)(this, "provider", t), null == r && (r = 0), "string" == typeof r ? (Object(Y.d)(this, "_address", this.provider.formatter.address(r)), Object(Y.d)(this, "_index", null)) : "number" == typeof r ? (Object(Y.d)(this, "_index", r), Object(Y.d)(this, "_address", null)) : Rn.throwArgumentError("invalid address or index", "addressOrIndex", r)
				}
				connect(e) {
					return Rn.throwError("cannot alter JSON-RPC Signer connection", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "connect"
					})
				}
				connectUnchecked() {
					return new In(_n, this.provider, this._address || this._index)
				}
				getAddress() {
					return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(e => (e.length <= this._index && Rn.throwError("unknown account #" + this._index, $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "getAddress"
					}), this.provider.formatter.address(e[this._index])))
				}
				sendUncheckedTransaction(e) {
					e = Object(Y.g)(e);
					const t = this.getAddress().then(e => (e && (e = e.toLowerCase()), e));
					if (null == e.gasLimit) {
						const r = Object(Y.g)(e);
						r.from = t, e.gasLimit = this.provider.estimateGas(r)
					}
					return null != e.to && (e.to = Promise.resolve(e.to).then(e => kn(this, void 0, void 0, (function*() {
						if (null == e) return null;
						const t = yield this.provider.resolveName(e);
						return null == t && Rn.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
					})))), Object(Y.f)({
						tx: Object(Y.f)(e),
						sender: t
					}).then(({
						tx: t,
						sender: r
					}) => {
						null != t.from ? t.from.toLowerCase() !== r && Rn.throwArgumentError("from address mismatch", "transaction", e) : t.from = r;
						const n = this.provider.constructor.hexlifyTransaction(t, {
							from: !0
						});
						return this.provider.send("eth_sendTransaction", [n]).then(e => e, e => Mn("sendTransaction", e, n))
					})
				}
				signTransaction(e) {
					return Rn.throwError("signing transactions is unsupported", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "signTransaction"
					})
				}
				sendTransaction(e) {
					return kn(this, void 0, void 0, (function*() {
						const t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
						try {
							return yield nn(() => kn(this, void 0, void 0, (function*() {
								const e = yield this.provider.getTransaction(r);
								if (null !== e) return this.provider._wrapTransaction(e, r, t)
							})), {
								oncePoll: this.provider
							})
						} catch (n) {
							throw n.transactionHash = r, n
						}
					}))
				}
				signMessage(e) {
					return kn(this, void 0, void 0, (function*() {
						const t = "string" == typeof e ? Object(K.f)(e) : e,
							r = yield this.getAddress();
						return yield this.provider.send("eth_sign", [r.toLowerCase(), Object(c.i)(t)])
					}))
				}
				_signTypedData(e, t, r) {
					return kn(this, void 0, void 0, (function*() {
						const n = yield ge.resolveNames(e, t, r, e => this.provider.resolveName(e)), o = yield this.getAddress();
						return yield this.provider.send("eth_signTypedData_v4", [o.toLowerCase(), JSON.stringify(ge.getPayload(n.domain, t, n.value))])
					}))
				}
				unlock(e) {
					return kn(this, void 0, void 0, (function*() {
						const t = this.provider,
							r = yield this.getAddress();
						return t.send("personal_unlockAccount", [r.toLowerCase(), e, null])
					}))
				}
			}
			class In extends Dn {
				sendTransaction(e) {
					return this.sendUncheckedTransaction(e).then(e => ({
						hash: e,
						nonce: null,
						gasLimit: null,
						gasPrice: null,
						data: null,
						value: null,
						chainId: null,
						confirmations: 0,
						from: null,
						wait: t => this.provider.waitForTransaction(e, t)
					}))
				}
			}
			const xn = {
				chainId: !0,
				data: !0,
				gasLimit: !0,
				gasPrice: !0,
				nonce: !0,
				to: !0,
				value: !0,
				type: !0,
				accessList: !0,
				maxFeePerGas: !0,
				maxPriorityFeePerGas: !0
			};
			class Un extends Nn {
				constructor(e, t) {
					Rn.checkNew(new.target, Un);
					let r = t;
					null == r && (r = new Promise((e, t) => {
						setTimeout(() => {
							this.detectNetwork().then(t => {
								e(t)
							}, e => {
								t(e)
							})
						}, 0)
					})), super(r), e || (e = Object(Y.e)(this.constructor, "defaultUrl")()), "string" == typeof e ? Object(Y.d)(this, "connection", Object.freeze({
						url: e
					})) : Object(Y.d)(this, "connection", Object.freeze(Object(Y.g)(e))), this._nextId = 42
				}
				get _cache() {
					return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
				}
				static defaultUrl() {
					return "http://localhost:8545"
				}
				detectNetwork() {
					return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
						this._cache.detectNetwork = null
					}, 0)), this._cache.detectNetwork
				}
				_uncachedDetectNetwork() {
					return kn(this, void 0, void 0, (function*() {
						yield Bn(0);
						let e = null;
						try {
							e = yield this.send("eth_chainId", [])
						} catch (t) {
							try {
								e = yield this.send("net_version", [])
							} catch (t) {}
						}
						if (null != e) {
							const r = Object(Y.e)(this.constructor, "getNetwork");
							try {
								return r(W.a.from(e).toNumber())
							} catch (t) {
								return Rn.throwError("could not detect network", $.a.errors.NETWORK_ERROR, {
									chainId: e,
									event: "invalidNetwork",
									serverError: t
								})
							}
						}
						return Rn.throwError("could not detect network", $.a.errors.NETWORK_ERROR, {
							event: "noNetwork"
						})
					}))
				}
				getSigner(e) {
					return new Dn(_n, this, e)
				}
				getUncheckedSigner(e) {
					return this.getSigner(e).connectUnchecked()
				}
				listAccounts() {
					return this.send("eth_accounts", []).then(e => e.map(e => this.formatter.address(e)))
				}
				send(e, t) {
					const r = {
						method: e,
						params: t,
						id: this._nextId++,
						jsonrpc: "2.0"
					};
					this.emit("debug", {
						action: "request",
						request: Object(Y.c)(r),
						provider: this
					});
					const n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
					if (n && this._cache[e]) return this._cache[e];
					const o = rn(this.connection, JSON.stringify(r), Jn).then(e => (this.emit("debug", {
						action: "response",
						request: r,
						response: e,
						provider: this
					}), e), e => {
						throw this.emit("debug", {
							action: "response",
							error: e,
							request: r,
							provider: this
						}), e
					});
					return n && (this._cache[e] = o, setTimeout(() => {
						this._cache[e] = null
					}, 0)), o
				}
				prepareRequest(e, t) {
					switch (e) {
						case "getBlockNumber":
							return ["eth_blockNumber", []];
						case "getGasPrice":
							return ["eth_gasPrice", []];
						case "getBalance":
							return ["eth_getBalance", [jn(t.address), t.blockTag]];
						case "getTransactionCount":
							return ["eth_getTransactionCount", [jn(t.address), t.blockTag]];
						case "getCode":
							return ["eth_getCode", [jn(t.address), t.blockTag]];
						case "getStorageAt":
							return ["eth_getStorageAt", [jn(t.address), t.position, t.blockTag]];
						case "sendTransaction":
							return ["eth_sendRawTransaction", [t.signedTransaction]];
						case "getBlock":
							return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
						case "getTransaction":
							return ["eth_getTransactionByHash", [t.transactionHash]];
						case "getTransactionReceipt":
							return ["eth_getTransactionReceipt", [t.transactionHash]];
						case "call":
							return ["eth_call", [Object(Y.e)(this.constructor, "hexlifyTransaction")(t.transaction, {
								from: !0
							}), t.blockTag]];
						case "estimateGas":
							return ["eth_estimateGas", [Object(Y.e)(this.constructor, "hexlifyTransaction")(t.transaction, {
								from: !0
							})]];
						case "getLogs":
							return t.filter && null != t.filter.address && (t.filter.address = jn(t.filter.address)), ["eth_getLogs", [t.filter]]
					}
					return null
				}
				perform(e, t) {
					return kn(this, void 0, void 0, (function*() {
						if ("call" === e || "estimateGas" === e) {
							const e = t.transaction;
							if (e && null != e.type && W.a.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
								const r = yield this.getFeeData();
								null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((t = Object(Y.g)(t)).transaction = Object(Y.g)(e), delete t.transaction.type)
							}
						}
						const r = this.prepareRequest(e, t);
						null == r && Rn.throwError(e + " not implemented", $.a.errors.NOT_IMPLEMENTED, {
							operation: e
						});
						try {
							return yield this.send(r[0], r[1])
						} catch (n) {
							return Mn(e, n, t)
						}
					}))
				}
				_startEvent(e) {
					"pending" === e.tag && this._startPending(), super._startEvent(e)
				}
				_startPending() {
					if (null != this._pendingFilter) return;
					const e = this,
						t = this.send("eth_newPendingTransactionFilter", []);
					this._pendingFilter = t, t.then((function(r) {
						return function n() {
							e.send("eth_getFilterChanges", [r]).then((function(r) {
								if (e._pendingFilter != t) return null;
								let n = Promise.resolve();
								return r.forEach((function(t) {
									e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then((function() {
										return e.getTransaction(t).then((function(t) {
											return e.emit("pending", t), null
										}))
									}))
								})), n.then((function() {
									return Bn(1e3)
								}))
							})).then((function() {
								if (e._pendingFilter == t) return setTimeout((function() {
									n()
								}), 0), null;
								e.send("eth_uninstallFilter", [r])
							})).catch(e => {})
						}(), r
					})).catch(e => {})
				}
				_stopEvent(e) {
					"pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e)
				}
				static hexlifyTransaction(e, t) {
					const r = Object(Y.g)(xn);
					if (t)
						for (const o in t) t[o] && (r[o] = !0);
					Object(Y.b)(e, r);
					const n = {};
					return ["gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(t) {
						if (null == e[t]) return;
						const r = Object(c.g)(e[t]);
						"gasLimit" === t && (t = "gas"), n[t] = r
					})), ["from", "to", "data"].forEach((function(t) {
						null != e[t] && (n[t] = Object(c.i)(e[t]))
					})), e.accessList && (n.accessList = Object(Ne.b)(e.accessList)), n
				}
			}
			let Gn = null;
			try {
				if (null == (Gn = WebSocket)) throw new Error("inject please")
			} catch (as) {
				const e = new $.a("providers/5.4.5");
				Gn = function() {
					e.throwError("WebSockets not supported in this environment", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new WebSocket()"
					})
				}
			}
			var Xn = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const Hn = new $.a("providers/5.4.5");
			let Vn = 1;
			class zn extends Un {
				constructor(e, t) {
					"any" === t && Hn.throwError("WebSocketProvider does not support 'any' network yet", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "network:any"
					}), super(e, t), this._pollingInterval = -1, this._wsReady = !1, Object(Y.d)(this, "_websocket", new Gn(this.connection.url)), Object(Y.d)(this, "_requests", {}), Object(Y.d)(this, "_subs", {}), Object(Y.d)(this, "_subIds", {}), Object(Y.d)(this, "_detectNetwork", super.detectNetwork()), this._websocket.onopen = () => {
						this._wsReady = !0, Object.keys(this._requests).forEach(e => {
							this._websocket.send(this._requests[e].payload)
						})
					}, this._websocket.onmessage = e => {
						const t = e.data,
							r = JSON.parse(t);
						if (null != r.id) {
							const e = String(r.id),
								n = this._requests[e];
							if (delete this._requests[e], void 0 !== r.result) n.callback(null, r.result), this.emit("debug", {
								action: "response",
								request: JSON.parse(n.payload),
								response: r.result,
								provider: this
							});
							else {
								let e = null;
								r.error ? (e = new Error(r.error.message || "unknown error"), Object(Y.d)(e, "code", r.error.code || null), Object(Y.d)(e, "response", t)) : e = new Error("unknown error"), n.callback(e, void 0), this.emit("debug", {
									action: "response",
									error: e,
									request: JSON.parse(n.payload),
									provider: this
								})
							}
						} else if ("eth_subscription" === r.method) {
							const e = this._subs[r.params.subscription];
							e && e.processFunc(r.params.result)
						} else console.warn("this should not happen")
					};
					const r = setInterval(() => {
						this.emit("poll")
					}, 1e3);
					r.unref && r.unref()
				}
				detectNetwork() {
					return this._detectNetwork
				}
				get pollingInterval() {
					return 0
				}
				resetEventsBlock(e) {
					Hn.throwError("cannot reset events block on WebSocketProvider", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "resetEventBlock"
					})
				}
				set pollingInterval(e) {
					Hn.throwError("cannot set polling interval on WebSocketProvider", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "setPollingInterval"
					})
				}
				poll() {
					return Xn(this, void 0, void 0, (function*() {
						return null
					}))
				}
				set polling(e) {
					e && Hn.throwError("cannot set polling on WebSocketProvider", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "setPolling"
					})
				}
				send(e, t) {
					const r = Vn++;
					return new Promise((n, o) => {
						const i = JSON.stringify({
							method: e,
							params: t,
							id: r,
							jsonrpc: "2.0"
						});
						this.emit("debug", {
							action: "request",
							request: JSON.parse(i),
							provider: this
						}), this._requests[String(r)] = {
							callback: function(e, t) {
								return e ? o(e) : n(t)
							},
							payload: i
						}, this._wsReady && this._websocket.send(i)
					})
				}
				static defaultUrl() {
					return "ws://localhost:8546"
				}
				_subscribe(e, t, r) {
					return Xn(this, void 0, void 0, (function*() {
						let n = this._subIds[e];
						null == n && (n = Promise.all(t).then(e => this.send("eth_subscribe", e)), this._subIds[e] = n);
						const o = yield n;
						this._subs[o] = {
							tag: e,
							processFunc: r
						}
					}))
				}
				_startEvent(e) {
					switch (e.type) {
						case "block":
							this._subscribe("block", ["newHeads"], e => {
								const t = W.a.from(e.number).toNumber();
								this._emitted.block = t, this.emit("block", t)
							});
							break;
						case "pending":
							this._subscribe("pending", ["newPendingTransactions"], e => {
								this.emit("pending", e)
							});
							break;
						case "filter":
							this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], t => {
								null == t.removed && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t))
							});
							break;
						case "tx": {
							const t = e => {
								const t = e.hash;
								this.getTransactionReceipt(t).then(e => {
									e && this.emit(t, e)
								})
							};
							t(e), this._subscribe("tx", ["newHeads"], e => {
								this._events.filter(e => "tx" === e.type).forEach(t)
							});
							break
						}
						case "debug":
						case "poll":
						case "willPoll":
						case "didPoll":
						case "error":
							break;
						default:
							console.log("unhandled:", e)
					}
				}
				_stopEvent(e) {
					let t = e.tag;
					if ("tx" === e.type) {
						if (this._events.filter(e => "tx" === e.type).length) return;
						t = "tx"
					} else if (this.listenerCount(e.event)) return;
					const r = this._subIds[t];
					r && (delete this._subIds[t], r.then(e => {
						this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
					}))
				}
				destroy() {
					return Xn(this, void 0, void 0, (function*() {
						this._websocket.readyState === Gn.CONNECTING && (yield new Promise(e => {
							this._websocket.onopen = function() {
								e(!0)
							}, this._websocket.onerror = function() {
								e(!1)
							}
						})), this._websocket.close(1e3)
					}))
				}
			}
			var Zn = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const Kn = new $.a("providers/5.4.5");
			class Qn extends Un {
				detectNetwork() {
					const e = Object.create(null, {
						detectNetwork: {
							get: () => super.detectNetwork
						}
					});
					return Zn(this, void 0, void 0, (function*() {
						let t = this.network;
						return null == t && ((t = yield e.detectNetwork.call(this)) || Kn.throwError("no network detected", $.a.errors.UNKNOWN_ERROR, {}), null == this._network && (Object(Y.d)(this, "_network", t), this.emit("network", t, null))), t
					}))
				}
			}
			class qn extends Qn {
				constructor(e, t) {
					Kn.checkAbstract(new.target, qn), e = Object(Y.e)(new.target, "getNetwork")(e), t = Object(Y.e)(new.target, "getApiKey")(t), super(Object(Y.e)(new.target, "getUrl")(e, t), e), "string" == typeof t ? Object(Y.d)(this, "apiKey", t) : null != t && Object.keys(t).forEach(e => {
						Object(Y.d)(this, e, t[e])
					})
				}
				_startPending() {
					Kn.warn("WARNING: API provider does not support pending filters")
				}
				isCommunityResource() {
					return !1
				}
				getSigner(e) {
					return Kn.throwError("API provider does not support signing", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "getSigner"
					})
				}
				listAccounts() {
					return Promise.resolve([])
				}
				static getApiKey(e) {
					return e
				}
				static getUrl(e, t) {
					return Kn.throwError("not implemented; sub-classes must override getUrl", $.a.errors.NOT_IMPLEMENTED, {
						operation: "getUrl"
					})
				}
			}
			const Wn = new $.a("providers/5.4.5"),
				Yn = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
			class $n extends zn {
				constructor(e, t) {
					const r = new eo(e, t);
					super(r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), r.network), Object(Y.d)(this, "apiKey", r.apiKey)
				}
				isCommunityResource() {
					return this.apiKey === Yn
				}
			}
			class eo extends qn {
				static getWebSocketProvider(e, t) {
					return new $n(e, t)
				}
				static getApiKey(e) {
					return null == e ? Yn : (e && "string" != typeof e && Wn.throwArgumentError("invalid apiKey", "apiKey", e), e)
				}
				static getUrl(e, t) {
					let r = null;
					switch (e.name) {
						case "homestead":
							r = "eth-mainnet.alchemyapi.io/v2/";
							break;
						case "ropsten":
							r = "eth-ropsten.alchemyapi.io/v2/";
							break;
						case "rinkeby":
							r = "eth-rinkeby.alchemyapi.io/v2/";
							break;
						case "goerli":
							r = "eth-goerli.alchemyapi.io/v2/";
							break;
						case "kovan":
							r = "eth-kovan.alchemyapi.io/v2/";
							break;
						case "matic":
							r = "polygon-mainnet.g.alchemy.com/v2/";
							break;
						case "maticmum":
							r = "polygon-mumbai.g.alchemy.com/v2/";
							break;
						default:
							Wn.throwArgumentError("unsupported network", "network", arguments[0])
					}
					return {
						allowGzip: !0,
						url: "https://" + r + t,
						throttleCallback: (e, r) => (t === Yn && fn(), Promise.resolve(!0))
					}
				}
				isCommunityResource() {
					return this.apiKey === Yn
				}
			}
			var to = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const ro = new $.a("providers/5.4.5");
			class no extends qn {
				static getApiKey(e) {
					return null != e && ro.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null
				}
				static getUrl(e, t) {
					let r = null;
					switch (e.name) {
						case "homestead":
							r = "https://cloudflare-eth.com/";
							break;
						default:
							ro.throwArgumentError("unsupported network", "network", arguments[0])
					}
					return r
				}
				perform(e, t) {
					const r = Object.create(null, {
						perform: {
							get: () => super.perform
						}
					});
					return to(this, void 0, void 0, (function*() {
						if ("getBlockNumber" === e) {
							return (yield r.perform.call(this, "getBlock", {
								blockTag: "latest"
							})).number
						}
						return r.perform.call(this, e, t)
					}))
				}
			}
			var oo = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const io = new $.a("providers/5.4.5");

			function ao(e) {
				const t = {};
				for (let r in e) {
					if (null == e[r]) continue;
					let n = e[r];
					"type" === r && 0 === n || (n = {
						type: !0,
						gasLimit: !0,
						gasPrice: !0,
						maxFeePerGs: !0,
						maxPriorityFeePerGas: !0,
						nonce: !0,
						value: !0
					} [r] ? Object(c.g)(Object(c.i)(n)) : "accessList" === r ? "[" + Object(Ne.b)(n).map(e => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`).join(",") + "]" : Object(c.i)(n), t[r] = n)
				}
				return t
			}

			function so(e) {
				if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
				if (1 != e.status || "OK" != e.message) {
					const t = new Error("invalid response");
					throw t.result = JSON.stringify(e), (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0), t
				}
				return e.result
			}

			function lo(e) {
				if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
					const t = new Error("throttled response");
					throw t.result = JSON.stringify(e), t.throttleRetry = !0, t
				}
				if ("2.0" != e.jsonrpc) {
					const t = new Error("invalid response");
					throw t.result = JSON.stringify(e), t
				}
				if (e.error) {
					const t = new Error(e.error.message || "unknown error");
					throw e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t
				}
				return e.result
			}

			function co(e) {
				if ("pending" === e) throw new Error("pending not supported");
				return "latest" === e ? e : parseInt(e.substring(2), 16)
			}
			const uo = "9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";

			function ho(e, t, r) {
				if ("call" === e && t.code === $.a.errors.SERVER_ERROR) {
					const e = t.error;
					if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
						let r = e.data;
						if (r && (r = "0x" + r.replace(/^.*0x/i, "")), Object(c.l)(r)) return r;
						io.throwError("missing revert data in call exception", $.a.errors.CALL_EXCEPTION, {
							error: t,
							data: "0x"
						})
					}
				}
				let n = t.message;
				throw t.code === $.a.errors.SERVER_ERROR && (t.error && "string" == typeof t.error.message ? n = t.error.message : "string" == typeof t.body ? n = t.body : "string" == typeof t.responseText && (n = t.responseText)), (n = (n || "").toLowerCase()).match(/insufficient funds/) && io.throwError("insufficient funds for intrinsic transaction cost", $.a.errors.INSUFFICIENT_FUNDS, {
					error: t,
					method: e,
					transaction: r
				}), n.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && io.throwError("nonce has already been used", $.a.errors.NONCE_EXPIRED, {
					error: t,
					method: e,
					transaction: r
				}), n.match(/another transaction with same nonce/) && io.throwError("replacement fee too low", $.a.errors.REPLACEMENT_UNDERPRICED, {
					error: t,
					method: e,
					transaction: r
				}), n.match(/execution failed due to an exception|execution reverted/) && io.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", $.a.errors.UNPREDICTABLE_GAS_LIMIT, {
					error: t,
					method: e,
					transaction: r
				}), t
			}
			class fo extends Nn {
				constructor(e, t) {
					io.checkNew(new.target, fo), super(e), Object(Y.d)(this, "baseUrl", this.getBaseUrl()), Object(Y.d)(this, "apiKey", t || uo)
				}
				getBaseUrl() {
					switch (this.network ? this.network.name : "invalid") {
						case "homestead":
							return "https://api.etherscan.io";
						case "ropsten":
							return "https://api-ropsten.etherscan.io";
						case "rinkeby":
							return "https://api-rinkeby.etherscan.io";
						case "kovan":
							return "https://api-kovan.etherscan.io";
						case "goerli":
							return "https://api-goerli.etherscan.io"
					}
					return io.throwArgumentError("unsupported network", "network", name)
				}
				getUrl(e, t) {
					const r = Object.keys(t).reduce((e, r) => {
							const n = t[r];
							return null != n && (e += `&${r}=${n}`), e
						}, ""),
						n = this.apiKey ? `&apikey=${this.apiKey}` : "";
					return `${this.baseUrl}/api?module=${e}${r}${n}`
				}
				getPostUrl() {
					return `${this.baseUrl}/api`
				}
				getPostData(e, t) {
					return t.module = e, t.apikey = this.apiKey, t
				}
				fetch(e, t, r) {
					return oo(this, void 0, void 0, (function*() {
						const n = r ? this.getPostUrl() : this.getUrl(e, t),
							o = r ? this.getPostData(e, t) : null,
							i = "proxy" === e ? lo : so;
						this.emit("debug", {
							action: "request",
							request: n,
							provider: this
						});
						const a = {
							url: n,
							throttleSlotInterval: 1e3,
							throttleCallback: (e, t) => (this.isCommunityResource() && fn(), Promise.resolve(!0))
						};
						let s = null;
						o && (a.headers = {
							"content-type": "application/x-www-form-urlencoded; charset=UTF-8"
						}, s = Object.keys(o).map(e => `${e}=${o[e]}`).join("&"));
						const l = yield rn(a, s, i || lo);
						return this.emit("debug", {
							action: "response",
							request: n,
							response: Object(Y.c)(l),
							provider: this
						}), l
					}))
				}
				detectNetwork() {
					return oo(this, void 0, void 0, (function*() {
						return this.network
					}))
				}
				perform(e, t) {
					const r = Object.create(null, {
						perform: {
							get: () => super.perform
						}
					});
					return oo(this, void 0, void 0, (function*() {
						switch (e) {
							case "getBlockNumber":
								return this.fetch("proxy", {
									action: "eth_blockNumber"
								});
							case "getGasPrice":
								return this.fetch("proxy", {
									action: "eth_gasPrice"
								});
							case "getBalance":
								return this.fetch("account", {
									action: "balance",
									address: t.address,
									tag: t.blockTag
								});
							case "getTransactionCount":
								return this.fetch("proxy", {
									action: "eth_getTransactionCount",
									address: t.address,
									tag: t.blockTag
								});
							case "getCode":
								return this.fetch("proxy", {
									action: "eth_getCode",
									address: t.address,
									tag: t.blockTag
								});
							case "getStorageAt":
								return this.fetch("proxy", {
									action: "eth_getStorageAt",
									address: t.address,
									position: t.position,
									tag: t.blockTag
								});
							case "sendTransaction":
								return this.fetch("proxy", {
									action: "eth_sendRawTransaction",
									hex: t.signedTransaction
								}, !0).catch(e => ho("sendTransaction", e, t.signedTransaction));
							case "getBlock":
								if (t.blockTag) return this.fetch("proxy", {
									action: "eth_getBlockByNumber",
									tag: t.blockTag,
									boolean: t.includeTransactions ? "true" : "false"
								});
								throw new Error("getBlock by blockHash not implemented");
							case "getTransaction":
								return this.fetch("proxy", {
									action: "eth_getTransactionByHash",
									txhash: t.transactionHash
								});
							case "getTransactionReceipt":
								return this.fetch("proxy", {
									action: "eth_getTransactionReceipt",
									txhash: t.transactionHash
								});
							case "call": {
								if ("latest" !== t.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
								const e = ao(t.transaction);
								e.module = "proxy", e.action = "eth_call";
								try {
									return yield this.fetch("proxy", e, !0)
								} catch (as) {
									return ho("call", as, t.transaction)
								}
							}
							case "estimateGas": {
								const e = ao(t.transaction);
								e.module = "proxy", e.action = "eth_estimateGas";
								try {
									return yield this.fetch("proxy", e, !0)
								} catch (as) {
									return ho("estimateGas", as, t.transaction)
								}
							}
							case "getLogs": {
								const e = {
									action: "getLogs"
								};
								if (t.filter.fromBlock && (e.fromBlock = co(t.filter.fromBlock)), t.filter.toBlock && (e.toBlock = co(t.filter.toBlock)), t.filter.address && (e.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && io.throwError("unsupported topic count", $.a.errors.UNSUPPORTED_OPERATION, {
										topics: t.filter.topics
									}), 1 === t.filter.topics.length)) {
									const r = t.filter.topics[0];
									"string" == typeof r && 66 === r.length || io.throwError("unsupported topic format", $.a.errors.UNSUPPORTED_OPERATION, {
										topic0: r
									}), e.topic0 = r
								}
								const r = yield this.fetch("logs", e);
								let n = {};
								for (let t = 0; t < r.length; t++) {
									const e = r[t];
									if (null == e.blockHash) {
										if (null == n[e.blockNumber]) {
											const t = yield this.getBlock(e.blockNumber);
											t && (n[e.blockNumber] = t.hash)
										}
										e.blockHash = n[e.blockNumber]
									}
								}
								return r
							}
							case "getEtherPrice":
								return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
									action: "ethprice"
								})).ethusd)
						}
						return r.perform.call(this, e, t)
					}))
				}
				getHistory(e, t, r) {
					return oo(this, void 0, void 0, (function*() {
						const n = {
							action: "txlist",
							address: yield this.resolveName(e),
							startblock: null == t ? 0 : t,
							endblock: null == r ? 99999999 : r,
							sort: "asc"
						};
						return (yield this.fetch("account", n)).map(e => {
							["contractAddress", "to"].forEach((function(t) {
								"" == e[t] && delete e[t]
							})), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
							const t = this.formatter.transactionResponse(e);
							return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t
						})
					}))
				}
				isCommunityResource() {
					return this.apiKey === uo
				}
			}

			function mo(e) {
				for (let t = (e = e.slice()).length - 1; t > 0; t--) {
					const r = Math.floor(Math.random() * (t + 1)),
						n = e[t];
					e[t] = e[r], e[r] = n
				}
				return e
			}
			var po = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const go = new $.a("providers/5.4.5");

			function bo() {
				return (new Date).getTime()
			}

			function vo(e) {
				let t = null;
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					if (null == n) return null;
					t ? t.name === n.name && t.chainId === n.chainId && (t.ensAddress === n.ensAddress || null == t.ensAddress && null == n.ensAddress) || go.throwArgumentError("provider mismatch", "networks", e) : t = n
				}
				return t
			}

			function yo(e, t) {
				e = e.slice().sort();
				const r = Math.floor(e.length / 2);
				if (e.length % 2) return e[r];
				const n = e[r - 1],
					o = e[r];
				return null != t && Math.abs(n - o) > t ? null : (n + o) / 2
			}

			function Eo(e) {
				if (null === e) return "null";
				if ("number" == typeof e || "boolean" == typeof e) return JSON.stringify(e);
				if ("string" == typeof e) return e;
				if (W.a.isBigNumber(e)) return e.toString();
				if (Array.isArray(e)) return JSON.stringify(e.map(e => Eo(e)));
				if ("object" == typeof e) {
					const t = Object.keys(e);
					return t.sort(), "{" + t.map(t => {
						let r = e[t];
						return r = "function" == typeof r ? "[function]" : Eo(r), JSON.stringify(t) + ":" + r
					}).join(",") + "}"
				}
				throw new Error("unknown value type: " + typeof e)
			}
			let Ao = 1;

			function To(e) {
				let t = null,
					r = null,
					n = new Promise(n => {
						t = function() {
							r && (clearTimeout(r), r = null), n()
						}, r = setTimeout(t, e)
					});
				return {
					cancel: t,
					getPromise: function() {
						return n
					},
					wait: e => n = n.then(e)
				}
			}
			const So = [$.a.errors.CALL_EXCEPTION, $.a.errors.INSUFFICIENT_FUNDS, $.a.errors.NONCE_EXPIRED, $.a.errors.REPLACEMENT_UNDERPRICED, $.a.errors.UNPREDICTABLE_GAS_LIMIT],
				Oo = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

			function wo(e, t) {
				const r = {
					weight: e.weight
				};
				return Object.defineProperty(r, "provider", {
					get: () => e.provider
				}), e.start && (r.start = e.start), t && (r.duration = t - e.start), e.done && (e.error ? r.error = e.error : r.result = e.result || null), r
			}

			function Po(e, t, r) {
				let n = Eo;
				switch (t) {
					case "getBlockNumber":
						return function(t) {
							const r = t.map(e => e.result);
							let n = yo(t.map(e => e.result), 2);
							if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= e._highestBlockNumber && (e._highestBlockNumber = n), e._highestBlockNumber
						};
					case "getGasPrice":
						return function(e) {
							const t = e.map(e => e.result);
							return t.sort(), t[Math.floor(t.length / 2)]
						};
					case "getEtherPrice":
						return function(e) {
							return yo(e.map(e => e.result))
						};
					case "getBalance":
					case "getTransactionCount":
					case "getCode":
					case "getStorageAt":
					case "call":
					case "estimateGas":
					case "getLogs":
						break;
					case "getTransaction":
					case "getTransactionReceipt":
						n = function(e) {
							return null == e ? null : ((e = Object(Y.g)(e)).confirmations = -1, Eo(e))
						};
						break;
					case "getBlock":
						n = r.includeTransactions ? function(e) {
							return null == e ? null : ((e = Object(Y.g)(e)).transactions = e.transactions.map(e => ((e = Object(Y.g)(e)).confirmations = -1, e)), Eo(e))
						} : function(e) {
							return null == e ? null : Eo(e)
						};
						break;
					default:
						throw new Error("unknown method: " + t)
				}
				return function(e, t) {
					return function(r) {
						const n = {};
						r.forEach(t => {
							const r = e(t.result);
							n[r] || (n[r] = {
								count: 0,
								result: t.result
							}), n[r].count++
						});
						const o = Object.keys(n);
						for (let e = 0; e < o.length; e++) {
							const r = n[o[e]];
							if (r.count >= t) return r.result
						}
					}
				}(n, e.quorum)
			}

			function Fo(e, t) {
				return po(this, void 0, void 0, (function*() {
					const r = e.provider;
					return null != r.blockNumber && r.blockNumber >= t || -1 === t ? r : nn(() => new Promise((n, o) => {
						setTimeout((function() {
							return r.blockNumber >= t ? n(r) : e.cancelled ? n(null) : n(void 0)
						}), 0)
					}), {
						oncePoll: r
					})
				}))
			}

			function Co(e, t, r, n) {
				return po(this, void 0, void 0, (function*() {
					let o = e.provider;
					switch (r) {
						case "getBlockNumber":
						case "getGasPrice":
							return o[r]();
						case "getEtherPrice":
							if (o.getEtherPrice) return o.getEtherPrice();
							break;
						case "getBalance":
						case "getTransactionCount":
						case "getCode":
							return n.blockTag && Object(c.l)(n.blockTag) && (o = yield Fo(e, t)), o[r](n.address, n.blockTag || "latest");
						case "getStorageAt":
							return n.blockTag && Object(c.l)(n.blockTag) && (o = yield Fo(e, t)), o.getStorageAt(n.address, n.position, n.blockTag || "latest");
						case "getBlock":
							return n.blockTag && Object(c.l)(n.blockTag) && (o = yield Fo(e, t)), o[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
						case "call":
						case "estimateGas":
							return n.blockTag && Object(c.l)(n.blockTag) && (o = yield Fo(e, t)), o[r](n.transaction);
						case "getTransaction":
						case "getTransactionReceipt":
							return o[r](n.transactionHash);
						case "getLogs": {
							let r = n.filter;
							return (r.fromBlock && Object(c.l)(r.fromBlock) || r.toBlock && Object(c.l)(r.toBlock)) && (o = yield Fo(e, t)), o.getLogs(r)
						}
					}
					return go.throwError("unknown method error", $.a.errors.UNKNOWN_ERROR, {
						method: r,
						params: n
					})
				}))
			}
			class No extends Nn {
				constructor(e, t) {
					go.checkNew(new.target, No), 0 === e.length && go.throwArgumentError("missing providers", "providers", e);
					const r = e.map((e, t) => {
							if (V.b.isProvider(e)) {
								const t = dn(e) ? 2e3 : 750,
									r = 1;
								return Object.freeze({
									provider: e,
									weight: 1,
									stallTimeout: t,
									priority: r
								})
							}
							const r = Object(Y.g)(e);
							null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = dn(e) ? 2e3 : 750), null == r.weight && (r.weight = 1);
							const n = r.weight;
							return (n % 1 || n > 512 || n < 1) && go.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${t}].weight`, n), Object.freeze(r)
						}),
						n = r.reduce((e, t) => e + t.weight, 0);
					null == t ? t = n / 2 : t > n && go.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
					let o = vo(r.map(e => e.provider.network));
					null == o && (o = new Promise((e, t) => {
						setTimeout(() => {
							this.detectNetwork().then(e, t)
						}, 0)
					})), super(o), Object(Y.d)(this, "providerConfigs", Object.freeze(r)), Object(Y.d)(this, "quorum", t), this._highestBlockNumber = -1
				}
				detectNetwork() {
					return po(this, void 0, void 0, (function*() {
						return vo(yield Promise.all(this.providerConfigs.map(e => e.provider.getNetwork())))
					}))
				}
				perform(e, t) {
					return po(this, void 0, void 0, (function*() {
						if ("sendTransaction" === e) {
							const e = yield Promise.all(this.providerConfigs.map(e => e.provider.sendTransaction(t.signedTransaction).then(e => e.hash, e => e)));
							for (let t = 0; t < e.length; t++) {
								const r = e[t];
								if ("string" == typeof r) return r
							}
							throw e[0]
						} - 1 === this._highestBlockNumber && "getBlockNumber" !== e && (yield this.getBlockNumber());
						const r = Po(this, e, t),
							n = mo(this.providerConfigs.map(Y.g));
						n.sort((e, t) => e.priority - t.priority);
						const o = this._highestBlockNumber;
						let i = 0,
							a = !0;
						for (;;) {
							const s = bo();
							let l = n.filter(e => e.runner && s - e.start < e.stallTimeout).reduce((e, t) => e + t.weight, 0);
							for (; l < this.quorum && i < n.length;) {
								const r = n[i++],
									a = Ao++;
								r.start = bo(), r.staller = To(r.stallTimeout), r.staller.wait(() => {
									r.staller = null
								}), r.runner = Co(r, o, e, t).then(n => {
									r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
										action: "request",
										rid: a,
										backend: wo(r, bo()),
										request: {
											method: e,
											params: Object(Y.c)(t)
										},
										provider: this
									})
								}, n => {
									r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
										action: "request",
										rid: a,
										backend: wo(r, bo()),
										request: {
											method: e,
											params: Object(Y.c)(t)
										},
										provider: this
									})
								}), this.listenerCount("debug") && this.emit("debug", {
									action: "request",
									rid: a,
									backend: wo(r, null),
									request: {
										method: e,
										params: Object(Y.c)(t)
									},
									provider: this
								}), l += r.weight
							}
							const c = [];
							n.forEach(e => {
								!e.done && e.runner && (c.push(e.runner), e.staller && c.push(e.staller.getPromise()))
							}), c.length && (yield Promise.race(c));
							const u = n.filter(e => e.done && null == e.error);
							if (u.length >= this.quorum) {
								const e = r(u);
								if (void 0 !== e) return n.forEach(e => {
									e.staller && e.staller.cancel(), e.cancelled = !0
								}), e;
								a || (yield To(100).getPromise()), a = !1
							}
							const d = n.reduce((e, t) => {
								if (!t.done || null == t.error) return e;
								const r = t.error.code;
								return So.indexOf(r) >= 0 && (e[r] || (e[r] = {
									error: t.error,
									weight: 0
								}), e[r].weight += t.weight), e
							}, {});
							if (Object.keys(d).forEach(e => {
									const t = d[e];
									if (t.weight < this.quorum) return;
									n.forEach(e => {
										e.staller && e.staller.cancel(), e.cancelled = !0
									});
									const r = t.error,
										o = {};
									Oo.forEach(e => {
										null != r[e] && (o[e] = r[e])
									}), go.throwError(r.reason || r.message, e, o)
								}), 0 === n.filter(e => !e.done).length) break
						}
						return n.forEach(e => {
							e.staller && e.staller.cancel(), e.cancelled = !0
						}), go.throwError("failed to meet quorum", $.a.errors.SERVER_ERROR, {
							method: e,
							params: t,
							results: n.map(e => wo(e)),
							provider: this
						})
					}))
				}
			}
			const ko = null,
				Ro = new $.a("providers/5.4.5"),
				Lo = "84842078b09946638c03157f83405213";
			class Mo extends zn {
				constructor(e, t) {
					const r = new Bo(e, t),
						n = r.connection;
					n.password && Ro.throwError("INFURA WebSocket project secrets unsupported", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "InfuraProvider.getWebSocketProvider()"
					}), super(n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e), Object(Y.d)(this, "apiKey", r.projectId), Object(Y.d)(this, "projectId", r.projectId), Object(Y.d)(this, "projectSecret", r.projectSecret)
				}
				isCommunityResource() {
					return this.projectId === Lo
				}
			}
			class Bo extends qn {
				static getWebSocketProvider(e, t) {
					return new Mo(e, t)
				}
				static getApiKey(e) {
					const t = {
						apiKey: Lo,
						projectId: Lo,
						projectSecret: null
					};
					return null == e ? t : ("string" == typeof e ? t.projectId = e : null != e.projectSecret ? (Ro.assertArgument("string" == typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), Ro.assertArgument("string" == typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId, t)
				}
				static getUrl(e, t) {
					let r = null;
					switch (e ? e.name : "unknown") {
						case "homestead":
							r = "mainnet.infura.io";
							break;
						case "ropsten":
							r = "ropsten.infura.io";
							break;
						case "rinkeby":
							r = "rinkeby.infura.io";
							break;
						case "kovan":
							r = "kovan.infura.io";
							break;
						case "goerli":
							r = "goerli.infura.io";
							break;
						case "matic":
							r = "polygon-mainnet.infura.io";
							break;
						case "maticmum":
							r = "polygon-mumbai.infura.io";
							break;
						default:
							Ro.throwError("unsupported network", $.a.errors.INVALID_ARGUMENT, {
								argument: "network",
								value: e
							})
					}
					const n = {
						allowGzip: !0,
						url: "https://" + r + "/v3/" + t.projectId,
						throttleCallback: (e, r) => (t.projectId === Lo && fn(), Promise.resolve(!0))
					};
					return null != t.projectSecret && (n.user = "", n.password = t.projectSecret), n
				}
				isCommunityResource() {
					return this.projectId === Lo
				}
			}
			class Jo extends Un {
				send(e, t) {
					const r = {
						method: e,
						params: t,
						id: this._nextId++,
						jsonrpc: "2.0"
					};
					null == this._pendingBatch && (this._pendingBatch = []);
					const n = {
							request: r,
							resolve: null,
							reject: null
						},
						o = new Promise((e, t) => {
							n.resolve = e, n.reject = t
						});
					return this._pendingBatch.push(n), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
						const e = this._pendingBatch;
						this._pendingBatch = null, this._pendingBatchAggregator = null;
						const t = e.map(e => e.request);
						return this.emit("debug", {
							action: "requestBatch",
							request: Object(Y.c)(t),
							provider: this
						}), rn(this.connection, JSON.stringify(t)).then(r => {
							this.emit("debug", {
								action: "response",
								request: t,
								response: r,
								provider: this
							}), e.forEach((e, t) => {
								const n = r[t];
								if (n.error) {
									const t = new Error(n.error.message);
									t.code = n.error.code, t.data = n.error.data, e.reject(t)
								} else e.resolve(n.result)
							})
						}, r => {
							this.emit("debug", {
								action: "response",
								error: r,
								request: t,
								provider: this
							}), e.forEach(e => {
								e.reject(r)
							})
						})
					}, 10)), o
				}
			}
			const jo = new $.a("providers/5.4.5"),
				_o = "ETHERS_JS_SHARED";
			class Do extends qn {
				static getApiKey(e) {
					return e && "string" != typeof e && jo.throwArgumentError("invalid apiKey", "apiKey", e), e || _o
				}
				static getUrl(e, t) {
					jo.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
					let r = null;
					switch (e.name) {
						case "homestead":
							r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
							break;
						case "ropsten":
							r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
							break;
						case "rinkeby":
							r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
							break;
						case "goerli":
							r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
							break;
						case "kovan":
							r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
							break;
						default:
							jo.throwArgumentError("unsupported network", "network", arguments[0])
					}
					return r + "?apiKey=" + t
				}
			}
			const Io = new $.a("providers/5.4.5"),
				xo = {
					homestead: "6004bcd10040261633ade990",
					ropsten: "6004bd4d0040261633ade991",
					rinkeby: "6004bda20040261633ade994",
					goerli: "6004bd860040261633ade992"
				};
			class Uo extends qn {
				constructor(e, t) {
					if (null == t) {
						const r = Object(Y.e)(new.target, "getNetwork")(e);
						if (r) {
							const e = xo[r.name];
							e && (t = {
								applicationId: e,
								loadBalancer: !0
							})
						}
						null == t && Io.throwError("unsupported network", $.a.errors.INVALID_ARGUMENT, {
							argument: "network",
							value: e
						})
					}
					super(e, t)
				}
				static getApiKey(e) {
					null == e && Io.throwArgumentError("PocketProvider.getApiKey does not support null apiKey", "apiKey", e);
					const t = {
						applicationId: null,
						loadBalancer: !1,
						applicationSecretKey: null
					};
					return "string" == typeof e ? t.applicationId = e : null != e.applicationSecretKey ? (Io.assertArgument("string" == typeof e.applicationId, "applicationSecretKey requires an applicationId", "applicationId", e.applicationId), Io.assertArgument("string" == typeof e.applicationSecretKey, "invalid applicationSecretKey", "applicationSecretKey", "[REDACTED]"), t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey, t.loadBalancer = !!e.loadBalancer) : e.applicationId ? (Io.assertArgument("string" == typeof e.applicationId, "apiKey.applicationId must be a string", "apiKey.applicationId", e.applicationId), t.applicationId = e.applicationId, t.loadBalancer = !!e.loadBalancer) : Io.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t
				}
				static getUrl(e, t) {
					let r = null;
					switch (e ? e.name : "unknown") {
						case "homestead":
							r = "eth-mainnet.gateway.pokt.network";
							break;
						case "ropsten":
							r = "eth-ropsten.gateway.pokt.network";
							break;
						case "rinkeby":
							r = "eth-rinkeby.gateway.pokt.network";
							break;
						case "goerli":
							r = "eth-goerli.gateway.pokt.network";
							break;
						default:
							Io.throwError("unsupported network", $.a.errors.INVALID_ARGUMENT, {
								argument: "network",
								value: e
							})
					}
					let n = null;
					const o = {
						url: n = t.loadBalancer ? `https://${r}/v1/lb/${t.applicationId}` : `https://${r}/v1/${t.applicationId}`,
						headers: {}
					};
					return null != t.applicationSecretKey && (o.user = "", o.password = t.applicationSecretKey), o
				}
				isCommunityResource() {
					return this.applicationId === xo[this.network.name]
				}
			}
			const Go = new $.a("providers/5.4.5");
			let Xo = 1;

			function Ho(e, t) {
				const r = "Web3LegacyFetcher";
				return function(n, o) {
					"eth_sign" == n && (e.isMetaMask || e.isStatus) && (n = "personal_sign", o = [o[1], o[0]]);
					const i = {
						method: n,
						params: o,
						id: Xo++,
						jsonrpc: "2.0"
					};
					return new Promise((e, n) => {
						this.emit("debug", {
							action: "request",
							fetcher: r,
							request: Object(Y.c)(i),
							provider: this
						}), t(i, (t, o) => {
							if (t) return this.emit("debug", {
								action: "response",
								fetcher: r,
								error: t,
								request: i,
								provider: this
							}), n(t);
							if (this.emit("debug", {
									action: "response",
									fetcher: r,
									request: i,
									response: o,
									provider: this
								}), o.error) {
								const e = new Error(o.error.message);
								return e.code = o.error.code, e.data = o.error.data, n(e)
							}
							e(o.result)
						})
					})
				}
			}
			class Vo extends Un {
				constructor(e, t) {
					Go.checkNew(new.target, Vo), null == e && Go.throwArgumentError("missing provider", "provider", e);
					let r = null,
						n = null,
						o = null;
					"function" == typeof e ? (r = "unknown:", n = e) : (!(r = e.host || e.path || "") && e.isMetaMask && (r = "metamask"), o = e, e.request ? ("" === r && (r = "eip-1193:"), n = function(e) {
						return function(t, r) {
							null == r && (r = []), "eth_sign" == t && (e.isMetaMask || e.isStatus) && (t = "personal_sign", r = [r[1], r[0]]);
							const n = {
								method: t,
								params: r
							};
							return this.emit("debug", {
								action: "request",
								fetcher: "Eip1193Fetcher",
								request: Object(Y.c)(n),
								provider: this
							}), e.request(n).then(e => (this.emit("debug", {
								action: "response",
								fetcher: "Eip1193Fetcher",
								request: n,
								response: e,
								provider: this
							}), e), e => {
								throw this.emit("debug", {
									action: "response",
									fetcher: "Eip1193Fetcher",
									request: n,
									error: e,
									provider: this
								}), e
							})
						}
					}(e)) : e.sendAsync ? n = Ho(e, e.sendAsync.bind(e)) : e.send ? n = Ho(e, e.send.bind(e)) : Go.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), super(r, t), Object(Y.d)(this, "jsonRpcFetchFunc", n), Object(Y.d)(this, "provider", o)
				}
				send(e, t) {
					return this.jsonRpcFetchFunc(e, t)
				}
			}
			const zo = new $.a("providers/5.4.5");

			function Zo(e, t) {
				if (null == e && (e = "homestead"), "string" == typeof e) {
					const t = e.match(/^(ws|http)s?:/i);
					if (t) switch (t[1]) {
						case "http":
							return new Un(e);
						case "ws":
							return new zn(e);
						default:
							zo.throwArgumentError("unsupported URL scheme", "network", e)
					}
				}
				const r = Nr(e);
				return r && r._defaultProvider || zo.throwError("unsupported getDefaultProvider network", $.a.errors.NETWORK_ERROR, {
					operation: "getDefaultProvider",
					network: e
				}), r._defaultProvider({
					FallbackProvider: No,
					AlchemyProvider: eo,
					CloudflareProvider: no,
					EtherscanProvider: fo,
					InfuraProvider: Bo,
					JsonRpcProvider: Un,
					NodesmithProvider: Do,
					PocketProvider: Uo,
					Web3Provider: Vo,
					IpcProvider: ko
				}, t)
			}
			const Ko = new $.a("abi/5.4.1");

			function Qo(e) {
				const t = [],
					r = function(e, n) {
						if (Array.isArray(n))
							for (let o in n) {
								const i = e.slice();
								i.push(o);
								try {
									r(i, n[o])
								} catch (as) {
									t.push({
										path: i,
										error: as
									})
								}
							}
					};
				return r([], e), t
			}
			class qo {
				constructor(e, t, r, n) {
					this.name = e, this.type = t, this.localName = r, this.dynamic = n
				}
				_throwError(e, t) {
					Ko.throwArgumentError(e, this.localName, t)
				}
			}
			class Wo {
				constructor(e) {
					Object(Y.d)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
				}
				get data() {
					return Object(c.c)(this._data)
				}
				get length() {
					return this._dataLength
				}
				_writeData(e) {
					return this._data.push(e), this._dataLength += e.length, e.length
				}
				appendWriter(e) {
					return this._writeData(Object(c.b)(e._data))
				}
				writeBytes(e) {
					let t = Object(c.a)(e);
					const r = t.length % this.wordSize;
					return r && (t = Object(c.b)([t, this._padding.slice(r)])), this._writeData(t)
				}
				_getValue(e) {
					let t = Object(c.a)(W.a.from(e));
					return t.length > this.wordSize && Ko.throwError("value out-of-bounds", $.a.errors.BUFFER_OVERRUN, {
						length: this.wordSize,
						offset: t.length
					}), t.length % this.wordSize && (t = Object(c.b)([this._padding.slice(t.length % this.wordSize), t])), t
				}
				writeValue(e) {
					return this._writeData(this._getValue(e))
				}
				writeUpdatableValue() {
					const e = this._data.length;
					return this._data.push(this._padding), this._dataLength += this.wordSize, t => {
						this._data[e] = this._getValue(t)
					}
				}
			}
			class Yo {
				constructor(e, t, r, n) {
					Object(Y.d)(this, "_data", Object(c.a)(e)), Object(Y.d)(this, "wordSize", t || 32), Object(Y.d)(this, "_coerceFunc", r), Object(Y.d)(this, "allowLoose", n), this._offset = 0
				}
				get data() {
					return Object(c.i)(this._data)
				}
				get consumed() {
					return this._offset
				}
				static coerce(e, t) {
					let r = e.match("^u?int([0-9]+)$");
					return r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t
				}
				coerce(e, t) {
					return this._coerceFunc ? this._coerceFunc(e, t) : Yo.coerce(e, t)
				}
				_peekBytes(e, t, r) {
					let n = Math.ceil(t / this.wordSize) * this.wordSize;
					return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? n = t : Ko.throwError("data out-of-bounds", $.a.errors.BUFFER_OVERRUN, {
						length: this._data.length,
						offset: this._offset + n
					})), this._data.slice(this._offset, this._offset + n)
				}
				subReader(e) {
					return new Yo(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
				}
				readBytes(e, t) {
					let r = this._peekBytes(0, e, !!t);
					return this._offset += r.length, r.slice(0, e)
				}
				readValue() {
					return W.a.from(this.readBytes(this.wordSize))
				}
			}
			class $o extends qo {
				constructor(e) {
					super("address", "address", e, !1)
				}
				defaultValue() {
					return "0x0000000000000000000000000000000000000000"
				}
				encode(e, t) {
					try {
						t = Object(H.a)(t)
					} catch (as) {
						this._throwError(as.message, t)
					}
					return e.writeValue(t)
				}
				decode(e) {
					return Object(H.a)(Object(c.h)(e.readValue().toHexString(), 20))
				}
			}
			class ei extends qo {
				constructor(e) {
					super(e.name, e.type, void 0, e.dynamic), this.coder = e
				}
				defaultValue() {
					return this.coder.defaultValue()
				}
				encode(e, t) {
					return this.coder.encode(e, t)
				}
				decode(e) {
					return this.coder.decode(e)
				}
			}
			const ti = new $.a("abi/5.4.1");

			function ri(e, t, r) {
				let n = null;
				if (Array.isArray(r)) n = r;
				else if (r && "object" == typeof r) {
					let e = {};
					n = t.map(t => {
						const n = t.localName;
						return n || ti.throwError("cannot encode object for signature with missing names", $.a.errors.INVALID_ARGUMENT, {
							argument: "values",
							coder: t,
							value: r
						}), e[n] && ti.throwError("cannot encode object for signature with duplicate names", $.a.errors.INVALID_ARGUMENT, {
							argument: "values",
							coder: t,
							value: r
						}), e[n] = !0, r[n]
					})
				} else ti.throwArgumentError("invalid tuple value", "tuple", r);
				t.length !== n.length && ti.throwArgumentError("types/value length mismatch", "tuple", r);
				let o = new Wo(e.wordSize),
					i = new Wo(e.wordSize),
					a = [];
				t.forEach((e, t) => {
					let r = n[t];
					if (e.dynamic) {
						let t = i.length;
						e.encode(i, r);
						let n = o.writeUpdatableValue();
						a.push(e => {
							n(e + t)
						})
					} else e.encode(o, r)
				}), a.forEach(e => {
					e(o.length)
				});
				let s = e.appendWriter(o);
				return s += e.appendWriter(i)
			}

			function ni(e, t) {
				let r = [],
					n = e.subReader(0);
				t.forEach(t => {
					let o = null;
					if (t.dynamic) {
						let r = e.readValue(),
							i = n.subReader(r.toNumber());
						try {
							o = t.decode(i)
						} catch (as) {
							if (as.code === $.a.errors.BUFFER_OVERRUN) throw as;
							(o = as).baseType = t.name, o.name = t.localName, o.type = t.type
						}
					} else try {
						o = t.decode(e)
					} catch (as) {
						if (as.code === $.a.errors.BUFFER_OVERRUN) throw as;
						(o = as).baseType = t.name, o.name = t.localName, o.type = t.type
					}
					null != o && r.push(o)
				});
				const o = t.reduce((e, t) => {
					const r = t.localName;
					return r && (e[r] || (e[r] = 0), e[r]++), e
				}, {});
				t.forEach((e, t) => {
					let n = e.localName;
					if (!n || 1 !== o[n]) return;
					if ("length" === n && (n = "_length"), null != r[n]) return;
					const i = r[t];
					i instanceof Error ? Object.defineProperty(r, n, {
						enumerable: !0,
						get: () => {
							throw i
						}
					}) : r[n] = i
				});
				for (let i = 0; i < r.length; i++) {
					const e = r[i];
					e instanceof Error && Object.defineProperty(r, i, {
						enumerable: !0,
						get: () => {
							throw e
						}
					})
				}
				return Object.freeze(r)
			}
			class oi extends qo {
				constructor(e, t, r) {
					super("array", e.type + "[" + (t >= 0 ? t : "") + "]", r, -1 === t || e.dynamic), this.coder = e, this.length = t
				}
				defaultValue() {
					const e = this.coder.defaultValue(),
						t = [];
					for (let r = 0; r < this.length; r++) t.push(e);
					return t
				}
				encode(e, t) {
					Array.isArray(t) || this._throwError("expected array value", t);
					let r = this.length; - 1 === r && (r = t.length, e.writeValue(t.length)), ti.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
					let n = [];
					for (let o = 0; o < t.length; o++) n.push(this.coder);
					return ri(e, n, t)
				}
				decode(e) {
					let t = this.length; - 1 === t && 32 * (t = e.readValue().toNumber()) > e._data.length && ti.throwError("insufficient data length", $.a.errors.BUFFER_OVERRUN, {
						length: e._data.length,
						count: t
					});
					let r = [];
					for (let n = 0; n < t; n++) r.push(new ei(this.coder));
					return e.coerce(this.name, ni(e, r))
				}
			}
			class ii extends qo {
				constructor(e) {
					super("bool", "bool", e, !1)
				}
				defaultValue() {
					return !1
				}
				encode(e, t) {
					return e.writeValue(t ? 1 : 0)
				}
				decode(e) {
					return e.coerce(this.type, !e.readValue().isZero())
				}
			}
			class ai extends qo {
				constructor(e, t) {
					super(e, e, t, !0)
				}
				defaultValue() {
					return "0x"
				}
				encode(e, t) {
					t = Object(c.a)(t);
					let r = e.writeValue(t.length);
					return r += e.writeBytes(t)
				}
				decode(e) {
					return e.readBytes(e.readValue().toNumber(), !0)
				}
			}
			class si extends ai {
				constructor(e) {
					super("bytes", e)
				}
				decode(e) {
					return e.coerce(this.name, Object(c.i)(super.decode(e)))
				}
			}
			class li extends qo {
				constructor(e, t) {
					let r = "bytes" + String(e);
					super(r, r, t, !1), this.size = e
				}
				defaultValue() {
					return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
				}
				encode(e, t) {
					let r = Object(c.a)(t);
					return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r)
				}
				decode(e) {
					return e.coerce(this.name, Object(c.i)(e.readBytes(this.size)))
				}
			}
			class ci extends qo {
				constructor(e) {
					super("null", "", e, !1)
				}
				defaultValue() {
					return null
				}
				encode(e, t) {
					return null != t && this._throwError("not null", t), e.writeBytes([])
				}
				decode(e) {
					return e.readBytes(0), e.coerce(this.name, null)
				}
			}
			var ui = r("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js");
			class di extends qo {
				constructor(e, t, r) {
					const n = (t ? "int" : "uint") + 8 * e;
					super(n, n, r, !1), this.size = e, this.signed = t
				}
				defaultValue() {
					return 0
				}
				encode(e, t) {
					let r = W.a.from(t),
						n = ui.b.mask(8 * e.wordSize);
					if (this.signed) {
						let e = n.mask(8 * this.size - 1);
						(r.gt(e) || r.lt(e.add(ui.e).mul(ui.d))) && this._throwError("value out-of-bounds", t)
					} else(r.lt(ui.h) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", t);
					return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(r)
				}
				decode(e) {
					let t = e.readValue().mask(8 * this.size);
					return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t)
				}
			}
			class hi extends ai {
				constructor(e) {
					super("string", e)
				}
				defaultValue() {
					return ""
				}
				encode(e, t) {
					return super.encode(e, Object(K.f)(t))
				}
				decode(e) {
					return Object(K.h)(super.decode(e))
				}
			}
			class fi extends qo {
				constructor(e, t) {
					let r = !1;
					const n = [];
					e.forEach(e => {
						e.dynamic && (r = !0), n.push(e.type)
					}), super("tuple", "tuple(" + n.join(",") + ")", t, r), this.coders = e
				}
				defaultValue() {
					const e = [];
					this.coders.forEach(t => {
						e.push(t.defaultValue())
					});
					const t = this.coders.reduce((e, t) => {
						const r = t.localName;
						return r && (e[r] || (e[r] = 0), e[r]++), e
					}, {});
					return this.coders.forEach((r, n) => {
						let o = r.localName;
						o && 1 === t[o] && ("length" === o && (o = "_length"), null == e[o] && (e[o] = e[n]))
					}), Object.freeze(e)
				}
				encode(e, t) {
					return ri(e, this.coders, t)
				}
				decode(e) {
					return e.coerce(this.name, ni(e, this.coders))
				}
			}
			const mi = new $.a("abi/5.4.1"),
				pi = {};
			let gi = {
					calldata: !0,
					memory: !0,
					storage: !0
				},
				bi = {
					calldata: !0,
					memory: !0
				};

			function vi(e, t) {
				if ("bytes" === e || "string" === e) {
					if (gi[t]) return !0
				} else if ("address" === e) {
					if ("payable" === t) return !0
				} else if ((e.indexOf("[") >= 0 || "tuple" === e) && bi[t]) return !0;
				return (gi[t] || "payable" === t) && mi.throwArgumentError("invalid modifier", "name", t), !1
			}

			function yi(e, t) {
				for (let r in t) Object(Y.d)(e, r, t[r])
			}
			const Ei = Object.freeze({
					sighash: "sighash",
					minimal: "minimal",
					full: "full",
					json: "json"
				}),
				Ai = new RegExp(/^(.*)\[([0-9]*)\]$/);
			class Ti {
				constructor(e, t) {
					e !== pi && mi.throwError("use fromString", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new ParamType()"
					}), yi(this, t);
					let r = this.type.match(Ai);
					yi(this, r ? {
						arrayLength: parseInt(r[2] || "-1"),
						arrayChildren: Ti.fromObject({
							type: r[1],
							components: this.components
						}),
						baseType: "array"
					} : {
						arrayLength: null,
						arrayChildren: null,
						baseType: null != this.components ? "tuple" : this.type
					}), this._isParamType = !0, Object.freeze(this)
				}
				format(e) {
					if (e || (e = Ei.sighash), Ei[e] || mi.throwArgumentError("invalid format type", "format", e), e === Ei.json) {
						let t = {
							type: "tuple" === this.baseType ? "tuple" : this.type,
							name: this.name || void 0
						};
						return "boolean" == typeof this.indexed && (t.indexed = this.indexed), this.components && (t.components = this.components.map(t => JSON.parse(t.format(e)))), JSON.stringify(t)
					}
					let t = "";
					return "array" === this.baseType ? (t += this.arrayChildren.format(e), t += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== Ei.sighash && (t += this.type), t += "(" + this.components.map(t => t.format(e)).join(e === Ei.full ? ", " : ",") + ")") : t += this.type, e !== Ei.sighash && (!0 === this.indexed && (t += " indexed"), e === Ei.full && this.name && (t += " " + this.name)), t
				}
				static from(e, t) {
					return "string" == typeof e ? Ti.fromString(e, t) : Ti.fromObject(e)
				}
				static fromObject(e) {
					return Ti.isParamType(e) ? e : new Ti(pi, {
						name: e.name || null,
						type: Mi(e.type),
						indexed: null == e.indexed ? null : !!e.indexed,
						components: e.components ? e.components.map(Ti.fromObject) : null
					})
				}
				static fromString(e, t) {
					return function(e) {
						return Ti.fromObject({
							name: e.name,
							type: e.type,
							indexed: e.indexed,
							components: e.components
						})
					}(function(e, t) {
						let r = e;

						function n(t) {
							mi.throwArgumentError(`unexpected character at position ${t}`, "param", e)
						}

						function o(e) {
							let r = {
								type: "",
								name: "",
								parent: e,
								state: {
									allowType: !0
								}
							};
							return t && (r.indexed = !1), r
						}
						e = e.replace(/\s/g, " ");
						let i = {
								type: "",
								name: "",
								state: {
									allowType: !0
								}
							},
							a = i;
						for (let s = 0; s < e.length; s++) {
							let r = e[s];
							switch (r) {
								case "(":
									a.state.allowType && "" === a.type ? a.type = "tuple" : a.state.allowParams || n(s), a.state.allowType = !1, a.type = Mi(a.type), a.components = [o(a)], a = a.components[0];
									break;
								case ")":
									delete a.state, "indexed" === a.name && (t || n(s), a.indexed = !0, a.name = ""), vi(a.type, a.name) && (a.name = ""), a.type = Mi(a.type);
									let e = a;
									(a = a.parent) || n(s), delete e.parent, a.state.allowParams = !1, a.state.allowName = !0, a.state.allowArray = !0;
									break;
								case ",":
									delete a.state, "indexed" === a.name && (t || n(s), a.indexed = !0, a.name = ""), vi(a.type, a.name) && (a.name = ""), a.type = Mi(a.type);
									let i = o(a.parent);
									a.parent.components.push(i), delete a.parent, a = i;
									break;
								case " ":
									a.state.allowType && "" !== a.type && (a.type = Mi(a.type), delete a.state.allowType, a.state.allowName = !0, a.state.allowParams = !0), a.state.allowName && "" !== a.name && ("indexed" === a.name ? (t || n(s), a.indexed && n(s), a.indexed = !0, a.name = "") : vi(a.type, a.name) ? a.name = "" : a.state.allowName = !1);
									break;
								case "[":
									a.state.allowArray || n(s), a.type += r, a.state.allowArray = !1, a.state.allowName = !1, a.state.readArray = !0;
									break;
								case "]":
									a.state.readArray || n(s), a.type += r, a.state.readArray = !1, a.state.allowArray = !0, a.state.allowName = !0;
									break;
								default:
									a.state.allowType ? (a.type += r, a.state.allowParams = !0, a.state.allowArray = !0) : a.state.allowName ? (a.name += r, delete a.state.allowArray) : a.state.readArray ? a.type += r : n(s)
							}
						}
						return a.parent && mi.throwArgumentError("unexpected eof", "param", e), delete i.state, "indexed" === a.name ? (t || n(r.length - 7), a.indexed && n(r.length - 7), a.indexed = !0, a.name = "") : vi(a.type, a.name) && (a.name = ""), i.type = Mi(i.type), i
					}(e, !!t))
				}
				static isParamType(e) {
					return !(null == e || !e._isParamType)
				}
			}

			function Si(e, t) {
				return function(e) {
					e = e.trim();
					let t = [],
						r = "",
						n = 0;
					for (let o = 0; o < e.length; o++) {
						let i = e[o];
						"," === i && 0 === n ? (t.push(r), r = "") : (r += i, "(" === i ? n++ : ")" === i && -1 === --n && mi.throwArgumentError("unbalanced parenthesis", "value", e))
					}
					r && t.push(r);
					return t
				}(e).map(e => Ti.fromString(e, t))
			}
			class Oi {
				constructor(e, t) {
					e !== pi && mi.throwError("use a static from method", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new Fragment()"
					}), yi(this, t), this._isFragment = !0, Object.freeze(this)
				}
				static from(e) {
					return Oi.isFragment(e) ? e : "string" == typeof e ? Oi.fromString(e) : Oi.fromObject(e)
				}
				static fromObject(e) {
					if (Oi.isFragment(e)) return e;
					switch (e.type) {
						case "function":
							return ki.fromObject(e);
						case "event":
							return wi.fromObject(e);
						case "constructor":
							return Ni.fromObject(e);
						case "error":
							return Li.fromObject(e);
						case "fallback":
						case "receive":
							return null
					}
					return mi.throwArgumentError("invalid fragment object", "value", e)
				}
				static fromString(e) {
					return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? wi.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? ki.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? Ni.fromString(e.trim()) : "error" === e.split(" ")[0] ? Li.fromString(e.substring(5).trim()) : mi.throwArgumentError("unsupported fragment", "value", e)
				}
				static isFragment(e) {
					return !(!e || !e._isFragment)
				}
			}
			class wi extends Oi {
				format(e) {
					if (e || (e = Ei.sighash), Ei[e] || mi.throwArgumentError("invalid format type", "format", e), e === Ei.json) return JSON.stringify({
						type: "event",
						anonymous: this.anonymous,
						name: this.name,
						inputs: this.inputs.map(t => JSON.parse(t.format(e)))
					});
					let t = "";
					return e !== Ei.sighash && (t += "event "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === Ei.full ? ", " : ",") + ") ", e !== Ei.sighash && this.anonymous && (t += "anonymous "), t.trim()
				}
				static from(e) {
					return "string" == typeof e ? wi.fromString(e) : wi.fromObject(e)
				}
				static fromObject(e) {
					if (wi.isEventFragment(e)) return e;
					"event" !== e.type && mi.throwArgumentError("invalid event object", "value", e);
					const t = {
						name: Ji(e.name),
						anonymous: e.anonymous,
						inputs: e.inputs ? e.inputs.map(Ti.fromObject) : [],
						type: "event"
					};
					return new wi(pi, t)
				}
				static fromString(e) {
					let t = e.match(ji);
					t || mi.throwArgumentError("invalid event string", "value", e);
					let r = !1;
					return t[3].split(" ").forEach(e => {
						switch (e.trim()) {
							case "anonymous":
								r = !0;
								break;
							case "":
								break;
							default:
								mi.warn("unknown modifier: " + e)
						}
					}), wi.fromObject({
						name: t[1].trim(),
						anonymous: r,
						inputs: Si(t[2], !0),
						type: "event"
					})
				}
				static isEventFragment(e) {
					return e && e._isFragment && "event" === e.type
				}
			}

			function Pi(e, t) {
				t.gas = null;
				let r = e.split("@");
				return 1 !== r.length ? (r.length > 2 && mi.throwArgumentError("invalid human-readable ABI signature", "value", e), r[1].match(/^[0-9]+$/) || mi.throwArgumentError("invalid human-readable ABI signature gas", "value", e), t.gas = W.a.from(r[1]), r[0]) : e
			}

			function Fi(e, t) {
				t.constant = !1, t.payable = !1, t.stateMutability = "nonpayable", e.split(" ").forEach(e => {
					switch (e.trim()) {
						case "constant":
							t.constant = !0;
							break;
						case "payable":
							t.payable = !0, t.stateMutability = "payable";
							break;
						case "nonpayable":
							t.payable = !1, t.stateMutability = "nonpayable";
							break;
						case "pure":
							t.constant = !0, t.stateMutability = "pure";
							break;
						case "view":
							t.constant = !0, t.stateMutability = "view";
							break;
						case "external":
						case "public":
						case "":
							break;
						default:
							console.log("unknown modifier: " + e)
					}
				})
			}

			function Ci(e) {
				let t = {
					constant: !1,
					payable: !0,
					stateMutability: "payable"
				};
				return null != e.stateMutability ? (t.stateMutability = e.stateMutability, t.constant = "view" === t.stateMutability || "pure" === t.stateMutability, null != e.constant && !!e.constant !== t.constant && mi.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e), t.payable = "payable" === t.stateMutability, null != e.payable && !!e.payable !== t.payable && mi.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e)) : null != e.payable ? (t.payable = !!e.payable, null != e.constant || t.payable || "constructor" === e.type || mi.throwArgumentError("unable to determine stateMutability", "value", e), t.constant = !!e.constant, t.constant ? t.stateMutability = "view" : t.stateMutability = t.payable ? "payable" : "nonpayable", t.payable && t.constant && mi.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (t.constant = !!e.constant, t.payable = !t.constant, t.stateMutability = t.constant ? "view" : "payable") : "constructor" !== e.type && mi.throwArgumentError("unable to determine stateMutability", "value", e), t
			}
			class Ni extends Oi {
				format(e) {
					if (e || (e = Ei.sighash), Ei[e] || mi.throwArgumentError("invalid format type", "format", e), e === Ei.json) return JSON.stringify({
						type: "constructor",
						stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
						payable: this.payable,
						gas: this.gas ? this.gas.toNumber() : void 0,
						inputs: this.inputs.map(t => JSON.parse(t.format(e)))
					});
					e === Ei.sighash && mi.throwError("cannot format a constructor for sighash", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "format(sighash)"
					});
					let t = "constructor(" + this.inputs.map(t => t.format(e)).join(e === Ei.full ? ", " : ",") + ") ";
					return this.stateMutability && "nonpayable" !== this.stateMutability && (t += this.stateMutability + " "), t.trim()
				}
				static from(e) {
					return "string" == typeof e ? Ni.fromString(e) : Ni.fromObject(e)
				}
				static fromObject(e) {
					if (Ni.isConstructorFragment(e)) return e;
					"constructor" !== e.type && mi.throwArgumentError("invalid constructor object", "value", e);
					let t = Ci(e);
					t.constant && mi.throwArgumentError("constructor cannot be constant", "value", e);
					const r = {
						name: null,
						type: e.type,
						inputs: e.inputs ? e.inputs.map(Ti.fromObject) : [],
						payable: t.payable,
						stateMutability: t.stateMutability,
						gas: e.gas ? W.a.from(e.gas) : null
					};
					return new Ni(pi, r)
				}
				static fromString(e) {
					let t = {
							type: "constructor"
						},
						r = (e = Pi(e, t)).match(ji);
					return r && "constructor" === r[1].trim() || mi.throwArgumentError("invalid constructor string", "value", e), t.inputs = Si(r[2].trim(), !1), Fi(r[3].trim(), t), Ni.fromObject(t)
				}
				static isConstructorFragment(e) {
					return e && e._isFragment && "constructor" === e.type
				}
			}
			class ki extends Ni {
				format(e) {
					if (e || (e = Ei.sighash), Ei[e] || mi.throwArgumentError("invalid format type", "format", e), e === Ei.json) return JSON.stringify({
						type: "function",
						name: this.name,
						constant: this.constant,
						stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
						payable: this.payable,
						gas: this.gas ? this.gas.toNumber() : void 0,
						inputs: this.inputs.map(t => JSON.parse(t.format(e))),
						outputs: this.outputs.map(t => JSON.parse(t.format(e)))
					});
					let t = "";
					return e !== Ei.sighash && (t += "function "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === Ei.full ? ", " : ",") + ") ", e !== Ei.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map(t => t.format(e)).join(", ") + ") "), null != this.gas && (t += "@" + this.gas.toString() + " ")), t.trim()
				}
				static from(e) {
					return "string" == typeof e ? ki.fromString(e) : ki.fromObject(e)
				}
				static fromObject(e) {
					if (ki.isFunctionFragment(e)) return e;
					"function" !== e.type && mi.throwArgumentError("invalid function object", "value", e);
					let t = Ci(e);
					const r = {
						type: e.type,
						name: Ji(e.name),
						constant: t.constant,
						inputs: e.inputs ? e.inputs.map(Ti.fromObject) : [],
						outputs: e.outputs ? e.outputs.map(Ti.fromObject) : [],
						payable: t.payable,
						stateMutability: t.stateMutability,
						gas: e.gas ? W.a.from(e.gas) : null
					};
					return new ki(pi, r)
				}
				static fromString(e) {
					let t = {
							type: "function"
						},
						r = (e = Pi(e, t)).split(" returns ");
					r.length > 2 && mi.throwArgumentError("invalid function string", "value", e);
					let n = r[0].match(ji);
					if (n || mi.throwArgumentError("invalid function signature", "value", e), t.name = n[1].trim(), t.name && Ji(t.name), t.inputs = Si(n[2], !1), Fi(n[3].trim(), t), r.length > 1) {
						let n = r[1].match(ji);
						"" == n[1].trim() && "" == n[3].trim() || mi.throwArgumentError("unexpected tokens", "value", e), t.outputs = Si(n[2], !1)
					} else t.outputs = [];
					return ki.fromObject(t)
				}
				static isFunctionFragment(e) {
					return e && e._isFragment && "function" === e.type
				}
			}

			function Ri(e) {
				const t = e.format();
				return "Error(string)" !== t && "Panic(uint256)" !== t || mi.throwArgumentError(`cannot specify user defined ${t} error`, "fragment", e), e
			}
			class Li extends Oi {
				format(e) {
					if (e || (e = Ei.sighash), Ei[e] || mi.throwArgumentError("invalid format type", "format", e), e === Ei.json) return JSON.stringify({
						type: "error",
						name: this.name,
						inputs: this.inputs.map(t => JSON.parse(t.format(e)))
					});
					let t = "";
					return e !== Ei.sighash && (t += "error "), (t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === Ei.full ? ", " : ",") + ") ").trim()
				}
				static from(e) {
					return "string" == typeof e ? Li.fromString(e) : Li.fromObject(e)
				}
				static fromObject(e) {
					if (Li.isErrorFragment(e)) return e;
					"error" !== e.type && mi.throwArgumentError("invalid error object", "value", e);
					const t = {
						type: e.type,
						name: Ji(e.name),
						inputs: e.inputs ? e.inputs.map(Ti.fromObject) : []
					};
					return Ri(new Li(pi, t))
				}
				static fromString(e) {
					let t = {
							type: "error"
						},
						r = e.match(ji);
					return r || mi.throwArgumentError("invalid error signature", "value", e), t.name = r[1].trim(), t.name && Ji(t.name), t.inputs = Si(r[2], !1), Ri(Li.fromObject(t))
				}
				static isErrorFragment(e) {
					return e && e._isFragment && "error" === e.type
				}
			}

			function Mi(e) {
				return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
			}
			const Bi = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

			function Ji(e) {
				return e && e.match(Bi) || mi.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
			}
			const ji = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
			const _i = new $.a("abi/5.4.1"),
				Di = new RegExp(/^bytes([0-9]*)$/),
				Ii = new RegExp(/^(u?int)([0-9]*)$/);
			class xi {
				constructor(e) {
					_i.checkNew(new.target, xi), Object(Y.d)(this, "coerceFunc", e || null)
				}
				_getCoder(e) {
					switch (e.baseType) {
						case "address":
							return new $o(e.name);
						case "bool":
							return new ii(e.name);
						case "string":
							return new hi(e.name);
						case "bytes":
							return new si(e.name);
						case "array":
							return new oi(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
						case "tuple":
							return new fi((e.components || []).map(e => this._getCoder(e)), e.name);
						case "":
							return new ci(e.name)
					}
					let t = e.type.match(Ii);
					if (t) {
						let r = parseInt(t[2] || "256");
						return (0 === r || r > 256 || r % 8 != 0) && _i.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new di(r / 8, "int" === t[1], e.name)
					}
					if (t = e.type.match(Di)) {
						let r = parseInt(t[1]);
						return (0 === r || r > 32) && _i.throwArgumentError("invalid bytes length", "param", e), new li(r, e.name)
					}
					return _i.throwArgumentError("invalid type", "type", e.type)
				}
				_getWordSize() {
					return 32
				}
				_getReader(e, t) {
					return new Yo(e, this._getWordSize(), this.coerceFunc, t)
				}
				_getWriter() {
					return new Wo(this._getWordSize())
				}
				getDefaultValue(e) {
					const t = e.map(e => this._getCoder(Ti.from(e)));
					return new fi(t, "_").defaultValue()
				}
				encode(e, t) {
					e.length !== t.length && _i.throwError("types/values length mismatch", $.a.errors.INVALID_ARGUMENT, {
						count: {
							types: e.length,
							values: t.length
						},
						value: {
							types: e,
							values: t
						}
					});
					const r = e.map(e => this._getCoder(Ti.from(e))),
						n = new fi(r, "_"),
						o = this._getWriter();
					return n.encode(o, t), o.data
				}
				decode(e, t, r) {
					const n = e.map(e => this._getCoder(Ti.from(e)));
					return new fi(n, "_").decode(this._getReader(Object(c.a)(t), r))
				}
			}
			const Ui = new xi,
				Gi = new $.a("abi/5.4.1");
			class Xi extends Y.a {}
			class Hi extends Y.a {}
			class Vi extends Y.a {}
			class zi extends Y.a {
				static isIndexed(e) {
					return !(!e || !e._isIndexed)
				}
			}
			const Zi = {
				"0x08c379a0": {
					signature: "Error(string)",
					name: "Error",
					inputs: ["string"],
					reason: !0
				},
				"0x4e487b71": {
					signature: "Panic(uint256)",
					name: "Panic",
					inputs: ["uint256"]
				}
			};

			function Ki(e, t) {
				const r = new Error(`deferred error during ABI decoding triggered accessing ${e}`);
				return r.error = t, r
			}
			class Qi {
				constructor(e) {
					Gi.checkNew(new.target, Qi);
					let t = [];
					t = "string" == typeof e ? JSON.parse(e) : e, Object(Y.d)(this, "fragments", t.map(e => Oi.from(e)).filter(e => null != e)), Object(Y.d)(this, "_abiCoder", Object(Y.e)(new.target, "getAbiCoder")()), Object(Y.d)(this, "functions", {}), Object(Y.d)(this, "errors", {}), Object(Y.d)(this, "events", {}), Object(Y.d)(this, "structs", {}), this.fragments.forEach(e => {
						let t = null;
						switch (e.type) {
							case "constructor":
								return this.deploy ? void Gi.warn("duplicate definition - constructor") : void Object(Y.d)(this, "deploy", e);
							case "function":
								t = this.functions;
								break;
							case "event":
								t = this.events;
								break;
							case "error":
								t = this.errors;
								break;
							default:
								return
						}
						let r = e.format();
						t[r] ? Gi.warn("duplicate definition - " + r) : t[r] = e
					}), this.deploy || Object(Y.d)(this, "deploy", Ni.from({
						payable: !1,
						type: "constructor"
					})), Object(Y.d)(this, "_isInterface", !0)
				}
				format(e) {
					e || (e = Ei.full), e === Ei.sighash && Gi.throwArgumentError("interface does not support formatting sighash", "format", e);
					const t = this.fragments.map(t => t.format(e));
					return e === Ei.json ? JSON.stringify(t.map(e => JSON.parse(e))) : t
				}
				static getAbiCoder() {
					return Ui
				}
				static getAddress(e) {
					return Object(H.a)(e)
				}
				static getSighash(e) {
					return Object(c.e)(Object(ee.a)(e.format()), 0, 4)
				}
				static getEventTopic(e) {
					return Object(ee.a)(e.format())
				}
				getFunction(e) {
					if (Object(c.l)(e)) {
						for (const t in this.functions)
							if (e === this.getSighash(t)) return this.functions[t];
						Gi.throwArgumentError("no matching function", "sighash", e)
					}
					if (-1 === e.indexOf("(")) {
						const t = e.trim(),
							r = Object.keys(this.functions).filter(e => e.split("(")[0] === t);
						return 0 === r.length ? Gi.throwArgumentError("no matching function", "name", t) : r.length > 1 && Gi.throwArgumentError("multiple matching functions", "name", t), this.functions[r[0]]
					}
					const t = this.functions[ki.fromString(e).format()];
					return t || Gi.throwArgumentError("no matching function", "signature", e), t
				}
				getEvent(e) {
					if (Object(c.l)(e)) {
						const t = e.toLowerCase();
						for (const e in this.events)
							if (t === this.getEventTopic(e)) return this.events[e];
						Gi.throwArgumentError("no matching event", "topichash", t)
					}
					if (-1 === e.indexOf("(")) {
						const t = e.trim(),
							r = Object.keys(this.events).filter(e => e.split("(")[0] === t);
						return 0 === r.length ? Gi.throwArgumentError("no matching event", "name", t) : r.length > 1 && Gi.throwArgumentError("multiple matching events", "name", t), this.events[r[0]]
					}
					const t = this.events[wi.fromString(e).format()];
					return t || Gi.throwArgumentError("no matching event", "signature", e), t
				}
				getError(e) {
					if (Object(c.l)(e)) {
						const t = Object(Y.e)(this.constructor, "getSighash");
						for (const r in this.errors) {
							if (e === t(this.errors[r])) return this.errors[r]
						}
						Gi.throwArgumentError("no matching error", "sighash", e)
					}
					if (-1 === e.indexOf("(")) {
						const t = e.trim(),
							r = Object.keys(this.errors).filter(e => e.split("(")[0] === t);
						return 0 === r.length ? Gi.throwArgumentError("no matching error", "name", t) : r.length > 1 && Gi.throwArgumentError("multiple matching errors", "name", t), this.errors[r[0]]
					}
					const t = this.errors[ki.fromString(e).format()];
					return t || Gi.throwArgumentError("no matching error", "signature", e), t
				}
				getSighash(e) {
					if ("string" == typeof e) try {
						e = this.getFunction(e)
					} catch (as) {
						try {
							e = this.getError(e)
						} catch (t) {
							throw as
						}
					}
					return Object(Y.e)(this.constructor, "getSighash")(e)
				}
				getEventTopic(e) {
					return "string" == typeof e && (e = this.getEvent(e)), Object(Y.e)(this.constructor, "getEventTopic")(e)
				}
				_decodeParams(e, t) {
					return this._abiCoder.decode(e, t)
				}
				_encodeParams(e, t) {
					return this._abiCoder.encode(e, t)
				}
				encodeDeploy(e) {
					return this._encodeParams(this.deploy.inputs, e || [])
				}
				decodeErrorResult(e, t) {
					"string" == typeof e && (e = this.getError(e));
					const r = Object(c.a)(t);
					return Object(c.i)(r.slice(0, 4)) !== this.getSighash(e) && Gi.throwArgumentError(`data signature does not match error ${e.name}.`, "data", Object(c.i)(r)), this._decodeParams(e.inputs, r.slice(4))
				}
				encodeErrorResult(e, t) {
					return "string" == typeof e && (e = this.getError(e)), Object(c.i)(Object(c.b)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
				}
				decodeFunctionData(e, t) {
					"string" == typeof e && (e = this.getFunction(e));
					const r = Object(c.a)(t);
					return Object(c.i)(r.slice(0, 4)) !== this.getSighash(e) && Gi.throwArgumentError(`data signature does not match function ${e.name}.`, "data", Object(c.i)(r)), this._decodeParams(e.inputs, r.slice(4))
				}
				encodeFunctionData(e, t) {
					return "string" == typeof e && (e = this.getFunction(e)), Object(c.i)(Object(c.b)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
				}
				decodeFunctionResult(e, t) {
					"string" == typeof e && (e = this.getFunction(e));
					let r = Object(c.a)(t),
						n = null,
						o = null,
						i = null,
						a = null;
					switch (r.length % this._abiCoder._getWordSize()) {
						case 0:
							try {
								return this._abiCoder.decode(e.outputs, r)
							} catch (as) {}
							break;
						case 4: {
							const e = Object(c.i)(r.slice(0, 4)),
								t = Zi[e];
							if (t) o = this._abiCoder.decode(t.inputs, r.slice(4)), i = t.name, a = t.signature, t.reason && (n = o[0]);
							else try {
								const t = this.getError(e);
								o = this._abiCoder.decode(t.inputs, r.slice(4)), i = t.name, a = t.format()
							} catch (as) {
								console.log(as)
							}
							break
						}
					}
					return Gi.throwError("call revert exception", $.a.errors.CALL_EXCEPTION, {
						method: e.format(),
						errorArgs: o,
						errorName: i,
						errorSignature: a,
						reason: n
					})
				}
				encodeFunctionResult(e, t) {
					return "string" == typeof e && (e = this.getFunction(e)), Object(c.i)(this._abiCoder.encode(e.outputs, t || []))
				}
				encodeFilterTopics(e, t) {
					"string" == typeof e && (e = this.getEvent(e)), t.length > e.inputs.length && Gi.throwError("too many arguments for " + e.format(), $.a.errors.UNEXPECTED_ARGUMENT, {
						argument: "values",
						value: t
					});
					let r = [];
					e.anonymous || r.push(this.getEventTopic(e));
					const n = (e, t) => "string" === e.type ? Object(ee.a)(t) : "bytes" === e.type ? Object(Z.a)(Object(c.i)(t)) : ("address" === e.type && this._abiCoder.encode(["address"], [t]), Object(c.h)(Object(c.i)(t), 32));
					for (t.forEach((t, o) => {
							let i = e.inputs[o];
							i.indexed ? null == t ? r.push(null) : "array" === i.baseType || "tuple" === i.baseType ? Gi.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, t) : Array.isArray(t) ? r.push(t.map(e => n(i, e))) : r.push(n(i, t)) : null != t && Gi.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, t)
						}); r.length && null === r[r.length - 1];) r.pop();
					return r
				}
				encodeEventLog(e, t) {
					"string" == typeof e && (e = this.getEvent(e));
					const r = [],
						n = [],
						o = [];
					return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && Gi.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach((e, i) => {
						const a = t[i];
						if (e.indexed)
							if ("string" === e.type) r.push(Object(ee.a)(a));
							else if ("bytes" === e.type) r.push(Object(Z.a)(a));
						else {
							if ("tuple" === e.baseType || "array" === e.baseType) throw new Error("not implemented");
							r.push(this._abiCoder.encode([e.type], [a]))
						} else n.push(e), o.push(a)
					}), {
						data: this._abiCoder.encode(n, o),
						topics: r
					}
				}
				decodeEventLog(e, t, r) {
					if ("string" == typeof e && (e = this.getEvent(e)), null != r && !e.anonymous) {
						let t = this.getEventTopic(e);
						Object(c.l)(r[0], 32) && r[0].toLowerCase() === t || Gi.throwError("fragment/topic mismatch", $.a.errors.INVALID_ARGUMENT, {
							argument: "topics[0]",
							expected: t,
							value: r[0]
						}), r = r.slice(1)
					}
					let n = [],
						o = [],
						i = [];
					e.inputs.forEach((e, t) => {
						e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (n.push(Ti.fromObject({
							type: "bytes32",
							name: e.name
						})), i.push(!0)) : (n.push(e), i.push(!1)) : (o.push(e), i.push(!1))
					});
					let a = null != r ? this._abiCoder.decode(n, Object(c.b)(r)) : null,
						s = this._abiCoder.decode(o, t, !0),
						l = [],
						u = 0,
						d = 0;
					e.inputs.forEach((e, t) => {
						if (e.indexed)
							if (null == a) l[t] = new zi({
								_isIndexed: !0,
								hash: null
							});
							else if (i[t]) l[t] = new zi({
							_isIndexed: !0,
							hash: a[d++]
						});
						else try {
							l[t] = a[d++]
						} catch (as) {
							l[t] = as
						} else try {
							l[t] = s[u++]
						} catch (as) {
							l[t] = as
						}
						if (e.name && null == l[e.name]) {
							const r = l[t];
							r instanceof Error ? Object.defineProperty(l, e.name, {
								enumerable: !0,
								get: () => {
									throw Ki(`property ${JSON.stringify(e.name)}`, r)
								}
							}) : l[e.name] = r
						}
					});
					for (let c = 0; c < l.length; c++) {
						const e = l[c];
						e instanceof Error && Object.defineProperty(l, c, {
							enumerable: !0,
							get: () => {
								throw Ki(`index ${c}`, e)
							}
						})
					}
					return Object.freeze(l)
				}
				parseTransaction(e) {
					let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
					return t ? new Hi({
						args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)),
						functionFragment: t,
						name: t.name,
						signature: t.format(),
						sighash: this.getSighash(t),
						value: W.a.from(e.value || "0")
					}) : null
				}
				parseLog(e) {
					let t = this.getEvent(e.topics[0]);
					return !t || t.anonymous ? null : new Xi({
						eventFragment: t,
						name: t.name,
						signature: t.format(),
						topic: this.getEventTopic(t),
						args: this.decodeEventLog(t, e.data, e.topics)
					})
				}
				parseError(e) {
					const t = Object(c.i)(e);
					let r = this.getError(t.substring(0, 10).toLowerCase());
					return r ? new Vi({
						args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
						errorFragment: r,
						name: r.name,
						signature: r.format(),
						sighash: this.getSighash(r)
					}) : null
				}
				static isInterface(e) {
					return !(!e || !e._isInterface)
				}
			}
			const qi = "logger/5.4.1";
			let Wi = !1,
				Yi = !1;
			const $i = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let ea = $i.default,
				ta = null;
			const ra = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (as) {
								e.push(t)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (as) {
					return as.message
				}
				return null
			}();
			var na, oa;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(na || (na = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(oa || (oa = {}));
			const ia = "0123456789abcdef";
			class aa {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const r = e.toLowerCase();
					null == $i[r] && this.throwArgumentError("invalid log level name", "logLevel", e), ea > $i[r] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(aa.levels.DEBUG, e)
				}
				info(...e) {
					this._log(aa.levels.INFO, e)
				}
				warn(...e) {
					this._log(aa.levels.WARNING, e)
				}
				makeError(e, t, r) {
					if (Yi) return this.makeError("censored error", t, {});
					t || (t = aa.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						const t = r[e];
						try {
							if (t instanceof Uint8Array) {
								let r = "";
								for (let e = 0; e < t.length; e++) r += ia[t[e] >> 4], r += ia[15 & t[e]];
								n.push(e + "=Uint8Array(0x" + r + ")")
							} else n.push(e + "=" + JSON.stringify(t))
						} catch (i) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const i = new Error(e);
					return i.reason = o, i.code = t, Object.keys(r).forEach((function(e) {
						i[e] = r[e]
					})), i
				}
				throwError(e, t, r) {
					throw this.makeError(e, t, r)
				}
				throwArgumentError(e, t, r) {
					return this.throwError(e, aa.errors.INVALID_ARGUMENT, {
						argument: t,
						value: r
					})
				}
				assert(e, t, r, n) {
					e || this.throwError(t, r, n)
				}
				assertArgument(e, t, r, n) {
					e || this.throwArgumentError(t, r, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), ra && this.throwError("platform missing String.prototype.normalize", aa.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: ra
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, aa.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, aa.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, r) {
					r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, aa.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + r, aa.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", aa.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", aa.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", aa.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return ta || (ta = new aa(qi)), ta
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", aa.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), Wi) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", aa.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					Yi = !!e, Wi = !!t
				}
				static setLogLevel(e) {
					const t = $i[e.toLowerCase()];
					null != t ? ea = t : aa.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new aa(e)
				}
			}
			aa.errors = oa, aa.levels = na;
			const sa = new RegExp("^bytes([0-9]+)$"),
				la = new RegExp("^(u?int)([0-9]*)$"),
				ca = new RegExp("^(.*)\\[([0-9]*)\\]$"),
				ua = "0000000000000000000000000000000000000000000000000000000000000000";

			function da(e, t) {
				if (e.length != t.length) throw new Error("type/value count mismatch");
				const r = [];
				return e.forEach((function(e, n) {
					r.push(function e(t, r, n) {
						switch (t) {
							case "address":
								return n ? Object(c.p)(r, 32) : Object(c.a)(r);
							case "string":
								return Object(K.f)(r);
							case "bytes":
								return Object(c.a)(r);
							case "bool":
								return r = r ? "0x01" : "0x00", n ? Object(c.p)(r, 32) : Object(c.a)(r)
						}
						let o = t.match(la);
						if (o) {
							let e = parseInt(o[2] || "256");
							if (o[2] && String(e) !== o[2] || e % 8 != 0 || 0 === e || e > 256) throw new Error("invalid number type - " + t);
							return n && (e = 256), r = W.a.from(r).toTwos(e), Object(c.p)(r, e / 8)
						}
						if (o = t.match(sa)) {
							const e = parseInt(o[1]);
							if (String(e) !== o[1] || 0 === e || e > 32) throw new Error("invalid bytes type - " + t);
							if (Object(c.a)(r).byteLength !== e) throw new Error("invalid value for " + t);
							return n ? Object(c.a)((r + ua).substring(0, 66)) : r
						}
						if ((o = t.match(ca)) && Array.isArray(r)) {
							const n = o[1];
							if (parseInt(o[2] || String(r.length)) != r.length) throw new Error("invalid value for " + t);
							const i = [];
							return r.forEach((function(t) {
								i.push(e(n, t, !0))
							})), Object(c.b)(i)
						}
						throw new Error("invalid type - " + t)
					}(e, t[n]))
				})), Object(c.i)(Object(c.b)(r))
			}

			function ha(e, t) {
				return Object(Z.a)(da(e, t))
			}

			function fa(e, t) {
				return Oe(da(e, t))
			}
			const ma = "logger/5.4.0";
			let pa = !1,
				ga = !1;
			const ba = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let va = ba.default,
				ya = null;
			const Ea = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (as) {
								e.push(t)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (as) {
					return as.message
				}
				return null
			}();
			var Aa, Ta;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(Aa || (Aa = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(Ta || (Ta = {}));
			class Sa {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const r = e.toLowerCase();
					null == ba[r] && this.throwArgumentError("invalid log level name", "logLevel", e), va > ba[r] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(Sa.levels.DEBUG, e)
				}
				info(...e) {
					this._log(Sa.levels.INFO, e)
				}
				warn(...e) {
					this._log(Sa.levels.WARNING, e)
				}
				makeError(e, t, r) {
					if (ga) return this.makeError("censored error", t, {});
					t || (t = Sa.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(r[e]))
						} catch (i) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const i = new Error(e);
					return i.reason = o, i.code = t, Object.keys(r).forEach((function(e) {
						i[e] = r[e]
					})), i
				}
				throwError(e, t, r) {
					throw this.makeError(e, t, r)
				}
				throwArgumentError(e, t, r) {
					return this.throwError(e, Sa.errors.INVALID_ARGUMENT, {
						argument: t,
						value: r
					})
				}
				assert(e, t, r, n) {
					e || this.throwError(t, r, n)
				}
				assertArgument(e, t, r, n) {
					e || this.throwArgumentError(t, r, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), Ea && this.throwError("platform missing String.prototype.normalize", Sa.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: Ea
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, Sa.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, Sa.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, r) {
					r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, Sa.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + r, Sa.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", Sa.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", Sa.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", Sa.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return ya || (ya = new Sa(ma)), ya
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", Sa.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), pa) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", Sa.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					ga = !!e, pa = !!t
				}
				static setLogLevel(e) {
					const t = ba[e.toLowerCase()];
					null != t ? va = t : Sa.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new Sa(e)
				}
			}
			Sa.errors = Ta, Sa.levels = Aa;
			var Oa = function(e, t, r, n) {
				return new(r || (r = Promise))((function(o, i) {
					function a(e) {
						try {
							l(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function s(e) {
						try {
							l(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function l(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
							e(t)
						}))).then(a, s)
					}
					l((n = n.apply(e, t || [])).next())
				}))
			};
			const wa = new Sa("properties/5.4.1");

			function Pa(e, t, r) {
				Object.defineProperty(e, t, {
					enumerable: !0,
					value: r,
					writable: !1
				})
			}

			function Fa(e, t) {
				for (let r = 0; r < 32; r++) {
					if (e[t]) return e[t];
					if (!e.prototype || "object" != typeof e.prototype) break;
					e = Object.getPrototypeOf(e.prototype).constructor
				}
				return null
			}

			function Ca(e) {
				return Oa(this, void 0, void 0, (function*() {
					const t = Object.keys(e).map(t => {
						const r = e[t];
						return Promise.resolve(r).then(e => ({
							key: t,
							value: e
						}))
					});
					return (yield Promise.all(t)).reduce((e, t) => (e[t.key] = t.value, e), {})
				}))
			}

			function Na(e, t) {
				e && "object" == typeof e || wa.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach(r => {
					t[r] || wa.throwArgumentError("invalid object key - " + r, "transaction:" + r, e)
				})
			}

			function ka(e) {
				const t = {};
				for (const r in e) t[r] = e[r];
				return t
			}
			const Ra = {
				bigint: !0,
				boolean: !0,
				function: !0,
				number: !0,
				string: !0
			};

			function La(e) {
				if (function e(t) {
						if (null == t || Ra[typeof t]) return !0;
						if (Array.isArray(t) || "object" == typeof t) {
							if (!Object.isFrozen(t)) return !1;
							const r = Object.keys(t);
							for (let n = 0; n < r.length; n++) {
								let o = null;
								try {
									o = t[r[n]]
								} catch (as) {
									continue
								}
								if (!e(o)) return !1
							}
							return !0
						}
						return wa.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
					}(e)) return e;
				if (Array.isArray(e)) return Object.freeze(e.map(e => Ma(e)));
				if ("object" == typeof e) {
					const t = {};
					for (const r in e) {
						const n = e[r];
						void 0 !== n && Pa(t, r, Ma(n))
					}
					return t
				}
				return wa.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
			}

			function Ma(e) {
				return La(e)
			}
			var Ba = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");

			function Ja(e) {
				const t = Object(K.f)(e);
				if (t.length > 31) throw new Error("bytes32 string must be less than 32 bytes");
				return Object(c.i)(Object(c.b)([t, kr.a]).slice(0, 32))
			}

			function ja(e) {
				const t = Object(c.a)(e);
				if (32 !== t.length) throw new Error("invalid bytes32 - not 32 bytes long");
				if (0 !== t[31]) throw new Error("invalid bytes32 string - no null terminator");
				let r = 31;
				for (; 0 === t[r - 1];) r--;
				return Object(K.h)(t.slice(0, r))
			}
			var _a = r("./node_modules/@ethersproject/bignumber/lib.esm/_version.js");
			const Da = new $.a(_a.a),
				Ia = {},
				xa = W.a.from(0),
				Ua = W.a.from(-1);

			function Ga(e, t, r, n) {
				const o = {
					fault: t,
					operation: r
				};
				return void 0 !== n && (o.value = n), Da.throwError(e, $.a.errors.NUMERIC_FAULT, o)
			}
			let Xa = "0";
			for (; Xa.length < 256;) Xa += Xa;

			function Ha(e) {
				if ("number" != typeof e) try {
					e = W.a.from(e).toNumber()
				} catch (t) {}
				return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + Xa.substring(0, e) : Da.throwArgumentError("invalid decimal size", "decimals", e)
			}

			function Va(e, t) {
				null == t && (t = 0);
				const r = Ha(t),
					n = (e = W.a.from(e)).lt(xa);
				n && (e = e.mul(Ua));
				let o = e.mod(r).toString();
				for (; o.length < r.length - 1;) o = "0" + o;
				o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
				const i = e.div(r).toString();
				return e = 1 === r.length ? i : i + "." + o, n && (e = "-" + e), e
			}

			function za(e, t) {
				null == t && (t = 0);
				const r = Ha(t);
				"string" == typeof e && e.match(/^-?[0-9.,]+$/) || Da.throwArgumentError("invalid decimal value", "value", e);
				const n = "-" === e.substring(0, 1);
				n && (e = e.substring(1)), "." === e && Da.throwArgumentError("missing value", "value", e);
				const o = e.split(".");
				o.length > 2 && Da.throwArgumentError("too many decimal points", "value", e);
				let i = o[0],
					a = o[1];
				i || (i = "0"), a || (a = "0");
				a.replace(/^([0-9]*?)(0*)$/, (e, t, r) => t).length > r.length - 1 && Ga("fractional component exceeds decimals", "underflow", "parseFixed");
				for (; a.length < r.length - 1;) a += "0";
				const s = W.a.from(i),
					l = W.a.from(a);
				let c = s.mul(r).add(l);
				return n && (c = c.mul(Ua)), c
			}
			class Za {
				constructor(e, t, r, n) {
					e !== Ia && Da.throwError("cannot use FixedFormat constructor; use FixedFormat.from", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.signed = t, this.width = r, this.decimals = n, this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = Ha(n), Object.freeze(this)
				}
				static from(e) {
					if (e instanceof Za) return e;
					"number" == typeof e && (e = `fixed128x${e}`);
					let t = !0,
						r = 128,
						n = 18;
					if ("string" == typeof e)
						if ("fixed" === e);
						else if ("ufixed" === e) t = !1;
					else {
						const o = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
						o || Da.throwArgumentError("invalid fixed format", "format", e), t = "u" !== o[1], r = parseInt(o[2]), n = parseInt(o[3])
					} else if (e) {
						const o = (t, r, n) => null == e[t] ? n : (typeof e[t] !== r && Da.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]);
						t = o("signed", "boolean", t), r = o("width", "number", r), n = o("decimals", "number", n)
					}
					return r % 8 && Da.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && Da.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new Za(Ia, t, r, n)
				}
			}
			class Ka {
				constructor(e, t, r, n) {
					Da.checkNew(new.target, Ka), e !== Ia && Da.throwError("cannot use FixedNumber constructor; use FixedNumber.from", $.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.format = n, this._hex = t, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
				}
				_checkFormat(e) {
					this.format.name !== e.format.name && Da.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
				}
				addUnsafe(e) {
					this._checkFormat(e);
					const t = za(this._value, this.format.decimals),
						r = za(e._value, e.format.decimals);
					return Ka.fromValue(t.add(r), this.format.decimals, this.format)
				}
				subUnsafe(e) {
					this._checkFormat(e);
					const t = za(this._value, this.format.decimals),
						r = za(e._value, e.format.decimals);
					return Ka.fromValue(t.sub(r), this.format.decimals, this.format)
				}
				mulUnsafe(e) {
					this._checkFormat(e);
					const t = za(this._value, this.format.decimals),
						r = za(e._value, e.format.decimals);
					return Ka.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
				}
				divUnsafe(e) {
					this._checkFormat(e);
					const t = za(this._value, this.format.decimals),
						r = za(e._value, e.format.decimals);
					return Ka.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
				}
				floor() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let t = Ka.from(e[0], this.format);
					const r = !e[1].match(/^(0*)$/);
					return this.isNegative() && r && (t = t.subUnsafe(Qa)), t
				}
				ceiling() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let t = Ka.from(e[0], this.format);
					const r = !e[1].match(/^(0*)$/);
					return !this.isNegative() && r && (t = t.addUnsafe(Qa)), t
				}
				round(e) {
					null == e && (e = 0);
					const t = this.toString().split(".");
					if (1 === t.length && t.push("0"), (e < 0 || e > 80 || e % 1) && Da.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e) return this;
					const r = Ka.from("1" + Xa.substring(0, e), this.format),
						n = qa.toFormat(this.format);
					return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
				}
				isZero() {
					return "0.0" === this._value || "0" === this._value
				}
				isNegative() {
					return "-" === this._value[0]
				}
				toString() {
					return this._value
				}
				toHexString(e) {
					if (null == e) return this._hex;
					e % 8 && Da.throwArgumentError("invalid byte width", "width", e);
					const t = W.a.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
					return Object(c.h)(t, e / 8)
				}
				toUnsafeFloat() {
					return parseFloat(this.toString())
				}
				toFormat(e) {
					return Ka.fromString(this._value, e)
				}
				static fromValue(e, t, r) {
					return null != r || null == t || Object(W.d)(t) || (r = t, t = null), null == t && (t = 0), null == r && (r = "fixed"), Ka.fromString(Va(e, t), Za.from(r))
				}
				static fromString(e, t) {
					null == t && (t = "fixed");
					const r = Za.from(t),
						n = za(e, r.decimals);
					!r.signed && n.lt(xa) && Ga("unsigned value cannot be negative", "overflow", "value", e);
					let o = null;
					r.signed ? o = n.toTwos(r.width).toHexString() : (o = n.toHexString(), o = Object(c.h)(o, r.width / 8));
					const i = Va(n, r.decimals);
					return new Ka(Ia, o, i, r)
				}
				static fromBytes(e, t) {
					null == t && (t = "fixed");
					const r = Za.from(t);
					if (Object(c.a)(e).length > r.width / 8) throw new Error("overflow");
					let n = W.a.from(e);
					r.signed && (n = n.fromTwos(r.width));
					const o = n.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
						i = Va(n, r.decimals);
					return new Ka(Ia, o, i, r)
				}
				static from(e, t) {
					if ("string" == typeof e) return Ka.fromString(e, t);
					if (Object(c.j)(e)) return Ka.fromBytes(e, t);
					try {
						return Ka.fromValue(e, 0, t)
					} catch (as) {
						if (as.code !== $.a.errors.INVALID_ARGUMENT) throw as
					}
					return Da.throwArgumentError("invalid FixedNumber value", "value", e)
				}
				static isFixedNumber(e) {
					return !(!e || !e._isFixedNumber)
				}
			}
			const Qa = Ka.from(1),
				qa = Ka.from("0.5"),
				Wa = new $.a("units/5.4.0"),
				Ya = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

			function $a(e) {
				const t = String(e).split(".");
				(t.length > 2 || !t[0].match(/^-?[0-9]*$/) || t[1] && !t[1].match(/^[0-9]*$/) || "." === e || "-." === e) && Wa.throwArgumentError("invalid value", "value", e);
				let r = t[0],
					n = "";
				for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1));
					"0" === r.substring(0, 1);) r = r.substring(1);
				"" === r && (r = "0");
				let o = "";
				for (2 === t.length && (o = "." + (t[1] || "0")); o.length > 2 && "0" === o[o.length - 1];) o = o.substring(0, o.length - 1);
				const i = [];
				for (; r.length;) {
					if (r.length <= 3) {
						i.unshift(r);
						break
					} {
						const e = r.length - 3;
						i.unshift(r.substring(e)), r = r.substring(0, e)
					}
				}
				return n + i.join(",") + o
			}

			function es(e, t) {
				if ("string" == typeof t) {
					const e = Ya.indexOf(t); - 1 !== e && (t = 3 * e)
				}
				return Va(e, null != t ? t : 18)
			}

			function ts(e, t) {
				if ("string" != typeof e && Wa.throwArgumentError("value must be a string", "value", e), "string" == typeof t) {
					const e = Ya.indexOf(t); - 1 !== e && (t = 3 * e)
				}
				return za(e, null != t ? t : 18)
			}

			function rs(e) {
				return es(e, 18)
			}

			function ns(e) {
				return ts(e, 18)
			}
			const os = "ethers/5.4.7",
				is = new aa(os);
			try {
				const e = window;
				null == e._ethers && (e._ethers = a)
			} catch (as) {}
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.2"
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/bn.js/lib/bn.js"),
				o = r.n(n),
				i = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = r("./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				s = r("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				l = o.a.BN;
			const c = new a.a(s.a),
				u = {},
				d = 9007199254740991;

			function h(e) {
				return null != e && (m.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(i.l)(e) || "bigint" == typeof e || Object(i.j)(e))
			}
			let f = !1;
			class m {
				constructor(e, t) {
					c.checkNew(new.target, m), e !== u && c.throwError("cannot call constructor directly; use BigNumber.from", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return g(b(this).fromTwos(e))
				}
				toTwos(e) {
					return g(b(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? m.from(this._hex.substring(1)) : this
				}
				add(e) {
					return g(b(this).add(b(e)))
				}
				sub(e) {
					return g(b(this).sub(b(e)))
				}
				div(e) {
					return m.from(e).isZero() && v("division by zero", "div"), g(b(this).div(b(e)))
				}
				mul(e) {
					return g(b(this).mul(b(e)))
				}
				mod(e) {
					const t = b(e);
					return t.isNeg() && v("cannot modulo negative values", "mod"), g(b(this).umod(t))
				}
				pow(e) {
					const t = b(e);
					return t.isNeg() && v("cannot raise to negative values", "pow"), g(b(this).pow(t))
				}
				and(e) {
					const t = b(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'and' negative values", "and"), g(b(this).and(t))
				}
				or(e) {
					const t = b(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'or' negative values", "or"), g(b(this).or(t))
				}
				xor(e) {
					const t = b(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'xor' negative values", "xor"), g(b(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && v("cannot mask negative values", "mask"), g(b(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && v("cannot shift negative values", "shl"), g(b(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && v("cannot shift negative values", "shr"), g(b(this).shrn(e))
				}
				eq(e) {
					return b(this).eq(b(e))
				}
				lt(e) {
					return b(this).lt(b(e))
				}
				lte(e) {
					return b(this).lte(b(e))
				}
				gt(e) {
					return b(this).gt(b(e))
				}
				gte(e) {
					return b(this).gte(b(e))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return b(this).isZero()
				}
				toNumber() {
					try {
						return b(this).toNumber()
					} catch (e) {
						v("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return c.throwError("this platform does not support BigInt", a.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", a.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", a.a.errors.UNEXPECTED_ARGUMENT, {})), b(this).toString(10)
				}
				toHexString() {
					return this._hex
				}
				toJSON(e) {
					return {
						type: "BigNumber",
						hex: this.toHexString()
					}
				}
				static from(e) {
					if (e instanceof m) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new m(u, p(e)) : e.match(/^-?[0-9]+$/) ? new m(u, p(new l(e))) : c.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && v("underflow", "BigNumber.from", e), (e >= d || e <= -d) && v("overflow", "BigNumber.from", e), m.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return m.from(t.toString());
					if (Object(i.j)(t)) return m.from(Object(i.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return m.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(i.l)(e) || "-" === e[0] && Object(i.l)(e.substring(1)))) return m.from(e)
						} return c.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function p(e) {
				if ("string" != typeof e) return p(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && c.throwArgumentError("invalid hex", "value", e), "0x00" === (e = p(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function g(e) {
				return m.from(p(e))
			}

			function b(e) {
				const t = m.from(e).toHexString();
				return "-" === t[0] ? new l("-" + t.substring(3), 16) : new l(t.substring(2), 16)
			}

			function v(e, t, r) {
				const n = {
					fault: e,
					operation: t
				};
				return null != r && (n.value = r), c.throwError(e, a.a.errors.NUMERIC_FAULT, n)
			}
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			const n = "logger/5.4.0";
			let o = !1,
				i = !1;
			const a = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let s = a.default,
				l = null;
			const c = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (r) {
								e.push(t)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			class h {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const r = e.toLowerCase();
					null == a[r] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[r] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(h.levels.DEBUG, e)
				}
				info(...e) {
					this._log(h.levels.INFO, e)
				}
				warn(...e) {
					this._log(h.levels.WARNING, e)
				}
				makeError(e, t, r) {
					if (i) return this.makeError("censored error", t, {});
					t || (t = h.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(r[e]))
						} catch (a) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const a = new Error(e);
					return a.reason = o, a.code = t, Object.keys(r).forEach((function(e) {
						a[e] = r[e]
					})), a
				}
				throwError(e, t, r) {
					throw this.makeError(e, t, r)
				}
				throwArgumentError(e, t, r) {
					return this.throwError(e, h.errors.INVALID_ARGUMENT, {
						argument: t,
						value: r
					})
				}
				assert(e, t, r, n) {
					e || this.throwError(t, r, n)
				}
				assertArgument(e, t, r, n) {
					e || this.throwArgumentError(t, r, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", h.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, r) {
					r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, h.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + r, h.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", h.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return l || (l = new h(n)), l
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, o = !!t
				}
				static setLogLevel(e) {
					const t = a[e.toLowerCase()];
					null != t ? s = t : h.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new h(e)
				}
			}
			h.errors = d, h.levels = u
		},
		"./node_modules/scrypt-js/scrypt.js": function(e, t, r) {
			"use strict";
			(function(t) {
				! function(r) {
					const n = 2147483647;

					function o(e) {
						const t = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
						let r = 1779033703,
							n = 3144134277,
							o = 1013904242,
							i = 2773480762,
							a = 1359893119,
							s = 2600822924,
							l = 528734635,
							c = 1541459225;
						const u = new Uint32Array(64);

						function d(e) {
							let d = 0,
								h = e.length;
							for (; h >= 64;) {
								let f, m, p, g, b, v = r,
									y = n,
									E = o,
									A = i,
									T = a,
									S = s,
									O = l,
									w = c;
								for (m = 0; m < 16; m++) p = d + 4 * m, u[m] = (255 & e[p]) << 24 | (255 & e[p + 1]) << 16 | (255 & e[p + 2]) << 8 | 255 & e[p + 3];
								for (m = 16; m < 64; m++) g = ((f = u[m - 2]) >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10, b = ((f = u[m - 15]) >>> 7 | f << 25) ^ (f >>> 18 | f << 14) ^ f >>> 3, u[m] = (g + u[m - 7] | 0) + (b + u[m - 16] | 0) | 0;
								for (m = 0; m < 64; m++) g = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & S ^ ~T & O) | 0) + (w + (t[m] + u[m] | 0) | 0) | 0, b = ((v >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10)) + (v & y ^ v & E ^ y & E) | 0, w = O, O = S, S = T, T = A + g | 0, A = E, E = y, y = v, v = g + b | 0;
								r = r + v | 0, n = n + y | 0, o = o + E | 0, i = i + A | 0, a = a + T | 0, s = s + S | 0, l = l + O | 0, c = c + w | 0, d += 64, h -= 64
							}
						}
						d(e);
						let h, f = e.length % 64,
							m = e.length / 536870912 | 0,
							p = e.length << 3,
							g = f < 56 ? 56 : 120,
							b = e.slice(e.length - f, e.length);
						for (b.push(128), h = f + 1; h < g; h++) b.push(0);
						return b.push(m >>> 24 & 255), b.push(m >>> 16 & 255), b.push(m >>> 8 & 255), b.push(m >>> 0 & 255), b.push(p >>> 24 & 255), b.push(p >>> 16 & 255), b.push(p >>> 8 & 255), b.push(p >>> 0 & 255), d(b), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, l >>> 0 & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c >>> 0 & 255]
					}

					function i(e, t, r) {
						e = e.length <= 64 ? e : o(e);
						const n = 64 + t.length + 4,
							i = new Array(n),
							a = new Array(64);
						let s, l = [];
						for (s = 0; s < 64; s++) i[s] = 54;
						for (s = 0; s < e.length; s++) i[s] ^= e[s];
						for (s = 0; s < t.length; s++) i[64 + s] = t[s];
						for (s = n - 4; s < n; s++) i[s] = 0;
						for (s = 0; s < 64; s++) a[s] = 92;
						for (s = 0; s < e.length; s++) a[s] ^= e[s];

						function c() {
							for (let e = n - 1; e >= n - 4; e--) {
								if (i[e]++, i[e] <= 255) return;
								i[e] = 0
							}
						}
						for (; r >= 32;) c(), l = l.concat(o(a.concat(o(i)))), r -= 32;
						return r > 0 && (c(), l = l.concat(o(a.concat(o(i))).slice(0, r))), l
					}

					function a(e, t, r, n, o) {
						let i;
						for (u(e, 16 * (2 * r - 1), o, 0, 16), i = 0; i < 2 * r; i++) c(e, 16 * i, o, 16), l(o, n), u(o, 0, e, t + 16 * i, 16);
						for (i = 0; i < r; i++) u(e, t + 2 * i * 16, e, 16 * i, 16);
						for (i = 0; i < r; i++) u(e, t + 16 * (2 * i + 1), e, 16 * (i + r), 16)
					}

					function s(e, t) {
						return e << t | e >>> 32 - t
					}

					function l(e, t) {
						u(e, 0, t, 0, 16);
						for (let r = 8; r > 0; r -= 2) t[4] ^= s(t[0] + t[12], 7), t[8] ^= s(t[4] + t[0], 9), t[12] ^= s(t[8] + t[4], 13), t[0] ^= s(t[12] + t[8], 18), t[9] ^= s(t[5] + t[1], 7), t[13] ^= s(t[9] + t[5], 9), t[1] ^= s(t[13] + t[9], 13), t[5] ^= s(t[1] + t[13], 18), t[14] ^= s(t[10] + t[6], 7), t[2] ^= s(t[14] + t[10], 9), t[6] ^= s(t[2] + t[14], 13), t[10] ^= s(t[6] + t[2], 18), t[3] ^= s(t[15] + t[11], 7), t[7] ^= s(t[3] + t[15], 9), t[11] ^= s(t[7] + t[3], 13), t[15] ^= s(t[11] + t[7], 18), t[1] ^= s(t[0] + t[3], 7), t[2] ^= s(t[1] + t[0], 9), t[3] ^= s(t[2] + t[1], 13), t[0] ^= s(t[3] + t[2], 18), t[6] ^= s(t[5] + t[4], 7), t[7] ^= s(t[6] + t[5], 9), t[4] ^= s(t[7] + t[6], 13), t[5] ^= s(t[4] + t[7], 18), t[11] ^= s(t[10] + t[9], 7), t[8] ^= s(t[11] + t[10], 9), t[9] ^= s(t[8] + t[11], 13), t[10] ^= s(t[9] + t[8], 18), t[12] ^= s(t[15] + t[14], 7), t[13] ^= s(t[12] + t[15], 9), t[14] ^= s(t[13] + t[12], 13), t[15] ^= s(t[14] + t[13], 18);
						for (let r = 0; r < 16; ++r) e[r] += t[r]
					}

					function c(e, t, r, n) {
						for (let o = 0; o < n; o++) r[o] ^= e[t + o]
					}

					function u(e, t, r, n, o) {
						for (; o--;) r[n++] = e[t++]
					}

					function d(e) {
						if (!e || "number" != typeof e.length) return !1;
						for (let t = 0; t < e.length; t++) {
							const r = e[t];
							if ("number" != typeof r || r % 1 || r < 0 || r >= 256) return !1
						}
						return !0
					}

					function h(e, t) {
						if ("number" != typeof e || e % 1) throw new Error("invalid " + t);
						return e
					}

					function f(e, r, o, s, l, f, m) {
						if (o = h(o, "N"), s = h(s, "r"), l = h(l, "p"), f = h(f, "dkLen"), 0 === o || 0 != (o & o - 1)) throw new Error("N must be power of 2");
						if (o > n / 128 / s) throw new Error("N too large");
						if (s > n / 128 / l) throw new Error("r too large");
						if (!d(e)) throw new Error("password must be an array or buffer");
						if (e = Array.prototype.slice.call(e), !d(r)) throw new Error("salt must be an array or buffer");
						r = Array.prototype.slice.call(r);
						let p = i(e, r, 128 * l * s);
						const g = new Uint32Array(32 * l * s);
						for (let t = 0; t < g.length; t++) {
							const e = 4 * t;
							g[t] = (255 & p[e + 3]) << 24 | (255 & p[e + 2]) << 16 | (255 & p[e + 1]) << 8 | (255 & p[e + 0]) << 0
						}
						const b = new Uint32Array(64 * s),
							v = new Uint32Array(32 * s * o),
							y = 32 * s,
							E = new Uint32Array(16),
							A = new Uint32Array(16),
							T = l * o * 2;
						let S, O, w = 0,
							P = null,
							F = !1,
							C = 0,
							N = 0;
						const k = m ? parseInt(1e3 / s) : 4294967295,
							R = void 0 !== t ? t : setTimeout,
							L = function() {
								if (F) return m(new Error("cancelled"), w / T);
								let t;
								switch (C) {
									case 0:
										u(g, O = 32 * N * s, b, 0, y), C = 1, S = 0;
									case 1:
										(t = o - S) > k && (t = k);
										for (let e = 0; e < t; e++) u(b, 0, v, (S + e) * y, y), a(b, y, s, E, A);
										if (S += t, w += t, m) {
											const e = parseInt(1e3 * w / T);
											if (e !== P) {
												if (F = m(null, w / T)) break;
												P = e
											}
										}
										if (S < o) break;
										S = 0, C = 2;
									case 2:
										(t = o - S) > k && (t = k);
										for (let e = 0; e < t; e++) {
											const e = b[16 * (2 * s - 1)] & o - 1;
											c(v, e * y, b, y), a(b, y, s, E, A)
										}
										if (S += t, w += t, m) {
											const e = parseInt(1e3 * w / T);
											if (e !== P) {
												if (F = m(null, w / T)) break;
												P = e
											}
										}
										if (S < o) break;
										if (u(b, 0, g, O, y), ++N < l) {
											C = 0;
											break
										}
										p = [];
										for (let e = 0; e < g.length; e++) p.push(g[e] >> 0 & 255), p.push(g[e] >> 8 & 255), p.push(g[e] >> 16 & 255), p.push(g[e] >> 24 & 255);
										const r = i(e, p, f);
										return m && m(null, 1, r), r
								}
								m && R(L)
							};
						if (!m)
							for (;;) {
								const e = L();
								if (null != e) return e
							}
						L()
					}
					const m = {
						scrypt: function(e, t, r, n, o, i, a) {
							return new Promise((function(s, l) {
								let c = 0;
								a && a(0), f(e, t, r, n, o, i, (function(e, t, r) {
									if (e) l(e);
									else if (r) a && 1 !== c && a(1), s(new Uint8Array(r));
									else if (a && t !== c) return c = t, a(t)
								}))
							}))
						},
						syncScrypt: function(e, t, r, n, o, i) {
							return new Uint8Array(f(e, t, r, n, o, i))
						}
					};
					e.exports = m
				}()
			}).call(this, r("./node_modules/timers-browserify/main.js").setImmediate)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732.1f252485d3a8bd656fef.js.map