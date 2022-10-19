// https://www.redditstatic.com/desktop2x/NftProfileUnit.0a2289634ff5a29ce0c4.js
// Retrieved at 10/19/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./node_modules/classnames/index.js": function(t, e, r) {
			var n;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function i() {
					for (var t = [], e = 0; e < arguments.length; e++) {
						var n = arguments[e];
						if (n) {
							var o = typeof n;
							if ("string" === o || "number" === o) t.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var s = i.apply(null, n);
									s && t.push(s)
								}
							} else if ("object" === o)
								if (n.toString === Object.prototype.toString)
									for (var a in n) r.call(n, a) && n[a] && t.push(a);
								else t.push(n.toString())
						}
					}
					return t.join(" ")
				}
				t.exports ? (i.default = i, t.exports = i) : void 0 === (n = function() {
					return i
				}.apply(e, [])) || (t.exports = n)
			}()
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return m
			})), r.d(e, "a", (function() {
				return g
			}));
			var n = r("./src/config.ts"),
				i = r("./src/lib/env/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				u = r("./src/reddit/endpoints/governance/crypto.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				c = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				h = r("./src/reddit/selectors/user.ts");
			const d = !(Object(i.c)() || Object(i.b)()),
				p = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: d,
					IS_PRODUCTION: !d,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				m = () => {
					const t = Object(a.e)(c.a),
						e = Object(a.e)(t => t.user.session),
						r = e ? e.accessToken : "",
						i = e ? new Date(e.expires).getTime() : 1,
						s = Object(a.e)(h.db),
						m = Object(f.a)(),
						g = d ? u.a.Rinkeby : u.a.Ethereum,
						y = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: i
						}), [r, i]),
						b = {
							...p,
							STRIPE_API_KEY: n.a.stripe.apiKey(t),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: g
						},
						w = Object(o.useCallback)(t => {
							m(e => {
								const r = l.o(e);
								return {
									...r,
									...t,
									app: r.app,
									source: t.source || "marketplace",
									actionInfo: {
										...r.actionInfo,
										...t.actionInfo
									}
								}
							})
						}, [m]);
					return Object(o.useMemo)(() => ({
						authHeaders: y,
						config: b,
						isNightMode: s,
						sendEvent: w
					}), [y, b, s, w])
				},
				g = () => {
					const t = Object(a.e)(t => t.user.session),
						e = t ? t.accessToken : "",
						r = Object(a.e)(h.db),
						i = Object(f.a)(),
						c = d ? u.a.Rinkeby : u.a.Ethereum;
					return Object(o.useMemo)(() => ({
						api: {
							accessToken: e
						},
						fbt: {
							inline: (t, e) => t,
							singular: (t, e) => s.a.createElement(s.a.Fragment, null, t),
							param: (t, e) => s.a.createElement(s.a.Fragment, null, t),
							plural: (t, e) => s.a.createElement(s.a.Fragment, null, t)
						},
						gql: {
							host: n.a.gqlUrl,
							fetchOptions: {
								headers: {
									Authorization: `Bearer ${e}`
								}
							}
						},
						nightModeActive: () => r,
						sendEvent(t) {
							i(e => {
								const r = l.o(e);
								return {
									...r,
									...t,
									app: r.app,
									source: t.source || "marketplace",
									actionInfo: {
										...r.actionInfo,
										...t.actionInfo
									}
								}
							})
						},
						blockchainProvider: c
					}), [e, c, r, i])
				}
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return d
			}));
			var n = r("./node_modules/@reddit/crypto/react/config/index.es.js"),
				i = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				u = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx"),
				f = r("./src/reddit/selectors/experiments/econ/index.ts");

			function c() {
				return (c = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = arguments[e];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
					}
					return t
				}).apply(this, arguments)
			}
			const l = t => {
					let {
						children: e
					} = t;
					const r = Object(u.b)();
					return s.a.createElement(i.d, c({}, r, {
						shouldContainModal: !1
					}), e)
				},
				h = t => {
					let {
						children: e
					} = t;
					const r = Object(u.a)();
					return s.a.createElement(n.a, {
						value: r
					}, e)
				},
				d = t => {
					let {
						children: e
					} = t;
					return Object(a.e)(f.h) ? s.a.createElement(l, null, e) : s.a.createElement(h, null, e)
				}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less": function(t, e, r) {
			t.exports = {
				detailsButton: "_3QDuMIB5Qg310ADO1_fdV2"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx": function(t, e, r) {
			"use strict";
			r.r(e);
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/@reddit/crypto/react/gql/index.es.js"),
				a = (r("./node_modules/@reddit/crypto/react/ui/index.es.js"), r("./node_modules/@reddit/crypto/react/config/index.es.js"), r("./node_modules/classnames/index.js")),
				u = r.n(a),
				f = r("./node_modules/react-tilt/dist/tilt.js"),
				c = r.n(f);
			var l = "_nftIcon_ryr9r_16",
				h = "_naming_ryr9r_27",
				d = "_avatarImage_ryr9r_43",
				p = "_front_ryr9r_71",
				m = "_frontBackground_ryr9r_77",
				g = "_clickable_ryr9r_87";
			var y = "_card_1tsp8_1",
				b = "_noShadow_1tsp8_8",
				w = "_content_1tsp8_11";
			const E = ({
				children: t,
				className: e,
				onClick: r,
				isShadowHidden: n
			}) => i.a.createElement(c.a, {
				gyroscope: !0,
				options: {
					max: 12.5,
					scale: 1.05
				},
				className: u()(y, e, {
					[b]: n
				}),
				onClick: r
			}, i.a.createElement("div", {
				className: y
			}, i.a.createElement("div", {
				className: w
			}, t)));
			const v = t => {
					const e = t.split(".");
					return [e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(e.slice(1)).join(".")
				},
				I = 1e3,
				_ = 100 * I,
				B = 10 * _,
				A = 100 * B,
				k = 10 * A,
				N = 100 * k,
				O = 51;
			const U = (t, e, r = !1) => {
					if (r) {
						return (t / e).toFixed(t % e > 0 ? 1 : 0)
					}
					return (t / e).toFixed(1)
				},
				S = (t, e, r = 1) => {
					const n = Math.pow(10, r);
					return (Math.floor(t / (e / n)) / n).toFixed(r)
				};
			var R = "_container_f4yhv_42",
				T = "_range_f4yhv_48",
				x = "_rangeStart_f4yhv_54",
				j = "_rangeEnd_f4yhv_55",
				C = "_title_f4yhv_78";
			const M = ({
				title: t,
				rarity: e,
				collectionSize: r,
				className: n
			}) => {
				const o = function(t, e) {
					if (t) return r = t, n = {
						removeZeroDecimal: !0
					}, (null == n ? void 0 : n.displayFull) ? v(r.toString()) : r >= N - O ? `${Math.floor(r/k)}b` : r >= k - O && r < N - O ? `${U(r,k,null==n?void 0:n.removeZeroDecimal)}b` : r >= A - O && r < k - O ? `${Math.floor(r/B)}m` : r >= B - O && r < A - O ? `${U(r,B,null==n?void 0:n.removeZeroDecimal)}m` : r >= _ - O && r < B - O ? `${Math.floor(r/I)}k` : r >= I && r < _ - O ? (null == n ? void 0 : n.roundDown) ? `${S(r,I)}k` : `${U(r,I,null==n?void 0:n.removeZeroDecimal)}k` : String(r);
					var r, n;
					if (e) switch (e) {
						case "legendary":
							return "1";
						case "epic":
							return "100";
						case "rare":
							return "101+";
						case "test":
							return "∞"
					}
					return null
				}(r, e);
				return i.a.createElement("div", {
					className: u()(R, n)
				}, o && i.a.createElement("div", {
					className: T
				}, i.a.createElement("div", {
					className: x
				}, "1"), i.a.createElement("div", {
					className: j
				}, o)), i.a.createElement("h2", {
					className: C
				}, t))
			};
			const L = ({
				className: t,
				nft: e,
				onClick: r,
				nftIconClassName: n,
				titleClassName: o,
				isShadowHidden: s
			}) => {
				const {
					avatarImageUrl: a,
					backgroundImageUrl: f,
					nftImageUrl: c,
					title: y,
					collectionSize: b
				} = e, w = a ? f : c;
				return i.a.createElement(E, {
					className: u()(t, p, {
						[g]: !!r
					}),
					isShadowHidden: s
				}, i.a.createElement("div", {
					className: m,
					style: {
						backgroundImage: `url(${w})`
					}
				}), i.a.createElement("img", {
					src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
					className: u()(l, n)
				}), a && i.a.createElement("img", {
					src: a,
					className: d,
					alt: "nft-asset"
				}), i.a.createElement(M, {
					title: y,
					className: u()(h, o),
					collectionSize: b
				}))
			};
			var D = {
				exports: {}
			};
			! function(t) {
				! function() {
					var e = {}.hasOwnProperty;

					function r() {
						for (var t = [], n = 0; n < arguments.length; n++) {
							var i = arguments[n];
							if (i) {
								var o = typeof i;
								if ("string" === o || "number" === o) t.push(i);
								else if (Array.isArray(i)) {
									if (i.length) {
										var s = r.apply(null, i);
										s && t.push(s)
									}
								} else if ("object" === o)
									if (i.toString === Object.prototype.toString)
										for (var a in i) e.call(i, a) && i[a] && t.push(a);
									else t.push(i.toString())
							}
						}
						return t.join(" ")
					}
					t.exports ? (r.default = r, t.exports = r) : window.classNames = r
				}()
			}(D);
			var $ = D.exports;
			var P = {
				kind: "Document",
				definitions: [{
					kind: "OperationDefinition",
					operation: "query",
					name: {
						kind: "Name",
						value: "getNftDetails"
					},
					variableDefinitions: [{
						kind: "VariableDefinition",
						variable: {
							kind: "Variable",
							name: {
								kind: "Name",
								value: "ids"
							}
						},
						type: {
							kind: "NonNullType",
							type: {
								kind: "ListType",
								type: {
									kind: "NonNullType",
									type: {
										kind: "NamedType",
										name: {
											kind: "Name",
											value: "ID"
										}
									}
								}
							}
						},
						directives: []
					}],
					directives: [],
					selectionSet: {
						kind: "SelectionSet",
						selections: [{
							kind: "Field",
							name: {
								kind: "Name",
								value: "inventoryItems"
							},
							arguments: [{
								kind: "Argument",
								name: {
									kind: "Name",
									value: "filter"
								},
								value: {
									kind: "ObjectValue",
									fields: [{
										kind: "ObjectField",
										name: {
											kind: "Name",
											value: "ids"
										},
										value: {
											kind: "Variable",
											name: {
												kind: "Name",
												value: "ids"
											}
										}
									}]
								}
							}],
							directives: [],
							selectionSet: {
								kind: "SelectionSet",
								selections: [{
									kind: "Field",
									name: {
										kind: "Name",
										value: "edges"
									},
									arguments: [],
									directives: [],
									selectionSet: {
										kind: "SelectionSet",
										selections: [{
											kind: "Field",
											name: {
												kind: "Name",
												value: "node"
											},
											arguments: [],
											directives: [],
											selectionSet: {
												kind: "SelectionSet",
												selections: [{
													kind: "FragmentSpread",
													name: {
														kind: "Name",
														value: "NftInventoryItemFragment"
													},
													directives: []
												}]
											}
										}]
									}
								}]
							}
						}]
					}
				}],
				loc: {
					start: 0,
					end: 159
				}
			};
			P.loc.source = {
				body: "query getNftDetails($ids: [ID!]!) {\n  inventoryItems(filter: { ids: $ids }) {\n    edges {\n      node {\n        ...NftInventoryItemFragment\n      }\n    }\n  }\n}\n",
				name: "GraphQL request",
				locationOffset: {
					line: 1,
					column: 1
				}
			};
			var F = {};

			function z(t, e) {
				for (var r = 0; r < t.definitions.length; r++) {
					var n = t.definitions[r];
					if (n.name && n.name.value == e) return n
				}
			}
			P.definitions.forEach((function(t) {
					if (t.name) {
						var e = new Set;
						! function t(e, r) {
							if ("FragmentSpread" === e.kind) r.add(e.name.value);
							else if ("VariableDefinition" === e.kind) {
								var n = e.type;
								"NamedType" === n.kind && r.add(n.name.value)
							}
							e.selectionSet && e.selectionSet.selections.forEach((function(e) {
								t(e, r)
							})), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
								t(e, r)
							})), e.definitions && e.definitions.forEach((function(e) {
								t(e, r)
							}))
						}(t, e), F[t.name.value] = e
					}
				})),
				function(t, e) {
					var r = {
						kind: t.kind,
						definitions: [z(t, e)]
					};
					t.hasOwnProperty("loc") && (r.loc = t.loc);
					var n = F[e] || new Set,
						i = new Set,
						o = new Set;
					for (n.forEach((function(t) {
							o.add(t)
						})); o.size > 0;) {
						var s = o;
						o = new Set, s.forEach((function(t) {
							i.has(t) || (i.add(t), (F[t] || new Set).forEach((function(t) {
								o.add(t)
							})))
						}))
					}
					i.forEach((function(e) {
						var n = z(t, e);
						n && r.definitions.push(n)
					}))
				}(P, "getNftDetails");
			var G = (t => (t.MINTED = "MINTED", t.MINTING = "MINTING", t.TRANSFERRING = "TRANSFERRING", t))(G || {});
			for (var V = {}, q = {
					byteLength: function(t) {
						var e = X(t),
							r = e[0],
							n = e[1];
						return 3 * (r + n) / 4 - n
					},
					toByteArray: function(t) {
						var e, r, n = X(t),
							i = n[0],
							o = n[1],
							s = new K(function(t, e, r) {
								return 3 * (e + r) / 4 - r
							}(0, i, o)),
							a = 0,
							u = o > 0 ? i - 4 : i;
						for (r = 0; r < u; r += 4) e = Y[t.charCodeAt(r)] << 18 | Y[t.charCodeAt(r + 1)] << 12 | Y[t.charCodeAt(r + 2)] << 6 | Y[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
						2 === o && (e = Y[t.charCodeAt(r)] << 2 | Y[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e);
						1 === o && (e = Y[t.charCodeAt(r)] << 10 | Y[t.charCodeAt(r + 1)] << 4 | Y[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
						return s
					},
					fromByteArray: function(t) {
						for (var e, r = t.length, n = r % 3, i = [], o = 0, s = r - n; o < s; o += 16383) i.push(J(t, o, o + 16383 > s ? s : o + 16383));
						1 === n ? (e = t[r - 1], i.push(H[e >> 2] + H[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i.push(H[e >> 10] + H[e >> 4 & 63] + H[e << 2 & 63] + "="));
						return i.join("")
					}
				}, H = [], Y = [], K = "undefined" != typeof Uint8Array ? Uint8Array : Array, Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Q = 0, W = Z.length; Q < W; ++Q) H[Q] = Z[Q], Y[Z.charCodeAt(Q)] = Q;

			function X(t) {
				var e = t.length;
				if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var r = t.indexOf("=");
				return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
			}

			function J(t, e, r) {
				for (var n, i, o = [], s = e; s < r; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(H[(i = n) >> 18 & 63] + H[i >> 12 & 63] + H[i >> 6 & 63] + H[63 & i]);
				return o.join("")
			}
			Y["-".charCodeAt(0)] = 62, Y["_".charCodeAt(0)] = 63;
			var tt = {
				read: function(t, e, r, n, i) {
					var o, s, a = 8 * i - n - 1,
						u = (1 << a) - 1,
						f = u >> 1,
						c = -7,
						l = r ? i - 1 : 0,
						h = r ? -1 : 1,
						d = t[e + l];
					for (l += h, o = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; o = 256 * o + t[e + l], l += h, c -= 8);
					for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + t[e + l], l += h, c -= 8);
					if (0 === o) o = 1 - f;
					else {
						if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
						s += Math.pow(2, n), o -= f
					}
					return (d ? -1 : 1) * s * Math.pow(2, o - n)
				},
				write: function(t, e, r, n, i, o) {
					var s, a, u, f = 8 * o - i - 1,
						c = (1 << f) - 1,
						l = c >> 1,
						h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						d = n ? 0 : o - 1,
						p = n ? 1 : -1,
						m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
					for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= c ? (a = 0, s = c) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + d] = 255 & a, d += p, a /= 256, i -= 8);
					for (s = s << i | a, f += i; f > 0; t[r + d] = 255 & s, d += p, s /= 256, f -= 8);
					t[r + d - p] |= 128 * m
				}
			};
			! function(t) {
				const e = q,
					r = tt,
					n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
				t.Buffer = s, t.SlowBuffer = function(t) {
					+t != t && (t = 0);
					return s.alloc(+t)
				}, t.INSPECT_MAX_BYTES = 50;
				const i = 2147483647;

				function o(t) {
					if (t > i) throw new RangeError('The value "' + t + '" is invalid for option "size"');
					const e = new Uint8Array(t);
					return Object.setPrototypeOf(e, s.prototype), e
				}

				function s(t, e, r) {
					if ("number" == typeof t) {
						if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
						return f(t)
					}
					return a(t, e, r)
				}

				function a(t, e, r) {
					if ("string" == typeof t) return function(t, e) {
						"string" == typeof e && "" !== e || (e = "utf8");
						if (!s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
						const r = 0 | d(t, e);
						let n = o(r);
						const i = n.write(t, e);
						i !== r && (n = n.slice(0, i));
						return n
					}(t, e);
					if (ArrayBuffer.isView(t)) return function(t) {
						if (K(t, Uint8Array)) {
							const e = new Uint8Array(t);
							return l(e.buffer, e.byteOffset, e.byteLength)
						}
						return c(t)
					}(t);
					if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
					if (K(t, ArrayBuffer) || t && K(t.buffer, ArrayBuffer)) return l(t, e, r);
					if ("undefined" != typeof SharedArrayBuffer && (K(t, SharedArrayBuffer) || t && K(t.buffer, SharedArrayBuffer))) return l(t, e, r);
					if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
					const n = t.valueOf && t.valueOf();
					if (null != n && n !== t) return s.from(n, e, r);
					const i = function(t) {
						if (s.isBuffer(t)) {
							const e = 0 | h(t.length),
								r = o(e);
							return 0 === r.length ? r : (t.copy(r, 0, 0, e), r)
						}
						if (void 0 !== t.length) return "number" != typeof t.length || Z(t.length) ? o(0) : c(t);
						if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data)
					}(t);
					if (i) return i;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
				}

				function u(t) {
					if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
					if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
				}

				function f(t) {
					return u(t), o(t < 0 ? 0 : 0 | h(t))
				}

				function c(t) {
					const e = t.length < 0 ? 0 : 0 | h(t.length),
						r = o(e);
					for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
					return r
				}

				function l(t, e, r) {
					if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
					if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
					let n;
					return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, s.prototype), n
				}

				function h(t) {
					if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
					return 0 | t
				}

				function d(t, e) {
					if (s.isBuffer(t)) return t.length;
					if (ArrayBuffer.isView(t) || K(t, ArrayBuffer)) return t.byteLength;
					if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
					const r = t.length,
						n = arguments.length > 2 && !0 === arguments[2];
					if (!n && 0 === r) return 0;
					let i = !1;
					for (;;) switch (e) {
						case "ascii":
						case "latin1":
						case "binary":
							return r;
						case "utf8":
						case "utf-8":
							return V(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * r;
						case "hex":
							return r >>> 1;
						case "base64":
							return H(t).length;
						default:
							if (i) return n ? -1 : V(t).length;
							e = ("" + e).toLowerCase(), i = !0
					}
				}

				function p(t, e, r) {
					let n = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
					if ((r >>>= 0) <= (e >>>= 0)) return "";
					for (t || (t = "utf8");;) switch (t) {
						case "hex":
							return O(this, e, r);
						case "utf8":
						case "utf-8":
							return B(this, e, r);
						case "ascii":
							return k(this, e, r);
						case "latin1":
						case "binary":
							return N(this, e, r);
						case "base64":
							return _(this, e, r);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return U(this, e, r);
						default:
							if (n) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), n = !0
					}
				}

				function m(t, e, r) {
					const n = t[e];
					t[e] = t[r], t[r] = n
				}

				function g(t, e, r, n, i) {
					if (0 === t.length) return -1;
					if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), Z(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
						if (i) return -1;
						r = t.length - 1
					} else if (r < 0) {
						if (!i) return -1;
						r = 0
					}
					if ("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
					if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
					throw new TypeError("val must be string, number or Buffer")
				}

				function y(t, e, r, n, i) {
					let o, s = 1,
						a = t.length,
						u = e.length;
					if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
						if (t.length < 2 || e.length < 2) return -1;
						s = 2, a /= 2, u /= 2, r /= 2
					}

					function f(t, e) {
						return 1 === s ? t[e] : t.readUInt16BE(e * s)
					}
					if (i) {
						let n = -1;
						for (o = r; o < a; o++)
							if (f(t, o) === f(e, -1 === n ? 0 : o - n)) {
								if (-1 === n && (n = o), o - n + 1 === u) return n * s
							} else -1 !== n && (o -= o - n), n = -1
					} else
						for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
							let r = !0;
							for (let n = 0; n < u; n++)
								if (f(t, o + n) !== f(e, n)) {
									r = !1;
									break
								} if (r) return o
						}
					return -1
				}

				function b(t, e, r, n) {
					r = Number(r) || 0;
					const i = t.length - r;
					n ? (n = Number(n)) > i && (n = i) : n = i;
					const o = e.length;
					let s;
					for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
						const n = parseInt(e.substr(2 * s, 2), 16);
						if (Z(n)) return s;
						t[r + s] = n
					}
					return s
				}

				function w(t, e, r, n) {
					return Y(V(e, t.length - r), t, r, n)
				}

				function E(t, e, r, n) {
					return Y(function(t) {
						const e = [];
						for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
						return e
					}(e), t, r, n)
				}

				function v(t, e, r, n) {
					return Y(H(e), t, r, n)
				}

				function I(t, e, r, n) {
					return Y(function(t, e) {
						let r, n, i;
						const o = [];
						for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
						return o
					}(e, t.length - r), t, r, n)
				}

				function _(t, r, n) {
					return 0 === r && n === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(r, n))
				}

				function B(t, e, r) {
					r = Math.min(t.length, r);
					const n = [];
					let i = e;
					for (; i < r;) {
						const e = t[i];
						let o = null,
							s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
						if (i + s <= r) {
							let r, n, a, u;
							switch (s) {
								case 1:
									e < 128 && (o = e);
									break;
								case 2:
									128 == (192 & (r = t[i + 1])) && (u = (31 & e) << 6 | 63 & r) > 127 && (o = u);
									break;
								case 3:
									r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (u < 55296 || u > 57343) && (o = u);
									break;
								case 4:
									r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
							}
						}
						null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
					}
					return function(t) {
						const e = t.length;
						if (e <= A) return String.fromCharCode.apply(String, t);
						let r = "",
							n = 0;
						for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += A));
						return r
					}(n)
				}
				t.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function() {
					try {
						const t = new Uint8Array(1),
							e = {
								foo: function() {
									return 42
								}
							};
						return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
					} catch (t) {
						return !1
					}
				}(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
					enumerable: !0,
					get: function() {
						if (s.isBuffer(this)) return this.buffer
					}
				}), Object.defineProperty(s.prototype, "offset", {
					enumerable: !0,
					get: function() {
						if (s.isBuffer(this)) return this.byteOffset
					}
				}), s.poolSize = 8192, s.from = function(t, e, r) {
					return a(t, e, r)
				}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, r) {
					return function(t, e, r) {
						return u(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
					}(t, e, r)
				}, s.allocUnsafe = function(t) {
					return f(t)
				}, s.allocUnsafeSlow = function(t) {
					return f(t)
				}, s.isBuffer = function(t) {
					return null != t && !0 === t._isBuffer && t !== s.prototype
				}, s.compare = function(t, e) {
					if (K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (t === e) return 0;
					let r = t.length,
						n = e.length;
					for (let i = 0, o = Math.min(r, n); i < o; ++i)
						if (t[i] !== e[i]) {
							r = t[i], n = e[i];
							break
						} return r < n ? -1 : n < r ? 1 : 0
				}, s.isEncoding = function(t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, s.concat = function(t, e) {
					if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return s.alloc(0);
					let r;
					if (void 0 === e)
						for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
					const n = s.allocUnsafe(e);
					let i = 0;
					for (r = 0; r < t.length; ++r) {
						let e = t[r];
						if (K(e, Uint8Array)) i + e.length > n.length ? (s.isBuffer(e) || (e = s.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
						else {
							if (!s.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
							e.copy(n, i)
						}
						i += e.length
					}
					return n
				}, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
					const t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (let e = 0; e < t; e += 2) m(this, e, e + 1);
					return this
				}, s.prototype.swap32 = function() {
					const t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
					return this
				}, s.prototype.swap64 = function() {
					const t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
					return this
				}, s.prototype.toString = function() {
					const t = this.length;
					return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : p.apply(this, arguments)
				}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
					if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === s.compare(this, t)
				}, s.prototype.inspect = function() {
					let e = "";
					const r = t.INSPECT_MAX_BYTES;
					return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
				}, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(t, e, r, n, i) {
					if (K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
					if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
					if (n >= i && e >= r) return 0;
					if (n >= i) return -1;
					if (e >= r) return 1;
					if (this === t) return 0;
					let o = (i >>>= 0) - (n >>>= 0),
						a = (r >>>= 0) - (e >>>= 0);
					const u = Math.min(o, a),
						f = this.slice(n, i),
						c = t.slice(e, r);
					for (let s = 0; s < u; ++s)
						if (f[s] !== c[s]) {
							o = f[s], a = c[s];
							break
						} return o < a ? -1 : a < o ? 1 : 0
				}, s.prototype.includes = function(t, e, r) {
					return -1 !== this.indexOf(t, e, r)
				}, s.prototype.indexOf = function(t, e, r) {
					return g(this, t, e, r, !0)
				}, s.prototype.lastIndexOf = function(t, e, r) {
					return g(this, t, e, r, !1)
				}, s.prototype.write = function(t, e, r, n) {
					if (void 0 === e) n = "utf8", r = this.length, e = 0;
					else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
					}
					const i = this.length - e;
					if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					n || (n = "utf8");
					let o = !1;
					for (;;) switch (n) {
						case "hex":
							return b(this, t, e, r);
						case "utf8":
						case "utf-8":
							return w(this, t, e, r);
						case "ascii":
						case "latin1":
						case "binary":
							return E(this, t, e, r);
						case "base64":
							return v(this, t, e, r);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return I(this, t, e, r);
						default:
							if (o) throw new TypeError("Unknown encoding: " + n);
							n = ("" + n).toLowerCase(), o = !0
					}
				}, s.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				const A = 4096;

				function k(t, e, r) {
					let n = "";
					r = Math.min(t.length, r);
					for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
					return n
				}

				function N(t, e, r) {
					let n = "";
					r = Math.min(t.length, r);
					for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
					return n
				}

				function O(t, e, r) {
					const n = t.length;
					(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
					let i = "";
					for (let o = e; o < r; ++o) i += Q[t[o]];
					return i
				}

				function U(t, e, r) {
					const n = t.slice(e, r);
					let i = "";
					for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
					return i
				}

				function S(t, e, r) {
					if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
					if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
				}

				function R(t, e, r, n, i, o) {
					if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
					if (r + n > t.length) throw new RangeError("Index out of range")
				}

				function T(t, e, r, n, i) {
					P(e, n, i, t, r, 7);
					let o = Number(e & BigInt(4294967295));
					t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
				}

				function x(t, e, r, n, i) {
					P(e, n, i, t, r, 7);
					let o = Number(e & BigInt(4294967295));
					t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
				}

				function j(t, e, r, n, i, o) {
					if (r + n > t.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("Index out of range")
				}

				function C(t, e, n, i, o) {
					return e = +e, n >>>= 0, o || j(t, 0, n, 4), r.write(t, e, n, i, 23, 4), n + 4
				}

				function M(t, e, n, i, o) {
					return e = +e, n >>>= 0, o || j(t, 0, n, 8), r.write(t, e, n, i, 52, 8), n + 8
				}
				s.prototype.slice = function(t, e) {
					const r = this.length;
					(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
					const n = this.subarray(t, e);
					return Object.setPrototypeOf(n, s.prototype), n
				}, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, e, r) {
					t >>>= 0, e >>>= 0, r || S(t, e, this.length);
					let n = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) n += this[t + o] * i;
					return n
				}, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, e, r) {
					t >>>= 0, e >>>= 0, r || S(t, e, this.length);
					let n = this[t + --e],
						i = 1;
					for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
					return n
				}, s.prototype.readUint8 = s.prototype.readUInt8 = function(t, e) {
					return t >>>= 0, e || S(t, 1, this.length), this[t]
				}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(t, e) {
					return t >>>= 0, e || S(t, 2, this.length), this[t] | this[t + 1] << 8
				}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(t, e) {
					return t >>>= 0, e || S(t, 2, this.length), this[t] << 8 | this[t + 1]
				}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
				}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
				}, s.prototype.readBigUInt64LE = W((function(t) {
					F(t >>>= 0, "offset");
					const e = this[t],
						r = this[t + 7];
					void 0 !== e && void 0 !== r || z(t, this.length - 8);
					const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
						i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
					return BigInt(n) + (BigInt(i) << BigInt(32))
				})), s.prototype.readBigUInt64BE = W((function(t) {
					F(t >>>= 0, "offset");
					const e = this[t],
						r = this[t + 7];
					void 0 !== e && void 0 !== r || z(t, this.length - 8);
					const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
						i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
					return (BigInt(n) << BigInt(32)) + BigInt(i)
				})), s.prototype.readIntLE = function(t, e, r) {
					t >>>= 0, e >>>= 0, r || S(t, e, this.length);
					let n = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) n += this[t + o] * i;
					return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
				}, s.prototype.readIntBE = function(t, e, r) {
					t >>>= 0, e >>>= 0, r || S(t, e, this.length);
					let n = e,
						i = 1,
						o = this[t + --n];
					for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
					return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
				}, s.prototype.readInt8 = function(t, e) {
					return t >>>= 0, e || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
				}, s.prototype.readInt16LE = function(t, e) {
					t >>>= 0, e || S(t, 2, this.length);
					const r = this[t] | this[t + 1] << 8;
					return 32768 & r ? 4294901760 | r : r
				}, s.prototype.readInt16BE = function(t, e) {
					t >>>= 0, e || S(t, 2, this.length);
					const r = this[t + 1] | this[t] << 8;
					return 32768 & r ? 4294901760 | r : r
				}, s.prototype.readInt32LE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
				}, s.prototype.readInt32BE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
				}, s.prototype.readBigInt64LE = W((function(t) {
					F(t >>>= 0, "offset");
					const e = this[t],
						r = this[t + 7];
					void 0 !== e && void 0 !== r || z(t, this.length - 8);
					const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
					return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
				})), s.prototype.readBigInt64BE = W((function(t) {
					F(t >>>= 0, "offset");
					const e = this[t],
						r = this[t + 7];
					void 0 !== e && void 0 !== r || z(t, this.length - 8);
					const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
					return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
				})), s.prototype.readFloatLE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), r.read(this, t, !0, 23, 4)
				}, s.prototype.readFloatBE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), r.read(this, t, !1, 23, 4)
				}, s.prototype.readDoubleLE = function(t, e) {
					return t >>>= 0, e || S(t, 8, this.length), r.read(this, t, !0, 52, 8)
				}, s.prototype.readDoubleBE = function(t, e) {
					return t >>>= 0, e || S(t, 8, this.length), r.read(this, t, !1, 52, 8)
				}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, e, r, n) {
					if (t = +t, e >>>= 0, r >>>= 0, !n) {
						R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
					}
					let i = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
					return e + r
				}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, e, r, n) {
					if (t = +t, e >>>= 0, r >>>= 0, !n) {
						R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
					}
					let i = r - 1,
						o = 1;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
					return e + r
				}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
				}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
				}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigUInt64LE = W((function(t, e = 0) {
					return T(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeBigUInt64BE = W((function(t, e = 0) {
					return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeIntLE = function(t, e, r, n) {
					if (t = +t, e >>>= 0, !n) {
						const n = Math.pow(2, 8 * r - 1);
						R(this, t, e, r, n - 1, -n)
					}
					let i = 0,
						o = 1,
						s = 0;
					for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + r
				}, s.prototype.writeIntBE = function(t, e, r, n) {
					if (t = +t, e >>>= 0, !n) {
						const n = Math.pow(2, 8 * r - 1);
						R(this, t, e, r, n - 1, -n)
					}
					let i = r - 1,
						o = 1,
						s = 0;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + r
				}, s.prototype.writeInt8 = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
				}, s.prototype.writeInt16LE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeInt16BE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeInt32LE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
				}, s.prototype.writeInt32BE = function(t, e, r) {
					return t = +t, e >>>= 0, r || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigInt64LE = W((function(t, e = 0) {
					return T(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeBigInt64BE = W((function(t, e = 0) {
					return x(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeFloatLE = function(t, e, r) {
					return C(this, t, e, !0, r)
				}, s.prototype.writeFloatBE = function(t, e, r) {
					return C(this, t, e, !1, r)
				}, s.prototype.writeDoubleLE = function(t, e, r) {
					return M(this, t, e, !0, r)
				}, s.prototype.writeDoubleBE = function(t, e, r) {
					return M(this, t, e, !1, r)
				}, s.prototype.copy = function(t, e, r, n) {
					if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
					if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
					if (0 === t.length || 0 === this.length) return 0;
					if (e < 0) throw new RangeError("targetStart out of bounds");
					if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("sourceEnd out of bounds");
					n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
					const i = n - r;
					return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
				}, s.prototype.fill = function(t, e, r, n) {
					if ("string" == typeof t) {
						if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
						if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
						if (1 === t.length) {
							const e = t.charCodeAt(0);
							("utf8" === n && e < 128 || "latin1" === n) && (t = e)
						}
					} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
					if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
					if (r <= e) return this;
					let i;
					if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
						for (i = e; i < r; ++i) this[i] = t;
					else {
						const o = s.isBuffer(t) ? t : s.from(t, n),
							a = o.length;
						if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
						for (i = 0; i < r - e; ++i) this[i + e] = o[i % a]
					}
					return this
				};
				const L = {};

				function D(t, e, r) {
					L[t] = class NodeError extends r {
						constructor() {
							super(), Object.defineProperty(this, "message", {
								value: e.apply(this, arguments),
								writable: !0,
								configurable: !0
							}), this.name = `${this.name} [${t}]`, this.stack, delete this.name
						}
						get code() {
							return t
						}
						set code(t) {
							Object.defineProperty(this, "code", {
								configurable: !0,
								enumerable: !0,
								value: t,
								writable: !0
							})
						}
						toString() {
							return `${this.name} [${t}]: ${this.message}`
						}
					}
				}

				function $(t) {
					let e = "",
						r = t.length;
					const n = "-" === t[0] ? 1 : 0;
					for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
					return `${t.slice(0,r)}${e}`
				}

				function P(t, e, r, n, i, o) {
					if (t > r || t < e) {
						const n = "bigint" == typeof e ? "n" : "";
						let i;
						throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(o+1)}${n}` : `>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new L.ERR_OUT_OF_RANGE("value", i, t)
					}! function(t, e, r) {
						F(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || z(e, t.length - (r + 1))
					}(n, i, o)
				}

				function F(t, e) {
					if ("number" != typeof t) throw new L.ERR_INVALID_ARG_TYPE(e, "number", t)
				}

				function z(t, e, r) {
					if (Math.floor(t) !== t) throw F(t, r), new L.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
					if (e < 0) throw new L.ERR_BUFFER_OUT_OF_BOUNDS;
					throw new L.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
				}
				D("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
					return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
				}), RangeError), D("ERR_INVALID_ARG_TYPE", (function(t, e) {
					return `The "${t}" argument must be of type number. Received type ${typeof e}`
				}), TypeError), D("ERR_OUT_OF_RANGE", (function(t, e, r) {
					let n = `The value of "${t}" is out of range.`,
						i = r;
					return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = $(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = $(i)), i += "n"), n += ` It must be ${e}. Received ${i}`
				}), RangeError);
				const G = /[^+/0-9A-Za-z-_]/g;

				function V(t, e) {
					let r;
					e = e || 1 / 0;
					const n = t.length;
					let i = null;
					const o = [];
					for (let s = 0; s < n; ++s) {
						if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
							if (!i) {
								if (r > 56319) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								if (s + 1 === n) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								i = r;
								continue
							}
							if (r < 56320) {
								(e -= 3) > -1 && o.push(239, 191, 189), i = r;
								continue
							}
							r = 65536 + (i - 55296 << 10 | r - 56320)
						} else i && (e -= 3) > -1 && o.push(239, 191, 189);
						if (i = null, r < 128) {
							if ((e -= 1) < 0) break;
							o.push(r)
						} else if (r < 2048) {
							if ((e -= 2) < 0) break;
							o.push(r >> 6 | 192, 63 & r | 128)
						} else if (r < 65536) {
							if ((e -= 3) < 0) break;
							o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
						} else {
							if (!(r < 1114112)) throw new Error("Invalid code point");
							if ((e -= 4) < 0) break;
							o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
						}
					}
					return o
				}

				function H(t) {
					return e.toByteArray(function(t) {
						if ((t = (t = t.split("=")[0]).trim().replace(G, "")).length < 2) return "";
						for (; t.length % 4 != 0;) t += "=";
						return t
					}(t))
				}

				function Y(t, e, r, n) {
					let i;
					for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
					return i
				}

				function K(t, e) {
					return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
				}

				function Z(t) {
					return t != t
				}
				const Q = function() {
					const t = new Array(256);
					for (let e = 0; e < 16; ++e) {
						const r = 16 * e;
						for (let n = 0; n < 16; ++n) t[r + n] = "0123456789abcdef" [e] + "0123456789abcdef" [n]
					}
					return t
				}();

				function W(t) {
					return "undefined" == typeof BigInt ? X : t
				}

				function X() {
					throw new Error("BigInt not supported")
				}
			}(V);
			const et = /(?:\/|-)(?:nftv2)_([^_]+)_(\w+)_.*\.(?:png|svg)/;
			var rt = "_container_1xtot_49",
				nt = "_cardContainer_1xtot_148",
				it = "_cardFront_1xtot_153",
				ot = "_treatmentIcon_1xtot_158",
				st = "_treatmentTitle_1xtot_164";
			const at = (ut = ({
				className: t,
				imageUrl: e
			}) => {
				const r = (t => {
						const e = t.match(et),
							r = null == e ? void 0 : e[1];
						if (!r) return null;
						const n = decodeURI(r);
						return V.Buffer.from(n, "base64").toString()
					})(e),
					[o, a] = Object(n.useState)({}),
					[u] = Object(s.c)({
						query: P,
						variables: {
							ids: [r]
						}
					}),
					{
						data: f
					} = u;
				Object(n.useEffect)(() => {
					var t, e;
					const r = null == (e = null == (t = null == f ? void 0 : f.inventoryItems) ? void 0 : t.edges[0]) ? void 0 : e.node;
					r && a(function(t) {
						var e, r, n, i;
						return {
							id: t.id,
							title: t.nft.title,
							description: t.nft.description,
							series: t.nft.series,
							artist: t.artist,
							nftImageUrl: t.images[0].url,
							contractAddress: `0x${t.nft.contractAddress}`,
							tokenId: t.nft.tokenId,
							serialNumber: t.serialNumber,
							collectionSize: t.drop.size,
							outfitId: t.benefits.avatarOutfit.id,
							backgroundImageUrl: t.benefits.avatarOutfit.backgroundImage.url,
							blockchainExplorerUrl: t.nft.externalUrls[0],
							ipfsUrl: t.nft.imageUrl,
							metadataUrl: t.nft.tokenUrl,
							mintDate: t.nft.mintedAt,
							isMinting: (null == (e = null == t ? void 0 : t.tags) ? void 0 : e.includes(G.MINTING)) || !1,
							isMinted: (null == (r = null == t ? void 0 : t.tags) ? void 0 : r.includes(G.MINTED)) || !1,
							soldFor: null,
							currentPrice: null,
							vendor: t.nft.vendor,
							ownerId: null != (i = null == (n = t.owner) ? void 0 : n.id) ? i : ""
						}
					}(r))
				}, [f]);
				const c = {
					title: "",
					avatarImageUrl: e,
					backgroundImageUrl: "",
					collectionSize: null,
					...o
				};
				return i.a.createElement("div", {
					className: $(rt, t)
				}, i.a.createElement("div", {
					className: nt
				}, i.a.createElement(L, {
					className: it,
					nft: c,
					nftIconClassName: ot,
					titleClassName: st,
					isShadowHidden: !0
				})))
			}, t => i.a.createElement(s.a, null, i.a.createElement(ut, {
				...t
			})));
			var ut, ft = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				ct = r("./src/reddit/actions/modal.ts"),
				lt = r("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				ht = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				dt = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				pt = r("./src/reddit/constants/modals.ts");
			const mt = () => r.e("NftProductDetailsModal").then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				gt = Object(ht.a)(mt, {
					ssr: !1
				});
			Object(dt.b)(pt.a.ECON_NFT_PRODUCT_DETAILS, t => i.a.createElement(gt, {
				onClose: t,
				onOverlayClick: t
			}));
			var yt = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				bt = r("./src/reddit/hooks/usePreloadModal.ts"),
				wt = r("./src/reddit/hooks/useTracking.ts"),
				Et = r("./src/reddit/selectors/experiments/econ/index.ts"),
				vt = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				It = r.n(vt);
			e.default = t => {
				let {
					className: e,
					imageUrl: r,
					origin: n
				} = t;
				const s = Object(o.d)(),
					a = Object(wt.a)();
				Object(bt.a)(mt);
				const u = Object(o.e)(Et.h),
					f = Object(ft.j)(r);
				return f ? i.a.createElement("div", {
					className: e
				}, i.a.createElement(lt.a, null, u ? i.a.createElement(i.a.Fragment, null, i.a.createElement(ft.h, {
					imageUrl: r
				}), i.a.createElement(ft.g, {
					className: It.a.detailsButton,
					onClick: () => {
						a(Object(yt.e)(n)), s(Object(ct.h)(pt.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: f
						}))
					}
				})) : i.a.createElement(i.a.Fragment, null, i.a.createElement(at, {
					imageUrl: r
				})))) : null
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return o
			})), r.d(e, "a", (function() {
				return s
			}));
			const n = {},
				i = () => null;

			function o(t, e) {
				if (t in n) throw new Error(`Modal with id ${t} already registered!`);
				n[t] = e
			}

			function s(t) {
				return t && t in n ? n[t] : i
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			})), r.d(e, "j", (function() {
				return s
			})), r.d(e, "i", (function() {
				return a
			})), r.d(e, "h", (function() {
				return u
			})), r.d(e, "l", (function() {
				return f
			})), r.d(e, "k", (function() {
				return c
			})), r.d(e, "m", (function() {
				return l
			})), r.d(e, "g", (function() {
				return h
			})), r.d(e, "b", (function() {
				return d
			})), r.d(e, "d", (function() {
				return p
			})), r.d(e, "c", (function() {
				return m
			})), r.d(e, "e", (function() {
				return g
			})), r.d(e, "f", (function() {
				return y
			})), r.d(e, "n", (function() {
				return b
			}));
			var n, i = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function s(t) {
				switch (t) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return t + " Network"
			}

			function a(t) {
				switch (t) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case n.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case n.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${t}`
				}
			}

			function u(t) {
				switch (t) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184;
					case n.ArbitrumNitroDevnet:
						return 421612;
					case n.ArbitrumMainnet:
						return 42170;
					default: {
						const [, e] = t.split(":");
						return e
					}
				}
			}

			function f(t) {
				return t === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function c(t, e, r) {
				return Object(o.a)(t, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${e}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(t, e, r) {
				return await Object(o.a)(t, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${e}/registrations`,
					data: r
				})
			}
			async function h(t, e, r) {
				return await Object(o.a)(t, {
					method: "delete",
					endpoint: `${i.a.metaUrl}/crypto/${e}/registrations/${r}`
				})
			}! function(t) {
				t.Ethereum = "ethereum:1", t.Rinkeby = "ethereum:4", t.ArbitrumNova = "ethereum:42170", t.ArbitrumRinkeby = "ethereum:5391184", t.ArbitrumNitroDevnet = "ethereum:421612", t.ArbitrumMainnet = "ethereum:42170", t.EthTraderEthereum = "ethereum:1:ethtrader", t.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const d = (t, e, r) => ({
					type: "burn-link",
					subredditId: t,
					amount: e,
					burnMemo: r
				}),
				p = t => ({
					type: "convert-to-coins",
					subredditId: t
				}),
				m = t => ({
					type: "claim",
					subredditId: t
				}),
				g = t => ({
					type: "subscribe",
					subredditId: t
				}),
				y = (t, e, r, n) => ({
					type: "transfer",
					subredditId: t,
					recipient: e,
					recipientAddress: r,
					amount: n
				});
			async function b(t, e) {
				return await Object(o.a)(t, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: e
				})
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js");

			function i(t) {
				Object(n.useEffect)(() => {
					t()
				}, [t])
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(i.a)(n.wd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.0a2289634ff5a29ce0c4.js.map