// https://www.redditstatic.com/desktop2x/2.eeabe2ad30cb30a987e5.js
// Retrieved at 5/5/2022, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./node_modules/@reddit/crypto/react/config/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i);
			const o = {
					api: {
						accessToken: "accessToken"
					},
					gql: {
						host: "12345",
						fetchOptions: {}
					},
					nightModeActive: () => !1,
					sendEvent(e) {
						console.log("Event logged: ", e)
					},
					fbt: {
						inline: (e, t) => e,
						singular: (e, t) => r.a.createElement(r.a.Fragment, null, e),
						param: (e, t) => r.a.createElement(r.a.Fragment, null, e),
						plural: (e, t) => r.a.createElement(r.a.Fragment, null, e)
					}
				},
				s = o,
				a = Object(i.createContext)(s),
				c = a.Provider,
				u = () => Object(i.useContext)(a),
				l = () => u().fbt || o.fbt
		},
		"./node_modules/@reddit/crypto/react/ui/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return Mi
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "e", (function() {
				return Pi
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "h", (function() {
				return X
			})), n.d(t, "i", (function() {
				return z
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/react-dom/index.js"),
				s = n.n(o),
				a = n("./node_modules/@reddit/crypto/react/ui/index.es.js"),
				c = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				u = Object.defineProperty,
				l = Object.getOwnPropertySymbols,
				d = Object.prototype.hasOwnProperty,
				f = Object.prototype.propertyIsEnumerable,
				h = (e, t, n) => t in e ? u(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				p = (e, t) => {
					for (var n in t || (t = {})) d.call(t, n) && h(e, n, t[n]);
					if (l)
						for (var n of l(t)) f.call(t, n) && h(e, n, t[n]);
					return e
				},
				v = (e, t) => {
					var n = {};
					for (var i in e) d.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
					if (null != e && l)
						for (var i of l(e)) t.indexOf(i) < 0 && f.call(e, i) && (n[i] = e[i]);
					return n
				},
				m = {
					exports: {}
				};
			! function(e) {
				! function() {
					var t = {}.hasOwnProperty;

					function n() {
						for (var e = [], i = 0; i < arguments.length; i++) {
							var r = arguments[i];
							if (r) {
								var o = typeof r;
								if ("string" === o || "number" === o) e.push(r);
								else if (Array.isArray(r)) {
									if (r.length) {
										var s = n.apply(null, r);
										s && e.push(s)
									}
								} else if ("object" === o)
									if (r.toString === Object.prototype.toString)
										for (var a in r) t.call(r, a) && r[a] && e.push(a);
									else e.push(r.toString())
							}
						}
						return e.join(" ")
					}
					e.exports ? (n.default = n, e.exports = n) : window.classNames = n
				}()
			}(m);
			var g = m.exports;
			var y = {
				button: "_button_6do52_30",
				loadingButton: "_loadingButton_6do52_40",
				greyTheme: "_greyTheme_6do52_45",
				whiteTheme: "_whiteTheme_6do52_48",
				outlinedTheme: "_outlinedTheme_6do52_52",
				whiteInvertedTheme: "_whiteInvertedTheme_6do52_55",
				orangeTheme: "_orangeTheme_6do52_70",
				largeOrangeTheme: "_largeOrangeTheme_6do52_71",
				blueTheme: "_blueTheme_6do52_85",
				blueInvertedTheme: "_blueInvertedTheme_6do52_86",
				disabled: "_disabled_6do52_100"
			};
			const _ = ({
				className: e,
				theme: t = "white",
				disabled: n,
				onClick: i,
				children: o,
				loading: s
			}) => r.a.createElement("button", {
				disabled: n,
				onClick: n ? void 0 : i,
				className: g(y.button, e, s ? y.loadingButton : null, n ? y.disabled : null, b(t))
			}, s ? r.a.createElement(H, {
				className: y.loadingImage
			}) : r.a.createElement(r.a.Fragment, null, o));

			function b(e) {
				switch (e) {
					case "grey":
						return y.greyTheme;
					case "white":
						return y.whiteTheme;
					case "white_inverted":
						return y.whiteInvertedTheme;
					case "outlined":
						return y.outlinedTheme;
					case "orange":
						return y.orangeTheme;
					case "largeOrange":
						return y.largeOrangeTheme;
					case "blue":
						return y.blueTheme;
					case "blue_inverted":
						return y.blueInvertedTheme
				}
			}
			var w = "https://www.redditstatic.com/crypto-assets/v2/close-contained-4d7c7d218a.svg",
				E = "https://www.redditstatic.com/crypto-assets/v2/close-dark-f5902178f9.svg",
				x = "https://www.redditstatic.com/crypto-assets/v2/close-1a7014e63e.svg";
			var S = "_closeButton_8wmcj_1",
				k = "_contained_8wmcj_13",
				O = "_closeIcon_8wmcj_22";
			const C = ({
				contained: e,
				theme: t,
				className: n,
				onClick: i
			}) => r.a.createElement("button", {
				className: g(S, n, {
					[k]: e
				}),
				onClick: i
			}, r.a.createElement("img", {
				className: O,
				src: j(t, e)
			}));

			function j(e, t) {
				if (t) return w;
				switch (e) {
					case "dark":
						return E;
					default:
						return x
				}
			}
			var M = {};
			Object.defineProperty(M, "__esModule", {
				value: !0
			});
			var P, N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				},
				A = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, n, i) {
						return n && e(t.prototype, n), i && e(t, i), t
					}
				}(),
				T = r.a,
				L = (P = T) && P.__esModule ? P : {
					default: P
				},
				D = s.a;
			var I = function(e) {
				function t(e) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var n = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
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
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), A(t, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, D.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: N({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), e(t)
					}
				}, {
					key: "reset",
					value: function() {
						var e = this;
						window.requestAnimationFrame((function() {
							e.setState(Object.assign({}, e.state, {
								style: N({}, e.state.style, {
									transform: "perspective(" + e.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return t.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.update.bind(this, t)), e(t)
					}
				}, {
					key: "setTransition",
					value: function() {
						var e = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: N({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							e.setState(Object.assign({}, e.state, {
								style: N({}, e.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), e(t)
					}
				}, {
					key: "getValues",
					value: function(e) {
						var t = (e.nativeEvent.clientX - this.left) / this.width,
							n = (e.nativeEvent.clientY - this.top) / this.height,
							i = Math.min(Math.max(t, 0), 1),
							r = Math.min(Math.max(n, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - i * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (r * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * i,
							percentageY: 100 * r
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var e = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = e.left, this.top = e.top
					}
				}, {
					key: "update",
					value: function(e) {
						var t = this.getValues(e);
						this.setState(Object.assign({}, this.state, {
							style: N({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var e = Object.assign({}, this.props.style, this.state.style);
						return L.default.createElement("div", {
							style: e,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), t
			}(T.Component);
			M.default = I;
			var F = {
				container: "_container_s2nn9_30"
			};
			const z = ({
				value: e,
				direction: t,
				className: n
			}) => {
				const i = "up" === t;
				return r.a.createElement("div", {
					className: g(F.container, n, i ? F.upVote : F.downVote)
				}, r.a.createElement("img", {
					src: i ? "https://www.redditstatic.com/crypto-assets/v2/upvote-e1dfcbf404.svg" : "https://www.redditstatic.com/crypto-assets/v2/downvote-37897edc0e.svg"
				}), e ? function(e) {
					let t;
					"number" == typeof e ? (e >= 1e3 && (e /= 1e3, e = `${e=Math.round(100*e)/100}k`), t = e.toString()) : t = e;
					return t
				}(e) : void 0)
			};
			const R = ({
				children: e,
				desc: t
			}) => {
				const n = Object(c.c)();
				return r.a.createElement(r.a.Fragment, null, n.singular(e, t))
			};
			var B = {
				container: "_container_jucc0_30",
				toast: "_toast_jucc0_42",
				bar: "_bar_jucc0_56",
				errorKind: "_errorKind_jucc0_59",
				successKind: "_successKind_jucc0_62",
				image: "_image_jucc0_65",
				content: "_content_jucc0_69",
				close: "_close_jucc0_76",
				entering: "_entering_jucc0_91",
				fadeIn: "_fadeIn_jucc0_1",
				leaving: "_leaving_jucc0_94",
				fadeOut: "_fadeOut_jucc0_1"
			};
			const X = ({
					className: e,
					kind: t,
					children: n,
					onClose: s,
					duration: a = 0
				}) => {
					const c = Object(i.useMemo)(K, []);
					return "undefined" == typeof document || void 0 === document.createElement ? r.a.createElement(r.a.Fragment, null) : Object(o.createPortal)(r.a.createElement(U, {
						className: e,
						kind: t,
						onClose: s,
						duration: a
					}, n), c)
				},
				U = ({
					className: e,
					kind: t,
					children: n,
					onClose: o,
					duration: s = 0
				}) => {
					const [a, c] = Object(i.useState)(!1), u = Object(i.useRef)(null), l = Object(i.useCallback)(e => {
						e && (e.stopPropagation(), e.preventDefault()), c(!0), o && o()
					}, [o]);
					return Object(i.useEffect)(() => {
						c(!1);
						const e = u.current;
						e && (e.classList.add(B.entering), e.addEventListener("animationend", () => {
							e.classList.remove(B.entering)
						}))
					}, [n]), Object(i.useEffect)(() => {
						const e = s ? setTimeout(l, s) : null;
						return () => {
							e && clearTimeout(e)
						}
					}, [s, l]), a ? r.a.createElement(r.a.Fragment, null) : r.a.createElement("div", {
						ref: u,
						className: g(B.toast, e, "error" === t ? B.errorKind : B.successKind)
					}, r.a.createElement("div", {
						className: B.bar
					}), r.a.createElement("div", {
						className: B.image
					}, r.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/error-image-c10a891d4e.svg"
					})), r.a.createElement("div", {
						className: B.content
					}, n), r.a.createElement("div", {
						className: B.close,
						onClick: l
					}, r.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/close-41452e2e4d.png"
					})))
				},
				W = () => r.a.createElement(X, {
					kind: "error",
					duration: 5e3
				}, r.a.createElement(R, {
					desc: ""
				}, "Something went wrong, please try again")),
				G = "reddit-crypto-toast-wrapper";

			function K() {
				let e = document.getElementById(G);
				return e || ((e = document.createElement("div")).id = G, e.className = B.container, document.body.appendChild(e)), e
			}
			var Y = "_container_10e6p_1";
			const H = ({
				className: e
			}) => r.a.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v2/loading-84b8aa447d.svg",
				className: g(e, Y)
			});
			const q = ({
				href: e,
				className: t,
				children: n
			}) => r.a.createElement("a", {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				className: t
			}, n);

			function V(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			var $ = "(prefers-reduced-motion: reduce)",
				J = 1,
				Q = 3,
				Z = 4,
				ee = 5,
				te = 6,
				ne = 7,
				ie = {
					CREATED: J,
					MOUNTED: 2,
					IDLE: Q,
					MOVING: Z,
					SCROLLING: ee,
					DRAGGING: te,
					DESTROYED: ne
				};

			function re(e) {
				e.length = 0
			}

			function oe(e, t, n) {
				return Array.prototype.slice.call(e, t, n)
			}

			function se(e) {
				return e.bind.apply(e, [null].concat(oe(arguments, 1)))
			}
			var ae = setTimeout,
				ce = function() {};

			function ue(e) {
				return requestAnimationFrame(e)
			}

			function le(e, t) {
				return typeof t === e
			}

			function de(e) {
				return !me(e) && le("object", e)
			}
			var fe = Array.isArray,
				he = se(le, "function"),
				pe = se(le, "string"),
				ve = se(le, "undefined");

			function me(e) {
				return null === e
			}

			function ge(e) {
				return e instanceof HTMLElement
			}

			function ye(e) {
				return fe(e) ? e : [e]
			}

			function _e(e, t) {
				ye(e).forEach(t)
			}

			function be(e, t) {
				return e.indexOf(t) > -1
			}

			function we(e, t) {
				return e.push.apply(e, ye(t)), e
			}

			function Ee(e, t, n) {
				e && _e(t, (function(t) {
					t && e.classList[n ? "add" : "remove"](t)
				}))
			}

			function xe(e, t) {
				Ee(e, pe(t) ? t.split(" ") : t, !0)
			}

			function Se(e, t) {
				_e(t, e.appendChild.bind(e))
			}

			function ke(e, t) {
				_e(e, (function(e) {
					var n = (t || e).parentNode;
					n && n.insertBefore(e, t)
				}))
			}

			function Oe(e, t) {
				return ge(e) && (e.msMatchesSelector || e.matches).call(e, t)
			}

			function Ce(e, t) {
				var n = e ? oe(e.children) : [];
				return t ? n.filter((function(e) {
					return Oe(e, t)
				})) : n
			}

			function je(e, t) {
				return t ? Ce(e, t)[0] : e.firstElementChild
			}
			var Me = Object.keys;

			function Pe(e, t, n) {
				if (e) {
					var i = Me(e);
					i = n ? i.reverse() : i;
					for (var r = 0; r < i.length; r++) {
						var o = i[r];
						if ("__proto__" !== o && !1 === t(e[o], o)) break
					}
				}
				return e
			}

			function Ne(e) {
				return oe(arguments, 1).forEach((function(t) {
					Pe(t, (function(n, i) {
						e[i] = t[i]
					}))
				})), e
			}

			function Ae(e) {
				return oe(arguments, 1).forEach((function(t) {
					Pe(t, (function(t, n) {
						fe(t) ? e[n] = t.slice() : de(t) ? e[n] = Ae({}, de(e[n]) ? e[n] : {}, t) : e[n] = t
					}))
				})), e
			}

			function Te(e, t) {
				ye(t || Me(e)).forEach((function(t) {
					delete e[t]
				}))
			}

			function Le(e, t) {
				_e(e, (function(e) {
					_e(t, (function(t) {
						e && e.removeAttribute(t)
					}))
				}))
			}

			function De(e, t, n) {
				de(t) ? Pe(t, (function(t, n) {
					De(e, n, t)
				})) : _e(e, (function(e) {
					me(n) || "" === n ? Le(e, t) : e.setAttribute(t, String(n))
				}))
			}

			function Ie(e, t, n) {
				var i = document.createElement(e);
				return t && (pe(t) ? xe(i, t) : De(i, t)), n && Se(n, i), i
			}

			function Fe(e, t, n) {
				if (ve(n)) return getComputedStyle(e)[t];
				me(n) || (e.style[t] = "" + n)
			}

			function ze(e, t) {
				Fe(e, "display", t)
			}

			function Re(e) {
				e.setActive && e.setActive() || e.focus({
					preventScroll: !0
				})
			}

			function Be(e, t) {
				return e.getAttribute(t)
			}

			function Xe(e, t) {
				return e && e.classList.contains(t)
			}

			function Ue(e) {
				return e.getBoundingClientRect()
			}

			function We(e) {
				_e(e, (function(e) {
					e && e.parentNode && e.parentNode.removeChild(e)
				}))
			}

			function Ge(e) {
				return je((new DOMParser).parseFromString(e, "text/html").body)
			}

			function Ke(e, t) {
				e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation())
			}

			function Ye(e, t) {
				return e && e.querySelector(t)
			}

			function He(e, t) {
				return t ? oe(e.querySelectorAll(t)) : []
			}

			function qe(e, t) {
				Ee(e, t, !1)
			}

			function Ve(e) {
				return e.timeStamp
			}

			function $e(e) {
				return pe(e) ? e : e ? e + "px" : ""
			}
			var Je = "splide",
				Qe = "data-" + Je;

			function Ze(e, t) {
				if (!e) throw new Error("[" + Je + "] " + (t || ""))
			}
			var et = Math.min,
				tt = Math.max,
				nt = Math.floor,
				it = Math.ceil,
				rt = Math.abs;

			function ot(e, t, n) {
				return rt(e - t) < n
			}

			function st(e, t, n, i) {
				var r = et(t, n),
					o = tt(t, n);
				return i ? r < e && e < o : r <= e && e <= o
			}

			function at(e, t, n) {
				var i = et(t, n),
					r = tt(t, n);
				return et(tt(i, e), r)
			}

			function ct(e) {
				return +(e > 0) - +(e < 0)
			}

			function ut(e, t) {
				return _e(t, (function(t) {
					e = e.replace("%s", "" + t)
				})), e
			}

			function lt(e) {
				return e < 10 ? "0" + e : "" + e
			}
			var dt = {};

			function ft() {
				var e = [];

				function t(e, t, n) {
					_e(e, (function(e) {
						e && _e(t, (function(t) {
							t.split(" ").forEach((function(t) {
								var i = t.split(".");
								n(e, i[0], i[1])
							}))
						}))
					}))
				}
				return {
					bind: function(n, i, r, o) {
						t(n, i, (function(t, n, i) {
							var s = "addEventListener" in t,
								a = s ? t.removeEventListener.bind(t, n, r, o) : t.removeListener.bind(t, r);
							s ? t.addEventListener(n, r, o) : t.addListener(r), e.push([t, n, i, r, a])
						}))
					},
					unbind: function(n, i, r) {
						t(n, i, (function(t, n, i) {
							e = e.filter((function(e) {
								return !!(e[0] !== t || e[1] !== n || e[2] !== i || r && e[3] !== r) || (e[4](), !1)
							}))
						}))
					},
					dispatch: function(e, t, n) {
						var i;
						return "function" == typeof CustomEvent ? i = new CustomEvent(t, {
							bubbles: !0,
							detail: n
						}) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, n), e.dispatchEvent(i), i
					},
					destroy: function() {
						e.forEach((function(e) {
							e[4]()
						})), re(e)
					}
				}
			}
			var ht = "mounted",
				pt = "move",
				vt = "moved",
				mt = "shifted",
				gt = "click",
				yt = "active",
				_t = "inactive",
				bt = "visible",
				wt = "hidden",
				Et = "slide:keydown",
				xt = "refresh",
				St = "updated",
				kt = "resize",
				Ot = "resized",
				Ct = "drag",
				jt = "dragging",
				Mt = "dragged",
				Pt = "scroll",
				Nt = "scrolled",
				At = "destroy",
				Tt = "arrows:mounted",
				Lt = "arrows:updated",
				Dt = "pagination:mounted",
				It = "pagination:updated",
				Ft = "navigation:mounted",
				zt = "autoplay:play",
				Rt = "autoplay:playing",
				Bt = "autoplay:pause",
				Xt = "lazyload:loaded";

			function Ut(e) {
				var t = e ? e.event.bus : document.createDocumentFragment(),
					n = ft();
				return e && e.event.on(At, n.destroy), Ne(n, {
					bus: t,
					on: function(e, i) {
						n.bind(t, ye(e).join(" "), (function(e) {
							i.apply(i, fe(e.detail) ? e.detail : [])
						}))
					},
					off: se(n.unbind, t),
					emit: function(e) {
						n.dispatch(t, e, oe(arguments, 1))
					}
				})
			}

			function Wt(e, t, n, i) {
				var r, o, s = Date.now,
					a = 0,
					c = !0,
					u = 0;

				function l() {
					if (!c) {
						if (a = e ? et((s() - r) / e, 1) : 1, n && n(a), a >= 1 && (t(), r = s(), i && ++u >= i)) return d();
						ue(l)
					}
				}

				function d() {
					c = !0
				}

				function f() {
					o && cancelAnimationFrame(o), a = 0, o = 0, c = !0
				}
				return {
					start: function(t) {
						!t && f(), r = s() - (t ? a * e : 0), c = !1, ue(l)
					},
					rewind: function() {
						r = s(), a = 0, n && n(a)
					},
					pause: d,
					cancel: f,
					set: function(t) {
						e = t
					},
					isPaused: function() {
						return c
					}
				}
			}
			var Gt = "ArrowLeft",
				Kt = "ArrowRight",
				Yt = "rtl",
				Ht = "ttb",
				qt = {
					width: ["height"],
					left: ["top", "right"],
					right: ["bottom", "left"],
					x: ["y"],
					X: ["Y"],
					Y: ["X"],
					ArrowLeft: ["ArrowUp", Kt],
					ArrowRight: ["ArrowDown", Gt]
				};
			var Vt = "role",
				$t = "tabindex",
				Jt = "aria-controls",
				Qt = "aria-current",
				Zt = "aria-selected",
				en = "aria-label",
				tn = "aria-labelledby",
				nn = "aria-hidden",
				rn = "aria-orientation",
				on = "aria-roledescription",
				sn = "aria-live",
				an = "aria-relevant",
				cn = [Vt, $t, "disabled", Jt, Qt, en, tn, nn, rn, on],
				un = Je,
				ln = Je + "__track",
				dn = Je + "__list",
				fn = Je + "__slide",
				hn = fn + "--clone",
				pn = fn + "__container",
				vn = Je + "__arrows",
				mn = Je + "__arrow",
				gn = mn + "--prev",
				yn = mn + "--next",
				_n = Je + "__pagination",
				bn = _n + "__page",
				wn = Je + "__progress" + "__bar",
				En = Je + "__toggle",
				xn = Je + "__sr",
				Sn = "is-active",
				kn = "is-prev",
				On = "is-next",
				Cn = "is-visible",
				jn = "is-loading",
				Mn = "is-focus-in",
				Pn = [Sn, Cn, kn, On, jn, Mn],
				Nn = {
					slide: fn,
					clone: hn,
					arrows: vn,
					arrow: mn,
					prev: gn,
					next: yn,
					pagination: _n,
					page: bn,
					spinner: Je + "__spinner"
				};
			var An = 5,
				Tn = 200,
				Ln = "touchstart mousedown",
				Dn = "touchmove mousemove",
				In = "touchend touchcancel mouseup";
			var Fn = "slide",
				zn = "loop",
				Rn = "fade";

			function Bn(e, t, n, i) {
				var r, o = Ut(e),
					s = o.on,
					a = o.emit,
					c = o.bind,
					u = e.Components,
					l = e.root,
					d = e.options,
					f = d.isNavigation,
					h = d.updateOnMove,
					p = d.i18n,
					v = d.pagination,
					m = d.slideFocus,
					g = u.Direction.resolve,
					y = Be(i, "style"),
					_ = Be(i, en),
					b = n > -1,
					w = je(i, "." + pn),
					E = He(i, d.focusableNodes || "");

				function x() {
					var r = e.splides.map((function(e) {
						var n = e.splide.Components.Slides.getAt(t);
						return n ? n.slide.id : ""
					})).join(" ");
					De(i, en, ut(p.slideX, (b ? n : t) + 1)), De(i, Jt, r), De(i, Vt, m ? "button" : ""), m && Le(i, on)
				}

				function S() {
					r || k()
				}

				function k() {
					if (!r) {
						var n = e.index;
						(o = O()) !== Xe(i, Sn) && (Ee(i, Sn, o), De(i, Qt, f && o || ""), a(o ? yt : _t, C)),
							function() {
								var t = function() {
										if (e.is(Rn)) return O();
										var t = Ue(u.Elements.track),
											n = Ue(i),
											r = g("left"),
											o = g("right");
										return nt(t[r]) <= it(n[r]) && nt(n[o]) <= it(t[o])
									}(),
									n = !t && (!O() || b);
								e.state.is([Z, ee]) || De(i, nn, n || "");
								De(E, $t, n ? -1 : ""), m && De(i, $t, n ? -1 : 0);
								t !== Xe(i, Cn) && (Ee(i, Cn, t), a(t ? bt : wt, C));
								if (!t && document.activeElement === i) {
									var r = u.Slides.getAt(e.index);
									r && Re(r.slide)
								}
							}(), Ee(i, kn, t === n - 1), Ee(i, On, t === n + 1)
					}
					var o
				}

				function O() {
					var i = e.index;
					return i === t || d.cloneStatus && i === n
				}
				var C = {
					index: t,
					slideIndex: n,
					slide: i,
					container: w,
					isClone: b,
					mount: function() {
						b || (i.id = l.id + "-slide" + lt(t + 1), De(i, Vt, v ? "tabpanel" : "group"), De(i, on, p.slide), De(i, en, _ || ut(p.slideLabel, [t + 1, e.length]))), c(i, "click", se(a, gt, C)), c(i, "keydown", se(a, Et, C)), s([vt, mt, Nt], k), s(Ft, x), h && s(pt, S)
					},
					destroy: function() {
						r = !0, o.destroy(), qe(i, Pn), Le(i, cn), De(i, "style", y), De(i, en, _ || "")
					},
					update: k,
					style: function(e, t, n) {
						Fe(n && w || i, e, t)
					},
					isWithin: function(n, i) {
						var r = rt(n - t);
						return b || !d.rewind && !e.is(zn) || (r = et(r, e.length - r)), r <= i
					}
				};
				return C
			}
			var Xn = 2;
			var Un = "http://www.w3.org/2000/svg",
				Wn = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
				Gn = 40;
			var Kn = Qe + "-interval";
			var Yn = 10,
				Hn = 600,
				qn = .6,
				Vn = 1.5,
				$n = 800;
			var Jn = {
				passive: !1,
				capture: !0
			};
			var Qn = {
				Spacebar: " ",
				Right: Kt,
				Left: Gt,
				Up: "ArrowUp",
				Down: "ArrowDown"
			};

			function Zn(e) {
				return e = pe(e) ? e : e.key, Qn[e] || e
			}
			var ei = "keydown";
			var ti = Qe + "-lazy",
				ni = ti + "-srcset",
				ii = "[" + ti + "], [" + ni + "]";
			var ri = [" ", "Enter"];
			var oi = Object.freeze({
					__proto__: null,
					Media: function(e, t, n) {
						var i = e.state,
							r = n.breakpoints || {},
							o = n.reducedMotion || {},
							s = ft(),
							a = [];

						function c(e) {
							e && s.destroy()
						}

						function u(e, t) {
							var n = matchMedia(t);
							s.bind(n, "change", l), a.push([e, n])
						}

						function l() {
							var t = i.is(ne),
								r = n.direction,
								o = a.reduce((function(e, t) {
									return Ae(e, t[1].matches ? t[0] : {})
								}), {});
							Te(n), d(o), n.destroy ? e.destroy("completely" === n.destroy) : t ? (c(!0), e.mount()) : r !== n.direction && e.refresh()
						}

						function d(t, r) {
							Ae(n, t), r && Ae(Object.getPrototypeOf(n), t), i.is(J) || e.emit(St, n)
						}
						return {
							setup: function() {
								var e = "min" === n.mediaQuery;
								Me(r).sort((function(t, n) {
									return e ? +t - +n : +n - +t
								})).forEach((function(t) {
									u(r[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)")
								})), u(o, $), l()
							},
							destroy: c,
							reduce: function(e) {
								matchMedia($).matches && (e ? Ae(n, o) : Te(n, Me(o)))
							},
							set: d
						}
					},
					Direction: function(e, t, n) {
						return {
							resolve: function(e, t, i) {
								var r = (i = i || n.direction) !== Yt || t ? i === Ht ? 0 : -1 : 1;
								return qt[e] && qt[e][r] || e.replace(/width|left|right/i, (function(e, t) {
									var n = qt[e.toLowerCase()][r] || e;
									return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n
								}))
							},
							orient: function(e) {
								return e * (n.direction === Yt ? 1 : -1)
							}
						}
					},
					Elements: function(e, t, n) {
						var i, r, o, s = Ut(e),
							a = s.on,
							c = s.bind,
							u = e.root,
							l = n.i18n,
							d = {},
							f = [],
							h = [],
							p = [];

						function v() {
							i = y("." + ln), r = je(i, "." + dn), Ze(i && r, "A track/list element is missing."), we(f, Ce(r, "." + fn + ":not(." + hn + ")")), Pe({
									arrows: vn,
									pagination: _n,
									prev: gn,
									next: yn,
									bar: wn,
									toggle: En
								}, (function(e, t) {
									d[t] = y("." + e)
								})), Ne(d, {
									root: u,
									track: i,
									list: r,
									slides: f
								}),
								function() {
									var e = u.id || (o = Je, "" + o + lt(dt[o] = (dt[o] || 0) + 1)),
										t = n.role;
									var o;
									u.id = e, i.id = i.id || e + "-track", r.id = r.id || e + "-list", !Be(u, Vt) && "SECTION" !== u.tagName && t && De(u, Vt, t);
									De(u, on, l.carousel), De(r, Vt, "presentation")
								}(), g()
						}

						function m(e) {
							var t = cn.concat("style");
							re(f), qe(u, h), qe(i, p), Le([i, r], t), Le(u, e ? t : ["style", on])
						}

						function g() {
							qe(u, h), qe(i, p), h = _(un), p = _(ln), xe(u, h), xe(i, p), De(u, en, n.label), De(u, tn, n.labelledby)
						}

						function y(e) {
							var t = Ye(u, e);
							return t && function(e, t) {
								if (he(e.closest)) return e.closest(t);
								for (var n = e; n && 1 === n.nodeType && !Oe(n, t);) n = n.parentElement;
								return n
							}(t, "." + un) === u ? t : void 0
						}

						function _(e) {
							return [e + "--" + n.type, e + "--" + n.direction, n.drag && e + "--draggable", n.isNavigation && e + "--nav", e === un && Sn]
						}
						return Ne(d, {
							setup: v,
							mount: function() {
								a(xt, m), a(xt, v), a(St, g), c(document, Ln + " keydown", (function(e) {
									o = "keydown" === e.type
								}), {
									capture: !0
								}), c(u, "focusin", (function() {
									Ee(u, Mn, !!o)
								}))
							},
							destroy: m
						})
					},
					Slides: function(e, t, n) {
						var i = Ut(e),
							r = i.on,
							o = i.emit,
							s = i.bind,
							a = t.Elements,
							c = a.slides,
							u = a.list,
							l = [];

						function d() {
							c.forEach((function(e, t) {
								h(e, t, -1)
							}))
						}

						function f() {
							v((function(e) {
								e.destroy()
							})), re(l)
						}

						function h(t, n, i) {
							var r = Bn(e, n, i, t);
							r.mount(), l.push(r)
						}

						function p(e) {
							return e ? m((function(e) {
								return !e.isClone
							})) : l
						}

						function v(e, t) {
							p(t).forEach(e)
						}

						function m(e) {
							return l.filter(he(e) ? e : function(t) {
								return pe(e) ? Oe(t.slide, e) : be(ye(e), t.index)
							})
						}
						return {
							mount: function() {
								d(), r(xt, f), r(xt, d), r([ht, xt], (function() {
									l.sort((function(e, t) {
										return e.index - t.index
									}))
								}))
							},
							destroy: f,
							update: function() {
								v((function(e) {
									e.update()
								}))
							},
							register: h,
							get: p,
							getIn: function(e) {
								var i = t.Controller,
									r = i.toIndex(e),
									o = i.hasFocus() ? 1 : n.perPage;
								return m((function(e) {
									return st(e.index, r, r + o - 1)
								}))
							},
							getAt: function(e) {
								return m(e)[0]
							},
							add: function(e, t) {
								_e(e, (function(e) {
									if (pe(e) && (e = Ge(e)), ge(e)) {
										var i = c[t];
										i ? ke(e, i) : Se(u, e), xe(e, n.classes.slide), r = e, a = se(o, kt), l = He(r, "img"), (d = l.length) ? l.forEach((function(e) {
											s(e, "load error", (function() {
												--d || a()
											}))
										})) : a()
									}
									var r, a, l, d
								})), o(xt)
							},
							remove: function(e) {
								We(m(e).map((function(e) {
									return e.slide
								}))), o(xt)
							},
							forEach: v,
							filter: m,
							style: function(e, t, n) {
								v((function(i) {
									i.style(e, t, n)
								}))
							},
							getLength: function(e) {
								return e ? c.length : l.length
							},
							isEnough: function() {
								return l.length > n.perPage
							}
						}
					},
					Layout: function(e, t, n) {
						var i, r, o = Ut(e),
							s = o.on,
							a = o.bind,
							c = o.emit,
							u = t.Slides,
							l = t.Direction.resolve,
							d = t.Elements,
							f = d.root,
							h = d.track,
							p = d.list,
							v = u.getAt,
							m = u.style;

						function g() {
							r = null, i = n.direction === Ht, Fe(f, "maxWidth", $e(n.width)), Fe(h, l("paddingLeft"), _(!1)), Fe(h, l("paddingRight"), _(!0)), y()
						}

						function y() {
							var e = Ue(f);
							r && r.width === e.width && r.height === e.height || (Fe(h, "height", function() {
								var e = "";
								i && (Ze(e = b(), "height or heightRatio is missing."), e = "calc(" + e + " - " + _(!1) + " - " + _(!0) + ")");
								return e
							}()), m(l("marginRight"), $e(n.gap)), m("width", n.autoWidth ? null : $e(n.fixedWidth) || (i ? "" : w())), m("height", $e(n.fixedHeight) || (i ? n.autoHeight ? null : w() : b()), !0), r = e, c(Ot))
						}

						function _(e) {
							var t = n.padding,
								i = l(e ? "right" : "left");
							return t && $e(t[i] || (de(t) ? 0 : t)) || "0px"
						}

						function b() {
							return $e(n.height || Ue(p).width * n.heightRatio)
						}

						function w() {
							var e = $e(n.gap);
							return "calc((100%" + (e && " + " + e) + ")/" + (n.perPage || 1) + (e && " - " + e) + ")"
						}

						function E(e, t) {
							var n = v(e);
							if (n) {
								var i = Ue(n.slide)[l("right")],
									r = Ue(p)[l("left")];
								return rt(i - r) + (t ? 0 : x())
							}
							return 0
						}

						function x() {
							var e = v(0);
							return e && parseFloat(Fe(e.slide, l("marginRight"))) || 0
						}
						return {
							mount: function() {
								var e, t, n;
								g(), a(window, "resize load", (e = se(c, kt), function() {
									n || (n = Wt(t || 0, (function() {
										e(), n = null
									}), null, 1)).start()
								})), s([St, xt], g), s(kt, y)
							},
							listSize: function() {
								return Ue(p)[l("width")]
							},
							slideSize: function(e, t) {
								var n = v(e || 0);
								return n ? Ue(n.slide)[l("width")] + (t ? 0 : x()) : 0
							},
							sliderSize: function() {
								return E(e.length - 1, !0) - E(-1, !0)
							},
							totalSize: E,
							getPadding: function(e) {
								return parseFloat(Fe(h, l("padding" + (e ? "Right" : "Left")))) || 0
							}
						}
					},
					Clones: function(e, t, n) {
						var i, r = Ut(e),
							o = r.on,
							s = r.emit,
							a = t.Elements,
							c = t.Slides,
							u = t.Direction.resolve,
							l = [];

						function d() {
							(i = p()) && (! function(t) {
								var i = c.get().slice(),
									r = i.length;
								if (r) {
									for (; i.length < t;) we(i, i);
									we(i.slice(-t), i.slice(0, t)).forEach((function(o, s) {
										var u = s < t,
											d = function(t, i) {
												var r = t.cloneNode(!0);
												return xe(r, n.classes.clone), r.id = e.root.id + "-clone" + lt(i + 1), r
											}(o.slide, s);
										u ? ke(d, i[0].slide) : Se(a.list, d), we(l, d), c.register(d, s - t + (u ? 0 : r), o.index)
									}))
								}
							}(i), s(kt))
						}

						function f() {
							We(l), re(l)
						}

						function h() {
							i < p() && s(xt)
						}

						function p() {
							var i = n.clones;
							if (e.is(zn)) {
								if (!i) {
									var r = n[u("fixedWidth")] && t.Layout.slideSize(0);
									i = r && it(Ue(a.track)[u("width")] / r) || n[u("autoWidth")] && e.length || n.perPage * Xn
								}
							} else i = 0;
							return i
						}
						return {
							mount: function() {
								d(), o(xt, f), o(xt, d), o([St, kt], h)
							},
							destroy: f
						}
					},
					Move: function(e, t, n) {
						var i, r = Ut(e),
							o = r.on,
							s = r.emit,
							a = e.state.set,
							c = t.Layout,
							u = c.slideSize,
							l = c.getPadding,
							d = c.totalSize,
							f = c.listSize,
							h = c.sliderSize,
							p = t.Direction,
							v = p.resolve,
							m = p.orient,
							g = t.Elements,
							y = g.list,
							_ = g.track;

						function b() {
							t.Controller.isBusy() || (t.Scroll.cancel(), w(e.index), t.Slides.update())
						}

						function w(e) {
							E(k(e, !0))
						}

						function E(t, n) {
							if (!e.is(Rn)) {
								var i = n ? t : function(t) {
									if (e.is(zn)) {
										var n = m(t - O()),
											i = j(!1, t) && n < 0,
											r = j(!0, t) && n > 0;
										(i || r) && (t = x(t, r))
									}
									return t
								}(t);
								Fe(y, "transform", "translate" + v("X") + "(" + i + "px)"), t !== i && s(mt)
							}
						}

						function x(e, t) {
							var n = e - C(t),
								i = h();
							return e -= m(i * (it(rt(n) / i) || 1)) * (t ? 1 : -1)
						}

						function S() {
							E(O()), i.cancel()
						}

						function k(t, i) {
							var r = m(d(t - 1) - function(e) {
								var t = n.focus;
								return "center" === t ? (f() - u(e, !0)) / 2 : +t * u(e) || 0
							}(t));
							return i ? function(t) {
								n.trimSpace && e.is(Fn) && (t = at(t, 0, m(h() - f())));
								return t
							}(r) : r
						}

						function O() {
							var e = v("left");
							return Ue(y)[e] - Ue(_)[e] + m(l(!1))
						}

						function C(e) {
							return k(e ? t.Controller.getEnd() : 0, !!n.trimSpace)
						}

						function j(e, t) {
							t = ve(t) ? O() : t;
							var n = !0 !== e && m(t) < m(C(!1)),
								i = !1 !== e && m(t) > m(C(!0));
							return n || i
						}
						return {
							mount: function() {
								i = t.Transition, o([ht, Ot, St, xt], b)
							},
							move: function(e, t, n, r) {
								var o, c, u = O();
								e !== t && (o = e > t, c = m(x(O(), o)), o ? c >= 0 : c <= y["scroll" + v("Width")] - Ue(_)[v("width")]) && (S(), E(x(u, e > t), !0)), a(Z), s(pt, t, n, e), i.start(t, (function() {
									a(Q), s(vt, t, n, e), r && r()
								}))
							},
							jump: w,
							translate: E,
							shift: x,
							cancel: S,
							toIndex: function(e) {
								for (var n = t.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
									var s = n[o].index,
										a = rt(k(s, !0) - e);
									if (!(a <= r)) break;
									r = a, i = s
								}
								return i
							},
							toPosition: k,
							getPosition: O,
							getLimit: C,
							exceededLimit: j,
							reposition: b
						}
					},
					Controller: function(e, t, n) {
						var i, r, o, s = Ut(e).on,
							a = t.Move,
							c = a.getPosition,
							u = a.getLimit,
							l = a.toPosition,
							d = t.Slides,
							f = d.isEnough,
							h = d.getLength,
							p = e.is(zn),
							v = e.is(Fn),
							m = se(w, !1),
							g = se(w, !0),
							y = n.start || 0,
							_ = y;

						function b() {
							i = h(!0), r = n.perMove, o = n.perPage;
							var e = at(y, 0, i - 1);
							e !== y && (y = e, a.reposition())
						}

						function w(e, t) {
							var n = r || (j() ? 1 : o),
								i = E(y + n * (e ? -1 : 1), y, !(r || j()));
							return -1 === i && v && !ot(c(), u(!e), 1) ? e ? 0 : S() : t ? i : x(i)
						}

						function E(t, r, s) {
							if (f()) {
								var a = S(),
									u = function(t) {
										if (v && "move" === n.trimSpace && t !== y)
											for (var i = c(); i === l(t, !0) && st(t, 0, e.length - 1, !n.rewind);) t < y ? --t : ++t;
										return t
									}(t);
								u !== t && (r = t, t = u, s = !1), t < 0 || t > a ? t = st(0, t, r, !0) || st(a, r, t, !0) ? k(O(t)) : p ? s ? t < 0 ? -(i % o || o) : i : t : n.rewind ? t < 0 ? a : 0 : -1 : s && t !== r && (t = k(O(r) + (t < r ? -1 : 1)))
							} else t = -1;
							return t
						}

						function x(e) {
							return p ? (e + i) % i || 0 : e
						}

						function S() {
							return tt(i - (j() || p && r ? 1 : o), 0)
						}

						function k(e) {
							return at(j() ? e : o * e, 0, S())
						}

						function O(e) {
							return j() ? e : nt((e >= S() ? i - 1 : e) / o)
						}

						function C(e) {
							e !== y && (_ = y, y = e)
						}

						function j() {
							return !ve(n.focus) || n.isNavigation
						}

						function M() {
							return e.state.is([Z, ee]) && !!n.waitForTransition
						}
						return {
							mount: function() {
								b(), s([St, xt], b)
							},
							go: function(e, t, n) {
								if (!M()) {
									var i = function(e) {
											var t = y;
											if (pe(e)) {
												var n = e.match(/([+\-<>])(\d+)?/) || [],
													i = n[1],
													r = n[2];
												"+" === i || "-" === i ? t = E(y + +("" + i + (+r || 1)), y) : ">" === i ? t = r ? k(+r) : m(!0) : "<" === i && (t = g(!0))
											} else t = p ? e : at(e, 0, S());
											return t
										}(e),
										r = x(i);
									r > -1 && (t || r !== y) && (C(r), a.move(i, r, _, n))
								}
							},
							scroll: function(e, n, i, r) {
								t.Scroll.scroll(e, n, i, (function() {
									C(x(a.toIndex(a.getPosition()))), r && r()
								}))
							},
							getNext: m,
							getPrev: g,
							getAdjacent: w,
							getEnd: S,
							setIndex: C,
							getIndex: function(e) {
								return e ? _ : y
							},
							toIndex: k,
							toPage: O,
							toDest: function(e) {
								var t = a.toIndex(e);
								return v ? at(t, 0, S()) : t
							},
							hasFocus: j,
							isBusy: M
						}
					},
					Arrows: function(e, t, n) {
						var i, r, o = Ut(e),
							s = o.on,
							a = o.bind,
							c = o.emit,
							u = n.classes,
							l = n.i18n,
							d = t.Elements,
							f = t.Controller,
							h = d.arrows,
							p = d.track,
							v = h,
							m = d.prev,
							g = d.next,
							y = {};

						function _() {
							! function() {
								var e = n.arrows;
								!e || m && g || (v = h || Ie("div", u.arrows), m = x(!0), g = x(!1), i = !0, Se(v, [m, g]), !h && ke(v, p));
								m && g && (Ne(y, {
									prev: m,
									next: g
								}), ze(v, e ? "" : "none"), xe(v, r = vn + "--" + n.direction), e && (s([vt, xt, Nt], S), a(g, "click", se(E, ">")), a(m, "click", se(E, "<")), S(), De([m, g], Jt, p.id), c(Tt, m, g)))
							}(), s(St, b)
						}

						function b() {
							w(), _()
						}

						function w() {
							o.destroy(), qe(v, r), i ? (We(h ? [m, g] : v), m = g = null) : Le([m, g], cn)
						}

						function E(e) {
							f.go(e, !0)
						}

						function x(e) {
							return Ge('<button class="' + u.arrow + " " + (e ? u.prev : u.next) + '" type="button"><svg xmlns="' + Un + '" viewBox="0 0 ' + Gn + " " + Gn + '" width="' + Gn + '" height="' + Gn + '" focusable="false"><path d="' + (n.arrowPath || Wn) + '" />')
						}

						function S() {
							var t = e.index,
								n = f.getPrev(),
								i = f.getNext(),
								r = n > -1 && t < n ? l.last : l.prev,
								o = i > -1 && t > i ? l.first : l.next;
							m.disabled = n < 0, g.disabled = i < 0, De(m, en, r), De(g, en, o), c(Lt, m, g, n, i)
						}
						return {
							arrows: y,
							mount: _,
							destroy: w
						}
					},
					Autoplay: function(e, t, n) {
						var i, r, o = Ut(e),
							s = o.on,
							a = o.bind,
							c = o.emit,
							u = Wt(n.interval, e.go.bind(e, ">"), (function(e) {
								var t = d.bar;
								t && Fe(t, "width", 100 * e + "%"), c(Rt, e)
							})),
							l = u.isPaused,
							d = t.Elements,
							f = t.Elements,
							h = f.root,
							p = f.toggle,
							v = n.autoplay,
							m = "pause" === v;

						function g() {
							l() && t.Slides.isEnough() && (u.start(!n.resetProgress), r = i = m = !1, b(), c(zt))
						}

						function y(e) {
							void 0 === e && (e = !0), m = !!e, b(), l() || (u.pause(), c(Bt))
						}

						function _() {
							m || (i || r ? y(!1) : g())
						}

						function b() {
							p && (Ee(p, Sn, !m), De(p, en, n.i18n[m ? "play" : "pause"]))
						}

						function w(e) {
							var i = t.Slides.getAt(e);
							u.set(i && +Be(i.slide, Kn) || n.interval)
						}
						return {
							mount: function() {
								v && (! function() {
									n.pauseOnHover && a(h, "mouseenter mouseleave", (function(e) {
										i = "mouseenter" === e.type, _()
									}));
									n.pauseOnFocus && a(h, "focusin focusout", (function(e) {
										r = "focusin" === e.type, _()
									}));
									p && a(p, "click", (function() {
										m ? g() : y(!0)
									}));
									s([pt, Pt, xt], u.rewind), s(pt, w)
								}(), p && De(p, Jt, d.track.id), m || g(), b())
							},
							destroy: u.cancel,
							play: g,
							pause: y,
							isPaused: l
						}
					},
					Cover: function(e, t, n) {
						var i = Ut(e).on;

						function r(e) {
							t.Slides.forEach((function(t) {
								var n = je(t.container || t.slide, "img");
								n && n.src && o(e, n, t)
							}))
						}

						function o(e, t, n) {
							n.style("background", e ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), ze(t, e ? "none" : "")
						}
						return {
							mount: function() {
								n.cover && (i(Xt, se(o, !0)), i([ht, St, xt], se(r, !0)))
							},
							destroy: se(r, !1)
						}
					},
					Scroll: function(e, t, n) {
						var i, r, o = Ut(e),
							s = o.on,
							a = o.emit,
							c = e.state.set,
							u = t.Move,
							l = u.getPosition,
							d = u.getLimit,
							f = u.exceededLimit,
							h = u.translate,
							p = 1;

						function v(e, n, o, s, d) {
							var f = l();
							if (y(), o) {
								var h = t.Layout.sliderSize(),
									v = ct(e) * h * nt(rt(e) / h) || 0;
								e = u.toPosition(t.Controller.toDest(e % h)) + v
							}
							var _ = ot(f, e, 1);
							p = 1, n = _ ? 0 : n || tt(rt(e - f) / Vn, $n), r = s, i = Wt(n, m, se(g, f, e, d), 1), c(ee), a(Pt), i.start()
						}

						function m() {
							c(Q), r && r(), a(Nt)
						}

						function g(t, i, r, o) {
							var s, a, c = l(),
								u = (t + (i - t) * (s = o, (a = n.easingFunc) ? a(s) : 1 - Math.pow(1 - s, 4)) - c) * p;
							h(c + u), e.is(Fn) && !r && f() && (p *= qn, rt(u) < Yn && v(d(f(!0)), Hn, !1, void 0, !0))
						}

						function y() {
							i && i.cancel()
						}

						function _() {
							i && !i.isPaused() && (y(), m())
						}
						return {
							mount: function() {
								s(pt, y), s([St, xt], _)
							},
							destroy: y,
							scroll: v,
							cancel: _
						}
					},
					Drag: function(e, t, n) {
						var i, r, o, s, a, c, u, l, d = Ut(e),
							f = d.on,
							h = d.emit,
							p = d.bind,
							v = d.unbind,
							m = e.state,
							g = t.Move,
							y = t.Scroll,
							_ = t.Controller,
							b = t.Elements.track,
							w = t.Media.reduce,
							E = t.Direction,
							x = E.resolve,
							S = E.orient,
							k = g.getPosition,
							O = g.exceededLimit,
							C = !1;

						function j() {
							var e = n.drag;
							R(!e), s = "free" === e
						}

						function M(e) {
							if (c = !1, !u) {
								var t = z(e);
								i = e.target, r = n.noDrag, Oe(i, "." + bn + ", ." + mn) || r && Oe(i, r) || !t && e.button || (_.isBusy() ? Ke(e, !0) : (l = t ? b : window, a = m.is([Z, ee]), o = null, p(l, Dn, P, Jn), p(l, In, N, Jn), g.cancel(), y.cancel(), T(e)))
							}
							var i, r
						}

						function P(t) {
							if (m.is(te) || (m.set(te), h(Ct)), t.cancelable)
								if (a) {
									g.translate(i + L(t) / (C && e.is(Fn) ? An : 1));
									var r = D(t) > Tn,
										o = C !== (C = O());
									(r || o) && T(t), c = !0, h(jt), Ke(t)
								} else(function(e) {
									return rt(L(e)) > rt(L(e, !0))
								})(t) && (a = function(e) {
									var t = n.dragMinThreshold,
										i = de(t),
										r = i && t.mouse || 0,
										o = (i ? t.touch : +t) || 10;
									return rt(L(e)) > (z(e) ? o : r)
								}(t), Ke(t))
						}

						function N(i) {
							m.is(te) && (m.set(Q), h(Mt)), a && (! function(i) {
								var r = function(t) {
										if (e.is(zn) || !C) {
											var n = D(t);
											if (n && n < Tn) return L(t) / n
										}
										return 0
									}(i),
									o = function(e) {
										return k() + ct(e) * et(rt(e) * (n.flickPower || 600), s ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
									}(r),
									a = n.rewind && n.rewindByDrag;
								w(!1), s ? _.scroll(o, 0, n.snap) : e.is(Rn) ? _.go(S(ct(r)) < 0 ? a ? "<" : "-" : a ? ">" : "+") : e.is(Fn) && C && a ? _.go(O(!0) ? ">" : "<") : _.go(_.toDest(o), !0);
								w(!0)
							}(i), Ke(i)), v(l, Dn, P), v(l, In, N), a = !1
						}

						function A(e) {
							!u && c && Ke(e, !0)
						}

						function T(e) {
							o = r, r = e, i = k()
						}

						function L(e, t) {
							return F(e, t) - F(I(e), t)
						}

						function D(e) {
							return Ve(e) - Ve(I(e))
						}

						function I(e) {
							return r === e && o || r
						}

						function F(e, t) {
							return (z(e) ? e.changedTouches[0] : e)["page" + x(t ? "Y" : "X")]
						}

						function z(e) {
							return "undefined" != typeof TouchEvent && e instanceof TouchEvent
						}

						function R(e) {
							u = e
						}
						return {
							mount: function() {
								p(b, Dn, ce, Jn), p(b, In, ce, Jn), p(b, Ln, M, Jn), p(b, "click", A, {
									capture: !0
								}), p(b, "dragstart", Ke), f([ht, St], j)
							},
							disable: R,
							isDragging: function() {
								return a
							}
						}
					},
					Keyboard: function(e, t, n) {
						var i, r, o = Ut(e),
							s = o.on,
							a = o.bind,
							c = o.unbind,
							u = e.root,
							l = t.Direction.resolve;

						function d() {
							var e = n.keyboard;
							e && (i = "global" === e ? window : u, a(i, ei, p))
						}

						function f() {
							c(i, ei)
						}

						function h() {
							var e = r;
							r = !0, ae((function() {
								r = e
							}))
						}

						function p(t) {
							if (!r) {
								var n = Zn(t);
								n === l(Gt) ? e.go("<") : n === l(Kt) && e.go(">")
							}
						}
						return {
							mount: function() {
								d(), s(St, f), s(St, d), s(pt, h)
							},
							destroy: f,
							disable: function(e) {
								r = e
							}
						}
					},
					LazyLoad: function(e, t, n) {
						var i = Ut(e),
							r = i.on,
							o = i.off,
							s = i.bind,
							a = i.emit,
							c = "sequential" === n.lazyLoad,
							u = [ht, xt, vt, Nt],
							l = [];

						function d() {
							re(l), t.Slides.forEach((function(e) {
								He(e.slide, ii).forEach((function(t) {
									var i = Be(t, ti),
										r = Be(t, ni);
									if (i !== t.src || r !== t.srcset) {
										var o = n.classes.spinner,
											s = t.parentElement,
											a = je(s, "." + o) || Ie("span", o, s);
										l.push([t, e, a]), t.src || ze(t, "none")
									}
								}))
							})), c && v()
						}

						function f() {
							(l = l.filter((function(t) {
								var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
								return !t[1].isWithin(e.index, i) || h(t)
							}))).length || o(u)
						}

						function h(e) {
							var t = e[0];
							xe(e[1].slide, jn), s(t, "load error", se(p, e)), De(t, "src", Be(t, ti)), De(t, "srcset", Be(t, ni)), Le(t, ti), Le(t, ni)
						}

						function p(e, t) {
							var n = e[0],
								i = e[1];
							qe(i.slide, jn), "error" !== t.type && (We(e[2]), ze(n, ""), a(Xt, n, i), a(kt)), c && v()
						}

						function v() {
							l.length && h(l.shift())
						}
						return {
							mount: function() {
								n.lazyLoad && (d(), r(xt, d), c || r(u, f))
							},
							destroy: se(re, l)
						}
					},
					Pagination: function(e, t, n) {
						var i, r, o = Ut(e),
							s = o.on,
							a = o.emit,
							c = o.bind,
							u = t.Slides,
							l = t.Elements,
							d = t.Controller,
							f = d.hasFocus,
							h = d.getIndex,
							p = d.go,
							v = t.Direction.resolve,
							m = [];

						function g() {
							i && (We(l.pagination ? oe(i.children) : i), qe(i, r), re(m), i = null), o.destroy()
						}

						function y(e) {
							p(">" + e, !0)
						}

						function _(e, t) {
							var n = m.length,
								i = Zn(t),
								r = b(),
								o = -1;
							i === v(Kt, !1, r) ? o = ++e % n : i === v(Gt, !1, r) ? o = (--e + n) % n : "Home" === i ? o = 0 : "End" === i && (o = n - 1);
							var s = m[o];
							s && (Re(s.button), p(">" + o), Ke(t, !0))
						}

						function b() {
							return n.paginationDirection || n.direction
						}

						function w(e) {
							return m[d.toPage(e)]
						}

						function E() {
							var e = w(h(!0)),
								t = w(h());
							if (e) {
								var n = e.button;
								qe(n, Sn), Le(n, Zt), De(n, $t, -1)
							}
							if (t) {
								var r = t.button;
								xe(r, Sn), De(r, Zt, !0), De(r, $t, "")
							}
							a(It, {
								list: i,
								items: m
							}, e, t)
						}
						return {
							items: m,
							mount: function t() {
								g(), s([St, xt], t), n.pagination && u.isEnough() && (s([pt, Pt, Nt], E), function() {
									var t = e.length,
										o = n.classes,
										s = n.i18n,
										a = n.perPage,
										d = f() ? t : it(t / a);
									xe(i = l.pagination || Ie("ul", o.pagination, l.track.parentElement), r = _n + "--" + b()), De(i, Vt, "tablist"), De(i, en, s.select), De(i, rn, b() === Ht ? "vertical" : "");
									for (var h = 0; h < d; h++) {
										var p = Ie("li", null, i),
											v = Ie("button", {
												class: o.page,
												type: "button"
											}, p),
											g = u.getIn(h).map((function(e) {
												return e.slide.id
											})),
											w = !f() && a > 1 ? s.pageX : s.slideX;
										c(v, "click", se(y, h)), n.paginationKeyboard && c(v, "keydown", se(_, h)), De(p, Vt, "presentation"), De(v, Vt, "tab"), De(v, Jt, g.join(" ")), De(v, en, ut(w, h + 1)), De(v, $t, -1), m.push({
											li: p,
											button: v,
											page: h
										})
									}
								}(), E(), a(Dt, {
									list: i,
									items: m
								}, w(e.index)))
							},
							destroy: g,
							getAt: w,
							update: E
						}
					},
					Sync: function(e, t, n) {
						var i = n.isNavigation,
							r = n.slideFocus,
							o = [];

						function s() {
							var t, n;
							e.splides.forEach((function(t) {
								t.isParent || (c(e, t.splide), c(t.splide, e))
							})), i && (t = Ut(e), (n = t.on)(gt, l), n(Et, d), n([ht, St], u), o.push(t), t.emit(Ft, e.splides))
						}

						function a() {
							o.forEach((function(e) {
								e.destroy()
							})), re(o)
						}

						function c(e, t) {
							var n = Ut(e);
							n.on(pt, (function(e, n, i) {
								t.go(t.is(zn) ? i : e)
							})), o.push(n)
						}

						function u() {
							De(t.Elements.list, rn, n.direction === Ht ? "vertical" : "")
						}

						function l(t) {
							e.go(t.index)
						}

						function d(e, t) {
							be(ri, Zn(t)) && (l(e), Ke(t))
						}
						return {
							setup: function() {
								e.options = {
									slideFocus: ve(r) ? i : r
								}
							},
							mount: s,
							destroy: a,
							remount: function() {
								a(), s()
							}
						}
					},
					Wheel: function(e, t, n) {
						var i = Ut(e).bind,
							r = 0;

						function o(i) {
							if (i.cancelable) {
								var o = i.deltaY,
									s = o < 0,
									a = Ve(i),
									c = n.wheelMinThreshold || 0,
									u = n.wheelSleep || 0;
								rt(o) > c && a - r > u && (e.go(s ? "<" : ">"), r = a),
									function(i) {
										return !n.releaseWheel || e.state.is(Z) || -1 !== t.Controller.getAdjacent(i)
									}(s) && Ke(i)
							}
						}
						return {
							mount: function() {
								n.wheel && i(t.Elements.track, "wheel", o, Jn)
							}
						}
					},
					Live: function(e, t, n) {
						var i = Ut(e).on,
							r = t.Elements.track,
							o = n.live && !n.isNavigation,
							s = Ie("span", xn);

						function a(e) {
							o && De(r, sn, e ? "off" : "polite")
						}
						return {
							mount: function() {
								o && (a(!t.Autoplay.isPaused()), De(r, an, "additions"), s.textContent = "…", i(zt, se(a, !0)), i(Bt, se(a, !1)), i([vt, Nt], se(Se, r, s)))
							},
							disable: a,
							destroy: function() {
								Le(r, [sn, an]), We(s)
							}
						}
					}
				}),
				si = {
					type: "slide",
					role: "region",
					speed: 400,
					perPage: 1,
					cloneStatus: !0,
					arrows: !0,
					pagination: !0,
					paginationKeyboard: !0,
					interval: 5e3,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					resetProgress: !0,
					easing: "cubic-bezier(0.25, 1, 0.5, 1)",
					drag: !0,
					direction: "ltr",
					trimSpace: !0,
					focusableNodes: "a, button, textarea, input, select, iframe",
					live: !0,
					classes: Nn,
					i18n: {
						prev: "Previous slide",
						next: "Next slide",
						first: "Go to first slide",
						last: "Go to last slide",
						slideX: "Go to slide %s",
						pageX: "Go to page %s",
						play: "Start autoplay",
						pause: "Pause autoplay",
						carousel: "carousel",
						slide: "slide",
						select: "Select a slide to show",
						slideLabel: "%s of %s"
					},
					reducedMotion: {
						speed: 0,
						rewindSpeed: 0,
						autoplay: "pause"
					}
				};

			function ai(e, t, n) {
				var i = Ut(e).on;
				return {
					mount: function() {
						i([ht, xt], (function() {
							ae((function() {
								t.Slides.style("transition", "opacity " + n.speed + "ms " + n.easing)
							}))
						}))
					},
					start: function(e, n) {
						var i = t.Elements.track;
						Fe(i, "height", $e(Ue(i).height)), ae((function() {
							n(), Fe(i, "height", "")
						}))
					},
					cancel: ce
				}
			}

			function ci(e, t, n) {
				var i, r = Ut(e).bind,
					o = t.Move,
					s = t.Controller,
					a = t.Scroll,
					c = t.Elements.list,
					u = se(Fe, c, "transition");

				function l() {
					u(""), a.cancel()
				}
				return {
					mount: function() {
						r(c, "transitionend", (function(e) {
							e.target === c && i && (l(), i())
						}))
					},
					start: function(t, r) {
						var c = o.toPosition(t, !0),
							l = o.getPosition(),
							d = function(t) {
								var i = n.rewindSpeed;
								if (e.is(Fn) && i) {
									var r = s.getIndex(!0),
										o = s.getEnd();
									if (0 === r && t >= o || r >= o && 0 === t) return i
								}
								return n.speed
							}(t);
						rt(c - l) >= 1 && d >= 1 ? n.useScroll ? a.scroll(c, d, !1, r) : (u("transform " + d + "ms " + n.easing), o.translate(c, !0), i = r) : (o.jump(t), r())
					},
					cancel: l
				}
			}
			var ui = function() {
				function e(t, n) {
					var i;
					this.event = Ut(), this.Components = {}, this.state = (i = J, {
						set: function(e) {
							i = e
						},
						is: function(e) {
							return be(ye(e), i)
						}
					}), this.splides = [], this._o = {}, this._E = {};
					var r = pe(t) ? Ye(document, t) : t;
					Ze(r, r + " is invalid."), this.root = r, n = Ae({
						label: Be(r, en) || "",
						labelledby: Be(r, tn) || ""
					}, si, e.defaults, n || {});
					try {
						Ae(n, JSON.parse(Be(r, Qe)))
					} catch (o) {
						Ze(!1, "Invalid JSON")
					}
					this._o = Object.create(Ae({}, n))
				}
				var t, n, i, r = e.prototype;
				return r.mount = function(e, t) {
					var n = this,
						i = this.state,
						r = this.Components;
					return Ze(i.is([J, ne]), "Already mounted!"), i.set(J), this._C = r, this._T = t || this._T || (this.is(Rn) ? ai : ci), this._E = e || this._E, Pe(Ne({}, oi, this._E, {
						Transition: this._T
					}), (function(e, t) {
						var i = e(n, r, n._o);
						r[t] = i, i.setup && i.setup()
					})), Pe(r, (function(e) {
						e.mount && e.mount()
					})), this.emit(ht), xe(this.root, "is-initialized"), i.set(Q), this.emit("ready"), this
				}, r.sync = function(e) {
					return this.splides.push({
						splide: e
					}), e.splides.push({
						splide: this,
						isParent: !0
					}), this.state.is(Q) && (this._C.Sync.remount(), e.Components.Sync.remount()), this
				}, r.go = function(e) {
					return this._C.Controller.go(e), this
				}, r.on = function(e, t) {
					return this.event.on(e, t), this
				}, r.off = function(e) {
					return this.event.off(e), this
				}, r.emit = function(e) {
					var t;
					return (t = this.event).emit.apply(t, [e].concat(oe(arguments, 1))), this
				}, r.add = function(e, t) {
					return this._C.Slides.add(e, t), this
				}, r.remove = function(e) {
					return this._C.Slides.remove(e), this
				}, r.is = function(e) {
					return this._o.type === e
				}, r.refresh = function() {
					return this.emit(xt), this
				}, r.destroy = function(e) {
					void 0 === e && (e = !0);
					var t = this.event,
						n = this.state;
					return n.is(J) ? Ut(this).on("ready", this.destroy.bind(this, e)) : (Pe(this._C, (function(t) {
						t.destroy && t.destroy(e)
					}), !0), t.emit(At), t.destroy(), e && re(this.splides), n.set(ne)), this
				}, t = e, (n = [{
					key: "options",
					get: function() {
						return this._o
					},
					set: function(e) {
						this._C.Media.set(e, !0)
					}
				}, {
					key: "length",
					get: function() {
						return this._C.Slides.getLength(!0)
					}
				}, {
					key: "index",
					get: function() {
						return this._C.Controller.getIndex()
					}
				}]) && V(t.prototype, n), i && V(t, i), Object.defineProperty(t, "prototype", {
					writable: !1
				}), e
			}();
			ui.defaults = {}, ui.STATES = ie;
			var li = [
				[ht, "onMounted"],
				["ready", "onReady"],
				[pt, "onMove"],
				[vt, "onMoved"],
				[gt, "onClick"],
				[yt, "onActive"],
				[_t, "onInactive"],
				[bt, "onVisible"],
				[wt, "onHidden"],
				[xt, "onRefresh"],
				[St, "onUpdated"],
				[kt, "onResize"],
				[Ot, "onResized"],
				[Ct, "onDrag"],
				[jt, "onDragging"],
				[Mt, "onDragged"],
				[Pt, "onScroll"],
				[Nt, "onScrolled"],
				[At, "onDestroy"],
				[Tt, "onArrowsMounted"],
				[Lt, "onArrowsUpdated"],
				[Dt, "onPaginationMounted"],
				[It, "onPaginationUpdated"],
				[Ft, "onNavigationMounted"],
				[zt, "onAutoplayPlay"],
				[Rt, "onAutoplayPlaying"],
				[Bt, "onAutoplayPause"],
				[Xt, "onLazyLoadLoaded"]
			];

			function di(...e) {
				return e.filter(Boolean).join(" ")
			}

			function fi(e) {
				return null !== e && "object" == typeof e
			}

			function hi(e, t) {
				const n = e;
				return function(e, t) {
					if (e) {
						const n = Object.keys(e);
						for (let i = 0; i < n.length; i++) {
							const r = n[i];
							if ("__proto__" !== r && !1 === t(e[r], r)) break
						}
					}
				}(t, (e, t) => {
					Array.isArray(e) ? n[t] = e.slice() : fi(e) ? n[t] = hi(fi(n[t]) ? n[t] : {}, e) : n[t] = e
				}), n
			}
			var pi = e => {
					var t = e,
						{
							children: n,
							className: i
						} = t,
						o = v(t, ["children", "className"]);
					return r.a.createElement("div", p({
						className: di("splide__track", i)
					}, o), r.a.createElement("ul", {
						className: "splide__list"
					}, n))
				},
				vi = class extends r.a.Component {
					constructor() {
						super(...arguments), this.splideRef = r.a.createRef(), this.slides = []
					}
					componentDidMount() {
						const {
							options: e,
							extensions: t,
							transition: n
						} = this.props, {
							current: i
						} = this.splideRef;
						i && (this.splide = new ui(i, e), this.bind(this.splide), this.splide.mount(t, n), this.options = hi({}, e || {}), this.slides = this.getSlides())
					}
					componentWillUnmount() {
						this.splide && (this.splide.destroy(), this.splide = void 0), this.options = void 0, this.slides.length = 0
					}
					componentDidUpdate() {
						if (!this.splide) return;
						const {
							options: e
						} = this.props;
						e && ! function e(t, n) {
							if (Array.isArray(t) && Array.isArray(n)) return t.length === n.length && !t.some((t, i) => !e(t, n[i]));
							if (fi(t) && fi(n)) {
								const i = Object.keys(t),
									r = Object.keys(n);
								return i.length === r.length && !i.some(i => !Object.prototype.hasOwnProperty.call(n, i) || !e(t[i], n[i]))
							}
							return t === n
						}(this.options, e) && (this.splide.options = e, this.options = hi({}, e));
						const t = this.getSlides();
						var n, i;
						n = this.slides, i = t, (n.length !== i.length || n.some((e, t) => e !== i[t])) && (this.splide.refresh(), this.slides = t)
					}
					sync(e) {
						var t;
						null == (t = this.splide) || t.sync(e)
					}
					go(e) {
						var t;
						null == (t = this.splide) || t.go(e)
					}
					getSlides() {
						var e;
						if (this.splide) {
							const t = null == (e = this.splide.Components.Elements) ? void 0 : e.list.children;
							return t && Array.prototype.slice.call(t) || []
						}
						return []
					}
					bind(e) {
						li.forEach(([t, n]) => {
							const i = this.props[n];
							"function" == typeof i && e.on(t, (...t) => {
								i(e, ...t)
							})
						})
					}
					omit(e, t) {
						return t.forEach(t => {
							Object.prototype.hasOwnProperty.call(e, t) && delete e[t]
						}), e
					}
					render() {
						const e = this.props,
							{
								className: t,
								tag: n = "div",
								hasTrack: i = !0,
								children: o
							} = e,
							s = v(e, ["className", "tag", "hasTrack", "children"]);
						return r.a.createElement(n, p({
							className: di("splide", t),
							ref: this.splideRef
						}, this.omit(s, ["options", ...li.map(e => e[1])])), i ? r.a.createElement(pi, null, o) : o)
					}
				},
				mi = e => {
					var t = e,
						{
							children: n,
							className: i
						} = t,
						o = v(t, ["children", "className"]);
					return r.a.createElement("li", p({
						className: di("splide__slide", i)
					}, o), n)
				};
			var gi = "_carousel_lmgsr_1",
				yi = "_slide_lmgsr_9",
				_i = "_slideImage_lmgsr_15",
				bi = "_isVisible_lmgsr_20",
				wi = "_isActiveSlide_lmgsr_23",
				Ei = "_arrow_lmgsr_27",
				xi = "_disabledArrow_lmgsr_44",
				Si = "_chevron_lmgsr_47",
				ki = "_prev_lmgsr_50",
				Oi = "_dots_lmgsr_53",
				Ci = "_dot_lmgsr_53",
				ji = "_isActiveDot_lmgsr_70";
			const Mi = ({
				factions: e,
				onChange: t
			}) => {
				const n = Object(i.useRef)(null),
					o = Object(c.c)(),
					[s, u] = Object(i.useState)(0);
				return Object(i.useEffect)(() => {
					const e = document.querySelectorAll(`.${ji}`);
					e.length && e.forEach(e => e.classList.remove(`.${ji}`));
					const t = document.querySelectorAll(".splide__pagination__page.is-active");
					t.length && t[0].classList.add(`.${ji}`)
				}, [s]), r.a.createElement(vi, {
					ref: n,
					hasTrack: !1,
					"aria-label": o.inline("Factions carousel", "Image carousel: list of factions for users to select from"),
					options: {
						perPage: 3,
						perMove: 1,
						type: "slide",
						trimSpace: !1,
						focus: "center",
						speed: 600,
						drag: !1,
						width: "calc(100% - 48px)",
						classes: {
							pagination: `splide__pagination ${Oi}`,
							page: `splide__pagination__page ${Ci}`
						}
					},
					onMove: (e, n) => {
						u(n), t && t(n)
					},
					className: g(gi)
				}, r.a.createElement(pi, null, e.map(({
					name: e,
					images: t
				}, n) => r.a.createElement(mi, {
					key: n,
					className: g(yi, {
						[wi]: n === s,
						[bi]: 1 === Math.abs(s - n)
					})
				}, r.a.createElement("img", {
					src: t[0].url,
					alt: e,
					className: _i
				})))), r.a.createElement("div", {
					className: "splide__arrows"
				}, r.a.createElement("button", {
					className: g("splide__arrow splide__arrow--prev", Ei, {
						[xi]: 0 === s
					}),
					disabled: 0 === s
				}, r.a.createElement("img", {
					src: a.e.Chevron,
					className: g(Si, ki)
				})), r.a.createElement("button", {
					className: g("splide__arrow splide__arrow--next", Ei, {
						[xi]: s === e.length - 1
					}),
					disabled: s === e.length - 1
				}, r.a.createElement("img", {
					src: a.e.Chevron,
					className: Si
				}))))
			};
			const Pi = {
				CheckmarkGreen: "https://www.redditstatic.com/crypto-assets/v2/checkmark-green-7355fd2559.svg",
				CheckmarkGrey: "https://www.redditstatic.com/crypto-assets/v2/checkmark-grey-1978f4add3.svg",
				Chevron: "https://www.redditstatic.com/crypto-assets/v2/chevron-ca25b73dda.svg",
				CloseContained: w,
				CloseDark: E,
				Close: x,
				Vault: "https://www.redditstatic.com/crypto-assets/v2/vault-cfd0500d93.svg"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.eeabe2ad30cb30a987e5.js.map