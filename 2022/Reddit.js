// https://www.redditstatic.com/desktop2x/Reddit.bcf96c794f2a2a455ba9.js
// Retrieved at 1/5/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
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
				d = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				l = t.getLocation = function() {
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
					var n = d();
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
					if (d() && i) {
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
						}, l(), o)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
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
				d = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					r = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = u - c + (m - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, d = m, i = l;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[s++] = b >>> 24 & 255, r[s++] = b >>> 16 & 255, r[s++] = b >>> 8 & 255, r[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[s++] = h >>> 8 & 255, r[s++] = 255 & h, r[s++] = h >>> 24 & 15 | 16, r[s++] = h >>> 16 & 255, r[s++] = l >>> 8 | 128, r[s++] = 255 & l;
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
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
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
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
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
			const b = ({
				className: e,
				isVisible: t,
				...n
			}) => o.a.createElement("div", p({
				className: Object(r.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

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
						}), Object(l.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(c.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: c,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, h = p;
						return o.a.createElement(i.a, {
							container: document.getElementById(d.b)
						}, o.a.createElement(b, {
							className: c,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, h))))
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
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const o = 120 * s.hb;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= o
					}
				})()), e
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
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
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/getParsedUserAgent/index.ts"),
				o = n("./src/lib/localStorageAvailable/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				a = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const i = () => {
					if (Object(a.a)() !== r.c.NotificationsSupported) return r.a.Unsupported;
					const e = Object(o.a)() && localStorage.getItem(r.f) === r.g;
					return "granted" === Notification.permission ? r.a.Granted : "denied" === Notification.permission ? r.a.Denied : e ? r.a.Closed : r.a.Default
				},
				c = () => !!Object(o.a)() && (localStorage.removeItem(r.f), !0),
				d = async (e, t, n, a, c, d) => {
					const l = i();
					if (l === r.a.Unsupported) return void d();
					if (Object(o.a)()) {
						const t = localStorage.getItem(r.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + r.i > n) return void d();
						localStorage.setItem(r.h, n.toString())
					}
					if (!t && l === r.a.Denied) return a(!1, !0), void d();
					if (!t && l === r.a.Granted) return c(!1), void d();
					if (!t && l === r.a.Closed) return void d();
					let u = r.a.Default;
					const m = navigator.userAgent;
					switch (Object(s.b)(m) || Object(s.f)(m) ? function(e) {
						return new Promise(t => setTimeout(t, e))
					}(1800).then(() => {
						u === r.a.Default && n()
					}) : n(), u = await Notification.requestPermission()) {
						case "granted":
							c(!0);
							break;
						case "denied":
							a(!0, !0);
							break;
						case "default":
							d();
							break;
						default:
							a(!0, !1), localStorage.setItem(r.f, r.g)
					}
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
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = t.length,
						s = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - s === n
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
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: l.jb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, {
				apiContext: s
			}) => {
				(await
					function(e) {
						return Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(s())).ok ? (Object(i.b)(), await m(s(), !0), e && window.location.reload()) : (m(s(), !1), t(Object(c.f)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, {
				apiContext: n
			}) => {
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
					}(n())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return se
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return de
			})), n.d(t, "s", (function() {
				return le
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return ge
			})), n.d(t, "p", (function() {
				return fe
			})), n.d(t, "f", (function() {
				return ve
			})), n.d(t, "g", (function() {
				return Oe
			})), n.d(t, "j", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return ye
			})), n.d(t, "c", (function() {
				return _e
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ne
			})), n.d(t, "k", (function() {
				return Ie
			})), n.d(t, "r", (function() {
				return Te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				g = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/localStorage.ts"),
				v = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = n("./src/reddit/helpers/genericServerError/index.ts"),
				P = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const M = (e, t, n, s) => {
					let o, r;
					if (s === S.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				N = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(O.a)(Object(C.a)(e, [y.a]), {
						method: o.jb.POST,
						endpoint: Object(E.a)(Object(k.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {
							comment: Object(P.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(P.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(j.a)()
					})
				};
			var I = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				B = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				G = n("./src/reddit/models/Comment/index.ts"),
				H = n("./src/reddit/models/PostDraft/index.ts"),
				q = n("./src/reddit/models/RichTextJson/index.ts"),
				W = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				V = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				Z = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(Z.M)(o) && e) {
							const s = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(X.H), ne = Object(r.a)(X.J), se = Object(r.a)(X.I), oe = Object(r.a)(X.G), re = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await B.g(e, n, t, r)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, s, o, r) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						u = Object(z.e)(l);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await M(c(), m, s, o))) return void a(Object(d.i)(ae))
					}
					a(de(e, t, n, s, o, r))
				}, ce = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, n, r, a, i, c) => async (u, h, {
					apiContext: f
				}) => {
					u(Object(d.g)(ae));
					const v = h(),
						O = v.features.comments.submit.pending[n];
					if (!v.user.account || O) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const x = v.user.account.displayText,
						C = r.commentMode;
					let y;
					if (c ? (y = await Object(R.i)(f(), e, r, x), u(Object(m.a)({
							streamId: e,
							level: y.body.automuteLevel
						}))) : y = await N(f(), e, r, x, C), y.ok) {
						let s;
						s = y.body, u(ne({
							...s,
							headCommentId: Object(Q.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(J.H)(h(), {
							postId: e
						});
						u(Object(l.z)(o, g.a.CommentSubmitted))
					} else {
						y.error && y.error.type === o.Jb && B.i(v, ce(r), e);
						const t = y.error && y.error.fields && y.error.fields[0] ? y.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(oe({
							draftKey: n,
							error: y.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: t
						}))
					}
					re(h(), t, a, y).then(() => y.ok && a === S.i.RICH_TEXT ? Object(D.b)(D.a.CommentComposer) : void 0), i || Object(p.d)()
				}, le = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: l
					} = e, u = n(), m = Object(z.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await M(s(), p, c, l))) return void t(Object(d.i)(ae))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: o,
						formData: c,
						editorMode: l
					}))
				}, ue = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(ae));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(te({
						draftKey: c,
						draft: l
					}));
					const h = m.user.account.displayText,
						g = l.commentMode,
						f = await N(s(), r, l, h, g);
					if (f.ok) t(se({
						...f.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (f.error && f.error.type === o.Jb) {
							const e = Object(K.b)(m, {
								commentId: r
							});
							if (!e) return;
							B.i(m, ce(l), e.postId, r)
						}
						t(oe({
							draftKey: c,
							error: f.error
						}))
					}
					re(n(), a, u, f), Object(p.d)()
				}, me = Object(r.a)(X.q), pe = Object(r.a)(X.p), be = Object(r.a)(X.l), he = (Object(r.a)(X.g), Object(r.a)(X.m)), ge = (Object(r.a)(X.t), (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(q.G)(t)) o(he({
						editorMode: e,
						draftKey: n,
						content: i ? q.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(A.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(he({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), fe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						l = Object(a.a)(H.c.replyToComment, t);
					if (!Object(Z.K)(o())) return s(Object(c.j)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(Q.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = r.user.prefs.commentMode,
						g = Object(F.d)();
					if (g) {
						const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => W.s(e, null)).map(e => W.l([e])),
								n = W.s("", null),
								s = W.l([n]);
							b = {
								document: [W.c(t), s]
							}
						}
					}
					const f = r.features.comments.drafts[l];
					let v;
					if (v = g ? {
							commentMode: h,
							draftType: H.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : f || {
							commentMode: h,
							draftType: H.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(Z.M)(r)) {
						const n = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: v
						});
						s(Object(i.f)(n))
					} else s(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: v
					}))
				}, ve = e => async t => {
					t(Object(Y.p)(e)), t(ye(e))
				}, Oe = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(fe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Y.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), Ce = Object(r.a)(X.s), ye = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, a) => {
					const i = a();
					i.user.account && (B.d(i), r(Ce({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: H.c.edit,
							hasFocus: !0
						}
					})))
				}, Ee = Object(r.a)(X.C), je = Object(r.a)(X.B), Pe = Object(r.a)(X.D), _e = Object(r.a)(X.h), Se = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: r
				}) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					n(Ee({
						draftKey: s
					})), B.e(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, n, s, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === S.i.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(O.a)(Object(C.a)(e, [y.a]), {
								endpoint: Object(E.a)(Object(w.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.jb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(_.a)(e)
							} : {
								...e,
								body: {
									comment: Object(P.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(P.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(j.a)()
							})
						})(i(), e, 0, r, d, l);
					if (u.ok) {
						const o = u.body;
						n(Pe({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Y.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(je({
						draftKey: s,
						error: u.error
					}))
				}, ke = Object(r.a)(X.z), we = Object(r.a)(X.y), Me = Object(r.a)(X.A), Ne = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					n(ke({
						id: e
					})), B.b(e, a);
					const i = await ((e, t) => Object(O.a)(Object(C.a)(e, [y.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: o.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(j.a)()
					}))(r(), e);
					i.ok ? n(Me({
						id: e,
						postId: t
					})) : n(we({
						id: e,
						error: i.error
					}))
				}, Ie = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Y.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(T.o)(s(), e, o)).ok || t(Object(Y.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Te = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var a, i, c, d, l, u;
					n(Object(Y.c)());
					const m = e => Object(b.f)(Object(b.e)(e, V.b.Error));
					if (((null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === f.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === G.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Y.n)(i)), (await ((e, t) => Object(x.a)(e, {
								...I,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.sb)(null !== (l = null === (d = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(b.f)({
								kind: V.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Y.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(o.c),
				b = Object(s.a)(o.b),
				h = Object(s.a)(o.e),
				g = Object(s.a)(o.f),
				f = Object(s.a)(o.d),
				v = Object(s.a)(o.a),
				O = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t(),
						o = Object(m.k)(s);
					if (o && o.isEmployee) try {
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
						})(n());
						e(p(t))
					} catch (c) {
						e(b()), e(Object(r.f)({
							duration: r.a,
							kind: d.b.Error,
							text: c.message
						}))
					}
				}, x = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						c = Object(m.k)(o);
					if (c && c.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${l.b}=${e}`;
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
							})(s(), e);
							t(g(n))
						} catch (u) {
							t(f()), t(Object(r.f)({
								duration: r.a,
								kind: d.b.Error,
								text: u.message
							}))
						}
					}
				}, C = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						c = Object(m.k)(o);
					if (!c || !c.isEmployee) return;
					const l = Object(u.b)(o);
					if (l) try {
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
						})(s(), l.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (p) {
						t(Object(r.f)({
							duration: r.a,
							kind: d.b.Error,
							text: p.message
						}))
					}
				}, y = (e, t, n) => async (s, o, {
					gqlContext: i
				}) => {
					const l = o(),
						p = Object(m.k)(l);
					if (p && p.isEmployee && Object(u.b)(l)) try {
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
						})(i(), e, t, n), s(Object(r.f)({
							duration: r.a,
							kind: d.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (b) {
						s(Object(r.f)({
							duration: r.a,
							kind: d.b.Error,
							text: b.message
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
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, {
					apiContext: s
				}) => {
					const o = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || o && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), o);
						if (e.ok) {
							const n = e.body;
							o && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.jb.GET
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
				d = n("./src/reddit/components/Settings/modalIds.ts"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(l.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(l.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(d.h))
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
				d = n("./src/reddit/models/EmailSettings/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, {
				apiContext: o
			}) => {
				switch (e) {
					case d.a.Success:
						t(Object(c.f)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.f)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.f)({
							kind: l.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: l.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, {
				apiContext: s
			}) => {
				const c = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(s(), e);
				if (c.ok && c.body && c.body.success) return d.a.Success;
				switch (c.body.reason) {
					case d.a.AlreadyVerified:
						return d.a.AlreadyVerified;
					case d.a.WrongUser:
						return d.a.WrongUser;
					default:
						return d.a.Error
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
				})), Object(a.K)(i) || await t(o.t());
				const d = n();
				if (!Object(a.K)(d)) return t(Object(s.f)())
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
				Object(o.K)(n) || await e(s.t());
				const r = t();
				if (!Object(o.K)(r)) throw new Error("Failed to login")
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
				a = n("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: d.a
				}
			});
			const l = Object(o.a)(i.o);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				try {
					const t = await Object(a.d)(n());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(l(n))
					}
				} catch (o) {
					Object(s.b)() || console.error(o), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", o.response), e.setExtra("status", null === (t = o.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = o.response) || void 0 === n ? void 0 : n.error), r.c.captureException(o)
					})
				}
			}
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			n("./src/lib/makeGqlRequest/index.ts"), n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(o.a)(r.c),
				u = Object(o.a)(r.b),
				m = Object(o.a)(r.a),
				p = Object(o.a)(r.f),
				b = Object(o.a)(r.e),
				h = Object(o.a)(r.d),
				g = e => async (t, n, {
					gqlContext: s
				}) => {
					e === c.a.Push ? t(p()) : t(l()), await async function(e, t, n) {
						const s = await Object(i.a)(e(), {
							channel: t
						});
						if (s.ok && s.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									s = n && n.sections;
								if (s) return function(e) {
									const t = {},
										n = [];
									let s = {},
										o = [];
									const r = e => {
										const {
											rowIds: r,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const o = e.rows[s],
														r = o.messageType;
													t.push(r), n[r] = o
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...a
										}, o = [...o, ...r];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: r
										}
									};
									for (let a = 0; a < e.length; a++) r(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: o
										}
									}
								}(s)
							}(s.body);
							t === c.a.Push ? n(b(e)) : n(u(e))
						} else t === c.a.Push ? n(h({
							error: s.error
						})) : n(m({
							error: s.error
						}))
					}(s, e, t)
				};
			const f = Object(o.a)(r.g),
				v = e => async (t, n, {
					gqlContext: o
				}) => {
					(await Object(i.b)(o(), e)).ok ? (O(t, e), function(e) {
						e(Object(a.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(a.f)({
							kind: d.b.Error,
							text: s.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function O(e, t) {
				e(f({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/notifications/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => a.d.pushNotificationsBrowserSupported(e) ? Object(r.a)() : o.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case o.a.Denied:
							i.kb(!1), Object(s.c)();
							break;
						case o.a.Default:
						case o.a.Granted:
							i.kb(!0), Object(s.c)();
							break;
						case o.a.Closed:
							i.kb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "j", (function() {
				return Q
			})), n.d(t, "g", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				}),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				g = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				f = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(O || (O = {}));
			var x = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var C = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var y = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				j = n("./src/reddit/models/Badge/index.ts"),
				P = n("./src/reddit/models/NotificationInbox/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(o.a)(a.e),
				M = Object(o.a)(a.b),
				N = Object(o.a)(a.a),
				I = e => async (t, n, {
					gqlContext: s
				}) => {
					var o, r;
					const a = n(),
						i = Object(k.a)(a);
					t(w());
					const l = await ((e, t) => Object(d.a)(e, {
						...h,
						variables: t
					}))(s(), e);
					if (null === (r = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return t(N({
						error: l.error
					})), void t(Object(c.d)());
					const u = l && l.body,
						m = A(u);
					if (null === i) {
						const e = Object(k.f)(a);
						t(L(m.nodes, e.length))
					}
					t(M(m))
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, o;
					const r = await (e => Object(d.a)(e, {
						...g
					}))(n());
					if (null === (o = null === (s = r.error) || void 0 === s ? void 0 : s.fields) || void 0 === o ? void 0 : o.length) return;
					const a = r && r.body,
						i = R(a).nodes.filter(e => !e.viewedAt);
					i.length && i.forEach(e => {
						var n;
						Object(E.n)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, A = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						s = n && n.elements,
						o = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: o
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, L = (e, t) => async (n, s) => {
					const o = s(),
						r = Object(k.a)(o),
						a = ((e, t) => {
							let n, s = 0;
							const o = new Date,
								r = o.getDate(),
								a = o.getMonth(),
								i = o.getFullYear();
							for (; s < e.length && !n;) {
								const o = e[s],
									c = new Date(o.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== r || l !== a || u !== i) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					a && a !== r && n(D({
						index: a
					}))
				}, D = Object(o.a)(a.g), F = (Object(o.a)(a.h), Object(o.a)(a.f)), U = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...x,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: r
						})).ok) {
						t(F({
							id: e
						}));
						const o = Object(k.f)(n());
						t(L(o)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), _.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), _.b.Error)))
				}, B = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await Object(y.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), _.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), _.b.Error)))
				}, G = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await Object(y.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, _.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), B(e, t)))
					})()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), _.b.Error)))
				}, H = e => async (t, n, {
					apiContext: o
				}) => {
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/sendreplies`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), _.b.Error)))
				}, q = e => async (t, n, {
					gqlContext: o
				}) => {
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), _.b.Error)))
				}, W = Object(o.a)(a.d), V = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					let a;
					if (t === P.a.CommentReply || t === P.a.PostReply || t === P.a.PrivateMessage || t === P.a.UsernameMention) {
						if ((a = await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_message`),
								method: m.jb.POST,
								data: {
									id: t
								}
							}))(o(), e)).ok) {
							let e = Object(S.a)(s());
							if (e > 0) {
								e--;
								const t = Object(r.e)({
									count: e,
									key: j.c.ActivityTab
								});
								n(Object(r.a)(t)), n(Object(i.e)())
							}
						}
					} else a = await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/read_notification`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(o(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(W({
							id: e,
							now: t
						}))
					}
				}, Q = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = (new Date).toLocaleDateString(),
						o = await ((e, t) => Object(d.a)(e, {
							...C,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: s
						});
					if (o.ok) {
						const t = o.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(r.a)(n)), e(Object(i.d)()))
					}
				}, K = Object(o.a)(a.c), z = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: o
						}
					} = t(), a = new Date;
					if (!o || a.getTime() - new Date(o).getTime() > 15e3) {
						if ((await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_all_messages`),
								method: m.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(n(), [O.Activity, O.Messages])).ok) {
							const t = Object(r.e)({
									count: 0,
									key: j.c.MessageTab
								}),
								n = Object(r.e)({
									count: 0,
									key: j.c.ActivityTab
								});
							e(Object(r.a)({
								...t,
								...n
							})), e(K({
								now: a.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), _.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.a)()
				})), await e(Object(r.t)()), Object(a.K)(t()) || e(Object(i.i)())
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
					d = Object(c.K)(n),
					l = Object(c.H)(n);
				d && l || await e(Object(s.c)("/")), e(Object(r.m)({
					title: "Econ control panel"
				})), await e(Object(o.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.d)()
				})), Object(i.K)(t()) || await e(Object(a.t)()), await e(Object(o.b)()).then(() => {
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
					const d = (n.routeMatch.match.params || {}).subredditName;
					if (d) {
						const n = [],
							l = t();
						Object(c.K)(l) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(d, null);
						n.push(e(Object(r.subredditDataRequested)(u, d, {}))), await Promise.all(n);
						const m = Object(i.C)(t(), d);
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
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/gold/powerups.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				m = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(r.m)({
						title: Object(s.h)()
					})), await e(Object(c.t)()), !Object(m.K)(n)) return;
				await e(Object(a.q)());
				const p = Object(d.b)(n),
					b = Object(l.a)(n);
				if (p) return await e(Object(o.d)(b));
				await e(Object(i.e)()), await e(Object(o.o)());
				const h = Object(u.c)(n);
				if (h && h.length) {
					const t = h.map(e => e.id);
					await e(Object(o.d)(t))
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.i)()
				})), await e(Object(a.t)()), Object(i.K)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.o)()
				}))
			}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
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
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				g = (e, t, n) => async (o, i, {
					apiContext: g
				}) => {
					c.j(i(), t);
					const v = t === d.i.MARKDOWN,
						O = t === d.i.RICH_TEXT,
						x = m.k;
					if (v && Object(l.G)(n)) return o(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (O && !n) return o(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void o(f(t));
					o(p(x));
					const C = await Object(a.a)(g(), t, v ? JSON.stringify(n) : n);
					C.ok ? (o(b(x)), o(h({
						editorKey: e,
						editorMode: t,
						content: C.body.output
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
					const a = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === a) return;
					const c = e === d.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(i.pb)(o + 1)
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
				c = e => async (t, n, {
					apiContext: s
				}) => {
					const r = await Object(o.a)(s(), e);
					r && r.ok ? t(a({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/comment/authoring.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/shortcuts.ts"),
				c = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = n("./src/reddit/selectors/activeModal.ts"),
				u = n("./src/reddit/selectors/gild.ts"),
				m = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts");
			const b = [m.u, m.o, e => !!Object(u.d)(e)],
				h = (e, t) => async (n, u, {
					apiContext: m
				}) => {
					const h = u();
					for (const e of b)
						if (e(h)) return;
					const g = document.activeElement,
						f = h.shortcuts.activeCommentId,
						v = Object(p.c)(h);
					if (g && "true" === g.contentEditable && f && v) n(o.a({
						parentCommentId: f,
						commentsPageKey: v
					})), Object(p.a)(f);
					else if (Object(l.b)(h)) Object(p.b)(i.b), n(Object(r.i)(Object(l.b)(h)));
					else if (h.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: O
					} = h.shortcuts;
					e(t && O ? c.b(O, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				r = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
				d = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/sso/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b);
			var f = n("./src/reddit/actions/survey/index.ts"),
				v = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				C = n("./src/reddit/constants/history.ts"),
				y = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				j = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				P = n("./src/reddit/helpers/history/index.ts"),
				_ = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				S = n("./src/reddit/helpers/trackers/moreReplies.ts"),
				k = n("./src/reddit/helpers/trackers/onboarding.ts"),
				w = n("./src/reddit/icons/svgs/Close/index.tsx"),
				M = n("./src/reddit/models/Sso/index.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/accountManager.ts"),
				T = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				A = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				R = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				L = n("./src/reddit/selectors/experiments/survey.ts"),
				D = n("./src/reddit/selectors/telemetry.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				B = n.n(U);
			const G = l.a.iframe("IFrame", B.a),
				H = l.a.button("CloseButton", B.a),
				q = l.a.wrapped(w.a, "Close", B.a),
				W = Object(c.c)({
					accountManagerSrc: I.c,
					actionSource: I.a,
					frontpageSignupVariant: T.a,
					isBlockingInterstitialEnabled: A.b,
					isDismissSurveyEnabled: L.a,
					isHardBlockingInterstitialEnabled: A.c,
					isLoggedIn: F.K,
					isMoreRepliesSignupEnabled: R.a,
					redirectUrl: I.b
				}),
				V = Object(i.b)(W, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(f.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(D.o)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(j.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(m.z)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(v.f)(Object(v.e)(t, N.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(v.f)(Object(v.e)(t, N.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(v.f)(Object(v.e)(t, n)))
					}
				})),
				Q = ({
					data: e,
					origin: t
				}) => e && e.success && (e.type === x.a.ChangePassword || e.type === x.a.Close || e.type === x.a.CreateAccount || e.type === x.a.GoogleOneTapDisplayed || e.type === x.a.GoogleOneTapFlowFailed || e.type === x.a.GoogleOneTapSkipped || e.type === x.a.Login || e.type === x.a.PreferenceStatus || e.type === x.a.Register || e.type === x.a.Resize || e.type === x.a.ShowStep || e.type === x.a.SSOLinkFail || e.type === x.a.SSOLinkSuccess || e.type === x.a.SSOUnlinkFail || e.type === x.a.SSOUnlinkSuccess || e.type === x.a.Subscribe || e.type === x.a.TwoFactorChanged) && t === s.a.accountManagerOrigin,
				K = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class z extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
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
						const t = e === M.a.Apple ? y.a.LINK_APPLE_SSO : y.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === M.a.Apple ? y.a.UNLINK_APPLE_SSO : y.a.UNLINK_GOOGLE_SSO;
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && Q(e))
							if (t.type === x.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === x.a.Close) this.closedByUser();
						else if (t.type === x.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === x.a.Login) this.onLogIn();
						else if (t.type === x.a.ChangePassword) this.onChangePassword();
						else if (t.type === x.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === x.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === x.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === x.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === x.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === x.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === x.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === x.a.ShowStep ? this.onShowStep(t.step) : t.type === x.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(P.a)(C.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							redirectUrl: n
						} = this.props;
						let s = "";
						s = n || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.redirectTo(s, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === x.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), N.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), N.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), N.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = (e, t = !1) => {
						const n = {
							[E.p]: "true"
						};
						t && (n[E.v] = "true"), this.isSignupModalSuccessful && (n[E.w] = "true"), window.location.replace(Object(d.a)(e, n))
					}, this.closedByUser = () => {
						const {
							isBlockingInterstitialEnabled: e,
							isDismissSurveyEnabled: t,
							isMoreRepliesSignupEnabled: n,
							onDismissSignupTrigger: s,
							sendEvent: o
						} = this.props;
						if (this.currentStep) {
							const e = K[this.currentStep];
							e && o(Object(k.p)(e))
						}
						this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), n && o(Object(S.b)()), e && o(Object(_.a)()), this.close(), this.isSignupModalDismissed && t && s()
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
						return e && u.l.includes(e)
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
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === x.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
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
					} = this.state, i = (o === x.c.Index || o === x.c.Register) && (t === u.a.UserProfile || t === u.a.FeedPost || t === u.a.Comments || t === u.a.FeedScroll || t === u.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(G, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: r,
						onLoad: this.onIFrameLoad
					}), c && a.a.createElement(H, {
						onClick: this.closedByUser
					}, a.a.createElement(q, null)))
				}
			}
			t.a = V(Object(O.c)(z))
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
				return Hm
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				d = n("./node_modules/lodash/throttle.js"),
				l = n.n(d),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				j = n("./src/lib/isEqualWithoutKey/index.ts"),
				P = n("./src/lib/isSimpleClick/index.ts"),
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
				B = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				H = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class q extends m.a.Component {
				constructor(e) {
					super(e), this.timeoutNumber = null, this.handleNextPage = () => {
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
					}, this.setPageInterval = (e = 0) => {
						this.clearPageInterval(), this.timeoutNumber = window.setTimeout(this.handleNextPage, this.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = ({
						img: e,
						style: t
					}) => m.a.createElement("img", {
						key: e,
						src: `${B.a.assetPath}/${e}`,
						style: t
					}), this.renderItem = (e, t) => {
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
								backgroundImage: `url("${B.a.assetPath}/${e.img}")`,
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
				Z = `${B.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Y = `${B.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				X = [{
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
						items: X,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: Z
					})), m.a.createElement(z, {
						className: V.a.iphone
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(J, {
						src: Y
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
					href: "https://about.reddit.com"
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
					href: "https://about.reddit.com/careers/"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(re, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(re, {
					href: "https://about.reddit.com/press/"
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
			const de = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				le = I.a.div("Container", ce.a),
				ue = I.a.wrapped(T.a, "IFrame", ce.a),
				me = I.a.wrapped(ee, "Images", ce.a),
				pe = I.a.wrapped(ae, "Links", ce.a),
				be = I.a.div("MainContent", ce.a),
				he = I.a.div("MainContentColumn", ce.a),
				ge = I.a.button("NotReady", ce.a),
				fe = I.a.span("NotReadyText", ce.a),
				ve = I.a.wrapped(D.a, "NotReadyIcon", ce.a),
				Oe = Object(x.a)(e => {
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
					}, m.a.createElement(le, {
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
			class xe extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ce extends m.a.Component {
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
					}, this.renderScroller = ({
						scrollTo: e
					}) => m.a.createElement(xe, {
						scrollTo: e
					})
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
							scrollTo: Object(N.spring)(s, de)
						}
					}, this.renderScroller))
				}
			}
			var ye = Object(A.c)(Ce),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				je = n.n(Ee),
				Pe = n("./src/lib/localStorageAvailable/index.ts"),
				_e = n("./src/reddit/actions/modal.ts"),
				Se = n("./src/higherOrderComponents/makeAsync.tsx"),
				ke = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Me = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Te = n("./src/reddit/selectors/activeModalId.ts"),
				Ae = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Re = n.n(Ae);
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), De = I.a.button("CloseButton", Re.a), Fe = I.a.wrapped(Ie.a, "Close", Re.a), Ue = I.a.div("Container", Re.a), Be = I.a.p("Description", Re.a), Ge = I.a.div("Footer", Re.a), He = I.a.h3("Heading", Re.a), qe = I.a.img("SnooImage", Re.a), We = I.a.div("Wrapper", Re.a), Ve = Object(f.c)({
				activeModalId: Te.a
			});
			class Qe extends m.a.Component {
				constructor() {
					super(...arguments), this.onCloseButtonClick = () => {
						const {
							modalToggled: e,
							activeModalId: t
						} = this.props;
						t && e(t)
					}
				}
				render() {
					return m.a.createElement(We, null, m.a.createElement(Ue, null, m.a.createElement(He, null, Le._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(Be, null, Le._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(qe, {
						src: `${B.a.assetPath}/img/magnifying-glass-snoo.png`
					})), m.a.createElement(Ge, null, m.a.createElement(Ne.l, {
						onClick: this.onCloseButtonClick
					}, Le._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(De, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(Fe, null)))
				}
			}
			var Ke = Object(p.b)(Ve, e => ({
					modalToggled: t => e(Object(_e.i)(t))
				}))(Object(Me.a)(Object(A.c)(Qe))),
				ze = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Je = n("./src/lib/loadWithRetries/index.ts");
			var Ze = Object(Se.a)({
				getComponent: () => Object(Je.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ye = () => null;
			var Xe = Object(Se.a)({
					ErrorComponent: Ye,
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Ye
				}),
				$e = n("./src/reddit/actions/structuredStyles/index.ts"),
				et = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				tt = n("./src/reddit/constants/modals.ts"),
				nt = n("./src/reddit/controls/TextButton/index.tsx"),
				st = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: ot
			} = n("./node_modules/fbt/lib/FbtPublic.js"), rt = Object(p.b)(null, (e, {
				subredditId: t
			}) => ({
				closeModal: () => {
					e(Object(_e.i)(tt.a.BLADE_NIGHTMODE)), e(Object($e.f)())
				},
				openBlade: () => {
					e(Object($e.e)(t))
				}
			}));
			var at = Object(Me.a)(rt(e => m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, ot._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(nt.a, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(et.l, null, m.a.createElement(et.o, null, ot._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(et.g, null, m.a.createElement(et.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, ot._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(et.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, ot._("Continue", null, {
					hk: "413jMZ"
				})))))),
				it = n("./src/reddit/actions/authorFlair.ts"),
				ct = n("./src/reddit/actions/gold/powerups.ts"),
				dt = n("./src/reddit/actions/userFlair/index.ts"),
				lt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ut = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				mt = n("./src/reddit/components/FlairPreview/index.tsx"),
				pt = n("./src/reddit/components/FlairSearch/index.tsx"),
				bt = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				ht = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				gt = n("./src/reddit/layout/row/Inline/index.tsx"),
				ft = n("./src/reddit/models/Flair/index.ts"),
				vt = n("./src/reddit/models/User/index.ts"),
				Ot = n("./src/reddit/selectors/authorFlair.ts"),
				xt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ct = n("./src/reddit/selectors/telemetry.ts"),
				yt = n("./src/reddit/selectors/user.ts"),
				Et = n("./src/reddit/selectors/userFlair.ts"),
				jt = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				Pt = n.n(jt);
			const _t = e => e.flairModalContext && e.currentUser && Object(vt.e)(e.currentUser) === e.flairModalContext.username,
				St = e => e.authorFlair || _t(e) && e.userFlairData.applied || null,
				kt = I.a.wrapped(gt.a, "Section", Pt.a),
				wt = I.a.div("CheckboxText", Pt.a);
			class Mt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(Ct.jb)(t, this.props.subredditId)
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
						previewFlair: St(e),
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
					} = e.displaySettings, r = this.state.showFlair !== o, a = St(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(bt.b)(n, t, a);
					return !(i || c !== bt.a.NoChanges || !r) || i
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
						templates: d,
						templateIds: l
					} = n, u = this.canSave(), p = _t(e);
					return m.a.createElement(ut.a, null, m.a.createElement(lt.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(mt.a, {
						flair: t.previewFlair,
						flairTemplateType: ft.d.UserFlair,
						placeholderText: o.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(pt.a, {
						flair: t.previewFlair,
						flairTemplateType: ft.d.UserFlair,
						subredditId: s,
						templates: d,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(kt, null, m.a.createElement(ht.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(wt, null, o.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: Pt.a.buttonsRow
					}, c && m.a.createElement(Ne.t, {
						className: Pt.a.goBackButton,
						priority: Ne.c.Plain,
						onClick: e.openAchiementFlairModal
					}, o.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: Pt.a.rightSideButtons
					}, a && m.a.createElement(Ne.o, {
						className: Pt.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Ne.l, {
						disabled: !u,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const Nt = Object(p.b)(() => Object(f.c)({
				authorFlair: Ot.b,
				currentUser: yt.k,
				flairModalContext: Ot.c,
				isMod: (e, t) => !!Object(xt.m)(e, t),
				userFlairData: Et.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(dt.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(it.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(ct.f)())
			}))(Mt);
			var It = Object(Me.a)(Object(A.c)(Nt)),
				Tt = n("./src/reddit/selectors/bannedUser.ts"),
				At = n("./src/reddit/selectors/muted.ts"),
				Rt = n("./src/reddit/selectors/notificationPrefs.ts"),
				Lt = n("./src/reddit/selectors/platform.ts"),
				Dt = n("./src/reddit/selectors/removalReasons.ts"),
				Ft = n("./src/reddit/constants/cookie.ts"),
				Ut = n("./src/reddit/featureFlags/index.ts"),
				Bt = n("./src/reddit/helpers/localStorage/index.ts"),
				Gt = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Ht = Object(f.c)({
				activeModalId: Te.a,
				authorContext: Ot.c,
				badgePurchaseModalIsOpen: Object(Te.b)(tt.a.BADGE_PURCHASE),
				banContext: Tt.a,
				banModalIsOpen: Object(Te.b)(tt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Te.b)(tt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Te.b)(tt.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Ut.d.introModal(e),
				isOverlayOpen: Lt.i,
				moderatorPermissions: e => {
					const t = Object(Lt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: At.a,
				muteModalIsOpen: Object(Te.b)(tt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Rt.d,
				removalReasonContext: Dt.b,
				removalReasonModalIsOpen: Object(Te.b)(tt.a.ADD_REMOVAL_REASON),
				subredditId: Lt.c,
				userFlairModalIsOpen: Object(Te.b)(tt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: yt.x,
				userInRedesignBeta: yt.E,
				userIsLoggedIn: yt.K,
				userIsMod: yt.L,
				userIsNew: yt.O
			});
			class qt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Pe.a)()) return; {
						const e = je.a.get(Ft.a);
						e && je.a.remove(Ft.a, {
							domain: B.a.cookieDomain
						});
						const t = Object(Bt.E)(tt.a.ALPHA_CONSUMER);
						t && Object(Bt.X)(tt.a.ALPHA_CONSUMER), (e || t) && Object(Bt.Fb)(tt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Bt.E)(tt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Bt.Fb)(tt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Gt.a)(), 500) : setTimeout(() => Object(Gt.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
						downToChatPendingModalIsOpen: a,
						muteContext: i,
						muteModalIsOpen: c,
						notificationsPrePromptIsOpen: d,
						removalReasonContext: l,
						removalReasonModalIsOpen: p,
						sendEvent: b,
						subredditId: h,
						toggleBanModal: g,
						toggleMuteModal: f,
						toggleRemovalReasonsModal: v,
						userFlairModalIsOpen: O
					} = this.props, x = (e, t, n) => s => () => b(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(Ct.j)(o, n),
						post: n && Object(Ct.I)(o, n),
						screen: Object(Ct.ab)(o),
						subreddit: Object(Ct.jb)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: g,
						trackAddEvent: x("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: x("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && m.a.createElement(ze.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: f,
						trackAddEvent: x("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && l && m.a.createElement(Xe, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: v,
						trackClick: x("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), o && h && m.a.createElement(at, {
						subredditId: h
					}), O && e && e.subredditId && m.a.createElement(It, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(ke, {
						withOverlay: !0,
						productId: r
					}), d && m.a.createElement(Ze, null), a && m.a.createElement(Ke, {
						withOverlay: !0
					}))
				}
			}
			var Wt = Object(p.b)(Ht, e => ({
					markRedesignModalAsClosed: () => e(Object(_e.j)()),
					toggleBanModal: () => e(Object(_e.i)(tt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(_e.i)(tt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(_e.i)(tt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(_e.i)(tt.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(qt)),
				Vt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Qt = n("./src/reddit/constants/experiments.ts"),
				Kt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				zt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Jt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Zt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Yt = n.n(Zt);
			const Xt = I.a.div("Overlay", Yt.a),
				$t = I.a.div("IframeContainer", Yt.a),
				en = {},
				tn = Object(Kt.u)(),
				nn = Object(f.c)({
					frontpageSignupVariant: U.a,
					isResponsiveSettingsEnabled: Jt.a
				}),
				sn = {
					[R.c.ChangePassword]: tt.a.CHANGE_PASSWORD_MODAL_ID,
					[R.c.Index]: tt.a.LOGIN_MODAL_ID,
					[R.c.Register]: tt.a.REGISTER_MODAL_ID,
					[R.c.EnableTwoFactor]: tt.a.ENABLE_TWO_FACTOR,
					[R.c.DisableTwoFactor]: tt.a.DISABLE_TWO_FACTOR,
					[R.c.TwoFactorBackupCodes]: tt.a.TWO_FACTOR_BACKUP_CODES,
					[R.c.LinkAppleSSO]: tt.a.LINK_APPLE_SSO,
					[R.c.UnlinkAppleSSO]: tt.a.UNLINK_APPLE_SSO,
					[R.c.LinkGoogleSSO]: tt.a.LINK_GOOGLE_SSO,
					[R.c.UnlinkGoogleSSO]: tt.a.UNLINK_GOOGLE_SSO,
					[R.c.GoogleOneTap]: tt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[R.c.Onboarding]: tt.a.ONBOARDING_MODAL_ID
				};
			class on extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && zt.a.throttleFeature(Qt.dc), this.props.sendEvent(Object(L.a)(this.subscriptions))
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
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), d = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, l = s === R.c.GoogleOneTap, u = Object(v.a)({
						[Yt.a.small]: c,
						[Yt.a.ssoConfirmPassword]: d,
						[Yt.a.linkActionSSOFail]: r,
						[Yt.a.mResponsive]: t,
						[Yt.a.mGoogleOneTap]: l && !a
					}), p = Object(v.a)({
						[Yt.a.mGoogleOneTap]: l && !a,
						[Yt.a.mHiddenOverlay]: l && !i
					}), b = !c && !r && !t;
					return m.a.createElement(Xt, {
						className: p
					}, m.a.createElement($t, {
						className: u,
						style: o || en
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
			const rn = tn(Object(p.b)(nn, (e, t) => ({
				closeModal: t => {
					e(Object(_e.g)(sn[t]))
				}
			}))(Object(A.c)(on)));
			Object(Vt.b)(tt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.ChangePassword
			})), Object(Vt.b)(tt.a.LOGIN_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.Index
			})), Object(Vt.b)(tt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.Onboarding
			})), Object(Vt.b)(tt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(rn, {
				path: R.c.EnableTwoFactor
			})), Object(Vt.b)(tt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(rn, {
				path: R.c.DisableTwoFactor
			})), Object(Vt.b)(tt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(rn, {
				path: R.c.TwoFactorBackupCodes
			})), Object(Vt.b)(tt.a.REGISTER_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.Register
			})), Object(Vt.b)(tt.a.LINK_APPLE_SSO, e => m.a.createElement(rn, {
				path: R.c.LinkAppleSSO
			})), Object(Vt.b)(tt.a.LINK_GOOGLE_SSO, e => m.a.createElement(rn, {
				path: R.c.LinkGoogleSSO
			})), Object(Vt.b)(tt.a.UNLINK_APPLE_SSO, e => m.a.createElement(rn, {
				path: R.c.UnlinkAppleSSO
			})), Object(Vt.b)(tt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(rn, {
				path: R.c.UnlinkGoogleSSO
			})), Object(Vt.b)(tt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(an, {
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(cn, {
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(dn, {
				withOverlay: !0
			}));
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CROWD_CONTROL, e => m.a.createElement(ln, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const pn = Object(Se.a)({
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				bn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_GILD_MODAL, e => m.a.createElement(pn, {
				onOverlayClick: bn(e),
				withOverlay: !0
			}));
			var hn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				gn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				fn = n.n(gn);
			const vn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = hn.SPARKLE_ASSET_PATH, document.createElement("img").src = hn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Vt.b)(tt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(vn, {
				withOverlay: !0,
				className: fn.a.modalBody,
				overlayClassName: fn.a.modalOverlay
			}));
			const On = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				xn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(On, {
				onOverlayClick: xn(e),
				withOverlay: !0
			}));
			const Cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(Cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const yn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(yn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const En = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const jn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(jn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Pn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const _n = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.TRANSFER_POINTS, e => m.a.createElement(_n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Sn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(Sn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const kn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(kn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const wn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(wn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Mn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Vt.b)(tt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Mn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Nn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const In = () => Promise.all([n.e(0), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Tn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Je.a)(In).then(e => e.default)
				});
			Object(Vt.b)(tt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const An = () => null,
				Rn = Object(Se.a)({
					ErrorComponent: An,
					getComponent: () => Object(Je.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: An
				});
			Object(Vt.b)(tt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Rn, null));
			var Ln = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Dn = n.n(Ln);
			const Fn = I.a.h2("ColumnLabel", Dn.a),
				Un = I.a.wrapped(gt.a, "ColumnWrapper", Dn.a),
				Bn = I.a.div("Column", Dn.a),
				Gn = I.a.div("Description", Dn.a),
				Hn = I.a.div("Key", Dn.a),
				qn = I.a.wrapped(et.l, "ModalMain", Dn.a),
				Wn = I.a.wrapped(et.e, "ModalBody", Dn.a),
				Vn = I.a.wrapped(Ne.l, "PrimaryButton", Dn.a),
				Qn = I.a.wrapped(nt.a, "TextButton", Dn.a),
				Kn = Object(p.b)(null, e => ({
					closeModal: () => e(Object(_e.i)(tt.a.KEYBOARD_SHORTCUTS))
				})),
				zn = I.a.wrapped(Object(Me.a)(Kn(e => m.a.createElement(Wn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, o.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Qn, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(qn, null, m.a.createElement(Un, null, m.a.createElement(Bn, null, m.a.createElement(gt.a, null, m.a.createElement(Fn, null, o.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Hn, null, "Shift + ?")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Hn, null, "J")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Hn, null, "K")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Hn, null, "N")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Hn, null, "P")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Hn, null, "Enter")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Hn, null, "X")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Hn, null, "L"))), m.a.createElement(Bn, null, m.a.createElement(gt.a, null, m.a.createElement(Fn, null, o.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Hn, null, "A")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Hn, null, "Z")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Hn, null, "C")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Hn, null, "R")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Hn, null, "Ctrl + Enter")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Hn, null, "S")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Hn, null, "H")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Hn, null, "Q")), m.a.createElement(gt.a, null, m.a.createElement(Gn, null, o.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Hn, null, "Enter"))))), m.a.createElement(et.g, null, m.a.createElement(Vn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Dn.a);
			Object(Vt.b)(tt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(zn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Jn = Object(Se.a)({
					getComponent: () => Object(Je.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Zn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.SNOOVATAR_MODAL, e => m.a.createElement(Jn, {
				onOverlayClick: Zn(e),
				withOverlay: !0
			}));
			const {
				fbt: Yn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xn = Object(f.c)({
				allowNavigationCallback: Lt.a
			}), $n = Object(p.b)(Xn, e => ({
				closeModal: () => e(Object(_e.i)(tt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object($e.a)())
			}));
			class es extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, Yn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(nt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(et.b, null)))), m.a.createElement(et.l, null, m.a.createElement(et.p, null, Yn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(et.g, null, m.a.createElement(et.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Yn._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(et.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Yn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const ts = Object(Me.a)($n(es));
			Object(Vt.b)(tt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(ts, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const ns = Object(f.c)({
					activeModalId: Te.a
				}),
				ss = Object(p.b)(ns, e => ({
					toggleModal: t => e(Object(_e.i)(t))
				})),
				os = 500,
				rs = () => {};
			class as extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Gt.a)(), os) : setTimeout(() => Object(Gt.b)(), os))
				}
				componentWillUnmount() {
					Object(Gt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Vt.a)(e)(e ? this.toggleModal : rs)
				}
			}
			var is, cs = ss(as),
				ds = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ls = n("./src/reddit/actions/page.ts"),
				us = n("./src/reddit/actions/shortcuts/utils.ts"),
				ms = n("./src/reddit/icons/fonts/index.tsx"),
				ps = n("./src/reddit/selectors/header.ts"),
				bs = n("./src/reddit/selectors/userPrefs.ts"),
				hs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				gs = n("./src/reddit/components/SEOTitle/index.tsx"),
				fs = n("./src/reddit/components/SubredditIcon/index.tsx"),
				vs = n("./src/reddit/components/UserIcon/index.tsx"),
				Os = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				xs = n("./src/reddit/routes/wrappedreddit/index.ts"),
				Cs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				ys = n.n(Cs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft", e.WrappedReddit = "WrappedReddit"
			}(is || (is = {}));
			const Es = () => m.a.createElement("img", {
				src: xs.a,
				className: ys.a.wrappedRedditDropdown
			});
			const js = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(gs.b, {
					type: gs.a.HeaderSelector
				}, s))
			};
			var Ps = n("./src/lib/objectSelector/index.ts"),
				_s = n("./src/reddit/constants/wiki.ts"),
				Ss = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ks = n("./src/reddit/selectors/subreddit.ts"),
				ws = n("./src/reddit/selectors/topic.ts");
			var Ms = Object(Ps.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(Kt.X)(t);
					switch (s) {
						case "avatar":
							return {
								type: is.Avatar
							};
						case "index":
						case "listing":
							return n ? {
								type: is.Home
							} : {
								type: is.Popular
							};
						case "modListing":
							return {
								type: is.ModListing
							};
						case "modQueuePages":
							return {
								type: is.ModQueue
							};
						case "postCreation":
							return {
								type: is.CreatePost
							};
						case "postDraft":
							return {
								type: is.ViewDraft
							};
						case "subredditCreation":
							return {
								type: is.SubredditCreation
							};
						case "coins":
							return {
								type: is.Coins
							};
						case "RedditRecap2021":
							return {
								type: is.WrappedReddit
							};
						case "powerups":
							return {
								type: is.Powerups
							};
						case "predictions":
							return {
								type: is.Predictions
							};
						case "premium":
							return {
								type: is.Premium
							};
						case "acknowledgements":
							return {
								type: is.Acknowledgements
							};
						case "appeal":
							return {
								type: is.Appeal
							};
						case "report":
							return {
								type: is.Report
							};
						case "userDataRequest":
							return {
								type: is.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: is.DailyCharts
							};
						case "geotagging":
							return {
								type: is.Geotagging
							};
						case "notificationsInbox":
							return {
								type: is.NotificationsInbox
							};
						case "talk":
							return {
								type: is.Talk
							};
						case "topic": {
							const n = Object(Kt.t)(t),
								s = n && Object(ws.d)(e, n);
							if (s) return {
								type: is.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (s) {
						case "inboxPages":
							return {
								type: is.Inbox, model: o
							};
						case "settings":
							return {
								type: is.Settings, model: o
							}
					}
					const r = Object(Kt.R)(e, {
						pageLayer: t
					});
					if ("all" === r) return {
						type: is.All
					};
					if ("popular" === r) return {
						type: is.Popular
					};
					const a = Object(Kt.r)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: is.CommunitySearch,
						model: a
					} : {
						type: is.Community,
						model: a
					};
					const i = Object(Kt.e)(e, {
						pageLayer: t
					});
					if (i) return {
						type: is.Multi,
						model: i
					};
					const c = Object(Kt.k)(e, {
						pageLayer: t
					});
					if (c) return {
						type: is.UserProfile,
						model: c
					};
					const d = Object(Kt.i)(t);
					if (d) return {
						type: is.UserProfileName,
						name: `u/${d}`
					};
					if (s && "searchResults" === s) return {
						type: is.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(Kt.o)(e, {
								pageLayer: t
							}) || _s.e,
							s = Object(ks.w)(e, {
								subredditName: n
							});
						if (s) return {
							type: is.Community,
							model: s
						}
					}
					return "rpan" === s && Object(Ss.a)(e) ? {
						type: is.PublicAccessNetwork
					} : {
						type: is.Unknown
					}
				}),
				Ns = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Is = n.n(Ns);

			function Ts() {
				return (Ts = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function As(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Is.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Is.a.text
						})),
						className: Object(v.a)(Is.a.item, e.className, {
							[Is.a.mFocused]: !!e.isFocused,
							[Is.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Ts({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(ds.a, Ts({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Rs = n("./src/reddit/constants/listings.ts"),
				Ls = n("./src/reddit/helpers/overlay/index.ts"),
				Ds = n("./src/reddit/routes/modListing/index.ts"),
				Fs = n("./src/reddit/routes/powerups/index.ts"),
				Us = n("./src/reddit/routes/predictions/index.ts"),
				Bs = n("./src/reddit/routes/talk/index.ts"),
				Gs = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Hs = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				qs = n("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				Ws = n("./src/reddit/selectors/multireddit.ts"),
				Vs = n("./src/lib/LinkedListMap/index.ts"),
				Qs = n("./src/reddit/routes/avatar/index.ts");

			function Ks() {
				return (Ks = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zs = Object(f.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Ws.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Ws.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Js;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Js || (Js = {}));
			const Zs = [e => ({
					id: is.Employee,
					type: Js.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(ms.a, Ks({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, "Employee Communities")
					},
					telemetryNoun: "employee"
				})],
				Ys = () => [e => ({
					id: is.All,
					type: Js.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "all"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("All", null, {
							hk: "2M8nEy"
						}))
					},
					telemetryNoun: "all"
				})],
				Xs = () => [e => ({
					id: "reddit-feeds",
					type: Js.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: is.Home,
					type: Js.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Home", null, {
							hk: "2u56yo"
						}))
					},
					telemetryNoun: "home"
				}), e => ({
					id: is.Popular,
					type: Js.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "popular"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...Ys()],
				$s = [e => ({
					id: "reddit-feeds",
					type: Js.Header,
					model: {
						displayText: o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: is.Home,
					type: Js.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...Ys()],
				eo = [e => ({
					id: "reddit-other",
					type: Js.Header,
					model: {
						displayText: o.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: is.Settings,
					type: Js.GenericLink,
					model: {
						url: "/settings",
						displayText: o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(Os.a, {
							className: e
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}))
					},
					telemetryNoun: "settings"
				}), e => ({
					id: is.Inbox,
					type: Js.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: o.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(Os.a, {
							className: e
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Messages", null, {
							hk: "43DUrY"
						}))
					},
					telemetryNoun: "mail"
				}), e => ({
					id: is.CreatePost,
					type: Js.GenericLink,
					model: {
						url: "/submit",
						displayText: o.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Create Post", null, {
							hk: "dGck6"
						}))
					},
					telemetryNoun: "create_post"
				})],
				to = e => ({
					id: is.Coins,
					type: Js.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "coins"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}))
					},
					telemetryNoun: "coins"
				}),
				no = e => ({
					id: is.Premium,
					type: Js.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "premium"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}))
					},
					telemetryNoun: "premium"
				}),
				so = e => ({
					id: is.Avatar,
					type: Js.GenericLink,
					model: {
						url: Qs.a,
						displayText: o.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "avatar_style"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Avatar", null, {
							hk: "43lxPH"
						}))
					},
					telemetryNoun: "avatar"
				}),
				oo = e => ({
					id: is.Powerups,
					type: Js.GenericLink,
					model: {
						url: Fs.a,
						displayText: o.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "powerup"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Powerups", null, {
							hk: "1f7fL8"
						}))
					},
					telemetryNoun: "powerups"
				}),
				ro = e => ({
					id: is.WrappedReddit,
					type: Js.GenericLink,
					model: {
						url: xs.b,
						displayText: o.fbt._("Reddit Recap", null, {
							hk: "3S6KUW"
						}).toString(),
						icon: e => m.a.createElement("img", {
							src: xs.a,
							className: ys.a.wrappedRedditLogo
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Reddit Recap", null, {
							hk: "1UuGvQ"
						}))
					},
					telemetryNoun: "recap"
				}),
				ao = e => ({
					id: is.Talk,
					type: Js.GenericLink,
					model: {
						url: Bs.a,
						displayText: o.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "live"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Talk", null, {
							hk: "31Avul"
						}))
					},
					telemetryNoun: "talk"
				}),
				io = e => ({
					id: is.Predictions,
					type: Js.GenericLink,
					model: {
						url: Us.a,
						displayText: o.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "prediction"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Predictions", null, {
							hk: "3lUrcj"
						}))
					},
					telemetryNoun: "predictions"
				}),
				co = [e => ({
					id: is.ModQueue,
					type: Js.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "mod_queue"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}))
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: is.ModMail,
						type: Js.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(ms.a, Ks({
								name: "mod_mail"
							}, e)),
							text: ({
								className: e
							}) => m.a.createElement("span", {
								className: e
							}, o.fbt._("Modmail", null, {
								hk: "2QQ3dU"
							}))
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function lo(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Js.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && uo(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Js.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Js.Header,
					model: {
						displayText: o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Js.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const uo = (e, t) => {
				const n = {
						id: is.CreateCommunity,
						telemetryNoun: "create_community"
					},
					s = {
						displayText: o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(ms.a, Ks({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString())
					};
				e.push({
					...n,
					type: Js.GenericClickable,
					model: {
						...s,
						onClick: () => {
							t(Object(_e.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var mo = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				po = n.n(mo);

			function bo(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(po.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ho = n("./src/reddit/actions/subscription/index.ts"),
				go = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				fo = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				vo = n.n(fo);

			function Oo() {
				return (Oo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xo = Object(f.c)({
					currentUser: yt.k,
					hideNSFWPref: yt.C,
					isLoggedIn: yt.K
				}),
				Co = Object(p.b)(xo, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Js.Subreddit:
								e(Object(ho.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Js.Profile:
								e(Object(ho.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Js.Multi:
								e(Object(ho.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(go.f)(t.model.url)) : t.sendEvent(Object(go.c)(t.model.url))
						}
					}
				}));
			var yo = Object(A.c)(Co((function(e) {
					const t = {
						className: Object(v.a)(vo.a.item, e.className, {
							[vo.a.mFocused]: !!e.isFocused
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
						case Js.Subreddit:
							return m.a.createElement(ds.a, Oo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(fs.b, {
								className: vo.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: vo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ms.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(vo.a.favorite, {
									[vo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Js.SubredditAutocomplete:
							return m.a.createElement(ds.a, Oo({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(fs.b, {
								className: vo.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: vo.a.text
							}, e.model.name));
						case Js.Multi:
							return m.a.createElement(ds.a, Oo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: vo.a.customFeedIcon
							}), m.a.createElement("span", {
								className: vo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ms.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(vo.a.favorite, {
									[vo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Js.Profile:
							return m.a.createElement(ds.a, Oo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(vs.a, {
								className: vo.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: vo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ms.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(vo.a.favorite, {
									[vo.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Eo = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				jo = n.n(Eo);

			function Po(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: jo.a.header
				}), m.a.createElement("div", {
					className: jo.a.item
				}), m.a.createElement("div", {
					className: jo.a.item
				}), m.a.createElement("div", {
					className: jo.a.item
				}), m.a.createElement("div", {
					className: jo.a.item
				}))
			}
			var _o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				So = n("./src/reddit/actions/subreddit.ts"),
				ko = n("./src/reddit/constants/keycodes.ts"),
				wo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Mo = n("./src/lib/loadableAction/index.ts"),
				No = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Io = n.n(No);

			function To() {
				return (To = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Ao(e) {
				return e.id === is.ModMail || e.id === is.CreateCommunity
			}

			function Ro(e) {
				const t = new Vs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Js.Header && e.type !== Js.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Lo = Object(f.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = zs(e),
							s = new Vs.a("id"),
							r = Object(yt.ib)(e),
							a = Object(Gs.q)(e),
							i = Object(qs.b)(e),
							c = [];
						a && i || (!a && c.push(is.Predictions), !i && c.push(is.WrappedReddit));
						const d = (e => Object(Gs.y)(e) ? [no, to, so, oo, ro, ao, io] : [to, no, so, oo, ro, ao, io])(e),
							l = c.length ? d.filter(e => !c.includes(e(null).id)) : d;
						if (n.account) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Js.Header,
								model: {
									displayText: o.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Js.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Js.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Js.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Js.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Js.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Js.Header,
								model: {
									displayText: o.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), a.isMod && co.forEach(e => s.push(e(a))), s.push({
								id: is.ModListing,
								type: Js.GenericLink,
								model: {
									url: Ds.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(ms.a, Ks({
										name: "mod_queue"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, "r/Mod")
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => s.push({
								id: "mod" + e.id,
								type: Js.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Js.Header,
									model: {
										displayText: o.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button: ({
											className: e,
											sendClickEvent: t
										}) => m.a.createElement("button", {
											onClick: () => {
												n(Object(_e.h)(tt.a.MULTIREDDIT_CREATE)), t()
											},
											className: Object(v.a)(e, ys.a.multiPlusButton)
										}, m.a.createElement(ms.a, {
											name: "add"
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Js.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Js.LoadingState,
								model: {
									displayText: ""
								}
							}) : lo(s, n, r, t), ((e, t, n, s) => (Xs().forEach(e => t.push(e(n))), n.isEmployee && Zs.forEach(e => t.push(e(n))), Object(Ss.a)(e) && t.push({
								id: is.PublicAccessNetwork,
								type: Js.GenericClickable,
								model: {
									onClick: () => {
										s(Object(Ls.a)(Rs.c[Rs.b.Rpan]))
									},
									displayText: o.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(ms.a, Ks({
										name: "video_live"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Reddit Live", null, {
										hk: "93lry"
									}))
								},
								telemetryNoun: "rpan"
							}), t))(e, s, a, t), eo.forEach(e => s.push(e(a))), s.push((() => ({
								id: is.DailyCharts,
								type: Js.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(ms.a, Ks({
										name: "list_numbered"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}))
								},
								telemetryNoun: "daily_charts"
							}))()), Object(Hs.b)(e) && (e => e.push({
								id: is.NotificationsInbox,
								type: Js.GenericLink,
								model: {
									url: "/notifications",
									displayText: o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(ms.a, Ks({
										name: "notification"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}))
								},
								telemetryNoun: "inbox"
							}))(s), l.forEach(e => s.push(e(a)))
						} else n.subscriptions.length || Object(yt.K)(e) ? Xs().forEach(e => s.push(e(null))) : $s.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: Js.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), l.forEach(e => s.push(e(null))), lo(s, n, r, t);
						return s
					}
				}),
				Do = e => ({
					onHomeClicked: () => e(Object(Mo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ho.e)()), e(Object(So.q)()), e(Object(Mo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Fo = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Uo extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Ro(n),
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
						if (e.key === ko.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === ko.b.Tab && this.props.onClose && this.props.onClose(), e.key === ko.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Js.Header && e.type !== Js.LoadingState && (this.fireTelemetryForListItem(e), e.type === Js.GenericClickable ? e.model.onClick() : Ao(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === ko.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === ko.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case is.Coins:
							case is.Premium:
								Object(wo.e)(wo.a.GoldPayment, !0), t = Object(wo.c)(wo.a.GoldPayment)
						}
						switch (e.type) {
							case Js.Category:
							case Js.GenericLink:
							case Js.GenericClickable:
							case Js.Multi:
							case Js.Profile:
							case Js.Subreddit:
								this.props.sendEvent(n => ({
									...Object(Ct.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Js.Multi ? Object(Ct.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Js.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(Ct.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Ro(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Ro(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Vs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Js.Category:
								case Js.GenericLink:
								case Js.Multi:
								case Js.Profile:
								case Js.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Js.Header: {
									const t = n.last();
									t && t.type === Js.Header && n.pop(), n.push(e);
									break
								}
								case Js.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === Js.Header && n.pop(), n
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
					}), m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Io.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === is.Home && this.props.onHomeClicked(), e.type === Js.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Js.GenericClickable:
								return m.a.createElement(As, To({}, n, {
									className: Io.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Js.Category:
							case Js.GenericLink:
								return m.a.createElement(As, To({}, n, {
									externalLink: Ao(e),
									className: Io.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Js.Header: {
								const n = e.model.button;
								return m.a.createElement(bo, {
									className: Io.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Io.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Js.LoadingState:
								return m.a.createElement(Po, {
									className: Io.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Js.Multi:
								return m.a.createElement(yo, To({}, n, {
									className: Io.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Js.Multi
								}));
							case Js.Profile:
								return m.a.createElement(yo, To({}, n, {
									className: Io.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Js.Profile
								}));
							case Js.Subreddit:
								return m.a.createElement(yo, To({}, n, {
									className: Io.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Js.Subreddit
								}))
						}
					}))
				}
			}
			const Bo = Object(p.b)(Lo, Do, Fo)(Object(A.c)(Uo)),
				Go = Object(p.b)(Lo, Do, Fo)(Object(A.c)(Object(_o.b)(Uo))),
				Ho = Object(Kt.u)({
					isCommentsPage: Kt.x,
					pageLayer: e => e
				}),
				qo = Object(f.c)({
					currentPage: Ms,
					hideNSFWPref: yt.C,
					isDropdownOpen: ps.a,
					isLoggedIn: yt.K,
					isOverlayOpen: Lt.i,
					isPinnedSubscriptionsMenuDisabled: bs.a,
					isSubscriptionsPinned: bs.b
				});
			class Wo extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(us.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(Ct.o)(e),
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
							isLoggedIn: a,
							isOverlayOpen: i
						} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = i || !a && r;
						return m.a.createElement("div", {
							"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(ys.a.container, n, {
								[ys.a.mOpen]: c,
								[ys.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[ys.a.mPinned]: this.props.isSubscriptionsPinned,
								[ys.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: ys.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: ys.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case is.Acknowledgements:
									return js(o.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case is.All:
									return js(o.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case is.Appeal:
									return js(o.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case is.Avatar:
									return js(o.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case is.Coins:
									return js(o.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case is.Community:
									return js(e.model.displayText, !0);
								case is.CommunitySearch:
									return js(o.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case is.CreateCommunity:
									return js(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case is.CreatePost:
									return js(o.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case is.DailyCharts:
									return js(o.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case is.GlobalSearch:
									return js(o.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case is.Geotagging:
									return js(o.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case is.Home:
									return js(o.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case is.Inbox:
									return js(o.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case is.ModListing:
									return js("r/Mod");
								case is.ModMail:
									return js(o.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case is.ModQueue:
									return js(o.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case is.Multi:
									return js(e.model.displayText, !0);
								case is.NotificationsInbox:
									return js(o.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case is.Popular:
									return js(o.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case is.WrappedReddit:
									return js(o.fbt._("Reddit Recap", null, {
										hk: "1IMaHW"
									}).toString());
								case is.Powerups:
									return js(o.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case is.Predictions:
									return js(o.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case is.Premium:
									return js(o.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case is.PublicAccessNetwork:
									return js(o.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case is.Report:
									return js(o.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case is.Settings:
									return js(o.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case is.SubredditCreation:
									return js(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case is.Talk:
									return js(o.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case is.Topic:
									return js(e.model);
								case is.Unknown:
									return js("");
								case is.UserDataRequest:
									return js(o.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case is.UserProfile:
									return js(e.model.displayText, !0);
								case is.UserProfileName:
									return js(e.name, !0);
								case is.ViewDraft:
									return js(o.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(ms.a, {
								name: e,
								isFilled: !0,
								className: ys.a.defaultIcon
							});
							switch (e.type) {
								case is.All:
									return n("all");
								case is.Acknowledgements:
								case is.Appeal:
									return n("edit");
								case is.Avatar:
									return n("avatar_style");
								case is.Coins:
									return n("coins");
								case is.Community:
								case is.CommunitySearch: {
									const n = Object(hs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(fs.b, {
										className: ys.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case is.CreateCommunity:
								case is.CreatePost:
									return n("add");
								case is.DailyCharts:
									return n("list_numbered");
								case is.Geotagging:
									return n("custom_feed");
								case is.GlobalSearch:
									return n("search");
								case is.Home:
									return n("home");
								case is.Inbox:
									return m.a.createElement(Os.a, {
										wrapperClassName: ys.a.userIcon
									});
								case is.ModListing:
									return n("mod_queue");
								case is.ModMail:
									return n("mod_mail");
								case is.ModQueue:
									return n("mod_queue");
								case is.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: ys.a.customFeedIcon
									});
								case is.NotificationsInbox:
									return n("notification");
								case is.Popular:
									return n("popular");
								case is.WrappedReddit:
									return m.a.createElement("img", {
										src: xs.a,
										className: ys.a.wrappedRedditLogoActive
									});
								case is.Powerups:
									return n("powerup");
								case is.Predictions:
									return n("prediction");
								case is.Premium:
									return n("premium");
								case is.PublicAccessNetwork:
									return n("video_live");
								case is.Report:
									return n("report");
								case is.Settings:
									return m.a.createElement(Os.a, {
										wrapperClassName: ys.a.userIcon
									});
								case is.SubredditCreation:
									return n("add");
								case is.Talk:
									return n("live");
								case is.Topic:
									return n("custom_feed");
								case is.Unknown:
									return m.a.createElement("div", {
										className: ys.a.unknownIcon
									});
								case is.UserDataRequest:
									return n("add");
								case is.UserProfile: {
									const n = Object(hs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(vs.a, {
										className: ys.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case is.UserProfileName:
									return m.a.createElement("div", {
										className: ys.a.defaultIcon
									});
								case is.Unknown:
									return m.a.createElement("div", {
										className: ys.a.unknownIcon
									});
								case is.UserProfile: {
									const n = Object(hs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(vs.a, {
										className: ys.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case is.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement(ms.a, {
							name: "caret_down",
							className: ys.a.caretDown
						})), c && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(ms.a, {
							name: "side_menu",
							className: ys.a.pin,
							onClick: d ? void 0 : this.props.onPinSubscriptions
						}), c && m.a.createElement(Go, {
							canAutofocus: !0,
							className: ys.a.listContainer,
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
			var Vo = Ho(Object(p.b)(qo, (e, t) => ({
					closeDropdown: () => e(Object(_.f)()),
					onLocationRefresh: (n, s) => e(Object(ls.f)(n, t.pageLayer, s)),
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
				}))(Object(A.c)(Wo))),
				Qo = n("./src/reddit/components/JumpToContent/index.tsx"),
				Ko = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				zo = n("./node_modules/history/esm/history.js"),
				Jo = n("./node_modules/lodash/debounce.js"),
				Zo = n.n(Jo),
				Yo = n("./node_modules/lodash/isEmpty.js"),
				Xo = n.n(Yo),
				$o = n("./node_modules/uuid/v4.js"),
				er = n.n($o),
				tr = n("./src/lib/hooks/usePrevious.ts"),
				nr = n("./src/lib/makeSearchKey/index.ts"),
				sr = n("./src/reddit/actions/post.ts"),
				or = n("./src/reddit/actions/search.ts"),
				rr = n("./src/lib/makeApiRequest/index.ts"),
				ar = n("./src/lib/omitHeaders/index.ts"),
				ir = n("./src/reddit/constants/headers.ts");
			var cr = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				dr = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const lr = e => async (t, n, {
				apiContext: s
			}) => {
				var o, r;
				const a = await ((e, t) => Object(rr.a)(Object(ar.a)(e, [ir.a]), {
					endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
					method: O.jb.GET,
					data: {
						query: t
					}
				}))(s(), e);
				if (a.ok && (null === (r = null === (o = a.body) || void 0 === o ? void 0 : o.data) || void 0 === r ? void 0 : r.children)) {
					const n = (e => {
						const t = [],
							n = {};
						return e.forEach(e => {
							const s = e.data,
								o = e.kind;
							o === O.Ib.Subreddit ? (t.push(s.name), n[s.name] = Object(dr.a)(s)) : o === O.Ib.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(cr.a)(s.subreddit, s.name, s.accept_followers))
						}), {
							data: n,
							order: t
						}
					})(a.body.data.children);
					n && n.data && n.order && t(Object(or.o)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var ur, mr = n("./src/reddit/actions/search/trending.ts"),
				pr = n("./src/reddit/components/SearchDropdown/index.tsx"),
				br = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				hr = n("./src/reddit/constants/history.ts"),
				gr = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				fr = n("./src/reddit/helpers/isArrayEqual.ts"),
				vr = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Or = n("./src/reddit/models/Search/index.ts"),
				xr = n("./src/reddit/selectors/searchResults.ts"),
				Cr = n("./src/reddit/selectors/trending.ts"),
				yr = n("./src/reddit/hooks/usePageLayer.ts"),
				Er = n("./src/reddit/controls/Search/index.m.less"),
				jr = n.n(Er),
				Pr = n("./src/reddit/components/Pill/index.tsx"),
				_r = n("./src/reddit/components/Pill/PillText/index.m.less"),
				Sr = n.n(_r);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(ur || (ur = {}));
			const kr = {
					[ur.DAY]: Sr.a.pillTextVariantDay,
					[ur.NIGHT]: Sr.a.pillTextVariantNight
				},
				wr = e => m.a.createElement("div", {
					className: Object(v.a)(Sr.a.pillText, kr[e.variant])
				}, e.children);
			var Mr = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				Nr = n.n(Mr);
			const Ir = Object(f.c)({
					nightmode: yt.X
				}),
				Tr = Object(p.b)(Ir)(({
					nightmode: e,
					subreddit: t
				}) => m.a.createElement(Pr.a, {
					"aria-hidden": !0,
					className: Nr.a.communityPill,
					"data-testid": "community-search-pill"
				}, m.a.createElement(wr, {
					variant: e ? ur.NIGHT : ur.DAY
				}, m.a.createElement(fs.b, {
					className: jr.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText)));
			var Ar = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				Rr = n.n(Ar);
			const Lr = ({
				inputRef: e,
				searchQuery: t,
				showCommunityPill: n,
				subreddit: s,
				onChange: r,
				onFormSubmit: a,
				onFocusSearchBar: i,
				onKeyDown: c,
				toggleDropdownAndGetTrending: d
			}) => {
				const l = m.a.useContext(g.a),
					u = n && s ? o.fbt._("Search within {subredditName}", [o.fbt._param("subredditName", s.displayText)], {
						hk: "2B6J3t"
					}) : o.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(v.a)(Rr.a.searchBar, l && Rr.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: i,
					role: "search"
				}, m.a.createElement("label", {
					className: Rr.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: Rr.a.iconContainer
				}, m.a.createElement(ms.a, {
					name: "search",
					className: Rr.a.icon
				})), m.a.createElement(Ko.a, {
					"aria-live": "assertive"
				}, u), n && s && m.a.createElement(Tr, {
					subreddit: s
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: Rr.a.input,
					onChange: r,
					onClick: d,
					onKeyDown: c,
					placeholder: o.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: e,
					type: "search",
					value: t
				}))
			};

			function Dr({
				className: e
			}) {
				const t = Object(yr.a)(),
					n = Object(Kt.Y)(t),
					{
						nsfwSessionSetting: s,
						refreshNsfwSessionSettingExpiryTime: o
					} = Object(br.a)(),
					[r, a] = Object(u.useState)(-1),
					[i, c] = Object(u.useState)([]),
					[d, l] = Object(u.useState)(!1),
					[b, g] = Object(u.useState)({}),
					[f, O] = Object(u.useState)([]),
					[x, C] = Object(u.useState)(n || ""),
					[y, E] = Object(u.useState)(null),
					j = Object(u.useRef)(null),
					P = Object(u.useRef)(null),
					_ = Object(A.b)(),
					S = Object(p.d)(),
					k = Object(p.e)(Lt.b),
					w = Object(p.e)(Lt.d),
					M = Object(p.e)(yt.k),
					N = Object(p.e)(xr.l),
					I = Object(p.e)(xr.k),
					T = Object(p.e)(yt.K),
					R = Object(p.e)(xr.m),
					L = Object(p.e)(yt.X),
					D = Object(p.e)(Lt.r),
					F = Object(p.e)(e => Object(Kt.Z)(e, {
						pageLayer: t
					})),
					U = Object(p.e)(e => Object(Kt.r)(e, {
						pageLayer: t
					})),
					B = Object(p.e)(e => Object(Kt.e)(e, {
						pageLayer: t
					})),
					G = Object(p.e)(e => Object(Cr.a)(e, Or.d.dropdown)),
					H = Object(p.e)(xr.q),
					q = Object(p.e)(yt.eb),
					W = Object(tr.a)(U),
					V = Object(tr.a)(n),
					Q = Object(tr.a)(H),
					K = Object(tr.a)(G),
					z = k ? Object(Ct.v)(k) : t ? Object(Ct.v)(t) : void 0,
					J = b[x];
				Object(u.useEffect)(() => {
					Z()
				}, [K, Q, H, G]), Object(u.useEffect)(() => {
					W || !U || R || $()
				}, [W, U, R]), Object(u.useEffect)(() => {
					Xo()(H) || n ? C(n || "") : oe()
				}, [V, n]);
				const Z = () => {
						const e = Object(fr.a)(Q, H),
							t = Object(fr.a)(K, G);
						if (!e || !t) {
							const t = H.length ? H : [...f, ...G];
							c(t), !e && H.length && H.forEach(e => {
								ce(e.isProfile ? Ct.b.TypeaheadProfile : Ct.b.TypeaheadSubreddit, Ct.c.Search, e.searchQuery)
							})
						}
					},
					Y = e => S(Object(or.p)({
						searchQuery: e
					})),
					X = () => S(Object(or.k)()),
					$ = () => S(Object(or.m)()),
					ee = (e, t) => {
						e.preventDefault(), ((e, t, n, s) => {
							S(Object(h.b)(Object(zo.c)({
								pathname: e,
								search: t,
								state: {
									fromPage: n,
									[hr.b.SearchOriginPage]: s
								}
							})))
						})(t.url, t.qs, {
							routeName: D,
							subredditName: w
						}, z)
					},
					te = async () => {
						G.length || d || (l(!0), await (() => S(Object(mr.b)(Or.d.dropdown)))(), l(!1))
					}, ne = e => {
						T && M && O(Object(Bt.Lb)({
							...e,
							section: Or.c.recent
						}, M.id))
					}, se = Zo()(e => {
						(async e => {
							b[e] || (b[e] = !0, g({
								...b
							}), await S(lr(e)), b[e] = !1, g({
								...b
							}))
						})(e)
					}, 250), oe = () => {
						a(-1), E(null), C(""), Y("")
					}, re = (e, t, s, o) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: n
						};
						_(Object(vr.p)(o, r))
					}, ae = (e, t, n) => {
						_(Object(vr.r)(e, t, n))
					}, ie = (e, t, n, s) => {
						_(Object(vr.t)(e, t, n, s))
					}, ce = (e, t, s, o) => {
						const r = {
							displayQuery: s,
							rawQuery: o || s,
							searchQuery: n,
							structureType: t
						};
						_(Object(vr.q)(e, r))
					}, de = e => {
						const t = i[e] || null,
							n = t ? t.searchQuery : "";
						a(e), C(n), E(t)
					};
				return m.a.createElement("div", {
					className: Object(v.a)(jr.a.relativeWrapper, ys.a.container, e, {
						"m-open": N
					}),
					id: pr.b,
					ref: j
				}, m.a.createElement(Lr, {
					inputRef: P,
					onChange: e => {
						const t = e.currentTarget.value;
						C(t), Y(t), !!(!I || !I[t]) && t && se(t)
					},
					searchQuery: x,
					onFormSubmit: e => {
						e.preventDefault(), x.trim() && ((async e => {
							var t;
							if (X(), x.trim()) {
								let n = {
									...Or.a
								};
								if (y && y.searchQuery === x)(n = y).id || (n.id = er()()), n.section === Or.c.recent ? ae(x, n, r) : n.section === Or.c.typeahead ? ie(x, n, r, i.filter(e => e.isSubreddit)) : re(x, x, Ct.c.Search, Ct.b.Recent);
								else {
									const e = U && U.icon ? U.icon.url : "",
										t = null == U ? void 0 : U.displayText,
										s = !!U && U.isNSFW,
										o = Or.b.text;
									n = {
										id: er()(),
										searchQuery: x,
										type: o,
										section: Or.c.recent,
										subredditOrProfileRestrictedName: t,
										displayInfo: {
											iconUrl: e,
											isNSFW: s
										}
									}
								}
								ne(n), X();
								const a = Object(gr.a)({
									subreddit: U,
									multireddit: B,
									searchItem: n,
									searchOptions: void 0,
									shouldSearchSubreddit: F,
									includeNsfwResults: q && s
								});
								a && (ee(e, a), n.isTypeaheadSuggestion && oe(), o(), null === (t = P.current) || void 0 === t || t.blur())
							}
						})(e), _(Object(vr.j)(Ct.a.FullSearchButton, Object(nr.e)({
							q: x
						}))), X())
					},
					onFocusSearchBar: () => {
						Object(wo.c)(wo.a.SearchResults) || Object(wo.e)(wo.a.SearchResults), _(Object(vr.j)(Ct.a.SearchBar, Object(nr.e)({
							q: n
						})))
					},
					onKeyDown: e => {
						if (e.key === ko.b.Escape || e.key === ko.b.Tab) X();
						else if (e.key === ko.b.ArrowDown) {
							if (e.preventDefault(), 0 === i.length || !N) return;
							if (r >= i.length - 1) return;
							de(r + 1)
						} else if (e.key === ko.b.ArrowUp) {
							if (e.preventDefault(), 0 === i.length || !N) return;
							if (-1 === r) return;
							de(r - 1)
						} else e.key === ko.b.Backspace && !x && F && R && (_(() => Object(vr.d)(U)), (() => S(Object(or.j)()))())
					},
					showCommunityPill: F,
					subreddit: U,
					toggleDropdownAndGetTrending: () => {
						if (G.length || te(), M) {
							const e = Object(Bt.K)(M.id);
							e.length > 0 && (O(T ? e : []), c([...e, ...G]), e.forEach(e => {
								ce(Ct.b.Recent, Ct.c.Recent, e.searchQuery)
							}))
						}
						N || (() => S(Object(or.l)()))()
					}
				}), m.a.createElement(pr.c, {
					container: j.current,
					focusedItemIndex: r,
					searchOriginPage: z,
					isOpen: N,
					isTrendingPending: d,
					isTypeaheadPending: J,
					itemList: i,
					nightmode: L,
					recentSearches: f,
					trendingItems: G,
					searchQuery: x,
					typeaheadSuggestions: H,
					onClearSearchQuery: oe,
					onClose: X,
					onRemoveRecentSearch: e => {
						M && 0 !== f.length && (Object(Bt.Y)(e, M.id), O(f.filter(t => t.searchQuery !== e.searchQuery)), a(-1))
					},
					onSendSearchClickRecentEvent: ae,
					onSendSearchClickTypeaheadEvent: ie,
					onSetRecentSearch: ne,
					onUpdateSearchQuery: C,
					fireAdPixelsOfType: (e, t) => S(Object(sr.z)(e, t))
				}))
			}
			var Fr = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ur = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Br = n("./src/reddit/selectors/responsivePage.ts"),
				Gr = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Hr = n.n(Gr);
			var qr = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(Hr.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Hr.a.HomeLink,
						href: B.a.redditUrl
					}, m.a.createElement(Fr.a, {
						className: Hr.a.Snoo
					}), m.a.createElement(Ur.a, {
						className: Hr.a.Wordmark,
						color: "inherit"
					})))
				},
				Wr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Vr = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Qr = n("./src/reddit/hooks/useTracking.ts");
			var Kr = e => m.a.createElement("svg", {
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
			}));
			var zr = e => m.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className,
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M14.906 9.214a4.27 4.27 0 0 1-2.229 1.42 7.31 7.31 0 0 1-2.36.07 3.57 3.57 0 0 0-3.354 1.459 2.627 2.627 0 0 0-.495 1.441l-.018 1.009.94-.37a2.995 2.995 0 0 1 2.262.277c-.298.19-.583.411-.861.627a8.176 8.176 0 0 1-.93.66 1.2 1.2 0 0 1-.945.2l-.714-.2-.132.73a.987.987 0 0 1-.388.617 2.258 2.258 0 0 1-.656.247 3.075 3.075 0 0 0-1.453.727 2.622 2.622 0 0 1-.057-.935 3.06 3.06 0 0 1 .835-1.28l.722-.819-.744-.402a4.412 4.412 0 0 1-1.854-2.58 6.867 6.867 0 0 1 .29-4.115 7.31 7.31 0 0 1 6.89-4.852l.22.003a9.215 9.215 0 0 1 1.863.247A2.4 2.4 0 0 0 13.34 7.58c.058 0 .116-.002.176-.006a2.377 2.377 0 0 0 1.788-1.01l.152-.204a5.493 5.493 0 0 1 .12 1.024 2.872 2.872 0 0 1-.67 1.83Z"
				}), m.a.createElement("circle", {
					cx: "10.753",
					cy: "8.702",
					r: "1.006"
				}), m.a.createElement("path", {
					d: "M13.516 7.573c-.06.005-.118.007-.176.007a2.398 2.398 0 0 1-1.603-4.185 9.215 9.215 0 0 0-1.864-.246 8.467 8.467 0 0 0-.22-.004 7.31 7.31 0 0 0-6.89 4.852 6.867 6.867 0 0 0-.289 4.116 4.412 4.412 0 0 0 1.855 2.579l.744.402-.722.82a3.06 3.06 0 0 0-.835 1.279 2.622 2.622 0 0 0 .057.936 3.075 3.075 0 0 1 1.453-.728 2.258 2.258 0 0 0 .656-.247.987.987 0 0 0 .388-.617l.132-.73.713.2a1.2 1.2 0 0 0 .946-.2 8.176 8.176 0 0 0 .93-.66c.278-.216.563-.436.861-.627a2.995 2.995 0 0 0-2.263-.276l-.939.37.018-1.01a2.627 2.627 0 0 1 .495-1.441 3.57 3.57 0 0 1 3.354-1.459 7.31 7.31 0 0 0 2.36-.07 4.27 4.27 0 0 0 2.229-1.42 2.872 2.872 0 0 0 .67-1.83 5.493 5.493 0 0 0-.12-1.024l-.152.204a2.377 2.377 0 0 1-1.788 1.01Z"
				}), m.a.createElement("path", {
					d: "M18.753.342A1.155 1.155 0 0 0 17.31.127l-4.05 2.325a9.945 9.945 0 0 0-3.347-.653A8.594 8.594 0 0 0 1.5 7.523a8.261 8.261 0 0 0-.325 4.961A6.162 6.162 0 0 0 3 15.408a3.244 3.244 0 0 0-.825 1.637 3.638 3.638 0 0 0 .667 2.63.868.868 0 0 0 .696.355.835.835 0 0 0 .169-.017.92.92 0 0 0 .703-.681c.087-.35.338-.452.981-.631a3.073 3.073 0 0 0 1.116-.478 2.329 2.329 0 0 0 .692-.835 2.817 2.817 0 0 0 1.329-.408 9.23 9.23 0 0 0 1.09-.766 5.376 5.376 0 0 1 1.216-.794.86.86 0 0 0 .537-.626.936.936 0 0 0-.255-.848 4.32 4.32 0 0 0-2.93-1.165 2.262 2.262 0 0 1 1.99-.735 8.295 8.295 0 0 0 2.87-.114 5.646 5.646 0 0 0 2.907-1.866 4.21 4.21 0 0 0 .973-2.682 6.432 6.432 0 0 0-.192-1.484 3.042 3.042 0 0 0-.142-.41c-.055-.136-.127-.262-.193-.392l2.458-3.295a1.16 1.16 0 0 0-.104-1.461Zm-3.847 8.872a4.27 4.27 0 0 1-2.229 1.42 7.31 7.31 0 0 1-2.36.07 3.57 3.57 0 0 0-3.354 1.459 2.627 2.627 0 0 0-.495 1.441l-.018 1.009.94-.37a2.995 2.995 0 0 1 2.262.277c-.298.19-.583.411-.861.627a8.176 8.176 0 0 1-.93.66 1.2 1.2 0 0 1-.945.2l-.714-.2-.132.73a.987.987 0 0 1-.388.617 2.258 2.258 0 0 1-.656.247 3.075 3.075 0 0 0-1.453.727 2.622 2.622 0 0 1-.057-.935 3.06 3.06 0 0 1 .835-1.28l.722-.819-.744-.402a4.412 4.412 0 0 1-1.854-2.58 6.867 6.867 0 0 1 .29-4.115 7.31 7.31 0 0 1 6.89-4.852l.22.003a9.215 9.215 0 0 1 1.863.247A2.4 2.4 0 0 0 13.34 7.58c.058 0 .116-.002.176-.006a2.377 2.377 0 0 0 1.788-1.01l.152-.204a5.493 5.493 0 0 1 .12 1.024 2.872 2.872 0 0 1-.67 1.83Zm.665-5.264-.819 1.098-.544.728a1.054 1.054 0 1 1-1.405-1.505l.531-.305 1.344-.772 2.548-1.462Z"
				}), m.a.createElement("path", {
					d: "m15.571 3.95-.819 1.098-.544.728a1.054 1.054 0 1 1-1.405-1.505l.531-.305 1.344-.772 2.548-1.462Z"
				})),
				Jr = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Zr = e => {
				return Object(Jr.c)(e, {
					experimentEligibilitySelector: Jr.a,
					experimentName: Qt.ke
				}) === Qt.Uc
			};
			var Yr = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Xr = n.n(Yr),
				$r = m.a.memo((function(e) {
					const t = Object(Qr.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Ct.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Ct.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Ct.o)(e),
								source: "nav",
								action: "click",
								noun: "recap"
							}))
						}, [t]),
						i = Object(u.useCallback)(() => {
							n(Object(Ls.a)(Rs.c[Rs.b.Rpan])), t(e => ({
								...Object(Ct.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						c = Object(p.e)(yt.K),
						d = Object(p.e)(Ss.a),
						l = Object(p.e)(Zr),
						b = Object(p.e)(qs.b),
						h = Object(p.e)(yt.X),
						g = Object(Vr.a)(),
						f = Object(Vr.a)(),
						O = Object(Vr.a)(),
						x = Object(Vr.a)(),
						C = Object(Vr.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(Xr.a.container, e.className)
					}, m.a.createElement("div", {
						className: Xr.a.row
					}, m.a.createElement(ds.a, {
						className: Xr.a.icon,
						innerRef: g.target.ref,
						to: c ? Rs.c[Rs.b.Popular] : Rs.c[Rs.b.Home],
						onClick: s,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(ms.a, {
						name: "popular"
					})), m.a.createElement(Wr.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: Xr.a.icon,
						innerRef: f.target.ref,
						to: Rs.c[Rs.b.All],
						onClick: r,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(ms.a, {
						name: "all"
					})), m.a.createElement(Wr.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: Xr.a.icon,
						innerRef: O.target.ref,
						to: Rs.c[Rs.b.Rpan],
						onClick: i,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement(ms.a, {
						name: "video_live"
					})), m.a.createElement(Wr.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), l && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: Xr.a.icon,
						innerRef: x.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: x.show,
						onMouseLeave: x.hide
					}, m.a.createElement(Kr, {
						className: Xr.a.psBattlesIcon
					})), m.a.createElement(Wr.a, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible
					}, o.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: Xr.a.icon,
						innerRef: C.target.ref,
						to: xs.b,
						onClick: a,
						onMouseEnter: C.show,
						onMouseLeave: C.hide
					}, m.a.createElement(zr, {
						className: Object(v.a)(Xr.a.redditRecapIcon, {
							[Xr.a.isNightMode]: h
						})
					})), m.a.createElement(Wr.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, o.fbt._("Reddit Recap page", null, {
						hk: "ZDBQK"
					})))))
				})),
				ea = n("./src/reddit/actions/login.ts"),
				ta = n("./src/reddit/actions/tooltip.ts"),
				na = n("./src/lib/combineRefs/index.tsx"),
				sa = n("./src/lib/hooks/useOnClickOutside.ts"),
				oa = n("./src/lib/hooks/useTooltip.ts"),
				ra = n("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				aa = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ia = n.n(aa);

			function ca() {
				return (ca = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const da = I.a.button("Button", ia.a),
				la = I.a.div("Container", ia.a);

			function ua(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(da, ca({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(la, {
					className: Object(v.a)({
						[ia.a.isOpen]: n
					})
				}, t))
			}
			var ma = n("./src/reddit/components/BadgeCounter/index.tsx"),
				pa = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				ba = n.n(pa);
			var ha = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ma.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ms.a, {
					name: "notification",
					className: ba.a.icon2020
				})),
				ga = n("./src/lib/getParsedUserAgent/index.ts"),
				fa = n("./src/reddit/components/InboxBanner/index.m.less"),
				va = n.n(fa);
			var Oa = Object(Me.a)(({
					onClose: e
				}) => {
					const t = Object(ga.b)(navigator.userAgent);
					return m.a.createElement(et.e, null, m.a.createElement(et.i, {
						className: va.a.modalHeader
					}, m.a.createElement(et.q, {
						className: va.a.modalTitle
					}, o.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Ne.t, {
						onClick: e,
						Icon: Object(ms.b)("close_fill"),
						size: Ne.d.XXS,
						priority: Ne.c.Plain,
						className: va.a.modalCloseIcon
					})), m.a.createElement(et.l, null, m.a.createElement("ul", {
						className: va.a.modalList
					}, m.a.createElement("li", {
						className: va.a.modalListItem
					}, m.a.createElement("span", null, "1"), o.fbt._("Click on {lockIcon} in your browser address bar", [o.fbt._param("lockIcon", m.a.createElement(ms.a, {
						name: "lock_fill",
						className: va.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), t && m.a.createElement("li", {
						className: va.a.modalListItem
					}, m.a.createElement("span", null, "2"), o.fbt._("Select {lockIcon} site settings", [o.fbt._param("lockIcon", m.a.createElement(ms.a, {
						name: "settings_fill",
						className: va.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: va.a.modalListItem
					}, m.a.createElement("span", null, t ? 3 : 2), o.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [o.fbt._param("lockIcon", m.a.createElement(ms.a, {
						name: "notification_fill",
						className: va.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(et.g, null, m.a.createElement(Ne.t, {
						text: o.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: e
					})))
				}),
				xa = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Ca = n.n(xa);

			function ya() {
				return (ya = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ea = m.a.memo((function({
					visible: e,
					...t
				}) {
					const [n, s] = Object(u.useState)(e);
					return Object(u.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, s(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), s(!1)
						}
					}, [e]), e ? m.a.createElement("div", ya({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(Ca.a.tooltip, {
							[Ca.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				ja = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Pa = n("./src/reddit/components/InboxTooltip/index.m.less"),
				_a = n.n(Pa);
			const Sa = I.a.wrapped(Ie.a, "CloseIcon", _a.a),
				ka = e => m.a.createElement("div", {
					className: _a.a.welcomeTooltipContainer
				}, m.a.createElement("button", {
					className: _a.a.closeButton,
					onClick: e.onClose
				}, m.a.createElement(Sa, null)), m.a.createElement("h3", {
					className: _a.a.tooltipTitle
				}, o.fbt._("Welcome to your new inbox!", null, {
					hk: "4h8pcK"
				})), m.a.createElement("p", {
					className: _a.a.tooltipDescription
				}, o.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
					hk: "14J4MZ"
				})));
			var wa = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			var Ma = n("./node_modules/icepick/icepick.js");
			const Na = Object(Ma.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Ia = n("./src/reddit/selectors/activeModal.ts"),
				Ta = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Aa = n.n(Ta);
			const Ra = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				La = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(Vr.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(oa.a)(e);
								return Object(Ma.updateIn)(t, ["modifiers"], e => Object(Ma.push)(e, Na))
							}, [e]);
							return Object(oa.b)(t)
						}(),
						r = Object(oa.b)(Ra),
						[a, i] = function(e) {
							const [t, n] = Object(u.useState)(Object(Bt.u)(e));
							return [t, Object(u.useCallback)(() => {
								n(!0), Object(Bt.vb)(e)
							}, [])]
						}(e.userId),
						[c, d] = Object(wa.a)(e.userId),
						l = Object(p.e)(Object(Ia.c)("browser_notifications_permission_settings")),
						b = Object(u.useCallback)(() => {
							s.hide(), n.hide(), i(), c || d()
						}, [s, n, d, i, c]),
						h = Object(u.useCallback)(() => {
							r.hide(), n.hide(), i()
						}, [r, n, i]);
					Object(u.useEffect)(() => {
						a || setTimeout(() => {
							r.show()
						}, 3e3)
					}, [a]);
					const g = Object(u.useRef)(!0);
					Object(u.useEffect)(() => {
						g.current ? g.current = !1 : h()
					}, [e.pageUrl]), Object(sa.a)("INBOX--TOOLTIP", b);
					const f = !s.visible;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(na.a)(n.target.ref, s.target.ref, r.target.ref)
					}, m.a.createElement(ua, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Aa.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? b() : s.show(), e.sendNavClickInbox(), s.visible || h()
						},
						isOpen: s.visible
					}, m.a.createElement(ha, {
						unreadCount: e.unreadCount
					})), !s.visible && !r.visible && m.a.createElement(Wr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Ea, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(ja.a, {
						isOpen: s.visible,
						hideTooltip: b,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					})), f && m.a.createElement(ra.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible,
						tooltipId: "welcome-tooltip-id",
						className: Aa.a.welcomeTooltip,
						arrowClassName: Aa.a.welcomeTooltipArrow
					}, m.a.createElement(ka, {
						onClose: h
					}))), l && m.a.createElement(Oa, {
						onClose: () => {
							t(Object(_e.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Da = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Fa = n("./src/reddit/actions/snoovatarModal.ts"),
				Ua = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ba = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Ga = n("./src/lib/initializeClient/installReducer.ts"),
				Ha = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Ga.a)({
				features: {
					avatar: Ha.a
				}
			});
			const qa = e => 864e5 * e,
				Wa = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Va = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(yt.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Qa(e, t) && n === o
				},
				Qa = (e, t) => {
					const n = Object(yt.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > qa(t)
				};
			var Ka = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				za = n.n(Ka);
			const {
				fbt: Ja
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Za(e, t = "view") {
				if (e) {
					const n = Object(Bt.y)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Bt.gb)(s)
				}
			}
			var Ya = ({
					avatarUrlParams: e
				}) => {
					const t = Object(p.e)(Wa),
						n = Object(p.d)(),
						s = Object(Qr.a)();
					Object(u.useEffect)(() => {
						s(Object(Ua.n)())
					}, [s]), Object(u.useEffect)(() => {
						t || n(Object(Da.a)())
					}, [n, t]), Object(u.useEffect)(() => {
						Za(t)
					}, [t]);
					return m.a.createElement(Ne.k, {
						onClick: () => {
							s(Object(Ua.c)()), Za(t, "click"), n(Object(Fa.b)({
								share: e,
								source: "quick_create"
							}))
						},
						className: za.a.ctaContainer
					}, m.a.createElement("img", {
						className: za.a.quickCreateGiftAnimation,
						src: `${B.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Ja._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ba.a, {
						className: Object(v.a)(za.a.sparkle, za.a.sparkle1)
					}), m.a.createElement(Ba.a, {
						className: Object(v.a)(za.a.sparkle, za.a.sparkle2)
					}), m.a.createElement(Ba.a, {
						className: Object(v.a)(za.a.sparkle, za.a.sparkle3)
					})), Ja._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Xa = n("./src/lib/cache/index.ts"),
				$a = n("./src/lib/matchRoute/index.ts"),
				ei = n("./src/chat/helpers/dom.ts"),
				ti = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				ni = n("./src/reddit/actions/changeUsername.ts"),
				si = n("./src/reddit/actions/chat/toggle.ts"),
				oi = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				ri = n("./src/reddit/actions/postCreation/general.ts"),
				ai = n("./src/reddit/actions/preferences.ts"),
				ii = n("./src/reddit/actions/users.ts"),
				ci = n("./src/reddit/components/BlockNavigation/index.tsx"),
				di = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				li = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var ui = Object(Se.a)({
					getComponent: () => Object(Je.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				mi = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				pi = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				bi = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				hi = n.n(bi);
			class gi extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = e => {
						e.stopPropagation(), this.props.sendEvent(Object(pi.e)(pi.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(pi.c)(pi.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(pi.e)(pi.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					gi.shouldSendViewEvent && (gi.shouldSendViewEvent = !1, this.props.sendEvent(Object(pi.g)(pi.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: hi.a.container
					}, m.a.createElement("div", {
						className: hi.a.topLine
					}), m.a.createElement("button", {
						className: hi.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Ie.a, {
						className: hi.a.closeIcon
					})), m.a.createElement("h5", {
						className: hi.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: hi.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: hi.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: hi.a.buttonWrapper
					}, m.a.createElement(Ne.o, {
						className: hi.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ne.l, {
						className: Object(v.a)(hi.a.commonBtn, hi.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			gi.shouldSendViewEvent = !0;
			const fi = Object(mi.a)(gi, [_o.a.Click, _o.a.Keydown, _o.a.Resize]);
			var vi = Object(A.c)(fi),
				Oi = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				xi = n.n(Oi);
			const Ci = Object(f.c)({
				isLoggedIn: yt.K
			});
			class yi extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(xi.a.IFrame, {
							[xi.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var Ei = Object(p.b)(Ci)(yi),
				ji = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var Pi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ma.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(ms.a, {
					name: "chat",
					className: ba.a.icon2020
				})),
				_i = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Si = n.n(_i);
			const {
				fbt: ki
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var wi = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: Si.a.container
				}, m.a.createElement("p", {
					className: Si.a.title
				}, ki._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: Si.a.subtitle
				}, ki._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: Si.a.description
				}, ki._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Ne.o, {
					className: Si.a.dismissBtn,
					onClick: t
				}, ki._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Mi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ma.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ms.a, {
					name: "message",
					className: ba.a.icon2020
				})),
				Ni = n("./node_modules/lodash/noop.js"),
				Ii = n.n(Ni),
				Ti = n("./src/lib/prettyPrintNumber/index.ts"),
				Ai = n("./src/realtime/GQLSubscription/async.tsx"),
				Ri = n("./src/reddit/actions/alpha.ts"),
				Li = n("./src/reddit/actions/modMode.ts"),
				Di = n("./src/reddit/actions/profile/index.ts"),
				Fi = n("./src/reddit/constants/elementClassNames.ts"),
				Ui = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Bi = n("./src/reddit/helpers/karma.ts"),
				Gi = n("./src/reddit/hooks/useWindowEvent.ts"),
				Hi = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				qi = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Wi = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Vi = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Qi = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ki = n("./src/reddit/selectors/modModeEnabled.ts"),
				zi = n("./src/reddit/selectors/seo/index.ts"),
				Ji = n("./src/reddit/selectors/tooltip.ts"),
				Zi = n("./src/higherOrderComponents/asTooltip.tsx"),
				Yi = n("./src/reddit/components/HiddenDiv.tsx"),
				Xi = n("./src/reddit/controls/Dropdown/index.tsx"),
				$i = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				ec = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				tc = n("./src/reddit/helpers/trackers/authControls.ts"),
				nc = n("./src/reddit/helpers/trackers/modTools.ts"),
				sc = n("./src/reddit/helpers/trackers/navigation.ts"),
				oc = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				rc = n("./src/reddit/helpers/trackers/user.ts"),
				ac = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				ic = n("./src/reddit/constants/colors.ts"),
				cc = n("./src/reddit/controls/InternalLink/index.tsx");

			function dc() {
				return (dc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var lc = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", dc({
						href: s
					}, a), t) : m.a.createElement(cc.a, dc({
						to: s
					}, a), t)
				},
				uc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				mc = n.n(uc);
			const pc = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(mc.a.title, n)
					}, t)
				},
				bc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(mc.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(pc, {
						title: s,
						titleClassName: o
					}))
				},
				hc = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(lc, {
						className: Object(v.a)(mc.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(pc, {
						title: o,
						titleClassName: r
					}))
				},
				gc = e => {
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
					return m.a.createElement(lc, {
						className: Object(v.a)(mc.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(fs.b, {
						"aria-hidden": !0,
						className: Object(v.a)(mc.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: ic.a.snoo
					}), m.a.createElement(pc, {
						title: i,
						titleClassName: c
					}))
				},
				fc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(mc.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(pc, {
						title: s,
						titleClassName: o
					}), m.a.createElement($i.a, {
						className: mc.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var vc = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Oc = n("./src/reddit/selectors/avatarMarketing.ts"),
				xc = n("./src/reddit/selectors/meta.ts"),
				Cc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				yc = n.n(Cc);
			const Ec = (e, t) => e && m.a.createElement("div", {
				className: yc.a.marketingBadge
			}, m.a.createElement(vc.a, {
				className: yc.a.marketingAsset,
				headshot: e
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ba.a, {
				className: Object(v.a)(yc.a.sparkle, yc.a.sparkle1)
			}), m.a.createElement(Ba.a, {
				className: Object(v.a)(yc.a.sparkle, yc.a.sparkle2)
			}), m.a.createElement(Ba.a, {
				className: Object(v.a)(yc.a.sparkle, yc.a.sparkle3)
			}), m.a.createElement(Ba.a, {
				className: Object(v.a)(yc.a.sparkle, yc.a.sparkle4)
			})));
			var jc = ({
				useNewButtonComponent: e,
				onClick: t
			}) => {
				var n;
				const s = Object(p.d)(),
					r = Object(Qr.a)(),
					a = Object(Kt.eb)(),
					i = Object(p.e)(e => e.user.account),
					c = Object(p.e)(bs.c),
					d = Object(p.e)(Gs.d),
					l = Object(p.e)(Oc.b),
					u = Object(p.e)(Oc.a),
					b = () => s(Object(Fa.b)({
						clickSource: "nav"
					})),
					h = Object(p.e)(xc.i).startsWith("en");
				if ((null === (n = null == a ? void 0 : a.meta) || void 0 === n ? void 0 : n.name) === O.Mb.AVATAR) return null;
				!l && d && s(Object(Da.a)()), u && r(Ua.l);
				const g = i && i.snoovatarFullBodyAsset ? o.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : o.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (e) {
					const e = m.a.createElement(m.a.Fragment, null, g, h && Ec(u, c));
					return m.a.createElement(bc, {
						onClick: () => {
							b(), "function" == typeof t && t()
						},
						title: e,
						titleClassName: yc.a.avatarLinkBody
					})
				}
				const f = Object(ec.c)((null == i ? void 0 : i.snoovatarFullBodyAsset) ? md("avatar_style") : md("add"), ((e, t, n, s) => o => m.a.createElement("div", {
					className: `${yc.a.avatarLinkBody} ${o.className}`
				}, e, s && Ec(t, n)))(g, u, c, h));
				return m.a.createElement(f, {
					onClick: b
				})
			};
			const Pc = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: mc.a.headingContent
					}, m.a.createElement("span", {
						className: mc.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(mc.a.title, s)
					}, n))
				},
				_c = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(mc.a.button, t),
						onClick: s
					}, m.a.createElement(Pc, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Sc = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(lc, {
						className: Object(v.a)(mc.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(Pc, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class kc extends m.a.Component {
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
						children: t,
						className: n,
						icon: s,
						onClick: o,
						title: r,
						url: a
					} = this.props, i = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: mc.a.button,
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof o) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								o(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: mc.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: mc.a.iconContainer
					}, s), m.a.createElement("span", {
						className: mc.a.title
					}, a ? m.a.createElement(lc, {
						className: mc.a.innerLink,
						href: a
					}, r) : m.a.createElement(m.a.Fragment, null, r)), m.a.createElement(ms.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(mc.a.chevronIcon, {
							[mc.a["m-expanded"]]: i
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(mc.a.contentContainer, mc.a["m-collapsible"], {
							[mc.a.isOpen]: i
						}, n)
					}, t))
				}
			}
			var wc = kc;
			var Mc = [{
					link: {
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
						url: "/t/tabletop_game/"
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
				Nc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Ic = n.n(Nc);
			var Tc = ({
				isOpen: e,
				onClick: t,
				sendEvent: n
			}) => {
				const [s, r] = Object(u.useState)(null), a = e => () => {
					r(s === e ? null : e)
				};
				return m.a.createElement(wc, {
					icon: m.a.createElement(ms.a, {
						name: "discover"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(sc.b)(s ? "explore_chevron" : "explore_menu")), "function" == typeof t && t(e)
					},
					title: o.fbt._("Explore", null, {
						hk: "4xNnBs"
					})
				}, m.a.createElement("span", null, Mc.map((e, t) => (({
					link: e,
					sublinks: t
				}, {
					isOpen: n,
					onClick: s
				}, o) => m.a.createElement(wc, {
					className: Ic.a.collapsibleContainer,
					isOpen: n,
					key: e.url,
					onClick: (t, n) => {
						e.noun && o(Object(sc.b)(e.noun + (n ? "_chevron" : "_menu"))), "function" == typeof s && s(t)
					},
					title: e.title,
					url: e.url
				}, t.map(e => m.a.createElement(hc, {
					className: Ic.a.basicLink,
					href: e.url,
					key: e.url,
					onClick: () => {
						e.noun && o(Object(sc.b)(e.noun + "_menu"))
					},
					title: e.title
				}))))(e, (e => ({
					onClick: a(e),
					isOpen: s === e
				}))(t), n))))
			};
			var Ac = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: mc.a.heading
				}, m.a.createElement("span", {
					className: mc.a.headingContent
				}, m.a.createElement("span", {
					className: mc.a.iconContainer
				}, s), m.a.createElement("span", {
					className: mc.a.title
				}, t))), m.a.createElement("div", {
					className: mc.a.contentContainer
				}, n))
			};
			const Rc = () => {
					const e = Object(p.d)(),
						t = Object(Qr.a)(),
						n = Object(p.e)(yt.X);
					return m.a.createElement(fc, {
						isEnabled: n,
						onClick: () => {
							t(Object(rc.g)(n)), (t => e(Object(ai.y)(t)))(!n)
						},
						title: o.fbt._("Dark Mode", null, {
							hk: "1pZGTO"
						})
					})
				},
				Lc = () => {
					const e = Object(p.d)(),
						t = Object(Qr.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Ki.a);
					return n && n.isMod ? m.a.createElement(fc, {
						isEnabled: s,
						onClick: () => {
							t(Object(nc.i)(!s)), (() => e(Object(Li.b)()))()
						},
						title: o.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				Dc = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(yt.k),
						s = Object(p.e)(yt.P);
					return n ? m.a.createElement(Ac, {
						icon: m.a.createElement(ms.a, {
							name: "profile"
						}),
						title: o.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(fc, {
						title: o.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(rc.h)(!s)), (t => e(Object(ai.H)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(hc, {
						title: o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(sc.b)("profile"))
					}), m.a.createElement(jc, {
						onClick: () => e(Object(ta.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(hc, {
						title: o.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(sc.b)("settings"))
					})) : null
				},
				Fc = () => {
					return Object(p.e)(yt.k) ? m.a.createElement(Ac, {
						title: o.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(ms.a, {
							name: "views"
						})
					}, m.a.createElement(Lc, null), m.a.createElement(Rc, null)) : null
				},
				Uc = ({
					isOpen: e,
					onClick: t
				}) => {
					return Object(p.e)(yt.k) ? null : m.a.createElement(wc, {
						icon: m.a.createElement(ms.a, {
							name: "settings"
						}),
						title: o.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: e,
						onClick: t
					}, m.a.createElement(Rc, null))
				},
				Bc = ({
					isOpen: e,
					onClick: t,
					sendEvent: n
				}) => m.a.createElement(wc, {
					icon: m.a.createElement(ms.a, {
						name: "rules"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(sc.b)(s ? "terms_chevron" : "terms_menu")), "function" == typeof t && t(e)
					},
					title: o.fbt._("Terms & Policies", null, {
						hk: "3sa1sF"
					})
				}, m.a.createElement(hc, {
					href: "https://www.redditinc.com/policies/user-agreement",
					onClick: () => n(Object(sc.b)("user_agreement")),
					title: o.fbt._("User Agreement", null, {
						hk: "kfqI"
					})
				}), m.a.createElement(hc, {
					href: "https://www.redditinc.com/policies/privacy-policy",
					onClick: () => n(Object(sc.b)("privacy_policy")),
					title: o.fbt._("Privacy Policy", null, {
						hk: "y8Vyn"
					})
				}), m.a.createElement(hc, {
					href: "https://www.redditinc.com/policies/content-policy",
					onClick: () => n(Object(sc.b)("content_policy")),
					title: o.fbt._("Content Policy", null, {
						hk: "2xjmLL"
					})
				}), m.a.createElement(hc, {
					href: "https://www.redditinc.com/policies/moderator-guidelines",
					onClick: () => n(Object(sc.b)("mod_policy")),
					title: o.fbt._("Moderator Guidelines", null, {
						hk: "2AfPVY"
					})
				})),
				Gc = (e = new Date) => {
					const t = e.getFullYear();
					return `/posts/${e.getMonth()>=6?t:t-1}/`
				};
			var Hc = () => [{
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
				noun: "gifts",
				title: () => o.fbt._("Reddit Gifts", null, {
					hk: "3FWQGX"
				}),
				url: "https://www.redditgifts.com"
			}, {
				noun: "rereddit",
				title: () => o.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Gc()
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
				noun: "advertise",
				title: () => o.fbt._("Advertise", null, {
					hk: "3eP3Lb"
				}),
				url: "https://www.redditinc.com/advertising"
			}, {
				noun: "blog",
				title: () => o.fbt._("Blog", null, {
					hk: "2XlvLX"
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
					hk: "FYgfC"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var qc = ({
					isLoggedIn: e,
					isOpen: t,
					onClick: n,
					sendEvent: s,
					url: r
				}) => m.a.createElement(wc, {
					icon: m.a.createElement(ms.a, {
						name: "info"
					}),
					title: o.fbt._("More", null, {
						hk: "42foEw"
					}),
					isOpen: t,
					onClick: (e, t) => {
						s(Object(sc.b)(t ? "more_chevron" : "more_menu")), "function" == typeof n && n(e)
					}
				}, Hc().map(e => (({
					noun: e,
					rel: t,
					title: n,
					url: s
				}, o) => m.a.createElement(hc, {
					href: s,
					key: s,
					onClick: () => {
						e && o(Object(sc.b)(e))
					},
					rel: t,
					title: n()
				}))(e, s)), e ? m.a.createElement(hc, {
					href: "https://old.reddit.com" + r,
					title: o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}),
					onClick: () => {
						s(Object(sc.b)("old_reddit")), s(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: Ct.ab(e),
							subreddit: Ct.ib(e)
						}))
					}
				}) : null),
				Wc = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Vc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				Qc = n.n(Vc);
			var Kc = ({
					isOpen: e,
					onClick: t
				}) => {
					const [{
						links: n,
						showAll: s
					}, r] = Object(u.useState)({
						links: Object(Wc.b)(),
						showAll: !1
					});
					if (Object(u.useEffect)(() => {
							e || r({
								links: n,
								showAll: !1
							})
						}, [n, e]), 0 === n.length) return null;
					const a = s ? n : n.slice(0, 3),
						i = () => r({
							links: n,
							showAll: !s
						});
					return m.a.createElement(wc, {
						"aria-hidden": !0,
						icon: m.a.createElement(ms.a, {
							name: "history"
						}),
						isOpen: e,
						title: o.fbt._("Recent Communities", null, {
							hk: "cJ4rl"
						}),
						onClick: t
					}, a.map(e => {
						var t, n;
						return m.a.createElement(gc, {
							className: Qc.a.basicLink,
							href: e.url,
							iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : Qc.a.subredditIcon,
							iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
							key: e.url,
							title: e.title,
							titleClassName: Qc.a.title
						})
					}), n.length > 3 && (e => m.a.createElement("span", {
						className: mc.a.spanButton,
						onClick: i
					}, m.a.createElement("span", {
						className: Object(v.a)(mc.a.headingContent, Qc.a.headingContent)
					}, m.a.createElement("span", {
						className: mc.a.title
					}, e))))(s ? o.fbt._("see less", null, {
						hk: "3tQWvR"
					}) : o.fbt._("see more", null, {
						hk: "1WV0AC"
					})))
				},
				zc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Jc = n.n(zc);

			function Zc() {
				return (Zc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Yc = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Xc = e => {
					const t = e && e.coins || 0;
					return o.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [o.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var $c;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}($c || ($c = {}));
			var ed = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						logoutUser: s,
						openCommunityCreationModal: r,
						sendEvent: a,
						shouldShowCreateCommunityItem: i,
						url: c,
						user: d
					} = e, [l, p] = Object(u.useState)($c.TermsAndPolicies), b = e => () => {
						p(l === e ? null : e)
					}, h = e => ({
						onClick: b(e),
						isOpen: l === e
					}), g = !!d, f = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: Yc
					}, m.a.createElement(Dc, null), m.a.createElement(Fc, null), m.a.createElement(() => i ? m.a.createElement(_c, {
						icon: m.a.createElement(ms.a, {
							name: "community"
						}),
						onClick: () => {
							r(), a(Object(oc.a)())
						},
						title: o.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(ms.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, o.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Jc.a.meta
						}, Xc(d))),
						onClick: () => {
							Object(wo.e)(wo.a.GoldPayment, !0), e.sendEvent(Object(rc.b)())
						},
						titleClassName: Jc.a.coinsTitle,
						className: Jc.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(ms.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(wo.e)(wo.a.GoldPayment, !0), e.sendEvent(Object(rc.e)())
						},
						title: o.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(ms.a, {
							name: "powerup"
						}),
						href: Fs.a,
						onClick: () => {
							Object(wo.e)(wo.a.GoldPayment, !0), e.sendEvent(Object(rc.c)())
						},
						title: o.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(ms.a, {
							name: "live"
						}),
						href: Bs.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: o.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !g && m.a.createElement(Kc, h($c.RecentCommunitiesMenu)), m.a.createElement(Tc, Zc({}, h($c.ExploreMenu), {
						sendEvent: a
					})), m.a.createElement(Uc, h($c.Settings)), m.a.createElement(() => m.a.createElement(Sc, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(ms.a, {
							name: "help"
						}),
						title: o.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(qc, Zc({}, h($c.MoreMenu), {
						isLoggedIn: g,
						url: c,
						sendEvent: a
					})), m.a.createElement(Bc, Zc({}, h($c.TermsAndPolicies), {
						sendEvent: a
					})), m.a.createElement(() => g ? m.a.createElement(_c, {
						icon: m.a.createElement(ms.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), s()
						},
						title: o.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(_c, {
						icon: m.a.createElement(ms.a, {
							name: "profile"
						}),
						onClick: f,
						title: o.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: mc.a.copyrightContainer
					}, m.a.createElement("span", {
						className: mc.a.copyrightText
					}, o.fbt._("© {year} Reddit, Inc. All rights reserved", [o.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				td = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				nd = n.n(td);

			function sd() {
				return (sd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const od = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				rd = () => m.a.createElement("div", {
					className: nd.a.wrappedRedditLink
				}, o.fbt._("{=Reddit Recap}{=NEW!}", [o.fbt._param("=Reddit Recap", m.a.createElement("p", {
					className: nd.a.title
				}, o.fbt._("Reddit Recap", null, {
					hk: "1fzA7a"
				}))), o.fbt._param("=NEW!", m.a.createElement("p", {
					className: nd.a.new
				}, o.fbt._("NEW!", null, {
					hk: "hAUg8"
				})))], {
					hk: "3xR4ek"
				})),
				ad = I.a.wrapped(Xi.a, "Dropdown", nd.a),
				id = Object(Zi.a)(ad),
				cd = e => t => m.a.createElement(ms.a, sd({
					name: e
				}, t)),
				dd = e => m.a.createElement(ec.a, {
					className: Object(v.a)(nd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: nd.a.buttonText
				}, e.displayText), m.a.createElement($i.a, {
					className: nd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var ld = Object(A.c)(e => {
				const {
					logoutUser: t,
					dispatchOpenLoginModal: n,
					isCrawler: s,
					isModModeEnabled: r,
					isPresenceToggleEnabled: a,
					navbarLikeMweb: i,
					navbarLikeMwebV2: c,
					nightmode: d,
					requestAwardKarma: l,
					showPresence: b,
					toggleModMode: h,
					user: g,
					sendEvent: f,
					shouldShowCreateCommunityItem: v,
					openCommunityCreationModal: O
				} = e, x = g && g.id, C = Object(p.e)(Gs.q), y = Object(p.e)(t => e.isOpen && Object(Gs.y)(t)), E = Object(p.e)(qs.b);
				Object(u.useEffect)(() => {
					l()
				}, [x]);
				const j = Object(ec.c)(cd("settings"), o.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					_ = Object(ec.b)(cd("help"), o.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					S = Object(ec.b)(cd("external_link"), o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					k = Object(ec.c)(cd("logout"), o.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					w = Object(ec.c)(cd("logout"), o.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					M = Object(ec.c)(ac.a, o.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					N = (e => {
						const t = e && e.coins || 0;
						return o.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [o.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(g),
					I = Object(ec.c)(cd("coins"), o.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: N
					}),
					T = o.fbt._("No ads, monthly coins, and more!", null, {
						hk: "3OXYGs"
					}),
					A = Object(ec.c)(cd("premium"), o.fbt._("Premium", null, {
						hk: "1SD1CS"
					}), {
						meta: y ? T : void 0
					}),
					R = () => {
						Object(wo.e)(wo.a.GoldPayment, !0), f(Object(rc.e)())
					},
					L = Object(ec.c)(cd("powerup"), o.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					D = Object(ec.c)(Es, rd),
					F = Object(ec.c)(cd("live"), o.fbt._("Talk", null, {
						hk: "5IHxP"
					})),
					U = Object(ec.c)(cd("prediction"), o.fbt._("Predictions", null, {
						hk: "1LUvJo"
					})),
					B = Object(ec.c)(cd("community"), o.fbt._("Create a Community", null, {
						hk: "3QGru4"
					}));
				return i || c ? s ? m.a.createElement(Yi.a, null, m.a.createElement(ed, e)) : m.a.createElement(id, {
					className: nd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(ed, e)) : m.a.createElement(id, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, g && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, o.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(dd, {
					className: nd.a.presenceToggle,
					displayText: b ? o.fbt._("On", null, {
						hk: "3aW5MW"
					}) : o.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: b,
					onClick: () => {
						f(Object(rc.h)(!b)), e.toggleShowPresence(!b)
					}
				})), g && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, o.fbt._("My Stuff", null, {
					hk: "47vhMb"
				})), E && m.a.createElement(D, {
					href: xs.b,
					onClick: () => {
						e.sendEvent(Object(rc.f)())
					}
				}), (e => {
					const t = o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(ec.c)(cd("profile"), t);
					return m.a.createElement(n, {
						href: e.url,
						onClick: () => f(Object(sc.b)("profile"))
					})
				})(g), m.a.createElement(jc, null), m.a.createElement(j, {
					href: "/settings",
					onClick: () => f(Object(sc.b)("settings"))
				})), m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, o.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), g && g.isMod && m.a.createElement(dd, {
					displayText: o.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: r,
					onClick: () => {
						f(Object(nc.i)(!r)), h()
					}
				}, m.a.createElement(ms.a, {
					name: "mod_mode",
					className: nd.a.modModeIcon
				})), m.a.createElement(dd, {
					displayText: o.fbt._("Night Mode", null, {
						hk: "2lyxcc"
					}),
					isEnabled: d,
					onClick: () => {
						f(Object(rc.g)(d)), e.toggleNightmode(!d)
					}
				}, m.a.createElement(ms.a, {
					name: "night",
					className: nd.a.nightIcon
				})), m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, o.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), v && m.a.createElement(B, {
					className: nd.a.entrypointLink,
					onClick: () => {
						O(), f(Object(oc.a)())
					}
				}), m.a.createElement(u.Fragment, null, y && m.a.createElement(A, {
					href: "/premium",
					onClick: R
				}), m.a.createElement(I, {
					href: "/coins",
					onClick: () => {
						Object(wo.e)(wo.a.GoldPayment, !0), f(Object(rc.b)())
					}
				}), !y && m.a.createElement(A, {
					href: "/premium",
					onClick: R
				}), m.a.createElement(L, {
					href: "/powerups",
					onClick: () => {
						Object(wo.e)(wo.a.PowerupsFlow, !0), f(Object(rc.c)())
					}
				}), m.a.createElement(F, {
					href: Bs.a,
					onClick: () => f(Object(sc.b)("reddit_talk"))
				}), C && m.a.createElement(U, {
					href: "/predictions",
					onClick: () => {
						Object(wo.e)(wo.a.GoldPayment, !0), f(Object(rc.d)())
					}
				})), m.a.createElement(_, {
					href: "https://www.reddithelp.com",
					onClick: () => f(Object(sc.b)("help_center"))
				}), g && m.a.createElement(S, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						f(Object(sc.b)("old_reddit")), f(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: Ct.ab(e),
							subreddit: Ct.ib(e)
						}))
					}
				}), !od && g && m.a.createElement(M, {
					href: "",
					onClick: () => {
						f(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: Ct.ab(e),
							subreddit: Ct.ib(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: nd.a.divider
				}), g ? m.a.createElement(w, {
					href: "#",
					onClick: e => {
						f(Object(sc.b)("logout")), t(), e.preventDefault()
					}
				}) : m.a.createElement(k, {
					href: "#",
					onClick: e => {
						Object(P.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), f(Object(tc.b)()))
					}
				}))
			});

			function ud() {
				return (ud = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const md = e => t => m.a.createElement(ms.a, ud({
					name: e
				}, t)),
				pd = Object(p.b)(() => Object(f.c)({
					isCrawler: e => !!Object(zi.a)(e),
					isModModeEnabled: Ki.a,
					isOpen: Object(Ji.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Qi.d,
					shouldShowCreateCommunityItem: yt.ib,
					navbarLikeMweb: Vi.a,
					navbarLikeMwebV2: Vi.b,
					nightmode: yt.X,
					showPresence: yt.P,
					url: Lt.u
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(ta.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					exposeNavClickV2Experiment: () => e((() => async (e, t) => Object(Jr.e)(t(), Qt.Md))()),
					toggleNightmode: t => e(Object(ai.y)(t)),
					toggleShowPresence: t => e(Object(ai.H)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Ri.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (je.a.get("rseor3") && je.a.remove("rseor3", {
							domain: B.a.cookieDomain
						}), e(Object(Ri.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Di.f)(Object(vt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(ea.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ui.a)())), e(Object(ii.q)())
					},
					toggleModMode: () => e(Object(Li.b)()),
					openCommunityCreationModal: () => e(Object(_e.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var bd = Object(Kt.u)({
					pageLayer: e => e
				})(pd(e => {
					const {
						exposeNavClickV2Experiment: t,
						isPresenceToggleEnabled: n,
						requestAwardKarma: s,
						showPresence: r,
						user: a
					} = e, i = Object(p.e)(Qi.b), [c, d] = Object(u.useState)(!1), l = a && a.id;
					Object(u.useEffect)(() => {
						s()
					}, [l]);
					const b = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: l
								}
							}
						}), [l]),
						h = Object(u.useCallback)(() => {
							d("visible" === document.visibilityState)
						}, []);
					return Object(Gi.a)("visibilitychange", h), Object(u.useEffect)(() => {
						d("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(v.a)(nd.a.container, Fi.e)
					}, r && c && i && m.a.createElement(Ai.a, {
						variables: b,
						onData: Ii.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Wi.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, nd.a.inlineButton, {
							[nd.a.dropdownOpen]: e.isOpen,
							[nd.a.isLoggedOut]: !a,
							[nd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							t(), e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: nd.a.accountDisplayText
					}, (t => t ? m.a.createElement("span", {
						className: Object(v.a)(nd.a.accountWrapper, nd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, t.accountIcon && m.a.createElement(Os.a, {
						className: Object(v.a)(nd.a.imgIcon, {
							[nd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: nd.a.imgIconWrapper,
						shouldShowPresenceIndicator: n && r
					}), m.a.createElement("span", {
						className: nd.a.accountDetails
					}, m.a.createElement("span", {
						className: nd.a.username
					}, t.displayText, t.isGold && m.a.createElement(qi.a, {
						className: nd.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: nd.a.accountKarma
					}, m.a.createElement(ms.a, {
						name: "karma",
						isFilled: !0,
						className: nd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Bi.a)(e),
							n = Object(Ti.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(t))), !!t.coins && m.a.createElement("span", {
						className: nd.a.accountCoins
					}, m.a.createElement(Hi.a, {
						className: nd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Ti.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(t))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(nd.a.accountWrapper, nd.a.isLoggedOut)
					}, m.a.createElement(ms.a, {
						name: "user",
						className: nd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(ms.a, {
						name: "caret_down"
					})), m.a.createElement(Ko.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(ld, e))
				})),
				hd = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				gd = n("./src/reddit/components/PromptTooltip/TooltipHooked.m.less"),
				fd = n.n(gd);

			function vd() {
				return (vd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Od = m.a.memo((function({
					visible: e,
					...t
				}) {
					const [n, s] = Object(u.useState)(e);
					return Object(u.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, s(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), s(!1)
						}
					}, [e]), e ? t.styled ? m.a.createElement("div", vd({
						className: Object(v.a)(fd.a.tooltip, {
							[fd.a.visible]: n || t.isInstant
						})
					}, t.popperProps, {
						onMouseEnter: () => t.isCloseOnHover && t.hide()
					}), t.children, n && !t.noArrow && m.a.createElement("div", vd({
						className: fd.a.arrow
					}, t.arrowProps))) : m.a.createElement("div", t.popperProps, t.children) : null
				})),
				xd = n("./src/reddit/components/Settings/modalIds.ts"),
				Cd = n("./src/reddit/helpers/trackers/inbox.ts"),
				yd = n("./src/reddit/routes/index.ts"),
				Ed = n("./src/reddit/selectors/appBadges.ts");
			const jd = e => Object(Jr.c)(e, {
					experimentName: Qt.E,
					experimentEligibilitySelector: () => Object(yt.J)(e)
				}) === Qt.Uc,
				Pd = e => Object(Jr.c)(e, {
					experimentName: Qt.G,
					experimentEligibilitySelector: () => Object(yt.J)(e) && !jd(e)
				}) === Qt.Uc,
				_d = e => Object(Jr.c)(e, {
					experimentName: Qt.H,
					experimentEligibilitySelector: () => Object(yt.J)(e) && !jd(e)
				}) === Qt.Uc;
			var Sd = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				kd = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				wd = n("./src/reddit/selectors/sso.ts");
			const Md = "change-username-tooltip-id",
				Nd = "email-verification-tooltip-id",
				Id = m.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(Vr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement(ua, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: hd.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, m.a.createElement(ma.a, {
						isActive: t.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(ms.a, {
						className: ba.a.icon2020,
						name: "mod"
					})), m.a.createElement(Wr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(hd.b, {
						className: ba.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName
					}))
				})),
				Td = m.a.memo((function(e) {
					const t = Object(Vr.a)(),
						n = Object(oa.b)(),
						s = Object(p.e)(yt.k),
						r = Object(p.e)(Pd),
						a = Object(p.e)(_d),
						i = r || a,
						c = {
							...n.arrowProps,
							style: {
								...n.arrowProps.style,
								borderBottom: "5px solid #006DC6"
							}
						};
					return Object(u.useEffect)(() => {
						const e = Object(Xa.c)(O.q.CHAT, O.y.CHAT_MEDIA_SHARE_GLOBAL_PROMPT, (null == s ? void 0 : s.id) || "unknown"),
							t = Object(Xa.b)(e);
						i && (t || 0) < 3 && Object(Xa.d)(e, t ? t + 1 : 1, Xa.a), i && 2 === t && setTimeout(() => {
							n.show()
						}, 1e3)
					}, []), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: () => {
							n.hide(), t.show()
						},
						onMouseLeave: t.hide,
						ref: Object(na.a)(t.target.ref, n.target.ref)
					}, m.a.createElement("a", {
						className: ba.a.link,
						href: `${B.a.redditUrl}/chat`,
						onClick: Object(ei.a)(e.onClickChat)
					}, m.a.createElement(Pi, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Wr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})), i && m.a.createElement(Od, {
						arrowProps: c,
						popperProps: n.popperProps,
						visible: n.visible,
						hide: () => {},
						isInstant: !0,
						styled: !0
					}, m.a.createElement("button", {
						className: ba.a.Tooltip
					}, o.fbt._("NEW! Send images", null, {
						hk: "1CSvOg"
					}))))
				})),
				Ad = m.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(Vr.a)();
					return m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("a", {
						className: ba.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, m.a.createElement(Mi, {
						unreadCount: t && t.inboxCount || 0
					})), m.a.createElement(Wr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Rd = m.a.memo((function(e) {
					const t = Object(Vr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: ba.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(ms.a, {
						className: ba.a.icon2020,
						name: "add"
					}))), m.a.createElement(Wr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Ld = Object(Kt.u)({
					pageLayer: e => e
				}),
				Dd = Object(f.c)({
					activeDropdownId: Ji.a,
					appBadges: Ed.b,
					chatDirectMessagesCount: Ed.e,
					email: yt.n,
					hasUnreadChatMessages: Ed.f,
					inboxBadgeCount: Ed.g,
					isAvatarQuickCreateEnabled: e => Object(Gs.g)(e) && (e => {
						const t = Wa(e),
							n = (new Date).getTime(),
							s = Object(Bt.y)();
						if (!(null == t ? void 0 : t.active) || !Va(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + qa(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: Sd.c,
					isInboxAppBadgingGqlEnabled: kd.a,
					isInboxRedesignActive: Hs.b,
					isModerator: xt.j,
					isNameEditable: yt.M,
					isResponsiveSettingsEnabled: Jt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(Kt.M)(t) && !!Object(yt.n)(e) && !Object(yt.A)(e) && Object(yt.K)(e) && !Object(yt.I)(e),
					shouldShowChangeUsernameModals: wd.c,
					unreadNotifications: yt.lb
				}),
				Fd = Object(p.b)(Dd, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(ni.d)()),
					closeEmailVerificationTooltip: () => e(Object(oi.b)()),
					showEmailVerficiationTooltip: () => e(Object(oi.b)()),
					fetchAppBadges: () => e(Object(ti.c)()),
					onChatClick: () => e(Object(si.g)()),
					onDismissCustomizeFlyout: () => e(Object(ai.u)()),
					onOpenModerationDropdown: () => {
						e(Object(ta.h)({
							tooltipId: hd.a
						})), e(Object(So.q)())
					},
					onOpenUserDropdown: () => e(Object(ta.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(_e.h)(xd.b))
					},
					openKeepUsernameModal: () => {
						e(Object(_e.h)(xd.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(oi.b)()), e(Object(_e.i)(xd.a))
					},
					resendEmail: () => e(Object(ii.x)(pi.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ri.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(ni.f)(n))
					}
				}));
			class Ud extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Cd.t)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(sc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object($a.a)(e.pathname, yd.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Mb.POST_CREATION && n !== O.Mb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), this.props.isInboxAppBadgingGqlEnabled && Xo()(this.props.appBadges) && this.props.fetchAppBadges()
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
						isChangeUsernameTooltipShowing: d,
						isCustomizeFlyoutShowing: l,
						isEmailVerificationTooltipShowing: p,
						isGoogleOneTapEnabled: b,
						isInboxRedesignActive: h,
						isModerator: g,
						isNameEditable: f,
						isResponsiveSettingsEnabled: O,
						onDismissCustomizeFlyout: x,
						onOpenUserDropdown: C,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						pageLayer: j,
						resendEmail: P,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: k,
						unreadNotifications: w,
						user: M
					} = this.props, {
						googleOneTapIFrame: N
					} = this.state, I = !(!w || !w.hasUnreadModmail), T = M && Object(vt.e)(M) || "", A = Object(v.a)({
						[ba.a["m-responsive"]]: O
					});
					return m.a.createElement(gt.a, {
						id: Nd,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(gt.a, {
						className: ba.a.headerLinks,
						id: Md
					}, g && m.a.createElement(Id, {
						isModerateIconLit: I,
						moderationDropdownOpen: e === hd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: w
					}), M && m.a.createElement(u.Fragment, null, m.a.createElement(Td, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), h ? m.a.createElement(La, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == j ? void 0 : j.url,
						userId: M.id,
						isLoggedIn: !!M,
						iconWrapper: ba.a.iconWrapper
					}) : m.a.createElement(Ad, {
						onClickMail: this.onClickMail,
						unreadNotifications: w
					}), m.a.createElement(Rd, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement("span", {
						className: ba.a.iconWrapper
					}, c ? m.a.createElement(Ya, {
						avatarUrlParams: {
							avatarId: "random",
							username: T
						}
					}) : m.a.createElement(ji.a, null)))), m.a.createElement(bd, {
						className: ba.a.headerUserDropdown,
						googleOneTapIFrame: N,
						onClick: C,
						user: M,
						sendEventWithName: this.sendEventWithName
					}), b && m.a.createElement("div", {
						className: ba.a.loggedInGoogleOneTap
					}, m.a.createElement(Ei, {
						exposeIFrameElement: this.exposeIFrameElement
					})), l && m.a.createElement(wi, {
						onCloseFlyout: x
					}), m.a.createElement(vi, {
						closeTooltip: o,
						email: r,
						isOpen: _ && p,
						resendEmail: P,
						toggleChangeEmailModal: k,
						tooltipId: Nd
					}), m.a.createElement(ui, {
						email: r,
						shouldOpenTooltip: _
					}), f && !O && m.a.createElement(u.Fragment, null, m.a.createElement(li.a, {
						closeTooltip: s,
						isOpen: d && !S,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						tooltipId: Md,
						username: T
					}), S && m.a.createElement(di.a, {
						isResponsiveSettingsEnabled: O,
						overlayClassName: A,
						username: T,
						withOverlay: !0
					}), m.a.createElement(ci.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Bd = Object(A.c)(Ld(Fd(Ud))),
				Gd = n("./src/reddit/components/Header/User/index.m.less"),
				Hd = n.n(Gd);
			const {
				fbt: qd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wd = Object(f.c)({
				account: e => e.user.account,
				origin: xc.j
			}), Vd = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, Hd.a.row)
			}, !e.account && m.a.createElement(Qd, e), m.a.createElement(Bd, {
				className: Object(v.a)({
					[Hd.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), Qd = e => {
				const t = Object(p.e)(Ed.g),
					n = Object(p.e)(yt.sb),
					s = Object(p.e)(Hs.d),
					o = e.pageLayer,
					r = B.a.accountManagerOrigin,
					a = o ? o.url : "/",
					i = o && o.meta && o.meta.name === O.Mb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a);
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(La, {
					sendNavClickInbox: () => e.sendEvent(Object(Cd.t)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Hd.a.iconWrapper
				}), m.a.createElement("div", {
					className: Hd.a.loggedOutRow
				}, m.a.createElement(Ne.t, {
					kind: Ne.b.ExternalLink,
					priority: Ne.c.Secondary,
					redditStyle: !0,
					className: Hd.a.button,
					href: `${r}/login/?dest=${i}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(tc.a)("nav")))
					}
				}, qd._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ne.t, {
					kind: Ne.b.ExternalLink,
					priority: Ne.c.Primary,
					redditStyle: !0,
					className: Object(v.a)(Hd.a.separator, Hd.a.button),
					href: `${r}/register/?dest=${i}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(tc.c)("nav")))
					}
				}, qd._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Kd = Object(Kt.u)()(Object(p.b)(Wd, e => ({
					onOpenLoginModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderLogin
						})), e(Object(ea.i)())
					},
					onOpenRegisterModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderSignup
						})), e(Object(ea.j)())
					},
					closeUserDropdown: () => e(Object(ta.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(Vd))),
				zd = n("./src/reddit/components/Header/index.m.less"),
				Jd = n.n(zd);

			function Zd() {
				return (Zd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Yd = I.a.header("HeaderDynamicStyles", Jd.a),
				Xd = Object(f.c)({
					isLoggedIn: yt.K,
					isNightMode: yt.X,
					isResponsiveSettingsEnabled: Jt.a,
					isPageResponsive: Br.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				$d = Object(Kt.u)({
					categoryName: Kt.c,
					pageLayer: e => e
				}),
				el = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Jd.a.left
					}, m.a.createElement(Ko.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Qo.b, null), m.a.createElement(ds.a, {
						"aria-label": o.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: Jd.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Fr.a, {
						className: Object(v.a)(Jd.a.snoo, {
							[Jd.a.snooExp]: t
						})
					}), m.a.createElement(Ur.a, {
						className: Jd.a.wordmark
					})), e.children)
				},
				tl = e => m.a.createElement("div", {
					className: Jd.a.right
				}, e.children, m.a.createElement(Kd, null)),
				nl = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(Jd.a.layout, {
							[Jd.a.layoutContainer]: t
						})
					}, m.a.createElement(el, Zd({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Vo, null), m.a.createElement(Dr, {
						className: Jd.a.search
					})), m.a.createElement(tl, null, m.a.createElement($r, {
						className: Jd.a.quickLinks
					})))
				},
				sl = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(Jd.a.layout, {
							[Jd.a.layoutContainer]: t
						})
					}, m.a.createElement(el, Zd({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: Jd.a.searchContainer
					}, m.a.createElement(Dr, {
						className: Jd.a.search
					}))), m.a.createElement(tl, null))
				};
			var ol = $d(Object(p.b)(Xd, e => ({
					onReloadFrontpage: () => e(Object(Mo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(g.a);
					return t = e.isLoggedIn ? nl : sl, m.a.createElement(Yd, {
						"data-redditstyle": !0,
						className: Object(v.a)(Jd.a.container, e.className, {
							[Jd.a.bladeIsOpen]: e.isBladeOpen,
							[Jd.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(qr, {
						className: Jd.a.MwebResponsiveHeader
					}))
				}))),
				rl = n("./src/reddit/components/LightboxHeader/index.tsx"),
				al = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				il = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				cl = n.n(il);
			const {
				fbt: dl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ll = Object(f.c)({
				currentPage: Ms
			}), ul = Object(p.b)(ll, e => ({
				onUnpinSubscriptions: () => e(Object(_.j)())
			})), ml = Object(Kt.u)();
			var pl = I.a.wrapped(ml(ul(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: cl.a.title
				}, m.a.createElement(bo, {
					className: cl.a.listHeader
				}, dl._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: cl.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(ms.a, {
					name: "close",
					className: cl.a.icon
				}))), m.a.createElement(Bo, {
					currentPage: e.currentPage
				})))), "Component", cl.a),
				bl = n("./src/reddit/components/Survey/index.tsx"),
				hl = n("./src/reddit/components/ThemeProvider/index.tsx"),
				gl = n("./src/reddit/actions/toaster.ts");
			const fl = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				vl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...Ct.d(t),
						reason: "primary"
					}
				}),
				Ol = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...Ct.d(t),
						reason: "secondary"
					}
				});
			var xl = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Cl = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				yl = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				El = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				jl = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Pl = n("./src/reddit/models/Toast/index.ts"),
				_l = n("./src/reddit/selectors/structuredStyles.ts"),
				Sl = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				kl = n.n(Sl);

			function wl() {
				return (wl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ml = e => {
				const t = ic.a;
				switch (e.kind) {
					case Pl.b.Error:
					case Pl.b.AuthError:
					case Pl.b.SuccessEndBroadcast:
						return t.warning;
					case Pl.b.SuccessCommunity:
						return t.op;
					case Pl.b.SuccessCommunityGreen:
					case Pl.b.SuccessMod:
					case Pl.b.SuccessUnlockComment:
						return t.approved;
					case Pl.b.SuccessLockComment:
						return t.reported;
					case Pl.b.EuCookiePolicy:
					case Pl.b.UappBanner:
					case Pl.b.Undo:
					default:
						return t.op
				}
			};
			class Nl extends m.a.Component {
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
			const Il = I.a.wrapped(Nl, "PlainBread", kl.a);
			var Tl = e => m.a.createElement(Il, wl({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Ml(e)
					}
				})),
				Al = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Rl = n.n(Al);
			const Ll = I.a.span("Text", Rl.a);
			var Dl = n("./src/reddit/components/Toaster/index.m.less"),
				Fl = n.n(Dl);
			const {
				fbt: Ul
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Bl = I.a.wrapped(yl.a, "AuthErrorToastIcon", Fl.a), Gl = I.a.wrapped(Ne.l, "AuthErrorToastPrimaryButton", Fl.a);
			class Hl extends m.a.Component {
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
					}, m.a.createElement(Tl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Bl, null), m.a.createElement(Ll, null, Ul._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Gl, {
						type: "submit"
					}, Ul._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var ql = Hl,
				Wl = n("./src/lib/cookieConsent/index.ts"),
				Vl = n("./src/reddit/controls/Link/index.tsx"),
				Ql = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Kl = n.n(Ql);
			const {
				fbt: zl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Jl = I.a.div("Icon", Kl.a), Zl = () => m.a.createElement(Jl, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Yl = I.a.wrapped(Ne.l, "PrimaryButton", Kl.a), Xl = I.a.wrapped(Tl, "Bread", Kl.a);
			class $l extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Wl.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Wl.b)({
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
					return m.a.createElement("section", null, m.a.createElement(Xl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(Zl, null), m.a.createElement("section", {
						className: Kl.a.EuCookiePolicyBody
					}, m.a.createElement(Ll, null, zl._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Vl.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, zl._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: Kl.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Yl, {
						type: "submit"
					}, zl._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Yl, {
						type: "submit"
					}, zl._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var eu, tu = $l;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(eu || (eu = {}));
			var nu = n("./src/reddit/controls/Typography/index.tsx"),
				su = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				ou = n.n(su);

			function ru() {
				return (ru = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const au = I.a.div("Container", ou.a),
				iu = I.a.img("SideImage", ou.a),
				cu = I.a.div("Main", ou.a),
				du = I.a.div("SubTitle", ou.a),
				lu = nu.a,
				uu = I.a.wrapped(Ne.m, "PrimaryLinkButton", ou.a),
				mu = I.a.wrapped(Ie.a, "CloseIcon", ou.a);
			class pu extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(vl(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(fl(this.props.name))
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
					return m.a.createElement(au, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(mu, {
						onClick: this.props.onClose
					}), m.a.createElement(iu, {
						srcSet: n
					}), m.a.createElement(cu, null, m.a.createElement(du, null, r), m.a.createElement(nu.b, null, a), m.a.createElement(lu, null, e), m.a.createElement(uu, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const bu = Object(p.b)(null, e => ({
					onSignup: () => e(Object(ea.j)())
				}))(Object(A.c)(pu)),
				hu = `${gu("subscribe-cap.png")} 1x,\n  ${gu("subscribe-cap@2x.png")} 2x,`;

			function gu(e) {
				return `${B.a.assetPath}/img/banner/${e}`
			}
			const fu = 3;
			var vu = n("./src/lib/permanentCookieOptions.ts");
			const Ou = e => `${e}:1527210000`;
			var xu = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Cu = n.n(xu);
			const {
				fbt: yu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Eu = I.a.div("Icon", Cu.a), ju = () => m.a.createElement(Eu, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Pu = I.a.wrapped(Ne.l, "PrimaryButton", Cu.a), _u = I.a.wrapped(Tl, "Bread", Cu.a);
			class Su extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), je.a.set(Ft.j, Ou(fu), Object(vu.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(_u, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(ju, null), m.a.createElement(Ll, null, yu._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [yu._param("=User Agreement", m.a.createElement(Vl.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, yu._("User Agreement", null, {
						hk: "XS57W"
					}))), yu._param("=Privacy Policy", m.a.createElement(Vl.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, yu._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Pu, {
						type: "submit"
					}, yu._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var ku = Su;

			function wu() {
				return (wu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Mu = [],
				Nu = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Iu = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Tu = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, Nu)
				},
				Au = I.a.wrapped(yl.a, "SnooFacepalm", Fl.a),
				Ru = I.a.wrapped(El.a, "SnooHappy", Fl.a),
				Lu = I.a.wrapped(fs.b, "SubredditIcon", Fl.a),
				Du = I.a.img("CustomIcon", Fl.a),
				Fu = I.a.div("Container", Fl.a),
				Uu = I.a.wrapped(Ie.a, "Close", Fl.a),
				Bu = I.a.wrapped(xl.a, "LockIcon", Fl.a),
				Gu = I.a.wrapped(jl.a, "UnlockIcon", Fl.a),
				Hu = I.a.wrapped(Cl.a, "RemoveIcon", Fl.a),
				qu = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Uu, wu({
					className: "CloseIcon"
				}, e))),
				Wu = I.a.wrapped(Tl, "Bread", Fl.a),
				Vu = Object(f.c)({
					subredditIcon: _l.b,
					toastSlices: e => e.toaster
				}),
				Qu = Object(p.b)(Vu, e => ({
					dismissToast: t => () => e(Object(gl.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(gl.g)(n))
					}
				}));
			class Ku extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => zu(e, this.props.toastSlices), this.getWillEnterStyles = () => Iu, this.getWillLeaveStyles = () => Tu
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(N.TransitionMotion, {
						defaultStyles: Mu,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Fu, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Pl.b.Custom && void 0 !== t.customToastType) {
							const s = Zu[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Pl.b.UappBanner) return m.a.createElement(ku, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Pl.b.EuCookiePolicy) return m.a.createElement(tu, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(fl("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(vl("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Ol("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Pl.b.AuthError) return m.a.createElement(ql, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Pl.b.Modal ? Ne.l : Ne.r,
							o = t.kind === Pl.b.Modal ? Ne.o : Ne.r;
						return m.a.createElement(Wu, {
							className: t.kind === Pl.b.Modal ? Fl.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(fl(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Fl.a.ContentWrapper
						}, Ju(t, this.props.subredditIcon), t.kind === Pl.b.SuccessLockComment && m.a.createElement(Bu, null), t.kind === Pl.b.SuccessUnlockComment && m.a.createElement(Gu, null), m.a.createElement(Ll, null, t.text)), m.a.createElement("div", {
							className: Fl.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(vl(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Ol(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(qu, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const zu = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(N.spring)(1),
						x: Object(N.spring)(1, Nu),
						y: Object(N.spring)(0, Nu)
					}
				})),
				Ju = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Du, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Pl.b.Error:
							return m.a.createElement(Au, null);
						case Pl.b.SuccessEndBroadcast:
							return m.a.createElement(Hu, null);
						case Pl.b.SuccessAward:
						case Pl.b.SuccessCommunity:
						case Pl.b.SuccessCommunityGreen:
							return m.a.createElement(Ru, null);
						case Pl.b.SuccessMod:
							return m.a.createElement(Lu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Zu = {
					[Pl.a.subscribeCap]: e => m.a.createElement(bu, ru({
						name: eu.LoggedOutMaxSubscriptions,
						sideImage: hu,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Yu = Qu(Object(A.c)(Ku)),
				Xu = n("./src/reddit/featureFlags/profileCollections.ts");
			const $u = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				em = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var tm = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				nm = n.n(tm);
			var sm = I.a.div("Wrapper", nm.a),
				om = n("./src/reddit/components/AlertBanner/index.m.less"),
				rm = n.n(om);
			const {
				fbt: am
			} = n("./node_modules/fbt/lib/FbtPublic.js"), im = () => m.a.createElement(sm, {
				className: Object(v.a)(rm.a.wrapper, rm.a.suspended)
			}, m.a.createElement("span", null, am._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: rm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, am._("Learn more", null, {
				hk: "1OTc8q"
			}))), cm = () => m.a.createElement(sm, {
				className: Object(v.a)(rm.a.wrapper, rm.a.fpr)
			}, m.a.createElement("span", null, am._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: rm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, am._("Learn more", null, {
				hk: "1OTc8q"
			}))), dm = ({
				updateLink: e,
				onClickOldReddit: t
			}) => m.a.createElement(sm, {
				className: Object(v.a)(rm.a.wrapper, rm.a.deprecated)
			}, m.a.createElement("span", null, am._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [am._param("update your browser", m.a.createElement(lm, {
				link: e
			}, am._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), m.a.createElement("span", null, am._("If you do not update your browser, we suggest you visit {old reddit} .", [am._param("old reddit", m.a.createElement("a", {
				className: rm.a.underlineLink,
				href: B.a.oldRedditUrl,
				onClick: t
			}, am._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), lm = ({
				children: e,
				link: t
			}) => null !== t ? m.a.createElement("a", {
				className: rm.a.underlineLink,
				href: t
			}, e) : m.a.createElement("span", null, e);
			class um extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(em())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent($u())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(dm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(cm, null) : n ? m.a.createElement(im, null) : null
				}
			}
			var mm = Object(A.c)(um),
				pm = n("./src/reddit/components/AlertBanner/heights.ts");
			var bm = n("./src/reddit/components/OfflineBanner/index.m.less"),
				hm = n.n(bm);
			const {
				fbt: gm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var fm = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, hm.a.banner, {
							[hm.a.online]: e.online,
							[hm.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: hm.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: hm.a.title
					}, e.online ? gm._("Found the internet!", null, {
						hk: "fMghd"
					}) : gm._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(ms.a, {
						className: hm.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				vm = n("./src/reddit/components/Upsell/async.ts"),
				Om = n("./src/reddit/constants/componentSizes.ts"),
				xm = n("./src/reddit/constants/elementIds.ts"),
				Cm = n("./src/reddit/constants/parameters.ts"),
				ym = n("./src/reddit/constants/posts.ts"),
				Em = n("./src/reddit/contexts/InsideOverlay.tsx"),
				jm = n("./src/reddit/constants/promo.ts"),
				Pm = n("./src/reddit/contexts/Promo/index.ts");

			function _m(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case jm.a.Completed:
						return s === jm.a.Shown ? new Map(e.set(n, jm.a.Completed)) : e;
					case jm.a.Dismissed:
						return s === jm.a.Shown ? new Map(e.set(n, jm.a.Dismissed)) : e;
					case jm.a.Shown:
						return s ? e : new Map(e.set(n, jm.a.Shown));
					default:
						throw new Error
				}
			}
			var Sm = function({
					children: e
				}) {
					const [t, n] = u.useReducer(_m, new Map), s = u.useCallback(e => n({
						type: jm.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => n({
						type: jm.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => n({
						type: jm.a.Shown,
						payload: {
							promoName: e
						}
					}), []), a = u.useMemo(() => ({
						completePromo: s,
						dismissPromo: o,
						promos: t,
						showPromo: r
					}), [s, o, t, r]);
					return u.createElement(Pm.a.Provider, {
						value: a
					}, e)
				},
				km = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				wm = n("./src/reddit/helpers/postCollection.ts"),
				Mm = n("./src/reddit/models/Theme/index.ts"),
				Nm = n("./src/reddit/selectors/experiments/econ/meta.ts");
			var Im = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Tm = n("./src/reddit/selectors/experiments/survey.ts"),
				Am = n("./src/reddit/selectors/notificationBanner.ts"),
				Rm = n("./src/reddit/selectors/onboarding.ts"),
				Lm = n("./src/reddit/selectors/posts.ts"),
				Dm = n("./src/reddit/components/AppRouter/index.m.less"),
				Fm = n.n(Dm);

			function Um() {
				return (Um = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Bm = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => m.a.createElement("div", Um({
					className: Object(v.a)(Fm.a.main, {
						[Fm.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				Gm = Object(x.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const o = Object(F.a)({
						theme: n,
						...s
					});
					return m.a.createElement("div", Um({
						className: Object(v.a)(Fm.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(Mm.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Gt.c)(t)}px`
						}
					}, s))
				}),
				Hm = ({
					className: e,
					divRef: t,
					...n
				}) => {
					const s = Object(u.useContext)(g.a);
					return m.a.createElement("div", Um({
						className: Object(v.a)(Fm.a.lightboxHeaderWrapper, e, {
							[Fm.a.lightboxHeaderWrapperExp]: s
						})
					}, n, {
						ref: t
					}))
				},
				qm = Object(Am.a)(al.a.EmailCollectionBannerId),
				Wm = Object(p.b)(() => Object(f.c)({
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
					hasInvalidSession: yt.u,
					isLoggedIn: yt.K,
					isNpsSurveyEnabled: Tm.d,
					isOnboardingQueryParamEnabled: Rm.b,
					isSubscriptionsPinned: bs.b,
					isSuccessfulSurveyEnabled: Tm.f,
					isSuspended: yt.R,
					isFPR: yt.I,
					posts: Lm.K,
					profileCollectionsEnabled: Xu.a,
					showEmailCollectionBanner: e => !Object(Kt.L)(e.platform.currentPage) && qm(e),
					isBlockingInterstitialEnabled: Im.b,
					signUpModalIsOpen: Object(Ia.c)(tt.a.REGISTER_MODAL_ID)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPostDismissTrigger: () => e(Object(S.i)()),
					onSuccessfulSignupTrigger: () => e(Object(S.f)()),
					onUnpinSubscriptions: () => e(Object(_.j)())
				})),
				Vm = (e, t) => !(!e.state || !e.state[hr.b.IsOverlay] || t === e);
			class Qm extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Om.l && this.props.onUnpinSubscriptions()
					}, O.K), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Kt.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${O.Ib.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === ym.a.PROFILE;
							return !(!r || !Object(wm.a)(r) || a && !n)
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
					} = this.props, o = n.state && n.state[hr.b.IsOverlay], r = Object(j.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(j.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === O.Mb.INDEX || t.name === O.Mb.SUBREDDIT && n.subredditName === Rs.b.Popular), o = Object(U.c)(this.props.frontpageSignupVariant), r = Object(U.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), this.props.isBlockingInterstitialEnabled && this.props.signUpModalIsOpen) return;
					const c = Vm(e.location, this.previousLocation);
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
						isFPR: r,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						isSuspended: d,
						location: l,
						onClickOutsideOverlay: p,
						routes: b,
						showEmailCollectionBanner: h
					} = this.props, {
						isSignupUpsellDisplayed: g,
						isSignupUpsellHidden: f
					} = this.state, v = this.context, x = Vm(l, this.previousLocation);
					l.state && l.state[hr.b.IsOverlay] && !x ? l.state[hr.b.IsOverlay] = !1 : l.state && (this.previousLocation === l || l.state[hr.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[hr.b.CloseLocation] && this.previousLocation.state[hr.b.CloseLocation] === l.state[hr.b.CloseLocation] ? l.state[hr.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, hr.b.CloseLocation)
					} : l.state[hr.b.CloseLocation] = this.previousLocation);
					const C = Object(j.a)(this.previousLocation, l),
						y = x || C ? this.previousLocation : l,
						E = x || C ? this.previousPage : t,
						P = !(!(E && E.meta && E.meta.name === O.Mb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[Cm.t]),
						_ = !(!E || !E.meta || E.meta.name !== O.Mb.MODERATION_PAGES),
						S = Object(Kt.x)(E),
						w = this.getIsPostCollection(),
						M = g && !f,
						N = e.showBanner;
					return s ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Kt.a.Provider, {
						value: E
					}, m.a.createElement(Qo.c, {
						isOverlayOpen: x
					}, m.a.createElement(hl.a, {
						forceRedditTheme: P
					}, g && m.a.createElement(ye, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Km, {
						browserInfo: v,
						connection: e,
						isFPR: r,
						isInline: M,
						isSuspended: d,
						showOffline: N
					})), m.a.createElement(Em.a.Provider, {
						value: !1
					}, m.a.createElement(hl.a, {
						forceRedditTheme: P || _,
						isCommentsPage: S
					}, m.a.createElement(Sm, null, m.a.createElement(zm, {
						browserInfo: v,
						frontpageSignupVariant: n,
						isCommentsPage: S,
						isInline: M,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						location: y,
						overlayIsOpen: x,
						page: E,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: N,
						showSuspended: d
					}), m.a.createElement(vm.b, null), m.a.createElement(vm.a, null)))))), m.a.createElement(Kt.a.Provider, {
						value: t
					}, x && m.a.createElement(Em.a.Provider, {
						value: !0
					}, m.a.createElement(hl.a, {
						isOverlay: !0
					}, m.a.createElement(Jm, {
						browserInfo: v,
						isPostCollection: w,
						location: l,
						onClickOutsideOverlay: p,
						page: t,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: N,
						showSuspended: d
					}))), m.a.createElement(hl.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Yu, null), m.a.createElement(bl.a, null), h && m.a.createElement(k.a, null), m.a.createElement(Wt, null), m.a.createElement(cs, null)))))
				}
			}
			Qm.contextType = C.a;
			const Km = Object(A.c)(e => {
					const t = Object(Kt.eb)(),
						n = Object(p.e)(e => ((e, {
							pageLayer: t
						}) => !!Object(Kt.ab)(t) || !Object(Nm.a)(e))(e, {
							pageLayer: t
						})),
						s = Object(u.useContext)(g.a),
						{
							browserInfo: o,
							connection: r,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: d
						} = e,
						l = {
							browserInfo: o,
							showFPR: a,
							showSuspended: d,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(mm, l), n && m.a.createElement(ol, {
						className: Object(v.a)(Fm.a.header, Object(pm.b)(Fm.a, l), {
							[Fm.a.inline]: i
						})
					}), m.a.createElement(fm, {
						className: Object(v.a)(Fm.a.offlineBanner, Object(pm.b)(Fm.a, l)),
						online: r.online,
						showBanner: r.showBanner
					}))
				}),
				zm = Object(A.c)(class extends m.a.Component {
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
							isInline: r,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!a && !s && o);
						return m.a.createElement(Bm, {
							"aria-hidden": s,
							className: Object(v.a)(Object(pm.b)(Fm.a, this.props), {
								[Fm.a.withUpsell]: !!e,
								[Fm.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(pl, {
							className: Object(v.a)(Fm.a.pinnedSubscriptions, Object(pm.b)(Fm.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), c && m.a.createElement("div", {
							className: Object(v.a)(Fm.a.bottomSpacer, Object(pm.a)(Fm.a, this.props))
						}))
					}
				});
			class Jm extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(P.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[hr.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = km.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && km.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === O.Mb.SUBREDDIT_CREATION || t.meta.name === O.Mb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(Gm, {
						className: Object(v.a)(Object(pm.b)(Fm.a, this.props), {
							[Fm.a.mIsCommentsLightbox]: o,
							[Fm.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Fm.a.overlayWrapper, Object(pm.b)(Fm.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Fm.a.overlayScrollContainer, {
							[Fm.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: xm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(Hm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(pm.b)(Fm.a, this.props), {
							[Fm.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(rl.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Fm.a.bottomSpacer, Object(pm.a)(Fm.a, this.props))
					}))))
				}
			}
			t.b = Wm(Object(A.c)(Qm))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: s
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || s < 1
				})
			}, n || s < 1 ? "" : Object(a.b)(s)) : null
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
			class d extends o.a.Component {
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
			}))(Object(a.i)(d))
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
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Object(a.a)(() => Promise.all([n.e("CoinPurchaseModal").then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CommonTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CommonTooltip/index.m.less"),
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
			t.a = o.a.memo((function({
				visible: e,
				tooltipId: t,
				className: n,
				arrowClassName: a,
				...d
			}) {
				const [l, u] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, u(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), u(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					id: t,
					className: Object(r.a)(i.a.tooltip, n, {
						[i.a.visible]: l
					})
				}, d.popperProps), l && o.a.createElement(o.a.Fragment, null, d.arrowProps && o.a.createElement("div", c({
					className: Object(r.a)(i.a.arrow, a)
				}, d.arrowProps)), d.children)) : null
			}))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.a)(({
				className: e,
				...t
			}) => o.a.createElement(i.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "O258FYaW9n8M2K5BGX4v_",
				wrapper: "O258FYaW9n8M2K5BGX4v_",
				backgroundAnimation: "_3wgpIyg-y7kAJzTXM19iIz",
				Container: "WWLVFaNE0_QzzlHV-5_2A",
				container: "WWLVFaNE0_QzzlHV-5_2A",
				Heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				Description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				SnooImage: "_1cU9WVsnegf986qVbdoocd",
				snooImage: "_1cU9WVsnegf986qVbdoocd",
				Footer: "_31ILosdTcnxgP48mu3YbxG",
				footer: "_31ILosdTcnxgP48mu3YbxG"
			}
		},
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
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				d = n.n(c);
			const l = Object(s.a)({
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
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modalBody
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
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				l = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				d = n.n(c);
			const l = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(l);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modal
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
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e[0].default)
				});
			Object(c.b)(d.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
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
				d = n.n(c);
			const l = Object(s.a)({
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
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(l, {
				withOverlay: !0,
				className: d.a.modalBody,
				overlayClassName: d.a.modalOverlay
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
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
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
			var d = c
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
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
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
				x = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(x(e => {
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
					className: Object(l.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: r,
					className: Object(l.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.sparkle),
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
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
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
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
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
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				j = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				P = n.n(j);
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
				k = Object(d.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(S)(e),
					isFreeAwardEventEnabled: e => Object(C.a)(e) && Object(y.g)(e)
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
					} = this.props, r = this.getButtonText(), a = !!e || o, c = Object(l.a)(P.a.icon, {
						[P.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, P.a.ctaContainer, {
							[P.a.special]: a
						}),
						id: S,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(P.a.ctaContent, {
							[P.a.special]: a
						})
					}, i.a.createElement(x.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: P.a.text
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
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm"
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
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				g = m.a.div("SparseContainerExp", u.a),
				f = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? g : h;
				return o.a.createElement(t, {
					id: r.c
				}, o.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(d.a, null, o.a.createElement(p, null), o.a.createElement(b, null))))
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
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
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
				text: "_1nBP1OfpQDgTmzRFqaVult"
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
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				Tooltip: "_3Sym-M5cqi1lDyLwRbM2As",
				tooltip: "_3Sym-M5cqi1lDyLwRbM2As"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj"
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
				entrypointLink: "pszNQQxC761u1dbJ3aR-C",
				wrappedRedditLink: "_1f-M1-Wco_JkruNM-gbitJ",
				title: "_3FG3m0EPMiB-kuAPH9Nkv",
				new: "_1dN5eIVV_0z41cZZwxMAGV"
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
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
				d = e => e && e.toLowerCase() === a.b.All,
				l = e => e && e === i.c,
				u = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				m = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let r, i, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let f, v;
					return l(e) ? (r = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, m = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = a.c[a.b.Home], i = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (r = `${o.a.assetPath}/img/id-cards/banner@2x.png`, i = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = a.c[a.b.All]) : c(e) ? (r = `${o.a.assetPath}/img/id-cards/banner@2x.png`, i = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = a.c[a.b.Popular]) : e && (i = n && n.description, m = u(""), p = t.displayText, b = t.url, v = n && n.subscribersCount, f = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: i,
						titleText: p,
						url: b,
						subscribersCount: v,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: f,
						...r ? {
							bannerBackgroundImage: r
						} : {}
					}
				},
				p = new r.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(c);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: o,
				primaryButtonText: c,
				titleText: l,
				onClose: u,
				onClick: m
			}) => r.a.createElement("div", {
				className: Object(s.a)(d.a.banner, e)
			}, r.a.createElement("div", {
				className: d.a.bannerTitleContainer
			}, l && r.a.createElement("h4", {
				className: d.a.bannerTitle
			}, l), n && r.a.createElement(a.t, {
				onClick: u,
				Icon: Object(i.b)("close_fill"),
				className: Object(s.a)(d.a.closeIcon, d.a.closeButton),
				size: a.d.XXS,
				priority: a.c.Plain
			})), o && r.a.createElement("p", {
				className: d.a.bannerDescription
			}, o), r.a.createElement("div", {
				className: d.a.bannerButtonsContainer
			}, c && r.a.createElement(a.t, {
				text: c,
				priority: a.c.Tertiary,
				className: Object(s.a)(d.a.button, d.a.primaryButton),
				size: a.d.XS,
				onClick: m
			}), t && r.a.createElement(a.t, {
				text: t,
				onClick: u,
				priority: a.c.Plain,
				size: a.d.XS,
				className: Object(s.a)(d.a.button, d.a.closeButton)
			})))
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				i = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(d);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					o = s.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [s.fbt._param("userAgreement", r.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), s.fbt._param("privacyPolicy", r.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return r.a.createElement(a.a, {
					className: l.a.policyBanner,
					titleText: s.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: o,
					primaryButtonText: s.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: s => {
						s.stopPropagation(), e(), n(Object(i.f)(t, i.a.Confirm))
					}
				})
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs",
				wrappedRedditBanner: "_3lPlfNiwLG6b9WE7zxkkU5",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerLogo: "_3vKs7F-vWpFg20NtGjjN62"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return ne
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				h = n("./src/reddit/components/InboxBanner/index.m.less"),
				g = n.n(h);
			const f = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return r.a.createElement(b.a, {
					className: g.a.dnPromptBanner,
					titleText: s.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: t => {
						t.stopPropagation(), e()
					},
					closeIcon: !0,
					primaryButtonText: s.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: s.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: n => {
						t(), e()
					}
				})
			};
			var v = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				O = n("./src/config.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				j = n("./src/reddit/routes/wrappedreddit/index.ts");
			const P = {
					background: `url(${O.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				_ = ({
					onClose: e
				}) => r.a.createElement("div", {
					className: Object(c.a)(g.a.banner, g.a.wrappedRedditBanner),
					style: P
				}, r.a.createElement(C.a, {
					to: j.b,
					className: g.a.bannerContainer,
					onClick: e
				}, r.a.createElement("div", {
					className: g.a.bannerDataContainer
				}, r.a.createElement("div", {
					className: g.a.bannerTitleContainer
				}, r.a.createElement(E.a, {
					className: g.a.bannerLogo
				}), r.a.createElement("h4", {
					className: g.a.bannerTitle
				}, s.fbt._("Reddit Recap", null, {
					hk: "tRxDK"
				}))), r.a.createElement("p", {
					className: g.a.bannerDescription
				}, s.fbt._("It’s that time of the year. Come check out your 2021 highlights on Reddit.", null, {
					hk: "eufBA"
				}))), r.a.createElement("img", {
					alt: s.fbt._("Image Banner for Reddit Recap", null, {
						hk: "1K2v1e"
					}),
					className: g.a.bannerImage,
					src: `${O.a.assetPath}/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png`
				})), r.a.createElement(x.t, {
					onClick: e,
					Icon: Object(y.b)("close_fill"),
					className: Object(c.a)(g.a.closeIcon, g.a.closeButton),
					size: x.d.XXS,
					priority: x.c.Plain
				}));
			var S = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				k = n("./src/reddit/components/ResizeSensor/index.tsx"),
				w = n("./src/reddit/components/InboxTooltip/index.m.less"),
				M = n.n(w);
			const N = 3;
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = r.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= N) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: o,
						blockAwarder: a,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= N;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.ref,
						className: M.a.notificationResizeWrapper
					}, r.a.createElement(S.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: o,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: a
					}), !!p && r.a.createElement(k.a, {
						onResize: this.handleResize
					})))
				}
			}
			var T = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				A = n("./src/reddit/helpers/trackers/inbox.ts"),
				R = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const D = {},
				F = "",
				U = 0,
				B = "200px",
				G = "250px",
				H = "270px",
				q = 100,
				W = .5,
				V = 5;
			class Q extends r.a.Component {
				constructor() {
					super(...arguments), this.container = r.a.createRef(), this.state = {
						notificationHeights: D,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > U && this.props.setActiveOverflowMenuId(F)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: s
						} = this.props, o = t || n;
						let r = 0;
						for (const a in e) r += e[a];
						return 0 === r ? o ? G : s ? B : H : (o && (r += q), r)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + V, s = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: s
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: s,
								notifications: o
							} = this.props,
							a = o.length > n + V;
						return (s && o.length > 0 && a ? o.slice(0, n + 1) : o).map((n, s) => r.a.createElement(I, L({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: s,
							notifications: o
						} = this.props;
						if (e.isIntersecting) {
							const e = o.length > this.state.currentNotificationCursorIndex + V;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: V
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxPrivacyPolicyBannerEnabled: n,
						isInboxInfiniteScrollEnabled: s,
						isLoggedIn: o,
						isPending: a,
						notifications: i,
						setDesktopNotificationsPromptSeen: c,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: l,
						isWrappedRedditBannerEnabled: m,
						setDesktopNotificationWrappedRedditBannerSeen: p
					} = this.props, b = !(!i || !i.length), h = this.getContainerHeight(), g = i.length > this.state.currentNotificationCursorIndex + V, O = n || t || m;
					return r.a.createElement("div", {
						className: M.a.notificationList,
						ref: this.container,
						style: {
							height: h,
							maxHeight: h
						}
					}, O && r.a.createElement("div", {
						className: M.a.notificationBannerContainer
					}, n && r.a.createElement(v.a, {
						onClose: d,
						pageType: A.b.MiniInbox
					}), t && r.a.createElement(f, {
						onTurnOnBrowserNotifications: l,
						onClose: c
					}), m && r.a.createElement(_, {
						onClose: p
					})), !b && a && r.a.createElement(T.a, null), !b && !a && r.a.createElement(R.a, {
						isBannerEnabled: O,
						isLoggedIn: o
					}), b && this.renderNotifications(), s && b && !a && (e || g) && r.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: W
					}, r.a.createElement("div", null)))
				}
			}
			var K = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts");
			var J = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				Z = n("./src/reddit/hooks/useTracking.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [],
				$ = d.a.div("StyledDropdown", M.a),
				ee = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: a,
					messagesBadgeCount: i,
					sendInboxClickSettings: d
				}) => {
					const u = !!i,
						m = Object(o.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(o.useCallback)(() => {
							d(), n()
						}, [d, n]);
					return r.a.createElement("nav", {
						className: M.a.topNav
					}, r.a.createElement("span", {
						className: M.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && r.a.createElement("span", {
						className: M.a.topNavLinks
					}, r.a.createElement("span", {
						className: M.a.messagesLinkContainer
					}, r.a.createElement(C.a, {
						className: Object(c.a)(M.a.messagesLink, {
							[M.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), r.a.createElement(l.a, {
						className: M.a.badgeCount,
						isActive: u,
						unreadCount: i
					}))), r.a.createElement("button", {
						className: M.a.navLink,
						onClick: a
					}, r.a.createElement(y.a, {
						name: "mark_read",
						className: M.a.icon
					})), r.a.createElement(C.a, {
						className: M.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, r.a.createElement(y.a, {
						name: "settings",
						className: M.a.icon
					}))))
				},
				te = e => r.a.createElement("div", {
					className: M.a.bottomBar
				}, r.a.createElement(C.a, {
					className: M.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ne = e => {
					const t = Object(Z.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l,
							hideTooltip: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: p,
							isPushNotificationsSupported: b,
							isWrappedRedditBannerEnabled: h,
							userId: g
						} = e,
						[f, v] = function(e) {
							const [t, n] = Object(o.useState)(Object(z.t)(e));
							return [t, Object(o.useCallback)(() => {
								n(!0), Object(z.yb)(e)
							}, [])]
						}(g),
						[O, x] = Object(K.a)(g),
						[C, y] = Object(J.a)(g),
						E = !(!l || !l.length),
						j = Object(a.a)(),
						P = j === i.a.Closed || j === i.a.Default || j === i.a.Denied,
						_ = b && P && !O;
					return r.a.createElement($, null, r.a.createElement("div", {
						className: M.a.tooltipContainer
					}, r.a.createElement(ee, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(A.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(A.p)({
								badgeCount: s,
								tab: A.e.Messages
							})), t(Object(A.h)()), n()
						},
						sendInboxClickSettings: () => t(Object(A.m)(A.b.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), r.a.createElement(Q, Y({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: x,
						isDNInboxPromptBannerEnabled: _,
						isInboxPrivacyPolicyBannerEnabled: m && !C,
						setInboxPrivacyPolicyBannerSeen: y,
						isWrappedRedditBannerEnabled: h && !f,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							v(), t(Object(A.o)())
						}
					})), (E || c) && r.a.createElement(te, {
						sendInboxClickSeeAll: () => t(Object(A.l)()),
						onBarClick: u
					})))
				}
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
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
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
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
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
					}, r.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
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
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				P = n("./src/reddit/models/Media/index.ts"),
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
					subreddit: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return null;
						const s = n || Object(w.n)(e, {
							page: t
						});
						return (null == s ? void 0 : s.belongsTo) ? Object(M.J)(e, {
							identifier: s.belongsTo
						}) : null
					},
					post: w.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(S.a)(e) || Object(S.d)(e) || Object(S.c)(e),
					isVoteCountAnimation: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return !1;
						const s = t && Object(w.n)(e, {
							page: t
						}) || n;
						return !!s && Object(k.g)(e, {
							post: s
						})
					}
				}),
				L = Object(a.b)(R, (e, {
					sendEvent: t
				}) => ({
					close: () => {
						e(Object(m.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === _.a.upvoted ? Object(u.jb)(t) : Object(u.w)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				}));
			class D extends r.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(M.db)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? N.I(e, n.id) : void 0,
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
						post: l,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = U[l && l.media ? l.media.type : P.o.EMBED], O = !l && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === d.Mb.META_MEMBERSHIP_PAYWALL_PAGE, C = l ? I.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return r.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: l && Object(y.a)(l),
							[A.a.adaptive]: u
						})
					}, r.a.createElement(C, {
						postId: null == l ? void 0 : l.id
					}, r.a.createElement("div", {
						className: A.a.postDetails
					}, l && r.a.createElement(o.Fragment, null, m && !u ? void 0 : r.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: l,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(E.a, {
						name: h,
						className: A.a.mediaIcon
					}), r.a.createElement(g.c, {
						className: A.a.postTitle,
						post: l,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : x.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), r.a.createElement(b.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
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
					}), !this.props.hideCloseButton && r.a.createElement(F, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const F = r.a.memo(e => r.a.createElement(C.t, {
					className: A.a.CloseButton,
					size: C.d.XS,
					onClick: e.onClick,
					priority: C.c.Plain,
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
				})),
				U = {
					[P.o.GIFVIDEO]: l.a.gif_post,
					[P.o.IMAGE]: l.a.image_post,
					[P.o.TEXT]: l.a.text_post,
					[P.o.RTJSON]: l.a.text_post,
					[P.o.VIDEO]: l.a.video_post,
					[P.o.EMBED]: l.a.embed,
					[P.o.LIVEVIDEO]: l.a.video_live,
					[P.o.GALLERY]: l.a.media_gallery,
					[P.o.LIVEAUDIO]: l.a.audio
				};
			t.a = Object(O.c)(L(D))
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
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(r);
			const i = () => o.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, o.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), o.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => o.a.createElement("ol", null, o.a.createElement(i, null), o.a.createElement(i, null), o.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				title: "_180jOSBDwwE60X5UR8zt3-",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
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
				return d
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
			const d = ({
				children: e,
				className: t,
				...n
			}) => o.a.createElement("div", c({
				className: Object(r.a)(i.a.pillContainer, t)
			}, n), e)
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
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
			var d = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				d = n.n(c);
			const l = Object(s.a)({
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
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modalBody
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
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const l = () => Object(a.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(d.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					getComponent: l,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(u, null))
		},
		"./src/reddit/components/PromptTooltip/TooltipHooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_2ukk2zBUtkijjIv8uGpGK",
				tooltip: "_21mjMOHMLOJXm_uLG6jmFe",
				visible: "bxlw8_5wUYitxHKlcuDhP"
			}
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
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = n("./src/reddit/selectors/user.ts");
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

			function l() {
				return Object(a.e)(e => Object(i.b)(e) || Object(c.H)(e)) ? r.a.createElement(d, null) : null
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
			var d = c
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...s
				}) => r.a.createElement(a.t, u({}, s, {
					priority: m(a.c.Primary, e, t),
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? a.d.S : a.d.M
				})),
				b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					priority: n,
					small: s,
					...o
				}) => r.a.createElement(a.t, u({}, o, {
					priority: m(a.c.Secondary, t, n),
					className: Object(l.a)(o.className, d.a.BaseButton),
					size: s ? a.d.S : a.d.M,
					text: b(e)
				}));
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: o = !1,
						isFullWidth: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: o,
						isFullWidth: a
					};
					return this.props.userIsSubscriber ? r.a.createElement(h, u({}, c, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(s.c)(r.a))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return P
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "c", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/helpers/survey/index.ts"),
				p = n("./src/reddit/selectors/survey.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => {
					const n = Object(p.c)(e),
						s = Object(p.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = b.q(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
					} : {}
				},
				g = e => {
					switch (e) {
						case m.a.CES:
							return "ces";
						case m.a.CSAT:
							return "csat";
						case m.a.NPS:
							return "nps";
						case m.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				f = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...b.o(n),
					survey: h(n, e)
				}),
				v = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					questionId: o,
					questionParentId: r,
					type: a
				}) => i => ({
					source: "survey",
					action: e,
					noun: "rating",
					...b.o(i),
					survey: {
						type: g(a),
						min: a === m.a.NPS ? 0 : 1,
						max: a === m.a.NPS ? 10 : 7,
						question: n,
						question_id: o,
						parent_question_id: r,
						score: s,
						...h(i, t)
					}
				}),
				O = ({
					action: e,
					experimentName: t,
					question: n,
					text: s,
					type: o,
					questionId: r,
					questionParentId: a
				}) => i => ({
					source: "survey",
					action: e,
					noun: "freeform_text",
					...b.o(i),
					survey: {
						question: n,
						type: g(o),
						text: s,
						question_id: r,
						parent_question_id: a,
						...h(i, t)
					}
				}),
				x = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					type: o,
					questionId: r,
					questionParentId: a,
					max: i,
					text: c
				}) => d => ({
					source: "survey",
					action: e,
					noun: "multi_choice",
					...b.o(d),
					survey: {
						type: g(o),
						min: 0,
						max: i,
						text: c,
						question: n,
						score: s,
						question_id: r,
						parent_question_id: a,
						...h(d, t)
					}
				});
			var C = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/experiments/index.ts"),
				j = n("./src/reddit/selectors/user.ts");
			const P = () => {
					const e = Object(d.d)(),
						[t, n] = Object(c.useState)(null),
						s = Object(C.a)(),
						o = Object(d.e)(j.i),
						a = Object(d.e)(j.sb),
						i = Object(d.e)(E.a, r.a),
						u = Object(d.e)(p.c),
						b = Object(d.e)(p.a),
						h = Object(d.e)(p.b),
						g = Object(d.e)(p.d),
						v = Object(c.useMemo)(() => {
							const e = Object(m.g)(),
								t = {};
							for (const n of e) t[n] = i[n];
							return t
						}, [i]),
						O = Object(c.useCallback)(e => {
							const s = Object(m.f)({
								triggerName: e,
								surveyExperimentVariants: v,
								samplingId: o || a,
								isDemoEnabled: u,
								activeDemoTrigger: b,
								demoTriggerThreshold: h,
								isSampleFactorEnabled: g
							});
							if (u) return void(s && n(s));
							if (!s || s === t) return;
							const r = v[s.experiment_name];
							(null == r ? void 0 : r.variant) && s.variants[r.variant] && setTimeout(() => n(s), 500)
						}, [t, v, o, a, g, u, b, h]);
					return Object(c.useEffect)(() => {
						const e = Object(m.d)(),
							t = e.subscribe(O);
						return () => e.unsubscribe(t)
					}, [O]), Object(c.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(m.i)(t, n), e(Object(l.H)({
							surveyLastSeenTime: n
						}, !1)), s(f(t.experiment_name, "display"))
					}, [t, e, s]), {
						activeSurvey: t,
						setActiveSurvey: n
					}
				},
				_ = ({
					activeStepNum: e,
					activeSurvey: t,
					isFollowUp: n,
					textResponse: s,
					setTextResponse: o,
					setIsSurveyDismissed: r,
					uiStep: a
				}) => {
					(({
						isFollowUp: e,
						textResponse: t
					}) => {
						const n = Object(c.useCallback)(n => {
							if (e && t.length) return n.preventDefault(), n.returnValue = "sure?", "sure?"
						}, [e, t]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: s
					});
					const [i, d] = Object(c.useState)(!1), l = Object(C.a)(), u = t.experiment_name, p = t.steps[e], b = null == p ? void 0 : p.type, h = null == p ? void 0 : p.question, g = Object(c.useCallback)(() => {
						e >= 0 ? d(!0) : (r(!0), l(f(t.experiment_name, "dismiss")))
					}, [e, t, l, r]), y = Object(c.useCallback)(() => {
						o(""), r(!0);
						const e = {
							question: h,
							experimentName: u,
							type: b,
							action: "dismiss",
							questionId: a.toString(),
							questionParentId: p.type === m.a.MULTI_CHOICE && n ? `${a-1}` : null
						};
						l(n ? O(e) : p.type === m.a.MULTI_CHOICE ? x(e) : v(e))
					}, [u, n, h, p, l, r, o, b, a]);
					return {
						isLeavingModalShowing: i,
						onClose: g,
						onLeaveCancel: Object(c.useCallback)(() => d(!1), []),
						onLeaveConfirm: y
					}
				},
				S = ({
					activeSurvey: e,
					selectedNumber: t,
					setIsSurveyDismissed: n,
					setSelectedNumber: s,
					setTextResponse: o,
					textResponse: r
				}) => {
					const [a, d] = Object(c.useState)(-1), [l, u] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(C.a)(), [g, y] = Object(c.useState)(""), [E, j] = Object(c.useState)([]), P = Object(c.useCallback)(() => {
						var c, C;
						const E = e.experiment_name,
							P = e.steps[a],
							_ = null == P ? void 0 : P.type,
							S = null == P ? void 0 : P.question,
							k = null == P ? void 0 : P.follow_up_question,
							w = e.steps[a + 1],
							M = null == w ? void 0 : w.type,
							N = null == w ? void 0 : w.question;
						if (u(l + 1), w && w.question_options && j(i()(w.question_options)), -1 === a) {
							h(f(E, "agree")), d(0);
							const e = {
								question: N,
								type: M,
								action: "display",
								experimentName: E,
								questionId: `${l+1}`.toString(),
								questionParentId: null
							};
							return void h(M === m.a.MULTI_CHOICE ? x({
								text: g,
								...e
							}) : v(e))
						}
						const I = {
							experimentName: E,
							type: _,
							action: "submit",
							questionId: l.toString(),
							questionParentId: P.type === m.a.MULTI_CHOICE && p ? `${l-1}` : null
						};
						if (h(p ? O({
								text: r,
								question: k,
								...I
							}) : _ === m.a.MULTI_CHOICE ? x({
								question: S,
								max: null === (c = P.question_options) || void 0 === c ? void 0 : c.length,
								score: null === (C = P.question_options) || void 0 === C ? void 0 : C.findIndex(e => e === g),
								text: g,
								...I
							}) : v({
								question: S,
								score: t && t + (_ === m.a.NPS ? 0 : 1),
								...I
							})), s(void 0), o(""), y(""), p || !k)
							if (b(!1), a + 1 >= e.steps.length) n(!0);
							else {
								d(a + 1);
								const e = {
									experimentName: E,
									action: "display",
									type: M,
									question: N,
									questionId: (l + 1).toString()
								};
								h(M === m.a.MULTI_CHOICE ? x({
									text: g,
									...e
								}) : v(e))
							}
						else b(!0), h(O({
							experimentName: E,
							action: "display",
							type: _,
							question: k,
							questionId: `${l+1}`,
							questionParentId: l.toString()
						}))
					}, [g, y, a, e, p, r, t, h, n, s, o, l]);
					return {
						questionOptions: E,
						selectedOption: g,
						setSelectedOption: y,
						activeStepNum: a,
						isFollowUp: p,
						onStepComplete: P,
						uiStep: l,
						setActiveStepNum: d,
						setUIStep: u,
						setIsFollowUp: b
					}
				},
				k = ({
					isSurveyDismissed: e,
					setIsSurveyDismissed: t,
					setActiveStepNum: n,
					setActiveSurvey: o,
					setUIStep: r,
					setIsFollowUp: a,
					shouldMount: i,
					uiStep: l
				}) => {
					const m = Object(d.d)();
					Object(c.useEffect)(() => {
						e && !i && setTimeout(() => {
							n(-1), r(0), a(!1), o(null), l > 1 && m(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: y.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [m, e, i, l, t, n, o, r, a])
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
				return C
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.p)(e, t);
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
			const x = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.kb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.C)(e, n);
				if (!s) return;
				if (Object(h.jb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.t)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.ub)(e).nightmode
			}, (e, t) => {
				const n = Object(h.ub)(e);
				if (Object(h.K)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.w)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const o = Object(l.e)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, d, l, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
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
			t.b = x;
			const C = Object(d.u)()(x)
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
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
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
					currentUser: d.k,
					isNightMode: d.X,
					isPresenceUserPrefEnabled: d.P,
					shouldHideNSFW: d.C
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.default, {
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
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === d.a.downvoted,
				b = i(p, ({
					interactive: e
				}) => !1 !== e, m);
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
				x = ({
					voteState: e
				}) => e === d.a.upvoted,
				C = i(x, ({
					interactive: e
				}) => !1 !== e, O);
			var y = e => o.a.createElement(g.a, {
					className: C(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				P = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
					[S.a.dark]: Object(j.b)(Object(E.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				M = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(P.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return o.a.createElement("button", k({}, l, {
						className: Object(r.a)(S.a.customDownvote, w(e), {
							[S.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(P.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return o.a.createElement("button", k({}, l, {
						className: Object(r.a)(S.a.customUpvote, w(e), {
							[S.a.voted]: e.voteState === d.a.upvoted
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
			const d = Object(o.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
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
				return d
			})), n.d(t, "h", (function() {
				return l
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
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "p", (function() {
				return P
			}));
			const s = 284,
				o = 450,
				r = 800,
				a = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				g = 40,
				f = 270,
				v = 106,
				O = 5,
				x = 16,
				C = 1250,
				y = 82,
				E = 48,
				j = 36,
				P = 40
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
					}
				},
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => o.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => o.a.createElement(e, r({
					apiContext: n,
					gqlContext: s
				}, t)));
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
				return d
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
			class d extends o.a.Component {
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
				d = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: d.a.checkbox
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
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/customMiddleware/recentSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/chat/customMiddleware/noop.ts"),
				o = n("./src/lib/cache/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(o.c)(r.r.RECENT_SUBREDDITS, "recent_subreddits"),
				d = () => Object(a.a)() && Object(o.b)(c) || [];
			t.a = e => "undefined" == typeof window ? s.a : e => t => {
				const n = e(t);
				switch (t.type) {
					case i.e: {
						const e = d() || [],
							{
								id: n
							} = t.payload || {};
						if (n) {
							const s = e.findIndex(e => e.id === n); - 1 !== s && e.splice(s, 1), e.unshift(t.payload), e.splice(i.c), Object(o.d)(c, e, r.pb)
						}
						break
					}
				}
				return n
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				c = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/endpoints/gold/purchase.ts");
			const m = e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				}),
				p = e => e.map(m),
				b = e => e.map(e => {
					return {
						...m(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				h = e => e.map(e => ({
					defaultSignupBonusCoins: e.default_signup_bonus_coins,
					bonusPct: e.bonus_pct,
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				g = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				f = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: n
				}) => {
					const r = "/api/v2/gold/purchase_package_details",
						i = n && "undefined" != typeof window ? `${window.location.origin}${r}` : `${e.apiUrl}${r}`,
						c = Object(l.a)(i);
					return Object(o.a)(Object(a.a)(e, [d.a]), {
						method: s.jb.GET,
						endpoint: c,
						data: {
							correlation_id: t
						}
					}).then(u.c).then(v)
				};

			function v(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: s,
					premium_packages: o
				} = e.body, r = {
					activeSaleConfig: g(t),
					coinPackages: p(n),
					dealCoinPackages: b(s),
					premiumPackages: h(o)
				};
				return {
					...e,
					body: r
				}
			}
			const O = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const r = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					i = Object(l.a)(r);
				return Object(o.a)(Object(a.a)(e, [d.a]), {
					method: s.jb.GET,
					endpoint: i,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(x)
			};

			function x(e) {
				if (!e.ok) return e;
				const t = e.body,
					n = {
						coinPackages: p([t])
					};
				return {
					...e,
					body: n
				}
			}
			const C = e => Object(r.a)(e, {
					...c
				}),
				y = e => Object(r.a)(e, {
					...i,
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
				return x
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(l.a)()
				},
				p = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: r,
					pennies: i,
					rememberCard: l,
					token: u,
					savedCardId: p
				}) => {
					const b = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: r,
							pennies: i,
							remember_card: l,
							card_id: p,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(d.a)(h);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: g,
						data: b
					}).then(m)
				}, b = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: r,
					isOldReddit: i,
					offerContext: l,
					pennies: u,
					rememberCard: p,
					thingId: b,
					token: h,
					savedCardId: g
				}) => {
					const {
						gildType: f,
						isAnonymous: v,
						message: O
					} = r, x = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: l,
						pennies: u,
						thing_id: b,
						gild_type: f,
						message: O ? O.trim() : "",
						is_anonymous: v,
						remember_card: p,
						card_id: g,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, y = i ? C : Object(d.a)(C);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: y,
						data: x
					}).then(m)
				}, h = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: r,
					pennies: i,
					rememberCard: l,
					thingId: u,
					token: p,
					savedCardId: b
				}) => {
					const {
						gildType: h,
						isAnonymous: g,
						message: f
					} = n, v = {
						token: p ? p.id : void 0,
						thing_id: u,
						award_id: h,
						message: f ? f.trim() : "",
						is_anonymous: g,
						pennies: i,
						remember_card: l,
						card_id: b,
						correlation_id: t
					}, O = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, x = r ? O : Object(d.a)(O);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: x,
						data: v
					}).then(m)
				}, g = async ({
					context: e,
					correlationId: t,
					pennies: n,
					token: r
				}) => {
					const i = {
							token: r.id,
							pennies: n,
							correlation_id: t
						},
						l = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(d.a)(l);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: u,
						data: i
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
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, x = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				r = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const a = (e, t) => Object(s.a)(e, {
					...o,
					variables: t
				}),
				i = (e, t) => Object(s.a)(e, {
					...r,
					variables: {
						input: {
							preferences: [t]
						}
					}
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
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.jb.POST,
					data: d
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
				d = n("./src/reddit/selectors/user.ts");

			function l(e) {
				return Object(i.Q)(e, {}) === r.g.Large && !Object(d.J)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: o.bd
				})
			}

			function m(e) {
				switch (e) {
					case o.cd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.cd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, d, l, u;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (r = s.a.SubredditBlockedForLegalReason) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d
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
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = i.a.button("button", d.a),
				u = e => t => o.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: l
					} = s,
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: d.a.body
					}), l && o.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, m(e.isLit))
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
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.o)(e);
					return {
						actionInfo: Object(r.d)(e),
						post: t && Object(r.I)(e, t) || null,
						profile: Object(r.R)(e),
						screen: Object(r.ab)(e),
						subreddit: Object(r.ib)(e)
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
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = "comment_composer",
				u = e => {
					const t = Object(i.o)(e);
					return {
						source: l,
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.ab)(e),
						subreddit: Object(c.ib)(e),
						post: t ? Object(c.I)(e, t) : null,
						profile: Object(c.R)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				m = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: l
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...u(e),
						comment: o ? Object(c.j)(e, o) : null,
						listing: Object(c.z)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: l(e)
					})
				}, p = (e, t, n, s) => {
					const o = u(e);
					return Object(d.a)({
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
				}, b = e => Object(d.a)({
					noun: "cancel",
					...u(e)
				}), h = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...u(e)
					})
				}, g = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.ab)(t),
					subreddit: Object(c.ib)(t),
					post: Object(c.I)(t, e)
				}), f = e => Object(d.a)({
					noun: "edit",
					...u(e)
				}), v = e => Object(d.a)({
					noun: "save_edit",
					...u(e)
				}), O = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
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
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.o)(t),
					customFeed: Object(s.n)(t, e),
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
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
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
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = (e, t = {}) => ({
					...Object(o.g)(e, t),
					correlationId: Object(s.e)(s.a.GoldPayment, !1),
					profile: r.R(e),
					subreddit: r.ib(e)
				}),
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				d = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				l = () => e => ({
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
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "o", (function() {
				return S
			}));
			var s, o, r, a, i, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(r || (r = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...l.o(o),
					action: d.c.VIEW,
					noun: "inbox_notification",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => {
					Object(u.a)({
						...l.o(r),
						action: "receive",
						noun: "inbox_notification",
						source: a.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o,
					position: r
				}) => i => ({
					...l.o(i),
					action: d.c.CLICK,
					noun: "inbox_notification",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: o
					},
					actionInfo: {
						position: r
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...l.o(n),
					action: d.c.VIEW,
					noun: "inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				g = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...l.o(t),
					action: d.c.VIEW,
					noun: "mini_inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				f = ({
					badgeCount: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: a.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => ({
					...l.o(r),
					action: d.c.CLICK,
					noun: "inbox_notification_overflow",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: o
					}
				}),
				O = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...l.o(o),
					action: d.c.VIEW,
					noun: "inbox_notification_overflow",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				x = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: o
				}) => r => ({
					...l.o(r),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: o
					},
					actionInfo: {
						...l.d(r),
						type: e
					}
				}),
				C = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: o
				}) => r => ({
					...l.o(r),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: o
					},
					actionInfo: {
						...l.d(r),
						type: e
					}
				}),
				y = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				E = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: r.MiniInbox
					}
				}),
				j = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				P = ({
					isMiniInbox: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...l.d(t),
						pageType: r.MiniInbox
					} : {}
				}),
				_ = (e, t) => n => ({
					...l.o(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: a.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				}),
				S = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: a.Inbox,
					actionInfo: {
						...l.d(e),
						type: "2021Recap"
					}
				})
		},
		"./src/reddit/helpers/trackers/moreReplies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s, o, r, a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Click = "click", e.Dismiss = "dismiss", e.View = "view"
			}(s || (s = {})),
			function(e) {
				e.Load = "load_more_comments", e.SsoSignup = "sso_signup"
			}(o || (o = {})),
			function(e) {
				e.Popup = "popup", e.PostDetail = "post_detail"
			}(r || (r = {}));
			const i = () => e => ({
					...Object(a.o)(e),
					source: r.PostDetail,
					action: s.Click,
					noun: o.Load,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				c = () => e => ({
					...Object(a.o)(e),
					source: r.Popup,
					action: s.Dismiss,
					noun: o.SsoSignup,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				d = () => e => ({
					...Object(a.o)(e),
					source: r.Popup,
					action: s.View,
					noun: o.SsoSignup,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail",
						type: "view_more_comments"
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: s.ab(e),
					profile: s.R(e),
					subreddit: s.ib(e)
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
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = (e = r) => t => ({
					...Object(o.o)(t),
					action: s.c.CLICK,
					noun: i.EXIT,
					onboarding: {
						processNotes: "exited",
						numberSubredditsSelected: e.length,
						subredditsSelected: e
					},
					source: a
				}),
				d = () => e => ({
					...Object(o.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				l = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(o.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				x = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				C = (e, t, n) => r => ({
					...Object(o.o)(r),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				y = (e, t, n) => r => ({
					...Object(o.o)(r),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				E = e => t => ({
					...Object(o.o)(t),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: e
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
				return d
			})), n.d(t, "b", (function() {
				return l
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
				return x
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return P
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
					post: s.I(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.j(n, t)
				}),
				i = o("show_panel"),
				c = o("esc_close"),
				d = e => r("enter_open_post", e),
				l = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => a("s_save", e),
				O = e => r("h_hide", e),
				x = e => r("x_expando", e),
				C = e => r("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				j = e => a("z_downvote", e),
				P = o("c_create_post"),
				_ = e => r("l_go_to_link", e),
				S = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
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
					screen: o.ab(e),
					profile: o.R(e),
					subreddit: o.ib(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = () => e => ({
					...a(e),
					source: "nav",
					action: "click",
					noun: "recap"
				}),
				d = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? o.v(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "predictions",
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(s.e)(s.a.PowerupsFlow, !1),
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
						id: Object(r.nb)(t, {
							userName: e
						}).id
					},
					...o.o(t)
				}),
				h = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(r.nb)(t, {
							userName: e
						}).id
					},
					...o.o(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = (e, t = !1) => {
				let n = "/wiki";
				const o = e.countryCode ? `/${e.countryCode}` : "",
					r = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${o}${r}/r/${e.subredditName}/about/wiki` : `${o}${r}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(Object(o.s)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.lb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(() => Object(o.v)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.wb)(e)
				}, [e])]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
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
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
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

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", d({}, n, {
				className: Object(r.a)(c.a.compactDownvoteWrapper, n.className)
			}), o.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : o.a.createElement("span", d({}, n, {
				className: Object(r.a)(c.a.downvoteWrapper, n.className)
			}), o.a.createElement(l, {
				isFilled: t
			}))
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

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", d({}, n, {
				className: Object(r.a)(c.a.compactUpvoteWrapper, n.className)
			}), o.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : o.a.createElement("span", d({}, n, {
				className: Object(r.a)(c.a.upvoteWrapper, n.className)
			}), o.a.createElement(l, {
				isFilled: t
			}))
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
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(r.a)(i.a.checkbox, e)
			}, t), o.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
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
		"./src/reddit/icons/svgs/SnooNoEyes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
			})))
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
				o = (n("./src/polyfill.ts"), n("./src/lib/performanceTimings/index.tsx")),
				r = n("./node_modules/@r/google-tag-manager/compiled.js"),
				a = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/reddit/helpers/name/index.ts");
			const f = /^u_[\w-]+$/;
			var v = n("./src/reddit/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return f.test(Object(g.g)(e))
					}(t)) {
					const e = (null === (o = Object(v.k)(r)) || void 0 === o ? void 0 : o.displayText) || "";
					if (function(e, t) {
							return Object(g.g)(e) === Object(g.g)(t)
						}(t, function(e) {
							return `u_${Object(g.g)(e)}`
						}(e))) return
				} else if (Object(h.a)(t)) return;
				n((e => ({
					payload: e,
					type: b.f
				}))(e))
			}, x = Object(p.a)(b.e), C = e => ({
				payload: {
					subreddits: e
				},
				type: b.b
			}), y = e => ({
				payload: e,
				type: b.a
			});
			var E = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				P = n("./src/lib/browser/isIncognito.ts"),
				_ = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/extractQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				w = n("./src/lib/getParsedUserAgent/index.ts"),
				M = n("./src/lib/initializeClient/index.tsx"),
				N = n("./src/lib/loadableAction/index.ts"),
				I = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				A = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				D = n("./src/reduxMiddleware/apiContext.ts"),
				F = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/helpers/sendEvent.ts"),
				G = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				q = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/reddit/actions/chat/unreadCount.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				K = n("./src/reddit/actions/emailCollection/index.ts"),
				z = n("./src/reddit/actions/emailVerification.ts"),
				J = n("./src/reddit/actions/googleOneTap/index.ts"),
				Z = n("./src/reddit/actions/media.ts"),
				Y = n("./src/lib/loadWithRetries/index.ts"),
				X = () => Object(Y.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				$ = n("./src/reddit/actions/nps.ts");
			const ee = Object(N.a)(() => n.e("OnboardingActions").then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var te = n("./src/reddit/actions/platform.ts"),
				ne = n("./src/reddit/actions/post.ts"),
				se = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				oe = n("./src/reddit/actions/session.ts"),
				re = n("./src/reddit/actions/survey/index.ts"),
				ae = n("./src/reddit/actions/theme.ts"),
				ie = n("./src/reddit/actions/toaster.ts"),
				ce = n("./src/reddit/actions/users.ts"),
				de = n("./node_modules/react-redux/es/index.js"),
				le = n("./node_modules/react-router/esm/react-router.js"),
				ue = n("./node_modules/reselect/es/index.js"),
				me = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/index.m.less")),
				pe = n.n(me),
				be = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				he = n("./src/lib/classNames/index.ts"),
				ge = n("./src/reddit/components/AppRouter/index.tsx"),
				fe = n("./src/reddit/contexts/User/index.tsx");

			function ve(e) {
				return u.a.createElement(fe.b, null, e.children)
			}
			var Oe = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				xe = n("./src/reddit/constants/shortcuts.ts"),
				Ce = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				ye = n.n(Ce);
			var Ee = ({
					children: e
				}) => u.a.createElement("div", {
					className: ye.a.shortcutDiv,
					id: xe.b,
					tabIndex: -1
				}, u.a.Children.only(e)),
				je = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Pe = n("./src/reddit/contexts/NavbarExp.ts"),
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
			}), De = Object(de.b)(Le)(e => {
				const t = Object(l.useContext)(Pe.a);
				return u.a.createElement(we.a.Provider, {
					value: !1
				}, u.a.createElement(ke.b, {
					subredditName: ""
				}, u.a.createElement("div", null, u.a.createElement(Se.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), u.a.createElement("div", {
					className: Ae.a.container
				}, u.a.createElement("div", {
					className: Ae.a.mainContent
				}, u.a.createElement(Ie.a, {
					className: Ae.a.dizzySnoo
				}), u.a.createElement("h3", {
					className: Ae.a.title
				}, Re._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), u.a.createElement("div", {
					className: Ae.a.subTitle
				}, Re._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), u.a.createElement(Me.l, {
					onClick: () => window.location.reload(!0)
				}, Re._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Ae.a.subTitle
				}, e.error.message), u.a.createElement("pre", null, u.a.createElement("code", null, e.error.stack)))), u.a.createElement("div", {
					className: Object(he.a)(Ae.a.topImageContainer, {
						[Ae.a.topImageContainerExp]: t
					})
				}, u.a.createElement("img", {
					className: Ae.a.image,
					src: `${a.a.assetPath}/img/error/star_pattern.png`
				})), u.a.createElement("div", {
					className: Ae.a.bottomImageContainer
				}, u.a.createElement("img", {
					className: Ae.a.image,
					src: `${a.a.assetPath}/img/error/half_planet.png`
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
			const Be = Object(ue.c)({
					isNavbarLikeMwebEnabled: Fe.a,
					theme: e => e.themes.current
				}),
				Ge = Object(de.b)(Be, {})(({
					children: e,
					theme: t,
					isNavbarLikeMwebEnabled: n
				}) => {
					const s = Object(_e.a)({
						theme: t
					});
					return u.a.createElement(Pe.a.Provider, {
						value: n
					}, u.a.createElement("div", {
						className: Object(he.a)(pe.a.container, {
							[pe.a.containerExp]: n
						}),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, e))
				});

			function He(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(je.a, null, u.a.createElement(Ge, null, u.a.createElement(ve, null, u.a.createElement(be.a, null), u.a.createElement(Oe.a, null), u.a.createElement(Ee, null, u.a.createElement(t, null, u.a.createElement(le.d, {
						component: qe(n)
					}))))))
				}
				return u.a.createElement(De, {
					error: e.error
				})
			}
			const qe = e => t => u.a.createElement(ge.b, Ue({
				routes: e
			}, t));
			var We = n("./src/reddit/constants/localStorage.ts"),
				Ve = n("./node_modules/lodash/throttle.js"),
				Qe = n.n(Ve),
				Ke = n("./src/reddit/helpers/localStorage/index.ts");
			const ze = 1e3;
			class Je extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Qe()(() => Object(Ke.Db)(this.props.storageKey, this.props.value), ze)
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
			const Ze = Object(ue.a)(v.K, e => ({
				storageKey: We.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Ye = Object(de.b)(Ze)(Je);
			var Xe = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Ye, null)),
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
			const dt = () => e => t => e(t);
			var lt = n("./src/lib/safeBadgeUpdate.ts"),
				ut = n("./src/reddit/selectors/appBadges.ts");

			function mt(e) {
				const t = Object(ut.g)(e);
				Object(lt.a)(t)
			}
			var pt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== ct.b && n.type !== ct.d || mt(e.getState()), s
				} : dt,
				bt = n("./node_modules/brcast/dist/brcast.es.js"),
				ht = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var gt = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(bt.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(ht.b)(s) || Object(v.H)(s)) && (e = !0, Object(B.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(ht.b)(a)) {
									const n = Object(v.H)(a);
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
			const xt = 30 * _.kb;
			let Ct = Date.now();
			const yt = () => {
					Ct = Date.now()
				},
				Et = !!Object(Ot.f)() && {
					passive: !0
				};
			window.addEventListener("click", yt, !1), window.addEventListener("wheel", vt()(yt, 250), Et), window.addEventListener("mousemove", vt()(yt, 250), Et), window.addEventListener("keydown", vt()(yt, 250), Et);
			var jt = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Ct >= xt ? (e.dispatch(oe.h()), yt()) : yt()
					})), e => t => e(t)
				},
				Pt = n("./node_modules/lodash/pick.js"),
				_t = n.n(Pt),
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
				Rt = n("./src/reddit/selectors/chat.ts"),
				Lt = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				Dt = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Ft = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ut = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Bt = n("./src/reddit/selectors/platform.ts");
			const Gt = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Ht = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Bt.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Gt.has(o), a = Object(Ft.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = qt(e), d = n && n.isRobotIndexable, l = s === _.Mb.COMMENTS || s === _.Mb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === _.Mb.SEARCH_RESULTS || s === _.Mb.SUBREDDIT_LEADERBOARD || l && u;
					return i || r || c || (!1 === d || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				qt = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.f)(e, s);
						n = !!Object(Ut.a)(t, !1, s)
					}
					return n
				};
			var Wt = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Vt = "theme-color",
				Qt = `meta[name="${Vt}"]`;

			function Kt(e) {
				return e ? Wt.b.body : Wt.a.body
			}
			var zt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === te.f) {
						const t = e.getState(),
							s = Object(v.J)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Dt.b)(e),
								s = Object(Lt.a)(e);
							let o = 0;
							if (n) o = Object(ut.i)(e);
							else if (s) o = Object(ut.j)(e);
							else {
								const t = Object(v.F)(e) || 0;
								o = Object(Rt.a)(e) + t
							}
							Object(At.c)(o, t)
						})(t, o.title) : Tt.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Ht(e),
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
								const t = document.head.querySelector(Qt);
								if (t) {
									const n = Object(v.X)(e);
									t.content = Kt(n)
								}
							})
						}(e.getState())
					}
					return s
				} : dt,
				Jt = n("./src/reddit/helpers/survey/index.ts");
			var Zt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Jt.b).filter(t => t === e).length)(t.type) && Object(Ke.S)(Jt.b[t.type]), e(t)) : dt;
			const Yt = 5 * _.kb;
			var Xt = e => {
					const t = Qe()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(oe.g())
					}, Yt);
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
				$t = n("./src/reddit/singleton/tracing/index.ts");
			var en = e => e => t => {
					const n = () => e(t);
					return $t.b.isEnabled ? $t.b.recordLocalSpan(t.type, n) : e(t)
				},
				tn = n("./src/reddit/actions/frontpage/constants.ts"),
				nn = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				sn = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				on = n("./src/reddit/actions/pages/profilePosts.ts"),
				rn = n("./src/reddit/actions/pages/search/index.ts"),
				an = n("./src/reddit/actions/pages/subreddit.ts"),
				cn = n("./src/reddit/actions/search.ts"),
				dn = n("./src/reddit/actions/subreddit.ts"),
				ln = n("./src/reddit/actions/tracking.ts"),
				un = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				mn = n("./src/reddit/helpers/history/index.ts"),
				pn = n("./src/reddit/helpers/trackers/commentList.ts"),
				bn = n("./src/reddit/helpers/trackers/postList.ts"),
				hn = n("./src/reddit/helpers/trackers/screenview.ts"),
				gn = n("./src/reddit/selectors/subreddit.ts"),
				fn = n("./src/reddit/helpers/routeKey/index.ts");
			var vn = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(ln.c({
							routeKey: t
						}))
					};
					if (n.type === te.b) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(gn.C)(s, o) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						r.trigger("pageview", {
							..._t()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(fn.b)(c, s, Object(un.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(Bt.i)(s) && Object(mn.b)(tt.b.IsOverlay) || Object(hn.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(un.a)(s, d),
							u = Object(fn.b)(d, s, l);
						if (!u) return t(n);
						U.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case tn.b:
						case sn.b:
						case sn.e:
						case on.PROFILE_POSTS_LOADED:
						case nn.e:
						case an.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case rn.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case tn.f:
						case dn.i:
						case on.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							bn.l(r, t);
							break
						}
						case nn.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							pn.a(r, t);
							break
						}
						case cn.g: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				On = n("./src/reddit/helpers/chooseVariant/index.ts"),
				xn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Cn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				yn = n("./src/reddit/helpers/trackers/global.ts");
			let En = null;
			const jn = () => {
				En && window.clearTimeout(En), En = null
			};
			var Pn = e => {
					En = window.setTimeout(() => {
						jn(), Object(U.a)(Object(yn.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", jn)
				},
				_n = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Sn = n("./src/reddit/actions/connection/constants.ts");
			const kn = Object(p.a)(Sn.b),
				wn = Object(p.a)(Sn.a),
				Mn = Object(p.a)(Sn.c);
			var Nn = n("./src/reddit/actions/meta.ts"),
				In = n("./src/reddit/selectors/telemetry.ts");
			const Tn = (e, t) => Object(U.a)({
					...In.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(In.d)(e, {
						type: t
					})
				}),
				An = "(display-mode: minimal-ui)";
			const Rn = 3 * _.Rb;

			function Ln(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(An).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Nn.i)());
				const t = window.matchMedia(An);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Nn.i)()) : e.dispatch(Object(Nn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						mt(t)
					}, 1e3), Tn(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(kn()), setTimeout(() => e.dispatch(Mn()), Rn)
				}), window.addEventListener("offline", () => e.dispatch(wn()))
			}
			var Dn = n("./src/lib/cookieConsent/index.ts"),
				Fn = n("./src/lib/permanentCookieOptions.ts"),
				Un = n("./src/reddit/constants/cookie.ts");
			const Bn = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Un.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: Un.g,
							value: s,
							cookieOptions: Object(Fn.a)(),
							cookieContext: t
						};
					Object(Dn.c)(o)
				}
			};
			var Gn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Hn = n("./src/reddit/models/Toast/index.ts"),
				qn = n("./src/reddit/reducers/index.ts"),
				Wn = n("./src/reddit/routes/index.ts");
			var Vn = n("./src/reddit/selectors/experiments/googleOneTap.ts");
			const Qn = {
					displayDelay: 15,
					displayOnRoutes: [_.Mb.SUBREDDIT, _.Mb.COMMENTS],
					experimentName: $e.kd,
					experimentVariant: $e.pd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Kn = e => {
					const {
						base_url: t
					} = Object(In.Z)(e), n = Object(Bt.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
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
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(Qn, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(Qn)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(Qn, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(Qn, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(On.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: On.a
						}) === t)(Qn, e)) return {
						displayDelay: Qn.displayDelay,
						externalVars: Kn(e)
					}
				};
			var Jn = n("./src/reddit/selectors/meta.ts"),
				Zn = n("./src/reddit/selectors/onboarding.ts");
			var Yn = n("./src/reddit/singleton/EventSystem.ts"),
				Xn = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				$n = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				es = n("./src/lib/initializeClient/installReducer.ts"),
				ts = n("./src/reddit/reducers/features/categories/index.ts"),
				ns = n("./src/lib/sentry/index.ts"),
				ss = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const os = Object(p.a)(ss.C),
				rs = () => {
					return Object(Ke.B)(We.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var as = n("./src/reddit/actions/global/constants.ts");
			Object(es.a)({
				features: {
					categories: ts.a
				}
			});
			const is = Object(p.a)(as.a),
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
			var ds = n("./src/reddit/actions/login.ts");
			const ls = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				us = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return ls.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(ds.c)())
				};
			var ms = n("./src/reddit/actions/notificationsInbox/index.ts"),
				ps = n("./src/reddit/constants/countrySites.ts"),
				bs = n("./src/reddit/selectors/countrySites.ts");
			const hs = ps.b ? `${ps.a}/${ps.b}` : `${ps.a}`,
				gs = (e, t) => {
					return !!Object(bs.d)(e) && !(t && !Object(bs.c)(t))
				},
				fs = e => e.startsWith("/r/") ? e.replace("/r/", `/${hs}/r/`) : e;
			var vs = n("./src/reddit/selectors/experiments/countrySites.ts");
			var Os = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				xs = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				Cs = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts");
			Object(o.e)(o.b.EntryPointStart);
			const ys = Object(D.a)({
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
						headersReceived: q.a
					},
					onBeforeRequestFactory: _n.a,
					statsAppName: _.n.Redesign
				}),
				Es = Object(F.a)(ys.apiContext),
				js = gt();
			let Ps;
			Object(M.a)({
				reducerMap: qn.a,
				routes: Wn.a,
				apiContext: ys.apiContext,
				gqlContext: Es.gqlContext,
				appFactory: (e, t) => u.a.createElement(rt.a.Provider, {
					value: js.broadcaster
				}, u.a.createElement(at.a.Provider, {
					value: {
						apiContext: ys.apiContext,
						gqlContext: Es.gqlContext
					}
				}, u.a.createElement(it.b, null, u.a.createElement(He, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Xe, null)))),
				appName: _.n.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = Ps;
						if (!n) return;
						n.dispatch(Object(te.l)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(te.k)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Wn.a,
					apiContext: ys.apiContext,
					gqlContext: Es.gqlContext
				}), js.middleware, jt, ys.middleware, Es.middleware, Xt, It, en, vn, zt, Zt, Os.a, pt, e => t => n => {
					let s, o;
					if (!Object(vs.a)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!gs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(bs.c)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${hs}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!gs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(bs.c)(e);
								(n || t) && (o.permalink = fs(o.permalink))
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
					if (!Object(vs.a)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === b.e ? n.payload = ((e, t) => {
							if (!gs(e, t.name)) return t;
							const n = Object(bs.c)(t.id);
							if (t.name || n) {
								const e = fs(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!gs(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(bs.c)(s.id),
									o = Object(bs.c)(s.name);
								if (e || o) {
									const e = fs(s.url),
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
				modifyInitialData: ({
					initialData: e,
					browserHistory: t
				}) => {
					const n = e.platform.currentPage ? e.platform.currentPage.key : "";
					if (n) {
						const s = t.location.key;
						e.platform.currentPage && (e.platform.currentPage.key = s);
						for (const t of ["referrers", "metas"]) Object.keys(e.platform[t]).length && (e.platform[t] = {
							[s]: e.platform[t][n]
						})
					}
					return e
				},
				staticPages: {
					loading: u.a.createElement(Gn.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: ({
					browserHistory: e,
					routes: t,
					store: n
				}) => {
					window.addEventListener("message", e => {
							const t = a.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(Z.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), Ln(n), Object(B.d)("enabled" === Object(On.c)(n.getState(), {
							experimentEligibilitySelector: On.a,
							experimentName: $e.Se,
							expEventOverride: !1
						})), Object(B.c)("enabled" === Object(On.c)(n.getState(), {
							experimentEligibilitySelector: On.a,
							experimentName: $e.Ue
						})), Object(B.g)("enabled" === Object(On.c)(n.getState(), {
							experimentEligibilitySelector: On.a,
							experimentName: $e.Te
						})), Object(B.f)(Es.gqlContext), window.addEventListener("beforeunload", () => {
							const e = n.getState(),
								t = Object(yn.a)("tab_closed")(e),
								s = G.g(t),
								o = Object(Xn.a)(s),
								r = Object($n.b)(o);
							Object(L.b)("sendV2EventsData", {
								data: o,
								headers: r
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(te.h)());
					const s = Object(v.X)(n.getState());
					n.dispatch(Object(ae.c)({
						nightmode: s
					}));
					const o = (e => e.tracing.traceId)(n.getState());
					if (o && (e => Object(On.c)(e, {
							experimentEligibilitySelector: On.a,
							experimentName: $e.I
						}) === $e.R.Enabled)(n.getState())) {
						$t.b.enableTracing(!0);
						const e = $t.b.createTraceFromId(o);
						$t.b.setParent(e)
					}
					n.dispatch(Object(te.i)(t));
					e.listen((e, s) => {
						const o = Object(I.a)(Object(i.e)(e), t, n.getState());
						n.dispatch(Object(te.j)(e, s, o))
					});
					const r = n.getState(),
						{
							currentPage: c
						} = r.platform;
					if (c) {
						const e = [st.h];
						Object(Bt.j)(r) && e.push(st.e), e.length > 0 && n.dispatch(Object(m.c)(Object(k.a)(c.url, e)))
					}
					return xn.a.initialize(), {
						localStorageData: Object(Ke.C)()
					}
				},
				postRender: ({
					browserHistory: e,
					routes: t,
					serverDocumentLength: i,
					store: c,
					localStorageData: d
				}) => {
					var l, u;
					Ps = c;
					e.listen((e, t) => {
						const n = c.getState(),
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
							i = Object(gn.C)(n, a) || "";
						if (Bn(i, {
								country: n.meta.country
							}), i) {
							c.dispatch(O(i, a));
							const e = Object(Bt.e)(n);
							e && c.dispatch(x(e))
						}
						Yn.a.publish(nt.c, r, document)
					});
					const m = c.getState(),
						p = Object(Os.b)();
					c.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(C(n)), t(y(Array.from(s)))
					})(p));
					const b = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(gn.C)(m, b) || "";
					if (b) {
						c.dispatch(O(h, b));
						const e = Object(Bt.e)(m);
						e && c.dispatch(x(e))
					}
					const g = Object(gn.C)(m, b) || "",
						f = (m.subreddits.about[g] || {}).advertiserCategory;
					r.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: a.a.gtmContainerId,
						payload: {
							user: m.user.account ? m.user.account.id : m.user.loid.loid
						}
					}), r.trigger("pageview", {
						subreddit: b,
						advertiserCategory: f
					}), c.dispatch(cs({
						localStorageData: d
					})), Object(Vn.f)(m) && Object(J.d)(m), c.dispatch(Object(J.c)()), Object(Zn.b)(m) && (c.dispatch(ee()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [st.v]))), c.dispatch(us()), window.addEventListener("load", () => {
						const t = c.getState(),
							{
								currentPage: r
							} = t.platform,
							a = (r.urlParams.subredditName || "").toLowerCase(),
							d = Object(gn.C)(t, a) || "";
						if (Object(L.a)(), Bn(d, {
								country: t.meta.country
							}), r && r.meta) {
							const a = r.meta.name;
							if (Object(U.b)(_.n.Redesign, {
									page: a,
									type: "rum"
								}), Object(w.c)(t.meta.userAgent) && window.innerWidth > ot.b) {
								const e = Object(o.f)(i);
								T.a && T.a.timing && $t.b.isEnabled && ($t.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), $t.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
								const n = [],
									s = !0;
								if (Object(Bt.g)(t)) {
									const e = Object(Cn.a)(t);
									n.push(Object(Cn.c)(e))
								}
								const r = {
									isLoggedIn: Object(v.K)(t),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(o.g)(r, e, s)
							}
							const d = T.a.timing.domInteractive - T.a.timing.navigationStart;
							Object(hn.k)(r.routeMatch, c.getState(), H.TimerType.Initial, d, r.urlParams);
							const l = Object(S.a)(window.location.href);
							l && l.get(st.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [st.a])), Object(R.a)(l.get(st.C)) && c.dispatch(Object(ie.f)({
								kind: Hn.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), l.get(st.D) && (c.dispatch(Object(z.a)(l.get(st.D))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [st.D])));
							let u = !1;
							const m = Object(v.N)(t);
							if ((Object(mn.b)(tt.b.JustLoggedIn) || m) && (c.dispatch(Object(ie.f)({
									text: s.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), u = !0, Object(mn.c)(tt.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [st.p]))), Object(mn.b)(tt.b.JustLoggedOut) && (u = !0, Object(mn.c)(tt.b.JustLoggedOut)), X().then(({
									subscribeToPermissionsChange: e
								}) => c.dispatch(e())), !1 !== Ke.T()) {
								let n;
								Object(Vn.a)(t) && (n = () => {
									const {
										dispatch: t
									} = c;
									e.listen(() => t(Object(J.b)())), t(Object(J.b)())
								}), X().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(u, !1, n)))
							}
							if (a === _.Mb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								c.dispatch(Object(N.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							c.dispatch(Object(K.c)())
						}
						Object(v.K)(c.getState()) && (Object(Lt.a)(c.getState()) || c.dispatch(Object(V.d)()), c.dispatch(Object(W.e)())), Object(j.requestIdleCallback)(async () => {
							c.dispatch(Object($.d)()), await Object(P.a)() && Object(yn.b)(c.getState());
							const t = async () => {
								const e = c.getState(),
									t = zn(e);
								t && (await (async e => {
									return (await Object(Y.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = e.listen((e, n) => {
								"POP" !== n && t()
							});
							t()
						}), document.addEventListener("visibilitychange", () => {
							var e;
							const t = c.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Ke.Pb(Date.now()), Object(U.a)(Object(yn.a)("tab_backgrounded")(t))), (e => Object(On.c)(e, {
									experimentEligibilitySelector: e => !Object(Jn.d)(e),
									experimentName: $e.Pb
								}) === $e.cc.Enabled)(t) && "visible" === document.visibilityState && n && Object(hn.k)(n.routeMatch, c.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Ke.w(),
									t = Ke.x(),
									n = Ke.G(),
									s = Ke.P();
								if (s && e && n) {
									const o = Date.now() - s;
									Object(U.a)(Object(yn.e)("tab_backgrounded", n)(c.getState(), o, e, t))
								}(s || e || n || t) && (Ke.ab(), Ke.eb(), Ke.cb(), Ke.bb())
							}
							Object(Cs.a)(c.getState()) && (null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && xs.d[n.locationState.clickId] && !xs.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(xs.b)(n.locationState.clickId) : Object(xs.c)(n.locationState.clickId))
						}), Object(Jn.g)(c.getState()) && Pn(c.getState), c.dispatch(Object(re.l)())
					}), window.history.scrollRestoration = "manual", Yn.a.attachStore(c), c.dispatch(Object(se.b)(A.a.PageLoad));
					const E = Ke.p(null === (l = c.getState().user.account) || void 0 === l ? void 0 : l.id),
						M = Ke.o(null === (u = c.getState().user.account) || void 0 === u ? void 0 : u.id);
					c.dispatch(Object(ne.C)({
						posts: null != E ? E : []
					})), c.dispatch(Object(Q.k)({
						comments: null != M ? M : []
					})), Object(Dt.f)(c.getState()) && c.dispatch(Object(ms.e)())
				},
				raven: {
					tags: {
						project: _.n.Redesign
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
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(d);

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
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return o.a.createElement("div", u({
					className: Object(r.a)(l.a.backgroundContainer, n),
					style: p
				}, d))
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
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
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
			const b = Object(d.u)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.Q)(e, t)
				}),
				g = Object(r.b)(h);
			t.a = b(g(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: n,
				dispatch: s,
				fitPageToContent: r,
				forcedLayout: a,
				isCollectionLayout: l,
				isEditing: u,
				layout: b,
				pageLayer: h,
				...g
			}) => o.a.createElement("div", p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: b === c.g.Large || Object(d.N)(h),
					[m.a.mDisableFullScreen]: n && !l,
					[m.a.mClassicWidth]: l,
					[m.a.mIsEditing]: !!u,
					[m.a.mCanFlexFullWidth]: !r,
					[m.a.onlyChildMargin]: !t
				})
			}, g))))
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
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
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
					fitPageToContent: x,
					forcedLayout: C,
					hideOnlyChildMargin: y,
					isCollectionLayout: E,
					isPageSwapped: j,
					maxWidth: P,
					navBar: _,
					redditStyle: S,
					sidebar: k,
					sidebars: w,
					trendingUnit: M,
					subredditId: N
				} = e, I = M ? "28px" : "0", T = j ? {
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
					fitPageToContent: x,
					forcedLayout: C,
					isCollectionLayout: E
				}, g, h);
				let L;
				L = w ? o.a.createElement(o.a.Fragment, null, w[0], R, w[1]) : j ? o.a.createElement(o.a.Fragment, null, A, R) : o.a.createElement(o.a.Fragment, null, R, A);
				const D = O ? `${P||l.a+2*c.m}px` : "100%",
					F = Object(s.useContext)(u.a);
				return o.a.createElement(m.a, {
					subredditId: N
				}, o.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, d.i, n, {
						[b.a.outerContainerExp]: F
					}),
					ref: p
				}, o.a.createElement(r.a, {
					className: d.h,
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
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
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
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(s || (s = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(o || (o = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(r || (r = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(a || (a = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
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
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/controls/Button/index.tsx");
			var u = e => r.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				m = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				p = n.n(m);
			const b = i.a.wrapped(u, "BellOutline", p.a),
				h = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(c.d)();
					return r.a.createElement("div", {
						className: Object(a.a)(p.a.emptyState, {
							[p.a.emptyStateWithBanner]: Boolean(e),
							[p.a.loggedOutState]: !t
						})
					}, r.a.createElement(b, null), r.a.createElement("h1", {
						className: p.a.emptyTitle
					}, s.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), r.a.createElement("p", {
						className: p.a.emptyDescription
					}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && r.a.createElement("div", {
						className: p.a.emptyStateLoggedOutContainer
					}, r.a.createElement(l.j, {
						onClick: () => n(Object(d.i)())
					}, s.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), r.a.createElement("span", {
						className: p.a.emptyStateDivider
					}), r.a.createElement(l.j, {
						onClick: () => n(Object(d.j)())
					}, s.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				}
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsBannersContainer: "_30M-VGAobP1YuoM04brOVT",
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyStateLoggedOutContainer: "_3RdkUuOKNnzN1UCWQNo6gI",
				emptyStateDivider: "-CQMcpUJHUU0cafBbsr__",
				loggedOutState: "_3DbA2SOgvxHXDiHhZbGEVw",
				emptyStateWithBanner: "_3cq_2lLFVJmAq-zXfEMOMD",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
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
						name: o.Mb.ACKNOWLEDGEMENTS
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
						name: o.Mb.APPEAL
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
						name: o.Mb.AVATAR
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
						name: o.Mb.COINS
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
						name: o.Mb.COINS_MOBILE
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			let d = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			d = Object(r.b)(d);
			const l = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.s.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Mb.COLLECTION_COMMENTS
					},
					prefetches: [o.s.FRONTPAGE, o.s.COMMENTS_PAGE, o.s.SUBREDDIT]
				},
				m = {
					...u,
					path: d
				},
				p = {
					...u,
					path: l,
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
			c = Object(r.b)(c);
			const d = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				l = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.s.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT]
				}),
				m = [u(o.Mb.COMMENTS, c), u(o.Mb.DUPLICATES, d), u(o.Mb.COMMENTS, l)];
			t.a = m
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
						name: o.Mb.ECON_MANAGEMENT
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
						name: o.Mb.FOLLOWERS
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
						name: o.Mb.FRAMED_GILD
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
						name: o.Mb.FRAMED_MODAL
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
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = Object.keys(a.W).map(e => a.W[e]).join("|"),
				u = "/",
				m = `/:sort(${l})?`,
				p = Object(i.b)([u]),
				b = Object(i.b)([m]),
				h = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
				g = {
					action: Object(c.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.s.FRONTPAGE,
					component: h,
					exact: !0,
					prefetches: [a.s.COMMENTS_PAGE, a.s.SUBREDDIT]
				},
				f = {
					...g,
					path: p,
					meta: {
						name: a.Mb.INDEX
					},
					routePredicate: d.K
				},
				v = {
					...g,
					path: p,
					meta: {
						name: a.Mb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(d.K)(e)
				},
				O = {
					...g,
					path: b,
					meta: {
						name: a.Mb.LISTING
					},
					routePredicate: d.K
				},
				x = {
					...g,
					path: b,
					meta: {
						name: a.Mb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(d.K)(e)
				},
				C = [f, v, O, x];
			t.a = C
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
				d = {
					action: e => async (e, t, {
						gqlContext: n
					}) => {
						{
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						let s;
						try {
							s = await Object(r.fetchTopicPage)(n(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const o = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: o.meta
						}))
					},
					chunk: o.s.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Mb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
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
				d = Object.keys(a.S).map(e => a.S[e]).join("|"),
				l = [`/message/:pageName(${d})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.s.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.INBOX_PAGES
					},
					path: l
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
			var d = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				l = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var b = [],
				h = n("./src/reddit/routes/econManagement/index.ts");
			var g = {
					action: Object(p.a)(() => n.e(4).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				f = n("./src/lib/addQueryParams/index.ts");
			var v = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(f.a)("/", o)))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.s.COMMENTS_PAGE, c.s.FRONTPAGE]
				},
				O = n("./src/reddit/routes/followers/index.ts"),
				x = n("./src/reddit/routes/framedGild/index.ts"),
				C = n("./src/reddit/routes/framedModal/index.ts"),
				y = n("./src/reddit/routes/frontpage/index.ts"),
				E = n("./src/reddit/routes/geotagging/index.ts"),
				j = n("./src/reddit/routes/inbox/index.ts"),
				P = n("./src/reddit/routes/meta/index.ts"),
				_ = n("./src/reddit/routes/moderationPages/index.ts"),
				S = n("./src/reddit/routes/modListing/index.ts"),
				k = n("./src/reddit/routes/modQueue/index.ts"),
				w = n("./src/reddit/routes/multireddit/index.ts"),
				M = n("./src/reddit/routes/notificationsInbox/index.ts"),
				N = n("./src/reddit/routes/postCreation/constants.ts");
			const I = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.s.EMPTY,
				exact: !0,
				meta: {
					name: c.Mb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var T = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(N.b))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...I],
				A = n("./src/reddit/routes/postCreation/index.ts"),
				R = n("./src/reddit/routes/postDraft/index.ts"),
				L = n("./src/reddit/routes/powerups/index.ts");
			var D = {
					action: () => async e => await e(Object(i.c)(L.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				F = n("./src/reddit/routes/predictions/index.ts");
			var U = {
					action: () => async e => await e(Object(i.c)(F.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				B = n("./src/reddit/routes/premium/index.ts"),
				G = n("./src/reddit/routes/profileComments/index.ts"),
				H = n("./src/reddit/endpoints/me/index.ts"),
				q = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var W = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							rest: o
						} = e.params, {
							queryParams: r
						} = e, a = await Object(H.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(q.a)(t, e)
						}
						const c = a.body.account.displayText,
							d = o ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${c}/`,
							l = Object(f.a)(d, r);
						await t(Object(i.c)(l))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				V = n("./src/reddit/routes/profileModSettings/index.ts"),
				Q = n("./src/reddit/routes/profileOverview/index.ts"),
				K = n("./src/reddit/routes/profilePosts/index.ts"),
				z = n("./src/reddit/routes/profilePrivate/index.ts");
			var J = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(f.a)(r, o);
						await t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Z = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var Y = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(f.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				X = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				$ = n("./src/reddit/routes/report/index.ts"),
				ee = n("./src/reddit/routes/searchResults/index.ts"),
				te = n("./src/reddit/routes/settings/index.ts");
			var ne = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Mb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Mb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				se = n("./src/reddit/routes/subreddit/index.ts"),
				oe = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				re = n("./src/reddit/routes/subredditWiki/index.ts"),
				ae = n("./src/reddit/routes/talk/index.ts"),
				ie = n("./src/reddit/routes/topic/index.ts"),
				ce = n("./src/reddit/routes/wrappedreddit/index.ts");
			const de = [o.a, r.a, a.b, d, l.a, u.a, W, J, Y, ...s.a, ...m.a, g, ...y.a, E.a, B.a, L.b, ce.c, F.b, ae.b, h.c, D, U, O.a, x.a, C.a, A.a, R.a, ...T, v, ...P.a, w.a, k.a, S.c, M.a, j.a, G.a, V.a, Q.a, K.a, Z.a, z.a, X.a, ...te.a, ...ne, ee.a, ...re.a, ie.a, se.b, oe.a, _.a, $.a, ...b];
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
				d = n("./src/reddit/actions/users.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/routes/meta/constants.ts");
			const h = {
					action: () => async (e, t) => {
						Object(p.K)(t()) || await e(Object(d.t)())
					},
					chunk: o.s.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
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
						name: o.Mb.META_ARBITRUM_POINTS_MIGRATION_PAGE
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
						name: o.Mb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: o.Mb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.K)(n()) || await t(Object(d.t)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(l.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: v,
					chunk: o.s.EMPTY,
					exact: !0,
					meta: {
						name: o.Mb.META_VAULT_BURN
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				d = Object.keys(a.rb).map(e => a.rb[e]).join("|"),
				l = `/r/mod/about/:pageName(${d})?`,
				u = {
					action: Object(i.a)(() => Promise.all([n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueue")]).then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.s.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.MODQUEUE_PAGES
					},
					path: l
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
				d = n("./node_modules/react-router/esm/react-router.js");
			const l = Object.keys(a.ec).map(e => a.ec[e]).join("|"),
				u = [a.ec.Awards],
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
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${l})`, `/user/:profileName/about/:pageName(${m})`, ...f];
			v = Object(i.b)(v);
			const O = e => !!Object(d.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(d.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(d.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				x = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.s.MODERATION_PAGES,
					component: g,
					exact: !0,
					meta: {
						name: a.Mb.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = x
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				d = "/me/m/:multiredditName",
				l = Object.keys(a.W).map(e => `${d}/:sort(${a.W[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.W).map(e => `${u}/:sort(${a.W[e]})?`),
				p = [d, u, ...l, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.s.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.MULTIREDDIT
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
						name: o.Mb.NOTIFICATIONS_INBOX
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.s.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.POST_DRAFT
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
						name: o.Mb.POWERUPS,
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
						name: o.Mb.PREDICTIONS,
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.s.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_COMMENTS
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
						name: o.Mb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.s.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_OVERVIEW
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.s.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_POSTS
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
			const d = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
				l = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${l})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.s.PROFILE_PRIVATE,
					component: d,
					exact: !0,
					meta: {
						name: a.Mb.PROFILE_PRIVATE
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
				d = {
					path: c,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.s.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = d
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
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.s.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Mb.PUBLIC_ACCESS_NETWORK
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
						name: o.Mb.REPORT
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: o.s.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.SEARCH_RESULTS
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
			const c = Object.keys(a.bc).map(e => a.bc[e]).join("|"),
				d = [{
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
						name: a.Mb.SETTINGS
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
						name: a.Mb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = d
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
						name: o.Mb.SUBREDDIT_LEADERBOARD,
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
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
			let l = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			l = Object(a.b)(l), l.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.s.EMPTY,
					exact: !0,
					meta: {
						name: r.Mb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~1f4a9acf"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.s.SUBREDDIT_WIKI,
					component: d,
					exact: !0,
					meta: {
						name: r.Mb.SUBREDDIT_WIKI
					},
					path: l,
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
						name: o.Mb.TALK
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.s.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Mb.TOPIC
					},
					prefetches: [o.s.COMMENTS_PAGE, o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/wrappedreddit/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const a = "/RedditRecap2021",
				i = "https://i.redd.it/8yb4biw7bf481.png",
				c = {
					action: r.a,
					chunk: o.s.WRAPPED_REDDIT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "WrappedReddit",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("WrappedReddit").then(n.bind(null, "./src/reddit/pages/WrappedReddit/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/WrappedReddit/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.WRAPPED_REDDIT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: d.fd
			}), e => e === d.md.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				v = n("./src/lib/getParsedUserAgent/index.ts");
			const O = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(v.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: d.Ee
			}), e => e === d.Me.Enabled);
			var x = n("./src/reddit/selectors/experiments/utils.ts"),
				C = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/selectors/responsiveSettings.ts");
			const E = e => e.accountManagerModalData.actionSource,
				j = e => e.accountManagerModalData.redirectUrl,
				P = Object(a.c)({
					frontpageSignupVariant: l.a,
					googleOneTapVariant: u.b,
					magicLinkVariant: g.a,
					moreRepliesSignupVariant: e => Object(x.a)(Object(f.b)(e)),
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: d.Fe
					}),
					blockingInterstitialVariant: h.d
				}),
				_ = Object(a.c)({
					isGoogleSsoGisEnabled: b,
					isMoreRepliesSignupEnabled: f.a,
					isSafariOneTapEnabled: O,
					isBlockingInterstitialEnabled: h.b
				}),
				S = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, E, y.a, C.i, P, _, (e, t, n, a, l, u, m) => {
					const {
						frontpageSignupVariant: p,
						googleOneTapVariant: b,
						ssoLoginLinkVariant: h,
						magicLinkVariant: g,
						moreRepliesSignupVariant: f,
						blockingInterstitialVariant: v
					} = u, {
						isGoogleSsoGisEnabled: O,
						isMoreRepliesSignupEnabled: x,
						isSafariOneTapEnabled: C,
						isBlockingInterstitialEnabled: y
					} = m;
					let E = `${r.a.accountManagerOrigin}${e}`;
					if (E = Object(i.a)(E, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), h && (E = Object(i.a)(E, {
							[`experiment_${d.Fe}`]: h
						})), O && (E = Object(i.a)(E, {
							[`experiment_${d.fd}`]: "enabled"
						})), x && (E = Object(i.a)(E, {
							[`experiment_${d.Ed}`]: f
						})), E = Object(i.a)(E, {
							experiment_d2x_onboarding: "enabled"
						}), C && (E = Object(i.a)(E, {
							[`experiment_${d.Ee}`]: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(E, {
						[d.qb]: b
					});
					if (y && (E = Object(i.a)(E, {
							[`experiment_${d.ub}`]: v
						})), p && (E = Object(i.a)(E, {
							[d.dc]: p,
							uiMode: t
						})), g && (E = Object(i.a)(E, {
							[`experiment_${d.Bd}`]: g
						})), a && (E = Object(i.a)(E, {
							mweb_responsive_settings: "treatment"
						})), l) {
						const e = Object(s.isoLocaleToR2Language)(l);
						l !== o.DEFAULT_LOCALE && e && (E = Object(i.a)(E, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? E : E = Object(i.a)(E, {
						actionSource: n
					})
				})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(a.nb)(e, {
						userName: n
					});
					if (!s) return;
					const o = i(e, {
						subredditId: t
					});
					return o ? o[s.id] : void 0
				},
				d = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : o.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(r.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
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
			var i = (e = a, t) => {
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
				d = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || o.a.Default
				},
				l = e => {
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
		"./src/reddit/selectors/experiments/econ/meta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.Cd)
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
					experimentEligibilitySelector: r.K,
					experimentName: s.Rc
				});
				return !(!t || Object(s.if)(t))
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
				d = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(d.T, (e, {
					pageLayer: t
				}) => !t || Object(r.z)(t), c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: o.dc,
					throttledVariants: {
						[o.dd.CurrentThrottled]: o.dc
					}
				}), i.a),
				m = e => e === o.dd.CurrentThrottled,
				p = e => e === o.dd.CurrentThrottled || e === o.dd.CurrentUnthrottled || e === o.dd.CurrentUnthrottledCopy || e === o.dd.NewPopUnthrottledCopy,
				b = e => e === o.dd.NewPopUnthrottledCopy,
				h = e => e === o.dd.NewPageUnthrottledCopy || e === o.dd.NewPageUnthrottledCopyFields,
				g = e => e === o.dd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
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
					experimentName: o.yb,
					experimentEligibilitySelector: a.e
				}), e => e === o.X.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.zb,
					experimentEligibilitySelector: a.e
				}), e => e === o.Y.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Ab,
					experimentEligibilitySelector: a.e
				}), e => e === o.Z.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Bb,
					experimentEligibilitySelector: a.e
				}), e => e === o.ab.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Db,
					experimentEligibilitySelector: a.e
				}), e => e === o.cb.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Cb,
					experimentEligibilitySelector: a.e
				}), e => e === o.bb.Enabled)
		},
		"./src/reddit/selectors/experiments/moreRepliesSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = e => Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: o.Ed,
					throttledVariants: {
						[o.Id.ThrottledDaily]: o.Jd.Daily,
						[o.Id.ThrottledWeekly]: o.Jd.Weekly
					}
				}),
				d = Object(s.a)(c, e => !!Object(i.a)(e))
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
					experimentName: s.Ld,
					experimentEligibilitySelector: o.a
				}) === s.Ud.Enabled,
				a = e => Object(o.c)(e, {
					experimentName: s.Md,
					experimentEligibilitySelector: o.a,
					expEventOverride: !1
				}) === s.Vd.Enabled
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
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.ie
					}) === s.Uc
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.he
					}) === s.Uc
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Yd
					}) === s.Uc
				},
				d = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Xd
					}) === s.Uc
				}
		},
		"./src/reddit/selectors/experiments/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.Qb
				}) === s.ib.Enabled,
				a = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.Rb
				}) === s.jb.Enabled
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/featureFlags/subredditPoints.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = e => {
					const t = Object(o.a)(e);
					if (!t) return null;
					const n = Object(r.H)(e),
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
				d = Object(a.a)(c, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/SubredditModeration/index.ts");
			const r = [],
				a = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.pages.modHub.muted.userOrder[t];
					return n ? n.map(n => e.pages.modHub.muted.models[t][n]) : r
				}),
				i = (e, {
					subredditId: t
				}) => {
					const n = Object(o.d)(t);
					return !!e.pages.modHub.muted.api.pending[n]
				},
				c = e => !!e.pages.modHub.muted.search.api.pending,
				d = e => e.pages.modHub.muted.search.result,
				l = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				u = (e, {
					subredditId: t
				}) => e.pages.modHub.muted.loadMore[t]
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				o = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, s;
					const o = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						r = null === (n = null == o ? void 0 : o.rows) || void 0 === n ? void 0 : n.byId;
					return r && (null === (s = r[t]) || void 0 === s ? void 0 : s.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				o = n("./src/reddit/actions/notifications/utils.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const a = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				i = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(r.a)(i, e => !(!e || !e.hasNextPage)),
				d = Object(r.a)(i, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(r.a)(l, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(r.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(r.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				h = Object(r.a)(o.a, e => e === s.c.NotificationsSupported)
		},
		"./src/reddit/selectors/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/safeJSONParse/index.ts"),
				r = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = e => {
					const t = Object(a.q)(e);
					return Boolean((null == t ? void 0 : t[r.v]) && Object(o.a)(t[r.v]))
				},
				d = Object(s.a)(i.K, i.J, c, (e, t, n) => (e || t) && n),
				l = e => {
					const {
						genderUpdateState: t
					} = e.onboardingModal;
					if (t.success || t.failure) return t
				}
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
			const s = (e, {
					subredditId: t
				}) => {
					if (e.features.removalReasons.reasonOrder[t]) {
						return e.features.removalReasons.reasonOrder[t].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.rb, e => !(!e || !e.length));
			const c = Object(s.a)(i.z, e => !e),
				d = Object(s.a)(i.rb, e => e && e.find(e => e === r.a.Apple)),
				l = Object(s.a)(i.rb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.g].includes(e))
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
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
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"6bc40669baab"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Governance~ModListing~Reddit~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.bcf96c794f2a2a455ba9.js.map