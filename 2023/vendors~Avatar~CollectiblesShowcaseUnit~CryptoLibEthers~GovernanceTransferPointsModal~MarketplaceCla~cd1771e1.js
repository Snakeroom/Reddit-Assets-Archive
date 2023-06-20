// https://www.redditstatic.com/desktop2x/vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1.82154746497a1899a163.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"], {
		"./node_modules/@ethersproject/abi/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "abi/5.4.1"
		},
		"./node_modules/@ethersproject/abi/lib.esm/abi-coder.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return I
			})), t.d(r, "b", (function() {
				return _
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/abi/node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/abi/lib.esm/_version.js"),
				s = t("./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js"),
				l = t("./node_modules/@ethersproject/address/lib.esm/index.js");
			class c extends s.a {
				constructor(e) {
					super("address", "address", e, !1)
				}
				defaultValue() {
					return "0x0000000000000000000000000000000000000000"
				}
				encode(e, r) {
					try {
						r = Object(l.getAddress)(r)
					} catch (t) {
						this._throwError(t.message, r)
					}
					return e.writeValue(r)
				}
				decode(e) {
					return Object(l.getAddress)(Object(o.hexZeroPad)(e.readValue().toHexString(), 20))
				}
			}
			class u extends s.a {
				constructor(e) {
					super(e.name, e.type, void 0, e.dynamic), this.coder = e
				}
				defaultValue() {
					return this.coder.defaultValue()
				}
				encode(e, r) {
					return this.coder.encode(e, r)
				}
				decode(e) {
					return this.coder.decode(e)
				}
			}
			const h = new i.a(a.a);

			function d(e, r, t) {
				let o = null;
				if (Array.isArray(t)) o = t;
				else if (t && "object" == typeof t) {
					let e = {};
					o = r.map(r => {
						const o = r.localName;
						return o || h.throwError("cannot encode object for signature with missing names", i.a.errors.INVALID_ARGUMENT, {
							argument: "values",
							coder: r,
							value: t
						}), e[o] && h.throwError("cannot encode object for signature with duplicate names", i.a.errors.INVALID_ARGUMENT, {
							argument: "values",
							coder: r,
							value: t
						}), e[o] = !0, t[o]
					})
				} else h.throwArgumentError("invalid tuple value", "tuple", t);
				r.length !== o.length && h.throwArgumentError("types/value length mismatch", "tuple", t);
				let n = new s.c(e.wordSize),
					a = new s.c(e.wordSize),
					l = [];
				r.forEach((e, r) => {
					let t = o[r];
					if (e.dynamic) {
						let r = a.length;
						e.encode(a, t);
						let o = n.writeUpdatableValue();
						l.push(e => {
							o(e + r)
						})
					} else e.encode(n, t)
				}), l.forEach(e => {
					e(n.length)
				});
				let c = e.appendWriter(n);
				return c += e.appendWriter(a)
			}

			function f(e, r) {
				let t = [],
					o = e.subReader(0);
				r.forEach(r => {
					let n = null;
					if (r.dynamic) {
						let t = e.readValue(),
							s = o.subReader(t.toNumber());
						try {
							n = r.decode(s)
						} catch (a) {
							if (a.code === i.a.errors.BUFFER_OVERRUN) throw a;
							(n = a).baseType = r.name, n.name = r.localName, n.type = r.type
						}
					} else try {
						n = r.decode(e)
					} catch (a) {
						if (a.code === i.a.errors.BUFFER_OVERRUN) throw a;
						(n = a).baseType = r.name, n.name = r.localName, n.type = r.type
					}
					null != n && t.push(n)
				});
				const n = r.reduce((e, r) => {
					const t = r.localName;
					return t && (e[t] || (e[t] = 0), e[t]++), e
				}, {});
				r.forEach((e, r) => {
					let o = e.localName;
					if (!o || 1 !== n[o]) return;
					if ("length" === o && (o = "_length"), null != t[o]) return;
					const i = t[r];
					i instanceof Error ? Object.defineProperty(t, o, {
						enumerable: !0,
						get: () => {
							throw i
						}
					}) : t[o] = i
				});
				for (let i = 0; i < t.length; i++) {
					const e = t[i];
					e instanceof Error && Object.defineProperty(t, i, {
						enumerable: !0,
						get: () => {
							throw e
						}
					})
				}
				return Object.freeze(t)
			}
			class m extends s.a {
				constructor(e, r, t) {
					super("array", e.type + "[" + (r >= 0 ? r : "") + "]", t, -1 === r || e.dynamic), this.coder = e, this.length = r
				}
				defaultValue() {
					const e = this.coder.defaultValue(),
						r = [];
					for (let t = 0; t < this.length; t++) r.push(e);
					return r
				}
				encode(e, r) {
					Array.isArray(r) || this._throwError("expected array value", r);
					let t = this.length; - 1 === t && (t = r.length, e.writeValue(r.length)), h.checkArgumentCount(r.length, t, "coder array" + (this.localName ? " " + this.localName : ""));
					let o = [];
					for (let n = 0; n < r.length; n++) o.push(this.coder);
					return d(e, o, r)
				}
				decode(e) {
					let r = this.length; - 1 === r && 32 * (r = e.readValue().toNumber()) > e._data.length && h.throwError("insufficient data length", i.a.errors.BUFFER_OVERRUN, {
						length: e._data.length,
						count: r
					});
					let t = [];
					for (let o = 0; o < r; o++) t.push(new u(this.coder));
					return e.coerce(this.name, f(e, t))
				}
			}
			class g extends s.a {
				constructor(e) {
					super("bool", "bool", e, !1)
				}
				defaultValue() {
					return !1
				}
				encode(e, r) {
					return e.writeValue(r ? 1 : 0)
				}
				decode(e) {
					return e.coerce(this.type, !e.readValue().isZero())
				}
			}
			class p extends s.a {
				constructor(e, r) {
					super(e, e, r, !0)
				}
				defaultValue() {
					return "0x"
				}
				encode(e, r) {
					r = Object(o.arrayify)(r);
					let t = e.writeValue(r.length);
					return t += e.writeBytes(r)
				}
				decode(e) {
					return e.readBytes(e.readValue().toNumber(), !0)
				}
			}
			class b extends p {
				constructor(e) {
					super("bytes", e)
				}
				decode(e) {
					return e.coerce(this.name, Object(o.hexlify)(super.decode(e)))
				}
			}
			class E extends s.a {
				constructor(e, r) {
					let t = "bytes" + String(e);
					super(t, t, r, !1), this.size = e
				}
				defaultValue() {
					return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
				}
				encode(e, r) {
					let t = Object(o.arrayify)(r);
					return t.length !== this.size && this._throwError("incorrect data length", r), e.writeBytes(t)
				}
				decode(e) {
					return e.coerce(this.name, Object(o.hexlify)(e.readBytes(this.size)))
				}
			}
			class v extends s.a {
				constructor(e) {
					super("null", "", e, !1)
				}
				defaultValue() {
					return null
				}
				encode(e, r) {
					return null != r && this._throwError("not null", r), e.writeBytes([])
				}
				decode(e) {
					return e.readBytes(0), e.coerce(this.name, null)
				}
			}
			var N = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				y = t("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js");
			class O extends s.a {
				constructor(e, r, t) {
					const o = (r ? "int" : "uint") + 8 * e;
					super(o, o, t, !1), this.size = e, this.signed = r
				}
				defaultValue() {
					return 0
				}
				encode(e, r) {
					let t = N.a.from(r),
						o = y.b.mask(8 * e.wordSize);
					if (this.signed) {
						let e = o.mask(8 * this.size - 1);
						(t.gt(e) || t.lt(e.add(y.e).mul(y.d))) && this._throwError("value out-of-bounds", r)
					} else(t.lt(y.h) || t.gt(o.mask(8 * this.size))) && this._throwError("value out-of-bounds", r);
					return t = t.toTwos(8 * this.size).mask(8 * this.size), this.signed && (t = t.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(t)
				}
				decode(e) {
					let r = e.readValue().mask(8 * this.size);
					return this.signed && (r = r.fromTwos(8 * this.size)), e.coerce(this.name, r)
				}
			}
			var R = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			class A extends p {
				constructor(e) {
					super("string", e)
				}
				defaultValue() {
					return ""
				}
				encode(e, r) {
					return super.encode(e, Object(R.f)(r))
				}
				decode(e) {
					return Object(R.h)(super.decode(e))
				}
			}
			class T extends s.a {
				constructor(e, r) {
					let t = !1;
					const o = [];
					e.forEach(e => {
						e.dynamic && (t = !0), o.push(e.type)
					}), super("tuple", "tuple(" + o.join(",") + ")", r, t), this.coders = e
				}
				defaultValue() {
					const e = [];
					this.coders.forEach(r => {
						e.push(r.defaultValue())
					});
					const r = this.coders.reduce((e, r) => {
						const t = r.localName;
						return t && (e[t] || (e[t] = 0), e[t]++), e
					}, {});
					return this.coders.forEach((t, o) => {
						let n = t.localName;
						n && 1 === r[n] && ("length" === n && (n = "_length"), null == e[n] && (e[n] = e[o]))
					}), Object.freeze(e)
				}
				encode(e, r) {
					return d(e, this.coders, r)
				}
				decode(e) {
					return e.coerce(this.name, f(e, this.coders))
				}
			}
			var S = t("./node_modules/@ethersproject/abi/lib.esm/fragments.js");
			const w = new i.a(a.a),
				P = new RegExp(/^bytes([0-9]*)$/),
				C = new RegExp(/^(u?int)([0-9]*)$/);
			class I {
				constructor(e) {
					w.checkNew(new.target, I), Object(n.defineReadOnly)(this, "coerceFunc", e || null)
				}
				_getCoder(e) {
					switch (e.baseType) {
						case "address":
							return new c(e.name);
						case "bool":
							return new g(e.name);
						case "string":
							return new A(e.name);
						case "bytes":
							return new b(e.name);
						case "array":
							return new m(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
						case "tuple":
							return new T((e.components || []).map(e => this._getCoder(e)), e.name);
						case "":
							return new v(e.name)
					}
					let r = e.type.match(C);
					if (r) {
						let t = parseInt(r[2] || "256");
						return (0 === t || t > 256 || t % 8 != 0) && w.throwArgumentError("invalid " + r[1] + " bit length", "param", e), new O(t / 8, "int" === r[1], e.name)
					}
					if (r = e.type.match(P)) {
						let t = parseInt(r[1]);
						return (0 === t || t > 32) && w.throwArgumentError("invalid bytes length", "param", e), new E(t, e.name)
					}
					return w.throwArgumentError("invalid type", "type", e.type)
				}
				_getWordSize() {
					return 32
				}
				_getReader(e, r) {
					return new s.b(e, this._getWordSize(), this.coerceFunc, r)
				}
				_getWriter() {
					return new s.c(this._getWordSize())
				}
				getDefaultValue(e) {
					const r = e.map(e => this._getCoder(S.g.from(e)));
					return new T(r, "_").defaultValue()
				}
				encode(e, r) {
					e.length !== r.length && w.throwError("types/values length mismatch", i.a.errors.INVALID_ARGUMENT, {
						count: {
							types: e.length,
							values: r.length
						},
						value: {
							types: e,
							values: r
						}
					});
					const t = e.map(e => this._getCoder(S.g.from(e))),
						o = new T(t, "_"),
						n = this._getWriter();
					return o.encode(n, r), n.data
				}
				decode(e, r, t) {
					const n = e.map(e => this._getCoder(S.g.from(e)));
					return new T(n, "_").decode(this._getReader(Object(o.arrayify)(r), t))
				}
			}
			const _ = new I
		},
		"./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js": function(e, r, t) {
			"use strict";
			t.d(r, "d", (function() {
				return c
			})), t.d(r, "a", (function() {
				return u
			})), t.d(r, "c", (function() {
				return h
			})), t.d(r, "b", (function() {
				return d
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/abi/node_modules/@ethersproject/logger/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/abi/lib.esm/_version.js");
			const l = new a.a(s.a);

			function c(e) {
				const r = [],
					t = function(e, o) {
						if (Array.isArray(o))
							for (let i in o) {
								const a = e.slice();
								a.push(i);
								try {
									t(a, o[i])
								} catch (n) {
									r.push({
										path: a,
										error: n
									})
								}
							}
					};
				return t([], e), r
			}
			class u {
				constructor(e, r, t, o) {
					this.name = e, this.type = r, this.localName = t, this.dynamic = o
				}
				_throwError(e, r) {
					l.throwArgumentError(e, this.localName, r)
				}
			}
			class h {
				constructor(e) {
					Object(i.defineReadOnly)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
				}
				get data() {
					return Object(o.hexConcat)(this._data)
				}
				get length() {
					return this._dataLength
				}
				_writeData(e) {
					return this._data.push(e), this._dataLength += e.length, e.length
				}
				appendWriter(e) {
					return this._writeData(Object(o.concat)(e._data))
				}
				writeBytes(e) {
					let r = Object(o.arrayify)(e);
					const t = r.length % this.wordSize;
					return t && (r = Object(o.concat)([r, this._padding.slice(t)])), this._writeData(r)
				}
				_getValue(e) {
					let r = Object(o.arrayify)(n.a.from(e));
					return r.length > this.wordSize && l.throwError("value out-of-bounds", a.a.errors.BUFFER_OVERRUN, {
						length: this.wordSize,
						offset: r.length
					}), r.length % this.wordSize && (r = Object(o.concat)([this._padding.slice(r.length % this.wordSize), r])), r
				}
				writeValue(e) {
					return this._writeData(this._getValue(e))
				}
				writeUpdatableValue() {
					const e = this._data.length;
					return this._data.push(this._padding), this._dataLength += this.wordSize, r => {
						this._data[e] = this._getValue(r)
					}
				}
			}
			class d {
				constructor(e, r, t, n) {
					Object(i.defineReadOnly)(this, "_data", Object(o.arrayify)(e)), Object(i.defineReadOnly)(this, "wordSize", r || 32), Object(i.defineReadOnly)(this, "_coerceFunc", t), Object(i.defineReadOnly)(this, "allowLoose", n), this._offset = 0
				}
				get data() {
					return Object(o.hexlify)(this._data)
				}
				get consumed() {
					return this._offset
				}
				static coerce(e, r) {
					let t = e.match("^u?int([0-9]+)$");
					return t && parseInt(t[1]) <= 48 && (r = r.toNumber()), r
				}
				coerce(e, r) {
					return this._coerceFunc ? this._coerceFunc(e, r) : d.coerce(e, r)
				}
				_peekBytes(e, r, t) {
					let o = Math.ceil(r / this.wordSize) * this.wordSize;
					return this._offset + o > this._data.length && (this.allowLoose && t && this._offset + r <= this._data.length ? o = r : l.throwError("data out-of-bounds", a.a.errors.BUFFER_OVERRUN, {
						length: this._data.length,
						offset: this._offset + o
					})), this._data.slice(this._offset, this._offset + o)
				}
				subReader(e) {
					return new d(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
				}
				readBytes(e, r) {
					let t = this._peekBytes(0, e, !!r);
					return this._offset += t.length, t.slice(0, e)
				}
				readValue() {
					return n.a.from(this.readBytes(this.wordSize))
				}
			}
		},
		"./node_modules/@ethersproject/abi/lib.esm/fragments.js": function(e, r, t) {
			"use strict";
			t.d(r, "d", (function() {
				return f
			})), t.d(r, "g", (function() {
				return g
			})), t.d(r, "e", (function() {
				return b
			})), t.d(r, "c", (function() {
				return E
			})), t.d(r, "a", (function() {
				return O
			})), t.d(r, "f", (function() {
				return R
			})), t.d(r, "b", (function() {
				return T
			}));
			var o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				n = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/abi/node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/abi/lib.esm/_version.js");
			const s = new i.a(a.a),
				l = {};
			let c = {
					calldata: !0,
					memory: !0,
					storage: !0
				},
				u = {
					calldata: !0,
					memory: !0
				};

			function h(e, r) {
				if ("bytes" === e || "string" === e) {
					if (c[r]) return !0
				} else if ("address" === e) {
					if ("payable" === r) return !0
				} else if ((e.indexOf("[") >= 0 || "tuple" === e) && u[r]) return !0;
				return (c[r] || "payable" === r) && s.throwArgumentError("invalid modifier", "name", r), !1
			}

			function d(e, r) {
				for (let t in r) Object(n.defineReadOnly)(e, t, r[t])
			}
			const f = Object.freeze({
					sighash: "sighash",
					minimal: "minimal",
					full: "full",
					json: "json"
				}),
				m = new RegExp(/^(.*)\[([0-9]*)\]$/);
			class g {
				constructor(e, r) {
					e !== l && s.throwError("use fromString", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new ParamType()"
					}), d(this, r);
					let t = this.type.match(m);
					d(this, t ? {
						arrayLength: parseInt(t[2] || "-1"),
						arrayChildren: g.fromObject({
							type: t[1],
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
					if (e || (e = f.sighash), f[e] || s.throwArgumentError("invalid format type", "format", e), e === f.json) {
						let r = {
							type: "tuple" === this.baseType ? "tuple" : this.type,
							name: this.name || void 0
						};
						return "boolean" == typeof this.indexed && (r.indexed = this.indexed), this.components && (r.components = this.components.map(r => JSON.parse(r.format(e)))), JSON.stringify(r)
					}
					let r = "";
					return "array" === this.baseType ? (r += this.arrayChildren.format(e), r += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== f.sighash && (r += this.type), r += "(" + this.components.map(r => r.format(e)).join(e === f.full ? ", " : ",") + ")") : r += this.type, e !== f.sighash && (!0 === this.indexed && (r += " indexed"), e === f.full && this.name && (r += " " + this.name)), r
				}
				static from(e, r) {
					return "string" == typeof e ? g.fromString(e, r) : g.fromObject(e)
				}
				static fromObject(e) {
					return g.isParamType(e) ? e : new g(l, {
						name: e.name || null,
						type: S(e.type),
						indexed: null == e.indexed ? null : !!e.indexed,
						components: e.components ? e.components.map(g.fromObject) : null
					})
				}
				static fromString(e, r) {
					return function(e) {
						return g.fromObject({
							name: e.name,
							type: e.type,
							indexed: e.indexed,
							components: e.components
						})
					}(function(e, r) {
						let t = e;

						function o(r) {
							s.throwArgumentError(`unexpected character at position ${r}`, "param", e)
						}

						function n(e) {
							let t = {
								type: "",
								name: "",
								parent: e,
								state: {
									allowType: !0
								}
							};
							return r && (t.indexed = !1), t
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
							let t = e[s];
							switch (t) {
								case "(":
									a.state.allowType && "" === a.type ? a.type = "tuple" : a.state.allowParams || o(s), a.state.allowType = !1, a.type = S(a.type), a.components = [n(a)], a = a.components[0];
									break;
								case ")":
									delete a.state, "indexed" === a.name && (r || o(s), a.indexed = !0, a.name = ""), h(a.type, a.name) && (a.name = ""), a.type = S(a.type);
									let e = a;
									(a = a.parent) || o(s), delete e.parent, a.state.allowParams = !1, a.state.allowName = !0, a.state.allowArray = !0;
									break;
								case ",":
									delete a.state, "indexed" === a.name && (r || o(s), a.indexed = !0, a.name = ""), h(a.type, a.name) && (a.name = ""), a.type = S(a.type);
									let i = n(a.parent);
									a.parent.components.push(i), delete a.parent, a = i;
									break;
								case " ":
									a.state.allowType && "" !== a.type && (a.type = S(a.type), delete a.state.allowType, a.state.allowName = !0, a.state.allowParams = !0), a.state.allowName && "" !== a.name && ("indexed" === a.name ? (r || o(s), a.indexed && o(s), a.indexed = !0, a.name = "") : h(a.type, a.name) ? a.name = "" : a.state.allowName = !1);
									break;
								case "[":
									a.state.allowArray || o(s), a.type += t, a.state.allowArray = !1, a.state.allowName = !1, a.state.readArray = !0;
									break;
								case "]":
									a.state.readArray || o(s), a.type += t, a.state.readArray = !1, a.state.allowArray = !0, a.state.allowName = !0;
									break;
								default:
									a.state.allowType ? (a.type += t, a.state.allowParams = !0, a.state.allowArray = !0) : a.state.allowName ? (a.name += t, delete a.state.allowArray) : a.state.readArray ? a.type += t : o(s)
							}
						}
						return a.parent && s.throwArgumentError("unexpected eof", "param", e), delete i.state, "indexed" === a.name ? (r || o(t.length - 7), a.indexed && o(t.length - 7), a.indexed = !0, a.name = "") : h(a.type, a.name) && (a.name = ""), i.type = S(i.type), i
					}(e, !!r))
				}
				static isParamType(e) {
					return !(null == e || !e._isParamType)
				}
			}

			function p(e, r) {
				return function(e) {
					e = e.trim();
					let r = [],
						t = "",
						o = 0;
					for (let n = 0; n < e.length; n++) {
						let i = e[n];
						"," === i && 0 === o ? (r.push(t), t = "") : (t += i, "(" === i ? o++ : ")" === i && -1 === --o && s.throwArgumentError("unbalanced parenthesis", "value", e))
					}
					t && r.push(t);
					return r
				}(e).map(e => g.fromString(e, r))
			}
			class b {
				constructor(e, r) {
					e !== l && s.throwError("use a static from method", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new Fragment()"
					}), d(this, r), this._isFragment = !0, Object.freeze(this)
				}
				static from(e) {
					return b.isFragment(e) ? e : "string" == typeof e ? b.fromString(e) : b.fromObject(e)
				}
				static fromObject(e) {
					if (b.isFragment(e)) return e;
					switch (e.type) {
						case "function":
							return R.fromObject(e);
						case "event":
							return E.fromObject(e);
						case "constructor":
							return O.fromObject(e);
						case "error":
							return T.fromObject(e);
						case "fallback":
						case "receive":
							return null
					}
					return s.throwArgumentError("invalid fragment object", "value", e)
				}
				static fromString(e) {
					return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? E.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? R.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? O.fromString(e.trim()) : "error" === e.split(" ")[0] ? T.fromString(e.substring(5).trim()) : s.throwArgumentError("unsupported fragment", "value", e)
				}
				static isFragment(e) {
					return !(!e || !e._isFragment)
				}
			}
			class E extends b {
				format(e) {
					if (e || (e = f.sighash), f[e] || s.throwArgumentError("invalid format type", "format", e), e === f.json) return JSON.stringify({
						type: "event",
						anonymous: this.anonymous,
						name: this.name,
						inputs: this.inputs.map(r => JSON.parse(r.format(e)))
					});
					let r = "";
					return e !== f.sighash && (r += "event "), r += this.name + "(" + this.inputs.map(r => r.format(e)).join(e === f.full ? ", " : ",") + ") ", e !== f.sighash && this.anonymous && (r += "anonymous "), r.trim()
				}
				static from(e) {
					return "string" == typeof e ? E.fromString(e) : E.fromObject(e)
				}
				static fromObject(e) {
					if (E.isEventFragment(e)) return e;
					"event" !== e.type && s.throwArgumentError("invalid event object", "value", e);
					const r = {
						name: P(e.name),
						anonymous: e.anonymous,
						inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
						type: "event"
					};
					return new E(l, r)
				}
				static fromString(e) {
					let r = e.match(C);
					r || s.throwArgumentError("invalid event string", "value", e);
					let t = !1;
					return r[3].split(" ").forEach(e => {
						switch (e.trim()) {
							case "anonymous":
								t = !0;
								break;
							case "":
								break;
							default:
								s.warn("unknown modifier: " + e)
						}
					}), E.fromObject({
						name: r[1].trim(),
						anonymous: t,
						inputs: p(r[2], !0),
						type: "event"
					})
				}
				static isEventFragment(e) {
					return e && e._isFragment && "event" === e.type
				}
			}

			function v(e, r) {
				r.gas = null;
				let t = e.split("@");
				return 1 !== t.length ? (t.length > 2 && s.throwArgumentError("invalid human-readable ABI signature", "value", e), t[1].match(/^[0-9]+$/) || s.throwArgumentError("invalid human-readable ABI signature gas", "value", e), r.gas = o.a.from(t[1]), t[0]) : e
			}

			function N(e, r) {
				r.constant = !1, r.payable = !1, r.stateMutability = "nonpayable", e.split(" ").forEach(e => {
					switch (e.trim()) {
						case "constant":
							r.constant = !0;
							break;
						case "payable":
							r.payable = !0, r.stateMutability = "payable";
							break;
						case "nonpayable":
							r.payable = !1, r.stateMutability = "nonpayable";
							break;
						case "pure":
							r.constant = !0, r.stateMutability = "pure";
							break;
						case "view":
							r.constant = !0, r.stateMutability = "view";
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

			function y(e) {
				let r = {
					constant: !1,
					payable: !0,
					stateMutability: "payable"
				};
				return null != e.stateMutability ? (r.stateMutability = e.stateMutability, r.constant = "view" === r.stateMutability || "pure" === r.stateMutability, null != e.constant && !!e.constant !== r.constant && s.throwArgumentError("cannot have constant function with mutability " + r.stateMutability, "value", e), r.payable = "payable" === r.stateMutability, null != e.payable && !!e.payable !== r.payable && s.throwArgumentError("cannot have payable function with mutability " + r.stateMutability, "value", e)) : null != e.payable ? (r.payable = !!e.payable, null != e.constant || r.payable || "constructor" === e.type || s.throwArgumentError("unable to determine stateMutability", "value", e), r.constant = !!e.constant, r.constant ? r.stateMutability = "view" : r.stateMutability = r.payable ? "payable" : "nonpayable", r.payable && r.constant && s.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (r.constant = !!e.constant, r.payable = !r.constant, r.stateMutability = r.constant ? "view" : "payable") : "constructor" !== e.type && s.throwArgumentError("unable to determine stateMutability", "value", e), r
			}
			class O extends b {
				format(e) {
					if (e || (e = f.sighash), f[e] || s.throwArgumentError("invalid format type", "format", e), e === f.json) return JSON.stringify({
						type: "constructor",
						stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
						payable: this.payable,
						gas: this.gas ? this.gas.toNumber() : void 0,
						inputs: this.inputs.map(r => JSON.parse(r.format(e)))
					});
					e === f.sighash && s.throwError("cannot format a constructor for sighash", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "format(sighash)"
					});
					let r = "constructor(" + this.inputs.map(r => r.format(e)).join(e === f.full ? ", " : ",") + ") ";
					return this.stateMutability && "nonpayable" !== this.stateMutability && (r += this.stateMutability + " "), r.trim()
				}
				static from(e) {
					return "string" == typeof e ? O.fromString(e) : O.fromObject(e)
				}
				static fromObject(e) {
					if (O.isConstructorFragment(e)) return e;
					"constructor" !== e.type && s.throwArgumentError("invalid constructor object", "value", e);
					let r = y(e);
					r.constant && s.throwArgumentError("constructor cannot be constant", "value", e);
					const t = {
						name: null,
						type: e.type,
						inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
						payable: r.payable,
						stateMutability: r.stateMutability,
						gas: e.gas ? o.a.from(e.gas) : null
					};
					return new O(l, t)
				}
				static fromString(e) {
					let r = {
							type: "constructor"
						},
						t = (e = v(e, r)).match(C);
					return t && "constructor" === t[1].trim() || s.throwArgumentError("invalid constructor string", "value", e), r.inputs = p(t[2].trim(), !1), N(t[3].trim(), r), O.fromObject(r)
				}
				static isConstructorFragment(e) {
					return e && e._isFragment && "constructor" === e.type
				}
			}
			class R extends O {
				format(e) {
					if (e || (e = f.sighash), f[e] || s.throwArgumentError("invalid format type", "format", e), e === f.json) return JSON.stringify({
						type: "function",
						name: this.name,
						constant: this.constant,
						stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
						payable: this.payable,
						gas: this.gas ? this.gas.toNumber() : void 0,
						inputs: this.inputs.map(r => JSON.parse(r.format(e))),
						outputs: this.outputs.map(r => JSON.parse(r.format(e)))
					});
					let r = "";
					return e !== f.sighash && (r += "function "), r += this.name + "(" + this.inputs.map(r => r.format(e)).join(e === f.full ? ", " : ",") + ") ", e !== f.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (r += this.stateMutability + " ") : this.constant && (r += "view "), this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map(r => r.format(e)).join(", ") + ") "), null != this.gas && (r += "@" + this.gas.toString() + " ")), r.trim()
				}
				static from(e) {
					return "string" == typeof e ? R.fromString(e) : R.fromObject(e)
				}
				static fromObject(e) {
					if (R.isFunctionFragment(e)) return e;
					"function" !== e.type && s.throwArgumentError("invalid function object", "value", e);
					let r = y(e);
					const t = {
						type: e.type,
						name: P(e.name),
						constant: r.constant,
						inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
						outputs: e.outputs ? e.outputs.map(g.fromObject) : [],
						payable: r.payable,
						stateMutability: r.stateMutability,
						gas: e.gas ? o.a.from(e.gas) : null
					};
					return new R(l, t)
				}
				static fromString(e) {
					let r = {
							type: "function"
						},
						t = (e = v(e, r)).split(" returns ");
					t.length > 2 && s.throwArgumentError("invalid function string", "value", e);
					let o = t[0].match(C);
					if (o || s.throwArgumentError("invalid function signature", "value", e), r.name = o[1].trim(), r.name && P(r.name), r.inputs = p(o[2], !1), N(o[3].trim(), r), t.length > 1) {
						let o = t[1].match(C);
						"" == o[1].trim() && "" == o[3].trim() || s.throwArgumentError("unexpected tokens", "value", e), r.outputs = p(o[2], !1)
					} else r.outputs = [];
					return R.fromObject(r)
				}
				static isFunctionFragment(e) {
					return e && e._isFragment && "function" === e.type
				}
			}

			function A(e) {
				const r = e.format();
				return "Error(string)" !== r && "Panic(uint256)" !== r || s.throwArgumentError(`cannot specify user defined ${r} error`, "fragment", e), e
			}
			class T extends b {
				format(e) {
					if (e || (e = f.sighash), f[e] || s.throwArgumentError("invalid format type", "format", e), e === f.json) return JSON.stringify({
						type: "error",
						name: this.name,
						inputs: this.inputs.map(r => JSON.parse(r.format(e)))
					});
					let r = "";
					return e !== f.sighash && (r += "error "), (r += this.name + "(" + this.inputs.map(r => r.format(e)).join(e === f.full ? ", " : ",") + ") ").trim()
				}
				static from(e) {
					return "string" == typeof e ? T.fromString(e) : T.fromObject(e)
				}
				static fromObject(e) {
					if (T.isErrorFragment(e)) return e;
					"error" !== e.type && s.throwArgumentError("invalid error object", "value", e);
					const r = {
						type: e.type,
						name: P(e.name),
						inputs: e.inputs ? e.inputs.map(g.fromObject) : []
					};
					return A(new T(l, r))
				}
				static fromString(e) {
					let r = {
							type: "error"
						},
						t = e.match(C);
					return t || s.throwArgumentError("invalid error signature", "value", e), r.name = t[1].trim(), r.name && P(r.name), r.inputs = p(t[2], !1), A(T.fromObject(r))
				}
				static isErrorFragment(e) {
					return e && e._isFragment && "error" === e.type
				}
			}

			function S(e) {
				return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
			}
			const w = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

			function P(e) {
				return e && e.match(w) || s.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
			}
			const C = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")
		},
		"./node_modules/@ethersproject/abi/lib.esm/interface.js": function(e, r, t) {
			"use strict";
			t.d(r, "c", (function() {
				return m
			})), t.d(r, "d", (function() {
				return g
			})), t.d(r, "a", (function() {
				return b
			})), t.d(r, "b", (function() {
				return N
			}));
			var o = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				s = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				c = t("./node_modules/@ethersproject/abi/lib.esm/abi-coder.js"),
				u = t("./node_modules/@ethersproject/abi/lib.esm/fragments.js"),
				h = t("./node_modules/@ethersproject/abi/node_modules/@ethersproject/logger/lib.esm/index.js"),
				d = t("./node_modules/@ethersproject/abi/lib.esm/_version.js");
			const f = new h.a(d.a);
			class m extends l.Description {}
			class g extends l.Description {}
			class p extends l.Description {}
			class b extends l.Description {
				static isIndexed(e) {
					return !(!e || !e._isIndexed)
				}
			}
			const E = {
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

			function v(e, r) {
				const t = new Error(`deferred error during ABI decoding triggered accessing ${e}`);
				return t.error = r, t
			}
			class N {
				constructor(e) {
					f.checkNew(new.target, N);
					let r = [];
					r = "string" == typeof e ? JSON.parse(e) : e, Object(l.defineReadOnly)(this, "fragments", r.map(e => u.e.from(e)).filter(e => null != e)), Object(l.defineReadOnly)(this, "_abiCoder", Object(l.getStatic)(new.target, "getAbiCoder")()), Object(l.defineReadOnly)(this, "functions", {}), Object(l.defineReadOnly)(this, "errors", {}), Object(l.defineReadOnly)(this, "events", {}), Object(l.defineReadOnly)(this, "structs", {}), this.fragments.forEach(e => {
						let r = null;
						switch (e.type) {
							case "constructor":
								return this.deploy ? void f.warn("duplicate definition - constructor") : void Object(l.defineReadOnly)(this, "deploy", e);
							case "function":
								r = this.functions;
								break;
							case "event":
								r = this.events;
								break;
							case "error":
								r = this.errors;
								break;
							default:
								return
						}
						let t = e.format();
						r[t] ? f.warn("duplicate definition - " + t) : r[t] = e
					}), this.deploy || Object(l.defineReadOnly)(this, "deploy", u.a.from({
						payable: !1,
						type: "constructor"
					})), Object(l.defineReadOnly)(this, "_isInterface", !0)
				}
				format(e) {
					e || (e = u.d.full), e === u.d.sighash && f.throwArgumentError("interface does not support formatting sighash", "format", e);
					const r = this.fragments.map(r => r.format(e));
					return e === u.d.json ? JSON.stringify(r.map(e => JSON.parse(e))) : r
				}
				static getAbiCoder() {
					return c.b
				}
				static getAddress(e) {
					return Object(o.getAddress)(e)
				}
				static getSighash(e) {
					return Object(i.hexDataSlice)(Object(a.a)(e.format()), 0, 4)
				}
				static getEventTopic(e) {
					return Object(a.a)(e.format())
				}
				getFunction(e) {
					if (Object(i.isHexString)(e)) {
						for (const r in this.functions)
							if (e === this.getSighash(r)) return this.functions[r];
						f.throwArgumentError("no matching function", "sighash", e)
					}
					if (-1 === e.indexOf("(")) {
						const r = e.trim(),
							t = Object.keys(this.functions).filter(e => e.split("(")[0] === r);
						return 0 === t.length ? f.throwArgumentError("no matching function", "name", r) : t.length > 1 && f.throwArgumentError("multiple matching functions", "name", r), this.functions[t[0]]
					}
					const r = this.functions[u.f.fromString(e).format()];
					return r || f.throwArgumentError("no matching function", "signature", e), r
				}
				getEvent(e) {
					if (Object(i.isHexString)(e)) {
						const r = e.toLowerCase();
						for (const e in this.events)
							if (r === this.getEventTopic(e)) return this.events[e];
						f.throwArgumentError("no matching event", "topichash", r)
					}
					if (-1 === e.indexOf("(")) {
						const r = e.trim(),
							t = Object.keys(this.events).filter(e => e.split("(")[0] === r);
						return 0 === t.length ? f.throwArgumentError("no matching event", "name", r) : t.length > 1 && f.throwArgumentError("multiple matching events", "name", r), this.events[t[0]]
					}
					const r = this.events[u.c.fromString(e).format()];
					return r || f.throwArgumentError("no matching event", "signature", e), r
				}
				getError(e) {
					if (Object(i.isHexString)(e)) {
						const r = Object(l.getStatic)(this.constructor, "getSighash");
						for (const t in this.errors) {
							if (e === r(this.errors[t])) return this.errors[t]
						}
						f.throwArgumentError("no matching error", "sighash", e)
					}
					if (-1 === e.indexOf("(")) {
						const r = e.trim(),
							t = Object.keys(this.errors).filter(e => e.split("(")[0] === r);
						return 0 === t.length ? f.throwArgumentError("no matching error", "name", r) : t.length > 1 && f.throwArgumentError("multiple matching errors", "name", r), this.errors[t[0]]
					}
					const r = this.errors[u.f.fromString(e).format()];
					return r || f.throwArgumentError("no matching error", "signature", e), r
				}
				getSighash(e) {
					if ("string" == typeof e) try {
						e = this.getFunction(e)
					} catch (r) {
						try {
							e = this.getError(e)
						} catch (t) {
							throw r
						}
					}
					return Object(l.getStatic)(this.constructor, "getSighash")(e)
				}
				getEventTopic(e) {
					return "string" == typeof e && (e = this.getEvent(e)), Object(l.getStatic)(this.constructor, "getEventTopic")(e)
				}
				_decodeParams(e, r) {
					return this._abiCoder.decode(e, r)
				}
				_encodeParams(e, r) {
					return this._abiCoder.encode(e, r)
				}
				encodeDeploy(e) {
					return this._encodeParams(this.deploy.inputs, e || [])
				}
				decodeErrorResult(e, r) {
					"string" == typeof e && (e = this.getError(e));
					const t = Object(i.arrayify)(r);
					return Object(i.hexlify)(t.slice(0, 4)) !== this.getSighash(e) && f.throwArgumentError(`data signature does not match error ${e.name}.`, "data", Object(i.hexlify)(t)), this._decodeParams(e.inputs, t.slice(4))
				}
				encodeErrorResult(e, r) {
					return "string" == typeof e && (e = this.getError(e)), Object(i.hexlify)(Object(i.concat)([this.getSighash(e), this._encodeParams(e.inputs, r || [])]))
				}
				decodeFunctionData(e, r) {
					"string" == typeof e && (e = this.getFunction(e));
					const t = Object(i.arrayify)(r);
					return Object(i.hexlify)(t.slice(0, 4)) !== this.getSighash(e) && f.throwArgumentError(`data signature does not match function ${e.name}.`, "data", Object(i.hexlify)(t)), this._decodeParams(e.inputs, t.slice(4))
				}
				encodeFunctionData(e, r) {
					return "string" == typeof e && (e = this.getFunction(e)), Object(i.hexlify)(Object(i.concat)([this.getSighash(e), this._encodeParams(e.inputs, r || [])]))
				}
				decodeFunctionResult(e, r) {
					"string" == typeof e && (e = this.getFunction(e));
					let t = Object(i.arrayify)(r),
						o = null,
						n = null,
						a = null,
						s = null;
					switch (t.length % this._abiCoder._getWordSize()) {
						case 0:
							try {
								return this._abiCoder.decode(e.outputs, t)
							} catch (l) {}
							break;
						case 4: {
							const e = Object(i.hexlify)(t.slice(0, 4)),
								r = E[e];
							if (r) n = this._abiCoder.decode(r.inputs, t.slice(4)), a = r.name, s = r.signature, r.reason && (o = n[0]);
							else try {
								const r = this.getError(e);
								n = this._abiCoder.decode(r.inputs, t.slice(4)), a = r.name, s = r.format()
							} catch (l) {
								console.log(l)
							}
							break
						}
					}
					return f.throwError("call revert exception", h.a.errors.CALL_EXCEPTION, {
						method: e.format(),
						errorArgs: n,
						errorName: a,
						errorSignature: s,
						reason: o
					})
				}
				encodeFunctionResult(e, r) {
					return "string" == typeof e && (e = this.getFunction(e)), Object(i.hexlify)(this._abiCoder.encode(e.outputs, r || []))
				}
				encodeFilterTopics(e, r) {
					"string" == typeof e && (e = this.getEvent(e)), r.length > e.inputs.length && f.throwError("too many arguments for " + e.format(), h.a.errors.UNEXPECTED_ARGUMENT, {
						argument: "values",
						value: r
					});
					let t = [];
					e.anonymous || t.push(this.getEventTopic(e));
					const o = (e, r) => "string" === e.type ? Object(a.a)(r) : "bytes" === e.type ? Object(s.keccak256)(Object(i.hexlify)(r)) : ("address" === e.type && this._abiCoder.encode(["address"], [r]), Object(i.hexZeroPad)(Object(i.hexlify)(r), 32));
					for (r.forEach((r, n) => {
							let i = e.inputs[n];
							i.indexed ? null == r ? t.push(null) : "array" === i.baseType || "tuple" === i.baseType ? f.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, r) : Array.isArray(r) ? t.push(r.map(e => o(i, e))) : t.push(o(i, r)) : null != r && f.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, r)
						}); t.length && null === t[t.length - 1];) t.pop();
					return t
				}
				encodeEventLog(e, r) {
					"string" == typeof e && (e = this.getEvent(e));
					const t = [],
						o = [],
						n = [];
					return e.anonymous || t.push(this.getEventTopic(e)), r.length !== e.inputs.length && f.throwArgumentError("event arguments/values mismatch", "values", r), e.inputs.forEach((e, i) => {
						const l = r[i];
						if (e.indexed)
							if ("string" === e.type) t.push(Object(a.a)(l));
							else if ("bytes" === e.type) t.push(Object(s.keccak256)(l));
						else {
							if ("tuple" === e.baseType || "array" === e.baseType) throw new Error("not implemented");
							t.push(this._abiCoder.encode([e.type], [l]))
						} else o.push(e), n.push(l)
					}), {
						data: this._abiCoder.encode(o, n),
						topics: t
					}
				}
				decodeEventLog(e, r, t) {
					if ("string" == typeof e && (e = this.getEvent(e)), null != t && !e.anonymous) {
						let r = this.getEventTopic(e);
						Object(i.isHexString)(t[0], 32) && t[0].toLowerCase() === r || f.throwError("fragment/topic mismatch", h.a.errors.INVALID_ARGUMENT, {
							argument: "topics[0]",
							expected: r,
							value: t[0]
						}), t = t.slice(1)
					}
					let o = [],
						n = [],
						a = [];
					e.inputs.forEach((e, r) => {
						e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (o.push(u.g.fromObject({
							type: "bytes32",
							name: e.name
						})), a.push(!0)) : (o.push(e), a.push(!1)) : (n.push(e), a.push(!1))
					});
					let s = null != t ? this._abiCoder.decode(o, Object(i.concat)(t)) : null,
						l = this._abiCoder.decode(n, r, !0),
						c = [],
						d = 0,
						m = 0;
					e.inputs.forEach((e, r) => {
						if (e.indexed)
							if (null == s) c[r] = new b({
								_isIndexed: !0,
								hash: null
							});
							else if (a[r]) c[r] = new b({
							_isIndexed: !0,
							hash: s[m++]
						});
						else try {
							c[r] = s[m++]
						} catch (t) {
							c[r] = t
						} else try {
							c[r] = l[d++]
						} catch (t) {
							c[r] = t
						}
						if (e.name && null == c[e.name]) {
							const t = c[r];
							t instanceof Error ? Object.defineProperty(c, e.name, {
								enumerable: !0,
								get: () => {
									throw v(`property ${JSON.stringify(e.name)}`, t)
								}
							}) : c[e.name] = t
						}
					});
					for (let i = 0; i < c.length; i++) {
						const e = c[i];
						e instanceof Error && Object.defineProperty(c, i, {
							enumerable: !0,
							get: () => {
								throw v(`index ${i}`, e)
							}
						})
					}
					return Object.freeze(c)
				}
				parseTransaction(e) {
					let r = this.getFunction(e.data.substring(0, 10).toLowerCase());
					return r ? new g({
						args: this._abiCoder.decode(r.inputs, "0x" + e.data.substring(10)),
						functionFragment: r,
						name: r.name,
						signature: r.format(),
						sighash: this.getSighash(r),
						value: n.a.from(e.value || "0")
					}) : null
				}
				parseLog(e) {
					let r = this.getEvent(e.topics[0]);
					return !r || r.anonymous ? null : new m({
						eventFragment: r,
						name: r.name,
						signature: r.format(),
						topic: this.getEventTopic(r),
						args: this.decodeEventLog(r, e.data, e.topics)
					})
				}
				parseError(e) {
					const r = Object(i.hexlify)(e);
					let t = this.getError(r.substring(0, 10).toLowerCase());
					return t ? new p({
						args: this._abiCoder.decode(t.inputs, "0x" + r.substring(10)),
						errorFragment: t,
						name: t.name,
						signature: t.format(),
						sighash: this.getSighash(t)
					}) : null
				}
				static isInterface(e) {
					return !(!e || !e._isInterface)
				}
			}
		},
		"./node_modules/@ethersproject/abi/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u
		},
		"./node_modules/@ethersproject/abstract-provider/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return E
			})), t.d(r, "b", (function() {
				return v
			}));
			var o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				n = (t("./node_modules/@ethersproject/bytes/lib.esm/index.js"), t("./node_modules/@ethersproject/properties/lib.esm/index.js"));
			const i = "logger/5.4.1";
			let a = !1,
				s = !1;
			const l = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let c = l.default,
				u = null;
			const h = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var d, f;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(d || (d = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(f || (f = {}));
			const m = "0123456789abcdef";
			class g {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == l[t] && this.throwArgumentError("invalid log level name", "logLevel", e), c > l[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(g.levels.DEBUG, e)
				}
				info(...e) {
					this._log(g.levels.INFO, e)
				}
				warn(...e) {
					this._log(g.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (s) return this.makeError("censored error", r, {});
					r || (r = g.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += m[r[e] >> 4], t += m[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, g.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", g.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: h
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, g.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, g.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, g.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, g.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", g.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", g.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", g.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return u || (u = new g(i)), u
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", g.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), a) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", g.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!e, a = !!r
				}
				static setLogLevel(e) {
					const r = l[e.toLowerCase()];
					null != r ? c = r : g.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new g(e)
				}
			}
			g.errors = f, g.levels = d;
			var p = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const b = new g("abstract-provider/5.4.1");
			class E extends n.Description {
				static isForkEvent(e) {
					return !(!e || !e._isForkEvent)
				}
			}
			class v {
				constructor() {
					b.checkAbstract(new.target, v), Object(n.defineReadOnly)(this, "_isProvider", !0)
				}
				getFeeData() {
					return p(this, void 0, void 0, (function*() {
						const {
							block: e,
							gasPrice: r
						} = yield Object(n.resolveProperties)({
							block: this.getBlock("latest"),
							gasPrice: this.getGasPrice().catch(e => null)
						});
						let t = null,
							i = null;
						return e && e.baseFeePerGas && (i = o.a.from("2500000000"), t = e.baseFeePerGas.mul(2).add(i)), {
							maxFeePerGas: t,
							maxPriorityFeePerGas: i,
							gasPrice: r
						}
					}))
				}
				addListener(e, r) {
					return this.on(e, r)
				}
				removeListener(e, r) {
					return this.off(e, r)
				}
				static isProvider(e) {
					return !(!e || !e._isProvider)
				}
			}
		},
		"./node_modules/@ethersproject/abstract-signer/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return v
			})), t.d(r, "b", (function() {
				return N
			}));
			var o = t("./node_modules/@ethersproject/properties/lib.esm/index.js");
			const n = "logger/5.4.1";
			let i = !1,
				a = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let l = s.default,
				c = null;
			const u = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var h, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(h || (h = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			const f = "0123456789abcdef";
			class m {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), l > s[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(m.levels.DEBUG, e)
				}
				info(...e) {
					this._log(m.levels.INFO, e)
				}
				warn(...e) {
					this._log(m.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (a) return this.makeError("censored error", r, {});
					r || (r = m.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += f[r[e] >> 4], t += f[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, m.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return c || (c = new m(n)), c
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), i) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					a = !!e, i = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? l = r : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = d, m.levels = h;
			var g = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const p = new m("abstract-signer/5.4.1"),
				b = ["accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
				E = [m.errors.INSUFFICIENT_FUNDS, m.errors.NONCE_EXPIRED, m.errors.REPLACEMENT_UNDERPRICED];
			class v {
				constructor() {
					p.checkAbstract(new.target, v), Object(o.defineReadOnly)(this, "_isSigner", !0)
				}
				getBalance(e) {
					return g(this, void 0, void 0, (function*() {
						return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
					}))
				}
				getTransactionCount(e) {
					return g(this, void 0, void 0, (function*() {
						return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
					}))
				}
				estimateGas(e) {
					return g(this, void 0, void 0, (function*() {
						this._checkProvider("estimateGas");
						const r = yield Object(o.resolveProperties)(this.checkTransaction(e));
						return yield this.provider.estimateGas(r)
					}))
				}
				call(e, r) {
					return g(this, void 0, void 0, (function*() {
						this._checkProvider("call");
						const t = yield Object(o.resolveProperties)(this.checkTransaction(e));
						return yield this.provider.call(t, r)
					}))
				}
				sendTransaction(e) {
					return g(this, void 0, void 0, (function*() {
						this._checkProvider("sendTransaction");
						const r = yield this.populateTransaction(e), t = yield this.signTransaction(r);
						return yield this.provider.sendTransaction(t)
					}))
				}
				getChainId() {
					return g(this, void 0, void 0, (function*() {
						return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
					}))
				}
				getGasPrice() {
					return g(this, void 0, void 0, (function*() {
						return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
					}))
				}
				getFeeData() {
					return g(this, void 0, void 0, (function*() {
						return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
					}))
				}
				resolveName(e) {
					return g(this, void 0, void 0, (function*() {
						return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
					}))
				}
				checkTransaction(e) {
					for (const t in e) - 1 === b.indexOf(t) && p.throwArgumentError("invalid transaction key: " + t, "transaction", e);
					const r = Object(o.shallowCopy)(e);
					return null == r.from ? r.from = this.getAddress() : r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then(r => (r[0].toLowerCase() !== r[1].toLowerCase() && p.throwArgumentError("from address mismatch", "transaction", e), r[0])), r
				}
				populateTransaction(e) {
					return g(this, void 0, void 0, (function*() {
						const r = yield Object(o.resolveProperties)(this.checkTransaction(e));
						null != r.to && (r.to = Promise.resolve(r.to).then(e => g(this, void 0, void 0, (function*() {
							if (null == e) return null;
							const r = yield this.resolveName(e);
							return null == r && p.throwArgumentError("provided ENS name resolves to null", "tx.to", e), r
						}))), r.to.catch(e => {}));
						const t = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
						if (null == r.gasPrice || 2 !== r.type && !t ? 0 !== r.type && 1 !== r.type || !t || p.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : p.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e), 2 !== r.type && null != r.type || null == r.maxFeePerGas || null == r.maxPriorityFeePerGas)
							if (0 === r.type || 1 === r.type) null == r.gasPrice && (r.gasPrice = this.getGasPrice());
							else {
								const e = yield this.getFeeData();
								if (null == r.type)
									if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
										if (r.type = 2, null != r.gasPrice) {
											const e = r.gasPrice;
											delete r.gasPrice, r.maxFeePerGas = e, r.maxPriorityFeePerGas = e
										} else null == r.maxFeePerGas && (r.maxFeePerGas = e.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
								else null != e.gasPrice ? (t && p.throwError("network does not support EIP-1559", m.errors.UNSUPPORTED_OPERATION, {
									operation: "populateTransaction"
								}), null == r.gasPrice && (r.gasPrice = e.gasPrice), r.type = 0) : p.throwError("failed to get consistent fee data", m.errors.UNSUPPORTED_OPERATION, {
									operation: "signer.getFeeData"
								});
								else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = e.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
							}
						else r.type = 2;
						return null == r.nonce && (r.nonce = this.getTransactionCount("pending")), null == r.gasLimit && (r.gasLimit = this.estimateGas(r).catch(e => {
							if (E.indexOf(e.code) >= 0) throw e;
							return p.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", m.errors.UNPREDICTABLE_GAS_LIMIT, {
								error: e,
								tx: r
							})
						})), null == r.chainId ? r.chainId = this.getChainId() : r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then(r => (0 !== r[1] && r[0] !== r[1] && p.throwArgumentError("chainId address mismatch", "transaction", e), r[0])), yield Object(o.resolveProperties)(r)
					}))
				}
				_checkProvider(e) {
					this.provider || p.throwError("missing provider", m.errors.UNSUPPORTED_OPERATION, {
						operation: e || "_checkProvider"
					})
				}
				static isSigner(e) {
					return !(!e || !e._isSigner)
				}
			}
			class N extends v {
				constructor(e, r) {
					p.checkNew(new.target, N), super(), Object(o.defineReadOnly)(this, "address", e), Object(o.defineReadOnly)(this, "provider", r || null)
				}
				getAddress() {
					return Promise.resolve(this.address)
				}
				_fail(e, r) {
					return Promise.resolve().then(() => {
						p.throwError(e, m.errors.UNSUPPORTED_OPERATION, {
							operation: r
						})
					})
				}
				signMessage(e) {
					return this._fail("VoidSigner cannot sign messages", "signMessage")
				}
				signTransaction(e) {
					return this._fail("VoidSigner cannot sign transactions", "signTransaction")
				}
				_signTypedData(e, r, t) {
					return this._fail("VoidSigner cannot sign typed data", "signTypedData")
				}
				connect(e) {
					return new N(this.address, e)
				}
			}
		},
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "getAddress", (function() {
				return A
			})), t.d(r, "isAddress", (function() {
				return T
			})), t.d(r, "getIcapAddress", (function() {
				return S
			})), t.d(r, "getContractAddress", (function() {
				return w
			})), t.d(r, "getCreate2Address", (function() {
				return P
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const s = "logger/5.4.1";
			let l = !1,
				c = !1;
			const u = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let h = u.default,
				d = null;
			const f = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var m, g;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(m || (m = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(g || (g = {}));
			const p = "0123456789abcdef";
			class b {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == u[t] && this.throwArgumentError("invalid log level name", "logLevel", e), h > u[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(b.levels.DEBUG, e)
				}
				info(...e) {
					this._log(b.levels.INFO, e)
				}
				warn(...e) {
					this._log(b.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (c) return this.makeError("censored error", r, {});
					r || (r = b.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += p[r[e] >> 4], t += p[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, b.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", b.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: f
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, b.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, b.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, b.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, b.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", b.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", b.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", b.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return d || (d = new b(s)), d
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", b.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), l) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", b.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					c = !!e, l = !!r
				}
				static setLogLevel(e) {
					const r = u[e.toLowerCase()];
					null != r ? h = r : b.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new b(e)
				}
			}
			b.errors = g, b.levels = m;
			const E = new b("address/5.4.0");

			function v(e) {
				Object(o.isHexString)(e, 20) || E.throwArgumentError("invalid address", "address", e);
				const r = (e = e.toLowerCase()).substring(2).split(""),
					t = new Uint8Array(40);
				for (let o = 0; o < 40; o++) t[o] = r[o].charCodeAt(0);
				const n = Object(o.arrayify)(Object(i.keccak256)(t));
				for (let o = 0; o < 40; o += 2) n[o >> 1] >> 4 >= 8 && (r[o] = r[o].toUpperCase()), (15 & n[o >> 1]) >= 8 && (r[o + 1] = r[o + 1].toUpperCase());
				return "0x" + r.join("")
			}
			const N = {};
			for (let C = 0; C < 10; C++) N[String(C)] = String(C);
			for (let C = 0; C < 26; C++) N[String.fromCharCode(65 + C)] = String(10 + C);
			const y = Math.floor((O = 9007199254740991, Math.log10 ? Math.log10(O) : Math.log(O) / Math.LN10));
			var O;

			function R(e) {
				let r = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => N[e]).join("");
				for (; r.length >= y;) {
					let e = r.substring(0, y);
					r = parseInt(e, 10) % 97 + r.substring(e.length)
				}
				let t = String(98 - parseInt(r, 10) % 97);
				for (; t.length < 2;) t = "0" + t;
				return t
			}

			function A(e) {
				let r = null;
				if ("string" != typeof e && E.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), r = v(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== e && E.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== R(e) && E.throwArgumentError("bad icap checksum", "address", e), r = Object(n.c)(e.substring(4)); r.length < 40;) r = "0" + r;
					r = v("0x" + r)
				} else E.throwArgumentError("invalid address", "address", e);
				return r
			}

			function T(e) {
				try {
					return A(e), !0
				} catch (r) {}
				return !1
			}

			function S(e) {
				let r = Object(n.b)(A(e).substring(2)).toUpperCase();
				for (; r.length < 30;) r = "0" + r;
				return "XE" + R("XE00" + r) + r
			}

			function w(e) {
				let r = null;
				try {
					r = A(e.from)
				} catch (s) {
					E.throwArgumentError("missing from address", "transaction", e)
				}
				const t = Object(o.stripZeros)(Object(o.arrayify)(n.a.from(e.nonce).toHexString()));
				return A(Object(o.hexDataSlice)(Object(i.keccak256)(Object(a.encode)([r, t])), 12))
			}

			function P(e, r, t) {
				return 32 !== Object(o.hexDataLength)(r) && E.throwArgumentError("salt must be 32 bytes", "salt", r), 32 !== Object(o.hexDataLength)(t) && E.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", t), A(Object(o.hexDataSlice)(Object(i.keccak256)(Object(o.concat)(["0xff", A(e), r, t])), 12))
			}
		},
		"./node_modules/@ethersproject/basex/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "BaseX", (function() {
				return i
			})), t.d(r, "Base32", (function() {
				return a
			})), t.d(r, "Base58", (function() {
				return s
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/properties/lib.esm/index.js");
			class i {
				constructor(e) {
					Object(n.defineReadOnly)(this, "alphabet", e), Object(n.defineReadOnly)(this, "base", e.length), Object(n.defineReadOnly)(this, "_alphabetMap", {}), Object(n.defineReadOnly)(this, "_leader", e.charAt(0));
					for (let r = 0; r < e.length; r++) this._alphabetMap[e.charAt(r)] = r
				}
				encode(e) {
					let r = Object(o.arrayify)(e);
					if (0 === r.length) return "";
					let t = [0];
					for (let o = 0; o < r.length; ++o) {
						let e = r[o];
						for (let r = 0; r < t.length; ++r) e += t[r] << 8, t[r] = e % this.base, e = e / this.base | 0;
						for (; e > 0;) t.push(e % this.base), e = e / this.base | 0
					}
					let n = "";
					for (let o = 0; 0 === r[o] && o < r.length - 1; ++o) n += this._leader;
					for (let o = t.length - 1; o >= 0; --o) n += this.alphabet[t[o]];
					return n
				}
				decode(e) {
					if ("string" != typeof e) throw new TypeError("Expected String");
					let r = [];
					if (0 === e.length) return new Uint8Array(r);
					r.push(0);
					for (let t = 0; t < e.length; t++) {
						let o = this._alphabetMap[e[t]];
						if (void 0 === o) throw new Error("Non-base" + this.base + " character");
						let n = o;
						for (let e = 0; e < r.length; ++e) n += r[e] * this.base, r[e] = 255 & n, n >>= 8;
						for (; n > 0;) r.push(255 & n), n >>= 8
					}
					for (let t = 0; e[t] === this._leader && t < e.length - 1; ++t) r.push(0);
					return Object(o.arrayify)(new Uint8Array(r.reverse()))
				}
			}
			const a = new i("abcdefghijklmnopqrstuvwxyz234567"),
				s = new i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "bignumber/5.4.2"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, r, t) {
			"use strict";
			t.d(r, "d", (function() {
				return d
			})), t.d(r, "a", (function() {
				return m
			})), t.d(r, "c", (function() {
				return v
			})), t.d(r, "b", (function() {
				return N
			}));
			var o = t("./node_modules/bn.js/lib/bn.js"),
				n = t.n(o),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				l = n.a.BN;
			const c = new a.a(s.a),
				u = {},
				h = 9007199254740991;

			function d(e) {
				return null != e && (m.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(i.isHexString)(e) || "bigint" == typeof e || Object(i.isBytes)(e))
			}
			let f = !1;
			class m {
				constructor(e, r) {
					c.checkNew(new.target, m), e !== u && c.throwError("cannot call constructor directly; use BigNumber.from", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return p(b(this).fromTwos(e))
				}
				toTwos(e) {
					return p(b(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? m.from(this._hex.substring(1)) : this
				}
				add(e) {
					return p(b(this).add(b(e)))
				}
				sub(e) {
					return p(b(this).sub(b(e)))
				}
				div(e) {
					return m.from(e).isZero() && E("division by zero", "div"), p(b(this).div(b(e)))
				}
				mul(e) {
					return p(b(this).mul(b(e)))
				}
				mod(e) {
					const r = b(e);
					return r.isNeg() && E("cannot modulo negative values", "mod"), p(b(this).umod(r))
				}
				pow(e) {
					const r = b(e);
					return r.isNeg() && E("cannot raise to negative values", "pow"), p(b(this).pow(r))
				}
				and(e) {
					const r = b(e);
					return (this.isNegative() || r.isNeg()) && E("cannot 'and' negative values", "and"), p(b(this).and(r))
				}
				or(e) {
					const r = b(e);
					return (this.isNegative() || r.isNeg()) && E("cannot 'or' negative values", "or"), p(b(this).or(r))
				}
				xor(e) {
					const r = b(e);
					return (this.isNegative() || r.isNeg()) && E("cannot 'xor' negative values", "xor"), p(b(this).xor(r))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && E("cannot mask negative values", "mask"), p(b(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && E("cannot shift negative values", "shl"), p(b(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && E("cannot shift negative values", "shr"), p(b(this).shrn(e))
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
						E("overflow", "toNumber", this.toString())
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
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new m(u, g(e)) : e.match(/^-?[0-9]+$/) ? new m(u, g(new l(e))) : c.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && E("underflow", "BigNumber.from", e), (e >= h || e <= -h) && E("overflow", "BigNumber.from", e), m.from(String(e));
					const r = e;
					if ("bigint" == typeof r) return m.from(r.toString());
					if (Object(i.isBytes)(r)) return m.from(Object(i.hexlify)(r));
					if (r)
						if (r.toHexString) {
							const e = r.toHexString();
							if ("string" == typeof e) return m.from(e)
						} else {
							let e = r._hex;
							if (null == e && "BigNumber" === r.type && (e = r.hex), "string" == typeof e && (Object(i.isHexString)(e) || "-" === e[0] && Object(i.isHexString)(e.substring(1)))) return m.from(e)
						} return c.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function g(e) {
				if ("string" != typeof e) return g(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && c.throwArgumentError("invalid hex", "value", e), "0x00" === (e = g(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function p(e) {
				return m.from(g(e))
			}

			function b(e) {
				const r = m.from(e).toHexString();
				return "-" === r[0] ? new l("-" + r.substring(3), 16) : new l(r.substring(2), 16)
			}

			function E(e, r, t) {
				const o = {
					fault: e,
					operation: r
				};
				return null != t && (o.value = t), c.throwError(e, a.a.errors.NUMERIC_FAULT, o)
			}

			function v(e) {
				return new l(e, 36).toString(16)
			}

			function N(e) {
				return new l(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return m
			})), t.d(r, "c", (function() {
				return g
			})), t.d(r, "a", (function() {
				return b
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				a = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
			const s = new n.a(i.a),
				l = {},
				c = a.a.from(0),
				u = a.a.from(-1);

			function h(e, r, t, o) {
				const i = {
					fault: r,
					operation: t
				};
				return void 0 !== o && (i.value = o), s.throwError(e, n.a.errors.NUMERIC_FAULT, i)
			}
			let d = "0";
			for (; d.length < 256;) d += d;

			function f(e) {
				if ("number" != typeof e) try {
					e = a.a.from(e).toNumber()
				} catch (r) {}
				return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + d.substring(0, e) : s.throwArgumentError("invalid decimal size", "decimals", e)
			}

			function m(e, r) {
				null == r && (r = 0);
				const t = f(r),
					o = (e = a.a.from(e)).lt(c);
				o && (e = e.mul(u));
				let n = e.mod(t).toString();
				for (; n.length < t.length - 1;) n = "0" + n;
				n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
				const i = e.div(t).toString();
				return e = 1 === t.length ? i : i + "." + n, o && (e = "-" + e), e
			}

			function g(e, r) {
				null == r && (r = 0);
				const t = f(r);
				"string" == typeof e && e.match(/^-?[0-9.,]+$/) || s.throwArgumentError("invalid decimal value", "value", e);
				const o = "-" === e.substring(0, 1);
				o && (e = e.substring(1)), "." === e && s.throwArgumentError("missing value", "value", e);
				const n = e.split(".");
				n.length > 2 && s.throwArgumentError("too many decimal points", "value", e);
				let i = n[0],
					l = n[1];
				for (i || (i = "0"), l || (l = "0");
					"0" === l[l.length - 1];) l = l.substring(0, l.length - 1);
				for (l.length > t.length - 1 && h("fractional component exceeds decimals", "underflow", "parseFixed"), "" === l && (l = "0"); l.length < t.length - 1;) l += "0";
				const c = a.a.from(i),
					d = a.a.from(l);
				let m = c.mul(t).add(d);
				return o && (m = m.mul(u)), m
			}
			class p {
				constructor(e, r, t, o) {
					e !== l && s.throwError("cannot use FixedFormat constructor; use FixedFormat.from", n.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.signed = r, this.width = t, this.decimals = o, this.name = (r ? "" : "u") + "fixed" + String(t) + "x" + String(o), this._multiplier = f(o), Object.freeze(this)
				}
				static from(e) {
					if (e instanceof p) return e;
					"number" == typeof e && (e = `fixed128x${e}`);
					let r = !0,
						t = 128,
						o = 18;
					if ("string" == typeof e)
						if ("fixed" === e);
						else if ("ufixed" === e) r = !1;
					else {
						const n = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
						n || s.throwArgumentError("invalid fixed format", "format", e), r = "u" !== n[1], t = parseInt(n[2]), o = parseInt(n[3])
					} else if (e) {
						const n = (r, t, o) => null == e[r] ? o : (typeof e[r] !== t && s.throwArgumentError("invalid fixed format (" + r + " not " + t + ")", "format." + r, e[r]), e[r]);
						r = n("signed", "boolean", r), t = n("width", "number", t), o = n("decimals", "number", o)
					}
					return t % 8 && s.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", t), o > 80 && s.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", o), new p(l, r, t, o)
				}
			}
			class b {
				constructor(e, r, t, o) {
					s.checkNew(new.target, b), e !== l && s.throwError("cannot use FixedNumber constructor; use FixedNumber.from", n.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.format = o, this._hex = r, this._value = t, this._isFixedNumber = !0, Object.freeze(this)
				}
				_checkFormat(e) {
					this.format.name !== e.format.name && s.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
				}
				addUnsafe(e) {
					this._checkFormat(e);
					const r = g(this._value, this.format.decimals),
						t = g(e._value, e.format.decimals);
					return b.fromValue(r.add(t), this.format.decimals, this.format)
				}
				subUnsafe(e) {
					this._checkFormat(e);
					const r = g(this._value, this.format.decimals),
						t = g(e._value, e.format.decimals);
					return b.fromValue(r.sub(t), this.format.decimals, this.format)
				}
				mulUnsafe(e) {
					this._checkFormat(e);
					const r = g(this._value, this.format.decimals),
						t = g(e._value, e.format.decimals);
					return b.fromValue(r.mul(t).div(this.format._multiplier), this.format.decimals, this.format)
				}
				divUnsafe(e) {
					this._checkFormat(e);
					const r = g(this._value, this.format.decimals),
						t = g(e._value, e.format.decimals);
					return b.fromValue(r.mul(this.format._multiplier).div(t), this.format.decimals, this.format)
				}
				floor() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let r = b.from(e[0], this.format);
					const t = !e[1].match(/^(0*)$/);
					return this.isNegative() && t && (r = r.subUnsafe(E.toFormat(r.format))), r
				}
				ceiling() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let r = b.from(e[0], this.format);
					const t = !e[1].match(/^(0*)$/);
					return !this.isNegative() && t && (r = r.addUnsafe(E.toFormat(r.format))), r
				}
				round(e) {
					null == e && (e = 0);
					const r = this.toString().split(".");
					if (1 === r.length && r.push("0"), (e < 0 || e > 80 || e % 1) && s.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e) return this;
					const t = b.from("1" + d.substring(0, e), this.format),
						o = v.toFormat(this.format);
					return this.mulUnsafe(t).addUnsafe(o).floor().divUnsafe(t)
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
					e % 8 && s.throwArgumentError("invalid byte width", "width", e);
					const r = a.a.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
					return Object(o.hexZeroPad)(r, e / 8)
				}
				toUnsafeFloat() {
					return parseFloat(this.toString())
				}
				toFormat(e) {
					return b.fromString(this._value, e)
				}
				static fromValue(e, r, t) {
					return null != t || null == r || Object(a.d)(r) || (t = r, r = null), null == r && (r = 0), null == t && (t = "fixed"), b.fromString(m(e, r), p.from(t))
				}
				static fromString(e, r) {
					null == r && (r = "fixed");
					const t = p.from(r),
						n = g(e, t.decimals);
					!t.signed && n.lt(c) && h("unsigned value cannot be negative", "overflow", "value", e);
					let i = null;
					t.signed ? i = n.toTwos(t.width).toHexString() : (i = n.toHexString(), i = Object(o.hexZeroPad)(i, t.width / 8));
					const a = m(n, t.decimals);
					return new b(l, i, a, t)
				}
				static fromBytes(e, r) {
					null == r && (r = "fixed");
					const t = p.from(r);
					if (Object(o.arrayify)(e).length > t.width / 8) throw new Error("overflow");
					let n = a.a.from(e);
					t.signed && (n = n.fromTwos(t.width));
					const i = n.toTwos((t.signed ? 0 : 1) + t.width).toHexString(),
						s = m(n, t.decimals);
					return new b(l, i, s, t)
				}
				static from(e, r) {
					if ("string" == typeof e) return b.fromString(e, r);
					if (Object(o.isBytes)(e)) return b.fromBytes(e, r);
					try {
						return b.fromValue(e, 0, r)
					} catch (t) {
						if (t.code !== n.a.errors.INVALID_ARGUMENT) throw t
					}
					return s.throwArgumentError("invalid FixedNumber value", "value", e)
				}
				static isFixedNumber(e) {
					return !(!e || !e._isFixedNumber)
				}
			}
			const E = b.from(1),
				v = b.from("0.5")
		},
		"./node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "isBytesLike", (function() {
				return b
			})), t.d(r, "isBytes", (function() {
				return E
			})), t.d(r, "arrayify", (function() {
				return v
			})), t.d(r, "concat", (function() {
				return N
			})), t.d(r, "stripZeros", (function() {
				return y
			})), t.d(r, "zeroPad", (function() {
				return O
			})), t.d(r, "isHexString", (function() {
				return R
			})), t.d(r, "hexlify", (function() {
				return T
			})), t.d(r, "hexDataLength", (function() {
				return S
			})), t.d(r, "hexDataSlice", (function() {
				return w
			})), t.d(r, "hexConcat", (function() {
				return P
			})), t.d(r, "hexValue", (function() {
				return C
			})), t.d(r, "hexStripZeros", (function() {
				return I
			})), t.d(r, "hexZeroPad", (function() {
				return _
			})), t.d(r, "splitSignature", (function() {
				return F
			})), t.d(r, "joinSignature", (function() {
				return L
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u;
			const m = new f("bytes/5.4.0");

			function g(e) {
				return !!e.toHexString
			}

			function p(e) {
				return e.slice ? e : (e.slice = function() {
					const r = Array.prototype.slice.call(arguments);
					return p(new Uint8Array(Array.prototype.slice.apply(e, r)))
				}, e)
			}

			function b(e) {
				return R(e) && !(e.length % 2) || E(e)
			}

			function E(e) {
				if (null == e) return !1;
				if (e.constructor === Uint8Array) return !0;
				if ("string" == typeof e) return !1;
				if (null == e.length) return !1;
				for (let r = 0; r < e.length; r++) {
					const t = e[r];
					if ("number" != typeof t || t < 0 || t >= 256 || t % 1) return !1
				}
				return !0
			}

			function v(e, r) {
				if (r || (r = {}), "number" == typeof e) {
					m.checkSafeUint53(e, "invalid arrayify value");
					const r = [];
					for (; e;) r.unshift(255 & e), e = parseInt(String(e / 256));
					return 0 === r.length && r.push(0), p(new Uint8Array(r))
				}
				if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), g(e) && (e = e.toHexString()), R(e)) {
					let t = e.substring(2);
					t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : m.throwArgumentError("hex data is odd-length", "value", e));
					const o = [];
					for (let e = 0; e < t.length; e += 2) o.push(parseInt(t.substring(e, e + 2), 16));
					return p(new Uint8Array(o))
				}
				return E(e) ? p(new Uint8Array(e)) : m.throwArgumentError("invalid arrayify value", "value", e)
			}

			function N(e) {
				const r = e.map(e => v(e)),
					t = r.reduce((e, r) => e + r.length, 0),
					o = new Uint8Array(t);
				return r.reduce((e, r) => (o.set(r, e), e + r.length), 0), p(o)
			}

			function y(e) {
				let r = v(e);
				if (0 === r.length) return r;
				let t = 0;
				for (; t < r.length && 0 === r[t];) t++;
				return t && (r = r.slice(t)), r
			}

			function O(e, r) {
				(e = v(e)).length > r && m.throwArgumentError("value out of range", "value", arguments[0]);
				const t = new Uint8Array(r);
				return t.set(e, r - e.length), p(t)
			}

			function R(e, r) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!r || e.length === 2 + 2 * r)
			}
			const A = "0123456789abcdef";

			function T(e, r) {
				if (r || (r = {}), "number" == typeof e) {
					m.checkSafeUint53(e, "invalid hexlify value");
					let r = "";
					for (; e;) r = A[15 & e] + r, e = Math.floor(e / 16);
					return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), g(e)) return e.toHexString();
				if (R(e)) return e.length % 2 && ("left" === r.hexPad ? e = "0x0" + e.substring(2) : "right" === r.hexPad ? e += "0" : m.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (E(e)) {
					let r = "0x";
					for (let t = 0; t < e.length; t++) {
						let o = e[t];
						r += A[(240 & o) >> 4] + A[15 & o]
					}
					return r
				}
				return m.throwArgumentError("invalid hexlify value", "value", e)
			}

			function S(e) {
				if ("string" != typeof e) e = T(e);
				else if (!R(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function w(e, r, t) {
				return "string" != typeof e ? e = T(e) : (!R(e) || e.length % 2) && m.throwArgumentError("invalid hexData", "value", e), r = 2 + 2 * r, null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
			}

			function P(e) {
				let r = "0x";
				return e.forEach(e => {
					r += T(e).substring(2)
				}), r
			}

			function C(e) {
				const r = I(T(e, {
					hexPad: "left"
				}));
				return "0x" === r ? "0x0" : r
			}

			function I(e) {
				"string" != typeof e && (e = T(e)), R(e) || m.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let r = 0;
				for (; r < e.length && "0" === e[r];) r++;
				return "0x" + e.substring(r)
			}

			function _(e, r) {
				for ("string" != typeof e ? e = T(e) : R(e) || m.throwArgumentError("invalid hex string", "value", e), e.length > 2 * r + 2 && m.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * r + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function F(e) {
				const r = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (b(e)) {
					const t = v(e);
					65 !== t.length && m.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), r.r = T(t.slice(0, 32)), r.s = T(t.slice(32, 64)), r.v = t[64], r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : m.throwArgumentError("signature invalid v byte", "signature", e)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (t[32] |= 128), r._vs = T(t.slice(32, 64))
				} else {
					if (r.r = e.r, r.s = e.s, r.v = e.v, r.recoveryParam = e.recoveryParam, r._vs = e._vs, null != r._vs) {
						const t = O(v(r._vs), 32);
						r._vs = T(t);
						const o = t[0] >= 128 ? 1 : 0;
						null == r.recoveryParam ? r.recoveryParam = o : r.recoveryParam !== o && m.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), t[0] &= 127;
						const n = T(t);
						null == r.s ? r.s = n : r.s !== n && m.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == r.recoveryParam ? null == r.v ? m.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2 : null == r.v ? r.v = 27 + r.recoveryParam : r.recoveryParam !== 1 - r.v % 2 && m.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != r.r && R(r.r) ? r.r = _(r.r, 32) : m.throwArgumentError("signature missing or invalid r", "signature", e), null != r.s && R(r.s) ? r.s = _(r.s, 32) : m.throwArgumentError("signature missing or invalid s", "signature", e);
					const t = v(r.s);
					t[0] >= 128 && m.throwArgumentError("signature s out of range", "signature", e), r.recoveryParam && (t[0] |= 128);
					const o = T(t);
					r._vs && (R(r._vs) || m.throwArgumentError("signature invalid _vs", "signature", e), r._vs = _(r._vs, 32)), null == r._vs ? r._vs = o : r._vs !== o && m.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return r
			}

			function L(e) {
				return T(N([(e = F(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/constants/lib.esm/addresses.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "0x0000000000000000000000000000000000000000"
		},
		"./node_modules/@ethersproject/constants/lib.esm/bignumbers.js": function(e, r, t) {
			"use strict";
			t.d(r, "d", (function() {
				return n
			})), t.d(r, "h", (function() {
				return i
			})), t.d(r, "e", (function() {
				return a
			})), t.d(r, "f", (function() {
				return s
			})), t.d(r, "g", (function() {
				return l
			})), t.d(r, "b", (function() {
				return c
			})), t.d(r, "c", (function() {
				return u
			})), t.d(r, "a", (function() {
				return h
			}));
			var o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
			const n = o.a.from(-1),
				i = o.a.from(0),
				a = o.a.from(1),
				s = o.a.from(2),
				l = o.a.from("1000000000000000000"),
				c = o.a.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
				u = o.a.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),
				h = o.a.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
		},
		"./node_modules/@ethersproject/constants/lib.esm/hashes.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "0x0000000000000000000000000000000000000000000000000000000000000000"
		},
		"./node_modules/@ethersproject/constants/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "AddressZero", (function() {
				return o.a
			})), t.d(r, "NegativeOne", (function() {
				return n.d
			})), t.d(r, "Zero", (function() {
				return n.h
			})), t.d(r, "One", (function() {
				return n.e
			})), t.d(r, "Two", (function() {
				return n.f
			})), t.d(r, "WeiPerEther", (function() {
				return n.g
			})), t.d(r, "MaxUint256", (function() {
				return n.b
			})), t.d(r, "MinInt256", (function() {
				return n.c
			})), t.d(r, "MaxInt256", (function() {
				return n.a
			})), t.d(r, "HashZero", (function() {
				return i.a
			})), t.d(r, "EtherSymbol", (function() {
				return a
			}));
			var o = t("./node_modules/@ethersproject/constants/lib.esm/addresses.js"),
				n = t("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js"),
				i = t("./node_modules/@ethersproject/constants/lib.esm/hashes.js");
			const a = "Ξ"
		},
		"./node_modules/@ethersproject/contracts/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return k
			})), t.d(r, "b", (function() {
				return j
			})), t.d(r, "c", (function() {
				return D
			}));
			var o = t("./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js"),
				n = t("./node_modules/@ethersproject/abi/lib.esm/interface.js"),
				i = t("./node_modules/@ethersproject/abstract-provider/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				c = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				h = t("./node_modules/@ethersproject/transactions/lib.esm/index.js");
			const d = "logger/5.4.1";
			let f = !1,
				m = !1;
			const g = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let p = g.default,
				b = null;
			const E = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var v, N;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(v || (v = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(N || (N = {}));
			const y = "0123456789abcdef";
			class O {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == g[t] && this.throwArgumentError("invalid log level name", "logLevel", e), p > g[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(O.levels.DEBUG, e)
				}
				info(...e) {
					this._log(O.levels.INFO, e)
				}
				warn(...e) {
					this._log(O.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (m) return this.makeError("censored error", r, {});
					r || (r = O.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += y[r[e] >> 4], t += y[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, O.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), E && this.throwError("platform missing String.prototype.normalize", O.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: E
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, O.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, O.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, O.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, O.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", O.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", O.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", O.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return b || (b = new O(d)), b
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", O.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), f) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", O.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					m = !!e, f = !!r
				}
				static setLogLevel(e) {
					const r = g[e.toLowerCase()];
					null != r ? p = r : O.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new O(e)
				}
			}
			O.errors = N, O.levels = v;
			var R = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const A = new O("contracts/5.4.1"),
				T = {
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

			function S(e, r) {
				return R(this, void 0, void 0, (function*() {
					const t = yield r;
					try {
						return Object(s.getAddress)(t)
					} catch (n) {}
					e || A.throwError("a provider or signer is needed to resolve ENS names", O.errors.UNSUPPORTED_OPERATION, {
						operation: "resolveName"
					});
					const o = yield e.resolveName(t);
					return null == o && A.throwArgumentError("resolver or addr is not configured for ENS name", "name", t), o
				}))
			}

			function w(e, r, t) {
				return R(this, void 0, void 0, (function*() {
					return Array.isArray(t) ? yield Promise.all(t.map((t, o) => w(e, Array.isArray(r) ? r[o] : r[t.name], t))): "address" === t.type ? yield S(e, r): "tuple" === t.type ? yield w(e, r, t.components): "array" === t.baseType ? Array.isArray(r) ? yield Promise.all(r.map(r => w(e, r, t.arrayChildren))): Promise.reject(new Error("invalid value for array")): r
				}))
			}

			function P(e, r, t) {
				return R(this, void 0, void 0, (function*() {
					let o = {};
					t.length === r.inputs.length + 1 && "object" == typeof t[t.length - 1] && (o = Object(u.shallowCopy)(t.pop())), A.checkArgumentCount(t.length, r.inputs.length, "passed to contract"), e.signer ? o.from ? o.from = Object(u.resolveProperties)({
						override: S(e.signer, o.from),
						signer: e.signer.getAddress()
					}).then(e => R(this, void 0, void 0, (function*() {
						return Object(s.getAddress)(e.signer) !== e.override && A.throwError("Contract with a Signer cannot override from", O.errors.UNSUPPORTED_OPERATION, {
							operation: "overrides.from"
						}), e.override
					}))) : o.from = e.signer.getAddress() : o.from && (o.from = S(e.provider, o.from));
					const n = yield Object(u.resolveProperties)({
						args: w(e.signer || e.provider, t, r.inputs),
						address: e.resolvedAddress,
						overrides: Object(u.resolveProperties)(o) || {}
					}), i = e.interface.encodeFunctionData(r, n.args), a = {
						data: i,
						to: n.address
					}, d = n.overrides;
					if (null != d.nonce && (a.nonce = l.a.from(d.nonce).toNumber()), null != d.gasLimit && (a.gasLimit = l.a.from(d.gasLimit)), null != d.gasPrice && (a.gasPrice = l.a.from(d.gasPrice)), null != d.maxFeePerGas && (a.maxFeePerGas = l.a.from(d.maxFeePerGas)), null != d.maxPriorityFeePerGas && (a.maxPriorityFeePerGas = l.a.from(d.maxPriorityFeePerGas)), null != d.from && (a.from = d.from), null != d.type && (a.type = d.type), null != d.accessList && (a.accessList = Object(h.accessListify)(d.accessList)), null == a.gasLimit && null != r.gas) {
						let e = 21e3;
						const t = Object(c.arrayify)(i);
						for (let r = 0; r < t.length; r++) e += 4, t[r] && (e += 64);
						a.gasLimit = l.a.from(r.gas).add(e)
					}
					if (d.value) {
						const e = l.a.from(d.value);
						e.isZero() || r.payable || A.throwError("non-payable method cannot override value", O.errors.UNSUPPORTED_OPERATION, {
							operation: "overrides.value",
							value: o.value
						}), a.value = e
					}
					delete o.nonce, delete o.gasLimit, delete o.gasPrice, delete o.from, delete o.value, delete o.type, delete o.accessList, delete o.maxFeePerGas, delete o.maxPriorityFeePerGas;
					const f = Object.keys(o).filter(e => null != o[e]);
					return f.length && A.throwError(`cannot override ${f.map(e=>JSON.stringify(e)).join(",")}`, O.errors.UNSUPPORTED_OPERATION, {
						operation: "overrides",
						overrides: f
					}), a
				}))
			}

			function C(e, r, t) {
				const o = e.signer || e.provider;
				return function(...n) {
					return R(this, void 0, void 0, (function*() {
						let i = void 0;
						if (n.length === r.inputs.length + 1 && "object" == typeof n[n.length - 1]) {
							const e = Object(u.shallowCopy)(n.pop());
							null != e.blockTag && (i = yield e.blockTag), delete e.blockTag, n.push(e)
						}
						null != e.deployTransaction && (yield e._deployed(i));
						const a = yield P(e, r, n), s = yield o.call(a, i);
						try {
							let o = e.interface.decodeFunctionResult(r, s);
							return t && 1 === r.outputs.length && (o = o[0]), o
						} catch (l) {
							throw l.code === O.errors.CALL_EXCEPTION && (l.address = e.address, l.args = n, l.transaction = a), l
						}
					}))
				}
			}

			function I(e, r, t) {
				return r.constant ? C(e, r, t) : function(e, r) {
					return function(...t) {
						return R(this, void 0, void 0, (function*() {
							e.signer || A.throwError("sending a transaction requires a signer", O.errors.UNSUPPORTED_OPERATION, {
								operation: "sendTransaction"
							}), null != e.deployTransaction && (yield e._deployed());
							const o = yield P(e, r, t), n = yield e.signer.sendTransaction(o), i = n.wait.bind(n);
							return n.wait = r => i(r).then(r => (r.events = r.logs.map(t => {
								let o = Object(u.deepCopy)(t),
									n = null;
								try {
									n = e.interface.parseLog(t)
								} catch (i) {}
								return n && (o.args = n.args, o.decode = (r, t) => e.interface.decodeEventLog(n.eventFragment, r, t), o.event = n.name, o.eventSignature = n.signature), o.removeListener = () => e.provider, o.getBlock = () => e.provider.getBlock(r.blockHash), o.getTransaction = () => e.provider.getTransaction(r.transactionHash), o.getTransactionReceipt = () => Promise.resolve(r), o
							}), r)), n
						}))
					}
				}(e, r)
			}

			function _(e) {
				return !e.address || null != e.topics && 0 !== e.topics.length ? (e.address || "*") + "@" + (e.topics ? e.topics.map(e => Array.isArray(e) ? e.join("|") : e).join(":") : "") : "*"
			}
			class F {
				constructor(e, r) {
					Object(u.defineReadOnly)(this, "tag", e), Object(u.defineReadOnly)(this, "filter", r), this._listeners = []
				}
				addListener(e, r) {
					this._listeners.push({
						listener: e,
						once: r
					})
				}
				removeListener(e) {
					let r = !1;
					this._listeners = this._listeners.filter(t => !(!r && t.listener === e) || (r = !0, !1))
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
					const r = this.listenerCount();
					return this._listeners = this._listeners.filter(r => {
						const t = e.slice();
						return setTimeout(() => {
							r.listener.apply(this, t)
						}, 0), !r.once
					}), r
				}
				prepareEvent(e) {}
				getEmit(e) {
					return [e]
				}
			}
			class L extends F {
				constructor() {
					super("error", null)
				}
			}
			class M extends F {
				constructor(e, r, t, o) {
					const n = {
						address: e
					};
					let i = r.getEventTopic(t);
					o ? (i !== o[0] && A.throwArgumentError("topic mismatch", "topics", o), n.topics = o.slice()) : n.topics = [i], super(_(n), n), Object(u.defineReadOnly)(this, "address", e), Object(u.defineReadOnly)(this, "interface", r), Object(u.defineReadOnly)(this, "fragment", t)
				}
				prepareEvent(e) {
					super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (e, r) => this.interface.decodeEventLog(this.fragment, e, r);
					try {
						e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics)
					} catch (r) {
						e.args = null, e.decodeError = r
					}
				}
				getEmit(e) {
					const r = Object(o.d)(e.args);
					if (r.length) throw r[0].error;
					const t = (e.args || []).slice();
					return t.push(e), t
				}
			}
			class U extends F {
				constructor(e, r) {
					super("*", {
						address: e
					}), Object(u.defineReadOnly)(this, "address", e), Object(u.defineReadOnly)(this, "interface", r)
				}
				prepareEvent(e) {
					super.prepareEvent(e);
					try {
						const r = this.interface.parseLog(e);
						e.event = r.name, e.eventSignature = r.signature, e.decode = (e, t) => this.interface.decodeEventLog(r.eventFragment, e, t), e.args = r.args
					} catch (r) {}
				}
			}
			class k {
				constructor(e, r, t) {
					A.checkNew(new.target, j), Object(u.defineReadOnly)(this, "interface", Object(u.getStatic)(new.target, "getInterface")(r)), null == t ? (Object(u.defineReadOnly)(this, "provider", null), Object(u.defineReadOnly)(this, "signer", null)) : a.a.isSigner(t) ? (Object(u.defineReadOnly)(this, "provider", t.provider || null), Object(u.defineReadOnly)(this, "signer", t)) : i.b.isProvider(t) ? (Object(u.defineReadOnly)(this, "provider", t), Object(u.defineReadOnly)(this, "signer", null)) : A.throwArgumentError("invalid signer or provider", "signerOrProvider", t), Object(u.defineReadOnly)(this, "callStatic", {}), Object(u.defineReadOnly)(this, "estimateGas", {}), Object(u.defineReadOnly)(this, "functions", {}), Object(u.defineReadOnly)(this, "populateTransaction", {}), Object(u.defineReadOnly)(this, "filters", {}); {
						const e = {};
						Object.keys(this.interface.events).forEach(r => {
							const t = this.interface.events[r];
							Object(u.defineReadOnly)(this.filters, r, (...e) => ({
								address: this.address,
								topics: this.interface.encodeFilterTopics(t, e)
							})), e[t.name] || (e[t.name] = []), e[t.name].push(r)
						}), Object.keys(e).forEach(r => {
							const t = e[r];
							1 === t.length ? Object(u.defineReadOnly)(this.filters, r, this.filters[t[0]]) : A.warn(`Duplicate definition of ${r} (${t.join(", ")})`)
						})
					}
					if (Object(u.defineReadOnly)(this, "_runningEvents", {}), Object(u.defineReadOnly)(this, "_wrappedEmits", {}), null == e && A.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), Object(u.defineReadOnly)(this, "address", e), this.provider) Object(u.defineReadOnly)(this, "resolvedAddress", S(this.provider, e));
					else try {
						Object(u.defineReadOnly)(this, "resolvedAddress", Promise.resolve(Object(s.getAddress)(e)))
					} catch (l) {
						A.throwError("provider is required to use ENS name as contract address", O.errors.UNSUPPORTED_OPERATION, {
							operation: "new Contract"
						})
					}
					const o = {},
						n = {};
					Object.keys(this.interface.functions).forEach(e => {
						const r = this.interface.functions[e];
						if (n[e]) A.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
						else {
							n[e] = !0; {
								const t = r.name;
								o[t] || (o[t] = []), o[t].push(e)
							}
							null == this[e] && Object(u.defineReadOnly)(this, e, I(this, r, !0)), null == this.functions[e] && Object(u.defineReadOnly)(this.functions, e, I(this, r, !1)), null == this.callStatic[e] && Object(u.defineReadOnly)(this.callStatic, e, C(this, r, !0)), null == this.populateTransaction[e] && Object(u.defineReadOnly)(this.populateTransaction, e, function(e, r) {
								return function(...t) {
									return P(e, r, t)
								}
							}(this, r)), null == this.estimateGas[e] && Object(u.defineReadOnly)(this.estimateGas, e, function(e, r) {
								const t = e.signer || e.provider;
								return function(...o) {
									return R(this, void 0, void 0, (function*() {
										t || A.throwError("estimate require a provider or signer", O.errors.UNSUPPORTED_OPERATION, {
											operation: "estimateGas"
										});
										const n = yield P(e, r, o);
										return yield t.estimateGas(n)
									}))
								}
							}(this, r))
						}
					}), Object.keys(o).forEach(e => {
						const r = o[e];
						if (r.length > 1) return;
						const t = r[0];
						try {
							null == this[e] && Object(u.defineReadOnly)(this, e, this[t])
						} catch (n) {}
						null == this.functions[e] && Object(u.defineReadOnly)(this.functions, e, this.functions[t]), null == this.callStatic[e] && Object(u.defineReadOnly)(this.callStatic, e, this.callStatic[t]), null == this.populateTransaction[e] && Object(u.defineReadOnly)(this.populateTransaction, e, this.populateTransaction[t]), null == this.estimateGas[e] && Object(u.defineReadOnly)(this.estimateGas, e, this.estimateGas[t])
					})
				}
				static getContractAddress(e) {
					return Object(s.getContractAddress)(e)
				}
				static getInterface(e) {
					return n.b.isInterface(e) ? e : new n.b(e)
				}
				deployed() {
					return this._deployed()
				}
				_deployed(e) {
					return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then(e => ("0x" === e && A.throwError("contract not deployed", O.errors.UNSUPPORTED_OPERATION, {
						contractAddress: this.address,
						operation: "getDeployed"
					}), this))), this._deployedPromise
				}
				fallback(e) {
					this.signer || A.throwError("sending a transactions require a signer", O.errors.UNSUPPORTED_OPERATION, {
						operation: "sendTransaction(fallback)"
					});
					const r = Object(u.shallowCopy)(e || {});
					return ["from", "to"].forEach((function(e) {
						null != r[e] && A.throwError("cannot override " + e, O.errors.UNSUPPORTED_OPERATION, {
							operation: e
						})
					})), r.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(r))
				}
				connect(e) {
					"string" == typeof e && (e = new a.b(e, this.provider));
					const r = new this.constructor(this.address, this.interface, e);
					return this.deployTransaction && Object(u.defineReadOnly)(r, "deployTransaction", this.deployTransaction), r
				}
				attach(e) {
					return new this.constructor(e, this.interface, this.signer || this.provider)
				}
				static isIndexed(e) {
					return n.a.isIndexed(e)
				}
				_normalizeRunningEvent(e) {
					return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e
				}
				_getRunningEvent(e) {
					if ("string" == typeof e) {
						if ("error" === e) return this._normalizeRunningEvent(new L);
						if ("event" === e) return this._normalizeRunningEvent(new F("event", null));
						if ("*" === e) return this._normalizeRunningEvent(new U(this.address, this.interface));
						const r = this.interface.getEvent(e);
						return this._normalizeRunningEvent(new M(this.address, this.interface, r))
					}
					if (e.topics && e.topics.length > 0) {
						try {
							const r = e.topics[0];
							if ("string" != typeof r) throw new Error("invalid topic");
							const t = this.interface.getEvent(r);
							return this._normalizeRunningEvent(new M(this.address, this.interface, t, e.topics))
						} catch (r) {}
						const t = {
							address: this.address,
							topics: e.topics
						};
						return this._normalizeRunningEvent(new F(_(t), t))
					}
					return this._normalizeRunningEvent(new U(this.address, this.interface))
				}
				_checkRunningEvents(e) {
					if (0 === e.listenerCount()) {
						delete this._runningEvents[e.tag];
						const r = this._wrappedEmits[e.tag];
						r && e.filter && (this.provider.off(e.filter, r), delete this._wrappedEmits[e.tag])
					}
				}
				_wrapEvent(e, r, t) {
					const o = Object(u.deepCopy)(r);
					return o.removeListener = () => {
						t && (e.removeListener(t), this._checkRunningEvents(e))
					}, o.getBlock = () => this.provider.getBlock(r.blockHash), o.getTransaction = () => this.provider.getTransaction(r.transactionHash), o.getTransactionReceipt = () => this.provider.getTransactionReceipt(r.transactionHash), e.prepareEvent(o), o
				}
				_addEventListener(e, r, t) {
					if (this.provider || A.throwError("events require a provider or a signer with a provider", O.errors.UNSUPPORTED_OPERATION, {
							operation: "once"
						}), e.addListener(r, t), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
						const t = t => {
							let o = this._wrapEvent(e, t, r);
							if (null == o.decodeError) try {
								const r = e.getEmit(o);
								this.emit(e.filter, ...r)
							} catch (n) {
								o.decodeError = n.error
							}
							null != e.filter && this.emit("event", o), null != o.decodeError && this.emit("error", o.decodeError, o)
						};
						this._wrappedEmits[e.tag] = t, null != e.filter && this.provider.on(e.filter, t)
					}
				}
				queryFilter(e, r, t) {
					const o = this._getRunningEvent(e),
						n = Object(u.shallowCopy)(o.filter);
					return "string" == typeof r && Object(c.isHexString)(r, 32) ? (null != t && A.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", t), n.blockHash = r) : (n.fromBlock = null != r ? r : 0, n.toBlock = null != t ? t : "latest"), this.provider.getLogs(n).then(e => e.map(e => this._wrapEvent(o, e, null)))
				}
				on(e, r) {
					return this._addEventListener(this._getRunningEvent(e), r, !1), this
				}
				once(e, r) {
					return this._addEventListener(this._getRunningEvent(e), r, !0), this
				}
				emit(e, ...r) {
					if (!this.provider) return !1;
					const t = this._getRunningEvent(e),
						o = t.run(r) > 0;
					return this._checkRunningEvents(t), o
				}
				listenerCount(e) {
					return this.provider ? null == e ? Object.keys(this._runningEvents).reduce((e, r) => e + this._runningEvents[r].listenerCount(), 0) : this._getRunningEvent(e).listenerCount() : 0
				}
				listeners(e) {
					if (!this.provider) return [];
					if (null == e) {
						const e = [];
						for (let r in this._runningEvents) this._runningEvents[r].listeners().forEach(r => {
							e.push(r)
						});
						return e
					}
					return this._getRunningEvent(e).listeners()
				}
				removeAllListeners(e) {
					if (!this.provider) return this;
					if (null == e) {
						for (const e in this._runningEvents) {
							const r = this._runningEvents[e];
							r.removeAllListeners(), this._checkRunningEvents(r)
						}
						return this
					}
					const r = this._getRunningEvent(e);
					return r.removeAllListeners(), this._checkRunningEvents(r), this
				}
				off(e, r) {
					if (!this.provider) return this;
					const t = this._getRunningEvent(e);
					return t.removeListener(r), this._checkRunningEvents(t), this
				}
				removeListener(e, r) {
					return this.off(e, r)
				}
			}
			class j extends k {}
			class D {
				constructor(e, r, t) {
					let o = null;
					"0x" !== (o = "string" == typeof r ? r : Object(c.isBytes)(r) ? Object(c.hexlify)(r) : r && "string" == typeof r.object ? r.object : "!").substring(0, 2) && (o = "0x" + o), (!Object(c.isHexString)(o) || o.length % 2) && A.throwArgumentError("invalid bytecode", "bytecode", r), t && !a.a.isSigner(t) && A.throwArgumentError("invalid signer", "signer", t), Object(u.defineReadOnly)(this, "bytecode", o), Object(u.defineReadOnly)(this, "interface", Object(u.getStatic)(new.target, "getInterface")(e)), Object(u.defineReadOnly)(this, "signer", t || null)
				}
				getDeployTransaction(...e) {
					let r = {};
					if (e.length === this.interface.deploy.inputs.length + 1 && "object" == typeof e[e.length - 1]) {
						r = Object(u.shallowCopy)(e.pop());
						for (const e in r)
							if (!T[e]) throw new Error("unknown transaction override " + e)
					}
					if (["data", "from", "to"].forEach(e => {
							null != r[e] && A.throwError("cannot override " + e, O.errors.UNSUPPORTED_OPERATION, {
								operation: e
							})
						}), r.value) {
						l.a.from(r.value).isZero() || this.interface.deploy.payable || A.throwError("non-payable constructor cannot override value", O.errors.UNSUPPORTED_OPERATION, {
							operation: "overrides.value",
							value: r.value
						})
					}
					return A.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor"), r.data = Object(c.hexlify)(Object(c.concat)([this.bytecode, this.interface.encodeDeploy(e)])), r
				}
				deploy(...e) {
					return R(this, void 0, void 0, (function*() {
						let r = {};
						e.length === this.interface.deploy.inputs.length + 1 && (r = e.pop()), A.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor");
						const t = yield w(this.signer, e, this.interface.deploy.inputs);
						t.push(r);
						const o = this.getDeployTransaction(...t),
							n = yield this.signer.sendTransaction(o), i = Object(u.getStatic)(this.constructor, "getContractAddress")(n), a = Object(u.getStatic)(this.constructor, "getContract")(i, this.interface, this.signer);
						return Object(u.defineReadOnly)(a, "deployTransaction", n), a
					}))
				}
				attach(e) {
					return this.constructor.getContract(e, this.interface, this.signer)
				}
				connect(e) {
					return new this.constructor(this.interface, this.bytecode, e)
				}
				static fromSolidity(e, r) {
					null == e && A.throwError("missing compiler output", O.errors.MISSING_ARGUMENT, {
						argument: "compilerOutput"
					}), "string" == typeof e && (e = JSON.parse(e));
					const t = e.abi;
					let o = null;
					return e.bytecode ? o = e.bytecode : e.evm && e.evm.bytecode && (o = e.evm.bytecode), new this(t, o, r)
				}
				static getInterface(e) {
					return j.getInterface(e)
				}
				static getContractAddress(e) {
					return Object(s.getContractAddress)(e)
				}
				static getContract(e, r, t) {
					return new j(e, r, t)
				}
			}
		},
		"./node_modules/@ethersproject/hash/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "hash/5.4.0"
		},
		"./node_modules/@ethersproject/hash/lib.esm/id.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return i
			}));
			var o = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");

			function i(e) {
				return Object(o.keccak256)(Object(n.f)(e))
			}
		},
		"./node_modules/@ethersproject/hash/lib.esm/message.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return a
			})), t.d(r, "a", (function() {
				return s
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			const a = "Ethereum Signed Message:\n";

			function s(e) {
				return "string" == typeof e && (e = Object(i.f)(e)), Object(n.keccak256)(Object(o.concat)([Object(i.f)(a), Object(i.f)(String(e.length)), e]))
			}
		},
		"./node_modules/@ethersproject/hash/lib.esm/namehash.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return d
			})), t.d(r, "b", (function() {
				return f
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/strings/lib.esm/idna.js"),
				i = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				a = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/hash/node_modules/@ethersproject/logger/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/hash/lib.esm/_version.js");
			const c = new s.a(l.a),
				u = new Uint8Array(32);
			u.fill(0);
			const h = new RegExp("^((.*)\\.)?([^.]+)$");

			function d(e) {
				try {
					const r = e.split(".");
					for (let e = 0; e < r.length; e++)
						if (0 === Object(n.a)(r[e]).length) throw new Error("empty");
					return !0
				} catch (r) {}
				return !1
			}

			function f(e) {
				"string" != typeof e && c.throwArgumentError("invalid ENS name; not a string", "name", e);
				let r = e,
					t = u;
				for (; r.length;) {
					const s = r.match(h);
					null != s && "" !== s[2] || c.throwArgumentError("invalid ENS address; missing component", "name", e);
					const l = Object(i.f)(Object(n.a)(s[3]));
					t = Object(a.keccak256)(Object(o.concat)([t, Object(a.keccak256)(l)])), r = s[2] || ""
				}
				return Object(o.hexlify)(t)
			}
		},
		"./node_modules/@ethersproject/hash/lib.esm/typed-data.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return S
			}));
			var o = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/hash/node_modules/@ethersproject/logger/lib.esm/index.js"),
				c = t("./node_modules/@ethersproject/hash/lib.esm/_version.js"),
				u = t("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				h = function(e, r, t, o) {
					return new(t || (t = Promise))((function(n, i) {
						function a(e) {
							try {
								l(o.next(e))
							} catch (r) {
								i(r)
							}
						}

						function s(e) {
							try {
								l(o.throw(e))
							} catch (r) {
								i(r)
							}
						}

						function l(e) {
							var r;
							e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
								e(r)
							}))).then(a, s)
						}
						l((o = o.apply(e, r || [])).next())
					}))
				};
			const d = new l.a(c.a),
				f = new Uint8Array(32);
			f.fill(0);
			const m = n.a.from(-1),
				g = n.a.from(0),
				p = n.a.from(1),
				b = n.a.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
			const E = Object(i.hexZeroPad)(p.toHexString(), 32),
				v = Object(i.hexZeroPad)(g.toHexString(), 32),
				N = {
					name: "string",
					version: "string",
					chainId: "uint256",
					verifyingContract: "address",
					salt: "bytes32"
				},
				y = ["name", "version", "chainId", "verifyingContract", "salt"];

			function O(e) {
				return function(r) {
					return "string" != typeof r && d.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, r), r
				}
			}
			const R = {
				name: O("name"),
				version: O("version"),
				chainId: function(e) {
					try {
						return n.a.from(e).toString()
					} catch (r) {}
					return d.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
				},
				verifyingContract: function(e) {
					try {
						return Object(o.getAddress)(e).toLowerCase()
					} catch (r) {}
					return d.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
				},
				salt: function(e) {
					try {
						const r = Object(i.arrayify)(e);
						if (32 !== r.length) throw new Error("bad length");
						return Object(i.hexlify)(r)
					} catch (r) {}
					return d.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
				}
			};

			function A(e) {
				{
					const r = e.match(/^(u?)int(\d*)$/);
					if (r) {
						const t = "" === r[1],
							o = parseInt(r[2] || "256");
						(o % 8 != 0 || o > 256 || r[2] && r[2] !== String(o)) && d.throwArgumentError("invalid numeric width", "type", e);
						const a = b.mask(t ? o - 1 : o),
							s = t ? a.add(p).mul(m) : g;
						return function(r) {
							const t = n.a.from(r);
							return (t.lt(s) || t.gt(a)) && d.throwArgumentError(`value out-of-bounds for ${e}`, "value", r), Object(i.hexZeroPad)(t.toTwos(256).toHexString(), 32)
						}
					}
				} {
					const r = e.match(/^bytes(\d+)$/);
					if (r) {
						const t = parseInt(r[1]);
						return (0 === t || t > 32 || r[1] !== String(t)) && d.throwArgumentError("invalid bytes width", "type", e),
							function(r) {
								return Object(i.arrayify)(r).length !== t && d.throwArgumentError(`invalid length for ${e}`, "value", r),
									function(e) {
										const r = Object(i.arrayify)(e),
											t = r.length % 32;
										return t ? Object(i.hexConcat)([r, f.slice(t)]) : Object(i.hexlify)(r)
									}(r)
							}
					}
				}
				switch (e) {
					case "address":
						return function(e) {
							return Object(i.hexZeroPad)(Object(o.getAddress)(e), 32)
						};
					case "bool":
						return function(e) {
							return e ? E : v
						};
					case "bytes":
						return function(e) {
							return Object(a.keccak256)(e)
						};
					case "string":
						return function(e) {
							return Object(u.a)(e)
						}
				}
				return null
			}

			function T(e, r) {
				return `${e}(${r.map(({name:e,type:r})=>r+" "+e).join(",")})`
			}
			class S {
				constructor(e) {
					Object(s.defineReadOnly)(this, "types", Object.freeze(Object(s.deepCopy)(e))), Object(s.defineReadOnly)(this, "_encoderCache", {}), Object(s.defineReadOnly)(this, "_types", {});
					const r = {},
						t = {},
						o = {};
					Object.keys(e).forEach(e => {
						r[e] = {}, t[e] = [], o[e] = {}
					});
					for (const i in e) {
						const o = {};
						e[i].forEach(n => {
							o[n.name] && d.throwArgumentError(`duplicate variable name ${JSON.stringify(n.name)} in ${JSON.stringify(i)}`, "types", e), o[n.name] = !0;
							const a = n.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
							a === i && d.throwArgumentError(`circular type reference to ${JSON.stringify(a)}`, "types", e), A(a) || (t[a] || d.throwArgumentError(`unknown type ${JSON.stringify(a)}`, "types", e), t[a].push(i), r[i][a] = !0)
						})
					}
					const n = Object.keys(t).filter(e => 0 === t[e].length);
					0 === n.length ? d.throwArgumentError("missing primary type", "types", e) : n.length > 1 && d.throwArgumentError(`ambiguous primary types or unused types: ${n.map(e=>JSON.stringify(e)).join(", ")}`, "types", e), Object(s.defineReadOnly)(this, "primaryType", n[0]),
						function n(i, a) {
							a[i] && d.throwArgumentError(`circular type reference to ${JSON.stringify(i)}`, "types", e), a[i] = !0, Object.keys(r[i]).forEach(e => {
								t[e] && (n(e, a), Object.keys(a).forEach(r => {
									o[r][e] = !0
								}))
							}), delete a[i]
						}(this.primaryType, {});
					for (const i in o) {
						const r = Object.keys(o[i]);
						r.sort(), this._types[i] = T(i, e[i]) + r.map(r => T(r, e[r])).join("")
					}
				}
				getEncoder(e) {
					let r = this._encoderCache[e];
					return r || (r = this._encoderCache[e] = this._getEncoder(e)), r
				}
				_getEncoder(e) {
					{
						const r = A(e);
						if (r) return r
					}
					const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
					if (r) {
						const e = r[1],
							t = this.getEncoder(e),
							o = parseInt(r[3]);
						return r => {
							o >= 0 && r.length !== o && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r);
							let n = r.map(t);
							return this._types[e] && (n = n.map(a.keccak256)), Object(a.keccak256)(Object(i.hexConcat)(n))
						}
					}
					const t = this.types[e];
					if (t) {
						const r = Object(u.a)(this._types[e]);
						return e => {
							const o = t.map(({
								name: r,
								type: t
							}) => {
								const o = this.getEncoder(t)(e[r]);
								return this._types[t] ? Object(a.keccak256)(o) : o
							});
							return o.unshift(r), Object(i.hexConcat)(o)
						}
					}
					return d.throwArgumentError(`unknown type: ${e}`, "type", e)
				}
				encodeType(e) {
					const r = this._types[e];
					return r || d.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), r
				}
				encodeData(e, r) {
					return this.getEncoder(e)(r)
				}
				hashStruct(e, r) {
					return Object(a.keccak256)(this.encodeData(e, r))
				}
				encode(e) {
					return this.encodeData(this.primaryType, e)
				}
				hash(e) {
					return this.hashStruct(this.primaryType, e)
				}
				_visit(e, r, t) {
					if (A(e)) return t(e, r);
					const o = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
					if (o) {
						const e = o[1],
							n = parseInt(o[3]);
						return n >= 0 && r.length !== n && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r), r.map(r => this._visit(e, r, t))
					}
					const n = this.types[e];
					return n ? n.reduce((e, {
						name: o,
						type: n
					}) => (e[o] = this._visit(n, r[o], t), e), {}) : d.throwArgumentError(`unknown type: ${e}`, "type", e)
				}
				visit(e, r) {
					return this._visit(this.primaryType, e, r)
				}
				static from(e) {
					return new S(e)
				}
				static getPrimaryType(e) {
					return S.from(e).primaryType
				}
				static hashStruct(e, r, t) {
					return S.from(r).hashStruct(e, t)
				}
				static hashDomain(e) {
					const r = [];
					for (const t in e) {
						const o = N[t];
						o || d.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(t)}`, "domain", e), r.push({
							name: t,
							type: o
						})
					}
					return r.sort((e, r) => y.indexOf(e.name) - y.indexOf(r.name)), S.hashStruct("EIP712Domain", {
						EIP712Domain: r
					}, e)
				}
				static encode(e, r, t) {
					return Object(i.hexConcat)(["0x1901", S.hashDomain(e), S.from(r).hash(t)])
				}
				static hash(e, r, t) {
					return Object(a.keccak256)(S.encode(e, r, t))
				}
				static resolveNames(e, r, t, o) {
					return h(this, void 0, void 0, (function*() {
						e = Object(s.shallowCopy)(e);
						const n = {};
						e.verifyingContract && !Object(i.isHexString)(e.verifyingContract, 20) && (n[e.verifyingContract] = "0x");
						const a = S.from(r);
						a.visit(t, (e, r) => ("address" !== e || Object(i.isHexString)(r, 20) || (n[r] = "0x"), r));
						for (const e in n) n[e] = yield o(e);
						return e.verifyingContract && n[e.verifyingContract] && (e.verifyingContract = n[e.verifyingContract]), t = a.visit(t, (e, r) => "address" === e && n[r] ? n[r] : r), {
							domain: e,
							value: t
						}
					}))
				}
				static getPayload(e, r, t) {
					S.hashDomain(e);
					const o = {},
						a = [];
					y.forEach(r => {
						const t = e[r];
						null != t && (o[r] = R[r](t), a.push({
							name: r,
							type: N[r]
						}))
					});
					const l = S.from(r),
						c = Object(s.shallowCopy)(r);
					return c.EIP712Domain ? d.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : c.EIP712Domain = a, l.encode(t), {
						types: c,
						domain: o,
						primaryType: l.primaryType,
						message: l.visit(t, (e, r) => {
							if (e.match(/^bytes(\d*)/)) return Object(i.hexlify)(Object(i.arrayify)(r));
							if (e.match(/^u?int/)) return n.a.from(r).toString();
							switch (e) {
								case "address":
									return r.toLowerCase();
								case "bool":
									return !!r;
								case "string":
									return "string" != typeof r && d.throwArgumentError("invalid string", "value", r), r
							}
							return d.throwArgumentError("unsupported type", "type", e)
						})
					}
				}
			}
		},
		"./node_modules/@ethersproject/hash/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u
		},
		"./node_modules/@ethersproject/hdnode/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "defaultPath", (function() {
				return M
			})), t.d(r, "HDNode", (function() {
				return U
			})), t.d(r, "mnemonicToSeed", (function() {
				return k
			})), t.d(r, "mnemonicToEntropy", (function() {
				return j
			})), t.d(r, "entropyToMnemonic", (function() {
				return D
			})), t.d(r, "isValidMnemonic", (function() {
				return B
			})), t.d(r, "getAccountPath", (function() {
				return J
			}));
			var o = t("./node_modules/@ethersproject/basex/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				a = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				s = t("./node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js"),
				l = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				c = t("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js"),
				h = t("./node_modules/@ethersproject/sha2/lib.esm/types.js"),
				d = t("./node_modules/@ethersproject/transactions/lib.esm/index.js"),
				f = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlists.js");
			const m = "logger/5.4.1";
			let g = !1,
				p = !1;
			const b = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let E = b.default,
				v = null;
			const N = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var y, O;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(y || (y = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(O || (O = {}));
			const R = "0123456789abcdef";
			class A {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == b[t] && this.throwArgumentError("invalid log level name", "logLevel", e), E > b[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(A.levels.DEBUG, e)
				}
				info(...e) {
					this._log(A.levels.INFO, e)
				}
				warn(...e) {
					this._log(A.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (p) return this.makeError("censored error", r, {});
					r || (r = A.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += R[r[e] >> 4], t += R[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, A.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), N && this.throwError("platform missing String.prototype.normalize", A.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: N
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, A.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, A.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, A.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, A.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", A.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", A.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", A.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return v || (v = new A(m)), v
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", A.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), g) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", A.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					p = !!e, g = !!r
				}
				static setLogLevel(e) {
					const r = b[e.toLowerCase()];
					null != r ? E = r : A.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new A(e)
				}
			}
			A.errors = O, A.levels = y;
			const T = new A("hdnode/5.4.0"),
				S = i.a.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
				w = Object(a.f)("Bitcoin seed"),
				P = 2147483648;

			function C(e) {
				return (1 << e) - 1 << 8 - e
			}

			function I(e) {
				return Object(n.hexZeroPad)(Object(n.hexlify)(e), 32)
			}

			function _(e) {
				return o.Base58.encode(Object(n.concat)([e, Object(n.hexDataSlice)(Object(u.c)(Object(u.c)(e)), 0, 4)]))
			}

			function F(e) {
				if (null == e) return f.a.en;
				if ("string" == typeof e) {
					const r = f.a[e];
					return null == r && T.throwArgumentError("unknown locale", "wordlist", e), r
				}
				return e
			}
			const L = {},
				M = "m/44'/60'/0'/0/0";
			class U {
				constructor(e, r, t, o, i, a, s, h) {
					if (T.checkNew(new.target, U), e !== L) throw new Error("HDNode constructor cannot be called directly");
					if (r) {
						const e = new c.SigningKey(r);
						Object(l.defineReadOnly)(this, "privateKey", e.privateKey), Object(l.defineReadOnly)(this, "publicKey", e.compressedPublicKey)
					} else Object(l.defineReadOnly)(this, "privateKey", null), Object(l.defineReadOnly)(this, "publicKey", Object(n.hexlify)(t));
					Object(l.defineReadOnly)(this, "parentFingerprint", o), Object(l.defineReadOnly)(this, "fingerprint", Object(n.hexDataSlice)(Object(u.b)(Object(u.c)(this.publicKey)), 0, 4)), Object(l.defineReadOnly)(this, "address", Object(d.computeAddress)(this.publicKey)), Object(l.defineReadOnly)(this, "chainCode", i), Object(l.defineReadOnly)(this, "index", a), Object(l.defineReadOnly)(this, "depth", s), null == h ? (Object(l.defineReadOnly)(this, "mnemonic", null), Object(l.defineReadOnly)(this, "path", null)) : "string" == typeof h ? (Object(l.defineReadOnly)(this, "mnemonic", null), Object(l.defineReadOnly)(this, "path", h)) : (Object(l.defineReadOnly)(this, "mnemonic", h), Object(l.defineReadOnly)(this, "path", h.path))
				}
				get extendedKey() {
					if (this.depth >= 256) throw new Error("Depth too large!");
					return _(Object(n.concat)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", Object(n.hexlify)(this.depth), this.parentFingerprint, Object(n.hexZeroPad)(Object(n.hexlify)(this.index), 4), this.chainCode, null != this.privateKey ? Object(n.concat)(["0x00", this.privateKey]) : this.publicKey]))
				}
				neuter() {
					return new U(L, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path)
				}
				_derive(e) {
					if (e > 4294967295) throw new Error("invalid index - " + String(e));
					let r = this.path;
					r && (r += "/" + (e & ~P));
					const t = new Uint8Array(37);
					if (e & P) {
						if (!this.privateKey) throw new Error("cannot derive child of neutered node");
						t.set(Object(n.arrayify)(this.privateKey), 1), r && (r += "'")
					} else t.set(Object(n.arrayify)(this.publicKey));
					for (let n = 24; n >= 0; n -= 8) t[33 + (n >> 3)] = e >> 24 - n & 255;
					const o = Object(n.arrayify)(Object(u.a)(h.a.sha512, this.chainCode, t)),
						a = o.slice(0, 32),
						s = o.slice(32);
					let l = null,
						d = null;
					if (this.privateKey) l = I(i.a.from(a).add(this.privateKey).mod(S));
					else {
						d = new c.SigningKey(Object(n.hexlify)(a))._addPoint(this.publicKey)
					}
					let f = r;
					const m = this.mnemonic;
					return m && (f = Object.freeze({
						phrase: m.phrase,
						path: r,
						locale: m.locale || "en"
					})), new U(L, l, d, this.fingerprint, I(s), e, this.depth + 1, f)
				}
				derivePath(e) {
					const r = e.split("/");
					if (0 === r.length || "m" === r[0] && 0 !== this.depth) throw new Error("invalid path - " + e);
					"m" === r[0] && r.shift();
					let t = this;
					for (let o = 0; o < r.length; o++) {
						const e = r[o];
						if (e.match(/^[0-9]+'$/)) {
							const r = parseInt(e.substring(0, e.length - 1));
							if (r >= P) throw new Error("invalid path index - " + e);
							t = t._derive(P + r)
						} else {
							if (!e.match(/^[0-9]+$/)) throw new Error("invalid path component - " + e); {
								const r = parseInt(e);
								if (r >= P) throw new Error("invalid path index - " + e);
								t = t._derive(r)
							}
						}
					}
					return t
				}
				static _fromSeed(e, r) {
					const t = Object(n.arrayify)(e);
					if (t.length < 16 || t.length > 64) throw new Error("invalid seed");
					const o = Object(n.arrayify)(Object(u.a)(h.a.sha512, w, t));
					return new U(L, I(o.slice(0, 32)), null, "0x00000000", I(o.slice(32)), 0, 0, r)
				}
				static fromMnemonic(e, r, t) {
					return e = D(j(e, t = F(t)), t), U._fromSeed(k(e, r), {
						phrase: e,
						path: "m",
						locale: t.locale
					})
				}
				static fromSeed(e) {
					return U._fromSeed(e, null)
				}
				static fromExtendedKey(e) {
					const r = o.Base58.decode(e);
					82 === r.length && _(r.slice(0, 78)) === e || T.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
					const t = r[4],
						i = Object(n.hexlify)(r.slice(5, 9)),
						a = parseInt(Object(n.hexlify)(r.slice(9, 13)).substring(2), 16),
						s = Object(n.hexlify)(r.slice(13, 45)),
						l = r.slice(45, 78);
					switch (Object(n.hexlify)(r.slice(0, 4))) {
						case "0x0488b21e":
						case "0x043587cf":
							return new U(L, null, Object(n.hexlify)(l), i, s, a, t, null);
						case "0x0488ade4":
						case "0x04358394 ":
							if (0 !== l[0]) break;
							return new U(L, Object(n.hexlify)(l.slice(1)), null, i, s, a, t, null)
					}
					return T.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
				}
			}

			function k(e, r) {
				r || (r = "");
				const t = Object(a.f)("mnemonic" + r, a.a.NFKD);
				return Object(s.a)(Object(a.f)(e, a.a.NFKD), t, 2048, 64, "sha512")
			}

			function j(e, r) {
				r = F(r), T.checkNormalize();
				const t = r.split(e);
				if (t.length % 3 != 0) throw new Error("invalid mnemonic");
				const o = Object(n.arrayify)(new Uint8Array(Math.ceil(11 * t.length / 8)));
				let i = 0;
				for (let n = 0; n < t.length; n++) {
					let e = r.getWordIndex(t[n].normalize("NFKD"));
					if (-1 === e) throw new Error("invalid mnemonic");
					for (let r = 0; r < 11; r++) e & 1 << 10 - r && (o[i >> 3] |= 1 << 7 - i % 8), i++
				}
				const a = 32 * t.length / 3,
					s = C(t.length / 3);
				if ((Object(n.arrayify)(Object(u.c)(o.slice(0, a / 8)))[0] & s) !== (o[o.length - 1] & s)) throw new Error("invalid checksum");
				return Object(n.hexlify)(o.slice(0, a / 8))
			}

			function D(e, r) {
				if (r = F(r), (e = Object(n.arrayify)(e)).length % 4 != 0 || e.length < 16 || e.length > 32) throw new Error("invalid entropy");
				const t = [0];
				let o = 11;
				for (let n = 0; n < e.length; n++) o > 8 ? (t[t.length - 1] <<= 8, t[t.length - 1] |= e[n], o -= 8) : (t[t.length - 1] <<= o, t[t.length - 1] |= e[n] >> 8 - o, t.push(e[n] & (1 << 8 - o) - 1), o += 3);
				const i = e.length / 4,
					a = Object(n.arrayify)(Object(u.c)(e))[0] & C(i);
				return t[t.length - 1] <<= i, t[t.length - 1] |= a >> 8 - i, r.join(t.map(e => r.getWord(e)))
			}

			function B(e, r) {
				try {
					return j(e, r), !0
				} catch (t) {}
				return !1
			}

			function J(e) {
				return ("number" != typeof e || e < 0 || e >= P || e % 1) && T.throwArgumentError("invalid account index", "index", e), `m/44'/60'/${e}'/0/0`
			}
		},
		"./node_modules/@ethersproject/json-wallets/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "json-wallets/5.4.0"
		},
		"./node_modules/@ethersproject/json-wallets/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "decryptCrowdsale", (function() {
				return p
			})), t.d(r, "decryptKeystore", (function() {
				return E.a
			})), t.d(r, "decryptKeystoreSync", (function() {
				return E.b
			})), t.d(r, "encryptKeystore", (function() {
				return E.c
			})), t.d(r, "isCrowdsaleWallet", (function() {
				return b.b
			})), t.d(r, "isKeystoreWallet", (function() {
				return b.c
			})), t.d(r, "getJsonWalletAddress", (function() {
				return b.a
			})), t.d(r, "decryptJsonWallet", (function() {
				return v
			})), t.d(r, "decryptJsonWalletSync", (function() {
				return N
			}));
			var o = t("./node_modules/aes-js/index.js"),
				n = t.n(o),
				i = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js"),
				c = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				u = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				h = t("./node_modules/@ethersproject/json-wallets/node_modules/@ethersproject/logger/lib.esm/index.js"),
				d = t("./node_modules/@ethersproject/json-wallets/lib.esm/_version.js"),
				f = t("./node_modules/@ethersproject/json-wallets/lib.esm/utils.js");
			const m = new h.a(d.a);
			class g extends u.Description {
				isCrowdsaleAccount(e) {
					return !(!e || !e._isCrowdsaleAccount)
				}
			}

			function p(e, r) {
				const t = JSON.parse(e);
				r = Object(f.a)(r);
				const o = Object(i.getAddress)(Object(f.c)(t, "ethaddr")),
					u = Object(f.b)(Object(f.c)(t, "encseed"));
				u && u.length % 16 == 0 || m.throwArgumentError("invalid encseed", "json", e);
				const h = Object(a.arrayify)(Object(l.a)(r, r, 2e3, 32, "sha256")).slice(0, 16),
					d = u.slice(0, 16),
					p = u.slice(16),
					b = new n.a.ModeOfOperation.cbc(h, d),
					E = n.a.padding.pkcs7.strip(Object(a.arrayify)(b.decrypt(p)));
				let v = "";
				for (let n = 0; n < E.length; n++) v += String.fromCharCode(E[n]);
				const N = Object(c.f)(v),
					y = Object(s.keccak256)(N);
				return new g({
					_isCrowdsaleAccount: !0,
					address: o,
					privateKey: y
				})
			}
			var b = t("./node_modules/@ethersproject/json-wallets/lib.esm/inspect.js"),
				E = t("./node_modules/@ethersproject/json-wallets/lib.esm/keystore.js");

			function v(e, r, t) {
				if (Object(b.b)(e)) {
					t && t(0);
					const o = p(e, r);
					return t && t(1), Promise.resolve(o)
				}
				return Object(b.c)(e) ? Object(E.a)(e, r, t) : Promise.reject(new Error("invalid JSON wallet"))
			}

			function N(e, r) {
				if (Object(b.b)(e)) return p(e, r);
				if (Object(b.c)(e)) return Object(E.b)(e, r);
				throw new Error("invalid JSON wallet")
			}
		},
		"./node_modules/@ethersproject/json-wallets/lib.esm/inspect.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return n
			})), t.d(r, "c", (function() {
				return i
			})), t.d(r, "a", (function() {
				return a
			}));
			var o = t("./node_modules/@ethersproject/address/lib.esm/index.js");

			function n(e) {
				let r = null;
				try {
					r = JSON.parse(e)
				} catch (t) {
					return !1
				}
				return r.encseed && r.ethaddr
			}

			function i(e) {
				let r = null;
				try {
					r = JSON.parse(e)
				} catch (t) {
					return !1
				}
				return !(!r.version || parseInt(r.version) !== r.version || 3 !== parseInt(r.version))
			}

			function a(e) {
				if (n(e)) try {
					return Object(o.getAddress)(JSON.parse(e).ethaddr)
				} catch (r) {
					return null
				}
				if (i(e)) try {
					return Object(o.getAddress)(JSON.parse(e).address)
				} catch (r) {
					return null
				}
				return null
			}
		},
		"./node_modules/@ethersproject/json-wallets/lib.esm/keystore.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return S
			})), t.d(r, "a", (function() {
				return w
			})), t.d(r, "c", (function() {
				return P
			}));
			var o = t("./node_modules/aes-js/index.js"),
				n = t.n(o),
				i = t("./node_modules/scrypt-js/scrypt.js"),
				a = t.n(i),
				s = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				c = t("./node_modules/@ethersproject/hdnode/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				h = t("./node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js"),
				d = t("./node_modules/@ethersproject/random/lib.esm/random.js"),
				f = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				m = t("./node_modules/@ethersproject/transactions/lib.esm/index.js"),
				g = t("./node_modules/@ethersproject/json-wallets/lib.esm/utils.js"),
				p = t("./node_modules/@ethersproject/json-wallets/node_modules/@ethersproject/logger/lib.esm/index.js"),
				b = t("./node_modules/@ethersproject/json-wallets/lib.esm/_version.js"),
				E = function(e, r, t, o) {
					return new(t || (t = Promise))((function(n, i) {
						function a(e) {
							try {
								l(o.next(e))
							} catch (r) {
								i(r)
							}
						}

						function s(e) {
							try {
								l(o.throw(e))
							} catch (r) {
								i(r)
							}
						}

						function l(e) {
							var r;
							e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
								e(r)
							}))).then(a, s)
						}
						l((o = o.apply(e, r || [])).next())
					}))
				};
			const v = new p.a(b.a);

			function N(e) {
				return null != e && e.mnemonic && e.mnemonic.phrase
			}
			class y extends f.Description {
				isKeystoreAccount(e) {
					return !(!e || !e._isKeystoreAccount)
				}
			}

			function O(e, r) {
				const t = Object(g.b)(Object(g.c)(e, "crypto/ciphertext"));
				if (Object(l.hexlify)(Object(u.keccak256)(Object(l.concat)([r.slice(16, 32), t]))).substring(2) !== Object(g.c)(e, "crypto/mac").toLowerCase()) throw new Error("invalid password");
				const o = function(e, r, t) {
					if ("aes-128-ctr" === Object(g.c)(e, "crypto/cipher")) {
						const o = Object(g.b)(Object(g.c)(e, "crypto/cipherparams/iv")),
							i = new n.a.Counter(o),
							a = new n.a.ModeOfOperation.ctr(r, i);
						return Object(l.arrayify)(a.decrypt(t))
					}
					return null
				}(e, r.slice(0, 16), t);
				o || v.throwError("unsupported cipher", p.a.errors.UNSUPPORTED_OPERATION, {
					operation: "decrypt"
				});
				const i = r.slice(32, 64),
					a = Object(m.computeAddress)(o);
				if (e.address) {
					let r = e.address.toLowerCase();
					if ("0x" !== r.substring(0, 2) && (r = "0x" + r), Object(s.getAddress)(r) !== a) throw new Error("address mismatch")
				}
				const h = {
					_isKeystoreAccount: !0,
					address: a,
					privateKey: Object(l.hexlify)(o)
				};
				if ("0.1" === Object(g.c)(e, "x-ethers/version")) {
					const r = Object(g.b)(Object(g.c)(e, "x-ethers/mnemonicCiphertext")),
						t = Object(g.b)(Object(g.c)(e, "x-ethers/mnemonicCounter")),
						o = new n.a.Counter(t),
						a = new n.a.ModeOfOperation.ctr(i, o),
						s = Object(g.c)(e, "x-ethers/path") || c.defaultPath,
						u = Object(g.c)(e, "x-ethers/locale") || "en",
						f = Object(l.arrayify)(a.decrypt(r));
					try {
						const e = Object(c.entropyToMnemonic)(f, u),
							r = c.HDNode.fromMnemonic(e, null, u).derivePath(s);
						if (r.privateKey != h.privateKey) throw new Error("mnemonic mismatch");
						h.mnemonic = r.mnemonic
					} catch (d) {
						if (d.code !== p.a.errors.INVALID_ARGUMENT || "wordlist" !== d.argument) throw d
					}
				}
				return new y(h)
			}

			function R(e, r, t, o, n) {
				return Object(l.arrayify)(Object(h.a)(e, r, t, o, n))
			}

			function A(e, r, t, o, n) {
				return Promise.resolve(R(e, r, t, o, n))
			}

			function T(e, r, t, o, n) {
				const i = Object(g.a)(r),
					a = Object(g.c)(e, "crypto/kdf");
				if (a && "string" == typeof a) {
					const r = function(e, r) {
						return v.throwArgumentError("invalid key-derivation function parameters", e, r)
					};
					if ("scrypt" === a.toLowerCase()) {
						const t = Object(g.b)(Object(g.c)(e, "crypto/kdfparams/salt")),
							s = parseInt(Object(g.c)(e, "crypto/kdfparams/n")),
							l = parseInt(Object(g.c)(e, "crypto/kdfparams/r")),
							c = parseInt(Object(g.c)(e, "crypto/kdfparams/p"));
						s && l && c || r("kdf", a), 0 != (s & s - 1) && r("N", s);
						const u = parseInt(Object(g.c)(e, "crypto/kdfparams/dklen"));
						return 32 !== u && r("dklen", u), o(i, t, s, l, c, 64, n)
					}
					if ("pbkdf2" === a.toLowerCase()) {
						const o = Object(g.b)(Object(g.c)(e, "crypto/kdfparams/salt"));
						let n = null;
						const a = Object(g.c)(e, "crypto/kdfparams/prf");
						"hmac-sha256" === a ? n = "sha256" : "hmac-sha512" === a ? n = "sha512" : r("prf", a);
						const s = parseInt(Object(g.c)(e, "crypto/kdfparams/c")),
							l = parseInt(Object(g.c)(e, "crypto/kdfparams/dklen"));
						return 32 !== l && r("dklen", l), t(i, o, s, l, n)
					}
				}
				return v.throwArgumentError("unsupported key-derivation function", "kdf", a)
			}

			function S(e, r) {
				const t = JSON.parse(e);
				return O(t, T(t, r, R, a.a.syncScrypt))
			}

			function w(e, r, t) {
				return E(this, void 0, void 0, (function*() {
					const o = JSON.parse(e);
					return O(o, yield T(o, r, A, a.a.scrypt, t))
				}))
			}

			function P(e, r, t, o) {
				try {
					if (Object(s.getAddress)(e.address) !== Object(m.computeAddress)(e.privateKey)) throw new Error("address/privateKey mismatch");
					if (N(e)) {
						const r = e.mnemonic;
						if (c.HDNode.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path || c.defaultPath).privateKey != e.privateKey) throw new Error("mnemonic mismatch")
					}
				} catch (S) {
					return Promise.reject(S)
				}
				"function" != typeof t || o || (o = t, t = {}), t || (t = {});
				const i = Object(l.arrayify)(e.privateKey),
					h = Object(g.a)(r);
				let f = null,
					p = null,
					b = null;
				if (N(e)) {
					const r = e.mnemonic;
					f = Object(l.arrayify)(Object(c.mnemonicToEntropy)(r.phrase, r.locale || "en")), p = r.path || c.defaultPath, b = r.locale || "en"
				}
				let E = t.client;
				E || (E = "ethers.js");
				let v = null;
				v = t.salt ? Object(l.arrayify)(t.salt) : Object(d.a)(32);
				let y = null;
				if (t.iv) {
					if (16 !== (y = Object(l.arrayify)(t.iv)).length) throw new Error("invalid iv")
				} else y = Object(d.a)(16);
				let O = null;
				if (t.uuid) {
					if (16 !== (O = Object(l.arrayify)(t.uuid)).length) throw new Error("invalid uuid")
				} else O = Object(d.a)(16);
				let R = 1 << 17,
					A = 8,
					T = 1;
				return t.scrypt && (t.scrypt.N && (R = t.scrypt.N), t.scrypt.r && (A = t.scrypt.r), t.scrypt.p && (T = t.scrypt.p)), a.a.scrypt(h, v, R, A, T, 64, o).then(r => {
					const t = (r = Object(l.arrayify)(r)).slice(0, 16),
						o = r.slice(16, 32),
						a = r.slice(32, 64),
						s = new n.a.Counter(y),
						c = new n.a.ModeOfOperation.ctr(t, s),
						h = Object(l.arrayify)(c.encrypt(i)),
						m = Object(u.keccak256)(Object(l.concat)([o, h])),
						N = {
							address: e.address.substring(2).toLowerCase(),
							id: Object(g.d)(O),
							version: 3,
							Crypto: {
								cipher: "aes-128-ctr",
								cipherparams: {
									iv: Object(l.hexlify)(y).substring(2)
								},
								ciphertext: Object(l.hexlify)(h).substring(2),
								kdf: "scrypt",
								kdfparams: {
									salt: Object(l.hexlify)(v).substring(2),
									n: R,
									dklen: 32,
									p: T,
									r: A
								},
								mac: m.substring(2)
							}
						};
					if (f) {
						const e = Object(d.a)(16),
							r = new n.a.Counter(e),
							t = new n.a.ModeOfOperation.ctr(a, r),
							o = Object(l.arrayify)(t.encrypt(f)),
							i = new Date,
							s = i.getUTCFullYear() + "-" + Object(g.e)(i.getUTCMonth() + 1, 2) + "-" + Object(g.e)(i.getUTCDate(), 2) + "T" + Object(g.e)(i.getUTCHours(), 2) + "-" + Object(g.e)(i.getUTCMinutes(), 2) + "-" + Object(g.e)(i.getUTCSeconds(), 2) + ".0Z";
						N["x-ethers"] = {
							client: E,
							gethFilename: "UTC--" + s + "--" + N.address,
							mnemonicCounter: Object(l.hexlify)(e).substring(2),
							mnemonicCiphertext: Object(l.hexlify)(o).substring(2),
							path: p,
							locale: b,
							version: "0.1"
						}
					}
					return JSON.stringify(N)
				})
			}
		},
		"./node_modules/@ethersproject/json-wallets/lib.esm/utils.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return i
			})), t.d(r, "e", (function() {
				return a
			})), t.d(r, "a", (function() {
				return s
			})), t.d(r, "c", (function() {
				return l
			})), t.d(r, "d", (function() {
				return c
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");

			function i(e) {
				return "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), Object(o.arrayify)(e)
			}

			function a(e, r) {
				for (e = String(e); e.length < r;) e = "0" + e;
				return e
			}

			function s(e) {
				return "string" == typeof e ? Object(n.f)(e, n.a.NFKC) : Object(o.arrayify)(e)
			}

			function l(e, r) {
				let t = e;
				const o = r.toLowerCase().split("/");
				for (let n = 0; n < o.length; n++) {
					let e = null;
					for (const r in t)
						if (r.toLowerCase() === o[n]) {
							e = t[r];
							break
						} if (null === e) return null;
					t = e
				}
				return t
			}

			function c(e) {
				const r = Object(o.arrayify)(e);
				r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128;
				const t = Object(o.hexlify)(r);
				return [t.substring(2, 10), t.substring(10, 14), t.substring(14, 18), t.substring(18, 22), t.substring(22, 34)].join("-")
			}
		},
		"./node_modules/@ethersproject/json-wallets/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "keccak256", (function() {
				return a
			}));
			var o = t("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				n = t.n(o),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function a(e) {
				return "0x" + n.a.keccak_256(Object(i.arrayify)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, r, t) {
			(function(r, t) {
				! function() {
					"use strict";
					var o = "object" == typeof window ? window : {};
					!o.JS_SHA3_NO_NODE_JS && "object" == typeof r && r.versions && r.versions.node && (o = t);
					for (var n = !o.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, i = "0123456789abcdef".split(""), a = [0, 8, 16, 24], s = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], l = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], u = function(e, r, t) {
							return function(o) {
								return new y(e, r, e).update(o)[t]()
							}
						}, h = function(e, r, t) {
							return function(o, n) {
								return new y(e, r, n).update(o)[t]()
							}
						}, d = function(e, r) {
							var t = u(e, r, "hex");
							t.create = function() {
								return new y(e, r, e)
							}, t.update = function(e) {
								return t.create().update(e)
							};
							for (var o = 0; o < c.length; ++o) {
								var n = c[o];
								t[n] = u(e, r, n)
							}
							return t
						}, f = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: l,
							createMethod: d
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: l,
							createMethod: d
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, r) {
								var t = h(e, r, "hex");
								t.create = function(t) {
									return new y(e, r, t)
								}, t.update = function(e, r) {
									return t.create(r).update(e)
								};
								for (var o = 0; o < c.length; ++o) {
									var n = c[o];
									t[n] = h(e, r, n)
								}
								return t
							}
						}], m = {}, g = [], p = 0; p < f.length; ++p)
						for (var b = f[p], E = b.bits, v = 0; v < E.length; ++v) {
							var N = b.name + "_" + E[v];
							g.push(N), m[N] = b.createMethod(E[v], b.padding)
						}

					function y(e, r, t) {
						this.blocks = [], this.s = [], this.padding = r, this.outputBits = t, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = t >> 5, this.extraBytes = (31 & t) >> 3;
						for (var o = 0; o < 50; ++o) this.s[o] = 0
					}
					y.prototype.update = function(e) {
						var r = "string" != typeof e;
						r && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var t, o, n = e.length, i = this.blocks, s = this.byteCount, l = this.blockCount, c = 0, u = this.s; c < n;) {
							if (this.reset)
								for (this.reset = !1, i[0] = this.block, t = 1; t < l + 1; ++t) i[t] = 0;
							if (r)
								for (t = this.start; c < n && t < s; ++c) i[t >> 2] |= e[c] << a[3 & t++];
							else
								for (t = this.start; c < n && t < s; ++c)(o = e.charCodeAt(c)) < 128 ? i[t >> 2] |= o << a[3 & t++] : o < 2048 ? (i[t >> 2] |= (192 | o >> 6) << a[3 & t++], i[t >> 2] |= (128 | 63 & o) << a[3 & t++]) : o < 55296 || o >= 57344 ? (i[t >> 2] |= (224 | o >> 12) << a[3 & t++], i[t >> 2] |= (128 | o >> 6 & 63) << a[3 & t++], i[t >> 2] |= (128 | 63 & o) << a[3 & t++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++c)), i[t >> 2] |= (240 | o >> 18) << a[3 & t++], i[t >> 2] |= (128 | o >> 12 & 63) << a[3 & t++], i[t >> 2] |= (128 | o >> 6 & 63) << a[3 & t++], i[t >> 2] |= (128 | 63 & o) << a[3 & t++]);
							if (this.lastByteIndex = t, t >= s) {
								for (this.start = t - s, this.block = i[l], t = 0; t < l; ++t) u[t] ^= i[t];
								O(u), this.reset = !0
							} else this.start = t
						}
						return this
					}, y.prototype.finalize = function() {
						var e = this.blocks,
							r = this.lastByteIndex,
							t = this.blockCount,
							o = this.s;
						if (e[r >> 2] |= this.padding[3 & r], this.lastByteIndex === this.byteCount)
							for (e[0] = e[t], r = 1; r < t + 1; ++r) e[r] = 0;
						for (e[t - 1] |= 2147483648, r = 0; r < t; ++r) o[r] ^= e[r];
						O(o)
					}, y.prototype.toString = y.prototype.hex = function() {
						this.finalize();
						for (var e, r = this.blockCount, t = this.s, o = this.outputBlocks, n = this.extraBytes, a = 0, s = 0, l = ""; s < o;) {
							for (a = 0; a < r && s < o; ++a, ++s) e = t[a], l += i[e >> 4 & 15] + i[15 & e] + i[e >> 12 & 15] + i[e >> 8 & 15] + i[e >> 20 & 15] + i[e >> 16 & 15] + i[e >> 28 & 15] + i[e >> 24 & 15];
							s % r == 0 && (O(t), a = 0)
						}
						return n && (e = t[a], n > 0 && (l += i[e >> 4 & 15] + i[15 & e]), n > 1 && (l += i[e >> 12 & 15] + i[e >> 8 & 15]), n > 2 && (l += i[e >> 20 & 15] + i[e >> 16 & 15])), l
					}, y.prototype.arrayBuffer = function() {
						this.finalize();
						var e, r = this.blockCount,
							t = this.s,
							o = this.outputBlocks,
							n = this.extraBytes,
							i = 0,
							a = 0,
							s = this.outputBits >> 3;
						e = n ? new ArrayBuffer(o + 1 << 2) : new ArrayBuffer(s);
						for (var l = new Uint32Array(e); a < o;) {
							for (i = 0; i < r && a < o; ++i, ++a) l[a] = t[i];
							a % r == 0 && O(t)
						}
						return n && (l[i] = t[i], e = e.slice(0, s)), e
					}, y.prototype.buffer = y.prototype.arrayBuffer, y.prototype.digest = y.prototype.array = function() {
						this.finalize();
						for (var e, r, t = this.blockCount, o = this.s, n = this.outputBlocks, i = this.extraBytes, a = 0, s = 0, l = []; s < n;) {
							for (a = 0; a < t && s < n; ++a, ++s) e = s << 2, r = o[a], l[e] = 255 & r, l[e + 1] = r >> 8 & 255, l[e + 2] = r >> 16 & 255, l[e + 3] = r >> 24 & 255;
							s % t == 0 && O(o)
						}
						return i && (e = s << 2, r = o[a], i > 0 && (l[e] = 255 & r), i > 1 && (l[e + 1] = r >> 8 & 255), i > 2 && (l[e + 2] = r >> 16 & 255)), l
					};
					var O = function(e) {
						var r, t, o, n, i, a, l, c, u, h, d, f, m, g, p, b, E, v, N, y, O, R, A, T, S, w, P, C, I, _, F, L, M, U, k, j, D, B, J, G, x, X, H, V, z, K, Z, W, Q, q, Y, $, ee, re, te, oe, ne, ie, ae, se, le, ce, ue;
						for (o = 0; o < 48; o += 2) n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], l = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], h = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], r = (f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | l >>> 31), t = (m = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (l << 1 | a >>> 31), e[0] ^= r, e[1] ^= t, e[10] ^= r, e[11] ^= t, e[20] ^= r, e[21] ^= t, e[30] ^= r, e[31] ^= t, e[40] ^= r, e[41] ^= t, r = n ^ (c << 1 | u >>> 31), t = i ^ (u << 1 | c >>> 31), e[2] ^= r, e[3] ^= t, e[12] ^= r, e[13] ^= t, e[22] ^= r, e[23] ^= t, e[32] ^= r, e[33] ^= t, e[42] ^= r, e[43] ^= t, r = a ^ (h << 1 | d >>> 31), t = l ^ (d << 1 | h >>> 31), e[4] ^= r, e[5] ^= t, e[14] ^= r, e[15] ^= t, e[24] ^= r, e[25] ^= t, e[34] ^= r, e[35] ^= t, e[44] ^= r, e[45] ^= t, r = c ^ (f << 1 | m >>> 31), t = u ^ (m << 1 | f >>> 31), e[6] ^= r, e[7] ^= t, e[16] ^= r, e[17] ^= t, e[26] ^= r, e[27] ^= t, e[36] ^= r, e[37] ^= t, e[46] ^= r, e[47] ^= t, r = h ^ (n << 1 | i >>> 31), t = d ^ (i << 1 | n >>> 31), e[8] ^= r, e[9] ^= t, e[18] ^= r, e[19] ^= t, e[28] ^= r, e[29] ^= t, e[38] ^= r, e[39] ^= t, e[48] ^= r, e[49] ^= t, g = e[0], p = e[1], K = e[11] << 4 | e[10] >>> 28, Z = e[10] << 4 | e[11] >>> 28, C = e[20] << 3 | e[21] >>> 29, I = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, le = e[30] << 9 | e[31] >>> 23, X = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, U = e[2] << 1 | e[3] >>> 31, k = e[3] << 1 | e[2] >>> 31, b = e[13] << 12 | e[12] >>> 20, E = e[12] << 12 | e[13] >>> 20, W = e[22] << 10 | e[23] >>> 22, Q = e[23] << 10 | e[22] >>> 22, _ = e[33] << 13 | e[32] >>> 19, F = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, re = e[5] << 30 | e[4] >>> 2, te = e[4] << 30 | e[5] >>> 2, j = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, v = e[25] << 11 | e[24] >>> 21, N = e[24] << 11 | e[25] >>> 21, q = e[34] << 15 | e[35] >>> 17, Y = e[35] << 15 | e[34] >>> 17, L = e[45] << 29 | e[44] >>> 3, M = e[44] << 29 | e[45] >>> 3, T = e[6] << 28 | e[7] >>> 4, S = e[7] << 28 | e[6] >>> 4, oe = e[17] << 23 | e[16] >>> 9, ne = e[16] << 23 | e[17] >>> 9, B = e[26] << 25 | e[27] >>> 7, J = e[27] << 25 | e[26] >>> 7, y = e[36] << 21 | e[37] >>> 11, O = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, V = e[8] << 27 | e[9] >>> 5, z = e[9] << 27 | e[8] >>> 5, w = e[18] << 20 | e[19] >>> 12, P = e[19] << 20 | e[18] >>> 12, ie = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, G = e[38] << 8 | e[39] >>> 24, x = e[39] << 8 | e[38] >>> 24, R = e[48] << 14 | e[49] >>> 18, A = e[49] << 14 | e[48] >>> 18, e[0] = g ^ ~b & v, e[1] = p ^ ~E & N, e[10] = T ^ ~w & C, e[11] = S ^ ~P & I, e[20] = U ^ ~j & B, e[21] = k ^ ~D & J, e[30] = V ^ ~K & W, e[31] = z ^ ~Z & Q, e[40] = re ^ ~oe & ie, e[41] = te ^ ~ne & ae, e[2] = b ^ ~v & y, e[3] = E ^ ~N & O, e[12] = w ^ ~C & _, e[13] = P ^ ~I & F, e[22] = j ^ ~B & G, e[23] = D ^ ~J & x, e[32] = K ^ ~W & q, e[33] = Z ^ ~Q & Y, e[42] = oe ^ ~ie & se, e[43] = ne ^ ~ae & le, e[4] = v ^ ~y & R, e[5] = N ^ ~O & A, e[14] = C ^ ~_ & L, e[15] = I ^ ~F & M, e[24] = B ^ ~G & X, e[25] = J ^ ~x & H, e[34] = W ^ ~q & $, e[35] = Q ^ ~Y & ee, e[44] = ie ^ ~se & ce, e[45] = ae ^ ~le & ue, e[6] = y ^ ~R & g, e[7] = O ^ ~A & p, e[16] = _ ^ ~L & T, e[17] = F ^ ~M & S, e[26] = G ^ ~X & U, e[27] = x ^ ~H & k, e[36] = q ^ ~$ & V, e[37] = Y ^ ~ee & z, e[46] = se ^ ~ce & re, e[47] = le ^ ~ue & te, e[8] = R ^ ~g & b, e[9] = A ^ ~p & E, e[18] = L ^ ~T & w, e[19] = M ^ ~S & P, e[28] = X ^ ~U & j, e[29] = H ^ ~k & D, e[38] = $ ^ ~V & K, e[39] = ee ^ ~z & Z, e[48] = ce ^ ~re & oe, e[49] = ue ^ ~te & ne, e[0] ^= s[o], e[1] ^= s[o + 1]
					};
					if (n) e.exports = m;
					else
						for (p = 0; p < g.length; ++p) o[g[p]] = m[g[p]]
				}()
			}).call(this, t("./node_modules/process/browser.js"), t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return i
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js");

			function i(e, r, t, i, a) {
				let s;
				e = Object(o.arrayify)(e), r = Object(o.arrayify)(r);
				let l = 1;
				const c = new Uint8Array(i),
					u = new Uint8Array(r.length + 4);
				let h, d;
				u.set(r);
				for (let f = 1; f <= l; f++) {
					u[r.length] = f >> 24 & 255, u[r.length + 1] = f >> 16 & 255, u[r.length + 2] = f >> 8 & 255, u[r.length + 3] = 255 & f;
					let m = Object(o.arrayify)(Object(n.a)(a, e, u));
					s || (s = m.length, d = new Uint8Array(s), h = i - ((l = Math.ceil(i / s)) - 1) * s), d.set(m);
					for (let r = 1; r < t; r++) {
						m = Object(o.arrayify)(Object(n.a)(a, e, m));
						for (let e = 0; e < s; e++) d[e] ^= m[e]
					}
					const g = (f - 1) * s,
						p = f === l ? h : s;
					c.set(Object(o.arrayify)(d).slice(0, p), g)
				}
				return Object(o.hexlify)(c)
			}
		},
		"./node_modules/@ethersproject/properties/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "defineReadOnly", (function() {
				return p
			})), t.d(r, "getStatic", (function() {
				return b
			})), t.d(r, "resolveProperties", (function() {
				return E
			})), t.d(r, "checkProperties", (function() {
				return v
			})), t.d(r, "shallowCopy", (function() {
				return N
			})), t.d(r, "deepCopy", (function() {
				return R
			})), t.d(r, "Description", (function() {
				return A
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u;
			var m = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const g = new f("properties/5.4.1");

			function p(e, r, t) {
				Object.defineProperty(e, r, {
					enumerable: !0,
					value: t,
					writable: !1
				})
			}

			function b(e, r) {
				for (let t = 0; t < 32; t++) {
					if (e[r]) return e[r];
					if (!e.prototype || "object" != typeof e.prototype) break;
					e = Object.getPrototypeOf(e.prototype).constructor
				}
				return null
			}

			function E(e) {
				return m(this, void 0, void 0, (function*() {
					const r = Object.keys(e).map(r => {
						const t = e[r];
						return Promise.resolve(t).then(e => ({
							key: r,
							value: e
						}))
					});
					return (yield Promise.all(r)).reduce((e, r) => (e[r.key] = r.value, e), {})
				}))
			}

			function v(e, r) {
				e && "object" == typeof e || g.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach(t => {
					r[t] || g.throwArgumentError("invalid object key - " + t, "transaction:" + t, e)
				})
			}

			function N(e) {
				const r = {};
				for (const t in e) r[t] = e[t];
				return r
			}
			const y = {
				bigint: !0,
				boolean: !0,
				function: !0,
				number: !0,
				string: !0
			};

			function O(e) {
				if (function e(r) {
						if (null == r || y[typeof r]) return !0;
						if (Array.isArray(r) || "object" == typeof r) {
							if (!Object.isFrozen(r)) return !1;
							const o = Object.keys(r);
							for (let n = 0; n < o.length; n++) {
								let i = null;
								try {
									i = r[o[n]]
								} catch (t) {
									continue
								}
								if (!e(i)) return !1
							}
							return !0
						}
						return g.throwArgumentError(`Cannot deepCopy ${typeof r}`, "object", r)
					}(e)) return e;
				if (Array.isArray(e)) return Object.freeze(e.map(e => R(e)));
				if ("object" == typeof e) {
					const r = {};
					for (const t in e) {
						const o = e[t];
						void 0 !== o && p(r, t, R(o))
					}
					return r
				}
				return g.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
			}

			function R(e) {
				return O(e)
			}
			class A {
				constructor(e) {
					for (const r in e) this[r] = R(e[r])
				}
			}
		},
		"./node_modules/@ethersproject/providers/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "Provider", (function() {
				return o.b
			})), t.d(r, "BaseProvider", (function() {
				return ge
			})), t.d(r, "Resolver", (function() {
				return de
			})), t.d(r, "UrlJsonRpcProvider", (function() {
				return De
			})), t.d(r, "FallbackProvider", (function() {
				return pr
			})), t.d(r, "AlchemyProvider", (function() {
				return xe
			})), t.d(r, "AlchemyWebSocketProvider", (function() {
				return Ge
			})), t.d(r, "CloudflareProvider", (function() {
				return Ve
			})), t.d(r, "EtherscanProvider", (function() {
				return er
			})), t.d(r, "InfuraProvider", (function() {
				return yr
			})), t.d(r, "InfuraWebSocketProvider", (function() {
				return Nr
			})), t.d(r, "JsonRpcProvider", (function() {
				return Ce
			})), t.d(r, "JsonRpcBatchProvider", (function() {
				return Or
			})), t.d(r, "NodesmithProvider", (function() {
				return Tr
			})), t.d(r, "PocketProvider", (function() {
				return Pr
			})), t.d(r, "StaticJsonRpcProvider", (function() {
				return je
			})), t.d(r, "Web3Provider", (function() {
				return Fr
			})), t.d(r, "WebSocketProvider", (function() {
				return Me
			})), t.d(r, "IpcProvider", (function() {
				return br
			})), t.d(r, "JsonRpcSigner", (function() {
				return Se
			})), t.d(r, "getDefaultProvider", (function() {
				return Mr
			})), t.d(r, "getNetwork", (function() {
				return O
			})), t.d(r, "isCommunityResource", (function() {
				return q
			})), t.d(r, "isCommunityResourcable", (function() {
				return Q
			})), t.d(r, "showThrottleMessage", (function() {
				return $
			})), t.d(r, "Formatter", (function() {
				return W
			}));
			var o = t("./node_modules/@ethersproject/abstract-provider/lib.esm/index.js");
			const n = "logger/5.4.1";
			let i = !1,
				a = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let l = s.default,
				c = null;
			const u = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var h, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(h || (h = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			const f = "0123456789abcdef";
			class m {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), l > s[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(m.levels.DEBUG, e)
				}
				info(...e) {
					this._log(m.levels.INFO, e)
				}
				warn(...e) {
					this._log(m.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (a) return this.makeError("censored error", r, {});
					r || (r = m.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += f[r[e] >> 4], t += f[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, m.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return c || (c = new m(n)), c
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), i) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					a = !!e, i = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? l = r : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = d, m.levels = h;
			const g = new m("networks/5.4.2");

			function p(e) {
				const r = function(r, t) {
					null == t && (t = {});
					const o = [];
					if (r.InfuraProvider) try {
						o.push(new r.InfuraProvider(e, t.infura))
					} catch (n) {}
					if (r.EtherscanProvider) try {
						o.push(new r.EtherscanProvider(e, t.etherscan))
					} catch (n) {}
					if (r.AlchemyProvider) try {
						o.push(new r.AlchemyProvider(e, t.alchemy))
					} catch (n) {}
					if (r.PocketProvider) {
						const t = ["goerli", "ropsten", "rinkeby"];
						try {
							const n = new r.PocketProvider(e);
							n.network && -1 === t.indexOf(n.network.name) && o.push(n)
						} catch (n) {}
					}
					if (r.CloudflareProvider) try {
						o.push(new r.CloudflareProvider(e))
					} catch (n) {}
					if (0 === o.length) return null;
					if (r.FallbackProvider) {
						let n = 1;
						return null != t.quorum ? n = t.quorum : "homestead" === e && (n = 2), new r.FallbackProvider(o, n)
					}
					return o[0]
				};
				return r.renetwork = function(e) {
					return p(e)
				}, r
			}

			function b(e, r) {
				const t = function(t, o) {
					return t.JsonRpcProvider ? new t.JsonRpcProvider(e, r) : null
				};
				return t.renetwork = function(r) {
					return b(e, r)
				}, t
			}
			const E = {
					chainId: 1,
					ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
					name: "homestead",
					_defaultProvider: p("homestead")
				},
				v = {
					chainId: 3,
					ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
					name: "ropsten",
					_defaultProvider: p("ropsten")
				},
				N = {
					chainId: 63,
					name: "classicMordor",
					_defaultProvider: b("https://www.ethercluster.com/mordor", "classicMordor")
				},
				y = {
					unspecified: {
						chainId: 0,
						name: "unspecified"
					},
					homestead: E,
					mainnet: E,
					morden: {
						chainId: 2,
						name: "morden"
					},
					ropsten: v,
					testnet: v,
					rinkeby: {
						chainId: 4,
						ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
						name: "rinkeby",
						_defaultProvider: p("rinkeby")
					},
					kovan: {
						chainId: 42,
						name: "kovan",
						_defaultProvider: p("kovan")
					},
					goerli: {
						chainId: 5,
						ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
						name: "goerli",
						_defaultProvider: p("goerli")
					},
					classic: {
						chainId: 61,
						name: "classic",
						_defaultProvider: b("https://www.ethercluster.com/etc", "classic")
					},
					classicMorden: {
						chainId: 62,
						name: "classicMorden"
					},
					classicMordor: N,
					classicTestnet: N,
					classicKotti: {
						chainId: 6,
						name: "classicKotti",
						_defaultProvider: b("https://www.ethercluster.com/kotti", "classicKotti")
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

			function O(e) {
				if (null == e) return null;
				if ("number" == typeof e) {
					for (const r in y) {
						const t = y[r];
						if (t.chainId === e) return {
							name: t.name,
							chainId: t.chainId,
							ensAddress: t.ensAddress || null,
							_defaultProvider: t._defaultProvider || null
						}
					}
					return {
						chainId: e,
						name: "unknown"
					}
				}
				if ("string" == typeof e) {
					const r = y[e];
					return null == r ? null : {
						name: r.name,
						chainId: r.chainId,
						ensAddress: r.ensAddress,
						_defaultProvider: r._defaultProvider || null
					}
				}
				const r = y[e.name];
				if (!r) return "number" != typeof e.chainId && g.throwArgumentError("invalid network chainId", "network", e), e;
				0 !== e.chainId && e.chainId !== r.chainId && g.throwArgumentError("network chainId mismatch", "network", e);
				let t = e._defaultProvider || null;
				var o;
				return null == t && r._defaultProvider && (t = (o = r._defaultProvider) && "function" == typeof o.renetwork ? r._defaultProvider.renetwork(e) : r._defaultProvider), {
					name: e.name,
					chainId: r.chainId,
					ensAddress: e.ensAddress || r.ensAddress || null,
					_defaultProvider: t
				}
			}
			var R = t("./node_modules/@ethersproject/basex/lib.esm/index.js"),
				A = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				T = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				S = t("./node_modules/@ethersproject/constants/lib.esm/hashes.js"),
				w = t("./node_modules/@ethersproject/hash/lib.esm/namehash.js"),
				P = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				C = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js"),
				I = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				_ = t("./node_modules/@ethersproject/web/lib.esm/index.js"),
				F = t("./node_modules/bech32/index.js"),
				L = t.n(F);
			const M = "logger/5.4.1";
			let U = !1,
				k = !1;
			const j = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let D = j.default,
				B = null;
			const J = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var G, x;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(G || (G = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(x || (x = {}));
			const X = "0123456789abcdef";
			class H {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == j[t] && this.throwArgumentError("invalid log level name", "logLevel", e), D > j[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(H.levels.DEBUG, e)
				}
				info(...e) {
					this._log(H.levels.INFO, e)
				}
				warn(...e) {
					this._log(H.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (k) return this.makeError("censored error", r, {});
					r || (r = H.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += X[r[e] >> 4], t += X[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, H.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), J && this.throwError("platform missing String.prototype.normalize", H.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: J
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, H.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, H.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, H.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, H.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", H.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", H.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", H.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return B || (B = new H(M)), B
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", H.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), U) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", H.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					k = !!e, U = !!r
				}
				static setLogLevel(e) {
					const r = j[e.toLowerCase()];
					null != r ? D = r : H.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new H(e)
				}
			}
			H.errors = x, H.levels = G;
			var V = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				z = t("./node_modules/@ethersproject/constants/lib.esm/addresses.js"),
				K = t("./node_modules/@ethersproject/transactions/lib.esm/index.js");
			const Z = new H("providers/5.4.5");
			class W {
				constructor() {
					Z.checkNew(new.target, W), this.formats = this.getDefaultFormats()
				}
				getDefaultFormats() {
					const e = {},
						r = this.address.bind(this),
						t = this.bigNumber.bind(this),
						o = this.blockTag.bind(this),
						n = this.data.bind(this),
						i = this.hash.bind(this),
						a = this.hex.bind(this),
						s = this.number.bind(this),
						l = this.type.bind(this);
					return e.transaction = {
						hash: i,
						type: l,
						accessList: W.allowNull(this.accessList.bind(this), null),
						blockHash: W.allowNull(i, null),
						blockNumber: W.allowNull(s, null),
						transactionIndex: W.allowNull(s, null),
						confirmations: W.allowNull(s, null),
						from: r,
						gasPrice: W.allowNull(t),
						maxPriorityFeePerGas: W.allowNull(t),
						maxFeePerGas: W.allowNull(t),
						gasLimit: t,
						to: W.allowNull(r, null),
						value: t,
						nonce: s,
						data: n,
						r: W.allowNull(this.uint256),
						s: W.allowNull(this.uint256),
						v: W.allowNull(s),
						creates: W.allowNull(r, null),
						raw: W.allowNull(n)
					}, e.transactionRequest = {
						from: W.allowNull(r),
						nonce: W.allowNull(s),
						gasLimit: W.allowNull(t),
						gasPrice: W.allowNull(t),
						maxPriorityFeePerGas: W.allowNull(t),
						maxFeePerGas: W.allowNull(t),
						to: W.allowNull(r),
						value: W.allowNull(t),
						data: W.allowNull(e => this.data(e, !0)),
						type: W.allowNull(s),
						accessList: W.allowNull(this.accessList.bind(this), null)
					}, e.receiptLog = {
						transactionIndex: s,
						blockNumber: s,
						transactionHash: i,
						address: r,
						topics: W.arrayOf(i),
						data: n,
						logIndex: s,
						blockHash: i
					}, e.receipt = {
						to: W.allowNull(this.address, null),
						from: W.allowNull(this.address, null),
						contractAddress: W.allowNull(r, null),
						transactionIndex: s,
						root: W.allowNull(a),
						gasUsed: t,
						logsBloom: W.allowNull(n),
						blockHash: i,
						transactionHash: i,
						logs: W.arrayOf(this.receiptLog.bind(this)),
						blockNumber: s,
						confirmations: W.allowNull(s, null),
						cumulativeGasUsed: t,
						effectiveGasPrice: W.allowNull(t),
						status: W.allowNull(s),
						type: l
					}, e.block = {
						hash: i,
						parentHash: i,
						number: s,
						timestamp: s,
						nonce: W.allowNull(a),
						difficulty: this.difficulty.bind(this),
						gasLimit: t,
						gasUsed: t,
						miner: r,
						extraData: n,
						transactions: W.allowNull(W.arrayOf(i)),
						baseFeePerGas: W.allowNull(t)
					}, e.blockWithTransactions = Object(P.shallowCopy)(e.block), e.blockWithTransactions.transactions = W.allowNull(W.arrayOf(this.transactionResponse.bind(this))), e.filter = {
						fromBlock: W.allowNull(o, void 0),
						toBlock: W.allowNull(o, void 0),
						blockHash: W.allowNull(i, void 0),
						address: W.allowNull(r, void 0),
						topics: W.allowNull(this.topics.bind(this), void 0)
					}, e.filterLog = {
						blockNumber: W.allowNull(s),
						blockHash: W.allowNull(i),
						transactionIndex: s,
						removed: W.allowNull(this.boolean.bind(this)),
						address: r,
						data: W.allowFalsish(n, "0x"),
						topics: W.arrayOf(i),
						transactionHash: i,
						logIndex: s
					}, e
				}
				accessList(e) {
					return Object(K.accessListify)(e || [])
				}
				number(e) {
					return "0x" === e ? 0 : A.a.from(e).toNumber()
				}
				type(e) {
					return "0x" === e || null == e ? 0 : A.a.from(e).toNumber()
				}
				bigNumber(e) {
					return A.a.from(e)
				}
				boolean(e) {
					if ("boolean" == typeof e) return e;
					if ("string" == typeof e) {
						if ("true" === (e = e.toLowerCase())) return !0;
						if ("false" === e) return !1
					}
					throw new Error("invalid boolean - " + e)
				}
				hex(e, r) {
					return "string" == typeof e && (r || "0x" === e.substring(0, 2) || (e = "0x" + e), Object(T.isHexString)(e)) ? e.toLowerCase() : Z.throwArgumentError("invalid hash", "value", e)
				}
				data(e, r) {
					const t = this.hex(e, r);
					if (t.length % 2 != 0) throw new Error("invalid data; odd-length - " + e);
					return t
				}
				address(e) {
					return Object(V.getAddress)(e)
				}
				callAddress(e) {
					if (!Object(T.isHexString)(e, 32)) return null;
					const r = Object(V.getAddress)(Object(T.hexDataSlice)(e, 12));
					return r === z.a ? null : r
				}
				contractAddress(e) {
					return Object(V.getContractAddress)(e)
				}
				blockTag(e) {
					if (null == e) return "latest";
					if ("earliest" === e) return "0x0";
					if ("latest" === e || "pending" === e) return e;
					if ("number" == typeof e || Object(T.isHexString)(e)) return Object(T.hexValue)(e);
					throw new Error("invalid blockTag")
				}
				hash(e, r) {
					const t = this.hex(e, r);
					return 32 !== Object(T.hexDataLength)(t) ? Z.throwArgumentError("invalid hash", "value", e) : t
				}
				difficulty(e) {
					if (null == e) return null;
					const r = A.a.from(e);
					try {
						return r.toNumber()
					} catch (t) {}
					return null
				}
				uint256(e) {
					if (!Object(T.isHexString)(e)) throw new Error("invalid uint256");
					return Object(T.hexZeroPad)(e, 32)
				}
				_block(e, r) {
					return null != e.author && null == e.miner && (e.miner = e.author), W.check(r, e)
				}
				block(e) {
					return this._block(e, this.formats.block)
				}
				blockWithTransactions(e) {
					return this._block(e, this.formats.blockWithTransactions)
				}
				transactionRequest(e) {
					return W.check(this.formats.transactionRequest, e)
				}
				transactionResponse(e) {
					null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && A.a.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = this.contractAddress(e)), 1 !== e.type && 2 !== e.type || null != e.accessList || (e.accessList = []);
					const r = W.check(this.formats.transaction, e);
					if (null != e.chainId) {
						let t = e.chainId;
						Object(T.isHexString)(t) && (t = A.a.from(t).toNumber()), r.chainId = t
					} else {
						let t = e.networkId;
						null == t && null == r.v && (t = e.chainId), Object(T.isHexString)(t) && (t = A.a.from(t).toNumber()), "number" != typeof t && null != r.v && ((t = (r.v - 35) / 2) < 0 && (t = 0), t = parseInt(t)), "number" != typeof t && (t = 0), r.chainId = t
					}
					return r.blockHash && "x" === r.blockHash.replace(/0/g, "") && (r.blockHash = null), r
				}
				transaction(e) {
					return Object(K.parse)(e)
				}
				receiptLog(e) {
					return W.check(this.formats.receiptLog, e)
				}
				receipt(e) {
					const r = W.check(this.formats.receipt, e);
					if (null != r.root)
						if (r.root.length <= 4) {
							const e = A.a.from(r.root).toNumber();
							0 === e || 1 === e ? (null != r.status && r.status !== e && Z.throwArgumentError("alt-root-status/status mismatch", "value", {
								root: r.root,
								status: r.status
							}), r.status = e, delete r.root) : Z.throwArgumentError("invalid alt-root-status", "value.root", r.root)
						} else 66 !== r.root.length && Z.throwArgumentError("invalid root hash", "value.root", r.root);
					return null != r.status && (r.byzantium = !0), r
				}
				topics(e) {
					return Array.isArray(e) ? e.map(e => this.topics(e)) : null != e ? this.hash(e, !0) : null
				}
				filter(e) {
					return W.check(this.formats.filter, e)
				}
				filterLog(e) {
					return W.check(this.formats.filterLog, e)
				}
				static check(e, r) {
					const t = {};
					for (const n in e) try {
						const o = e[n](r[n]);
						void 0 !== o && (t[n] = o)
					} catch (o) {
						throw o.checkKey = n, o.checkValue = r[n], o
					}
					return t
				}
				static allowNull(e, r) {
					return function(t) {
						return null == t ? r : e(t)
					}
				}
				static allowFalsish(e, r) {
					return function(t) {
						return t ? e(t) : r
					}
				}
				static arrayOf(e) {
					return function(r) {
						if (!Array.isArray(r)) throw new Error("not an array");
						const t = [];
						return r.forEach((function(r) {
							t.push(e(r))
						})), t
					}
				}
			}

			function Q(e) {
				return e && "function" == typeof e.isCommunityResource
			}

			function q(e) {
				return Q(e) && e.isCommunityResource()
			}
			let Y = !1;

			function $() {
				Y || (Y = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
			}
			var ee = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const re = new H("providers/5.4.5");

			function te(e) {
				return null == e ? "null" : (32 !== Object(T.hexDataLength)(e) && re.throwArgumentError("invalid topic", "topic", e), e.toLowerCase())
			}

			function oe(e) {
				for (e = e.slice(); e.length > 0 && null == e[e.length - 1];) e.pop();
				return e.map(e => {
					if (Array.isArray(e)) {
						const r = {};
						e.forEach(e => {
							r[te(e)] = !0
						});
						const t = Object.keys(r);
						return t.sort(), t.join("|")
					}
					return te(e)
				}).join("&")
			}

			function ne(e) {
				if ("string" == typeof e) {
					if (e = e.toLowerCase(), 32 === Object(T.hexDataLength)(e)) return "tx:" + e;
					if (-1 === e.indexOf(":")) return e
				} else {
					if (Array.isArray(e)) return "filter:*:" + oe(e);
					if (o.a.isForkEvent(e)) throw re.warn("not implemented"), new Error("not implemented");
					if (e && "object" == typeof e) return "filter:" + (e.address || "*") + ":" + oe(e.topics || [])
				}
				throw new Error("invalid event - " + e)
			}

			function ie() {
				return (new Date).getTime()
			}

			function ae(e) {
				return new Promise(r => {
					setTimeout(r, e)
				})
			}
			const se = ["block", "network", "pending", "poll"];
			class le {
				constructor(e, r, t) {
					Object(P.defineReadOnly)(this, "tag", e), Object(P.defineReadOnly)(this, "listener", r), Object(P.defineReadOnly)(this, "once", t)
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
					const r = e[1],
						t = "" === (o = e[2]) ? [] : o.split(/&/g).map(e => {
							if ("" === e) return [];
							const r = e.split("|").map(e => "null" === e ? null : e);
							return 1 === r.length ? r[0] : r
						});
					var o;
					const n = {};
					return t.length > 0 && (n.topics = t), r && "*" !== r && (n.address = r), n
				}
				pollable() {
					return this.tag.indexOf(":") >= 0 || se.indexOf(this.tag) >= 0
				}
			}
			const ce = {
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

			function ue(e) {
				return Object(T.hexZeroPad)(A.a.from(e).toHexString(), 32)
			}

			function he(e) {
				return R.Base58.encode(Object(T.concat)([e, Object(T.hexDataSlice)(Object(C.c)(Object(C.c)(e)), 0, 4)]))
			}
			class de {
				constructor(e, r, t) {
					Object(P.defineReadOnly)(this, "provider", e), Object(P.defineReadOnly)(this, "name", t), Object(P.defineReadOnly)(this, "address", e.formatter.address(r))
				}
				_fetchBytes(e, r) {
					return ee(this, void 0, void 0, (function*() {
						const t = {
							to: this.address,
							data: Object(T.hexConcat)([e, Object(w.b)(this.name), r || "0x"])
						};
						try {
							const e = yield this.provider.call(t);
							if ("0x" === e) return null;
							const r = A.a.from(Object(T.hexDataSlice)(e, 0, 32)).toNumber(),
								o = A.a.from(Object(T.hexDataSlice)(e, r, r + 32)).toNumber();
							return Object(T.hexDataSlice)(e, r + 32, r + 32 + o)
						} catch (o) {
							return o.code, H.errors.CALL_EXCEPTION, null
						}
					}))
				}
				_getAddress(e, r) {
					const t = ce[String(e)];
					if (null == t && re.throwError(`unsupported coin type: ${e}`, H.errors.UNSUPPORTED_OPERATION, {
							operation: `getAddress(${e})`
						}), "eth" === t.ilk) return this.provider.formatter.address(r);
					const o = Object(T.arrayify)(r);
					if (null != t.p2pkh) {
						const e = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
						if (e) {
							const r = parseInt(e[1], 16);
							if (e[2].length === 2 * r && r >= 1 && r <= 75) return he(Object(T.concat)([
								[t.p2pkh], "0x" + e[2]
							]))
						}
					}
					if (null != t.p2sh) {
						const e = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
						if (e) {
							const r = parseInt(e[1], 16);
							if (e[2].length === 2 * r && r >= 1 && r <= 75) return he(Object(T.concat)([
								[t.p2sh], "0x" + e[2]
							]))
						}
					}
					if (null != t.prefix) {
						const e = o[1];
						let r = o[0];
						if (0 === r ? 20 !== e && 32 !== e && (r = -1) : r = -1, r >= 0 && o.length === 2 + e && e >= 1 && e <= 75) {
							const e = L.a.toWords(o.slice(2));
							return e.unshift(r), L.a.encode(t.prefix, e)
						}
					}
					return null
				}
				getAddress(e) {
					return ee(this, void 0, void 0, (function*() {
						if (null == e && (e = 60), 60 === e) try {
							const e = {
									to: this.address,
									data: "0x3b3b57de" + Object(w.b)(this.name).substring(2)
								},
								r = yield this.provider.call(e);
							return "0x" === r || r === S.a ? null : this.provider.formatter.callAddress(r)
						} catch (o) {
							if (o.code === H.errors.CALL_EXCEPTION) return null;
							throw o
						}
						const r = yield this._fetchBytes("0xf1cb7e06", ue(e));
						if (null == r || "0x" === r) return null;
						const t = this._getAddress(e, r);
						return null == t && re.throwError("invalid or unsupported coin data", H.errors.UNSUPPORTED_OPERATION, {
							operation: `getAddress(${e})`,
							coinType: e,
							data: r
						}), t
					}))
				}
				getContentHash() {
					return ee(this, void 0, void 0, (function*() {
						const e = yield this._fetchBytes("0xbc1c58d1");
						if (null == e || "0x" === e) return null;
						const r = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
						if (r) {
							const e = parseInt(r[3], 16);
							if (r[4].length === 2 * e) return "ipfs://" + R.Base58.encode("0x" + r[1])
						}
						const t = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
						return t && 64 === t[1].length ? "bzz://" + t[1] : re.throwError("invalid or unsupported content hash data", H.errors.UNSUPPORTED_OPERATION, {
							operation: "getContentHash()",
							data: e
						})
					}))
				}
				getText(e) {
					return ee(this, void 0, void 0, (function*() {
						let r = Object(I.f)(e);
						(r = Object(T.concat)([ue(64), ue(r.length), r])).length % 32 != 0 && (r = Object(T.concat)([r, Object(T.hexZeroPad)("0x", 32 - e.length % 32)]));
						const t = yield this._fetchBytes("0x59d1d43c", Object(T.hexlify)(r));
						return null == t || "0x" === t ? null : Object(I.h)(t)
					}))
				}
			}
			let fe = null,
				me = 1;
			class ge extends o.b {
				constructor(e) {
					if (re.checkNew(new.target, o.b), super(), this._events = [], this._emitted = {
							block: -2
						}, this.formatter = new.target.getFormatter(), Object(P.defineReadOnly)(this, "anyNetwork", "any" === e), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise) this._networkPromise = e, e.catch(e => {}), this._ready().catch(e => {});
					else {
						const r = Object(P.getStatic)(new.target, "getNetwork")(e);
						r ? (Object(P.defineReadOnly)(this, "_network", r), this.emit("network", r, null)) : re.throwArgumentError("invalid network", "network", e)
					}
					this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._pollingInterval = 4e3, this._fastQueryDate = 0
				}
				_ready() {
					return ee(this, void 0, void 0, (function*() {
						if (null == this._network) {
							let r = null;
							if (this._networkPromise) try {
								r = yield this._networkPromise
							} catch (e) {}
							null == r && (r = yield this.detectNetwork()), r || re.throwError("no network detected", H.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = r : Object(P.defineReadOnly)(this, "_network", r), this.emit("network", r, null))
						}
						return this._network
					}))
				}
				get ready() {
					return Object(_.poll)(() => this._ready().then(e => e, e => {
						if (e.code !== H.errors.NETWORK_ERROR || "noNetwork" !== e.event) throw e
					}))
				}
				static getFormatter() {
					return null == fe && (fe = new W), fe
				}
				static getNetwork(e) {
					return O(null == e ? "homestead" : e)
				}
				_getInternalBlockNumber(e) {
					return ee(this, void 0, void 0, (function*() {
						if (yield this._ready(), e > 0)
							for (; this._internalBlockNumber;) {
								const r = this._internalBlockNumber;
								try {
									const t = yield r;
									if (ie() - t.respTime <= e) return t.blockNumber;
									break
								} catch (o) {
									if (this._internalBlockNumber === r) break
								}
							}
						const r = ie(),
							t = Object(P.resolveProperties)({
								blockNumber: this.perform("getBlockNumber", {}),
								networkError: this.getNetwork().then(e => null, e => e)
							}).then(({
								blockNumber: e,
								networkError: o
							}) => {
								if (o) throw this._internalBlockNumber === t && (this._internalBlockNumber = null), o;
								const n = ie();
								return (e = A.a.from(e).toNumber()) < this._maxInternalBlockNumber && (e = this._maxInternalBlockNumber), this._maxInternalBlockNumber = e, this._setFastBlockNumber(e), {
									blockNumber: e,
									reqTime: r,
									respTime: n
								}
							});
						return this._internalBlockNumber = t, t.catch(e => {
							this._internalBlockNumber === t && (this._internalBlockNumber = null)
						}), (yield t).blockNumber
					}))
				}
				poll() {
					return ee(this, void 0, void 0, (function*() {
						const e = me++,
							r = [];
						let t = null;
						try {
							t = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
						} catch (o) {
							return void this.emit("error", o)
						}
						if (this._setFastBlockNumber(t), this.emit("poll", e, t), t !== this._lastBlockNumber) {
							if (-2 === this._emitted.block && (this._emitted.block = t - 1), Math.abs(this._emitted.block - t) > 1e3) re.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${t})`), this.emit("error", re.makeError("network block skew detected", H.errors.NETWORK_ERROR, {
								blockNumber: t,
								event: "blockSkew",
								previousBlockNumber: this._emitted.block
							})), this.emit("block", t);
							else
								for (let e = this._emitted.block + 1; e <= t; e++) this.emit("block", e);
							this._emitted.block !== t && (this._emitted.block = t, Object.keys(this._emitted).forEach(e => {
								if ("block" === e) return;
								const r = this._emitted[e];
								"pending" !== r && t - r > 12 && delete this._emitted[e]
							})), -2 === this._lastBlockNumber && (this._lastBlockNumber = t - 1), this._events.forEach(e => {
								switch (e.type) {
									case "tx": {
										const t = e.hash;
										let o = this.getTransactionReceipt(t).then(e => e && null != e.blockNumber ? (this._emitted["t:" + t] = e.blockNumber, this.emit(t, e), null) : null).catch(e => {
											this.emit("error", e)
										});
										r.push(o);
										break
									}
									case "filter": {
										const o = e.filter;
										o.fromBlock = this._lastBlockNumber + 1, o.toBlock = t;
										const n = this.getLogs(o).then(e => {
											0 !== e.length && e.forEach(e => {
												this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(o, e)
											})
										}).catch(e => {
											this.emit("error", e)
										});
										r.push(n);
										break
									}
								}
							}), this._lastBlockNumber = t, Promise.all(r).then(() => {
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
					return ee(this, void 0, void 0, (function*() {
						return re.throwError("provider does not support network detection", H.errors.UNSUPPORTED_OPERATION, {
							operation: "provider.detectNetwork"
						})
					}))
				}
				getNetwork() {
					return ee(this, void 0, void 0, (function*() {
						const e = yield this._ready(), r = yield this.detectNetwork();
						if (e.chainId !== r.chainId) {
							if (this.anyNetwork) return this._network = r, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", r, e), yield ae(0), this._network;
							const t = re.makeError("underlying network changed", H.errors.NETWORK_ERROR, {
								event: "changed",
								network: e,
								detectedNetwork: r
							});
							throw this.emit("error", t), t
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
					const e = ie();
					return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then(e => ((null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e), this._fastBlockNumber))), this._fastBlockNumberPromise
				}
				_setFastBlockNumber(e) {
					null != this._fastBlockNumber && e < this._fastBlockNumber || (this._fastQueryDate = ie(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)))
				}
				waitForTransaction(e, r, t) {
					return ee(this, void 0, void 0, (function*() {
						return this._waitForTransaction(e, null == r ? 1 : r, t || 0, null)
					}))
				}
				_waitForTransaction(e, r, t, o) {
					return ee(this, void 0, void 0, (function*() {
						const n = yield this.getTransactionReceipt(e);
						return (n ? n.confirmations : 0) >= r ? n : new Promise((n, i) => {
							const a = [];
							let s = !1;
							const l = function() {
									return !!s || (s = !0, a.forEach(e => {
										e()
									}), !1)
								},
								c = e => {
									e.confirmations < r || l() || n(e)
								};
							if (this.on(e, c), a.push(() => {
									this.removeListener(e, c)
								}), o) {
								let t = o.startBlock,
									n = null;
								const c = a => ee(this, void 0, void 0, (function*() {
									s || (yield ae(1e3), this.getTransactionCount(o.from).then(u => ee(this, void 0, void 0, (function*() {
										if (!s) {
											if (u <= o.nonce) t = a;
											else {
												{
													const r = yield this.getTransaction(e);
													if (r && null != r.blockNumber) return
												}
												for (null == n && (n = t - 3) < o.startBlock && (n = o.startBlock); n <= a;) {
													if (s) return;
													const t = yield this.getBlockWithTransactions(n);
													for (let n = 0; n < t.transactions.length; n++) {
														const a = t.transactions[n];
														if (a.hash === e) return;
														if (a.from === o.from && a.nonce === o.nonce) {
															if (s) return;
															const t = yield this.waitForTransaction(a.hash, r);
															if (l()) return;
															let n = "replaced";
															return a.data === o.data && a.to === o.to && a.value.eq(o.value) ? n = "repriced" : "0x" === a.data && a.from === a.to && a.value.isZero() && (n = "cancelled"), void i(re.makeError("transaction was replaced", H.errors.TRANSACTION_REPLACED, {
																cancelled: "replaced" === n || "cancelled" === n,
																reason: n,
																replacement: this._wrapTransaction(a),
																hash: e,
																receipt: t
															}))
														}
													}
													n++
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
							if ("number" == typeof t && t > 0) {
								const e = setTimeout(() => {
									l() || i(re.makeError("timeout exceeded", H.errors.TIMEOUT, {
										timeout: t
									}))
								}, t);
								e.unref && e.unref(), a.push(() => {
									clearTimeout(e)
								})
							}
						})
					}))
				}
				getBlockNumber() {
					return ee(this, void 0, void 0, (function*() {
						return this._getInternalBlockNumber(0)
					}))
				}
				getGasPrice() {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const e = yield this.perform("getGasPrice", {});
						try {
							return A.a.from(e)
						} catch (r) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "getGasPrice",
								result: e,
								error: r
							})
						}
					}))
				}
				getBalance(e, r) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Object(P.resolveProperties)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(r)
						}), o = yield this.perform("getBalance", t);
						try {
							return A.a.from(o)
						} catch (n) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "getBalance",
								params: t,
								result: o,
								error: n
							})
						}
					}))
				}
				getTransactionCount(e, r) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Object(P.resolveProperties)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(r)
						}), o = yield this.perform("getTransactionCount", t);
						try {
							return A.a.from(o).toNumber()
						} catch (n) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "getTransactionCount",
								params: t,
								result: o,
								error: n
							})
						}
					}))
				}
				getCode(e, r) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Object(P.resolveProperties)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(r)
						}), o = yield this.perform("getCode", t);
						try {
							return Object(T.hexlify)(o)
						} catch (n) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "getCode",
								params: t,
								result: o,
								error: n
							})
						}
					}))
				}
				getStorageAt(e, r, t) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const o = yield Object(P.resolveProperties)({
							address: this._getAddress(e),
							blockTag: this._getBlockTag(t),
							position: Promise.resolve(r).then(e => Object(T.hexValue)(e))
						}), n = yield this.perform("getStorageAt", o);
						try {
							return Object(T.hexlify)(n)
						} catch (i) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "getStorageAt",
								params: o,
								result: n,
								error: i
							})
						}
					}))
				}
				_wrapTransaction(e, r, t) {
					if (null != r && 32 !== Object(T.hexDataLength)(r)) throw new Error("invalid response - sendTransaction");
					const o = e;
					return null != r && e.hash !== r && re.throwError("Transaction hash mismatch from Provider.sendTransaction.", H.errors.UNKNOWN_ERROR, {
						expectedHash: e.hash,
						returnedHash: r
					}), o.wait = (r, o) => ee(this, void 0, void 0, (function*() {
						null == r && (r = 1), null == o && (o = 0);
						let n = void 0;
						0 !== r && null != t && (n = {
							data: e.data,
							from: e.from,
							nonce: e.nonce,
							to: e.to,
							value: e.value,
							startBlock: t
						});
						const i = yield this._waitForTransaction(e.hash, r, o, n);
						return null == i && 0 === r ? null : (this._emitted["t:" + e.hash] = i.blockNumber, 0 === i.status && re.throwError("transaction failed", H.errors.CALL_EXCEPTION, {
							transactionHash: e.hash,
							transaction: e,
							receipt: i
						}), i)
					})), o
				}
				sendTransaction(e) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Promise.resolve(e).then(e => Object(T.hexlify)(e)), t = this.formatter.transaction(e);
						null == t.confirmations && (t.confirmations = 0);
						const o = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
						try {
							const e = yield this.perform("sendTransaction", {
								signedTransaction: r
							});
							return this._wrapTransaction(t, e, o)
						} catch (n) {
							throw n.transaction = t, n.transactionHash = t.hash, n
						}
					}))
				}
				_getTransactionRequest(e) {
					return ee(this, void 0, void 0, (function*() {
						const r = yield e, t = {};
						return ["from", "to"].forEach(e => {
							null != r[e] && (t[e] = Promise.resolve(r[e]).then(e => e ? this._getAddress(e) : null))
						}), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(e => {
							null != r[e] && (t[e] = Promise.resolve(r[e]).then(e => e ? A.a.from(e) : null))
						}), ["type"].forEach(e => {
							null != r[e] && (t[e] = Promise.resolve(r[e]).then(e => null != e ? e : null))
						}), r.accessList && (t.accessList = this.formatter.accessList(r.accessList)), ["data"].forEach(e => {
							null != r[e] && (t[e] = Promise.resolve(r[e]).then(e => e ? Object(T.hexlify)(e) : null))
						}), this.formatter.transactionRequest(yield Object(P.resolveProperties)(t))
					}))
				}
				_getFilter(e) {
					return ee(this, void 0, void 0, (function*() {
						e = yield e;
						const r = {};
						return null != e.address && (r.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach(t => {
							null != e[t] && (r[t] = e[t])
						}), ["fromBlock", "toBlock"].forEach(t => {
							null != e[t] && (r[t] = this._getBlockTag(e[t]))
						}), this.formatter.filter(yield Object(P.resolveProperties)(r))
					}))
				}
				call(e, r) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const t = yield Object(P.resolveProperties)({
							transaction: this._getTransactionRequest(e),
							blockTag: this._getBlockTag(r)
						}), o = yield this.perform("call", t);
						try {
							return Object(T.hexlify)(o)
						} catch (n) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "call",
								params: t,
								result: o,
								error: n
							})
						}
					}))
				}
				estimateGas(e) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Object(P.resolveProperties)({
							transaction: this._getTransactionRequest(e)
						}), t = yield this.perform("estimateGas", r);
						try {
							return A.a.from(t)
						} catch (o) {
							return re.throwError("bad result from backend", H.errors.SERVER_ERROR, {
								method: "estimateGas",
								params: r,
								result: t,
								error: o
							})
						}
					}))
				}
				_getAddress(e) {
					return ee(this, void 0, void 0, (function*() {
						const r = yield this.resolveName(e);
						return null == r && re.throwError("ENS name not configured", H.errors.UNSUPPORTED_OPERATION, {
							operation: `resolveName(${JSON.stringify(e)})`
						}), r
					}))
				}
				_getBlock(e, r) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork(), e = yield e;
						let t = -128;
						const o = {
							includeTransactions: !!r
						};
						if (Object(T.isHexString)(e, 32)) o.blockHash = e;
						else try {
							o.blockTag = this.formatter.blockTag(yield this._getBlockTag(e)), Object(T.isHexString)(o.blockTag) && (t = parseInt(o.blockTag.substring(2), 16))
						} catch (n) {
							re.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e)
						}
						return Object(_.poll)(() => ee(this, void 0, void 0, (function*() {
							const e = yield this.perform("getBlock", o);
							if (null == e) return null != o.blockHash && null == this._emitted["b:" + o.blockHash] ? null : null != o.blockTag && t > this._emitted.block ? null : void 0;
							if (r) {
								let r = null;
								for (let o = 0; o < e.transactions.length; o++) {
									const t = e.transactions[o];
									if (null == t.blockNumber) t.confirmations = 0;
									else if (null == t.confirmations) {
										null == r && (r = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
										let e = r - t.blockNumber + 1;
										e <= 0 && (e = 1), t.confirmations = e
									}
								}
								const t = this.formatter.blockWithTransactions(e);
								return t.transactions = t.transactions.map(e => this._wrapTransaction(e)), t
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
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork(), e = yield e;
						const r = {
							transactionHash: this.formatter.hash(e, !0)
						};
						return Object(_.poll)(() => ee(this, void 0, void 0, (function*() {
							const t = yield this.perform("getTransaction", r);
							if (null == t) return null == this._emitted["t:" + e] ? null : void 0;
							const o = this.formatter.transactionResponse(t);
							if (null == o.blockNumber) o.confirmations = 0;
							else if (null == o.confirmations) {
								let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - o.blockNumber + 1;
								e <= 0 && (e = 1), o.confirmations = e
							}
							return this._wrapTransaction(o)
						})), {
							oncePoll: this
						})
					}))
				}
				getTransactionReceipt(e) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork(), e = yield e;
						const r = {
							transactionHash: this.formatter.hash(e, !0)
						};
						return Object(_.poll)(() => ee(this, void 0, void 0, (function*() {
							const t = yield this.perform("getTransactionReceipt", r);
							if (null == t) return null == this._emitted["t:" + e] ? null : void 0;
							if (null == t.blockHash) return;
							const o = this.formatter.receipt(t);
							if (null == o.blockNumber) o.confirmations = 0;
							else if (null == o.confirmations) {
								let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - o.blockNumber + 1;
								e <= 0 && (e = 1), o.confirmations = e
							}
							return o
						})), {
							oncePoll: this
						})
					}))
				}
				getLogs(e) {
					return ee(this, void 0, void 0, (function*() {
						yield this.getNetwork();
						const r = yield Object(P.resolveProperties)({
							filter: this._getFilter(e)
						}), t = yield this.perform("getLogs", r);
						return t.forEach(e => {
							null == e.removed && (e.removed = !1)
						}), W.arrayOf(this.formatter.filterLog.bind(this.formatter))(t)
					}))
				}
				getEtherPrice() {
					return ee(this, void 0, void 0, (function*() {
						return yield this.getNetwork(), this.perform("getEtherPrice", {})
					}))
				}
				_getBlockTag(e) {
					return ee(this, void 0, void 0, (function*() {
						if ("number" == typeof(e = yield e) && e < 0) {
							e % 1 && re.throwArgumentError("invalid BlockTag", "blockTag", e);
							let r = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
							return (r += e) < 0 && (r = 0), this.formatter.blockTag(r)
						}
						return this.formatter.blockTag(e)
					}))
				}
				getResolver(e) {
					return ee(this, void 0, void 0, (function*() {
						try {
							const r = yield this._getResolver(e);
							return null == r ? null : new de(this, r, e)
						} catch (r) {
							return r.code, H.errors.CALL_EXCEPTION, null
						}
					}))
				}
				_getResolver(e) {
					return ee(this, void 0, void 0, (function*() {
						const r = yield this.getNetwork();
						r.ensAddress || re.throwError("network does not support ENS", H.errors.UNSUPPORTED_OPERATION, {
							operation: "ENS",
							network: r.name
						});
						const t = {
							to: r.ensAddress,
							data: "0x0178b8bf" + Object(w.b)(e).substring(2)
						};
						try {
							return this.formatter.callAddress(yield this.call(t))
						} catch (o) {
							if (o.code === H.errors.CALL_EXCEPTION) return null;
							throw o
						}
					}))
				}
				resolveName(e) {
					return ee(this, void 0, void 0, (function*() {
						e = yield e;
						try {
							return Promise.resolve(this.formatter.address(e))
						} catch (t) {
							if (Object(T.isHexString)(e)) throw t
						}
						"string" != typeof e && re.throwArgumentError("invalid ENS name", "name", e);
						const r = yield this.getResolver(e);
						return r ? yield r.getAddress(): null
					}))
				}
				lookupAddress(e) {
					return ee(this, void 0, void 0, (function*() {
						e = yield e;
						const r = (e = this.formatter.address(e)).substring(2).toLowerCase() + ".addr.reverse",
							t = yield this._getResolver(r);
						if (!t) return null;
						let o = Object(T.arrayify)(yield this.call({
							to: t,
							data: "0x691f3431" + Object(w.b)(r).substring(2)
						}));
						if (o.length < 32 || !A.a.from(o.slice(0, 32)).eq(32)) return null;
						if ((o = o.slice(32)).length < 32) return null;
						const n = A.a.from(o.slice(0, 32)).toNumber();
						if (n > (o = o.slice(32)).length) return null;
						const i = Object(I.h)(o.slice(0, n));
						return (yield this.resolveName(i)) != e ? null : i
					}))
				}
				perform(e, r) {
					return re.throwError(e + " not implemented", H.errors.NOT_IMPLEMENTED, {
						operation: e
					})
				}
				_startEvent(e) {
					this.polling = this._events.filter(e => e.pollable()).length > 0
				}
				_stopEvent(e) {
					this.polling = this._events.filter(e => e.pollable()).length > 0
				}
				_addEventListener(e, r, t) {
					const o = new le(ne(e), r, t);
					return this._events.push(o), this._startEvent(o), this
				}
				on(e, r) {
					return this._addEventListener(e, r, !1)
				}
				once(e, r) {
					return this._addEventListener(e, r, !0)
				}
				emit(e, ...r) {
					let t = !1,
						o = [],
						n = ne(e);
					return this._events = this._events.filter(e => e.tag !== n || (setTimeout(() => {
						e.listener.apply(this, r)
					}, 0), t = !0, !e.once || (o.push(e), !1))), o.forEach(e => {
						this._stopEvent(e)
					}), t
				}
				listenerCount(e) {
					if (!e) return this._events.length;
					let r = ne(e);
					return this._events.filter(e => e.tag === r).length
				}
				listeners(e) {
					if (null == e) return this._events.map(e => e.listener);
					let r = ne(e);
					return this._events.filter(e => e.tag === r).map(e => e.listener)
				}
				off(e, r) {
					if (null == r) return this.removeAllListeners(e);
					const t = [];
					let o = !1,
						n = ne(e);
					return this._events = this._events.filter(e => e.tag !== n || e.listener != r || (!!o || (o = !0, t.push(e), !1))), t.forEach(e => {
						this._stopEvent(e)
					}), this
				}
				removeAllListeners(e) {
					let r = [];
					if (null == e) r = this._events, this._events = [];
					else {
						const t = ne(e);
						this._events = this._events.filter(e => e.tag !== t || (r.push(e), !1))
					}
					return r.forEach(e => {
						this._stopEvent(e)
					}), this
				}
			}
			var pe = t("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js"),
				be = t("./node_modules/@ethersproject/hash/lib.esm/typed-data.js"),
				Ee = function(e, r, t, o) {
					return new(t || (t = Promise))((function(n, i) {
						function a(e) {
							try {
								l(o.next(e))
							} catch (r) {
								i(r)
							}
						}

						function s(e) {
							try {
								l(o.throw(e))
							} catch (r) {
								i(r)
							}
						}

						function l(e) {
							var r;
							e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
								e(r)
							}))).then(a, s)
						}
						l((o = o.apply(e, r || [])).next())
					}))
				};
			const ve = new H("providers/5.4.5"),
				Ne = ["call", "estimateGas"];

			function ye(e, r, t) {
				if ("call" === e && r.code === H.errors.SERVER_ERROR) {
					const e = r.error;
					if (e && e.message.match("reverted") && Object(T.isHexString)(e.data)) return e.data;
					ve.throwError("missing revert data in call exception", H.errors.CALL_EXCEPTION, {
						error: r,
						data: "0x"
					})
				}
				let o = r.message;
				r.code === H.errors.SERVER_ERROR && r.error && "string" == typeof r.error.message ? o = r.error.message : "string" == typeof r.body ? o = r.body : "string" == typeof r.responseText && (o = r.responseText), o = (o || "").toLowerCase();
				const n = t.transaction || t.signedTransaction;
				throw o.match(/insufficient funds|base fee exceeds gas limit/) && ve.throwError("insufficient funds for intrinsic transaction cost", H.errors.INSUFFICIENT_FUNDS, {
					error: r,
					method: e,
					transaction: n
				}), o.match(/nonce too low/) && ve.throwError("nonce has already been used", H.errors.NONCE_EXPIRED, {
					error: r,
					method: e,
					transaction: n
				}), o.match(/replacement transaction underpriced/) && ve.throwError("replacement fee too low", H.errors.REPLACEMENT_UNDERPRICED, {
					error: r,
					method: e,
					transaction: n
				}), o.match(/only replay-protected/) && ve.throwError("legacy pre-eip-155 transactions not supported", H.errors.UNSUPPORTED_OPERATION, {
					error: r,
					method: e,
					transaction: n
				}), Ne.indexOf(e) >= 0 && o.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && ve.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", H.errors.UNPREDICTABLE_GAS_LIMIT, {
					error: r,
					method: e,
					transaction: n
				}), r
			}

			function Oe(e) {
				return new Promise((function(r) {
					setTimeout(r, e)
				}))
			}

			function Re(e) {
				if (e.error) {
					const r = new Error(e.error.message);
					throw r.code = e.error.code, r.data = e.error.data, r
				}
				return e.result
			}

			function Ae(e) {
				return e ? e.toLowerCase() : e
			}
			const Te = {};
			class Se extends pe.a {
				constructor(e, r, t) {
					if (ve.checkNew(new.target, Se), super(), e !== Te) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
					Object(P.defineReadOnly)(this, "provider", r), null == t && (t = 0), "string" == typeof t ? (Object(P.defineReadOnly)(this, "_address", this.provider.formatter.address(t)), Object(P.defineReadOnly)(this, "_index", null)) : "number" == typeof t ? (Object(P.defineReadOnly)(this, "_index", t), Object(P.defineReadOnly)(this, "_address", null)) : ve.throwArgumentError("invalid address or index", "addressOrIndex", t)
				}
				connect(e) {
					return ve.throwError("cannot alter JSON-RPC Signer connection", H.errors.UNSUPPORTED_OPERATION, {
						operation: "connect"
					})
				}
				connectUnchecked() {
					return new we(Te, this.provider, this._address || this._index)
				}
				getAddress() {
					return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(e => (e.length <= this._index && ve.throwError("unknown account #" + this._index, H.errors.UNSUPPORTED_OPERATION, {
						operation: "getAddress"
					}), this.provider.formatter.address(e[this._index])))
				}
				sendUncheckedTransaction(e) {
					e = Object(P.shallowCopy)(e);
					const r = this.getAddress().then(e => (e && (e = e.toLowerCase()), e));
					if (null == e.gasLimit) {
						const t = Object(P.shallowCopy)(e);
						t.from = r, e.gasLimit = this.provider.estimateGas(t)
					}
					return null != e.to && (e.to = Promise.resolve(e.to).then(e => Ee(this, void 0, void 0, (function*() {
						if (null == e) return null;
						const r = yield this.provider.resolveName(e);
						return null == r && ve.throwArgumentError("provided ENS name resolves to null", "tx.to", e), r
					})))), Object(P.resolveProperties)({
						tx: Object(P.resolveProperties)(e),
						sender: r
					}).then(({
						tx: r,
						sender: t
					}) => {
						null != r.from ? r.from.toLowerCase() !== t && ve.throwArgumentError("from address mismatch", "transaction", e) : r.from = t;
						const o = this.provider.constructor.hexlifyTransaction(r, {
							from: !0
						});
						return this.provider.send("eth_sendTransaction", [o]).then(e => e, e => ye("sendTransaction", e, o))
					})
				}
				signTransaction(e) {
					return ve.throwError("signing transactions is unsupported", H.errors.UNSUPPORTED_OPERATION, {
						operation: "signTransaction"
					})
				}
				sendTransaction(e) {
					return Ee(this, void 0, void 0, (function*() {
						const r = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), t = yield this.sendUncheckedTransaction(e);
						try {
							return yield Object(_.poll)(() => Ee(this, void 0, void 0, (function*() {
								const e = yield this.provider.getTransaction(t);
								if (null !== e) return this.provider._wrapTransaction(e, t, r)
							})), {
								oncePoll: this.provider
							})
						} catch (o) {
							throw o.transactionHash = t, o
						}
					}))
				}
				signMessage(e) {
					return Ee(this, void 0, void 0, (function*() {
						const r = "string" == typeof e ? Object(I.f)(e) : e,
							t = yield this.getAddress();
						return yield this.provider.send("eth_sign", [t.toLowerCase(), Object(T.hexlify)(r)])
					}))
				}
				_signTypedData(e, r, t) {
					return Ee(this, void 0, void 0, (function*() {
						const o = yield be.a.resolveNames(e, r, t, e => this.provider.resolveName(e)), n = yield this.getAddress();
						return yield this.provider.send("eth_signTypedData_v4", [n.toLowerCase(), JSON.stringify(be.a.getPayload(o.domain, r, o.value))])
					}))
				}
				unlock(e) {
					return Ee(this, void 0, void 0, (function*() {
						const r = this.provider,
							t = yield this.getAddress();
						return r.send("personal_unlockAccount", [t.toLowerCase(), e, null])
					}))
				}
			}
			class we extends Se {
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
						wait: r => this.provider.waitForTransaction(e, r)
					}))
				}
			}
			const Pe = {
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
			class Ce extends ge {
				constructor(e, r) {
					ve.checkNew(new.target, Ce);
					let t = r;
					null == t && (t = new Promise((e, r) => {
						setTimeout(() => {
							this.detectNetwork().then(r => {
								e(r)
							}, e => {
								r(e)
							})
						}, 0)
					})), super(t), e || (e = Object(P.getStatic)(this.constructor, "defaultUrl")()), "string" == typeof e ? Object(P.defineReadOnly)(this, "connection", Object.freeze({
						url: e
					})) : Object(P.defineReadOnly)(this, "connection", Object.freeze(Object(P.shallowCopy)(e))), this._nextId = 42
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
					return Ee(this, void 0, void 0, (function*() {
						yield Oe(0);
						let e = null;
						try {
							e = yield this.send("eth_chainId", [])
						} catch (r) {
							try {
								e = yield this.send("net_version", [])
							} catch (r) {}
						}
						if (null != e) {
							const t = Object(P.getStatic)(this.constructor, "getNetwork");
							try {
								return t(A.a.from(e).toNumber())
							} catch (r) {
								return ve.throwError("could not detect network", H.errors.NETWORK_ERROR, {
									chainId: e,
									event: "invalidNetwork",
									serverError: r
								})
							}
						}
						return ve.throwError("could not detect network", H.errors.NETWORK_ERROR, {
							event: "noNetwork"
						})
					}))
				}
				getSigner(e) {
					return new Se(Te, this, e)
				}
				getUncheckedSigner(e) {
					return this.getSigner(e).connectUnchecked()
				}
				listAccounts() {
					return this.send("eth_accounts", []).then(e => e.map(e => this.formatter.address(e)))
				}
				send(e, r) {
					const t = {
						method: e,
						params: r,
						id: this._nextId++,
						jsonrpc: "2.0"
					};
					this.emit("debug", {
						action: "request",
						request: Object(P.deepCopy)(t),
						provider: this
					});
					const o = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
					if (o && this._cache[e]) return this._cache[e];
					const n = Object(_.fetchJson)(this.connection, JSON.stringify(t), Re).then(e => (this.emit("debug", {
						action: "response",
						request: t,
						response: e,
						provider: this
					}), e), e => {
						throw this.emit("debug", {
							action: "response",
							error: e,
							request: t,
							provider: this
						}), e
					});
					return o && (this._cache[e] = n, setTimeout(() => {
						this._cache[e] = null
					}, 0)), n
				}
				prepareRequest(e, r) {
					switch (e) {
						case "getBlockNumber":
							return ["eth_blockNumber", []];
						case "getGasPrice":
							return ["eth_gasPrice", []];
						case "getBalance":
							return ["eth_getBalance", [Ae(r.address), r.blockTag]];
						case "getTransactionCount":
							return ["eth_getTransactionCount", [Ae(r.address), r.blockTag]];
						case "getCode":
							return ["eth_getCode", [Ae(r.address), r.blockTag]];
						case "getStorageAt":
							return ["eth_getStorageAt", [Ae(r.address), r.position, r.blockTag]];
						case "sendTransaction":
							return ["eth_sendRawTransaction", [r.signedTransaction]];
						case "getBlock":
							return r.blockTag ? ["eth_getBlockByNumber", [r.blockTag, !!r.includeTransactions]] : r.blockHash ? ["eth_getBlockByHash", [r.blockHash, !!r.includeTransactions]] : null;
						case "getTransaction":
							return ["eth_getTransactionByHash", [r.transactionHash]];
						case "getTransactionReceipt":
							return ["eth_getTransactionReceipt", [r.transactionHash]];
						case "call":
							return ["eth_call", [Object(P.getStatic)(this.constructor, "hexlifyTransaction")(r.transaction, {
								from: !0
							}), r.blockTag]];
						case "estimateGas":
							return ["eth_estimateGas", [Object(P.getStatic)(this.constructor, "hexlifyTransaction")(r.transaction, {
								from: !0
							})]];
						case "getLogs":
							return r.filter && null != r.filter.address && (r.filter.address = Ae(r.filter.address)), ["eth_getLogs", [r.filter]]
					}
					return null
				}
				perform(e, r) {
					return Ee(this, void 0, void 0, (function*() {
						if ("call" === e || "estimateGas" === e) {
							const e = r.transaction;
							if (e && null != e.type && A.a.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
								const t = yield this.getFeeData();
								null == t.maxFeePerGas && null == t.maxPriorityFeePerGas && ((r = Object(P.shallowCopy)(r)).transaction = Object(P.shallowCopy)(e), delete r.transaction.type)
							}
						}
						const t = this.prepareRequest(e, r);
						null == t && ve.throwError(e + " not implemented", H.errors.NOT_IMPLEMENTED, {
							operation: e
						});
						try {
							return yield this.send(t[0], t[1])
						} catch (o) {
							return ye(e, o, r)
						}
					}))
				}
				_startEvent(e) {
					"pending" === e.tag && this._startPending(), super._startEvent(e)
				}
				_startPending() {
					if (null != this._pendingFilter) return;
					const e = this,
						r = this.send("eth_newPendingTransactionFilter", []);
					this._pendingFilter = r, r.then((function(t) {
						return function o() {
							e.send("eth_getFilterChanges", [t]).then((function(t) {
								if (e._pendingFilter != r) return null;
								let o = Promise.resolve();
								return t.forEach((function(r) {
									e._emitted["t:" + r.toLowerCase()] = "pending", o = o.then((function() {
										return e.getTransaction(r).then((function(r) {
											return e.emit("pending", r), null
										}))
									}))
								})), o.then((function() {
									return Oe(1e3)
								}))
							})).then((function() {
								if (e._pendingFilter == r) return setTimeout((function() {
									o()
								}), 0), null;
								e.send("eth_uninstallFilter", [t])
							})).catch(e => {})
						}(), t
					})).catch(e => {})
				}
				_stopEvent(e) {
					"pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e)
				}
				static hexlifyTransaction(e, r) {
					const t = Object(P.shallowCopy)(Pe);
					if (r)
						for (const n in r) r[n] && (t[n] = !0);
					Object(P.checkProperties)(e, t);
					const o = {};
					return ["gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(r) {
						if (null == e[r]) return;
						const t = Object(T.hexValue)(e[r]);
						"gasLimit" === r && (r = "gas"), o[r] = t
					})), ["from", "to", "data"].forEach((function(r) {
						null != e[r] && (o[r] = Object(T.hexlify)(e[r]))
					})), e.accessList && (o.accessList = Object(K.accessListify)(e.accessList)), o
				}
			}
			let Ie = null;
			try {
				if (null == (Ie = WebSocket)) throw new Error("inject please")
			} catch (Ur) {
				const e = new H("providers/5.4.5");
				Ie = function() {
					e.throwError("WebSockets not supported in this environment", H.errors.UNSUPPORTED_OPERATION, {
						operation: "new WebSocket()"
					})
				}
			}
			var _e = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const Fe = new H("providers/5.4.5");
			let Le = 1;
			class Me extends Ce {
				constructor(e, r) {
					"any" === r && Fe.throwError("WebSocketProvider does not support 'any' network yet", H.errors.UNSUPPORTED_OPERATION, {
						operation: "network:any"
					}), super(e, r), this._pollingInterval = -1, this._wsReady = !1, Object(P.defineReadOnly)(this, "_websocket", new Ie(this.connection.url)), Object(P.defineReadOnly)(this, "_requests", {}), Object(P.defineReadOnly)(this, "_subs", {}), Object(P.defineReadOnly)(this, "_subIds", {}), Object(P.defineReadOnly)(this, "_detectNetwork", super.detectNetwork()), this._websocket.onopen = () => {
						this._wsReady = !0, Object.keys(this._requests).forEach(e => {
							this._websocket.send(this._requests[e].payload)
						})
					}, this._websocket.onmessage = e => {
						const r = e.data,
							t = JSON.parse(r);
						if (null != t.id) {
							const e = String(t.id),
								o = this._requests[e];
							if (delete this._requests[e], void 0 !== t.result) o.callback(null, t.result), this.emit("debug", {
								action: "response",
								request: JSON.parse(o.payload),
								response: t.result,
								provider: this
							});
							else {
								let e = null;
								t.error ? (e = new Error(t.error.message || "unknown error"), Object(P.defineReadOnly)(e, "code", t.error.code || null), Object(P.defineReadOnly)(e, "response", r)) : e = new Error("unknown error"), o.callback(e, void 0), this.emit("debug", {
									action: "response",
									error: e,
									request: JSON.parse(o.payload),
									provider: this
								})
							}
						} else if ("eth_subscription" === t.method) {
							const e = this._subs[t.params.subscription];
							e && e.processFunc(t.params.result)
						} else console.warn("this should not happen")
					};
					const t = setInterval(() => {
						this.emit("poll")
					}, 1e3);
					t.unref && t.unref()
				}
				detectNetwork() {
					return this._detectNetwork
				}
				get pollingInterval() {
					return 0
				}
				resetEventsBlock(e) {
					Fe.throwError("cannot reset events block on WebSocketProvider", H.errors.UNSUPPORTED_OPERATION, {
						operation: "resetEventBlock"
					})
				}
				set pollingInterval(e) {
					Fe.throwError("cannot set polling interval on WebSocketProvider", H.errors.UNSUPPORTED_OPERATION, {
						operation: "setPollingInterval"
					})
				}
				poll() {
					return _e(this, void 0, void 0, (function*() {
						return null
					}))
				}
				set polling(e) {
					e && Fe.throwError("cannot set polling on WebSocketProvider", H.errors.UNSUPPORTED_OPERATION, {
						operation: "setPolling"
					})
				}
				send(e, r) {
					const t = Le++;
					return new Promise((o, n) => {
						const i = JSON.stringify({
							method: e,
							params: r,
							id: t,
							jsonrpc: "2.0"
						});
						this.emit("debug", {
							action: "request",
							request: JSON.parse(i),
							provider: this
						}), this._requests[String(t)] = {
							callback: function(e, r) {
								return e ? n(e) : o(r)
							},
							payload: i
						}, this._wsReady && this._websocket.send(i)
					})
				}
				static defaultUrl() {
					return "ws://localhost:8546"
				}
				_subscribe(e, r, t) {
					return _e(this, void 0, void 0, (function*() {
						let o = this._subIds[e];
						null == o && (o = Promise.all(r).then(e => this.send("eth_subscribe", e)), this._subIds[e] = o);
						const n = yield o;
						this._subs[n] = {
							tag: e,
							processFunc: t
						}
					}))
				}
				_startEvent(e) {
					switch (e.type) {
						case "block":
							this._subscribe("block", ["newHeads"], e => {
								const r = A.a.from(e.number).toNumber();
								this._emitted.block = r, this.emit("block", r)
							});
							break;
						case "pending":
							this._subscribe("pending", ["newPendingTransactions"], e => {
								this.emit("pending", e)
							});
							break;
						case "filter":
							this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], r => {
								null == r.removed && (r.removed = !1), this.emit(e.filter, this.formatter.filterLog(r))
							});
							break;
						case "tx": {
							const r = e => {
								const r = e.hash;
								this.getTransactionReceipt(r).then(e => {
									e && this.emit(r, e)
								})
							};
							r(e), this._subscribe("tx", ["newHeads"], e => {
								this._events.filter(e => "tx" === e.type).forEach(r)
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
					let r = e.tag;
					if ("tx" === e.type) {
						if (this._events.filter(e => "tx" === e.type).length) return;
						r = "tx"
					} else if (this.listenerCount(e.event)) return;
					const t = this._subIds[r];
					t && (delete this._subIds[r], t.then(e => {
						this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
					}))
				}
				destroy() {
					return _e(this, void 0, void 0, (function*() {
						this._websocket.readyState === Ie.CONNECTING && (yield new Promise(e => {
							this._websocket.onopen = function() {
								e(!0)
							}, this._websocket.onerror = function() {
								e(!1)
							}
						})), this._websocket.close(1e3)
					}))
				}
			}
			var Ue = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const ke = new H("providers/5.4.5");
			class je extends Ce {
				detectNetwork() {
					const e = Object.create(null, {
						detectNetwork: {
							get: () => super.detectNetwork
						}
					});
					return Ue(this, void 0, void 0, (function*() {
						let r = this.network;
						return null == r && ((r = yield e.detectNetwork.call(this)) || ke.throwError("no network detected", H.errors.UNKNOWN_ERROR, {}), null == this._network && (Object(P.defineReadOnly)(this, "_network", r), this.emit("network", r, null))), r
					}))
				}
			}
			class De extends je {
				constructor(e, r) {
					ke.checkAbstract(new.target, De), e = Object(P.getStatic)(new.target, "getNetwork")(e), r = Object(P.getStatic)(new.target, "getApiKey")(r), super(Object(P.getStatic)(new.target, "getUrl")(e, r), e), "string" == typeof r ? Object(P.defineReadOnly)(this, "apiKey", r) : null != r && Object.keys(r).forEach(e => {
						Object(P.defineReadOnly)(this, e, r[e])
					})
				}
				_startPending() {
					ke.warn("WARNING: API provider does not support pending filters")
				}
				isCommunityResource() {
					return !1
				}
				getSigner(e) {
					return ke.throwError("API provider does not support signing", H.errors.UNSUPPORTED_OPERATION, {
						operation: "getSigner"
					})
				}
				listAccounts() {
					return Promise.resolve([])
				}
				static getApiKey(e) {
					return e
				}
				static getUrl(e, r) {
					return ke.throwError("not implemented; sub-classes must override getUrl", H.errors.NOT_IMPLEMENTED, {
						operation: "getUrl"
					})
				}
			}
			const Be = new H("providers/5.4.5"),
				Je = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
			class Ge extends Me {
				constructor(e, r) {
					const t = new xe(e, r);
					super(t.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), t.network), Object(P.defineReadOnly)(this, "apiKey", t.apiKey)
				}
				isCommunityResource() {
					return this.apiKey === Je
				}
			}
			class xe extends De {
				static getWebSocketProvider(e, r) {
					return new Ge(e, r)
				}
				static getApiKey(e) {
					return null == e ? Je : (e && "string" != typeof e && Be.throwArgumentError("invalid apiKey", "apiKey", e), e)
				}
				static getUrl(e, r) {
					let t = null;
					switch (e.name) {
						case "homestead":
							t = "eth-mainnet.alchemyapi.io/v2/";
							break;
						case "ropsten":
							t = "eth-ropsten.alchemyapi.io/v2/";
							break;
						case "rinkeby":
							t = "eth-rinkeby.alchemyapi.io/v2/";
							break;
						case "goerli":
							t = "eth-goerli.alchemyapi.io/v2/";
							break;
						case "kovan":
							t = "eth-kovan.alchemyapi.io/v2/";
							break;
						case "matic":
							t = "polygon-mainnet.g.alchemy.com/v2/";
							break;
						case "maticmum":
							t = "polygon-mumbai.g.alchemy.com/v2/";
							break;
						default:
							Be.throwArgumentError("unsupported network", "network", arguments[0])
					}
					return {
						allowGzip: !0,
						url: "https://" + t + r,
						throttleCallback: (e, t) => (r === Je && $(), Promise.resolve(!0))
					}
				}
				isCommunityResource() {
					return this.apiKey === Je
				}
			}
			var Xe = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const He = new H("providers/5.4.5");
			class Ve extends De {
				static getApiKey(e) {
					return null != e && He.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null
				}
				static getUrl(e, r) {
					let t = null;
					switch (e.name) {
						case "homestead":
							t = "https://cloudflare-eth.com/";
							break;
						default:
							He.throwArgumentError("unsupported network", "network", arguments[0])
					}
					return t
				}
				perform(e, r) {
					const t = Object.create(null, {
						perform: {
							get: () => super.perform
						}
					});
					return Xe(this, void 0, void 0, (function*() {
						if ("getBlockNumber" === e) {
							return (yield t.perform.call(this, "getBlock", {
								blockTag: "latest"
							})).number
						}
						return t.perform.call(this, e, r)
					}))
				}
			}
			var ze = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const Ke = new H("providers/5.4.5");

			function Ze(e) {
				const r = {};
				for (let t in e) {
					if (null == e[t]) continue;
					let o = e[t];
					"type" === t && 0 === o || (o = {
						type: !0,
						gasLimit: !0,
						gasPrice: !0,
						maxFeePerGs: !0,
						maxPriorityFeePerGas: !0,
						nonce: !0,
						value: !0
					} [t] ? Object(T.hexValue)(Object(T.hexlify)(o)) : "accessList" === t ? "[" + Object(K.accessListify)(o).map(e => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`).join(",") + "]" : Object(T.hexlify)(o), r[t] = o)
				}
				return r
			}

			function We(e) {
				if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
				if (1 != e.status || "OK" != e.message) {
					const r = new Error("invalid response");
					throw r.result = JSON.stringify(e), (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (r.throttleRetry = !0), r
				}
				return e.result
			}

			function Qe(e) {
				if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
					const r = new Error("throttled response");
					throw r.result = JSON.stringify(e), r.throttleRetry = !0, r
				}
				if ("2.0" != e.jsonrpc) {
					const r = new Error("invalid response");
					throw r.result = JSON.stringify(e), r
				}
				if (e.error) {
					const r = new Error(e.error.message || "unknown error");
					throw e.error.code && (r.code = e.error.code), e.error.data && (r.data = e.error.data), r
				}
				return e.result
			}

			function qe(e) {
				if ("pending" === e) throw new Error("pending not supported");
				return "latest" === e ? e : parseInt(e.substring(2), 16)
			}
			const Ye = "9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";

			function $e(e, r, t) {
				if ("call" === e && r.code === H.errors.SERVER_ERROR) {
					const e = r.error;
					if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
						let t = e.data;
						if (t && (t = "0x" + t.replace(/^.*0x/i, "")), Object(T.isHexString)(t)) return t;
						Ke.throwError("missing revert data in call exception", H.errors.CALL_EXCEPTION, {
							error: r,
							data: "0x"
						})
					}
				}
				let o = r.message;
				throw r.code === H.errors.SERVER_ERROR && (r.error && "string" == typeof r.error.message ? o = r.error.message : "string" == typeof r.body ? o = r.body : "string" == typeof r.responseText && (o = r.responseText)), (o = (o || "").toLowerCase()).match(/insufficient funds/) && Ke.throwError("insufficient funds for intrinsic transaction cost", H.errors.INSUFFICIENT_FUNDS, {
					error: r,
					method: e,
					transaction: t
				}), o.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && Ke.throwError("nonce has already been used", H.errors.NONCE_EXPIRED, {
					error: r,
					method: e,
					transaction: t
				}), o.match(/another transaction with same nonce/) && Ke.throwError("replacement fee too low", H.errors.REPLACEMENT_UNDERPRICED, {
					error: r,
					method: e,
					transaction: t
				}), o.match(/execution failed due to an exception|execution reverted/) && Ke.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", H.errors.UNPREDICTABLE_GAS_LIMIT, {
					error: r,
					method: e,
					transaction: t
				}), r
			}
			class er extends ge {
				constructor(e, r) {
					Ke.checkNew(new.target, er), super(e), Object(P.defineReadOnly)(this, "baseUrl", this.getBaseUrl()), Object(P.defineReadOnly)(this, "apiKey", r || Ye)
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
					return Ke.throwArgumentError("unsupported network", "network", name)
				}
				getUrl(e, r) {
					const t = Object.keys(r).reduce((e, t) => {
							const o = r[t];
							return null != o && (e += `&${t}=${o}`), e
						}, ""),
						o = this.apiKey ? `&apikey=${this.apiKey}` : "";
					return `${this.baseUrl}/api?module=${e}${t}${o}`
				}
				getPostUrl() {
					return `${this.baseUrl}/api`
				}
				getPostData(e, r) {
					return r.module = e, r.apikey = this.apiKey, r
				}
				fetch(e, r, t) {
					return ze(this, void 0, void 0, (function*() {
						const o = t ? this.getPostUrl() : this.getUrl(e, r),
							n = t ? this.getPostData(e, r) : null,
							i = "proxy" === e ? Qe : We;
						this.emit("debug", {
							action: "request",
							request: o,
							provider: this
						});
						const a = {
							url: o,
							throttleSlotInterval: 1e3,
							throttleCallback: (e, r) => (this.isCommunityResource() && $(), Promise.resolve(!0))
						};
						let s = null;
						n && (a.headers = {
							"content-type": "application/x-www-form-urlencoded; charset=UTF-8"
						}, s = Object.keys(n).map(e => `${e}=${n[e]}`).join("&"));
						const l = yield Object(_.fetchJson)(a, s, i || Qe);
						return this.emit("debug", {
							action: "response",
							request: o,
							response: Object(P.deepCopy)(l),
							provider: this
						}), l
					}))
				}
				detectNetwork() {
					return ze(this, void 0, void 0, (function*() {
						return this.network
					}))
				}
				perform(e, r) {
					const t = Object.create(null, {
						perform: {
							get: () => super.perform
						}
					});
					return ze(this, void 0, void 0, (function*() {
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
									address: r.address,
									tag: r.blockTag
								});
							case "getTransactionCount":
								return this.fetch("proxy", {
									action: "eth_getTransactionCount",
									address: r.address,
									tag: r.blockTag
								});
							case "getCode":
								return this.fetch("proxy", {
									action: "eth_getCode",
									address: r.address,
									tag: r.blockTag
								});
							case "getStorageAt":
								return this.fetch("proxy", {
									action: "eth_getStorageAt",
									address: r.address,
									position: r.position,
									tag: r.blockTag
								});
							case "sendTransaction":
								return this.fetch("proxy", {
									action: "eth_sendRawTransaction",
									hex: r.signedTransaction
								}, !0).catch(e => $e("sendTransaction", e, r.signedTransaction));
							case "getBlock":
								if (r.blockTag) return this.fetch("proxy", {
									action: "eth_getBlockByNumber",
									tag: r.blockTag,
									boolean: r.includeTransactions ? "true" : "false"
								});
								throw new Error("getBlock by blockHash not implemented");
							case "getTransaction":
								return this.fetch("proxy", {
									action: "eth_getTransactionByHash",
									txhash: r.transactionHash
								});
							case "getTransactionReceipt":
								return this.fetch("proxy", {
									action: "eth_getTransactionReceipt",
									txhash: r.transactionHash
								});
							case "call": {
								if ("latest" !== r.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
								const e = Ze(r.transaction);
								e.module = "proxy", e.action = "eth_call";
								try {
									return yield this.fetch("proxy", e, !0)
								} catch (Ur) {
									return $e("call", Ur, r.transaction)
								}
							}
							case "estimateGas": {
								const e = Ze(r.transaction);
								e.module = "proxy", e.action = "eth_estimateGas";
								try {
									return yield this.fetch("proxy", e, !0)
								} catch (Ur) {
									return $e("estimateGas", Ur, r.transaction)
								}
							}
							case "getLogs": {
								const e = {
									action: "getLogs"
								};
								if (r.filter.fromBlock && (e.fromBlock = qe(r.filter.fromBlock)), r.filter.toBlock && (e.toBlock = qe(r.filter.toBlock)), r.filter.address && (e.address = r.filter.address), r.filter.topics && r.filter.topics.length > 0 && (r.filter.topics.length > 1 && Ke.throwError("unsupported topic count", H.errors.UNSUPPORTED_OPERATION, {
										topics: r.filter.topics
									}), 1 === r.filter.topics.length)) {
									const t = r.filter.topics[0];
									"string" == typeof t && 66 === t.length || Ke.throwError("unsupported topic format", H.errors.UNSUPPORTED_OPERATION, {
										topic0: t
									}), e.topic0 = t
								}
								const t = yield this.fetch("logs", e);
								let o = {};
								for (let r = 0; r < t.length; r++) {
									const e = t[r];
									if (null == e.blockHash) {
										if (null == o[e.blockNumber]) {
											const r = yield this.getBlock(e.blockNumber);
											r && (o[e.blockNumber] = r.hash)
										}
										e.blockHash = o[e.blockNumber]
									}
								}
								return t
							}
							case "getEtherPrice":
								return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
									action: "ethprice"
								})).ethusd)
						}
						return t.perform.call(this, e, r)
					}))
				}
				getHistory(e, r, t) {
					return ze(this, void 0, void 0, (function*() {
						const o = {
							action: "txlist",
							address: yield this.resolveName(e),
							startblock: null == r ? 0 : r,
							endblock: null == t ? 99999999 : t,
							sort: "asc"
						};
						return (yield this.fetch("account", o)).map(e => {
							["contractAddress", "to"].forEach((function(r) {
								"" == e[r] && delete e[r]
							})), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
							const r = this.formatter.transactionResponse(e);
							return e.timeStamp && (r.timestamp = parseInt(e.timeStamp)), r
						})
					}))
				}
				isCommunityResource() {
					return this.apiKey === Ye
				}
			}
			var rr = t("./node_modules/@ethersproject/random/lib.esm/shuffle.js"),
				tr = function(e, r, t, o) {
					return new(t || (t = Promise))((function(n, i) {
						function a(e) {
							try {
								l(o.next(e))
							} catch (r) {
								i(r)
							}
						}

						function s(e) {
							try {
								l(o.throw(e))
							} catch (r) {
								i(r)
							}
						}

						function l(e) {
							var r;
							e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
								e(r)
							}))).then(a, s)
						}
						l((o = o.apply(e, r || [])).next())
					}))
				};
			const or = new H("providers/5.4.5");

			function nr() {
				return (new Date).getTime()
			}

			function ir(e) {
				let r = null;
				for (let t = 0; t < e.length; t++) {
					const o = e[t];
					if (null == o) return null;
					r ? r.name === o.name && r.chainId === o.chainId && (r.ensAddress === o.ensAddress || null == r.ensAddress && null == o.ensAddress) || or.throwArgumentError("provider mismatch", "networks", e) : r = o
				}
				return r
			}

			function ar(e, r) {
				e = e.slice().sort();
				const t = Math.floor(e.length / 2);
				if (e.length % 2) return e[t];
				const o = e[t - 1],
					n = e[t];
				return null != r && Math.abs(o - n) > r ? null : (o + n) / 2
			}

			function sr(e) {
				if (null === e) return "null";
				if ("number" == typeof e || "boolean" == typeof e) return JSON.stringify(e);
				if ("string" == typeof e) return e;
				if (A.a.isBigNumber(e)) return e.toString();
				if (Array.isArray(e)) return JSON.stringify(e.map(e => sr(e)));
				if ("object" == typeof e) {
					const r = Object.keys(e);
					return r.sort(), "{" + r.map(r => {
						let t = e[r];
						return t = "function" == typeof t ? "[function]" : sr(t), JSON.stringify(r) + ":" + t
					}).join(",") + "}"
				}
				throw new Error("unknown value type: " + typeof e)
			}
			let lr = 1;

			function cr(e) {
				let r = null,
					t = null,
					o = new Promise(o => {
						r = function() {
							t && (clearTimeout(t), t = null), o()
						}, t = setTimeout(r, e)
					});
				return {
					cancel: r,
					getPromise: function() {
						return o
					},
					wait: e => o = o.then(e)
				}
			}
			const ur = [H.errors.CALL_EXCEPTION, H.errors.INSUFFICIENT_FUNDS, H.errors.NONCE_EXPIRED, H.errors.REPLACEMENT_UNDERPRICED, H.errors.UNPREDICTABLE_GAS_LIMIT],
				hr = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

			function dr(e, r) {
				const t = {
					weight: e.weight
				};
				return Object.defineProperty(t, "provider", {
					get: () => e.provider
				}), e.start && (t.start = e.start), r && (t.duration = r - e.start), e.done && (e.error ? t.error = e.error : t.result = e.result || null), t
			}

			function fr(e, r, t) {
				let o = sr;
				switch (r) {
					case "getBlockNumber":
						return function(r) {
							const t = r.map(e => e.result);
							let o = ar(r.map(e => e.result), 2);
							if (null != o) return o = Math.ceil(o), t.indexOf(o + 1) >= 0 && o++, o >= e._highestBlockNumber && (e._highestBlockNumber = o), e._highestBlockNumber
						};
					case "getGasPrice":
						return function(e) {
							const r = e.map(e => e.result);
							return r.sort(), r[Math.floor(r.length / 2)]
						};
					case "getEtherPrice":
						return function(e) {
							return ar(e.map(e => e.result))
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
						o = function(e) {
							return null == e ? null : ((e = Object(P.shallowCopy)(e)).confirmations = -1, sr(e))
						};
						break;
					case "getBlock":
						o = t.includeTransactions ? function(e) {
							return null == e ? null : ((e = Object(P.shallowCopy)(e)).transactions = e.transactions.map(e => ((e = Object(P.shallowCopy)(e)).confirmations = -1, e)), sr(e))
						} : function(e) {
							return null == e ? null : sr(e)
						};
						break;
					default:
						throw new Error("unknown method: " + r)
				}
				return function(e, r) {
					return function(t) {
						const o = {};
						t.forEach(r => {
							const t = e(r.result);
							o[t] || (o[t] = {
								count: 0,
								result: r.result
							}), o[t].count++
						});
						const n = Object.keys(o);
						for (let e = 0; e < n.length; e++) {
							const t = o[n[e]];
							if (t.count >= r) return t.result
						}
					}
				}(o, e.quorum)
			}

			function mr(e, r) {
				return tr(this, void 0, void 0, (function*() {
					const t = e.provider;
					return null != t.blockNumber && t.blockNumber >= r || -1 === r ? t : Object(_.poll)(() => new Promise((o, n) => {
						setTimeout((function() {
							return t.blockNumber >= r ? o(t) : e.cancelled ? o(null) : o(void 0)
						}), 0)
					}), {
						oncePoll: t
					})
				}))
			}

			function gr(e, r, t, o) {
				return tr(this, void 0, void 0, (function*() {
					let n = e.provider;
					switch (t) {
						case "getBlockNumber":
						case "getGasPrice":
							return n[t]();
						case "getEtherPrice":
							if (n.getEtherPrice) return n.getEtherPrice();
							break;
						case "getBalance":
						case "getTransactionCount":
						case "getCode":
							return o.blockTag && Object(T.isHexString)(o.blockTag) && (n = yield mr(e, r)), n[t](o.address, o.blockTag || "latest");
						case "getStorageAt":
							return o.blockTag && Object(T.isHexString)(o.blockTag) && (n = yield mr(e, r)), n.getStorageAt(o.address, o.position, o.blockTag || "latest");
						case "getBlock":
							return o.blockTag && Object(T.isHexString)(o.blockTag) && (n = yield mr(e, r)), n[o.includeTransactions ? "getBlockWithTransactions" : "getBlock"](o.blockTag || o.blockHash);
						case "call":
						case "estimateGas":
							return o.blockTag && Object(T.isHexString)(o.blockTag) && (n = yield mr(e, r)), n[t](o.transaction);
						case "getTransaction":
						case "getTransactionReceipt":
							return n[t](o.transactionHash);
						case "getLogs": {
							let t = o.filter;
							return (t.fromBlock && Object(T.isHexString)(t.fromBlock) || t.toBlock && Object(T.isHexString)(t.toBlock)) && (n = yield mr(e, r)), n.getLogs(t)
						}
					}
					return or.throwError("unknown method error", H.errors.UNKNOWN_ERROR, {
						method: t,
						params: o
					})
				}))
			}
			class pr extends ge {
				constructor(e, r) {
					or.checkNew(new.target, pr), 0 === e.length && or.throwArgumentError("missing providers", "providers", e);
					const t = e.map((e, r) => {
							if (o.b.isProvider(e)) {
								const r = q(e) ? 2e3 : 750,
									t = 1;
								return Object.freeze({
									provider: e,
									weight: 1,
									stallTimeout: r,
									priority: t
								})
							}
							const t = Object(P.shallowCopy)(e);
							null == t.priority && (t.priority = 1), null == t.stallTimeout && (t.stallTimeout = q(e) ? 2e3 : 750), null == t.weight && (t.weight = 1);
							const n = t.weight;
							return (n % 1 || n > 512 || n < 1) && or.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${r}].weight`, n), Object.freeze(t)
						}),
						n = t.reduce((e, r) => e + r.weight, 0);
					null == r ? r = n / 2 : r > n && or.throwArgumentError("quorum will always fail; larger than total weight", "quorum", r);
					let i = ir(t.map(e => e.provider.network));
					null == i && (i = new Promise((e, r) => {
						setTimeout(() => {
							this.detectNetwork().then(e, r)
						}, 0)
					})), super(i), Object(P.defineReadOnly)(this, "providerConfigs", Object.freeze(t)), Object(P.defineReadOnly)(this, "quorum", r), this._highestBlockNumber = -1
				}
				detectNetwork() {
					return tr(this, void 0, void 0, (function*() {
						return ir(yield Promise.all(this.providerConfigs.map(e => e.provider.getNetwork())))
					}))
				}
				perform(e, r) {
					return tr(this, void 0, void 0, (function*() {
						if ("sendTransaction" === e) {
							const e = yield Promise.all(this.providerConfigs.map(e => e.provider.sendTransaction(r.signedTransaction).then(e => e.hash, e => e)));
							for (let r = 0; r < e.length; r++) {
								const t = e[r];
								if ("string" == typeof t) return t
							}
							throw e[0]
						} - 1 === this._highestBlockNumber && "getBlockNumber" !== e && (yield this.getBlockNumber());
						const t = fr(this, e, r),
							o = Object(rr.a)(this.providerConfigs.map(P.shallowCopy));
						o.sort((e, r) => e.priority - r.priority);
						const n = this._highestBlockNumber;
						let i = 0,
							a = !0;
						for (;;) {
							const s = nr();
							let l = o.filter(e => e.runner && s - e.start < e.stallTimeout).reduce((e, r) => e + r.weight, 0);
							for (; l < this.quorum && i < o.length;) {
								const t = o[i++],
									a = lr++;
								t.start = nr(), t.staller = cr(t.stallTimeout), t.staller.wait(() => {
									t.staller = null
								}), t.runner = gr(t, n, e, r).then(o => {
									t.done = !0, t.result = o, this.listenerCount("debug") && this.emit("debug", {
										action: "request",
										rid: a,
										backend: dr(t, nr()),
										request: {
											method: e,
											params: Object(P.deepCopy)(r)
										},
										provider: this
									})
								}, o => {
									t.done = !0, t.error = o, this.listenerCount("debug") && this.emit("debug", {
										action: "request",
										rid: a,
										backend: dr(t, nr()),
										request: {
											method: e,
											params: Object(P.deepCopy)(r)
										},
										provider: this
									})
								}), this.listenerCount("debug") && this.emit("debug", {
									action: "request",
									rid: a,
									backend: dr(t, null),
									request: {
										method: e,
										params: Object(P.deepCopy)(r)
									},
									provider: this
								}), l += t.weight
							}
							const c = [];
							o.forEach(e => {
								!e.done && e.runner && (c.push(e.runner), e.staller && c.push(e.staller.getPromise()))
							}), c.length && (yield Promise.race(c));
							const u = o.filter(e => e.done && null == e.error);
							if (u.length >= this.quorum) {
								const e = t(u);
								if (void 0 !== e) return o.forEach(e => {
									e.staller && e.staller.cancel(), e.cancelled = !0
								}), e;
								a || (yield cr(100).getPromise()), a = !1
							}
							const h = o.reduce((e, r) => {
								if (!r.done || null == r.error) return e;
								const t = r.error.code;
								return ur.indexOf(t) >= 0 && (e[t] || (e[t] = {
									error: r.error,
									weight: 0
								}), e[t].weight += r.weight), e
							}, {});
							if (Object.keys(h).forEach(e => {
									const r = h[e];
									if (r.weight < this.quorum) return;
									o.forEach(e => {
										e.staller && e.staller.cancel(), e.cancelled = !0
									});
									const t = r.error,
										n = {};
									hr.forEach(e => {
										null != t[e] && (n[e] = t[e])
									}), or.throwError(t.reason || t.message, e, n)
								}), 0 === o.filter(e => !e.done).length) break
						}
						return o.forEach(e => {
							e.staller && e.staller.cancel(), e.cancelled = !0
						}), or.throwError("failed to meet quorum", H.errors.SERVER_ERROR, {
							method: e,
							params: r,
							results: o.map(e => dr(e)),
							provider: this
						})
					}))
				}
			}
			const br = null,
				Er = new H("providers/5.4.5"),
				vr = "84842078b09946638c03157f83405213";
			class Nr extends Me {
				constructor(e, r) {
					const t = new yr(e, r),
						o = t.connection;
					o.password && Er.throwError("INFURA WebSocket project secrets unsupported", H.errors.UNSUPPORTED_OPERATION, {
						operation: "InfuraProvider.getWebSocketProvider()"
					}), super(o.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e), Object(P.defineReadOnly)(this, "apiKey", t.projectId), Object(P.defineReadOnly)(this, "projectId", t.projectId), Object(P.defineReadOnly)(this, "projectSecret", t.projectSecret)
				}
				isCommunityResource() {
					return this.projectId === vr
				}
			}
			class yr extends De {
				static getWebSocketProvider(e, r) {
					return new Nr(e, r)
				}
				static getApiKey(e) {
					const r = {
						apiKey: vr,
						projectId: vr,
						projectSecret: null
					};
					return null == e ? r : ("string" == typeof e ? r.projectId = e : null != e.projectSecret ? (Er.assertArgument("string" == typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), Er.assertArgument("string" == typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), r.projectId = e.projectId, r.projectSecret = e.projectSecret) : e.projectId && (r.projectId = e.projectId), r.apiKey = r.projectId, r)
				}
				static getUrl(e, r) {
					let t = null;
					switch (e ? e.name : "unknown") {
						case "homestead":
							t = "mainnet.infura.io";
							break;
						case "ropsten":
							t = "ropsten.infura.io";
							break;
						case "rinkeby":
							t = "rinkeby.infura.io";
							break;
						case "kovan":
							t = "kovan.infura.io";
							break;
						case "goerli":
							t = "goerli.infura.io";
							break;
						case "matic":
							t = "polygon-mainnet.infura.io";
							break;
						case "maticmum":
							t = "polygon-mumbai.infura.io";
							break;
						default:
							Er.throwError("unsupported network", H.errors.INVALID_ARGUMENT, {
								argument: "network",
								value: e
							})
					}
					const o = {
						allowGzip: !0,
						url: "https://" + t + "/v3/" + r.projectId,
						throttleCallback: (e, t) => (r.projectId === vr && $(), Promise.resolve(!0))
					};
					return null != r.projectSecret && (o.user = "", o.password = r.projectSecret), o
				}
				isCommunityResource() {
					return this.projectId === vr
				}
			}
			class Or extends Ce {
				send(e, r) {
					const t = {
						method: e,
						params: r,
						id: this._nextId++,
						jsonrpc: "2.0"
					};
					null == this._pendingBatch && (this._pendingBatch = []);
					const o = {
							request: t,
							resolve: null,
							reject: null
						},
						n = new Promise((e, r) => {
							o.resolve = e, o.reject = r
						});
					return this._pendingBatch.push(o), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
						const e = this._pendingBatch;
						this._pendingBatch = null, this._pendingBatchAggregator = null;
						const r = e.map(e => e.request);
						return this.emit("debug", {
							action: "requestBatch",
							request: Object(P.deepCopy)(r),
							provider: this
						}), Object(_.fetchJson)(this.connection, JSON.stringify(r)).then(t => {
							this.emit("debug", {
								action: "response",
								request: r,
								response: t,
								provider: this
							}), e.forEach((e, r) => {
								const o = t[r];
								if (o.error) {
									const r = new Error(o.error.message);
									r.code = o.error.code, r.data = o.error.data, e.reject(r)
								} else e.resolve(o.result)
							})
						}, t => {
							this.emit("debug", {
								action: "response",
								error: t,
								request: r,
								provider: this
							}), e.forEach(e => {
								e.reject(t)
							})
						})
					}, 10)), n
				}
			}
			const Rr = new H("providers/5.4.5"),
				Ar = "ETHERS_JS_SHARED";
			class Tr extends De {
				static getApiKey(e) {
					return e && "string" != typeof e && Rr.throwArgumentError("invalid apiKey", "apiKey", e), e || Ar
				}
				static getUrl(e, r) {
					Rr.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
					let t = null;
					switch (e.name) {
						case "homestead":
							t = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
							break;
						case "ropsten":
							t = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
							break;
						case "rinkeby":
							t = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
							break;
						case "goerli":
							t = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
							break;
						case "kovan":
							t = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
							break;
						default:
							Rr.throwArgumentError("unsupported network", "network", arguments[0])
					}
					return t + "?apiKey=" + r
				}
			}
			const Sr = new H("providers/5.4.5"),
				wr = {
					homestead: "6004bcd10040261633ade990",
					ropsten: "6004bd4d0040261633ade991",
					rinkeby: "6004bda20040261633ade994",
					goerli: "6004bd860040261633ade992"
				};
			class Pr extends De {
				constructor(e, r) {
					if (null == r) {
						const t = Object(P.getStatic)(new.target, "getNetwork")(e);
						if (t) {
							const e = wr[t.name];
							e && (r = {
								applicationId: e,
								loadBalancer: !0
							})
						}
						null == r && Sr.throwError("unsupported network", H.errors.INVALID_ARGUMENT, {
							argument: "network",
							value: e
						})
					}
					super(e, r)
				}
				static getApiKey(e) {
					null == e && Sr.throwArgumentError("PocketProvider.getApiKey does not support null apiKey", "apiKey", e);
					const r = {
						applicationId: null,
						loadBalancer: !1,
						applicationSecretKey: null
					};
					return "string" == typeof e ? r.applicationId = e : null != e.applicationSecretKey ? (Sr.assertArgument("string" == typeof e.applicationId, "applicationSecretKey requires an applicationId", "applicationId", e.applicationId), Sr.assertArgument("string" == typeof e.applicationSecretKey, "invalid applicationSecretKey", "applicationSecretKey", "[REDACTED]"), r.applicationId = e.applicationId, r.applicationSecretKey = e.applicationSecretKey, r.loadBalancer = !!e.loadBalancer) : e.applicationId ? (Sr.assertArgument("string" == typeof e.applicationId, "apiKey.applicationId must be a string", "apiKey.applicationId", e.applicationId), r.applicationId = e.applicationId, r.loadBalancer = !!e.loadBalancer) : Sr.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), r
				}
				static getUrl(e, r) {
					let t = null;
					switch (e ? e.name : "unknown") {
						case "homestead":
							t = "eth-mainnet.gateway.pokt.network";
							break;
						case "ropsten":
							t = "eth-ropsten.gateway.pokt.network";
							break;
						case "rinkeby":
							t = "eth-rinkeby.gateway.pokt.network";
							break;
						case "goerli":
							t = "eth-goerli.gateway.pokt.network";
							break;
						default:
							Sr.throwError("unsupported network", H.errors.INVALID_ARGUMENT, {
								argument: "network",
								value: e
							})
					}
					let o = null;
					const n = {
						url: o = r.loadBalancer ? `https://${t}/v1/lb/${r.applicationId}` : `https://${t}/v1/${r.applicationId}`,
						headers: {}
					};
					return null != r.applicationSecretKey && (n.user = "", n.password = r.applicationSecretKey), n
				}
				isCommunityResource() {
					return this.applicationId === wr[this.network.name]
				}
			}
			const Cr = new H("providers/5.4.5");
			let Ir = 1;

			function _r(e, r) {
				const t = "Web3LegacyFetcher";
				return function(o, n) {
					"eth_sign" == o && (e.isMetaMask || e.isStatus) && (o = "personal_sign", n = [n[1], n[0]]);
					const i = {
						method: o,
						params: n,
						id: Ir++,
						jsonrpc: "2.0"
					};
					return new Promise((e, o) => {
						this.emit("debug", {
							action: "request",
							fetcher: t,
							request: Object(P.deepCopy)(i),
							provider: this
						}), r(i, (r, n) => {
							if (r) return this.emit("debug", {
								action: "response",
								fetcher: t,
								error: r,
								request: i,
								provider: this
							}), o(r);
							if (this.emit("debug", {
									action: "response",
									fetcher: t,
									request: i,
									response: n,
									provider: this
								}), n.error) {
								const e = new Error(n.error.message);
								return e.code = n.error.code, e.data = n.error.data, o(e)
							}
							e(n.result)
						})
					})
				}
			}
			class Fr extends Ce {
				constructor(e, r) {
					Cr.checkNew(new.target, Fr), null == e && Cr.throwArgumentError("missing provider", "provider", e);
					let t = null,
						o = null,
						n = null;
					"function" == typeof e ? (t = "unknown:", o = e) : (!(t = e.host || e.path || "") && e.isMetaMask && (t = "metamask"), n = e, e.request ? ("" === t && (t = "eip-1193:"), o = function(e) {
						return function(r, t) {
							null == t && (t = []), "eth_sign" == r && (e.isMetaMask || e.isStatus) && (r = "personal_sign", t = [t[1], t[0]]);
							const o = {
								method: r,
								params: t
							};
							return this.emit("debug", {
								action: "request",
								fetcher: "Eip1193Fetcher",
								request: Object(P.deepCopy)(o),
								provider: this
							}), e.request(o).then(e => (this.emit("debug", {
								action: "response",
								fetcher: "Eip1193Fetcher",
								request: o,
								response: e,
								provider: this
							}), e), e => {
								throw this.emit("debug", {
									action: "response",
									fetcher: "Eip1193Fetcher",
									request: o,
									error: e,
									provider: this
								}), e
							})
						}
					}(e)) : e.sendAsync ? o = _r(e, e.sendAsync.bind(e)) : e.send ? o = _r(e, e.send.bind(e)) : Cr.throwArgumentError("unsupported provider", "provider", e), t || (t = "unknown:")), super(t, r), Object(P.defineReadOnly)(this, "jsonRpcFetchFunc", o), Object(P.defineReadOnly)(this, "provider", n)
				}
				send(e, r) {
					return this.jsonRpcFetchFunc(e, r)
				}
			}
			const Lr = new H("providers/5.4.5");

			function Mr(e, r) {
				if (null == e && (e = "homestead"), "string" == typeof e) {
					const r = e.match(/^(ws|http)s?:/i);
					if (r) switch (r[1]) {
						case "http":
							return new Ce(e);
						case "ws":
							return new Me(e);
						default:
							Lr.throwArgumentError("unsupported URL scheme", "network", e)
					}
				}
				const t = O(e);
				return t && t._defaultProvider || Lr.throwError("unsupported getDefaultProvider network", H.errors.NETWORK_ERROR, {
					operation: "getDefaultProvider",
					network: e
				}), t._defaultProvider({
					FallbackProvider: pr,
					AlchemyProvider: xe,
					CloudflareProvider: Ve,
					EtherscanProvider: er,
					InfuraProvider: yr,
					JsonRpcProvider: Ce,
					NodesmithProvider: Tr,
					PocketProvider: Pr,
					Web3Provider: Fr,
					IpcProvider: br
				}, r)
			}
		},
		"./node_modules/@ethersproject/random/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "random/5.4.0"
		},
		"./node_modules/@ethersproject/random/lib.esm/random.js": function(e, r, t) {
			"use strict";
			(function(e) {
				t.d(r, "a", (function() {
					return c
				}));
				var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
					n = t("./node_modules/@ethersproject/random/node_modules/@ethersproject/logger/lib.esm/index.js"),
					i = t("./node_modules/@ethersproject/random/lib.esm/_version.js");
				const a = new n.a(i.a);
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
					const r = new Uint8Array(e);
					return l.getRandomValues(r), Object(o.arrayify)(r)
				}
				l && l.getRandomValues || (a.warn("WARNING: Missing strong random number source"), l = {
					getRandomValues: function(e) {
						return a.throwError("no secure random source avaialble", n.a.errors.UNSUPPORTED_OPERATION, {
							operation: "crypto.getRandomValues"
						})
					}
				})
			}).call(this, t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/random/lib.esm/shuffle.js": function(e, r, t) {
			"use strict";

			function o(e) {
				for (let r = (e = e.slice()).length - 1; r > 0; r--) {
					const t = Math.floor(Math.random() * (r + 1)),
						o = e[r];
					e[r] = e[t], e[t] = o
				}
				return e
			}
			t.d(r, "a", (function() {
				return o
			}))
		},
		"./node_modules/@ethersproject/random/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "encode", (function() {
				return E
			})), t.d(r, "decode", (function() {
				return y
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");
			const n = "logger/5.4.1";
			let i = !1,
				a = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let l = s.default,
				c = null;
			const u = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var h, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(h || (h = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			const f = "0123456789abcdef";
			class m {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), l > s[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(m.levels.DEBUG, e)
				}
				info(...e) {
					this._log(m.levels.INFO, e)
				}
				warn(...e) {
					this._log(m.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (a) return this.makeError("censored error", r, {});
					r || (r = m.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += f[r[e] >> 4], t += f[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, m.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return c || (c = new m(n)), c
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), i) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					a = !!e, i = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? l = r : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = d, m.levels = h;
			const g = new m("rlp/5.4.0");

			function p(e) {
				const r = [];
				for (; e;) r.unshift(255 & e), e >>= 8;
				return r
			}

			function b(e, r, t) {
				let o = 0;
				for (let n = 0; n < t; n++) o = 256 * o + e[r + n];
				return o
			}

			function E(e) {
				return Object(o.hexlify)(function e(r) {
					if (Array.isArray(r)) {
						let t = [];
						if (r.forEach((function(r) {
								t = t.concat(e(r))
							})), t.length <= 55) return t.unshift(192 + t.length), t;
						const o = p(t.length);
						return o.unshift(247 + o.length), o.concat(t)
					}
					Object(o.isBytesLike)(r) || g.throwArgumentError("RLP object must be BytesLike", "object", r);
					const t = Array.prototype.slice.call(Object(o.arrayify)(r));
					if (1 === t.length && t[0] <= 127) return t;
					if (t.length <= 55) return t.unshift(128 + t.length), t;
					const n = p(t.length);
					return n.unshift(183 + n.length), n.concat(t)
				}(e))
			}

			function v(e, r, t, o) {
				const n = [];
				for (; t < r + 1 + o;) {
					const i = N(e, t);
					n.push(i.result), (t += i.consumed) > r + 1 + o && g.throwError("child data too short", m.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + o,
					result: n
				}
			}

			function N(e, r) {
				if (0 === e.length && g.throwError("data too short", m.errors.BUFFER_OVERRUN, {}), e[r] >= 248) {
					const t = e[r] - 247;
					r + 1 + t > e.length && g.throwError("data short segment too short", m.errors.BUFFER_OVERRUN, {});
					const o = b(e, r + 1, t);
					return r + 1 + t + o > e.length && g.throwError("data long segment too short", m.errors.BUFFER_OVERRUN, {}), v(e, r, r + 1 + t, t + o)
				}
				if (e[r] >= 192) {
					const t = e[r] - 192;
					return r + 1 + t > e.length && g.throwError("data array too short", m.errors.BUFFER_OVERRUN, {}), v(e, r, r + 1, t)
				}
				if (e[r] >= 184) {
					const t = e[r] - 183;
					r + 1 + t > e.length && g.throwError("data array too short", m.errors.BUFFER_OVERRUN, {});
					const n = b(e, r + 1, t);
					return r + 1 + t + n > e.length && g.throwError("data array too short", m.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t + n,
						result: Object(o.hexlify)(e.slice(r + 1 + t, r + 1 + t + n))
					}
				}
				if (e[r] >= 128) {
					const t = e[r] - 128;
					return r + 1 + t > e.length && g.throwError("data too short", m.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t,
						result: Object(o.hexlify)(e.slice(r + 1, r + 1 + t))
					}
				}
				return {
					consumed: 1,
					result: Object(o.hexlify)(e[r])
				}
			}

			function y(e) {
				const r = Object(o.arrayify)(e),
					t = N(r, 0);
				return t.consumed !== r.length && g.throwArgumentError("invalid rlp data", "data", e), t.result
			}
		},
		"./node_modules/@ethersproject/sha2/lib.esm/sha2.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return v
			})), t.d(r, "c", (function() {
				return N
			})), t.d(r, "d", (function() {
				return y
			})), t.d(r, "a", (function() {
				return O
			}));
			var o = t("./node_modules/hash.js/lib/hash.js"),
				n = t.n(o),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/sha2/lib.esm/types.js");
			const s = "logger/5.4.1";
			let l = !1,
				c = !1;
			const u = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let h = u.default,
				d = null;
			const f = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var m, g;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(m || (m = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(g || (g = {}));
			const p = "0123456789abcdef";
			class b {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == u[t] && this.throwArgumentError("invalid log level name", "logLevel", e), h > u[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(b.levels.DEBUG, e)
				}
				info(...e) {
					this._log(b.levels.INFO, e)
				}
				warn(...e) {
					this._log(b.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (c) return this.makeError("censored error", r, {});
					r || (r = b.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += p[r[e] >> 4], t += p[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, b.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", b.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: f
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, b.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, b.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, b.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, b.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", b.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", b.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", b.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return d || (d = new b(s)), d
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", b.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), l) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", b.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					c = !!e, l = !!r
				}
				static setLogLevel(e) {
					const r = u[e.toLowerCase()];
					null != r ? h = r : b.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new b(e)
				}
			}
			b.errors = g, b.levels = m;
			const E = new b("sha2/5.4.0");

			function v(e) {
				return "0x" + n.a.ripemd160().update(Object(i.arrayify)(e)).digest("hex")
			}

			function N(e) {
				return "0x" + n.a.sha256().update(Object(i.arrayify)(e)).digest("hex")
			}

			function y(e) {
				return "0x" + n.a.sha512().update(Object(i.arrayify)(e)).digest("hex")
			}

			function O(e, r, t) {
				return a.a[e] || E.throwError("unsupported algorithm " + e, b.errors.UNSUPPORTED_OPERATION, {
					operation: "hmac",
					algorithm: e
				}), "0x" + n.a.hmac(n.a[e], Object(i.arrayify)(r)).update(Object(i.arrayify)(t)).digest("hex")
			}
		},
		"./node_modules/@ethersproject/sha2/lib.esm/types.js": function(e, r, t) {
			"use strict";
			var o;
			t.d(r, "a", (function() {
					return o
				})),
				function(e) {
					e.sha256 = "sha256", e.sha512 = "sha512"
				}(o || (o = {}))
		},
		"./node_modules/@ethersproject/signing-key/lib.esm/elliptic.js": function(e, r, t) {
			"use strict";
			(function(e) {
				t.d(r, "a", (function() {
					return x
				}));
				var o = t("./node_modules/bn.js/lib/bn.js"),
					n = t.n(o),
					i = t("./node_modules/hash.js/lib/hash.js"),
					a = t.n(i);
				"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;

				function s(e, r, t) {
					return e(t = {
						path: r,
						exports: {},
						require: function(e, r) {
							return function() {
								throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
							}(null == r && t.path)
						}
					}, t.exports), t.exports
				}
				var l = c;

				function c(e, r) {
					if (!e) throw new Error(r || "Assertion failed")
				}
				c.equal = function(e, r, t) {
					if (e != r) throw new Error(t || "Assertion failed: " + e + " != " + r)
				};
				var u = s((function(e, r) {
						var t = r;

						function o(e) {
							return 1 === e.length ? "0" + e : e
						}

						function n(e) {
							for (var r = "", t = 0; t < e.length; t++) r += o(e[t].toString(16));
							return r
						}
						t.toArray = function(e, r) {
							if (Array.isArray(e)) return e.slice();
							if (!e) return [];
							var t = [];
							if ("string" != typeof e) {
								for (var o = 0; o < e.length; o++) t[o] = 0 | e[o];
								return t
							}
							if ("hex" === r) {
								(e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
								for (o = 0; o < e.length; o += 2) t.push(parseInt(e[o] + e[o + 1], 16))
							} else
								for (o = 0; o < e.length; o++) {
									var n = e.charCodeAt(o),
										i = n >> 8,
										a = 255 & n;
									i ? t.push(i, a) : t.push(a)
								}
							return t
						}, t.zero2 = o, t.toHex = n, t.encode = function(e, r) {
							return "hex" === r ? n(e) : e
						}
					})),
					h = s((function(e, r) {
						var t = r;
						t.assert = l, t.toArray = u.toArray, t.zero2 = u.zero2, t.toHex = u.toHex, t.encode = u.encode, t.getNAF = function(e, r, t) {
							var o = new Array(Math.max(e.bitLength(), t) + 1);
							o.fill(0);
							for (var n = 1 << r + 1, i = e.clone(), a = 0; a < o.length; a++) {
								var s, l = i.andln(n - 1);
								i.isOdd() ? (s = l > (n >> 1) - 1 ? (n >> 1) - l : l, i.isubn(s)) : s = 0, o[a] = s, i.iushrn(1)
							}
							return o
						}, t.getJSF = function(e, r) {
							var t = [
								[],
								[]
							];
							e = e.clone(), r = r.clone();
							for (var o, n = 0, i = 0; e.cmpn(-n) > 0 || r.cmpn(-i) > 0;) {
								var a, s, l = e.andln(3) + n & 3,
									c = r.andln(3) + i & 3;
								3 === l && (l = -1), 3 === c && (c = -1), a = 0 == (1 & l) ? 0 : 3 !== (o = e.andln(7) + n & 7) && 5 !== o || 2 !== c ? l : -l, t[0].push(a), s = 0 == (1 & c) ? 0 : 3 !== (o = r.andln(7) + i & 7) && 5 !== o || 2 !== l ? c : -c, t[1].push(s), 2 * n === a + 1 && (n = 1 - n), 2 * i === s + 1 && (i = 1 - i), e.iushrn(1), r.iushrn(1)
							}
							return t
						}, t.cachedProperty = function(e, r, t) {
							var o = "_" + r;
							e.prototype[r] = function() {
								return void 0 !== this[o] ? this[o] : this[o] = t.call(this)
							}
						}, t.parseBytes = function(e) {
							return "string" == typeof e ? t.toArray(e, "hex") : e
						}, t.intFromLE = function(e) {
							return new n.a(e, "hex", "le")
						}
					})),
					d = h.getNAF,
					f = h.getJSF,
					m = h.assert;

				function g(e, r) {
					this.type = e, this.p = new n.a(r.p, 16), this.red = r.prime ? n.a.red(r.prime) : n.a.mont(this.p), this.zero = new n.a(0).toRed(this.red), this.one = new n.a(1).toRed(this.red), this.two = new n.a(2).toRed(this.red), this.n = r.n && new n.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
					var t = this.n && this.p.div(this.n);
					!t || t.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
				}
				var p = g;

				function b(e, r) {
					this.curve = e, this.type = r, this.precomputed = null
				}
				g.prototype.point = function() {
					throw new Error("Not implemented")
				}, g.prototype.validate = function() {
					throw new Error("Not implemented")
				}, g.prototype._fixedNafMul = function(e, r) {
					m(e.precomputed);
					var t = e._getDoubles(),
						o = d(r, 1, this._bitLength),
						n = (1 << t.step + 1) - (t.step % 2 == 0 ? 2 : 1);
					n /= 3;
					var i, a, s = [];
					for (i = 0; i < o.length; i += t.step) {
						a = 0;
						for (var l = i + t.step - 1; l >= i; l--) a = (a << 1) + o[l];
						s.push(a)
					}
					for (var c = this.jpoint(null, null, null), u = this.jpoint(null, null, null), h = n; h > 0; h--) {
						for (i = 0; i < s.length; i++)(a = s[i]) === h ? u = u.mixedAdd(t.points[i]) : a === -h && (u = u.mixedAdd(t.points[i].neg()));
						c = c.add(u)
					}
					return c.toP()
				}, g.prototype._wnafMul = function(e, r) {
					var t = 4,
						o = e._getNAFPoints(t);
					t = o.wnd;
					for (var n = o.points, i = d(r, t, this._bitLength), a = this.jpoint(null, null, null), s = i.length - 1; s >= 0; s--) {
						for (var l = 0; s >= 0 && 0 === i[s]; s--) l++;
						if (s >= 0 && l++, a = a.dblp(l), s < 0) break;
						var c = i[s];
						m(0 !== c), a = "affine" === e.type ? c > 0 ? a.mixedAdd(n[c - 1 >> 1]) : a.mixedAdd(n[-c - 1 >> 1].neg()) : c > 0 ? a.add(n[c - 1 >> 1]) : a.add(n[-c - 1 >> 1].neg())
					}
					return "affine" === e.type ? a.toP() : a
				}, g.prototype._wnafMulAdd = function(e, r, t, o, n) {
					var i, a, s, l = this._wnafT1,
						c = this._wnafT2,
						u = this._wnafT3,
						h = 0;
					for (i = 0; i < o; i++) {
						var m = (s = r[i])._getNAFPoints(e);
						l[i] = m.wnd, c[i] = m.points
					}
					for (i = o - 1; i >= 1; i -= 2) {
						var g = i - 1,
							p = i;
						if (1 === l[g] && 1 === l[p]) {
							var b = [r[g], null, null, r[p]];
							0 === r[g].y.cmp(r[p].y) ? (b[1] = r[g].add(r[p]), b[2] = r[g].toJ().mixedAdd(r[p].neg())) : 0 === r[g].y.cmp(r[p].y.redNeg()) ? (b[1] = r[g].toJ().mixedAdd(r[p]), b[2] = r[g].add(r[p].neg())) : (b[1] = r[g].toJ().mixedAdd(r[p]), b[2] = r[g].toJ().mixedAdd(r[p].neg()));
							var E = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
								v = f(t[g], t[p]);
							for (h = Math.max(v[0].length, h), u[g] = new Array(h), u[p] = new Array(h), a = 0; a < h; a++) {
								var N = 0 | v[0][a],
									y = 0 | v[1][a];
								u[g][a] = E[3 * (N + 1) + (y + 1)], u[p][a] = 0, c[g] = b
							}
						} else u[g] = d(t[g], l[g], this._bitLength), u[p] = d(t[p], l[p], this._bitLength), h = Math.max(u[g].length, h), h = Math.max(u[p].length, h)
					}
					var O = this.jpoint(null, null, null),
						R = this._wnafT4;
					for (i = h; i >= 0; i--) {
						for (var A = 0; i >= 0;) {
							var T = !0;
							for (a = 0; a < o; a++) R[a] = 0 | u[a][i], 0 !== R[a] && (T = !1);
							if (!T) break;
							A++, i--
						}
						if (i >= 0 && A++, O = O.dblp(A), i < 0) break;
						for (a = 0; a < o; a++) {
							var S = R[a];
							0 !== S && (S > 0 ? s = c[a][S - 1 >> 1] : S < 0 && (s = c[a][-S - 1 >> 1].neg()), O = "affine" === s.type ? O.mixedAdd(s) : O.add(s))
						}
					}
					for (i = 0; i < o; i++) c[i] = null;
					return n ? O : O.toP()
				}, g.BasePoint = b, b.prototype.eq = function() {
					throw new Error("Not implemented")
				}, b.prototype.validate = function() {
					return this.curve.validate(this)
				}, g.prototype.decodePoint = function(e, r) {
					e = h.toArray(e, r);
					var t = this.p.byteLength();
					if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * t) return 6 === e[0] ? m(e[e.length - 1] % 2 == 0) : 7 === e[0] && m(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t));
					if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t) return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
					throw new Error("Unknown point format")
				}, b.prototype.encodeCompressed = function(e) {
					return this.encode(e, !0)
				}, b.prototype._encode = function(e) {
					var r = this.curve.p.byteLength(),
						t = this.getX().toArray("be", r);
					return e ? [this.getY().isEven() ? 2 : 3].concat(t) : [4].concat(t, this.getY().toArray("be", r))
				}, b.prototype.encode = function(e, r) {
					return h.encode(this._encode(r), e)
				}, b.prototype.precompute = function(e) {
					if (this.precomputed) return this;
					var r = {
						doubles: null,
						naf: null,
						beta: null
					};
					return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this
				}, b.prototype._hasDoubles = function(e) {
					if (!this.precomputed) return !1;
					var r = this.precomputed.doubles;
					return !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
				}, b.prototype._getDoubles = function(e, r) {
					if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
					for (var t = [this], o = this, n = 0; n < r; n += e) {
						for (var i = 0; i < e; i++) o = o.dbl();
						t.push(o)
					}
					return {
						step: e,
						points: t
					}
				}, b.prototype._getNAFPoints = function(e) {
					if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
					for (var r = [this], t = (1 << e) - 1, o = 1 === t ? null : this.dbl(), n = 1; n < t; n++) r[n] = r[n - 1].add(o);
					return {
						wnd: e,
						points: r
					}
				}, b.prototype._getBeta = function() {
					return null
				}, b.prototype.dblp = function(e) {
					for (var r = this, t = 0; t < e; t++) r = r.dbl();
					return r
				};
				var E = s((function(e) {
						"function" == typeof Object.create ? e.exports = function(e, r) {
							r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}))
						} : e.exports = function(e, r) {
							if (r) {
								e.super_ = r;
								var t = function() {};
								t.prototype = r.prototype, e.prototype = new t, e.prototype.constructor = e
							}
						}
					})),
					v = h.assert;

				function N(e) {
					p.call(this, "short", e), this.a = new n.a(e.a, 16).toRed(this.red), this.b = new n.a(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
				}
				E(N, p);
				var y = N;

				function O(e, r, t, o) {
					p.BasePoint.call(this, e, "affine"), null === r && null === t ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n.a(r, 16), this.y = new n.a(t, 16), o && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
				}

				function R(e, r, t, o) {
					p.BasePoint.call(this, e, "jacobian"), null === r && null === t && null === o ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n.a(0)) : (this.x = new n.a(r, 16), this.y = new n.a(t, 16), this.z = new n.a(o, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
				}
				N.prototype._getEndomorphism = function(e) {
					if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
						var r, t;
						if (e.beta) r = new n.a(e.beta, 16).toRed(this.red);
						else {
							var o = this._getEndoRoots(this.p);
							r = (r = o[0].cmp(o[1]) < 0 ? o[0] : o[1]).toRed(this.red)
						}
						if (e.lambda) t = new n.a(e.lambda, 16);
						else {
							var i = this._getEndoRoots(this.n);
							0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(r)) ? t = i[0] : (t = i[1], v(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))))
						}
						return {
							beta: r,
							lambda: t,
							basis: e.basis ? e.basis.map((function(e) {
								return {
									a: new n.a(e.a, 16),
									b: new n.a(e.b, 16)
								}
							})) : this._getEndoBasis(t)
						}
					}
				}, N.prototype._getEndoRoots = function(e) {
					var r = e === this.p ? this.red : n.a.mont(e),
						t = new n.a(2).toRed(r).redInvm(),
						o = t.redNeg(),
						i = new n.a(3).toRed(r).redNeg().redSqrt().redMul(t);
					return [o.redAdd(i).fromRed(), o.redSub(i).fromRed()]
				}, N.prototype._getEndoBasis = function(e) {
					for (var r, t, o, i, a, s, l, c, u, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = e, f = this.n.clone(), m = new n.a(1), g = new n.a(0), p = new n.a(0), b = new n.a(1), E = 0; 0 !== d.cmpn(0);) {
						var v = f.div(d);
						c = f.sub(v.mul(d)), u = p.sub(v.mul(m));
						var N = b.sub(v.mul(g));
						if (!o && c.cmp(h) < 0) r = l.neg(), t = m, o = c.neg(), i = u;
						else if (o && 2 == ++E) break;
						l = c, f = d, d = c, p = m, m = u, b = g, g = N
					}
					a = c.neg(), s = u;
					var y = o.sqr().add(i.sqr());
					return a.sqr().add(s.sqr()).cmp(y) >= 0 && (a = r, s = t), o.negative && (o = o.neg(), i = i.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
						a: o,
						b: i
					}, {
						a,
						b: s
					}]
				}, N.prototype._endoSplit = function(e) {
					var r = this.endo.basis,
						t = r[0],
						o = r[1],
						n = o.b.mul(e).divRound(this.n),
						i = t.b.neg().mul(e).divRound(this.n),
						a = n.mul(t.a),
						s = i.mul(o.a),
						l = n.mul(t.b),
						c = i.mul(o.b);
					return {
						k1: e.sub(a).sub(s),
						k2: l.add(c).neg()
					}
				}, N.prototype.pointFromX = function(e, r) {
					(e = new n.a(e, 16)).red || (e = e.toRed(this.red));
					var t = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
						o = t.redSqrt();
					if (0 !== o.redSqr().redSub(t).cmp(this.zero)) throw new Error("invalid point");
					var i = o.fromRed().isOdd();
					return (r && !i || !r && i) && (o = o.redNeg()), this.point(e, o)
				}, N.prototype.validate = function(e) {
					if (e.inf) return !0;
					var r = e.x,
						t = e.y,
						o = this.a.redMul(r),
						n = r.redSqr().redMul(r).redIAdd(o).redIAdd(this.b);
					return 0 === t.redSqr().redISub(n).cmpn(0)
				}, N.prototype._endoWnafMulAdd = function(e, r, t) {
					for (var o = this._endoWnafT1, n = this._endoWnafT2, i = 0; i < e.length; i++) {
						var a = this._endoSplit(r[i]),
							s = e[i],
							l = s._getBeta();
						a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), l = l.neg(!0)), o[2 * i] = s, o[2 * i + 1] = l, n[2 * i] = a.k1, n[2 * i + 1] = a.k2
					}
					for (var c = this._wnafMulAdd(1, o, n, 2 * i, t), u = 0; u < 2 * i; u++) o[u] = null, n[u] = null;
					return c
				}, E(O, p.BasePoint), N.prototype.point = function(e, r, t) {
					return new O(this, e, r, t)
				}, N.prototype.pointFromJSON = function(e, r) {
					return O.fromJSON(this, e, r)
				}, O.prototype._getBeta = function() {
					if (this.curve.endo) {
						var e = this.precomputed;
						if (e && e.beta) return e.beta;
						var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
						if (e) {
							var t = this.curve,
								o = function(e) {
									return t.point(e.x.redMul(t.endo.beta), e.y)
								};
							e.beta = r, r.precomputed = {
								beta: null,
								naf: e.naf && {
									wnd: e.naf.wnd,
									points: e.naf.points.map(o)
								},
								doubles: e.doubles && {
									step: e.doubles.step,
									points: e.doubles.points.map(o)
								}
							}
						}
						return r
					}
				}, O.prototype.toJSON = function() {
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
				}, O.fromJSON = function(e, r, t) {
					"string" == typeof r && (r = JSON.parse(r));
					var o = e.point(r[0], r[1], t);
					if (!r[2]) return o;

					function n(r) {
						return e.point(r[0], r[1], t)
					}
					var i = r[2];
					return o.precomputed = {
						beta: null,
						doubles: i.doubles && {
							step: i.doubles.step,
							points: [o].concat(i.doubles.points.map(n))
						},
						naf: i.naf && {
							wnd: i.naf.wnd,
							points: [o].concat(i.naf.points.map(n))
						}
					}, o
				}, O.prototype.inspect = function() {
					return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
				}, O.prototype.isInfinity = function() {
					return this.inf
				}, O.prototype.add = function(e) {
					if (this.inf) return e;
					if (e.inf) return this;
					if (this.eq(e)) return this.dbl();
					if (this.neg().eq(e)) return this.curve.point(null, null);
					if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
					var r = this.y.redSub(e.y);
					0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
					var t = r.redSqr().redISub(this.x).redISub(e.x),
						o = r.redMul(this.x.redSub(t)).redISub(this.y);
					return this.curve.point(t, o)
				}, O.prototype.dbl = function() {
					if (this.inf) return this;
					var e = this.y.redAdd(this.y);
					if (0 === e.cmpn(0)) return this.curve.point(null, null);
					var r = this.curve.a,
						t = this.x.redSqr(),
						o = e.redInvm(),
						n = t.redAdd(t).redIAdd(t).redIAdd(r).redMul(o),
						i = n.redSqr().redISub(this.x.redAdd(this.x)),
						a = n.redMul(this.x.redSub(i)).redISub(this.y);
					return this.curve.point(i, a)
				}, O.prototype.getX = function() {
					return this.x.fromRed()
				}, O.prototype.getY = function() {
					return this.y.fromRed()
				}, O.prototype.mul = function(e) {
					return e = new n.a(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
				}, O.prototype.mulAdd = function(e, r, t) {
					var o = [this, r],
						n = [e, t];
					return this.curve.endo ? this.curve._endoWnafMulAdd(o, n) : this.curve._wnafMulAdd(1, o, n, 2)
				}, O.prototype.jmulAdd = function(e, r, t) {
					var o = [this, r],
						n = [e, t];
					return this.curve.endo ? this.curve._endoWnafMulAdd(o, n, !0) : this.curve._wnafMulAdd(1, o, n, 2, !0)
				}, O.prototype.eq = function(e) {
					return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
				}, O.prototype.neg = function(e) {
					if (this.inf) return this;
					var r = this.curve.point(this.x, this.y.redNeg());
					if (e && this.precomputed) {
						var t = this.precomputed,
							o = function(e) {
								return e.neg()
							};
						r.precomputed = {
							naf: t.naf && {
								wnd: t.naf.wnd,
								points: t.naf.points.map(o)
							},
							doubles: t.doubles && {
								step: t.doubles.step,
								points: t.doubles.points.map(o)
							}
						}
					}
					return r
				}, O.prototype.toJ = function() {
					return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
				}, E(R, p.BasePoint), N.prototype.jpoint = function(e, r, t) {
					return new R(this, e, r, t)
				}, R.prototype.toP = function() {
					if (this.isInfinity()) return this.curve.point(null, null);
					var e = this.z.redInvm(),
						r = e.redSqr(),
						t = this.x.redMul(r),
						o = this.y.redMul(r).redMul(e);
					return this.curve.point(t, o)
				}, R.prototype.neg = function() {
					return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
				}, R.prototype.add = function(e) {
					if (this.isInfinity()) return e;
					if (e.isInfinity()) return this;
					var r = e.z.redSqr(),
						t = this.z.redSqr(),
						o = this.x.redMul(r),
						n = e.x.redMul(t),
						i = this.y.redMul(r.redMul(e.z)),
						a = e.y.redMul(t.redMul(this.z)),
						s = o.redSub(n),
						l = i.redSub(a);
					if (0 === s.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
					var c = s.redSqr(),
						u = c.redMul(s),
						h = o.redMul(c),
						d = l.redSqr().redIAdd(u).redISub(h).redISub(h),
						f = l.redMul(h.redISub(d)).redISub(i.redMul(u)),
						m = this.z.redMul(e.z).redMul(s);
					return this.curve.jpoint(d, f, m)
				}, R.prototype.mixedAdd = function(e) {
					if (this.isInfinity()) return e.toJ();
					if (e.isInfinity()) return this;
					var r = this.z.redSqr(),
						t = this.x,
						o = e.x.redMul(r),
						n = this.y,
						i = e.y.redMul(r).redMul(this.z),
						a = t.redSub(o),
						s = n.redSub(i);
					if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
					var l = a.redSqr(),
						c = l.redMul(a),
						u = t.redMul(l),
						h = s.redSqr().redIAdd(c).redISub(u).redISub(u),
						d = s.redMul(u.redISub(h)).redISub(n.redMul(c)),
						f = this.z.redMul(a);
					return this.curve.jpoint(h, d, f)
				}, R.prototype.dblp = function(e) {
					if (0 === e) return this;
					if (this.isInfinity()) return this;
					if (!e) return this.dbl();
					var r;
					if (this.curve.zeroA || this.curve.threeA) {
						var t = this;
						for (r = 0; r < e; r++) t = t.dbl();
						return t
					}
					var o = this.curve.a,
						n = this.curve.tinv,
						i = this.x,
						a = this.y,
						s = this.z,
						l = s.redSqr().redSqr(),
						c = a.redAdd(a);
					for (r = 0; r < e; r++) {
						var u = i.redSqr(),
							h = c.redSqr(),
							d = h.redSqr(),
							f = u.redAdd(u).redIAdd(u).redIAdd(o.redMul(l)),
							m = i.redMul(h),
							g = f.redSqr().redISub(m.redAdd(m)),
							p = m.redISub(g),
							b = f.redMul(p);
						b = b.redIAdd(b).redISub(d);
						var E = c.redMul(s);
						r + 1 < e && (l = l.redMul(d)), i = g, s = E, c = b
					}
					return this.curve.jpoint(i, c.redMul(n), s)
				}, R.prototype.dbl = function() {
					return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
				}, R.prototype._zeroDbl = function() {
					var e, r, t;
					if (this.zOne) {
						var o = this.x.redSqr(),
							n = this.y.redSqr(),
							i = n.redSqr(),
							a = this.x.redAdd(n).redSqr().redISub(o).redISub(i);
						a = a.redIAdd(a);
						var s = o.redAdd(o).redIAdd(o),
							l = s.redSqr().redISub(a).redISub(a),
							c = i.redIAdd(i);
						c = (c = c.redIAdd(c)).redIAdd(c), e = l, r = s.redMul(a.redISub(l)).redISub(c), t = this.y.redAdd(this.y)
					} else {
						var u = this.x.redSqr(),
							h = this.y.redSqr(),
							d = h.redSqr(),
							f = this.x.redAdd(h).redSqr().redISub(u).redISub(d);
						f = f.redIAdd(f);
						var m = u.redAdd(u).redIAdd(u),
							g = m.redSqr(),
							p = d.redIAdd(d);
						p = (p = p.redIAdd(p)).redIAdd(p), e = g.redISub(f).redISub(f), r = m.redMul(f.redISub(e)).redISub(p), t = (t = this.y.redMul(this.z)).redIAdd(t)
					}
					return this.curve.jpoint(e, r, t)
				}, R.prototype._threeDbl = function() {
					var e, r, t;
					if (this.zOne) {
						var o = this.x.redSqr(),
							n = this.y.redSqr(),
							i = n.redSqr(),
							a = this.x.redAdd(n).redSqr().redISub(o).redISub(i);
						a = a.redIAdd(a);
						var s = o.redAdd(o).redIAdd(o).redIAdd(this.curve.a),
							l = s.redSqr().redISub(a).redISub(a);
						e = l;
						var c = i.redIAdd(i);
						c = (c = c.redIAdd(c)).redIAdd(c), r = s.redMul(a.redISub(l)).redISub(c), t = this.y.redAdd(this.y)
					} else {
						var u = this.z.redSqr(),
							h = this.y.redSqr(),
							d = this.x.redMul(h),
							f = this.x.redSub(u).redMul(this.x.redAdd(u));
						f = f.redAdd(f).redIAdd(f);
						var m = d.redIAdd(d),
							g = (m = m.redIAdd(m)).redAdd(m);
						e = f.redSqr().redISub(g), t = this.y.redAdd(this.z).redSqr().redISub(h).redISub(u);
						var p = h.redSqr();
						p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p), r = f.redMul(m.redISub(e)).redISub(p)
					}
					return this.curve.jpoint(e, r, t)
				}, R.prototype._dbl = function() {
					var e = this.curve.a,
						r = this.x,
						t = this.y,
						o = this.z,
						n = o.redSqr().redSqr(),
						i = r.redSqr(),
						a = t.redSqr(),
						s = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(n)),
						l = r.redAdd(r),
						c = (l = l.redIAdd(l)).redMul(a),
						u = s.redSqr().redISub(c.redAdd(c)),
						h = c.redISub(u),
						d = a.redSqr();
					d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
					var f = s.redMul(h).redISub(d),
						m = t.redAdd(t).redMul(o);
					return this.curve.jpoint(u, f, m)
				}, R.prototype.trpl = function() {
					if (!this.curve.zeroA) return this.dbl().add(this);
					var e = this.x.redSqr(),
						r = this.y.redSqr(),
						t = this.z.redSqr(),
						o = r.redSqr(),
						n = e.redAdd(e).redIAdd(e),
						i = n.redSqr(),
						a = this.x.redAdd(r).redSqr().redISub(e).redISub(o),
						s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(i)).redSqr(),
						l = o.redIAdd(o);
					l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
					var c = n.redIAdd(a).redSqr().redISub(i).redISub(s).redISub(l),
						u = r.redMul(c);
					u = (u = u.redIAdd(u)).redIAdd(u);
					var h = this.x.redMul(s).redISub(u);
					h = (h = h.redIAdd(h)).redIAdd(h);
					var d = this.y.redMul(c.redMul(l.redISub(c)).redISub(a.redMul(s)));
					d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
					var f = this.z.redAdd(a).redSqr().redISub(t).redISub(s);
					return this.curve.jpoint(h, d, f)
				}, R.prototype.mul = function(e, r) {
					return e = new n.a(e, r), this.curve._wnafMul(this, e)
				}, R.prototype.eq = function(e) {
					if ("affine" === e.type) return this.eq(e.toJ());
					if (this === e) return !0;
					var r = this.z.redSqr(),
						t = e.z.redSqr();
					if (0 !== this.x.redMul(t).redISub(e.x.redMul(r)).cmpn(0)) return !1;
					var o = r.redMul(this.z),
						n = t.redMul(e.z);
					return 0 === this.y.redMul(n).redISub(e.y.redMul(o)).cmpn(0)
				}, R.prototype.eqXToP = function(e) {
					var r = this.z.redSqr(),
						t = e.toRed(this.curve.red).redMul(r);
					if (0 === this.x.cmp(t)) return !0;
					for (var o = e.clone(), n = this.curve.redN.redMul(r);;) {
						if (o.iadd(this.curve.n), o.cmp(this.curve.p) >= 0) return !1;
						if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0
					}
				}, R.prototype.inspect = function() {
					return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
				}, R.prototype.isInfinity = function() {
					return 0 === this.z.cmpn(0)
				};
				var A = s((function(e, r) {
						var t = r;
						t.base = p, t.short = y, t.mont = null, t.edwards = null
					})),
					T = s((function(e, r) {
						var t, o = r,
							n = h.assert;

						function i(e) {
							"short" === e.type ? this.curve = new A.short(e) : "edwards" === e.type ? this.curve = new A.edwards(e) : this.curve = new A.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
						}

						function s(e, r) {
							Object.defineProperty(o, e, {
								configurable: !0,
								enumerable: !0,
								get: function() {
									var t = new i(r);
									return Object.defineProperty(o, e, {
										configurable: !0,
										enumerable: !0,
										value: t
									}), t
								}
							})
						}
						o.PresetCurve = i, s("p192", {
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
							t = null.crash()
						} catch (l) {
							t = void 0
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
							g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", t]
						})
					}));

				function S(e) {
					if (!(this instanceof S)) return new S(e);
					this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
					var r = u.toArray(e.entropy, e.entropyEnc || "hex"),
						t = u.toArray(e.nonce, e.nonceEnc || "hex"),
						o = u.toArray(e.pers, e.persEnc || "hex");
					l(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, t, o)
				}
				var w = S;
				S.prototype._init = function(e, r, t) {
					var o = e.concat(r).concat(t);
					this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
					for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
					this._update(o), this._reseed = 1, this.reseedInterval = 281474976710656
				}, S.prototype._hmac = function() {
					return new a.a.hmac(this.hash, this.K)
				}, S.prototype._update = function(e) {
					var r = this._hmac().update(this.V).update([0]);
					e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
				}, S.prototype.reseed = function(e, r, t, o) {
					"string" != typeof r && (o = t, t = r, r = null), e = u.toArray(e, r), t = u.toArray(t, o), l(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(t || [])), this._reseed = 1
				}, S.prototype.generate = function(e, r, t, o) {
					if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
					"string" != typeof r && (o = t, t = r, r = null), t && (t = u.toArray(t, o || "hex"), this._update(t));
					for (var n = []; n.length < e;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
					var i = n.slice(0, e);
					return this._update(t), this._reseed++, u.encode(i, r)
				};
				var P = h.assert;

				function C(e, r) {
					this.ec = e, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
				}
				var I = C;
				C.fromPublic = function(e, r, t) {
					return r instanceof C ? r : new C(e, {
						pub: r,
						pubEnc: t
					})
				}, C.fromPrivate = function(e, r, t) {
					return r instanceof C ? r : new C(e, {
						priv: r,
						privEnc: t
					})
				}, C.prototype.validate = function() {
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
				}, C.prototype.getPublic = function(e, r) {
					return "string" == typeof e && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub
				}, C.prototype.getPrivate = function(e) {
					return "hex" === e ? this.priv.toString(16, 2) : this.priv
				}, C.prototype._importPrivate = function(e, r) {
					this.priv = new n.a(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
				}, C.prototype._importPublic = function(e, r) {
					if (e.x || e.y) return "mont" === this.ec.curve.type ? P(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || P(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
					this.pub = this.ec.curve.decodePoint(e, r)
				}, C.prototype.derive = function(e) {
					return e.validate() || P(e.validate(), "public point not validated"), e.mul(this.priv).getX()
				}, C.prototype.sign = function(e, r, t) {
					return this.ec.sign(e, this, r, t)
				}, C.prototype.verify = function(e, r) {
					return this.ec.verify(e, r, this)
				}, C.prototype.inspect = function() {
					return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
				};
				var _ = h.assert;

				function F(e, r) {
					if (e instanceof F) return e;
					this._importDER(e, r) || (_(e.r && e.s, "Signature without r or s"), this.r = new n.a(e.r, 16), this.s = new n.a(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
				}
				var L = F;

				function M() {
					this.place = 0
				}

				function U(e, r) {
					var t = e[r.place++];
					if (!(128 & t)) return t;
					var o = 15 & t;
					if (0 === o || o > 4) return !1;
					for (var n = 0, i = 0, a = r.place; i < o; i++, a++) n <<= 8, n |= e[a], n >>>= 0;
					return !(n <= 127) && (r.place = a, n)
				}

				function k(e) {
					for (var r = 0, t = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < t;) r++;
					return 0 === r ? e : e.slice(r)
				}

				function j(e, r) {
					if (r < 128) e.push(r);
					else {
						var t = 1 + (Math.log(r) / Math.LN2 >>> 3);
						for (e.push(128 | t); --t;) e.push(r >>> (t << 3) & 255);
						e.push(r)
					}
				}
				F.prototype._importDER = function(e, r) {
					e = h.toArray(e, r);
					var t = new M;
					if (48 !== e[t.place++]) return !1;
					var o = U(e, t);
					if (!1 === o) return !1;
					if (o + t.place !== e.length) return !1;
					if (2 !== e[t.place++]) return !1;
					var i = U(e, t);
					if (!1 === i) return !1;
					var a = e.slice(t.place, i + t.place);
					if (t.place += i, 2 !== e[t.place++]) return !1;
					var s = U(e, t);
					if (!1 === s) return !1;
					if (e.length !== s + t.place) return !1;
					var l = e.slice(t.place, s + t.place);
					if (0 === a[0]) {
						if (!(128 & a[1])) return !1;
						a = a.slice(1)
					}
					if (0 === l[0]) {
						if (!(128 & l[1])) return !1;
						l = l.slice(1)
					}
					return this.r = new n.a(a), this.s = new n.a(l), this.recoveryParam = null, !0
				}, F.prototype.toDER = function(e) {
					var r = this.r.toArray(),
						t = this.s.toArray();
					for (128 & r[0] && (r = [0].concat(r)), 128 & t[0] && (t = [0].concat(t)), r = k(r), t = k(t); !(t[0] || 128 & t[1]);) t = t.slice(1);
					var o = [2];
					j(o, r.length), (o = o.concat(r)).push(2), j(o, t.length);
					var n = o.concat(t),
						i = [48];
					return j(i, n.length), i = i.concat(n), h.encode(i, e)
				};
				var D = function() {
						throw new Error("unsupported")
					},
					B = h.assert;

				function J(e) {
					if (!(this instanceof J)) return new J(e);
					"string" == typeof e && (B(Object.prototype.hasOwnProperty.call(T, e), "Unknown curve " + e), e = T[e]), e instanceof T.PresetCurve && (e = {
						curve: e
					}), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
				}
				var G = J;
				J.prototype.keyPair = function(e) {
					return new I(this, e)
				}, J.prototype.keyFromPrivate = function(e, r) {
					return I.fromPrivate(this, e, r)
				}, J.prototype.keyFromPublic = function(e, r) {
					return I.fromPublic(this, e, r)
				}, J.prototype.genKeyPair = function(e) {
					e || (e = {});
					for (var r = new w({
							hash: this.hash,
							pers: e.pers,
							persEnc: e.persEnc || "utf8",
							entropy: e.entropy || D(this.hash.hmacStrength),
							entropyEnc: e.entropy && e.entropyEnc || "utf8",
							nonce: this.n.toArray()
						}), t = this.n.byteLength(), o = this.n.sub(new n.a(2));;) {
						var i = new n.a(r.generate(t));
						if (!(i.cmp(o) > 0)) return i.iaddn(1), this.keyFromPrivate(i)
					}
				}, J.prototype._truncateToN = function(e, r) {
					var t = 8 * e.byteLength() - this.n.bitLength();
					return t > 0 && (e = e.ushrn(t)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
				}, J.prototype.sign = function(e, r, t, o) {
					"object" == typeof t && (o = t, t = null), o || (o = {}), r = this.keyFromPrivate(r, t), e = this._truncateToN(new n.a(e, 16));
					for (var i = this.n.byteLength(), a = r.getPrivate().toArray("be", i), s = e.toArray("be", i), l = new w({
							hash: this.hash,
							entropy: a,
							nonce: s,
							pers: o.pers,
							persEnc: o.persEnc || "utf8"
						}), c = this.n.sub(new n.a(1)), u = 0;; u++) {
						var h = o.k ? o.k(u) : new n.a(l.generate(this.n.byteLength()));
						if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(c) >= 0)) {
							var d = this.g.mul(h);
							if (!d.isInfinity()) {
								var f = d.getX(),
									m = f.umod(this.n);
								if (0 !== m.cmpn(0)) {
									var g = h.invm(this.n).mul(m.mul(r.getPrivate()).iadd(e));
									if (0 !== (g = g.umod(this.n)).cmpn(0)) {
										var p = (d.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(m) ? 2 : 0);
										return o.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), p ^= 1), new L({
											r: m,
											s: g,
											recoveryParam: p
										})
									}
								}
							}
						}
					}
				}, J.prototype.verify = function(e, r, t, o) {
					e = this._truncateToN(new n.a(e, 16)), t = this.keyFromPublic(t, o);
					var i = (r = new L(r, "hex")).r,
						a = r.s;
					if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
					if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
					var s, l = a.invm(this.n),
						c = l.mul(e).umod(this.n),
						u = l.mul(i).umod(this.n);
					return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, t.getPublic(), u)).isInfinity() && s.eqXToP(i) : !(s = this.g.mulAdd(c, t.getPublic(), u)).isInfinity() && 0 === s.getX().umod(this.n).cmp(i)
				}, J.prototype.recoverPubKey = function(e, r, t, o) {
					B((3 & t) === t, "The recovery param is more than two bits"), r = new L(r, o);
					var i = this.n,
						a = new n.a(e),
						s = r.r,
						l = r.s,
						c = 1 & t,
						u = t >> 1;
					if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
					s = u ? this.curve.pointFromX(s.add(this.curve.n), c) : this.curve.pointFromX(s, c);
					var h = r.r.invm(i),
						d = i.sub(a).mul(h).umod(i),
						f = l.mul(h).umod(i);
					return this.g.mulAdd(d, s, f)
				}, J.prototype.getKeyRecoveryParam = function(e, r, t, o) {
					if (null !== (r = new L(r, o)).recoveryParam) return r.recoveryParam;
					for (var n = 0; n < 4; n++) {
						var i;
						try {
							i = this.recoverPubKey(e, r, n)
						} catch (e) {
							continue
						}
						if (i.eq(t)) return n
					}
					throw new Error("Unable to find valid recovery factor")
				};
				var x = s((function(e, r) {
					var t = r;
					t.version = "6.5.4", t.utils = h, t.rand = function() {
						throw new Error("unsupported")
					}, t.curve = A, t.curves = T, t.ec = G, t.eddsa = null
				})).ec
			}).call(this, t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/signing-key/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "SigningKey", (function() {
				return N
			})), t.d(r, "recoverPublicKey", (function() {
				return y
			})), t.d(r, "computePublicKey", (function() {
				return O
			}));
			var o = t("./node_modules/@ethersproject/signing-key/lib.esm/elliptic.js"),
				n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/properties/lib.esm/index.js");
			const a = "logger/5.4.1";
			let s = !1,
				l = !1;
			const c = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let u = c.default,
				h = null;
			const d = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var f, m;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(f || (f = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(m || (m = {}));
			const g = "0123456789abcdef";
			class p {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == c[t] && this.throwArgumentError("invalid log level name", "logLevel", e), u > c[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(p.levels.DEBUG, e)
				}
				info(...e) {
					this._log(p.levels.INFO, e)
				}
				warn(...e) {
					this._log(p.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (l) return this.makeError("censored error", r, {});
					r || (r = p.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += g[r[e] >> 4], t += g[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, p.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), d && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: d
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, p.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, p.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, p.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, p.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", p.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", p.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return h || (h = new p(a)), h
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), s) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					l = !!e, s = !!r
				}
				static setLogLevel(e) {
					const r = c[e.toLowerCase()];
					null != r ? u = r : p.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new p(e)
				}
			}
			p.errors = m, p.levels = f;
			const b = new p("signing-key/5.4.0");
			let E = null;

			function v() {
				return E || (E = new o.a("secp256k1")), E
			}
			class N {
				constructor(e) {
					Object(i.defineReadOnly)(this, "curve", "secp256k1"), Object(i.defineReadOnly)(this, "privateKey", Object(n.hexlify)(e));
					const r = v().keyFromPrivate(Object(n.arrayify)(this.privateKey));
					Object(i.defineReadOnly)(this, "publicKey", "0x" + r.getPublic(!1, "hex")), Object(i.defineReadOnly)(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), Object(i.defineReadOnly)(this, "_isSigningKey", !0)
				}
				_addPoint(e) {
					const r = v().keyFromPublic(Object(n.arrayify)(this.publicKey)),
						t = v().keyFromPublic(Object(n.arrayify)(e));
					return "0x" + r.pub.add(t.pub).encodeCompressed("hex")
				}
				signDigest(e) {
					const r = v().keyFromPrivate(Object(n.arrayify)(this.privateKey)),
						t = Object(n.arrayify)(e);
					32 !== t.length && b.throwArgumentError("bad digest length", "digest", e);
					const o = r.sign(t, {
						canonical: !0
					});
					return Object(n.splitSignature)({
						recoveryParam: o.recoveryParam,
						r: Object(n.hexZeroPad)("0x" + o.r.toString(16), 32),
						s: Object(n.hexZeroPad)("0x" + o.s.toString(16), 32)
					})
				}
				computeSharedSecret(e) {
					const r = v().keyFromPrivate(Object(n.arrayify)(this.privateKey)),
						t = v().keyFromPublic(Object(n.arrayify)(O(e)));
					return Object(n.hexZeroPad)("0x" + r.derive(t.getPublic()).toString(16), 32)
				}
				static isSigningKey(e) {
					return !(!e || !e._isSigningKey)
				}
			}

			function y(e, r) {
				const t = Object(n.splitSignature)(r),
					o = {
						r: Object(n.arrayify)(t.r),
						s: Object(n.arrayify)(t.s)
					};
				return "0x" + v().recoverPubKey(Object(n.arrayify)(e), o, t.recoveryParam).encode("hex", !1)
			}

			function O(e, r) {
				const t = Object(n.arrayify)(e);
				if (32 === t.length) {
					const e = new N(t);
					return r ? "0x" + v().keyFromPrivate(t).getPublic(!0, "hex") : e.publicKey
				}
				return 33 === t.length ? r ? Object(n.hexlify)(t) : "0x" + v().keyFromPublic(t).getPublic(!1, "hex") : 65 === t.length ? r ? "0x" + v().keyFromPublic(t).getPublic(!0, "hex") : Object(n.hexlify)(t) : b.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
			}
		},
		"./node_modules/@ethersproject/solidity/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "pack", (function() {
				return d
			})), t.d(r, "keccak256", (function() {
				return f
			})), t.d(r, "sha256", (function() {
				return m
			}));
			var o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js"),
				s = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			const l = new RegExp("^bytes([0-9]+)$"),
				c = new RegExp("^(u?int)([0-9]*)$"),
				u = new RegExp("^(.*)\\[([0-9]*)\\]$"),
				h = "0000000000000000000000000000000000000000000000000000000000000000";

			function d(e, r) {
				if (e.length != r.length) throw new Error("type/value count mismatch");
				const t = [];
				return e.forEach((function(e, i) {
					t.push(function e(r, t, i) {
						switch (r) {
							case "address":
								return i ? Object(n.zeroPad)(t, 32) : Object(n.arrayify)(t);
							case "string":
								return Object(s.f)(t);
							case "bytes":
								return Object(n.arrayify)(t);
							case "bool":
								return t = t ? "0x01" : "0x00", i ? Object(n.zeroPad)(t, 32) : Object(n.arrayify)(t)
						}
						let a = r.match(c);
						if (a) {
							let e = parseInt(a[2] || "256");
							if (a[2] && String(e) !== a[2] || e % 8 != 0 || 0 === e || e > 256) throw new Error("invalid number type - " + r);
							return i && (e = 256), t = o.a.from(t).toTwos(e), Object(n.zeroPad)(t, e / 8)
						}
						if (a = r.match(l)) {
							const e = parseInt(a[1]);
							if (String(e) !== a[1] || 0 === e || e > 32) throw new Error("invalid bytes type - " + r);
							if (Object(n.arrayify)(t).byteLength !== e) throw new Error("invalid value for " + r);
							return i ? Object(n.arrayify)((t + h).substring(0, 66)) : t
						}
						if ((a = r.match(u)) && Array.isArray(t)) {
							const o = a[1];
							if (parseInt(a[2] || String(t.length)) != t.length) throw new Error("invalid value for " + r);
							const i = [];
							return t.forEach((function(r) {
								i.push(e(o, r, !0))
							})), Object(n.concat)(i)
						}
						throw new Error("invalid type - " + r)
					}(e, r[i]))
				})), Object(n.hexlify)(Object(n.concat)(t))
			}

			function f(e, r) {
				return Object(i.keccak256)(d(e, r))
			}

			function m(e, r) {
				return Object(a.c)(d(e, r))
			}
		},
		"./node_modules/@ethersproject/strings/lib.esm/bytes32.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return a
			})), t.d(r, "b", (function() {
				return s
			}));
			var o = t("./node_modules/@ethersproject/constants/lib.esm/hashes.js"),
				n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");

			function a(e) {
				const r = Object(i.f)(e);
				if (r.length > 31) throw new Error("bytes32 string must be less than 32 bytes");
				return Object(n.hexlify)(Object(n.concat)([r, o.a]).slice(0, 32))
			}

			function s(e) {
				const r = Object(n.arrayify)(e);
				if (32 !== r.length) throw new Error("invalid bytes32 - not 32 bytes long");
				if (0 !== r[31]) throw new Error("invalid bytes32 string - no null terminator");
				let t = 31;
				for (; 0 === r[t - 1];) t--;
				return Object(i.h)(r.slice(0, t))
			}
		},
		"./node_modules/@ethersproject/strings/lib.esm/idna.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return m
			}));
			var o = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");

			function n(e, r) {
				r || (r = function(e) {
					return [parseInt(e, 16)]
				});
				let t = 0,
					o = {};
				return e.split(",").forEach(e => {
					let n = e.split(":");
					t += parseInt(n[0], 16), o[t] = r(n[1])
				}), o
			}

			function i(e) {
				let r = 0;
				return e.split(",").map(e => {
					let t = e.split("-");
					return 1 === t.length ? t[1] = "0" : "" === t[1] && (t[1] = "1"), {
						l: r + parseInt(t[0], 16),
						h: r = parseInt(t[1], 16)
					}
				})
			}

			function a(e, r) {
				let t = 0;
				for (let o = 0; o < r.length; o++) {
					let n = r[o];
					if (e >= (t += n.l) && e <= t + n.h && (e - t) % (n.d || 1) == 0) {
						if (n.e && -1 !== n.e.indexOf(e - t)) continue;
						return n
					}
				}
				return null
			}
			const s = i("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),
				l = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(e => parseInt(e, 16)),
				c = [{
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
				u = n("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),
				h = n("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),
				d = n("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(e) {
					if (e.length % 4 != 0) throw new Error("bad data");
					let r = [];
					for (let t = 0; t < e.length; t += 4) r.push(parseInt(e.substring(t, t + 4), 16));
					return r
				})),
				f = i("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

			function m(e) {
				if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
				let r = Object(o.g)(e);
				var t;
				t = r.map(e => {
					if (l.indexOf(e) >= 0) return [];
					if (e >= 65024 && e <= 65039) return [];
					let r = function(e) {
						let r = a(e, c);
						if (r) return [e + r.s];
						let t = u[e];
						if (t) return t;
						let o = h[e];
						if (o) return [e + o[0]];
						let n = d[e];
						return n || null
					}(e);
					return r || [e]
				}), r = t.reduce((e, r) => (r.forEach(r => {
					e.push(r)
				}), e), []), (r = Object(o.g)(Object(o.e)(r), o.a.NFKC)).forEach(e => {
					if (function(e) {
							return !!a(e, f)
						}(e)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
				}), r.forEach(e => {
					if (function(e) {
							return !!a(e, s)
						}(e)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
				});
				let n = Object(o.e)(r);
				if ("-" === n.substring(0, 1) || "--" === n.substring(2, 4) || "-" === n.substring(n.length - 1)) throw new Error("invalid hyphen");
				if (n.length > 63) throw new Error("too long");
				return n
			}
		},
		"./node_modules/@ethersproject/strings/lib.esm/utf8.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return p
			})), t.d(r, "c", (function() {
				return b
			})), t.d(r, "b", (function() {
				return v
			})), t.d(r, "f", (function() {
				return y
			})), t.d(r, "d", (function() {
				return R
			})), t.d(r, "e", (function() {
				return A
			})), t.d(r, "h", (function() {
				return T
			})), t.d(r, "g", (function() {
				return S
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");
			const n = "logger/5.4.1";
			let i = !1,
				a = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let l = s.default,
				c = null;
			const u = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var h, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(h || (h = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			const f = "0123456789abcdef";
			class m {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), l > s[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(m.levels.DEBUG, e)
				}
				info(...e) {
					this._log(m.levels.INFO, e)
				}
				warn(...e) {
					this._log(m.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (a) return this.makeError("censored error", r, {});
					r || (r = m.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += f[r[e] >> 4], t += f[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, m.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return c || (c = new m(n)), c
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), i) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					a = !!e, i = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? l = r : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = d, m.levels = h;
			const g = new m("strings/5.4.0");
			var p, b;

			function E(e, r, t, o, n) {
				if (e === b.BAD_PREFIX || e === b.UNEXPECTED_CONTINUE) {
					let e = 0;
					for (let o = r + 1; o < t.length && t[o] >> 6 == 2; o++) e++;
					return e
				}
				return e === b.OVERRUN ? t.length - r - 1 : 0
			}! function(e) {
				e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD"
			}(p || (p = {})),
			function(e) {
				e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation"
			}(b || (b = {}));
			const v = Object.freeze({
				error: function(e, r, t, o, n) {
					return g.throwArgumentError(`invalid codepoint at offset ${r}; ${e}`, "bytes", t)
				},
				ignore: E,
				replace: function(e, r, t, o, n) {
					return e === b.OVERLONG ? (o.push(n), 0) : (o.push(65533), E(e, r, t))
				}
			});

			function N(e, r) {
				null == r && (r = v.error), e = Object(o.arrayify)(e);
				const t = [];
				let n = 0;
				for (; n < e.length;) {
					const o = e[n++];
					if (o >> 7 == 0) {
						t.push(o);
						continue
					}
					let i = null,
						a = null;
					if (192 == (224 & o)) i = 1, a = 127;
					else if (224 == (240 & o)) i = 2, a = 2047;
					else {
						if (240 != (248 & o)) {
							n += r(128 == (192 & o) ? b.UNEXPECTED_CONTINUE : b.BAD_PREFIX, n - 1, e, t);
							continue
						}
						i = 3, a = 65535
					}
					if (n - 1 + i >= e.length) {
						n += r(b.OVERRUN, n - 1, e, t);
						continue
					}
					let s = o & (1 << 8 - i - 1) - 1;
					for (let l = 0; l < i; l++) {
						let o = e[n];
						if (128 != (192 & o)) {
							n += r(b.MISSING_CONTINUE, n, e, t), s = null;
							break
						}
						s = s << 6 | 63 & o, n++
					}
					null !== s && (s > 1114111 ? n += r(b.OUT_OF_RANGE, n - 1 - i, e, t, s) : s >= 55296 && s <= 57343 ? n += r(b.UTF16_SURROGATE, n - 1 - i, e, t, s) : s <= a ? n += r(b.OVERLONG, n - 1 - i, e, t, s) : t.push(s))
				}
				return t
			}

			function y(e, r = p.current) {
				r != p.current && (g.checkNormalize(), e = e.normalize(r));
				let t = [];
				for (let o = 0; o < e.length; o++) {
					const r = e.charCodeAt(o);
					if (r < 128) t.push(r);
					else if (r < 2048) t.push(r >> 6 | 192), t.push(63 & r | 128);
					else if (55296 == (64512 & r)) {
						o++;
						const n = e.charCodeAt(o);
						if (o >= e.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
						const i = 65536 + ((1023 & r) << 10) + (1023 & n);
						t.push(i >> 18 | 240), t.push(i >> 12 & 63 | 128), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128)
					} else t.push(r >> 12 | 224), t.push(r >> 6 & 63 | 128), t.push(63 & r | 128)
				}
				return Object(o.arrayify)(t)
			}

			function O(e) {
				const r = "0000" + e.toString(16);
				return "\\u" + r.substring(r.length - 4)
			}

			function R(e, r) {
				return '"' + N(e, r).map(e => {
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
					return e <= 65535 ? O(e) : O(55296 + ((e -= 65536) >> 10 & 1023)) + O(56320 + (1023 & e))
				}).join("") + '"'
			}

			function A(e) {
				return e.map(e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10 & 1023), 56320 + (1023 & e)))).join("")
			}

			function T(e, r) {
				return A(N(e, r))
			}

			function S(e, r = p.current) {
				return N(y(e, r))
			}
		},
		"./node_modules/@ethersproject/transactions/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "TransactionTypes", (function() {
				return R
			})), t.d(r, "computeAddress", (function() {
				return P
			})), t.d(r, "recoverAddress", (function() {
				return C
			})), t.d(r, "accessListify", (function() {
				return F
			})), t.d(r, "serialize", (function() {
				return k
			})), t.d(r, "parse", (function() {
				return D
			}));
			var o = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js"),
				s = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				c = t("./node_modules/@ethersproject/rlp/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/signing-key/lib.esm/index.js");
			const h = "logger/5.4.1";
			let d = !1,
				f = !1;
			const m = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let g = m.default,
				p = null;
			const b = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var E, v;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(E || (E = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(v || (v = {}));
			const N = "0123456789abcdef";
			class y {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == m[t] && this.throwArgumentError("invalid log level name", "logLevel", e), g > m[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(y.levels.DEBUG, e)
				}
				info(...e) {
					this._log(y.levels.INFO, e)
				}
				warn(...e) {
					this._log(y.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (f) return this.makeError("censored error", r, {});
					r || (r = y.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += N[r[e] >> 4], t += N[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, y.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), b && this.throwError("platform missing String.prototype.normalize", y.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: b
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, y.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, y.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, y.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, y.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", y.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", y.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", y.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return p || (p = new y(h)), p
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", y.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), d) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", y.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					f = !!e, d = !!r
				}
				static setLogLevel(e) {
					const r = m[e.toLowerCase()];
					null != r ? g = r : y.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new y(e)
				}
			}
			y.errors = v, y.levels = E;
			const O = new y("transactions/5.4.0");
			var R;

			function A(e) {
				return "0x" === e ? null : Object(o.getAddress)(e)
			}

			function T(e) {
				return "0x" === e ? a.h : n.a.from(e)
			}! function(e) {
				e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559"
			}(R || (R = {}));
			const S = [{
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
				w = {
					chainId: !0,
					data: !0,
					gasLimit: !0,
					gasPrice: !0,
					nonce: !0,
					to: !0,
					type: !0,
					value: !0
				};

			function P(e) {
				const r = Object(u.computePublicKey)(e);
				return Object(o.getAddress)(Object(i.hexDataSlice)(Object(s.keccak256)(Object(i.hexDataSlice)(r, 1)), 12))
			}

			function C(e, r) {
				return P(Object(u.recoverPublicKey)(Object(i.arrayify)(e), r))
			}

			function I(e, r) {
				const t = Object(i.stripZeros)(n.a.from(e).toHexString());
				return t.length > 32 && O.throwArgumentError("invalid length for " + r, "transaction:" + r, e), t
			}

			function _(e, r) {
				return {
					address: Object(o.getAddress)(e),
					storageKeys: (r || []).map((r, t) => (32 !== Object(i.hexDataLength)(r) && O.throwArgumentError("invalid access list storageKey", `accessList[${e}:${t}]`, r), r.toLowerCase()))
				}
			}

			function F(e) {
				if (Array.isArray(e)) return e.map((e, r) => Array.isArray(e) ? (e.length > 2 && O.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${r}]`, e), _(e[0], e[1])) : _(e.address, e.storageKeys));
				const r = Object.keys(e).map(r => {
					const t = e[r].reduce((e, r) => (e[r] = !0, e), {});
					return _(r, Object.keys(t).sort())
				});
				return r.sort((e, r) => e.address.localeCompare(r.address)), r
			}

			function L(e) {
				return F(e).map(e => [e.address, e.storageKeys])
			}

			function M(e, r) {
				if (null != e.gasPrice) {
					const r = n.a.from(e.gasPrice),
						t = n.a.from(e.maxFeePerGas || 0);
					r.eq(t) || O.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
						gasPrice: r,
						maxFeePerGas: t
					})
				}
				const t = [I(e.chainId || 0, "chainId"), I(e.nonce || 0, "nonce"), I(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), I(e.maxFeePerGas || 0, "maxFeePerGas"), I(e.gasLimit || 0, "gasLimit"), null != e.to ? Object(o.getAddress)(e.to) : "0x", I(e.value || 0, "value"), e.data || "0x", L(e.accessList || [])];
				if (r) {
					const e = Object(i.splitSignature)(r);
					t.push(I(e.recoveryParam, "recoveryParam")), t.push(Object(i.stripZeros)(e.r)), t.push(Object(i.stripZeros)(e.s))
				}
				return Object(i.hexConcat)(["0x02", c.encode(t)])
			}

			function U(e, r) {
				const t = [I(e.chainId || 0, "chainId"), I(e.nonce || 0, "nonce"), I(e.gasPrice || 0, "gasPrice"), I(e.gasLimit || 0, "gasLimit"), null != e.to ? Object(o.getAddress)(e.to) : "0x", I(e.value || 0, "value"), e.data || "0x", L(e.accessList || [])];
				if (r) {
					const e = Object(i.splitSignature)(r);
					t.push(I(e.recoveryParam, "recoveryParam")), t.push(Object(i.stripZeros)(e.r)), t.push(Object(i.stripZeros)(e.s))
				}
				return Object(i.hexConcat)(["0x01", c.encode(t)])
			}

			function k(e, r) {
				if (null == e.type || 0 === e.type) return null != e.accessList && O.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
					function(e, r) {
						Object(l.checkProperties)(e, w);
						const t = [];
						S.forEach((function(r) {
							let o = e[r.name] || [];
							const n = {};
							r.numeric && (n.hexPad = "left"), o = Object(i.arrayify)(Object(i.hexlify)(o, n)), r.length && o.length !== r.length && o.length > 0 && O.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, o), r.maxLength && (o = Object(i.stripZeros)(o)).length > r.maxLength && O.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, o), t.push(Object(i.hexlify)(o))
						}));
						let o = 0;
						if (null != e.chainId ? "number" != typeof(o = e.chainId) && O.throwArgumentError("invalid transaction.chainId", "transaction", e) : r && !Object(i.isBytesLike)(r) && r.v > 28 && (o = Math.floor((r.v - 35) / 2)), 0 !== o && (t.push(Object(i.hexlify)(o)), t.push("0x"), t.push("0x")), !r) return c.encode(t);
						const n = Object(i.splitSignature)(r);
						let a = 27 + n.recoveryParam;
						return 0 !== o ? (t.pop(), t.pop(), t.pop(), a += 2 * o + 8, n.v > 28 && n.v !== a && O.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r)) : n.v !== a && O.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r), t.push(Object(i.hexlify)(a)), t.push(Object(i.stripZeros)(Object(i.arrayify)(n.r))), t.push(Object(i.stripZeros)(Object(i.arrayify)(n.s))), c.encode(t)
					}(e, r);
				switch (e.type) {
					case 1:
						return U(e, r);
					case 2:
						return M(e, r)
				}
				return O.throwError(`unsupported transaction type: ${e.type}`, y.errors.UNSUPPORTED_OPERATION, {
					operation: "serializeTransaction",
					transactionType: e.type
				})
			}

			function j(e, r, t) {
				try {
					const t = T(r[0]).toNumber();
					if (0 !== t && 1 !== t) throw new Error("bad recid");
					e.v = t
				} catch (o) {
					O.throwArgumentError("invalid v for transaction type: 1", "v", r[0])
				}
				e.r = Object(i.hexZeroPad)(r[1], 32), e.s = Object(i.hexZeroPad)(r[2], 32);
				try {
					const r = Object(s.keccak256)(t(e));
					e.from = C(r, {
						r: e.r,
						s: e.s,
						recoveryParam: e.v
					})
				} catch (o) {
					console.log(o)
				}
			}

			function D(e) {
				const r = Object(i.arrayify)(e);
				if (r[0] > 127) return function(e) {
					const r = c.decode(e);
					9 !== r.length && 6 !== r.length && O.throwArgumentError("invalid raw transaction", "rawTransaction", e);
					const t = {
						nonce: T(r[0]).toNumber(),
						gasPrice: T(r[1]),
						gasLimit: T(r[2]),
						to: A(r[3]),
						value: T(r[4]),
						data: r[5],
						chainId: 0
					};
					if (6 === r.length) return t;
					try {
						t.v = n.a.from(r[6]).toNumber()
					} catch (o) {
						return console.log(o), t
					}
					if (t.r = Object(i.hexZeroPad)(r[7], 32), t.s = Object(i.hexZeroPad)(r[8], 32), n.a.from(t.r).isZero() && n.a.from(t.s).isZero()) t.chainId = t.v, t.v = 0;
					else {
						t.chainId = Math.floor((t.v - 35) / 2), t.chainId < 0 && (t.chainId = 0);
						let n = t.v - 27;
						const a = r.slice(0, 6);
						0 !== t.chainId && (a.push(Object(i.hexlify)(t.chainId)), a.push("0x"), a.push("0x"), n -= 2 * t.chainId + 8);
						const l = Object(s.keccak256)(c.encode(a));
						try {
							t.from = C(l, {
								r: Object(i.hexlify)(t.r),
								s: Object(i.hexlify)(t.s),
								recoveryParam: n
							})
						} catch (o) {
							console.log(o)
						}
						t.hash = Object(s.keccak256)(e)
					}
					return t.type = null, t
				}(r);
				switch (r[0]) {
					case 1:
						return function(e) {
							const r = c.decode(e.slice(1));
							8 !== r.length && 11 !== r.length && O.throwArgumentError("invalid component count for transaction type: 1", "payload", Object(i.hexlify)(e));
							const t = {
								type: 1,
								chainId: T(r[0]).toNumber(),
								nonce: T(r[1]).toNumber(),
								gasPrice: T(r[2]),
								gasLimit: T(r[3]),
								to: A(r[4]),
								value: T(r[5]),
								data: r[6],
								accessList: F(r[7])
							};
							return 8 === r.length ? t : (t.hash = Object(s.keccak256)(e), j(t, r.slice(8), U), t)
						}(r);
					case 2:
						return function(e) {
							const r = c.decode(e.slice(1));
							9 !== r.length && 12 !== r.length && O.throwArgumentError("invalid component count for transaction type: 2", "payload", Object(i.hexlify)(e));
							const t = T(r[2]),
								o = T(r[3]),
								n = {
									type: 2,
									chainId: T(r[0]).toNumber(),
									nonce: T(r[1]).toNumber(),
									maxPriorityFeePerGas: t,
									maxFeePerGas: o,
									gasPrice: null,
									gasLimit: T(r[4]),
									to: A(r[5]),
									value: T(r[6]),
									data: r[7],
									accessList: F(r[8])
								};
							return 9 === r.length ? n : (n.hash = Object(s.keccak256)(e), j(n, r.slice(9), M), n)
						}(r)
				}
				return O.throwError(`unsupported transaction type: ${r[0]}`, y.errors.UNSUPPORTED_OPERATION, {
					operation: "parseTransaction",
					transactionType: r[0]
				})
			}
		},
		"./node_modules/@ethersproject/units/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "commify", (function() {
				return b
			})), t.d(r, "formatUnits", (function() {
				return E
			})), t.d(r, "parseUnits", (function() {
				return v
			})), t.d(r, "formatEther", (function() {
				return N
			})), t.d(r, "parseEther", (function() {
				return y
			}));
			var o = t("./node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js");
			const n = "logger/5.4.1";
			let i = !1,
				a = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let l = s.default,
				c = null;
			const u = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var h, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(h || (h = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			const f = "0123456789abcdef";
			class m {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), l > s[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(m.levels.DEBUG, e)
				}
				info(...e) {
					this._log(m.levels.INFO, e)
				}
				warn(...e) {
					this._log(m.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (a) return this.makeError("censored error", r, {});
					r || (r = m.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += f[r[e] >> 4], t += f[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, m.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return c || (c = new m(n)), c
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), i) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					a = !!e, i = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? l = r : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = d, m.levels = h;
			const g = new m("units/5.4.0"),
				p = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

			function b(e) {
				const r = String(e).split(".");
				(r.length > 2 || !r[0].match(/^-?[0-9]*$/) || r[1] && !r[1].match(/^[0-9]*$/) || "." === e || "-." === e) && g.throwArgumentError("invalid value", "value", e);
				let t = r[0],
					o = "";
				for ("-" === t.substring(0, 1) && (o = "-", t = t.substring(1));
					"0" === t.substring(0, 1);) t = t.substring(1);
				"" === t && (t = "0");
				let n = "";
				for (2 === r.length && (n = "." + (r[1] || "0")); n.length > 2 && "0" === n[n.length - 1];) n = n.substring(0, n.length - 1);
				const i = [];
				for (; t.length;) {
					if (t.length <= 3) {
						i.unshift(t);
						break
					} {
						const e = t.length - 3;
						i.unshift(t.substring(e)), t = t.substring(0, e)
					}
				}
				return o + i.join(",") + n
			}

			function E(e, r) {
				if ("string" == typeof r) {
					const e = p.indexOf(r); - 1 !== e && (r = 3 * e)
				}
				return Object(o.b)(e, null != r ? r : 18)
			}

			function v(e, r) {
				if ("string" != typeof e && g.throwArgumentError("value must be a string", "value", e), "string" == typeof r) {
					const e = p.indexOf(r); - 1 !== e && (r = 3 * e)
				}
				return Object(o.c)(e, null != r ? r : 18)
			}

			function N(e) {
				return E(e, 18)
			}

			function y(e) {
				return v(e, 18)
			}
		},
		"./node_modules/@ethersproject/wallet/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "Wallet", (function() {
				return I
			})), t.d(r, "verifyMessage", (function() {
				return _
			})), t.d(r, "verifyTypedData", (function() {
				return F
			}));
			var o = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				n = t("./node_modules/@ethersproject/abstract-provider/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/hash/lib.esm/message.js"),
				l = t("./node_modules/@ethersproject/hash/lib.esm/typed-data.js"),
				c = t("./node_modules/@ethersproject/hdnode/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				h = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				d = t("./node_modules/@ethersproject/random/lib.esm/random.js"),
				f = t("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				m = t("./node_modules/@ethersproject/json-wallets/lib.esm/keystore.js"),
				g = t("./node_modules/@ethersproject/json-wallets/lib.esm/index.js"),
				p = t("./node_modules/@ethersproject/transactions/lib.esm/index.js");
			const b = "logger/5.4.1";
			let E = !1,
				v = !1;
			const N = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let y = N.default,
				O = null;
			const R = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var A, T;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(A || (A = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(T || (T = {}));
			const S = "0123456789abcdef";
			class w {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == N[t] && this.throwArgumentError("invalid log level name", "logLevel", e), y > N[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(w.levels.DEBUG, e)
				}
				info(...e) {
					this._log(w.levels.INFO, e)
				}
				warn(...e) {
					this._log(w.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (v) return this.makeError("censored error", r, {});
					r || (r = w.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += S[r[e] >> 4], t += S[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, w.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), R && this.throwError("platform missing String.prototype.normalize", w.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: R
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, w.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, w.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, w.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, w.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", w.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", w.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", w.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return O || (O = new w(b)), O
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", w.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), E) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", w.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					v = !!e, E = !!r
				}
				static setLogLevel(e) {
					const r = N[e.toLowerCase()];
					null != r ? y = r : w.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new w(e)
				}
			}
			w.errors = T, w.levels = A;
			var P = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const C = new w("wallet/5.4.0");
			class I extends i.a {
				constructor(e, r) {
					if (C.checkNew(new.target, I), super(), null != (t = e) && Object(a.isHexString)(t.privateKey, 32) && null != t.address) {
						const r = new f.SigningKey(e.privateKey);
						if (Object(h.defineReadOnly)(this, "_signingKey", () => r), Object(h.defineReadOnly)(this, "address", Object(p.computeAddress)(this.publicKey)), this.address !== Object(o.getAddress)(e.address) && C.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), function(e) {
								const r = e.mnemonic;
								return r && r.phrase
							}(e)) {
							const r = e.mnemonic;
							Object(h.defineReadOnly)(this, "_mnemonic", () => ({
								phrase: r.phrase,
								path: r.path || c.defaultPath,
								locale: r.locale || "en"
							}));
							const t = this.mnemonic,
								o = c.HDNode.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path);
							Object(p.computeAddress)(o.privateKey) !== this.address && C.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]")
						} else Object(h.defineReadOnly)(this, "_mnemonic", () => null)
					} else {
						if (f.SigningKey.isSigningKey(e)) "secp256k1" !== e.curve && C.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), Object(h.defineReadOnly)(this, "_signingKey", () => e);
						else {
							"string" == typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e);
							const r = new f.SigningKey(e);
							Object(h.defineReadOnly)(this, "_signingKey", () => r)
						}
						Object(h.defineReadOnly)(this, "_mnemonic", () => null), Object(h.defineReadOnly)(this, "address", Object(p.computeAddress)(this.publicKey))
					}
					var t;
					r && !n.b.isProvider(r) && C.throwArgumentError("invalid provider", "provider", r), Object(h.defineReadOnly)(this, "provider", r || null)
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
					return new I(this, e)
				}
				signTransaction(e) {
					return Object(h.resolveProperties)(e).then(r => {
						null != r.from && (Object(o.getAddress)(r.from) !== this.address && C.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete r.from);
						const t = this._signingKey().signDigest(Object(u.keccak256)(Object(p.serialize)(r)));
						return Object(p.serialize)(r, t)
					})
				}
				signMessage(e) {
					return P(this, void 0, void 0, (function*() {
						return Object(a.joinSignature)(this._signingKey().signDigest(Object(s.a)(e)))
					}))
				}
				_signTypedData(e, r, t) {
					return P(this, void 0, void 0, (function*() {
						const o = yield l.a.resolveNames(e, r, t, e => (null == this.provider && C.throwError("cannot resolve ENS names without a provider", w.errors.UNSUPPORTED_OPERATION, {
							operation: "resolveName",
							value: e
						}), this.provider.resolveName(e)));
						return Object(a.joinSignature)(this._signingKey().signDigest(l.a.hash(o.domain, r, o.value)))
					}))
				}
				encrypt(e, r, t) {
					if ("function" != typeof r || t || (t = r, r = {}), t && "function" != typeof t) throw new Error("invalid callback");
					return r || (r = {}), Object(m.c)(this, e, r, t)
				}
				static createRandom(e) {
					let r = Object(d.a)(16);
					e || (e = {}), e.extraEntropy && (r = Object(a.arrayify)(Object(a.hexDataSlice)(Object(u.keccak256)(Object(a.concat)([r, e.extraEntropy])), 0, 16)));
					const t = Object(c.entropyToMnemonic)(r, e.locale);
					return I.fromMnemonic(t, e.path, e.locale)
				}
				static fromEncryptedJson(e, r, t) {
					return Object(g.decryptJsonWallet)(e, r, t).then(e => new I(e))
				}
				static fromEncryptedJsonSync(e, r) {
					return new I(Object(g.decryptJsonWalletSync)(e, r))
				}
				static fromMnemonic(e, r, t) {
					return r || (r = c.defaultPath), new I(c.HDNode.fromMnemonic(e, null, t).derivePath(r))
				}
			}

			function _(e, r) {
				return Object(p.recoverAddress)(Object(s.a)(e), r)
			}

			function F(e, r, t, o) {
				return Object(p.recoverAddress)(l.a.hash(e, r, t), o)
			}
		},
		"./node_modules/@ethersproject/web/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "_fetchData", (function() {
				return A
			})), t.d(r, "fetchJson", (function() {
				return T
			})), t.d(r, "poll", (function() {
				return S
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function n(e) {
				e = Object(o.arrayify)(e);
				let r = "";
				for (let t = 0; t < e.length; t++) r += String.fromCharCode(e[t]);
				return btoa(r)
			}
			var i = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			const s = "logger/5.4.1";
			let l = !1,
				c = !1;
			const u = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let h = u.default,
				d = null;
			const f = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var m, g;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(m || (m = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(g || (g = {}));
			const p = "0123456789abcdef";
			class b {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == u[t] && this.throwArgumentError("invalid log level name", "logLevel", e), h > u[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(b.levels.DEBUG, e)
				}
				info(...e) {
					this._log(b.levels.INFO, e)
				}
				warn(...e) {
					this._log(b.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (c) return this.makeError("censored error", r, {});
					r || (r = b.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += p[r[e] >> 4], t += p[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, b.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", b.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: f
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, b.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, b.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, b.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, b.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", b.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", b.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", b.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return d || (d = new b(s)), d
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", b.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), l) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", b.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					c = !!e, l = !!r
				}
				static setLogLevel(e) {
					const r = u[e.toLowerCase()];
					null != r ? h = r : b.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new b(e)
				}
			}
			b.errors = g, b.levels = m;
			var E = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};

			function v(e, r) {
				return E(this, void 0, void 0, (function*() {
					null == r && (r = {});
					const t = {
							method: r.method || "GET",
							headers: r.headers || {},
							body: r.body || void 0,
							mode: "cors",
							cache: "no-cache",
							credentials: "same-origin",
							redirect: "follow",
							referrer: "client"
						},
						n = yield fetch(e, t), i = yield n.arrayBuffer(), a = {};
					return n.headers.forEach ? n.headers.forEach((e, r) => {
						a[r.toLowerCase()] = e
					}) : n.headers.keys().forEach(e => {
						a[e.toLowerCase()] = n.headers.get(e)
					}), {
						headers: a,
						statusCode: n.status,
						statusMessage: n.statusText,
						body: Object(o.arrayify)(new Uint8Array(i))
					}
				}))
			}
			var N = function(e, r, t, o) {
				return new(t || (t = Promise))((function(n, i) {
					function a(e) {
						try {
							l(o.next(e))
						} catch (r) {
							i(r)
						}
					}

					function s(e) {
						try {
							l(o.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function l(e) {
						var r;
						e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(a, s)
					}
					l((o = o.apply(e, r || [])).next())
				}))
			};
			const y = new b("web/5.4.0");

			function O(e) {
				return new Promise(r => {
					setTimeout(r, e)
				})
			}

			function R(e, r) {
				if (null == e) return null;
				if ("string" == typeof e) return e;
				if (Object(o.isBytesLike)(e)) {
					if (r && ("text" === r.split("/")[0] || "application/json" === r.split(";")[0].trim())) try {
						return Object(a.h)(e)
					} catch (t) {}
					return Object(o.hexlify)(e)
				}
				return e
			}

			function A(e, r, t) {
				const o = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
				y.assertArgument(o > 0 && o % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", o);
				const i = "object" == typeof e ? e.throttleCallback : null,
					s = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
				y.assertArgument(s > 0 && s % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
				const l = {};
				let c = null;
				const u = {
					method: "GET"
				};
				let h = !1,
					d = 12e4;
				if ("string" == typeof e) c = e;
				else if ("object" == typeof e) {
					if (null != e && null != e.url || y.throwArgumentError("missing URL", "connection.url", e), c = e.url, "number" == typeof e.timeout && e.timeout > 0 && (d = e.timeout), e.headers)
						for (const r in e.headers) l[r.toLowerCase()] = {
							key: r,
							value: String(e.headers[r])
						}, ["if-none-match", "if-modified-since"].indexOf(r.toLowerCase()) >= 0 && (h = !0);
					if (u.allowGzip = !!e.allowGzip, null != e.user && null != e.password) {
						"https:" !== c.substring(0, 6) && !0 !== e.allowInsecureAuthentication && y.throwError("basic authentication requires a secure https url", b.errors.INVALID_ARGUMENT, {
							argument: "url",
							url: c,
							user: e.user,
							password: "[REDACTED]"
						});
						const r = e.user + ":" + e.password;
						l.authorization = {
							key: "Authorization",
							value: "Basic " + n(Object(a.f)(r))
						}
					}
				}
				r && (u.method = "POST", u.body = r, null == l["content-type"] && (l["content-type"] = {
					key: "Content-Type",
					value: "application/octet-stream"
				}), null == l["content-length"] && (l["content-length"] = {
					key: "Content-Length",
					value: String(r.length)
				}));
				const f = {};
				Object.keys(l).forEach(e => {
					const r = l[e];
					f[r.key] = r.value
				}), u.headers = f;
				const m = function() {
						let e = null;
						return {
							promise: new Promise((function(r, t) {
								d && (e = setTimeout(() => {
									null != e && (e = null, t(y.makeError("timeout", b.errors.TIMEOUT, {
										requestBody: R(u.body, f["content-type"]),
										requestMethod: u.method,
										timeout: d,
										url: c
									})))
								}, d))
							})),
							cancel: function() {
								null != e && (clearTimeout(e), e = null)
							}
						}
					}(),
					g = function() {
						return N(this, void 0, void 0, (function*() {
							for (let r = 0; r < o; r++) {
								let n = null;
								try {
									if (429 === (n = yield v(c, u)).statusCode && r < o) {
										let e = !0;
										if (i && (e = yield i(r, c)), e) {
											let e = 0;
											const t = n.headers["retry-after"];
											e = "string" == typeof t && t.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(t) : s * parseInt(String(Math.random() * Math.pow(2, r))), yield O(e);
											continue
										}
									}
								} catch (e) {
									null == (n = e.response) && (m.cancel(), y.throwError("missing response", b.errors.SERVER_ERROR, {
										requestBody: R(u.body, f["content-type"]),
										requestMethod: u.method,
										serverError: e,
										url: c
									}))
								}
								let a = n.body;
								if (h && 304 === n.statusCode ? a = null : (n.statusCode < 200 || n.statusCode >= 300) && (m.cancel(), y.throwError("bad response", b.errors.SERVER_ERROR, {
										status: n.statusCode,
										headers: n.headers,
										body: R(a, n.headers ? n.headers["content-type"] : null),
										requestBody: R(u.body, f["content-type"]),
										requestMethod: u.method,
										url: c
									})), t) try {
									const e = yield t(a, n);
									return m.cancel(), e
								} catch (e) {
									if (e.throttleRetry && r < o) {
										let e = !0;
										if (i && (e = yield i(r, c)), e) {
											const e = s * parseInt(String(Math.random() * Math.pow(2, r)));
											yield O(e);
											continue
										}
									}
									m.cancel(), y.throwError("processing response error", b.errors.SERVER_ERROR, {
										body: R(a, n.headers ? n.headers["content-type"] : null),
										error: e,
										requestBody: R(u.body, f["content-type"]),
										requestMethod: u.method,
										url: c
									})
								}
								return m.cancel(), a
							}
							return y.throwError("failed response", b.errors.SERVER_ERROR, {
								requestBody: R(u.body, f["content-type"]),
								requestMethod: u.method,
								url: c
							})
						}))
					}();
				return Promise.race([m.promise, g])
			}

			function T(e, r, t) {
				let o = null;
				if (null != r) {
					o = Object(a.f)(r);
					const t = "string" == typeof e ? {
						url: e
					} : Object(i.shallowCopy)(e);
					if (t.headers) {
						0 !== Object.keys(t.headers).filter(e => "content-type" === e.toLowerCase()).length || (t.headers = Object(i.shallowCopy)(t.headers), t.headers["content-type"] = "application/json")
					} else t.headers = {
						"content-type": "application/json"
					};
					e = t
				}
				return A(e, o, (e, r) => {
					let o = null;
					if (null != e) try {
						o = JSON.parse(Object(a.h)(e))
					} catch (n) {
						y.throwError("invalid JSON", b.errors.SERVER_ERROR, {
							body: e,
							error: n
						})
					}
					return t && (o = t(o, r)), o
				})
			}

			function S(e, r) {
				return r || (r = {}), null == (r = Object(i.shallowCopy)(r)).floor && (r.floor = 0), null == r.ceiling && (r.ceiling = 1e4), null == r.interval && (r.interval = 250), new Promise((function(t, o) {
					let n = null,
						i = !1;
					const a = () => !i && (i = !0, n && clearTimeout(n), !0);
					r.timeout && (n = setTimeout(() => {
						a() && o(new Error("timeout"))
					}, r.timeout));
					const s = r.retryLimit;
					let l = 0;
					! function n() {
						return e().then((function(e) {
							if (void 0 !== e) a() && t(e);
							else if (r.oncePoll) r.oncePoll.once("poll", n);
							else if (r.onceBlock) r.onceBlock.once("block", n);
							else if (!i) {
								if (++l > s) return void(a() && o(new Error("retry limit reached")));
								let e = r.interval * parseInt(String(Math.random() * Math.pow(2, l)));
								e < r.floor && (e = r.floor), e > r.ceiling && (e = r.ceiling), setTimeout(n, e)
							}
							return null
						}), (function(e) {
							a() && o(e)
						}))
					}()
				}))
			}
		},
		"./node_modules/@ethersproject/wordlists/lib.esm/wordlist.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return b
			})), t.d(r, "a", (function() {
				return E
			}));
			var o = t("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				n = t("./node_modules/@ethersproject/properties/lib.esm/index.js");
			const i = "logger/5.4.1";
			let a = !1,
				s = !1;
			const l = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let c = l.default,
				u = null;
			const h = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var d, f;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(d || (d = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(f || (f = {}));
			const m = "0123456789abcdef";
			class g {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == l[t] && this.throwArgumentError("invalid log level name", "logLevel", e), c > l[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(g.levels.DEBUG, e)
				}
				info(...e) {
					this._log(g.levels.INFO, e)
				}
				warn(...e) {
					this._log(g.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (s) return this.makeError("censored error", r, {});
					r || (r = g.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += m[r[e] >> 4], t += m[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const i = new Error(e);
					return i.reason = n, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, g.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", g.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: h
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, g.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, g.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, g.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, g.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", g.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", g.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", g.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return u || (u = new g(i)), u
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", g.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), a) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", g.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!e, a = !!r
				}
				static setLogLevel(e) {
					const r = l[e.toLowerCase()];
					null != r ? c = r : g.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new g(e)
				}
			}
			g.errors = f, g.levels = d;
			const p = !1,
				b = new g("wordlists/5.4.0");
			class E {
				constructor(e) {
					b.checkAbstract(new.target, E), Object(n.defineReadOnly)(this, "locale", e)
				}
				split(e) {
					return e.toLowerCase().split(/ +/g)
				}
				join(e) {
					return e.join(" ")
				}
				static check(e) {
					const r = [];
					for (let t = 0; t < 2048; t++) {
						const o = e.getWord(t);
						if (t !== e.getWordIndex(o)) return "0x";
						r.push(o)
					}
					return Object(o.a)(r.join("\n") + "\n")
				}
				static register(e, r) {
					if (r || (r = e.locale), p) try {
						const t = window;
						t._ethers && t._ethers.wordlists && (t._ethers.wordlists[r] || Object(n.defineReadOnly)(t._ethers.wordlists, r, e))
					} catch (t) {}
				}
			}
		},
		"./node_modules/@ethersproject/wordlists/lib.esm/wordlists.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return se
			}));
			var o = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlist.js");
			const n = "AbdikaceAbecedaAdresaAgreseAkceAktovkaAlejAlkoholAmputaceAnanasAndulkaAnekdotaAnketaAntikaAnulovatArchaAroganceAsfaltAsistentAspiraceAstmaAstronomAtlasAtletikaAtolAutobusAzylBabkaBachorBacilBaculkaBadatelBagetaBagrBahnoBakterieBaladaBaletkaBalkonBalonekBalvanBalzaBambusBankomatBarbarBaretBarmanBarokoBarvaBaterkaBatohBavlnaBazalkaBazilikaBazukaBednaBeranBesedaBestieBetonBezinkaBezmocBeztakBicyklBidloBiftekBikinyBilanceBiografBiologBitvaBizonBlahobytBlatouchBlechaBleduleBleskBlikatBliznaBlokovatBlouditBludBobekBobrBodlinaBodnoutBohatostBojkotBojovatBokorysBolestBorecBoroviceBotaBoubelBouchatBoudaBouleBouratBoxerBradavkaBramboraBrankaBratrBreptaBriketaBrkoBrlohBronzBroskevBrunetkaBrusinkaBrzdaBrzyBublinaBubnovatBuchtaBuditelBudkaBudovaBufetBujarostBukviceBuldokBulvaBundaBunkrBurzaButikBuvolBuzolaBydletBylinaBytovkaBzukotCapartCarevnaCedrCeduleCejchCejnCelaCelerCelkemCelniceCeninaCennostCenovkaCentrumCenzorCestopisCetkaChalupaChapadloCharitaChataChechtatChemieChichotChirurgChladChlebaChlubitChmelChmuraChobotChocholChodbaCholeraChomoutChopitChorobaChovChrapotChrlitChrtChrupChtivostChudinaChutnatChvatChvilkaChvostChybaChystatChytitCibuleCigaretaCihelnaCihlaCinkotCirkusCisternaCitaceCitrusCizinecCizostClonaCokolivCouvatCtitelCtnostCudnostCuketaCukrCupotCvaknoutCvalCvikCvrkotCyklistaDalekoDarebaDatelDatumDceraDebataDechovkaDecibelDeficitDeflaceDeklDekretDemokratDepreseDerbyDeskaDetektivDikobrazDiktovatDiodaDiplomDiskDisplejDivadloDivochDlahaDlouhoDluhopisDnesDobroDobytekDocentDochutitDodnesDohledDohodaDohraDojemDojniceDokladDokolaDoktorDokumentDolarDolevaDolinaDomaDominantDomluvitDomovDonutitDopadDopisDoplnitDoposudDoprovodDopustitDorazitDorostDortDosahDoslovDostatekDosudDosytaDotazDotekDotknoutDoufatDoutnatDovozceDozaduDoznatDozorceDrahotaDrakDramatikDravecDrazeDrdolDrobnostDrogerieDrozdDrsnostDrtitDrzostDubenDuchovnoDudekDuhaDuhovkaDusitDusnoDutostDvojiceDvorecDynamitEkologEkonomieElektronElipsaEmailEmiseEmoceEmpatieEpizodaEpochaEpopejEposEsejEsenceEskortaEskymoEtiketaEuforieEvoluceExekuceExkurzeExpediceExplozeExportExtraktFackaFajfkaFakultaFanatikFantazieFarmacieFavoritFazoleFederaceFejetonFenkaFialkaFigurantFilozofFiltrFinanceFintaFixaceFjordFlanelFlirtFlotilaFondFosforFotbalFotkaFotonFrakceFreskaFrontaFukarFunkceFyzikaGalejeGarantGenetikaGeologGilotinaGlazuraGlejtGolemGolfistaGotikaGrafGramofonGranuleGrepGrilGrogGroteskaGumaHadiceHadrHalaHalenkaHanbaHanopisHarfaHarpunaHavranHebkostHejkalHejnoHejtmanHektarHelmaHematomHerecHernaHesloHezkyHistorikHladovkaHlasivkyHlavaHledatHlenHlodavecHlohHloupostHltatHlubinaHluchotaHmatHmotaHmyzHnisHnojivoHnoutHoblinaHobojHochHodinyHodlatHodnotaHodovatHojnostHokejHolinkaHolkaHolubHomoleHonitbaHonoraceHoralHordaHorizontHorkoHorlivecHormonHorninaHoroskopHorstvoHospodaHostinaHotovostHoubaHoufHoupatHouskaHovorHradbaHraniceHravostHrazdaHrbolekHrdinaHrdloHrdostHrnekHrobkaHromadaHrotHroudaHrozenHrstkaHrubostHryzatHubenostHubnoutHudbaHukotHumrHusitaHustotaHvozdHybnostHydrantHygienaHymnaHysterikIdylkaIhnedIkonaIluzeImunitaInfekceInflaceInkasoInovaceInspekceInternetInvalidaInvestorInzerceIronieJablkoJachtaJahodaJakmileJakostJalovecJantarJarmarkJaroJasanJasnoJatkaJavorJazykJedinecJedleJednatelJehlanJekotJelenJelitoJemnostJenomJepiceJeseterJevitJezdecJezeroJinakJindyJinochJiskraJistotaJitrniceJizvaJmenovatJogurtJurtaKabaretKabelKabinetKachnaKadetKadidloKahanKajakKajutaKakaoKaktusKalamitaKalhotyKalibrKalnostKameraKamkolivKamnaKanibalKanoeKantorKapalinaKapelaKapitolaKapkaKapleKapotaKaprKapustaKapybaraKaramelKarotkaKartonKasaKatalogKatedraKauceKauzaKavalecKazajkaKazetaKazivostKdekolivKdesiKedlubenKempKeramikaKinoKlacekKladivoKlamKlapotKlasikaKlaunKlecKlenbaKlepatKlesnoutKlidKlimaKlisnaKloboukKlokanKlopaKloubKlubovnaKlusatKluzkostKmenKmitatKmotrKnihaKnotKoaliceKoberecKobkaKoblihaKobylaKocourKohoutKojenecKokosKoktejlKolapsKoledaKolizeKoloKomandoKometaKomikKomnataKomoraKompasKomunitaKonatKonceptKondiceKonecKonfeseKongresKoninaKonkursKontaktKonzervaKopanecKopieKopnoutKoprovkaKorbelKorektorKormidloKoroptevKorpusKorunaKorytoKorzetKosatecKostkaKotelKotletaKotoulKoukatKoupelnaKousekKouzloKovbojKozaKozorohKrabiceKrachKrajinaKralovatKrasopisKravataKreditKrejcarKresbaKrevetaKriketKritikKrizeKrkavecKrmelecKrmivoKrocanKrokKronikaKropitKroupaKrovkaKrtekKruhadloKrupiceKrutostKrvinkaKrychleKryptaKrystalKrytKudlankaKufrKujnostKuklaKulajdaKulichKulkaKulometKulturaKunaKupodivuKurtKurzorKutilKvalitaKvasinkaKvestorKynologKyselinaKytaraKyticeKytkaKytovecKyvadloLabradorLachtanLadnostLaikLakomecLamelaLampaLanovkaLasiceLasoLasturaLatinkaLavinaLebkaLeckdyLedenLedniceLedovkaLedvinaLegendaLegieLegraceLehceLehkostLehnoutLektvarLenochodLentilkaLepenkaLepidloLetadloLetecLetmoLetokruhLevhartLevitaceLevobokLibraLichotkaLidojedLidskostLihovinaLijavecLilekLimetkaLinieLinkaLinoleumListopadLitinaLitovatLobistaLodivodLogikaLogopedLokalitaLoketLomcovatLopataLopuchLordLososLotrLoudalLouhLoukaLouskatLovecLstivostLucernaLuciferLumpLuskLustraceLviceLyraLyrikaLysinaMadamMadloMagistrMahagonMajetekMajitelMajoritaMakakMakoviceMakrelaMalbaMalinaMalovatMalviceMaminkaMandleMankoMarnostMasakrMaskotMasopustMaticeMatrikaMaturitaMazanecMazivoMazlitMazurkaMdlobaMechanikMeditaceMedovinaMelasaMelounMentolkaMetlaMetodaMetrMezeraMigraceMihnoutMihuleMikinaMikrofonMilenecMilimetrMilostMimikaMincovnaMinibarMinometMinulostMiskaMistrMixovatMladostMlhaMlhovinaMlokMlsatMluvitMnichMnohemMobilMocnostModelkaModlitbaMohylaMokroMolekulaMomentkaMonarchaMonoklMonstrumMontovatMonzunMosazMoskytMostMotivaceMotorkaMotykaMouchaMoudrostMozaikaMozekMozolMramorMravenecMrkevMrtvolaMrzetMrzutostMstitelMudrcMuflonMulatMumieMuniceMusetMutaceMuzeumMuzikantMyslivecMzdaNabouratNachytatNadaceNadbytekNadhozNadobroNadpisNahlasNahnatNahodileNahraditNaivitaNajednouNajistoNajmoutNaklonitNakonecNakrmitNalevoNamazatNamluvitNanometrNaokoNaopakNaostroNapadatNapevnoNaplnitNapnoutNaposledNaprostoNaroditNarubyNarychloNasaditNasekatNaslepoNastatNatolikNavenekNavrchNavzdoryNazvatNebeNechatNeckyNedalekoNedbatNeduhNegaceNehetNehodaNejenNejprveNeklidNelibostNemilostNemocNeochotaNeonkaNepokojNerostNervNesmyslNesouladNetvorNeuronNevinaNezvykleNicotaNijakNikamNikdyNiklNikterakNitroNoclehNohaviceNominaceNoraNorekNositelNosnostNouzeNovinyNovotaNozdraNudaNudleNugetNutitNutnostNutrieNymfaObalObarvitObavaObdivObecObehnatObejmoutObezitaObhajobaObilniceObjasnitObjektObklopitOblastOblekOblibaOblohaObludaObnosObohatitObojekOboutObrazecObrnaObrubaObrysObsahObsluhaObstaratObuvObvazObvinitObvodObvykleObyvatelObzorOcasOcelOcenitOchladitOchotaOchranaOcitnoutOdbojOdbytOdchodOdcizitOdebratOdeslatOdevzdatOdezvaOdhadceOdhoditOdjetOdjinudOdkazOdkoupitOdlivOdlukaOdmlkaOdolnostOdpadOdpisOdploutOdporOdpustitOdpykatOdrazkaOdsouditOdstupOdsunOdtokOdtudOdvahaOdvetaOdvolatOdvracetOdznakOfinaOfsajdOhlasOhniskoOhradaOhrozitOhryzekOkapOkeniceOklikaOknoOkouzlitOkovyOkrasaOkresOkrsekOkruhOkupantOkurkaOkusitOlejninaOlizovatOmakOmeletaOmezitOmladinaOmlouvatOmluvaOmylOnehdyOpakovatOpasekOperaceOpiceOpilostOpisovatOporaOpoziceOpravduOprotiOrbitalOrchestrOrgieOrliceOrlojOrtelOsadaOschnoutOsikaOsivoOslavaOslepitOslnitOslovitOsnovaOsobaOsolitOspalecOstenOstrahaOstudaOstychOsvojitOteplitOtiskOtopOtrhatOtrlostOtrokOtrubyOtvorOvanoutOvarOvesOvlivnitOvoceOxidOzdobaPachatelPacientPadouchPahorekPaktPalandaPalecPalivoPalubaPamfletPamlsekPanenkaPanikaPannaPanovatPanstvoPantoflePaprikaParketaParodiePartaParukaParybaPasekaPasivitaPastelkaPatentPatronaPavoukPaznehtPazourekPeckaPedagogPejsekPekloPelotonPenaltaPendrekPenzePeriskopPeroPestrostPetardaPeticePetrolejPevninaPexesoPianistaPihaPijavicePiklePiknikPilinaPilnostPilulkaPinzetaPipetaPisatelPistolePitevnaPivnicePivovarPlacentaPlakatPlamenPlanetaPlastikaPlatitPlavidloPlazPlechPlemenoPlentaPlesPletivoPlevelPlivatPlnitPlnoPlochaPlodinaPlombaPloutPlukPlynPobavitPobytPochodPocitPoctivecPodatPodcenitPodepsatPodhledPodivitPodkladPodmanitPodnikPodobaPodporaPodrazPodstataPodvodPodzimPoeziePohankaPohnutkaPohovorPohromaPohybPointaPojistkaPojmoutPokazitPoklesPokojPokrokPokutaPokynPolednePolibekPolknoutPolohaPolynomPomaluPominoutPomlkaPomocPomstaPomysletPonechatPonorkaPonurostPopadatPopelPopisekPoplachPoprositPopsatPopudPoradcePorcePorodPoruchaPoryvPosaditPosedPosilaPoskokPoslanecPosouditPospoluPostavaPosudekPosypPotahPotkanPotleskPotomekPotravaPotupaPotvoraPoukazPoutoPouzdroPovahaPovidlaPovlakPovozPovrchPovstatPovykPovzdechPozdravPozemekPoznatekPozorPozvatPracovatPrahoryPraktikaPralesPraotecPraporekPrasePravdaPrincipPrknoProbuditProcentoProdejProfeseProhraProjektProlomitPromilePronikatPropadProrokProsbaProtonProutekProvazPrskavkaPrstenPrudkostPrutPrvekPrvohoryPsanecPsovodPstruhPtactvoPubertaPuchPudlPukavecPuklinaPukrlePultPumpaPuncPupenPusaPusinkaPustinaPutovatPutykaPyramidaPyskPytelRacekRachotRadiaceRadniceRadonRaftRagbyRaketaRakovinaRamenoRampouchRandeRarachRaritaRasovnaRastrRatolestRazanceRazidloReagovatReakceReceptRedaktorReferentReflexRejnokReklamaRekordRekrutRektorReputaceRevizeRevmaRevolverRezervaRiskovatRizikoRobotikaRodokmenRohovkaRokleRokokoRomanetoRopovodRopuchaRorejsRosolRostlinaRotmistrRotopedRotundaRoubenkaRouchoRoupRouraRovinaRovniceRozborRozchodRozdatRozeznatRozhodceRozinkaRozjezdRozkazRozlohaRozmarRozpadRozruchRozsahRoztokRozumRozvodRubrikaRuchadloRukaviceRukopisRybaRybolovRychlostRydloRypadloRytinaRyzostSadistaSahatSakoSamecSamizdatSamotaSanitkaSardinkaSasankaSatelitSazbaSazeniceSborSchovatSebrankaSeceseSedadloSedimentSedloSehnatSejmoutSekeraSektaSekundaSekvojeSemenoSenoServisSesaditSeshoraSeskokSeslatSestraSesuvSesypatSetbaSetinaSetkatSetnoutSetrvatSeverSeznamShodaShrnoutSifonSilniceSirkaSirotekSirupSituaceSkafandrSkaliskoSkanzenSkautSkeptikSkicaSkladbaSkleniceSkloSkluzSkobaSkokanSkoroSkriptaSkrzSkupinaSkvostSkvrnaSlabikaSladidloSlaninaSlastSlavnostSledovatSlepecSlevaSlezinaSlibSlinaSlizniceSlonSloupekSlovoSluchSluhaSlunceSlupkaSlzaSmaragdSmetanaSmilstvoSmlouvaSmogSmradSmrkSmrtkaSmutekSmyslSnadSnahaSnobSobotaSochaSodovkaSokolSopkaSotvaSoubojSoucitSoudceSouhlasSouladSoumrakSoupravaSousedSoutokSouvisetSpalovnaSpasitelSpisSplavSpodekSpojenecSpoluSponzorSpornostSpoustaSprchaSpustitSrandaSrazSrdceSrnaSrnecSrovnatSrpenSrstSrubStaniceStarostaStatikaStavbaStehnoStezkaStodolaStolekStopaStornoStoupatStrachStresStrhnoutStromStrunaStudnaStupniceStvolStykSubjektSubtropySucharSudostSuknoSundatSunoutSurikataSurovinaSvahSvalstvoSvetrSvatbaSvazekSvisleSvitekSvobodaSvodidloSvorkaSvrabSykavkaSykotSynekSynovecSypatSypkostSyrovostSyselSytostTabletkaTabuleTahounTajemnoTajfunTajgaTajitTajnostTaktikaTamhleTamponTancovatTanecTankerTapetaTaveninaTazatelTechnikaTehdyTekutinaTelefonTemnotaTendenceTenistaTenorTeplotaTepnaTeprveTerapieTermoskaTextilTichoTiskopisTitulekTkadlecTkaninaTlapkaTleskatTlukotTlupaTmelToaletaTopinkaTopolTorzoTouhaToulecTradiceTraktorTrampTrasaTraverzaTrefitTrestTrezorTrhavinaTrhlinaTrochuTrojiceTroskaTroubaTrpceTrpitelTrpkostTrubecTruchlitTruhliceTrusTrvatTudyTuhnoutTuhostTundraTuristaTurnajTuzemskoTvarohTvorbaTvrdostTvrzTygrTykevUbohostUbozeUbratUbrousekUbrusUbytovnaUchoUctivostUdivitUhraditUjednatUjistitUjmoutUkazatelUklidnitUklonitUkotvitUkrojitUliceUlitaUlovitUmyvadloUnavitUniformaUniknoutUpadnoutUplatnitUplynoutUpoutatUpravitUranUrazitUsednoutUsilovatUsmrtitUsnadnitUsnoutUsouditUstlatUstrnoutUtahovatUtkatUtlumitUtonoutUtopenecUtrousitUvalitUvolnitUvozovkaUzdravitUzelUzeninaUzlinaUznatVagonValchaValounVanaVandalVanilkaVaranVarhanyVarovatVcelkuVchodVdovaVedroVegetaceVejceVelbloudVeletrhVelitelVelmocVelrybaVenkovVerandaVerzeVeselkaVeskrzeVesniceVespoduVestaVeterinaVeverkaVibraceVichrVideohraVidinaVidleVilaViniceVisetVitalitaVizeVizitkaVjezdVkladVkusVlajkaVlakVlasecVlevoVlhkostVlivVlnovkaVloupatVnucovatVnukVodaVodivostVodoznakVodstvoVojenskyVojnaVojskoVolantVolbaVolitVolnoVoskovkaVozidloVozovnaVpravoVrabecVracetVrahVrataVrbaVrcholekVrhatVrstvaVrtuleVsaditVstoupitVstupVtipVybavitVybratVychovatVydatVydraVyfotitVyhledatVyhnoutVyhoditVyhraditVyhubitVyjasnitVyjetVyjmoutVyklopitVykonatVylekatVymazatVymezitVymizetVymysletVynechatVynikatVynutitVypadatVyplatitVypravitVypustitVyrazitVyrovnatVyrvatVyslovitVysokoVystavitVysunoutVysypatVytasitVytesatVytratitVyvinoutVyvolatVyvrhelVyzdobitVyznatVzaduVzbuditVzchopitVzdorVzduchVzdychatVzestupVzhledemVzkazVzlykatVznikVzorekVzpouraVztahVztekXylofonZabratZabydletZachovatZadarmoZadusitZafoukatZahltitZahoditZahradaZahynoutZajatecZajetZajistitZaklepatZakoupitZalepitZamezitZamotatZamysletZanechatZanikatZaplatitZapojitZapsatZarazitZastavitZasunoutZatajitZatemnitZatknoutZaujmoutZavalitZaveletZavinitZavolatZavrtatZazvonitZbavitZbrusuZbudovatZbytekZdalekaZdarmaZdatnostZdivoZdobitZdrojZdvihZdymadloZeleninaZemanZeminaZeptatZezaduZezdolaZhatitZhltnoutZhlubokaZhotovitZhrubaZimaZimniceZjemnitZklamatZkoumatZkratkaZkumavkaZlatoZlehkaZlobaZlomZlostZlozvykZmapovatZmarZmatekZmijeZmizetZmocnitZmodratZmrzlinaZmutovatZnakZnalostZnamenatZnovuZobrazitZotavitZoubekZoufaleZploditZpomalitZpravaZprostitZprudkaZprvuZradaZranitZrcadloZrnitostZrnoZrovnaZrychlitZrzavostZtichaZtratitZubovinaZubrZvednoutZvenkuZveselaZvonZvratZvukovodZvyk";
			let i = null;

			function a(e) {
				if (null == i && (i = n.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x25f44555f4af25b51a711136e1c7d6e50ce9f8917d39d6b1f076b2bb4d2fac1a" !== o.a.check(e))) throw i = null, new Error("BIP39 Wordlist for en (English) FAILED")
			}
			class s extends o.a {
				constructor() {
					super("cz")
				}
				getWord(e) {
					return a(this), i[e]
				}
				getWordIndex(e) {
					return a(this), i.indexOf(e)
				}
			}
			const l = new s;
			o.a.register(l);
			const c = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
			let u = null;

			function h(e) {
				if (null == u && (u = c.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== o.a.check(e))) throw u = null, new Error("BIP39 Wordlist for en (English) FAILED")
			}
			class d extends o.a {
				constructor() {
					super("en")
				}
				getWord(e) {
					return h(this), u[e]
				}
				getWordIndex(e) {
					return h(this), u.indexOf(e)
				}
			}
			const f = new d;
			o.a.register(f);
			var m = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
			const g = "A/bacoAbdomenAbejaAbiertoAbogadoAbonoAbortoAbrazoAbrirAbueloAbusoAcabarAcademiaAccesoAccio/nAceiteAcelgaAcentoAceptarA/cidoAclararAcne/AcogerAcosoActivoActoActrizActuarAcudirAcuerdoAcusarAdictoAdmitirAdoptarAdornoAduanaAdultoAe/reoAfectarAficio/nAfinarAfirmarA/gilAgitarAgoni/aAgostoAgotarAgregarAgrioAguaAgudoA/guilaAgujaAhogoAhorroAireAislarAjedrezAjenoAjusteAlacra/nAlambreAlarmaAlbaA/lbumAlcaldeAldeaAlegreAlejarAlertaAletaAlfilerAlgaAlgodo/nAliadoAlientoAlivioAlmaAlmejaAlmi/barAltarAltezaAltivoAltoAlturaAlumnoAlzarAmableAmanteAmapolaAmargoAmasarA/mbarA/mbitoAmenoAmigoAmistadAmorAmparoAmplioAnchoAncianoAnclaAndarAnde/nAnemiaA/nguloAnilloA/nimoAni/sAnotarAntenaAntiguoAntojoAnualAnularAnuncioA~adirA~ejoA~oApagarAparatoApetitoApioAplicarApodoAporteApoyoAprenderAprobarApuestaApuroAradoAra~aArarA/rbitroA/rbolArbustoArchivoArcoArderArdillaArduoA/reaA/ridoAriesArmoni/aArne/sAromaArpaArpo/nArregloArrozArrugaArteArtistaAsaAsadoAsaltoAscensoAsegurarAseoAsesorAsientoAsiloAsistirAsnoAsombroA/speroAstillaAstroAstutoAsumirAsuntoAtajoAtaqueAtarAtentoAteoA/ticoAtletaA/tomoAtraerAtrozAtu/nAudazAudioAugeAulaAumentoAusenteAutorAvalAvanceAvaroAveAvellanaAvenaAvestruzAvio/nAvisoAyerAyudaAyunoAzafra/nAzarAzoteAzu/carAzufreAzulBabaBaborBacheBahi/aBaileBajarBalanzaBalco/nBaldeBambu/BancoBandaBa~oBarbaBarcoBarnizBarroBa/sculaBasto/nBasuraBatallaBateri/aBatirBatutaBau/lBazarBebe/BebidaBelloBesarBesoBestiaBichoBienBingoBlancoBloqueBlusaBoaBobinaBoboBocaBocinaBodaBodegaBoinaBolaBoleroBolsaBombaBondadBonitoBonoBonsa/iBordeBorrarBosqueBoteBoti/nBo/vedaBozalBravoBrazoBrechaBreveBrilloBrincoBrisaBrocaBromaBronceBroteBrujaBruscoBrutoBuceoBucleBuenoBueyBufandaBufo/nBu/hoBuitreBultoBurbujaBurlaBurroBuscarButacaBuzo/nCaballoCabezaCabinaCabraCacaoCada/verCadenaCaerCafe/Cai/daCaima/nCajaCajo/nCalCalamarCalcioCaldoCalidadCalleCalmaCalorCalvoCamaCambioCamelloCaminoCampoCa/ncerCandilCanelaCanguroCanicaCantoCa~aCa~o/nCaobaCaosCapazCapita/nCapoteCaptarCapuchaCaraCarbo/nCa/rcelCaretaCargaCari~oCarneCarpetaCarroCartaCasaCascoCaseroCaspaCastorCatorceCatreCaudalCausaCazoCebollaCederCedroCeldaCe/lebreCelosoCe/lulaCementoCenizaCentroCercaCerdoCerezaCeroCerrarCertezaCe/spedCetroChacalChalecoChampu/ChanclaChapaCharlaChicoChisteChivoChoqueChozaChuletaChuparCiclo/nCiegoCieloCienCiertoCifraCigarroCimaCincoCineCintaCipre/sCircoCiruelaCisneCitaCiudadClamorClanClaroClaseClaveClienteClimaCli/nicaCobreCoccio/nCochinoCocinaCocoCo/digoCodoCofreCogerCoheteCoji/nCojoColaColchaColegioColgarColinaCollarColmoColumnaCombateComerComidaCo/modoCompraCondeConejoCongaConocerConsejoContarCopaCopiaCorazo/nCorbataCorchoCordo/nCoronaCorrerCoserCosmosCostaCra/neoCra/terCrearCrecerCrei/doCremaCri/aCrimenCriptaCrisisCromoCro/nicaCroquetaCrudoCruzCuadroCuartoCuatroCuboCubrirCucharaCuelloCuentoCuerdaCuestaCuevaCuidarCulebraCulpaCultoCumbreCumplirCunaCunetaCuotaCupo/nCu/pulaCurarCuriosoCursoCurvaCutisDamaDanzaDarDardoDa/tilDeberDe/bilDe/cadaDecirDedoDefensaDefinirDejarDelfi/nDelgadoDelitoDemoraDensoDentalDeporteDerechoDerrotaDesayunoDeseoDesfileDesnudoDestinoDesvi/oDetalleDetenerDeudaDi/aDiabloDiademaDiamanteDianaDiarioDibujoDictarDienteDietaDiezDifi/cilDignoDilemaDiluirDineroDirectoDirigirDiscoDise~oDisfrazDivaDivinoDobleDoceDolorDomingoDonDonarDoradoDormirDorsoDosDosisDrago/nDrogaDuchaDudaDueloDue~oDulceDu/oDuqueDurarDurezaDuroE/banoEbrioEcharEcoEcuadorEdadEdicio/nEdificioEditorEducarEfectoEficazEjeEjemploElefanteElegirElementoElevarElipseE/liteElixirElogioEludirEmbudoEmitirEmocio/nEmpateEmpe~oEmpleoEmpresaEnanoEncargoEnchufeEnci/aEnemigoEneroEnfadoEnfermoEnga~oEnigmaEnlaceEnormeEnredoEnsayoEnse~arEnteroEntrarEnvaseEnvi/oE/pocaEquipoErizoEscalaEscenaEscolarEscribirEscudoEsenciaEsferaEsfuerzoEspadaEspejoEspi/aEsposaEspumaEsqui/EstarEsteEstiloEstufaEtapaEternoE/ticaEtniaEvadirEvaluarEventoEvitarExactoExamenExcesoExcusaExentoExigirExilioExistirE/xitoExpertoExplicarExponerExtremoFa/bricaFa/bulaFachadaFa/cilFactorFaenaFajaFaldaFalloFalsoFaltarFamaFamiliaFamosoFarao/nFarmaciaFarolFarsaFaseFatigaFaunaFavorFaxFebreroFechaFelizFeoFeriaFerozFe/rtilFervorFesti/nFiableFianzaFiarFibraFiccio/nFichaFideoFiebreFielFieraFiestaFiguraFijarFijoFilaFileteFilialFiltroFinFincaFingirFinitoFirmaFlacoFlautaFlechaFlorFlotaFluirFlujoFlu/orFobiaFocaFogataFogo/nFolioFolletoFondoFormaForroFortunaForzarFosaFotoFracasoFra/gilFranjaFraseFraudeFrei/rFrenoFresaFri/oFritoFrutaFuegoFuenteFuerzaFugaFumarFuncio/nFundaFurgo/nFuriaFusilFu/tbolFuturoGacelaGafasGaitaGajoGalaGaleri/aGalloGambaGanarGanchoGangaGansoGarajeGarzaGasolinaGastarGatoGavila/nGemeloGemirGenGe/neroGenioGenteGeranioGerenteGermenGestoGiganteGimnasioGirarGiroGlaciarGloboGloriaGolGolfoGolosoGolpeGomaGordoGorilaGorraGotaGoteoGozarGradaGra/ficoGranoGrasaGratisGraveGrietaGrilloGripeGrisGritoGrosorGru/aGruesoGrumoGrupoGuanteGuapoGuardiaGuerraGui/aGui~oGuionGuisoGuitarraGusanoGustarHaberHa/bilHablarHacerHachaHadaHallarHamacaHarinaHazHaza~aHebillaHebraHechoHeladoHelioHembraHerirHermanoHe/roeHervirHieloHierroHi/gadoHigieneHijoHimnoHistoriaHocicoHogarHogueraHojaHombreHongoHonorHonraHoraHormigaHornoHostilHoyoHuecoHuelgaHuertaHuesoHuevoHuidaHuirHumanoHu/medoHumildeHumoHundirHuraca/nHurtoIconoIdealIdiomaI/doloIglesiaIglu/IgualIlegalIlusio/nImagenIma/nImitarImparImperioImponerImpulsoIncapazI/ndiceInerteInfielInformeIngenioInicioInmensoInmuneInnatoInsectoInstanteIntere/sI/ntimoIntuirInu/tilInviernoIraIrisIroni/aIslaIsloteJabali/Jabo/nJamo/nJarabeJardi/nJarraJaulaJazmi/nJefeJeringaJineteJornadaJorobaJovenJoyaJuergaJuevesJuezJugadorJugoJugueteJuicioJuncoJunglaJunioJuntarJu/piterJurarJustoJuvenilJuzgarKiloKoalaLabioLacioLacraLadoLadro/nLagartoLa/grimaLagunaLaicoLamerLa/minaLa/mparaLanaLanchaLangostaLanzaLa/pizLargoLarvaLa/stimaLataLa/texLatirLaurelLavarLazoLealLeccio/nLecheLectorLeerLegio/nLegumbreLejanoLenguaLentoLe~aLeo/nLeopardoLesio/nLetalLetraLeveLeyendaLibertadLibroLicorLi/derLidiarLienzoLigaLigeroLimaLi/miteLimo/nLimpioLinceLindoLi/neaLingoteLinoLinternaLi/quidoLisoListaLiteraLitioLitroLlagaLlamaLlantoLlaveLlegarLlenarLlevarLlorarLloverLluviaLoboLocio/nLocoLocuraLo/gicaLogroLombrizLomoLonjaLoteLuchaLucirLugarLujoLunaLunesLupaLustroLutoLuzMacetaMachoMaderaMadreMaduroMaestroMafiaMagiaMagoMai/zMaldadMaletaMallaMaloMama/MamboMamutMancoMandoManejarMangaManiqui/ManjarManoMansoMantaMa~anaMapaMa/quinaMarMarcoMareaMarfilMargenMaridoMa/rmolMarro/nMartesMarzoMasaMa/scaraMasivoMatarMateriaMatizMatrizMa/ximoMayorMazorcaMechaMedallaMedioMe/dulaMejillaMejorMelenaMelo/nMemoriaMenorMensajeMenteMenu/MercadoMerengueMe/ritoMesMeso/nMetaMeterMe/todoMetroMezclaMiedoMielMiembroMigaMilMilagroMilitarMillo/nMimoMinaMineroMi/nimoMinutoMiopeMirarMisaMiseriaMisilMismoMitadMitoMochilaMocio/nModaModeloMohoMojarMoldeMolerMolinoMomentoMomiaMonarcaMonedaMonjaMontoMo~oMoradaMorderMorenoMorirMorroMorsaMortalMoscaMostrarMotivoMoverMo/vilMozoMuchoMudarMuebleMuelaMuerteMuestraMugreMujerMulaMuletaMultaMundoMu~ecaMuralMuroMu/sculoMuseoMusgoMu/sicaMusloNa/carNacio/nNadarNaipeNaranjaNarizNarrarNasalNatalNativoNaturalNa/useaNavalNaveNavidadNecioNe/ctarNegarNegocioNegroNeo/nNervioNetoNeutroNevarNeveraNichoNidoNieblaNietoNi~ezNi~oNi/tidoNivelNoblezaNocheNo/minaNoriaNormaNorteNotaNoticiaNovatoNovelaNovioNubeNucaNu/cleoNudilloNudoNueraNueveNuezNuloNu/meroNutriaOasisObesoObispoObjetoObraObreroObservarObtenerObvioOcaOcasoOce/anoOchentaOchoOcioOcreOctavoOctubreOcultoOcuparOcurrirOdiarOdioOdiseaOesteOfensaOfertaOficioOfrecerOgroOi/doOi/rOjoOlaOleadaOlfatoOlivoOllaOlmoOlorOlvidoOmbligoOndaOnzaOpacoOpcio/nO/peraOpinarOponerOptarO/pticaOpuestoOracio/nOradorOralO/rbitaOrcaOrdenOrejaO/rganoOrgi/aOrgulloOrienteOrigenOrillaOroOrquestaOrugaOsadi/aOscuroOseznoOsoOstraOto~oOtroOvejaO/vuloO/xidoOxi/genoOyenteOzonoPactoPadrePaellaPa/ginaPagoPai/sPa/jaroPalabraPalcoPaletaPa/lidoPalmaPalomaPalparPanPanalPa/nicoPanteraPa~ueloPapa/PapelPapillaPaquetePararParcelaParedParirParoPa/rpadoParquePa/rrafoPartePasarPaseoPasio/nPasoPastaPataPatioPatriaPausaPautaPavoPayasoPeato/nPecadoPeceraPechoPedalPedirPegarPeinePelarPelda~oPeleaPeligroPellejoPeloPelucaPenaPensarPe~o/nPeo/nPeorPepinoPeque~oPeraPerchaPerderPerezaPerfilPericoPerlaPermisoPerroPersonaPesaPescaPe/simoPesta~aPe/taloPetro/leoPezPezu~aPicarPicho/nPiePiedraPiernaPiezaPijamaPilarPilotoPimientaPinoPintorPinzaPi~aPiojoPipaPirataPisarPiscinaPisoPistaPito/nPizcaPlacaPlanPlataPlayaPlazaPleitoPlenoPlomoPlumaPluralPobrePocoPoderPodioPoemaPoesi/aPoetaPolenPolici/aPolloPolvoPomadaPomeloPomoPompaPonerPorcio/nPortalPosadaPoseerPosiblePostePotenciaPotroPozoPradoPrecozPreguntaPremioPrensaPresoPrevioPrimoPri/ncipePrisio/nPrivarProaProbarProcesoProductoProezaProfesorProgramaProlePromesaProntoPropioPro/ximoPruebaPu/blicoPucheroPudorPuebloPuertaPuestoPulgaPulirPulmo/nPulpoPulsoPumaPuntoPu~alPu~oPupaPupilaPure/QuedarQuejaQuemarQuererQuesoQuietoQui/micaQuinceQuitarRa/banoRabiaRaboRacio/nRadicalRai/zRamaRampaRanchoRangoRapazRa/pidoRaptoRasgoRaspaRatoRayoRazaRazo/nReaccio/nRealidadReba~oReboteRecaerRecetaRechazoRecogerRecreoRectoRecursoRedRedondoReducirReflejoReformaRefra/nRefugioRegaloRegirReglaRegresoRehe/nReinoRei/rRejaRelatoRelevoRelieveRellenoRelojRemarRemedioRemoRencorRendirRentaRepartoRepetirReposoReptilResRescateResinaRespetoRestoResumenRetiroRetornoRetratoReunirReve/sRevistaReyRezarRicoRiegoRiendaRiesgoRifaRi/gidoRigorRinco/nRi~o/nRi/oRiquezaRisaRitmoRitoRizoRobleRoceRociarRodarRodeoRodillaRoerRojizoRojoRomeroRomperRonRoncoRondaRopaRoperoRosaRoscaRostroRotarRubi/RuborRudoRuedaRugirRuidoRuinaRuletaRuloRumboRumorRupturaRutaRutinaSa/badoSaberSabioSableSacarSagazSagradoSalaSaldoSaleroSalirSalmo/nSalo/nSalsaSaltoSaludSalvarSambaSancio/nSandi/aSanearSangreSanidadSanoSantoSapoSaqueSardinaSarte/nSastreSata/nSaunaSaxofo/nSeccio/nSecoSecretoSectaSedSeguirSeisSelloSelvaSemanaSemillaSendaSensorSe~alSe~orSepararSepiaSequi/aSerSerieSermo/nServirSesentaSesio/nSetaSetentaSeveroSexoSextoSidraSiestaSieteSigloSignoSi/labaSilbarSilencioSillaSi/mboloSimioSirenaSistemaSitioSituarSobreSocioSodioSolSolapaSoldadoSoledadSo/lidoSoltarSolucio/nSombraSondeoSonidoSonoroSonrisaSopaSoplarSoporteSordoSorpresaSorteoSoste/nSo/tanoSuaveSubirSucesoSudorSuegraSueloSue~oSuerteSufrirSujetoSulta/nSumarSuperarSuplirSuponerSupremoSurSurcoSure~oSurgirSustoSutilTabacoTabiqueTablaTabu/TacoTactoTajoTalarTalcoTalentoTallaTalo/nTama~oTamborTangoTanqueTapaTapeteTapiaTapo/nTaquillaTardeTareaTarifaTarjetaTarotTarroTartaTatuajeTauroTazaTazo/nTeatroTechoTeclaTe/cnicaTejadoTejerTejidoTelaTele/fonoTemaTemorTemploTenazTenderTenerTenisTensoTeori/aTerapiaTercoTe/rminoTernuraTerrorTesisTesoroTestigoTeteraTextoTezTibioTiburo/nTiempoTiendaTierraTiesoTigreTijeraTildeTimbreTi/midoTimoTintaTi/oTi/picoTipoTiraTiro/nTita/nTi/tereTi/tuloTizaToallaTobilloTocarTocinoTodoTogaToldoTomarTonoTontoToparTopeToqueTo/raxToreroTormentaTorneoToroTorpedoTorreTorsoTortugaTosToscoToserTo/xicoTrabajoTractorTraerTra/ficoTragoTrajeTramoTranceTratoTraumaTrazarTre/bolTreguaTreintaTrenTreparTresTribuTrigoTripaTristeTriunfoTrofeoTrompaTroncoTropaTroteTrozoTrucoTruenoTrufaTuberi/aTuboTuertoTumbaTumorTu/nelTu/nicaTurbinaTurismoTurnoTutorUbicarU/lceraUmbralUnidadUnirUniversoUnoUntarU~aUrbanoUrbeUrgenteUrnaUsarUsuarioU/tilUtopi/aUvaVacaVaci/oVacunaVagarVagoVainaVajillaValeVa/lidoValleValorVa/lvulaVampiroVaraVariarVaro/nVasoVecinoVectorVehi/culoVeinteVejezVelaVeleroVelozVenaVencerVendaVenenoVengarVenirVentaVenusVerVeranoVerboVerdeVeredaVerjaVersoVerterVi/aViajeVibrarVicioVi/ctimaVidaVi/deoVidrioViejoViernesVigorVilVillaVinagreVinoVi~edoVioli/nViralVirgoVirtudVisorVi/speraVistaVitaminaViudoVivazViveroVivirVivoVolca/nVolumenVolverVorazVotarVotoVozVueloVulgarYacerYateYeguaYemaYernoYesoYodoYogaYogurZafiroZanjaZapatoZarzaZonaZorroZumoZurdo",
				p = {};
			let b = null;

			function E(e) {
				return o.b.checkNormalize(), Object(m.h)(Array.prototype.filter.call(Object(m.f)(e.normalize("NFD").toLowerCase()), e => e >= 65 && e <= 90 || e >= 97 && e <= 123))
			}

			function v(e) {
				if (null == b && ((b = g.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" ").map(e => (function(e) {
						const r = [];
						return Array.prototype.forEach.call(Object(m.f)(e), e => {
							47 === e ? (r.push(204), r.push(129)) : 126 === e ? (r.push(110), r.push(204), r.push(131)) : r.push(e)
						}), Object(m.h)(r)
					})(e))).forEach((e, r) => {
						p[E(e)] = r
					}), "0xf74fb7092aeacdfbf8959557de22098da512207fb9f109cb526994938cf40300" !== o.a.check(e))) throw b = null, new Error("BIP39 Wordlist for es (Spanish) FAILED")
			}
			class N extends o.a {
				constructor() {
					super("es")
				}
				getWord(e) {
					return v(this), b[e]
				}
				getWordIndex(e) {
					return v(this), p[E(e)]
				}
			}
			const y = new N;
			o.a.register(y);
			const O = "AbaisserAbandonAbdiquerAbeilleAbolirAborderAboutirAboyerAbrasifAbreuverAbriterAbrogerAbruptAbsenceAbsoluAbsurdeAbusifAbyssalAcade/mieAcajouAcarienAccablerAccepterAcclamerAccoladeAccrocheAccuserAcerbeAchatAcheterAcidulerAcierAcompteAcque/rirAcronymeActeurActifActuelAdepteAde/quatAdhe/sifAdjectifAdjugerAdmettreAdmirerAdopterAdorerAdoucirAdresseAdroitAdulteAdverbeAe/rerAe/ronefAffaireAffecterAfficheAffreuxAffublerAgacerAgencerAgileAgiterAgraferAgre/ableAgrumeAiderAiguilleAilierAimableAisanceAjouterAjusterAlarmerAlchimieAlerteAlge-breAlgueAlie/nerAlimentAlle/gerAlliageAllouerAllumerAlourdirAlpagaAltesseAlve/oleAmateurAmbiguAmbreAme/nagerAmertumeAmidonAmiralAmorcerAmourAmovibleAmphibieAmpleurAmusantAnalyseAnaphoreAnarchieAnatomieAncienAne/antirAngleAngoisseAnguleuxAnimalAnnexerAnnonceAnnuelAnodinAnomalieAnonymeAnormalAntenneAntidoteAnxieuxApaiserApe/ritifAplanirApologieAppareilAppelerApporterAppuyerAquariumAqueducArbitreArbusteArdeurArdoiseArgentArlequinArmatureArmementArmoireArmureArpenterArracherArriverArroserArsenicArte/rielArticleAspectAsphalteAspirerAssautAsservirAssietteAssocierAssurerAsticotAstreAstuceAtelierAtomeAtriumAtroceAttaqueAttentifAttirerAttraperAubaineAubergeAudaceAudibleAugurerAuroreAutomneAutrucheAvalerAvancerAvariceAvenirAverseAveugleAviateurAvideAvionAviserAvoineAvouerAvrilAxialAxiomeBadgeBafouerBagageBaguetteBaignadeBalancerBalconBaleineBalisageBambinBancaireBandageBanlieueBannie-reBanquierBarbierBarilBaronBarqueBarrageBassinBastionBatailleBateauBatterieBaudrierBavarderBeletteBe/lierBeloteBe/ne/ficeBerceauBergerBerlineBermudaBesaceBesogneBe/tailBeurreBiberonBicycleBiduleBijouBilanBilingueBillardBinaireBiologieBiopsieBiotypeBiscuitBisonBistouriBitumeBizarreBlafardBlagueBlanchirBlessantBlinderBlondBloquerBlousonBobardBobineBoireBoiserBolideBonbonBondirBonheurBonifierBonusBordureBorneBotteBoucleBoueuxBougieBoulonBouquinBourseBoussoleBoutiqueBoxeurBrancheBrasierBraveBrebisBre-cheBreuvageBricolerBrigadeBrillantBriocheBriqueBrochureBroderBronzerBrousseBroyeurBrumeBrusqueBrutalBruyantBuffleBuissonBulletinBureauBurinBustierButinerButoirBuvableBuvetteCabanonCabineCachetteCadeauCadreCafe/ineCaillouCaissonCalculerCalepinCalibreCalmerCalomnieCalvaireCamaradeCame/raCamionCampagneCanalCanetonCanonCantineCanularCapableCaporalCapriceCapsuleCapterCapucheCarabineCarboneCaresserCaribouCarnageCarotteCarreauCartonCascadeCasierCasqueCassureCauserCautionCavalierCaverneCaviarCe/dilleCeintureCe/lesteCelluleCendrierCensurerCentralCercleCe/re/bralCeriseCernerCerveauCesserChagrinChaiseChaleurChambreChanceChapitreCharbonChasseurChatonChaussonChavirerChemiseChenilleChe/quierChercherChevalChienChiffreChignonChime-reChiotChlorureChocolatChoisirChoseChouetteChromeChuteCigareCigogneCimenterCine/maCintrerCirculerCirerCirqueCiterneCitoyenCitronCivilClaironClameurClaquerClasseClavierClientClignerClimatClivageClocheClonageCloporteCobaltCobraCocasseCocotierCoderCodifierCoffreCognerCohe/sionCoifferCoincerCole-reColibriCollineColmaterColonelCombatCome/dieCommandeCompactConcertConduireConfierCongelerConnoterConsonneContactConvexeCopainCopieCorailCorbeauCordageCornicheCorpusCorrectCorte-geCosmiqueCostumeCotonCoudeCoupureCourageCouteauCouvrirCoyoteCrabeCrainteCravateCrayonCre/atureCre/diterCre/meuxCreuserCrevetteCriblerCrierCristalCrite-reCroireCroquerCrotaleCrucialCruelCrypterCubiqueCueillirCuille-reCuisineCuivreCulminerCultiverCumulerCupideCuratifCurseurCyanureCycleCylindreCyniqueDaignerDamierDangerDanseurDauphinDe/battreDe/biterDe/borderDe/briderDe/butantDe/calerDe/cembreDe/chirerDe/ciderDe/clarerDe/corerDe/crireDe/cuplerDe/daleDe/ductifDe/esseDe/fensifDe/filerDe/frayerDe/gagerDe/givrerDe/glutirDe/graferDe/jeunerDe/liceDe/logerDemanderDemeurerDe/molirDe/nicherDe/nouerDentelleDe/nuderDe/partDe/penserDe/phaserDe/placerDe/poserDe/rangerDe/roberDe/sastreDescenteDe/sertDe/signerDe/sobe/irDessinerDestrierDe/tacherDe/testerDe/tourerDe/tresseDevancerDevenirDevinerDevoirDiableDialogueDiamantDicterDiffe/rerDige/rerDigitalDigneDiluerDimancheDiminuerDioxydeDirectifDirigerDiscuterDisposerDissiperDistanceDivertirDiviserDocileDocteurDogmeDoigtDomaineDomicileDompterDonateurDonjonDonnerDopamineDortoirDorureDosageDoseurDossierDotationDouanierDoubleDouceurDouterDoyenDragonDraperDresserDribblerDroitureDuperieDuplexeDurableDurcirDynastieE/blouirE/carterE/charpeE/chelleE/clairerE/clipseE/cloreE/cluseE/coleE/conomieE/corceE/couterE/craserE/cre/merE/crivainE/crouE/cumeE/cureuilE/difierE/duquerEffacerEffectifEffigieEffortEffrayerEffusionE/galiserE/garerE/jecterE/laborerE/largirE/lectronE/le/gantE/le/phantE/le-veE/ligibleE/litismeE/logeE/luciderE/luderEmballerEmbellirEmbryonE/meraudeE/missionEmmenerE/motionE/mouvoirEmpereurEmployerEmporterEmpriseE/mulsionEncadrerEnche-reEnclaveEncocheEndiguerEndosserEndroitEnduireE/nergieEnfanceEnfermerEnfouirEngagerEnginEngloberE/nigmeEnjamberEnjeuEnleverEnnemiEnnuyeuxEnrichirEnrobageEnseigneEntasserEntendreEntierEntourerEntraverE/nume/rerEnvahirEnviableEnvoyerEnzymeE/olienE/paissirE/pargneE/patantE/pauleE/picerieE/pide/mieE/pierE/pilogueE/pineE/pisodeE/pitapheE/poqueE/preuveE/prouverE/puisantE/querreE/quipeE/rigerE/rosionErreurE/ruptionEscalierEspadonEspe-ceEspie-gleEspoirEspritEsquiverEssayerEssenceEssieuEssorerEstimeEstomacEstradeE/tage-reE/talerE/tancheE/tatiqueE/teindreE/tendoirE/ternelE/thanolE/thiqueEthnieE/tirerE/tofferE/toileE/tonnantE/tourdirE/trangeE/troitE/tudeEuphorieE/valuerE/vasionE/ventailE/videnceE/viterE/volutifE/voquerExactExage/rerExaucerExcellerExcitantExclusifExcuseExe/cuterExempleExercerExhalerExhorterExigenceExilerExisterExotiqueExpe/dierExplorerExposerExprimerExquisExtensifExtraireExulterFableFabuleuxFacetteFacileFactureFaiblirFalaiseFameuxFamilleFarceurFarfeluFarineFaroucheFascinerFatalFatigueFauconFautifFaveurFavoriFe/brileFe/conderFe/de/rerFe/linFemmeFe/murFendoirFe/odalFermerFe/roceFerveurFestivalFeuilleFeutreFe/vrierFiascoFicelerFictifFide-leFigureFilatureFiletageFilie-reFilleulFilmerFilouFiltrerFinancerFinirFioleFirmeFissureFixerFlairerFlammeFlasqueFlatteurFle/auFle-cheFleurFlexionFloconFloreFluctuerFluideFluvialFolieFonderieFongibleFontaineForcerForgeronFormulerFortuneFossileFoudreFouge-reFouillerFoulureFourmiFragileFraiseFranchirFrapperFrayeurFre/gateFreinerFrelonFre/mirFre/ne/sieFre-reFriableFrictionFrissonFrivoleFroidFromageFrontalFrotterFruitFugitifFuiteFureurFurieuxFurtifFusionFuturGagnerGalaxieGalerieGambaderGarantirGardienGarnirGarrigueGazelleGazonGe/antGe/latineGe/luleGendarmeGe/ne/ralGe/nieGenouGentilGe/ologieGe/ome-treGe/raniumGermeGestuelGeyserGibierGiclerGirafeGivreGlaceGlaiveGlisserGlobeGloireGlorieuxGolfeurGommeGonflerGorgeGorilleGoudronGouffreGoulotGoupilleGourmandGoutteGraduelGraffitiGraineGrandGrappinGratuitGravirGrenatGriffureGrillerGrimperGrognerGronderGrotteGroupeGrugerGrutierGruye-reGue/pardGuerrierGuideGuimauveGuitareGustatifGymnasteGyrostatHabitudeHachoirHalteHameauHangarHannetonHaricotHarmonieHarponHasardHe/liumHe/matomeHerbeHe/rissonHermineHe/ronHe/siterHeureuxHibernerHibouHilarantHistoireHiverHomardHommageHomoge-neHonneurHonorerHonteuxHordeHorizonHorlogeHormoneHorribleHouleuxHousseHublotHuileuxHumainHumbleHumideHumourHurlerHydromelHygie-neHymneHypnoseIdylleIgnorerIguaneIlliciteIllusionImageImbiberImiterImmenseImmobileImmuableImpactImpe/rialImplorerImposerImprimerImputerIncarnerIncendieIncidentInclinerIncoloreIndexerIndiceInductifIne/ditIneptieInexactInfiniInfligerInformerInfusionInge/rerInhalerInhiberInjecterInjureInnocentInoculerInonderInscrireInsecteInsigneInsoliteInspirerInstinctInsulterIntactIntenseIntimeIntrigueIntuitifInutileInvasionInventerInviterInvoquerIroniqueIrradierIrre/elIrriterIsolerIvoireIvresseJaguarJaillirJambeJanvierJardinJaugerJauneJavelotJetableJetonJeudiJeunesseJoindreJoncherJonglerJoueurJouissifJournalJovialJoyauJoyeuxJubilerJugementJuniorJuponJuristeJusticeJuteuxJuve/nileKayakKimonoKiosqueLabelLabialLabourerLace/rerLactoseLaguneLaineLaisserLaitierLambeauLamelleLampeLanceurLangageLanterneLapinLargeurLarmeLaurierLavaboLavoirLectureLe/galLe/gerLe/gumeLessiveLettreLevierLexiqueLe/zardLiasseLibe/rerLibreLicenceLicorneLie-geLie-vreLigatureLigoterLigueLimerLimiteLimonadeLimpideLine/aireLingotLionceauLiquideLisie-reListerLithiumLitigeLittoralLivreurLogiqueLointainLoisirLombricLoterieLouerLourdLoutreLouveLoyalLubieLucideLucratifLueurLugubreLuisantLumie-reLunaireLundiLuronLutterLuxueuxMachineMagasinMagentaMagiqueMaigreMaillonMaintienMairieMaisonMajorerMalaxerMale/ficeMalheurMaliceMalletteMammouthMandaterManiableManquantManteauManuelMarathonMarbreMarchandMardiMaritimeMarqueurMarronMartelerMascotteMassifMate/rielMatie-reMatraqueMaudireMaussadeMauveMaximalMe/chantMe/connuMe/dailleMe/decinMe/diterMe/duseMeilleurMe/langeMe/lodieMembreMe/moireMenacerMenerMenhirMensongeMentorMercrediMe/riteMerleMessagerMesureMe/talMe/te/oreMe/thodeMe/tierMeubleMiaulerMicrobeMietteMignonMigrerMilieuMillionMimiqueMinceMine/ralMinimalMinorerMinuteMiracleMiroiterMissileMixteMobileModerneMoelleuxMondialMoniteurMonnaieMonotoneMonstreMontagneMonumentMoqueurMorceauMorsureMortierMoteurMotifMoucheMoufleMoulinMoussonMoutonMouvantMultipleMunitionMurailleMure-neMurmureMuscleMuse/umMusicienMutationMuterMutuelMyriadeMyrtilleMyste-reMythiqueNageurNappeNarquoisNarrerNatationNationNatureNaufrageNautiqueNavireNe/buleuxNectarNe/fasteNe/gationNe/gligerNe/gocierNeigeNerveuxNettoyerNeuroneNeutronNeveuNicheNickelNitrateNiveauNobleNocifNocturneNoirceurNoisetteNomadeNombreuxNommerNormatifNotableNotifierNotoireNourrirNouveauNovateurNovembreNoviceNuageNuancerNuireNuisibleNume/roNuptialNuqueNutritifObe/irObjectifObligerObscurObserverObstacleObtenirObturerOccasionOccuperOce/anOctobreOctroyerOctuplerOculaireOdeurOdorantOffenserOfficierOffrirOgiveOiseauOisillonOlfactifOlivierOmbrageOmettreOnctueuxOndulerOne/reuxOniriqueOpaleOpaqueOpe/rerOpinionOpportunOpprimerOpterOptiqueOrageuxOrangeOrbiteOrdonnerOreilleOrganeOrgueilOrificeOrnementOrqueOrtieOscillerOsmoseOssatureOtarieOuraganOursonOutilOutragerOuvrageOvationOxydeOxyge-neOzonePaisiblePalacePalmare-sPalourdePalperPanachePandaPangolinPaniquerPanneauPanoramaPantalonPapayePapierPapoterPapyrusParadoxeParcelleParesseParfumerParlerParoleParrainParsemerPartagerParureParvenirPassionPaste-quePaternelPatiencePatronPavillonPavoiserPayerPaysagePeignePeintrePelagePe/licanPellePelousePeluchePendulePe/ne/trerPe/niblePensifPe/nuriePe/pitePe/plumPerdrixPerforerPe/riodePermuterPerplexePersilPertePeserPe/talePetitPe/trirPeuplePharaonPhobiePhoquePhotonPhrasePhysiquePianoPicturalPie-cePierrePieuvrePilotePinceauPipettePiquerPiroguePiscinePistonPivoterPixelPizzaPlacardPlafondPlaisirPlanerPlaquePlastronPlateauPleurerPlexusPliagePlombPlongerPluiePlumagePochettePoe/siePoe-tePointePoirierPoissonPoivrePolairePolicierPollenPolygonePommadePompierPonctuelPonde/rerPoneyPortiquePositionPosse/derPosturePotagerPoteauPotionPoucePoulainPoumonPourprePoussinPouvoirPrairiePratiquePre/cieuxPre/direPre/fixePre/ludePre/nomPre/sencePre/textePre/voirPrimitifPrincePrisonPriverProble-meProce/derProdigeProfondProgre-sProieProjeterProloguePromenerPropreProspe-reProte/gerProuesseProverbePrudencePruneauPsychosePublicPuceronPuiserPulpePulsarPunaisePunitifPupitrePurifierPuzzlePyramideQuasarQuerelleQuestionQuie/tudeQuitterQuotientRacineRaconterRadieuxRagondinRaideurRaisinRalentirRallongeRamasserRapideRasageRatisserRavagerRavinRayonnerRe/actifRe/agirRe/aliserRe/animerRecevoirRe/citerRe/clamerRe/colterRecruterReculerRecyclerRe/digerRedouterRefaireRe/flexeRe/formerRefrainRefugeRe/galienRe/gionRe/glageRe/gulierRe/ite/rerRejeterRejouerRelatifReleverReliefRemarqueReme-deRemiseRemonterRemplirRemuerRenardRenfortReniflerRenoncerRentrerRenvoiReplierReporterRepriseReptileRequinRe/serveRe/sineuxRe/soudreRespectResterRe/sultatRe/tablirRetenirRe/ticuleRetomberRetracerRe/unionRe/ussirRevancheRevivreRe/volteRe/vulsifRichesseRideauRieurRigideRigolerRincerRiposterRisibleRisqueRituelRivalRivie-reRocheuxRomanceRompreRonceRondinRoseauRosierRotatifRotorRotuleRougeRouilleRouleauRoutineRoyaumeRubanRubisRucheRuelleRugueuxRuinerRuisseauRuserRustiqueRythmeSablerSaboterSabreSacocheSafariSagesseSaisirSaladeSaliveSalonSaluerSamediSanctionSanglierSarcasmeSardineSaturerSaugrenuSaumonSauterSauvageSavantSavonnerScalpelScandaleSce/le/ratSce/narioSceptreSche/maScienceScinderScoreScrutinSculpterSe/anceSe/cableSe/cherSecouerSe/cre/terSe/datifSe/duireSeigneurSe/jourSe/lectifSemaineSemblerSemenceSe/minalSe/nateurSensibleSentenceSe/parerSe/quenceSereinSergentSe/rieuxSerrureSe/rumServiceSe/sameSe/virSevrageSextupleSide/ralSie-cleSie/gerSifflerSigleSignalSilenceSiliciumSimpleSince-reSinistreSiphonSiropSismiqueSituerSkierSocialSocleSodiumSoigneuxSoldatSoleilSolitudeSolubleSombreSommeilSomnolerSondeSongeurSonnetteSonoreSorcierSortirSosieSottiseSoucieuxSoudureSouffleSouleverSoupapeSourceSoutirerSouvenirSpacieuxSpatialSpe/cialSphe-reSpiralStableStationSternumStimulusStipulerStrictStudieuxStupeurStylisteSublimeSubstratSubtilSubvenirSucce-sSucreSuffixeSugge/rerSuiveurSulfateSuperbeSupplierSurfaceSuricateSurmenerSurpriseSursautSurvieSuspectSyllabeSymboleSyme/trieSynapseSyntaxeSyste-meTabacTablierTactileTaillerTalentTalismanTalonnerTambourTamiserTangibleTapisTaquinerTarderTarifTartineTasseTatamiTatouageTaupeTaureauTaxerTe/moinTemporelTenailleTendreTeneurTenirTensionTerminerTerneTerribleTe/tineTexteThe-meThe/orieThe/rapieThoraxTibiaTie-deTimideTirelireTiroirTissuTitaneTitreTituberTobogganTole/rantTomateToniqueTonneauToponymeTorcheTordreTornadeTorpilleTorrentTorseTortueTotemToucherTournageTousserToxineTractionTraficTragiqueTrahirTrainTrancherTravailTre-fleTremperTre/sorTreuilTriageTribunalTricoterTrilogieTriompheTriplerTriturerTrivialTromboneTroncTropicalTroupeauTuileTulipeTumulteTunnelTurbineTuteurTutoyerTuyauTympanTyphonTypiqueTyranUbuesqueUltimeUltrasonUnanimeUnifierUnionUniqueUnitaireUniversUraniumUrbainUrticantUsageUsineUsuelUsureUtileUtopieVacarmeVaccinVagabondVagueVaillantVaincreVaisseauValableValiseVallonValveVampireVanilleVapeurVarierVaseuxVassalVasteVecteurVedetteVe/ge/talVe/hiculeVeinardVe/loceVendrediVe/ne/rerVengerVenimeuxVentouseVerdureVe/rinVernirVerrouVerserVertuVestonVe/te/ranVe/tusteVexantVexerViaducViandeVictoireVidangeVide/oVignetteVigueurVilainVillageVinaigreViolonVipe-reVirementVirtuoseVirusVisageViseurVisionVisqueuxVisuelVitalVitesseViticoleVitrineVivaceVivipareVocationVoguerVoileVoisinVoitureVolailleVolcanVoltigerVolumeVoraceVortexVoterVouloirVoyageVoyelleWagonXe/nonYachtZe-breZe/nithZesteZoologie";
			let R = null;
			const A = {};

			function T(e) {
				return o.b.checkNormalize(), Object(m.h)(Array.prototype.filter.call(Object(m.f)(e.normalize("NFD").toLowerCase()), e => e >= 65 && e <= 90 || e >= 97 && e <= 123))
			}

			function S(e) {
				if (null == R && ((R = O.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" ").map(e => (function(e) {
						const r = [];
						return Array.prototype.forEach.call(Object(m.f)(e), e => {
							47 === e ? (r.push(204), r.push(129)) : 45 === e ? (r.push(204), r.push(128)) : r.push(e)
						}), Object(m.h)(r)
					})(e))).forEach((e, r) => {
						A[T(e)] = r
					}), "0x51deb7ae009149dc61a6bd18a918eb7ac78d2775726c68e598b92d002519b045" !== o.a.check(e))) throw R = null, new Error("BIP39 Wordlist for fr (French) FAILED")
			}
			class w extends o.a {
				constructor() {
					super("fr")
				}
				getWord(e) {
					return S(this), R[e]
				}
				getWordIndex(e) {
					return S(this), A[T(e)]
				}
			}
			const P = new w;
			o.a.register(P);
			var C = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");
			const I = ["AQRASRAGBAGUAIRAHBAghAURAdBAdcAnoAMEAFBAFCBKFBQRBSFBCXBCDBCHBGFBEQBpBBpQBIkBHNBeOBgFBVCBhBBhNBmOBmRBiHBiFBUFBZDBvFBsXBkFBlcBjYBwDBMBBTBBTRBWBBWXXaQXaRXQWXSRXCFXYBXpHXOQXHRXhRXuRXmXXbRXlXXwDXTRXrCXWQXWGaBWaKcaYgasFadQalmaMBacAKaRKKBKKXKKjKQRKDRKCYKCRKIDKeVKHcKlXKjHKrYNAHNBWNaRNKcNIBNIONmXNsXNdXNnBNMBNRBNrXNWDNWMNFOQABQAHQBrQXBQXFQaRQKXQKDQKOQKFQNBQNDQQgQCXQCDQGBQGDQGdQYXQpBQpQQpHQLXQHuQgBQhBQhCQuFQmXQiDQUFQZDQsFQdRQkHQbRQlOQlmQPDQjDQwXQMBQMDQcFQTBQTHQrDDXQDNFDGBDGQDGRDpFDhFDmXDZXDbRDMYDRdDTRDrXSAhSBCSBrSGQSEQSHBSVRShYShkSyQSuFSiBSdcSoESocSlmSMBSFBSFKSFNSFdSFcCByCaRCKcCSBCSRCCrCGbCEHCYXCpBCpQCIBCIHCeNCgBCgFCVECVcCmkCmwCZXCZFCdRClOClmClFCjDCjdCnXCwBCwXCcRCFQCFjGXhGNhGDEGDMGCDGCHGIFGgBGVXGVEGVRGmXGsXGdYGoSGbRGnXGwXGwDGWRGFNGFLGFOGFdGFkEABEBDEBFEXOEaBEKSENBENDEYXEIgEIkEgBEgQEgHEhFEudEuFEiBEiHEiFEZDEvBEsXEsFEdXEdREkFEbBEbRElFEPCEfkEFNYAEYAhYBNYQdYDXYSRYCEYYoYgQYgRYuRYmCYZTYdBYbEYlXYjQYRbYWRpKXpQopQnpSFpCXpIBpISphNpdBpdRpbRpcZpFBpFNpFDpFopFrLADLBuLXQLXcLaFLCXLEhLpBLpFLHXLeVLhILdHLdRLoDLbRLrXIABIBQIBCIBsIBoIBMIBRIXaIaRIKYIKRINBINuICDIGBIIDIIkIgRIxFIyQIiHIdRIbYIbRIlHIwRIMYIcRIRVITRIFBIFNIFQOABOAFOBQOaFONBONMOQFOSFOCDOGBOEQOpBOLXOIBOIFOgQOgFOyQOycOmXOsXOdIOkHOMEOMkOWWHBNHXNHXWHNXHDuHDRHSuHSRHHoHhkHmRHdRHkQHlcHlRHwBHWcgAEgAggAkgBNgBQgBEgXOgYcgLXgHjgyQgiBgsFgdagMYgWSgFQgFEVBTVXEVKBVKNVKDVKYVKRVNBVNYVDBVDxVSBVSRVCjVGNVLXVIFVhBVhcVsXVdRVbRVlRhBYhKYhDYhGShxWhmNhdahdkhbRhjohMXhTRxAXxXSxKBxNBxEQxeNxeQxhXxsFxdbxlHxjcxFBxFNxFQxFOxFoyNYyYoybcyMYuBQuBRuBruDMuCouHBudQukkuoBulVuMXuFEmCYmCRmpRmeDmiMmjdmTFmFQiADiBOiaRiKRiNBiNRiSFiGkiGFiERipRiLFiIFihYibHijBijEiMXiWBiFBiFCUBQUXFUaRUNDUNcUNRUNFUDBUSHUCDUGBUGFUEqULNULoUIRUeEUeYUgBUhFUuRUiFUsXUdFUkHUbBUjSUjYUwXUMDUcHURdUTBUrBUrXUrQZAFZXZZaRZKFZNBZQFZCXZGBZYdZpBZLDZIFZHXZHNZeQZVRZVFZmXZiBZvFZdFZkFZbHZbFZwXZcCZcRZRBvBQvBGvBLvBWvCovMYsAFsBDsaRsKFsNFsDrsSHsSFsCXsCRsEBsEHsEfspBsLBsLDsIgsIRseGsbRsFBsFQsFSdNBdSRdCVdGHdYDdHcdVbdySduDdsXdlRdwXdWYdWcdWRkBMkXOkaRkNIkNFkSFkCFkYBkpRkeNkgBkhVkmXksFklVkMBkWDkFNoBNoaQoaFoNBoNXoNaoNEoSRoEroYXoYCoYbopRopFomXojkowXorFbBEbEIbdBbjYlaRlDElMXlFDjKjjSRjGBjYBjYkjpRjLXjIBjOFjeVjbRjwBnXQnSHnpFnLXnINnMBnTRwXBwXNwXYwNFwQFwSBwGFwLXwLDweNwgBwuHwjDwnXMBXMpFMIBMeNMTHcaQcNBcDHcSFcCXcpBcLXcLDcgFcuFcnXcwXccDcTQcrFTQErXNrCHrpFrgFrbFrTHrFcWNYWNbWEHWMXWTR", "ABGHABIJAEAVAYJQALZJAIaRAHNXAHdcAHbRAZJMAZJRAZTRAdVJAklmAbcNAjdRAMnRAMWYAWpRAWgRAFgBAFhBAFdcBNJBBNJDBQKBBQhcBQlmBDEJBYJkBYJTBpNBBpJFBIJBBIJDBIcABOKXBOEJBOVJBOiJBOZJBepBBeLXBeIFBegBBgGJBVJXBuocBiJRBUJQBlXVBlITBwNFBMYVBcqXBTlmBWNFBWiJBWnRBFGHBFwXXKGJXNJBXNZJXDTTXSHSXSVRXSlHXCJDXGQJXEhXXYQJXYbRXOfXXeNcXVJFXhQJXhEJXdTRXjdXXMhBXcQTXRGBXTEBXTnQXFCXXFOFXFgFaBaFaBNJaBCJaBpBaBwXaNJKaNJDaQIBaDpRaEPDaHMFamDJalEJaMZJaFaFaFNBaFQJaFLDaFVHKBCYKBEBKBHDKXaFKXGdKXEJKXpHKXIBKXZDKXwXKKwLKNacKNYJKNJoKNWcKDGdKDTRKChXKGaRKGhBKGbRKEBTKEaRKEPTKLMDKLWRKOHDKVJcKdBcKlIBKlOPKFSBKFEPKFpFNBNJNJBQNBGHNBEPNBHXNBgFNBVXNBZDNBsXNBwXNNaRNNJDNNJENNJkNDCJNDVDNGJRNJiDNZJNNsCJNJFNNFSBNFCXNFEPNFLXNFIFQJBFQCaRQJEQQLJDQLJFQIaRQOqXQHaFQHHQQVJXQVJDQhNJQmEIQZJFQsJXQJrFQWbRDJABDBYJDXNFDXCXDXLXDXZDDXsJDQqXDSJFDJCXDEPkDEqXDYmQDpSJDOCkDOGQDHEIDVJDDuDuDWEBDJFgSBNDSBSFSBGHSBIBSBTQSKVYSJQNSJQiSJCXSEqXSJYVSIiJSOMYSHAHSHaQSeCFSepQSegBSHdHSHrFShSJSJuHSJUFSkNRSrSrSWEBSFaHSJFQSFCXSFGDSFYXSFODSFgBSFVXSFhBSFxFSFkFSFbBSFMFCADdCJXBCXaFCXKFCXNFCXCXCXGBCXEJCXYBCXLDCXIBCXOPCXHXCXgBCXhBCXiBCXlDCXcHCJNBCJNFCDCJCDGBCDVXCDhBCDiDCDJdCCmNCpJFCIaRCOqXCHCHCHZJCViJCuCuCmddCJiFCdNBCdHhClEJCnUJCreSCWlgCWTRCFBFCFNBCFYBCFVFCFhFCFdSCFTBCFWDGBNBGBQFGJBCGBEqGBpBGBgQGNBEGNJYGNkOGNJRGDUFGJpQGHaBGJeNGJeEGVBlGVKjGiJDGvJHGsVJGkEBGMIJGWjNGFBFGFCXGFGBGFYXGFpBGFMFEASJEAWpEJNFECJVEIXSEIQJEOqXEOcFEeNcEHEJEHlFEJgFEhlmEmDJEmZJEiMBEUqXEoSREPBFEPXFEPKFEPSFEPEFEPpFEPLXEPIBEJPdEPcFEPTBEJnXEqlHEMpREFCXEFODEFcFYASJYJAFYBaBYBVXYXpFYDhBYCJBYJGFYYbRYeNcYJeVYiIJYZJcYvJgYvJRYJsXYsJFYMYMYreVpBNHpBEJpBwXpQxFpYEJpeNDpJeDpeSFpeCHpHUJpHbBpHcHpmUJpiiJpUJrpsJuplITpFaBpFQqpFGBpFEfpFYBpFpBpFLJpFIDpFgBpFVXpFyQpFuFpFlFpFjDpFnXpFwXpJFMpFTBLXCJLXEFLXhFLXUJLXbFLalmLNJBLSJQLCLCLGJBLLDJLHaFLeNFLeSHLeCXLepFLhaRLZsJLsJDLsJrLocaLlLlLMdbLFNBLFSBLFEHLFkFIBBFIBXFIBaQIBKXIBSFIBpHIBLXIBgBIBhBIBuHIBmXIBiFIBZXIBvFIBbFIBjQIBwXIBWFIKTRIQUJIDGFICjQIYSRIINXIJeCIVaRImEkIZJFIvJRIsJXIdCJIJoRIbBQIjYBIcqXITFVIreVIFKFIFSFIFCJIFGFIFLDIFIBIJFOIFgBIFVXIJFhIFxFIFmXIFdHIFbBIJFrIJFWOBGBOQfXOOKjOUqXOfXBOqXEOcqXORVJOFIBOFlDHBIOHXiFHNTRHCJXHIaRHHJDHHEJHVbRHZJYHbIBHRsJHRkDHWlmgBKFgBSBgBCDgBGHgBpBgBIBgBVJgBuBgBvFgKDTgQVXgDUJgGSJgOqXgmUMgZIJgTUJgWIEgFBFgFNBgFDJgFSFgFGBgFYXgJFOgFgQgFVXgFhBgFbHgJFWVJABVQKcVDgFVOfXVeDFVhaRVmGdViJYVMaRVFNHhBNDhBCXhBEqhBpFhBLXhNJBhSJRheVXhhKEhxlmhZIJhdBQhkIJhbMNhMUJhMZJxNJgxQUJxDEkxDdFxSJRxplmxeSBxeCXxeGFxeYXxepQxegBxWVcxFEQxFLXxFIBxFgBxFxDxFZtxFdcxFbBxFwXyDJXyDlcuASJuDJpuDIBuCpJuGSJuIJFueEFuZIJusJXudWEuoIBuWGJuFBcuFKEuFNFuFQFuFDJuFGJuFVJuFUtuFdHuFTBmBYJmNJYmQhkmLJDmLJomIdXmiJYmvJRmsJRmklmmMBymMuCmclmmcnQiJABiJBNiJBDiBSFiBCJiBEFiBYBiBpFiBLXiBTHiJNciDEfiCZJiECJiJEqiOkHiHKFieNDiHJQieQcieDHieSFieCXieGFieEFieIHiegFihUJixNoioNXiFaBiFKFiFNDiFEPiFYXitFOitFHiFgBiFVEiFmXiFitiFbBiFMFiFrFUCXQUIoQUIJcUHQJUeCEUHwXUUJDUUqXUdWcUcqXUrnQUFNDUFSHUFCFUFEfUFLXUtFOZBXOZXSBZXpFZXVXZEQJZEJkZpDJZOqXZeNHZeCDZUqXZFBQZFEHZFLXvBAFvBKFvBCXvBEPvBpHvBIDvBgFvBuHvQNJvFNFvFGBvFIBvJFcsXCDsXLXsXsXsXlFsXcHsQqXsJQFsEqXseIFsFEHsFjDdBxOdNpRdNJRdEJbdpJRdhZJdnSJdrjNdFNJdFQHdFhNkNJDkYaRkHNRkHSRkVbRkuMRkjSJkcqDoSJFoEiJoYZJoOfXohEBoMGQocqXbBAFbBXFbBaFbBNDbBGBbBLXbBTBbBWDbGJYbIJHbFQqbFpQlDgQlOrFlVJRjGEBjZJRnXvJnXbBnEfHnOPDngJRnxfXnUJWwXEJwNpJwDpBwEfXwrEBMDCJMDGHMDIJMLJDcQGDcQpHcqXccqNFcqCXcFCJRBSBRBGBRBEJRBpQTBNFTBQJTBpBTBVXTFABTFSBTFCFTFGBTFMDrXCJrXLDrDNJrEfHrFQJrFitWNjdWNTR", "AKLJMANOPFASNJIAEJWXAYJNRAIIbRAIcdaAeEfDAgidRAdjNYAMYEJAMIbRAFNJBAFpJFBBIJYBDZJFBSiJhBGdEBBEJfXBEJqXBEJWRBpaUJBLXrXBIYJMBOcfXBeEfFBestXBjNJRBcDJOBFEqXXNvJRXDMBhXCJNYXOAWpXONJWXHDEBXeIaRXhYJDXZJSJXMDJOXcASJXFVJXaBQqXaBZJFasXdQaFSJQaFEfXaFpJHaFOqXKBNSRKXvJBKQJhXKEJQJKEJGFKINJBKIJjNKgJNSKVElmKVhEBKiJGFKlBgJKjnUJKwsJYKMFIJKFNJDKFIJFKFOfXNJBSFNJBCXNBpJFNJBvQNJBMBNJLJXNJOqXNJeCXNJeGFNdsJCNbTKFNwXUJQNFEPQDiJcQDMSJQSFpBQGMQJQJeOcQyCJEQUJEBQJFBrQFEJqDXDJFDJXpBDJXIMDGiJhDIJGRDJeYcDHrDJDVXgFDkAWpDkIgRDjDEqDMvJRDJFNFDJFIBSKclmSJQOFSJQVHSJQjDSJGJBSJGJFSECJoSHEJqSJHTBSJVJDSViJYSZJNBSJsJDSFSJFSFEfXSJFLXCBUJVCJXSBCJXpBCXVJXCJXsXCJXdFCJNJHCLIJgCHiJFCVNJMChCJhCUHEJCsJTRCJdYcCoQJCCFEfXCFIJgCFUJxCFstFGJBaQGJBIDGQJqXGYJNRGJHKFGeQqDGHEJFGJeLXGHIiJGHdBlGUJEBGkIJTGFQPDGJFEqEAGegEJIJBEJVJXEhQJTEiJNcEJZJFEJoEqEjDEqEPDsXEPGJBEPOqXEPeQFEfDiDEJfEFEfepQEfMiJEqXNBEqDIDEqeSFEqVJXEMvJRYXNJDYXEJHYKVJcYYJEBYJeEcYJUqXYFpJFYFstXpAZJMpBSJFpNBNFpeQPDpHLJDpHIJFpHgJFpeitFpHZJFpJFADpFSJFpJFCJpFOqXpFitBpJFZJLXIJFLIJgRLVNJWLVHJMLwNpJLFGJBLFLJDLFOqXLJFUJIBDJXIBGJBIJBYQIJBIBIBOqXIBcqDIEGJFILNJTIIJEBIOiJhIJeNBIJeIBIhiJIIWoTRIJFAHIJFpBIJFuHIFUtFIJFTHOSBYJOEcqXOHEJqOvBpFOkVJrObBVJOncqDOcNJkHhNJRHuHJuHdMhBgBUqXgBsJXgONJBgHNJDgHHJQgJeitgHsJXgJyNagyDJBgZJDrgsVJQgkEJNgkjSJgJFAHgFCJDgFZtMVJXNFVXQfXVJXDJVXoQJVQVJQVDEfXVDvJHVEqNFVeQfXVHpJFVHxfXVVJSRVVmaRVlIJOhCXVJhHjYkhxCJVhWVUJhWiJcxBNJIxeEqDxfXBFxcFEPxFSJFxFYJXyBDQJydaUJyFOPDuYCJYuLvJRuHLJXuZJLDuFOPDuFZJHuFcqXmKHJdmCQJcmOsVJiJAGFitLCFieOfXiestXiZJMEikNJQirXzFiFQqXiFIJFiFZJFiFvtFUHpJFUteIcUteOcUVCJkUhdHcUbEJEUJqXQUMNJhURjYkUFitFZDGJHZJIxDZJVJXZJFDJZJFpQvBNJBvBSJFvJxBrseQqDsVFVJdFLJDkEJNBkmNJYkFLJDoQJOPoGsJRoEAHBoEJfFbBQqDbBZJHbFVJXlFIJBjYIrXjeitcjjCEBjWMNBwXQfXwXOaFwDsJXwCJTRwrCZJMDNJQcDDJFcqDOPRYiJFTBsJXTQIJBTFEfXTFLJDrXEJFrEJXMrFZJFWEJdEWYTlm", "ABCDEFACNJTRAMBDJdAcNJVXBLNJEBXSIdWRXErNJkXYDJMBXZJCJaXMNJaYKKVJKcKDEJqXKDcNJhKVJrNYKbgJVXKFVJSBNBYBwDNJeQfXNJeEqXNhGJWENJFiJRQlIJbEQJfXxDQqXcfXQFNDEJQFwXUJDYcnUJDJIBgQDIUJTRDJFEqDSJQSJFSJQIJFSOPeZtSJFZJHCJXQfXCTDEqFGJBSJFGJBOfXGJBcqXGJHNJDGJRLiJEJfXEqEJFEJPEFpBEJYJBZJFYBwXUJYiJMEBYJZJyTYTONJXpQMFXFpeGIDdpJFstXpJFcPDLBVSJRLHQJqXLJFZJFIJBNJDIJBUqXIBkFDJIJEJPTIYJGWRIJeQPDIJeEfHIJFsJXOqGDSFHXEJqXgJCsJCgGQJqXgdQYJEgFMFNBgJFcqDVJwXUJVJFZJchIgJCCxOEJqXxOwXUJyDJBVRuscisciJBiJBieUtqXiJFDJkiFsJXQUGEZJcUJFsJXZtXIrXZDZJDrZJFNJDZJFstXvJFQqXvJFCJEsJXQJqkhkNGBbDJdTRbYJMEBlDwXUJMEFiJFcfXNJDRcNJWMTBLJXC", "BraFUtHBFSJFdbNBLJXVJQoYJNEBSJBEJfHSJHwXUJCJdAZJMGjaFVJXEJPNJBlEJfFiJFpFbFEJqIJBVJCrIBdHiJhOPFChvJVJZJNJWxGFNIFLueIBQJqUHEJfUFstOZJDrlXEASJRlXVJXSFwVJNJWD", "QJEJNNJDQJEJIBSFQJEJxegBQJEJfHEPSJBmXEJFSJCDEJqXLXNJFQqXIcQsFNJFIFEJqXUJgFsJXIJBUJEJfHNFvJxEqXNJnXUJFQqD", "IJBEJqXZJ"],
				_ = "~~AzB~X~a~KN~Q~D~S~C~G~E~Y~p~L~I~O~eH~g~V~hxyumi~~U~~Z~~v~~s~~dkoblPjfnqwMcRTr~W~~~F~~~~~Jt";
			let F = null;

			function L(e) {
				return Object(C.hexlify)(Object(m.f)(e))
			}
			const M = "0xe3818de38284e3818f",
				U = "0xe3818de38283e3818f";

			function k(e) {
				if (null !== F) return;
				F = [];
				const r = {};

				function t(e) {
					let t = "";
					for (let o = 0; o < e.length; o++) {
						let n = e[o];
						const i = r[n];
						!1 !== i && (i && (n = i), t += n)
					}
					return t
				}
				r[Object(m.h)([227, 130, 154])] = !1, r[Object(m.h)([227, 130, 153])] = !1, r[Object(m.h)([227, 130, 133])] = Object(m.h)([227, 130, 134]), r[Object(m.h)([227, 129, 163])] = Object(m.h)([227, 129, 164]), r[Object(m.h)([227, 130, 131])] = Object(m.h)([227, 130, 132]), r[Object(m.h)([227, 130, 135])] = Object(m.h)([227, 130, 136]);
				for (let o = 3; o <= 9; o++) {
					const e = I[o - 3];
					for (let r = 0; r < e.length; r += o) {
						const t = [];
						for (let n = 0; n < o; n++) {
							const o = _.indexOf(e[r + n]);
							t.push(227), t.push(64 & o ? 130 : 129), t.push(128 + (63 & o))
						}
						F.push(Object(m.h)(t))
					}
				}
				if (F.sort((function(e, r) {
						return (e = t(e)) < (r = t(r)) ? -1 : e > r ? 1 : 0
					})), L(F[442]) === M && L(F[443]) === U) {
					const e = F[442];
					F[442] = F[443], F[443] = e
				}
				if ("0xcb36b09e6baa935787fd762ce65e80b0c6a8dabdfbc3a7f86ac0e2c4fd111600" !== o.a.check(e)) throw F = null, new Error("BIP39 Wordlist for ja (Japanese) FAILED")
			}
			class j extends o.a {
				constructor() {
					super("ja")
				}
				getWord(e) {
					return k(this), F[e]
				}
				getWordIndex(e) {
					return k(this), F.indexOf(e)
				}
				split(e) {
					return o.b.checkNormalize(), e.split(/(?:\u3000| )+/g)
				}
				join(e) {
					return e.join("　")
				}
			}
			const D = new j;
			o.a.register(D);
			const B = ["OYAa", "ATAZoATBl3ATCTrATCl8ATDloATGg3ATHT8ATJT8ATJl3ATLlvATLn4ATMT8ATMX8ATMboATMgoAToLbAToMTATrHgATvHnAT3AnAT3JbAT3MTAT8DbAT8JTAT8LmAT8MYAT8MbAT#LnAUHT8AUHZvAUJXrAUJX8AULnrAXJnvAXLUoAXLgvAXMn6AXRg3AXrMbAX3JTAX3QbAYLn3AZLgvAZrSUAZvAcAZ8AaAZ8AbAZ8AnAZ8HnAZ8LgAZ8MYAZ8MgAZ8OnAaAboAaDTrAaFTrAaJTrAaJboAaLVoAaMXvAaOl8AaSeoAbAUoAbAg8AbAl4AbGnrAbMT8AbMXrAbMn4AbQb8AbSV8AbvRlAb8AUAb8AnAb8HgAb8JTAb8NTAb8RbAcGboAcLnvAcMT8AcMX8AcSToAcrAaAcrFnAc8AbAc8MgAfGgrAfHboAfJnvAfLV8AfLkoAfMT8AfMnoAfQb8AfScrAfSgrAgAZ8AgFl3AgGX8AgHZvAgHgrAgJXoAgJX8AgJboAgLZoAgLn4AgOX8AgoATAgoAnAgoCUAgoJgAgoLXAgoMYAgoSeAgrDUAgrJTAhrFnAhrLjAhrQgAjAgoAjJnrAkMX8AkOnoAlCTvAlCV8AlClvAlFg4AlFl6AlFn3AloSnAlrAXAlrAfAlrFUAlrFbAlrGgAlrOXAlvKnAlvMTAl3AbAl3MnAnATrAnAcrAnCZ3AnCl8AnDg8AnFboAnFl3AnHX4AnHbrAnHgrAnIl3AnJgvAnLXoAnLX4AnLbrAnLgrAnLhrAnMXoAnMgrAnOn3AnSbrAnSeoAnvLnAn3OnCTGgvCTSlvCTvAUCTvKnCTvNTCT3CZCT3GUCT3MTCT8HnCUCZrCULf8CULnvCU3HnCU3JUCY6NUCbDb8CbFZoCbLnrCboOTCboScCbrFnCbvLnCb8AgCb8HgCb$LnCkLfoClBn3CloDUDTHT8DTLl3DTSU8DTrAaDTrLXDTrLjDTrOYDTrOgDTvFXDTvFnDT3HUDT3LfDUCT9DUDT4DUFVoDUFV8DUFkoDUGgrDUJnrDULl8DUMT8DUMXrDUMX4DUMg8DUOUoDUOgvDUOg8DUSToDUSZ8DbDXoDbDgoDbGT8DbJn3DbLg3DbLn4DbMXrDbMg8DbOToDboJXGTClvGTDT8GTFZrGTLVoGTLlvGTLl3GTMg8GTOTvGTSlrGToCUGTrDgGTrJYGTrScGTtLnGTvAnGTvQgGUCZrGUDTvGUFZoGUHXrGULnvGUMT8GUoMgGXoLnGXrMXGXrMnGXvFnGYLnvGZOnvGZvOnGZ8LaGZ8LmGbAl3GbDYvGbDlrGbHX3GbJl4GbLV8GbLn3GbMn4GboJTGboRfGbvFUGb3GUGb4JnGgDX3GgFl$GgJlrGgLX6GgLZoGgLf8GgOXoGgrAgGgrJXGgrMYGgrScGgvATGgvOYGnAgoGnJgvGnLZoGnLg3GnLnrGnQn8GnSbrGnrMgHTClvHTDToHTFT3HTQT8HToJTHToJgHTrDUHTrMnHTvFYHTvRfHT8MnHT8SUHUAZ8HUBb4HUDTvHUoMYHXFl6HXJX6HXQlrHXrAUHXrMnHXrSbHXvFYHXvKXHX3LjHX3MeHYvQlHZrScHZvDbHbAcrHbFT3HbFl3HbJT8HbLTrHbMT8HbMXrHbMbrHbQb8HbSX3HboDbHboJTHbrFUHbrHgHbrJTHb8JTHb8MnHb8QgHgAlrHgDT3HgGgrHgHgrHgJTrHgJT8HgLX@HgLnrHgMT8HgMX8HgMboHgOnrHgQToHgRg3HgoHgHgrCbHgrFnHgrLVHgvAcHgvAfHnAloHnCTrHnCnvHnGTrHnGZ8HnGnvHnJT8HnLf8HnLkvHnMg8HnRTrITvFUITvFnJTAXrJTCV8JTFT3JTFT8JTFn4JTGgvJTHT8JTJT8JTJXvJTJl3JTJnvJTLX4JTLf8JTLhvJTMT8JTMXrJTMnrJTObrJTQT8JTSlvJT8DUJT8FkJT8MTJT8OXJT8OgJT8QUJT8RfJUHZoJXFT4JXFlrJXGZ8JXGnrJXLV8JXLgvJXMXoJXMX3JXNboJXPlvJXoJTJXoLkJXrAXJXrHUJXrJgJXvJTJXvOnJX4KnJYAl3JYJT8JYLhvJYQToJYrQXJY6NUJbAl3JbCZrJbDloJbGT8JbGgrJbJXvJbJboJbLf8JbLhrJbLl3JbMnvJbRg8JbSZ8JboDbJbrCZJbrSUJb3KnJb8LnJfRn8JgAXrJgCZrJgDTrJgGZrJgGZ8JgHToJgJT8JgJXoJgJgvJgLX4JgLZ3JgLZ8JgLn4JgMgrJgMn4JgOgvJgPX6JgRnvJgSToJgoCZJgoJbJgoMYJgrJXJgrJgJgrLjJg6MTJlCn3JlGgvJlJl8Jl4AnJl8FnJl8HgJnAToJnATrJnAbvJnDUoJnGnrJnJXrJnJXvJnLhvJnLnrJnLnvJnMToJnMT8JnMXvJnMX3JnMg8JnMlrJnMn4JnOX8JnST4JnSX3JnoAgJnoAnJnoJTJnoObJnrAbJnrAkJnrHnJnrJTJnrJYJnrOYJnrScJnvCUJnvFaJnvJgJnvJnJnvOYJnvQUJnvRUJn3FnJn3JTKnFl3KnLT6LTDlvLTMnoLTOn3LTRl3LTSb4LTSlrLToAnLToJgLTrAULTrAcLTrCULTrHgLTrMgLT3JnLULnrLUMX8LUoJgLVATrLVDTrLVLb8LVoJgLV8MgLV8RTLXDg3LXFlrLXrCnLXrLXLX3GTLX4GgLX4OYLZAXrLZAcrLZAgrLZAhrLZDXyLZDlrLZFbrLZFl3LZJX6LZJX8LZLc8LZLnrLZSU8LZoJTLZoJnLZrAgLZrAnLZrJYLZrLULZrMgLZrSkLZvAnLZvGULZvJeLZvOTLZ3FZLZ4JXLZ8STLZ8ScLaAT3LaAl3LaHT8LaJTrLaJT8LaJXrLaJgvLaJl4LaLVoLaMXrLaMXvLaMX8LbClvLbFToLbHlrLbJn4LbLZ3LbLhvLbMXrLbMnoLbvSULcLnrLc8HnLc8MTLdrMnLeAgoLeOgvLeOn3LfAl3LfLnvLfMl3LfOX8Lf8AnLf8JXLf8LXLgJTrLgJXrLgJl8LgMX8LgRZrLhCToLhrAbLhrFULhrJXLhvJYLjHTrLjHX4LjJX8LjLhrLjSX3LjSZ4LkFX4LkGZ8LkGgvLkJTrLkMXoLkSToLkSU8LkSZ8LkoOYLl3FfLl3MgLmAZrLmCbrLmGgrLmHboLmJnoLmJn3LmLfoLmLhrLmSToLnAX6LnAb6LnCZ3LnCb3LnDTvLnDb8LnFl3LnGnrLnHZvLnHgvLnITvLnJT8LnJX8LnJlvLnLf8LnLg6LnLhvLnLnoLnMXrLnMg8LnQlvLnSbrLnrAgLnrAnLnrDbLnrFkLnrJdLnrMULnrOYLnrSTLnvAnLnvDULnvHgLnvOYLnvOnLn3GgLn4DULn4JTLn4JnMTAZoMTAloMTDb8MTFT8MTJnoMTJnrMTLZrMTLhrMTLkvMTMX8MTRTrMToATMTrDnMTrOnMT3JnMT4MnMT8FUMT8FaMT8FlMT8GTMT8GbMT8GnMT8HnMT8JTMT8JbMT8OTMUCl8MUJTrMUJU8MUMX8MURTrMUSToMXAX6MXAb6MXCZoMXFXrMXHXrMXLgvMXOgoMXrAUMXrAnMXrHgMXrJYMXrJnMXrMTMXrMgMXrOYMXrSZMXrSgMXvDUMXvOTMX3JgMX3OTMX4JnMX8DbMX8FnMX8HbMX8HgMX8HnMX8LbMX8MnMX8OnMYAb8MYGboMYHTvMYHX4MYLTrMYLnvMYMToMYOgvMYRg3MYSTrMbAToMbAXrMbAl3MbAn8MbGZ8MbJT8MbJXrMbMXvMbMX8MbMnoMbrMUMb8AfMb8FbMb8FkMcJXoMeLnrMgFl3MgGTvMgGXoMgGgrMgGnrMgHT8MgHZrMgJnoMgLnrMgLnvMgMT8MgQUoMgrHnMgvAnMg8HgMg8JYMg8LfMloJnMl8ATMl8AXMl8JYMnAToMnAT4MnAZ8MnAl3MnAl4MnCl8MnHT8MnHg8MnJnoMnLZoMnLhrMnMXoMnMX3MnMnrMnOgvMnrFbMnrFfMnrFnMnrNTMnvJXNTMl8OTCT3OTFV8OTFn3OTHZvOTJXrOTOl3OT3ATOT3JUOT3LZOT3LeOT3MbOT8ATOT8AbOT8AgOT8MbOUCXvOUMX3OXHXvOXLl3OXrMUOXvDbOX6NUOX8JbOYFZoOYLbrOYLkoOYMg8OYSX3ObHTrObHT4ObJgrObLhrObMX3ObOX8Ob8FnOeAlrOeJT8OeJXrOeJnrOeLToOeMb8OgJXoOgLXoOgMnrOgOXrOgOloOgoAgOgoJbOgoMYOgoSTOg8AbOjLX4OjMnoOjSV8OnLVoOnrAgOn3DUPXQlrPXvFXPbvFTPdAT3PlFn3PnvFbQTLn4QToAgQToMTQULV8QURg8QUoJnQXCXvQbFbrQb8AaQb8AcQb8FbQb8MYQb8ScQeAlrQeLhrQjAn3QlFXoQloJgQloSnRTLnvRTrGURTrJTRUJZrRUoJlRUrQnRZrLmRZrMnRZrSnRZ8ATRZ8JbRZ8ScRbMT8RbST3RfGZrRfMX8RfMgrRfSZrRnAbrRnGT8RnvJgRnvLfRnvMTRn8AaSTClvSTJgrSTOXrSTRg3STRnvSToAcSToAfSToAnSToHnSToLjSToMTSTrAaSTrEUST3BYST8AgST8LmSUAZvSUAgrSUDT4SUDT8SUGgvSUJXoSUJXvSULTrSU8JTSU8LjSV8AnSV8JgSXFToSXLf8SYvAnSZrDUSZrMUSZrMnSZ8HgSZ8JTSZ8JgSZ8MYSZ8QUSaQUoSbCT3SbHToSbQYvSbSl4SboJnSbvFbSb8HbSb8JgSb8OTScGZrScHgrScJTvScMT8ScSToScoHbScrMTScvAnSeAZrSeAcrSeHboSeJUoSeLhrSeMT8SeMXrSe6JgSgHTrSkJnoSkLnvSk8CUSlFl3SlrSnSl8GnSmAboSmGT8SmJU8", "ATLnDlATrAZoATrJX4ATrMT8ATrMX4ATrRTrATvDl8ATvJUoATvMl8AT3AToAT3MX8AT8CT3AT8DT8AT8HZrAT8HgoAUAgFnAUCTFnAXoMX8AXrAT8AXrGgvAXrJXvAXrOgoAXvLl3AZvAgoAZvFbrAZvJXoAZvJl8AZvJn3AZvMX8AZvSbrAZ8FZoAZ8LZ8AZ8MU8AZ8OTvAZ8SV8AZ8SX3AbAgFZAboJnoAbvGboAb8ATrAb8AZoAb8AgrAb8Al4Ab8Db8Ab8JnoAb8LX4Ab8LZrAb8LhrAb8MT8Ab8OUoAb8Qb8Ab8ST8AcrAUoAcrAc8AcrCZ3AcrFT3AcrFZrAcrJl4AcrJn3AcrMX3AcrOTvAc8AZ8Ac8MT8AfAcJXAgoFn4AgoGgvAgoGnrAgoLc8AgoMXoAgrLnrAkrSZ8AlFXCTAloHboAlrHbrAlrLhrAlrLkoAl3CZrAl3LUoAl3LZrAnrAl4AnrMT8An3HT4BT3IToBX4MnvBb!Ln$CTGXMnCToLZ4CTrHT8CT3JTrCT3RZrCT#GTvCU6GgvCU8Db8CU8GZrCU8HT8CboLl3CbrGgrCbrMU8Cb8DT3Cb8GnrCb8LX4Cb8MT8Cb8ObrCgrGgvCgrKX4Cl8FZoDTrAbvDTrDboDTrGT6DTrJgrDTrMX3DTrRZrDTrRg8DTvAVvDTvFZoDT3DT8DT3Ln3DT4HZrDT4MT8DT8AlrDT8MT8DUAkGbDUDbJnDYLnQlDbDUOYDbMTAnDbMXSnDboAT3DboFn4DboLnvDj6JTrGTCgFTGTGgFnGTJTMnGTLnPlGToJT8GTrCT3GTrLVoGTrLnvGTrMX3GTrMboGTvKl3GZClFnGZrDT3GZ8DTrGZ8FZ8GZ8MXvGZ8On8GZ8ST3GbCnQXGbMbFnGboFboGboJg3GboMXoGb3JTvGb3JboGb3Mn6Gb3Qb8GgDXLjGgMnAUGgrDloGgrHX4GgrSToGgvAXrGgvAZvGgvFbrGgvLl3GgvMnvGnDnLXGnrATrGnrMboGnuLl3HTATMnHTAgCnHTCTCTHTrGTvHTrHTvHTrJX8HTrLl8HTrMT8HTrMgoHTrOTrHTuOn3HTvAZrHTvDTvHTvGboHTvJU8HTvLl3HTvMXrHTvQb4HT4GT6HT4JT8HT4Jb#HT8Al3HT8GZrHT8GgrHT8HX4HT8Jb8HT8JnoHT8LTrHT8LgvHT8SToHT8SV8HUoJUoHUoJX8HUoLnrHXrLZoHXvAl3HX3LnrHX4FkvHX4LhrHX4MXoHX4OnoHZrAZ8HZrDb8HZrGZ8HZrJnrHZvGZ8HZvLnvHZ8JnvHZ8LhrHbCXJlHbMTAnHboJl4HbpLl3HbrJX8HbrLnrHbrMnvHbvRYrHgoSTrHgrFV8HgrGZ8HgrJXoHgrRnvHgvBb!HgvGTrHgvHX4HgvHn!HgvLTrHgvSU8HnDnLbHnFbJbHnvDn8Hn6GgvHn!BTvJTCTLnJTQgFnJTrAnvJTrLX4JTrOUoJTvFn3JTvLnrJTvNToJT3AgoJT3Jn4JT3LhvJT3ObrJT8AcrJT8Al3JT8JT8JT8JnoJT8LX4JT8LnrJT8MX3JT8Rg3JT8Sc8JUoBTvJU8AToJU8GZ8JU8GgvJU8JTrJU8JXrJU8JnrJU8LnvJU8ScvJXHnJlJXrGgvJXrJU8JXrLhrJXrMT8JXrMXrJXrQUoJXvCTvJXvGZ8JXvGgrJXvQT8JX8Ab8JX8DT8JX8GZ8JX8HZvJX8LnrJX8MT8JX8MXoJX8MnvJX8ST3JYGnCTJbAkGbJbCTAnJbLTAcJboDT3JboLb6JbrAnvJbrCn3JbrDl8JbrGboJbrIZoJbrJnvJbrMnvJbrQb4Jb8RZrJeAbAnJgJnFbJgScAnJgrATrJgvHZ8JgvMn4JlJlFbJlLiQXJlLjOnJlRbOlJlvNXoJlvRl3Jl4AcrJl8AUoJl8MnrJnFnMlJnHgGbJnoDT8JnoFV8JnoGgvJnoIT8JnoQToJnoRg3JnrCZ3JnrGgrJnrHTvJnrLf8JnrOX8JnvAT3JnvFZoJnvGT8JnvJl4JnvMT8JnvMX8JnvOXrJnvPX6JnvSX3JnvSZrJn3MT8Jn3MX8Jn3RTrLTATKnLTJnLTLTMXKnLTRTQlLToGb8LTrAZ8LTrCZ8LTrDb8LTrHT8LT3PX6LT4FZoLT$CTvLT$GgrLUvHX3LVoATrLVoAgoLVoJboLVoMX3LVoRg3LV8CZ3LV8FZoLV8GTvLXrDXoLXrFbrLXvAgvLXvFlrLXvLl3LXvRn6LX4Mb8LX8GT8LYCXMnLYrMnrLZoSTvLZrAZvLZrAloLZrFToLZrJXvLZrJboLZrJl4LZrLnrLZrMT8LZrOgvLZrRnvLZrST4LZvMX8LZvSlvLZ8AgoLZ8CT3LZ8JT8LZ8LV8LZ8LZoLZ8Lg8LZ8SV8LZ8SbrLZ$HT8LZ$Mn4La6CTvLbFbMnLbRYFTLbSnFZLboJT8LbrAT9LbrGb3LbrQb8LcrJX8LcrMXrLerHTvLerJbrLerNboLgrDb8LgrGZ8LgrHTrLgrMXrLgrSU8LgvJTrLgvLl3Lg6Ll3LhrLnrLhrMT8LhvAl4LiLnQXLkoAgrLkoJT8LkoJn4LlrSU8Ll3FZoLl3HTrLl3JX8Ll3JnoLl3LToLmLeFbLnDUFbLnLVAnLnrATrLnrAZoLnrAb8LnrAlrLnrGgvLnrJU8LnrLZrLnrLhrLnrMb8LnrOXrLnrSZ8LnvAb4LnvDTrLnvDl8LnvHTrLnvHbrLnvJT8LnvJU8LnvJbrLnvLhvLnvMX8LnvMb8LnvNnoLnvSU8Ln3Al3Ln4FZoLn4GT6Ln4JgvLn4LhrLn4MT8Ln4SToMToCZrMToJX8MToLX4MToLf8MToRg3MTrEloMTvGb6MT3BTrMT3Lb6MT8AcrMT8AgrMT8GZrMT8JnoMT8LnrMT8MX3MUOUAnMXAbFnMXoAloMXoJX8MXoLf8MXoLl8MXrAb8MXrDTvMXrGT8MXrGgrMXrHTrMXrLf8MXrMU8MXrOXvMXrQb8MXvGT8MXvHTrMXvLVoMX3AX3MX3Jn3MX3LhrMX3MX3MX4AlrMX4OboMX8GTvMX8GZrMX8GgrMX8JT8MX8JX8MX8LhrMX8MT8MYDUFbMYMgDbMbGnFfMbvLX4MbvLl3Mb8Mb8Mb8ST4MgGXCnMg8ATrMg8AgoMg8CZrMg8DTrMg8DboMg8HTrMg8JgrMg8LT8MloJXoMl8AhrMl8JT8MnLgAUMnoJXrMnoLX4MnoLhrMnoMT8MnrAl4MnrDb8MnrOTvMnrOgvMnrQb8MnrSU8MnvGgrMnvHZ8Mn3MToMn4DTrMn4LTrMn4Mg8NnBXAnOTFTFnOToAToOTrGgvOTrJX8OT3JXoOT6MTrOT8GgrOT8HTpOT8MToOUoHT8OUoJT8OUoLn3OXrAgoOXrDg8OXrMT8OXvSToOX6CTvOX8CZrOX8OgrOb6HgvOb8AToOb8MT8OcvLZ8OgvAlrOgvHTvOgvJTrOgvJnrOgvLZrOgvLn4OgvMT8OgvRTrOg8AZoOg8DbvOnrOXoOnvJn4OnvLhvOnvRTrOn3GgoOn3JnvOn6JbvOn8OTrPTGYFTPbBnFnPbGnDnPgDYQTPlrAnvPlrETvPlrLnvPlrMXvPlvFX4QTMTAnQTrJU8QYCnJlQYJlQlQbGTQbQb8JnrQb8LZoQb8LnvQb8MT8Qb8Ml8Qb8ST4QloAl4QloHZvQloJX8QloMn8QnJZOlRTrAZvRTrDTrRTvJn4RTvLhvRT4Jb8RZrAZrRZ8AkrRZ8JU8RZ8LV8RZ8LnvRbJlQXRg3GboRg3MnvRg8AZ8Rg8JboRg8Jl4RnLTCbRnvFl3RnvQb8SToAl4SToCZrSToFZoSToHXrSToJU8SToJgvSToJl4SToLhrSToMX3STrAlvSTrCT9STrCgrSTrGgrSTrHXrSTrHboSTrJnoSTrNboSTvLnrST4AZoST8Ab8ST8JT8SUoJn3SU6HZ#SU6JTvSU8Db8SU8HboSU8LgrSV8JT8SZrAcrSZrAl3SZrJT8SZrJnvSZrMT8SZvLUoSZ4FZoSZ8JnoSZ8RZrScoLnrScoMT8ScoMX8ScrAT4ScrAZ8ScrLZ8ScrLkvScvDb8ScvLf8ScvNToSgrFZrShvKnrSloHUoSloLnrSlrMXoSl8HgrSmrJUoSn3BX6", "ATFlOn3ATLgrDYAT4MTAnAT8LTMnAYJnRTrAbGgJnrAbLV8LnAbvNTAnAeFbLg3AgOYMXoAlQbFboAnDboAfAnJgoJTBToDgAnBUJbAl3BboDUAnCTDlvLnCTFTrSnCYoQTLnDTwAbAnDUDTrSnDUHgHgrDX8LXFnDbJXAcrETvLTLnGTFTQbrGTMnGToGT3DUFbGUJlPX3GbQg8LnGboJbFnGb3GgAYGgAg8ScGgMbAXrGgvAbAnGnJTLnvGnvATFgHTDT6ATHTrDlJnHYLnMn8HZrSbJTHZ8LTFnHbFTJUoHgSeMT8HgrLjAnHgvAbAnHlFUrDlHnDgvAnHnHTFT3HnQTGnrJTAaMXvJTGbCn3JTOgrAnJXvAXMnJbMg8SnJbMnRg3Jb8LTMnJnAl3OnJnGYrQlJnJlQY3LTDlCn3LTJjLg3LTLgvFXLTMg3GTLV8HUOgLXFZLg3LXNXrMnLX8QXFnLX9AlMYLYLXPXrLZAbJU8LZDUJU8LZMXrSnLZ$AgFnLaPXrDULbFYrMnLbMn8LXLboJgJgLeFbLg3LgLZrSnLgOYAgoLhrRnJlLkCTrSnLkOnLhrLnFX%AYLnFZoJXLnHTvJbLnLloAbMTATLf8MTHgJn3MTMXrAXMT3MTFnMUITvFnMXFX%AYMXMXvFbMXrFTDbMYAcMX3MbLf8SnMb8JbFnMgMXrMTMgvAXFnMgvGgCmMnAloSnMnFnJTrOXvMXSnOX8HTMnObJT8ScObLZFl3ObMXCZoPTLgrQXPUFnoQXPU3RXJlPX3RkQXPbrJXQlPlrJbFnQUAhrDbQXGnCXvQYLnHlvQbLfLnvRTOgvJbRXJYrQlRYLnrQlRbLnrQlRlFT8JlRlFnrQXSTClCn3STHTrAnSTLZQlrSTMnGTrSToHgGbSTrGTDnSTvGXCnST3HgFbSU3HXAXSbAnJn3SbFT8LnScLfLnv", "AT3JgJX8AT8FZoSnAT8JgFV8AT8LhrDbAZ8JT8DbAb8GgLhrAb8SkLnvAe8MT8SnAlMYJXLVAl3GYDTvAl3LfLnvBUDTvLl3CTOn3HTrCT3DUGgrCU8MT8AbCbFTrJUoCgrDb8MTDTLV8JX8DTLnLXQlDT8LZrSnDUQb8FZ8DUST4JnvDb8ScOUoDj6GbJl4GTLfCYMlGToAXvFnGboAXvLnGgAcrJn3GgvFnSToGnLf8JnvGn#HTDToHTLnFXJlHTvATFToHTvHTDToHTvMTAgoHT3STClvHT4AlFl6HT8HTDToHUoDgJTrHUoScMX3HbRZrMXoHboJg8LTHgDb8JTrHgMToLf8HgvLnLnoHnHn3HT4Hn6MgvAnJTJU8ScvJT3AaQT8JT8HTrAnJXrRg8AnJbAloMXoJbrATFToJbvMnoSnJgDb6GgvJgDb8MXoJgSX3JU8JguATFToJlPYLnQlJlQkDnLbJlQlFYJlJl8Lf8OTJnCTFnLbJnLTHXMnJnLXGXCnJnoFfRg3JnrMYRg3Jn3HgFl3KT8Dg8LnLTRlFnPTLTvPbLbvLVoSbrCZLXMY6HT3LXNU7DlrLXNXDTATLX8DX8LnLZDb8JU8LZMnoLhrLZSToJU8LZrLaLnrLZvJn3SnLZ8LhrSnLaJnoMT8LbFlrHTvLbrFTLnrLbvATLlvLb6OTFn3LcLnJZOlLeAT6Mn4LeJT3ObrLg6LXFlrLhrJg8LnLhvDlPX4LhvLfLnvLj6JTFT3LnFbrMXoLnQluCTvLnrQXCY6LnvLfLnvLnvMgLnvLnvSeLf8MTMbrJn3MT3JgST3MT8AnATrMT8LULnrMUMToCZrMUScvLf8MXoDT8SnMX6ATFToMX8AXMT8MX8FkMT8MX8HTrDUMX8ScoSnMYJT6CTvMgAcrMXoMg8SToAfMlvAXLg3MnFl3AnvOT3AnFl3OUoATHT8OU3RnLXrOXrOXrSnObPbvFn6Og8HgrSnOg8OX8DbPTvAgoJgPU3RYLnrPXrDnJZrPb8CTGgvPlrLTDlvPlvFUJnoQUvFXrQlQeMnoAl3QlrQlrSnRTFTrJUoSTDlLiLXSTFg6HT3STJgoMn4STrFTJTrSTrLZFl3ST4FnMXoSUrDlHUoScvHTvSnSfLkvMXo", "AUoAcrMXoAZ8HboAg8AbOg6ATFgAg8AloMXoAl3AT8JTrAl8MX8MXoCT3SToJU8Cl8Db8MXoDT8HgrATrDboOT8MXoGTOTrATMnGT8LhrAZ8GnvFnGnQXHToGgvAcrHTvAXvLl3HbrAZoMXoHgBlFXLg3HgMnFXrSnHgrSb8JUoHn6HT8LgvITvATrJUoJUoLZrRnvJU8HT8Jb8JXvFX8QT8JXvLToJTrJYrQnGnQXJgrJnoATrJnoJU8ScvJnvMnvMXoLTCTLgrJXLTJlRTvQlLbRnJlQYvLbrMb8LnvLbvFn3RnoLdCVSTGZrLeSTvGXCnLg3MnoLn3MToLlrETvMT8SToAl3MbrDU6GTvMb8LX4LhrPlrLXGXCnSToLf8Rg3STrDb8LTrSTvLTHXMnSb3RYLnMnSgOg6ATFg", "HUDlGnrQXrJTrHgLnrAcJYMb8DULc8LTvFgGnCk3Mg8JbAnLX4QYvFYHnMXrRUoJnGnvFnRlvFTJlQnoSTrBXHXrLYSUJgLfoMT8Se8DTrHbDb", "AbDl8SToJU8An3RbAb8ST8DUSTrGnrAgoLbFU6Db8LTrMg8AaHT8Jb8ObDl8SToJU8Pb3RlvFYoJl"],
				J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

			function G(e) {
				return e >= 40 ? e = e + 168 - 40 : e >= 19 && (e = e + 97 - 19), Object(m.h)([225, 132 + (e >> 6), 128 + (63 & e)])
			}
			let x = null;

			function X(e) {
				if (null == x && (x = [], B.forEach((e, r) => {
						r += 4;
						for (let t = 0; t < e.length; t += r) {
							let o = "";
							for (let n = 0; n < r; n++) o += G(J.indexOf(e[t + n]));
							x.push(o)
						}
					}), x.sort(), "0xf9eddeace9c5d3da9c93cf7d3cd38f6a13ed3affb933259ae865714e8a3ae71a" !== o.a.check(e))) throw x = null, new Error("BIP39 Wordlist for ko (Korean) FAILED")
			}
			class H extends o.a {
				constructor() {
					super("ko")
				}
				getWord(e) {
					return X(this), x[e]
				}
				getWordIndex(e) {
					return X(this), x.indexOf(e)
				}
			}
			const V = new H;
			o.a.register(V);
			const z = "AbacoAbbaglioAbbinatoAbeteAbissoAbolireAbrasivoAbrogatoAccadereAccennoAccusatoAcetoneAchilleAcidoAcquaAcreAcrilicoAcrobataAcutoAdagioAddebitoAddomeAdeguatoAderireAdipeAdottareAdulareAffabileAffettoAffissoAffrantoAforismaAfosoAfricanoAgaveAgenteAgevoleAggancioAgireAgitareAgonismoAgricoloAgrumetoAguzzoAlabardaAlatoAlbatroAlberatoAlboAlbumeAlceAlcolicoAlettoneAlfaAlgebraAlianteAlibiAlimentoAllagatoAllegroAllievoAllodolaAllusivoAlmenoAlogenoAlpacaAlpestreAltalenaAlternoAlticcioAltroveAlunnoAlveoloAlzareAmalgamaAmanitaAmarenaAmbitoAmbratoAmebaAmericaAmetistaAmicoAmmassoAmmendaAmmirareAmmonitoAmoreAmpioAmpliareAmuletoAnacardoAnagrafeAnalistaAnarchiaAnatraAncaAncellaAncoraAndareAndreaAnelloAngeloAngolareAngustoAnimaAnnegareAnnidatoAnnoAnnuncioAnonimoAnticipoAnziApaticoAperturaApodeApparireAppetitoAppoggioApprodoAppuntoAprileArabicaArachideAragostaAraldicaArancioAraturaArazzoArbitroArchivioArditoArenileArgentoArgineArgutoAriaArmoniaArneseArredatoArringaArrostoArsenicoArsoArteficeArzilloAsciuttoAscoltoAsepsiAsetticoAsfaltoAsinoAsolaAspiratoAsproAssaggioAsseAssolutoAssurdoAstaAstenutoAsticeAstrattoAtavicoAteismoAtomicoAtonoAttesaAttivareAttornoAttritoAttualeAusilioAustriaAutistaAutonomoAutunnoAvanzatoAvereAvvenireAvvisoAvvolgereAzioneAzotoAzzimoAzzurroBabeleBaccanoBacinoBacoBadessaBadilataBagnatoBaitaBalconeBaldoBalenaBallataBalzanoBambinoBandireBaraondaBarbaroBarcaBaritonoBarlumeBaroccoBasilicoBassoBatostaBattutoBauleBavaBavosaBeccoBeffaBelgioBelvaBendaBenevoleBenignoBenzinaBereBerlinaBetaBibitaBiciBidoneBifidoBigaBilanciaBimboBinocoloBiologoBipedeBipolareBirbanteBirraBiscottoBisestoBisnonnoBisonteBisturiBizzarroBlandoBlattaBollitoBonificoBordoBoscoBotanicoBottinoBozzoloBraccioBradipoBramaBrancaBravuraBretellaBrevettoBrezzaBrigliaBrillanteBrindareBroccoloBrodoBronzinaBrulloBrunoBubboneBucaBudinoBuffoneBuioBulboBuonoBurloneBurrascaBussolaBustaCadettoCaducoCalamaroCalcoloCalesseCalibroCalmoCaloriaCambusaCamerataCamiciaCamminoCamolaCampaleCanapaCandelaCaneCaninoCanottoCantinaCapaceCapelloCapitoloCapogiroCapperoCapraCapsulaCarapaceCarcassaCardoCarismaCarovanaCarrettoCartolinaCasaccioCascataCasermaCasoCassoneCastelloCasualeCatastaCatenaCatrameCautoCavilloCedibileCedrataCefaloCelebreCellulareCenaCenoneCentesimoCeramicaCercareCertoCerumeCervelloCesoiaCespoCetoChelaChiaroChiccaChiedereChimeraChinaChirurgoChitarraCiaoCiclismoCifrareCignoCilindroCiottoloCircaCirrosiCitricoCittadinoCiuffoCivettaCivileClassicoClinicaCloroCoccoCodardoCodiceCoerenteCognomeCollareColmatoColoreColposoColtivatoColzaComaCometaCommandoComodoComputerComuneConcisoCondurreConfermaCongelareConiugeConnessoConoscereConsumoContinuoConvegnoCopertoCopioneCoppiaCopricapoCorazzaCordataCoricatoCorniceCorollaCorpoCorredoCorsiaCorteseCosmicoCostanteCotturaCovatoCratereCravattaCreatoCredereCremosoCrescitaCretaCricetoCrinaleCrisiCriticoCroceCronacaCrostataCrucialeCruscaCucireCuculoCuginoCullatoCupolaCuratoreCursoreCurvoCuscinoCustodeDadoDainoDalmataDamerinoDanielaDannosoDanzareDatatoDavantiDavveroDebuttoDecennioDecisoDeclinoDecolloDecretoDedicatoDefinitoDeformeDegnoDelegareDelfinoDelirioDeltaDemenzaDenotatoDentroDepositoDerapataDerivareDerogaDescrittoDesertoDesiderioDesumereDetersivoDevotoDiametroDicembreDiedroDifesoDiffusoDigerireDigitaleDiluvioDinamicoDinnanziDipintoDiplomaDipoloDiradareDireDirottoDirupoDisagioDiscretoDisfareDisgeloDispostoDistanzaDisumanoDitoDivanoDiveltoDividereDivoratoDobloneDocenteDoganaleDogmaDolceDomatoDomenicaDominareDondoloDonoDormireDoteDottoreDovutoDozzinaDragoDruidoDubbioDubitareDucaleDunaDuomoDupliceDuraturoEbanoEccessoEccoEclissiEconomiaEderaEdicolaEdileEditoriaEducareEgemoniaEgliEgoismoEgregioElaboratoElargireEleganteElencatoElettoElevareElficoElicaElmoElsaElusoEmanatoEmblemaEmessoEmiroEmotivoEmozioneEmpiricoEmuloEndemicoEnduroEnergiaEnfasiEnotecaEntrareEnzimaEpatiteEpilogoEpisodioEpocaleEppureEquatoreErarioErbaErbosoEredeEremitaErigereErmeticoEroeErosivoErranteEsagonoEsameEsanimeEsaudireEscaEsempioEsercitoEsibitoEsigenteEsistereEsitoEsofagoEsortatoEsosoEspansoEspressoEssenzaEssoEstesoEstimareEstoniaEstrosoEsultareEtilicoEtnicoEtruscoEttoEuclideoEuropaEvasoEvidenzaEvitatoEvolutoEvvivaFabbricaFaccendaFachiroFalcoFamigliaFanaleFanfaraFangoFantasmaFareFarfallaFarinosoFarmacoFasciaFastosoFasulloFaticareFatoFavolosoFebbreFecolaFedeFegatoFelpaFeltroFemminaFendereFenomenoFermentoFerroFertileFessuraFestivoFettaFeudoFiabaFiduciaFifaFiguratoFiloFinanzaFinestraFinireFioreFiscaleFisicoFiumeFlaconeFlamencoFleboFlemmaFloridoFluenteFluoroFobicoFocacciaFocosoFoderatoFoglioFolataFolcloreFolgoreFondenteFoneticoFoniaFontanaForbitoForchettaForestaFormicaFornaioForoFortezzaForzareFosfatoFossoFracassoFranaFrassinoFratelloFreccettaFrenataFrescoFrigoFrollinoFrondeFrugaleFruttaFucilataFucsiaFuggenteFulmineFulvoFumanteFumettoFumosoFuneFunzioneFuocoFurboFurgoneFuroreFusoFutileGabbianoGaffeGalateoGallinaGaloppoGamberoGammaGaranziaGarboGarofanoGarzoneGasdottoGasolioGastricoGattoGaudioGazeboGazzellaGecoGelatinaGelsoGemelloGemmatoGeneGenitoreGennaioGenotipoGergoGhepardoGhiaccioGhisaGialloGildaGineproGiocareGioielloGiornoGioveGiratoGironeGittataGiudizioGiuratoGiustoGlobuloGlutineGnomoGobbaGolfGomitoGommoneGonfioGonnaGovernoGracileGradoGraficoGrammoGrandeGrattareGravosoGraziaGrecaGreggeGrifoneGrigioGrinzaGrottaGruppoGuadagnoGuaioGuantoGuardareGufoGuidareIbernatoIconaIdenticoIdillioIdoloIdraIdricoIdrogenoIgieneIgnaroIgnoratoIlareIllesoIllogicoIlludereImballoImbevutoImboccoImbutoImmaneImmersoImmolatoImpaccoImpetoImpiegoImportoImprontaInalareInarcareInattivoIncantoIncendioInchinoIncisivoInclusoIncontroIncrocioIncuboIndagineIndiaIndoleIneditoInfattiInfilareInflittoIngaggioIngegnoIngleseIngordoIngrossoInnescoInodoreInoltrareInondatoInsanoInsettoInsiemeInsonniaInsulinaIntasatoInteroIntonacoIntuitoInumidireInvalidoInveceInvitoIperboleIpnoticoIpotesiIppicaIrideIrlandaIronicoIrrigatoIrrorareIsolatoIsotopoIstericoIstitutoIstriceItaliaIterareLabbroLabirintoLaccaLaceratoLacrimaLacunaLaddoveLagoLampoLancettaLanternaLardosoLargaLaringeLastraLatenzaLatinoLattugaLavagnaLavoroLegaleLeggeroLemboLentezzaLenzaLeoneLepreLesivoLessatoLestoLetteraleLevaLevigatoLiberoLidoLievitoLillaLimaturaLimitareLimpidoLineareLinguaLiquidoLiraLiricaLiscaLiteLitigioLivreaLocandaLodeLogicaLombareLondraLongevoLoquaceLorenzoLotoLotteriaLuceLucidatoLumacaLuminosoLungoLupoLuppoloLusingaLussoLuttoMacabroMacchinaMaceroMacinatoMadamaMagicoMagliaMagneteMagroMaiolicaMalafedeMalgradoMalintesoMalsanoMaltoMalumoreManaManciaMandorlaMangiareManifestoMannaroManovraMansardaMantideManubrioMappaMaratonaMarcireMarettaMarmoMarsupioMascheraMassaiaMastinoMaterassoMatricolaMattoneMaturoMazurcaMeandroMeccanicoMecenateMedesimoMeditareMegaMelassaMelisMelodiaMeningeMenoMensolaMercurioMerendaMerloMeschinoMeseMessereMestoloMetalloMetodoMettereMiagolareMicaMicelioMicheleMicroboMidolloMieleMiglioreMilanoMiliteMimosaMineraleMiniMinoreMirinoMirtilloMiscelaMissivaMistoMisurareMitezzaMitigareMitraMittenteMnemonicoModelloModificaModuloMoganoMogioMoleMolossoMonasteroMoncoMondinaMonetarioMonileMonotonoMonsoneMontatoMonvisoMoraMordereMorsicatoMostroMotivatoMotosegaMottoMovenzaMovimentoMozzoMuccaMucosaMuffaMughettoMugnaioMulattoMulinelloMultiploMummiaMuntoMuovereMuraleMusaMuscoloMusicaMutevoleMutoNababboNaftaNanometroNarcisoNariceNarratoNascereNastrareNaturaleNauticaNaviglioNebulosaNecrosiNegativoNegozioNemmenoNeofitaNerettoNervoNessunoNettunoNeutraleNeveNevroticoNicchiaNinfaNitidoNobileNocivoNodoNomeNominaNordicoNormaleNorvegeseNostranoNotareNotiziaNotturnoNovellaNucleoNullaNumeroNuovoNutrireNuvolaNuzialeOasiObbedireObbligoObeliscoOblioOboloObsoletoOccasioneOcchioOccidenteOccorrereOccultareOcraOculatoOdiernoOdorareOffertaOffrireOffuscatoOggettoOggiOgnunoOlandeseOlfattoOliatoOlivaOlogrammaOltreOmaggioOmbelicoOmbraOmegaOmissioneOndosoOnereOniceOnnivoroOnorevoleOntaOperatoOpinioneOppostoOracoloOrafoOrdineOrecchinoOreficeOrfanoOrganicoOrigineOrizzonteOrmaOrmeggioOrnativoOrologioOrrendoOrribileOrtensiaOrticaOrzataOrzoOsareOscurareOsmosiOspedaleOspiteOssaOssidareOstacoloOsteOtiteOtreOttagonoOttimoOttobreOvaleOvestOvinoOviparoOvocitoOvunqueOvviareOzioPacchettoPacePacificoPadellaPadronePaesePagaPaginaPalazzinaPalesarePallidoPaloPaludePandoroPannelloPaoloPaonazzoPapricaParabolaParcellaParerePargoloPariParlatoParolaPartireParvenzaParzialePassivoPasticcaPataccaPatologiaPattumePavonePeccatoPedalarePedonalePeggioPelosoPenarePendicePenisolaPennutoPenombraPensarePentolaPepePepitaPerbenePercorsoPerdonatoPerforarePergamenaPeriodoPermessoPernoPerplessoPersuasoPertugioPervasoPesatorePesistaPesoPestiferoPetaloPettinePetulantePezzoPiacerePiantaPiattinoPiccinoPicozzaPiegaPietraPifferoPigiamaPigolioPigroPilaPiliferoPillolaPilotaPimpantePinetaPinnaPinoloPioggiaPiomboPiramidePireticoPiritePirolisiPitonePizzicoPlaceboPlanarePlasmaPlatanoPlenarioPochezzaPoderosoPodismoPoesiaPoggiarePolentaPoligonoPollicePolmonitePolpettaPolsoPoltronaPolverePomicePomodoroPontePopolosoPorfidoPorosoPorporaPorrePortataPosaPositivoPossessoPostulatoPotassioPoterePranzoPrassiPraticaPreclusoPredicaPrefissoPregiatoPrelievoPremerePrenotarePreparatoPresenzaPretestoPrevalsoPrimaPrincipePrivatoProblemaProcuraProdurreProfumoProgettoProlungaPromessaPronomePropostaProrogaProtesoProvaPrudentePrugnaPruritoPsichePubblicoPudicaPugilatoPugnoPulcePulitoPulsantePuntarePupazzoPupillaPuroQuadroQualcosaQuasiQuerelaQuotaRaccoltoRaddoppioRadicaleRadunatoRafficaRagazzoRagioneRagnoRamarroRamingoRamoRandagioRantolareRapatoRapinaRappresoRasaturaRaschiatoRasenteRassegnaRastrelloRataRavvedutoRealeRecepireRecintoReclutaReconditoRecuperoRedditoRedimereRegalatoRegistroRegolaRegressoRelazioneRemareRemotoRennaReplicaReprimereReputareResaResidenteResponsoRestauroReteRetinaRetoricaRettificaRevocatoRiassuntoRibadireRibelleRibrezzoRicaricaRiccoRicevereRiciclatoRicordoRicredutoRidicoloRidurreRifasareRiflessoRiformaRifugioRigareRigettatoRighelloRilassatoRilevatoRimanereRimbalzoRimedioRimorchioRinascitaRincaroRinforzoRinnovoRinomatoRinsavitoRintoccoRinunciaRinvenireRiparatoRipetutoRipienoRiportareRipresaRipulireRisataRischioRiservaRisibileRisoRispettoRistoroRisultatoRisvoltoRitardoRitegnoRitmicoRitrovoRiunioneRivaRiversoRivincitaRivoltoRizomaRobaRoboticoRobustoRocciaRocoRodaggioRodereRoditoreRogitoRollioRomanticoRompereRonzioRosolareRospoRotanteRotondoRotulaRovescioRubizzoRubricaRugaRullinoRumineRumorosoRuoloRupeRussareRusticoSabatoSabbiareSabotatoSagomaSalassoSaldaturaSalgemmaSalivareSalmoneSaloneSaltareSalutoSalvoSapereSapidoSaporitoSaracenoSarcasmoSartoSassosoSatelliteSatiraSatolloSaturnoSavanaSavioSaziatoSbadiglioSbalzoSbancatoSbarraSbattereSbavareSbendareSbirciareSbloccatoSbocciatoSbrinareSbruffoneSbuffareScabrosoScadenzaScalaScambiareScandaloScapolaScarsoScatenareScavatoSceltoScenicoScettroSchedaSchienaSciarpaScienzaScindereScippoSciroppoScivoloSclerareScodellaScolpitoScompartoSconfortoScoprireScortaScossoneScozzeseScribaScrollareScrutinioScuderiaScultoreScuolaScuroScusareSdebitareSdoganareSeccaturaSecondoSedanoSeggiolaSegnalatoSegregatoSeguitoSelciatoSelettivoSellaSelvaggioSemaforoSembrareSemeSeminatoSempreSensoSentireSepoltoSequenzaSerataSerbatoSerenoSerioSerpenteSerraglioServireSestinaSetolaSettimanaSfaceloSfaldareSfamatoSfarzosoSfaticatoSferaSfidaSfilatoSfingeSfocatoSfoderareSfogoSfoltireSforzatoSfrattoSfruttatoSfuggitoSfumareSfusoSgabelloSgarbatoSgonfiareSgorbioSgrassatoSguardoSibiloSiccomeSierraSiglaSignoreSilenzioSillabaSimboloSimpaticoSimulatoSinfoniaSingoloSinistroSinoSintesiSinusoideSiparioSismaSistoleSituatoSlittaSlogaturaSlovenoSmarritoSmemoratoSmentitoSmeraldoSmilzoSmontareSmottatoSmussatoSnellireSnervatoSnodoSobbalzoSobrioSoccorsoSocialeSodaleSoffittoSognoSoldatoSolenneSolidoSollazzoSoloSolubileSolventeSomaticoSommaSondaSonettoSonniferoSopireSoppesoSopraSorgereSorpassoSorrisoSorsoSorteggioSorvolatoSospiroSostaSottileSpadaSpallaSpargereSpatolaSpaventoSpazzolaSpecieSpedireSpegnereSpelaturaSperanzaSpessoreSpettraleSpezzatoSpiaSpigolosoSpillatoSpinosoSpiraleSplendidoSportivoSposoSprangaSprecareSpronatoSpruzzoSpuntinoSquilloSradicareSrotolatoStabileStaccoStaffaStagnareStampatoStantioStarnutoStaseraStatutoSteloSteppaSterzoStilettoStimaStirpeStivaleStizzosoStonatoStoricoStrappoStregatoStriduloStrozzareStruttoStuccareStufoStupendoSubentroSuccosoSudoreSuggeritoSugoSultanoSuonareSuperboSupportoSurgelatoSurrogatoSussurroSuturaSvagareSvedeseSveglioSvelareSvenutoSveziaSviluppoSvistaSvizzeraSvoltaSvuotareTabaccoTabulatoTacciareTaciturnoTaleTalismanoTamponeTanninoTaraTardivoTargatoTariffaTarpareTartarugaTastoTatticoTavernaTavolataTazzaTecaTecnicoTelefonoTemerarioTempoTemutoTendoneTeneroTensioneTentacoloTeoremaTermeTerrazzoTerzettoTesiTesseratoTestatoTetroTettoiaTifareTigellaTimbroTintoTipicoTipografoTiraggioTiroTitanioTitoloTitubanteTizioTizzoneToccareTollerareToltoTombolaTomoTonfoTonsillaTopazioTopologiaToppaTorbaTornareTorroneTortoraToscanoTossireTostaturaTotanoTraboccoTracheaTrafilaTragediaTralcioTramontoTransitoTrapanoTrarreTraslocoTrattatoTraveTrecciaTremolioTrespoloTributoTrichecoTrifoglioTrilloTrinceaTrioTristezzaTrituratoTrivellaTrombaTronoTroppoTrottolaTrovareTruccatoTubaturaTuffatoTulipanoTumultoTunisiaTurbareTurchinoTutaTutelaUbicatoUccelloUccisoreUdireUditivoUffaUfficioUgualeUlisseUltimatoUmanoUmileUmorismoUncinettoUngereUnghereseUnicornoUnificatoUnisonoUnitarioUnteUovoUpupaUraganoUrgenzaUrloUsanzaUsatoUscitoUsignoloUsuraioUtensileUtilizzoUtopiaVacanteVaccinatoVagabondoVagliatoValangaValgoValicoVallettaValorosoValutareValvolaVampataVangareVanitosoVanoVantaggioVanveraVaporeVaranoVarcatoVarianteVascaVedettaVedovaVedutoVegetaleVeicoloVelcroVelinaVellutoVeloceVenatoVendemmiaVentoVeraceVerbaleVergognaVerificaVeroVerrucaVerticaleVescicaVessilloVestaleVeteranoVetrinaVetustoViandanteVibranteVicendaVichingoVicinanzaVidimareVigiliaVignetoVigoreVileVillanoViminiVincitoreViolaViperaVirgolaVirologoVirulentoViscosoVisioneVispoVissutoVisuraVitaVitelloVittimaVivandaVividoViziareVoceVogaVolatileVolereVolpeVoragineVulcanoZampognaZannaZappatoZatteraZavorraZefiroZelanteZeloZenzeroZerbinoZibettoZincoZirconeZittoZollaZoticoZuccheroZufoloZuluZuppa";
			let K = null;

			function Z(e) {
				if (null == K && (K = z.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x5c1362d88fd4cf614a96f3234941d29f7d37c08c5292fde03bf62c2db6ff7620" !== o.a.check(e))) throw K = null, new Error("BIP39 Wordlist for it (Italian) FAILED")
			}
			class W extends o.a {
				constructor() {
					super("it")
				}
				getWord(e) {
					return Z(this), K[e]
				}
				getWordIndex(e) {
					return Z(this), K.indexOf(e)
				}
			}
			const Q = new W;
			o.a.register(Q);
			const q = "}aE#4A=Yv&co#4N#6G=cJ&SM#66|/Z#4t&kn~46#4K~4q%b9=IR#7l,mB#7W_X2*dl}Uo~7s}Uf&Iw#9c&cw~6O&H6&wx&IG%v5=IQ~8a&Pv#47$PR&50%Ko&QM&3l#5f,D9#4L|/H&tQ;v0~6n]nN<di,AM=W5%QO&ka&ua,hM^tm=zV=JA=wR&+X]7P&NB#4J#5L|/b[dA}tJ<Do&6m&u2[U1&Kb.HM&mC=w0&MW<rY,Hq#6M}QG,13&wP}Jp]Ow%ue&Kg<HP<D9~4k~9T&I2_c6$9T#9/[C5~7O~4a=cs&O7=KK=An&l9$6U$8A&uD&QI|/Y&bg}Ux&F2#6b}E2&JN&kW&kp=U/&bb=Xl<Cj}k+~5J#6L&5z&9i}b4&Fo,ho(X0_g3~4O$Fz&QE<HN=Ww]6/%GF-Vw=tj&/D&PN#9g=YO}cL&Of&PI~5I&Ip=vU=IW#9G;0o-wU}ss&QR<BT&R9=tk$PY_dh&Pq-yh]7T,nj.Xu=EP&76=cI&Fs*Xg}z7$Gb&+I=DF,AF=cA}rL#7j=Dz&3y<Aa$52=PQ}b0(iY$Fa}oL&xV#6U=ec=WZ,xh%RY<dp#9N&Fl&44=WH*A7=sh&TB&8P=07;u+&PK}uh}J5#72)V/=xC,AB$k0&f6;1E|+5=1B,3v]6n&wR%b+&xx]7f=Ol}fl;+D^wG]7E;nB;uh^Ir&l5=JL,nS=cf=g5;u6|/Q$Gc=MH%Hg#5d%M6^86=U+$Gz,l/,ir^5y&Ba&/F-IY&FI&be%IZ#77&PW_Nu$kE(Yf&NX]7Z,Jy&FJ(Xo&Nz#/d=y7&MX<Ag}Z+;nE]Dt(iG#4D=13&Pj~4c%v8&Zo%OL&/X#4W<HR&ie~6J_1O(Y2=y5=Ad*cv_eB#6k&PX:BU#7A;uk&Ft&Fx_dD=U2;vB=U5=4F}+O&GN.HH:9s=b0%NV(jO&IH=JT}Z9=VZ<Af,Kx^4m&uJ%c6,6r;9m#+L}cf%Kh&F3~4H=vP}bu,Hz|++,1w]nv}k6;uu$jw*Kl*WX&uM[x7&Fr[m7$NO&QN]hu=JN}nR^8g#/h(ps|KC;vd}xz=V0}p6&FD$G1#7K<bG_4p~8g&cf;u4=tl}+k%5/}fz;uw<cA=u1}gU}VM=LJ=eX&+L&Pr#4U}p2:nC,2K]7H:jF&9x}uX#9O=MB<fz~8X~5m&4D&kN&u5%E/(h7(ZF&VG<de(qM|/e-Wt=3x(a+,/R]f/&ND$Ro&nU}0g=KA%kH&NK$Ke<dS}cB&IX~5g$TN]6m=Uv,Is&Py=Ef%Kz#+/%bi&+A<F4$OG&4C&FL#9V<Zk=2I_eE&6c]nw&kq$HG}y+&A8$P3}OH=XP]70%IS(AJ_gH%GZ&tY&AZ=vb~6y&/r=VI=Wv<Zi=fl=xf&eL}c8}OL=MJ=g8$F7=YT}9u=0+^xC}JH&nL^N0~4T]K2,Cy%OC#6s;vG(AC^xe^cG&MF}Br#9P;wD-7h$O/&xA}Fn^PC]6i]7G&8V$Qs;vl(TB~73~4l<mW&6V=2y&uY&+3)aP}XF;LP&kx$wU=t7;uy<FN&lz)7E=Oo*Y+;wI}9q}le;J6&Ri&4t&Qr#8B=cb&vG=J5|Ql(h5<Yy~4+}QD,Lx=wn%K/&RK=dO&Pw,Q9=co%4u;9u}g0@6a^4I%b0=zo|/c&tX=dQ=OS#+b=yz_AB&wB&Pm=W9$HP_gR=62=AO=ti=hI,oA&jr&dH=tm&b6$P2(x8=zi;nG~7F;05]0n[Ix&3m}rg=Xp=cd&uz]7t;97=cN;vV<jf&FF&F1=6Q&Ik*Kk&P4,2z=fQ]7D&3u,H0=d/}Uw<ZN<7R}Kv;0f$H7,MD]7n$F0#88~9Z%da=by;+T#/u=VF&fO&kr^kf<AB]sU,I5$Ng&Pz;0i&QD&vM=Yl:BM;nJ_xJ]U7&Kf&30,3f|Z9*dC)je_jA&Q4&Kp$NH(Yz#6S&Id%Ib=KX,AD=KV%dP}tW&Pk^+E_Ni=cq,3R}VZ(Si=b+}rv;0j}rZ]uA,/w(Sx&Jv$w9&4d&wE,NJ$Gy=J/]Ls#7k<ZQ<Y/&uj]Ov$PM;v3,2F&+u:up=On&3e,Jv;90=J+&Qm]6q}bK#+d~8Y(h2]hA;99&AS=I/}qB&dQ}yJ-VM}Vl&ui,iB&G3|Dc]7d=eQ%dX%JC_1L~4d^NP;vJ&/1)ZI#7N]9X[bQ&PL=0L(UZ,Lm&kc&IR}n7(iR<AQ<dg=33=vN}ft}au]7I,Ba=x9=dR~6R&Tq=Xi,3d$Nr&Bc}DI&ku&vf]Dn,/F&iD,Ll&Nw=0y&I7=Ls=/A&tU=Qe}Ua&uk&+F=g4=gh=Vj#+1&Qn}Uy*44#5F,Pc&Rz*Xn=oh=5W;0n_Nf(iE<Y7=vr=Zu]oz#5Z%mI=kN=Bv_Jp(T2;vt_Ml<FS&uI=L/&6P]64$M7}86<bo%QX(SI%IY&VK=Al&Ux;vv;ut*E/%uh<ZE|O3,M2(yc]yu=Wk&tp:Ex}hr,Cl&WE)+Z=8U}I2_4Q,hA_si=iw=OM=tM=yZ%Ia=U7;wT}b+;uo=Za}yS!5x}HD}fb#5O_dA;Nv%uB(yB;01(Sf}Fk;v7}Pt#8v<mZ#7L,/r&Pl~4w&f5=Ph$Fw_LF&8m,bL=yJ&BH}p/*Jn}tU~5Q;wB(h6]Df]8p^+B;E4&Wc=d+;Ea&bw$8C&FN,DM=Yf}mP~5w=fT#6V=mC=Fi=AV}jB&AN}lW}aH#/D)dZ;hl;vE}/7,CJ;31&w8,hj%u9_Js=jJ&4M~8k=TN&eC}nL&uc-wi&lX}dj=Mv=e2#6u=cr$uq$6G]8W}Jb:nm=Yg<b3(UA;vX&6n&xF=KT,jC,De&R8&oY=Zv&oB]7/=Z2&Oa}bf,hh(4h^tZ&72&Nx;D2&xL~5h~40)ZG)h+=OJ&RA]Bv$yB=Oq=df,AQ%Jn}OJ;11,3z&Tl&tj;v+^Hv,Dh(id=s+]7N&N3)9Q~8f,S4=uW=w4&uX,LX&3d]CJ&yp&8x<b2_do&lP=y/<cy_dG=Oi=7R(VH(lt_1T,Iq_AA;12^6T%k6#8K[B1{oO<AU[Bt;1b$9S&Ps<8T=St{bY,jB(Zp&63&Uv$9V,PM]6v&Af}zW[bW_oq}sm}nB&Kq&gC&ff_eq_2m&5F&TI}rf}Gf;Zr_z9;ER&jk}iz_sn<BN~+n&vo=Vi%97|ZR=Wc,WE&6t]6z%85(ly#84=KY)6m_5/=aX,N3}Tm&he&6K]tR_B2-I3;u/&hU&lH<AP=iB&IA=XL;/5&Nh=wv<BH#79=vS=zl<AA=0X_RG}Bw&9p$NW,AX&kP_Lp&/Z(Tc]Mu}hs#6I}5B&cI<bq&H9#6m=K9}vH(Y1(Y0#4B&w6,/9&gG<bE,/O=zb}I4_l8<B/;wL%Qo<HO[Mq=XX}0v&BP&F4(mG}0i}nm,EC=9u{I3,xG&/9=JY*DK&hR)BX=EI=cx=b/{6k}yX%A+&wa}Xb=la;wi^lL;0t}jo&Qb=xg=XB}iO<qo{bR=NV&8f=a0&Jy;0v=uK)HK;vN#6h&jB(h/%ud&NI%wY.X7=Pt}Cu-uL&Gs_hl%mH,tm]78=Lb^Q0#7Y=1u<Bt&+Q=Co_RH,w3;1e}ux<aU;ui}U3&Q5%bt]63&UQ|0l&uL}O7&3o,AV&dm|Nj(Xt*5+(Uu&Hh(p7(UF=VR=Bp^Jl&Hd[ix)9/=Iq]C8<67]66}mB%6f}bb}JI]8T$HA}db=YM&pa=2J}tS&Y0=PS&y4=cX$6E,hX,XP&nR;04,FQ&l0&Vm_Dv#5Y~8Z=Bi%MA]6x=JO:+p,Az&9q,Hj~6/}SD=K1:EJ}nA;Qo#/E]9R,Ie&6X%W3]61&v4=xX_MC=0q;06(Xq=fs}IG}Dv=0l}o7$iZ;9v&LH&DP-7a&OY,SZ,Kz,Cv&dh=fx|Nh,F/~7q=XF&w+;9n&Gw;0h}Z7<7O&JK(S7&LS<AD<ac=wo<Dt&zw%4B=4v#8P;9o~6p*vV=Tm,Or&I6=1q}nY=P0=gq&Bl&Uu,Ch%yb}UY=zh}dh}rl(T4_xk(YA#8R*xH,IN}Jn]7V}C4&Ty}j3]7p=cL=3h&wW%Qv<Z3=f0&RI&+S(ic_zq}oN&/Y=z1;Td=LW=0e=OI(Vc,+b^ju(UL;0r:Za%8v=Rp=zw&58&73&wK}qX]6y&8E)a2}WR=wP^ur&nQ<cH}Re=Aq&wk}Q0&+q=PP,Gc|/d^k5,Fw]8Y}Pg]p3=ju=ed}r5_yf&Cs]7z$/G<Cm&Jp&54_1G_gP_Ll}JZ;0u]k8_7k(Sg]65{9i=LN&Sx&WK,iW&fD&Lk{9a}Em-9c#8N&io=sy]8d&nT&IK(lx#7/$lW(Td<s8~49,3o<7Y=MW(T+_Jr&Wd,iL}Ct=xh&5V;v4&8n%Kx=iF&l2_0B{B+,If(J0,Lv;u8=Kx-vB=HC&vS=Z6&fU&vE^xK;3D=4h=MR#45:Jw;0d}iw=LU}I5=I0]gB*im,K9}GU,1k_4U&Tt=Vs(iX&lU(TF#7y,ZO}oA&m5#5P}PN}Uz=hM<B1&FB<aG,e6~7T<tP(UQ_ZT=wu&F8)aQ]iN,1r_Lo&/g:CD}84{J1_Ki&Na&3n$jz&FE=dc;uv;va}in}ll=fv(h1&3h}fp=Cy}BM(+E~8m}lo%v7=hC(T6$cj=BQ=Bw(DR,2j=Ks,NS|F+;00=fU=70}Mb(YU;+G&m7&hr=Sk%Co]t+(X5_Jw}0r}gC(AS-IP&QK<Z2#8Q$WC]WX}T2&pG_Ka,HC=R4&/N;Z+;ch(C7,D4$3p_Mk&B2$8D=n9%Ky#5z(CT&QJ#7B]DC]gW}nf~5M;Iw#80}Tc_1F#4Z-aC}Hl=ph=fz,/3=aW}JM}nn;DG;vm}wn,4P}T3;wx&RG$u+}zK=0b;+J_Ek{re<aZ=AS}yY#5D]7q,Cp}xN=VP*2C}GZ}aG~+m_Cs=OY#6r]6g<GS}LC(UB=3A=Bo}Jy<c4}Is;1P<AG}Op<Z1}ld}nS=1Z,yM&95&98=CJ(4t:2L$Hk=Zo}Vc;+I}np&N1}9y=iv}CO*7p=jL)px]tb^zh&GS&Vl%v/;vR=14=zJ&49|/f]hF}WG;03=8P}o/&Gg&rp;DB,Kv}Ji&Pb;aA^ll(4j%yt}+K$Ht#4y&hY]7Y<F1,eN}bG(Uh%6Z]t5%G7;+F_RE;it}tL=LS&Da=Xx(S+(4f=8G=yI}cJ}WP=37=jS}pX}hd)fp<A8=Jt~+o$HJ=M6}iX=g9}CS=dv=Cj(mP%Kd,xq|+9&LD(4/=Xm&QP=Lc}LX&fL;+K=Op(lu=Qs.qC:+e&L+=Jj#8w;SL]7S(b+#4I=c1&nG_Lf&uH;+R)ZV<bV%B/,TE&0H&Jq&Ah%OF&Ss(p2,Wv&I3=Wl}Vq;1L&lJ#9b_1H=8r=b8=JH(SZ=hD=J2#7U,/U#/X~6P,FU<eL=jx,mG=hG=CE&PU=Se(qX&LY=X6=y4&tk&QQ&tf=4g&xI}W+&mZ=Dc#7w}Lg;DA;wQ_Kb(cJ=hR%yX&Yb,hw{bX_4X;EP;1W_2M}Uc=b5(YF,CM&Tp^OJ{DD]6s=vF=Yo~8q}XH}Fu%P5(SJ=Qt;MO]s8<F3&B3&8T(Ul-BS*dw&dR<87}/8]62$PZ]Lx<Au}9Q]7c=ja=KR,Go,Us&v6(qk}pG&G2=ev^GM%w4&H4]7F&dv]J6}Ew:9w=sj-ZL}Ym$+h(Ut(Um~4n=Xs(U7%eE=Qc_JR<CA#6t<Fv|/I,IS,EG<F2(Xy$/n<Fa(h9}+9_2o&N4#7X<Zq|+f_Dp=dt&na,Ca=NJ)jY=8C=YG=s6&Q+<DO}D3=xB&R1(lw;Qn<bF(Cu|/B}HV=SS&n7,10&u0]Dm%A6^4Q=WR(TD=Xo<GH,Rj(l8)bP&n/=LM&CF,F5&ml=PJ;0k=LG=tq,Rh,D6@4i=1p&+9=YC%er_Mh;nI;0q=Fw]80=xq=FM$Gv;v6&nc;wK%H2&Kj;vs,AA=YP,66}bI(qR~5U=6q~4b$Ni=K5.X3$So&Iu(p+]8G=Cf=RY(TS_O3(iH&57=fE=Dg_Do#9z#7H;FK{qd_2k%JR}en&gh_z8;Rx}9p<cN_Ne,DO;LN_7o~/p=NF=5Y}gN<ce<C1,QE]Wv=3u<BC}GK]yq}DY&u/_hj=II(pz&rC,jV&+Z}ut=NQ;Cg-SR_ZS,+o=u/;Oy_RK_QF(Fx&xP}Wr&TA,Uh&g1=yr{ax[VF$Pg(YB;Ox=Vy;+W(Sp}XV%dd&33(l/]l4#4Y}OE=6c=bw(A7&9t%wd&N/&mo,JH&Qe)fm=Ao}fu=tH",
				Y = "FAZDC6BALcLZCA+GBARCW8wNCcDDZ8LVFBOqqDUiou+M42TFAyERXFb7EjhP+vmBFpFrUpfDV2F7eB+eCltCHJFWLFCED+pWTojEIHFXc3aFn4F68zqjEuKidS1QBVPDEhE7NA4mhMF7oThD49ot3FgtzHFCK0acW1x8DH1EmLoIlrWFBLE+y5+NA3Cx65wJHTaEZVaK1mWAmPGxgYCdxwOjTDIt/faOEhTl1vqNsKtJCOhJWuio2g07KLZEQsFBUpNtwEByBgxFslFheFbiEPvi61msDvApxCzB6rBCzox7joYA5UdDc+Cb4FSgIabpXFAj3bjkmFAxCZE+mD/SFf/0ELecYCt3nLoxC6WEZf2tKDB4oZvrEmqFkKk7BwILA7gtYBpsTq//D4jD0F0wEB9pyQ1BD5Ba0oYHDI+sbDFhvrHXdDHfgFEIJLi5r8qercNFBgFLC4bo5ERJtamWBDFy73KCEb6M8VpmEt330ygCTK58EIIFkYgF84gtGA9Uyh3m68iVrFbWFbcbqiCYHZ9J1jeRPbL8yswhMiDbhEhdNoSwFbZrLT740ABEqgCkO8J1BLd1VhKKR4sD1yUo0z+FF59Mvg71CFbyEhbHSFBKEIKyoQNgQppq9T0KAqePu0ZFGrXOHdKJqkoTFhYvpDNyuuznrN84thJbsCoO6Cu6Xlvntvy0QYuAExQEYtTUBf3CoCqwgGFZ4u1HJFzDVwEy3cjcpV4QvsPaBC3rCGyCF23o4K3pp2gberGgFEJEHo4nHICtyKH2ZqyxhN05KBBJIQlKh/Oujv/DH32VrlqFdIFC7Fz9Ct4kaqFME0UETLprnN9kfy+kFmtQBB0+5CFu0N9Ij8l/VvJDh2oq3hT6EzjTHKFN7ZjZwoTsAZ4Exsko6Fpa6WC+sduz8jyrLpegTv2h1EBeYpLpm2czQW0KoCcS0bCVXCmuWJDBjN1nQNLdF58SFJ0h7i3pC3oEOKy/FjBklL70XvBEEIWp2yZ04xObzAWDDJG7f+DbqBEA7LyiR95j7MDVdDViz2RE5vWlBMv5e4+VfhP3aXNPhvLSynb9O2x4uFBV+3jqu6d5pCG28/sETByvmu/+IJ0L3wb4rj9DNOLBF6XPIODr4L19U9RRofAG6Nxydi8Bki8BhGJbBAJKzbJxkZSlF9Q2Cu8oKqggB9hBArwLLqEBWEtFowy8XK8bEyw9snT+BeyFk1ZCSrdmgfEwFePTgCjELBEnIbjaDDPJm36rG9pztcEzT8dGk23SBhXBB1H4z+OWze0ooFzz8pDBYFvp9j9tvFByf9y4EFdVnz026CGR5qMr7fxMHN8UUdlyJAzlTBDRC28k+L4FB8078ljyD91tUj1ocnTs8vdEf7znbzm+GIjEZnoZE5rnLL700Xc7yHfz05nWxy03vBB9YGHYOWxgMQGBCR24CVYNE1hpfKxN0zKnfJDmmMgMmBWqNbjfSyFCBWSCGCgR8yFXiHyEj+VtD1FB3FpC1zI0kFbzifiKTLm9yq5zFmur+q8FHqjoOBWsBPiDbnCC2ErunV6cJ6TygXFYHYp7MKN9RUlSIS8/xBAGYLzeqUnBF4QbsTuUkUqGs6CaiDWKWjQK9EJkjpkTmNCPYXL",
				$ = {
					zh_cn: null,
					zh_tw: null
				},
				ee = {
					zh_cn: "0x17bcc4d8547e5a7135e365d1ab443aaae95e76d8230c2782c67305d4f21497a1",
					zh_tw: "0x51e720e90c7b87bec1d70eb6e74a21a449bd3ec9c020b01d3a40ed991b60ce5d"
				},
				re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				te = "~!@#$%^&*_-=[]{}|;:,.()<>?";

			function oe(e) {
				if (null !== $[e.locale]) return;
				$[e.locale] = [];
				let r = 0;
				for (let t = 0; t < 2048; t++) {
					const o = te.indexOf(q[3 * t]),
						n = [228 + (o >> 2), 128 + re.indexOf(q[3 * t + 1]), 128 + re.indexOf(q[3 * t + 2])];
					if ("zh_tw" === e.locale) {
						for (let e = o % 4; e < 3; e++) n[e] = re.indexOf(Y[r++]) + (0 == e ? 228 : 128)
					}
					$[e.locale].push(Object(m.h)(n))
				}
				if (o.a.check(e) !== ee[e.locale]) throw $[e.locale] = null, new Error("BIP39 Wordlist for " + e.locale + " (Chinese) FAILED")
			}
			class ne extends o.a {
				constructor(e) {
					super("zh_" + e)
				}
				getWord(e) {
					return oe(this), $[this.locale][e]
				}
				getWordIndex(e) {
					return oe(this), $[this.locale].indexOf(e)
				}
				split(e) {
					return (e = e.replace(/(?:\u3000| )+/g, "")).split("")
				}
			}
			const ie = new ne("cn");
			o.a.register(ie), o.a.register(ie, "zh");
			const ae = new ne("tw");
			o.a.register(ae);
			const se = {
				cz: l,
				en: f,
				es: y,
				fr: P,
				it: Q,
				ja: D,
				ko: V,
				zh: ie,
				zh_cn: ie,
				zh_tw: ae
			}
		},
		"./node_modules/aes-js/index.js": function(e, r, t) {
			"use strict";
			! function(r) {
				function t(e) {
					return parseInt(e) === e
				}

				function o(e) {
					if (!t(e.length)) return !1;
					for (var r = 0; r < e.length; r++)
						if (!t(e[r]) || e[r] < 0 || e[r] > 255) return !1;
					return !0
				}

				function n(e, r) {
					if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return r && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
					if (Array.isArray(e)) {
						if (!o(e)) throw new Error("Array contains invalid value: " + e);
						return new Uint8Array(e)
					}
					if (t(e.length) && o(e)) return new Uint8Array(e);
					throw new Error("unsupported array-like object")
				}

				function i(e) {
					return new Uint8Array(e)
				}

				function a(e, r, t, o, n) {
					null == o && null == n || (e = e.slice ? e.slice(o, n) : Array.prototype.slice.call(e, o, n)), r.set(e, t)
				}
				var s, l = {
						toBytes: function(e) {
							var r = [],
								t = 0;
							for (e = encodeURI(e); t < e.length;) {
								var o = e.charCodeAt(t++);
								37 === o ? (r.push(parseInt(e.substr(t, 2), 16)), t += 2) : r.push(o)
							}
							return n(r)
						},
						fromBytes: function(e) {
							for (var r = [], t = 0; t < e.length;) {
								var o = e[t];
								o < 128 ? (r.push(String.fromCharCode(o)), t++) : o > 191 && o < 224 ? (r.push(String.fromCharCode((31 & o) << 6 | 63 & e[t + 1])), t += 2) : (r.push(String.fromCharCode((15 & o) << 12 | (63 & e[t + 1]) << 6 | 63 & e[t + 2])), t += 3)
							}
							return r.join("")
						}
					},
					c = (s = "0123456789abcdef", {
						toBytes: function(e) {
							for (var r = [], t = 0; t < e.length; t += 2) r.push(parseInt(e.substr(t, 2), 16));
							return r
						},
						fromBytes: function(e) {
							for (var r = [], t = 0; t < e.length; t++) {
								var o = e[t];
								r.push(s[(240 & o) >> 4] + s[15 & o])
							}
							return r.join("")
						}
					}),
					u = {
						16: 10,
						24: 12,
						32: 14
					},
					h = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
					d = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
					f = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
					m = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
					g = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
					p = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
					b = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
					E = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
					v = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
					N = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
					y = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
					O = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
					R = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
					A = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
					T = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

				function S(e) {
					for (var r = [], t = 0; t < e.length; t += 4) r.push(e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]);
					return r
				}
				var w = function(e) {
					if (!(this instanceof w)) throw Error("AES must be instanitated with `new`");
					Object.defineProperty(this, "key", {
						value: n(e, !0)
					}), this._prepare()
				};
				w.prototype._prepare = function() {
					var e = u[this.key.length];
					if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
					this._Ke = [], this._Kd = [];
					for (var r = 0; r <= e; r++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
					var t, o = 4 * (e + 1),
						n = this.key.length / 4,
						i = S(this.key);
					for (r = 0; r < n; r++) t = r >> 2, this._Ke[t][r % 4] = i[r], this._Kd[e - t][r % 4] = i[r];
					for (var a, s = 0, l = n; l < o;) {
						if (a = i[n - 1], i[0] ^= d[a >> 16 & 255] << 24 ^ d[a >> 8 & 255] << 16 ^ d[255 & a] << 8 ^ d[a >> 24 & 255] ^ h[s] << 24, s += 1, 8 != n)
							for (r = 1; r < n; r++) i[r] ^= i[r - 1];
						else {
							for (r = 1; r < n / 2; r++) i[r] ^= i[r - 1];
							a = i[n / 2 - 1], i[n / 2] ^= d[255 & a] ^ d[a >> 8 & 255] << 8 ^ d[a >> 16 & 255] << 16 ^ d[a >> 24 & 255] << 24;
							for (r = n / 2 + 1; r < n; r++) i[r] ^= i[r - 1]
						}
						for (r = 0; r < n && l < o;) c = l >> 2, f = l % 4, this._Ke[c][f] = i[r], this._Kd[e - c][f] = i[r++], l++
					}
					for (var c = 1; c < e; c++)
						for (var f = 0; f < 4; f++) a = this._Kd[c][f], this._Kd[c][f] = O[a >> 24 & 255] ^ R[a >> 16 & 255] ^ A[a >> 8 & 255] ^ T[255 & a]
				}, w.prototype.encrypt = function(e) {
					if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
					for (var r = this._Ke.length - 1, t = [0, 0, 0, 0], o = S(e), n = 0; n < 4; n++) o[n] ^= this._Ke[0][n];
					for (var a = 1; a < r; a++) {
						for (n = 0; n < 4; n++) t[n] = m[o[n] >> 24 & 255] ^ g[o[(n + 1) % 4] >> 16 & 255] ^ p[o[(n + 2) % 4] >> 8 & 255] ^ b[255 & o[(n + 3) % 4]] ^ this._Ke[a][n];
						o = t.slice()
					}
					var s, l = i(16);
					for (n = 0; n < 4; n++) s = this._Ke[r][n], l[4 * n] = 255 & (d[o[n] >> 24 & 255] ^ s >> 24), l[4 * n + 1] = 255 & (d[o[(n + 1) % 4] >> 16 & 255] ^ s >> 16), l[4 * n + 2] = 255 & (d[o[(n + 2) % 4] >> 8 & 255] ^ s >> 8), l[4 * n + 3] = 255 & (d[255 & o[(n + 3) % 4]] ^ s);
					return l
				}, w.prototype.decrypt = function(e) {
					if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
					for (var r = this._Kd.length - 1, t = [0, 0, 0, 0], o = S(e), n = 0; n < 4; n++) o[n] ^= this._Kd[0][n];
					for (var a = 1; a < r; a++) {
						for (n = 0; n < 4; n++) t[n] = E[o[n] >> 24 & 255] ^ v[o[(n + 3) % 4] >> 16 & 255] ^ N[o[(n + 2) % 4] >> 8 & 255] ^ y[255 & o[(n + 1) % 4]] ^ this._Kd[a][n];
						o = t.slice()
					}
					var s, l = i(16);
					for (n = 0; n < 4; n++) s = this._Kd[r][n], l[4 * n] = 255 & (f[o[n] >> 24 & 255] ^ s >> 24), l[4 * n + 1] = 255 & (f[o[(n + 3) % 4] >> 16 & 255] ^ s >> 16), l[4 * n + 2] = 255 & (f[o[(n + 2) % 4] >> 8 & 255] ^ s >> 8), l[4 * n + 3] = 255 & (f[255 & o[(n + 1) % 4]] ^ s);
					return l
				};
				var P = function(e) {
					if (!(this instanceof P)) throw Error("AES must be instanitated with `new`");
					this.description = "Electronic Code Block", this.name = "ecb", this._aes = new w(e)
				};
				P.prototype.encrypt = function(e) {
					if ((e = n(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
					for (var r = i(e.length), t = i(16), o = 0; o < e.length; o += 16) a(e, t, 0, o, o + 16), a(t = this._aes.encrypt(t), r, o);
					return r
				}, P.prototype.decrypt = function(e) {
					if ((e = n(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
					for (var r = i(e.length), t = i(16), o = 0; o < e.length; o += 16) a(e, t, 0, o, o + 16), a(t = this._aes.decrypt(t), r, o);
					return r
				};
				var C = function(e, r) {
					if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
					if (this.description = "Cipher Block Chaining", this.name = "cbc", r) {
						if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
					} else r = i(16);
					this._lastCipherblock = n(r, !0), this._aes = new w(e)
				};
				C.prototype.encrypt = function(e) {
					if ((e = n(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
					for (var r = i(e.length), t = i(16), o = 0; o < e.length; o += 16) {
						a(e, t, 0, o, o + 16);
						for (var s = 0; s < 16; s++) t[s] ^= this._lastCipherblock[s];
						this._lastCipherblock = this._aes.encrypt(t), a(this._lastCipherblock, r, o)
					}
					return r
				}, C.prototype.decrypt = function(e) {
					if ((e = n(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
					for (var r = i(e.length), t = i(16), o = 0; o < e.length; o += 16) {
						a(e, t, 0, o, o + 16), t = this._aes.decrypt(t);
						for (var s = 0; s < 16; s++) r[o + s] = t[s] ^ this._lastCipherblock[s];
						a(e, this._lastCipherblock, 0, o, o + 16)
					}
					return r
				};
				var I = function(e, r, t) {
					if (!(this instanceof I)) throw Error("AES must be instanitated with `new`");
					if (this.description = "Cipher Feedback", this.name = "cfb", r) {
						if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 size)")
					} else r = i(16);
					t || (t = 1), this.segmentSize = t, this._shiftRegister = n(r, !0), this._aes = new w(e)
				};
				I.prototype.encrypt = function(e) {
					if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
					for (var r, t = n(e, !0), o = 0; o < t.length; o += this.segmentSize) {
						r = this._aes.encrypt(this._shiftRegister);
						for (var i = 0; i < this.segmentSize; i++) t[o + i] ^= r[i];
						a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(t, this._shiftRegister, 16 - this.segmentSize, o, o + this.segmentSize)
					}
					return t
				}, I.prototype.decrypt = function(e) {
					if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
					for (var r, t = n(e, !0), o = 0; o < t.length; o += this.segmentSize) {
						r = this._aes.encrypt(this._shiftRegister);
						for (var i = 0; i < this.segmentSize; i++) t[o + i] ^= r[i];
						a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(e, this._shiftRegister, 16 - this.segmentSize, o, o + this.segmentSize)
					}
					return t
				};
				var _ = function(e, r) {
					if (!(this instanceof _)) throw Error("AES must be instanitated with `new`");
					if (this.description = "Output Feedback", this.name = "ofb", r) {
						if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
					} else r = i(16);
					this._lastPrecipher = n(r, !0), this._lastPrecipherIndex = 16, this._aes = new w(e)
				};
				_.prototype.encrypt = function(e) {
					for (var r = n(e, !0), t = 0; t < r.length; t++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), r[t] ^= this._lastPrecipher[this._lastPrecipherIndex++];
					return r
				}, _.prototype.decrypt = _.prototype.encrypt;
				var F = function(e) {
					if (!(this instanceof F)) throw Error("Counter must be instanitated with `new`");
					0 === e || e || (e = 1), "number" == typeof e ? (this._counter = i(16), this.setValue(e)) : this.setBytes(e)
				};
				F.prototype.setValue = function(e) {
					if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
					for (var r = 15; r >= 0; --r) this._counter[r] = e % 256, e >>= 8
				}, F.prototype.setBytes = function(e) {
					if (16 != (e = n(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
					this._counter = e
				}, F.prototype.increment = function() {
					for (var e = 15; e >= 0; e--) {
						if (255 !== this._counter[e]) {
							this._counter[e]++;
							break
						}
						this._counter[e] = 0
					}
				};
				var L = function(e, r) {
					if (!(this instanceof L)) throw Error("AES must be instanitated with `new`");
					this.description = "Counter", this.name = "ctr", r instanceof F || (r = new F(r)), this._counter = r, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new w(e)
				};
				L.prototype.encrypt = function(e) {
					for (var r = n(e, !0), t = 0; t < r.length; t++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), r[t] ^= this._remainingCounter[this._remainingCounterIndex++];
					return r
				}, L.prototype.decrypt = L.prototype.encrypt;
				var M = {
					AES: w,
					Counter: F,
					ModeOfOperation: {
						ecb: P,
						cbc: C,
						cfb: I,
						ofb: _,
						ctr: L
					},
					utils: {
						hex: c,
						utf8: l
					},
					padding: {
						pkcs7: {
							pad: function(e) {
								var r = 16 - (e = n(e, !0)).length % 16,
									t = i(e.length + r);
								a(e, t);
								for (var o = e.length; o < t.length; o++) t[o] = r;
								return t
							},
							strip: function(e) {
								if ((e = n(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
								var r = e[e.length - 1];
								if (r > 16) throw new Error("PKCS#7 padding byte out of range");
								for (var t = e.length - r, o = 0; o < r; o++)
									if (e[t + o] !== r) throw new Error("PKCS#7 invalid padding byte");
								var s = i(t);
								return a(e, s, 0, 0, t), s
							}
						}
					},
					_arrayTest: {
						coerceArray: n,
						createArray: i,
						copyArray: a
					}
				};
				e.exports = M
			}()
		},
		"./node_modules/bech32/index.js": function(e, r, t) {
			"use strict";
			for (var o = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", n = {}, i = 0; i < o.length; i++) {
				var a = o.charAt(i);
				if (void 0 !== n[a]) throw new TypeError(a + " is ambiguous");
				n[a] = i
			}

			function s(e) {
				var r = e >> 25;
				return (33554431 & e) << 5 ^ 996825010 & -(r >> 0 & 1) ^ 642813549 & -(r >> 1 & 1) ^ 513874426 & -(r >> 2 & 1) ^ 1027748829 & -(r >> 3 & 1) ^ 705979059 & -(r >> 4 & 1)
			}

			function l(e) {
				for (var r = 1, t = 0; t < e.length; ++t) {
					var o = e.charCodeAt(t);
					if (o < 33 || o > 126) return "Invalid prefix (" + e + ")";
					r = s(r) ^ o >> 5
				}
				for (r = s(r), t = 0; t < e.length; ++t) {
					var n = e.charCodeAt(t);
					r = s(r) ^ 31 & n
				}
				return r
			}

			function c(e, r) {
				if (r = r || 90, e.length < 8) return e + " too short";
				if (e.length > r) return "Exceeds length limit";
				var t = e.toLowerCase(),
					o = e.toUpperCase();
				if (e !== t && e !== o) return "Mixed-case string " + e;
				var i = (e = t).lastIndexOf("1");
				if (-1 === i) return "No separator character for " + e;
				if (0 === i) return "Missing prefix for " + e;
				var a = e.slice(0, i),
					c = e.slice(i + 1);
				if (c.length < 6) return "Data too short";
				var u = l(a);
				if ("string" == typeof u) return u;
				for (var h = [], d = 0; d < c.length; ++d) {
					var f = c.charAt(d),
						m = n[f];
					if (void 0 === m) return "Unknown character " + f;
					u = s(u) ^ m, d + 6 >= c.length || h.push(m)
				}
				return 1 !== u ? "Invalid checksum for " + e : {
					prefix: a,
					words: h
				}
			}

			function u(e, r, t, o) {
				for (var n = 0, i = 0, a = (1 << t) - 1, s = [], l = 0; l < e.length; ++l)
					for (n = n << r | e[l], i += r; i >= t;) i -= t, s.push(n >> i & a);
				if (o) i > 0 && s.push(n << t - i & a);
				else {
					if (i >= r) return "Excess padding";
					if (n << t - i & a) return "Non-zero padding"
				}
				return s
			}
			e.exports = {
				decodeUnsafe: function() {
					var e = c.apply(null, arguments);
					if ("object" == typeof e) return e
				},
				decode: function(e) {
					var r = c.apply(null, arguments);
					if ("object" == typeof r) return r;
					throw new Error(r)
				},
				encode: function(e, r, t) {
					if (t = t || 90, e.length + 7 + r.length > t) throw new TypeError("Exceeds length limit");
					var n = l(e = e.toLowerCase());
					if ("string" == typeof n) throw new Error(n);
					for (var i = e + "1", a = 0; a < r.length; ++a) {
						var c = r[a];
						if (c >> 5 != 0) throw new Error("Non 5-bit word");
						n = s(n) ^ c, i += o.charAt(c)
					}
					for (a = 0; a < 6; ++a) n = s(n);
					for (n ^= 1, a = 0; a < 6; ++a) {
						var u = n >> 5 * (5 - a) & 31;
						i += o.charAt(u)
					}
					return i
				},
				toWordsUnsafe: function(e) {
					var r = u(e, 8, 5, !0);
					if (Array.isArray(r)) return r
				},
				toWords: function(e) {
					var r = u(e, 8, 5, !0);
					if (Array.isArray(r)) return r;
					throw new Error(r)
				},
				fromWordsUnsafe: function(e) {
					var r = u(e, 5, 8, !1);
					if (Array.isArray(r)) return r
				},
				fromWords: function(e) {
					var r = u(e, 5, 8, !1);
					if (Array.isArray(r)) return r;
					throw new Error(r)
				}
			}
		},
		"./node_modules/ethers/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return o
			}));
			const o = "ethers/5.4.7"
		},
		"./node_modules/ethers/lib.esm/ethers.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "Signer", (function() {
				return s.a
			})), t.d(r, "Wallet", (function() {
				return l.Wallet
			})), t.d(r, "VoidSigner", (function() {
				return s.b
			})), t.d(r, "getDefaultProvider", (function() {
				return u.getDefaultProvider
			})), t.d(r, "providers", (function() {
				return u
			})), t.d(r, "BaseContract", (function() {
				return n.a
			})), t.d(r, "Contract", (function() {
				return n.b
			})), t.d(r, "ContractFactory", (function() {
				return n.c
			})), t.d(r, "BigNumber", (function() {
				return i.a
			})), t.d(r, "FixedNumber", (function() {
				return a.a
			})), t.d(r, "constants", (function() {
				return c
			})), t.d(r, "errors", (function() {
				return P.ErrorCode
			})), t.d(r, "logger", (function() {
				return H
			})), t.d(r, "utils", (function() {
				return o
			})), t.d(r, "wordlists", (function() {
				return h.a
			})), t.d(r, "version", (function() {
				return X.a
			})), t.d(r, "Wordlist", (function() {
				return d.a
			}));
			var o = {};
			t.r(o), t.d(o, "AbiCoder", (function() {
				return f.a
			})), t.d(o, "defaultAbiCoder", (function() {
				return f.b
			})), t.d(o, "Fragment", (function() {
				return m.e
			})), t.d(o, "ConstructorFragment", (function() {
				return m.a
			})), t.d(o, "ErrorFragment", (function() {
				return m.b
			})), t.d(o, "EventFragment", (function() {
				return m.c
			})), t.d(o, "FunctionFragment", (function() {
				return m.f
			})), t.d(o, "ParamType", (function() {
				return m.g
			})), t.d(o, "FormatTypes", (function() {
				return m.d
			})), t.d(o, "checkResultErrors", (function() {
				return g.d
			})), t.d(o, "Logger", (function() {
				return P.Logger
			})), t.d(o, "RLP", (function() {
				return M
			})), t.d(o, "_fetchData", (function() {
				return G._fetchData
			})), t.d(o, "fetchJson", (function() {
				return G.fetchJson
			})), t.d(o, "poll", (function() {
				return G.poll
			})), t.d(o, "checkProperties", (function() {
				return L.checkProperties
			})), t.d(o, "deepCopy", (function() {
				return L.deepCopy
			})), t.d(o, "defineReadOnly", (function() {
				return L.defineReadOnly
			})), t.d(o, "getStatic", (function() {
				return L.getStatic
			})), t.d(o, "resolveProperties", (function() {
				return L.resolveProperties
			})), t.d(o, "shallowCopy", (function() {
				return L.shallowCopy
			})), t.d(o, "arrayify", (function() {
				return N.arrayify
			})), t.d(o, "concat", (function() {
				return N.concat
			})), t.d(o, "stripZeros", (function() {
				return N.stripZeros
			})), t.d(o, "zeroPad", (function() {
				return N.zeroPad
			})), t.d(o, "isBytes", (function() {
				return N.isBytes
			})), t.d(o, "isBytesLike", (function() {
				return N.isBytesLike
			})), t.d(o, "defaultPath", (function() {
				return T.defaultPath
			})), t.d(o, "HDNode", (function() {
				return T.HDNode
			})), t.d(o, "SigningKey", (function() {
				return U.SigningKey
			})), t.d(o, "Interface", (function() {
				return p.b
			})), t.d(o, "LogDescription", (function() {
				return p.c
			})), t.d(o, "TransactionDescription", (function() {
				return p.d
			})), t.d(o, "base58", (function() {
				return v.Base58
			})), t.d(o, "base64", (function() {
				return E
			})), t.d(o, "hexlify", (function() {
				return N.hexlify
			})), t.d(o, "isHexString", (function() {
				return N.isHexString
			})), t.d(o, "hexConcat", (function() {
				return N.hexConcat
			})), t.d(o, "hexStripZeros", (function() {
				return N.hexStripZeros
			})), t.d(o, "hexValue", (function() {
				return N.hexValue
			})), t.d(o, "hexZeroPad", (function() {
				return N.hexZeroPad
			})), t.d(o, "hexDataLength", (function() {
				return N.hexDataLength
			})), t.d(o, "hexDataSlice", (function() {
				return N.hexDataSlice
			})), t.d(o, "nameprep", (function() {
				return k.a
			})), t.d(o, "_toEscapedUtf8String", (function() {
				return j.d
			})), t.d(o, "toUtf8Bytes", (function() {
				return j.f
			})), t.d(o, "toUtf8CodePoints", (function() {
				return j.g
			})), t.d(o, "toUtf8String", (function() {
				return j.h
			})), t.d(o, "Utf8ErrorFuncs", (function() {
				return j.b
			})), t.d(o, "formatBytes32String", (function() {
				return D.a
			})), t.d(o, "parseBytes32String", (function() {
				return D.b
			})), t.d(o, "hashMessage", (function() {
				return y.a
			})), t.d(o, "namehash", (function() {
				return O.b
			})), t.d(o, "isValidName", (function() {
				return O.a
			})), t.d(o, "id", (function() {
				return R.a
			})), t.d(o, "_TypedDataEncoder", (function() {
				return A.a
			})), t.d(o, "getAddress", (function() {
				return b.getAddress
			})), t.d(o, "getIcapAddress", (function() {
				return b.getIcapAddress
			})), t.d(o, "getContractAddress", (function() {
				return b.getContractAddress
			})), t.d(o, "getCreate2Address", (function() {
				return b.getCreate2Address
			})), t.d(o, "isAddress", (function() {
				return b.isAddress
			})), t.d(o, "formatEther", (function() {
				return J.formatEther
			})), t.d(o, "parseEther", (function() {
				return J.parseEther
			})), t.d(o, "formatUnits", (function() {
				return J.formatUnits
			})), t.d(o, "parseUnits", (function() {
				return J.parseUnits
			})), t.d(o, "commify", (function() {
				return J.commify
			})), t.d(o, "computeHmac", (function() {
				return C.a
			})), t.d(o, "keccak256", (function() {
				return w.keccak256
			})), t.d(o, "ripemd160", (function() {
				return C.b
			})), t.d(o, "sha256", (function() {
				return C.c
			})), t.d(o, "sha512", (function() {
				return C.d
			})), t.d(o, "randomBytes", (function() {
				return _.a
			})), t.d(o, "shuffled", (function() {
				return F.a
			})), t.d(o, "solidityPack", (function() {
				return I.pack
			})), t.d(o, "solidityKeccak256", (function() {
				return I.keccak256
			})), t.d(o, "soliditySha256", (function() {
				return I.sha256
			})), t.d(o, "splitSignature", (function() {
				return N.splitSignature
			})), t.d(o, "joinSignature", (function() {
				return N.joinSignature
			})), t.d(o, "accessListify", (function() {
				return B.accessListify
			})), t.d(o, "parseTransaction", (function() {
				return B.parse
			})), t.d(o, "serializeTransaction", (function() {
				return B.serialize
			})), t.d(o, "TransactionTypes", (function() {
				return B.TransactionTypes
			})), t.d(o, "getJsonWalletAddress", (function() {
				return S.a
			})), t.d(o, "computeAddress", (function() {
				return B.computeAddress
			})), t.d(o, "recoverAddress", (function() {
				return B.recoverAddress
			})), t.d(o, "computePublicKey", (function() {
				return U.computePublicKey
			})), t.d(o, "recoverPublicKey", (function() {
				return U.recoverPublicKey
			})), t.d(o, "verifyMessage", (function() {
				return l.verifyMessage
			})), t.d(o, "verifyTypedData", (function() {
				return l.verifyTypedData
			})), t.d(o, "getAccountPath", (function() {
				return T.getAccountPath
			})), t.d(o, "mnemonicToEntropy", (function() {
				return T.mnemonicToEntropy
			})), t.d(o, "entropyToMnemonic", (function() {
				return T.entropyToMnemonic
			})), t.d(o, "isValidMnemonic", (function() {
				return T.isValidMnemonic
			})), t.d(o, "mnemonicToSeed", (function() {
				return T.mnemonicToSeed
			})), t.d(o, "SupportedAlgorithm", (function() {
				return x.a
			})), t.d(o, "UnicodeNormalizationForm", (function() {
				return j.a
			})), t.d(o, "Utf8ErrorReason", (function() {
				return j.c
			})), t.d(o, "Indexed", (function() {
				return p.a
			}));
			var n = t("./node_modules/@ethersproject/contracts/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				a = t("./node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js"),
				s = t("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js"),
				l = t("./node_modules/@ethersproject/wallet/lib.esm/index.js"),
				c = t("./node_modules/@ethersproject/constants/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/providers/lib.esm/index.js"),
				h = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlists.js"),
				d = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlist.js"),
				f = t("./node_modules/@ethersproject/abi/lib.esm/abi-coder.js"),
				m = t("./node_modules/@ethersproject/abi/lib.esm/fragments.js"),
				g = t("./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js"),
				p = t("./node_modules/@ethersproject/abi/lib.esm/interface.js"),
				b = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				E = t("./node_modules/ethers/node_modules/@ethersproject/base64/lib.esm/index.js"),
				v = t("./node_modules/@ethersproject/basex/lib.esm/index.js"),
				N = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				y = t("./node_modules/@ethersproject/hash/lib.esm/message.js"),
				O = t("./node_modules/@ethersproject/hash/lib.esm/namehash.js"),
				R = t("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				A = t("./node_modules/@ethersproject/hash/lib.esm/typed-data.js"),
				T = t("./node_modules/@ethersproject/hdnode/lib.esm/index.js"),
				S = t("./node_modules/@ethersproject/json-wallets/lib.esm/inspect.js"),
				w = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				P = t("./node_modules/ethers/node_modules/@ethersproject/logger/lib.esm/index.js"),
				C = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js"),
				I = t("./node_modules/@ethersproject/solidity/lib.esm/index.js"),
				_ = t("./node_modules/@ethersproject/random/lib.esm/random.js"),
				F = t("./node_modules/@ethersproject/random/lib.esm/shuffle.js"),
				L = t("./node_modules/@ethersproject/properties/lib.esm/index.js"),
				M = t("./node_modules/@ethersproject/rlp/lib.esm/index.js"),
				U = t("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				k = t("./node_modules/@ethersproject/strings/lib.esm/idna.js"),
				j = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				D = t("./node_modules/@ethersproject/strings/lib.esm/bytes32.js"),
				B = t("./node_modules/@ethersproject/transactions/lib.esm/index.js"),
				J = t("./node_modules/@ethersproject/units/lib.esm/index.js"),
				G = t("./node_modules/@ethersproject/web/lib.esm/index.js"),
				x = t("./node_modules/@ethersproject/sha2/lib.esm/types.js"),
				X = t("./node_modules/ethers/lib.esm/_version.js");
			const H = new P.Logger(X.a)
		},
		"./node_modules/ethers/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r);
			var o = t("./node_modules/ethers/lib.esm/ethers.js");
			t.d(r, "ethers", (function() {
				return o
			}));
			var n = t("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js");
			t.d(r, "Signer", (function() {
				return n.a
			}));
			var i = t("./node_modules/@ethersproject/wallet/lib.esm/index.js");
			t.d(r, "Wallet", (function() {
				return i.Wallet
			})), t.d(r, "VoidSigner", (function() {
				return n.b
			}));
			var a = t("./node_modules/@ethersproject/providers/lib.esm/index.js");
			t.d(r, "getDefaultProvider", (function() {
				return a.getDefaultProvider
			})), t.d(r, "providers", (function() {
				return o.providers
			}));
			var s = t("./node_modules/@ethersproject/contracts/lib.esm/index.js");
			t.d(r, "BaseContract", (function() {
				return s.a
			})), t.d(r, "Contract", (function() {
				return s.b
			})), t.d(r, "ContractFactory", (function() {
				return s.c
			}));
			var l = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
			t.d(r, "BigNumber", (function() {
				return l.a
			}));
			var c = t("./node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js");
			t.d(r, "FixedNumber", (function() {
				return c.a
			})), t.d(r, "constants", (function() {
				return o.constants
			}));
			var u = t("./node_modules/ethers/node_modules/@ethersproject/logger/lib.esm/index.js");
			t.d(r, "errors", (function() {
				return u.ErrorCode
			})), t.d(r, "logger", (function() {
				return o.logger
			})), t.d(r, "utils", (function() {
				return o.utils
			}));
			var h = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlists.js");
			t.d(r, "wordlists", (function() {
				return h.a
			}));
			var d = t("./node_modules/ethers/lib.esm/_version.js");
			t.d(r, "version", (function() {
				return d.a
			}));
			var f = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlist.js");
			t.d(r, "Wordlist", (function() {
				return f.a
			}));
			try {
				const e = window;
				null == e._ethers && (e._ethers = o)
			} catch (m) {}
		},
		"./node_modules/ethers/node_modules/@ethersproject/base64/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "decode", (function() {
				return n
			})), t.d(r, "encode", (function() {
				return i
			}));
			var o = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function n(e) {
				e = atob(e);
				const r = [];
				for (let t = 0; t < e.length; t++) r.push(e.charCodeAt(t));
				return Object(o.arrayify)(r)
			}

			function i(e) {
				e = Object(o.arrayify)(e);
				let r = "";
				for (let t = 0; t < e.length; t++) r += String.fromCharCode(e[t]);
				return btoa(r)
			}
		},
		"./node_modules/ethers/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "LogLevel", (function() {
				return u
			})), t.d(r, "ErrorCode", (function() {
				return h
			})), t.d(r, "Logger", (function() {
				return f
			}));
			const o = "logger/5.4.1";
			let n = !1,
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
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var u, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			const d = "0123456789abcdef";
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == a[t] && this.throwArgumentError("invalid log level name", "logLevel", e), s > a[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += d[r[e] >> 4], t += d[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return l || (l = new f(o)), l
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = a[e.toLowerCase()];
					null != r ? s = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = h, f.levels = u
		},
		"./node_modules/scrypt-js/scrypt.js": function(e, r, t) {
			"use strict";
			(function(r) {
				! function(t) {
					const o = 2147483647;

					function n(e) {
						const r = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
						let t = 1779033703,
							o = 3144134277,
							n = 1013904242,
							i = 2773480762,
							a = 1359893119,
							s = 2600822924,
							l = 528734635,
							c = 1541459225;
						const u = new Uint32Array(64);

						function h(e) {
							let h = 0,
								d = e.length;
							for (; d >= 64;) {
								let f, m, g, p, b, E = t,
									v = o,
									N = n,
									y = i,
									O = a,
									R = s,
									A = l,
									T = c;
								for (m = 0; m < 16; m++) g = h + 4 * m, u[m] = (255 & e[g]) << 24 | (255 & e[g + 1]) << 16 | (255 & e[g + 2]) << 8 | 255 & e[g + 3];
								for (m = 16; m < 64; m++) p = ((f = u[m - 2]) >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10, b = ((f = u[m - 15]) >>> 7 | f << 25) ^ (f >>> 18 | f << 14) ^ f >>> 3, u[m] = (p + u[m - 7] | 0) + (b + u[m - 16] | 0) | 0;
								for (m = 0; m < 64; m++) p = (((O >>> 6 | O << 26) ^ (O >>> 11 | O << 21) ^ (O >>> 25 | O << 7)) + (O & R ^ ~O & A) | 0) + (T + (r[m] + u[m] | 0) | 0) | 0, b = ((E >>> 2 | E << 30) ^ (E >>> 13 | E << 19) ^ (E >>> 22 | E << 10)) + (E & v ^ E & N ^ v & N) | 0, T = A, A = R, R = O, O = y + p | 0, y = N, N = v, v = E, E = p + b | 0;
								t = t + E | 0, o = o + v | 0, n = n + N | 0, i = i + y | 0, a = a + O | 0, s = s + R | 0, l = l + A | 0, c = c + T | 0, h += 64, d -= 64
							}
						}
						h(e);
						let d, f = e.length % 64,
							m = e.length / 536870912 | 0,
							g = e.length << 3,
							p = f < 56 ? 56 : 120,
							b = e.slice(e.length - f, e.length);
						for (b.push(128), d = f + 1; d < p; d++) b.push(0);
						return b.push(m >>> 24 & 255), b.push(m >>> 16 & 255), b.push(m >>> 8 & 255), b.push(m >>> 0 & 255), b.push(g >>> 24 & 255), b.push(g >>> 16 & 255), b.push(g >>> 8 & 255), b.push(g >>> 0 & 255), h(b), [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, l >>> 0 & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c >>> 0 & 255]
					}

					function i(e, r, t) {
						e = e.length <= 64 ? e : n(e);
						const o = 64 + r.length + 4,
							i = new Array(o),
							a = new Array(64);
						let s, l = [];
						for (s = 0; s < 64; s++) i[s] = 54;
						for (s = 0; s < e.length; s++) i[s] ^= e[s];
						for (s = 0; s < r.length; s++) i[64 + s] = r[s];
						for (s = o - 4; s < o; s++) i[s] = 0;
						for (s = 0; s < 64; s++) a[s] = 92;
						for (s = 0; s < e.length; s++) a[s] ^= e[s];

						function c() {
							for (let e = o - 1; e >= o - 4; e--) {
								if (i[e]++, i[e] <= 255) return;
								i[e] = 0
							}
						}
						for (; t >= 32;) c(), l = l.concat(n(a.concat(n(i)))), t -= 32;
						return t > 0 && (c(), l = l.concat(n(a.concat(n(i))).slice(0, t))), l
					}

					function a(e, r, t, o, n) {
						let i;
						for (u(e, 16 * (2 * t - 1), n, 0, 16), i = 0; i < 2 * t; i++) c(e, 16 * i, n, 16), l(n, o), u(n, 0, e, r + 16 * i, 16);
						for (i = 0; i < t; i++) u(e, r + 2 * i * 16, e, 16 * i, 16);
						for (i = 0; i < t; i++) u(e, r + 16 * (2 * i + 1), e, 16 * (i + t), 16)
					}

					function s(e, r) {
						return e << r | e >>> 32 - r
					}

					function l(e, r) {
						u(e, 0, r, 0, 16);
						for (let t = 8; t > 0; t -= 2) r[4] ^= s(r[0] + r[12], 7), r[8] ^= s(r[4] + r[0], 9), r[12] ^= s(r[8] + r[4], 13), r[0] ^= s(r[12] + r[8], 18), r[9] ^= s(r[5] + r[1], 7), r[13] ^= s(r[9] + r[5], 9), r[1] ^= s(r[13] + r[9], 13), r[5] ^= s(r[1] + r[13], 18), r[14] ^= s(r[10] + r[6], 7), r[2] ^= s(r[14] + r[10], 9), r[6] ^= s(r[2] + r[14], 13), r[10] ^= s(r[6] + r[2], 18), r[3] ^= s(r[15] + r[11], 7), r[7] ^= s(r[3] + r[15], 9), r[11] ^= s(r[7] + r[3], 13), r[15] ^= s(r[11] + r[7], 18), r[1] ^= s(r[0] + r[3], 7), r[2] ^= s(r[1] + r[0], 9), r[3] ^= s(r[2] + r[1], 13), r[0] ^= s(r[3] + r[2], 18), r[6] ^= s(r[5] + r[4], 7), r[7] ^= s(r[6] + r[5], 9), r[4] ^= s(r[7] + r[6], 13), r[5] ^= s(r[4] + r[7], 18), r[11] ^= s(r[10] + r[9], 7), r[8] ^= s(r[11] + r[10], 9), r[9] ^= s(r[8] + r[11], 13), r[10] ^= s(r[9] + r[8], 18), r[12] ^= s(r[15] + r[14], 7), r[13] ^= s(r[12] + r[15], 9), r[14] ^= s(r[13] + r[12], 13), r[15] ^= s(r[14] + r[13], 18);
						for (let t = 0; t < 16; ++t) e[t] += r[t]
					}

					function c(e, r, t, o) {
						for (let n = 0; n < o; n++) t[n] ^= e[r + n]
					}

					function u(e, r, t, o, n) {
						for (; n--;) t[o++] = e[r++]
					}

					function h(e) {
						if (!e || "number" != typeof e.length) return !1;
						for (let r = 0; r < e.length; r++) {
							const t = e[r];
							if ("number" != typeof t || t % 1 || t < 0 || t >= 256) return !1
						}
						return !0
					}

					function d(e, r) {
						if ("number" != typeof e || e % 1) throw new Error("invalid " + r);
						return e
					}

					function f(e, t, n, s, l, f, m) {
						if (n = d(n, "N"), s = d(s, "r"), l = d(l, "p"), f = d(f, "dkLen"), 0 === n || 0 != (n & n - 1)) throw new Error("N must be power of 2");
						if (n > o / 128 / s) throw new Error("N too large");
						if (s > o / 128 / l) throw new Error("r too large");
						if (!h(e)) throw new Error("password must be an array or buffer");
						if (e = Array.prototype.slice.call(e), !h(t)) throw new Error("salt must be an array or buffer");
						t = Array.prototype.slice.call(t);
						let g = i(e, t, 128 * l * s);
						const p = new Uint32Array(32 * l * s);
						for (let r = 0; r < p.length; r++) {
							const e = 4 * r;
							p[r] = (255 & g[e + 3]) << 24 | (255 & g[e + 2]) << 16 | (255 & g[e + 1]) << 8 | (255 & g[e + 0]) << 0
						}
						const b = new Uint32Array(64 * s),
							E = new Uint32Array(32 * s * n),
							v = 32 * s,
							N = new Uint32Array(16),
							y = new Uint32Array(16),
							O = l * n * 2;
						let R, A, T = 0,
							S = null,
							w = !1,
							P = 0,
							C = 0;
						const I = m ? parseInt(1e3 / s) : 4294967295,
							_ = void 0 !== r ? r : setTimeout,
							F = function() {
								if (w) return m(new Error("cancelled"), T / O);
								let r;
								switch (P) {
									case 0:
										u(p, A = 32 * C * s, b, 0, v), P = 1, R = 0;
									case 1:
										(r = n - R) > I && (r = I);
										for (let e = 0; e < r; e++) u(b, 0, E, (R + e) * v, v), a(b, v, s, N, y);
										if (R += r, T += r, m) {
											const e = parseInt(1e3 * T / O);
											if (e !== S) {
												if (w = m(null, T / O)) break;
												S = e
											}
										}
										if (R < n) break;
										R = 0, P = 2;
									case 2:
										(r = n - R) > I && (r = I);
										for (let e = 0; e < r; e++) {
											const e = b[16 * (2 * s - 1)] & n - 1;
											c(E, e * v, b, v), a(b, v, s, N, y)
										}
										if (R += r, T += r, m) {
											const e = parseInt(1e3 * T / O);
											if (e !== S) {
												if (w = m(null, T / O)) break;
												S = e
											}
										}
										if (R < n) break;
										if (u(b, 0, p, A, v), ++C < l) {
											P = 0;
											break
										}
										g = [];
										for (let e = 0; e < p.length; e++) g.push(p[e] >> 0 & 255), g.push(p[e] >> 8 & 255), g.push(p[e] >> 16 & 255), g.push(p[e] >> 24 & 255);
										const t = i(e, g, f);
										return m && m(null, 1, t), t
								}
								m && _(F)
							};
						if (!m)
							for (;;) {
								const e = F();
								if (null != e) return e
							}
						F()
					}
					const m = {
						scrypt: function(e, r, t, o, n, i, a) {
							return new Promise((function(s, l) {
								let c = 0;
								a && a(0), f(e, r, t, o, n, i, (function(e, r, t) {
									if (e) l(e);
									else if (t) a && 1 !== c && a(1), s(new Uint8Array(t));
									else if (a && r !== c) return c = r, a(r)
								}))
							}))
						},
						syncScrypt: function(e, r, t, o, n, i) {
							return new Uint8Array(f(e, r, t, o, n, i))
						}
					};
					e.exports = m
				}()
			}).call(this, t("./node_modules/timers-browserify/main.js").setImmediate)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1.82154746497a1899a163.js.map