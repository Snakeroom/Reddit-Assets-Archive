// https://www.redditstatic.com/desktop2x/NftProfileUnit.5366a7fbd926909e5336.js
// Retrieved at 5/5/2022, 6:50:05 PM by Reddit Dataminer v1.0.0
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
				u = n("./src/reddit/selectors/user.ts"),
				f = n("./src/config.ts");
			const c = t => {
				let {
					children: e
				} = t;
				const n = function() {
					const t = Object(s.e)(h),
						e = Object(s.e)(u.db),
						n = Object(a.a)();
					l || (l = function(t, e, n) {
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
								host: f.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${t}`
									}
								}
							},
							nightModeActive: () => e,
							sendEvent: () => n
						}
					}(t, e, n));
					return l
				}();
				return o.a.createElement(r.a, {
					value: n
				}, e)
			};
			let l = null;

			function h(t) {
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
				s = n("./node_modules/@reddit/crypto/react/ui/index.es.js"),
				a = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				u = n("./node_modules/classnames/index.js"),
				f = n.n(u),
				c = n("./node_modules/react-tilt/dist/tilt.js"),
				l = n.n(c);
			var h = "_nftIcon_gjc1q_6",
				p = "_naming_gjc1q_17",
				g = "_image_gjc1q_33",
				d = "_front_gjc1q_61",
				y = "_frontBackground_gjc1q_66",
				m = "_clickable_gjc1q_76";
			var w = "_card_5gv8c_1",
				b = "_content_5gv8c_10";
			const v = ({
				children: t,
				className: e,
				onClick: n
			}) => i.a.createElement(l.a, {
				gyroscope: !0,
				className: f()(w, e),
				onClick: n
			}, i.a.createElement("div", {
				className: w
			}, i.a.createElement("div", {
				className: b
			}, t)));
			var E = "_container_uuek9_30",
				_ = "_range_uuek9_35",
				B = "_rangeStart_uuek9_39",
				A = "_rangeEnd_uuek9_40",
				I = "_title_uuek9_63";
			const U = ({
				title: t,
				rarity: e,
				collectionSize: n,
				className: r
			}) => {
				const o = n ? String(n) : function(t) {
					switch (t) {
						case "legendary":
							return "1";
						case "epic":
							return "100";
						case "rare":
							return "101+";
						case "test":
							return "∞"
					}
				}(e);
				return i.a.createElement("div", {
					className: f()(E, r)
				}, i.a.createElement("div", {
					className: _
				}, i.a.createElement("div", {
					className: B
				}, "1"), i.a.createElement("div", {
					className: A
				}, o)), i.a.createElement("div", null, i.a.createElement("h2", {
					className: I
				}, t)))
			};
			const O = ({
				className: t,
				nft: e,
				onClick: n
			}) => {
				const {
					avatarImageUrl: r,
					backgroundImageUrl: o,
					nftImageUrl: s,
					title: a,
					collectionSize: u
				} = e;
				return i.a.createElement(v, {
					className: f()(t, d, n ? m : null)
				}, (s || o) && i.a.createElement("div", {
					className: y,
					style: {
						backgroundImage: `url(${s||o})`
					}
				}), i.a.createElement("img", {
					src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
					className: h
				}), r && !s && i.a.createElement("img", {
					src: r,
					className: g,
					alt: "nft-asset"
				}), i.a.createElement(U, {
					rarity: "test",
					title: a,
					className: p,
					collectionSize: u
				}))
			};
			var x = {
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
			}(x);
			var T = x.exports;
			const M = ({
				children: t,
				desc: e
			}) => {
				const n = Object(a.c)();
				return i.a.createElement(i.a.Fragment, null, n.singular(t, e))
			};
			var N = "_container_1a0am_1",
				j = "_icon_1a0am_12";
			const C = ({
				className: t,
				onClick: e
			}) => i.a.createElement(s.a, {
				className: T(N, t),
				onClick: e,
				theme: "grey"
			}, i.a.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
				className: j
			}), i.a.createElement(M, {
				desc: "Button: See details about this NFT"
			}, "NFT Details"));
			var R = "_container_11n76_30",
				S = "_cardContainer_11n76_30",
				L = "_card_11n76_30";
			const k = ({
				className: t,
				imageUrl: e
			}) => {
				const n = {
					title: "Test Snoo",
					avatarImageUrl: e,
					backgroundImageUrl: "https://www.redditstatic.com/crypto-assets/v2/marketplace/mobile/cards/Test_static.png"
				};
				return i.a.createElement("div", {
					className: T(R, t)
				}, i.a.createElement("div", {
					className: S
				}, i.a.createElement(O, {
					className: L,
					nft: n
				})))
			};
			for (var P = {}, $ = {
					byteLength: function(t) {
						var e = X(t),
							n = e[0],
							r = e[1];
						return 3 * (n + r) / 4 - r
					},
					toByteArray: function(t) {
						var e, n, r = X(t),
							i = r[0],
							o = r[1],
							s = new z(function(t, e, n) {
								return 3 * (e + n) / 4 - n
							}(0, i, o)),
							a = 0,
							u = o > 0 ? i - 4 : i;
						for (n = 0; n < u; n += 4) e = D[t.charCodeAt(n)] << 18 | D[t.charCodeAt(n + 1)] << 12 | D[t.charCodeAt(n + 2)] << 6 | D[t.charCodeAt(n + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
						2 === o && (e = D[t.charCodeAt(n)] << 2 | D[t.charCodeAt(n + 1)] >> 4, s[a++] = 255 & e);
						1 === o && (e = D[t.charCodeAt(n)] << 10 | D[t.charCodeAt(n + 1)] << 4 | D[t.charCodeAt(n + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
						return s
					},
					fromByteArray: function(t) {
						for (var e, n = t.length, r = n % 3, i = [], o = 0, s = n - r; o < s; o += 16383) i.push(V(t, o, o + 16383 > s ? s : o + 16383));
						1 === r ? (e = t[n - 1], i.push(F[e >> 2] + F[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i.push(F[e >> 10] + F[e >> 4 & 63] + F[e << 2 & 63] + "="));
						return i.join("")
					}
				}, F = [], D = [], z = "undefined" != typeof Uint8Array ? Uint8Array : Array, Y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", q = 0, G = Y.length; q < G; ++q) F[q] = Y[q], D[Y.charCodeAt(q)] = q;

			function X(t) {
				var e = t.length;
				if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var n = t.indexOf("=");
				return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
			}

			function V(t, e, n) {
				for (var r, i, o = [], s = e; s < n; s += 3) r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(F[(i = r) >> 18 & 63] + F[i >> 12 & 63] + F[i >> 6 & 63] + F[63 & i]);
				return o.join("")
			}
			D["-".charCodeAt(0)] = 62, D["_".charCodeAt(0)] = 63;
			var W = {
				read: function(t, e, n, r, i) {
					var o, s, a = 8 * i - r - 1,
						u = (1 << a) - 1,
						f = u >> 1,
						c = -7,
						l = n ? i - 1 : 0,
						h = n ? -1 : 1,
						p = t[e + l];
					for (l += h, o = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; o = 256 * o + t[e + l], l += h, c -= 8);
					for (s = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; s = 256 * s + t[e + l], l += h, c -= 8);
					if (0 === o) o = 1 - f;
					else {
						if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
						s += Math.pow(2, r), o -= f
					}
					return (p ? -1 : 1) * s * Math.pow(2, o - r)
				},
				write: function(t, e, n, r, i, o) {
					var s, a, u, f = 8 * o - i - 1,
						c = (1 << f) - 1,
						l = c >> 1,
						h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						p = r ? 0 : o - 1,
						g = r ? 1 : -1,
						d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
					for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= c ? (a = 0, s = c) : s + l >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += g, a /= 256, i -= 8);
					for (s = s << i | a, f += i; f > 0; t[n + p] = 255 & s, p += g, s /= 256, f -= 8);
					t[n + p - g] |= 128 * d
				}
			};
			! function(t) {
				const e = $,
					n = W,
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
						if (H(t, Uint8Array)) {
							const e = new Uint8Array(t);
							return l(e.buffer, e.byteOffset, e.byteLength)
						}
						return c(t)
					}(t);
					if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
					if (H(t, ArrayBuffer) || t && H(t.buffer, ArrayBuffer)) return l(t, e, n);
					if ("undefined" != typeof SharedArrayBuffer && (H(t, SharedArrayBuffer) || t && H(t.buffer, SharedArrayBuffer))) return l(t, e, n);
					if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
					const r = t.valueOf && t.valueOf();
					if (null != r && r !== t) return s.from(r, e, n);
					const i = function(t) {
						if (s.isBuffer(t)) {
							const e = 0 | h(t.length),
								n = o(e);
							return 0 === n.length ? n : (t.copy(n, 0, 0, e), n)
						}
						if (void 0 !== t.length) return "number" != typeof t.length || K(t.length) ? o(0) : c(t);
						if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data)
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

				function c(t) {
					const e = t.length < 0 ? 0 : 0 | h(t.length),
						n = o(e);
					for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
					return n
				}

				function l(t, e, n) {
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
					if (ArrayBuffer.isView(t) || H(t, ArrayBuffer)) return t.byteLength;
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
							return G(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return X(t).length;
						default:
							if (i) return r ? -1 : G(t).length;
							e = ("" + e).toLowerCase(), i = !0
					}
				}

				function g(t, e, n) {
					let r = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (e >>>= 0)) return "";
					for (t || (t = "utf8");;) switch (t) {
						case "hex":
							return x(this, e, n);
						case "utf8":
						case "utf-8":
							return A(this, e, n);
						case "ascii":
							return U(this, e, n);
						case "latin1":
						case "binary":
							return O(this, e, n);
						case "base64":
							return B(this, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return T(this, e, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), r = !0
					}
				}

				function d(t, e, n) {
					const r = t[e];
					t[e] = t[n], t[n] = r
				}

				function y(t, e, n, r, i) {
					if (0 === t.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), K(n = +n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
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

				function w(t, e, n, r) {
					n = Number(n) || 0;
					const i = t.length - n;
					r ? (r = Number(r)) > i && (r = i) : r = i;
					const o = e.length;
					let s;
					for (r > o / 2 && (r = o / 2), s = 0; s < r; ++s) {
						const r = parseInt(e.substr(2 * s, 2), 16);
						if (K(r)) return s;
						t[n + s] = r
					}
					return s
				}

				function b(t, e, n, r) {
					return V(G(e, t.length - n), t, n, r)
				}

				function v(t, e, n, r) {
					return V(function(t) {
						const e = [];
						for (let n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
						return e
					}(e), t, n, r)
				}

				function E(t, e, n, r) {
					return V(X(e), t, n, r)
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

				function A(t, e, n) {
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
						if (e <= I) return String.fromCharCode.apply(String, t);
						let n = "",
							r = 0;
						for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += I));
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
					if (H(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), H(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
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
						if (H(e, Uint8Array)) i + e.length > r.length ? (s.isBuffer(e) || (e = s.from(e)), e.copy(r, i)) : Uint8Array.prototype.set.call(r, e, i);
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
					for (let e = 0; e < t; e += 2) d(this, e, e + 1);
					return this
				}, s.prototype.swap32 = function() {
					const t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let e = 0; e < t; e += 4) d(this, e, e + 3), d(this, e + 1, e + 2);
					return this
				}, s.prototype.swap64 = function() {
					const t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let e = 0; e < t; e += 8) d(this, e, e + 7), d(this, e + 1, e + 6), d(this, e + 2, e + 5), d(this, e + 3, e + 4);
					return this
				}, s.prototype.toString = function() {
					const t = this.length;
					return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : g.apply(this, arguments)
				}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
					if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === s.compare(this, t)
				}, s.prototype.inspect = function() {
					let e = "";
					const n = t.INSPECT_MAX_BYTES;
					return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
				}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(t, e, n, r, i) {
					if (H(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
					if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
					if (r >= i && e >= n) return 0;
					if (r >= i) return -1;
					if (e >= n) return 1;
					if (this === t) return 0;
					let o = (i >>>= 0) - (r >>>= 0),
						a = (n >>>= 0) - (e >>>= 0);
					const u = Math.min(o, a),
						f = this.slice(r, i),
						c = t.slice(e, n);
					for (let s = 0; s < u; ++s)
						if (f[s] !== c[s]) {
							o = f[s], a = c[s];
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
							return w(this, t, e, n);
						case "utf8":
						case "utf-8":
							return b(this, t, e, n);
						case "ascii":
						case "latin1":
						case "binary":
							return v(this, t, e, n);
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
				const I = 4096;

				function U(t, e, n) {
					let r = "";
					n = Math.min(t.length, n);
					for (let i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
					return r
				}

				function O(t, e, n) {
					let r = "";
					n = Math.min(t.length, n);
					for (let i = e; i < n; ++i) r += String.fromCharCode(t[i]);
					return r
				}

				function x(t, e, n) {
					const r = t.length;
					(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
					let i = "";
					for (let o = e; o < n; ++o) i += Q[t[o]];
					return i
				}

				function T(t, e, n) {
					const r = t.slice(e, n);
					let i = "";
					for (let o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
					return i
				}

				function M(t, e, n) {
					if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
					if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function N(t, e, n, r, i, o) {
					if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
					if (n + r > t.length) throw new RangeError("Index out of range")
				}

				function j(t, e, n, r, i) {
					D(e, r, i, t, n, 7);
					let o = Number(e & BigInt(4294967295));
					t[n++] = o, o >>= 8, t[n++] = o, o >>= 8, t[n++] = o, o >>= 8, t[n++] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, n
				}

				function C(t, e, n, r, i) {
					D(e, r, i, t, n, 7);
					let o = Number(e & BigInt(4294967295));
					t[n + 7] = o, o >>= 8, t[n + 6] = o, o >>= 8, t[n + 5] = o, o >>= 8, t[n + 4] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[n + 3] = s, s >>= 8, t[n + 2] = s, s >>= 8, t[n + 1] = s, s >>= 8, t[n] = s, n + 8
				}

				function R(t, e, n, r, i, o) {
					if (n + r > t.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function S(t, e, r, i, o) {
					return e = +e, r >>>= 0, o || R(t, 0, r, 4), n.write(t, e, r, i, 23, 4), r + 4
				}

				function L(t, e, r, i, o) {
					return e = +e, r >>>= 0, o || R(t, 0, r, 8), n.write(t, e, r, i, 52, 8), r + 8
				}
				s.prototype.slice = function(t, e) {
					const n = this.length;
					(t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
					const r = this.subarray(t, e);
					return Object.setPrototypeOf(r, s.prototype), r
				}, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || M(t, e, this.length);
					let r = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) r += this[t + o] * i;
					return r
				}, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || M(t, e, this.length);
					let r = this[t + --e],
						i = 1;
					for (; e > 0 && (i *= 256);) r += this[t + --e] * i;
					return r
				}, s.prototype.readUint8 = s.prototype.readUInt8 = function(t, e) {
					return t >>>= 0, e || M(t, 1, this.length), this[t]
				}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(t, e) {
					return t >>>= 0, e || M(t, 2, this.length), this[t] | this[t + 1] << 8
				}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(t, e) {
					return t >>>= 0, e || M(t, 2, this.length), this[t] << 8 | this[t + 1]
				}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(t, e) {
					return t >>>= 0, e || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
				}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(t, e) {
					return t >>>= 0, e || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
				}, s.prototype.readBigUInt64LE = J((function(t) {
					z(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
						i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
					return BigInt(r) + (BigInt(i) << BigInt(32))
				})), s.prototype.readBigUInt64BE = J((function(t) {
					z(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
						i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
					return (BigInt(r) << BigInt(32)) + BigInt(i)
				})), s.prototype.readIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || M(t, e, this.length);
					let r = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) r += this[t + o] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
				}, s.prototype.readIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || M(t, e, this.length);
					let r = e,
						i = 1,
						o = this[t + --r];
					for (; r > 0 && (i *= 256);) o += this[t + --r] * i;
					return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
				}, s.prototype.readInt8 = function(t, e) {
					return t >>>= 0, e || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
				}, s.prototype.readInt16LE = function(t, e) {
					t >>>= 0, e || M(t, 2, this.length);
					const n = this[t] | this[t + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt16BE = function(t, e) {
					t >>>= 0, e || M(t, 2, this.length);
					const n = this[t + 1] | this[t] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt32LE = function(t, e) {
					return t >>>= 0, e || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
				}, s.prototype.readInt32BE = function(t, e) {
					return t >>>= 0, e || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
				}, s.prototype.readBigInt64LE = J((function(t) {
					z(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
					return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
				})), s.prototype.readBigInt64BE = J((function(t) {
					z(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
					return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
				})), s.prototype.readFloatLE = function(t, e) {
					return t >>>= 0, e || M(t, 4, this.length), n.read(this, t, !0, 23, 4)
				}, s.prototype.readFloatBE = function(t, e) {
					return t >>>= 0, e || M(t, 4, this.length), n.read(this, t, !1, 23, 4)
				}, s.prototype.readDoubleLE = function(t, e) {
					return t >>>= 0, e || M(t, 8, this.length), n.read(this, t, !0, 52, 8)
				}, s.prototype.readDoubleBE = function(t, e) {
					return t >>>= 0, e || M(t, 8, this.length), n.read(this, t, !1, 52, 8)
				}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, n >>>= 0, !r) {
						N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
					}
					let i = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
					return e + n
				}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, n >>>= 0, !r) {
						N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
					}
					let i = n - 1,
						o = 1;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
					return e + n
				}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
				}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
				}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigUInt64LE = J((function(t, e = 0) {
					return j(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeBigUInt64BE = J((function(t, e = 0) {
					return C(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * n - 1);
						N(this, t, e, n, r - 1, -r)
					}
					let i = 0,
						o = 1,
						s = 0;
					for (this[e] = 255 & t; ++i < n && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + n
				}, s.prototype.writeIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * n - 1);
						N(this, t, e, n, r - 1, -r)
					}
					let i = n - 1,
						o = 1,
						s = 0;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + n
				}, s.prototype.writeInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
				}, s.prototype.writeInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
				}, s.prototype.writeInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigInt64LE = J((function(t, e = 0) {
					return j(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeBigInt64BE = J((function(t, e = 0) {
					return C(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeFloatLE = function(t, e, n) {
					return S(this, t, e, !0, n)
				}, s.prototype.writeFloatBE = function(t, e, n) {
					return S(this, t, e, !1, n)
				}, s.prototype.writeDoubleLE = function(t, e, n) {
					return L(this, t, e, !0, n)
				}, s.prototype.writeDoubleBE = function(t, e, n) {
					return L(this, t, e, !1, n)
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
				const k = {};

				function P(t, e, n) {
					k[t] = class NodeError extends n {
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

				function F(t) {
					let e = "",
						n = t.length;
					const r = "-" === t[0] ? 1 : 0;
					for (; n >= r + 4; n -= 3) e = `_${t.slice(n-3,n)}${e}`;
					return `${t.slice(0,n)}${e}`
				}

				function D(t, e, n, r, i, o) {
					if (t > n || t < e) {
						const r = "bigint" == typeof e ? "n" : "";
						let i;
						throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${e}${r} and <= ${n}${r}`, new k.ERR_OUT_OF_RANGE("value", i, t)
					}! function(t, e, n) {
						z(e, "offset"), void 0 !== t[e] && void 0 !== t[e + n] || Y(e, t.length - (n + 1))
					}(r, i, o)
				}

				function z(t, e) {
					if ("number" != typeof t) throw new k.ERR_INVALID_ARG_TYPE(e, "number", t)
				}

				function Y(t, e, n) {
					if (Math.floor(t) !== t) throw z(t, n), new k.ERR_OUT_OF_RANGE(n || "offset", "an integer", t);
					if (e < 0) throw new k.ERR_BUFFER_OUT_OF_BOUNDS;
					throw new k.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${e}`, t)
				}
				P("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
					return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
				}), RangeError), P("ERR_INVALID_ARG_TYPE", (function(t, e) {
					return `The "${t}" argument must be of type number. Received type ${typeof e}`
				}), TypeError), P("ERR_OUT_OF_RANGE", (function(t, e, n) {
					let r = `The value of "${t}" is out of range.`,
						i = n;
					return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = F(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = F(i)), i += "n"), r += ` It must be ${e}. Received ${i}`
				}), RangeError);
				const q = /[^+/0-9A-Za-z-_]/g;

				function G(t, e) {
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

				function X(t) {
					return e.toByteArray(function(t) {
						if ((t = (t = t.split("=")[0]).trim().replace(q, "")).length < 2) return "";
						for (; t.length % 4 != 0;) t += "=";
						return t
					}(t))
				}

				function V(t, e, n, r) {
					let i;
					for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
					return i
				}

				function H(t, e) {
					return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
				}

				function K(t) {
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

				function J(t) {
					return "undefined" == typeof BigInt ? Z : t
				}

				function Z() {
					throw new Error("BigInt not supported")
				}
			}(P);
			const H = /(?:\/|-)(?:nftv2)_([^_]+)_(\w+)_.*\.(?:png|svg)/;
			var K = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				J = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				Z = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				tt = n("./src/reddit/constants/modals.ts");
			const et = () => Promise.all([n.e(0), n.e(1), n.e(5), n.e("NftProductDetailsModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				nt = Object(J.a)(et, {
					ssr: !1
				});
			Object(Z.b)(tt.a.ECON_NFT_PRODUCT_DETAILS, t => i.a.createElement(nt, {
				onClose: t,
				onOverlayClick: t
			}));
			var rt = n("./src/reddit/hooks/usePreloadModal.ts"),
				it = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				ot = n.n(it);
			e.default = t => {
				let {
					className: e,
					imageUrl: n
				} = t;
				const r = Object(o.d)();
				Object(rt.a)(et);
				const s = (t => {
					const e = t.match(H),
						n = null == e ? void 0 : e[1];
					if (!n) return null;
					const r = decodeURI(n);
					return P.Buffer.from(r, "base64").toString()
				})(n);
				return s ? i.a.createElement("div", {
					className: e
				}, i.a.createElement(Q.a, null, i.a.createElement(k, {
					imageUrl: n
				}), i.a.createElement(C, {
					className: ot.a.detailsButton,
					onClick: () => {
						r(Object(K.h)(tt.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: s
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.5366a7fbd926909e5336.js.map