// https://www.redditstatic.com/desktop2x/NftProfileUnit.036ba79262fc6bbf87a7.js
// Retrieved at 6/16/2022, 4:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./node_modules/classnames/index.js": function(t, e, n) {
			var r;
			! function() {
				"use strict";
				var n = {}.hasOwnProperty;

				function i() {
					for (var t = [], e = 0; e < arguments.length; e++) {
						var r = arguments[e];
						if (r) {
							var o = typeof r;
							if ("string" === o || "number" === o) t.push(r);
							else if (Array.isArray(r)) {
								if (r.length) {
									var s = i.apply(null, r);
									s && t.push(s)
								}
							} else if ("object" === o)
								if (r.toString === Object.prototype.toString)
									for (var a in r) n.call(r, a) && r[a] && t.push(a);
								else t.push(r.toString())
						}
					}
					return t.join(" ")
				}
				t.exports ? (i.default = i, t.exports = i) : void 0 === (r = function() {
					return i
				}.apply(e, [])) || (t.exports = r)
			}()
		},
		"./node_modules/react-tilt/dist/tilt.js": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r, i = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
				},
				o = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				s = n("./node_modules/react/index.js"),
				a = (r = s) && r.__esModule ? r : {
					default: r
				},
				u = n("./node_modules/react-dom/index.js");
			var f = function(t) {
				function e(t) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var n = function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					n.state = {
						style: {}
					};
					return n.width = null, n.height = null, n.left = null, n.top = null, n.transitionTimeout = null, n.updateCall = null, n.element = null, n.settings = Object.assign({}, {
						reverse: !1,
						max: 35,
						perspective: 1e3,
						easing: "cubic-bezier(.03,.98,.52,.99)",
						scale: "1.1",
						speed: "1000",
						transition: !0,
						axis: null,
						reset: !0
					}, n.props.options), n.reverse = n.settings.reverse ? -1 : 1, n.onMouseEnter = n.onMouseEnter.bind(n, n.props.onMouseEnter), n.onMouseMove = n.onMouseMove.bind(n, n.props.onMouseMove), n.onMouseLeave = n.onMouseLeave.bind(n, n.props.onMouseLeave), n
				}
				return function(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}(e, t), o(e, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, u.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: i({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), t(e)
					}
				}, {
					key: "reset",
					value: function() {
						var t = this;
						window.requestAnimationFrame((function() {
							t.setState(Object.assign({}, t.state, {
								style: i({}, t.state.style, {
									transform: "perspective(" + t.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return e.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = e, this.updateCall = requestAnimationFrame(this.update.bind(this, e)), t(e)
					}
				}, {
					key: "setTransition",
					value: function() {
						var t = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: i({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							t.setState(Object.assign({}, t.state, {
								style: i({}, t.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), t(e)
					}
				}, {
					key: "getValues",
					value: function(t) {
						var e = (t.nativeEvent.clientX - this.left) / this.width,
							n = (t.nativeEvent.clientY - this.top) / this.height,
							r = Math.min(Math.max(e, 0), 1),
							i = Math.min(Math.max(n, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - r * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (i * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * r,
							percentageY: 100 * i
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var t = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
					}
				}, {
					key: "update",
					value: function(t) {
						var e = this.getValues(t);
						this.setState(Object.assign({}, this.state, {
							style: i({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var t = Object.assign({}, this.props.style, this.state.style);
						return a.default.createElement("div", {
							style: t,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), e
			}(s.Component);
			e.default = f
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return c
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				l = n("./src/config.ts");
			const c = t => {
				let {
					children: e
				} = t;
				const n = function() {
					const t = Object(s.e)(p),
						e = Object(s.e)(f.db),
						n = Object(a.a)();
					h || (h = function(t, e, n) {
						return {
							api: {
								accessToken: t
							},
							fbt: {
								inline: (t, e) => t,
								singular: (t, e) => o.a.createElement(o.a.Fragment, null, t),
								param: (t, e) => o.a.createElement(o.a.Fragment, null, t),
								plural: (t, e) => o.a.createElement(o.a.Fragment, null, t)
							},
							gql: {
								host: l.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${t}`
									}
								}
							},
							nightModeActive: () => e,
							sendEvent(t) {
								n(e => {
									const n = Object(u.n)(e);
									return {
										...n,
										...t,
										actionInfo: {
											...n.actionInfo,
											...t.actionInfo
										}
									}
								})
							}
						}
					}(t, e, n));
					return h
				}();
				return o.a.createElement(r.a, {
					value: n
				}, e)
			};
			let h = null;

			function p(t) {
				var e;
				return (null === (e = t.user.session) || void 0 === e ? void 0 : e.accessToken) || ""
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less": function(t, e, n) {
			t.exports = {
				detailsButton: "_3QDuMIB5Qg310ADO1_fdV2"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/@reddit/crypto/react/gql/index.es.js"),
				a = n("./node_modules/@reddit/crypto/react/ui/index.es.js"),
				u = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				f = n("./node_modules/classnames/index.js"),
				l = n.n(f),
				c = n("./node_modules/react-tilt/dist/tilt.js"),
				h = n.n(c);
			var p = "_nftIcon_ryr9r_16",
				d = "_naming_ryr9r_27",
				g = "_avatarImage_ryr9r_43",
				y = "_front_ryr9r_71",
				m = "_frontBackground_ryr9r_77",
				v = "_clickable_ryr9r_87";
			var b = "_card_1tsp8_1",
				w = "_noShadow_1tsp8_8",
				E = "_content_1tsp8_11";
			const _ = ({
				children: t,
				className: e,
				onClick: n,
				isShadowHidden: r
			}) => i.a.createElement(h.a, {
				gyroscope: !0,
				options: {
					max: 12.5,
					scale: 1.05
				},
				className: l()(b, e, {
					[w]: r
				}),
				onClick: n
			}, i.a.createElement("div", {
				className: b
			}, i.a.createElement("div", {
				className: E
			}, t)));
			var B = "_container_3w2ay_42",
				I = "_range_3w2ay_48",
				A = "_rangeStart_3w2ay_54",
				O = "_rangeEnd_3w2ay_55",
				N = "_title_3w2ay_78";
			const U = ({
				title: t,
				rarity: e,
				collectionSize: n,
				className: r
			}) => {
				const o = function(t, e) {
					if (t) return String(t);
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
				}(n, e);
				return i.a.createElement("div", {
					className: l()(B, r)
				}, o && i.a.createElement("div", {
					className: I
				}, i.a.createElement("div", {
					className: A
				}, "1"), i.a.createElement("div", {
					className: O
				}, o)), i.a.createElement("h2", {
					className: N
				}, t))
			};
			const k = ({
				className: t,
				nft: e,
				onClick: n,
				nftIconClassName: r,
				titleClassName: o,
				isShadowHidden: s
			}) => {
				const {
					avatarImageUrl: a,
					backgroundImageUrl: u,
					nftImageUrl: f,
					title: c,
					collectionSize: h
				} = e, b = a ? u : f;
				return i.a.createElement(_, {
					className: l()(t, y, {
						[v]: !!n
					}),
					isShadowHidden: s
				}, i.a.createElement("div", {
					className: m,
					style: {
						backgroundImage: `url(${b})`
					}
				}), i.a.createElement("img", {
					src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
					className: l()(p, r)
				}), a && i.a.createElement("img", {
					src: a,
					className: g,
					alt: "nft-asset"
				}), i.a.createElement(U, {
					title: c,
					className: l()(d, o),
					collectionSize: h
				}))
			};
			var S = Object.defineProperty,
				T = Object.getOwnPropertySymbols,
				x = Object.prototype.hasOwnProperty,
				M = Object.prototype.propertyIsEnumerable,
				j = (t, e, n) => e in t ? S(t, e, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : t[e] = n,
				C = (t, e) => {
					for (var n in e || (e = {})) x.call(e, n) && j(t, n, e[n]);
					if (T)
						for (var n of T(e)) M.call(e, n) && j(t, n, e[n]);
					return t
				};
			var R = {
				exports: {}
			};
			! function(t) {
				! function() {
					var e = {}.hasOwnProperty;

					function n() {
						for (var t = [], r = 0; r < arguments.length; r++) {
							var i = arguments[r];
							if (i) {
								var o = typeof i;
								if ("string" === o || "number" === o) t.push(i);
								else if (Array.isArray(i)) {
									if (i.length) {
										var s = n.apply(null, i);
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
					t.exports ? (n.default = n, t.exports = n) : window.classNames = n
				}()
			}(R);
			var L = R.exports;
			const P = ({
				children: t,
				desc: e
			}) => {
				const n = Object(u.c)();
				return i.a.createElement(i.a.Fragment, null, n.singular(t, e))
			};
			var D = "_container_1a0am_1",
				F = "_icon_1a0am_12";
			const $ = ({
				className: t,
				onClick: e
			}) => i.a.createElement(a.a, {
				className: L(D, t),
				onClick: e,
				theme: "grey"
			}, i.a.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
				className: F
			}), i.a.createElement(P, {
				desc: "Button: See details about this NFT"
			}, "NFT Details"));
			var z = {
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
			z.loc.source = {
				body: "query getNftDetails($ids: [ID!]!) {\n  inventoryItems(filter: { ids: $ids }) {\n    edges {\n      node {\n        ...NftInventoryItemFragment\n      }\n    }\n  }\n}\n",
				name: "GraphQL request",
				locationOffset: {
					line: 1,
					column: 1
				}
			};
			var G, Y, q = {};

			function V(t, e) {
				for (var n = 0; n < t.definitions.length; n++) {
					var r = t.definitions[n];
					if (r.name && r.name.value == e) return r
				}
			}
			z.definitions.forEach((function(t) {
					if (t.name) {
						var e = new Set;
						! function t(e, n) {
							if ("FragmentSpread" === e.kind) n.add(e.name.value);
							else if ("VariableDefinition" === e.kind) {
								var r = e.type;
								"NamedType" === r.kind && n.add(r.name.value)
							}
							e.selectionSet && e.selectionSet.selections.forEach((function(e) {
								t(e, n)
							})), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
								t(e, n)
							})), e.definitions && e.definitions.forEach((function(e) {
								t(e, n)
							}))
						}(t, e), q[t.name.value] = e
					}
				})),
				function(t, e) {
					var n = {
						kind: t.kind,
						definitions: [V(t, e)]
					};
					t.hasOwnProperty("loc") && (n.loc = t.loc);
					var r = q[e] || new Set,
						i = new Set,
						o = new Set;
					for (r.forEach((function(t) {
							o.add(t)
						})); o.size > 0;) {
						var s = o;
						o = new Set, s.forEach((function(t) {
							i.has(t) || (i.add(t), (q[t] || new Set).forEach((function(t) {
								o.add(t)
							})))
						}))
					}
					i.forEach((function(e) {
						var r = V(t, e);
						r && n.definitions.push(r)
					}))
				}(z, "getNftDetails"), (Y = G || (G = {})).MINTED = "MINTED", Y.MINTING = "MINTING", Y.TRANSFERRING = "TRANSFERRING";
			for (var X = {}, H = {
					byteLength: function(t) {
						var e = et(t),
							n = e[0],
							r = e[1];
						return 3 * (n + r) / 4 - r
					},
					toByteArray: function(t) {
						var e, n, r = et(t),
							i = r[0],
							o = r[1],
							s = new K(function(t, e, n) {
								return 3 * (e + n) / 4 - n
							}(0, i, o)),
							a = 0,
							u = o > 0 ? i - 4 : i;
						for (n = 0; n < u; n += 4) e = Q[t.charCodeAt(n)] << 18 | Q[t.charCodeAt(n + 1)] << 12 | Q[t.charCodeAt(n + 2)] << 6 | Q[t.charCodeAt(n + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
						2 === o && (e = Q[t.charCodeAt(n)] << 2 | Q[t.charCodeAt(n + 1)] >> 4, s[a++] = 255 & e);
						1 === o && (e = Q[t.charCodeAt(n)] << 10 | Q[t.charCodeAt(n + 1)] << 4 | Q[t.charCodeAt(n + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
						return s
					},
					fromByteArray: function(t) {
						for (var e, n = t.length, r = n % 3, i = [], o = 0, s = n - r; o < s; o += 16383) i.push(nt(t, o, o + 16383 > s ? s : o + 16383));
						1 === r ? (e = t[n - 1], i.push(W[e >> 2] + W[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i.push(W[e >> 10] + W[e >> 4 & 63] + W[e << 2 & 63] + "="));
						return i.join("")
					}
				}, W = [], Q = [], K = "undefined" != typeof Uint8Array ? Uint8Array : Array, J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Z = 0, tt = J.length; Z < tt; ++Z) W[Z] = J[Z], Q[J.charCodeAt(Z)] = Z;

			function et(t) {
				var e = t.length;
				if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var n = t.indexOf("=");
				return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
			}

			function nt(t, e, n) {
				for (var r, i, o = [], s = e; s < n; s += 3) r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(W[(i = r) >> 18 & 63] + W[i >> 12 & 63] + W[i >> 6 & 63] + W[63 & i]);
				return o.join("")
			}
			Q["-".charCodeAt(0)] = 62, Q["_".charCodeAt(0)] = 63;
			var rt = {
				read: function(t, e, n, r, i) {
					var o, s, a = 8 * i - r - 1,
						u = (1 << a) - 1,
						f = u >> 1,
						l = -7,
						c = n ? i - 1 : 0,
						h = n ? -1 : 1,
						p = t[e + c];
					for (c += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[e + c], c += h, l -= 8);
					for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + c], c += h, l -= 8);
					if (0 === o) o = 1 - f;
					else {
						if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
						s += Math.pow(2, r), o -= f
					}
					return (p ? -1 : 1) * s * Math.pow(2, o - r)
				},
				write: function(t, e, n, r, i, o) {
					var s, a, u, f = 8 * o - i - 1,
						l = (1 << f) - 1,
						c = l >> 1,
						h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						p = r ? 0 : o - 1,
						d = r ? 1 : -1,
						g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
					for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + c >= 1 ? h / u : h * Math.pow(2, 1 - c)) * u >= 2 && (s++, u /= 2), s + c >= l ? (a = 0, s = l) : s + c >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += d, a /= 256, i -= 8);
					for (s = s << i | a, f += i; f > 0; t[n + p] = 255 & s, p += d, s /= 256, f -= 8);
					t[n + p - d] |= 128 * g
				}
			};
			! function(t) {
				const e = H,
					n = rt,
					r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
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

				function s(t, e, n) {
					if ("number" == typeof t) {
						if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
						return f(t)
					}
					return a(t, e, n)
				}

				function a(t, e, n) {
					if ("string" == typeof t) return function(t, e) {
						"string" == typeof e && "" !== e || (e = "utf8");
						if (!s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
						const n = 0 | p(t, e);
						let r = o(n);
						const i = r.write(t, e);
						i !== n && (r = r.slice(0, i));
						return r
					}(t, e);
					if (ArrayBuffer.isView(t)) return function(t) {
						if (X(t, Uint8Array)) {
							const e = new Uint8Array(t);
							return c(e.buffer, e.byteOffset, e.byteLength)
						}
						return l(t)
					}(t);
					if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
					if (X(t, ArrayBuffer) || t && X(t.buffer, ArrayBuffer)) return c(t, e, n);
					if ("undefined" != typeof SharedArrayBuffer && (X(t, SharedArrayBuffer) || t && X(t.buffer, SharedArrayBuffer))) return c(t, e, n);
					if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
					const r = t.valueOf && t.valueOf();
					if (null != r && r !== t) return s.from(r, e, n);
					const i = function(t) {
						if (s.isBuffer(t)) {
							const e = 0 | h(t.length),
								n = o(e);
							return 0 === n.length ? n : (t.copy(n, 0, 0, e), n)
						}
						if (void 0 !== t.length) return "number" != typeof t.length || W(t.length) ? o(0) : l(t);
						if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
					}(t);
					if (i) return i;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, n);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
				}

				function u(t) {
					if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
					if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
				}

				function f(t) {
					return u(t), o(t < 0 ? 0 : 0 | h(t))
				}

				function l(t) {
					const e = t.length < 0 ? 0 : 0 | h(t.length),
						n = o(e);
					for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
					return n
				}

				function c(t, e, n) {
					if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
					if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
					let r;
					return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, s.prototype), r
				}

				function h(t) {
					if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
					return 0 | t
				}

				function p(t, e) {
					if (s.isBuffer(t)) return t.length;
					if (ArrayBuffer.isView(t) || X(t, ArrayBuffer)) return t.byteLength;
					if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
					const n = t.length,
						r = arguments.length > 2 && !0 === arguments[2];
					if (!r && 0 === n) return 0;
					let i = !1;
					for (;;) switch (e) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
							return Y(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return q(t).length;
						default:
							if (i) return r ? -1 : Y(t).length;
							e = ("" + e).toLowerCase(), i = !0
					}
				}

				function d(t, e, n) {
					let r = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (e >>>= 0)) return "";
					for (t || (t = "utf8");;) switch (t) {
						case "hex":
							return U(this, e, n);
						case "utf8":
						case "utf-8":
							return I(this, e, n);
						case "ascii":
							return O(this, e, n);
						case "latin1":
						case "binary":
							return N(this, e, n);
						case "base64":
							return B(this, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return k(this, e, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), r = !0
					}
				}

				function g(t, e, n) {
					const r = t[e];
					t[e] = t[n], t[n] = r
				}

				function y(t, e, n, r, i) {
					if (0 === t.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), W(n = +n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
						if (i) return -1;
						n = t.length - 1
					} else if (n < 0) {
						if (!i) return -1;
						n = 0
					}
					if ("string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, n, r, i);
					if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [e], n, r, i);
					throw new TypeError("val must be string, number or Buffer")
				}

				function m(t, e, n, r, i) {
					let o, s = 1,
						a = t.length,
						u = e.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (t.length < 2 || e.length < 2) return -1;
						s = 2, a /= 2, u /= 2, n /= 2
					}

					function f(t, e) {
						return 1 === s ? t[e] : t.readUInt16BE(e * s)
					}
					if (i) {
						let r = -1;
						for (o = n; o < a; o++)
							if (f(t, o) === f(e, -1 === r ? 0 : o - r)) {
								if (-1 === r && (r = o), o - r + 1 === u) return r * s
							} else -1 !== r && (o -= o - r), r = -1
					} else
						for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
							let n = !0;
							for (let r = 0; r < u; r++)
								if (f(t, o + r) !== f(e, r)) {
									n = !1;
									break
								} if (n) return o
						}
					return -1
				}

				function v(t, e, n, r) {
					n = Number(n) || 0;
					const i = t.length - n;
					r ? (r = Number(r)) > i && (r = i) : r = i;
					const o = e.length;
					let s;
					for (r > o / 2 && (r = o / 2), s = 0; s < r; ++s) {
						const r = parseInt(e.substr(2 * s, 2), 16);
						if (W(r)) return s;
						t[n + s] = r
					}
					return s
				}

				function b(t, e, n, r) {
					return V(Y(e, t.length - n), t, n, r)
				}

				function w(t, e, n, r) {
					return V(function(t) {
						const e = [];
						for (let n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
						return e
					}(e), t, n, r)
				}

				function E(t, e, n, r) {
					return V(q(e), t, n, r)
				}

				function _(t, e, n, r) {
					return V(function(t, e) {
						let n, r, i;
						const o = [];
						for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
						return o
					}(e, t.length - n), t, n, r)
				}

				function B(t, n, r) {
					return 0 === n && r === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(n, r))
				}

				function I(t, e, n) {
					n = Math.min(t.length, n);
					const r = [];
					let i = e;
					for (; i < n;) {
						const e = t[i];
						let o = null,
							s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
						if (i + s <= n) {
							let n, r, a, u;
							switch (s) {
								case 1:
									e < 128 && (o = e);
									break;
								case 2:
									128 == (192 & (n = t[i + 1])) && (u = (31 & e) << 6 | 63 & n) > 127 && (o = u);
									break;
								case 3:
									n = t[i + 1], r = t[i + 2], 128 == (192 & n) && 128 == (192 & r) && (u = (15 & e) << 12 | (63 & n) << 6 | 63 & r) > 2047 && (u < 55296 || u > 57343) && (o = u);
									break;
								case 4:
									n = t[i + 1], r = t[i + 2], a = t[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
							}
						}
						null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += s
					}
					return function(t) {
						const e = t.length;
						if (e <= A) return String.fromCharCode.apply(String, t);
						let n = "",
							r = 0;
						for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += A));
						return n
					}(r)
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
				}), s.poolSize = 8192, s.from = function(t, e, n) {
					return a(t, e, n)
				}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, n) {
					return function(t, e, n) {
						return u(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof n ? o(t).fill(e, n) : o(t).fill(e) : o(t)
					}(t, e, n)
				}, s.allocUnsafe = function(t) {
					return f(t)
				}, s.allocUnsafeSlow = function(t) {
					return f(t)
				}, s.isBuffer = function(t) {
					return null != t && !0 === t._isBuffer && t !== s.prototype
				}, s.compare = function(t, e) {
					if (X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (t === e) return 0;
					let n = t.length,
						r = e.length;
					for (let i = 0, o = Math.min(n, r); i < o; ++i)
						if (t[i] !== e[i]) {
							n = t[i], r = e[i];
							break
						} return n < r ? -1 : r < n ? 1 : 0
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
					let n;
					if (void 0 === e)
						for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
					const r = s.allocUnsafe(e);
					let i = 0;
					for (n = 0; n < t.length; ++n) {
						let e = t[n];
						if (X(e, Uint8Array)) i + e.length > r.length ? (s.isBuffer(e) || (e = s.from(e)), e.copy(r, i)) : Uint8Array.prototype.set.call(r, e, i);
						else {
							if (!s.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
							e.copy(r, i)
						}
						i += e.length
					}
					return r
				}, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
					const t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (let e = 0; e < t; e += 2) g(this, e, e + 1);
					return this
				}, s.prototype.swap32 = function() {
					const t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
					return this
				}, s.prototype.swap64 = function() {
					const t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
					return this
				}, s.prototype.toString = function() {
					const t = this.length;
					return 0 === t ? "" : 0 === arguments.length ? I(this, 0, t) : d.apply(this, arguments)
				}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
					if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === s.compare(this, t)
				}, s.prototype.inspect = function() {
					let e = "";
					const n = t.INSPECT_MAX_BYTES;
					return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
				}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(t, e, n, r, i) {
					if (X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
					if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
					if (r >= i && e >= n) return 0;
					if (r >= i) return -1;
					if (e >= n) return 1;
					if (this === t) return 0;
					let o = (i >>>= 0) - (r >>>= 0),
						a = (n >>>= 0) - (e >>>= 0);
					const u = Math.min(o, a),
						f = this.slice(r, i),
						l = t.slice(e, n);
					for (let s = 0; s < u; ++s)
						if (f[s] !== l[s]) {
							o = f[s], a = l[s];
							break
						} return o < a ? -1 : a < o ? 1 : 0
				}, s.prototype.includes = function(t, e, n) {
					return -1 !== this.indexOf(t, e, n)
				}, s.prototype.indexOf = function(t, e, n) {
					return y(this, t, e, n, !0)
				}, s.prototype.lastIndexOf = function(t, e, n) {
					return y(this, t, e, n, !1)
				}, s.prototype.write = function(t, e, n, r) {
					if (void 0 === e) r = "utf8", n = this.length, e = 0;
					else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					const i = this.length - e;
					if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					let o = !1;
					for (;;) switch (r) {
						case "hex":
							return v(this, t, e, n);
						case "utf8":
						case "utf-8":
							return b(this, t, e, n);
						case "ascii":
						case "latin1":
						case "binary":
							return w(this, t, e, n);
						case "base64":
							return E(this, t, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return _(this, t, e, n);
						default:
							if (o) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), o = !0
					}
				}, s.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				const A = 4096;

				function O(t, e, n) {
					let r = "";
					n = Math.min(t.length, n);
					for (let i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
					return r
				}

				function N(t, e, n) {
					let r = "";
					n = Math.min(t.length, n);
					for (let i = e; i < n; ++i) r += String.fromCharCode(t[i]);
					return r
				}

				function U(t, e, n) {
					const r = t.length;
					(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
					let i = "";
					for (let o = e; o < n; ++o) i += Q[t[o]];
					return i
				}

				function k(t, e, n) {
					const r = t.slice(e, n);
					let i = "";
					for (let o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
					return i
				}

				function S(t, e, n) {
					if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
					if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function T(t, e, n, r, i, o) {
					if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
					if (n + r > t.length) throw new RangeError("Index out of range")
				}

				function x(t, e, n, r, i) {
					F(e, r, i, t, n, 7);
					let o = Number(e & BigInt(4294967295));
					t[n++] = o, o >>= 8, t[n++] = o, o >>= 8, t[n++] = o, o >>= 8, t[n++] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, n
				}

				function M(t, e, n, r, i) {
					F(e, r, i, t, n, 7);
					let o = Number(e & BigInt(4294967295));
					t[n + 7] = o, o >>= 8, t[n + 6] = o, o >>= 8, t[n + 5] = o, o >>= 8, t[n + 4] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[n + 3] = s, s >>= 8, t[n + 2] = s, s >>= 8, t[n + 1] = s, s >>= 8, t[n] = s, n + 8
				}

				function j(t, e, n, r, i, o) {
					if (n + r > t.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function C(t, e, r, i, o) {
					return e = +e, r >>>= 0, o || j(t, 0, r, 4), n.write(t, e, r, i, 23, 4), r + 4
				}

				function R(t, e, r, i, o) {
					return e = +e, r >>>= 0, o || j(t, 0, r, 8), n.write(t, e, r, i, 52, 8), r + 8
				}
				s.prototype.slice = function(t, e) {
					const n = this.length;
					(t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
					const r = this.subarray(t, e);
					return Object.setPrototypeOf(r, s.prototype), r
				}, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || S(t, e, this.length);
					let r = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) r += this[t + o] * i;
					return r
				}, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || S(t, e, this.length);
					let r = this[t + --e],
						i = 1;
					for (; e > 0 && (i *= 256);) r += this[t + --e] * i;
					return r
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
				}, s.prototype.readBigUInt64LE = K((function(t) {
					$(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || z(t, this.length - 8);
					const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
						i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
					return BigInt(r) + (BigInt(i) << BigInt(32))
				})), s.prototype.readBigUInt64BE = K((function(t) {
					$(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || z(t, this.length - 8);
					const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
						i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
					return (BigInt(r) << BigInt(32)) + BigInt(i)
				})), s.prototype.readIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || S(t, e, this.length);
					let r = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) r += this[t + o] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
				}, s.prototype.readIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || S(t, e, this.length);
					let r = e,
						i = 1,
						o = this[t + --r];
					for (; r > 0 && (i *= 256);) o += this[t + --r] * i;
					return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
				}, s.prototype.readInt8 = function(t, e) {
					return t >>>= 0, e || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
				}, s.prototype.readInt16LE = function(t, e) {
					t >>>= 0, e || S(t, 2, this.length);
					const n = this[t] | this[t + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt16BE = function(t, e) {
					t >>>= 0, e || S(t, 2, this.length);
					const n = this[t + 1] | this[t] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt32LE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
				}, s.prototype.readInt32BE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
				}, s.prototype.readBigInt64LE = K((function(t) {
					$(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || z(t, this.length - 8);
					const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
					return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
				})), s.prototype.readBigInt64BE = K((function(t) {
					$(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || z(t, this.length - 8);
					const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
					return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
				})), s.prototype.readFloatLE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), n.read(this, t, !0, 23, 4)
				}, s.prototype.readFloatBE = function(t, e) {
					return t >>>= 0, e || S(t, 4, this.length), n.read(this, t, !1, 23, 4)
				}, s.prototype.readDoubleLE = function(t, e) {
					return t >>>= 0, e || S(t, 8, this.length), n.read(this, t, !0, 52, 8)
				}, s.prototype.readDoubleBE = function(t, e) {
					return t >>>= 0, e || S(t, 8, this.length), n.read(this, t, !1, 52, 8)
				}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, n >>>= 0, !r) {
						T(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
					}
					let i = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
					return e + n
				}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, n >>>= 0, !r) {
						T(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
					}
					let i = n - 1,
						o = 1;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
					return e + n
				}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
				}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
				}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigUInt64LE = K((function(t, e = 0) {
					return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeBigUInt64BE = K((function(t, e = 0) {
					return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * n - 1);
						T(this, t, e, n, r - 1, -r)
					}
					let i = 0,
						o = 1,
						s = 0;
					for (this[e] = 255 & t; ++i < n && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + n
				}, s.prototype.writeIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * n - 1);
						T(this, t, e, n, r - 1, -r)
					}
					let i = n - 1,
						o = 1,
						s = 0;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + n
				}, s.prototype.writeInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
				}, s.prototype.writeInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
				}, s.prototype.writeInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || T(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigInt64LE = K((function(t, e = 0) {
					return x(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeBigInt64BE = K((function(t, e = 0) {
					return M(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeFloatLE = function(t, e, n) {
					return C(this, t, e, !0, n)
				}, s.prototype.writeFloatBE = function(t, e, n) {
					return C(this, t, e, !1, n)
				}, s.prototype.writeDoubleLE = function(t, e, n) {
					return R(this, t, e, !0, n)
				}, s.prototype.writeDoubleBE = function(t, e, n) {
					return R(this, t, e, !1, n)
				}, s.prototype.copy = function(t, e, n, r) {
					if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
					if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if (0 === t.length || 0 === this.length) return 0;
					if (e < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
					const i = r - n;
					return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), i
				}, s.prototype.fill = function(t, e, n, r) {
					if ("string" == typeof t) {
						if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
						if (1 === t.length) {
							const e = t.charCodeAt(0);
							("utf8" === r && e < 128 || "latin1" === r) && (t = e)
						}
					} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
					if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
					if (n <= e) return this;
					let i;
					if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
						for (i = e; i < n; ++i) this[i] = t;
					else {
						const o = s.isBuffer(t) ? t : s.from(t, r),
							a = o.length;
						if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
						for (i = 0; i < n - e; ++i) this[i + e] = o[i % a]
					}
					return this
				};
				const L = {};

				function P(t, e, n) {
					L[t] = class NodeError extends n {
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

				function D(t) {
					let e = "",
						n = t.length;
					const r = "-" === t[0] ? 1 : 0;
					for (; n >= r + 4; n -= 3) e = `_${t.slice(n-3,n)}${e}`;
					return `${t.slice(0,n)}${e}`
				}

				function F(t, e, n, r, i, o) {
					if (t > n || t < e) {
						const r = "bigint" == typeof e ? "n" : "";
						let i;
						throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${e}${r} and <= ${n}${r}`, new L.ERR_OUT_OF_RANGE("value", i, t)
					}! function(t, e, n) {
						$(e, "offset"), void 0 !== t[e] && void 0 !== t[e + n] || z(e, t.length - (n + 1))
					}(r, i, o)
				}

				function $(t, e) {
					if ("number" != typeof t) throw new L.ERR_INVALID_ARG_TYPE(e, "number", t)
				}

				function z(t, e, n) {
					if (Math.floor(t) !== t) throw $(t, n), new L.ERR_OUT_OF_RANGE(n || "offset", "an integer", t);
					if (e < 0) throw new L.ERR_BUFFER_OUT_OF_BOUNDS;
					throw new L.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${e}`, t)
				}
				P("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
					return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
				}), RangeError), P("ERR_INVALID_ARG_TYPE", (function(t, e) {
					return `The "${t}" argument must be of type number. Received type ${typeof e}`
				}), TypeError), P("ERR_OUT_OF_RANGE", (function(t, e, n) {
					let r = `The value of "${t}" is out of range.`,
						i = n;
					return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = D(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = D(i)), i += "n"), r += ` It must be ${e}. Received ${i}`
				}), RangeError);
				const G = /[^+/0-9A-Za-z-_]/g;

				function Y(t, e) {
					let n;
					e = e || 1 / 0;
					const r = t.length;
					let i = null;
					const o = [];
					for (let s = 0; s < r; ++s) {
						if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
							if (!i) {
								if (n > 56319) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								if (s + 1 === r) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								i = n;
								continue
							}
							if (n < 56320) {
								(e -= 3) > -1 && o.push(239, 191, 189), i = n;
								continue
							}
							n = 65536 + (i - 55296 << 10 | n - 56320)
						} else i && (e -= 3) > -1 && o.push(239, 191, 189);
						if (i = null, n < 128) {
							if ((e -= 1) < 0) break;
							o.push(n)
						} else if (n < 2048) {
							if ((e -= 2) < 0) break;
							o.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((e -= 3) < 0) break;
							o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112)) throw new Error("Invalid code point");
							if ((e -= 4) < 0) break;
							o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return o
				}

				function q(t) {
					return e.toByteArray(function(t) {
						if ((t = (t = t.split("=")[0]).trim().replace(G, "")).length < 2) return "";
						for (; t.length % 4 != 0;) t += "=";
						return t
					}(t))
				}

				function V(t, e, n, r) {
					let i;
					for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
					return i
				}

				function X(t, e) {
					return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
				}

				function W(t) {
					return t != t
				}
				const Q = function() {
					const t = new Array(256);
					for (let e = 0; e < 16; ++e) {
						const n = 16 * e;
						for (let r = 0; r < 16; ++r) t[n + r] = "0123456789abcdef" [e] + "0123456789abcdef" [r]
					}
					return t
				}();

				function K(t) {
					return "undefined" == typeof BigInt ? J : t
				}

				function J() {
					throw new Error("BigInt not supported")
				}
			}(X);
			const it = /(?:\/|-)(?:nftv2)_([^_]+)_(\w+)_.*\.(?:png|svg)/,
				ot = t => {
					const e = t.match(it),
						n = null == e ? void 0 : e[1];
					if (!n) return null;
					const r = decodeURI(n);
					return X.Buffer.from(r, "base64").toString()
				};
			var st = "_container_1xtot_49",
				at = "_cardContainer_1xtot_148",
				ut = "_cardFront_1xtot_153",
				ft = "_treatmentIcon_1xtot_158",
				lt = "_treatmentTitle_1xtot_164";
			const ct = (ht = ({
				className: t,
				imageUrl: e
			}) => {
				const n = ot(e),
					[o, a] = Object(r.useState)({}),
					[u] = Object(s.c)({
						query: z,
						variables: {
							ids: [n]
						}
					}),
					{
						data: f
					} = u;
				Object(r.useEffect)(() => {
					var t, e;
					const n = null == (e = null == (t = null == f ? void 0 : f.inventoryItems) ? void 0 : t.edges[0]) ? void 0 : e.node;
					n && a(function(t) {
						var e, n, r, i;
						return {
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
							isMinted: (null == (n = null == t ? void 0 : t.tags) ? void 0 : n.includes(G.MINTED)) || !1,
							soldFor: null,
							currentPrice: null,
							vendor: t.nft.vendor,
							ownerId: null != (i = null == (r = t.owner) ? void 0 : r.id) ? i : ""
						}
					}(n))
				}, [f]);
				const l = C({
					title: "",
					avatarImageUrl: e,
					backgroundImageUrl: "",
					collectionSize: null
				}, o);
				return i.a.createElement("div", {
					className: L(st, t)
				}, i.a.createElement("div", {
					className: at
				}, i.a.createElement(k, {
					className: ut,
					nft: l,
					nftIconClassName: ft,
					titleClassName: lt,
					isShadowHidden: !0
				})))
			}, t => i.a.createElement(s.a, null, i.a.createElement(ht, C({}, t))));
			var ht, pt = n("./src/reddit/actions/modal.ts"),
				dt = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				gt = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				yt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				mt = n("./src/reddit/constants/modals.ts");
			const vt = () => Promise.all([n.e(0), n.e(4), n.e("NftProductDetailsModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				bt = Object(gt.a)(vt, {
					ssr: !1
				});
			Object(yt.b)(mt.a.ECON_NFT_PRODUCT_DETAILS, t => i.a.createElement(bt, {
				onClose: t,
				onOverlayClick: t
			}));
			var wt = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				Et = n("./src/reddit/hooks/usePreloadModal.ts"),
				_t = n("./src/reddit/hooks/useTracking.ts"),
				Bt = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				It = n.n(Bt);
			e.default = t => {
				let {
					className: e,
					imageUrl: n,
					origin: r
				} = t;
				const s = Object(o.d)(),
					a = Object(_t.a)();
				Object(Et.a)(vt);
				const u = ot(n);
				return u ? i.a.createElement("div", {
					className: e
				}, i.a.createElement(dt.a, null, i.a.createElement(ct, {
					imageUrl: n
				}), i.a.createElement($, {
					className: It.a.detailsButton,
					onClick: () => {
						a(Object(wt.e)(r)), s(Object(pt.h)(mt.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: u
						}))
					}
				}))) : null
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return o
			})), n.d(e, "a", (function() {
				return s
			}));
			const r = {},
				i = () => null;

			function o(t, e) {
				if (t in r) throw new Error(`Modal with id ${t} already registered!`);
				r[t] = e
			}

			function s(t) {
				return t && t in r ? r[t] : i
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js");

			function i(t) {
				Object(r.useEffect)(() => {
					t()
				}, [t])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.036ba79262fc6bbf87a7.js.map