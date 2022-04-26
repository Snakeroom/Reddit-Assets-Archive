// https://www.redditstatic.com/desktop2x/Reddit.5082f460706bbd2d79cc.js
// Retrieved at 4/26/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				r = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(n("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, o.v4)(),
				i = !1,
				c = [],
				l = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				d = t.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				u = t.trigger = function(e, t) {
					var n = l();
					n && i ? (t && r.postMessage(n.contentWindow, "data.gtm", t), r.postMessage(n.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						c.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				m = function() {
					if (l() && i) {
						var e = c.slice();
						c = [], e.forEach((function(e) {
							var t = e.eventName,
								n = e.payload;
							return u(t, n)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					n = e.jailUrl,
					o = e.payload;
				if (t)
					if (n) {
						r.listen("gtm"), r.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, r.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, d(), o)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				r = o;
			r.v1 = s, r.v4 = o, e.exports = r
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var n = [], s = 0; s < 256; ++s) n[s] = (s + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var s = t || 0,
					o = n;
				return o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, n) {
			(function(t) {
				var n, s = t.crypto || t.msCrypto;
				if (s && s.getRandomValues) {
					var o = new Uint8Array(16);
					n = function() {
						return s.getRandomValues(o), o
					}
				}
				if (!n) {
					var r = new Array(16);
					n = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
				e.exports = n
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				r = s(),
				a = [1 | r[0], r[1], r[2], r[3], r[4], r[5]],
				i = 16383 & (r[6] << 8 | r[7]),
				c = 0,
				l = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					r = t || [],
					d = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : l + 1,
					p = u - c + (m - l) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, l = m, i = d;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[s++] = b >>> 24 & 255, r[s++] = b >>> 16 & 255, r[s++] = b >>> 8 & 255, r[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[s++] = h >>> 8 & 255, r[s++] = 255 & h, r[s++] = h >>> 24 & 15 | 16, r[s++] = h >>> 16 & 255, r[s++] = d >>> 8 | 128, r[s++] = 255 & d;
				for (var g = e.node || a, f = 0; f < 6; ++f) r[s + f] = g[f];
				return t || o(r)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, n) {
				var r = t && n || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || s)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[r + i] = a[i];
				return t || o(a)
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return o(s(e))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(o(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					o = e.length,
					r = o - 1;
				for (t = void 0 === t ? o : t; ++n < t;) {
					var a = s(n, r),
						i = e[a];
					e[a] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayShuffle.js"),
				o = n("./node_modules/lodash/_baseShuffle.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (r(e) ? s : o)(e)
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				o = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			const o = () => {
					const e = document.getElementById(s.a);
					e && (e.style.filter = "blur(10px)")
				},
				r = () => {
					const e = document.getElementById(s.a);
					e && e.style.removeProperty("filter")
				}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				mIsBlurred: "_3Tq-_9917Q-o0iyzcNAeZn",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/lib/portal/index.tsx"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/constants/shortcuts.ts"),
				d = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => {
				let {
					className: t,
					shouldBlurContent: n,
					isVisible: s,
					...a
				} = e;
				return o.a.createElement("div", p({
					className: Object(r.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: s,
						[m.a.mIsBlurred]: n
					})
				}, a))
			};

			function h(e) {
				class t extends s.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(d.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(d.b)(), Object(c.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: c,
							overlayCustomStyles: d,
							shouldBlurContent: u,
							withOverlay: p,
							...h
						} = t, g = h;
						return o.a.createElement(i.a, {
							container: document.getElementById(l.b)
						}, o.a.createElement(b, {
							className: c,
							isVisible: p,
							onClick: this.onOverlayClick,
							shouldBlurContent: u,
							style: d
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, g))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => o.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class o {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, n] = this.getTabbableNodes();
							if (!t || !n) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(n)) : e.shiftKey || e.target !== n || (e.preventDefault(), this.tryToFocusNode(t))
						}
					}, this.container = e
				}
				activate() {
					this.active || (this.active = !0, document.addEventListener("keydown", this.onKeyDown, !0))
				}
				deactivate() {
					this.active && (document.removeEventListener("keydown", this.onKeyDown, !0), this.active = !1)
				}
				getTabbableNodes() {
					const e = this.container.querySelectorAll(s);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class o {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new o(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof s ? t : new s(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.prev = o, n.next = o.next, o.next = n, n.next && (n.next.prev = n);
					const r = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.next = o, n.prev = o.prev, o.prev = n, n.prev && (n.prev.next = n);
					const r = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const o = n.length,
						r = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - r === o
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/throwDevError.ts");
			const o = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/domUtils/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				a = n("./src/reddit/constants/elementIds.ts");
			const i = () => {
					o.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: s,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.kb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, s) => {
				let {
					apiContext: d
				} = s;
				(await
					function(e) {
						return Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(d())).ok ? (Object(i.b)(), await m(d(), !0), e && window.location.reload()) : (m(d(), !1), t(Object(c.f)({
					kind: l.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
				Object(i.a)(),
					function(e) {
						Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/join_redesign_beta`,
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = `${s.a.redditUrl}${e}${t}`;
							window.location.replace(n)
						})
					}(c())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "s", (function() {
				return de
			})), n.d(t, "v", (function() {
				return ue
			})), n.d(t, "p", (function() {
				return be
			})), n.d(t, "u", (function() {
				return ge
			})), n.d(t, "n", (function() {
				return fe
			})), n.d(t, "m", (function() {
				return Oe
			})), n.d(t, "h", (function() {
				return xe
			})), n.d(t, "a", (function() {
				return ye
			})), n.d(t, "b", (function() {
				return je
			})), n.d(t, "r", (function() {
				return _e
			})), n.d(t, "f", (function() {
				return Se
			})), n.d(t, "g", (function() {
				return ke
			})), n.d(t, "k", (function() {
				return we
			})), n.d(t, "d", (function() {
				return Ne
			})), n.d(t, "c", (function() {
				return Re
			})), n.d(t, "j", (function() {
				return Le
			})), n.d(t, "i", (function() {
				return Ge
			})), n.d(t, "l", (function() {
				return Be
			})), n.d(t, "t", (function() {
				return He
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/lib/scroll/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				l = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/onboarding/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				h = n("./src/reddit/actions/shortcuts/utils.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				v = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/constants/localStorage.ts"),
				C = n("./src/redditGQL/operations/CommentToxicity.json"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				P = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/genericServerError/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				M = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, s) => {
					let o, r;
					if (s === w.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...C,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				T = async (e, t, n, s, r, a) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return r === w.i.MARKDOWN ? i.text = n.text : (i.text = null, i.richtext_json = a), Object(x.a)(Object(E.a)(e, [P.a]), {
						method: o.kb.POST,
						endpoint: Object(j.a)(Object(M.a)(Object(N.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(S.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(S.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(_.a)()
					})
				};
			var A = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var R = n("./src/reddit/endpoints/post/index.tsx"),
				L = n("./src/reddit/endpoints/post/convert.ts"),
				D = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				F = n("./src/reddit/featureFlags/index.ts"),
				U = n("./src/reddit/helpers/correlationIdTracker.ts"),
				G = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				H = n("./src/reddit/helpers/sessionStorage/index.ts"),
				q = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				V = n("./src/reddit/models/PostDraft/index.ts"),
				Q = n("./src/reddit/models/RichTextJson/index.ts"),
				K = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				z = n("./src/reddit/models/Toast/index.ts"),
				J = n("./src/reddit/selectors/comments.ts"),
				Y = n("./src/reddit/selectors/commentSelector.ts"),
				X = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				Z = n("./src/reddit/selectors/platform.ts"),
				$ = n("./src/reddit/selectors/posts.ts"),
				ee = n("./src/reddit/selectors/user.ts"),
				te = n("./src/reddit/actions/comment/index.ts"),
				ne = n("./src/reddit/actions/comment/constants.ts");
			const se = Object(r.a)(ne.k),
				oe = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(ee.T)(o) && t) {
								const s = se({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.f)(s))
							} else e(se({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				re = Object(r.a)(ne.I),
				ae = Object(r.a)(ne.K),
				ie = Object(r.a)(ne.J),
				ce = Object(r.a)(ne.H),
				le = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await q.f(e, n, t, r)
				}, de = "Toxicity_Warning__Modal", ue = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						a = Object(Z.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (F.d.enableToxicityWarning(r)) {
						if (!(await I(o(), i, c, l))) return void t(Object(d.i)(de))
					}
					t(be(e))
				}, me = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, pe = e => {
					let t = null;
					return e.rteState && (t = f.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, be = e => async (t, n) => {
					t(Object(d.g)(de));
					const s = n(),
						o = Object(X.a)(s),
						r = Object(X.b)(s);
					if (!s.user.account && o) {
						const n = pe(e.formData),
							s = me(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.j)()), Object(H.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(he(e, !1))
				}, he = (e, t, n, r) => {
					let {
						postId: a,
						commentsPageKey: c,
						draftKey: l,
						formData: d,
						editorMode: u,
						disableAutofocus: p,
						isLiveStreaming: f
					} = e;
					return async (e, O, C) => {
						let {
							apiContext: x
						} = C;
						const y = O(),
							E = y.features.comments.submit.pending[l];
						if (!y.user.account || E) return;
						t || e(re({
							draftKey: l,
							draft: d
						}));
						const P = y.user.account.displayText,
							j = d.commentMode;
						let _;
						if (f) _ = await Object(D.i)(x(), a, d, P), e(Object(b.a)({
							streamId: a,
							level: _.body.automuteLevel
						}));
						else {
							const e = t && n ? n : pe(d);
							_ = await T(x(), a, d, P, j, e)
						}
						if (_.ok) {
							let n;
							if (n = _.body, e(ae({
									...n,
									headCommentId: Object(J.w)(y, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: l
								})), t) {
								const e = Object(Z.i)(y);
								Object(i.a)(!!e)
							}
							const s = Object($.G)(O(), {
								postId: a
							});
							e(Object(m.z)(s, v.a.CommentSubmitted))
						} else {
							if (_.error && _.error.type === o.Lb) {
								const e = t && r ? r : me(d);
								q.h(y, e, a)
							}
							const n = _.error && _.error.fields && _.error.fields[0] ? _.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ce({
								draftKey: l,
								error: _.error
							})), e(Object(g.f)({
								duration: g.a,
								kind: z.b.Error,
								text: n
							}))
						}
						le(O(), c, u, _).then(() => _.ok && u === w.i.RICH_TEXT ? Object(U.b)(U.a.CommentComposer) : void 0), p || Object(h.d)(), t && Object(H.a)()
					}
				}, ge = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(Z.e)(m);
					let b = "";
					if (p && (b = p.name), F.d.enableToxicityWarning(m)) {
						if (!(await I(o(), b, l, u))) return void t(Object(d.i)(de))
					}
					t(fe({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, fe = e => async (t, n) => {
					t(Object(d.g)(de));
					const s = n(),
						o = Object(X.a)(s),
						r = Object(X.b)(s);
					if (!s.user.account && o) {
						const n = pe(e.formData),
							s = me(e.formData);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(l.j)()), Object(H.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(ve(e, !1))
				}, ve = (e, t, n, s) => async (r, a, c) => {
					let {
						apiContext: l
					} = c;
					const {
						parentCommentId: d,
						commentsPageKey: u,
						parentCommentDepth: m,
						draftKey: p,
						formData: b,
						editorMode: g
					} = e, f = a(), v = f.features.comments.submit.pending[p];
					if (!f.user.account || v) return;
					t || r(re({
						draftKey: p,
						draft: b
					}));
					const O = f.user.account.displayText,
						C = b.commentMode,
						x = t && n ? n : pe(b),
						y = await T(l(), d, b, O, C, x);
					if (y.ok) {
						if (r(ie({
								...y.body,
								parentCommentId: d,
								commentsPageKey: u,
								draftKey: p,
								depth: m + 1
							})), t) {
							const e = Object(Z.i)(f);
							Object(i.a)(!!e)
						}
					} else {
						if (y.error && y.error.type === o.Lb) {
							const e = Object(Y.b)(f, {
								commentId: d
							});
							if (!e) return;
							const n = t && s ? s : me(b);
							q.h(f, n, e.postId, d)
						}
						r(ce({
							draftKey: p,
							error: y.error
						}))
					}
					le(a(), u, g, y), Object(h.d)(), t && Object(H.a)()
				}, Oe = () => async e => {
					const t = Object(H.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: o,
								richTextJSONData: r,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(u.skipOnboardingModal)()), o ? await e(he({
							...t.comment,
							postId: o
						}, !0, r, a)) : s && void 0 !== n && await e(ve({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, a))
					}
				}, Ce = Object(r.a)(ne.q), xe = Object(r.a)(ne.y), ye = Object(r.a)(ne.p), Ee = Object(r.a)(ne.l), Pe = (Object(r.a)(ne.g), Object(r.a)(ne.m)), je = (Object(r.a)(ne.t), (e, t, n) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === w.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Q.G)(t)) o(Pe({
						editorMode: e,
						draftKey: n,
						content: c ? Q.i : ""
					})), o(Object(p.c)(e));
					else {
						o(Object(p.b)(n));
						const r = await Object(L.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(p.a)(n)), o(Pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(p.c)(e))
						} else o(Object(p.a)(n)), o(Object(g.f)({
							duration: g.a,
							kind: z.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), _e = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const r = o(),
							i = Object(a.a)(V.c.replyToComment, n);
						if (!Object(ee.R)(o()) && !Object(X.a)(r)) return e(Object(l.j)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(J.m)(o(), {
								commentId: n
							})
						}));
						const u = r.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(ye({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = r.user.prefs.commentMode,
							g = Object(G.d)();
						if (g) {
							const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === w.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => K.s(e, null)).map(e => K.l([e])),
									n = K.s("", null),
									s = K.l([n]);
								b = {
									document: [K.c(t), s]
								}
							}
						}
						const f = r.features.comments.drafts[i];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: V.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: V.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(ee.T)(r)) {
							const s = Ce({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: i,
								formData: v
							});
							e(Object(c.f)(s))
						} else e(Ce({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: i,
							formData: v
						}))
					}
				}, Se = e => async t => {
					t(Object(te.p)(e)), t(Ne(e))
				}, ke = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(ye({
							parentCommentId: t,
							commentsPageKey: n
						})), e(_e({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(te.p)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, we = (e, t) => n => n(Ee({
					draftKey: e,
					formData: t
				})), Me = Object(r.a)(ne.s), Ne = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (q.c(i), e(Me({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: V.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ie = Object(r.a)(ne.D), Te = Object(r.a)(ne.C), Ae = Object(r.a)(ne.E), Re = Object(r.a)(ne.h), Le = e => {
					let {
						id: t,
						commentsPageKey: n,
						depth: s,
						draftKey: r,
						formData: a
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: c
						} = i;
						const l = s();
						if (!l.user.account) return;
						e(Ie({
							draftKey: r
						})), q.d(l);
						const d = l.user.account.displayText || "",
							u = a.commentMode,
							m = await (async (e, t, n, s, r, a) => {
								const i = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								if (a === w.i.MARKDOWN) i.text = s.text;
								else {
									i.text = null;
									let e = null;
									s.rteState && (e = f.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
										document: e
									})
								}
								return Object(x.a)(Object(E.a)(e, [P.a]), {
									endpoint: Object(j.a)(Object(N.a)(Object(M.a)(`${e.apiUrl}/api/editusertext`))),
									method: o.kb.POST,
									data: i
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(k.a)(e)
								} : {
									...e,
									body: {
										comment: Object(S.a)(e.body.json.data.things[0].data, r)
									}
								} : {
									...e,
									body: {
										comment: Object(S.a)(e.body, r)
									}
								} : {
									...e,
									error: e.error || Object(_.a)()
								})
							})(c(), t, 0, a, d, u);
						if (m.ok) {
							const s = m.body;
							e(Ae({
								commentId: t,
								commentsPageKey: n,
								draftKey: r
							})), e(Object(te.i)({
								[t]: {
									...s.comment
								}
							}))
						} else e(Te({
							draftKey: r,
							error: m.error
						}))
					}
				}, De = Object(r.a)(ne.A), Fe = Object(r.a)(ne.z), Ue = Object(r.a)(ne.B), Ge = (e, t) => async (n, s, r) => {
					let {
						apiContext: a
					} = r;
					const i = s();
					n(De({
						id: e
					})), q.a(e, i);
					const c = await ((e, t) => Object(x.a)(Object(E.a)(e, [P.a]), {
						endpoint: Object(j.a)(`${e.apiUrl}/api/del`),
						method: o.kb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(_.a)()
					}))(a(), e);
					c.ok ? n(Ue({
						id: e,
						postId: t
					})) : n(Fe({
						id: e,
						error: c.error
					}))
				}, Be = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(te.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(R.q)(o(), e, r)).ok || t(Object(te.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, He = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c, l, d, u, m;
					n(Object(te.c)());
					const p = e => Object(g.f)(Object(g.e)(e, z.b.Error));
					if (((null === (c = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === O.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === W.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(te.n)(i)), (await ((e, t) => Object(y.a)(e, {
								...A,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.wb)(null !== (u = null === (d = null === (l = o().pages) || void 0 === l ? void 0 : l.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(g.f)({
								kind: z.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(te.n)(i)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				o = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				r = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(o.c),
				b = Object(s.a)(o.b),
				h = Object(s.a)(o.e),
				g = Object(s.a)(o.f),
				f = Object(s.a)(o.d),
				v = Object(s.a)(o.a),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						c = Object(m.l)(o);
					if (c && c.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...i,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(s());
						e(p(t))
					} catch (d) {
						e(b()), e(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: d.message
						}))
					}
				}, C = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const c = n(),
						u = Object(m.l)(c);
					if (u && u.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${d.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(h());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...i,
									variables: {
										query: JSON.stringify({
											entityRef: t
										}),
										queryName: "getEntity"
									}
								});
								if (!n.ok) throw new Error(`Unable to fetch ${t}`);
								const s = n.body.data.econAdminPanel.response;
								return JSON.parse(s)
							})(o(), e);
							t(g(n))
						} catch (p) {
							t(f()), t(Object(r.f)({
								duration: r.a,
								kind: l.b.Error,
								text: p.message
							}))
						}
					}
				}, x = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const c = n(),
						d = Object(m.l)(c);
					if (!d || !d.isEmployee) return;
					const p = Object(u.b)(c);
					if (p) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...i,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const o = s.body.data.econAdminPanel.response;
							return JSON.parse(o)
						})(o(), p.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (b) {
						t(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: b.message
						}))
					}
				}, y = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const p = o(),
						b = Object(m.l)(p);
					if (b && b.isEmployee && Object(u.b)(p)) try {
						await (async (e, t, n, s) => {
							const o = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...c,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...o
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(o)}`)
						})(d(), e, t, n), s(Object(r.f)({
							duration: r.a,
							kind: l.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (h) {
						s(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: h.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.kb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(d.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.A)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(l.h))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, o) => {
				let {
					apiContext: r
				} = o;
				switch (e) {
					case l.a.Success:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case l.a.AlreadyVerified:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case l.a.WrongUser:
						return void t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const d = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.kb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(c(), e);
				if (d.ok && d.body && d.body.success) return l.a.Success;
				switch (d.body.reason) {
					case l.a.AlreadyVerified:
						return l.a.AlreadyVerified;
					case l.a.WrongUser:
						return l.a.WrongUser;
					default:
						return l.a.Error
				}
			}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(r.e)(r.a.GildingFlow),
					thingId: c
				})), Object(a.R)(i) || await t(o.t());
				const l = n();
				if (!Object(a.R)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = e => async (e, t) => {
				const n = t();
				Object(o.R)(n) || await e(s.t());
				const r = t();
				if (!Object(o.R)(r)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(o.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: o
				} = n;
				try {
					const t = await Object(a.b)(o());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), r.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/nsfwBlocking/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)(() => n.e("NsfwBlockingActions").then(n.bind(null, "./src/reddit/actions/nsfwBlocking/index.ts")).then(e => e.default))
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.a)()
				})), await e(Object(r.t)()), Object(a.R)(t()) || e(Object(i.i)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/econManagement/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.R)(n),
					d = Object(c.O)(n);
				l && d || await e(Object(s.c)("/")), e(Object(r.m)({
					title: "Econ control panel"
				})), await e(Object(o.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.d)()
				})), Object(i.R)(t()) || await e(Object(a.t)()), await e(Object(o.b)()).then(() => {
					if (t().economics.me.data) return e(Object(o.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				o = n("./src/reddit/actions/economics/helpers/async.ts"),
				r = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.R)(d) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.F)(t(), l);
						await e(Object(o.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/gold/powerups.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/actions/users.ts"),
				l = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				d = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				m = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(r.m)({
						title: Object(s.i)()
					})), await e(Object(c.t)()), !Object(m.R)(n)) return;
				await e(Object(a.q)());
				const p = Object(l.b)(n),
					b = Object(d.a)(n);
				if (p) return await e(Object(o.d)(b));
				await e(Object(i.f)()), await e(Object(o.o)());
				const h = Object(u.c)(n);
				if (h && h.length) {
					const t = h.map(e => e.id);
					await e(Object(o.d)(t))
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.j)()
				})), await e(Object(a.t)()), Object(i.R)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.p)()
				}))
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				g = (e, t, n) => async (o, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === l.i.MARKDOWN,
						C = t === l.i.RICH_TEXT,
						x = m.k;
					if (O && Object(d.G)(n)) return o(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (C && !n) return o(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void o(f(t));
					o(p(x));
					const y = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					y.ok ? (o(b(x)), o(h({
						editorKey: e,
						editorMode: t,
						content: y.body.output
					})), o(f(t))) : (o(b(x)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.sb)(o + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(r.r),
				i = Object(s.a)(r.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = await Object(o.a)(r(), e);
					c && c.ok ? t(a({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/comment/authoring.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				u = n("./src/reddit/selectors/accountManager/modalData.ts"),
				m = n("./src/reddit/selectors/activeModal.ts"),
				p = n("./src/reddit/selectors/gild.ts"),
				b = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = n("./src/reddit/actions/shortcuts/utils.ts");
			const g = [b.u, b.o, e => !!Object(p.d)(e)],
				f = (e, t) => async (n, p, b) => {
					let {
						apiContext: f
					} = b;
					const v = p();
					for (const e of g)
						if (e(v)) return;
					const O = document.activeElement,
						C = v.shortcuts.activeCommentId,
						x = Object(h.c)(v),
						y = Object(m.b)(v),
						E = Object(u.a)(v),
						P = [r.a.NsfwBlockingModal].includes(E),
						j = [i.a.NSFW_BLOCKING_MODAL_V2].includes(y),
						_ = P || j;
					if (O && "true" === O.contentEditable && C && x) n(o.a({
						parentCommentId: C,
						commentsPageKey: x
					})), Object(h.a)(C);
					else if (y && !_) Object(h.b)(c.b), n(Object(r.i)(y));
					else if (v.toaster[0]) Object(h.b)(c.b), n(Object(a.g)(v.toaster[0].id));
					else if (v.shortcuts.namespace === c.d.Lightbox && v.platform.currentPage) {
						const e = v.platform.currentPage.locationState.closeLocation;
						e && (Object(h.b)(c.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: S
					} = v.shortcuts;
					e(t && S ? l.b(S, "close", !0) : d.a)
				}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				b = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/sso/constants.ts");
			const f = Object(h.a)(g.a),
				v = Object(h.a)(g.b);
			var O = n("./src/reddit/actions/survey/index.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/constants/accountManager.ts"),
				E = n("./src/reddit/constants/history.ts"),
				P = n("./src/reddit/constants/modals.ts"),
				j = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				S = n("./src/reddit/helpers/history/index.ts"),
				k = n("./src/reddit/helpers/sessionStorage/index.ts"),
				w = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				M = n("./src/reddit/helpers/trackers/onboarding.ts"),
				N = n("./src/reddit/icons/svgs/Close/index.tsx"),
				I = n("./src/reddit/models/Sso/index.ts"),
				T = n("./src/reddit/models/Toast/index.ts"),
				A = n("./src/reddit/selectors/accountManager/index.ts"),
				R = n("./src/reddit/selectors/accountManager/modalData.ts"),
				L = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				D = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				F = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				U = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				G = n("./src/reddit/selectors/experiments/survey.ts"),
				B = n("./src/reddit/selectors/telemetry.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				W = n.n(q);
			const V = u.a.iframe("IFrame", W.a),
				Q = u.a.button("CloseButton", W.a),
				K = u.a.wrapped(N.a, "Close", W.a),
				z = Object(c.c)({
					accountManagerSrc: A.a,
					actionSource: R.a,
					frontpageSignupVariant: D.a,
					isBlockingInterstitialEnabled: F.b,
					isBlockingInterstitialV2Enabled: F.c,
					isBlurredPreview: U.b,
					isCommentBeforeSignUpEnabled: L.a,
					isDismissSurveyEnabled: G.a,
					isHardBlockingInterstitialEnabled: F.d,
					isLoggedIn: H.R,
					redirectUrl: R.b
				}),
				J = Object(i.b)(z, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(O.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(B.n)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(_.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(b.A)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(f({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(C.f)(Object(C.e)(t, T.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(C.f)(Object(C.e)(t, T.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(p.a)()),
					showToast: (t, n) => {
						e(Object(C.f)(Object(C.e)(t, n)))
					}
				})),
				Y = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === y.a.ChangePassword || t.type === y.a.Close || t.type === y.a.CreateAccount || t.type === y.a.GoogleOneTapDisplayed || t.type === y.a.GoogleOneTapFlowFailed || t.type === y.a.GoogleOneTapSkipped || t.type === y.a.Login || t.type === y.a.PreferenceStatus || t.type === y.a.Register || t.type === y.a.Resize || t.type === y.a.ShowStep || t.type === y.a.SSOLinkFail || t.type === y.a.SSOLinkSuccess || t.type === y.a.SSOUnlinkFail || t.type === y.a.SSOUnlinkSuccess || t.type === y.a.Subscribe || t.type === y.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				X = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class Z extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === I.a.Apple ? P.a.LINK_APPLE_SSO : P.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === I.a.Apple ? P.a.UNLINK_APPLE_SSO : P.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(o.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && Y(e))
							if (t.type === y.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === y.a.Close) this.closedByUser();
						else if (t.type === y.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === y.a.Login) this.onLogIn();
						else if (t.type === y.a.ChangePassword) this.onChangePassword();
						else if (t.type === y.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === y.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === y.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === y.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === y.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === y.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === y.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === y.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === y.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === y.a.ShowStep ? this.onShowStep(t.step) : t.type === y.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== m.a.Reply && Object(k.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(S.a)(E.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							redirectUrl: n
						} = this.props;
						let s = "";
						s = n || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== m.a.Reply && Object(k.a)(), this.redirectTo(s, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === y.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), T.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), T.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), T.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[j.q]: "true"
						};
						n && (s[j.x] = "true"), e.isSignupModalSuccessful && (s[j.y] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: o,
							isDismissSurveyEnabled: r,
							onDismissSignupTrigger: a,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = X[this.currentStep];
							e && c(Object(M.r)(e))
						}
						s && e === m.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== m.a.NsfwBlockingModal && c(Object(w.a)()), o && Object(k.a)(), this.close(), this.isSignupModalDismissed && r && a()
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}, this.isSignupSurveyTriggerSource = () => {
						const {
							actionSource: e
						} = this.props;
						return e && m.l.includes(e)
					}
				}
				componentDidMount() {
					const {
						actionSource: e,
						exposeIFrameElement: t,
						oniFrameLoaded: n,
						setRef: s
					} = this.props;
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						n(this.iframeRef.current, e), this.focusFirstVisibleIframeInput()
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), this.props.isBlurredPreview && this.props.actionSource === m.a.NsfwBlockingModal && Object(l.a)(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === y.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage), this.props.isBlurredPreview && this.props.actionSource === m.a.NsfwBlockingModal && Object(l.b)()
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isHardBlockingInterstitialEnabled: s,
						path: o
					} = this.props, {
						iframeStyles: r
					} = this.state, i = (o === y.c.Index || o === y.c.Register) && (t === m.a.UserProfile || t === m.a.FeedPost || t === m.a.Comments || t === m.a.FeedScroll || t === m.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(V, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: r,
						onLoad: this.onIFrameLoad
					}), c && a.a.createElement(Q, {
						onClick: this.closedByUser
					}, a.a.createElement(K, null)))
				}
			}
			t.a = J(Object(x.c)(Z))
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				o = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				offline: "_1OVuPhC0s89CZodD5qWMWP",
				navExperiment: "_32g3BKfzA1V3Y0eaczZbYl",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				removeOverflow: "_1TESSB-XqnzjiOpUWj2dND",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				lightboxHeaderWrapperExp: "_1k5guql3KcBJzH7i7UCr7Y",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0",
				offlineBanner: "_1C1Dn0NhEGQkEA9tDGKKSH"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return np
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				l = n("./node_modules/lodash/throttle.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				C = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				_ = n("./src/reddit/actions/header.ts"),
				S = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				M = n("./node_modules/polished/dist/polished.es.js"),
				N = n("./node_modules/react-motion/lib/react-motion.js"),
				I = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/accountManager.ts"),
				L = n("./src/reddit/helpers/trackers/onboarding.ts"),
				D = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				G = n("./src/config.ts"),
				B = n("./src/reddit/components/Carousel/index.m.less"),
				H = n.n(B);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class q extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === s.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => ({
							...e,
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return {
								...e,
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							}
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						t.clearPageInterval(), t.timeoutNumber = window.setTimeout(t.handleNextPage, t.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = e => {
						let {
							img: t,
							style: n
						} = e;
						return m.a.createElement("img", {
							key: t,
							src: `${G.a.assetPath}/${t}`,
							style: n
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: o,
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: a
						} = this.state, i = n === s.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -o * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(v.a)(H.a.item, H.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${G.a.assetPath}/${e.img}")`,
								width: o
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(v.a)(H.a.indicator, {
							[H.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: n
					} = this.props;
					return m.a.createElement("div", {
						className: Object(v.a)(e, H.a.container)
					}, m.a.createElement("article", {
						className: H.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: H.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var W = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				V = n.n(W);
			const Q = I.a.div("Container", V.a),
				K = I.a.wrapped(q, "Carousel", V.a),
				z = I.a.div("Phone", V.a),
				J = I.a.img("Frame", V.a),
				Y = `${G.a.assetPath}/img/frontpage-signup/android-frame.png`,
				X = `${G.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				Z = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				$ = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var ee = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(Q, {
						className: t
					}, m.a.createElement(z, {
						className: V.a.android
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: Z,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: Y
					})), m.a.createElement(z, {
						className: V.a.iphone
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(J, {
						src: X
					})))
				},
				te = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ne = n.n(te);
			const se = I.a.div("Container", ne.a),
				oe = I.a.span("Disclaimer", ne.a),
				re = I.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(re, {
					href: "https://www.redditinc.com/"
				}, o.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/advertising"
				}, o.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(re, {
					href: "http://www.redditblog.com/"
				}, o.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/careers"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(re, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/press"
				}, o.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/coins"
				}, o.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(re, {
					href: "https://redditgifts.com/"
				}, o.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/premium"
				}, o.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, o.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, o.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(oe, null, o.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ie = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ce = n.n(ie);
			const le = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				de = I.a.div("Container", ce.a),
				ue = I.a.wrapped(T.a, "IFrame", ce.a),
				me = I.a.wrapped(ee, "Images", ce.a),
				pe = I.a.wrapped(ae, "Links", ce.a),
				be = I.a.div("MainContent", ce.a),
				he = I.a.div("MainContentColumn", ce.a),
				ge = I.a.button("NotReady", ce.a),
				fe = I.a.span("NotReadyText", ce.a),
				ve = I.a.wrapped(D.a, "NotReadyIcon", ce.a),
				Oe = Object(C.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return m.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(de, {
						className: t,
						innerRef: n
					}, m.a.createElement(be, null, m.a.createElement(he, null, m.a.createElement(me, null, "Images Placeholder")), m.a.createElement(he, null, m.a.createElement(ue, {
						className: Object(v.a)({
							[ce.a.fields]: Object(U.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(ge, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(M.i)(.8, i)
						}
					}, m.a.createElement(fe, null, o.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class Ce extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class xe extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(L.a)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(Ce, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Oe, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(N.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(N.spring)(s, le)
						}
					}, this.renderScroller))
				}
			}
			var ye = Object(A.c)(xe),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				Pe = n.n(Ee),
				je = n("./src/lib/localStorageAvailable/index.ts"),
				_e = n("./src/reddit/actions/modal.ts"),
				Se = n("./src/higherOrderComponents/makeAsync.tsx"),
				ke = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Me = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Ne = n("./src/lib/loadWithRetries/index.ts");
			var Ie = Object(Se.a)({
				getComponent: () => Object(Ne.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Te = () => null;
			var Ae = Object(Se.a)({
					ErrorComponent: Te,
					getComponent: () => Object(Ne.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Te
				}),
				Re = n("./src/higherOrderComponents/asModal/index.tsx"),
				Le = n("./src/reddit/actions/structuredStyles/index.ts"),
				De = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Fe = n("./src/reddit/constants/modals.ts"),
				Ue = n("./src/reddit/controls/TextButton/index.tsx"),
				Ge = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), He = Object(p.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(_e.i)(Fe.a.BLADE_NIGHTMODE)), e(Object(Le.f)())
					},
					openBlade: () => {
						e(Object(Le.e)(n))
					}
				}
			});
			var qe = Object(Re.a)(He(e => m.a.createElement(De.e, null, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, Be._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Ue.a, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(De.l, null, m.a.createElement(De.o, null, Be._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(De.g, null, m.a.createElement(De.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Be._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(De.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Be._("Continue", null, {
					hk: "413jMZ"
				})))))),
				We = n("./src/reddit/actions/authorFlair.ts"),
				Ve = n("./src/reddit/actions/gold/powerups.ts"),
				Qe = n("./src/reddit/actions/userFlair/index.ts"),
				Ke = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ze = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Je = n("./src/reddit/components/FlairPreview/index.tsx"),
				Ye = n("./src/reddit/components/FlairSearch/index.tsx"),
				Xe = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Ze = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				et = n("./src/reddit/layout/row/Inline/index.tsx"),
				tt = n("./src/reddit/models/Flair/index.ts"),
				nt = n("./src/reddit/models/User/index.ts"),
				st = n("./src/reddit/selectors/authorFlair.ts"),
				ot = n("./src/reddit/selectors/moderatorPermissions.ts"),
				rt = n("./src/reddit/selectors/telemetry.ts"),
				at = n("./src/reddit/selectors/user.ts"),
				it = n("./src/reddit/selectors/userFlair.ts"),
				ct = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				lt = n.n(ct);
			const dt = e => e.flairModalContext && e.currentUser && Object(nt.e)(e.currentUser) === e.flairModalContext.username,
				ut = e => e.authorFlair || dt(e) && e.userFlairData.applied || null,
				mt = I.a.wrapped(et.a, "Section", lt.a),
				pt = I.a.div("CheckboxText", lt.a);
			class bt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(rt.hb)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						var e;
						const {
							props: t,
							state: n
						} = this, s = n.previewFlair ? n.previewFlair.templateId : void 0;
						t.activeFlairChanged(n.previewFlair, s, n.showFlair, t.flairModalContext), (null === (e = t.flairModalContext) || void 0 === e ? void 0 : e.isOpenedFromAchievementsModal) ? t.openAchiementFlairModal() : t.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: ut(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: o
					} = e.displaySettings, r = this.state.showFlair !== o, a = ut(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Xe.b)(n, t, a);
					return !(i || c !== Xe.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s,
						flairModalContext: r
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == r ? void 0 : r.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = dt(e);
					return m.a.createElement(ze.a, null, m.a.createElement(Ke.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(Je.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						placeholderText: o.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(Ye.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						subredditId: s,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(mt, null, m.a.createElement($e.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(pt, null, o.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: lt.a.buttonsRow
					}, c && m.a.createElement(Ze.t, {
						className: lt.a.goBackButton,
						priority: Ze.c.Plain,
						onClick: e.openAchiementFlairModal
					}, o.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: lt.a.rightSideButtons
					}, a && m.a.createElement(Ze.o, {
						className: lt.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Ze.l, {
						disabled: !u,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const ht = Object(p.b)(() => Object(f.c)({
				authorFlair: st.b,
				currentUser: at.l,
				flairModalContext: st.c,
				isMod: (e, t) => !!Object(ot.n)(e, t),
				userFlairData: it.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(Qe.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(We.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Ve.f)())
			}))(bt);
			var gt = Object(Re.a)(Object(A.c)(ht)),
				ft = n("./src/reddit/selectors/activeModalId.ts"),
				vt = n("./src/reddit/selectors/bannedUser.ts"),
				Ot = n("./src/reddit/selectors/muted.ts"),
				Ct = n("./src/reddit/selectors/notificationPrefs.ts"),
				xt = n("./src/reddit/selectors/platform.ts"),
				yt = n("./src/reddit/selectors/removalReasons.ts"),
				Et = n("./src/reddit/constants/cookie.ts"),
				Pt = n("./src/reddit/featureFlags/index.ts"),
				jt = n("./src/reddit/helpers/localStorage/index.ts"),
				_t = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const St = Object(f.c)({
				activeModalId: ft.a,
				authorContext: st.c,
				badgePurchaseModalIsOpen: Object(ft.b)(Fe.a.BADGE_PURCHASE),
				banContext: vt.a,
				banModalIsOpen: Object(ft.b)(Fe.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(ft.b)(Fe.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Pt.d.introModal(e),
				isOverlayOpen: xt.i,
				moderatorPermissions: e => {
					const t = Object(xt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Ot.b,
				muteModalIsOpen: Object(ft.b)(Fe.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ct.e,
				removalReasonContext: yt.b,
				removalReasonModalIsOpen: Object(ft.b)(Fe.a.ADD_REMOVAL_REASON),
				subredditId: xt.c,
				userFlairModalIsOpen: Object(ft.b)(Fe.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: at.B,
				userInRedesignBeta: at.I,
				userIsLoggedIn: at.R,
				userIsMod: at.S,
				userIsNew: at.V
			});
			class kt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(je.a)()) return; {
						const e = Pe.a.get(Et.a);
						e && Pe.a.remove(Et.a, {
							domain: G.a.cookieDomain
						});
						const t = Object(jt.F)(Fe.a.ALPHA_CONSUMER);
						t && Object(jt.ab)(Fe.a.ALPHA_CONSUMER), (e || t) && Object(jt.Hb)(Fe.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(jt.F)(Fe.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(jt.Hb)(Fe.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(_t.a)(), 500) : setTimeout(() => Object(_t.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
						muteContext: a,
						muteModalIsOpen: i,
						notificationsPrePromptIsOpen: c,
						removalReasonContext: l,
						removalReasonModalIsOpen: d,
						sendEvent: p,
						subredditId: b,
						toggleBanModal: h,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: f,
						userFlairModalIsOpen: v
					} = this.props, O = (e, t, n) => s => () => p(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(rt.h)(o, n),
						post: n && Object(rt.H)(o, n),
						screen: Object(rt.Y)(o),
						subreddit: Object(rt.hb)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Me.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Ae, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f,
						trackClick: O("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), o && b && m.a.createElement(qe, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(gt, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(ke, {
						withOverlay: !0,
						productId: r
					}), c && m.a.createElement(Ie, null))
				}
			}
			var wt = Object(p.b)(St, e => ({
					markRedesignModalAsClosed: () => e(Object(_e.j)()),
					toggleBanModal: () => e(Object(_e.i)(Fe.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(_e.i)(Fe.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(_e.i)(Fe.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(_e.i)(Fe.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(kt)),
				Mt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Nt = n("./src/reddit/constants/experiments.ts"),
				It = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Tt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				At = n("./src/reddit/selectors/responsiveSettings.ts"),
				Rt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Lt = n.n(Rt);
			const Dt = I.a.div("Overlay", Lt.a),
				Ft = I.a.div("IframeContainer", Lt.a),
				Ut = {},
				Gt = Object(It.u)(),
				Bt = Object(f.c)({
					frontpageSignupVariant: U.a,
					isResponsiveSettingsEnabled: At.a
				}),
				Ht = {
					[R.c.ChangePassword]: Fe.a.CHANGE_PASSWORD_MODAL_ID,
					[R.c.Index]: Fe.a.LOGIN_MODAL_ID,
					[R.c.Register]: Fe.a.REGISTER_MODAL_ID,
					[R.c.EnableTwoFactor]: Fe.a.ENABLE_TWO_FACTOR,
					[R.c.DisableTwoFactor]: Fe.a.DISABLE_TWO_FACTOR,
					[R.c.TwoFactorBackupCodes]: Fe.a.TWO_FACTOR_BACKUP_CODES,
					[R.c.LinkAppleSSO]: Fe.a.LINK_APPLE_SSO,
					[R.c.UnlinkAppleSSO]: Fe.a.UNLINK_APPLE_SSO,
					[R.c.LinkGoogleSSO]: Fe.a.LINK_GOOGLE_SSO,
					[R.c.UnlinkGoogleSSO]: Fe.a.UNLINK_GOOGLE_SSO,
					[R.c.GoogleOneTap]: Fe.a.GOOGLE_ONE_TAP_MODAL_ID,
					[R.c.Onboarding]: Fe.a.ONBOARDING_MODAL_ID
				};
			class qt extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && Tt.a.throttleFeature(Nt.Gc), this.props.sendEvent(Object(L.a)(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && this.props.sendEvent(Object(L.b)())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(L.c)())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === R.c.Index || t === R.c.Register, s = t === R.c.GoogleOneTap;
						e === R.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === R.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === R.b.Email || e === R.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== R.b.EmailOptIn && e !== R.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: n,
						path: s
					} = this.props, {
						containerSize: o,
						isSSOLinkActionFailedModal: r,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), l = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, d = s === R.c.GoogleOneTap, u = Object(v.a)({
						[Lt.a.small]: c,
						[Lt.a.ssoConfirmPassword]: l,
						[Lt.a.linkActionSSOFail]: r,
						[Lt.a.mResponsive]: t,
						[Lt.a.mGoogleOneTap]: d && !a
					}), p = Object(v.a)({
						[Lt.a.mGoogleOneTap]: d && !a,
						[Lt.a.mHiddenOverlay]: d && !i
					}), b = !c && !r && !t;
					return m.a.createElement(Dt, {
						className: p
					}, m.a.createElement(Ft, {
						className: u,
						style: o || Ut
					}, m.a.createElement(T.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: n,
						path: s,
						showCloseButton: b
					})))
				}
			}
			const Wt = Gt(Object(p.b)(Bt, (e, t) => ({
				closeModal: t => {
					e(Object(_e.g)(Ht[t]))
				}
			}))(Object(A.c)(qt)));
			Object(Mt.b)(Fe.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.ChangePassword
			})), Object(Mt.b)(Fe.a.LOGIN_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Index
			})), Object(Mt.b)(Fe.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Onboarding
			})), Object(Mt.b)(Fe.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Wt, {
				path: R.c.EnableTwoFactor
			})), Object(Mt.b)(Fe.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Wt, {
				path: R.c.DisableTwoFactor
			})), Object(Mt.b)(Fe.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Wt, {
				path: R.c.TwoFactorBackupCodes
			})), Object(Mt.b)(Fe.a.REGISTER_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Register
			})), Object(Mt.b)(Fe.a.LINK_APPLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.LinkAppleSSO
			})), Object(Mt.b)(Fe.a.LINK_GOOGLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.LinkGoogleSSO
			})), Object(Mt.b)(Fe.a.UNLINK_APPLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.UnlinkAppleSSO
			})), Object(Mt.b)(Fe.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.UnlinkGoogleSSO
			})), Object(Mt.b)(Fe.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Vt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Vt, {
				withOverlay: !0
			}));
			const Qt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Qt, {
				withOverlay: !0
			}));
			const Kt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(Kt, {
				withOverlay: !0
			}));
			const zt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CROWD_CONTROL, e => m.a.createElement(zt, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const Jt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(Jt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Yt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(Yt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const Xt = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Zt = e => () => {
					e()
				};
			Object(Mt.b)(Fe.a.GOLD_GILD_MODAL, e => m.a.createElement(Xt, {
				onOverlayClick: Zt(e),
				withOverlay: !0
			}));
			var $t = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				en = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				tn = n.n(en);
			const nn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = $t.SPARKLE_ASSET_PATH, document.createElement("img").src = $t.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Mt.b)(Fe.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(nn, {
				withOverlay: !0,
				className: tn.a.modalBody,
				overlayClassName: tn.a.modalOverlay
			}));
			const sn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				on = e => () => {
					e()
				};
			Object(Mt.b)(Fe.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(sn, {
				onOverlayClick: on(e),
				withOverlay: !0
			}));
			const rn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(rn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(an, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(ln, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(dn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.TRANSFER_POINTS, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(pn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const bn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(bn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const hn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MULTIREDDIT_CREATE, e => m.a.createElement(hn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Mt.b)(Fe.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(hn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const gn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MULTIREDDIT_EDIT, e => m.a.createElement(gn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fn = () => Promise.all([n.e(5), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				vn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Ne.a)(fn).then(e => e.default)
				});
			Object(Mt.b)(Fe.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(vn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const On = () => null,
				Cn = Object(Se.a)({
					ErrorComponent: On,
					getComponent: () => Object(Ne.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: On
				});
			Object(Mt.b)(Fe.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Cn, null));
			var xn = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				yn = n.n(xn);
			const En = I.a.h2("ColumnLabel", yn.a),
				Pn = I.a.wrapped(et.a, "ColumnWrapper", yn.a),
				jn = I.a.div("Column", yn.a),
				_n = I.a.div("Description", yn.a),
				Sn = I.a.div("Key", yn.a),
				kn = I.a.wrapped(De.l, "ModalMain", yn.a),
				wn = I.a.wrapped(De.e, "ModalBody", yn.a),
				Mn = I.a.wrapped(Ze.l, "PrimaryButton", yn.a),
				Nn = I.a.wrapped(Ue.a, "TextButton", yn.a),
				In = Object(p.b)(null, e => ({
					closeModal: () => e(Object(_e.i)(Fe.a.KEYBOARD_SHORTCUTS))
				})),
				Tn = I.a.wrapped(Object(Re.a)(In(e => m.a.createElement(wn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, o.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Nn, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(kn, null, m.a.createElement(Pn, null, m.a.createElement(jn, null, m.a.createElement(et.a, null, m.a.createElement(En, null, o.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Sn, null, "Shift + ?")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Sn, null, "J")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Sn, null, "K")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Sn, null, "N")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Sn, null, "P")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Sn, null, "Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Sn, null, "X")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Sn, null, "L"))), m.a.createElement(jn, null, m.a.createElement(et.a, null, m.a.createElement(En, null, o.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Sn, null, "A")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Sn, null, "Z")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Sn, null, "C")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Sn, null, "R")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Sn, null, "Ctrl + Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Sn, null, "S")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Sn, null, "H")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Sn, null, "Q")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Sn, null, "Enter"))))), m.a.createElement(De.g, null, m.a.createElement(Mn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", yn.a);
			Object(Mt.b)(Fe.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const An = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Rn = e => () => {
					e()
				};
			Object(Mt.b)(Fe.a.SNOOVATAR_MODAL, e => m.a.createElement(An, {
				onOverlayClick: Rn(e),
				withOverlay: !0
			}));
			const {
				fbt: Ln
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dn = Object(f.c)({
				allowNavigationCallback: xt.a
			}), Fn = Object(p.b)(Dn, e => ({
				closeModal: () => e(Object(_e.i)(Fe.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Le.a)())
			}));
			class Un extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(De.e, null, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, Ln._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Ue.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(De.b, null)))), m.a.createElement(De.l, null, m.a.createElement(De.p, null, Ln._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(De.g, null, m.a.createElement(De.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Ln._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(De.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Ln._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Gn = Object(Re.a)(Fn(Un));
			Object(Mt.b)(Fe.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Gn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Bn = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Hn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Ne.a)(Bn).then(e => e.default)
				});
			Object(Mt.b)(Fe.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Hn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const qn = Object(f.c)({
					activeModalId: ft.a
				}),
				Wn = Object(p.b)(qn, e => ({
					toggleModal: t => e(Object(_e.i)(t))
				})),
				Vn = 500,
				Qn = () => {};
			class Kn extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(_t.a)(), Vn) : setTimeout(() => Object(_t.b)(), Vn)))
				}
				componentWillUnmount() {
					Object(_t.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Mt.a)(e)(e ? this.toggleModal : Qn)
				}
			}
			var zn, Jn = Wn(Kn),
				Yn = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Xn = n("./src/reddit/actions/page.ts"),
				Zn = n("./src/reddit/actions/shortcuts/utils.ts"),
				$n = n("./src/reddit/icons/fonts/index.tsx"),
				es = n("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				ts = n("./src/reddit/selectors/header.ts"),
				ns = n("./src/reddit/selectors/userPrefs.ts"),
				ss = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				os = n("./src/reddit/components/SEOTitle/index.tsx"),
				rs = n("./src/reddit/components/SubredditIcon/index.tsx"),
				as = n("./src/reddit/components/UserIcon/index.tsx"),
				is = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				cs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				ls = n.n(cs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(zn || (zn = {}));
			const ds = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(os.b, {
					type: os.a.HeaderSelector
				}, s))
			};
			var us = n("./src/lib/objectSelector/index.ts"),
				ms = n("./src/reddit/constants/wiki.ts"),
				ps = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				bs = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				hs = n("./src/reddit/selectors/subreddit.ts"),
				gs = n("./src/reddit/selectors/topic.ts");
			var fs = Object(us.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						o = Object(ps.a)(e),
						r = Object(It.Y)(n);
					switch (r) {
						case "avatar":
							return {
								type: zn.Avatar
							};
						case "index":
						case "listing":
							return s || o ? {
								type: zn.Home
							} : {
								type: zn.Popular
							};
						case "modListing":
							return {
								type: zn.ModListing
							};
						case "modQueuePages":
							return {
								type: zn.ModQueue
							};
						case "postCreation":
							return {
								type: zn.CreatePost
							};
						case "postDraft":
							return {
								type: zn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: zn.SubredditCreation
							};
						case "coins":
							return {
								type: zn.Coins
							};
						case "internationalSitePage":
							return {
								type: zn.InternationalSite
							};
						case "powerups":
							return {
								type: zn.Powerups
							};
						case "predictions":
							return {
								type: zn.Predictions
							};
						case "premium":
							return {
								type: zn.Premium
							};
						case "acknowledgements":
							return {
								type: zn.Acknowledgements
							};
						case "appeal":
							return {
								type: zn.Appeal
							};
						case "report":
							return {
								type: zn.Report
							};
						case "userDataRequest":
							return {
								type: zn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: zn.DailyCharts
							};
						case "geotagging":
							return {
								type: zn.Geotagging
							};
						case "notificationsInbox":
							return {
								type: zn.NotificationsInbox
							};
						case "talk":
							return {
								type: zn.Talk
							};
						case "topic": {
							const t = Object(It.t)(n),
								s = t && Object(gs.d)(e, t);
							if (s) return {
								type: zn.Topic,
								model: s
							}
						}
					}
					const a = e.user.account;
					if (a) switch (r) {
						case "inboxPages":
							return {
								type: zn.Inbox, model: a
							};
						case "settings":
							return {
								type: zn.Settings, model: a
							}
					}
					const i = Object(It.S)(e, {
						pageLayer: n
					});
					if ("all" === i) return {
						type: zn.All
					};
					if ("popular" === i) return {
						type: zn.Popular
					};
					const c = Object(It.r)(e, {
						pageLayer: n
					});
					if (c) return "searchResults" === r ? {
						type: zn.CommunitySearch,
						model: c
					} : {
						type: zn.Community,
						model: c
					};
					const l = Object(It.e)(e, {
						pageLayer: n
					});
					if (l) return {
						type: zn.Multi,
						model: l
					};
					const d = Object(It.k)(e, {
						pageLayer: n
					});
					if (d) return {
						type: zn.UserProfile,
						model: d
					};
					const u = Object(It.i)(n);
					if (u) return {
						type: zn.UserProfileName,
						name: `u/${u}`
					};
					if (r && "searchResults" === r) return {
						type: zn.GlobalSearch
					};
					if ("subredditWiki" === r) {
						const t = Object(It.o)(e, {
								pageLayer: n
							}) || ms.e,
							s = Object(hs.z)(e, {
								subredditName: t
							});
						if (s) return {
							type: zn.Community,
							model: s
						}
					}
					return "rpan" === r && Object(bs.a)(e) ? {
						type: zn.PublicAccessNetwork
					} : {
						type: zn.Unknown
					}
				}),
				vs = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Os = n.n(vs);

			function Cs() {
				return (Cs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function xs(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					o = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Os.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(v.a)(Os.a.text, {
								[Os.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Os.a.badge
						})),
						className: Object(v.a)(Os.a.item, e.className, {
							[Os.a.mFocused]: !!e.isFocused,
							[Os.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return o["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Cs({}, o, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(Yn.a, Cs({}, o, {
					to: e.to
				})) : m.a.createElement("button", o)
			}
			var ys = n("./src/reddit/actions/login.ts"),
				Es = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Ps = n("./src/reddit/constants/localStorage.ts"),
				js = n("./src/reddit/hooks/useIsClient.ts"),
				_s = n("./src/reddit/hooks/useLocalStorage.ts");
			const Ss = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				ks = e => {
					let {
						className: t
					} = e;
					const n = Object(js.a)(),
						s = Object(p.e)(xt.g),
						o = Object(p.e)(ps.a),
						[r, a] = Object(_s.a)(Ps.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = Ss(r.dismissed),
						l = Ss(r.throttledUntil),
						d = !n || !o || c >= 3 || o && s || i < l;
					return n && o && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + O.C
					}), d ? null : m.a.createElement(Es.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var ws = n("./src/reddit/constants/listings.ts"),
				Ms = n("./src/reddit/helpers/overlay/index.ts"),
				Ns = n("./src/reddit/routes/modListing/index.ts"),
				Is = n("./src/reddit/routes/powerups/index.ts"),
				Ts = n("./src/reddit/routes/predictions/index.ts"),
				As = n("./src/reddit/routes/talk/index.ts"),
				Rs = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ls = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Ds = n("./src/reddit/selectors/multireddit.ts"),
				Fs = n("./src/lib/LinkedListMap/index.ts"),
				Us = n("./src/reddit/routes/avatar/index.ts");

			function Gs() {
				return (Gs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Bs = Object(f.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Ds.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Ds.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Hs;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(Hs || (Hs = {}));
			const qs = [e => ({
					id: zn.Employee,
					type: Hs.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement($n.a, Gs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				Ws = () => [e => ({
					id: zn.All,
					type: Hs.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				Vs = () => [e => ({
					id: "reddit-feeds",
					type: Hs.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: zn.Home,
					type: Hs.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: zn.Popular,
					type: Hs.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ws()],
				Qs = [e => ({
					id: "reddit-feeds",
					type: Hs.Header,
					model: {
						displayText: o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: zn.Home,
					type: Hs.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ws()],
				Ks = e => m.a.createElement(ks, {
					className: e.className
				}),
				zs = [e => ({
					id: "reddit-feeds",
					type: Hs.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: zn.Home,
					type: Hs.GenericLink,
					model: {
						url: "/",
						badge: Ks,
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: zn.Popular,
					type: Hs.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ws()],
				Js = [e => ({
					id: "reddit-other",
					type: Hs.Header,
					model: {
						displayText: o.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: zn.Settings,
					type: Hs.GenericLink,
					model: {
						url: "/settings",
						displayText: o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(is.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: zn.Inbox,
					type: Hs.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: o.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(is.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				Ys = e => ({
					id: zn.Coins,
					type: Hs.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				Xs = e => ({
					id: zn.Premium,
					type: Hs.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				Zs = e => ({
					id: zn.Avatar,
					type: Hs.GenericLink,
					model: {
						url: Us.a,
						displayText: o.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Avatar", null, {
								hk: "3coVk4"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				$s = e => ({
					id: zn.Powerups,
					type: Hs.GenericLink,
					model: {
						url: Is.a,
						displayText: o.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "powerup"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Powerups", null, {
								hk: "1f7fL8"
							}))
						}
					},
					telemetryNoun: "powerups"
				}),
				eo = e => ({
					id: zn.Talk,
					type: Hs.GenericLink,
					model: {
						url: As.a,
						displayText: o.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				to = e => ({
					id: zn.Predictions,
					type: Hs.GenericLink,
					model: {
						url: Ts.a,
						displayText: o.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				no = [e => ({
					id: zn.ModQueue,
					type: Hs.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: zn.ModMail,
						type: Hs.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement($n.a, Gs({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, o.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function so(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Hs.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && oo(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Hs.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Hs.Header,
					model: {
						displayText: o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Hs.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const oo = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const s = {
						id: zn.CreateCommunity,
						telemetryNoun: "create_community"
					},
					r = {
						displayText: o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement($n.a, Gs({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...s,
					type: Hs.GenericClickable,
					model: {
						...r,
						onClick: () => {
							n ? (t(Object(_e.k)({
								actionSource: _e.a.HeaderSignup
							})), t(Object(ys.j)())) : t(Object(_e.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var ro = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ao = n.n(ro);

			function io(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(ao.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var co = n("./src/reddit/actions/subscription/index.ts"),
				lo = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				uo = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				mo = n.n(uo);

			function po() {
				return (po = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const bo = Object(f.c)({
					currentUser: at.l,
					hideNSFWPref: at.G,
					isLoggedIn: at.R,
					isLoggedOutOneFeed: ps.a
				}),
				ho = Object(p.b)(bo, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Hs.Subreddit:
								e(Object(co.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Hs.Profile:
								e(Object(co.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Hs.Multi:
								e(Object(co.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(lo.f)(t.model.url)) : t.sendEvent(Object(lo.c)(t.model.url))
						}
					}
				}));
			var go = Object(A.c)(ho((function(e) {
					const t = {
						className: Object(v.a)(mo.a.item, e.className, {
							[mo.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case Hs.Subreddit:
							return m.a.createElement(Yn.a, po({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(rs.b, {
								className: mo.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: mo.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement($n.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(mo.a.favorite, {
									[mo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Hs.SubredditAutocomplete:
							return m.a.createElement(Yn.a, po({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(rs.b, {
								className: mo.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: mo.a.text
							}, e.model.name));
						case Hs.Multi:
							return m.a.createElement(Yn.a, po({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: mo.a.customFeedIcon
							}), m.a.createElement("span", {
								className: mo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement($n.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(mo.a.favorite, {
									[mo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Hs.Profile:
							return m.a.createElement(Yn.a, po({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(as.a, {
								className: mo.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: mo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement($n.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(mo.a.favorite, {
									[mo.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				fo = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				vo = n.n(fo);

			function Oo(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: vo.a.header
				}), m.a.createElement("div", {
					className: vo.a.item
				}), m.a.createElement("div", {
					className: vo.a.item
				}), m.a.createElement("div", {
					className: vo.a.item
				}), m.a.createElement("div", {
					className: vo.a.item
				}))
			}
			var Co = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				xo = n("./src/reddit/actions/subreddit.ts"),
				yo = n("./src/reddit/controls/InternalLink/index.tsx");

			function Eo() {
				return (Eo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Po = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: o,
						rel: r
					} = e, a = {
						onClick: o,
						rel: r,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", Eo({
						href: s
					}, a), t) : m.a.createElement(yo.a, Eo({
						to: s
					}, a), t)
				},
				jo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				_o = n.n(jo),
				So = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				ko = n.n(So);
			class wo extends m.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = e => {
						const t = "A" === e.target.tagName;
						this.props.children && !t && null == this.props.isOpen && this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !!e.defaultOpen
					}
				}
				render() {
					var e;
					const {
						buttonClassName: t,
						children: n,
						className: s,
						headingClassName: o,
						icon: r,
						noBottomDivider: a,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(v.a)(_o.a.button, ko.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(v.a)(_o.a.headingContent, o),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: _o.a.iconContainer
					}, r), m.a.createElement("span", {
						className: _o.a.title
					}, l ? m.a.createElement(Po, {
						className: _o.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement($n.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(_o.a.chevronIcon, {
							[_o.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(_o.a.contentContainer, _o.a["m-collapsible"], {
							[_o.a.isOpen]: d,
							[_o.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var Mo = wo,
				No = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Io = n("./src/reddit/constants/colors.ts");
			const To = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(_o.a.title, n)
					}, t)
				},
				Ao = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(_o.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(To, {
						title: s,
						titleClassName: o
					}))
				},
				Ro = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(Po, {
						className: Object(v.a)(_o.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(To, {
						title: o,
						titleClassName: r
					}))
				},
				Lo = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: o,
						onClick: r,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(Po, {
						className: Object(v.a)(_o.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(rs.b, {
						"aria-hidden": !0,
						className: Object(v.a)(_o.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: Io.a.snoo
					}), m.a.createElement(To, {
						title: i,
						titleClassName: c
					}))
				},
				Do = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(_o.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(To, {
						title: s,
						titleClassName: o
					}), m.a.createElement(No.a, {
						className: _o.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Fo = [{
					link: {
						icon: "topic_videogaming",
						noun: "gaming",
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						noun: "valheim",
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						noun: "genshin_impact",
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						noun: "minecraft",
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						noun: "pokimane",
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						noun: "halo_infinite",
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						noun: "call_of_duty_warzone",
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						noun: "path_of_exile",
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						noun: "hollow_knight_silksong",
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						noun: "escape_from_tarkov",
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						noun: "watch_dogs_legion",
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						icon: "topic_sports",
						noun: "sports",
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						noun: "nfl",
						title: "NFL",
						url: "/t/nfl/"
					}, {
						noun: "nba",
						title: "NBA",
						url: "/t/nba/"
					}, {
						noun: "megan_anderson",
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						noun: "atlanta_hawks",
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						noun: "los_angeles_lakers",
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						noun: "boston_celtics",
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						noun: "arsenal_fc",
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						noun: "philadelphia_76ers",
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						noun: "premier_league",
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						noun: "ufc",
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						icon: "topic_television",
						noun: "tv",
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						noun: "the_real_housewives_of_atlanta",
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						noun: "the_bachelor",
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						noun: "sister_wives",
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						noun: "90_day_fiance",
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						noun: "wife_swap",
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						noun: "the_amazing_race_australia",
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						noun: "married_at_first_sight",
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						noun: "the_real_housewives_of_dallas",
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						noun: "my_600lb_life",
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						noun: "last_week_tonight_with_john_oliver",
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						icon: "topic_celebrity",
						noun: "celebrity",
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						noun: "kim_kardashian",
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						noun: "doja_cat",
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						noun: "iggy_azalea",
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						noun: "anya_taylorjoy",
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylor_joy/"
					}, {
						noun: "jamie_lee_curtis",
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						noun: "natalie_portman",
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						noun: "henry_cavill",
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						noun: "millie_bobby_brown",
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						noun: "tom_hiddleston",
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						noun: "keanu_reeves",
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						icon: "topic_business",
						noun: "business",
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						noun: "gamestop",
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						noun: "moderna",
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						noun: "pfizer",
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						noun: "johnson_johnson",
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						noun: "astrazeneca",
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						noun: "walgreens",
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						noun: "best_buy",
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						noun: "novavax",
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						noun: "spacex",
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						noun: "tesla",
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						icon: "topic_crypto",
						noun: "crypto",
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						noun: "cardano",
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						noun: "dogecoin",
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						noun: "algorand",
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						noun: "bitcoin",
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						noun: "litecoin",
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						noun: "basic_attention_token",
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						noun: "bitcoin_cash",
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						icon: "overflow_horizontal",
						noun: "more_topics",
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						noun: "animals_and_pets",
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						noun: "anime",
						title: "Anime",
						url: "/t/anime/"
					}, {
						noun: "art",
						title: "Art",
						url: "/t/art/"
					}, {
						noun: "cars_and_motor_vehicles",
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						noun: "crafts_and_diy",
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						noun: "culture_race_and_ethnicity",
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						noun: "ethics_and_philosophy",
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						noun: "fashion",
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						noun: "food_and_drink",
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						noun: "history",
						title: "History",
						url: "/t/history/"
					}, {
						noun: "hobby",
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						noun: "law",
						title: "Law",
						url: "/t/law/"
					}, {
						noun: "learning_and_education",
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						noun: "military",
						title: "Military",
						url: "/t/military/"
					}, {
						noun: "movie",
						title: "Movies",
						url: "/t/movie/"
					}, {
						noun: "music",
						title: "Music",
						url: "/t/music/"
					}, {
						noun: "place",
						title: "Place",
						url: "/t/place/"
					}, {
						noun: "podcasts_and_streamers",
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						noun: "politics",
						title: "Politics",
						url: "/t/politics/"
					}, {
						noun: "programming",
						title: "Programming",
						url: "/t/programming/"
					}, {
						noun: "reading_writing_and_literature",
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						noun: "religion_and_spirituality",
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						noun: "science",
						title: "Science",
						url: "/t/science/"
					}, {
						noun: "tabletop_game",
						title: "Tabletop Games",
						url: "/t/tabletop_games/"
					}, {
						noun: "technology",
						title: "Technology",
						url: "/t/technology/"
					}, {
						noun: "travel",
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				Uo = n("./src/reddit/helpers/trackers/navigation.ts"),
				Go = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Bo = n.n(Go);
			const Ho = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [o, r] = Object(u.useState)(null), a = e => () => {
					r(o === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, Fo.map((e, r) => ((e, t, n, s, o) => {
					let {
						link: r,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(Mo, {
						buttonClassName: o ? Bo.a.navButtonOverride : "",
						className: Bo.a.collapsibleContainer,
						icon: s && r.icon && m.a.createElement($n.a, {
							name: r.icon
						}),
						isOpen: i,
						key: r.url,
						onClick: (e, t) => {
							r.noun && n(Object(Uo.c)(r.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: r.title,
						url: r.url
					}, a.map(e => m.a.createElement(Ro, {
						className: o ? Bo.a.navBasicLink : Bo.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(Uo.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: o === e
				}))(r), t, n, s)))
			};
			var qo = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: s
					} = e;
					return m.a.createElement(Mo, {
						icon: m.a.createElement($n.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							s(Object(Uo.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: o.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(Ho, {
						sendEvent: s
					})))
				},
				Wo = n("./src/reddit/constants/keycodes.ts"),
				Vo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Qo = n("./src/reddit/helpers/trackers/postComposer.ts"),
				Ko = n("./src/lib/loadableAction/index.ts"),
				zo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Jo = n.n(zo);

			function Yo() {
				return (Yo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Xo(e) {
				return e.id === zn.ModMail || e.id === zn.CreateCommunity
			}

			function Zo(e) {
				const t = new Fs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Hs.Header && e.type !== Hs.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const $o = Object(f.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutOneFeed: ps.a,
					unfilteredListBuilder: e => t => {
						const n = Bs(e),
							s = new Fs.a("id"),
							r = Object(ps.a)(e),
							a = Object(at.qb)(e),
							i = Object(Rs.p)(e),
							c = [];
						i || c.push(zn.Predictions);
						const l = (e => Object(Rs.x)(e) ? [Xs, Ys, Zs, $s, eo, to] : [Ys, Xs, Zs, $s, eo, to])(e),
							d = c.length ? l.filter(e => !c.includes(e(null).id)) : l;
						if (n.account) {
							const r = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Hs.Header,
								model: {
									displayText: o.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Hs.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Hs.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Hs.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Hs.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Hs.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Hs.Header,
								model: {
									displayText: o.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), r.isMod && no.forEach(e => s.push(e(r))), s.push({
								id: zn.ModListing,
								type: Hs.GenericLink,
								model: {
									url: Ns.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement($n.a, Gs({
										name: "mod_queue"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => s.push({
								id: "mod" + e.id,
								type: Hs.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Hs.Header,
									model: {
										displayText: o.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: t,
												sendClickEvent: s
											} = e;
											return m.a.createElement("button", {
												onClick: () => {
													n(Object(_e.h)(Fe.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(v.a)(t, ls.a.multiPlusButton)
											}, m.a.createElement($n.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Hs.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Hs.LoadingState,
								model: {
									displayText: ""
								}
							}) : so(s, n, a, t), ((e, t, n, s) => (Vs().forEach(e => t.push(e(n))), n.isEmployee && qs.forEach(e => t.push(e(n))), Object(bs.a)(e) && t.push({
								id: zn.PublicAccessNetwork,
								type: Hs.GenericClickable,
								model: {
									onClick: () => {
										s(Object(Ms.a)(ws.c[ws.b.Rpan]))
									},
									displayText: o.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement($n.a, Gs({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, s, r, t), Js.forEach(e => s.push(e(r))), s.push((() => ({
								id: zn.CreatePost,
								type: Hs.CreatePost,
								model: {
									url: "/submit",
									displayText: o.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement($n.a, Gs({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), s.push((() => ({
								id: zn.DailyCharts,
								type: Hs.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement($n.a, Gs({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), Object(Ls.b)(e) && (e => e.push({
								id: zn.NotificationsInbox,
								type: Hs.GenericLink,
								model: {
									url: "/notifications",
									displayText: o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement($n.a, Gs({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(s), d.forEach(e => s.push(e(r)))
						} else n.subscriptions.length || Object(at.R)(e) ? Vs().forEach(e => s.push(e(null))) : r ? (zs.forEach(e => s.push(e(null))), function(e, t, n) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: Hs.Header,
								model: {
									displayText: o.fbt._("recent communities", null, {
										hk: "24NvFP"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: Hs.Subreddit,
								model: t,
								telemetryNoun: "community"
							})), oo(e, n, !0))
						}(s, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: Hs.Header,
								model: {
									displayText: o.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: Hs.ExploreMenu,
								model: {
									displayText: o.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(s)) : Qs.forEach(e => s.push(e(null))), r || (s.push({
							id: "reddit-other",
							type: Hs.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), d.forEach(e => s.push(e(null))), so(s, n, a, t));
						return s
					}
				}),
				er = e => ({
					onHomeClicked: () => e(Object(Ko.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(co.f)()), e(Object(xo.q)()), e(Object(Ko.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				tr = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class nr extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Zo(n),
							o = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: o ? o.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Wo.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Wo.b.Tab && this.props.onClose && this.props.onClose(), e.key === Wo.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Hs.Header && e.type !== Hs.ExploreMenu && e.type !== Hs.LoadingState && (this.fireTelemetryForListItem(e), e.type === Hs.GenericClickable ? e.model.onClick() : Xo(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Wo.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === Wo.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case zn.Coins:
							case zn.Premium:
								Object(Vo.e)(Vo.a.GoldPayment, !0), t = Object(Vo.c)(Vo.a.GoldPayment)
						}
						switch (e.type) {
							case Hs.Category:
							case Hs.GenericLink:
							case Hs.GenericClickable:
							case Hs.Multi:
							case Hs.Profile:
							case Hs.Subreddit:
								this.props.sendEvent(n => ({
									...Object(rt.n)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Hs.Multi ? Object(rt.m)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Hs.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(rt.n)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case Hs.CreatePost:
								this.props.sendEvent(Object(Qo.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Zo(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Zo(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Fs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Hs.Category:
								case Hs.GenericLink:
								case Hs.Multi:
								case Hs.Profile:
								case Hs.Subreddit:
								case Hs.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Hs.Header: {
									const t = n.last();
									t && t.type === Hs.Header && n.pop(), n.push(e);
									break
								}
								case Hs.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === Hs.Header && n.pop(), n
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return m.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, m.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${o.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), !this.props.isLoggedOutOneFeed && m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Jo.a.filter,
						id: "header-subreddit-filter",
						placeholder: o.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: `focus-${e.id}`,
							isFocused: this.state.focusedItemId === e.id,
							key: `subreddit-list-key-${e.id}`,
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === zn.Home && this.props.onHomeClicked(), e.type === Hs.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Hs.GenericClickable:
								return m.a.createElement(xs, Yo({}, n, {
									className: Jo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Hs.Category:
							case Hs.GenericLink:
							case Hs.CreatePost:
								return m.a.createElement(xs, Yo({}, n, {
									externalLink: Xo(e),
									className: Jo.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Hs.Header: {
								const n = e.model.button;
								return m.a.createElement(io, {
									className: Jo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Jo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Hs.LoadingState:
								return m.a.createElement(Oo, {
									className: Jo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Hs.Multi:
								return m.a.createElement(go, Yo({}, n, {
									className: Jo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Hs.Multi
								}));
							case Hs.Profile:
								return m.a.createElement(go, Yo({}, n, {
									className: Jo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Hs.Profile
								}));
							case Hs.Subreddit:
								return m.a.createElement(go, Yo({}, n, {
									className: Jo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Hs.Subreddit
								}));
							case Hs.ExploreMenu:
								return m.a.createElement(Ho, Yo({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const sr = Object(p.b)($o, er, tr)(Object(A.c)(nr)),
				or = Object(p.b)($o, er, tr)(Object(A.c)(Object(Co.b)(nr))),
				rr = Object(It.u)({
					isCommentsPage: It.x,
					pageLayer: e => e
				}),
				ar = Object(f.c)({
					currentPage: fs,
					hideNSFWPref: at.G,
					isD2xSeoDisableLightboxEnabled: es.a,
					isDropdownOpen: ts.a,
					isLoggedIn: at.R,
					isOverlayOpen: xt.i,
					isPinnedSubscriptionsMenuDisabled: ns.a,
					isSubscriptionsPinned: ns.b
				});
			class ir extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Zn.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(rt.n)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: s,
							isCommentsPage: r,
							isD2xSeoDisableLightboxEnabled: a,
							isLoggedIn: i,
							isOverlayOpen: c
						} = this.props, l = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = c || !a && !i && r;
						return m.a.createElement("div", {
							"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(ls.a.container, n, {
								[ls.a.mOpen]: l,
								[ls.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[ls.a.mPinned]: this.props.isSubscriptionsPinned,
								[ls.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: ls.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: ls.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case zn.Acknowledgements:
									return ds(o.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case zn.All:
									return ds(o.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case zn.Appeal:
									return ds(o.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case zn.Avatar:
									return ds(o.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case zn.Coins:
									return ds(o.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case zn.Community:
									return ds(e.model.displayText, !0);
								case zn.CommunitySearch:
									return ds(o.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case zn.CreateCommunity:
									return ds(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case zn.CreatePost:
									return ds(o.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case zn.DailyCharts:
									return ds(o.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case zn.GlobalSearch:
									return ds(o.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case zn.Geotagging:
									return ds(o.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case zn.Home:
									return ds(o.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case zn.Inbox:
									return ds(o.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case zn.ModListing:
									return ds("r/Mod");
								case zn.ModMail:
									return ds(o.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case zn.ModQueue:
									return ds(o.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case zn.Multi:
									return ds(e.model.displayText, !0);
								case zn.NotificationsInbox:
									return ds(o.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case zn.InternationalSite:
								case zn.Popular:
									return ds(o.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case zn.Powerups:
									return ds(o.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case zn.Predictions:
									return ds(o.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case zn.Premium:
									return ds(o.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case zn.PublicAccessNetwork:
									return ds(o.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case zn.Report:
									return ds(o.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case zn.Settings:
									return ds(o.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case zn.SubredditCreation:
									return ds(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case zn.Talk:
									return ds(o.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case zn.Topic:
									return ds(e.model);
								case zn.Unknown:
									return ds("");
								case zn.UserDataRequest:
									return ds(o.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case zn.UserProfile:
									return ds(e.model.displayText, !0);
								case zn.UserProfileName:
									return ds(e.name, !0);
								case zn.ViewDraft:
									return ds(o.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement($n.a, {
								name: e,
								isFilled: !0,
								className: ls.a.defaultIcon
							});
							switch (e.type) {
								case zn.All:
									return n("all");
								case zn.Acknowledgements:
								case zn.Appeal:
									return n("edit");
								case zn.Avatar:
									return n("avatar_style");
								case zn.Coins:
									return n("coins");
								case zn.Community:
								case zn.CommunitySearch: {
									const n = Object(ss.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(rs.b, {
										className: ls.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case zn.CreateCommunity:
								case zn.CreatePost:
									return n("add");
								case zn.DailyCharts:
									return n("list_numbered");
								case zn.Geotagging:
									return n("custom_feed");
								case zn.GlobalSearch:
									return n("search");
								case zn.Home:
									return n("home");
								case zn.Inbox:
									return m.a.createElement(is.a, {
										wrapperClassName: ls.a.userIcon
									});
								case zn.ModListing:
									return n("mod_queue");
								case zn.ModMail:
									return n("mod_mail");
								case zn.ModQueue:
									return n("mod_queue");
								case zn.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: ls.a.customFeedIcon
									});
								case zn.NotificationsInbox:
									return n("notification");
								case zn.InternationalSite:
								case zn.Popular:
									return n("popular");
								case zn.Powerups:
									return n("powerup");
								case zn.Predictions:
									return n("prediction");
								case zn.Premium:
									return n("premium");
								case zn.PublicAccessNetwork:
									return n("video_live");
								case zn.Report:
									return n("report");
								case zn.Settings:
									return m.a.createElement(is.a, {
										wrapperClassName: ls.a.userIcon
									});
								case zn.SubredditCreation:
									return n("add");
								case zn.Talk:
									return n("live");
								case zn.Topic:
									return n("custom_feed");
								case zn.Unknown:
									return m.a.createElement("div", {
										className: ls.a.unknownIcon
									});
								case zn.UserDataRequest:
									return n("add");
								case zn.UserProfile: {
									const n = Object(ss.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(as.a, {
										className: ls.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case zn.UserProfileName:
									return m.a.createElement("div", {
										className: ls.a.defaultIcon
									});
								case zn.Unknown:
									return m.a.createElement("div", {
										className: ls.a.unknownIcon
									});
								case zn.UserProfile: {
									const n = Object(ss.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(as.a, {
										className: ls.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case zn.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement($n.a, {
							name: "caret_down",
							className: ls.a.caretDown
						})), l && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement($n.a, {
							name: "side_menu",
							className: ls.a.pin,
							onClick: d ? void 0 : this.props.onPinSubscriptions
						}), l && m.a.createElement(or, {
							canAutofocus: !0,
							className: ls.a.listContainer,
							currentPage: t,
							onClose: this.close
						}))
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					return m.a.createElement(g.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var cr = rr(Object(p.b)(ar, (e, t) => ({
					closeDropdown: () => e(Object(_.f)()),
					onLocationRefresh: (n, s) => e(Object(Xn.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(_.i)()), e(Object(_.f)())
					},
					openDropdown: () => e(Object(_.g)()),
					toggleDropdown: () => e(Object(_.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(A.c)(ir))),
				lr = n("./src/reddit/components/JumpToContent/index.tsx"),
				dr = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ur = n("./node_modules/history/esm/history.js"),
				mr = n("./node_modules/lodash/isEmpty.js"),
				pr = n.n(mr),
				br = n("./node_modules/lodash/pick.js"),
				hr = n.n(br),
				gr = n("./node_modules/uuid/v4.js"),
				fr = n.n(gr),
				vr = n("./src/lib/hooks/usePrevious.ts"),
				Or = n("./src/lib/makeSearchKey/index.ts"),
				Cr = n("./src/reddit/actions/post.ts"),
				xr = n("./src/reddit/actions/search.ts"),
				yr = n("./src/lib/makeApiRequest/index.ts"),
				Er = n("./src/lib/omitHeaders/index.ts"),
				Pr = n("./src/reddit/constants/headers.ts");
			var jr = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_r = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Sr = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				var r, a;
				const i = await ((e, t) => Object(yr.a)(Object(Er.a)(e, [Pr.a]), {
					endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
					method: O.kb.GET,
					data: {
						query: t
					}
				}))(o(), e);
				if (i.ok && (null === (a = null === (r = i.body) || void 0 === r ? void 0 : r.data) || void 0 === a ? void 0 : a.children)) {
					const n = (e => {
						const t = [],
							n = {};
						return e.forEach(e => {
							const s = e.data,
								o = e.kind;
							o === O.Jb.Subreddit ? (t.push(s.name), n[s.name] = Object(_r.a)(s)) : o === O.Jb.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(jr.a)(s.subreddit, s.name, s.accept_followers))
						}), {
							data: n,
							order: t
						}
					})(i.body.data.children);
					n && n.data && n.order && t(Object(xr.o)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var kr, wr = n("./src/reddit/actions/search/trending.ts"),
				Mr = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Nr = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Ir = n("./src/reddit/constants/parameters.ts"),
				Tr = n("./src/reddit/helpers/clickSourceData/index.ts"),
				Ar = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Rr = n("./src/reddit/helpers/isArrayEqual.ts"),
				Lr = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Dr = n("./src/reddit/helpers/trackers/screenview.ts"),
				Fr = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Ur = n("./src/reddit/hooks/usePageLayer.ts"),
				Gr = n("./src/reddit/models/Search/index.ts"),
				Br = n("./src/reddit/selectors/searchFix.ts"),
				Hr = n("./src/reddit/selectors/searchResults.ts"),
				qr = n("./src/reddit/selectors/trending.ts"),
				Wr = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				Vr = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Qr = n("./src/reddit/controls/Search/index.m.less"),
				Kr = n.n(Qr),
				zr = n("./node_modules/lodash/debounce.js"),
				Jr = n.n(zr),
				Yr = n("./src/reddit/components/Pill/index.tsx"),
				Xr = n("./src/reddit/components/Pill/PillText/index.m.less"),
				Zr = n.n(Xr);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(kr || (kr = {}));
			const $r = {
					[kr.DAY]: Zr.a.pillTextVariantDay,
					[kr.NIGHT]: Zr.a.pillTextVariantNight
				},
				ea = e => m.a.createElement("div", {
					className: Object(v.a)(Zr.a.pillText, $r[e.variant])
				}, e.children);
			var ta = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				na = n.n(ta);
			const sa = Object(f.c)({
					nightmode: at.eb
				}),
				oa = Object(p.b)(sa)(e => {
					let {
						nightmode: t,
						subreddit: n
					} = e;
					return m.a.createElement(Yr.a, {
						"aria-hidden": !0,
						className: na.a.communityPill,
						"data-testid": "community-search-pill"
					}, m.a.createElement(ea, {
						variant: t ? kr.NIGHT : kr.DAY
					}, m.a.createElement(rs.b, {
						className: Kr.a.subredditIcon,
						subredditOrProfile: n
					}), n.displayText))
				});
			var ra = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				aa = n.n(ra);
			const ia = e => {
				let {
					inputRef: t,
					searchQuery: n,
					showCommunityPill: s,
					subreddit: r,
					onChange: a,
					onFormSubmit: i,
					onFocusSearchBar: c,
					onKeyDown: l
				} = e;
				const d = m.a.useContext(g.a),
					u = s && r ? o.fbt._("Search within {subredditName}", [o.fbt._param("subredditName", r.displayText)], {
						hk: "2B6J3t"
					}) : o.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(v.a)(aa.a.searchBar, d && aa.a.searchBarExp),
					method: "get",
					onSubmit: i,
					onFocus: c,
					role: "search"
				}, m.a.createElement("label", {
					className: aa.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: aa.a.iconContainer
				}, m.a.createElement($n.a, {
					name: "search",
					className: aa.a.icon
				})), m.a.createElement(dr.a, {
					"aria-live": "assertive"
				}, u), s && r && m.a.createElement(oa, {
					subreddit: r
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: aa.a.input,
					onChange: Jr()((function() {
						var e;
						a((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
					}), 200),
					onKeyDown: l,
					placeholder: o.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: t,
					type: "search",
					defaultValue: n
				}))
			};

			function ca(e) {
				let {
					className: t
				} = e;
				var n;
				const s = Object(Ur.a)(),
					o = Object(It.Z)(s),
					r = Object(It.W)(s),
					{
						nsfwSessionSetting: a,
						refreshNsfwSessionSettingExpiryTime: i
					} = Object(Nr.b)(),
					[c, l] = Object(u.useState)(-1),
					[d, b] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, C] = Object(u.useState)({}),
					[x, y] = Object(u.useState)([]),
					[E, P] = Object(u.useState)(null),
					j = Object(u.useRef)(null),
					_ = Object(u.useRef)(null),
					S = Object(A.b)(),
					k = Object(p.d)(),
					w = Object(p.e)(xt.b),
					M = Object(p.e)(xt.d),
					N = Object(p.e)(at.l),
					I = Object(p.e)(Hr.q),
					T = Object(p.e)(Hr.p),
					R = Object(p.e)(at.R),
					L = Object(p.e)(Hr.r),
					D = Object(p.e)(at.eb),
					F = Object(p.e)(xt.r),
					U = Object(p.e)(e => Object(It.ab)(e, {
						pageLayer: s
					})),
					G = Object(p.e)(e => Object(It.r)(e, {
						pageLayer: s
					})),
					B = Object(p.e)(e => Object(It.e)(e, {
						pageLayer: s
					})),
					H = Object(p.e)(e => Object(qr.a)(e, Gr.d.dropdown).slice(0, Mr.d)),
					q = Object(p.e)(Hr.x),
					W = Object(p.e)(at.lb),
					V = Object(vr.a)(G),
					Q = Object(vr.a)(o),
					K = Object(vr.a)(q),
					z = Object(vr.a)(H),
					J = ((null === (n = _.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					Y = he(J),
					X = w ? Object(rt.u)(w) : s ? Object(rt.u)(s) : void 0,
					Z = O[J],
					$ = Object(Or.e)({
						...hr()(r || {}, Ir.v),
						q: J
					});
				Object(u.useEffect)(() => {
					ee()
				}, [z, K, q, H]), Object(u.useEffect)(() => {
					V || !G || L || se()
				}, [V, G, L]), Object(u.useEffect)(() => {
					pr()(q) || o ? ce(o || "") : ie()
				}, [Q, o]);
				const ee = () => {
						const e = Object(Rr.a)(K, q),
							t = Object(Rr.a)(z, H);
						if (!e || !t) {
							const e = q.length ? q : [...x, ...H];
							b(e)
						}
					},
					te = e => k(Object(xr.p)({
						searchQuery: e
					})),
					ne = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && Wr.a.clear(Vr.a.Typeahead), k(Object(xr.k)())
					},
					se = () => k(Object(xr.m)()),
					oe = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							k(Object(h.b)(Object(ur.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: F,
							subredditName: M
						})
					},
					re = async () => {
						H.length || g || (f(!0), await (() => k(Object(wr.b)(Gr.d.dropdown)))(), f(!1))
					}, ae = e => {
						R && N && y(Object(jt.Ob)({
							...e,
							section: Gr.c.recent
						}, N.id))
					}, ie = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						l(-1), P(null), ce(""), te(""), e && Wr.a.update(Vr.a.Typeahead), pe()
					};

				function ce(e) {
					_.current && (_.current.value = e)
				}
				const le = (e, t, n, s) => {
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: J
						};
						S(Object(Fr.v)(s, o))
					},
					de = (e, t, n) => {
						S(Object(Fr.x)(e, t, n))
					},
					ue = (e, t, n, s) => {
						S(Object(Fr.z)(e, t, n, s))
					},
					me = e => {
						const t = d[e] || null,
							n = t ? t.searchQuery : "";
						l(e), ce(n), P(t)
					},
					pe = () => {
						if (H.length || re(), N) {
							const e = Object(jt.M)(N.id);
							e.length > 0 && (y(R ? e : []), b([...e, ...H]))
						}
					},
					be = e => {
						!(!T || !T[e]) || (e ? (async e => {
							O[e] || (O[e] = !0, C({
								...O
							}), await k(Sr(e)), O[e] = !1, C({
								...O
							}))
						})(e) : pe())
					};

				function he(e) {
					const t = G && G.icon ? G.icon.url : "",
						n = null == G ? void 0 : G.displayText,
						s = !!G && G.isNSFW,
						o = Gr.b.text;
					return {
						id: fr()(),
						searchQuery: e,
						type: o,
						section: Gr.c.recent,
						subredditOrProfileRestrictedName: n,
						displayInfo: {
							iconUrl: t,
							isNSFW: s
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(v.a)(Kr.a.relativeWrapper, ls.a.container, t, {
						"m-open": I
					}),
					id: Mr.b,
					ref: j
				}, m.a.createElement(ia, {
					inputRef: _,
					onChange: e => {
						const t = e.trim();
						Wr.a.update(Vr.a.Typeahead), te(t), be(t)
					},
					searchQuery: J,
					onFormSubmit: e => {
						e.preventDefault(), J.trim() && (async e => {
							var t, n, o;
							const r = (null === (t = _.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							r !== J && te(r);
							let l, u = {
									...Gr.a
								},
								m = {},
								p = !0;
							if (E && E.searchQuery === J ? ((u = E).id || (u.id = fr()()), u.section === Gr.c.recent ? (m = Object(Tr.c)(Tr.a.SEARCH_DROPDOWN, X, u.isProfile || u.isSubreddit), l = Or.a.Recent, de(r, u, c)) : u.section === Gr.c.typeahead ? (m = Object(Tr.c)(Tr.a.TYPEAHEAD, X), p = !1, ue(r, u, c, d.filter(e => e.isSubreddit))) : u.section === Gr.c.trending ? (m = Object(Tr.c)(Tr.a.TYPEAHEAD, X), l = (null === (n = u.post) || void 0 === n ? void 0 : n.isSponsored) ? Or.a.PromotedTrend : Or.a.Trending, k((e, t) => Object(Lr.u)({
									state: t(),
									trendingSearch: u,
									telemetrySource: Vr.a.Typeahead
								}))) : le(r, r, rt.c.Search, Fr.a.RECENT)) : (u = he(r), S(Object(Fr.o)(rt.a.FullSearchButton, Object(Or.e)({
									q: J
								}), U, Vr.a.Typeahead, s || void 0))), ae(u), ne(p), !u.searchQuery) return;
							const b = Object(Ar.a)({
								subreddit: G,
								multireddit: B,
								searchItem: u,
								searchOptions: {
									source: l
								},
								shouldSearchSubreddit: U,
								includeNsfwResults: W && a
							});
							oe(e, b, m), u.isTypeaheadSuggestion && ie(p), i(), null === (o = _.current) || void 0 === o || o.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(Vo.c)(Vo.a.SearchResults) || Object(Vo.e)(Vo.a.SearchResults), Wr.a.update(Vr.a.Typeahead), S(Object(Fr.o)(rt.a.SearchBar, $, U, Vr.a.Typeahead, s || void 0)), I || ((() => k(Object(xr.l)()))(), S(Object(Dr.u)($, null != s ? s : void 0, Object(Br.b)({
							pageLayer: s
						})))), be(J)
					},
					onKeyDown: e => {
						if (e.key === Wo.b.Escape || e.key === Wo.b.Tab) ne();
						else if (e.key === Wo.b.ArrowDown) {
							if (e.preventDefault(), 0 === d.length || !I) return;
							if (c >= d.length - 1) return;
							me(c + 1)
						} else if (e.key === Wo.b.ArrowUp) {
							if (e.preventDefault(), 0 === d.length || !I) return;
							if (-1 === c) return;
							me(c - 1)
						} else e.key === Wo.b.Backspace && !J && U && L && (S(() => Object(Fr.h)(G)), (() => k(Object(xr.j)()))())
					},
					showCommunityPill: U,
					subreddit: G
				}), m.a.createElement(Mr.c, {
					container: j.current,
					focusedItemIndex: c,
					searchOriginPage: X,
					isOpen: I,
					isTrendingPending: g,
					isTypeaheadPending: Z,
					itemList: d,
					nightmode: D,
					recentSearches: x,
					trendingItems: H,
					searchItem: Y,
					typeaheadSuggestions: q,
					onClearSearchQuery: ie,
					onClose: ne,
					onRemoveRecentSearch: e => {
						N && 0 !== x.length && (Object(jt.bb)(e, N.id), y(x.filter(t => t.searchQuery !== e.searchQuery)), l(-1))
					},
					onSendSearchClickRecentEvent: de,
					onSendSearchClickTypeaheadEvent: ue,
					onSetRecentSearch: ae,
					onUpdateSearchQuery: ce,
					fireAdPixelsOfType: (e, t) => k(Object(Cr.z)(e, t))
				}))
			}
			var la = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				da = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ua = n("./src/reddit/selectors/responsivePage.ts"),
				ma = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				pa = n.n(ma);
			var ba = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(pa.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: pa.a.HomeLink,
						href: G.a.redditUrl
					}, m.a.createElement(la.a, {
						className: pa.a.Snoo
					}), m.a.createElement(da.a, {
						className: pa.a.Wordmark,
						color: "inherit"
					})))
				},
				ha = n("./src/reddit/actions/cooldownTime.ts");

			function ga(e) {
				return `${e}`.padStart(2, "0")
			}
			class fa {
				constructor(e) {
					this.startAt = 0, this.expireAt = 0, this.interval = 1e3, this.timeoutId = 0, this.tick = () => {
						this.startAt += this.interval;
						const e = Date.now() - this.startAt,
							t = this.getRemainingSeconds();
						if (this.callback(t), !t) return this.stop();
						const n = Math.max(0, this.interval - e);
						this.timeoutId = window.setTimeout(this.tick, n)
					}, this.callback = t => e(t || this.getRemainingSeconds())
				}
				stop() {
					window.clearTimeout(this.timeoutId), this.timeoutId = 0
				}
				start(e) {
					this.stop(), this.startAt = Date.now(), this.expireAt = e, this.callback(), this.timeoutId = window.setTimeout(this.tick, this.interval)
				}
				getRemainingSeconds() {
					return Math.max(0, Math.round((this.expireAt - Date.now()) / this.interval))
				}
			}
			var va = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Oa = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Ca = n.n(Oa);
			const xa = Object(f.c)({
				isEmbedSubredditPage: va.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: xt.b
			});
			class ya extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${ga(n)}` : `${n}:${ga(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new fa(this.drawTimer), this.state = {
						countdown: null
					}
				}
				componentDidMount() {
					this.updateTimer()
				}
				componentWillUnmount() {
					this.timer.stop()
				}
				componentDidUpdate(e) {
					let {
						currentPage: t,
						expiresAt: n
					} = e;
					this.props.currentPage === t && this.props.expiresAt === n || this.updateTimer()
				}
				updateTimer() {
					const {
						expiresAt: e
					} = this.props, t = e <= Date.now();
					e && !t ? this.timer.start(e) : this.props.fetchCooldownTimer()
				}
				render() {
					const {
						countdown: e
					} = this.state, {
						isRequestPending: t,
						isEmbedSubredditPage: n
					} = this.props;
					return t && !n ? null : !e || n ? m.a.createElement(Es.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Ca.a.timer
					}, o.fbt._("{Time remaining}", [o.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Ea = Object(p.b)(xa, e => ({
					fetchCooldownTimer: () => e(Object(ha.e)())
				}))(ya),
				Pa = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				ja = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				_a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Sa = n("./src/reddit/hooks/useTracking.ts"),
				ka = n("./src/reddit/icons/svgs/HotPotato/index.tsx");
			var wa = e => m.a.createElement("svg", {
					className: e.className,
					id: "flat",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20",
					fill: "#ff4500"
				}, m.a.createElement("path", {
					fill: "inherit",
					d: "M19.625.375H5.7812V1.8062H2.6089V3.75H.5127V19.625H14.0356V17.6816h2.0962V14.7988H19.625ZM14.8818,16.4316H12.7856V18.375H1.7627V5H3.8589V3.0562H5.7812V14.7988h9.1006Zm3.4932-2.8828H7.0312V1.625H18.375Z"
				}), m.a.createElement("path", {
					fill: "inherit",
					d: "M9.83,8.6869h.8086a2.5968,2.5968,0,0,0,1.2324-.2827,2.0363,2.0363,0,0,0,.8281-.7906,2.2972,2.2972,0,0,0,.2935-1.1709,2.1873,2.1873,0,0,0-.2872-1.1347,1.8957,1.8957,0,0,0-.8281-.749,2.9046,2.9046,0,0,0-1.2788-.2627H8.3815V10.807H9.83Zm0-3.1006h.68a1.1725,1.1725,0,0,1,.78.2427.8044.8044,0,0,1,.2852.6582.9157.9157,0,0,1-.124.4746.86.86,0,0,1-.3531.3291,1.1443,1.1443,0,0,1-.5346.12H9.83Z"
				}), m.a.createElement("path", {
					fill: "inherit",
					d: "M15.5881,9.7269a.6642.6642,0,0,1-.2827.0552.8486.8486,0,0,1-.5079-.1655,1.1369,1.1369,0,0,1-.3491-.3911l-1.122.4682a1.785,1.785,0,0,0,.4487.6143,2.18,2.18,0,0,0,.6909.4194,2.2847,2.2847,0,0,0,.8218.15,2.1,2.1,0,0,0,.8945-.19,1.5993,1.5993,0,0,0,.6494-.5323,1.325,1.325,0,0,0,.2407-.78,1.1177,1.1177,0,0,0-.2407-.7422,1.5127,1.5127,0,0,0-.519-.4151,3.6685,3.6685,0,0,0-.5923-.2119c-.2207-.0591-.3936-.11-.5186-.1548a1.0759,1.0759,0,0,1-.3159-.1679.3052.3052,0,0,1-.1284-.2471.3264.3264,0,0,1,.1392-.2671.547.547,0,0,1,.3466-.1084.6423.6423,0,0,1,.4156.1348,1.09,1.09,0,0,1,.2558.28l1.0694-.45a1.4624,1.4624,0,0,0-.3843-.53,1.9609,1.9609,0,0,0-.6294-.3755,2.1994,2.1994,0,0,0-.78-.1367,2.0044,2.0044,0,0,0-.8682.1831,1.4665,1.4665,0,0,0-.6069.5146,1.3217,1.3217,0,0,0-.2212.751,1.1947,1.1947,0,0,0,.3491.8857,2.0947,2.0947,0,0,0,.9322.51c.0146.0029.0556.0151.1235.0356a3.8108,3.8108,0,0,1,.669.2208q.2584.1192.2587.3178a.318.318,0,0,1-.06.1812A.4179.4179,0,0,1,15.5881,9.7269Z"
				})),
				Ma = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Na = e => {
				return Object(Ma.c)(e, {
					experimentEligibilitySelector: Ma.a,
					experimentName: Nt.Je
				}) === Nt.wd
			};
			var Ia = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Ta = n.n(Ia),
				Aa = m.a.memo((function(e) {
					const t = Object(Sa.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(rt.n)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(rt.n)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Ms.a)(ws.c[ws.b.Rpan])), t(e => ({
								...Object(rt.n)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(ja.b)())
						}, [t]),
						c = Object(p.e)(at.R),
						l = Object(p.e)(bs.a),
						d = Object(p.e)(Na),
						b = Object(p.e)(va.a),
						h = Object(p.e)(va.b),
						g = Object(_a.a)(),
						f = Object(_a.a)(),
						O = Object(_a.a)(),
						C = Object(_a.a)(),
						x = Object(_a.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(Ta.a.container, e.className)
					}, m.a.createElement("div", {
						className: Ta.a.row
					}, m.a.createElement(Yn.a, {
						className: Ta.a.icon,
						innerRef: g.target.ref,
						to: c ? ws.c[ws.b.Popular] : ws.c[ws.b.Home],
						onClick: s,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement($n.a, {
						name: "popular"
					})), m.a.createElement(Pa.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(Yn.a, {
						className: Ta.a.icon,
						innerRef: f.target.ref,
						to: ws.c[ws.b.All],
						onClick: r,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement($n.a, {
						name: "all"
					})), m.a.createElement(Pa.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), l && m.a.createElement(m.a.Fragment, null, m.a.createElement(Yn.a, {
						className: Ta.a.icon,
						innerRef: O.target.ref,
						to: ws.c[ws.b.Rpan],
						onClick: a,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement($n.a, {
						name: "video_live"
					})), m.a.createElement(Pa.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(Yn.a, {
						className: Ta.a.icon,
						innerRef: C.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: C.show,
						onMouseLeave: C.hide
					}, m.a.createElement(wa, {
						className: Ta.a.psBattlesIcon
					})), m.a.createElement(Pa.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, o.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(Yn.a, {
						className: Object(v.a)(Ta.a.icon, Ta.a.hotPotatoLink),
						innerRef: x.target.ref,
						to: `/r/${h}`,
						onMouseEnter: x.show,
						onMouseLeave: x.hide,
						onClick: i
					}, m.a.createElement(ka.a, {
						className: Ta.a.hotPotatoIcon
					}), m.a.createElement(Ea, null)), m.a.createElement(Pa.a, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible
					}, o.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					})))))
				})),
				Ra = n("./src/reddit/actions/tooltip.ts"),
				La = n("./src/lib/combineRefs/index.tsx"),
				Da = n("./src/lib/hooks/useOnClickOutside.ts"),
				Fa = n("./src/lib/hooks/useTooltip.ts"),
				Ua = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Ga = n.n(Ua);

			function Ba() {
				return (Ba = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ha = I.a.button("Button", Ga.a),
				qa = I.a.div("Container", Ga.a);

			function Wa(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(Ha, Ba({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(qa, {
					className: Object(v.a)({
						[Ga.a.isOpen]: n
					})
				}, t))
			}
			var Va = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				Qa = n.n(Va);
			var Ka = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Es.a, {
					isActive: !!e.unreadCount || !!e.showEmpty,
					unreadCount: e.unreadCount,
					showEmpty: !!e.showEmpty && !e.unreadCount
				}), m.a.createElement($n.a, {
					name: "notification",
					className: Qa.a.icon2020
				})),
				za = n("./src/lib/getParsedUserAgent/index.ts"),
				Ja = n("./src/reddit/components/InboxBanner/index.m.less"),
				Ya = n.n(Ja);
			var Xa = Object(Re.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(za.b)(navigator.userAgent);
					return m.a.createElement(De.e, null, m.a.createElement(De.i, {
						className: Ya.a.modalHeader
					}, m.a.createElement(De.q, {
						className: Ya.a.modalTitle
					}, o.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Ze.t, {
						onClick: t,
						Icon: Object($n.b)("close_fill"),
						size: Ze.d.XXS,
						priority: Ze.c.Plain,
						className: Ya.a.modalCloseIcon
					})), m.a.createElement(De.l, null, m.a.createElement("ul", {
						className: Ya.a.modalList
					}, m.a.createElement("li", {
						className: Ya.a.modalListItem
					}, m.a.createElement("span", null, "1"), o.fbt._("Click on {lockIcon} in your browser address bar", [o.fbt._param("lockIcon", m.a.createElement($n.a, {
						name: "lock_fill",
						className: Ya.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: Ya.a.modalListItem
					}, m.a.createElement("span", null, "2"), o.fbt._("Select {lockIcon} site settings", [o.fbt._param("lockIcon", m.a.createElement($n.a, {
						name: "settings_fill",
						className: Ya.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: Ya.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), o.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [o.fbt._param("lockIcon", m.a.createElement($n.a, {
						name: "notification_fill",
						className: Ya.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(De.g, null, m.a.createElement(Ze.t, {
						text: o.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				Za = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				$a = n.n(Za);

			function ei() {
				return (ei = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ti = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, o] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, o(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), o(!1)
						}
					}, [t]), t ? m.a.createElement("div", ei({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)($a.a.tooltip, {
							[$a.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				ni = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				si = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			var oi = n("./node_modules/icepick/icepick.js");
			const ri = Object(oi.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var ai = n("./src/reddit/selectors/activeModal.ts"),
				ii = n("./src/reddit/selectors/experiments/notifications.ts"),
				ci = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				li = n.n(ci);
			const di = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				ui = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(_a.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(Fa.a)(e);
								return Object(oi.updateIn)(t, ["modifiers"], e => Object(oi.push)(e, ri))
							}, [e]);
							return Object(Fa.b)(t)
						}(),
						r = Object(Fa.b)(di),
						[a, i] = Object(si.a)(e.userId),
						[c, l] = function(e) {
							const [t, n] = Object(u.useState)(Object(jt.t)(e));
							return [t, Object(u.useCallback)(() => {
								n(!0), Object(jt.tb)(e)
							}, [])]
						}(e.userId),
						d = Object(p.e)(Object(ai.c)("browser_notifications_permission_settings")),
						b = Object(p.e)(Object(at.K)(3 * O.C)),
						h = Object(p.e)(ii.i),
						g = !c && b && h,
						f = Object(u.useCallback)(() => {
							s.hide(), n.hide(), a || i(), c || l()
						}, [s, n, i, a, c, l]);
					Object(Da.a)("INBOX--TOOLTIP", f);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(La.a)(n.target.ref, s.target.ref, r.target.ref)
					}, m.a.createElement(Wa, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: li.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? f() : s.show(), e.sendNavClickInbox()
						},
						isOpen: s.visible
					}, m.a.createElement(Ka, {
						unreadCount: e.unreadCount,
						showEmpty: g
					})), !s.visible && !r.visible && m.a.createElement(Pa.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(ti, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(ni.a, {
						isOpen: s.visible,
						hideTooltip: f,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), d && m.a.createElement(Xa, {
						onClose: () => {
							t(Object(_e.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var mi = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				pi = n("./src/reddit/actions/snoovatarModal.ts"),
				bi = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				hi = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				gi = n("./src/lib/initializeClient/installReducer.ts"),
				fi = n("./src/lib/safeJSONParse/index.ts"),
				vi = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(gi.a)({
				features: {
					avatar: vi.a
				}
			});
			const Oi = e => 864e5 * e,
				Ci = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				xi = e => {
					const t = Object(xt.q)(e);
					return Boolean((null == t ? void 0 : t[Ir.w]) && Object(fi.a)(t[Ir.w]))
				},
				yi = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(at.l)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Ei(e, t) && n === o
				},
				Ei = (e, t) => {
					const n = Object(at.l)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Oi(t)
				};
			var Pi = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				ji = n.n(Pi);
			const {
				fbt: _i
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Si(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(jt.y)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(jt.jb)(s)
				}
			}
			var ki = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(p.e)(Ci),
						s = Object(p.d)(),
						o = Object(Sa.a)();
					Object(u.useEffect)(() => {
						o(Object(bi.o)())
					}, [o]), Object(u.useEffect)(() => {
						n || s(Object(mi.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Si(n)
					}, [n]);
					return m.a.createElement(Ze.k, {
						onClick: () => {
							o(Object(bi.c)()), Si(n, "click"), s(Object(pi.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: ji.a.ctaContainer
					}, m.a.createElement("img", {
						className: ji.a.quickCreateGiftAnimation,
						src: `${G.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: _i._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(hi.a, {
						className: Object(v.a)(ji.a.sparkle, ji.a.sparkle1)
					}), m.a.createElement(hi.a, {
						className: Object(v.a)(ji.a.sparkle, ji.a.sparkle2)
					}), m.a.createElement(hi.a, {
						className: Object(v.a)(ji.a.sparkle, ji.a.sparkle3)
					})), _i._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				wi = n("./src/lib/matchRoute/index.ts"),
				Mi = n("./src/chat/helpers/dom.ts"),
				Ni = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				Ii = n("./src/reddit/actions/changeUsername.ts"),
				Ti = n("./src/reddit/actions/chat/toggle.ts"),
				Ai = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Ri = n("./src/reddit/actions/postCreation/general.ts"),
				Li = n("./src/reddit/actions/preferences.ts"),
				Di = n("./src/reddit/actions/users.ts"),
				Fi = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Ui = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				Gi = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Bi = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Hi = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				qi = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				Wi = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Vi = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Qi = n.n(Vi);
			class Ki extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = e => {
						e.stopPropagation(), this.props.sendEvent(Object(qi.e)(qi.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(qi.c)(qi.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(qi.e)(qi.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Ki.shouldSendViewEvent && (Ki.shouldSendViewEvent = !1, this.props.sendEvent(Object(qi.g)(qi.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: Qi.a.container
					}, m.a.createElement("div", {
						className: Qi.a.topLine
					}), m.a.createElement("button", {
						className: Qi.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Wi.a, {
						className: Qi.a.closeIcon
					})), m.a.createElement("h5", {
						className: Qi.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: Qi.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: Qi.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: Qi.a.buttonWrapper
					}, m.a.createElement(Ze.o, {
						className: Qi.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ze.l, {
						className: Object(v.a)(Qi.a.commonBtn, Qi.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			Ki.shouldSendViewEvent = !0;
			const zi = Object(Hi.a)(Ki, [Co.a.Click, Co.a.Keydown, Co.a.Resize]);
			var Ji = Object(A.c)(zi),
				Yi = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Xi = n.n(Yi);
			const Zi = Object(f.c)({
				isLoggedIn: at.R
			});
			class $i extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(Xi.a.IFrame, {
							[Xi.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var ec = Object(p.b)(Zi)($i),
				tc = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var nc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Es.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement($n.a, {
					name: "chat",
					className: Qa.a.icon2020
				})),
				sc = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				oc = n.n(sc);
			const {
				fbt: rc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ac = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: oc.a.container
				}, m.a.createElement("p", {
					className: oc.a.title
				}, rc._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: oc.a.subtitle
				}, rc._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: oc.a.description
				}, rc._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Ze.o, {
					className: oc.a.dismissBtn,
					onClick: t
				}, rc._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var ic = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Es.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement($n.a, {
					name: "message",
					className: Qa.a.icon2020
				})),
				cc = n("./node_modules/lodash/noop.js"),
				lc = n.n(cc),
				dc = n("./src/lib/prettyPrintNumber/index.ts"),
				uc = n("./src/realtime/GQLSubscription/async.tsx"),
				mc = n("./src/reddit/actions/alpha.ts"),
				pc = n("./src/reddit/actions/modMode.ts"),
				bc = n("./src/reddit/actions/profile/index.ts"),
				hc = n("./src/reddit/constants/elementClassNames.ts"),
				gc = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				fc = n("./src/reddit/helpers/karma.ts"),
				vc = n("./src/reddit/hooks/useWindowEvent.ts"),
				Oc = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Cc = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				xc = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				yc = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Ec = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Pc = n("./src/reddit/selectors/modModeEnabled.ts"),
				jc = n("./src/reddit/selectors/seo/index.ts"),
				_c = n("./src/reddit/selectors/tooltip.ts"),
				Sc = n("./src/higherOrderComponents/asTooltip.tsx"),
				kc = n("./src/reddit/components/HiddenDiv.tsx"),
				wc = n("./src/reddit/controls/Dropdown/index.tsx"),
				Mc = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				Nc = n("./src/reddit/helpers/trackers/user.ts");
			const Ic = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: _o.a.headingContent
					}, m.a.createElement("span", {
						className: _o.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(_o.a.title, s)
					}, n))
				},
				Tc = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(_o.a.button, t),
						onClick: s
					}, m.a.createElement(Ic, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Ac = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Po, {
						className: Object(v.a)(_o.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(Ic, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			var Rc = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Lc = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Dc = n("./src/reddit/selectors/avatarMarketing.ts"),
				Fc = n("./src/reddit/selectors/meta.ts"),
				Uc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Gc = n.n(Uc);
			const Bc = (e, t) => e && m.a.createElement("div", {
				className: Gc.a.marketingBadge
			}, m.a.createElement(Rc.a, {
				className: Gc.a.marketingAsset,
				headshot: e
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(hi.a, {
				className: Object(v.a)(Gc.a.sparkle, Gc.a.sparkle1)
			}), m.a.createElement(hi.a, {
				className: Object(v.a)(Gc.a.sparkle, Gc.a.sparkle2)
			}), m.a.createElement(hi.a, {
				className: Object(v.a)(Gc.a.sparkle, Gc.a.sparkle3)
			}), m.a.createElement(hi.a, {
				className: Object(v.a)(Gc.a.sparkle, Gc.a.sparkle4)
			})));
			var Hc = e => {
				let {
					useNewButtonComponent: t,
					onClick: n
				} = e;
				var s;
				const r = Object(p.d)(),
					a = Object(Sa.a)(),
					i = Object(It.eb)(),
					c = Object(p.e)(e => e.user.account),
					l = Object(p.e)(ns.c),
					d = Object(p.e)(Rs.b),
					u = Object(p.e)(Dc.b),
					b = Object(p.e)(Dc.a),
					h = () => r(Object(pi.b)({
						clickSource: "nav"
					})),
					g = Object(p.e)(Fc.i).startsWith("en");
				if ((null === (s = null == i ? void 0 : i.meta) || void 0 === s ? void 0 : s.name) === O.Ob.AVATAR) return null;
				!u && d && r(Object(mi.a)()), b && a(bi.m);
				const f = c && c.snoovatarFullBodyAsset ? o.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : o.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (t) {
					const e = m.a.createElement(m.a.Fragment, null, f, g && Bc(b, l));
					return m.a.createElement(Ao, {
						onClick: () => {
							h(), "function" == typeof n && n()
						},
						title: e,
						titleClassName: Gc.a.avatarLinkBody
					})
				}
				const v = Object(Lc.b)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? fl("avatar_style") : fl("add"), ((e, t, n, s) => o => m.a.createElement("div", {
					className: `${Gc.a.avatarLinkBody} ${o.className}`
				}, e, s && Bc(t, n)))(f, b, l, g));
				return m.a.createElement(v, {
					onClick: h
				})
			};
			var qc = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(v.a)(_o.a.heading, ko.a.category)
					}, m.a.createElement("span", {
						className: _o.a.headingContent
					}, m.a.createElement("span", {
						className: _o.a.iconContainer
					}, s), m.a.createElement("span", {
						className: _o.a.title
					}, t))), m.a.createElement("div", {
						className: _o.a.contentContainer
					}, n))
				},
				Wc = n("./src/reddit/helpers/trackers/modTools.ts");
			const Vc = () => {
					const e = Object(p.d)(),
						t = Object(Sa.a)(),
						n = Object(p.e)(at.eb);
					return m.a.createElement(Do, {
						isEnabled: n,
						onClick: () => {
							t(Object(Nc.g)(n)), (t => e(Object(Li.z)(t)))(!n)
						},
						title: o.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Qc = () => {
					const e = Object(p.d)(),
						t = Object(Sa.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Pc.a);
					return n && n.isMod ? m.a.createElement(Do, {
						isEnabled: s,
						onClick: () => {
							t(Object(Wc.i)(!s)), (() => e(Object(pc.b)()))()
						},
						title: o.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var Kc = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				zc = n.n(Kc);
			const Jc = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(at.l),
						s = Object(p.e)(at.W);
					return n ? m.a.createElement(qc, {
						icon: m.a.createElement($n.a, {
							name: "profile"
						}),
						title: o.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Do, {
						title: o.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(Nc.h)(!s)), (t => e(Object(Li.I)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(Ro, {
						title: o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Uo.c)("profile"))
					}), m.a.createElement(Hc, {
						onClick: () => e(Object(Ra.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Ro, {
						title: o.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Uo.c)("settings"))
					})) : null
				},
				Yc = () => {
					return Object(p.e)(at.l) ? m.a.createElement(qc, {
						title: o.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement($n.a, {
							name: "views"
						})
					}, m.a.createElement(Qc, null), m.a.createElement(Vc, null)) : null
				},
				Xc = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(p.e)(at.l) ? null : m.a.createElement(Mo, {
						icon: m.a.createElement($n.a, {
							name: "settings"
						}),
						title: o.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Vc, null))
				},
				Zc = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: s,
						useClassicUserMenuStyles: r = !1
					} = e;
					return m.a.createElement(Mo, {
						buttonClassName: r ? zc.a.button : "",
						headingClassName: r ? zc.a.headingContent : "",
						icon: m.a.createElement($n.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: r,
						onClick: (e, t) => {
							s(Object(Uo.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: o.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Ro, {
						className: r ? zc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => s(Object(Uo.c)("user_agreement")),
						title: o.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Ro, {
						className: r ? zc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => s(Object(Uo.c)("privacy_policy")),
						title: o.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Ro, {
						className: r ? zc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => s(Object(Uo.c)("content_policy")),
						title: o.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Ro, {
						className: r ? zc.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => s(Object(Uo.c)("mod_policy")),
						title: o.fbt._("Moderator Guidelines", null, {
							hk: "2AfPVY"
						})
					}))
				};
			var $c = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts");
			var el = e => {
				let {
					isAdsDropdownCtaEnabled: t,
					isLoggedIn: n
				} = e;
				return [{
					noun: "ios",
					rel: "nofollow",
					title: () => o.fbt._("Reddit iOS", null, {
						hk: "2W8O9q"
					}),
					url: "https://reddit.onelink.me/MRHZ/b3d845e"
				}, {
					noun: "android",
					rel: "nofollow",
					title: () => o.fbt._("Reddit Android", null, {
						hk: "SmUA3"
					}),
					url: "https://reddit.onelink.me/MRHZ/4c212f61"
				}, {
					noun: "rereddit",
					title: () => o.fbt._("Rereddit", null, {
						hk: "1DyKwo"
					}),
					url: Object($c.a)()
				}, {
					noun: "communities",
					title: () => o.fbt._("Communities", null, {
						hk: "9RIu9"
					}),
					url: "/subreddits/a-1/"
				}, {
					noun: "about_reddit",
					title: () => o.fbt._("About Reddit", null, {
						hk: "3cosfA"
					}),
					url: "https://www.redditinc.com"
				}, {
					isHidden: t,
					noun: "advertise",
					title: () => o.fbt._("Advertise", null, {
						hk: "3eP3Lb"
					}),
					url: n ? "https://www.redditinc.com/advertising" : "https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F%3Futm_source%3Dd2x_consumer%26utm_name%3Duser_menu_cta&referrer=https%3A%2F%2Fads.reddit.com%2F%3Futm_source%3Dd2x_consumer%26utm_name%3Duser_menu_cta&utm_source=d2x_consumer&utm_name=user_menu_cta"
				}, {
					noun: "blog",
					title: () => o.fbt._("Blog", null, {
						hk: "2PoxW5"
					}),
					url: "https://redditblog.com"
				}, {
					noun: "careers",
					title: () => o.fbt._("Careers", null, {
						hk: "g9gZP"
					}),
					url: "https://www.redditinc.com/careers"
				}, {
					noun: "press",
					title: () => o.fbt._("Press", null, {
						hk: "10XBDT"
					}),
					url: "https://www.redditinc.com/press"
				}]
			};
			var tl = e => {
					let {
						isAdsDropdownCtaEnabled: t,
						isLoggedIn: n,
						isOpen: s,
						onClick: r,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(Mo, {
						icon: m.a.createElement($n.a, {
							name: "info"
						}),
						title: o.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: s,
						onClick: (e, t) => {
							a(Object(Uo.c)(t ? "more_chevron" : "more_menu")), "function" == typeof r && r(e)
						}
					}, el({
						isAdsDropdownCtaEnabled: t,
						isLoggedIn: n
					}).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: o,
							title: r,
							url: a
						} = e;
						return !n && m.a.createElement(Ro, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(Uo.c)(s))
							},
							rel: o,
							title: r()
						})
					})(e, a)), n ? m.a.createElement(Ro, {
						href: "https://old.reddit.com" + i,
						title: o.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(Uo.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: rt.Y(e),
								subreddit: rt.gb(e)
							}))
						}
					}) : null)
				},
				nl = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				sl = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				ol = n.n(sl);
			var rl = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: s,
					showAll: r
				}, a] = Object(u.useState)({
					links: Object(nl.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: s,
							showAll: !1
						})
					}, [s, t]), 0 === s.length) return null;
				const i = r ? s : s.slice(0, 3),
					c = () => a({
						links: s,
						showAll: !r
					});
				return m.a.createElement(Mo, {
					"aria-hidden": !0,
					icon: m.a.createElement($n.a, {
						name: "history"
					}),
					isOpen: t,
					title: o.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Lo, {
						className: ol.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : ol.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: ol.a.title
					})
				}), s.length > 3 && (e => m.a.createElement("span", {
					className: _o.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(v.a)(_o.a.headingContent, ol.a.headingContent)
				}, m.a.createElement("span", {
					className: _o.a.title
				}, e))))(r ? o.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : o.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function al() {
				return (al = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const il = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				cl = e => {
					const t = e && e.coins || 0;
					return o.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [o.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var ll;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(ll || (ll = {}));
			var dl = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isAdsDropdownCtaEnabled: s,
						logoutUser: r,
						onClick: a,
						openCommunityCreationModal: i,
						sendEvent: c,
						shouldShowCreateCommunityItem: l,
						url: d,
						user: p
					} = e, [b, h] = Object(u.useState)(ll.TermsAndPolicies), g = e => () => {
						h(b === e ? null : e)
					}, f = e => ({
						onClick: g(e),
						isOpen: b === e
					}), v = !!p, O = () => {
						t(), n()
					}, C = () => s ? m.a.createElement(Ac, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "campaign"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => c(Object(Nc.b)()),
						title: o.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					}) : null;
					return m.a.createElement("div", {
						onClick: il
					}, m.a.createElement(Jc, null), m.a.createElement(Yc, null), m.a.createElement(() => l ? m.a.createElement(Tc, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "community"
						}),
						onClick: () => {
							i(), c(Object(Mc.a)()), a()
						},
						title: o.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), v && m.a.createElement(C, null), m.a.createElement(() => m.a.createElement(Ac, {
						className: ko.a.coinsLink,
						icon: m.a.createElement($n.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, o.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: ko.a.meta
						}, cl(p))),
						onClick: () => {
							Object(Vo.e)(Vo.a.GoldPayment, !0), e.sendEvent(Object(Nc.d)())
						},
						titleClassName: ko.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(Ac, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Vo.e)(Vo.a.GoldPayment, !0), e.sendEvent(Object(Nc.f)())
						},
						title: o.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Ac, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "powerup"
						}),
						href: Is.a,
						onClick: () => {
							Object(Vo.e)(Vo.a.GoldPayment, !0), e.sendEvent(Object(Nc.e)())
						},
						title: o.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(Ac, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "live"
						}),
						href: As.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: o.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !v && m.a.createElement(rl, f(ll.RecentCommunitiesMenu)), m.a.createElement(qo, al({}, f(ll.ExploreMenu), {
						sendEvent: c
					})), m.a.createElement(Xc, f(ll.Settings)), !v && m.a.createElement(C, null), m.a.createElement(() => m.a.createElement(Ac, {
						className: ko.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement($n.a, {
							name: "help"
						}),
						title: o.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(tl, al({}, f(ll.MoreMenu), {
						isAdsDropdownCtaEnabled: s,
						isLoggedIn: v,
						url: d,
						sendEvent: c
					})), m.a.createElement(Zc, al({}, f(ll.TermsAndPolicies), {
						sendEvent: c
					})), m.a.createElement(() => v ? m.a.createElement(Tc, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), r()
						},
						title: o.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Tc, {
						className: ko.a.button,
						icon: m.a.createElement($n.a, {
							name: "profile"
						}),
						onClick: O,
						title: o.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: _o.a.copyrightContainer
					}, m.a.createElement("span", {
						className: _o.a.copyrightText
					}, o.fbt._("© {year} Reddit, Inc. All rights reserved", [o.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				ul = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ml = n.n(ul);
			const pl = I.a.wrapped(wc.a, "Dropdown", ml.a),
				bl = Object(Sc.a)(pl);
			var hl = Object(A.c)(e => {
				const {
					isCrawler: t,
					requestAwardKarma: n,
					user: s
				} = e, o = s && s.id;
				return Object(u.useEffect)(() => {
					n()
				}, [o]), t ? m.a.createElement(kc.a, null, m.a.createElement(dl, e)) : m.a.createElement(bl, {
					className: ml.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(dl, e))
			});

			function gl() {
				return (gl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fl = e => t => m.a.createElement($n.a, gl({
					name: e
				}, t)),
				vl = Object(p.b)(() => Object(f.c)({
					isAdsDropdownCtaEnabled: Rs.a,
					isCrawler: e => !!Object(jc.a)(e),
					isModModeEnabled: Pc.a,
					isOpen: Object(_c.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Ec.d,
					shouldShowCreateCommunityItem: at.qb,
					navbarLikeMweb: yc.a,
					nightmode: at.eb,
					showPresence: at.W,
					url: xt.u
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(Ra.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(Li.z)(t)),
					toggleShowPresence: t => e(Object(Li.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(mc.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: G.a.cookieDomain
						}), e(Object(mc.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(bc.f)(Object(nt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(ys.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(gc.a)())), e(Object(Di.q)())
					},
					toggleModMode: () => e(Object(pc.b)()),
					openCommunityCreationModal: () => e(Object(_e.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Ol = Object(It.u)({
					pageLayer: e => e
				})(vl(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: s,
						user: r
					} = e, a = Object(p.e)(Ec.b), [i, c] = Object(u.useState)(!1), l = r && r.id;
					Object(u.useEffect)(() => {
						n()
					}, [l]);
					const d = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: l
								}
							}
						}), [l]),
						b = Object(u.useCallback)(() => {
							c("visible" === document.visibilityState)
						}, []);
					return Object(vc.a)("visibilitychange", b), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(v.a)(ml.a.container, hc.e)
					}, s && i && a && m.a.createElement(uc.a, {
						variables: d,
						onData: lc.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(xc.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, ml.a.inlineButton, {
							[ml.a.dropdownOpen]: e.isOpen,
							[ml.a.isLoggedOut]: !r,
							[ml.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: ml.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(v.a)(ml.a.accountWrapper, ml.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(is.a, {
						className: Object(v.a)(ml.a.imgIcon, {
							[ml.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: ml.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && s
					}), m.a.createElement("span", {
						className: ml.a.accountDetails
					}, m.a.createElement("span", {
						className: ml.a.username
					}, n.displayText, n.isGold && m.a.createElement(Cc.a, {
						className: ml.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: ml.a.accountKarma
					}, m.a.createElement($n.a, {
						name: "karma",
						isFilled: !0,
						className: ml.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(fc.a)(e),
							n = Object(dc.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: ml.a.accountCoins
					}, m.a.createElement(Oc.a, {
						className: ml.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(dc.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(ml.a.accountWrapper, ml.a.isLoggedOut)
					}, m.a.createElement($n.a, {
						name: "user",
						className: ml.a.defaultProfileIcon
					})))(e.user), m.a.createElement($n.a, {
						className: ml.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(dr.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(hl, e))
				})),
				Cl = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				xl = n("./src/reddit/components/Settings/modalIds.ts"),
				yl = n("./src/reddit/helpers/trackers/inbox.ts"),
				El = n("./src/reddit/routes/index.ts"),
				Pl = n("./src/reddit/selectors/appBadges.ts"),
				jl = n("./src/reddit/selectors/emailVerification.ts"),
				_l = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Sl = n("./src/reddit/selectors/sso.ts");
			const kl = Object(f.a)(e => Object(Ma.c)(e, {
				experimentEligibilitySelector: Ma.a,
				experimentName: Nt.Kf
			}), e => e === Nt.wd);
			var wl = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Ml = n.n(wl);
			var Nl = Object(A.c)(e => {
				let {
					className: t,
					sendEvent: n
				} = e;
				const s = Object(p.e)(kl),
					r = Object(p.e)(at.eb),
					a = Object(_a.a)(),
					i = o.fbt._("Advertise", null, {
						hk: "bW02l"
					});
				return s ? m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Object(v.a)(t, Ml.a.container, {
						[Ml.a.isNightMode]: r
					})
				}, m.a.createElement("a", {
					className: Ml.a.link,
					ref: a.target.ref,
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						n(Object(Nc.c)())
					},
					onMouseEnter: a.show,
					onMouseLeave: a.hide,
					"aria-label": i
				}, m.a.createElement($n.a, {
					className: Ml.a.icon,
					name: "campaign"
				}))), m.a.createElement(Pa.a, {
					arrowProps: a.arrowProps,
					popperProps: a.popperProps,
					visible: a.visible
				}, i)) : null
			});
			const Il = "change-username-tooltip-id",
				Tl = "email-verification-tooltip-id",
				Al = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const s = Object(_a.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Qa.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement(Wa, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Cl.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Es.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement($n.a, {
						className: Qa.a.icon2020,
						name: "mod"
					})), m.a.createElement(Pa.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Cl.b, {
						className: Qa.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				Rl = m.a.memo((function(e) {
					const t = Object(_a.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Qa.a.iconWrapper,
						onMouseEnter: () => {
							t.show()
						},
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: Qa.a.link,
						href: `${G.a.redditUrl}/chat`,
						onClick: Object(Mi.a)(e.onClickChat)
					}, m.a.createElement(nc, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Pa.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Ll = m.a.memo((function(e) {
					let {
						onClickMail: t,
						unreadNotifications: n
					} = e;
					const s = Object(_a.a)();
					return m.a.createElement("span", {
						className: Qa.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement("a", {
						className: Qa.a.link,
						href: n && n.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: t
					}, m.a.createElement(ic, {
						unreadCount: n && n.inboxCount || 0
					})), m.a.createElement(Pa.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Dl = m.a.memo((function(e) {
					const t = Object(_a.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Qa.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: Qa.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement($n.a, {
						className: Qa.a.icon2020,
						name: "add"
					}))), m.a.createElement(Pa.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Fl = Object(It.u)({
					pageLayer: e => e
				}),
				Ul = Object(f.c)({
					activeDropdownId: _c.a,
					appBadges: Pl.b,
					chatDirectMessagesCount: Pl.e,
					email: at.o,
					hasUnreadChatMessages: Pl.f,
					inboxBadgeCount: Pl.g,
					isAvatarQuickCreateEnabled: e => Object(Rs.e)(e) && (e => {
						if (xi(e)) return !0;
						const t = Ci(e),
							n = (new Date).getTime(),
							s = Object(jt.y)();
						if (!(null == t ? void 0 : t.active) || !yi(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + Oi(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: _l.c,
					isInboxRedesignActive: Ls.b,
					isModerator: ot.k,
					isNameEditable: at.T,
					isResponsiveSettingsEnabled: At.a,
					shouldOpenEmailVerificationTooltip: jl.a,
					shouldShowChangeUsernameModals: Sl.c,
					unreadNotifications: at.zb
				}),
				Gl = Object(p.b)(Ul, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Ii.d)()),
					closeEmailVerificationTooltip: () => e(Object(Ai.b)()),
					showEmailVerficiationTooltip: () => e(Object(Ai.b)()),
					fetchAppBadges: () => e(Object(Ni.c)()),
					onChatClick: () => e(Object(Ti.f)()),
					onDismissCustomizeFlyout: () => e(Object(Li.u)()),
					onOpenModerationDropdown: () => {
						e(Object(Ra.h)({
							tooltipId: Cl.a
						})), e(Object(xo.q)())
					},
					onOpenUserDropdown: () => e(Object(Ra.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(_e.h)(xl.b))
					},
					openKeepUsernameModal: () => {
						e(Object(_e.h)(xl.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(Ai.b)()), e(Object(_e.i)(xl.a))
					},
					resendEmail: () => e(Object(Di.x)(qi.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Ri.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(Ii.f)(n))
					}
				}));
			class Bl extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(yl.y)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Uo.c)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.props.sendEvent(Object(Qo.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(wi.a)(e.pathname, El.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Ob.POST_CREATION && n !== O.Ob.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), pr()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: o,
						email: r,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isAvatarQuickCreateEnabled: c,
						isChangeUsernameTooltipShowing: l,
						isCustomizeFlyoutShowing: d,
						isEmailVerificationTooltipShowing: p,
						isGoogleOneTapEnabled: b,
						isInboxRedesignActive: h,
						isModerator: g,
						isNameEditable: f,
						isResponsiveSettingsEnabled: O,
						onDismissCustomizeFlyout: C,
						onOpenUserDropdown: x,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						pageLayer: P,
						resendEmail: j,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: k,
						unreadNotifications: w,
						user: M
					} = this.props, {
						googleOneTapIFrame: N
					} = this.state, I = !(!w || !w.hasUnreadModmail), T = M && Object(nt.e)(M) || "", A = Object(v.a)({
						[Qa.a["m-responsive"]]: O
					});
					return m.a.createElement(et.a, {
						id: Tl,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(et.a, {
						className: Qa.a.headerLinks,
						id: Il
					}, g && m.a.createElement(Al, {
						isModerateIconLit: I,
						moderationDropdownOpen: e === Cl.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: w
					}), M && m.a.createElement(u.Fragment, null, m.a.createElement(Rl, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), h ? m.a.createElement(ui, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == P ? void 0 : P.url,
						userId: M.id,
						isLoggedIn: !!M,
						iconWrapper: Qa.a.iconWrapper
					}) : m.a.createElement(Ll, {
						onClickMail: this.onClickMail,
						unreadNotifications: w
					}), m.a.createElement(Dl, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(Nl, {
						className: Qa.a.iconWrapper
					}), m.a.createElement("span", {
						className: Qa.a.iconWrapper
					}, c ? m.a.createElement(ki, {
						avatarUrlParams: {
							avatarId: "random",
							username: T
						}
					}) : m.a.createElement(tc.a, null)))), m.a.createElement(Ol, {
						className: Qa.a.headerUserDropdown,
						googleOneTapIFrame: N,
						onClick: x,
						user: M,
						sendEventWithName: this.sendEventWithName
					}), b && m.a.createElement("div", {
						className: Qa.a.loggedInGoogleOneTap
					}, m.a.createElement(ec, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && m.a.createElement(ac, {
						onCloseFlyout: C
					}), m.a.createElement(Ji, {
						closeTooltip: o,
						email: r,
						isOpen: _ && p,
						resendEmail: j,
						toggleChangeEmailModal: k,
						tooltipId: Tl
					}), m.a.createElement(Bi, {
						email: r,
						shouldOpenTooltip: _
					}), f && !O && m.a.createElement(u.Fragment, null, m.a.createElement(Gi.a, {
						closeTooltip: s,
						isOpen: l && !S,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						tooltipId: Il,
						username: T
					}), S && m.a.createElement(Ui.a, {
						isResponsiveSettingsEnabled: O,
						overlayClassName: A,
						username: T,
						withOverlay: !0
					}), m.a.createElement(Fi.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Hl = Object(A.c)(Fl(Gl(Bl))),
				ql = n("./src/reddit/helpers/trackers/authControls.ts"),
				Wl = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Vl = n("./src/reddit/components/Header/User/index.m.less"),
				Ql = n.n(Vl);
			const {
				fbt: Kl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), zl = Object(f.c)({
				account: e => e.user.account,
				nsfwBlurSubreddit: Wl.d,
				origin: Fc.j
			}), Jl = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, Ql.a.row)
			}, !e.account && m.a.createElement(Yl, e), m.a.createElement(Hl, {
				className: Object(v.a)({
					[Ql.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), Yl = e => {
				const t = Object(p.e)(Pl.g),
					n = Object(p.e)(at.Gb),
					s = Object(p.e)(Ls.d),
					o = e.pageLayer,
					r = G.a.accountManagerOrigin,
					a = o ? o.url : "/",
					i = o && o.meta && o.meta.name === O.Ob.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a),
					c = !!e.nsfwBlurSubreddit;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(ui, {
					sendNavClickInbox: () => e.sendEvent(Object(yl.y)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Ql.a.iconWrapper
				}), m.a.createElement("div", {
					className: Ql.a.loggedOutRow
				}, m.a.createElement(Nl, {
					className: Ql.a.adSignupIconWrapper
				}), m.a.createElement(Ze.t, {
					kind: Ze.b.ExternalLink,
					priority: Ze.c.Secondary,
					redditStyle: !0,
					className: Ql.a.button,
					href: `${r}/login/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(c), e.sendEvent(Object(ql.a)("nav")))
					}
				}, Kl._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ze.t, {
					kind: Ze.b.ExternalLink,
					priority: Ze.c.Primary,
					redditStyle: !0,
					className: Object(v.a)(Ql.a.separator, Ql.a.button),
					href: `${r}/register/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(c), e.sendEvent(Object(ql.b)("nav")))
					}
				}, Kl._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Xl = Object(It.u)()(Object(p.b)(zl, e => ({
					onOpenLoginModal: t => {
						e(t ? Object(_e.k)({
							actionSource: _e.a.NsfwBlockingModal
						}) : Object(_e.k)({
							actionSource: _e.a.HeaderLogin
						})), e(Object(ys.i)())
					},
					onOpenRegisterModal: t => {
						e(t ? Object(_e.k)({
							actionSource: _e.a.NsfwBlockingModal
						}) : Object(_e.k)({
							actionSource: _e.a.HeaderSignup
						})), e(Object(ys.j)())
					},
					closeUserDropdown: () => e(Object(Ra.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(Jl))),
				Zl = n("./src/reddit/components/Header/index.m.less"),
				$l = n.n(Zl);

			function ed() {
				return (ed = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const td = I.a.header("HeaderDynamicStyles", $l.a),
				nd = Object(f.c)({
					isLoggedIn: at.R,
					isLoggedOutOneFeed: ps.a,
					isNightMode: at.eb,
					isResponsiveSettingsEnabled: At.a,
					isPageResponsive: ua.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				sd = Object(It.u)({
					categoryName: It.c,
					pageLayer: e => e
				}),
				od = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: $l.a.left
					}, m.a.createElement(dr.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(lr.b, null), m.a.createElement(Yn.a, {
						"aria-label": o.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: $l.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(la.a, {
						className: Object(v.a)($l.a.snoo, {
							[$l.a.snooExp]: t
						})
					}), m.a.createElement(da.a, {
						className: $l.a.wordmark
					})), e.children)
				},
				rd = e => m.a.createElement("div", {
					className: $l.a.right
				}, e.children, m.a.createElement(Xl, null)),
				ad = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)($l.a.layout, {
							[$l.a.layoutContainer]: t
						})
					}, m.a.createElement(od, ed({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(cr, null), m.a.createElement(ca, {
						className: $l.a.search
					})), m.a.createElement(rd, null, m.a.createElement(Aa, {
						className: $l.a.quickLinks
					})))
				},
				id = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)($l.a.layout, {
							[$l.a.layoutContainer]: t
						})
					}, m.a.createElement(od, ed({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(cr, null), m.a.createElement("div", {
						className: $l.a.searchContainer
					}, m.a.createElement(ca, {
						className: $l.a.search
					}))), m.a.createElement(rd, null))
				};
			var cd = sd(Object(p.b)(nd, e => ({
					onReloadFrontpage: () => e(Object(Ko.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(g.a);
					return t = e.isLoggedIn ? ad : id, m.a.createElement(td, {
						"data-redditstyle": !0,
						className: Object(v.a)($l.a.container, e.className, {
							[$l.a.bladeIsOpen]: e.isBladeOpen,
							[$l.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(ba, {
						className: $l.a.MwebResponsiveHeader
					}))
				}))),
				ld = n("./src/reddit/components/LightboxHeader/index.tsx"),
				dd = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				ud = (e, t) => {
					let n = `${G.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const md = () => e => ({
					...rt.n(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: pd
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				bd = Object(f.c)({
					isLoggedIn: at.R,
					origin: Fc.j
				});
			class hd extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(j.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(md()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(Ze.m, {
						className: e,
						href: ud(R.a.Register, t),
						onClick: this.onClick
					}, pd._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var gd = Object(p.b)(bd, e => ({
					openRegisterModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.IdCard,
							redirectUrl: ws.c[ws.b.Home]
						})), e(Object(ys.j)())
					}
				}))(Object(A.c)(hd)),
				fd = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				vd = n.n(fd);
			const {
				fbt: Od
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Cd = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(io, {
						className: vd.a.createTitle
					}, Od._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: vd.a.createDesc
					}, Od._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(gd, {
						className: vd.a.createButton
					}))
				},
				xd = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				yd = n.n(xd);
			const {
				fbt: Ed
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pd = Object(f.c)({
				currentPage: fs,
				isLoggedOutOneFeed: ps.a
			}), jd = Object(p.b)(Pd, e => ({
				onUnpinSubscriptions: () => e(Object(_.j)())
			})), _d = Object(It.u)();
			var Sd = I.a.wrapped(_d(jd(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: yd.a.title
				}, m.a.createElement(io, {
					className: yd.a.listHeader
				}, Ed._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: yd.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement($n.a, {
					name: "close",
					className: yd.a.icon
				}))), m.a.createElement(sr, {
					className: Object(v.a)({
						[yd.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage
				}), e.isLoggedOutOneFeed && m.a.createElement(Cd, {
					className: yd.a.createAccountSection
				})))), "Component", yd.a),
				kd = n("./src/reddit/components/Survey/index.tsx"),
				wd = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Md = n("./src/reddit/actions/toaster.ts");
			const Nd = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Id = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...rt.d(t),
						reason: "primary"
					}
				}),
				Td = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...rt.d(t),
						reason: "secondary"
					}
				});
			var Ad = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Rd = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Ld = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Dd = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Fd = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Ud = n("./src/reddit/models/Toast/index.ts"),
				Gd = n("./src/reddit/selectors/structuredStyles.ts"),
				Bd = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Hd = n.n(Bd);

			function qd() {
				return (qd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Wd = e => {
				const t = Io.a;
				switch (e.kind) {
					case Ud.b.Error:
					case Ud.b.AuthError:
					case Ud.b.SuccessEndBroadcast:
						return t.warning;
					case Ud.b.SuccessCommunity:
						return t.op;
					case Ud.b.SuccessCommunityGreen:
					case Ud.b.SuccessMod:
					case Ud.b.SuccessUnlockComment:
						return t.approved;
					case Ud.b.SuccessLockComment:
						return t.reported;
					case Ud.b.EuCookiePolicy:
					case Ud.b.UappBanner:
					case Ud.b.Undo:
					default:
						return t.op
				}
			};
			class Vd extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return m.a.createElement("div", n)
				}
			}
			const Qd = I.a.wrapped(Vd, "PlainBread", Hd.a);
			var Kd = e => m.a.createElement(Qd, qd({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Wd(e)
					}
				})),
				zd = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Jd = n.n(zd);
			const Yd = I.a.span("Text", Jd.a);
			var Xd = n("./src/reddit/components/Toaster/index.m.less"),
				Zd = n.n(Xd);
			const {
				fbt: $d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), eu = I.a.wrapped(Ld.a, "AuthErrorToastIcon", Zd.a), tu = I.a.wrapped(Ze.l, "AuthErrorToastPrimaryButton", Zd.a);
			class nu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Kd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(eu, null), m.a.createElement(Yd, null, $d._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(tu, {
						type: "submit"
					}, $d._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var su = nu,
				ou = n("./src/lib/cookieConsent/index.ts"),
				ru = n("./src/reddit/controls/Link/index.tsx"),
				au = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				iu = n.n(au);
			const {
				fbt: cu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), lu = I.a.div("Icon", iu.a), du = () => m.a.createElement(lu, {
				style: {
					backgroundImage: `url(${G.a.assetPath}/img/snoo-upvote.png)`
				}
			}), uu = I.a.wrapped(Ze.l, "PrimaryButton", iu.a), mu = I.a.wrapped(Kd, "Bread", iu.a);
			class pu extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(ou.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(ou.b)({
							opted: !0,
							nonessential: !1
						}), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("section", null, m.a.createElement(mu, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(du, null), m.a.createElement("section", {
						className: iu.a.EuCookiePolicyBody
					}, m.a.createElement(Yd, null, cu._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(ru.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, cu._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: iu.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(uu, {
						type: "submit"
					}, cu._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(uu, {
						type: "submit"
					}, cu._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var bu, hu = pu;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(bu || (bu = {}));
			var gu = n("./src/reddit/controls/Typography/index.tsx"),
				fu = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				vu = n.n(fu);

			function Ou() {
				return (Ou = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Cu = I.a.div("Container", vu.a),
				xu = I.a.img("SideImage", vu.a),
				yu = I.a.div("Main", vu.a),
				Eu = I.a.div("SubTitle", vu.a),
				Pu = gu.a,
				ju = I.a.wrapped(Ze.m, "PrimaryLinkButton", vu.a),
				_u = I.a.wrapped(Wi.a, "CloseIcon", vu.a);
			class Su extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Id(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Nd(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: s,
						subTitle: r,
						title: a
					} = this.props;
					return m.a.createElement(Cu, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(_u, {
						onClick: this.props.onClose
					}), m.a.createElement(xu, {
						srcSet: n
					}), m.a.createElement(yu, null, m.a.createElement(Eu, null, r), m.a.createElement(gu.b, null, a), m.a.createElement(Pu, null, e), m.a.createElement(ju, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const ku = Object(p.b)(null, e => ({
					onSignup: () => e(Object(ys.j)())
				}))(Object(A.c)(Su)),
				wu = `${Mu("subscribe-cap.png")} 1x,\n  ${Mu("subscribe-cap@2x.png")} 2x,`;

			function Mu(e) {
				return `${G.a.assetPath}/img/banner/${e}`
			}
			const Nu = 3;
			var Iu = n("./src/lib/permanentCookieOptions.ts");
			const Tu = e => `${e}:1527210000`;
			var Au = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Ru = n.n(Au);
			const {
				fbt: Lu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Du = I.a.div("Icon", Ru.a), Fu = () => m.a.createElement(Du, {
				style: {
					backgroundImage: `url(${G.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Uu = I.a.wrapped(Ze.l, "PrimaryButton", Ru.a), Gu = I.a.wrapped(Kd, "Bread", Ru.a);
			class Bu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Et.j, Tu(Nu), Object(Iu.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Gu, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Fu, null), m.a.createElement(Yd, null, Lu._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Lu._param("=User Agreement", m.a.createElement(ru.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Lu._("User Agreement", null, {
						hk: "XS57W"
					}))), Lu._param("=Privacy Policy", m.a.createElement(ru.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Lu._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Uu, {
						type: "submit"
					}, Lu._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Hu = Bu;

			function qu() {
				return (qu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Wu = [],
				Vu = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Qu = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Ku = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, Vu)
				},
				zu = I.a.wrapped(Ld.a, "SnooFacepalm", Zd.a),
				Ju = I.a.wrapped(Dd.a, "SnooHappy", Zd.a),
				Yu = I.a.wrapped(rs.b, "SubredditIcon", Zd.a),
				Xu = I.a.img("CustomIcon", Zd.a),
				Zu = I.a.div("Container", Zd.a),
				$u = I.a.wrapped(Wi.a, "Close", Zd.a),
				em = I.a.wrapped(Ad.a, "LockIcon", Zd.a),
				tm = I.a.wrapped(Fd.a, "UnlockIcon", Zd.a),
				nm = I.a.wrapped(Rd.a, "RemoveIcon", Zd.a),
				sm = e => m.a.createElement(m.a.Fragment, null, m.a.createElement($u, qu({
					className: "CloseIcon"
				}, e))),
				om = I.a.wrapped(Kd, "Bread", Zd.a),
				rm = Object(f.c)({
					subredditIcon: Gd.b,
					toastSlices: e => e.toaster
				}),
				am = Object(p.b)(rm, e => ({
					dismissToast: t => () => e(Object(Md.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Md.g)(n))
					}
				}));
			class im extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => cm(e, this.props.toastSlices), this.getWillEnterStyles = () => Qu, this.getWillLeaveStyles = () => Ku
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(N.TransitionMotion, {
						defaultStyles: Wu,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Zu, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Ud.b.Custom && void 0 !== t.customToastType) {
							const s = dm[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Ud.b.UappBanner) return m.a.createElement(Hu, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Ud.b.EuCookiePolicy) return m.a.createElement(hu, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Nd("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Id("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Td("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Ud.b.AuthError) return m.a.createElement(su, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Ud.b.Modal ? Ze.l : Ze.r,
							o = t.kind === Ud.b.Modal ? Ze.o : Ze.r;
						return m.a.createElement(om, {
							className: t.kind === Ud.b.Modal ? Zd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Nd(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Zd.a.ContentWrapper
						}, lm(t, this.props.subredditIcon), t.kind === Ud.b.SuccessLockComment && m.a.createElement(em, null), t.kind === Ud.b.SuccessUnlockComment && m.a.createElement(tm, null), m.a.createElement(Yd, null, t.text)), m.a.createElement("div", {
							className: Zd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Id(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Td(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(sm, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const cm = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(N.spring)(1),
							x: Object(N.spring)(1, Vu),
							y: Object(N.spring)(0, Vu)
						}
					}))
				},
				lm = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Xu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Ud.b.Error:
							return m.a.createElement(zu, null);
						case Ud.b.SuccessEndBroadcast:
							return m.a.createElement(nm, null);
						case Ud.b.SuccessAward:
						case Ud.b.SuccessCommunity:
						case Ud.b.SuccessCommunityGreen:
							return m.a.createElement(Ju, null);
						case Ud.b.SuccessMod:
							return m.a.createElement(Yu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				dm = {
					[Ud.a.subscribeCap]: e => m.a.createElement(ku, Ou({
						name: bu.LoggedOutMaxSubscriptions,
						sideImage: wu,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var um = am(Object(A.c)(im)),
				mm = n("./src/reddit/featureFlags/profileCollections.ts"),
				pm = n("./src/reddit/helpers/trackers/banners.ts"),
				bm = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				hm = n.n(bm);
			var gm = I.a.div("Wrapper", hm.a),
				fm = n("./src/reddit/components/AlertBanner/index.m.less"),
				vm = n.n(fm);
			const {
				fbt: Om
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Cm = () => m.a.createElement(gm, {
				className: Object(v.a)(vm.a.wrapper, vm.a.suspended)
			}, m.a.createElement("span", null, Om._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), Om._("Click {=here} for more info.", [Om._param("=here", m.a.createElement("a", {
				className: vm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, Om._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), xm = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(gm, {
					className: Object(v.a)(vm.a.wrapper, vm.a.suspended)
				}, m.a.createElement("span", null, Om._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [Om._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), Om._("Click {=here} for more info.", [Om._param("=here", m.a.createElement("a", {
					className: vm.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, Om._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, ym = () => m.a.createElement(gm, {
				className: Object(v.a)(vm.a.wrapper, vm.a.fpr)
			}, m.a.createElement("span", null, Om._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: vm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Om._("Learn more", null, {
				hk: "1OTc8q"
			}))), Em = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(gm, {
					className: Object(v.a)(vm.a.wrapper, vm.a.deprecated)
				}, m.a.createElement("span", null, Om._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Om._param("update your browser", m.a.createElement(Pm, {
					link: t
				}, Om._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Om._("If you do not update your browser, we suggest you visit {old reddit} .", [Om._param("old reddit", m.a.createElement("a", {
					className: vm.a.underlineLink,
					href: G.a.oldRedditUrl,
					onClick: n
				}, Om._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Pm = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: vm.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class jm extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(pm.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(pm.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Em, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(ym, null) : n ? s || null != s ? m.a.createElement(xm, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Cm, null) : null
				}
			}
			var _m = Object(A.c)(jm),
				Sm = n("./src/reddit/components/AlertBanner/heights.ts");
			var km = n("./src/reddit/components/OfflineBanner/index.m.less"),
				wm = n.n(km);
			const {
				fbt: Mm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Nm = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, wm.a.banner, {
							[wm.a.online]: e.online,
							[wm.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: wm.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: wm.a.title
					}, e.online ? Mm._("Found the internet!", null, {
						hk: "fMghd"
					}) : Mm._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement($n.a, {
						className: wm.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Im = n("./src/reddit/components/Upsell/async.ts"),
				Tm = n("./src/reddit/constants/componentSizes.ts"),
				Am = n("./src/reddit/constants/elementIds.ts"),
				Rm = n("./src/reddit/constants/history.ts"),
				Lm = n("./src/reddit/constants/posts.ts"),
				Dm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Fm = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Um = n("./src/reddit/constants/promo.ts"),
				Gm = n("./src/reddit/contexts/Promo/index.ts");

			function Bm(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case Um.a.Completed:
						return s === Um.a.Shown ? new Map(e.set(n, Um.a.Completed)) : e;
					case Um.a.Dismissed:
						return s === Um.a.Shown ? new Map(e.set(n, Um.a.Dismissed)) : e;
					case Um.a.Shown:
						return s ? e : new Map(e.set(n, Um.a.Shown));
					default:
						throw new Error
				}
			}
			var Hm = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(Bm, new Map), o = u.useCallback(e => s({
						type: Um.a.Completed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => s({
						type: Um.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: Um.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: o,
						dismissPromo: r,
						promos: n,
						showPromo: a
					}), [o, r, n, a]);
					return u.createElement(Gm.a.Provider, {
						value: i
					}, t)
				},
				qm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Wm = n("./src/reddit/helpers/postCollection.ts"),
				Vm = n("./src/reddit/models/Theme/index.ts"),
				Qm = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Km = n("./src/reddit/selectors/experiments/survey.ts"),
				zm = n("./src/reddit/selectors/notificationBanner.ts"),
				Jm = n("./src/reddit/selectors/onboarding.ts"),
				Ym = n("./src/reddit/selectors/posts.ts"),
				Xm = n("./src/reddit/components/AppRouter/index.m.less"),
				Zm = n.n(Xm);

			function $m() {
				return ($m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ep = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						...s
					} = e;
					return m.a.createElement("div", $m({
						className: Object(v.a)(Zm.a.main, {
							[Zm.a.mShowingPaddedPinnedDescriptions]: n
						}, t),
						id: Am.a
					}, s))
				},
				tp = Object(C.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...o
					} = e;
					const r = Object(F.a)({
						theme: s,
						...o
					});
					return m.a.createElement("div", $m({
						className: Object(v.a)(Zm.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Vm.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(_t.c)(n)}px`
						}
					}, o))
				}),
				np = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const o = Object(u.useContext)(g.a);
					return m.a.createElement("div", $m({
						className: Object(v.a)(Zm.a.lightboxHeaderWrapper, t, {
							[Zm.a.lightboxHeaderWrapperExp]: o
						})
					}, s, {
						ref: n
					}))
				},
				sp = Object(zm.a)(dd.a.EmailCollectionBannerId),
				op = Object(p.b)(() => Object(f.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(U.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: at.y,
					isD2xSeoDisableLightboxEnabled: es.a,
					isBlockingInterstitialEnabled: Qm.b,
					isBlockingInterstitialV2Enabled: Qm.c,
					isLoggedIn: at.R,
					isLoggedOutOneFeed: ps.a,
					isNpsSurveyEnabled: Km.d,
					isOnboardingQueryParamEnabled: Jm.c,
					isSubscriptionsPinned: ns.b,
					isSuccessfulSurveyEnabled: Km.f,
					isSuspended: at.Y,
					isFPR: at.P,
					posts: Ym.J,
					profileCollectionsEnabled: mm.a,
					showEmailCollectionBanner: e => !Object(It.M)(e.platform.currentPage) && sp(e),
					signUpModalIsOpen: Object(ai.c)(Fe.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: at.yb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPinSubscriptions: () => e(Object(_.i)()),
					onPostDismissTrigger: () => e(Object(S.k)()),
					onSuccessfulSignupTrigger: () => e(Object(S.g)()),
					onUnpinSubscriptions: () => e(Object(_.j)())
				})),
				rp = (e, t) => !(!e.state || !e.state[Rm.b.IsOverlay] || t === e);
			class ap extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Tm.l ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= Tm.l && this.props.onPinSubscriptions()
					}, O.L), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(It.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${O.Jb.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === Lm.a.PROFILE;
							return !(!r || !Object(Wm.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(U.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
					const {
						isOnboardingQueryParamEnabled: e,
						isSuccessfulSurveyEnabled: t,
						onSuccessfulSignupTrigger: n
					} = this.props;
					t && !e && n()
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n,
						onPostDismissTrigger: s
					} = this.props, o = n.state && n.state[Rm.b.IsOverlay], r = Object(P.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(P.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === O.Ob.INDEX || t.name === O.Ob.SUBREDDIT && n.subredditName === ws.b.Popular), o = Object(U.c)(this.props.frontpageSignupVariant), r = Object(U.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = rp(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						connection: e,
						currentPage: t,
						frontpageSignupVariant: n,
						hasInvalidSession: s,
						isD2xSeoDisableLightboxEnabled: r,
						isFPR: a,
						isLoggedIn: i,
						isLoggedOutOneFeed: l,
						isSubscriptionsPinned: d,
						isSuspended: p,
						location: b,
						onClickOutsideOverlay: h,
						routes: g,
						showEmailCollectionBanner: f,
						suspensionDaysLeft: v
					} = this.props, {
						isSignupUpsellDisplayed: C,
						isSignupUpsellHidden: x
					} = this.state, y = this.context, E = rp(b, this.previousLocation);
					b.state && b.state[Rm.b.IsOverlay] && !E ? b.state[Rm.b.IsOverlay] = !1 : b.state && (this.previousLocation === b || b.state[Rm.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Rm.b.CloseLocation] && this.previousLocation.state[Rm.b.CloseLocation] === b.state[Rm.b.CloseLocation] ? b.state[Rm.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, Rm.b.CloseLocation)
					} : b.state[Rm.b.CloseLocation] = this.previousLocation);
					const j = Object(P.a)(this.previousLocation, b),
						_ = E || j ? this.previousLocation : b,
						S = E || j ? this.previousPage : t,
						w = !(!(S && S.meta && S.meta.name === O.Ob.SEARCH_RESULTS && S && S.queryParams) || S.queryParams[Ir.u]),
						M = !(!S || !S.meta || S.meta.name !== O.Ob.MODERATION_PAGES),
						N = Object(It.x)(S),
						I = this.getIsPostCollection(),
						T = C && !x,
						A = e.showBanner;
					return s ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(It.a.Provider, {
						value: S
					}, m.a.createElement(lr.c, {
						isOverlayOpen: E
					}, m.a.createElement(wd.a, {
						forceRedditTheme: w
					}, C && m.a.createElement(ye, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(ip, {
						browserInfo: y,
						connection: e,
						isFPR: a,
						isInline: T,
						isSuspended: p,
						showOffline: A,
						suspensionDaysLeft: v
					})), m.a.createElement(Dm.a.Provider, {
						value: !1
					}, m.a.createElement(wd.a, {
						forceRedditTheme: w || M,
						isCommentsPage: N
					}, m.a.createElement(Hm, null, m.a.createElement(cp, {
						browserInfo: y,
						frontpageSignupVariant: n,
						isD2xSeoDisableLightboxEnabled: r,
						isCommentsPage: N,
						isInline: T,
						isLoggedIn: i,
						isLoggedOutOneFeed: l,
						isSubscriptionsPinned: d,
						location: _,
						overlayIsOpen: E,
						page: S,
						routes: g,
						showEmailCollectionBanner: f,
						showFPR: a,
						showOffline: A,
						showSuspended: p
					}), m.a.createElement(Im.b, null), m.a.createElement(Im.a, null)))))), m.a.createElement(It.a.Provider, {
						value: t
					}, E && m.a.createElement(Dm.a.Provider, {
						value: !0
					}, m.a.createElement(wd.a, {
						isOverlay: !0
					}, m.a.createElement(lp, {
						browserInfo: y,
						isPostCollection: I,
						location: b,
						onClickOutsideOverlay: h,
						page: t,
						routes: g,
						showEmailCollectionBanner: f,
						showFPR: a,
						showOffline: A,
						showSuspended: p
					}))), m.a.createElement(wd.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(um, null), m.a.createElement(kd.a, null), f && m.a.createElement(k.a, null), m.a.createElement(wt, null), m.a.createElement(Jn, null)))))
				}
			}
			ap.contextType = x.a;
			const ip = Object(A.c)(e => {
					const t = Object(It.eb)(),
						n = Object(Fm.db)(t),
						s = Object(u.useContext)(g.a),
						{
							browserInfo: o,
							connection: r,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: l,
							suspensionDaysLeft: d
						} = e,
						p = {
							browserInfo: o,
							showFPR: a,
							showSuspended: l,
							suspensionDaysLeft: d,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(_m, p), n && m.a.createElement(cd, {
						className: Object(v.a)(Zm.a.header, Object(Sm.b)(Zm.a, p), {
							[Zm.a.inline]: i
						})
					}), m.a.createElement(Nm, {
						className: Object(v.a)(Zm.a.offlineBanner, Object(Sm.b)(Zm.a, p)),
						online: r.online,
						showBanner: r.showBanner
					}))
				}),
				cp = Object(A.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = c()(e, "key"),
							s = c()(t, "key");
						return a()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = c()(e, ["key", "locationState"]),
								s = c()(t, ["key", "locationState"]);
							return a()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isCommentsPage: o,
							isD2xSeoDisableLightboxEnabled: r,
							isInline: a,
							isLoggedIn: i,
							isSubscriptionsPinned: c,
							showEmailCollectionBanner: l
						} = this.props, d = c && !(!r && !i && !s && o);
						return m.a.createElement(ep, {
							"aria-hidden": s,
							className: Object(v.a)(Object(Sm.b)(Zm.a, this.props), {
								[Zm.a.withUpsell]: !!e,
								[Zm.a.inline]: a
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Sd, {
							className: Object(v.a)(Zm.a.pinnedSubscriptions, {
								...Object(Sm.b)(Zm.a, this.props),
								[Zm.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), l && m.a.createElement("div", {
							className: Object(v.a)(Zm.a.bottomSpacer, Object(Sm.a)(Zm.a, this.props))
						}))
					}
				});
			class lp extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(j.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[Rm.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = qm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && qm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === O.Ob.SUBREDDIT_CREATION || t.meta.name === O.Ob.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(tp, {
						className: Object(v.a)(Object(Sm.b)(Zm.a, this.props), {
							[Zm.a.mIsCommentsLightbox]: o,
							[Zm.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Zm.a.overlayWrapper, Object(Sm.b)(Zm.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Zm.a.overlayScrollContainer, {
							[Zm.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Am.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(np, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(Sm.b)(Zm.a, this.props), {
							[Zm.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(ld.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Zm.a.bottomSpacer, Object(Sm.a)(Zm.a, this.props))
					}))))
				}
			}
			t.b = op(Object(A.c)(ap))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: o,
							dialogId: r
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (r && o(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return o.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(l))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("CoinPurchaseModal").then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/models/Toast/index.ts");
			const O = (e, t) => async (n, o, r) => {
				let {
					apiContext: a
				} = r;
				const i = await (async (e, t, n) => Object(h.a)(Object(g.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: l.kb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(a(), e, t),
					c = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					n(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: o
					}))
				} else n(b.f({
					id: c,
					kind: v.b.Error,
					text: s.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: O(e, t)
				}))
			};
			var C = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				w = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const M = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(w.y)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(w.qb)(r)
				}),
				N = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(w.gb)(e),
					userSubreddit: Object(w.qb)(e)
				}),
				T = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...I
				});
			var A = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				L = n("./src/reddit/selectors/activeModalId.ts"),
				D = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
				U = n("./src/reddit/selectors/posts.ts"),
				G = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				q = n.n(H),
				W = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const V = Object(E.a)(j.a),
				Q = e => e === W.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === W.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class K extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== W.a.None) {
							e(t === W.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", W.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", W.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", W.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: n,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: q.a.HighlightWrapper
					}, r.a.createElement(_.b, {
						className: Object(c.a)(q.a.HighlightPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(o)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(A.b, {
						className: q.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(V, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(_.b, {
						displayText: Q(W.a.First),
						isSelected: o === W.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(_.b, {
						displayText: Q(W.a.Last),
						isSelected: o === W.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(_.b, {
						displayText: Q(W.a.None),
						isSelected: o === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = K;
			const J = "CommentSort--SortPicker",
				Y = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(E.a)(j.a),
				$ = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(D.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(L.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(G.b)(J),
					highlightIsOpen: Object(G.b)(Y),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(F.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: U.G,
					postPermalink: U.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(B.w)(e),
							o = !!Object(F.m)(e, {
								postId: n
							}),
							r = Object(U.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: D.p
				}),
				ee = Object(a.b)($, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(d.h)({
							tooltipId: J
						})),
						onOpenHighlightDropdown: t => {
							e(Object(d.h)({
								tooltipId: Y
							})), t()
						},
						onSetSuggestedSort: t => e(O(n, t)),
						hideTooltip: () => e(Object(d.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(d.h)({
							tooltipId: X
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(M(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(T(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return s.fbt._("{sort name} (suggested)", [s.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: o,
						dropdownIsOpen: a,
						elementRef: i,
						hideTooltip: d,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: b,
						post: h,
						postPermalink: g,
						selectedHighlightSort: f,
						showCommentHighlighter: v,
						sort: O,
						suggestedSort: E,
						showTooltip: P,
						toggleContestModeModal: j
					} = this.props, w = h.contestMode, M = !b.search.includes(l.u.CONFIDENCE), I = O === l.u.CONFIDENCE && M, T = m && !I, L = l.w[O], D = L ? L() : "", F = E && O === E && !I ? this.addSuggestedLabel(D) : D, U = w ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), G = w ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), B = w ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), H = w && !m;
					return r.a.createElement("div", {
						className: Object(c.a)(t, q.a.container, {
							[q.a.hideCommentSort]: !v && H
						}),
						ref: i
					}, r.a.createElement("div", {
						className: q.a.containerRow
					}, !H && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.DropdownContainer
					}, r.a.createElement(_.b, {
						className: Object(c.a)(q.a.SortPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(A.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: a,
						tooltipId: J
					}, [l.u.CONFIDENCE, l.u.TOP, l.u.NEW, l.u.CONTROVERSIAL, l.u.OLD, l.u.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							o = l.w[e],
							a = o ? o() : "";
						return r.a.createElement(y.a, {
							className: q.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, r.a.createElement(_.b, {
							displayText: a,
							isSelected: O === e,
							skipRoleAttr: !0
						}))
					}))), T && !H && (E ? r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: O !== E ? this.setSortOnClick : this.clearSortOnClick
					}, O !== E ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: q.a.SetSort
					}, r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: P,
						onMouseLeave: d
					}, r.a.createElement(x.c, {
						className: q.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(R.a, {
						className: q.a.Info
					})))), m && r.a.createElement("button", {
						className: q.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(S.a, {
						className: q.a.ToggleSwitch,
						on: w
					}))), v && r.a.createElement("div", {
						className: q.a.containerRow
					}, r.a.createElement(z, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: Y,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: N
					})), o && r.a.createElement(C.a, {
						actionText: G,
						headerText: U,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: j,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(P.c)(te))
		},
		"./src/reddit/components/CreateAccountSection/index.m.less": function(e, t, n) {
			e.exports = {
				createTitle: "_2FBcfa5LIJrKSNuRAA7WWa",
				createDesc: "_2gHNfZLuOuUSh3Ppfyc0JX",
				createButton: "_2XQ3s48lqlzodYPpT2s-Iu"
			}
		},
		"./src/reddit/components/Crypto/componentStyles.less": function(e, t, n) {},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ClaimFreeAwardModal").then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GoldTargetedOfferModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e(0), n.e(1), n.e("vendors~MarketplaceClaimModal~MarketplaceInFeedUnit"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => r.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "EconPowerupsFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconPowerupsFlairModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3kFZWXar5EkIAbiKLZxwKw"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				l = n.n(c);
			const d = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(d);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modal
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1KwpOybv6p44QN3WvUVBoQ",
				container: "TPBQxpFGmnc7DlYlMReTd",
				title: "_1MbiZSwLn6AEllOCsl_VOs",
				footer: "_3rKjfC0Km1veZhKaJ4mY5g"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsSuccess/index.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupSuccessModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupSuccessModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsSuccess/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsSuccess/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(d, {
				withOverlay: !0,
				className: l.a.modalBody,
				overlayClassName: l.a.modalOverlay
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3uruuYeyxpi66lhx6sYSsl",
				fadeOut: "nIOXvEXFyDg7VnFtNVmlJ",
				modalBody: "_2HHFaH5ZLOM1NWKsiGkorM",
				successPowerup: "_25UgJzq-s3kOud15pllhar",
				icon: "_15HZ1T5sP47ouINDpZ92Td",
				title: "_2bJ-GCaxSGVPn1OefwaiZ0",
				confetti: "_3cJJ0jZwGKhEPBNW-HZasa"
			}
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CancelPredictionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CancelPredictionModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-ChangePredictionOutcomeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-ChangePredictionOutcomeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-EndTimeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-EndTimeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-PremiumModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("reddit-components-Econ-Prediction-PremiumModal")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EditCommunityDescriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EditCommunityDescriptionModal").then(n.bind(null, "./src/reddit/components/EditCommunityDescriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EditCommunityDescriptionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				o = () => null;

			function r(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : o
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return f
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = n.n(h);
			const f = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				C = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(C(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const r = o.fbt._("Animation of {award name} image", [o.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: r,
					className: Object(d.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: `url(${f})`
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "V6V7iCbDSFo5LexMzDv4B",
				iFrame: "V6V7iCbDSFo5LexMzDv4B",
				"m-hidden": "_1F0LLqsimObYeEF5Q2a-Nn",
				mHidden: "_1F0LLqsimObYeEF5Q2a-Nn"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CONVERT_TO_COINS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1_-T-UyaTFWSKiU5qkmH4p",
				sparkle: "_3BW2xh05Xd6fPp8ewmG_zt",
				fadeIn: "_3EsU62vzG6DnMyeCR6qmsN",
				quickCreateGiftAnimation: "_2ayMLd0-DF3iBdcNu4Jyw9",
				sparkle1: "_2XTOJxs8_NUxZs7xO_yqD4",
				sparkle2: "DSsYeuIxRQ_6mpLKn7Znw",
				sparkle3: "egE_sRX5MzRyi9eJWBBvR"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				special: "_1dJtiWITrnvIbQdXgYgdym",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				j = n.n(P);
			const _ = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-CoinPurchaseDropdown").then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CoinPurchaseDropdown/index.tsx"
					}
				}),
				S = Object(f.a)(),
				k = Object(l.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(S)(e),
					isFreeAwardEventEnabled: e => Object(x.a)(e) && Object(y.g)(e)
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === S ? Object(m.i)() : Object(m.f)({
							tooltipId: S
						}))
					}
				}),
				M = Object(c.b)(k, w);
			class N extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: o,
							sendEvent: r,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.e)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(O.d)("get_coins_cta", e))
						}
						a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestSpecialEvents: t
					} = this.props;
					e || t()
				}
				getButtonText() {
					const {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: t
					} = this.props;
					return e ? e.ctaText || o.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? o.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : o.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: o
					} = this.props, r = this.getButtonText(), a = !!e || o, c = Object(d.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(d.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: S,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(C.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, r)), s && i.a.createElement(_, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: S
					}))
				}
			}
			t.a = M(Object(g.c)(N))
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/NotificationsButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationInboxIconContainer: "_1Tdh9XCXmEOaXAlloLqrmH",
				welcomeTooltip: "_3OMmYPy8XZymvnsxBSK3c0",
				visible: "_1Ssw-NK4SzV_ZrK0hsAQZj",
				welcomeTooltipArrow: "_3Dl1lNOXSRFghRireQprSr"
			}
		},
		"./src/reddit/components/Header/QuickLinks/Timer.m.less": function(e, t, n) {
			e.exports = {
				timer: "_1RWqLcP0XUFojNUc0Mf0Yc"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm",
				hotPotatoLink: "_1o0rv7Kcd4-rywKyuwuS4d",
				hotPotatoIcon: "_3hPJyNn7eKE2V1QllrneKU"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				SparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN",
				sparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				g = m.a.div("SparseContainerExp", u.a),
				f = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? g : h;
				return o.a.createElement(t, {
					id: r.d
				}, o.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(l.a, null, o.a.createElement(p, null), o.a.createElement(b, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN",
				adSignupIconWrapper: "buhDxtCErlohIqSGl44CH"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				layoutContainer: "_31IHoBZ9we7EzLMdkTaIR2",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				snooExp: "_32hLJ8_m9mplK6bwNXysk8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult",
				hasBadge: "_3JpLC8c1ezEsYuuoANyZgr",
				badge: "_15QIjcY6qqsms0FXyEsVe9"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2I12Htze2UzJmmfnrgYJOn",
				icon: "_1jAt0x8BSB9mgoXbsDuKJ6",
				link: "_24UNt1hkbrZxLzs5vkvuDh",
				isNightMode: "_1dBtowHdRHcGyLbVEaOL8t"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF",
				loggedInGoogleOneTap: "GmCFJz0Lv_7OTbtdvK2me",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj",
				navBasicLink: "_2KD6rqR9FU8VQKN4P42INe",
				navButtonOverride: "Yxq-GFO2Z9y82pMFEMLAf"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2gT-SgcGRQsJc7cLAzWT3r",
				headingContent: "_26v6JOihbU7MuezKAlj4JI",
				subredditIcon: "u_VVgOsrqJsUNbQ80sEby",
				title: "_3eGd1zitdF6RmAyLpSDjG6"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less": function(e, t, n) {
			e.exports = {
				button: "GCltVwsXPu5lE-gs4Nucu",
				category: "_3z4bYCMDgBrJ-Be0By6hNr",
				coinsLink: "_3zu1R6cDitNjrJaFA1VPXj",
				coinsTitle: "_6PPJ3peMr-B90dx0MQDhB",
				meta: "msJd1mFtK7HCAm9dasMIn"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less": function(e, t, n) {
			e.exports = {
				button: "_3fbofimxVp_hpVM6I1TGMS",
				heading: "_1pjbWqnK8P0fDmz8PgLxXY",
				secondLevelButton: "NiNJXib52w4C8FUidB5af",
				secondLevelSwitch: "nBh6t8H3UNZpI1Ce9s6yQ",
				headingContent: "f8nXLisWxOYzMMl1uIAP3",
				iconContainer: "_225mt8Dkk7IyfYILsMLk9t",
				title: "yloKeyD8bfd8UJ_Gi9rsR",
				collapseIcon: "_3MAMvvyd5hQy71OUfBGRkm",
				chevronIcon: "_3DRWid86ywqQiIYSK1e5mN",
				"m-expanded": "_1AFIV6eh63D9Ab_ml6uJ5j",
				mExpanded: "_1AFIV6eh63D9Ab_ml6uJ5j",
				contentContainer: "_3SDj_IT6ZaqCbKfC4eTjb2",
				noBottomDivider: "R2-Y-K1ZaSHnYA0gp7-nb",
				"m-collapsible": "sJncFX1AQ0-0SzCGc9V5L",
				mCollapsible: "sJncFX1AQ0-0SzCGc9V5L",
				isOpen: "_27B2PE8qRdRlQHbzPBidG6",
				innerLink: "_2ChaQYEC5d_hjd-mltzvQK",
				copyrightContainer: "_2XCnMY85ivEZUL6cAgK0nV",
				copyrightText: "_ttuvLVH4k74IkCGNFJSt",
				subredditIcon: "_3i89oiIrBc-3aoYCzDu8Dy",
				spanButton: "VeDtdPVW3ue8oUfGWbxqu"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/avatar.m.less": function(e, t, n) {
			e.exports = {
				avatarLinkBody: "_6opQAE7SUXi-Fy7P3vItL",
				marketingBadge: "_6qTe2HfpYA9trfOatbi74",
				marketingAsset: "_1lcNm4na-FCLir4IeIpM7w",
				sparkle: "_2thIi4nb9dgSv10ECKVHL4",
				fadeIn: "w8i-7IiMlCG-ncHyRHzxw",
				sparkle1: "_2XE_ejqL9tZ617JilWAoev",
				sparkle2: "RPtjfCh_RZnh_Lh-sTACB",
				sparkle3: "o03hgL0CTE9PaKw9A2nHD",
				sparkle4: "_16-T-fB2mGMlxyfbZjQvUG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				caretDownIcon: "_3x3dhQasGAuYcXVQ02QUzy",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				presenceToggle: "_3Axd0OX2sZP0PEIHdeocc3",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/config.ts"),
				r = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				l = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, r, i, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let v, O;
					return d(p) ? (t = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, r = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: r,
						description: n,
						titleText: i,
						url: m,
						subscribersCount: O,
						subscribersText: g,
						currentlyViewingText: f,
						currentlyViewingCount: v,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new r.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "InboxTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("InboxTooltip").then(n.bind(null, "./src/reddit/components/InboxTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InboxTooltip/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(o.createContext)(null),
				p = Object(o.createContext)(null);
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px"), n = Object(o.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, o => o && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(l.t, {
						kind: l.b.Button,
						priority: l.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							o.focus(), o.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				subredditName: "xP-T4vxk4aKEQTlxxGner",
				adaptive: "_34HwaRmVoDiPrSaCPUqpjx",
				srIcon: "_3LZZ1LMv49fbgZrji_1D8u"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				P = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				A = n.n(T);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const o = s || Object(w.n)(e, {
							page: n
						});
						return (null == o ? void 0 : o.belongsTo) ? Object(M.M)(e, {
							identifier: o.belongsTo
						}) : null
					},
					post: w.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(S.a)(e) || Object(S.d)(e) || Object(S.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const o = n && Object(w.n)(e, {
							page: n
						}) || s;
						return !!o && Object(k.g)(e, {
							post: o
						})
					}
				}),
				L = Object(a.b)(R, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(m.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === _.a.upvoted ? Object(u.kb)(t) : Object(u.w)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				})),
				D = {
					[j.o.GIFVIDEO]: d.a.gif_post,
					[j.o.IMAGE]: d.a.image_post,
					[j.o.TEXT]: d.a.text_post,
					[j.o.RTJSON]: d.a.text_post,
					[j.o.VIDEO]: d.a.video_post,
					[j.o.EMBED]: d.a.embed,
					[j.o.LIVEVIDEO]: d.a.video_live,
					[j.o.GALLERY]: d.a.media_gallery,
					[j.o.LIVEAUDIO]: d.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class U extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}, this.handleSubscribeButtonClick = e => {
						e.stopPropagation(), this.props.subreddit && this.props.sendEvent(e => {
							const {
								subreddit: t,
								post: n
							} = this.props;
							return {
								source: "sticky_banner",
								action: "click",
								noun: (null == t ? void 0 : t.name) && Object(M.gb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? N.H(e, n.id) : void 0,
								subreddit: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.addListeners(h.b, this.handleSubscribeButtonVisible), h.h.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.removeListeners(h.b, this.handleSubscribeButtonVisible), h.h.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: d,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Ob.META_MEMBERSHIP_PAYWALL_PAGE, x = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return r.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: d && Object(y.a)(d),
							[A.a.adaptive]: u
						})
					}, r.a.createElement(x, {
						postId: null == d ? void 0 : d.id
					}, r.a.createElement("div", {
						className: A.a.postDetails
					}, d && r.a.createElement(o.Fragment, null, m && !u ? void 0 : r.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(E.a, {
						name: h,
						className: A.a.mediaIcon
					}), r.a.createElement(g.c, {
						className: A.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), r.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && r.a.createElement(r.a.Fragment, null, r.a.createElement(P.a, {
						className: A.a.srIcon
					}), r.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && r.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && r.a.createElement(G, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const G = r.a.memo(e => r.a.createElement(x.t, {
				className: A.a.CloseButton,
				size: x.d.XS,
				onClick: e.onClick,
				priority: x.c.Plain,
				Icon: Object(E.b)("close"),
				text: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				title: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				"aria-label": s.fbt._("Close", null, {
					hk: "4gbyAA"
				})
			}));
			t.a = Object(O.c)(L(U))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, l = Object(i.b)(s);
				return o.a.createElement(a.a, c({
					className: n,
					to: l
				}, r), t)
			}

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? l : r.a;
				return o.a.createElement(s, d({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/OfflineBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "OEQgz7Lkj--3zFaLL7BUF",
				online: "_1HWVXJoazfrENIGlRprCVp",
				snoomoji: "_3BcAFuYpz37S0WFvgyWCUN",
				title: "_2hQKVL2Pm4yfkiqifapnBp",
				refresh: "_1E59q-NCGBwN0Aq_bPsPKb",
				hidden: "_2elztvdigLcbcRyu_4wcFW"
			}
		},
		"./src/reddit/components/Pill/PillText/index.m.less": function(e, t, n) {
			e.exports = {
				pillText: "_3CUdiRoAXQxoYJ-UeFCjPS",
				pillTextVariantDay: "_2SVIoeexI3lRGCH0NAYAMx",
				pillTextVariantNight: "QRGfIrC3QhcjQPpbXOPJy"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, n) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Pill/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					children: t,
					className: n,
					...s
				} = e;
				return o.a.createElement("div", c({
					className: Object(r.a)(i.a.pillContainer, n)
				}, s), t)
			}
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn",
				createAccountSection: "BtYn3oMRXzNwmNMkolecQ",
				withOverflow: "_3k3RwDkEsbX50bb-DBvuWj"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-InactivityModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-InactivityModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PostFlowUpsellModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PostFlowUpsellModal").then(n.bind(null, "./src/reddit/components/PostFlowUpsellModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostFlowUpsellModal/index.tsx"
				}
			});
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "SupportersListModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SupportersListModal").then(n.bind(null, "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_2iaVQV4QQm863obinS6v2-"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(u, null))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && o.a.cancel(this.frame), this.frame = o()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function u() {
				const e = Object(a.d)();
				return Object(o.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.O)(e) || Object(l.N)(e)) ? r.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ShortcutWrapper").then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(r.a)(a);
			t.a = e => o.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/components/SubredditCreationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditCreationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/survey/index.ts");
			var p = n("./src/reddit/helpers/survey/index.ts"),
				b = n("./src/reddit/models/Survey/index.ts"),
				h = n("./src/reddit/selectors/survey.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const f = (e, t) => {
					const n = Object(h.c)(e),
						s = Object(h.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = g.p(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
					} : {}
				},
				v = e => {
					switch (e) {
						case b.a.CES:
							return "ces";
						case b.a.CSAT:
							return "csat";
						case b.a.NPS:
							return "nps";
						case b.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				O = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...g.n(n),
					survey: f(n, e)
				}),
				C = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						questionId: r,
						questionParentId: a,
						type: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "rating",
						...g.n(e),
						survey: {
							type: v(i),
							min: i === b.a.NPS ? 0 : 1,
							max: i === b.a.NPS ? 10 : 7,
							question: s,
							question_id: r,
							parent_question_id: a,
							score: o,
							...f(e, n)
						}
					})
				},
				x = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: o,
						type: r,
						questionId: a,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...g.n(e),
						survey: {
							question: s,
							type: v(r),
							text: o,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				},
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						type: r,
						questionId: a,
						questionParentId: i,
						max: c,
						text: l
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...g.n(e),
						survey: {
							type: v(r),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: o,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				};
			var E = n("./src/reddit/hooks/useGqlContext.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/experiments/index.ts"),
				S = n("./src/reddit/selectors/experiments/survey.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(l.d)(),
						t = Object(E.a)(),
						[n, s] = Object(c.useState)(null),
						o = Object(P.a)(),
						a = Object(l.e)(k.i),
						i = Object(l.e)(k.Gb),
						u = Object(l.e)(_.a, r.a),
						b = Object(l.e)(h.c),
						g = Object(l.e)(h.a),
						f = Object(l.e)(h.b),
						v = Object(l.e)(h.d),
						C = Object(l.e)(S.g),
						x = Object(c.useMemo)(() => {
							const e = Object(p.g)(C),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u, C]),
						y = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						j = Object(c.useCallback)(async e => {
							if (b) {
								const t = Object(p.f)({
									triggerName: e,
									isDemoEnabled: b,
									activeDemoTrigger: g,
									demoTriggerThreshold: f
								});
								return void(t && s(t))
							}
							const o = Object(p.e)({
								triggerName: e,
								surveyExperimentVariants: x,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								isSurveyServiceMigrationEnabled: C
							});
							if (!o || o.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const r = x[o.experimentName];
							(null == r ? void 0 : r.variant) && o.variants.find(e => e.variantName === r.variant) && (C ? await (async (e, t, n) => {
								const s = await Object(m.b)(t());
								if (s.ok) {
									const t = s.body,
										{
											activeSurveys: o
										} = t.data.customerSurveyConfig,
										r = o.find(t => t.experimentName === e.experimentName);
									r && n({
										...e,
										steps: r.steps
									})
								}
							})(o, t, y) : y(o))
						}, [n, x, a, i, v, b, g, f, C, y, t]);
					return Object(c.useEffect)(() => {
						const e = Object(p.c)(),
							t = e.subscribe(j);
						return () => e.unsubscribe(t)
					}, [j]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(p.i)(n, t), e(Object(d.I)({
							surveyLastSeenTime: t
						}, !1)), o(O(n.experimentName, "display"))
					}, [n, e, o]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				M = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: o,
						textResponse: r,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const o = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", o), () => window.removeEventListener("beforeunload", o)), [o])
					})({
						isFollowUp: o,
						textResponse: r
					});
					const [d, u] = Object(c.useState)(!1), m = Object(P.a)(), p = n.experimentName, h = n.steps[t], g = null == h ? void 0 : h.type, f = null == h ? void 0 : h.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(O(n.experimentName, "dismiss")))
					}, [t, n, m, i]), E = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: g,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: h.type === b.a.MULTI_CHOICE && o ? `${l-1}` : null
						};
						m(o ? x(e) : h.type === b.a.MULTI_CHOICE ? y(e) : C(e))
					}, [p, o, f, h, m, i, a, g, l]);
					return {
						isLeavingModalShowing: d,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: E
					}
				},
				N = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: o,
						setTextResponse: r,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, h] = Object(c.useState)(!1), g = Object(P.a)(), [f, v] = Object(c.useState)(""), [E, j] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var e, c;
						const E = t.experimentName,
							P = t.steps[l],
							_ = null == P ? void 0 : P.type,
							S = null == P ? void 0 : P.question,
							k = null == P ? void 0 : P.followUpQuestion,
							w = t.steps[l + 1],
							M = null == w ? void 0 : w.type,
							N = null == w ? void 0 : w.question;
						if (m(u + 1), w && w.questionOptions && j(i()(w.questionOptions)), -1 === l) {
							g(O(E, "agree")), d(0);
							const e = {
								question: N,
								type: M,
								action: "display",
								experimentName: E,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void g(M === b.a.MULTI_CHOICE ? y({
								text: f,
								...e
							}) : C(e))
						}
						const I = {
							experimentName: E,
							type: _,
							action: "submit",
							questionId: u.toString(),
							questionParentId: P.type === b.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (g(p ? x({
								text: a,
								question: k,
								...I
							}) : _ === b.a.MULTI_CHOICE ? y({
								question: S,
								max: null === (e = P.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = P.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : C({
								question: S,
								score: n && n + (_ === b.a.NPS ? 0 : 1),
								...I
							})), o(void 0), r(""), v(""), p || !k)
							if (h(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: E,
									action: "display",
									type: M,
									question: N,
									questionId: (u + 1).toString()
								};
								g(M === b.a.MULTI_CHOICE ? y({
									text: f,
									...e
								}) : C(e))
							}
						else h(!0), g(x({
							experimentName: E,
							action: "display",
							type: _,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, g, s, o, r, u]);
					return {
						questionOptions: E,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: _,
						uiStep: u,
						setActiveStepNum: d,
						setUIStep: m,
						setIsFollowUp: h
					}
				},
				I = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: o,
						setActiveSurvey: r,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: m
					} = e;
					const p = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							o(-1), a(0), i(!1), r(null), m > 1 && p(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: j.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [p, t, d, m, n, o, r, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const {
					activeSurvey: e,
					setActiveSurvey: t
				} = Object(a.d)();
				return e ? r.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(d.q)(e, t);
			class O extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return r.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.sb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.F)(e, n);
				if (!s) return;
				if (Object(h.rb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.w)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Ib)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Ib)(e);
				if (Object(h.R)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.z)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const o = Object(d.e)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = r && r.length && !Object(f.a)(r) ? `subredditvars-r-${r.toLocaleLowerCase()}` : g.c;
				if (t && n && o) {
					const e = Object(u.h)(n, o);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(O);
			t.b = C;
			const x = Object(l.u)()(C)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r",
				euCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/Upsell/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomCellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomCellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				}),
				r = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomSheetUpsellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomSheetUpsellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				})
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				rightSideButtons: "_1DUcff8CoMLomEzQZ1S6IX",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				goBackButton: "saAxhszfFnlBT8m48Quv9",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(i.c)({
					currentUser: l.l,
					isNightMode: l.eb,
					isPresenceUserPrefEnabled: l.W,
					shouldHideNSFW: l.G
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.b)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const o = e(s),
					a = t(s),
					i = !o && a;
				return Object(r.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: o,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(d);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = e => {
					let {
						voteState: t
					} = e;
					return t === l.a.downvoted
				},
				b = i(p, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, m);
			var h = e => o.a.createElement(c.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				g = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = n("./src/reddit/controls/Upvote/index.m.less"),
				v = n.n(f);
			const O = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				C = e => {
					let {
						voteState: t
					} = e;
					return t === l.a.upvoted
				},
				x = i(C, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, O);
			var y = e => o.a.createElement(g.a, {
					className: x(e),
					compact: e.compact,
					isFilled: C(e)
				}),
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				P = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => Object(r.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(P.b)(Object(E.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				M = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return o.a.createElement("button", k({}, d, {
						className: Object(r.a)(S.a.customDownvote, w(e), {
							[S.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return o.a.createElement("button", k({}, d, {
						className: Object(r.a)(S.a.customUpvote, w(e), {
							[S.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				I = h,
				T = y
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(o.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(l, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(r.h)(n))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(o || (o = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "p", (function() {
				return j
			}));
			const s = 284,
				o = 450,
				r = 800,
				a = 284,
				i = 48,
				c = 640,
				l = 1600,
				d = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				g = 40,
				f = 270,
				v = 106,
				O = 5,
				C = 16,
				x = 1250,
				y = 82,
				E = 48,
				P = 36,
				j = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(o || (o = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = 480,
				o = 960,
				r = 1200
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					},
					gqlRealtime2Context: () => {
						throw new Error("Component attempted to make an API request with no GqlRealtime2Context")
					}
				},
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => o.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					} = n;
					return o.a.createElement(e, r({
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext(!1)
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js");
			const a = r.createContext({
				showPromo: o.a,
				dismissPromo: o.a,
				completePromo: o.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends o.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return o.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, g({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(d.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const s = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !n.noHover,
					[h.a.mIsSelected]: n.isSelected,
					[h.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(f, g({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = n.n(o);
			t.a = s.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Link/index.m.less"),
				r = n.n(o);
			t.a = s.a.a("link", r.a)
		},
		"./src/reddit/controls/Search/CommunityPill/index.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1MA3fP9fWarZfJ7sTZvCY8"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				searchBarExp: "_2cQyXGCHzUUwjteF5E1eO7",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, o.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const a = s.a.h5("heading5", r.a),
				i = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./src/lib/constants/index.ts"), n("./src/lib/makeApiRequest/index.ts");
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				r = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(s.a)(e, {
					...r
				}),
				i = e => Object(s.a)(e, {
					...o,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(d.a)()
				},
				p = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
						offerContext: i,
						pennies: d,
						rememberCard: u,
						token: p,
						savedCardId: b
					} = e;
					const h = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: d,
							remember_card: u,
							card_id: b,
							correlation_id: r
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.kb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
						gildParams: i,
						isOldReddit: d,
						offerContext: u,
						pennies: p,
						rememberCard: b,
						thingId: h,
						token: g,
						savedCardId: f
					} = e;
					const {
						gildType: v,
						isAnonymous: O,
						message: C
					} = i, x = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: C ? C.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: r
					}, y = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = d ? y : Object(l.a)(y);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.kb.POST,
						endpoint: E,
						data: x
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: r,
						isOldReddit: i,
						pennies: d,
						rememberCard: u,
						thingId: p,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: f,
						message: v
					} = r, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, x = i ? C : Object(l.a)(C);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.kb.POST,
						endpoint: x,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: r,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: r,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.kb.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), o = await Object(r.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}, O = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.kb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, C = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.kb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.kb.POST,
					data: l
				})
			}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s, o = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const r = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(o.B)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
			const a = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				i = e => {
					let t = e;
					do {
						if (a(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				l = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				d = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!d(n, e)) return;
					const {
						startContainer: s,
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, o), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(r, a), c = !1), c) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.R)(e, {}) === r.g.Large && !Object(l.Q)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.Ed
				})
			}

			function m(e) {
				switch (e) {
					case o.Fd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.Fd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
				const t = e.getFullYear(),
					n = e.getMonth();
				return `/posts/${n>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? r = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (r = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
					isContributorRequestsDisabled: d,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: l,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...n
				} = e.karma;
				return t || Object.values(n).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				headingContent: "vLtBjS_8SMsuZByMrcgJH",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			i.a.button("button", l.a);
			const d = e => t => o.a.createElement("div", {
				className: t.className
			}, e);

			function u(e, t, n) {
				return p(e, t, !0, {
					...n
				})
			}

			function m(e, t, n) {
				return p(e, t, !1, {
					...n
				})
			}

			function p(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : d(t),
					{
						meta: u
					} = s,
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: l.a.body
					}), u && o.a.createElement("div", {
						className: l.a.metaContainer
					}, u));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return i
				})), n.d(t, "c", (function() {
					return c
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(s || (s = {}));
			const o = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => o(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!o(s.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function o(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.o)(e);
					return {
						actionInfo: Object(r.d)(e),
						post: t && Object(r.H)(e, t) || null,
						profile: Object(r.Q)(e),
						screen: Object(r.Y)(e),
						subreddit: Object(r.gb)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...a(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...a(t)
				})
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				o = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
					source: "banner",
					action: "view",
					noun: "lang_listing_site"
				}),
				a = () => e => ({
					source: "banner",
					action: "click",
					noun: "lang_listing_site"
				}),
				i = () => e => ({
					source: "banner",
					action: "dismiss",
					noun: "lang_listing_site"
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.n)(e),
						screen: Object(c.Y)(e),
						subreddit: Object(c.gb)(e),
						post: t ? Object(c.H)(e, t) : null,
						profile: Object(c.Q)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				u = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: o ? Object(c.h)(e, o) : null,
						listing: Object(c.y)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const o = d(e);
					return Object(l.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				}, p = e => Object(l.a)({
					noun: "cancel",
					...d(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.n)(t),
					screen: Object(c.Y)(t),
					subreddit: Object(c.gb)(t),
					post: Object(c.H)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...d(e)
				}), f = e => Object(l.a)({
					noun: "save_edit",
					...d(e)
				}), v = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...d(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.n)(t),
					customFeed: Object(s.m)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/goldTopNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(o.h)(e, t),
						correlationId: Object(s.e)(s.a.GoldPayment, !1),
						profile: r.Q(e),
						subreddit: r.gb(e)
					}
				},
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				l = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
					source: a,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: a,
					action: "view",
					noun: "dropdown",
					...i(t, {
						offerContext: e
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: s.Y(e),
					profile: s.Q(e),
					subreddit: s.gb(e)
				}),
				r = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...o(t)
				}),
				a = e => t => ({
					...o(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...o(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...o(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "v", (function() {
				return P
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
					return t => ({
						...Object(o.n)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: a
					})
				},
				l = () => e => ({
					...Object(o.n)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(o.n)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(o.n)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				C = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				x = (e, t, n, r) => c => ({
					...Object(o.n)(c),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				y = (e, t, n, r) => c => ({
					...Object(o.n)(c),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				E = e => t => ({
					...Object(o.n)(t),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: e
					}
				}),
				P = () => e => ({
					...Object(o.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				j = () => e => ({
					...Object(o.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				_ = e => t => ({
					...Object(o.n)(t),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: e
					}
				}),
				S = () => e => ({
					...Object(o.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t) => n => ({
					...Object(o.n)(n),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: t
					}
				}),
				w = (e, t, n) => r => ({
					...Object(o.n)(r),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(o.d)(r),
						reason: n
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: e,
						subredditName: t
					}
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.H(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.h(n, t)
				}),
				i = o("show_panel"),
				c = o("esc_close"),
				l = e => r("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => a("s_save", e),
				O = e => r("h_hide", e),
				C = e => r("x_expando", e),
				x = e => r("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				_ = e => r("l_go_to_link", e),
				S = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: o.Y(e),
					profile: o.Q(e),
					subreddit: o.gb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? o.u(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(s.e)(s.a.PowerupsFlow, !1),
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				m = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				p = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(r.Bb)(t, {
							userName: e
						}).id
					},
					...o.n(t)
				}),
				h = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(r.Bb)(t, {
							userName: e
						}).id
					},
					...o.n(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = "/wiki";
				const o = e.countryCode ? `/${e.countryCode}` : "",
					r = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${o}${r}/r/${e.subredditName}/about/wiki` : `${o}${r}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(s.useContext)(o.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const o = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = o
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? o.a.createElement("span", l({}, s, {
					className: Object(r.a)(c.a.compactDownvoteWrapper, s.className)
				}), o.a.createElement(d, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : o.a.createElement("span", l({}, s, {
					className: Object(r.a)(c.a.downvoteWrapper, s.className)
				}), o.a.createElement(d, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? o.a.createElement("span", l({}, s, {
					className: Object(r.a)(c.a.compactUpvoteWrapper, s.className)
				}), o.a.createElement(d, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : o.a.createElement("span", l({}, s, {
					className: Object(r.a)(c.a.upvoteWrapper, s.className)
				}), o.a.createElement(d, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, n), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, o.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), o.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), o.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), o.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), o.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), o.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return o.a.createElement("svg", c({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, o.a.createElement("g", null, o.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, o.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#orangeYellowGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "orangeYellowGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#EC0623"
				}), o.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), o.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, o.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), o.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), o.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), o.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), o.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = (n("./src/polyfill.ts"), n("./src/lib/constants/headers.ts")),
				r = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./node_modules/@r/google-tag-manager/compiled.js"),
				i = n("./src/config.ts"),
				c = n("./node_modules/history/esm/history.js"),
				l = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/helpers/name/index.ts");
			const v = /^u_[\w-]+$/;
			var O = n("./src/reddit/selectors/user.ts");
			const C = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return v.test(Object(f.g)(e))
					}(t)) {
					const e = (null === (o = Object(O.l)(r)) || void 0 === o ? void 0 : o.displayText) || "";
					if (function(e, t) {
							return Object(f.g)(e) === Object(f.g)(t)
						}(t, function(e) {
							return `u_${Object(f.g)(e)}`
						}(e))) return
				} else if (Object(g.a)(t)) return;
				n((e => ({
					payload: e,
					type: h.f
				}))(e))
			}, x = Object(b.a)(h.e), y = e => ({
				payload: {
					subreddits: e
				},
				type: h.b
			}), E = e => ({
				payload: e,
				type: h.a
			});
			var P = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				_ = n("./src/lib/browser/isIncognito.ts"),
				S = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/extractQueryParams/index.ts"),
				w = n("./src/lib/filterQueryParams/index.ts"),
				M = n("./src/lib/getParsedUserAgent/index.ts"),
				N = n("./src/lib/initializeClient/index.tsx"),
				I = n("./src/lib/loadableAction/index.ts"),
				T = n("./src/lib/matchRoute/index.ts"),
				A = n("./src/lib/performance.js"),
				R = n("./src/lib/reCaptchaEnterprise/index.ts"),
				L = n("./src/lib/safeJSONParse/index.ts"),
				D = n("./src/lib/serviceWorker/index.ts"),
				F = n("./src/reduxMiddleware/apiContext.ts"),
				U = n("./src/reduxMiddleware/gqlContext.ts"),
				G = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/helpers/sendEvent.ts"),
				H = n("./src/telemetry/models/Event.ts"),
				q = n("./src/telemetry/models/Timer.ts"),
				W = n("./src/reddit/actions/apiRequestHeaders.ts"),
				V = n("./src/reddit/actions/chat/toggle.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				K = n("./src/reddit/actions/emailCollection/index.ts"),
				z = n("./src/reddit/actions/emailVerification.ts"),
				J = n("./src/reddit/actions/googleOneTap/index.ts"),
				Y = n("./src/reddit/actions/media.ts"),
				X = n("./src/lib/loadWithRetries/index.ts"),
				Z = () => Object(X.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				$ = n("./src/reddit/actions/nps.ts");
			const ee = Object(I.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var te = n("./src/reddit/actions/platform.ts"),
				ne = n("./src/reddit/actions/post.ts"),
				se = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				oe = n("./src/reddit/actions/session.ts"),
				re = n("./src/reddit/actions/survey/index.ts"),
				ae = n("./src/reddit/actions/theme.ts"),
				ie = n("./src/reddit/actions/toaster.ts"),
				ce = n("./src/reddit/actions/users.ts"),
				le = n("./node_modules/react-redux/es/index.js"),
				de = n("./node_modules/react-router/esm/react-router.js"),
				ue = n("./node_modules/reselect/es/index.js"),
				me = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Crypto/componentStyles.less"), n("./src/reddit/components/Root/index.m.less")),
				pe = n.n(me),
				be = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				he = n("./src/lib/classNames/index.ts"),
				ge = n("./src/reddit/components/AppRouter/index.tsx"),
				fe = n("./src/reddit/contexts/User/index.tsx");

			function ve(e) {
				return m.a.createElement(fe.b, null, e.children)
			}
			var Oe = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Ce = n("./src/reddit/constants/shortcuts.ts"),
				xe = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				ye = n.n(xe);
			var Ee = e => {
					let {
						children: t
					} = e;
					return m.a.createElement("div", {
						className: ye.a.shortcutDiv,
						id: Ce.b,
						tabIndex: -1
					}, m.a.Children.only(t))
				},
				Pe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				je = n("./src/reddit/contexts/NavbarExp.ts"),
				_e = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Se = n("./src/reddit/components/Header/Sparse.tsx"),
				ke = n("./src/reddit/components/ThemeProvider/index.tsx"),
				we = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Me = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/featureFlags/index.ts"),
				Ie = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Te = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Ae = n.n(Te);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = Object(ue.c)({
				showError: Ne.d.showVerboseErrors
			}), De = Object(le.b)(Le)(e => {
				const t = Object(u.useContext)(je.a);
				return m.a.createElement(we.a.Provider, {
					value: !1
				}, m.a.createElement(ke.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Se.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: Ae.a.container
				}, m.a.createElement("div", {
					className: Ae.a.mainContent
				}, m.a.createElement(Ie.a, {
					className: Ae.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: Ae.a.title
				}, Re._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: Ae.a.subTitle
				}, Re._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(Me.l, {
					onClick: () => window.location.reload(!0)
				}, Re._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Ae.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(he.a)(Ae.a.topImageContainer, {
						[Ae.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: Ae.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: Ae.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: Ae.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});
			var Fe = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ge = Object(ue.c)({
					isNavbarLikeMwebEnabled: Fe.a,
					theme: e => e.themes.current
				}),
				Be = Object(le.b)(Ge, {})(e => {
					let {
						children: t,
						theme: n,
						isNavbarLikeMwebEnabled: s
					} = e;
					const o = Object(_e.a)({
						theme: n
					});
					return m.a.createElement(je.a.Provider, {
						value: s
					}, m.a.createElement("div", {
						className: Object(he.a)(pe.a.container, {
							[pe.a.containerExp]: s
						}),
						style: {
							"--background": o.body,
							"--canvas": o.canvas
						}
					}, t))
				});

			function He(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Pe.a, null, m.a.createElement(Be, null, m.a.createElement(ve, null, m.a.createElement(be.a, null), m.a.createElement(Oe.a, null), m.a.createElement(Ee, null, m.a.createElement(t, null, m.a.createElement(de.d, {
						component: qe(n)
					}))))))
				}
				return m.a.createElement(De, {
					error: e.error
				})
			}
			const qe = e => t => m.a.createElement(ge.b, Ue({
				routes: e
			}, t));
			var We = n("./src/reddit/constants/localStorage.ts"),
				Ve = n("./node_modules/lodash/throttle.js"),
				Qe = n.n(Ve),
				Ke = n("./src/reddit/helpers/localStorage/index.ts");
			const ze = 1e3;
			class Je extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Qe()(() => Object(Ke.Fb)(this.props.storageKey, this.props.value), ze)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			Je.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Ye = Object(ue.a)(O.R, e => ({
				storageKey: We.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Xe = Object(le.b)(Ye)(Je);
			var Ze = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(Xe, null)),
				$e = n("./src/reddit/constants/experiments.ts"),
				et = n("./src/reddit/constants/headers.ts"),
				tt = n("./src/reddit/constants/history.ts"),
				nt = n("./src/reddit/constants/jsapiEvents.ts"),
				st = n("./src/reddit/constants/parameters.ts"),
				ot = n("./src/reddit/constants/screenWidths.ts"),
				rt = n("./src/reddit/contexts/AdminEvents.ts"),
				at = n("./src/reddit/contexts/ApiContext.tsx"),
				it = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				ct = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const lt = () => e => t => e(t);
			var dt = n("./src/lib/safeBadgeUpdate.ts"),
				ut = n("./src/reddit/selectors/appBadges.ts");

			function mt(e) {
				const t = Object(ut.g)(e);
				Object(dt.a)(t)
			}
			var pt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== ct.b && n.type !== ct.d || mt(e.getState()), s
				} : lt,
				bt = n("./node_modules/brcast/dist/brcast.es.js"),
				ht = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var gt = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(bt.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(ht.b)(s) || Object(O.O)(s)) && (e = !0, Object(B.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(ht.b)(a)) {
									const n = Object(O.O)(a);
									e && !n ? (e = !1, Object(B.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(B.e)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(bt.a)([]),
					middleware: () => e => t => e(t)
				}),
				ft = n("./node_modules/lodash/debounce.js"),
				vt = n.n(ft),
				Ot = n("./src/lib/domUtils/index.ts");
			const Ct = 30 * S.lb;
			let xt = Date.now();
			const yt = () => {
					xt = Date.now()
				},
				Et = !!Object(Ot.f)() && {
					passive: !0
				};
			window.addEventListener("click", yt, !1), window.addEventListener("wheel", vt()(yt, 250), Et), window.addEventListener("mousemove", vt()(yt, 250), Et), window.addEventListener("keydown", vt()(yt, 250), Et);
			var Pt = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - xt >= Ct ? (e.dispatch(oe.h()), yt()) : yt()
					})), e => t => e(t)
				},
				jt = n("./node_modules/lodash/pick.js"),
				_t = n.n(jt),
				St = n("./src/reddit/actions/header.ts"),
				kt = n("./src/reddit/actions/preferences.ts"),
				wt = n("./src/reddit/constants/preferences.ts"),
				Mt = n("./src/reddit/helpers/cookies/index.ts");
			const Nt = new Set([kt.g, kt.i, ae.b, kt.d, kt.o, St.d, St.e, kt.r]);
			var It = e => t => n => {
					const s = t(n);
					if (Nt.has(n.type)) {
						const t = e.getState().user,
							n = _t()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", wt.b, wt.d, wt.e]);
						Object(Mt.a)({
							prefs: n
						})
					}
					return s
				},
				Tt = n("./src/lib/fastdom/index.ts"),
				At = n("./src/reddit/actions/tabBadging.ts"),
				Rt = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Lt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Dt = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ft = n("./src/reddit/selectors/platform.ts");
			const Ut = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Gt = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Ft.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Ut.has(o), a = Object(Lt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Bt(e), l = n && n.isRobotIndexable, d = s === S.Ob.COMMENTS || s === S.Ob.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === S.Ob.SEARCH_RESULTS || s === S.Ob.SUBREDDIT_LEADERBOARD || d && u;
					return i || r || c || (!1 === l || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Bt = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(O.f)(e, s);
						n = !!Object(Dt.a)(t, !1, s)
					}
					return n
				};
			var Ht = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const qt = "theme-color",
				Wt = `meta[name="${qt}"]`;

			function Vt(e) {
				return e ? Ht.b.body : Ht.a.body
			}
			var Qt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === te.f) {
						const t = e.getState(),
							s = Object(O.Q)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							let n = 0;
							n = Object(Rt.b)(e) ? Object(ut.i)(e) : Object(ut.j)(e), Object(At.c)(n, t)
						})(t, o.title) : Tt.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Gt(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === kt.i) {
						! function(e) {
							Tt.a.write(() => {
								const t = document.head.querySelector(Wt);
								if (t) {
									const n = Object(O.eb)(e);
									t.content = Vt(n)
								}
							})
						}(e.getState())
					}
					return s
				} : lt,
				Kt = n("./src/reddit/helpers/survey/index.ts");
			var zt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Kt.a).filter(t => t === e).length)(t.type) && Object(Ke.U)(Kt.a[t.type]), e(t)) : lt;
			const Jt = 5 * S.lb;
			var Yt = e => {
					const t = Qe()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(oe.g())
					}, Jt);
					let n, s;
					const o = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const o = new Date(n.expires),
								r = s + Math.floor(.8 * (o.getTime() - s));
							Date.now() > r && t && t()
						},
						r = e => {
							s = Date.now();
							const o = new Date(e.expires).getTime() - s,
								r = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * o));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== oe.a && t.type !== oe.b && t.type !== oe.c && t.type !== oe.e || r(t.payload), t.type === oe.d && (clearTimeout(n), n = null), e(t))
				},
				Xt = n("./src/reddit/singleton/tracing/index.ts");
			var Zt = e => e => t => {
					const n = () => e(t);
					return Xt.b.isEnabled ? Xt.b.recordLocalSpan(t.type, n) : e(t)
				},
				$t = n("./src/reddit/actions/frontpage/constants.ts"),
				en = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				tn = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				nn = n("./src/reddit/actions/pages/profilePosts.ts"),
				sn = n("./src/reddit/actions/pages/search/index.ts"),
				on = n("./src/reddit/actions/pages/subreddit.ts"),
				rn = n("./src/reddit/actions/search.ts"),
				an = n("./src/reddit/actions/subreddit.ts"),
				cn = n("./src/reddit/actions/tracking.ts"),
				ln = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				dn = n("./src/reddit/helpers/history/index.ts"),
				un = n("./src/reddit/helpers/trackers/commentList.ts"),
				mn = n("./src/reddit/helpers/trackers/postList.ts"),
				pn = n("./src/reddit/helpers/trackers/screenview.ts"),
				bn = n("./src/reddit/selectors/subreddit.ts"),
				hn = n("./src/reddit/helpers/routeKey/index.ts");
			var gn = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(cn.c({
							routeKey: t
						}))
					};
					if (n.type === te.b) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(bn.F)(s, o) || "",
							i = (s.subreddits.about[r] || {}).advertiserCategory;
						a.trigger("pageview", {
							..._t()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(hn.b)(c, s, Object(ln.a)(s));
							if (e && G.c.has(e)) {
								const t = G.c.end(e);
								!Object(Ft.i)(s) && Object(dn.b)(tt.b.IsOverlay) || Object(pn.k)(c, s, q.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(ln.a)(s, l),
							u = Object(hn.b)(l, s, d);
						if (!u) return t(n);
						G.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case $t.b:
						case tn.b:
						case tn.e:
						case nn.PROFILE_POSTS_LOADED:
						case en.e:
						case on.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case sn.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case $t.f:
						case an.i:
						case nn.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							mn.l(r, t);
							break
						}
						case en.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							un.a(r, t);
							break
						}
						case rn.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				fn = n("./src/reddit/helpers/chooseVariant/index.ts"),
				vn = n("./src/reddit/helpers/datadome.ts"),
				On = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Cn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				xn = n("./src/reddit/helpers/trackers/global.ts");
			let yn = null;
			const En = () => {
				yn && window.clearTimeout(yn), yn = null
			};
			var Pn = e => {
					yn = window.setTimeout(() => {
						En(), Object(G.a)(Object(xn.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", En)
				},
				jn = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				_n = n("./src/reddit/actions/connection/constants.ts");
			const Sn = Object(b.a)(_n.b),
				kn = Object(b.a)(_n.a),
				wn = Object(b.a)(_n.c);
			var Mn = n("./src/reddit/actions/meta.ts"),
				Nn = n("./src/reddit/selectors/telemetry.ts");
			const In = (e, t) => Object(G.a)({
					...Nn.n(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(Nn.d)(e, {
						type: t
					})
				}),
				Tn = "(display-mode: minimal-ui)";
			const An = 3 * S.Tb;

			function Rn(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Tn).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Mn.i)());
				const t = window.matchMedia(Tn);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Mn.i)()) : e.dispatch(Object(Mn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						mt(t)
					}, 1e3), In(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Sn()), setTimeout(() => e.dispatch(wn()), An)
				}), window.addEventListener("offline", () => e.dispatch(kn()))
			}
			var Ln = n("./src/lib/cookieConsent/index.ts"),
				Dn = n("./src/lib/permanentCookieOptions.ts"),
				Fn = n("./src/reddit/constants/cookie.ts");
			const Un = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Fn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: Fn.g,
							value: s,
							cookieOptions: Object(Dn.a)(),
							cookieContext: t
						};
					Object(Ln.c)(o)
				}
			};
			var Gn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Bn = n("./src/reddit/models/Toast/index.ts"),
				Hn = n("./src/reddit/reducers/index.ts"),
				qn = n("./src/reddit/routes/index.ts");
			var Wn = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Vn = n("./src/reddit/selectors/experiments/survey.ts");
			const Qn = {
					displayDelay: 15,
					displayOnRoutes: [S.Ob.SUBREDDIT, S.Ob.COMMENTS],
					experimentName: $e.Kd,
					experimentVariant: $e.Od.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Kn = e => {
					const {
						base_url: t
					} = Object(Nn.X)(e), n = Object(Ft.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...o && {
							s: o
						},
						...s && {
							p: s
						}
					}
				},
				zn = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Qn, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Qn)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Qn, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Qn, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(fn.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: fn.a
							}) === s
						})(Qn, e)) return {
						displayDelay: Qn.displayDelay,
						externalVars: Kn(e)
					}
				};
			var Jn = n("./src/reddit/selectors/meta.ts"),
				Yn = n("./src/reddit/selectors/onboarding.ts");
			var Xn = n("./src/reddit/singleton/EventSystem.ts"),
				Zn = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				$n = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				es = n("./src/lib/initializeClient/installReducer.ts"),
				ts = n("./src/reddit/reducers/features/categories/index.ts"),
				ns = n("./src/lib/sentry/index.ts"),
				ss = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const os = Object(b.a)(ss.C),
				rs = () => {
					return Object(Ke.B)(We.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var as = n("./src/reddit/actions/global/constants.ts");
			Object(es.a)({
				features: {
					categories: ts.a
				}
			});
			const is = Object(b.a)(as.a),
				cs = e => async (t, n) => {
					t((() => async e => {
						const t = rs();
						t && e(os(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || ns.c.withScope(e => {
						Object(ns.a)(e, {
							serverLogging: !1
						}), ns.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(is(o))
				};
			var ls = n("./src/reddit/actions/login.ts");
			const ds = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				us = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return ds.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(ls.c)())
				};
			var ms = n("./src/reddit/actions/notificationsInbox/index.ts"),
				ps = n("./src/reddit/actions/onboarding/index.ts"),
				bs = n("./src/reddit/constants/countrySites.ts"),
				hs = n("./src/reddit/selectors/countrySites.ts");
			const gs = bs.b ? `${bs.a}/${bs.b}` : `${bs.a}`,
				fs = (e, t) => {
					return !!Object(hs.d)(e) && !(t && !Object(hs.c)(t))
				},
				vs = e => e.startsWith("/r/") ? e.replace("/r/", `/${gs}/r/`) : e;
			var Os = n("./src/reddit/selectors/experiments/countrySites.ts");
			var Cs = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				xs = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			const ys = Object(ue.a)(e => Object(fn.c)(e, {
				experimentEligibilitySelector: fn.a,
				experimentName: $e.yb
			}), e => e === $e.wd);
			Object(r.e)(r.b.EntryPointStart);
			const Es = Object(F.a)({
					actionDispatchers: {
						reddaidReceived: ce.u,
						loidReceived: ce.r,
						sessionTrackerReceived: ce.z
					},
					authHeaders: {
						[et.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: ce.d,
						loidReceived: ce.b,
						sessionTrackerReceived: ce.k,
						userAuthenticated: oe.c,
						userLoggedOut: oe.d,
						userReauthenticated: oe.e,
						headersReceived: W.a
					},
					onBeforeRequestFactory: jn.a,
					statsAppName: S.n.Redesign
				}),
				Ps = Object(U.a)(Es.apiContext),
				js = Object(U.a)(Es.apiContext, i.a.gqlRealtime2Url),
				_s = gt();
			let Ss;
			Object(N.a)({
				reducerMap: Hn.a,
				routes: qn.a,
				apiContext: Es.apiContext,
				gqlContext: Ps.gqlContext,
				gqlRealtime2Context: js.gqlContext,
				appFactory: (e, t) => m.a.createElement(rt.a.Provider, {
					value: _s.broadcaster
				}, m.a.createElement(at.a.Provider, {
					value: {
						apiContext: Es.apiContext,
						gqlContext: Ps.gqlContext,
						gqlRealtime2Context: js.gqlContext
					}
				}, m.a.createElement(it.b, null, m.a.createElement(He, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(Ze, null)))),
				appName: S.n.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = Ss;
						if (!n) return;
						n.dispatch(Object(te.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(te.k)())
							}
						}))
					}
				}),
				customMiddleware: [P.a.withExtraArgument({
					routes: qn.a,
					apiContext: Es.apiContext,
					gqlContext: Ps.gqlContext,
					gqlRealtime2Context: js.gqlContext
				}), _s.middleware, Pt, Es.middleware, Ps.middleware, js.middleware, Yt, It, Zt, gn, Qt, zt, Cs.a, pt, e => t => n => {
					let s, o;
					if (!Object(Os.b)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!fs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(hs.c)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${gs}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!fs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(hs.c)(e);
								(n || t) && (o.permalink = vs(o.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, o))
					} catch (a) {
						n.payload = {
							...r
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(Os.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!fs(e, t.name)) return t;
							const n = Object(hs.c)(t.id);
							if (t.name || n) {
								const e = vs(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!fs(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(hs.c)(s.id),
									o = Object(hs.c)(s.name);
								if (e || o) {
									const e = vs(s.url),
										o = {
											...s,
											url: e
										};
									t[n] = o
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (o) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: n
					} = e;
					const s = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (s) {
						const e = n.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const n of ["referrers", "metas"]) Object.keys(t.platform[n]).length && (t.platform[n] = {
							[e]: t.platform[n][s]
						})
					}
					return t
				},
				staticPages: {
					loading: m.a.createElement(Gn.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: n,
						store: s
					} = e;
					window.addEventListener("message", e => {
						const t = i.a.mediaUrl;
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(Y.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), Rn(s);
					const r = s.getState();
					ys(r) && s.dispatch(Object(W.b)({
							headers: {
								[o.a]: "1"
							}
						})), Object(B.d)("enabled" === Object(fn.c)(s.getState(), {
							experimentEligibilitySelector: fn.a,
							experimentName: $e.uf,
							expEventOverride: !1
						})), Object(B.c)("enabled" === Object(fn.c)(s.getState(), {
							experimentEligibilitySelector: fn.a,
							experimentName: $e.wf
						})), Object(B.g)("enabled" === Object(fn.c)(s.getState(), {
							experimentEligibilitySelector: fn.a,
							experimentName: $e.vf
						})), Object(B.f)(Ps.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(xn.a)("tab_closed")(e),
								n = H.g(t),
								o = Object(Zn.a)(n),
								r = Object($n.b)(o);
							Object(D.b)("sendV2EventsData", {
								data: o,
								headers: r
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(te.h)());
					const a = Object(O.eb)(s.getState());
					s.dispatch(Object(ae.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(fn.c)(e, {
							experimentEligibilitySelector: fn.a,
							experimentName: $e.H
						}) === $e.Q.Enabled)(s.getState())) {
						Xt.b.enableTracing(!0);
						const e = Xt.b.createTraceFromId(l);
						Xt.b.setParent(e)
					}
					s.dispatch(Object(te.i)(n));
					t.listen((e, t) => {
						const o = Object(T.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(te.j)(e, t, o))
					});
					const {
						currentPage: d
					} = r.platform;
					if (d) {
						const e = [st.i];
						if (Object(Ft.j)(r) && e.push(st.f), e.length > 0) {
							const t = Object(w.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return On.a.initialize(r), {
						localStorageData: Object(Ke.C)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: o,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					Ss = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: o
							} = n.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: o
							},
							a = s.subredditName,
							i = Object(bn.F)(n, a) || "";
						if (Un(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(C(i, a));
							const e = Object(Ft.e)(n);
							e && l.dispatch(x(e))
						}
						Xn.a.publish(nt.c, r, document)
					});
					const p = l.getState(),
						b = Object(Cs.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(E(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(bn.F)(p, h) || "";
					if (h) {
						l.dispatch(C(g, h));
						const e = Object(Ft.e)(p);
						e && l.dispatch(x(e))
					}
					const f = Object(bn.F)(p, h) || "",
						v = (p.subreddits.about[f] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: h,
						advertiserCategory: v
					}), l.dispatch(cs({
						localStorageData: d
					})), Object(Wn.f)(p) && Object(J.d)(p), l.dispatch(Object(J.c)()), Object(Yn.c)(p) && (l.dispatch(ee()), history.replaceState(history.state, "", Object(w.a)(window.location.href, [st.x]))), l.dispatch(us()), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							i = Object(bn.F)(e, a) || "";
						if (Object(D.a)(), Un(i, {
								country: e.meta.country
							}), o && o.meta) {
							const a = o.meta.name;
							if (Object(G.b)(S.n.Redesign, {
									page: a,
									type: "rum"
								}), Object(M.c)(e.meta.userAgent) && window.innerWidth > ot.b) {
								const t = Object(r.f)(c);
								A.a && A.a.timing && Xt.b.isEnabled && (Xt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, A.a.timing.fetchStart, A.a.timing.responseStart), Xt.b.recordPerformanceTimings(`${a}_time_to_interactive`, A.a.timing.fetchStart, A.a.timing.domInteractive));
								const n = [Object(vn.a)()],
									s = !0;
								if (Object(Ft.g)(e)) {
									const t = Object(Cn.a)(e);
									n.push(Object(Cn.c)(t))
								}
								const o = {
									isLoggedIn: Object(O.R)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(o, t, s)
							}
							const i = A.a.timing.domInteractive - A.a.timing.navigationStart;
							Object(pn.k)(o.routeMatch, l.getState(), q.TimerType.Initial, i, o.urlParams);
							const d = Object(k.a)(window.location.href);
							d && d.get(st.a) && history.replaceState(history.state, "", Object(w.a)(window.location.href, [st.a])), Object(L.a)(d.get(st.G)) && l.dispatch(Object(ie.f)({
								kind: Bn.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(st.H) && (l.dispatch(Object(z.a)(d.get(st.H))), history.replaceState(history.state, "", Object(w.a)(window.location.href, [st.H])));
							let u = !1;
							const m = Object(O.U)(e);
							(Object(dn.b)(tt.b.JustLoggedIn) || m) && (l.dispatch(Object(ie.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(dn.c)(tt.b.JustLoggedIn), history.replaceState(history.state, "", Object(w.a)(window.location.href, [st.q]))), Object(dn.b)(tt.b.JustLoggedOut) && (u = !0, Object(dn.c)(tt.b.JustLoggedOut)), Z().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(ps.openReonboardingModalIfNeeded)());
							if (!1 !== Ke.V()) {
								let n;
								Object(Wn.a)(e) && (n = () => {
									const {
										dispatch: e
									} = l;
									t.listen(() => e(Object(J.b)())), e(Object(J.b)())
								});
								const s = () => {
									n && n(), p()
								};
								Z().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(u, !1, s)))
							} else p();
							if (a === S.Ob.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(I.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(K.c)())
						}
						Object(O.R)(l.getState()) && l.dispatch(Object(V.d)()), Object(j.requestIdleCallback)(async () => {
							l.dispatch(Object($.d)()), await Object(_.a)() && Object(xn.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = zn(e);
								t && (await (async e => {
									return (await Object(X.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							var e;
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Ke.Ub(Date.now()), Object(G.a)(Object(xn.a)("tab_backgrounded")(t))), (e => Object(fn.c)(e, {
									experimentEligibilitySelector: e => !Object(Jn.d)(e),
									experimentName: $e.sc
								}) === $e.Fc.Enabled)(t) && "visible" === document.visibilityState && n && Object(pn.k)(n.routeMatch, l.getState(), q.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Ke.w(),
									t = Ke.x(),
									n = Ke.H(),
									s = Ke.R();
								if (s && e && n) {
									const o = Date.now() - s;
									Object(G.a)(Object(xn.e)("tab_backgrounded", n)(l.getState(), o, e, t))
								}(s || e || n || t) && (Ke.db(), Ke.hb(), Ke.fb(), Ke.eb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && xs.d[n.locationState.clickId] && !xs.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(xs.b)(n.locationState.clickId) : Object(xs.c)(n.locationState.clickId))
						}), Object(Jn.g)(l.getState()) && Pn(l.getState), l.dispatch(Object(re.n)())
					}), window.history.scrollRestoration = "manual", Xn.a.attachStore(l), l.dispatch(Object(se.b)(R.a.PageLoad));
					const P = Ke.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						N = Ke.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(ne.C)({
						posts: null != P ? P : []
					})), l.dispatch(Object(Q.k)({
						comments: null != N ? N : []
					})), Object(Rt.f)(l.getState()) && l.dispatch(Object(ms.e)()), Object(j.requestIdleCallback)(() => {
						if (Object(Vn.g)(l.getState())) {
							const e = Ke.D();
							(!e || e && Date.now() - e.lastUpdated >= S.C) && l.dispatch(Object(re.f)())
						}
					})
				},
				raven: {
					tags: {
						project: S.n.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: a,
					...l
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return o.a.createElement("div", u({
					className: Object(r.a)(d.a.backgroundContainer, n),
					style: p
				}, l))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(l.u)(),
				h = Object(a.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.R)(e, t)
				}),
				g = Object(r.b)(h);
			t.a = b(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: r,
					fitPageToContent: a,
					forcedLayout: d,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return o.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(l.O)(g),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !a,
						[m.a.onlyChildMargin]: !n
					})
				}, f))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: h,
					contentBanner: g,
					contentClassName: f,
					contentNavBar: v,
					disableFullscreen: O,
					fitPageToContent: C,
					forcedLayout: x,
					hideOnlyChildMargin: y,
					isCollectionLayout: E,
					isPageSwapped: P,
					maxWidth: j,
					navBar: _,
					redditStyle: S,
					sidebar: k,
					sidebars: w,
					trendingUnit: M,
					subredditId: N
				} = e, I = M ? "28px" : "0", T = P ? {
					marginRight: `${c.q}px`,
					marginTop: I
				} : {
					marginLeft: `${c.q}px`,
					marginTop: I
				}, A = k && o.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, E ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: T
				}, k), R = o.a.createElement(a.a, {
					hideOnlyChildMargin: y,
					className: f,
					disableFullscreen: O,
					fitPageToContent: C,
					forcedLayout: x,
					isCollectionLayout: E
				}, g, h);
				let L;
				L = w ? o.a.createElement(o.a.Fragment, null, w[0], R, w[1]) : P ? o.a.createElement(o.a.Fragment, null, A, R) : o.a.createElement(o.a.Fragment, null, R, A);
				const D = O ? `${j||d.a+2*c.m}px` : "100%",
					F = Object(s.useContext)(u.a);
				return o.a.createElement(m.a, {
					subredditId: N
				}, o.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, l.i, n, {
						[b.a.outerContainerExp]: F
					}),
					ref: p
				}, o.a.createElement(r.a, {
					className: l.h,
					redditStyle: S,
					backgroundColor: t
				}), o.a.createElement("div", {
					className: b.a.innerContainer
				}, _, v, (e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null)(e), o.a.createElement("div", {
					style: {
						maxWidth: D
					}
				}, M), o.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: D
					}
				}, L))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = n.n(o);
			t.a = s.a.button("inlineButton", r.a)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/EconManagement/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.hasOwnProperty("source")
			}

			function o(e) {
				return "object" != typeof e[0]
			}
			var r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(r || (r = {}))
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				topImageContainerExp: "_2NU2A-ZU5J-cxP78RF0oeb"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`],
				c = {
					action: r.a,
					chunk: o.s.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Avatar").then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: r.c,
					chunk: o.s.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: o.s.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
				}
			});
			let l = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			l = Object(r.a)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.s.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Ob.COLLECTION_COMMENTS
					},
					prefetches: [o.s.FRONTPAGE, o.s.COMMENTS_PAGE, o.s.SUBREDDIT]
				},
				m = {
					...u,
					path: l
				},
				p = {
					...u,
					path: d,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "CommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CommentsPage/index.tsx"
				}
			});
			let c = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"];
			c = Object(r.a)(c);
			const l = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.s.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT]
				}),
				m = [u(o.Ob.COMMENTS, c), u(o.Ob.DUPLICATES, l), u(o.Ob.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CountrySitePage/index.tsx"
					}
				}),
				c = ["/"],
				l = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: o.s.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.INTERNATIONAL_SITE_PAGE
					},
					path: Object(r.a)(c, !1),
					prefetches: [o.s.SUBREDDIT]
				};
			t.a = l
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: r.a,
					chunk: o.s.ECON_MANAGEMENT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement").then(n.bind(null, "./src/reddit/pages/EconManagement/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/followers",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileFollowersPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileFollowersPage").then(n.bind(null, "./src/reddit/pages/Followers/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Followers/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: o.s.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.FOLLOWERS
					},
					path: a,
					prefetches: [o.s.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedModal/index.ts");
			const a = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.X).map(e => a.X[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.s.FRONTPAGE,
					component: p,
					exact: !0,
					prefetches: [a.s.COMMENTS_PAGE, a.s.SUBREDDIT]
				},
				h = {
					...b,
					path: u,
					meta: {
						name: a.Ob.INDEX
					},
					routePredicate: l.R
				},
				g = {
					...b,
					path: u,
					meta: {
						name: a.Ob.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.R)(e) && !Object(c.a)(e)
				},
				f = {
					...b,
					path: u,
					meta: {
						name: a.Ob.INDEX
					},
					routePredicate: e => Object(c.a)(e)
				},
				v = {
					...b,
					path: m,
					meta: {
						name: a.Ob.LISTING
					},
					routePredicate: l.R
				},
				O = {
					...b,
					path: m,
					meta: {
						name: a.Ob.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.R)(e) && !Object(c.a)(e)
				},
				C = {
					...b,
					path: m,
					meta: {
						name: a.Ob.LISTING
					},
					routePredicate: e => Object(c.a)(e)
				},
				x = [h, g, f, v, O, C];
			t.a = x
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Geotagging").then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				l = {
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: o
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(r.fetchTopicPage)(o(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: o.s.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Ob.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				l = Object.keys(a.T).map(e => a.T[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.s.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Ob.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				o = n("./src/reddit/routes/acknowledgements/index.ts"),
				r = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/avatar/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts");
			var l = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				d = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = n("./src/reddit/routes/countrySitePage/index.ts"),
				b = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var h = [],
				g = n("./src/reddit/routes/econManagement/index.ts");
			var f = {
					action: Object(b.a)(() => n.e(8).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				v = n("./src/lib/addQueryParams/index.ts");
			var O = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							queryParams: r
						} = e;
						await t(Object(i.c)(Object(v.a)("/", r)))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.s.COMMENTS_PAGE, c.s.FRONTPAGE]
				},
				C = n("./src/reddit/routes/followers/index.ts"),
				x = n("./src/reddit/routes/framedGild/index.ts"),
				y = n("./src/reddit/routes/framedModal/index.ts"),
				E = n("./src/reddit/routes/frontpage/index.ts"),
				P = n("./src/reddit/routes/geotagging/index.ts"),
				j = n("./src/reddit/routes/inbox/index.ts"),
				_ = n("./src/reddit/routes/meta/index.ts"),
				S = n("./src/reddit/routes/moderationPages/index.ts"),
				k = n("./src/reddit/routes/modListing/index.ts"),
				w = n("./src/reddit/routes/modQueue/index.ts"),
				M = n("./src/reddit/routes/multireddit/index.ts"),
				N = n("./src/reddit/routes/notificationsInbox/index.ts"),
				I = n("./src/reddit/routes/postCreation/constants.ts");
			const T = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.s.EMPTY,
				exact: !0,
				meta: {
					name: c.Ob.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var A = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(I.b))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...T],
				R = n("./src/reddit/routes/postCreation/index.ts"),
				L = n("./src/reddit/routes/postDraft/index.ts"),
				D = n("./src/reddit/routes/powerups/index.ts");
			var F = {
					action: () => async e => await e(Object(i.c)(D.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				U = n("./src/reddit/routes/predictions/index.ts");
			var G = {
					action: () => async e => await e(Object(i.c)(U.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				B = n("./src/reddit/routes/premium/index.ts"),
				H = n("./src/reddit/routes/profileComments/index.ts"),
				q = n("./src/reddit/endpoints/me/index.ts"),
				W = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var V = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							rest: r
						} = e.params, {
							queryParams: a
						} = e, c = await Object(q.a)(o());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(W.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = r ? `/user/${l}/${(e=>e.endsWith("/")?e:`${e}/`)(r)}` : `/user/${l}/`,
							u = Object(v.a)(d, a);
						await t(Object(i.c)(u))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Q = n("./src/reddit/routes/profileModSettings/index.ts"),
				K = n("./src/reddit/routes/profileOverview/index.ts"),
				z = n("./src/reddit/routes/profilePosts/index.ts"),
				J = n("./src/reddit/routes/profilePrivate/index.ts"),
				Y = n("./src/server/helpers/canonicalUrl.tsx");
			var X = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = ((e, t, n) => {
							const s = `/user/${e}/${t?Object(Y.a)(t.replace("submitted","posts")):""}`;
							return Object(v.a)(s, n)
						})(n, s, o);
						await t(Object(i.c)(r))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Z = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var $ = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(v.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Ob.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				ee = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				te = n("./src/reddit/routes/report/index.ts"),
				ne = n("./src/reddit/routes/searchResults/index.ts"),
				se = n("./src/reddit/routes/settings/index.ts");
			var oe = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Ob.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Ob.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				re = n("./src/reddit/routes/subreddit/index.ts"),
				ae = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ie = n("./src/reddit/routes/subredditWiki/index.ts"),
				ce = n("./src/reddit/routes/talk/index.ts"),
				le = n("./src/reddit/routes/topic/index.ts");
			const de = [o.a, r.a, a.b, l, d.a, u.a, p.a, V, X, $, ...s.a, ...m.a, f, ...E.a, P.a, B.a, D.b, U.b, ce.b, g.c, F, G, C.a, x.a, y.a, R.a, L.a, ...A, O, ..._.a, M.a, w.a, k.c, N.a, j.a, H.a, Q.a, K.a, z.a, Z.a, J.a, ee.a, ...se.a, ...oe, ne.a, ...ie.a, le.a, re.b, ae.a, S.a, te.a, ...h];
			t.a = de
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "/community-points/",
				o = "/community-points/documentation/*"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				l = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/routes/meta/constants.ts");
			const h = {
					action: () => async (e, t) => {
						Object(p.R)(t()) || await e(Object(l.t)())
					},
					chunk: o.s.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e(0), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				g = {
					action: i.a,
					chunk: o.s.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityPointsLearnMore").then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [b.b, b.a, "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: o.s.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.R)(n()) || await t(Object(l.t)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(d.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: v,
					chunk: o.s.EMPTY,
					exact: !0,
					meta: {
						name: o.Ob.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [h, g, f, O]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				l = Object.keys(a.sb).map(e => a.sb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.s.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Ob.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				l = n("./node_modules/react-router/esm/react-router.js");
			const d = Object.keys(a.hc).map(e => a.hc[e]).join("|"),
				u = [a.hc.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				g = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				f = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"];
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...f];
			v = Object(i.a)(v);
			const O = e => !!Object(l.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				C = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.s.MODERATION_PAGES,
					component: g,
					exact: !0,
					meta: {
						name: a.Ob.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = C
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				l = "/me/m/:multiredditName",
				d = Object.keys(a.X).map(e => `${l}/:sort(${a.X[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.X).map(e => `${u}/:sort(${a.X[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.s.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Ob.MULTIREDDIT
					},
					path: p,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: o.s.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.s.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.POST_DRAFT
					},
					path: a,
					prefetches: [o.s.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: r.a,
					chunk: o.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.POWERUPS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: r.a,
					chunk: o.s.PREDICTIONS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Predictions",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Predictions").then(n.bind(null, "./src/reddit/pages/Predictions/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Predictions/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.s.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: o.s.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.s.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.s.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${d})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.s.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Ob.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.s.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				c = "/user/:profileName/snoo",
				l = {
					path: c,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.s.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.s.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Ob.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.s.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/report",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportPage").then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: o.s.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: o.s.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT, o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.ec).map(e => a.ec[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: a.s.SETTINGS,
					exact: !0,
					meta: {
						name: a.Ob.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: a.s.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Ob.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: o.s.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Ob.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/SubredditWiki/index.tsx"
				}
			});
			let d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			d = Object(a.a)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.s.EMPTY,
					exact: !0,
					meta: {
						name: r.Ob.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.s.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: r.Ob.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.s.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === r.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = o.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, o.a.format(c)) : e
			}
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: r.a,
					chunk: o.s.TALK,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Talk",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Talk").then(n.bind(null, "./src/reddit/pages/Talk/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Talk/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Ob.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.s.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Ob.TOPIC
					},
					prefetches: [o.s.COMMENTS_PAGE, o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: l.Hd
			}), e => e === l.Ld.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/selectors/accountManager/modalData.ts"),
				O = n("./src/reddit/selectors/meta.ts");
			const C = Object(a.a)(p.f, O.b, v.a, (e, t, n) => e && "DE" === t && n === f.a.Report),
				x = Object(a.a)(e => Object(m.c)(e, {
					experimentEligibilitySelector: C,
					experimentName: l.ke
				}), e => e === l.te.Enabled);
			var y = n("./src/lib/getParsedUserAgent/index.ts");
			const E = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(y.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.df
			}), e => e === l.pf.Enabled);
			var P = n("./src/reddit/selectors/responsiveSettings.ts");
			const j = Object(a.c)({
					frontpageSignupVariant: d.a,
					googleOneTapVariant: u.b,
					magicLinkVariant: g.a,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.ff
					}),
					blockingInterstitialVariant: h.e,
					blockingInterstitialV2Variant: h.f
				}),
				_ = Object(a.c)({
					isGoogleSsoGisEnabled: b,
					isNetzDGComplianceEnabled: x,
					isSafariOneTapEnabled: E,
					isBlockingInterstitialEnabled: h.b,
					isBlockingInterstitialV2Enabled: h.c
				}),
				S = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(v.c)(e), v.a, P.a, O.i, j, _, (e, t, n, a, d, u, m, p) => {
					const {
						blockingInterstitialVariant: b,
						blockingInterstitialV2Variant: h,
						frontpageSignupVariant: g,
						googleOneTapVariant: f,
						ssoLoginLinkVariant: v,
						magicLinkVariant: O
					} = m, {
						isBlockingInterstitialEnabled: C,
						isBlockingInterstitialV2Enabled: x,
						isGoogleSsoGisEnabled: y,
						isNetzDGComplianceEnabled: E,
						isSafariOneTapEnabled: P
					} = p;
					let j = `${r.a.accountManagerOrigin}${e}`;
					if (j = Object(i.a)(j, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), v && (j = Object(i.a)(j, {
							[`experiment_${l.ff}`]: v
						})), y && (j = Object(i.a)(j, {
							[`experiment_${l.Hd}`]: "enabled"
						})), E && (j = Object(i.a)(j, {
							[`experiment_${l.ke}`]: l.te.Enabled,
							thing_id: n
						})), j = Object(i.a)(j, {
							experiment_d2x_onboarding: "enabled"
						}), P && (j = Object(i.a)(j, {
							[`experiment_${l.df}`]: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(j, {
						[l.Cb]: f
					});
					if (C && (j = Object(i.a)(j, {
							[`experiment_${l.Gb}`]: b
						})), x && (j = Object(i.a)(j, {
							[`experiment_${l.Hb}`]: h
						})), g && (j = Object(i.a)(j, {
							[l.Gc]: g,
							uiMode: t
						})), O && (j = Object(i.a)(j, {
							[`experiment_${l.be}`]: O
						})), d && (j = Object(i.a)(j, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== o.DEFAULT_LOCALE && e && (j = Object(i.a)(j, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? j : j = Object(i.a)(j, {
						actionSource: a
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = e => e.accountManagerModalData.actionSource,
				o = e => e.accountManagerModalData.redirectUrl,
				r = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/models/EconManagement/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: o.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case r.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Loading
						};
					case r.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Error
						};
					case r.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: o.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case r.a: {
						const n = t.payload,
							s = n.type;
						return {
							...e,
							relatedData: {
								...e.relatedData,
								[s]: n.entity
							}
						}
					}
					default:
						return e
				}
			};
			Object(s.a)({
				pages: {
					econManagement: i
				}
			});
			const c = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.currentEntity) || null
				},
				l = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || o.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const o = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return o && o.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, o;
					return (null === (o = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === o ? void 0 : o.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				l = e => i.find(t => !!Object(a.a)(c(e, t))),
				d = Object(s.a)(l, e => !!e),
				u = e => {
					const t = l(e);
					return !!t && c(e, t) === o.W.SkipOnboarding
				}
		},
		"./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: e => Object(i.g)(e) && Object(a.f)(e),
				experimentName: o.nc
			}), e => e === o.ob.Enabled)
		},
		"./src/reddit/selectors/experiments/econStorefrontClaim.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: r.R,
					experimentName: s.rd
				});
				return !(!t || Object(s.Of)(t))
			}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.ab, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(r.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.Gc,
					throttledVariants: {
						[o.Gd.CurrentThrottled]: o.Gc
					}
				}), i.a),
				m = e => e === o.Gd.CurrentThrottled,
				p = e => e === o.Gd.CurrentThrottled || e === o.Gd.CurrentUnthrottled || e === o.Gd.CurrentUnthrottledCopy || e === o.Gd.NewPopUnthrottledCopy,
				b = e => e === o.Gd.NewPopUnthrottledCopy,
				h = e => e === o.Gd.NewPageUnthrottledCopy || e === o.Gd.NewPageUnthrottledCopyFields,
				g = e => e === o.Gd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Nb,
					experimentEligibilitySelector: a.e
				}), e => e === o.Z.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Ob,
					experimentEligibilitySelector: a.e
				}), e => e === o.ab.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Pb,
					experimentEligibilitySelector: a.e
				}), e => e === o.bb.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Qb,
					experimentEligibilitySelector: a.e
				}), e => e === o.cb.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Sb,
					experimentEligibilitySelector: a.e
				}), e => e === o.eb.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Rb,
					experimentEligibilitySelector: a.e
				}), e => e === o.db.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.je,
				experimentEligibilitySelector: o.a
			}) === s.se.Enabled
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Ge
					}) === s.wd
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Fe
					}) === s.wd
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.we
					}) === s.wd
				},
				l = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.ve
					}) === s.wd
				}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/featureFlags/subredditPoints.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = e => {
					const t = Object(o.a)(e);
					if (!t) return null;
					const n = Object(r.O)(e),
						a = [];
					for (const o of t) {
						const t = e.subreddits.models[o];
						if (!t) return null;
						const r = Object(i.h)(e, {
							subredditId: o
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !n || a.push({
							id: o,
							displayText: t.displayText,
							hasPowerups: r
						})
					}
					return a
				},
				l = Object(a.a)(c, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (e.features.removalReasons.reasonOrder[n]) {
						return e.features.removalReasons.reasonOrder[n].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = {},
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || a
				},
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				l = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				d = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				u = Object(s.a)(l, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(r.B)(n)
				}, (e, t) => t && (e === o.Ob.COMMENTS || e === o.Ob.SUBREDDIT))
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Fb, e => !(!e || !e.length));
			const c = Object(s.a)(i.D, e => !e),
				l = Object(s.a)(i.Fb, e => e && e.find(e => e === r.a.Apple)),
				d = Object(s.a)(i.Fb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.g].includes(e))
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "Governance~Reddit~Subreddit", "Governance~Reddit", "AuthorHovercard~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.5082f460706bbd2d79cc.js.map