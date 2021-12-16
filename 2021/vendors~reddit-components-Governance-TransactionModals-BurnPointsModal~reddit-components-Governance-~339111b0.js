// https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0.7b39aa200cdd29dba849.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, r, t) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, r, t) {
					var o = {},
						i = {};
					i[r] = 0;
					var s, a, u, c, l, d, f, h = n.PriorityQueue.make();
					for (h.push(r, 0); !h.empty();)
						for (u in a = (s = h.pop()).value, c = s.cost, l = e[a] || {}) l.hasOwnProperty(u) && (d = c + l[u], f = i[u], (void 0 === i[u] || f > d) && (i[u] = d, h.push(u, d), o[u] = a));
					if (void 0 !== t && void 0 === i[t]) {
						var g = ["Could not find a path from ", r, " to ", t, "."].join("");
						throw new Error(g)
					}
					return o
				},
				extract_shortest_path_from_predecessor_list: function(e, r) {
					for (var t = [], n = r; n;) t.push(n), e[n], n = e[n];
					return t.reverse(), t
				},
				find_path: function(e, r, t) {
					var o = n.single_source_shortest_paths(e, r, t);
					return n.extract_shortest_path_from_predecessor_list(o, t)
				},
				PriorityQueue: {
					make: function(e) {
						var r, t = n.PriorityQueue,
							o = {};
						for (r in e = e || {}, t) t.hasOwnProperty(r) && (o[r] = t[r]);
						return o.queue = [], o.sorter = e.sorter || t.default_sorter, o
					},
					default_sorter: function(e, r) {
						return e.cost - r.cost
					},
					push: function(e, r) {
						var t = {
							value: e,
							cost: r
						};
						this.queue.push(t), this.queue.sort(this.sorter)
					},
					pop: function() {
						return this.queue.shift()
					},
					empty: function() {
						return 0 === this.queue.length
					}
				}
			};
			e.exports = n
		},
		"./node_modules/ethers/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "ethers", (function() {
				return o
			})), t.d(r, "Signer", (function() {
				return k
			})), t.d(r, "Wallet", (function() {
				return q.a
			})), t.d(r, "VoidSigner", (function() {
				return G
			})), t.d(r, "getDefaultProvider", (function() {
				return V.getDefaultProvider
			})), t.d(r, "providers", (function() {
				return V
			})), t.d(r, "BaseContract", (function() {
				return i.a
			})), t.d(r, "Contract", (function() {
				return i.b
			})), t.d(r, "ContractFactory", (function() {
				return i.c
			})), t.d(r, "BigNumber", (function() {
				return s.a
			})), t.d(r, "FixedNumber", (function() {
				return _
			})), t.d(r, "constants", (function() {
				return z
			})), t.d(r, "errors", (function() {
				return me
			})), t.d(r, "logger", (function() {
				return Qe
			})), t.d(r, "utils", (function() {
				return n
			})), t.d(r, "wordlists", (function() {
				return K.a
			})), t.d(r, "version", (function() {
				return $e
			})), t.d(r, "Wordlist", (function() {
				return W.a
			}));
			var n = {};
			t.r(n), t.d(n, "AbiCoder", (function() {
				return H.a
			})), t.d(n, "defaultAbiCoder", (function() {
				return H.b
			})), t.d(n, "Fragment", (function() {
				return Y.e
			})), t.d(n, "ConstructorFragment", (function() {
				return Y.a
			})), t.d(n, "ErrorFragment", (function() {
				return Y.b
			})), t.d(n, "EventFragment", (function() {
				return Y.c
			})), t.d(n, "FunctionFragment", (function() {
				return Y.f
			})), t.d(n, "ParamType", (function() {
				return Y.g
			})), t.d(n, "FormatTypes", (function() {
				return Y.d
			})), t.d(n, "checkResultErrors", (function() {
				return J.d
			})), t.d(n, "Logger", (function() {
				return pe
			})), t.d(n, "RLP", (function() {
				return qe
			})), t.d(n, "_fetchData", (function() {
				return Je.a
			})), t.d(n, "fetchJson", (function() {
				return Je.b
			})), t.d(n, "poll", (function() {
				return Je.c
			})), t.d(n, "checkProperties", (function() {
				return De
			})), t.d(n, "deepCopy", (function() {
				return Ge
			})), t.d(n, "defineReadOnly", (function() {
				return Me
			})), t.d(n, "getStatic", (function() {
				return Fe
			})), t.d(n, "resolveProperties", (function() {
				return xe
			})), t.d(n, "shallowCopy", (function() {
				return Le
			})), t.d(n, "arrayify", (function() {
				return a.a
			})), t.d(n, "concat", (function() {
				return a.b
			})), t.d(n, "stripZeros", (function() {
				return a.o
			})), t.d(n, "zeroPad", (function() {
				return a.p
			})), t.d(n, "isBytes", (function() {
				return a.j
			})), t.d(n, "isBytesLike", (function() {
				return a.k
			})), t.d(n, "defaultPath", (function() {
				return oe.b
			})), t.d(n, "HDNode", (function() {
				return oe.a
			})), t.d(n, "SigningKey", (function() {
				return ze.a
			})), t.d(n, "Interface", (function() {
				return X.b
			})), t.d(n, "LogDescription", (function() {
				return X.c
			})), t.d(n, "TransactionDescription", (function() {
				return X.d
			})), t.d(n, "base58", (function() {
				return Z.a
			})), t.d(n, "base64", (function() {
				return Q
			})), t.d(n, "hexlify", (function() {
				return a.i
			})), t.d(n, "isHexString", (function() {
				return a.l
			})), t.d(n, "hexConcat", (function() {
				return a.c
			})), t.d(n, "hexStripZeros", (function() {
				return a.f
			})), t.d(n, "hexValue", (function() {
				return a.g
			})), t.d(n, "hexZeroPad", (function() {
				return a.h
			})), t.d(n, "hexDataLength", (function() {
				return a.d
			})), t.d(n, "hexDataSlice", (function() {
				return a.e
			})), t.d(n, "nameprep", (function() {
				return Ve.a
			})), t.d(n, "_toEscapedUtf8String", (function() {
				return Ke.d
			})), t.d(n, "toUtf8Bytes", (function() {
				return Ke.f
			})), t.d(n, "toUtf8CodePoints", (function() {
				return Ke.g
			})), t.d(n, "toUtf8String", (function() {
				return Ke.h
			})), t.d(n, "Utf8ErrorFuncs", (function() {
				return Ke.b
			})), t.d(n, "formatBytes32String", (function() {
				return We.a
			})), t.d(n, "parseBytes32String", (function() {
				return We.b
			})), t.d(n, "hashMessage", (function() {
				return ee.a
			})), t.d(n, "namehash", (function() {
				return re.b
			})), t.d(n, "isValidName", (function() {
				return re.a
			})), t.d(n, "id", (function() {
				return te.a
			})), t.d(n, "_TypedDataEncoder", (function() {
				return ne.a
			})), t.d(n, "getAddress", (function() {
				return $.a
			})), t.d(n, "getIcapAddress", (function() {
				return $.d
			})), t.d(n, "getContractAddress", (function() {
				return $.b
			})), t.d(n, "getCreate2Address", (function() {
				return $.c
			})), t.d(n, "isAddress", (function() {
				return $.e
			})), t.d(n, "formatEther", (function() {
				return Ye.b
			})), t.d(n, "parseEther", (function() {
				return Ye.d
			})), t.d(n, "formatUnits", (function() {
				return Ye.c
			})), t.d(n, "parseUnits", (function() {
				return Ye.e
			})), t.d(n, "commify", (function() {
				return Ye.a
			})), t.d(n, "computeHmac", (function() {
				return Ne.a
			})), t.d(n, "keccak256", (function() {
				return se.a
			})), t.d(n, "ripemd160", (function() {
				return Ne.b
			})), t.d(n, "sha256", (function() {
				return Ne.c
			})), t.d(n, "sha512", (function() {
				return Ne.d
			})), t.d(n, "randomBytes", (function() {
				return _e.a
			})), t.d(n, "shuffled", (function() {
				return be.a
			})), t.d(n, "solidityPack", (function() {
				return ve.b
			})), t.d(n, "solidityKeccak256", (function() {
				return ve.a
			})), t.d(n, "soliditySha256", (function() {
				return ve.c
			})), t.d(n, "splitSignature", (function() {
				return a.n
			})), t.d(n, "joinSignature", (function() {
				return a.m
			})), t.d(n, "accessListify", (function() {
				return He.b
			})), t.d(n, "parseTransaction", (function() {
				return He.d
			})), t.d(n, "serializeTransaction", (function() {
				return He.f
			})), t.d(n, "TransactionTypes", (function() {
				return He.a
			})), t.d(n, "getJsonWalletAddress", (function() {
				return ie.a
			})), t.d(n, "computeAddress", (function() {
				return He.c
			})), t.d(n, "recoverAddress", (function() {
				return He.e
			})), t.d(n, "computePublicKey", (function() {
				return ze.b
			})), t.d(n, "recoverPublicKey", (function() {
				return ze.c
			})), t.d(n, "verifyMessage", (function() {
				return q.b
			})), t.d(n, "verifyTypedData", (function() {
				return q.c
			})), t.d(n, "getAccountPath", (function() {
				return oe.d
			})), t.d(n, "mnemonicToEntropy", (function() {
				return oe.f
			})), t.d(n, "entropyToMnemonic", (function() {
				return oe.c
			})), t.d(n, "isValidMnemonic", (function() {
				return oe.e
			})), t.d(n, "mnemonicToSeed", (function() {
				return oe.g
			})), t.d(n, "SupportedAlgorithm", (function() {
				return Xe.a
			})), t.d(n, "UnicodeNormalizationForm", (function() {
				return Ke.a
			})), t.d(n, "Utf8ErrorReason", (function() {
				return Ke.c
			})), t.d(n, "Indexed", (function() {
				return X.a
			}));
			var o = {};
			t.r(o), t.d(o, "Signer", (function() {
				return k
			})), t.d(o, "Wallet", (function() {
				return q.a
			})), t.d(o, "VoidSigner", (function() {
				return G
			})), t.d(o, "getDefaultProvider", (function() {
				return V.getDefaultProvider
			})), t.d(o, "providers", (function() {
				return V
			})), t.d(o, "BaseContract", (function() {
				return i.a
			})), t.d(o, "Contract", (function() {
				return i.b
			})), t.d(o, "ContractFactory", (function() {
				return i.c
			})), t.d(o, "BigNumber", (function() {
				return s.a
			})), t.d(o, "FixedNumber", (function() {
				return _
			})), t.d(o, "constants", (function() {
				return z
			})), t.d(o, "errors", (function() {
				return me
			})), t.d(o, "logger", (function() {
				return Qe
			})), t.d(o, "utils", (function() {
				return n
			})), t.d(o, "wordlists", (function() {
				return K.a
			})), t.d(o, "version", (function() {
				return $e
			})), t.d(o, "Wordlist", (function() {
				return W.a
			}));
			var i = t("./node_modules/@ethersproject/contracts/lib.esm/index.js"),
				s = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				a = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				u = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				c = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js");
			const l = new u.a(c.a),
				d = {},
				f = s.a.from(0),
				h = s.a.from(-1);

			function g(e, r, t, n) {
				const o = {
					fault: r,
					operation: t
				};
				return void 0 !== n && (o.value = n), l.throwError(e, u.a.errors.NUMERIC_FAULT, o)
			}
			let m = "0";
			for (; m.length < 256;) m += m;

			function E(e) {
				if ("number" != typeof e) try {
					e = s.a.from(e).toNumber()
				} catch (r) {}
				return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + m.substring(0, e) : l.throwArgumentError("invalid decimal size", "decimals", e)
			}

			function p(e, r) {
				null == r && (r = 0);
				const t = E(r),
					n = (e = s.a.from(e)).lt(f);
				n && (e = e.mul(h));
				let o = e.mod(t).toString();
				for (; o.length < t.length - 1;) o = "0" + o;
				o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
				const i = e.div(t).toString();
				return e = 1 === t.length ? i : i + "." + o, n && (e = "-" + e), e
			}

			function N(e, r) {
				null == r && (r = 0);
				const t = E(r);
				"string" == typeof e && e.match(/^-?[0-9.,]+$/) || l.throwArgumentError("invalid decimal value", "value", e);
				const n = "-" === e.substring(0, 1);
				n && (e = e.substring(1)), "." === e && l.throwArgumentError("missing value", "value", e);
				const o = e.split(".");
				o.length > 2 && l.throwArgumentError("too many decimal points", "value", e);
				let i = o[0],
					a = o[1];
				for (i || (i = "0"), a || (a = "0");
					"0" === a[a.length - 1];) a = a.substring(0, a.length - 1);
				for (a.length > t.length - 1 && g("fractional component exceeds decimals", "underflow", "parseFixed"), "" === a && (a = "0"); a.length < t.length - 1;) a += "0";
				const u = s.a.from(i),
					c = s.a.from(a);
				let d = u.mul(t).add(c);
				return n && (d = d.mul(h)), d
			}
			class v {
				constructor(e, r, t, n) {
					e !== d && l.throwError("cannot use FixedFormat constructor; use FixedFormat.from", u.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.signed = r, this.width = t, this.decimals = n, this.name = (r ? "" : "u") + "fixed" + String(t) + "x" + String(n), this._multiplier = E(n), Object.freeze(this)
				}
				static from(e) {
					if (e instanceof v) return e;
					"number" == typeof e && (e = `fixed128x${e}`);
					let r = !0,
						t = 128,
						n = 18;
					if ("string" == typeof e)
						if ("fixed" === e);
						else if ("ufixed" === e) r = !1;
					else {
						const o = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
						o || l.throwArgumentError("invalid fixed format", "format", e), r = "u" !== o[1], t = parseInt(o[2]), n = parseInt(o[3])
					} else if (e) {
						const o = (r, t, n) => null == e[r] ? n : (typeof e[r] !== t && l.throwArgumentError("invalid fixed format (" + r + " not " + t + ")", "format." + r, e[r]), e[r]);
						r = o("signed", "boolean", r), t = o("width", "number", t), n = o("decimals", "number", n)
					}
					return t % 8 && l.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", t), n > 80 && l.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new v(d, r, t, n)
				}
			}
			class _ {
				constructor(e, r, t, n) {
					l.checkNew(new.target, _), e !== d && l.throwError("cannot use FixedNumber constructor; use FixedNumber.from", u.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.format = n, this._hex = r, this._value = t, this._isFixedNumber = !0, Object.freeze(this)
				}
				_checkFormat(e) {
					this.format.name !== e.format.name && l.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
				}
				addUnsafe(e) {
					this._checkFormat(e);
					const r = N(this._value, this.format.decimals),
						t = N(e._value, e.format.decimals);
					return _.fromValue(r.add(t), this.format.decimals, this.format)
				}
				subUnsafe(e) {
					this._checkFormat(e);
					const r = N(this._value, this.format.decimals),
						t = N(e._value, e.format.decimals);
					return _.fromValue(r.sub(t), this.format.decimals, this.format)
				}
				mulUnsafe(e) {
					this._checkFormat(e);
					const r = N(this._value, this.format.decimals),
						t = N(e._value, e.format.decimals);
					return _.fromValue(r.mul(t).div(this.format._multiplier), this.format.decimals, this.format)
				}
				divUnsafe(e) {
					this._checkFormat(e);
					const r = N(this._value, this.format.decimals),
						t = N(e._value, e.format.decimals);
					return _.fromValue(r.mul(this.format._multiplier).div(t), this.format.decimals, this.format)
				}
				floor() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let r = _.from(e[0], this.format);
					const t = !e[1].match(/^(0*)$/);
					return this.isNegative() && t && (r = r.subUnsafe(b.toFormat(r.format))), r
				}
				ceiling() {
					const e = this.toString().split(".");
					1 === e.length && e.push("0");
					let r = _.from(e[0], this.format);
					const t = !e[1].match(/^(0*)$/);
					return !this.isNegative() && t && (r = r.addUnsafe(b.toFormat(r.format))), r
				}
				round(e) {
					null == e && (e = 0);
					const r = this.toString().split(".");
					if (1 === r.length && r.push("0"), (e < 0 || e > 80 || e % 1) && l.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e) return this;
					const t = _.from("1" + m.substring(0, e), this.format),
						n = R.toFormat(this.format);
					return this.mulUnsafe(t).addUnsafe(n).floor().divUnsafe(t)
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
					e % 8 && l.throwArgumentError("invalid byte width", "width", e);
					const r = s.a.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
					return Object(a.h)(r, e / 8)
				}
				toUnsafeFloat() {
					return parseFloat(this.toString())
				}
				toFormat(e) {
					return _.fromString(this._value, e)
				}
				static fromValue(e, r, t) {
					return null != t || null == r || Object(s.b)(r) || (t = r, r = null), null == r && (r = 0), null == t && (t = "fixed"), _.fromString(p(e, r), v.from(t))
				}
				static fromString(e, r) {
					null == r && (r = "fixed");
					const t = v.from(r),
						n = N(e, t.decimals);
					!t.signed && n.lt(f) && g("unsigned value cannot be negative", "overflow", "value", e);
					let o = null;
					t.signed ? o = n.toTwos(t.width).toHexString() : (o = n.toHexString(), o = Object(a.h)(o, t.width / 8));
					const i = p(n, t.decimals);
					return new _(d, o, i, t)
				}
				static fromBytes(e, r) {
					null == r && (r = "fixed");
					const t = v.from(r);
					if (Object(a.a)(e).length > t.width / 8) throw new Error("overflow");
					let n = s.a.from(e);
					t.signed && (n = n.fromTwos(t.width));
					const o = n.toTwos((t.signed ? 0 : 1) + t.width).toHexString(),
						i = p(n, t.decimals);
					return new _(d, o, i, t)
				}
				static from(e, r) {
					if ("string" == typeof e) return _.fromString(e, r);
					if (Object(a.j)(e)) return _.fromBytes(e, r);
					try {
						return _.fromValue(e, 0, r)
					} catch (t) {
						if (t.code !== u.a.errors.INVALID_ARGUMENT) throw t
					}
					return l.throwArgumentError("invalid FixedNumber value", "value", e)
				}
				static isFixedNumber(e) {
					return !(!e || !e._isFixedNumber)
				}
			}
			const b = _.from(1),
				R = _.from("0.5"),
				w = "logger/5.4.0";
			let y = !1,
				A = !1;
			const P = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let T = P.default,
				I = null;
			const U = function() {
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
			var O, S;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(O || (O = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(S || (S = {}));
			class C {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == P[t] && this.throwArgumentError("invalid log level name", "logLevel", e), T > P[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(C.levels.DEBUG, e)
				}
				info(...e) {
					this._log(C.levels.INFO, e)
				}
				warn(...e) {
					this._log(C.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (A) return this.makeError("censored error", r, {});
					r || (r = C.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(t[e]))
						} catch (i) {
							n.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), n.push(`code=${r}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const i = new Error(e);
					return i.reason = o, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, C.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, n) {
					e || this.throwError(r, t, n)
				}
				assertArgument(e, r, t, n) {
					e || this.throwArgumentError(r, t, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), U && this.throwError("platform missing String.prototype.normalize", C.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: U
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, C.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, C.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, C.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, C.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", C.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", C.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", C.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return I || (I = new C(w)), I
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", C.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), y) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", C.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					A = !!e, y = !!r
				}
				static setLogLevel(e) {
					const r = P[e.toLowerCase()];
					null != r ? T = r : C.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new C(e)
				}
			}
			C.errors = S, C.levels = O;
			var j = function(e, r, t, n) {
				return new(t || (t = Promise))((function(o, i) {
					function s(e) {
						try {
							u(n.next(e))
						} catch (r) {
							i(r)
						}
					}

					function a(e) {
						try {
							u(n.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function u(e) {
						var r;
						e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(s, a)
					}
					u((n = n.apply(e, r || [])).next())
				}))
			};
			new C("properties/5.4.0");

			function M(e, r, t) {
				Object.defineProperty(e, r, {
					enumerable: !0,
					value: t,
					writable: !1
				})
			}

			function F(e) {
				return j(this, void 0, void 0, (function*() {
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
			var x = function(e, r, t, n) {
				return new(t || (t = Promise))((function(o, i) {
					function s(e) {
						try {
							u(n.next(e))
						} catch (r) {
							i(r)
						}
					}

					function a(e) {
						try {
							u(n.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function u(e) {
						var r;
						e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(s, a)
					}
					u((n = n.apply(e, r || [])).next())
				}))
			};
			const D = new C("abstract-signer/5.4.1"),
				L = ["accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
				B = [C.errors.INSUFFICIENT_FUNDS, C.errors.NONCE_EXPIRED, C.errors.REPLACEMENT_UNDERPRICED];
			class k {
				constructor() {
					D.checkAbstract(new.target, k), M(this, "_isSigner", !0)
				}
				getBalance(e) {
					return x(this, void 0, void 0, (function*() {
						return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
					}))
				}
				getTransactionCount(e) {
					return x(this, void 0, void 0, (function*() {
						return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
					}))
				}
				estimateGas(e) {
					return x(this, void 0, void 0, (function*() {
						this._checkProvider("estimateGas");
						const r = yield F(this.checkTransaction(e));
						return yield this.provider.estimateGas(r)
					}))
				}
				call(e, r) {
					return x(this, void 0, void 0, (function*() {
						this._checkProvider("call");
						const t = yield F(this.checkTransaction(e));
						return yield this.provider.call(t, r)
					}))
				}
				sendTransaction(e) {
					return x(this, void 0, void 0, (function*() {
						this._checkProvider("sendTransaction");
						const r = yield this.populateTransaction(e), t = yield this.signTransaction(r);
						return yield this.provider.sendTransaction(t)
					}))
				}
				getChainId() {
					return x(this, void 0, void 0, (function*() {
						return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
					}))
				}
				getGasPrice() {
					return x(this, void 0, void 0, (function*() {
						return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
					}))
				}
				getFeeData() {
					return x(this, void 0, void 0, (function*() {
						return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
					}))
				}
				resolveName(e) {
					return x(this, void 0, void 0, (function*() {
						return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
					}))
				}
				checkTransaction(e) {
					for (const t in e) - 1 === L.indexOf(t) && D.throwArgumentError("invalid transaction key: " + t, "transaction", e);
					const r = function(e) {
						const r = {};
						for (const t in e) r[t] = e[t];
						return r
					}(e);
					return null == r.from ? r.from = this.getAddress() : r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then(r => (r[0].toLowerCase() !== r[1].toLowerCase() && D.throwArgumentError("from address mismatch", "transaction", e), r[0])), r
				}
				populateTransaction(e) {
					return x(this, void 0, void 0, (function*() {
						const r = yield F(this.checkTransaction(e));
						null != r.to && (r.to = Promise.resolve(r.to).then(e => x(this, void 0, void 0, (function*() {
							if (null == e) return null;
							const r = yield this.resolveName(e);
							return null == r && D.throwArgumentError("provided ENS name resolves to null", "tx.to", e), r
						}))), r.to.catch(e => {}));
						const t = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
						if (null == r.gasPrice || 2 !== r.type && !t ? 0 !== r.type && 1 !== r.type || !t || D.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : D.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e), 2 !== r.type && null != r.type || null == r.maxFeePerGas || null == r.maxPriorityFeePerGas)
							if (0 === r.type || 1 === r.type) null == r.gasPrice && (r.gasPrice = this.getGasPrice());
							else {
								const e = yield this.getFeeData();
								if (null == r.type)
									if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
										if (r.type = 2, null != r.gasPrice) {
											const e = r.gasPrice;
											delete r.gasPrice, r.maxFeePerGas = e, r.maxPriorityFeePerGas = e
										} else null == r.maxFeePerGas && (r.maxFeePerGas = e.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
								else null != e.gasPrice ? (t && D.throwError("network does not support EIP-1559", C.errors.UNSUPPORTED_OPERATION, {
									operation: "populateTransaction"
								}), null == r.gasPrice && (r.gasPrice = e.gasPrice), r.type = 0) : D.throwError("failed to get consistent fee data", C.errors.UNSUPPORTED_OPERATION, {
									operation: "signer.getFeeData"
								});
								else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = e.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
							}
						else r.type = 2;
						return null == r.nonce && (r.nonce = this.getTransactionCount("pending")), null == r.gasLimit && (r.gasLimit = this.estimateGas(r).catch(e => {
							if (B.indexOf(e.code) >= 0) throw e;
							return D.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", C.errors.UNPREDICTABLE_GAS_LIMIT, {
								error: e,
								tx: r
							})
						})), null == r.chainId ? r.chainId = this.getChainId() : r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then(r => (0 !== r[1] && r[0] !== r[1] && D.throwArgumentError("chainId address mismatch", "transaction", e), r[0])), yield F(r)
					}))
				}
				_checkProvider(e) {
					this.provider || D.throwError("missing provider", C.errors.UNSUPPORTED_OPERATION, {
						operation: e || "_checkProvider"
					})
				}
				static isSigner(e) {
					return !(!e || !e._isSigner)
				}
			}
			class G extends k {
				constructor(e, r) {
					D.checkNew(new.target, G), super(), M(this, "address", e), M(this, "provider", r || null)
				}
				getAddress() {
					return Promise.resolve(this.address)
				}
				_fail(e, r) {
					return Promise.resolve().then(() => {
						D.throwError(e, C.errors.UNSUPPORTED_OPERATION, {
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
					return new G(this.address, e)
				}
			}
			var q = t("./node_modules/@ethersproject/wallet/lib.esm/index.js"),
				z = t("./node_modules/@ethersproject/constants/lib.esm/index.js"),
				V = t("./node_modules/@ethersproject/providers/lib.esm/index.js"),
				K = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlists.js"),
				W = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlist.js"),
				H = t("./node_modules/@ethersproject/abi/lib.esm/abi-coder.js"),
				Y = t("./node_modules/@ethersproject/abi/lib.esm/fragments.js"),
				J = t("./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js"),
				X = t("./node_modules/@ethersproject/abi/lib.esm/interface.js"),
				$ = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				Q = t("./node_modules/@ethersproject/base64/lib.esm/index.js"),
				Z = t("./node_modules/@ethersproject/basex/lib.esm/index.js"),
				ee = t("./node_modules/@ethersproject/hash/lib.esm/message.js"),
				re = t("./node_modules/@ethersproject/hash/lib.esm/namehash.js"),
				te = t("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				ne = t("./node_modules/@ethersproject/hash/lib.esm/typed-data.js"),
				oe = t("./node_modules/@ethersproject/hdnode/lib.esm/index.js"),
				ie = t("./node_modules/@ethersproject/json-wallets/lib.esm/inspect.js"),
				se = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
			const ae = "logger/5.4.1";
			let ue = !1,
				ce = !1;
			const le = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let de = le.default,
				fe = null;
			const he = function() {
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
			var ge, me;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(ge || (ge = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(me || (me = {}));
			const Ee = "0123456789abcdef";
			class pe {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == le[t] && this.throwArgumentError("invalid log level name", "logLevel", e), de > le[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(pe.levels.DEBUG, e)
				}
				info(...e) {
					this._log(pe.levels.INFO, e)
				}
				warn(...e) {
					this._log(pe.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (ce) return this.makeError("censored error", r, {});
					r || (r = pe.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += Ee[r[e] >> 4], t += Ee[15 & r[e]];
								n.push(e + "=Uint8Array(0x" + t + ")")
							} else n.push(e + "=" + JSON.stringify(r))
						} catch (i) {
							n.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), n.push(`code=${r}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const i = new Error(e);
					return i.reason = o, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, pe.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, n) {
					e || this.throwError(r, t, n)
				}
				assertArgument(e, r, t, n) {
					e || this.throwArgumentError(r, t, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), he && this.throwError("platform missing String.prototype.normalize", pe.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: he
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, pe.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, pe.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, pe.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, pe.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", pe.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", pe.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", pe.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return fe || (fe = new pe(ae)), fe
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", pe.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), ue) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", pe.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					ce = !!e, ue = !!r
				}
				static setLogLevel(e) {
					const r = le[e.toLowerCase()];
					null != r ? de = r : pe.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new pe(e)
				}
			}
			pe.errors = me, pe.levels = ge;
			var Ne = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js"),
				ve = t("./node_modules/@ethersproject/solidity/lib.esm/index.js"),
				_e = t("./node_modules/@ethersproject/random/lib.esm/random.js"),
				be = t("./node_modules/@ethersproject/random/lib.esm/shuffle.js");
			const Re = "logger/5.4.0";
			let we = !1,
				ye = !1;
			const Ae = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let Pe = Ae.default,
				Te = null;
			const Ie = function() {
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
			var Ue, Oe;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(Ue || (Ue = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(Oe || (Oe = {}));
			class Se {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == Ae[t] && this.throwArgumentError("invalid log level name", "logLevel", e), Pe > Ae[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(Se.levels.DEBUG, e)
				}
				info(...e) {
					this._log(Se.levels.INFO, e)
				}
				warn(...e) {
					this._log(Se.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (ye) return this.makeError("censored error", r, {});
					r || (r = Se.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(t[e]))
						} catch (i) {
							n.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), n.push(`code=${r}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const i = new Error(e);
					return i.reason = o, i.code = r, Object.keys(t).forEach((function(e) {
						i[e] = t[e]
					})), i
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, Se.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, n) {
					e || this.throwError(r, t, n)
				}
				assertArgument(e, r, t, n) {
					e || this.throwArgumentError(r, t, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), Ie && this.throwError("platform missing String.prototype.normalize", Se.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: Ie
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, Se.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, Se.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, Se.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, Se.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", Se.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", Se.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", Se.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return Te || (Te = new Se(Re)), Te
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", Se.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), we) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", Se.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					ye = !!e, we = !!r
				}
				static setLogLevel(e) {
					const r = Ae[e.toLowerCase()];
					null != r ? Pe = r : Se.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new Se(e)
				}
			}
			Se.errors = Oe, Se.levels = Ue;
			var Ce = function(e, r, t, n) {
				return new(t || (t = Promise))((function(o, i) {
					function s(e) {
						try {
							u(n.next(e))
						} catch (r) {
							i(r)
						}
					}

					function a(e) {
						try {
							u(n.throw(e))
						} catch (r) {
							i(r)
						}
					}

					function u(e) {
						var r;
						e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
							e(r)
						}))).then(s, a)
					}
					u((n = n.apply(e, r || [])).next())
				}))
			};
			const je = new Se("properties/5.4.1");

			function Me(e, r, t) {
				Object.defineProperty(e, r, {
					enumerable: !0,
					value: t,
					writable: !1
				})
			}

			function Fe(e, r) {
				for (let t = 0; t < 32; t++) {
					if (e[r]) return e[r];
					if (!e.prototype || "object" != typeof e.prototype) break;
					e = Object.getPrototypeOf(e.prototype).constructor
				}
				return null
			}

			function xe(e) {
				return Ce(this, void 0, void 0, (function*() {
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

			function De(e, r) {
				e && "object" == typeof e || je.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach(t => {
					r[t] || je.throwArgumentError("invalid object key - " + t, "transaction:" + t, e)
				})
			}

			function Le(e) {
				const r = {};
				for (const t in e) r[t] = e[t];
				return r
			}
			const Be = {
				bigint: !0,
				boolean: !0,
				function: !0,
				number: !0,
				string: !0
			};

			function ke(e) {
				if (function e(r) {
						if (null == r || Be[typeof r]) return !0;
						if (Array.isArray(r) || "object" == typeof r) {
							if (!Object.isFrozen(r)) return !1;
							const n = Object.keys(r);
							for (let o = 0; o < n.length; o++) {
								let i = null;
								try {
									i = r[n[o]]
								} catch (t) {
									continue
								}
								if (!e(i)) return !1
							}
							return !0
						}
						return je.throwArgumentError(`Cannot deepCopy ${typeof r}`, "object", r)
					}(e)) return e;
				if (Array.isArray(e)) return Object.freeze(e.map(e => Ge(e)));
				if ("object" == typeof e) {
					const r = {};
					for (const t in e) {
						const n = e[t];
						void 0 !== n && Me(r, t, Ge(n))
					}
					return r
				}
				return je.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
			}

			function Ge(e) {
				return ke(e)
			}
			var qe = t("./node_modules/@ethersproject/rlp/lib.esm/index.js"),
				ze = t("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				Ve = t("./node_modules/@ethersproject/strings/lib.esm/idna.js"),
				Ke = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				We = t("./node_modules/@ethersproject/strings/lib.esm/bytes32.js"),
				He = t("./node_modules/@ethersproject/transactions/lib.esm/index.js"),
				Ye = t("./node_modules/@ethersproject/units/lib.esm/index.js"),
				Je = t("./node_modules/@ethersproject/web/lib.esm/index.js"),
				Xe = t("./node_modules/@ethersproject/sha2/lib.esm/types.js");
			const $e = "ethers/5.4.7",
				Qe = new pe($e);
			try {
				const e = window;
				null == e._ethers && (e._ethers = o)
			} catch (Ze) {}
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.2"
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return f
			})), t.d(r, "a", (function() {
				return g
			}));
			var n = t("./node_modules/bn.js/lib/bn.js"),
				o = t.n(n),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				u = o.a.BN;
			const c = new s.a(a.a),
				l = {},
				d = 9007199254740991;

			function f(e) {
				return null != e && (g.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(i.l)(e) || "bigint" == typeof e || Object(i.j)(e))
			}
			let h = !1;
			class g {
				constructor(e, r) {
					c.checkNew(new.target, g), e !== l && c.throwError("cannot call constructor directly; use BigNumber.from", s.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return E(p(this).fromTwos(e))
				}
				toTwos(e) {
					return E(p(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? g.from(this._hex.substring(1)) : this
				}
				add(e) {
					return E(p(this).add(p(e)))
				}
				sub(e) {
					return E(p(this).sub(p(e)))
				}
				div(e) {
					return g.from(e).isZero() && N("division by zero", "div"), E(p(this).div(p(e)))
				}
				mul(e) {
					return E(p(this).mul(p(e)))
				}
				mod(e) {
					const r = p(e);
					return r.isNeg() && N("cannot modulo negative values", "mod"), E(p(this).umod(r))
				}
				pow(e) {
					const r = p(e);
					return r.isNeg() && N("cannot raise to negative values", "pow"), E(p(this).pow(r))
				}
				and(e) {
					const r = p(e);
					return (this.isNegative() || r.isNeg()) && N("cannot 'and' negative values", "and"), E(p(this).and(r))
				}
				or(e) {
					const r = p(e);
					return (this.isNegative() || r.isNeg()) && N("cannot 'or' negative values", "or"), E(p(this).or(r))
				}
				xor(e) {
					const r = p(e);
					return (this.isNegative() || r.isNeg()) && N("cannot 'xor' negative values", "xor"), E(p(this).xor(r))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && N("cannot mask negative values", "mask"), E(p(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && N("cannot shift negative values", "shl"), E(p(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && N("cannot shift negative values", "shr"), E(p(this).shrn(e))
				}
				eq(e) {
					return p(this).eq(p(e))
				}
				lt(e) {
					return p(this).lt(p(e))
				}
				lte(e) {
					return p(this).lte(p(e))
				}
				gt(e) {
					return p(this).gt(p(e))
				}
				gte(e) {
					return p(this).gte(p(e))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return p(this).isZero()
				}
				toNumber() {
					try {
						return p(this).toNumber()
					} catch (e) {
						N("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return c.throwError("this platform does not support BigInt", s.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", s.a.errors.UNEXPECTED_ARGUMENT, {})), p(this).toString(10)
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
					if (e instanceof g) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new g(l, m(e)) : e.match(/^-?[0-9]+$/) ? new g(l, m(new u(e))) : c.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && N("underflow", "BigNumber.from", e), (e >= d || e <= -d) && N("overflow", "BigNumber.from", e), g.from(String(e));
					const r = e;
					if ("bigint" == typeof r) return g.from(r.toString());
					if (Object(i.j)(r)) return g.from(Object(i.i)(r));
					if (r)
						if (r.toHexString) {
							const e = r.toHexString();
							if ("string" == typeof e) return g.from(e)
						} else {
							let e = r._hex;
							if (null == e && "BigNumber" === r.type && (e = r.hex), "string" == typeof e && (Object(i.l)(e) || "-" === e[0] && Object(i.l)(e.substring(1)))) return g.from(e)
						} return c.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function m(e) {
				if ("string" != typeof e) return m(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && c.throwArgumentError("invalid hex", "value", e), "0x00" === (e = m(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function E(e) {
				return g.from(m(e))
			}

			function p(e) {
				const r = g.from(e).toHexString();
				return "-" === r[0] ? new u("-" + r.substring(3), 16) : new u(r.substring(2), 16)
			}

			function N(e, r, t) {
				const n = {
					fault: e,
					operation: r
				};
				return null != t && (n.value = t), c.throwError(e, s.a.errors.NUMERIC_FAULT, n)
			}
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			}));
			const n = "logger/5.4.0";
			let o = !1,
				i = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let a = s.default,
				u = null;
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
			var l, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(l || (l = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
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
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), a > s[t] || console.log.apply(console, r)
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
					const n = [];
					Object.keys(t).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(t[e]))
						} catch (s) {
							n.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), n.push(`code=${r}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const s = new Error(e);
					return s.reason = o, s.code = r, Object.keys(t).forEach((function(e) {
						s[e] = t[e]
					})), s
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
				assert(e, r, t, n) {
					e || this.throwError(r, t, n)
				}
				assertArgument(e, r, t, n) {
					e || this.throwArgumentError(r, t, n)
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
					return u || (u = new f(n)), u
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, o = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? a = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = d, f.levels = l
		},
		"./node_modules/qrcode/lib/browser.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/can-promise.js"),
				o = t("./node_modules/qrcode/lib/core/qrcode.js"),
				i = t("./node_modules/qrcode/lib/renderer/canvas.js"),
				s = t("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function a(e, r, t, i, s) {
				var a = [].slice.call(arguments, 1),
					u = a.length,
					c = "function" == typeof a[u - 1];
				if (!c && !n()) throw new Error("Callback required as last argument");
				if (!c) {
					if (u < 1) throw new Error("Too few arguments provided");
					return 1 === u ? (t = r, r = i = void 0) : 2 !== u || r.getContext || (i = t, t = r, r = void 0), new Promise((function(n, s) {
						try {
							var a = o.create(t, i);
							n(e(a, r, i))
						} catch (u) {
							s(u)
						}
					}))
				}
				if (u < 2) throw new Error("Too few arguments provided");
				2 === u ? (s = t, t = r, r = i = void 0) : 3 === u && (r.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = t, t = r, r = void 0));
				try {
					var l = o.create(t, i);
					s(null, e(l, r, i))
				} catch (d) {
					s(d)
				}
			}
			r.create = o.create, r.toCanvas = a.bind(null, i.render), r.toDataURL = a.bind(null, i.renderToDataURL), r.toString = a.bind(null, (function(e, r, t) {
				return s.render(e, t)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, r) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			r.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var r = Math.floor(e / 7) + 2, t = n(e), o = 145 === t ? 26 : 2 * Math.ceil((t - 13) / (2 * r - 2)), i = [t - 7], s = 1; s < r - 1; s++) i[s] = i[s - 1] - o;
				return i.push(6), i.reverse()
			}, r.getPositions = function(e) {
				for (var t = [], n = r.getRowColCoords(e), o = n.length, i = 0; i < o; i++)
					for (var s = 0; s < o; s++) 0 === i && 0 === s || 0 === i && s === o - 1 || i === o - 1 && 0 === s || t.push([n[i], n[s]]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = n.ALPHANUMERIC, this.data = e
			}
			i.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var r;
				for (r = 0; r + 2 <= this.data.length; r += 2) {
					var t = 45 * o.indexOf(this.data[r]);
					t += o.indexOf(this.data[r + 1]), e.put(t, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[r]), 6)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(e, r) {
			function t() {
				this.buffer = [], this.length = 0
			}
			t.prototype = {
				get: function(e) {
					var r = Math.floor(e / 8);
					return 1 == (this.buffer[r] >>> 7 - e % 8 & 1)
				},
				put: function(e, r) {
					for (var t = 0; t < r; t++) this.putBit(1 == (e >>> r - t - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					var r = Math.floor(this.length / 8);
					this.buffer.length <= r && this.buffer.push(0), e && (this.buffer[r] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = t
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function o(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e)
			}
			o.prototype.set = function(e, r, t, n) {
				var o = e * this.size + r;
				this.data[o] = t, n && (this.reservedBit[o] = !0)
			}, o.prototype.get = function(e, r) {
				return this.data[e * this.size + r]
			}, o.prototype.xor = function(e, r, t) {
				this.data[e * this.size + r] ^= t
			}, o.prototype.isReserved = function(e, r) {
				return this.reservedBit[e * this.size + r]
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/mode.js");

			function i(e) {
				this.mode = o.BYTE, this.data = n.from(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (var r = 0, t = this.data.length; r < t; r++) e.put(this.data[r], 8)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			r.getBlocksCount = function(e, r) {
				switch (r) {
					case n.L:
						return o[4 * (e - 1) + 0];
					case n.M:
						return o[4 * (e - 1) + 1];
					case n.Q:
						return o[4 * (e - 1) + 2];
					case n.H:
						return o[4 * (e - 1) + 3];
					default:
						return
				}
			}, r.getTotalCodewordsCount = function(e, r) {
				switch (r) {
					case n.L:
						return i[4 * (e - 1) + 0];
					case n.M:
						return i[4 * (e - 1) + 1];
					case n.Q:
						return i[4 * (e - 1) + 2];
					case n.H:
						return i[4 * (e - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/qrcode/lib/core/error-correction-level.js": function(e, r) {
			r.L = {
				bit: 1
			}, r.M = {
				bit: 0
			}, r.Q = {
				bit: 3
			}, r.H = {
				bit: 2
			}, r.isValid = function(e) {
				return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
			}, r.from = function(e, t) {
				if (r.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "l":
							case "low":
								return r.L;
							case "m":
							case "medium":
								return r.M;
							case "q":
							case "quartile":
								return r.Q;
							case "h":
							case "high":
								return r.H;
							default:
								throw new Error("Unknown EC Level: " + e)
						}
					}(e)
				} catch (n) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			r.getPositions = function(e) {
				var r = n(e);
				return [
					[0, 0],
					[r - 7, 0],
					[0, r - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js"),
				o = n.getBCHDigit(1335);
			r.getEncodedBits = function(e, r) {
				for (var t = e.bit << 3 | r, i = t << 10; n.getBCHDigit(i) - o >= 0;) i ^= 1335 << n.getBCHDigit(i) - o;
				return 21522 ^ (t << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n.alloc(512),
				i = n.alloc(256);
			! function() {
				for (var e = 1, r = 0; r < 255; r++) o[r] = e, i[e] = r, 256 & (e <<= 1) && (e ^= 285);
				for (r = 255; r < 512; r++) o[r] = o[r - 255]
			}(), r.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return i[e]
			}, r.exp = function(e) {
				return o[e]
			}, r.mul = function(e, r) {
				return 0 === e || 0 === r ? 0 : o[i[e] + i[r]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = t("./node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = n.KANJI, this.data = e
			}
			i.getBitsLength = function(e) {
				return 13 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var r;
				for (r = 0; r < this.data.length; r++) {
					var t = o.toSJIS(this.data[r]);
					if (t >= 33088 && t <= 40956) t -= 33088;
					else {
						if (!(t >= 57408 && t <= 60351)) throw new Error("Invalid SJIS character: " + this.data[r] + "\nMake sure your charset is UTF-8");
						t -= 49472
					}
					t = 192 * (t >>> 8 & 255) + (255 & t), e.put(t, 13)
				}
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/mask-pattern.js": function(e, r) {
			r.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			var t = 3,
				n = 3,
				o = 40,
				i = 10;

			function s(e, t, n) {
				switch (e) {
					case r.Patterns.PATTERN000:
						return (t + n) % 2 == 0;
					case r.Patterns.PATTERN001:
						return t % 2 == 0;
					case r.Patterns.PATTERN010:
						return n % 3 == 0;
					case r.Patterns.PATTERN011:
						return (t + n) % 3 == 0;
					case r.Patterns.PATTERN100:
						return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
					case r.Patterns.PATTERN101:
						return t * n % 2 + t * n % 3 == 0;
					case r.Patterns.PATTERN110:
						return (t * n % 2 + t * n % 3) % 2 == 0;
					case r.Patterns.PATTERN111:
						return (t * n % 3 + (t + n) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			r.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, r.from = function(e) {
				return r.isValid(e) ? parseInt(e, 10) : void 0
			}, r.getPenaltyN1 = function(e) {
				for (var r = e.size, n = 0, o = 0, i = 0, s = null, a = null, u = 0; u < r; u++) {
					o = i = 0, s = a = null;
					for (var c = 0; c < r; c++) {
						var l = e.get(u, c);
						l === s ? o++ : (o >= 5 && (n += t + (o - 5)), s = l, o = 1), (l = e.get(c, u)) === a ? i++ : (i >= 5 && (n += t + (i - 5)), a = l, i = 1)
					}
					o >= 5 && (n += t + (o - 5)), i >= 5 && (n += t + (i - 5))
				}
				return n
			}, r.getPenaltyN2 = function(e) {
				for (var r = e.size, t = 0, o = 0; o < r - 1; o++)
					for (var i = 0; i < r - 1; i++) {
						var s = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
						4 !== s && 0 !== s || t++
					}
				return t * n
			}, r.getPenaltyN3 = function(e) {
				for (var r = e.size, t = 0, n = 0, i = 0, s = 0; s < r; s++) {
					n = i = 0;
					for (var a = 0; a < r; a++) n = n << 1 & 2047 | e.get(s, a), a >= 10 && (1488 === n || 93 === n) && t++, i = i << 1 & 2047 | e.get(a, s), a >= 10 && (1488 === i || 93 === i) && t++
				}
				return t * o
			}, r.getPenaltyN4 = function(e) {
				for (var r = 0, t = e.data.length, n = 0; n < t; n++) r += e.data[n];
				return Math.abs(Math.ceil(100 * r / t / 5) - 10) * i
			}, r.applyMask = function(e, r) {
				for (var t = r.size, n = 0; n < t; n++)
					for (var o = 0; o < t; o++) r.isReserved(o, n) || r.xor(o, n, s(e, o, n))
			}, r.getBestMask = function(e, t) {
				for (var n = Object.keys(r.Patterns).length, o = 0, i = 1 / 0, s = 0; s < n; s++) {
					t(s), r.applyMask(s, e);
					var a = r.getPenaltyN1(e) + r.getPenaltyN2(e) + r.getPenaltyN3(e) + r.getPenaltyN4(e);
					r.applyMask(s, e), a < i && (i = a, o = s)
				}
				return o
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/version-check.js"),
				o = t("./node_modules/qrcode/lib/core/regex.js");
			r.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, r.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, r.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, r.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, r.MIXED = {
				bit: -1
			}, r.getCharCountIndicator = function(e, r) {
				if (!e.ccBits) throw new Error("Invalid mode: " + e);
				if (!n.isValid(r)) throw new Error("Invalid version: " + r);
				return r >= 1 && r < 10 ? e.ccBits[0] : r < 27 ? e.ccBits[1] : e.ccBits[2]
			}, r.getBestModeForData = function(e) {
				return o.testNumeric(e) ? r.NUMERIC : o.testAlphanumeric(e) ? r.ALPHANUMERIC : o.testKanji(e) ? r.KANJI : r.BYTE
			}, r.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, r.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, r.from = function(e, t) {
				if (r.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "numeric":
								return r.NUMERIC;
							case "alphanumeric":
								return r.ALPHANUMERIC;
							case "kanji":
								return r.KANJI;
							case "byte":
								return r.BYTE;
							default:
								throw new Error("Unknown mode: " + e)
						}
					}(e)
				} catch (n) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js");

			function o(e) {
				this.mode = n.NUMERIC, this.data = e.toString()
			}
			o.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var r, t, n;
				for (r = 0; r + 3 <= this.data.length; r += 3) t = this.data.substr(r, 3), n = parseInt(t, 10), e.put(n, 10);
				var o = this.data.length - r;
				o > 0 && (t = this.data.substr(r), n = parseInt(t, 10), e.put(n, 3 * o + 1))
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/galois-field.js");
			r.mul = function(e, r) {
				for (var t = n.alloc(e.length + r.length - 1), i = 0; i < e.length; i++)
					for (var s = 0; s < r.length; s++) t[i + s] ^= o.mul(e[i], r[s]);
				return t
			}, r.mod = function(e, r) {
				for (var t = n.from(e); t.length - r.length >= 0;) {
					for (var i = t[0], s = 0; s < r.length; s++) t[s] ^= o.mul(r[s], i);
					for (var a = 0; a < t.length && 0 === t[a];) a++;
					t = t.slice(a)
				}
				return t
			}, r.generateECPolynomial = function(e) {
				for (var t = n.from([1]), i = 0; i < e; i++) t = r.mul(t, [1, o.exp(i)]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/utils.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/bit-buffer.js"),
				a = t("./node_modules/qrcode/lib/core/bit-matrix.js"),
				u = t("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				c = t("./node_modules/qrcode/lib/core/finder-pattern.js"),
				l = t("./node_modules/qrcode/lib/core/mask-pattern.js"),
				d = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = t("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = t("./node_modules/qrcode/lib/core/version.js"),
				g = t("./node_modules/qrcode/lib/core/format-info.js"),
				m = t("./node_modules/qrcode/lib/core/mode.js"),
				E = t("./node_modules/qrcode/lib/core/segments.js"),
				p = t("./node_modules/qrcode/node_modules/isarray/index.js");

			function N(e, r, t) {
				var n, o, i = e.size,
					s = g.getEncodedBits(r, t);
				for (n = 0; n < 15; n++) o = 1 == (s >> n & 1), n < 6 ? e.set(n, 8, o, !0) : n < 8 ? e.set(n + 1, 8, o, !0) : e.set(i - 15 + n, 8, o, !0), n < 8 ? e.set(8, i - n - 1, o, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, o, !0) : e.set(8, 15 - n - 1, o, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function v(e, r, t) {
				var i = new s;
				t.forEach((function(r) {
					i.put(r.mode.bit, 4), i.put(r.getLength(), m.getCharCountIndicator(r.mode, e)), r.write(i)
				}));
				var a = 8 * (o.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, r));
				for (i.getLengthInBits() + 4 <= a && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var u = (a - i.getLengthInBits()) / 8, c = 0; c < u; c++) i.put(c % 2 ? 17 : 236, 8);
				return function(e, r, t) {
					for (var i = o.getSymbolTotalCodewords(r), s = d.getTotalCodewordsCount(r, t), a = i - s, u = d.getBlocksCount(r, t), c = u - i % u, l = Math.floor(i / u), h = Math.floor(a / u), g = h + 1, m = l - h, E = new f(m), p = 0, N = new Array(u), v = new Array(u), _ = 0, b = n.from(e.buffer), R = 0; R < u; R++) {
						var w = R < c ? h : g;
						N[R] = b.slice(p, p + w), v[R] = E.encode(N[R]), p += w, _ = Math.max(_, w)
					}
					var y, A, P = n.alloc(i),
						T = 0;
					for (y = 0; y < _; y++)
						for (A = 0; A < u; A++) y < N[A].length && (P[T++] = N[A][y]);
					for (y = 0; y < m; y++)
						for (A = 0; A < u; A++) P[T++] = v[A][y];
					return P
				}(i, e, r)
			}

			function _(e, r, t, n) {
				var i;
				if (p(e)) i = E.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var s = r;
					if (!s) {
						var d = E.rawSplit(e);
						s = h.getBestVersionForData(d, t)
					}
					i = E.fromString(e, s || 40)
				}
				var f = h.getBestVersionForData(i, t);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (r) {
					if (r < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else r = f;
				var g = v(r, t, i),
					m = o.getSymbolSize(r),
					_ = new a(m);
				return function(e, r) {
						for (var t = e.size, n = c.getPositions(r), o = 0; o < n.length; o++)
							for (var i = n[o][0], s = n[o][1], a = -1; a <= 7; a++)
								if (!(i + a <= -1 || t <= i + a))
									for (var u = -1; u <= 7; u++) s + u <= -1 || t <= s + u || (a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && u >= 2 && u <= 4 ? e.set(i + a, s + u, !0, !0) : e.set(i + a, s + u, !1, !0))
					}(_, r),
					function(e) {
						for (var r = e.size, t = 8; t < r - 8; t++) {
							var n = t % 2 == 0;
							e.set(t, 6, n, !0), e.set(6, t, n, !0)
						}
					}(_),
					function(e, r) {
						for (var t = u.getPositions(r), n = 0; n < t.length; n++)
							for (var o = t[n][0], i = t[n][1], s = -2; s <= 2; s++)
								for (var a = -2; a <= 2; a++) - 2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? e.set(o + s, i + a, !0, !0) : e.set(o + s, i + a, !1, !0)
					}(_, r), N(_, t, 0), r >= 7 && function(e, r) {
						for (var t, n, o, i = e.size, s = h.getEncodedBits(r), a = 0; a < 18; a++) t = Math.floor(a / 3), n = a % 3 + i - 8 - 3, o = 1 == (s >> a & 1), e.set(t, n, o, !0), e.set(n, t, o, !0)
					}(_, r),
					function(e, r) {
						for (var t = e.size, n = -1, o = t - 1, i = 7, s = 0, a = t - 1; a > 0; a -= 2)
							for (6 === a && a--;;) {
								for (var u = 0; u < 2; u++)
									if (!e.isReserved(o, a - u)) {
										var c = !1;
										s < r.length && (c = 1 == (r[s] >>> i & 1)), e.set(o, a - u, c), -1 === --i && (s++, i = 7)
									} if ((o += n) < 0 || t <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(_, g), isNaN(n) && (n = l.getBestMask(_, N.bind(null, _, t))), l.applyMask(n, _), N(_, t, n), {
						modules: _,
						version: r,
						errorCorrectionLevel: t,
						maskPattern: n,
						segments: i
					}
			}
			r.create = function(e, r) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var t, n, s = i.M;
				return void 0 !== r && (s = i.from(r.errorCorrectionLevel, i.M), t = h.from(r.version), n = l.from(r.maskPattern), r.toSJISFunc && o.setToSJISFunction(r.toSJISFunc)), _(e, t, s, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/polynomial.js"),
				i = t("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function s(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			s.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, s.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var r = n.alloc(this.degree),
					t = i.concat([e, r], e.length + this.degree),
					s = o.mod(t, this.genPoly),
					a = this.degree - s.length;
				if (a > 0) {
					var u = n.alloc(this.degree);
					return s.copy(u, a), u
				}
				return s
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, r) {
			var t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (t = t.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			r.KANJI = new RegExp(t, "g"), r.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), r.BYTE = new RegExp(n, "g"), r.NUMERIC = new RegExp("[0-9]+", "g"), r.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + t + "$"),
				i = new RegExp("^[0-9]+$"),
				s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			r.testKanji = function(e) {
				return o.test(e)
			}, r.testNumeric = function(e) {
				return i.test(e)
			}, r.testAlphanumeric = function(e) {
				return s.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = t("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = t("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				s = t("./node_modules/qrcode/lib/core/byte-data.js"),
				a = t("./node_modules/qrcode/lib/core/kanji-data.js"),
				u = t("./node_modules/qrcode/lib/core/regex.js"),
				c = t("./node_modules/qrcode/lib/core/utils.js"),
				l = t("./node_modules/dijkstrajs/dijkstra.js");

			function d(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function f(e, r, t) {
				for (var n, o = []; null !== (n = e.exec(t));) o.push({
					data: n[0],
					index: n.index,
					mode: r,
					length: n[0].length
				});
				return o
			}

			function h(e) {
				var r, t, o = f(u.NUMERIC, n.NUMERIC, e),
					i = f(u.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return c.isKanjiModeEnabled() ? (r = f(u.BYTE, n.BYTE, e), t = f(u.KANJI, n.KANJI, e)) : (r = f(u.BYTE_KANJI, n.BYTE, e), t = []), o.concat(i, r, t).sort((function(e, r) {
					return e.index - r.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function g(e, r) {
				switch (r) {
					case n.NUMERIC:
						return o.getBitsLength(e);
					case n.ALPHANUMERIC:
						return i.getBitsLength(e);
					case n.KANJI:
						return a.getBitsLength(e);
					case n.BYTE:
						return s.getBitsLength(e)
				}
			}

			function m(e, r) {
				var t, u = n.getBestModeForData(e);
				if ((t = n.from(r, u)) !== n.BYTE && t.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(t) + ".\n Suggested mode is: " + n.toString(u));
				switch (t !== n.KANJI || c.isKanjiModeEnabled() || (t = n.BYTE), t) {
					case n.NUMERIC:
						return new o(e);
					case n.ALPHANUMERIC:
						return new i(e);
					case n.KANJI:
						return new a(e);
					case n.BYTE:
						return new s(e)
				}
			}
			r.fromArray = function(e) {
				return e.reduce((function(e, r) {
					return "string" == typeof r ? e.push(m(r, null)) : r.data && e.push(m(r.data, r.mode)), e
				}), [])
			}, r.fromString = function(e, t) {
				for (var o = function(e, r) {
						for (var t = {}, o = {
								start: {}
							}, i = ["start"], s = 0; s < e.length; s++) {
							for (var a = e[s], u = [], c = 0; c < a.length; c++) {
								var l = a[c],
									d = "" + s + c;
								u.push(d), t[d] = {
									node: l,
									lastCount: 0
								}, o[d] = {};
								for (var f = 0; f < i.length; f++) {
									var h = i[f];
									t[h] && t[h].node.mode === l.mode ? (o[h][d] = g(t[h].lastCount + l.length, l.mode) - g(t[h].lastCount, l.mode), t[h].lastCount += l.length) : (t[h] && (t[h].lastCount = l.length), o[h][d] = g(l.length, l.mode) + 4 + n.getCharCountIndicator(l.mode, r))
								}
							}
							i = u
						}
						for (f = 0; f < i.length; f++) o[i[f]].end = 0;
						return {
							map: o,
							table: t
						}
					}(function(e) {
						for (var r = [], t = 0; t < e.length; t++) {
							var o = e[t];
							switch (o.mode) {
								case n.NUMERIC:
									r.push([o, {
										data: o.data,
										mode: n.ALPHANUMERIC,
										length: o.length
									}, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.ALPHANUMERIC:
									r.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.KANJI:
									r.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: d(o.data)
									}]);
									break;
								case n.BYTE:
									r.push([{
										data: o.data,
										mode: n.BYTE,
										length: d(o.data)
									}])
							}
						}
						return r
					}(h(e, c.isKanjiModeEnabled())), t), i = l.find_path(o.map, "start", "end"), s = [], a = 1; a < i.length - 1; a++) s.push(o.table[i[a]].node);
				return r.fromArray(function(e) {
					return e.reduce((function(e, r) {
						var t = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return t && t.mode === r.mode ? (e[e.length - 1].data += r.data, e) : (e.push(r), e)
					}), [])
				}(s))
			}, r.rawSplit = function(e) {
				return r.fromArray(h(e, c.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, r) {
			var t, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			r.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, r.getSymbolTotalCodewords = function(e) {
				return n[e]
			}, r.getBCHDigit = function(e) {
				for (var r = 0; 0 !== e;) r++, e >>>= 1;
				return r
			}, r.setToSJISFunction = function(e) {
				if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
				t = e
			}, r.isKanjiModeEnabled = function() {
				return void 0 !== t
			}, r.toSJIS = function(e) {
				return t(e)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(e, r) {
			r.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js"),
				o = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/mode.js"),
				a = t("./node_modules/qrcode/lib/core/version-check.js"),
				u = t("./node_modules/qrcode/node_modules/isarray/index.js"),
				c = n.getBCHDigit(7973);

			function l(e, r) {
				return s.getCharCountIndicator(e, r) + 4
			}

			function d(e, r) {
				var t = 0;
				return e.forEach((function(e) {
					var n = l(e.mode, r);
					t += n + e.getBitsLength()
				})), t
			}
			r.from = function(e, r) {
				return a.isValid(e) ? parseInt(e, 10) : r
			}, r.getCapacity = function(e, r, t) {
				if (!a.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === t && (t = s.BYTE);
				var i = 8 * (n.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, r));
				if (t === s.MIXED) return i;
				var u = i - l(t, e);
				switch (t) {
					case s.NUMERIC:
						return Math.floor(u / 10 * 3);
					case s.ALPHANUMERIC:
						return Math.floor(u / 11 * 2);
					case s.KANJI:
						return Math.floor(u / 13);
					case s.BYTE:
					default:
						return Math.floor(u / 8)
				}
			}, r.getBestVersionForData = function(e, t) {
				var n, o = i.from(t, i.M);
				if (u(e)) {
					if (e.length > 1) return function(e, t) {
						for (var n = 1; n <= 40; n++) {
							if (d(e, n) <= r.getCapacity(n, t, s.MIXED)) return n
						}
					}(e, o);
					if (0 === e.length) return 1;
					n = e[0]
				} else n = e;
				return function(e, t, n) {
					for (var o = 1; o <= 40; o++)
						if (t <= r.getCapacity(o, n, e)) return o
				}(n.mode, n.getLength(), o)
			}, r.getEncodedBits = function(e) {
				if (!a.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var r = e << 12; n.getBCHDigit(r) - c >= 0;) r ^= 7973 << n.getBCHDigit(r) - c;
				return e << 12 | r
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/renderer/utils.js");
			r.render = function(e, r, t) {
				var o = t,
					i = r;
				void 0 !== o || r && r.getContext || (o = r, r = void 0), r || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = n.getOptions(o);
				var s = n.getImageWidth(e.modules.size, o),
					a = i.getContext("2d"),
					u = a.createImageData(s, s);
				return n.qrToImageData(u.data, e, o),
					function(e, r, t) {
						e.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = t, r.width = t, r.style.height = t + "px", r.style.width = t + "px"
					}(a, i, s), a.putImageData(u, 0, 0), i
			}, r.renderToDataURL = function(e, t, n) {
				var o = n;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), o || (o = {});
				var i = r.render(e, t, o),
					s = o.type || "image/png",
					a = o.rendererOpts || {};
				return i.toDataURL(s, a.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, r) {
				var t = e.a / 255,
					n = r + '="' + e.hex + '"';
				return t < 1 ? n + " " + r + '-opacity="' + t.toFixed(2).slice(1) + '"' : n
			}

			function i(e, r, t) {
				var n = e + r;
				return void 0 !== t && (n += " " + t), n
			}
			r.render = function(e, r, t) {
				var s = n.getOptions(r),
					a = e.modules.size,
					u = e.modules.data,
					c = a + 2 * s.margin,
					l = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
					d = "<path " + o(s.color.dark, "stroke") + ' d="' + function(e, r, t) {
						for (var n = "", o = 0, s = !1, a = 0, u = 0; u < e.length; u++) {
							var c = Math.floor(u % r),
								l = Math.floor(u / r);
							c || s || (s = !0), e[u] ? (a++, u > 0 && c > 0 && e[u - 1] || (n += s ? i("M", c + t, .5 + l + t) : i("m", o, 0), o = 0, s = !1), c + 1 < r && e[u + 1] || (n += i("h", a), a = 0)) : o++
						}
						return n
					}(u, a, s.margin) + '"/>',
					f = 'viewBox="0 0 ' + c + " " + c + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + d + "</svg>\n";
				return "function" == typeof t && t(null, h), h
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(e, r) {
			function t(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				var r = e.slice().replace("#", "").split("");
				if (r.length < 3 || 5 === r.length || r.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== r.length && 4 !== r.length || (r = Array.prototype.concat.apply([], r.map((function(e) {
					return [e, e]
				})))), 6 === r.length && r.push("F", "F");
				var t = parseInt(r.join(""), 16);
				return {
					r: t >> 24 & 255,
					g: t >> 16 & 255,
					b: t >> 8 & 255,
					a: 255 & t,
					hex: "#" + r.slice(0, 6).join("")
				}
			}
			r.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				var r = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					n = e.width && e.width >= 21 ? e.width : void 0,
					o = e.scale || 4;
				return {
					width: n,
					scale: n ? 4 : o,
					margin: r,
					color: {
						dark: t(e.color.dark || "#000000ff"),
						light: t(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, r.getScale = function(e, r) {
				return r.width && r.width >= e + 2 * r.margin ? r.width / (e + 2 * r.margin) : r.scale
			}, r.getImageWidth = function(e, t) {
				var n = r.getScale(e, t);
				return Math.floor((e + 2 * t.margin) * n)
			}, r.qrToImageData = function(e, t, n) {
				for (var o = t.modules.size, i = t.modules.data, s = r.getScale(o, n), a = Math.floor((o + 2 * n.margin) * s), u = n.margin * s, c = [n.color.light, n.color.dark], l = 0; l < a; l++)
					for (var d = 0; d < a; d++) {
						var f = 4 * (l * a + d),
							h = n.color.light;
						if (l >= u && d >= u && l < a - u && d < a - u) h = c[i[Math.floor((l - u) / s) * o + Math.floor((d - u) / s)] ? 1 : 0];
						e[f++] = h.r, e[f++] = h.g, e[f++] = h.b, e[f] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/qrcode/node_modules/isarray/index.js");
			i.TYPED_ARRAY_SUPPORT = function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo()
				} catch (r) {
					return !1
				}
			}();
			var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(e, r, t) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? u(this, e) : function(e, r, t, n) {
					if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer) return function(e, r, t, n) {
						if (t < 0 || r.byteLength < t) throw new RangeError("'offset' is out of bounds");
						if (r.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === t && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, t) : new Uint8Array(r, t, n);
						i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = c(e, o);
						return o
					}(e, r, t, n);
					if ("string" == typeof r) return function(e, r) {
						var t = 0 | d(r),
							n = a(e, t),
							o = n.write(r);
						o !== t && (n = n.slice(0, o));
						return n
					}(e, r);
					return function(e, r) {
						if (i.isBuffer(r)) {
							var t = 0 | s(r.length),
								n = a(e, t);
							return 0 === n.length ? n : (r.copy(n, 0, 0, t), n)
						}
						if (r) {
							if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || (o = r.length) != o ? a(e, 0) : c(e, r);
							if ("Buffer" === r.type && Array.isArray(r.data)) return c(e, r.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, r)
				}(this, e, r, t) : new i(e, r, t)
			}

			function s(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function a(e, r) {
				var t;
				return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = i.prototype : (null === (t = e) && (t = new i(r)), t.length = r), t
			}

			function u(e, r) {
				var t = a(e, r < 0 ? 0 : 0 | s(r));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < r; ++n) t[n] = 0;
				return t
			}

			function c(e, r) {
				for (var t = r.length < 0 ? 0 : 0 | s(r.length), n = a(e, t), o = 0; o < t; o += 1) n[o] = 255 & r[o];
				return n
			}

			function l(e, r) {
				var t;
				r = r || 1 / 0;
				for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
					if ((t = e.charCodeAt(s)) > 55295 && t < 57344) {
						if (!o) {
							if (t > 56319) {
								(r -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (s + 1 === n) {
								(r -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = t;
							continue
						}
						if (t < 56320) {
							(r -= 3) > -1 && i.push(239, 191, 189), o = t;
							continue
						}
						t = 65536 + (o - 55296 << 10 | t - 56320)
					} else o && (r -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, t < 128) {
						if ((r -= 1) < 0) break;
						i.push(t)
					} else if (t < 2048) {
						if ((r -= 2) < 0) break;
						i.push(t >> 6 | 192, 63 & t | 128)
					} else if (t < 65536) {
						if ((r -= 3) < 0) break;
						i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
					} else {
						if (!(t < 1114112)) throw new Error("Invalid code point");
						if ((r -= 4) < 0) break;
						i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
					}
				}
				return i
			}

			function d(e) {
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : l(e).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(e, r, t) {
				void 0 === r ? (t = this.length, r = 0) : void 0 === t && "string" == typeof r ? (t = this.length, r = 0) : isFinite(r) && (r |= 0, isFinite(t) ? t |= 0 : t = void 0);
				var n = this.length - r;
				if ((void 0 === t || t > n) && (t = n), e.length > 0 && (t < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, r, t, n) {
					return function(e, r, t, n) {
						for (var o = 0; o < n && !(o + t >= r.length || o >= e.length); ++o) r[o + t] = e[o];
						return o
					}(l(r, e.length - t), e, t, n)
				}(this, e, r, t)
			}, i.prototype.slice = function(e, r) {
				var t, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < e && (r = e), i.TYPED_ARRAY_SUPPORT)(t = this.subarray(e, r)).__proto__ = i.prototype;
				else {
					var o = r - e;
					t = new i(o, void 0);
					for (var s = 0; s < o; ++s) t[s] = this[s + e]
				}
				return t
			}, i.prototype.copy = function(e, r, t, n) {
				if (t || (t = 0), n || 0 === n || (n = this.length), r >= e.length && (r = e.length), r || (r = 0), n > 0 && n < t && (n = t), n === t) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (r < 0) throw new RangeError("targetStart out of bounds");
				if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - r < n - t && (n = e.length - r + t);
				var o, s = n - t;
				if (this === e && t < r && r < n)
					for (o = s - 1; o >= 0; --o) e[o + r] = this[o + t];
				else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < s; ++o) e[o + r] = this[o + t];
				else Uint8Array.prototype.set.call(e, this.subarray(t, t + s), r);
				return s
			}, i.prototype.fill = function(e, r, t) {
				if ("string" == typeof e) {
					if ("string" == typeof r ? (r = 0, t = this.length) : "string" == typeof t && (t = this.length), 1 === e.length) {
						var n = e.charCodeAt(0);
						n < 256 && (e = n)
					}
				} else "number" == typeof e && (e &= 255);
				if (r < 0 || this.length < r || this.length < t) throw new RangeError("Out of range index");
				if (t <= r) return this;
				var o;
				if (r >>>= 0, t = void 0 === t ? this.length : t >>> 0, e || (e = 0), "number" == typeof e)
					for (o = r; o < t; ++o) this[o] = e;
				else {
					var s = i.isBuffer(e) ? e : new i(e),
						a = s.length;
					for (o = 0; o < t - r; ++o) this[o + r] = s[o % a]
				}
				return this
			}, i.concat = function(e, r) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return a(null, 0);
				var t;
				if (void 0 === r)
					for (r = 0, t = 0; t < e.length; ++t) r += e[t].length;
				var o = u(null, r),
					s = 0;
				for (t = 0; t < e.length; ++t) {
					var c = e[t];
					if (!i.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
					c.copy(o, s), s += c.length
				}
				return o
			}, i.byteLength = d, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var r = new i(e);
				return r.fill(0), r
			}, e.exports.from = function(e) {
				return new i(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, r) {
			var t = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == t.call(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0.7b39aa200cdd29dba849.js.map