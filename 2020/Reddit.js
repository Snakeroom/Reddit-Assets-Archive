// https://www.redditstatic.com/desktop2x/Reddit.0fc646a3091daf6e1bf2.js
// Retrieved at 7/17/2020, 2:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, s) {},
		"./assets/fonts/VCR/font.less": function(e, t, s) {},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				r = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
					return t.default = e, t
				}(s("./node_modules/@r/frames/compiled.js"));
			var o = "gtm-" + (0, a.v4)(),
				i = !1,
				c = [],
				d = function() {
					var e = document.getElementById(o);
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
					var s = d();
					s && i ? (t && r.postMessage(s.contentWindow, "data.gtm", t), r.postMessage(s.contentWindow, "event.gtm", {
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
								s = e.payload;
							return u(t, s)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					s = e.jailUrl,
					a = e.payload;
				if (t)
					if (s) {
						r.listen("gtm"), r.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, r.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = o, c.name = JSON.stringify(n({
							referrer: document.referrer
						}, l(), a)), c.src = s + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, s) {
			var n = s("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				r = a;
			r.v1 = n, r.v4 = a, e.exports = r
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var s = [], n = 0; n < 256; ++n) s[n] = (n + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var n = t || 0,
					a = s;
				return a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, s) {
			(function(t) {
				var s, n = t.crypto || t.msCrypto;
				if (n && n.getRandomValues) {
					var a = new Uint8Array(16);
					s = function() {
						return n.getRandomValues(a), a
					}
				}
				if (!s) {
					var r = new Array(16);
					s = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
				e.exports = s
			}).call(this, s("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, s) {
			var n = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				r = n(),
				o = [1 | r[0], r[1], r[2], r[3], r[4], r[5]],
				i = 16383 & (r[6] << 8 | r[7]),
				c = 0,
				d = 0;
			e.exports = function(e, t, s) {
				var n = t && s || 0,
					r = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = u - c + (m - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, d = m, i = l;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[n++] = b >>> 24 & 255, r[n++] = b >>> 16 & 255, r[n++] = b >>> 8 & 255, r[n++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[n++] = h >>> 8 & 255, r[n++] = 255 & h, r[n++] = h >>> 24 & 15 | 16, r[n++] = h >>> 16 & 255, r[n++] = l >>> 8 | 128, r[n++] = 255 & l;
				for (var g = e.node || o, f = 0; f < 6; ++f) r[n + f] = g[f];
				return t || a(r)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, s) {
			var n = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				a = s("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, s) {
				var r = t && s || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var o = (e = e || {}).random || (e.rng || n)();
				if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[r + i] = o[i];
				return t || a(o)
			}
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = {},
					s = 1,
					n = e;
				return {
					getState: function() {
						return n
					},
					setState: function(e) {
						n = e;
						for (var s = Object.keys(t), a = 0, r = s.length; a < r; a++) t[s[a]] && t[s[a]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var n = s;
						return t[n] = e, s += 1, n
					},
					unsubscribe: function(e) {
						t[e] = void 0
					}
				}
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, s) {
			"use strict";

			function n(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			s.d(t, "a", (function() {
				return u
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./node_modules/history/esm/history.js");
			s("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var s, n, a = {},
					r = Object.keys(e);
				for (n = 0; n < r.length; n++) s = r[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
				return a
			}
			var l = s("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			r.a.Component;
			r.a.Component;
			var u = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				n(t, e);
				var s = t.prototype;
				return s.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (s) {
						throw e.preventDefault(), s
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, s.render = function() {
					var e = this,
						t = this.props,
						s = t.innerRef,
						n = (t.replace, t.to),
						a = d(t, ["innerRef", "replace", "to"]);
					return r.a.createElement(o.g.Consumer, null, (function(t) {
						t || Object(l.default)(!1);
						var o = "string" == typeof n ? Object(i.c)(n, null, null, t.location) : n,
							d = o ? t.history.createHref(o) : "";
						return r.a.createElement("a", c({}, a, {
							onClick: function(s) {
								return e.handleClick(s, t.history)
							},
							href: d,
							ref: s
						}))
					}))
				}, t
			}(r.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function a() {}

			function r() {}
			r.resetWarningCache = a, e.exports = function() {
				function e(e, t, s, a, r, o) {
					if (o !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: r,
					resetWarningCache: a
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/chat/helpers/dom.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				a = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c1e1ff9daa2c"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"82e29e42c13f"}')
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			const a = 120 * n.ab;
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
						return !e || e <= a
					}
				})()), e
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "f", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t, s) => {
					const o = t === a.Bb.SUBREDDIT && n.a.dfpRefreshSlotTestSubreddits.includes(e) && s === a.c.BELOW_THE_FOLD ? [n.a.dfpRefreshSlotId] : [n.a.dfpSlotPrefix];
					return t !== a.Bb.PROFILE && (Object(r.a)(e) ? o.push("frontpage") : o.push("r.".concat(e))), t === a.Bb.INDEX ? o.push(a.Bb.LISTING) : t && o.push(t), o.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const s in t.properties) e.setTargeting(s, t.properties[s])
				},
				l = (e, t) => {
					p(e);
					const {
						id: s,
						slot: n,
						sizes: a
					} = t, r = window.googletag = window.googletag || {};
					return r.cmd = r.cmd || [], new Promise(c => {
						r.cmd.push(() => {
							o.a.write(() => {
								const o = r.defineSlot(n, a, s);
								if (!o) return c();
								o.addService(r.pubads()), i.set(e, o), o.setCollapseEmptyDiv(!0), d(o, t), r.display(s), c()
							})
						})
					})
				},
				u = (e, t) => {
					const s = i.get(e);
					if (!s) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						Object.keys(t).forEach(e => s.setTargeting(e, t[e]))
					})
				},
				m = (e, t) => {
					const s = i.get(e);
					if (!s) return;
					d(s, t);
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && n.cmd.push(() => {
							n.pubads().refresh([s])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						n.cmd.push(() => {
							window.apstag.setDisplayBids(), n.pubads().refresh([s])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						o.a.write(() => {
							s.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const s = document.getElementsByTagName("script")[0];
						s && s.parentNode && s.parentNode.insertBefore(t, s)
					};
					if (document.head && (() => {
							const {
								relList: e
							} = document.createElement("link");
							if (!e || !e.supports) return !1;
							try {
								return e.supports("preload")
							} catch (t) {
								return !1
							}
						})()) {
						const s = document.createElement("link");
						s.href = e, s.rel = "preload", s.as = "script", s.onload = t, document.head.insertBefore(s, document.head.firstChild)
					} else t()
				},
				h = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = function() {
						for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						window.apstag._Q.push(["i", t])
					}, window.apstag.fetchBids = function() {
						for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						window.apstag._Q.push(["f", t])
					}, b("//c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
						pubID: "3379",
						adServer: "googletag",
						bidTimeout: 2e3,
						params: {
							aps_privacy: e.limitDataProcessing ? "1YY" : "1--"
						}
					})), window.aax || (window.aax = {
						pubId: "AAX763KC6",
						ver: 1.2,
						initTime: (new Date).getTime(),
						hst: location.hostname,
						deliverExchangeDemand: () => {},
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b("//c.aaxads.com/aax.js?pub=".concat(window.aax.pubId, "&hst=").concat(window.aax.hst, "&ver=").concat(window.aax.ver)))
				}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, s) {
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
		"./src/reddit/actions/alpha.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				r = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			var i = s("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: l.db.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, s, n) => {
				let {
					apiContext: l
				} = n;
				(await
					function(e) {
						return Object(a.a)(Object(r.a)(e, [o.a]), {
							endpoint: "".concat(e.apiUrl, "/api/leave_redesign_beta"),
							method: "post",
							type: "json"
						})
					}(l())).ok ? (Object(i.b)(), await m(l(), !0), e && window.location.reload()) : (m(l(), !1), t(Object(c.e)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, s) => {
				let {
					apiContext: c
				} = s;
				Object(i.a)(),
					function(e) {
						Object(a.a)(Object(r.a)(e, [o.a]), {
							endpoint: "".concat(e.apiUrl, "/api/join_redesign_beta"),
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, s = "".concat(n.a.redditUrl).concat(e).concat(t);
							window.location.replace(s)
						})
					}(c())
			}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
				})
			}
			var c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(c.a)(d.a),
				u = Object(c.a)(d.b),
				m = Object(c.a)(d.c),
				p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const r = s();
						if (!r.economics.me.fetched || e && !r.economics.me.data.specialMemberships) {
							const s = await i(a(), e);
							if (s.ok) {
								const n = s.body;
								e && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
							}
						}
					}
				},
				b = () => async (e, t) => {
					const s = t(),
						r = s.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(u());
						const t = "https://".concat(r.pointsDocsBaseUrl, "v1.json?web"),
							s = await Object(a.b)({
								endpoint: t,
								method: n.db.GET
							});
						s.ok && s.body && e(m(s.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const r = Object(n.a)(a.a),
				o = Object(n.a)(a.e),
				i = Object(n.a)(a.b),
				c = Object(n.a)(a.c),
				d = Object(n.a)(a.d)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "c", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forOwn.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/governance/errorToast.ts"),
				o = s("./src/reddit/endpoints/economics/emojis.ts"),
				i = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, s) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: "".concat(l.a.metaUrl, "/products/").concat(t, "?owners=").concat(s) + "&types=emotes_pack,giphy"
				})
			}
			var p = s("./src/reddit/models/Badge/index.ts"),
				b = s("./src/reddit/models/Badge/managementPage.ts"),
				h = s("./src/reddit/models/Product/index.ts"),
				g = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				v = s("./src/reddit/selectors/products.ts"),
				C = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function O(e) {
				return !!e && "removeBadge" === e.type
			}

			function P(e) {
				if (!O(e)) return e
			}
			const x = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				if (!t().user.account) return;
				await e(Object(C.b)(!0));
				const a = t().economics.me.data.specialMemberships || {},
					r = Object.keys(a);
				if (r.length) {
					const t = await Object(i.d)(n(), r);
					t.ok && e(Object(y.f)(t.body))
				}
			}, E = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				const o = n().user.account,
					i = n().economics.subredditPremium[e],
					d = !i || i.status !== g.a.Fetched || t;
				if (o && d) {
					const t = await Object(c.a)(r(), e, o.id);
					s(Object(y.h)(t))
				}
			}, S = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.f)(o, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(y.a)(Object.assign({}, e, {
						badge: P(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), O(e.badge) && s ? n = await Object(d.a)(a(), e.subredditId, s.id, !1) : O(e.badge) || (n = await Object(d.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(y.a)(Object.assign({}, e, {
						badge: s,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, n.error))
				}
			}, j = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(E(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(S({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(y.d)(b.c.MyBadges)))
				}
			}, _ = e => async (t, s, n) => {
				let {
					apiContext: i
				} = n;
				const c = s().user.account,
					d = !s().economics.emotes[e],
					l = !s().economics.gifs[e];
				if (c && (d || l)) {
					const [s, n] = await Promise.all([Object(o.b)(i(), e), m(i(), e, c.id)]);
					if (!n.ok) return void Object(r.a)(t, n.error);
					const d = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					a()(n.body, e => {
						e.type === h.a.EmotesPack ? d.emotes.push(e) : e.type === h.a.Giphy && d.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: d
					}))
				}
			}, w = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: o
				} = r;
				if (await n(E(e, !0)), s && t) {
					const s = a(),
						r = Object(f.f)(s, e),
						o = Object(v.a)(s, t);
					if (!r[Object(b.d)(o.placement)] && o) {
						const t = Object(f.m)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(S({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return h
			}));
			var n = s("./node_modules/lodash/once.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/notificationBanner.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				c = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				d = s("./src/reddit/components/Settings/modalIds.ts"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/emailCollection.ts");
			const m = a()(l.c),
				p = () => async (e, t) => {
					const s = t();
					m(), Object(u.a)(s) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(o.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const s = t();
					Object(u.a)(s) && (Object(l.b)(), e(Object(o.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(d.g))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/models/EmailSettings/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				switch (e) {
					case d.a.Success:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: n.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: n.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.e)({
							kind: l.b.Error,
							text: n.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.e)({
							kind: l.b.Error,
							text: n.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, s, n) => {
				let {
					apiContext: c
				} = n;
				const l = await ((e, t) => Object(r.a)(Object(o.a)(e, [i.a]), {
					method: a.db.POST,
					endpoint: "".concat(e.apiUrl, "/api/v1/verify_email/").concat(t),
					data: {}
				}))(c(), e);
				if (l.ok && l.body && l.body.success) return d.a.Success;
				switch (l.body.reason) {
					case d.a.AlreadyVerified:
						return d.a.AlreadyVerified;
					case d.a.WrongUser:
						return d.a.WrongUser;
					default:
						return d.a.Error
				}
			}
		},
		"./src/reddit/actions/notifications/loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/loadWithRetries/index.ts");
			t.a = () => Object(n.a)(() => s.e("PushNotifications").then(s.bind(null, "./src/reddit/actions/notifications/index.ts")))
		},
		"./src/reddit/actions/notifications/preferences.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/notificationPrefs.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/actions/notifications/constants.ts");
			const b = Object(a.a)(p.d),
				h = Object(a.a)(p.c),
				g = Object(a.a)(p.b),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = t();
					if (!Object(m.i)(a)) return;
					const r = Object(u.b)(a),
						l = Object(u.a)(a);
					if (r || l) return;
					e(b());
					const p = await (e => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.db.GET
					}))(n());
					if (p.ok) {
						const t = (e => ({
							broadcastFollower: !!e.broadcast_follower,
							broadcastRecommendation: !!e.broadcast_recommendation,
							chatMessages: !!e.chat_message,
							chatRequests: !!e.chat_request,
							commentReplies: !!e.comment_reply,
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							postFlairAdded: !!e.post_flair_added,
							postReplies: !!e.post_reply,
							privateMessages: !!e.private_message,
							threadReplies: !!e.thread_replies,
							topLevelComment: !!e.top_level_comment,
							trendingPosts: !!e.lifecycle_post_suggestions,
							upvotedComments: !!e.upvote_comment,
							upvotedPosts: !!e.upvote_post,
							userFlairAdded: !!e.user_flair_added,
							usernameMentions: !!e.username_mention,
							userNewFollowers: !!e.user_new_follower
						}))(p.body);
						e(h({
							preferences: t
						}))
					} else e(g(p.error))
				}, v = Object(a.a)(p.k), C = Object(a.a)(p.j), y = Object(a.a)(p.i), O = e => async (t, s, a) => {
					let {
						apiContext: p
					} = a;
					const b = s();
					if (!Object(m.i)(b)) return;
					if (Object(u.e)(b)) return;
					const h = Object(u.d)(b);
					t(v({
						preferences: e
					}));
					const g = await ((e, t) => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.db.POST,
						data: {
							preferences: JSON.stringify({
								broadcast_follower: t.broadcastFollower,
								broadcast_recommendation: t.broadcastRecommendation,
								chat_message: t.chatMessages,
								chat_request: t.chatRequests,
								post_flair_added: t.postFlairAdded,
								comment_reply: t.commentReplies,
								lifecycle_post_suggestions: t.trendingPosts,
								live_event: t.liveEvent,
								post_reply: t.postReplies,
								private_message: t.privateMessages,
								subreddit_recommendation: t.communityRecommendations,
								thread_replies: t.threadReplies,
								top_level_comment: t.topLevelComment,
								username_mention: t.usernameMentions,
								upvote_comment: t.upvotedComments,
								upvote_post: t.upvotedPosts,
								user_new_follower: t.userNewFollowers,
								user_flair_added: t.userFlairAdded
							})
						}
					}))(p(), e);
					g.ok ? (t(C()), t(Object(r.e)({
						kind: l.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "UBoVR"
						})
					}))) : t(y({
						error: g.error,
						preferences: h
					}))
				}
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/actions/notifications/constants.ts"),
				a = s("./src/reddit/actions/notifications/utils.ts");
			const r = {
					isEnabled: !1,
					isSubscriptionActive: !1,
					permission: n.a.Default
				},
				o = {
					denied: n.a.Denied,
					granted: n.a.Granted
				};
			const i = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = n.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(a.a)(e) === n.f.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = o[Notification.permission] || n.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === n.a.Granted,
								isSubscriptionActive: this.isSubscriptionActive,
								permission: this.permission
							}
						}, this.subscribe = e => {
							this.listeners.has(e) || this.listeners.add(e), this.isReady && e(this.getCurrentState())
						}, this.unsubscribe = e => {
							this.listeners.delete(e)
						}
					}
					async subscribeToPermissionsChange() {
						if (!window.navigator.permissions || !window.navigator.permissions.query) return;
						const e = await window.navigator.permissions.query({
							name: "notifications"
						});
						this.updatePermission(), e.onchange = () => {
							this.updatePermission(), this.notifyAll()
						}
					}
					notifyAll() {
						this.isReady && this.listeners.forEach(e => {
							e(this.getCurrentState())
						})
					}
				},
				c = i.subscribe,
				d = i.unsubscribe,
				l = i.initialize,
				u = i.recalculate
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/localStorageAvailable/index.ts"),
				a = s("./src/reddit/actions/notifications/constants.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = e => r.d.pushNotificationsBrowserSupported(e) ? Object(n.a)() ? window.Notification && window.ServiceWorker && window.PushManager && window.navigator.serviceWorker ? a.f.NotificationsSupported : a.f.NotAllRequiredAPIsSupported : a.f.LocalStorageUnavailable : a.f.BrowserUnsupported
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				a = s("./src/reddit/actions/users.ts"),
				r = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.H)(t()) || await e(Object(a.r)()), await e(Object(n.b)()).then(() => {
					if (t().economics.me.data) return e(Object(n.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/economics/helpers/async.ts"),
				r = s("./src/reddit/actions/pages/subreddit.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const s = t().platform.currentPage;
				if (s && s.routeMatch && s.routeMatch.match) {
					const d = (s.routeMatch.match.params || {}).subredditName;
					if (d) {
						const s = [],
							l = t();
						Object(c.H)(l) || s.push(e(Object(o.r)()));
						const u = Object(n.a)(d, null);
						s.push(e(Object(r.i)(u, d, {}))), await Promise.all(s);
						const m = Object(i.F)(t(), d);
						await e(Object(a.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/extractQueryParams/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				c = s("./src/lib/pageTitle.ts"),
				d = s("./src/reddit/actions/chat/userSettings.ts"),
				l = s("./src/reddit/endpoints/economics/paymentSystems.ts"),
				u = s("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				h = s("./src/reddit/actions/notifications/preferences.ts"),
				g = s("./src/reddit/actions/platform.ts"),
				f = s("./src/reddit/actions/preferences.ts"),
				v = s("./src/reddit/actions/profile/index.ts"),
				C = s("./src/reddit/actions/subredditSettings.ts"),
				y = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/actions/users.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/helpers/externalAccount/index.tsx"),
				E = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				S = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				j = s("./src/reddit/selectors/externalAccount.ts"),
				_ = s("./src/reddit/selectors/user.ts");
			const w = e => async (t, s) => {
				await t(Object(O.r)());
				const w = [t(Object(f.z)(!0)), t(Object(m.a)())];
				s().economics.paymentSystems.status === S.a.NotFetched && w.push(t((() => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					e(Object(u.d)());
					const a = await Object(l.d)(n());
					a.ok ? e(Object(u.c)(a.body)) : e(Object(u.b)({
						error: a.error
					}))
				})())), await Promise.all(w); {
					const e = s();
					if (!Object(_.H)(e)) return Object(E.a)(t, e)
				}
				const {
					page: k = r.Ob.Account
				} = e.params;
				if (k === r.Ob.Gold) return void t(Object(a.c)("/settings/premium"));
				const M = [];
				k === r.Ob.Profile && (M.push(t(Object(v.a)())), M.push(t(Object(C.e)()))), k === r.Ob.Account && M.push(t(Object(p.o)())), k === r.Ob.Notifications && M.push(t(Object(h.a)())), k !== r.Ob.Privacy && k !== r.Ob.Messaging || M.push(t(Object(d.b)())), k === r.Ob.Premium && (M.push(t(Object(v.a)())), M.push(t(Object(b.e)(!0)))), await Promise.all(M); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(P.d);
					if (d && (t(Object(a.c)(Object(i.a)(c, [P.d]))), Object(j.a)(e))) {
						const e = n.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(y.e)({
							text: e
						})), Object(x.b)(d)
					}
				}
				t(Object(g.l)({
					title: Object(c.g)()
				}))
			}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/pageTitle.ts"),
				a = s("./src/reddit/actions/platform.ts"),
				r = s("./src/reddit/actions/tags/index.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = () => async (e, t) => {
				e(a.l({
					title: Object(n.i)()
				})), await e(Object(o.r)());
				const s = t();
				Object(c.H)(s) ? await e(Object(r.f)()) : Object(i.a)(e, s)
			}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/pageTitle.ts"),
				a = s("./src/reddit/actions/category.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/platform.ts"),
				i = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				c = s("./src/reddit/actions/users.ts"),
				d = s("./src/reddit/constants/listings.ts"),
				l = s("./src/reddit/constants/subredditLeaderboard.ts"),
				u = s("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = s("./src/reddit/models/GoodContent/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/selectors/subredditLeaderboard.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => t && e === l.k,
				f = e => async (t, s) => {
					t(Object(r.k)({
						actionSource: r.a.SubredditLeaderboard,
						redirectUrl: d.c[d.b.SubredditLeaderboard]
					})), t(o.l({
						title: Object(n.j)()
					}));
					const a = e.params && e.params.categoryName,
						i = a && Object(u.b)(a);
					await t(v(i))
				}, v = e => async (t, s) => {
					await t(Object(a.h)());
					const n = s(),
						r = Object(h.I)(n);
					if (Object(b.a)(n, e)) return;
					const o = e && Object(p.f)(n, {
							categoryName: e
						}),
						d = e === l.i ? l.h : o && o.id || l.d,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(d, g(e, r)),
						f = Object(b.d)(d, e);
					await Promise.all([t(Object(i.a)(u, f)), t(Object(c.r)())])
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/shortcuts.ts"),
				c = s("./src/reddit/helpers/trackers/lightbox.ts"),
				d = s("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = s("./src/reddit/selectors/gild.ts"),
				u = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = s("./src/reddit/actions/shortcuts/utils.ts");
			const p = [u.r, u.m, e => !!Object(l.d)(e)],
				b = (e, t) => async (s, l, u) => {
					let {
						apiContext: b
					} = u;
					const h = l();
					for (const e of p)
						if (e(h)) return;
					const g = document.activeElement,
						f = h.shortcuts.activeCommentId,
						v = Object(m.c)(h);
					if (g && "true" === g.contentEditable && f && v) s(a.O({
						parentCommentId: f,
						commentsPageKey: v
					})), Object(m.a)(f);
					else if (h.activeModalId) Object(m.b)(i.b), s(Object(r.i)(h.activeModalId));
					else if (h.toaster[0]) Object(m.b)(i.b), s(Object(o.f)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(m.b)(i.b), s(Object(n.b)(e)))
					}
					const {
						activePostId: C
					} = h.shortcuts;
					e(t && C ? c.b(C, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				r = s("./src/reddit/constants/subredditLeaderboard.ts"),
				o = s("./src/reddit/endpoints/subreddit/local.ts"),
				i = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const d = Object(n.a)(a.k),
				l = Object(n.a)(a.j),
				u = Object(n.a)(a.i),
				m = Object(n.a)(a.a),
				p = Object(n.a)(a.b),
				b = Object(n.a)(a.c),
				h = (e, t) => async (s, n, a) => {
					let {
						gqlContext: h
					} = a;
					s(d());
					const g = t === r.h ? async function() {
						const t = await Object(o.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return s(u({
								error: e
							})), null
						}
						const n = t.body,
							a = n && n.data && n.data.nearbySubreddits;
						return Object(c.a)(a)
					}: async function() {
						const t = await Object(i.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return void s(u({
								error: e
							}))
						}
						const n = t.body,
							a = n && n.data && n.data.subredditLeaderboard;
						return Object(c.b)(a)
					}, f = await g();
					if (!f) return;
					const {
						pageInfo: v,
						rankings: C,
						subreddits: y
					} = f;
					s(m({
						subreddits: y
					})), s(p({
						categoryRankingsKey: t,
						rankings: C
					})), s(b({
						categoryRankingsKey: t,
						pageInfo: v
					})), s(l())
				}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended
				}),
				a = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, s) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
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
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Bu
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/isEqual.js"),
				r = s.n(a),
				o = s("./node_modules/lodash/omit.js"),
				i = s.n(o),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router/esm/react-router.js"),
				b = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = s("./src/lib/fastdom/index.ts"),
				O = s("./src/lib/FocusTrap/index.ts"),
				P = s("./src/lib/isEqualWithoutKey/index.ts"),
				x = s("./src/lib/isSimpleClick/index.ts"),
				E = s("./src/reddit/actions/header.ts"),
				S = s("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				j = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				_ = s("./node_modules/polished/dist/polished.es.js"),
				w = s("./node_modules/react-motion/lib/react-motion.js"),
				k = s("./src/lib/lessComponent.tsx"),
				M = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				I = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/preferences.ts"),
				R = s("./src/lib/makeActionCreator/index.ts"),
				L = s("./src/reddit/actions/sso/constants.ts");
			const A = Object(R.a)(L.a),
				F = Object(R.a)(L.b);
			var D = s("./src/reddit/actions/toaster.ts"),
				G = s("./src/reddit/constants/accountManager.ts"),
				U = s("./src/reddit/constants/history.ts"),
				B = s("./src/reddit/constants/listings.ts"),
				H = s("./src/reddit/constants/modals.ts"),
				q = s("./src/reddit/constants/parameters.ts");
			const W = () => M.a.redditUrl;
			var V = s("./src/reddit/helpers/history/index.ts"),
				Q = s("./src/reddit/icons/svgs/Close/index.tsx"),
				z = s("./src/reddit/models/Sso/index.ts"),
				Z = s("./src/reddit/models/Toast/index.ts"),
				K = s("./src/reddit/selectors/accountManager.ts"),
				Y = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				X = s("./src/reddit/selectors/telemetry.ts"),
				J = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				$ = s.n(J);
			const ee = k.a.iframe("IFrame", $.a),
				te = k.a.button("CloseButton", $.a),
				se = k.a.wrapped(Q.a, "Close", $.a),
				ne = Object(h.c)({
					accountManagerSrc: K.c,
					actionSource: K.a,
					frontpageSignupVariant: Y.a,
					redirectUrl: K.b
				}),
				ae = Object(m.b)(ne, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign({}, Object(X.defaults)(n()), {
									actionSource: s
								}),
								type: "eventData"
							}, W())
						})
					},
					onTwoFactorChanged: () => e(Object(T.z)(!1)),
					onSSOLinkSuccess: (t, s, n) => {
						e(A({
							linkedIdentity: s
						})), e(Object(N.g)(n)), e(Object(D.e)(Object(D.d)(t, Z.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, s, n) => {
						e(F({
							linkedIdentity: s
						})), e(Object(N.g)(n)), e(Object(D.e)(Object(D.d)(t, Z.b.SuccessCommunity)))
					},
					showErrorGoogleOneTapToast: t => {
						e(Object(D.e)(Object(D.d)(t, Z.b.Error)))
					}
				})),
				re = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === G.a.ChangePassword || t.type === G.a.Close || t.type === G.a.CreateAccount || t.type === G.a.GoogleOneTapDisplayed || t.type === G.a.GoogleOneTapFlowFailed || t.type === G.a.GoogleOneTapSkipped || t.type === G.a.Login || t.type === G.a.Register || t.type === G.a.Resize || t.type === G.a.ShowSubscriptions || t.type === G.a.SSOLinkFail || t.type === G.a.SSOLinkSuccess || t.type === G.a.SSOUnlinkFail || t.type === G.a.SSOUnlinkSuccess || t.type === G.a.Subscribe || t.type === G.a.TwoFactorChanged) && s === M.a.accountManagerOrigin
				};
			class oe extends u.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = u.a.createRef(), this.isAccountCreated = !1, this.trackResizing = !0, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === z.a.Apple ? H.a.LINK_APPLE_SSO : H.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(n.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === z.a.Apple ? H.a.UNLINK_APPLE_SSO : H.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(n.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && re(e))
							if (t.type === G.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === G.a.Close) this.close();
						else if (t.type === G.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === G.a.Login) this.onLogIn();
						else if (t.type === G.a.ChangePassword) this.onChangePassword();
						else if (t.type === G.a.Resize) {
							if (t.payload && this.iframeRef.current && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else if (t.type === G.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === G.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === G.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === G.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === G.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === G.a.GoogleOneTapDisplayed ? this.iframeRef.current.style.visibility = "visible" : t.type === G.a.GoogleOneTapFlowFailed ? this.onGoogleOneTapFlowFailed() : t.type === G.a.GoogleOneTapSkipped ? this.close() : t.type === G.a.ShowSubscriptions ? this.onShowSubscriptions(this.iframeRef.current) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(V.a)(U.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.href;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? B.c[B.b.Home] : B.c[B.b.Popular]
						}
						this.redirectTo(s)
					}, this.onShowSubscriptions = e => {
						this.trackResizing = !1, e.style.removeProperty("height"), e.style.removeProperty("width"), this.props.restoreIFrameStyles && this.props.restoreIFrameStyles()
					}, this.onGoogleOneTapFlowFailed = () => {
						this.close(), this.props.showErrorGoogleOneTapToast(n.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}))
					}, this.redirectTo = e => {
						window.location.replace(Object(I.a)(e, {
							[q.o]: "true"
						}))
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}, this.props.exposeIFrameElement && this.props.exposeIFrameElement(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
				}
				render() {
					const {
						accountManagerSrc: e,
						className: t,
						showCloseButton: s
					} = this.props;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ee, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && u.a.createElement(te, {
						onClick: this.close
					}, u.a.createElement(se, null)))
				}
			}
			var ie = ae(oe),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx");
			const de = [],
				le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de;
					return t => Object.assign({}, X.defaults(t), {
						action: "click",
						noun: "exit",
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: "onboarding"
					})
				};
			var ue = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				me = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				pe = s("./src/reddit/components/Carousel/index.tsx"),
				be = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				he = s.n(be);
			const ge = k.a.div("Container", he.a),
				fe = k.a.wrapped(pe.b, "Carousel", he.a),
				ve = k.a.div("Phone", he.a),
				Ce = k.a.img("Frame", he.a),
				ye = "".concat(M.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				Oe = "".concat(M.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				Pe = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				xe = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var Ee = e => {
					const {
						className: t
					} = e;
					return u.a.createElement(ge, {
						className: t
					}, u.a.createElement(ve, {
						className: he.a.android
					}, u.a.createElement(fe, {
						animationType: pe.a.Fade,
						className: he.a.android,
						delay: 2500,
						items: Pe,
						itemTime: 5e3,
						itemWidth: 240
					}), u.a.createElement(Ce, {
						src: ye
					})), u.a.createElement(ve, {
						className: he.a.iphone
					}, u.a.createElement(fe, {
						animationType: pe.a.Fade,
						className: he.a.iphone,
						items: xe,
						itemTime: 5e3,
						itemWidth: 232
					}), u.a.createElement(Ce, {
						src: Oe
					})))
				},
				Se = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				je = s.n(Se);
			const _e = k.a.div("Container", je.a),
				we = k.a.span("Disclaimer", je.a),
				ke = k.a.a("Link", je.a);
			var Me = e => u.a.createElement(_e, {
					className: e.className
				}, u.a.createElement(ke, {
					href: "https://about.reddit.com"
				}, n.fbt._("about", null, {
					hk: "4n6gdA"
				})), u.a.createElement(ke, {
					href: "https://www.redditinc.com/advertising"
				}, n.fbt._("advertise", null, {
					hk: "3M40BX"
				})), u.a.createElement(ke, {
					href: "http://www.redditblog.com/"
				}, n.fbt._("blog", null, {
					hk: "iEUEu"
				})), u.a.createElement(ke, {
					href: "https://about.reddit.com/careers/"
				}, n.fbt._("careers", null, {
					hk: "1nRiZW"
				})), u.a.createElement(ke, {
					href: "https://www.reddithelp.com"
				}, n.fbt._("help", null, {
					hk: "3CJ8k2"
				})), u.a.createElement(ke, {
					href: "https://about.reddit.com/press/"
				}, n.fbt._("press", null, {
					hk: "x8wb0"
				})), u.a.createElement(ke, {
					href: "https://www.reddit.com/mobile/download"
				}, n.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), u.a.createElement(ke, {
					href: "https://www.reddit.com/coins"
				}, n.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), u.a.createElement(ke, {
					href: "http://redditgifts.com/"
				}, n.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), u.a.createElement(ke, {
					href: "https://www.reddit.com/premium"
				}, n.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), u.a.createElement(ke, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, n.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), u.a.createElement(ke, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, n.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), u.a.createElement(we, null, n.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Ie = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Ne = s.n(Ie);
			const Te = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Re = k.a.div("Container", Ne.a),
				Le = k.a.wrapped(ie, "IFrame", Ne.a),
				Ae = k.a.wrapped(Ee, "Images", Ne.a),
				Fe = k.a.wrapped(Me, "Links", Ne.a),
				De = k.a.div("MainContent", Ne.a),
				Ge = k.a.div("MainContentColumn", Ne.a),
				Ue = k.a.button("NotReady", Ne.a),
				Be = k.a.span("NotReadyText", Ne.a),
				He = k.a.wrapped(ue.a, "NotReadyIcon", Ne.a),
				qe = Object(v.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: a,
						onCloseClick: r,
						onVisibilityChange: o
					} = e, i = Object(me.a)(e).bodyText;
					return u.a.createElement(j.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, u.a.createElement(Re, {
						className: t,
						innerRef: s
					}, u.a.createElement(De, null, u.a.createElement(Ge, null, u.a.createElement(Ae, null, "Images Placeholder")), u.a.createElement(Ge, null, u.a.createElement(Le, {
						className: Object(g.a)({
							[Ne.a.fields]: Object(Y.b)(a)
						}),
						path: G.b.Register,
						uiMode: G.c.Embed
					}))), u.a.createElement(Ue, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(_.j)(.8, i)
						}
					}, u.a.createElement(Be, null, n.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), u.a.createElement(He, null)), u.a.createElement(Fe, null)))
				});
			class We extends u.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ve extends u.a.Component {
				constructor() {
					super(...arguments), this.containerRef = u.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(le()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return u.a.createElement(We, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: s
					} = this.state, n = s && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(qe, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), u.a.createElement(w.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(w.spring)(n, Te)
						}
					}, this.renderScroller))
				}
			}
			var Qe = Object(ce.c)(Ve),
				ze = s("./node_modules/js-cookie/src/js.cookie.js"),
				Ze = s.n(ze),
				Ke = s("./src/lib/localStorageAvailable/index.ts"),
				Ye = s("./src/higherOrderComponents/makeAsync.tsx"),
				Xe = Object(Ye.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Je = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				$e = s("./src/higherOrderComponents/asModal/index.tsx"),
				et = s("./src/reddit/controls/Button/index.tsx"),
				tt = s("./src/reddit/selectors/activeModalId.ts"),
				st = s("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				nt = s.n(st);
			const {
				fbt: at
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rt = k.a.button("CloseButton", nt.a), ot = k.a.wrapped(Q.a, "Close", nt.a), it = k.a.div("Container", nt.a), ct = k.a.p("Description", nt.a), dt = k.a.div("Footer", nt.a), lt = k.a.h3("Heading", nt.a), ut = k.a.img("SnooImage", nt.a), mt = k.a.div("Wrapper", nt.a), pt = Object(h.c)({
				activeModalId: tt.a
			});
			class bt extends u.a.Component {
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
					return u.a.createElement(mt, null, u.a.createElement(it, null, u.a.createElement(lt, null, at._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), u.a.createElement(ct, null, at._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), u.a.createElement(ut, {
						src: "".concat(M.a.assetPath, "/img/magnifying-glass-snoo.png")
					})), u.a.createElement(dt, null, u.a.createElement(et.f, {
						onClick: this.onCloseButtonClick
					}, at._("Sounds good", null, {
						hk: "1OMLn5"
					}))), u.a.createElement(rt, {
						onClick: this.onCloseButtonClick
					}, u.a.createElement(ot, null)))
				}
			}
			var ht = Object(m.b)(pt, e => ({
				modalToggled: t => e(Object(N.i)(t))
			}))(Object($e.a)(Object(ce.c)(bt)));
			var gt = Object(Ye.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				ft = s("./src/lib/loadWithRetries/index.ts");
			const vt = () => null;
			var Ct = Object(Ye.a)({
					ErrorComponent: vt,
					getComponent: () => Object(ft.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: vt
				}),
				yt = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Ot = Object(Ye.a)({
				getComponent: () => Object(ft.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Pt = () => null;
			var xt = Object(Ye.a)({
					ErrorComponent: Pt,
					getComponent: () => Object(ft.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Pt
				}),
				Et = s("./src/reddit/actions/structuredStyles/index.ts"),
				St = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				jt = s("./src/reddit/controls/TextButton/index.tsx"),
				_t = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: wt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), kt = Object(m.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(N.i)(H.a.BLADE_NIGHTMODE)), e(Object(Et.f)())
					},
					openBlade: () => {
						e(Object(Et.e)(s))
					}
				}
			});
			var Mt = Object($e.a)(kt(e => u.a.createElement(St.d, null, u.a.createElement(St.h, null, u.a.createElement(_t.a, null, u.a.createElement(St.p, null, wt._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), u.a.createElement(jt.a, {
					onClick: e.closeModal
				}, u.a.createElement(St.b, null)))), u.a.createElement(St.k, null, u.a.createElement(St.n, null, wt._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), u.a.createElement(St.f, null, u.a.createElement(St.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, wt._("Cancel", null, {
					hk: "2TSLl5"
				})), u.a.createElement(St.q, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, wt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				It = s("./src/reddit/actions/authorFlair.ts"),
				Nt = s("./src/reddit/actions/userFlair.ts"),
				Tt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Rt = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Lt = s("./src/reddit/components/FlairPreview/index.tsx"),
				At = s("./src/reddit/components/FlairSearch/index.tsx"),
				Ft = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Dt = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Gt = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ut = s("./src/reddit/models/Flair/index.ts"),
				Bt = s("./src/reddit/models/User/index.ts"),
				Ht = s("./src/reddit/selectors/authorFlair.ts"),
				qt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Wt = s("./src/reddit/selectors/user.ts"),
				Vt = s("./src/reddit/selectors/userFlair.ts"),
				Qt = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				zt = s.n(Qt);
			const Zt = e => e.inContextAuthor && e.currentUser && Object(Bt.e)(e.currentUser) === e.inContextAuthor.username,
				Kt = e => e.authorFlair || Zt(e) && e.userFlairData.applied || null,
				Yt = k.a.wrapped(Gt.a, "Section", zt.a),
				Xt = k.a.div("CheckboxText", zt.a);
			class Jt extends u.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(X.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						const {
							props: e,
							state: t
						} = this, s = t.previewFlair ? t.previewFlair.templateId : void 0;
						e.activeFlairChanged(t.previewFlair, s, t.showFlair, e.inContextAuthor), e.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: Kt(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: s,
						permissions: n
					} = e, {
						isUserEnabled: a
					} = e.displaySettings, r = this.state.showFlair !== a, o = Kt(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Ft.b)(s, t, o);
					return !(i || c !== Ft.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: s,
						subredditId: a
					} = e, r = s.permissions.canUserChange, o = s.permissions.canUserChange, {
						templates: i,
						templateIds: c
					} = s, d = this.canSave(), l = Zt(e);
					return u.a.createElement(Rt.a, null, u.a.createElement(Tt.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), u.a.createElement(Lt.a, {
						flair: t.previewFlair,
						flairTemplateType: Ut.d.UserFlair,
						placeholderText: n.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), o && u.a.createElement(At.a, {
						flair: t.previewFlair,
						flairTemplateType: Ut.d.UserFlair,
						subredditId: a,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && u.a.createElement(Yt, null, u.a.createElement(Dt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: u.a.createElement(Xt, null, n.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), u.a.createElement("div", {
						className: zt.a.buttonsRow
					}, u.a.createElement(et.f, {
						disabled: !d,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), r && u.a.createElement(et.i, {
						className: zt.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "23i2at"
					}))))
				}
			}
			const $t = Object(m.b)(() => Object(h.c)({
				authorFlair: Ht.b,
				currentUser: Wt.i,
				inContextAuthor: Ht.c,
				isMod: (e, t) => !!Object(qt.j)(e, t),
				userFlairData: Vt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(Nt.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(It.b)({
					username: null,
					subredditId: null
				}))
			}))(Jt);
			var es = Object($e.a)(Object(ce.c)($t)),
				ts = s("./src/reddit/selectors/notificationPrefs.ts"),
				ss = s("./src/reddit/selectors/platform.ts"),
				ns = s("./src/reddit/selectors/removalReasons.ts"),
				as = s("./src/reddit/selectors/subredditModeration.ts"),
				rs = s("./src/reddit/constants/cookie.ts"),
				os = s("./src/reddit/featureFlags/index.ts"),
				is = s("./src/reddit/helpers/localStorage/index.ts"),
				cs = s("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const ds = Object(h.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: Ht.c,
				badgePurchaseModalIsOpen: Object(tt.b)(H.a.BADGE_PURCHASE),
				banContext: as.f,
				banModalIsOpen: Object(tt.b)(H.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(tt.b)(H.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(tt.b)(H.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(tt.b)(H.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				editChatroomModalIsOpen: Object(tt.b)(H.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(tt.b)(H.a.DELETE_SUBREDDIT_CHAT),
				downToChatPendingModalIsOpen: Object(tt.b)(H.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => os.d.introModal(e),
				isOverlayOpen: ss.i,
				manageChatroomModalIsOpen: Object(tt.b)(H.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(ss.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: as.C,
				muteModalIsOpen: Object(tt.b)(H.a.MUTE_USER),
				notificationsPrePromptIsOpen: ts.c,
				removalReasonContext: ns.b,
				removalReasonModalIsOpen: Object(tt.b)(H.a.ADD_REMOVAL_REASON),
				subredditId: ss.d,
				subredditPremiumPurchaseModalOpen: Object(tt.b)(H.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(tt.b)(H.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Wt.u,
				userInRedesignBeta: Wt.B,
				userIsLoggedIn: Wt.H,
				userIsMod: Wt.I,
				userIsNew: Wt.K
			});
			class ls extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ke.a)()) return; {
						const e = Ze.a.get(rs.a);
						e && Ze.a.remove(rs.a, {
							domain: M.a.cookieDomain
						});
						const t = Object(is.s)(H.a.ALPHA_CONSUMER);
						t && Object(is.H)(H.a.ALPHA_CONSUMER), (e || t) && Object(is.Z)(H.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(is.s)(H.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(is.Z)(H.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(cs.a)(), 500) : setTimeout(() => Object(cs.b)(), 500)
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: s,
						banModalIsOpen: n,
						bladeNightmodeModalIsOpen: a,
						chatroomSettingsModalIsOpen: r,
						createChatroomModalIsOpen: o,
						currentBadgePurchase: i,
						currentSubredditPremiumCorrelationId: c,
						editChatroomModalIsOpen: d,
						deleteChatroomModalIsOpen: m,
						downToChatPendingModalIsOpen: p,
						manageChatroomModalIsOpen: b,
						muteContext: h,
						muteModalIsOpen: g,
						notificationsPrePromptIsOpen: f,
						removalReasonContext: v,
						removalReasonModalIsOpen: C,
						sendEvent: y,
						subredditId: O,
						subredditPremiumPurchaseModalOpen: P,
						toggleBanModal: x,
						toggleMuteModal: E,
						toggleRemovalReasonsModal: S,
						userFlairModalIsOpen: j
					} = this.props, _ = (e, t, s) => n => () => y(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(X.comment)(a, s),
						post: s && Object(X.post)(a, s),
						screen: Object(X.screen)(a),
						subreddit: Object(X.subredditById)(a, t)
					}));
					return u.a.createElement(l.Fragment, null, n && s && u.a.createElement(Je.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: x,
						trackAddEvent: _("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: _("banned", s.subredditId, s.contextId),
						username: s.username
					}), g && h && u.a.createElement(yt.a, {
						contextId: h.contextId,
						subredditId: h.subredditId,
						toggleModal: E,
						trackAddEvent: _("muted", h.subredditId, h.contextId)("add_in_context"),
						username: h.username
					}), (o || b || m || d || r) && O && u.a.createElement(Ct, {
						subredditId: O,
						withOverlay: !0
					}), C && v && u.a.createElement(xt, {
						itemIds: v.itemIds,
						subredditId: v.subredditId,
						toggleModal: S,
						trackClick: _("removal_reasons", v.subredditId, 1 === v.itemIds.length ? v.itemIds[0] : void 0)
					}), a && O && u.a.createElement(Mt, {
						subredditId: O
					}), j && e && e.subredditId && u.a.createElement(es, {
						subredditId: e.subredditId
					}), t && i && u.a.createElement(Xe, {
						withOverlay: !0,
						productId: i
					}), f && u.a.createElement(Ot, null), P && u.a.createElement(gt, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: c
					}), p && u.a.createElement(ht, {
						withOverlay: !0
					}))
				}
			}
			var us = Object(m.b)(ds, e => ({
					markRedesignModalAsClosed: () => e(Object(N.j)()),
					toggleBanModal: () => e(Object(N.i)(H.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(N.i)(H.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(N.i)(H.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(N.i)(H.a.ADD_REMOVAL_REASON))
				}))(Object(ce.c)(ls)),
				ms = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				ps = s("./src/reddit/constants/experiments.ts"),
				bs = s("./src/reddit/contexts/PageLayer/index.tsx"),
				hs = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				gs = s("./src/reddit/selectors/responsiveSettings.ts"),
				fs = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				vs = s.n(fs);
			const Cs = k.a.div("Overlay", vs.a),
				ys = k.a.div("IframeContainer", vs.a),
				Os = Object(bs.t)(),
				Ps = Object(h.c)({
					frontpageSignupVariant: Y.a,
					isResponsiveSettingsEnabled: gs.a
				}),
				xs = {
					[G.b.ChangePassword]: H.a.CHANGE_PASSWORD_MODAL_ID,
					[G.b.Index]: H.a.LOGIN_MODAL_ID,
					[G.b.Register]: H.a.REGISTER_MODAL_ID,
					[G.b.EnableTwoFactor]: H.a.ENABLE_TWO_FACTOR,
					[G.b.DisableTwoFactor]: H.a.DISABLE_TWO_FACTOR,
					[G.b.TwoFactorBackupCodes]: H.a.TWO_FACTOR_BACKUP_CODES,
					[G.b.LinkAppleSSO]: H.a.LINK_APPLE_SSO,
					[G.b.UnlinkAppleSSO]: H.a.UNLINK_APPLE_SSO,
					[G.b.LinkGoogleSSO]: H.a.LINK_GOOGLE_SSO,
					[G.b.UnlinkGoogleSSO]: H.a.UNLINK_GOOGLE_SSO,
					[G.b.GoogleOneTap]: H.a.GOOGLE_ONE_TAP_MODAL_ID
				};
			class Es extends u.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === G.b.Register && Object(Y.f)(this.props.frontpageSignupVariant) && hs.a.throttleFeature(ps.R), this.props.sendEvent(le(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: s,
						path: n
					} = this.props, {
						isSSOLinkActionFailedModal: a,
						removeGoogleOneTapStyles: r
					} = this.state, o = Object(Y.c)(e) || Object(Y.d)(e), i = n === G.b.LinkAppleSSO || n === G.b.LinkGoogleSSO || n === G.b.UnlinkAppleSSO || n === G.b.UnlinkGoogleSSO, c = n === G.b.GoogleOneTap, d = Object(g.a)({
						[vs.a.small]: o,
						[vs.a.ssoConfirmPassword]: i,
						[vs.a.linkActionSSOFail]: a,
						[vs.a.mResponsive]: t,
						[vs.a.mGoogleOneTap]: c && !r
					}), l = Object(g.a)({
						[vs.a.mHiddenOverlay]: c && !r
					}), m = !o && !a && !t;
					return u.a.createElement(Cs, {
						className: l
					}, u.a.createElement(ys, {
						className: d
					}, u.a.createElement(ie, {
						onClose: this.closeModal,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: n,
						restoreIFrameStyles: this.restoreIFrameStyles,
						showCloseButton: m
					})))
				}
			}
			const Ss = Os(Object(m.b)(Ps, (e, t) => ({
				closeModal: t => {
					e(Object(N.g)(xs[t]))
				}
			}))(Object(ce.c)(Es)));
			Object(ms.b)(H.a.CHANGE_PASSWORD_MODAL_ID, e => u.a.createElement(Ss, {
				path: G.b.ChangePassword
			})), Object(ms.b)(H.a.LOGIN_MODAL_ID, e => u.a.createElement(Ss, {
				path: G.b.Index
			})), Object(ms.b)(H.a.ENABLE_TWO_FACTOR, e => u.a.createElement(Ss, {
				path: G.b.EnableTwoFactor
			})), Object(ms.b)(H.a.DISABLE_TWO_FACTOR, e => u.a.createElement(Ss, {
				path: G.b.DisableTwoFactor
			})), Object(ms.b)(H.a.TWO_FACTOR_BACKUP_CODES, e => u.a.createElement(Ss, {
				path: G.b.TwoFactorBackupCodes
			})), Object(ms.b)(H.a.REGISTER_MODAL_ID, e => u.a.createElement(Ss, {
				path: G.b.Register
			})), Object(ms.b)(H.a.LINK_APPLE_SSO, e => u.a.createElement(Ss, {
				path: G.b.LinkAppleSSO
			})), Object(ms.b)(H.a.LINK_GOOGLE_SSO, e => u.a.createElement(Ss, {
				path: G.b.LinkGoogleSSO
			})), Object(ms.b)(H.a.UNLINK_APPLE_SSO, e => u.a.createElement(Ss, {
				path: G.b.UnlinkAppleSSO
			})), Object(ms.b)(H.a.UNLINK_GOOGLE_SSO, e => u.a.createElement(Ss, {
				path: G.b.UnlinkGoogleSSO
			})), Object(ms.b)(H.a.GOOGLE_ONE_TAP_MODAL_ID, e => u.a.createElement(Ss, {
				path: G.b.GoogleOneTap
			}));
			const js = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.BADGE_PICKER, e => u.a.createElement(js, {
				withOverlay: !0
			}));
			var _s = s("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const ws = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.CONTRIBUTOR_REQUEST_PENDING, e => u.a.createElement(ws, {
				withOverlay: !0
			}));
			const ks = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.CONTRIBUTOR_REQUEST, e => u.a.createElement(ks, {
				withOverlay: !0
			}));
			const Ms = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("CrowdControlModal")]).then(s.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.CROWD_CONTROL, e => u.a.createElement(Ms, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var Is = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const Ns = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(ft.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("EconPowerupsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(Is.d)()])).then(e => e[0].default)
			});
			Object(ms.b)(H.a.ECON_POWERUPS_PURCHASE, e => u.a.createElement(Ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ts = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => u.a.createElement(Ts, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Rs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => u.a.createElement(Rs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ls = Object(Ye.a)({
					getComponent: () => Object(ft.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				As = e => () => {
					e()
				};
			Object(ms.b)(H.a.GOLD_GILD_MODAL, e => u.a.createElement(Ls, {
				onOverlayClick: As(e),
				withOverlay: !0
			}));
			var Fs = s("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				Ds = s("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				Gs = s.n(Ds);
			const Us = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = Fs.SPARKLE_ASSET_PATH, document.createElement("img").src = Fs.STARBURST_ASSET_PATH, Promise.resolve().then(s.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(ms.b)(H.a.GOLD_GILD_ANIMATION_OVERLAY, e => u.a.createElement(Us, {
				withOverlay: !0,
				className: Gs.a.modalBody,
				overlayClassName: Gs.a.modalOverlay
			}));
			const Bs = Object(Ye.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("GoldTargetedOfferModal").then(s.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				Hs = e => () => {
					e()
				};
			Object(ms.b)(H.a.GOLD_TARGETED_OFFER_MODAL, e => u.a.createElement(Bs, {
				onOverlayClick: Hs(e),
				withOverlay: !0
			}));
			const qs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.HARBERGER_TAX_BANNER_MANAGE, e => u.a.createElement(qs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ws = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.HARBERGER_TAX_BANNER_PURCHASE, e => u.a.createElement(Ws, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Vs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => u.a.createElement(Vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Qs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => u.a.createElement(Qs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const zs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.GOVERNANCE_RELEASE_NOTES, e => u.a.createElement(zs, {
				withOverlay: !0
			}));
			const Zs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.TRANSFER_POINTS, e => u.a.createElement(Zs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ks = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.WALLET_REGISTRATION_MODAL, e => u.a.createElement(Ks, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ys = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.MOD_TO_MEMBER_SHARE, e => u.a.createElement(Ys, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Xs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.MULTIREDDIT_ADD_SUBREDDIT, e => u.a.createElement(Xs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Js = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.MULTIREDDIT_CREATE, e => u.a.createElement(Js, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(ms.b)(H.a.MULTIREDDIT_DUPLICATE, e => u.a.createElement(Js, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const $s = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(ms.b)(H.a.MULTIREDDIT_EDIT, e => u.a.createElement($s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const en = () => null,
				tn = Object(Ye.a)({
					ErrorComponent: en,
					getComponent: () => Object(ft.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: en
				});
			Object(ms.b)(H.a.PINNED_POSTS_LIMIT_REACHED, e => u.a.createElement(tn, null));
			var sn = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				nn = s.n(sn);
			const {
				fbt: an
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rn = k.a.h2("ColumnLabel", nn.a), on = k.a.wrapped(Gt.a, "ColumnWrapper", nn.a), cn = k.a.div("Column", nn.a), dn = k.a.div("Description", nn.a), ln = k.a.div("Key", nn.a), un = k.a.wrapped(St.k, "ModalMain", nn.a), mn = k.a.wrapped(St.d, "ModalBody", nn.a), pn = k.a.wrapped(et.f, "PrimaryButton", nn.a), bn = k.a.wrapped(jt.a, "TextButton", nn.a), hn = Object(m.b)(null, e => ({
				closeModal: () => e(Object(N.i)(H.a.KEYBOARD_SHORTCUTS))
			})), gn = k.a.wrapped(Object($e.a)(hn(e => u.a.createElement(mn, {
				onClick: e => e.stopPropagation()
			}, u.a.createElement(St.h, null, u.a.createElement(_t.a, null, u.a.createElement(St.p, null, an._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), u.a.createElement(bn, {
				onClick: e.closeModal
			}, u.a.createElement(St.b, null)))), u.a.createElement(un, null, u.a.createElement(on, null, u.a.createElement(cn, null, u.a.createElement(Gt.a, null, u.a.createElement(rn, null, an._("Navigation", null, {
				hk: "3zSWEe"
			}))), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), u.a.createElement(ln, null, "Shift + ?")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Next post or comment", null, {
				hk: "1m8s9z"
			})), u.a.createElement(ln, null, "J")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), u.a.createElement(ln, null, "K")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), u.a.createElement(ln, null, "N")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), u.a.createElement(ln, null, "P")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Open post", null, {
				hk: "2wD7mh"
			})), u.a.createElement(ln, null, "Enter")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Open/close expando", null, {
				hk: "1yDst0"
			})), u.a.createElement(ln, null, "X")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Go to post link", null, {
				hk: "c0TNr"
			})), u.a.createElement(ln, null, "L"))), u.a.createElement(cn, null, u.a.createElement(Gt.a, null, u.a.createElement(rn, null, an._("Action", null, {
				hk: "3QI6pT"
			}))), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Upvote", null, {
				hk: "5i9NP"
			})), u.a.createElement(ln, null, "A")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Downvote", null, {
				hk: "1ef3YP"
			})), u.a.createElement(ln, null, "Z")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("New post", null, {
				hk: "4dtNWf"
			})), u.a.createElement(ln, null, "C")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Reply to comment", null, {
				hk: "G8AbT"
			})), u.a.createElement(ln, null, "R")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Submit comment/post", null, {
				hk: "13agk7"
			})), u.a.createElement(ln, null, "Ctrl + Enter")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Save", null, {
				hk: "3Dtwo5"
			})), u.a.createElement(ln, null, "S")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Hide", null, {
				hk: "2Dn9GF"
			})), u.a.createElement(ln, null, "H")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Open navigation", null, {
				hk: "QdGe2"
			})), u.a.createElement(ln, null, "Q")), u.a.createElement(Gt.a, null, u.a.createElement(dn, null, an._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), u.a.createElement(ln, null, "Enter"))))), u.a.createElement(St.f, null, u.a.createElement(pn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, an._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", nn.a);
			Object(ms.b)(H.a.KEYBOARD_SHORTCUTS, e => u.a.createElement(gn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const {
				fbt: fn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), vn = Object(h.c)({
				allowNavigationCallback: ss.a
			}), Cn = Object(m.b)(vn, e => ({
				closeModal: () => e(Object(N.i)(H.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Et.a)())
			}));
			class yn extends u.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return u.a.createElement(St.d, null, u.a.createElement(St.h, null, u.a.createElement(_t.a, null, u.a.createElement(St.p, null, fn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), u.a.createElement(jt.a, {
						onClick: this.onCancelClick
					}, u.a.createElement(St.b, null)))), u.a.createElement(St.k, null, u.a.createElement(St.o, null, fn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), u.a.createElement(St.f, null, u.a.createElement(St.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, fn._("Cancel", null, {
						hk: "2TSLl5"
					})), u.a.createElement(St.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, fn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const On = Object($e.a)(Cn(yn));
			Object(ms.b)(H.a.BLADE_UNSAVED_CHANGES, e => u.a.createElement(On, {
				withOverlay: !0
			}));
			const Pn = Object(h.c)({
					activeModalId: tt.a
				}),
				xn = Object(m.b)(Pn, e => ({
					toggleModal: t => e(Object(N.i)(t))
				})),
				En = 500,
				Sn = () => {};
			class jn extends u.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(cs.a)(), En) : setTimeout(() => Object(cs.b)(), En)
				}
				componentWillUnmount() {
					Object(cs.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(ms.a)(e)(e ? this.toggleModal : Sn)
				}
			}
			var _n = xn(jn),
				wn = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				kn = s("./src/reddit/actions/page.ts"),
				Mn = s("./src/reddit/actions/shortcuts/utils.ts"),
				In = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Nn = e => u.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, u.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), u.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				})),
				Tn = s("./src/reddit/selectors/header.ts"),
				Rn = s("./src/reddit/selectors/userPrefs.ts"),
				Ln = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx")),
				An = s("./src/reddit/components/SEOTitle/index.tsx"),
				Fn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Dn = s("./src/reddit/components/UserIcon/index.tsx"),
				Gn = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Un = s("./src/reddit/icons/svgs/All/index.tsx");

			function Bn(e) {
				return u.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, u.a.createElement("g", null, u.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), u.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), u.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
			var Hn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				qn = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				Wn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				Vn = s("./src/reddit/constants/colors.ts"),
				Qn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				zn = Object(v.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = Qn(e, ["className", "isBadged"]);
					return u.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, u.a.createElement("path", {
						d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
					}), u.a.createElement("path", {
						d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
					}), u.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "4",
						fill: s ? Object(me.a)(n).body : "none"
					}), u.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? Vn.a.orangered : "none"
					}))
				}),
				Zn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function Kn() {
				return (Kn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Yn, Xn = e => u.a.createElement("svg", Kn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), u.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), u.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				Jn = e => {
					let {
						className: t
					} = e;
					return u.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, u.a.createElement("polygon", {
						points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
					}))
				},
				$n = s("./src/reddit/icons/svgs/Post/index.tsx"),
				ea = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				ta = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				sa = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				na = s.n(sa);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Yn || (Yn = {}));
			const aa = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return u.a.createElement(u.a.Fragment, null, s && "".concat(s, "/"), n && u.a.createElement(An.b, {
					type: An.a.HeaderSelector
				}, n))
			};
			var ra = s("./src/lib/objectSelector/index.ts"),
				oa = s("./src/reddit/constants/wiki.ts"),
				ia = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ca = s("./src/reddit/selectors/subreddit.ts"),
				da = s("./src/reddit/selectors/topic.ts");
			var la = Object(ra.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(bs.U)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: Yn.Home
							} : {
								type: Yn.Popular
							};
						case "modListing":
							return {
								type: Yn.ModListing
							};
						case "modQueuePages":
							return {
								type: Yn.ModQueue
							};
						case "postCreation":
							return {
								type: Yn.CreatePost
							};
						case "postDraft":
							return {
								type: Yn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Yn.SubredditCreation
							};
						case "coins":
							return {
								type: Yn.Coins
							};
						case "premium":
							return {
								type: Yn.Premium
							};
						case "acknowledgements":
							return {
								type: Yn.Acknowledgements
							};
						case "appeal":
							return {
								type: Yn.Appeal
							};
						case "report":
							return {
								type: Yn.Report
							};
						case "userDataRequest":
							return {
								type: Yn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Yn.DailyCharts
							};
						case "geotagging":
							return {
								type: Yn.Geotagging
							};
						case "topic": {
							const t = Object(bs.s)(s),
								n = t && Object(da.e)(e, t, !0);
							if (n) return {
								type: Yn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: Yn.Inbox, model: r
							};
						case "settings":
							return {
								type: Yn.Settings, model: r
							}
					}
					const o = Object(bs.O)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: Yn.All
					};
					if ("popular" === o) return {
						type: Yn.Popular
					};
					const i = Object(bs.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: Yn.CommunitySearch,
						model: i
					} : {
						type: Yn.Community,
						model: i
					};
					const c = Object(bs.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: Yn.Multi,
						model: c
					};
					const d = Object(bs.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: Yn.UserProfile,
						model: d
					};
					const l = Object(bs.h)(s);
					if (l) return {
						type: Yn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: Yn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(bs.n)(e, {
								pageLayer: s
							}) || oa.e,
							n = Object(ca.A)(e, {
								subredditName: t
							});
						if (n) return {
							type: Yn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(ia.a)(e) ? {
						type: Yn.PublicAccessNetwork
					} : {
						type: Yn.Unknown
					}
				}),
				ua = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				ma = s.n(ua);

			function pa() {
				return (pa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function ba(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: u.a.createElement(u.a.Fragment, null, u.a.createElement(t, {
							className: ma.a.icon
						}), u.a.createElement(s, {
							className: ma.a.text
						})),
						className: Object(g.a)(ma.a.item, e.className, {
							[ma.a.mFocused]: !!e.isFocused,
							[ma.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? u.a.createElement("a", pa({}, n, {
					href: e.to,
					target: "_blank"
				})) : u.a.createElement(wn.a, pa({}, n, {
					to: e.to
				})) : u.a.createElement("button", n)
			}
			var ha = s("./src/reddit/helpers/overlay/index.ts"),
				ga = s("./src/reddit/routes/modListing/index.ts"),
				fa = s("./src/reddit/selectors/multireddit.ts"),
				va = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Ca = s("./src/lib/LinkedListMap/index.ts");
			const ya = Object(h.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(fa.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(fa.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Oa;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Oa || (Oa = {}));
			const Pa = [e => ({
					id: Yn.Employee,
					type: Oa.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(zn, {
								className: Object(g.a)(t, na.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				xa = [e => ({
					id: Yn.All,
					type: Oa.GenericLink,
					model: {
						url: "/r/all/",
						displayText: n.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Un.a, {
								className: Object(g.a)(t, na.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				}), e => ({
					id: Yn.DailyCharts,
					type: Oa.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: n.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Wn.a, {
								className: Object(g.a)(t, na.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				Ea = [e => ({
					id: "reddit-feeds",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (e, t) => ({
					id: Yn.Home,
					type: Oa.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => {
							let {
								className: s
							} = e;
							return u.a.createElement(zn, {
								className: Object(g.a)(s, na.a.itemIcon),
								isBadged: t && t.isBadged
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Yn.Popular,
					type: Oa.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Jn, {
								className: Object(g.a)(t, na.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...xa],
				Sa = [e => ({
					id: "reddit-feeds",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Yn.Home,
					type: Oa.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Jn, {
								className: Object(g.a)(t, na.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...xa],
				ja = [e => ({
					id: "reddit-other",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Yn.Settings,
					type: Oa.GenericLink,
					model: {
						url: "/settings",
						displayText: n.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Gn.a, {
								className: Object(g.a)(na.a.userIcon, t)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Yn.Inbox,
					type: Oa.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: n.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Gn.a, {
								className: Object(g.a)(na.a.userIcon, t)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				}), e => ({
					id: Yn.CreatePost,
					type: Oa.GenericLink,
					model: {
						url: "/submit",
						displayText: n.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement($n.a, {
								className: Object(g.a)(t, na.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Create Post", null, {
								hk: "dGck6"
							}))
						}
					},
					telemetryNoun: "create_post"
				})],
				_a = [e => ({
					id: Yn.Coins,
					type: Oa.GenericLink,
					model: {
						url: "/coins",
						displayText: n.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Hn.a, {
								className: Object(g.a)(t, na.a.itemCoin)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}), e => ({
					id: Yn.Premium,
					type: Oa.GenericLink,
					model: {
						url: "/premium",
						displayText: n.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(ea.a, {
								className: Object(g.a)(t, na.a.itemPremium)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				})],
				wa = [e => ({
					id: Yn.ModQueue,
					type: Oa.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: n.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(Zn.a, {
								className: Object(g.a)(t, na.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => ({
					id: Yn.ModMailBeta,
					type: Oa.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: n.fbt._("Modmail Beta", null, {
							hk: "2CtXgY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(qn.a, {
								className: Object(g.a)(t, na.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Modmail Beta", null, {
								hk: "2CtXgY"
							}))
						}
					},
					telemetryNoun: "modmail_beta"
				}), e => ({
					id: Yn.ModMail,
					type: Oa.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: n.fbt._("Modmail", null, {
							hk: "1gjb1m"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(qn.a, {
								className: Object(g.a)(t, na.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return u.a.createElement("span", {
								className: t
							}, n.fbt._("Modmail", null, {
								hk: "1gjb1m"
							}))
						}
					},
					telemetryNoun: "modmail"
				})];

			function ka(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Oa.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Oa.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var Ma = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				Ia = s.n(Ma);

			function Na(e) {
				return u.a.createElement("div", {
					className: Object(g.a)(Ia.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var Ta = s("./src/reddit/actions/subscription/index.ts"),
				Ra = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				La = e => {
					let {
						className: t
					} = e;
					return u.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20"
					}, u.a.createElement("g", {
						fill: "inherit",
						fillRule: "evenodd"
					}, u.a.createElement("polygon", {
						points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
					})))
				},
				Aa = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Fa = s.n(Aa);

			function Da() {
				return (Da = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ga = Object(h.c)({
					currentUser: Wt.i,
					hideNSFWPref: Wt.z,
					isLoggedIn: Wt.H
				}),
				Ua = Object(m.b)(Ga, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Oa.Subreddit:
								e(Object(Ta.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Oa.Profile:
								e(Object(Ta.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Oa.Multi:
								e(Object(Ta.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Ra.f)(t.model.url)) : t.sendEvent(Object(Ra.c)(t.model.url))
						}
					}
				}));
			var Ba = Object(ce.c)(Ua((function(e) {
					const t = {
						className: Object(g.a)(Fa.a.item, e.className, {
							[Fa.a.mFocused]: !!e.isFocused
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
						case Oa.Subreddit:
							return u.a.createElement(wn.a, Da({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Fn.b, {
								className: Fa.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), u.a.createElement("span", {
								className: Fa.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(La, {
								className: Object(g.a)(Fa.a.favorite, {
									[Fa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Oa.SubredditAutocomplete:
							return u.a.createElement(wn.a, Da({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), u.a.createElement(Fn.b, {
								className: Fa.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), u.a.createElement("span", {
								className: Fa.a.text
							}, e.model.name));
						case Oa.Multi:
							return u.a.createElement(wn.a, Da({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement("img", {
								src: e.model.icon,
								className: Fa.a.customFeedIcon
							}), u.a.createElement("span", {
								className: Fa.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(La, {
								className: Object(g.a)(Fa.a.favorite, {
									[Fa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Oa.Profile:
							return u.a.createElement(wn.a, Da({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Dn.a, {
								className: Fa.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), u.a.createElement("span", {
								className: Fa.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, u.a.createElement(La, {
								className: Object(g.a)(Fa.a.favorite, {
									[Fa.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Ha = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				qa = s.n(Ha);

			function Wa(e) {
				return u.a.createElement("div", {
					className: e.className
				}, u.a.createElement("div", {
					className: qa.a.header
				}), u.a.createElement("div", {
					className: qa.a.item
				}), u.a.createElement("div", {
					className: qa.a.item
				}), u.a.createElement("div", {
					className: qa.a.item
				}), u.a.createElement("div", {
					className: qa.a.item
				}))
			}
			var Va = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Qa = s("./src/reddit/actions/multireddit/index.ts"),
				za = s("./src/reddit/actions/subreddit.ts"),
				Za = s("./src/reddit/constants/keycodes.ts"),
				Ka = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Ya = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Xa = s.n(Ya);

			function Ja() {
				return (Ja = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function $a(e) {
				return e.id === Yn.ModMail || (e.id === Yn.ModMailBeta || e.id === Yn.CreateCommunity)
			}

			function er(e) {
				const t = new Ca.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Oa.Header && e.type !== Oa.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const tr = Object(h.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = ya(e),
							a = new Ca.a("id");
						if (s.account) {
							const r = s.account;
							Ea.forEach(e => a.push(e(r))), r.isEmployee && Pa.forEach(e => a.push(e(r))), Object(ia.a)(e) && a.push({
								id: Yn.PublicAccessNetwork,
								type: Oa.GenericClickable,
								model: {
									onClick: () => {
										t(Object(ha.a)(B.c[B.b.Rpan]))
									},
									displayText: n.fbt._("Reddit Public Access Network", null, {
										hk: "3p4s8f"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return u.a.createElement(ta.a, {
											className: Object(g.a)(t, na.a.itemPublicAccessNetwork)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return u.a.createElement("span", {
											className: t
										}, n.fbt._("Reddit Public Access Network", null, {
											hk: "3p4s8f"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
								id: "header-favorites",
								type: Oa.Header,
								model: {
									displayText: n.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Oa.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Oa.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Oa.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Oa.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Oa.Header,
								model: {
									displayText: n.fbt._("Custom feeds", null, {
										hk: "3K02MA"
									}).toString(),
									button: e => {
										let {
											className: s,
											sendClickEvent: n
										} = e;
										return u.a.createElement("button", {
											onClick: () => {
												t(Object(N.h)(H.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(g.a)(s, na.a.multiPlusButton)
										}, u.a.createElement(va.a, {
											className: na.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Oa.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Oa.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Oa.Header,
								model: {
									displayText: n.fbt._("moderating subreddits", null, {
										hk: "2z4AZS"
									}).toString()
								}
							}), a.push({
								id: Yn.ModListing,
								type: Oa.GenericLink,
								model: {
									url: ga.a,
									displayText: "r/Mod",
									icon: e => {
										let {
											className: t
										} = e;
										return u.a.createElement(Zn.a, {
											className: Object(g.a)(t, na.a.itemModQueue)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return u.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), s.moderatingSubreddits.forEach(e => a.push({
								id: "mod" + e.id,
								type: Oa.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Oa.LoadingState,
								model: {
									displayText: ""
								}
							}) : ka(a, s), ja.forEach(e => a.push(e(r))), Object(Wt.ab)(e) && a.push({
								id: Yn.CreateCommunity,
								type: Oa.GenericLink,
								model: {
									url: "/subreddits/create",
									displayText: n.fbt._("Create Community", null, {
										hk: "41sjx"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return u.a.createElement($n.a, {
											className: Object(g.a)(t, na.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return u.a.createElement("span", {
											className: t
										}, n.fbt._("Create Community", null, {
											hk: "41sjx"
										}))
									}
								},
								telemetryNoun: "create_community"
							}), _a.forEach(e => a.push(e(r))), r.isMod && wa.forEach(e => a.push(e(r)))
						} else s.subscriptions.length || Object(Wt.H)(e) ? Ea.forEach(e => a.push(e(null))) : Sa.forEach(e => a.push(e(null))), a.push({
							id: "reddit-other",
							type: Oa.Header,
							model: {
								displayText: n.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), _a.forEach(e => a.push(e(null))), ka(a, s);
						return a
					}
				}),
				sr = e => ({
					onHomeClicked: () => e(Object(kn.x)()),
					onGotoUrl: t => e(Object(b.b)(t)),
					onSubredditsRequested: () => {
						e(Object(Ta.e)()), e(Object(za.q)()), e(Object(Qa.g)())
					},
					onActionDispatched: t => e(t)
				}),
				nr = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class ar extends u.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = er(s),
							a = n.first();
						this.setState({
							focusOrder: n,
							renderableList: s,
							currentInputText: e.currentTarget.value,
							focusedItemId: a ? a.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Za.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Za.b.Tab && this.props.onClose && this.props.onClose(), e.key === Za.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Oa.Header && e.type !== Oa.LoadingState && (this.fireTelemetryForListItem(e), e.type === Oa.GenericClickable ? e.model.onClick() : $a(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Za.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								s = t ? e.renderableList.get(t) : void 0,
								n = s ? s.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: n,
								focusedItemId: t
							}
						})), e.key === Za.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								s = t ? e.renderableList.get(t) : void 0,
								n = s ? s.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: n,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case Yn.Coins:
							case Yn.Premium:
								Object(Ka.d)(Ka.a.GoldPayment, !0), t = Object(Ka.c)(Ka.a.GoldPayment)
						}
						switch (e.type) {
							case Oa.Category:
							case Oa.GenericLink:
							case Oa.GenericClickable:
							case Oa.Multi:
							case Oa.Profile:
							case Oa.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(X.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Oa.Multi ? Object(X.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Oa.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign({}, Object(X.defaults)(e), {
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
						focusOrder: er(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = u.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = er(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Ca.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Oa.Category:
								case Oa.GenericLink:
								case Oa.Multi:
								case Oa.Profile:
								case Oa.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Oa.Header: {
									const t = s.last();
									t && t.type === Oa.Header && s.pop(), s.push(e);
									break
								}
								case Oa.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Oa.Header && s.pop(), s
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
					return u.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, u.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(n.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), u.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Xa.a.filter,
						id: "header-subreddit-filter",
						placeholder: n.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const s = {
							id: "focus-".concat(e.id),
							isFocused: this.state.focusedItemId === e.id,
							key: "subreddit-list-key-".concat(e.id),
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Yn.Home && this.props.onHomeClicked(), e.type === Oa.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Oa.GenericClickable:
								return u.a.createElement(ba, Ja({}, s, {
									className: Xa.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Oa.Category:
							case Oa.GenericLink:
								return u.a.createElement(ba, Ja({}, s, {
									externalLink: $a(e),
									className: Xa.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Oa.Header: {
								const s = e.model.button;
								return u.a.createElement(Na, {
									className: Xa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && u.a.createElement(s, {
									className: Xa.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Oa.LoadingState:
								return u.a.createElement(Wa, {
									className: Xa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Oa.Multi:
								return u.a.createElement(Ba, Ja({}, s, {
									className: Xa.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Oa.Multi
								}));
							case Oa.Profile:
								return u.a.createElement(Ba, Ja({}, s, {
									className: Xa.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Oa.Profile
								}));
							case Oa.Subreddit:
								return u.a.createElement(Ba, Ja({}, s, {
									className: Xa.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Oa.Subreddit
								}))
						}
					}))
				}
			}
			const rr = Object(m.b)(tr, sr, nr)(Object(ce.c)(ar)),
				or = Object(m.b)(tr, sr, nr)(Object(ce.c)(Object(Va.b)(ar))),
				ir = Object(bs.t)({
					isCommentsPage: bs.w,
					pageLayer: e => e
				}),
				cr = Object(h.c)({
					currentPage: la,
					hideNSFWPref: Wt.z,
					isDropdownOpen: Tn.a,
					isLoggedIn: Wt.H,
					isOverlayOpen: ss.i,
					isPinnedSubscriptionsMenuDisabled: Rn.a,
					isSubscriptionsPinned: Rn.b
				});
			class dr extends u.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Mn.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign({}, Object(X.defaults)(e), {
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
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
					const {
						currentPage: e,
						className: t,
						hideNSFWPref: s,
						isCommentsPage: a,
						isLoggedIn: r,
						isOverlayOpen: o
					} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = o || !r && a;
					return u.a.createElement("div", {
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(g.a)(na.a.container, t, {
							[na.a.mOpen]: i,
							[na.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[na.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, u.a.createElement("button", {
						className: na.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, u.a.createElement("span", {
						className: na.a.containerText
					}, function(e) {
						switch (e.type) {
							case Yn.Acknowledgements:
								return aa(n.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case Yn.All:
								return aa(n.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case Yn.Appeal:
								return aa(n.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case Yn.Coins:
								return aa(n.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case Yn.Community:
								return aa(e.model.displayText, !0);
							case Yn.CommunitySearch:
								return aa(n.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case Yn.CreateCommunity:
								return aa(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Yn.CreatePost:
								return aa(n.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case Yn.DailyCharts:
								return aa(n.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case Yn.GlobalSearch:
								return aa(n.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case Yn.Geotagging:
								return aa(n.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case Yn.Home:
								return aa(n.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case Yn.Inbox:
								return aa(n.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case Yn.ModListing:
								return aa("r/Mod");
							case Yn.ModMail:
								return aa(n.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case Yn.ModMailBeta:
								return aa(n.fbt._("Modmail Beta", null, {
									hk: "2zsXji"
								}).toString());
							case Yn.ModQueue:
								return aa(n.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case Yn.Multi:
								return aa(e.model.displayText, !0);
							case Yn.Popular:
								return aa(n.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case Yn.Premium:
								return aa(n.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case Yn.PublicAccessNetwork:
								return aa(n.fbt._("Reddit Public Access Network", null, {
									hk: "3agn8V"
								}).toString());
							case Yn.Report:
								return aa(n.fbt._("Report", null, {
									hk: "4oVcnd"
								}).toString());
							case Yn.Settings:
								return aa(n.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case Yn.SubredditCreation:
								return aa(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Yn.Topic:
								return aa(e.model);
							case Yn.Unknown:
								return aa("");
							case Yn.UserDataRequest:
								return aa(n.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case Yn.UserProfile:
								return aa(e.model.displayText, !0);
							case Yn.UserProfileName:
								return aa(e.name, !0);
							case Yn.ViewDraft:
								return aa(n.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e)), function(e, t) {
						switch (e.type) {
							case Yn.Acknowledgements:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.All:
								return u.a.createElement(Un.a, {
									className: na.a.defaultIcon
								});
							case Yn.Appeal:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.Coins:
								return u.a.createElement(Hn.a, {
									className: na.a.coinIcon
								});
							case Yn.Community:
							case Yn.CommunitySearch: {
								const s = Object(Ln.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Fn.b, {
									className: na.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case Yn.CreateCommunity:
							case Yn.CreatePost:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.DailyCharts:
								return u.a.createElement(Wn.a, {
									className: na.a.defaultIcon
								});
							case Yn.GlobalSearch:
								return u.a.createElement(Bn, {
									className: na.a.defaultIcon
								});
							case Yn.Home:
								return u.a.createElement(zn, {
									className: na.a.defaultIcon
								});
							case Yn.Inbox:
							case Yn.Settings:
								return u.a.createElement(Gn.a, {
									className: Object(g.a)(na.a.icon, na.a.userIcon)
								});
							case Yn.ModListing:
								return u.a.createElement(Zn.a, {
									className: na.a.modQueueIcon
								});
							case Yn.SubredditCreation:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.ModMail:
							case Yn.ModMailBeta:
								return u.a.createElement(qn.a, {
									className: na.a.modQueueIcon
								});
							case Yn.ModQueue:
								return u.a.createElement(Zn.a, {
									className: na.a.modQueueIcon
								});
							case Yn.Multi:
								return u.a.createElement("img", {
									src: e.model.icon,
									className: na.a.customFeedIcon
								});
							case Yn.Popular:
								return u.a.createElement(Jn, {
									className: na.a.defaultIcon
								});
							case Yn.Premium:
								return u.a.createElement(ea.a, {
									className: na.a.premiumIcon
								});
							case Yn.PublicAccessNetwork:
								return u.a.createElement(ta.a, {
									className: na.a.publicAccessNetworkIcon
								});
							case Yn.Report:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.Unknown:
								return u.a.createElement("div", {
									className: na.a.unknownIcon
								});
							case Yn.UserDataRequest:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.UserProfile: {
								const s = Object(Ln.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Dn.a, {
									className: Object(g.a)(na.a.icon, na.a.userIcon),
									iconUrl: s.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case Yn.UserProfileName:
								return u.a.createElement("div", {
									className: na.a.defaultIcon
								});
							case Yn.ViewDraft:
								return u.a.createElement($n.a, {
									className: na.a.defaultIcon
								});
							case Yn.Geotagging:
							case Yn.Topic:
								return u.a.createElement(Xn, {
									className: na.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && u.a.createElement(In.b, {
						className: na.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && u.a.createElement(Nn, {
						className: Object(g.a)(na.a.pin, {
							[na.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && u.a.createElement(or, {
						canAutofocus: !0,
						className: na.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var lr = ir(Object(m.b)(cr, (e, t) => ({
					closeDropdown: () => e(Object(E.f)()),
					onLocationRefresh: (s, n) => e(Object(kn.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(E.i)()), e(Object(E.f)())
					},
					openDropdown: () => e(Object(E.g)()),
					toggleDropdown: () => e(Object(E.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(ce.c)(dr))),
				ur = s("./src/reddit/components/JumpToContent/index.tsx"),
				mr = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				pr = s("./node_modules/history/esm/history.js"),
				br = s("./node_modules/lodash/debounce.js"),
				hr = s.n(br),
				gr = s("./node_modules/uuid/v4.js"),
				fr = s.n(gr),
				vr = s("./src/lib/makeSearchKey/index.ts"),
				Cr = s("./src/reddit/actions/post.ts"),
				yr = s("./src/reddit/actions/search.ts"),
				Or = s("./src/reddit/actions/search/trending.ts"),
				Pr = s("./src/reddit/actions/tooltip.ts"),
				xr = s("./src/higherOrderComponents/asTooltip.tsx"),
				Er = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Sr = s("./src/lib/search/index.ts"),
				jr = s("./src/reddit/models/Search/index.ts");
			var _r = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.isProfile ? n.searchQuery.replace("u/", "user/") : n.searchQuery);
						else {
							if (i = "".concat(q.p, "=").concat(Object(Sr.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section !== jr.c.trending && n.section !== jr.c.recent || a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(q.q, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(q.q, "=1")), t) {
								const e = t.url.split("/")[2];
								o = "/user/".concat(e, "/m/").concat(t.name).concat(o), i = "".concat(i, "&").concat(q.q, "=1&").concat(q.j, "=1")
							}
							a && a.category && (i = "".concat(i, "&").concat(q.b, "=").concat(a.category))
						}
						return {
							url: o,
							qs: i
						}
					}
				},
				wr = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				kr = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Mr = s("./src/reddit/icons/svgs/Search/index.tsx"),
				Ir = s("./src/reddit/components/SearchDropdown/index.m.less"),
				Nr = s.n(Ir);
			const Tr = Object(m.b)(() => Object(h.c)({
					currentPage: ss.b
				})),
				Rr = Object(bs.t)(),
				Lr = Object(xr.a)(Er.b);
			class Ar extends u.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						const {
							props: e
						} = this;
						e.recentSearch.isTypeaheadSuggestion ? e.onClearSearchQuery() : e.onUpdateSearchQuery(e.recentSearch.searchQuery), e.onSendSearchClickRecentEvent(e.recentSearch.searchQuery, e.recentSearch, e.indexOfItem)
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? "".concat(e.subredditOrProfileRestrictedName, " ").concat(e.searchQuery) : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: s,
						currentPage: a,
						focusedItem: r,
						onRemoveRecentSearch: o,
						pageLayer: i,
						recentSearch: c,
						toggleTooltip: d
					} = e, l = _r(null, null, null, c, {
						source: vr.a.Recent
					}), m = l && l.url, p = l && l.qs, b = this.generateFullSearchQuery(c);
					let h;
					r && (h = this.generateFullSearchQuery(r));
					const f = a ? Object(X.getPageTypeFromCurrentPage)(a) : i ? Object(X.getPageTypeFromCurrentPage)(i) : void 0;
					return u.a.createElement(wn.a, {
						"aria-label": c.searchQuery,
						className: Object(g.a)(Nr.a.listItem, Fa.a.item, s, {
							[Nr.a.mFocused]: !(!r || r.section !== jr.c.recent || h !== b)
						}),
						onClick: this.onRecentSearchItemClick,
						key: b,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: m || "",
							state: {
								[U.a.SearchOriginPage]: f
							},
							search: p
						}
					}, c.displayInfo && c.isTypeaheadSuggestion ? c.displayInfo.iconUrl ? u.a.createElement("div", {
						className: Nr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(c.displayInfo.iconUrl, "')")
						}
					}) : u.a.createElement(wr.a, {
						className: Nr.a.planetIcon
					}) : u.a.createElement(Mr.a, {
						className: Object(g.a)(Nr.a.listItemIcon, Fa.a.icon)
					}), u.a.createElement("span", {
						className: Fa.a.text
					}, b), u.a.createElement("div", {
						onMouseEnter: () => d(b),
						onMouseLeave: () => d(null),
						id: b
					}, u.a.createElement(kr.a, {
						className: Object(g.a)(Nr.a.listItemIcon, Nr.a.mHoverable, Fa.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), o(c)
						}
					}), u.a.createElement(Lr, {
						className: Nr.a.fixedTextTooltip,
						isOpen: t === b,
						text: n.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: b,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var Fr = Rr(Tr(Ar)),
				Dr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Gr = s("./src/reddit/components/PostTitle/index.tsx"),
				Ur = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				Br = s("./src/reddit/constants/adEvents.ts"),
				Hr = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				qr = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				Wr = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Vr = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Qr = Object(m.b)(() => Object(h.c)({
				currentPage: ss.b
			}), e => ({
				trackTrendingSearchClick: t => e((e, s) => Wr.E(s(), t, Wr.a.SEARCH_DROPDOWN))
			}));
			class zr extends u.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return Vr(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						const {
							props: e
						} = this;
						e.onUpdateSearchQuery(e.trendingItem.searchQuery);
						const t = this.transformTrendingToRecentSearch();
						if (e.onSetRecentSearch(t), Object(Ka.d)(Ka.a.SearchResults), e.trackTrendingSearchClick(e.trendingItem), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							this.props.fireAdPixelsOfType(e, Br.a.Click)
						}
					}, this.isSponsored = () => {
						const {
							trendingItem: e
						} = this.props;
						return !(!e.post || !e.post.isSponsored)
					}
				}
				render() {
					const {
						className: e,
						currentPage: t,
						focusedItem: s,
						pageLayer: a,
						trendingItem: r
					} = this.props, o = this.isSponsored(), i = _r(null, null, null, r, {
						source: o ? vr.a.PromotedTrend : vr.a.Trending
					}), c = i && i.url, d = i && i.qs, l = t ? Object(X.getPageTypeFromCurrentPage)(t) : a ? Object(X.getPageTypeFromCurrentPage)(a) : void 0, m = u.a.createElement(wn.a, {
						"aria-label": r.searchQuery,
						className: Object(g.a)(Nr.a.listItem, Nr.a.mTrending, Fa.a.item, Fa.a.trending, e, {
							[Nr.a.mFocused]: !(!s || s.section !== jr.c.trending || r.searchQuery !== s.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(r.searchQuery),
						role: "link",
						tabIndex: -1,
						to: {
							pathname: c || "",
							state: {
								[U.a.SearchOriginPage]: l
							},
							search: d
						}
					}, u.a.createElement("div", {
						className: Fa.a.trendingContent
					}, o && u.a.createElement("div", {
						className: Fa.a.promoted
					}, n.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), u.a.createElement("div", null, u.a.createElement(Jn, {
						className: Object(g.a)(Nr.a.listItemIcon, Nr.a.mTrending, Fa.a.icon, Fa.a.trending)
					}), u.a.createElement("span", null, u.a.createElement(Gr.a, {
						className: Object(g.a)(Nr.a.listItemText, Nr.a.mTrending, Fa.a.text, Fa.a.trending),
						redditStyle: !0,
						size: Gr.b.Small
					}, r.searchQuery)), r.post && u.a.createElement("div", {
						className: Nr.a.postTitle
					}, r.post.title)), r.subredditInfo && u.a.createElement(Hr.a, {
						className: Object(g.a)(Fa.a.relatedSubredditMetaData, Nr.a.listItemSubtext, {
							[Nr.a.mNoPostTitle]: !r.post
						}),
						iconUrl: r.subredditInfo.icon || void 0,
						suffix: n.fbt._("{subreddit name} and more", [n.fbt._param("subreddit name", r.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), r.post && Object(qr.a)(r.post) && u.a.createElement(Dr.a, {
						post: r.post,
						removeLink: !0,
						usePreview: o
					}));
					return o ? u.a.createElement(Ur.a, {
						post: r.post
					}, m) : m
				}
			}
			var Zr = Object(bs.t)()(Qr(zr)),
				Kr = s("./src/reddit/components/Flair/index.tsx");
			class Yr extends u.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						const {
							props: e
						} = this;
						e.onSetRecentSearch(e.item), e.onSendSearchClickTypeaheadEvent(e.item.searchQuery, e.item, e.indexOfItem, e.subredditSuggestions), e.onClearSearchQuery()
					}
				}
				render() {
					const {
						props: e
					} = this, {
						className: t,
						focusedItem: s,
						item: a
					} = e;
					return u.a.createElement(wn.a, {
						"aria-label": a.searchQuery,
						className: Object(g.a)(Nr.a.listItem, Nr.a.mTypeahead, Fa.a.item, t, {
							[Nr.a.mFocused]: !(!s || s.searchQuery !== a.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: a.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(a.isProfile ? a.searchQuery.replace("u/", "user/") : a.searchQuery)
					}, a.displayInfo && a.displayInfo.iconUrl ? u.a.createElement("div", {
						className: Nr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(a.displayInfo.iconUrl, "')")
						}
					}) : u.a.createElement(wr.a, {
						className: Nr.a.planetIcon
					}), u.a.createElement("div", null, a.displayInfo && a.displayInfo.subredditOrProfileName && u.a.createElement("div", {
						className: Object(g.a)(Nr.a.listItemText, Nr.a.mTypeahead, Fa.a.text)
					}, a.displayInfo.subredditOrProfileName), u.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && u.a.createElement("div", {
						className: Object(g.a)(Nr.a.listItemSubtext, Fa.a.subText)
					}, n.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [n.fbt._plural(a.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), a.displayInfo && a.displayInfo.isNSFW && u.a.createElement(Kr.b, {
						flair: {
							type: Ut.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var Xr = s("./src/reddit/constants/zIndex.ts"),
				Jr = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: $r
			} = s("./node_modules/fbt/lib/FbtPublic.js"), eo = "SearchDropdown", to = 5, so = Object(xr.a)(Jr.a);

			function no(e) {
				const {
					isFixed: t = !0,
					isOverlay: s = !0
				} = e, [n, a] = Object(l.useState)(null), r = function(e) {
					const [t, s] = Object(l.useState)(null), n = Object(l.useCallback)(() => {
						e && s(e.offsetWidth)
					}, [e]);
					return Object(l.useLayoutEffect)(n, [n]), Object(l.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
				}(e.container), o = {
					width: r ? "".concat(r, "px") : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (o.zIndex = Xr.h);
				const i = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending,
					{
						typeaheadSuggestions: c
					} = e,
					d = Object(l.useMemo)(() => c.filter(e => e.isSubreddit), c);
				return u.a.createElement(so, {
					className: Object(g.a)(Nr.a.dropdown, na.a.listContainer),
					isFixed: t,
					isOpen: e.isOpen,
					isOverlay: s,
					tooltipId: eo,
					noFocus: !0,
					style: o
				}, e.typeaheadSuggestions.map((t, s) => u.a.createElement(Yr, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					indexOfItem: s,
					subredditSuggestions: d,
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendSearchClickTypeaheadEvent: e.onSendSearchClickTypeaheadEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType
				})), i && e.recentSearches.map((t, s) => u.a.createElement(Fr, {
					activeTooltipId: n,
					focusedItem: e.itemList[e.focusedItemIndex],
					indexOfItem: s,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onRemoveRecentSearch: e.onRemoveRecentSearch,
					onSendSearchClickRecentEvent: e.onSendSearchClickRecentEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					recentSearch: t,
					toggleTooltip: a
				})), i && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && u.a.createElement("div", {
					className: Object(g.a)(Fa.a.title, Nr.a.listItemTitle, {
						[Nr.a.mWithBorder]: !!e.recentSearches.length
					})
				}, $r._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || e.isTrendingPending) && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Object(g.a)(Nr.a.loadingItem, qa.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Nr.a.loadingItem, qa.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Nr.a.loadingItem, qa.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Nr.a.loadingItem, qa.a.item)
				}), u.a.createElement("div", {
					className: Object(g.a)(Nr.a.loadingItem, qa.a.item)
				})), i && e.isInTrendingExperiment && e.trendingItems.slice(0, to).map(t => u.a.createElement(Zr, {
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t
				})))
			}
			var ao = s("./src/reddit/contexts/ApiContext.tsx"),
				ro = s("./src/lib/makeApiRequest/index.ts"),
				oo = s("./src/lib/omitHeaders/index.ts"),
				io = s("./src/reddit/constants/headers.ts");
			const co = (e, t) => Object(ro.a)(Object(oo.a)(e, [io.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: f.db.GET,
				data: {
					query: t
				}
			});
			var lo = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				uo = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const mo = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === f.yb.Subreddit ? (t.push(n.name), s[n.name] = Object(uo.a)(n)) : a === f.yb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(lo.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var po = s("./src/reddit/helpers/isArrayEqual.ts"),
				bo = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ho = s("./src/reddit/selectors/experiments/trending.ts"),
				go = s("./src/reddit/helpers/chooseVariant/index.ts");
			const fo = e => Object(Wt.E)(e) || ps.nc.Treatment1 === Object(go.c)(e, {
				experimentEligibilitySelector: go.a,
				experimentName: ps.kc
			});
			var vo = s("./src/reddit/selectors/searchResults.ts"),
				Co = s("./src/reddit/selectors/tooltip.ts"),
				yo = s("./src/reddit/selectors/trending.ts"),
				Oo = s("./src/reddit/controls/Search/index.m.less"),
				Po = s.n(Oo);
			const xo = Object(bs.t)({
					searchQuery: bs.V,
					pageLayer: e => e
				}),
				Eo = (e, t, s, n) => e(e => Object.assign({}, Object(bo.c)(e), {
					source: "search",
					action: "click",
					noun: t,
					actionInfo: X.actionInfo(e),
					search: Object.assign({}, X.search(e, s, !0, n || void 0), {
						structureType: X.structureType(e, n),
						queryId: Object(Ka.c)(Ka.a.SearchResults)
					})
				})),
				So = Object(m.b)(() => Object(h.c)({
					currentPage: ss.b,
					currentSubredditName: ss.e,
					currentUser: Wt.i,
					dropdownIsOpen: Object(Co.b)(eo),
					typeaheadIdsByQuery: vo.c,
					isInTrendingExperiment: ho.a,
					isInTypeaheadExperiment: fo,
					isLoggedIn: Wt.H,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(bs.L)(s)
					},
					multireddit: bs.d,
					routeName: ss.r,
					subreddit: bs.q,
					trendingItems: yo.a,
					typeaheadSuggestions: vo.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(Or.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(Cr.C)(t, s)),
					onChange: t => e(Object(yr.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(yr.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(b.b)(t)),
					onSearch: (t, s, n, a) => {
						e(Object(b.b)(Object(pr.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n,
								[U.a.SearchOriginPage]: a
							}
						})))
					},
					onToggleDropdown: () => e(Object(Pr.h)({
						tooltipId: eo
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(yr.i)(t))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = _r(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
						if (!o) return;
						const i = o.url,
							c = o.qs,
							d = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							},
							l = e.currentPage ? X.getPageTypeFromCurrentPage(e.currentPage) : s.pageLayer ? X.getPageTypeFromCurrentPage(s.pageLayer) : void 0;
						t.onSearch(i, c, d, l)
					},
					onFocusSearchBar: () => {
						Object(Ka.c)(Ka.a.SearchResults) || Object(Ka.d)(Ka.a.SearchResults);
						const e = s.searchOptions || Object(vr.c)({
							q: s.searchQuery
						});
						Eo(s.sendEvent, X.OriginElement.SearchBar, e, s.pageLayer ? s.pageLayer : void 0)
					}
				}));
			class jo extends u.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await co(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = mo(e.body.data.children);
								t && t.data && t.order && this.props.onTypeaheadSuggestionsSuccess({
									typeaheadSuggestions: t.data,
									order: t.order,
									searchQuery: this.state.searchQuery
								})
							}
							this.setState({
								isTypeaheadPending: !1,
								fetchedTrending: !0
							})
						} else this.setState({
							isTypeaheadPending: !1
						})
					}, this.makeTrendingApiRequest = async () => {
						this.props.trendingItems.length || this.state.isTrendingPending || (this.setState({
							isTrendingPending: !0
						}), await this.props.fetchTrendingItems(), this.setState({
							isTrendingPending: !1
						}))
					}, this.setContainerRef = e => {
						this.container = e
					}, this.close = () => {
						this.props.dropdownIsOpen && this.props.onToggleDropdown()
					}, this.onRemoveRecentSearch = e => {
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(is.I)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(is.fb)(Object.assign({}, e, {
								section: jr.c.recent
							}), this.props.currentUser.id)
						})
					}, this.onChange = e => {
						const t = e.currentTarget.value,
							s = {
								searchQuery: t
							};
						if (this.setState(s), this.props.onChange(t), this.props.isInTypeaheadExperiment) {
							if (!(!this.props.typeaheadIdsByQuery || !this.props.typeaheadIdsByQuery[t]) || !t) return;
							this.onFetchTypeaheadSuggestions()
						}
					}, this.onFetchTypeaheadSuggestions = hr()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, jr.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = fr()()), t.section === jr.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === jr.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, X.StructureType.Search, X.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = jr.b.text;
								t = {
									id: fr()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: jr.c.recent,
									subredditOrProfileRestrictedName: s,
									displayInfo: {
										iconUrl: e,
										isNSFW: n
									}
								}
							}
							this.onSetRecentSearch(t), this.close(), this.props.onSearch(e, t)
						}
					}, this.onClearSearchQuery = () => {
						this.setState({
							focusedItemIndex: -1,
							selectedItem: null,
							searchQuery: ""
						}), this.props.onClearSearchQuery()
					}, this.onSendDropdownClickEvent = (e, t, s, n) => {
						const a = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(bo.s)(n, a))
					}, this.onSendSearchClickRecentEvent = (e, t, s) => {
						this.props.sendEvent(Object(bo.u)(e, t, s))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, s, n) => {
						this.props.sendEvent(Object(bo.w)(e, t, s, n))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(bo.t)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === Za.b.Escape && this.close(), e.key === Za.b.Tab && this.close(), e.key === Za.b.ArrowDown) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (this.state.focusedItemIndex >= this.state.itemList.length - 1) return;
							const t = this.state.focusedItemIndex + 1,
								s = this.state.itemList[t] || null,
								n = s ? s.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: n,
								selectedItem: s
							})
						}
						if (e.key === Za.b.ArrowUp) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (-1 === this.state.focusedItemIndex) return;
							const t = this.state.focusedItemIndex - 1,
								s = this.state.itemList[t] || null,
								n = s ? s.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: n,
								selectedItem: s
							})
						}
					}, this.toggleDropdownAndGetTrending = () => {
						if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser) {
							const e = Object(is.y)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(X.SearchDropdownNouns.Recent, X.StructureType.Recent, e.searchQuery)
							})), this.props.trendingItems.length > 0 && this.props.trendingItems.forEach(e => {
								this.onSendDropdownViewEvent(X.SearchDropdownNouns.Trending, X.StructureType.Trending, e.searchQuery)
							})
						}
						this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(vr.c)({});
						t.q || (t.q = this.state.searchQuery), Eo(this.props.sendEvent, "full_search_button", t)
					}, this.state = {
						fetchedTrending: !1,
						focusedItemIndex: -1,
						itemList: [],
						isTrendingPending: !1,
						isTypeaheadPending: !1,
						recentSearches: [],
						searchQuery: this.props.searchQuery || "",
						selectedItem: null
					}
				}
				componentDidUpdate(e) {
					const t = Object(po.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(po.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? X.SearchDropdownNouns.TypeaheadProfile : X.SearchDropdownNouns.TypeaheadSubreddit, X.StructureType.Search, e.searchQuery)
						}), !s && this.props.trendingItems.length && this.state.fetchedTrending && this.props.trendingItems.forEach(e => {
							this.onSendDropdownViewEvent(X.SearchDropdownNouns.Trending, X.StructureType.Trending, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return u.a.createElement("div", {
						className: Object(g.a)(Po.a.relativeWrapper, na.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: eo,
						ref: this.setContainerRef
					}, u.a.createElement("label", {
						className: Po.a.iconContainer,
						htmlFor: "header-search-bar"
					}, u.a.createElement(Mr.a, {
						className: Po.a.icon
					})), u.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, u.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Po.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: n.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), u.a.createElement(no, {
						container: this.container,
						focusedItemIndex: t.focusedItemIndex,
						isFixed: e.isFixed,
						isInTrendingExperiment: e.isInTrendingExperiment,
						isOpen: e.dropdownIsOpen,
						isTrendingPending: t.isTrendingPending,
						isTypeaheadPending: t.isTypeaheadPending,
						itemList: t.itemList,
						onClearSearchQuery: this.onClearSearchQuery,
						onClose: this.close,
						onRemoveRecentSearch: this.onRemoveRecentSearch,
						onSendDropdownClickEvent: this.onSendDropdownClickEvent,
						onSendSearchClickRecentEvent: this.onSendSearchClickRecentEvent,
						onSendSearchClickTypeaheadEvent: this.onSendSearchClickTypeaheadEvent,
						onSetRecentSearch: this.onSetRecentSearch,
						onUpdateSearchQuery: this.onUpdateSearchQuery,
						recentSearches: t.recentSearches,
						trendingItems: e.trendingItems,
						typeaheadSuggestions: e.typeaheadSuggestions,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					}))
				}
			}
			var _o = Object(ce.c)(xo(Object(ao.b)(So(jo)))),
				wo = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ko = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Mo = s("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Io = s.n(Mo);
			var No = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(g.a)(Io.a.Container, t)
					}, u.a.createElement("a", {
						"aria-label": n.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Io.a.HomeLink,
						href: M.a.redditUrl
					}, u.a.createElement(wo.a, {
						className: Io.a.Snoo
					}), u.a.createElement(ko.a, {
						className: Io.a.Wordmark,
						color: "inherit"
					})))
				},
				To = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ro = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Lo = s("./src/reddit/hooks/useTracking.ts"),
				Ao = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Fo = s.n(Ao),
				Do = u.a.memo((function(e) {
					const t = Object(Lo.a)(),
						s = Object(m.c)(),
						a = Object(l.useCallback)(() => {
							t(e => Object.assign({}, Object(X.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(l.useCallback)(() => {
							t(e => Object.assign({}, Object(X.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						o = Object(l.useCallback)(() => {
							s(Object(ha.a)(B.c[B.b.Rpan])), t(e => Object.assign({}, Object(X.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [s, t]),
						i = Object(m.d)(Wt.H),
						c = Object(m.d)(ia.a),
						d = Object(Ro.a)(),
						p = Object(Ro.a)(),
						b = Object(Ro.a)();
					return u.a.createElement("div", {
						className: Object(g.a)(Fo.a.container, e.className)
					}, u.a.createElement("div", {
						className: Fo.a.row
					}, u.a.createElement(wn.a, {
						className: Fo.a.icon,
						innerRef: d.target.ref,
						to: i ? B.c[B.b.Popular] : B.c[B.b.Home],
						onClick: a,
						onMouseEnter: d.show,
						onMouseLeave: d.hide
					}, u.a.createElement(Jn, null)), u.a.createElement(To.a, {
						arrowProps: d.arrowProps,
						popperProps: d.popperProps,
						visible: d.visible
					}, n.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), u.a.createElement(wn.a, {
						className: Fo.a.icon,
						innerRef: p.target.ref,
						to: B.c[B.b.All],
						onClick: r,
						onMouseEnter: p.show,
						onMouseLeave: p.hide
					}, u.a.createElement(Un.a, null)), u.a.createElement(To.a, {
						arrowProps: p.arrowProps,
						popperProps: p.popperProps,
						visible: p.visible
					}, n.fbt._("All", null, {
						hk: "1Rk1yU"
					})), c && u.a.createElement(u.a.Fragment, null, u.a.createElement(wn.a, {
						className: Fo.a.icon,
						innerRef: b.target.ref,
						to: B.c[B.b.Rpan],
						onClick: o,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, u.a.createElement(ta.a, null)), u.a.createElement(To.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, n.fbt._("Reddit Public Access Network", null, {
						hk: "38uXOo"
					})))))
				})),
				Go = s("./src/reddit/actions/login.ts"),
				Uo = s("./src/reddit/helpers/trackers/authControls.ts"),
				Bo = s("./src/lib/matchRoute/index.ts"),
				Ho = s("./src/chat/helpers/dom.ts"),
				qo = s("./src/reddit/actions/changeUsername.ts"),
				Wo = s("./src/reddit/actions/chat/toggle.ts"),
				Vo = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				Qo = s("./src/reddit/actions/postCreation/general.ts"),
				zo = s("./src/reddit/actions/users.ts"),
				Zo = s("./src/reddit/components/Settings/modalIds.ts"),
				Ko = s("./src/reddit/components/BlockNavigation/index.tsx"),
				Yo = s("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				Xo = s("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Jo = Object(Ye.a)({
					getComponent: () => Object(ft.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				$o = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ei = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				ti = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				si = s.n(ti);
			class ni extends u.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(ei.e)(ei.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(ei.c)(ei.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(ei.e)(ei.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					ni.shouldSendViewEvent && (ni.shouldSendViewEvent = !1, this.props.sendEvent(Object(ei.g)(ei.a)))
				}
				render() {
					return u.a.createElement("div", {
						className: si.a.container
					}, u.a.createElement("div", {
						className: si.a.topLine
					}), u.a.createElement("button", {
						className: si.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, u.a.createElement(Q.a, {
						className: si.a.closeIcon
					})), u.a.createElement("h5", {
						className: si.a.title
					}, n.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), u.a.createElement("p", {
						className: si.a.subtitle
					}, this.props.email), u.a.createElement("p", {
						className: si.a.description
					}, n.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), u.a.createElement("div", {
						className: si.a.buttonWrapper
					}, u.a.createElement(et.i, {
						className: si.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, n.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), u.a.createElement(et.f, {
						className: Object(g.a)(si.a.commonBtn, si.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, n.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			ni.shouldSendViewEvent = !0;
			const ai = Object($o.a)(ni, [Va.a.Click, Va.a.Keydown, Va.a.Resize]);
			var ri = Object(ce.c)(ai),
				oi = s("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				ii = s.n(oi);
			class ci extends u.a.Component {
				render() {
					const {
						exposeIFrameElement: e
					} = this.props;
					return u.a.createElement(ie, {
						className: ii.a.IFrame,
						exposeIFrameElement: e,
						path: G.b.GoogleOneTap
					})
				}
			}
			var di = ci,
				li = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				ui = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				mi = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				pi = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				bi = s("./src/reddit/helpers/trackers/goldPayment.ts");
			const hi = "gold_top_nav",
				gi = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return Object.assign({}, Object(bi.h)(e, t), {
						correlationId: Object(Ka.d)(Ka.a.GoldPayment, !1),
						profile: X.profile(e),
						subreddit: X.subreddit(e)
					})
				},
				fi = e => t => Object.assign({
					source: hi,
					action: "click",
					noun: e
				}, gi(t)),
				vi = e => t => Object.assign({
					source: hi,
					action: "click",
					noun: "coins_package"
				}, gi(t, {
					packageId: e
				})),
				Ci = () => e => Object.assign({
					source: hi,
					action: "click",
					noun: "premium"
				}, gi(e)),
				yi = () => e => Object.assign({
					source: hi,
					action: "view",
					noun: "dropdown"
				}, gi(e));
			var Oi = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Pi = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				xi = s.n(Pi);
			var Ei = e => {
					const {
						className: t,
						buttonSubtext: s,
						buttonSubtextCrossout: n,
						buttonText: a,
						goldStyle: r,
						onClick: o,
						primaryText: i,
						subtext: c,
						subtextCrossout: d
					} = e, l = r ? et.c : et.f;
					return u.a.createElement("div", {
						className: Object(g.a)(t, xi.a.CompactCoinPurchaseListItem)
					}, u.a.createElement("div", {
						className: xi.a.productSection
					}, u.a.createElement("span", {
						className: xi.a.primaryText
					}, i), u.a.createElement("span", {
						className: Object(g.a)(xi.a.subtext, {
							[xi.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => u.a.createElement("p", {
						key: t
					}, e)) : c)), u.a.createElement("div", {
						className: xi.a.priceSection
					}, u.a.createElement(l, {
						className: Object(g.a)(xi.a.button, {
							[xi.a.goldStyle]: r
						}),
						redditStyle: !0,
						onClick: o
					}, a), u.a.createElement("span", {
						className: Object(g.a)(xi.a.buttonSubtext, {
							[xi.a.crossout]: n
						})
					}, s)))
				},
				Si = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				ji = s.n(Si);
			const _i = Object(h.c)({
				coinPackages: Oi.b,
				isPremiumSubscriber: Wt.q,
				premiumPackages: Oi.e,
				purchaseCatalogError: Oi.f,
				purchaseCatalogPending: Oi.g
			});
			class wi extends u.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(vi(e.mobileId)), s(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(Ci()), t(this.correlationId)
					}, this.correlationId = Object(Ka.d)(Ka.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						premiumPackages: s,
						sorted: a
					} = this.props, r = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: s,
							coins: a,
							pennies: r,
							bonusPct: o
						} = e, i = a.toLocaleString(), c = n.fbt._("{number of coins} Coins", [n.fbt._param("number of coins", i)], {
							hk: "1bO7gz"
						}), d = "$".concat(r / 100);
						let l, u;
						if (a !== t) {
							const e = t.toLocaleString();
							l = n.fbt._("{number of coins of non-sale package} coins", [n.fbt._param("number of coins of non-sale package", e)], {
								hk: "afkY9"
							})
						}
						return {
							buttonSubtext: u = r !== s ? "$".concat(s / 100) : o ? n.fbt._("{percent bonus}% Bonus", [n.fbt._param("percent bonus", o.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: d,
							coinPackage: e,
							primaryText: c,
							subtext: l
						}
					});
					a && r.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const o = s.length ? s[0] : void 0;
					if (t || !o) return r;
					const {
						pennies: i,
						periodicalCoins: c,
						signupBonusCoins: d
					} = o, l = d ? d.toLocaleString() : void 0, u = "$".concat((i / 100).toLocaleString()), m = c.toLocaleString(), p = {
						buttonSubtext: l ? n.fbt._("{number of bonus coins} bonus coins", [n.fbt._param("number of bonus coins", l)], {
							hk: "YgHAT"
						}) : void 0,
						buttonText: n.fbt._("{premium price}/mo", [n.fbt._param("premium price", u)], {
							hk: "4Cwbsj"
						}),
						isGoldStyle: !0,
						primaryText: n.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [n.fbt._("{monthly coins} coins/mo", [n.fbt._param("monthly coins", m)], {
							hk: "2hVTon"
						}), n.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return r.concat(p)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						purchaseCatalogError: s,
						purchaseCatalogPending: a
					} = this.props;
					return a ? u.a.createElement("div", {
						className: e
					}, u.a.createElement("div", {
						className: ji.a.loaderContainer
					}, u.a.createElement(pi.a, {
						sizePx: 80
					}))) : s || !t.length ? u.a.createElement("div", {
						className: e
					}, u.a.createElement("div", {
						className: ji.a.errorContainer
					}, n.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : u.a.createElement("div", {
						className: e
					}, this.getListItemData().map(e => {
						const {
							buttonSubtext: t,
							buttonText: s,
							coinPackage: n,
							isGoldStyle: a,
							primaryText: r,
							subtext: o
						} = e, i = n && n.coins !== n.baselineCoins, c = n && n.pennies !== n.baselinePennies;
						return u.a.createElement(Ei, {
							buttonSubtext: t,
							buttonSubtextCrossout: c,
							buttonText: s,
							goldStyle: a,
							key: r,
							onClick: n ? () => this.handleClickBuyCoins(n) : this.handleClickBuyPremium,
							primaryText: r,
							subtext: o,
							subtextCrossout: i
						})
					}))
				}
			}
			var ki = Object(m.b)(_i, e => ({
					onClickCoinPackage: (t, s) => e(Object(ui.b)({
						correlationId: s,
						packageId: t.mobileId
					})),
					onClickPremiumPackage: t => e(Object(mi.d)({
						correlationId: t
					})),
					requestPurchaseCatalog: t => e(Object(li.b)(t))
				}))(Object(ce.c)(wi)),
				Mi = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				Ii = s.n(Mi);
			const {
				fbt: Ni
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ti = Object(xr.a)(Jr.a);
			class Ri extends u.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.handleMouseEnter = () => {
						this.timer && clearTimeout(this.timer)
					}, this.handleMouseLeave = () => {
						const {
							onCloseTooltip: e
						} = this.props;
						this.timer = setTimeout(e, 700)
					}
				}
				componentDidMount() {
					const {
						isOpen: e,
						sendEvent: t
					} = this.props;
					e && t(yi())
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.props.sendEvent(yi())
				}
				renderDefaultHeader() {
					return u.a.createElement("div", {
						className: Ii.a.header
					}, u.a.createElement("span", {
						className: Ii.a.headerText
					}, Ni._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), u.a.createElement(wn.a, {
						className: Ii.a.headerLink,
						to: "/coins"
					}, Ni._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				}
				renderSaleHeader() {
					const {
						activeSaleConfig: e
					} = this.props;
					if (!e) return this.renderDefaultHeader();
					const {
						dropdownHeaderText: t,
						dropdownHeaderBackgroundAsset: s
					} = e;
					return u.a.createElement("div", {
						className: Object(g.a)(Ii.a.header, Ii.a.activeSale)
					}, s && u.a.createElement("img", {
						className: Object(g.a)(Ii.a.saleHeaderImage, Ii.a.activeSale),
						src: s
					}), u.a.createElement("span", {
						className: Ii.a.headerText
					}, t))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: a
					} = this.props;
					return u.a.createElement(Ti, {
						className: Object(g.a)(t, Ii.a.CoinPurchaseDropdown, {
							[Ii.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, e ? this.renderSaleHeader() : this.renderDefaultHeader(), u.a.createElement(ki, {
						className: Ii.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var Li = Object(ce.c)(Ri),
				Ai = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var Fi = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				Di = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				Gi = s.n(Di);
			const Ui = "COIN_PURCHASE_DROPDOWN_ID",
				Bi = Object(h.c)({
					activeSaleConfig: Oi.a,
					activeTooltipId: Co.a,
					coinPurchaseDropdownIsOpen: e => Object(Co.b)(Ui)(e),
					premiumPurchaseModalIsOpen: Fi.m
				});
			class Hi extends u.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (Object(Ka.d)(Ka.a.GoldPayment, !0), Object(_s.a)(), Object(Ai.b)(), n(fi("get_coins_cta"))), a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestActiveSale: t
					} = this.props;
					e || t()
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: s,
						coinPurchaseDropdownIsOpen: a,
						premiumPurchaseModalIsOpen: r
					} = this.props, o = e ? e.ctaText ? e.ctaText : n.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : n.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					});
					return u.a.createElement("button", {
						className: Object(g.a)(t, Gi.a.ctaContainer, {
							[Gi.a.activeSale]: !!e
						}),
						id: Ui,
						onClick: this.handleClick
					}, u.a.createElement("div", {
						className: Object(g.a)(Gi.a.ctaContent, {
							[Gi.a.activeSale]: !!e
						})
					}, u.a.createElement(Hn.a, {
						className: Object(g.a)(Gi.a.icon, {
							[Gi.a.activeSale]: !!e
						})
					}), u.a.createElement("span", {
						className: Gi.a.text
					}, o)), u.a.createElement(Li, {
						activeSaleConfig: e,
						isOpen: a,
						onCloseTooltip: s,
						tooltipId: Ui
					}), r && u.a.createElement(Ai.a, null))
				}
			}
			var qi = Object(m.b)(Bi, (e, t) => ({
					closeTooltip: () => e(Object(Pr.i)()),
					requestActiveSale: () => e(Object(li.a)()),
					toggleTooltip: t => {
						e(t === Ui ? Object(Pr.i)() : Object(Pr.f)({
							tooltipId: Ui
						}))
					}
				}))(Object(ce.c)(Hi)),
				Wi = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Vi = s.n(Wi);

			function Qi() {
				return (Qi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var zi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Zi = k.a.button("Button", Vi.a),
				Ki = k.a.div("Container", Vi.a);
			var Yi = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = zi(e, ["children", "isOpen"]);
					return u.a.createElement(Zi, Qi({}, n, {
						id: e.id,
						onClick: e.onClick
					}), u.a.createElement(Ki, {
						className: Object(g.a)({
							[Vi.a.isOpen]: s
						})
					}, t))
				},
				Xi = s("./src/chat/helpers/unreadCount.ts"),
				Ji = s("./src/chat/models/Promo/index.ts"),
				$i = s("./src/lib/prettyPrintNumber/index.ts"),
				ec = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				tc = s.n(ec);
			var sc = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? u.a.createElement("span", {
						className: Object(g.a)(t, tc.a.counter, {
							[tc.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object($i.b)(n)) : null
				},
				nc = s("./src/reddit/helpers/trackers/chat.ts"),
				ac = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				rc = s("./src/reddit/selectors/chat.ts");
			const oc = Object(h.c)({
				promos: rc.b,
				unreadCount: rc.d
			});
			class ic extends l.Component {
				componentDidMount() {
					this.props.promos[Ji.a.SubredditChatFtux] && this.props.sendEvent(Object(nc.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(Xi.a)(t, e);
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(sc, {
						isActive: n,
						unreadCount: s
					}), u.a.createElement(ac.a, {
						className: Object(g.a)(tc.a.chatIcon, {
							[tc.a.isActive]: n
						})
					}))
				}
			}
			var cc = Object(m.b)(oc)(Object(ce.c)(ic)),
				dc = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				lc = s.n(dc);
			const {
				fbt: uc
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var mc = e => {
				const {
					onCloseFlyout: t
				} = e;
				return u.a.createElement("div", {
					className: lc.a.container
				}, u.a.createElement("p", {
					className: lc.a.title
				}, uc._("New User Settings", null, {
					hk: "1Sziu9"
				})), u.a.createElement("h5", {
					className: lc.a.subtitle
				}, uc._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), u.a.createElement("p", {
					className: lc.a.description
				}, uc._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), u.a.createElement(et.i, {
					className: lc.a.dismissBtn,
					onClick: t
				}, uc._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var pc = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(sc, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), u.a.createElement(qn.a, {
					className: Object(g.a)(tc.a.envelopeIcon, {
						[tc.a.isUnread]: !!e.unreadCount
					})
				})),
				bc = s("./src/reddit/actions/alpha.ts"),
				hc = s("./src/reddit/actions/modMode.ts"),
				gc = s("./src/reddit/actions/profile/index.ts"),
				fc = s("./src/reddit/constants/elementClassNames.ts"),
				vc = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Cc = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				yc = s("./src/reddit/helpers/trackers/modTools.ts");
			const Oc = e => ({
				screen: X.screen(e),
				profile: X.profile(e),
				subreddit: X.subreddit(e)
			});
			var Pc = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				xc = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Ec = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Sc = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				jc = s.n(Sc);
			var _c = e => u.a.createElement("svg", {
					className: Object(g.a)(jc.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, u.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				wc = e => u.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, u.a.createElement("g", {
					fill: "inherit"
				}, u.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var kc = e => u.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, u.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				Mc = e => u.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, u.a.createElement("g", {
					fill: "inherit"
				}, u.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				Ic = e => u.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, u.a.createElement("g", {
					fill: "inherit"
				}, u.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				Nc = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				Tc = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				Rc = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				Lc = e => u.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, u.a.createElement("g", {
					fill: "inherit"
				}, u.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				Ac = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				Fc = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Dc = s.n(Fc);
			const Gc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				Uc = k.a.wrapped(Jr.a, "Dropdown", Dc.a),
				Bc = Object(xr.a)(Uc),
				Hc = e => u.a.createElement(Cc.a, {
					className: Dc.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, u.a.createElement("div", {
					className: Dc.a.buttonText
				}, e.displayText), u.a.createElement(vc.a, {
					className: Dc.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				qc = Object(m.b)(() => Object(h.c)({
					isModModeEnabled: as.t,
					isOpen: Object(Co.b)("USER_DROPDOWN_ID"),
					nightmode: Wt.S,
					url: ss.s
				}), (e, t) => ({
					toggleNightmode: t => e(Object(T.y)(t)),
					onOptIntoRedesign: () => e(Object(bc.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Ze.a.get("rseor3") && Ze.a.remove("rseor3", {
							domain: M.a.cookieDomain
						}), e(Object(bc.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						t.user && e(Object(gc.e)(Object(Bt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(Go.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: s
						} = t;
						s && s.contentWindow && (console.log("postMessage: disableAutoSelect"), s.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, W())), e(Object(zo.p)())
					},
					toggleModMode: () => e(Object(hc.b)())
				}));
			var Wc = Object(bs.t)({
					pageLayer: e => e
				})(qc(Object(ce.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: s,
						isModModeEnabled: a,
						nightmode: r,
						requestAwardKarma: o,
						toggleModMode: i,
						user: c
					} = e, d = c && c.id;
					Object(l.useEffect)(() => {
						o()
					}, [d]);
					const m = Object(Cc.b)(Rc.a, n.fbt._("User Settings", null, {
							hk: "46J4vT"
						}), !1),
						p = Object(Cc.b)(Ec.a, n.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}), !0),
						b = Object(Cc.b)(Nc.a, n.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}), !0),
						h = Object(Cc.b)(wc, n.fbt._("Log In / Sign Up", null, {
							hk: "4xbfvS"
						})),
						f = Object(Cc.b)(wc, n.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})),
						v = Object(Cc.b)(Lc, n.fbt._("Opt In to New Reddit", null, {
							hk: "4jiTxA"
						}), !1),
						C = (e => {
							const t = e && e.coins || 0;
							return n.fbt._({
								"*": "{number of coins} coins",
								_1: "1 coin"
							}, [n.fbt._plural(t, "number of coins")], {
								hk: "qmnnm"
							})
						})(c),
						y = Object(Cc.b)(Hn.a, n.fbt._("Reddit Coins", null, {
							hk: "3jj6Cb"
						}), !1, C),
						O = Object(Cc.b)(ea.a, n.fbt._("Reddit Premium", null, {
							hk: "3FNqVS"
						}), !1);
					return u.a.createElement("div", {
						className: Object(g.a)(Dc.a.container, fc.e)
					}, u.a.createElement(Ac.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(g.a)(e.className, Dc.a.inlineButton, {
							[Dc.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, u.a.createElement("span", {
						className: Dc.a.accountDisplayText
					}, (e => e ? u.a.createElement("span", {
						className: Object(g.a)(Dc.a.accountWrapper, Dc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && u.a.createElement(Gn.a, {
						className: Dc.a.imgIcon
					}), u.a.createElement("span", {
						className: Dc.a.accountDetails
					}, u.a.createElement("span", {
						className: Dc.a.username
					}, e.displayText, e.isGold && u.a.createElement(xc.a, {
						className: Dc.a.premiumFontIcon,
						title: n.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						})
					})), u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: Dc.a.accountKarma
					}, u.a.createElement(_c, null), u.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							s = Object($i.b)(t);
						return n.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [n.fbt._plural(t, "karma count", s)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && u.a.createElement("span", {
						className: Dc.a.accountCoins
					}, u.a.createElement(Pc.a, {
						className: Dc.a.coinFontIcon
					}), u.a.createElement("span", null, (e => Object($i.b)(e.coins || 0))(e)))))) : u.a.createElement("span", {
						className: Object(g.a)(Dc.a.accountWrapper, Dc.a.isLoggedOut)
					}, u.a.createElement(Tc.a, {
						className: Dc.a.myProfileIcon
					})))(e.user), u.a.createElement(In.b, {
						className: Dc.a.dropdownTriangle
					})), u.a.createElement(mr.a, null, n.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), u.a.createElement(Bc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, c && u.a.createElement(l.Fragment, null, u.a.createElement("h3", {
						className: Dc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = n.fbt._("My Profile", null, {
								hk: "4AoYxT"
							}),
							s = Object(Cc.b)(Mc, t, !1);
						return u.a.createElement(s, {
							href: e.url
						})
					})(c), u.a.createElement(m, {
						href: "/settings"
					})), u.a.createElement("h3", {
						className: Dc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), c && c.isMod && u.a.createElement(Hc, {
						displayText: n.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(yc.h)(!a)), i()
						}
					}, u.a.createElement(kc, {
						className: Dc.a.modModeIcon
					})), u.a.createElement(Hc, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, Oc(t)))(r)), e.toggleNightmode(!r)
						}
					}, u.a.createElement(Ic, {
						className: Dc.a.nightIcon
					})), u.a.createElement("h3", {
						className: Dc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), u.a.createElement(l.Fragment, null, u.a.createElement(y, {
						href: "/coins",
						onClick: () => {
							Object(Ka.d)(Ka.a.GoldPayment, !0), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Object(Ka.c)(Ka.a.GoldPayment)
							}, Oc(e)))())
						}
					}), u.a.createElement(O, {
						href: "/premium",
						onClick: () => {
							Object(Ka.d)(Ka.a.GoldPayment, !0), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Object(Ka.c)(Ka.a.GoldPayment)
							}, Oc(e)))())
						}
					})), u.a.createElement(p, {
						href: "https://www.reddithelp.com"
					}), c && u.a.createElement(b, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: X.screen(e),
								subreddit: X.subreddit(e)
							}))
						}
					}), !Gc && c && u.a.createElement(v, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: X.screen(e),
								subreddit: X.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), u.a.createElement("div", {
						className: Dc.a.divider
					}), c ? u.a.createElement(f, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : u.a.createElement(h, {
						href: "#",
						onClick: t => {
							Object(x.a)(t) && (t.preventDefault(), t.stopPropagation(), s(), e.sendEvent(Object(Uo.b)()))
						}
					})))
				}))),
				Vc = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				Qc = s("./src/reddit/helpers/trackers/navigation.ts"),
				zc = s("./src/reddit/routes/index.ts");
			var Zc = s("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Kc = s("./src/reddit/selectors/experiments/sso.ts"),
				Yc = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Xc = "change-username-tooltip-id",
				Jc = "email-verification-tooltip-id",
				$c = u.a.memo((function(e) {
					var {
						moderationDropdownOpen: t
					} = e, s = Yc(e, ["moderationDropdownOpen"]);
					const a = Object(Ro.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: tc.a.iconWrapper,
						onMouseEnter: a.show,
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, u.a.createElement(Yi, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Vc.a,
						onClick: s.onOpenModerationDropdown,
						isOpen: t
					}, u.a.createElement(Zn.a, {
						className: Object(g.a)(tc.a.moderateIcon, {
							[tc.a.isLit]: s.isModerateIconLit
						})
					})), u.a.createElement(To.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, n.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), u.a.createElement(Vc.b, {
						className: tc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: s.unreadNotifications,
						sendEventWithName: s.sendEventWithName
					}))
				})),
				ed = u.a.memo((function(e) {
					const t = Object(Ro.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: tc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("a", {
						className: tc.a.link,
						href: "".concat(M.a.redditUrl, "/chat"),
						onClick: Object(Ho.a)(e.onClickChat)
					}, u.a.createElement(cc, null))), u.a.createElement(To.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, n.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				td = u.a.memo((function(e) {
					let {
						onClickMail: t,
						unreadNotifications: s
					} = e;
					const a = Object(Ro.a)();
					return u.a.createElement("span", {
						className: tc.a.iconWrapper,
						onMouseEnter: a.show,
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, u.a.createElement("a", {
						className: tc.a.link,
						href: s && s.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: t
					}, u.a.createElement(pc, {
						unreadCount: s && s.inboxCount || 0
					})), u.a.createElement(To.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, n.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				sd = u.a.memo((function(e) {
					const t = Object(Ro.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: tc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("button", {
						className: tc.a.link,
						"aria-label": n.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, u.a.createElement($n.a, {
						className: tc.a.postIcon
					}))), u.a.createElement(To.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, n.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				nd = Object(bs.t)({
					pageLayer: e => e
				}),
				ad = Object(h.c)({
					activeDropdownId: Co.a,
					email: Wt.l,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: Zc.b,
					isModerator: qt.h,
					isNameEditable: Wt.J,
					isResponsiveSettingsEnabled: gs.a,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(bs.K)(s) && !!Object(Wt.l)(e) && !Object(Wt.x)(e) && Object(Wt.H)(e) && !Object(Wt.F)(e)
					},
					shouldShowChangeUsernameModals: Kc.c,
					unreadNotifications: Wt.db
				}),
				rd = Object(m.b)(ad, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(qo.d)()),
					closeEmailVerificationTooltip: () => e(Object(Vo.b)()),
					onChatClick: () => e(Object(Wo.e)()),
					onDismissCustomizeFlyout: () => e(Object(T.t)()),
					onOpenModerationDropdown: () => e(Object(Pr.h)({
						tooltipId: Vc.a
					})),
					onOpenUserDropdown: () => e(Object(Pr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(N.h)(Zo.b))
					},
					openKeepUsernameModal: () => {
						e(Object(N.h)(Zo.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Vo.b)()), e(Object(N.i)(Zo.a))
					},
					resendEmail: () => e(Object(zo.v)(ei.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Qo.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const s = Object(b.b)(t);
						e(Object(qo.f)(s))
					}
				}));
			class od extends u.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendEventWithName = e => this.props.sendEvent(Object(Qc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(Bo.a)(e.pathname, zc.a),
							s = t && t.route && t.route.meta && t.route.meta.name;
						return !s || s !== f.Bb.POST_CREATION && s !== f.Bb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: n,
						email: a,
						isChangeUsernameTooltipShowing: r,
						isCustomizeFlyoutShowing: o,
						isEmailVerificationTooltipShowing: i,
						isGoogleOneTapEnabled: c,
						isModerator: d,
						isNameEditable: m,
						isResponsiveSettingsEnabled: p,
						onDismissCustomizeFlyout: b,
						onOpenUserDropdown: h,
						openChangeUsernameModal: f,
						openKeepUsernameModal: v,
						resendEmail: C,
						shouldOpenEmailVerificationTooltip: y,
						shouldShowChangeUsernameModals: O,
						toggleChangeEmailModal: P,
						unreadNotifications: x,
						user: E
					} = this.props, {
						googleOneTapIFrame: S
					} = this.state, j = !(!x || !x.hasUnreadModmail && !x.hasUnreadOldModmail), _ = E && Object(Bt.e)(E) || "", w = Object(g.a)({
						[tc.a["m-responsive"]]: p
					});
					return u.a.createElement(Gt.a, {
						id: Jc,
						ref: e => this.container = e,
						className: t
					}, u.a.createElement(Gt.a, {
						className: tc.a.headerLinks,
						id: Xc
					}, d && u.a.createElement($c, {
						isModerateIconLit: j,
						moderationDropdownOpen: e === Vc.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: x
					}), E && u.a.createElement(l.Fragment, null, u.a.createElement(ed, {
						onClickChat: this.onClickChat
					}), u.a.createElement(td, {
						onClickMail: this.onClickMail,
						unreadNotifications: x
					}), u.a.createElement(sd, {
						onClickCreatePost: this.onClickCreatePost
					}), u.a.createElement("span", {
						className: tc.a.iconWrapper
					}, u.a.createElement(qi, null)))), u.a.createElement(Wc, {
						className: tc.a.headerUserDropdown,
						googleOneTapIFrame: S,
						onClick: h,
						user: E,
						sendEventWithName: this.sendEventWithName
					}), c && u.a.createElement(di, {
						exposeIFrameElement: this.exposeIFrameElement
					}), o && u.a.createElement(mc, {
						onCloseFlyout: b
					}), u.a.createElement(ri, {
						closeTooltip: n,
						email: a,
						isOpen: y && i,
						resendEmail: C,
						toggleChangeEmailModal: P,
						tooltipId: Jc
					}), u.a.createElement(Jo, {
						email: a,
						shouldOpenTooltip: y
					}), m && !p && u.a.createElement(l.Fragment, null, u.a.createElement(Xo.a, {
						closeTooltip: s,
						isOpen: r && !O,
						openChangeUsernameModal: f,
						openKeepUsernameModal: v,
						tooltipId: Xc,
						username: _
					}), O && u.a.createElement(Yo.a, {
						isResponsiveSettingsEnabled: p,
						overlayClassName: w,
						username: _,
						withOverlay: !0
					}), u.a.createElement(Ko.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var id = Object(ce.c)(nd(rd(od))),
				cd = s("./src/reddit/selectors/meta.ts"),
				dd = s("./src/reddit/components/Header/User/index.m.less"),
				ld = s.n(dd);
			const {
				fbt: ud
			} = s("./node_modules/fbt/lib/FbtPublic.js"), md = Object(h.c)({
				account: e => e.user.account,
				origin: cd.l
			}), pd = u.a.memo(e => u.a.createElement("div", {
				className: Object(g.a)(e.className, ld.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					s = M.a.accountManagerOrigin,
					n = t ? t.url : "/",
					a = t && t.meta && t.meta.name === f.Bb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
				return u.a.createElement("div", {
					className: ld.a.loggedOutRow
				}, u.a.createElement(et.j, {
					redditStyle: !0,
					className: Object(g.a)(ld.a.login, ld.a.button),
					href: "".concat(s, "/login/?dest=").concat(a),
					onClick: t => {
						Object(x.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(Uo.a)("nav")))
					}
				}, ud._("Log in", null, {
					hk: "odEG4"
				})), u.a.createElement(et.g, {
					redditStyle: !0,
					className: Object(g.a)(ld.a.separator, ld.a.register, ld.a.button),
					href: "".concat(s, "/register/?dest=").concat(a),
					onClick: t => {
						Object(x.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(Uo.c)("nav")))
					}
				}, ud._("sign up", null, {
					hk: "47v4we"
				})))
			}(e), u.a.createElement(id, {
				className: Object(g.a)({
					[ld.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var bd = Object(bs.t)()(Object(m.b)(md, e => ({
					onOpenLoginModal: () => {
						e(Object(N.k)({
							actionSource: N.a.HeaderLogin
						})), e(Object(Go.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(N.k)({
							actionSource: N.a.HeaderSignup
						})), e(Object(Go.i)())
					}
				}))(Object(ce.c)(pd))),
				hd = s("./src/reddit/components/Header/index.m.less"),
				gd = s.n(hd);

			function fd() {
				return (fd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const vd = k.a.header("HeaderDynamicStyles", gd.a),
				Cd = Object(h.c)({
					isLoggedIn: Wt.H,
					isNightmode: Wt.S,
					isResponsiveSettingsEnabled: gs.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				yd = Object(bs.t)({
					categoryName: bs.b,
					pageLayer: e => e
				}),
				Od = e => u.a.createElement("div", {
					className: gd.a.left
				}, u.a.createElement(mr.a, null, n.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), u.a.createElement(ur.b, null), u.a.createElement(wn.a, {
					"aria-label": n.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: gd.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, u.a.createElement(wo.a, {
					className: gd.a.snoo
				}), u.a.createElement(ko.a, {
					className: gd.a.wordmark
				})), e.children),
				Pd = e => u.a.createElement("div", {
					className: gd.a.right
				}, e.children, u.a.createElement(bd, null)),
				xd = e => u.a.createElement("div", {
					className: gd.a.layout
				}, u.a.createElement(Od, fd({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement(lr, null), u.a.createElement(_o, {
					className: gd.a.search
				})), u.a.createElement(Pd, null, u.a.createElement(Do, {
					className: gd.a.quickLinks
				}))),
				Ed = e => u.a.createElement("div", {
					className: gd.a.layout
				}, u.a.createElement(Od, fd({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement("div", {
					className: gd.a.searchContainer
				}, u.a.createElement(_o, {
					className: gd.a.search
				}))), u.a.createElement(Pd, null));
			var Sd = yd(Object(m.b)(Cd, e => ({
					onReloadFrontpage: () => e(Object(kn.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? xd : Ed, u.a.createElement(vd, {
						"data-redditstyle": !0,
						className: Object(g.a)(gd.a.container, e.className, {
							[gd.a.bladeIsOpen]: e.isBladeOpen
						})
					}, u.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && u.a.createElement(No, {
						className: gd.a.MwebResponsiveHeader
					}))
				}))),
				jd = s("./src/reddit/components/LightboxHeader/index.tsx"),
				_d = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				wd = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				kd = s.n(wd);
			const {
				fbt: Md
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const Id = Object(m.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(E.j)())
			}));
			var Nd = k.a.wrapped(Id((function(e) {
					return u.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, u.a.createElement("div", {
						className: kd.a.title
					}, u.a.createElement(Na, {
						className: kd.a.listHeader
					}, Md._("My Communities", null, {
						hk: "1CmPOc"
					})), u.a.createElement("div", {
						className: kd.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, u.a.createElement(Q.a, {
						className: kd.a.icon
					}))), u.a.createElement(rr, null))
				})), "Component", kd.a),
				Td = s("./src/reddit/components/Survey/index.tsx"),
				Rd = s("./src/reddit/components/ThemeProvider/index.tsx");
			const Ld = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Ad = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, X.actionInfo(t), {
						reason: "primary"
					})
				}),
				Fd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, X.actionInfo(t), {
						reason: "secondary"
					})
				});
			var Dd = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Gd = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Ud = s("./src/reddit/selectors/structuredStyles.ts"),
				Bd = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				Hd = s.n(Bd);

			function qd() {
				return (qd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Wd = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Vd = e => {
				const t = Vn.a;
				switch (e.kind) {
					case Z.b.Error:
					case Z.b.AuthError:
						return t.warning;
					case Z.b.SuccessCommunity:
						return t.op;
					case Z.b.SuccessCommunityGreen:
					case Z.b.SuccessMod:
						return t.approved;
					case Z.b.EuCookiePolicy:
					case Z.b.UappBanner:
					case Z.b.Undo:
					default:
						return t.op
				}
			};
			class Qd extends u.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = Wd(e, ["kind", "sendEvent"]);
					return u.a.createElement("div", n)
				}
			}
			const zd = k.a.wrapped(Qd, "PlainBread", Hd.a);
			var Zd = e => u.a.createElement(zd, qd({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": Vd(e)
					})
				})),
				Kd = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Yd = s.n(Kd);
			const Xd = k.a.span("Text", Yd.a);
			var Jd = s("./src/reddit/components/Toaster/index.m.less"),
				$d = s.n(Jd);
			const {
				fbt: el
			} = s("./node_modules/fbt/lib/FbtPublic.js"), tl = k.a.wrapped(Dd.a, "AuthErrorToastIcon", $d.a), sl = k.a.wrapped(et.f, "AuthErrorToastPrimaryButton", $d.a);
			class nl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(Zd, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(tl, null), u.a.createElement(Xd, null, el._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), u.a.createElement(sl, {
						type: "submit"
					}, el._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var al = nl,
				rl = s("./src/lib/constants/euCookiePolicy.ts"),
				ol = s("./src/lib/permanentCookieOptions.ts"),
				il = s("./src/reddit/controls/Link/index.tsx"),
				cl = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				dl = s.n(cl);
			const {
				fbt: ll
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ul = k.a.div("Icon", dl.a), ml = () => u.a.createElement(ul, {
				style: {
					backgroundImage: "url(".concat(M.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), pl = k.a.wrapped(et.f, "PrimaryButton", dl.a), bl = k.a.wrapped(Zd, "Bread", dl.a);
			class hl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ze.a.set(rs.b, rl.c.toString(), Object(ol.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(bl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(ml, null), u.a.createElement(Xd, null, ll._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", u.a.createElement(il.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, ll._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), u.a.createElement(pl, {
						type: "submit"
					}, ll._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var gl, fl = hl;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(gl || (gl = {}));
			var vl = s("./src/reddit/controls/Typography/index.tsx"),
				Cl = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				yl = s.n(Cl);

			function Ol() {
				return (Ol = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Pl = k.a.div("Container", yl.a),
				xl = k.a.img("SideImage", yl.a),
				El = k.a.div("Main", yl.a),
				Sl = k.a.div("SubTitle", yl.a),
				jl = vl.a,
				_l = k.a.wrapped(et.g, "PrimaryLinkButton", yl.a),
				wl = k.a.wrapped(Q.a, "CloseIcon", yl.a);
			class kl extends u.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Ad(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Ld(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: s,
						style: a,
						subTitle: r,
						title: o
					} = this.props;
					return u.a.createElement(Pl, {
						key: t,
						style: Object.assign({}, a, {
							transform: "\n            translateY(".concat(a.y, "px)\n            scale(").concat(a.x, ", ").concat(a.x, ")\n          ")
						})
					}, u.a.createElement(wl, {
						onClick: this.props.onClose
					}), u.a.createElement(xl, {
						srcSet: s
					}), u.a.createElement(El, null, u.a.createElement(Sl, null, r), u.a.createElement(vl.b, null, o), u.a.createElement(jl, null, e), u.a.createElement(_l, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, n.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Ml = Object(m.b)(null, e => ({
					onSignup: () => e(Object(Go.i)())
				}))(Object(ce.c)(kl)),
				Il = "".concat(Nl("subscribe-cap.png"), " 1x,\n  ").concat(Nl("subscribe-cap@2x.png"), " 2x,");

			function Nl(e) {
				return "".concat(M.a.assetPath, "/img/banner/").concat(e)
			}
			const Tl = 3,
				Rl = e => "".concat(e, ":").concat(152721e4);
			var Ll = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Al = s.n(Ll);
			const {
				fbt: Fl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Dl = k.a.div("Icon", Al.a), Gl = () => u.a.createElement(Dl, {
				style: {
					backgroundImage: "url(".concat(M.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Ul = k.a.wrapped(et.f, "PrimaryButton", Al.a), Bl = k.a.wrapped(Zd, "Bread", Al.a);
			class Hl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ze.a.set(rs.i, Rl(Tl), Object(ol.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(Bl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, u.a.createElement(Gl, null), u.a.createElement(Xd, null, Fl._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Fl._param("=User Agreement", u.a.createElement(il.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Fl._("User Agreement", null, {
						hk: "XS57W"
					}))), Fl._param("=Privacy Policy", u.a.createElement(il.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Fl._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), u.a.createElement(Ul, {
						type: "submit"
					}, Fl._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var ql = Hl;

			function Wl() {
				return (Wl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Vl = [],
				Ql = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				zl = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Zl = {
					opacity: Object(w.spring)(0),
					x: Object(w.spring)(.6),
					y: Object(w.spring)(80, Ql)
				},
				Kl = k.a.wrapped(Dd.a, "SnooFacepalm", $d.a),
				Yl = k.a.wrapped(Gd.a, "SnooHappy", $d.a),
				Xl = k.a.wrapped(Fn.b, "SubredditIcon", $d.a),
				Jl = k.a.img("CustomIcon", $d.a),
				$l = k.a.div("Container", $d.a),
				eu = k.a.wrapped(Q.a, "Close", $d.a),
				tu = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(eu, Wl({
					className: "CloseIcon"
				}, e))),
				su = k.a.wrapped(Zd, "Bread", $d.a),
				nu = Object(h.c)({
					subredditIcon: Ud.c,
					toastSlices: e => e.toaster
				}),
				au = Object(m.b)(nu, e => ({
					dismissToast: t => () => e(Object(D.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(D.f)(s))
					}
				}));
			class ru extends u.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => ou(e, this.props.toastSlices), this.getWillEnterStyles = () => zl, this.getWillLeaveStyles = () => Zl
				}
				render() {
					return this.props.toastSlices.length ? u.a.createElement(w.TransitionMotion, {
						defaultStyles: Vl,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => u.a.createElement($l, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === Z.b.Custom && void 0 !== t.customToastType) {
							const n = cu[t.customToastType];
							return u.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Z.b.UappBanner) return u.a.createElement(ql, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Z.b.EuCookiePolicy) return u.a.createElement(fl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Z.b.AuthError) return u.a.createElement(al, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === Z.b.Modal ? et.f : et.n,
							a = t.kind === Z.b.Modal ? et.i : et.n;
						return u.a.createElement(su, {
							className: t.kind === Z.b.Modal ? $d.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Ld(t.name)) : void 0,
							style: s
						}, u.a.createElement("div", {
							className: $d.a.ContentWrapper
						}, iu(t, this.props.subredditIcon), u.a.createElement(Xd, null, t.text)), u.a.createElement("div", {
							className: $d.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && u.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Ad(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && u.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Fd(t.name))
							}
						}, t.secondButtonText)), u.a.createElement(tu, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const ou = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(w.spring)(1),
							x: Object(w.spring)(1, Ql),
							y: Object(w.spring)(0, Ql)
						}
					}))
				},
				iu = (e, t) => {
					if (e.customIconAsset) return u.a.createElement(Jl, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Z.b.Error:
							return u.a.createElement(Kl, null);
						case Z.b.SuccessAward:
						case Z.b.SuccessCommunity:
						case Z.b.SuccessCommunityGreen:
							return u.a.createElement(Yl, null);
						case Z.b.SuccessMod:
							return u.a.createElement(Xl, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				cu = {
					[Z.a.subscribeCap]: e => u.a.createElement(Ml, Ol({
						name: gl.LoggedOutMaxSubscriptions,
						sideImage: Il,
						title: n.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: n.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var du = au(Object(ce.c)(ru)),
				lu = s("./src/reddit/featureFlags/profileCollections.ts"),
				uu = s("./src/reddit/helpers/trackers/banners.ts"),
				mu = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				pu = s.n(mu);
			var bu = k.a.div("Wrapper", pu.a),
				hu = s("./src/reddit/components/AlertBanner/index.m.less"),
				gu = s.n(hu);
			const {
				fbt: fu
			} = s("./node_modules/fbt/lib/FbtPublic.js"), vu = () => u.a.createElement(bu, {
				className: Object(g.a)(gu.a.wrapper, gu.a.suspended)
			}, u.a.createElement("span", null, fu._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), u.a.createElement("a", {
				className: gu.a.underlineLink,
				href: "https://www.reddithelp.com/en/node/851"
			}, fu._("Learn more", null, {
				hk: "1OTc8q"
			}))), Cu = () => u.a.createElement(bu, {
				className: Object(g.a)(gu.a.wrapper, gu.a.fpr)
			}, u.a.createElement("span", null, fu._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), u.a.createElement("a", {
				className: gu.a.underlineLink,
				href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
			}, fu._("Learn more", null, {
				hk: "1OTc8q"
			}))), yu = e => {
				let {
					updateLink: t,
					onClickOldReddit: s
				} = e;
				return u.a.createElement(bu, {
					className: Object(g.a)(gu.a.wrapper, gu.a.deprecated)
				}, u.a.createElement("span", null, fu._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [fu._param("update your browser", u.a.createElement(Ou, {
					link: t
				}, fu._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), u.a.createElement("span", null, fu._("If you do not update your browser, we suggest you visit {old reddit} .", [fu._param("old reddit", u.a.createElement("a", {
					className: gu.a.underlineLink,
					href: M.a.oldRedditUrl,
					onClick: s
				}, fu._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Ou = e => {
				let {
					children: t,
					link: s
				} = e;
				return null !== s ? u.a.createElement("a", {
					className: gu.a.underlineLink,
					href: s
				}, t) : u.a.createElement("span", null, t)
			};
			class Pu extends u.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(uu.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(uu.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? u.a.createElement(yu, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? u.a.createElement(Cu, null) : s ? u.a.createElement(vu, null) : null
				}
			}
			var xu = Object(ce.c)(Pu),
				Eu = s("./src/reddit/components/AlertBanner/heights.ts"),
				Su = s("./src/reddit/components/PopupPortal/index.tsx"),
				ju = s("./src/reddit/constants/componentSizes.ts"),
				_u = s("./src/reddit/constants/elementIds.ts"),
				wu = s("./src/reddit/constants/posts.ts"),
				ku = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Mu = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Iu = s("./src/reddit/helpers/postCollection.ts"),
				Nu = s("./src/reddit/models/Theme/index.ts"),
				Tu = s("./src/reddit/selectors/notificationBanner.ts"),
				Ru = s("./src/reddit/selectors/posts.ts"),
				Lu = s("./src/reddit/components/AppRouter/index.m.less"),
				Au = s.n(Lu);

			function Fu() {
				return (Fu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Du = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Gu = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = Du(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return u.a.createElement("div", Fu({
						className: Object(g.a)(Au.a.main, {
							[Au.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				Uu = Object(v.a)(e => {
					var {
						className: t,
						overlayScrollContainerEl: s,
						theme: n
					} = e, a = Du(e, ["className", "overlayScrollContainerEl", "theme"]);
					const r = Object(me.a)(Object.assign({
						theme: n
					}, a));
					return u.a.createElement("div", Fu({
						className: Object(g.a)(Au.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Nu.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": "".concat(Object(cs.c)(s), "px")
						}
					}, a))
				}),
				Bu = e => {
					var {
						className: t,
						divRef: s
					} = e, n = Du(e, ["className", "divRef"]);
					return u.a.createElement("div", Fu({
						className: Object(g.a)(Au.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				Hu = Object(Tu.a)(_d.a.EmailCollectionBannerId),
				qu = Object(m.b)(() => Object(h.c)({
					currentPage: ss.b,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(Y.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Wt.s,
					isLoggedIn: Wt.H,
					isSubscriptionsPinned: Rn.b,
					isSuspended: Wt.M,
					isFPR: Wt.F,
					posts: Ru.R,
					profileCollectionsEnabled: lu.a,
					showEmailCollectionBanner: e => !Object(bs.J)(Object(ss.b)(e)) && Hu(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(b.b)(t)),
					onUnpinSubscriptions: () => e(Object(E.j)())
				})),
				Wu = (e, t) => !(!e.state || !e.state[U.a.IsOverlay] || t === e);
			class Vu extends u.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < ju.l && this.props.onUnpinSubscriptions()
					}, f.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(bs.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(f.yb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === wu.a.PROFILE;
							return !(!r || !Object(Iu.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(Y.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						location: t
					} = this.props, s = t.state && t.state[U.a.IsOverlay], n = Object(P.a)(this.previousLocation, e.location), a = Object(P.a)(this.previousLocation, this.props.location), r = s ? this.previousPage : this.props.currentPage;
					if (r) {
						const {
							meta: t,
							urlParams: s
						} = r, n = t && (t.name === f.Bb.INDEX || t.name === f.Bb.SUBREDDIT && s.subredditName === B.b.Popular), a = Object(Y.c)(this.props.frontpageSignupVariant), o = Object(Y.c)(e.frontpageSignupVariant);
						n || a || !o ? a && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || n || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const o = Wu(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = o ? "hidden" : ""
					})
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: s,
						isFPR: a,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						isSuspended: c,
						location: d,
						onClickOutsideOverlay: m,
						routes: p,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: h,
						isSignupUpsellHidden: g
					} = this.state, v = this.context, C = Wu(d, this.previousLocation);
					d.state && d.state[U.a.IsOverlay] && !C ? d.state[U.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[U.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[U.a.CloseLocation] && this.previousLocation.state[U.a.CloseLocation] === d.state[U.a.CloseLocation] ? d.state[U.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: i()(this.previousLocation.state, U.a.CloseLocation)
					}) : d.state[U.a.CloseLocation] = this.previousLocation);
					const y = Object(P.a)(this.previousLocation, d),
						O = C || y ? this.previousLocation : d,
						x = C || y ? this.previousPage : e,
						E = !(!(x && x.meta && x.meta.name === f.Bb.SEARCH_RESULTS && x && x.queryParams) || x.queryParams[q.q]),
						j = !(!x || !x.meta || x.meta.name !== f.Bb.MODERATION_PAGES),
						_ = Object(bs.w)(x),
						w = this.getIsPostCollection(),
						k = h && !g;
					return s ? n.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(bs.a.Provider, {
						value: x
					}, u.a.createElement(ur.c, {
						isOverlayOpen: C
					}, u.a.createElement(Rd.a, {
						forceRedditTheme: E
					}, h && u.a.createElement(Qe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), u.a.createElement(Qu, {
						browserInfo: v,
						isFPR: a,
						isInline: k,
						isSuspended: c
					})), u.a.createElement(ku.a.Provider, {
						value: !1
					}, u.a.createElement(Rd.a, {
						forceRedditTheme: E || j,
						isCommentsPage: _
					}, u.a.createElement(zu, {
						frontpageSignupVariant: t,
						isCommentsPage: _,
						isInline: k,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						location: O,
						overlayIsOpen: C,
						page: x,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))))), u.a.createElement(bs.a.Provider, {
						value: e
					}, C && u.a.createElement(ku.a.Provider, {
						value: !0
					}, u.a.createElement(Rd.a, {
						isOverlay: !0
					}, u.a.createElement(Zu, {
						isPostCollection: w,
						location: d,
						onClickOutsideOverlay: m,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))), u.a.createElement(Rd.a, null, u.a.createElement(l.Fragment, null, u.a.createElement("div", {
						id: Su.a,
						className: Au.a.popupContainer
					}), u.a.createElement(du, null), u.a.createElement(Td.a, null), b && u.a.createElement(S.a, null), u.a.createElement(us, null), u.a.createElement(_n, null)))))
				}
			}
			Vu.contextType = C.a;
			const Qu = Object(ce.c)(e => {
					const {
						browserInfo: t,
						isFPR: s,
						isInline: n,
						isSuspended: a
					} = e, r = {
						browserInfo: t,
						showFPR: s,
						showSuspended: a
					};
					return u.a.createElement(l.Fragment, null, u.a.createElement(xu, r), u.a.createElement(Sd, {
						className: Object(g.a)(Au.a.header, Object(Eu.b)(Au.a, r), {
							[Au.a.inline]: n
						})
					}))
				}),
				zu = Object(ce.c)(class extends u.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const s = i()(e, "key"),
							n = i()(t, "key");
						return r()(s, n)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const s = i()(e, ["key", "locationState"]),
								n = i()(t, ["key", "locationState"]);
							return r()(s, n)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: s,
							overlayIsOpen: n,
							isCommentsPage: a,
							isInline: r,
							isLoggedIn: o,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!o && !n && a);
						return u.a.createElement(Gu, {
							"aria-hidden": n,
							className: Object(g.a)(Object(Eu.b)(Au.a, this.props), {
								[Au.a.withUpsell]: !!e,
								[Au.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && u.a.createElement(Nd, {
							className: Object(g.a)(Au.a.pinnedSubscriptions, Object(Eu.b)(Au.a, this.props)),
							"data-redditstyle": !0
						}), u.a.createElement(p.f, {
							location: t
						}, s), c && u.a.createElement("div", {
							className: Object(g.a)(Au.a.bottomSpacer, Object(Eu.a)(Au.a, this.props))
						}))
					}
				});
			class Zu extends u.a.Component {
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
						if (this.mouseDownInWrapper && Object(x.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[U.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Mu.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(O.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Mu.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, {
						overlayScrollContainerEl: n
					} = this.state, a = !(!t || !t.meta || t.meta.name === f.Bb.SUBREDDIT_CREATION || t.meta.name === f.Bb.PUBLIC_ACCESS_NETWORK), r = e;
					return u.a.createElement(Uu, {
						className: Object(g.a)(Object(Eu.b)(Au.a, this.props), {
							[Au.a.mIsCommentsLightbox]: a,
							[Au.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: n
					}, u.a.createElement("div", {
						className: Object(g.a)(Au.a.overlayWrapper, Object(Eu.b)(Au.a, this.props))
					}, u.a.createElement("div", {
						className: Object(g.a)(Au.a.overlayScrollContainer, {
							[Au.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: _u.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, a && u.a.createElement(Bu, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(g.a)(Object(Eu.b)(Au.a, this.props), {
							[Au.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, u.a.createElement(jd.a, {
						page: t
					})), u.a.createElement(p.f, null, s), u.a.createElement("div", {
						className: Object(g.a)(Au.a.bottomSpacer, Object(Eu.a)(Au.a, this.props))
					}))))
				}
			}
			t.b = qu(Object(ce.c)(Vu))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => s.e("BannedUserModal").then(s.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/lib/classNames/index.ts");
			const l = Object(i.a)(() => Object(r.c)({
					post: c.O
				})),
				u = e => {
					let {
						className: t,
						post: s,
						onPostViewable: n,
						pixelPostHasEnteredView: r,
						pixelPostHasExitedView: i
					} = e;
					return s.isSponsored ? a.a.createElement(o.a, {
						post: s,
						trackDisplay: !0
					}, a.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(s.id))
					})) : null
				};
			t.default = l(u)
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: s = !0,
							location: n,
							showModal: a,
							dialogId: r
						} = this.props;
						return !(!s || e.pathname !== n.pathname) || (r && a(), !1)
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
					return a.a.createElement(o.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(o.i)(d))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Carousel/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return l
			}));
			var n, a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Carousel/index.m.less"),
				d = s.n(c);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(n || (n = {}));
			class l extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === n.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => Object.assign({}, e, {
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const s = 10 * t.items.length;
							return Object.assign({}, e, {
								pageNumber: (e.pageNumber + 1) % s,
								items: e.pageNumber === s - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							})
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
							style: s
						} = e;
						return r.a.createElement("img", {
							key: t,
							src: "".concat(o.a.assetPath, "/").concat(t),
							style: s
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: s,
							itemWidth: a,
							shouldHandleMouseClicks: c
						} = this.props, {
							pageNumber: l
						} = this.state, u = s === n.Fade ? {
							opacity: t === l ? 1 : 0
						} : {
							marginLeft: 0 === t ? -a * l : void 0
						};
						return r.a.createElement("div", {
							className: Object(i.a)(d.a.item, d.a[s]),
							key: "item-".concat(t),
							style: Object.assign({}, u, {
								backgroundImage: 'url("'.concat(o.a.assetPath, "/").concat(e.img, '")'),
								width: a
							}),
							onClick: c ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => r.a.createElement("div", {
						className: Object(i.a)(d.a.indicator, {
							[d.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						items: s
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(e, d.a.container)
					}, r.a.createElement("article", {
						className: d.a.items
					}, this.state.items.map(this.renderItem)), t && r.a.createElement("footer", {
						className: d.a.indicators
					}, s.map(this.renderIndicator)))
				}
			}
		},
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ChangeUsernameModals").then(s.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ChangeUsernameTooltip").then(s.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: b,
					url: h,
					usePreview: g
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.thumbnailContainer, t)
				}, a.a.createElement(o.a, {
					className: Object(r.a)(c.a.thumbnail, s),
					containerClassName: b,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					url: m ? void 0 : h,
					usePreview: g
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				chain: "sfueWOUNVDpNGfP_Ow2yN",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				header: "_11NEHYc92BkrvsxyhXvs1u",
				headerText: "_1vG6msVYgq5OQBCLLzIt82",
				headerLink: "_1c3Ogz8fnJBxW2EndGIWfX",
				saleHeaderImage: "_2uc3aprTjiTxA7wN8pS51w",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts"),
				i = s("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = s("./src/reddit/constants/modals.ts");
			const l = () => Object(o.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("CoinPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)()])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => a.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				goldStyle: "_2fGxX7IQlng74vsW862Y--",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, s) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_"
			}
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("EmailCollectionBanner").then(s.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = {},
				a = () => null;

			function r(e, t) {
				if (e in n) throw new Error("Modal with id ".concat(e, " already registered!"));
				n[e] = t
			}

			function o(e) {
				return e && e in n ? n[e] : a
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SPARKLE_ASSET_PATH", (function() {
				return g
			})), s.d(t, "STARBURST_ASSET_PATH", (function() {
				return f
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/selectors/gold/giveAwards.ts"),
				b = s("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				h = s.n(b);
			const g = "".concat(n.a.assetPath, "/img/gold/animated-sparkle-256.png"),
				f = "".concat(n.a.assetPath, "/img/gold/animated-starburst-256.png"),
				v = Object(c.c)({
					award: p.a
				}),
				C = Object(i.b)(v, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(C(e => {
				const {
					award: t,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const n = t.icon.url,
					r = a.fbt._("Animation of {award name} image", [a.fbt._param("award name", t.name)], {
						hk: "222osK"
					});
				return o.a.createElement("div", {
					className: h.a.gildAnimationContainer
				}, o.a.createElement("div", {
					className: Object(l.a)(h.a.animationComponent, h.a.starburst),
					style: {
						backgroundImage: "url(".concat(f, ")")
					}
				}), o.a.createElement("img", {
					alt: r,
					className: Object(l.a)(h.a.animationComponent, h.a.awardAsset),
					src: n
				}), o.a.createElement("div", {
					className: Object(l.a)(h.a.animationComponent, h.a.sparkle),
					style: {
						backgroundImage: "url(".concat(g, ")")
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "V6V7iCbDSFo5LexMzDv4B",
				iFrame: "V6V7iCbDSFo5LexMzDv4B"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, s) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				activeSale: "_24moloPNpotQ_Incvvxwtt",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, s) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, s) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/elementIds.ts"),
				o = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				i = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Header/Sparse.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(o.a, "Logo", l.a),
				p = u.a.wrapped(i.a, "Wordmark", l.a),
				b = u.a.div("SparseContainer", l.a),
				h = u.a.a("HomeExternalLink", l.a);

			function g(e) {
				return a.a.createElement(b, {
					id: r.c
				}, a.a.createElement(h, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, a.a.createElement(c.a, null, a.a.createElement(m, null), a.a.createElement(p, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, s) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
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
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				multi: "_3Hhjob0kyyqVjBXut8STgU",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, s) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				itemIcon: "_139PgjqaVJ8tq4kF4QznMX",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				itemCoin: "_334CPGEglbIA_2CwQAn43P",
				itemPremium: "yeM4RoZW6FtJxVPe3Z84C",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				itemPublicAccessNetwork: "_16Lm-ZR49L-1nxQV124cD-",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				chatIcon: "ra_3TRn5G7dbrfbhx8kYi",
				isActive: "_3aintJ344BVk82tG06NQea",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				counter: "_1YxELUk4ufCJBs-VhKVmA6",
				isHighlighted: "oKcz3mxVRK0Q74EoLhY-",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				myProfileIcon: "VIlSggfRUkuuHTKa_h8jp",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				toggleSwitch: "_179edq2yfZswDIo3NdeebM",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
			}
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				galleryIcon: "_16ZfB-TEDZe7GTSTpIP-RR",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				close: "c_rRg_d32D6ZO5sV8DmMM",
				closeText: "C9XkFfcvNxFrFRVdKxc8x"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/shortcuts/close.ts"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/colors.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				C = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				O = s("./src/reddit/icons/fonts/Link/index.tsx"),
				P = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				x = s("./src/reddit/icons/fonts/Text/index.tsx"),
				E = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/experiments/categories.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/components/LightboxHeader/index.m.less"),
				I = s.n(M);
			const N = Object(i.c)({
					isInCategoriesExperiment: w.a,
					post: k.n
				}),
				T = Object(o.b)(N, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: () => {
							e(Object(u.a)(s, !0))
						},
						toggleVote: (t, s) => e(s === _.a.upvoted ? Object(l.db)(t) : Object(l.z)(t))
					}
				}, (e, t, s) => Object.assign({}, e, t, s, {
					onVoteClick: n => {
						const a = e.post || s.post;
						a && t.toggleVote(a.id, n)
					}
				}));
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: s,
						page: o,
						post: i
					} = this.props, l = L[i && i.media ? i.media.type : j.o.EMBED], u = !i && o && o.meta && o.meta.name === d.Bb.META_MEMBERSHIP_PAYWALL_PAGE;
					return r.a.createElement("div", {
						className: Object(c.a)(I.a.container, e, {
							[I.a.isCollection]: i && Object(v.a)(i)
						})
					}, r.a.createElement("div", {
						className: I.a.postDetails
					}, i && r.a.createElement(a.Fragment, null, r.a.createElement(m.a, {
						className: I.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: i,
						onVoteClick: s,
						redditStyle: !0
					}), r.a.createElement(l, {
						className: I.a.mediaIcon
					}), r.a.createElement(b.c, {
						className: I.a.postTitle,
						post: i,
						size: b.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.a.lightboxHeaderText,
						titleLinkClassName: I.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(p.a, {
						post: i,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), u && o && o.urlParams.subredditName && r.a.createElement("div", {
						className: I.a.membershipPaywallTitle
					}, n.fbt._("{communityName} Special Membership", [n.fbt._param("communityName", "r/".concat(o.urlParams.subredditName))], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: I.a.actions
					}, r.a.createElement(f.n, {
						className: I.a.close,
						onClick: t || this.closeLightbox,
						title: n.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": n.fbt._("Close", null, {
							hk: "4gbyAA"
						})
					}, r.a.createElement(E.a, null), r.a.createElement("span", {
						className: I.a.closeText
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const L = {
				[j.o.GIFVIDEO]: y.a,
				[j.o.IMAGE]: P.a,
				[j.o.TEXT]: x.a,
				[j.o.RTJSON]: x.a,
				[j.o.VIDEO]: C.a,
				[j.o.EMBED]: O.a,
				[j.o.LIVEVIDEO]: C.a,
				[j.o.GALLERY]: e => r.a.createElement("i", {
					className: Object(c.a)(I.a.galleryIcon, e.className)
				}, r.a.createElement(S.a, null))
			};
			t.a = Object(h.c)(T(R))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				o = () => null;
			t.b = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(a.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, s) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.d)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = Object(n.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function l() {
				return Object(o.d)(e => Object(i.b)(e) || Object(c.E)(e)) ? r.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL"
			}
		},
		"./src/reddit/components/Root/redesignFont.less": function(e, t, s) {},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				listItemIcon: "fcDVF0HYfR8ZcZgQVT0oo",
				mTrending: "cuK0QQebBI_tpWwN_YN9M",
				listItemTitle: "_3HPgggOIyY0x9kiADxwwaj",
				mWithBorder: "_2Uets9AVOC4pygPHGHCAAM",
				listItem: "_20OHBqoDD71_8fv7tuG6u6",
				mHoverable: "_1IJwm0Qscr8yPuyii8YsSS",
				mFocused: "_1NDuQGNA_7Cuo411jRXLVg",
				mTypeahead: "_3NseKdP3_1HONmKk_kK3_l",
				listItemText: "_17mZueOafzj0Dlja0Wc9os",
				listItemSubtext: "_1CCbYggNpm1_k3lDTmKgSW",
				mNoPostTitle: "_3etfe7dx7ViSNcYo4Q--LD",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				dropdown: "_1HnfZtTmYelxTj6QL6aaXS",
				fixedTextTooltip: "_1U-nknzRP43RdLab5D4_lK",
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				postTitle: "YeMwUP22Up8CVxmgTayyQ"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~ShortcutWrapper"), s.e("ShortcutWrapper")]).then(s.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, s) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return O
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/isEqual.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/helpers/survey/index.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const m = (e, t) => {
					const s = u.experiment(e, t);
					return s ? {
						experiment_name: s.name,
						experiment_variant: s.variant,
						experiment_version: s.version
					} : {}
				},
				p = e => {
					switch (e) {
						case l.a.CES:
							return "ces";
						case l.a.CSAT:
							return "csat";
						case l.a.NPS:
							return "nps"
					}
				},
				b = (e, t) => s => Object.assign({
					source: "survey",
					action: t,
					noun: "intro"
				}, u.defaults(s), {
					survey: m(s, e)
				}),
				h = (e, t, s, n) => a => Object.assign({
					source: "survey",
					action: t,
					noun: "rating"
				}, u.defaults(a), {
					survey: Object.assign({
						type: p(s),
						min: s === l.a.NPS ? 0 : 1,
						max: s === l.a.NPS ? 10 : 7,
						score: n
					}, m(a, e))
				}),
				g = (e, t, s, n) => a => Object.assign({
					source: "survey",
					action: t,
					noun: "freeform_text"
				}, u.defaults(a), {
					survey: Object.assign({
						type: p(s),
						text: n
					}, m(a, e))
				});
			var f = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/experiments/index.ts"),
				y = s("./src/reddit/selectors/user.ts");
			const O = () => {
					const e = Object(i.c)(),
						[t, s] = Object(o.useState)(null),
						n = Object(f.a)(),
						a = Object(i.d)(y.g),
						d = Object(i.d)(y.jb),
						u = Object(i.d)(C.a, r.a),
						m = Object(o.useMemo)(() => {
							const e = Object(l.f)(),
								t = {};
							for (let s = 0; s < u.length; s++) e.includes(u[s].name) && (t[u[s].name] = u[s].variant);
							return t
						}, [u]),
						p = Object(o.useCallback)(e => {
							const n = Object(l.e)({
								actionType: e,
								surveyExperimentVariants: m,
								samplingId: a || d
							});
							n && n !== t && setTimeout(() => s(n), 1e3 * n.variants[m[n.experiment_name]].delay)
						}, [t, m, a, d]);
					return Object(o.useEffect)(() => {
						const e = Object(l.c)(),
							t = e.subscribe(p);
						return () => e.unsubscribe(t)
					}, [p]), Object(o.useEffect)(() => {
						if (!t) return;
						const s = Date.now();
						Object(l.g)(t, s), e(Object(c.H)({
							surveyLastSeenTime: s
						}, !1)), n(b(t.experiment_name, "display"))
					}, [t, e, n]), t
				},
				P = e => {
					let {
						activeStepNum: t,
						activeSurvey: s,
						isFollowUp: n,
						textResponse: a,
						setTextResponse: r,
						setIsSurveyDismissed: i
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: s
						} = e;
						const n = Object(o.useCallback)(e => {
							if (t && s.length) return e.preventDefault(), e.returnValue = "sure?", "sure?"
						}, [t, s]);
						Object(o.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: a
					});
					const [c, d] = Object(o.useState)(!1), l = Object(f.a)(), u = s.experiment_name, m = s.steps[t] && s.steps[t].type, p = Object(o.useCallback)(() => {
						t >= 0 ? d(!0) : (i(!0), l(b(s.experiment_name, "dismiss")))
					}, [t, s, l, i]), v = Object(o.useCallback)(() => {
						r(""), i(!0), l(n ? g(u, "dismiss", m) : h(u, "dismiss", m))
					}, [u, n, l, i, r, m]);
					return {
						isLeavingModalShowing: c,
						onClose: p,
						onLeaveCancel: Object(o.useCallback)(() => d(!1), []),
						onLeaveConfirm: v
					}
				},
				x = e => {
					let {
						activeSurvey: t,
						selectedNumber: s,
						setIsSurveyDismissed: n,
						setSelectedNumber: a,
						setTextResponse: r,
						textResponse: i
					} = e;
					const [c, d] = Object(o.useState)(-1), [u, m] = Object(o.useState)(0), [p, v] = Object(o.useState)(!1), C = Object(f.a)(), y = Object(o.useCallback)(() => {
						const e = t.experiment_name,
							o = t.steps[c] && t.steps[c].type,
							f = t.steps[c + 1] && t.steps[c + 1].type;
						if (m(u + 1), -1 === c) return C(b(e, "agree")), d(0), void C(h(e, "display", f));
						C(p ? g(e, "submit", o, i) : h(e, "submit", o, s && s + (o === l.a.NPS ? 0 : 1))), a(void 0), r(""), p || !t.steps[c].follow_up_question ? (v(!1), c + 1 >= t.steps.length ? n(!0) : (d(c + 1), C(h(e, "display", f)))) : (v(!0), C(g(e, "display", f)))
					}, [c, t, p, i, s, C, n, a, r, u]);
					return {
						activeStepNum: c,
						isFollowUp: p,
						onStepComplete: y,
						uiStep: u
					}
				},
				E = (e, t) => {
					const s = Object(i.c)();
					Object(o.useEffect)(() => {
						!e && t > 0 && setTimeout(() => {
							s(Object(d.e)({
								text: n.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: v.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [s, e, t])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/components/Survey/hooks.ts");
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("SurveyAsync").then(s.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});
			t.a = () => {
				const e = Object(o.d)();
				return e ? r.a.createElement(i, {
					activeSurvey: e
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/models/StructuredStyles/index.ts"),
				m = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/selectors/structuredStyles.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/CSSVariableProvider/index.tsx"),
				f = s("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
			class C extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: s
					} = this.props;
					return r.a.createElement(g.e, {
						theme: s,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const y = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
				if (Object(p.j)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.j)(e)) return Object(p.g)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.j)(e) || Object(h.cb)(e)) return;
				const s = v(e, t);
				if (!s) return;
				const n = Object(b.F)(e, s);
				if (!n) return;
				if (Object(h.bb)(e, {
						subredditId: n
					})) return;
				const a = e.structuredStyles.models[n];
				return a || void 0
			}), (e, t) => {
				const s = v(e, t);
				if (!s) return;
				const n = Object(b.x)(e, {
					subredditName: s
				});
				return n ? n.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.lb)(e).nightmode
			}, (e, t) => {
				if (!Object(h.lb)(e).hideNSFW) return !0;
				const s = v(e, t);
				if (s) {
					const t = Object(b.A)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const n = Object(l.d)(e, t);
				return !!n && n.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, s, a, r, o, i, c, d, l, p) => {
				const b = Object.assign({}, i ? {
						emojiWidth: i[0],
						emojiHeight: i[1]
					} : {}, {
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					}),
					h = r && r.length && !Object(f.a)(r) ? "SubredditVars-r-".concat(r) : g.c;
				if (t && s && a) {
					const e = Object(u.h)(s, a);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (o) {
					const e = Object(u.h)(o);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(n.merge)(e, {
						subredditContext: b
					})
				}
			}))(C);
			t.b = y;
			const O = Object(d.t)()(y)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, s) {
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
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, s) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, s) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, s) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/AdViewability/index.tsx"),
				o = s("./src/reddit/components/BlankPost/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends a.a.Component {
				render() {
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						children: s,
						post: n,
						onPostViewable: i
					} = this.props;
					if (n) return n.isBlank ? a.a.createElement(o.BlankPost, {
						post: n,
						onPostViewable: i,
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t
					}) : a.a.createElement(r.a, {
						post: n,
						trackDisplay: !0
					}, s)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/UserIcon/UserIcon.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const u = Object(o.c)({
					currentUser: i.i,
					isNightMode: i.S,
					shouldHideNSFW: i.z
				}),
				m = Object(r.b)(u);
			t.a = m(e => {
				const {
					currentUser: t
				} = e, s = l(e, ["currentUser"]);
				return a.a.createElement(c.a, d({}, s, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				}))
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, s) {
			"use strict";
			var n, a, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})), s.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/"
				}(n || (n = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.Register = "register", e.Resize = "resize", e.ShowSubscriptions = "showSubscriptions", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(a || (a = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "j", (function() {
				return i
			})), s.d(t, "k", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			const n = "DEFAULT",
				a = "",
				r = "All Communities",
				o = "top",
				i = "MOD",
				c = "moderating",
				d = "LOCAL_COMMUNITIES",
				l = "near-you",
				u = "/subreddits/leaderboard/",
				m = {
					id: a,
					name: a,
					path: "".concat(u)
				},
				p = {
					id: d,
					name: l,
					path: "".concat(u).concat(l, "/")
				},
				b = [{
					name: "Sports",
					id: "c1015",
					path: "".concat(u, "sports/")
				}, {
					name: "News",
					id: "c1009",
					path: "".concat(u, "news/")
				}, {
					name: "Gaming",
					id: "c1019",
					path: "".concat(u, "gaming/")
				}, {
					name: "Aww",
					id: "c1000",
					path: "".concat(u, "aww/")
				}],
				h = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/brcast/dist/brcast.es.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = r.a.createContext(Object(n.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(n.createContext)(o);

			function c(e) {
				return t => a.a.createElement(i.Consumer, null, s => {
					let {
						apiContext: n,
						gqlContext: o
					} = s;
					return a.a.createElement(e, r({
						apiContext: n,
						gqlContext: o
					}, t))
				})
			}
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/featureThrottling.ts"),
				o = s("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(n.createContext)(i), e), {});
			class d extends a.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = o.a.isFeatureThrottled(t);
							this.setState(s => e === s[t].isThrottled ? null : Object.assign({}, s, {
								[t]: Object.assign({}, s[t], {
									isThrottled: e
								})
							}))
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, s) => (o.a.isFeatureThrottled(s) && (t[s] = Object.assign({}, e[s], {
								isThrottled: !0
							})), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const s = c[t];
						return a.a.createElement(s.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: o.a.resetFeature.bind(o.a, t),
						throttleFeature: o.a.throttleFeature.bind(o.a, t)
					}, e), {})
				}
				componentDidMount() {
					o.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					o.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = s.n(c);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, a.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? a.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : a.a.createElement(o.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, s) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = s.n(a);
			t.a = n.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, s) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Link/index.m.less"),
				r = s.n(a);
			t.a = n.a.a("link", r.a)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = s.n(m),
				b = s("./src/reddit/controls/Search/index.m.less"),
				h = s.n(b);
			const g = Object(r.b)(() => Object(o.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const s = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						s[t.subredditName] = Object(u.A)(e, {
							subredditName: t.subredditName
						})
					}), s
				})
			}));
			t.a = g(e => a.a.createElement("div", {
				className: Object(i.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => a.a.createElement(d.a, {
				key: "".concat(t.subredditName, "-hoverCard"),
				subredditName: t.subredditName
			}, a.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: "/r/".concat(t.subredditName, "/"),
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : a.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && a.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/ToggleSwitch/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.on,
				className: Object(r.a)(i.a.toggleSwitch, e.className, {
					[i.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
					[i.a.mDisabled]: e.disabled
				}),
				style: e.on && !e.disabled && e.activeColorOverride ? {
					backgroundColor: e.activeColorOverride
				} : void 0,
				id: e.id,
				role: "switch",
				tabIndex: e.tabIndex,
				type: "button",
				onClick: () => !e.disabled && e.onToggle && e.onToggle()
			}, a.a.createElement("div", {
				className: i.a.toggleDisplay
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/Typography/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Typography/index.m.less"),
				r = s.n(a);
			n.a.h1("heading1", r.a), n.a.h2("heading2", r.a), n.a.h3("heading3", r.a), n.a.h4("heading4", r.a);
			const o = n.a.h5("heading5", r.a),
				i = (n.a.h6("heading6", r.a), n.a.p("body1", r.a), n.a.p("body2", r.a)),
				c = (n.a.p("actionFont", r.a), n.a.p("metadata", r.a));
			n.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				o = (e, t) => Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/stripe-connect-links"),
					method: "post"
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me"),
					method: "patch",
					data: {
						stripe: {
							authorization: Object.assign({}, t, {
								scope: "read_write"
							})
						}
					}
				})
			}

			function i(e) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me"),
					method: "get"
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/stripe-sources/").concat(t),
					method: "delete"
				})
			}

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-sources/").concat(t),
					method: "delete"
				})
			}
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				r = s("./src/reddit/constants/headers.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts"),
				i = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(Object(a.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(i.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign({}, e, {
							body: t
						})
					}
					return e
				})
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/merge.js"),
				a = s.n(n),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/badges.ts"),
				i = s("./src/reddit/endpoints/governance/community.ts"),
				c = s("./src/reddit/endpoints/governance/products/badges.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, s) {
				const n = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(o.c)(e, t, s),
					[b, h, g, f] = await Promise.all([l, u, m, p]);
				if (b.ok ? n.collections = b.body : n.errors.collections = b.error, h.ok) {
					const e = h.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return g.ok ? n.products = g.body : n.errors.products = g.error, f.ok ? (a()(n.badges, f.body.badges), n.userOwnedBadges = f.body.userOwnedBadges) : n.errors.userBadges = f.error, n
			}
			const u = (e, t) => Object(d.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/GetNearbySubreddits.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, Object.assign({}, n, {
				variables: t
			}))
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/TopSubreddits.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, Object.assign({}, n, {
				variables: t
			}))
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/thumbnails.ts");

			function a(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW)
			}
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./src/reddit/helpers/name/index.ts");
			const a = (e, t) => t.map(t => {
					const s = Object(n.f)(t.name),
						a = s.split(" & ").join("_and_");
					return Object.assign({}, t, {
						name: s,
						path: t.path || "".concat(e).concat(a, "/")
					})
				}),
				r = e => Object(n.f)(e).split("_and_").join(" & ")
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = () => new BroadcastChannel("external_account"),
				a = e => {
					const t = n();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isEmpty.js");
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				a = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const r = e => {
					let {
						edges: t,
						pageInfo: s
					} = e;
					const r = {},
						o = [];
					for (let i of t) {
						const {
							node: e
						} = i, t = a(i, ["node"]), s = Object(n.a)(e);
						r[s.id] = s, o.push(t)
					}
					return {
						pageInfo: s,
						rankings: o,
						subreddits: r
					}
				},
				o = e => {
					let {
						edges: t
					} = e;
					const s = {},
						r = [];
					for (let o of t) {
						const {
							node: e
						} = o, t = a(o, ["node"]), i = Object(n.a)(e);
						s[i.id] = Object.assign({}, i, {
							bannerBackgroundImage: e && e.styles && e.styles.bannerBackgroundImage
						}), r.push(t)
					}
					return {
						rankings: r,
						subreddits: s
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: s
					} = e;
					const a = {},
						r = [];
					let o = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(n.a)(i);
						a[e.id] = Object.assign({}, e, {
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}), r.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: r,
						subreddits: a,
						pageInfo: s
					}
				}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, s) {
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
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = s.n(d);
			const u = i.a.button("button", l.a),
				m = e => t => a.a.createElement("div", {
					className: t.className
				}, e);
			t.b = function(e, t, s, n) {
				const i = e,
					d = "function" == typeof t ? t : m(t);
				return s ? e => a.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank"
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), a.a.createElement(d, {
					className: l.a.body
				}), n && a.a.createElement("div", {
					className: l.a.metaContainer
				}, n), a.a.createElement(c.a, {
					className: l.a.outboundLink
				})) : e => e.href ? a.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: !!e.isLit
					})
				}), a.a.createElement(d, {
					className: l.a.body
				}), n && a.a.createElement("div", {
					className: l.a.metaContainer
				}, n)) : a.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.button),
					onClick: e.onClick
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), a.a.createElement(d, null))
			}
		},
		"./src/reddit/helpers/survey/config.json": function(e) {
			e.exports = JSON.parse('{"survey_cooldown_days":1,"active_surveys":[{"experiment_name":"nps_survey_scroll_trigger","trigger_event":"feed_scroll_1_page","variants":{"control_1":{"survey_enabled":false,"trigger_threshold":0,"sample_factor":1},"control_2":{"survey_enabled":false,"trigger_threshold":0,"sample_factor":1},"enabled":{"survey_enabled":true,"trigger_threshold":2,"sample_factor":0.5}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What\'s your main reason for feeling that way?"}]},{"experiment_name":"survey_demo_nps_1","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":1}},"steps":[{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What is the primary reason for your score?"}]},{"experiment_name":"survey_demo_combined_1","trigger_event":"feed_scroll_1_page","variants":{"enabled":{"survey_enabled":true,"trigger_threshold":1,"sample_factor":1}},"steps":[{"type":"CES","question":"How easy was it to create a post?","follow_up_question":"What, if anything, would make it easier to create a post?"},{"type":"CSAT","question":"How satisfied are you with your experience on Reddit today?","follow_up_question":null},{"type":"NPS","question":"How likely are you to recommend Reddit to a friend?","follow_up_question":"What is the primary reason for your score?"}]}]}')
		},
		"./src/reddit/helpers/survey/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/brcast/dist/brcast.es.js"),
				a = s("./node_modules/lodash/once.js"),
				r = s.n(a),
				o = (s("./node_modules/core-js/modules/es6.regexp.split.js"), function(e, t, s) {
					return t = t || 1, (s = s || 0) + (9301 * (e = "number" == typeof e ? e : e.split("").reduce((e, t) => t.charCodeAt(0) + e, 0)) + 49297) % 233280 / 233280 * (t - s)
				}),
				i = s("./src/reddit/actions/survey/constants.ts"),
				c = s("./src/reddit/helpers/localStorage/index.ts");
			const d = s("./src/reddit/helpers/survey/config.json"),
				l = r()(() => Object(n.a)());
			var u;
			! function(e) {
				e.CES = "CES", e.CSAT = "CSAT", e.NPS = "NPS"
			}(u || (u = {}));
			const m = {
					[i.a]: "feed_scroll_1_page"
				},
				p = e => {
					let {
						actionType: t,
						surveyExperimentVariants: s,
						samplingId: n
					} = e;
					const a = Object(c.z)(),
						r = Object(c.A)(),
						i = 864e5 * d.survey_cooldown_days;
					if (!r || !r[t] || a && Date.now() - a <= i) return null;
					const l = [],
						{
							active_surveys: u
						} = d;
					for (let c = 0; c < u.length; c++) {
						const {
							experiment_name: e,
							trigger_event: a,
							variants: i
						} = u[c], d = i[s[e]];
						a !== t || !r[a] || !d || !d.survey_enabled || r[a] < d.trigger_threshold || o(n + e) > d.sample_factor || l.push(u[c])
					}
					return l.length ? l[Math.floor(Math.random() * l.length)] : null
				},
				b = (e, t) => {
					const {
						trigger_event: s
					} = e;
					Object(c.gb)(t), Object(c.J)(s)
				},
				h = () => d.active_surveys.map(e => e.experiment_name),
				g = e => e.steps.reduce((e, t) => e + 1 + (t.follow_up_question ? 1 : 0), 0)
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => Object.assign({
					source: "dfp",
					action: "request",
					noun: "ad"
				}, a.defaults(e), {
					subreddit: a.subreddit(e)
				}),
				o = () => e => Object.assign({
					source: "dfp",
					action: "define",
					noun: "ad"
				}, a.defaults(e), {
					subreddit: a.subreddit(e)
				}),
				i = (e, t) => s => {
					const r = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						o = -1 !== r.indexOf(n.c.ABOVE_THE_FOLD) ? n.c.ABOVE_THE_FOLD : n.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + r);
					let c, d;
					if (i && (c = n.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = n.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = "".concat(e.offsetWidth, "x").concat(e.offsetHeight)
					}
					const l = t ? "aax" : void 0;
					return Object.assign({
						source: "post",
						action: "view",
						noun: "programmatic_ad"
					}, a.defaults(s), {
						subreddit: a.subreddit(s),
						programmatic: {
							adUnit: d ? "DESKTOP ".concat(d, " ").concat(o) : "DESKTOP ".concat(o),
							count: 1,
							partner: l,
							type: c
						}
					})
				},
				c = (e, t, s) => r => Object.assign({
					source: "post",
					action: "view",
					noun: "programmatic_ad"
				}, a.defaults(r), {
					subreddit: a.subreddit(r),
					programmatic: {
						adUnit: null !== e && null !== t ? "DESKTOP ".concat(e, "x").concat(t, " ").concat(s) : "DESKTOP ".concat(s),
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				})
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					const t = Object(a.o)(e);
					return {
						actionInfo: Object(r.actionInfo)(e),
						post: t && Object(r.post)(e, t) || null,
						profile: Object(r.profile)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e)
					}
				},
				i = e => t => Object.assign({
					source: e,
					action: n.c.CLICK,
					noun: "login"
				}, o(t)),
				c = e => t => Object.assign({
					source: e,
					action: n.c.CLICK,
					noun: "signup"
				}, o(t)),
				d = () => e => Object.assign({
					source: "user_dropdown",
					action: n.c.CLICK,
					noun: "login_signup"
				}, o(e))
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = (e, t) => s => Object.assign({
					source: "announcement",
					noun: "announcement",
					action: "dismiss",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}, t && {
					announcement: {
						id: t.id,
						title: t.title,
						body: t.description || ""
					}
				}),
				a = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => Object.assign({}, Object(n.defaults)(t), {
					customFeed: Object(n.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "delete"
				}),
				o = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "follow"
				}),
				i = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "share"
				}),
				l = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return E
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/models/Gold/ProductOffer.ts"),
				r = s("./src/reddit/selectors/gold/giveAwards.ts"),
				o = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				d = s("./src/reddit/selectors/telemetry.ts"),
				l = s("./src/telemetry/models/GoldPurchase.ts"),
				u = s("./src/telemetry/models/Payment.ts"),
				m = s("./src/reddit/helpers/trackers/gild.ts"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/isComment.ts");
			const h = (e, t) => {
					const {
						thingId: s,
						packageId: c
					} = t, u = !!s, h = r.a(e), g = h ? Object(m.getAwardTypeFromAward)(h) : null, f = u ? g : i.m(e) ? l.Premium : l.Coins, v = s ? Object(b.a)(s) ? "comment" : "post" : void 0, C = c || i.q(e), y = [...Object(o.b)(e), ...Object(o.d)(e)].filter(e => e.mobileId === C)[0], O = Object(a.b)(y, u), P = y ? Math.round(1e4 * (y.baselinePennies - y.pennies) / y.baselinePennies) / 100 : 0, x = y ? Math.round(1e4 * (y.coins - y.baselineCoins) / y.coins) / 100 : 0, E = y ? y.baselinePennies !== y.pennies ? "".concat(P, "_percent_price") : y.baselineCoins !== y.coins ? "".concat(x, "_percent_bonus") : void 0 : void 0, S = f === l.Premium ? n.ob : y ? y.pennies : void 0;
					return Object.assign({}, d.defaults(e), {
						comment: s ? d.comment(e, s) : null,
						correlationId: i.o(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: s ? d.post(e, s) : null,
						screen: d.screen(e),
						subreddit: s ? d.subreddit(e) : null,
						goldPurchase: Object.assign({}, h ? {
							awardId: h.id,
							awardName: h.name,
							numberCoinsToRecipient: h.coinReward
						} : null, {
							type: f,
							gildedContent: u,
							contentType: v,
							numberCoins: y ? y.coins : void 0,
							offerContext: O,
							offerType: E
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: S
						},
						purchase: {
							priceMicros: S
						}
					})
				},
				g = (e, t) => s => Object.assign({}, h(s, {
					packageId: t,
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				f = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				v = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				C = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				y = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = e => t => Object.assign({}, h(t, {
					packageId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				P = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t) => s => {
					const n = h(s, {
						packageId: t,
						thingId: e
					});
					return Object.assign({}, n, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, n.payment, {
							defaultOption: u.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, n.goldPurchase, {
							source: e ? l.GiveGold : i.m(s) ? l.PremiumMarketing : l.CoinsMarketing
						})
					})
				},
				E = e => t => {
					const s = h(t, {
						thingId: e
					});
					return Object.assign({}, s, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, s.payment, {
							method: Object(c.b)(t).queryParams.thanks ? u.PaymentMethod.Paypal : u.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "q", (function() {
				return v
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "t", (function() {
				return P
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "c", (function() {
				return _
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: n.post(s, t)
				}),
				o = (e, t) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: n.comment(s, t)
				}),
				i = a("show_panel"),
				c = a("esc_close"),
				d = e => r("enter_open_post", e),
				l = e => o("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => o("j_next", e),
				p = e => r("k_previous", e),
				b = e => o("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => o("s_save", e),
				C = e => r("h_hide", e),
				y = e => r("x_expando", e),
				O = e => r("a_upvote", e),
				P = e => o("a_upvote", e),
				x = e => r("z_downvote", e),
				E = e => o("z_downvote", e),
				S = a("c_create_post"),
				j = e => r("l_go_to_link", e),
				_ = e => o("r_comment", e);
			a("q_navigation")
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = "/wiki";
				return e.subredditName && (s = "/r/".concat(e.subredditName, t ? "/about/wiki" : "/wiki"), e.wikiSubRoute && (s += "/".concat(e.wikiSubRoute))), e.wikiPageName ? s += "/".concat(e.wikiPageName.toLowerCase()) : e.wikiSubRoute || (s += "/".concat(n.i)), s
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(o.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || r.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, s) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/All/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z"
			}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), a.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), a.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), a.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), a.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), a.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), a.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/KarmaGray/index.m.less": function(e, t, s) {
			e.exports = {
				karma: "_2HCuqd3NYACKYaSTmrITE3"
			}
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), a.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const r = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				d: "M2.3 5.4v1.7c0 .3-.1.5-.3.7-.3.2-.5.3-.9.3-.3 0-.5-.1-.8-.3-.2-.2-.3-.4-.3-.7V1C0 .7.1.5.3.3.6.1.8 0 1.1 0h3c1 0 1.7.2 2.3.6.7.5 1 1.2 1 2.1 0 .8-.3 1.4-1 2 0 .1-.2.1-.3.2l1.2 1.7c.1.1.2.3.2.5 0 .3-.1.5-.3.7-.3.2-.6.3-.9.3-.4 0-.8-.2-1-.5L3.9 5.4H2.3zM4 1.8H2.3v1.9H4c.3 0 .5-.1.8-.2.2-.2.3-.4.3-.8 0-.3-.1-.6-.3-.7-.2-.2-.5-.2-.8-.2zM9.9 0h2.9c.9 0 1.6.2 2.2.6.6.6 1 1.3 1 2.3 0 1-.4 1.8-1.2 2.3-.5.4-1.2.6-2 .6H11v1.4c0 .3-.1.5-.3.7-.2.1-.5.2-.8.2s-.6-.1-.8-.3c-.3-.2-.4-.4-.4-.7V1c0-.3.1-.5.3-.7.3-.2.6-.3.9-.3zm3.8 2.9c0-.4-.2-.7-.5-.9-.2-.1-.5-.2-.8-.2H11V4h1.4c.3 0 .6-.1.8-.2.3-.2.5-.5.5-.9zM7.4 11.3v3.8c0 .3-.1.5-.3.7-.3.1-.6.2-.9.2-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-1.3H2.3V15c0 .3-.1.5-.3.7-.3.2-.5.3-.9.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.6v-3.8c0-.5.1-1 .4-1.4s.6-.8 1-1.1c.6-.4 1.4-.6 2.3-.6.9 0 1.7.2 2.3.6.5.3.8.7 1 1.1s.4.9.4 1.4zM3.7 10c-.4 0-.7.1-.9.3-.3.2-.5.6-.5 1.1v.6h2.8v-.6c0-.5-.2-.9-.5-1.1-.2-.2-.5-.3-.9-.3zm8.4 0c-.6 0-1 .2-1.3.5-.2.2-.3.6-.3 1.1v3.6c0 .3-.1.5-.3.7-.2 0-.5.1-.8.1-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-3.8c0-.8.3-1.5.8-2.1.7-.7 1.7-1.1 3.1-1.1 1.4 0 2.4.4 3.1 1.1.5.5.8 1.2.8 2.1V15c0 .3-.1.5-.3.7-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-3.6c0-.5-.1-.8-.3-1.1-.5-.2-.9-.3-1.5-.3z"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, a.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), a.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), a.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), a.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), a.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = (s("./src/polyfill.ts"), s("./src/lib/performanceTimings/index.tsx")),
				r = s("./node_modules/@r/google-tag-manager/compiled.js"),
				o = s("./src/config.ts"),
				i = s("./node_modules/history/esm/history.js"),
				c = s("./node_modules/js-cookie/src/js.cookie.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				m = s("./node_modules/react-router-redux/es/index.js"),
				p = s("./node_modules/redux-thunk/es/index.js"),
				b = s("./node_modules/request-idle-callback/index.js"),
				h = s("./src/lib/browser/isIncognito.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/extractQueryParams/index.ts"),
				v = s("./src/lib/filterQueryParams/index.ts"),
				C = s("./src/lib/getParsedUserAgent/index.ts"),
				y = s("./src/lib/initializeClient/index.tsx"),
				O = s("./src/lib/matchRoute/index.ts"),
				P = s("./src/lib/performance.js"),
				x = s("./src/lib/reCaptchaEnterprise/index.ts"),
				E = s("./src/lib/safeJSONParse/index.ts"),
				S = s("./src/reduxMiddleware/apiContext.ts"),
				j = s("./src/telemetry/index.ts"),
				_ = s("./src/telemetry/models/Timer.ts"),
				w = s("./src/reddit/actions/apiRequestHeaders.ts"),
				k = s("./src/reddit/actions/chat/toggle.ts"),
				M = s("./src/reddit/actions/chat/unreadCount.ts"),
				I = s("./src/reddit/actions/emailCollection/index.ts"),
				N = s("./src/reddit/actions/emailVerification.ts"),
				T = s("./src/reddit/actions/media.ts"),
				R = s("./src/reddit/actions/multireddit/index.ts"),
				L = s("./src/reddit/actions/notifications/loader.ts"),
				A = s("./src/reddit/actions/notifications/state.ts"),
				F = s("./src/reddit/actions/nps.ts"),
				D = s("./src/reddit/actions/platform.ts"),
				G = s("./src/reddit/actions/reCaptchaEnterprise.ts"),
				U = s("./src/reddit/actions/session.ts"),
				B = s("./src/reddit/actions/survey/index.ts"),
				H = s("./src/reddit/actions/theme.ts"),
				q = s("./src/reddit/actions/toaster.ts"),
				W = s("./src/reddit/actions/users.ts"),
				V = s("./node_modules/react-redux/es/index.js"),
				Q = s("./node_modules/react-router/esm/react-router.js"),
				z = s("./node_modules/reselect/es/index.js"),
				Z = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				K = s.n(Z),
				Y = s("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				X = s("./src/lib/doubleclickForPublishers/index.ts"),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/ads.ts"),
				ee = s("./src/reddit/selectors/meta.ts");
			const te = Object(z.c)({
				region: ee.m
			});
			class se extends u.a.Component {
				constructor(e) {
					super(e), Object(X.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object($.b)()),
						onAdView: (e, t) => {
							Math.random() <= o.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object($.c)(e, t))
						}
					})
				}
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return null
				}
			}
			var ne = Object(V.b)(te)(Object(J.c)(se)),
				ae = s("./src/reddit/components/AppRouter/index.tsx"),
				re = s("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				oe = s("./src/reddit/constants/shortcuts.ts"),
				ie = s("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				ce = s.n(ie);
			var de = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: ce.a.shortcutDiv,
						id: oe.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				le = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ue = s("./src/reddit/components/Header/Sparse.tsx"),
				me = s("./src/reddit/components/ThemeProvider/index.tsx"),
				pe = s("./src/reddit/contexts/InsideOverlay.tsx"),
				be = s("./src/reddit/controls/Button/index.tsx"),
				he = s("./src/reddit/featureFlags/index.ts"),
				ge = e => u.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 52 52"
				}, u.a.createElement("path", {
					d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
				}), u.a.createElement("path", {
					fill: "#fff",
					d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
				}), u.a.createElement("path", {
					d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
				}), u.a.createElement("path", {
					d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
				}), u.a.createElement("path", {
					d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
				}), u.a.createElement("path", {
					d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
				}), u.a.createElement("path", {
					fill: "#fff",
					d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
				}), u.a.createElement("path", {
					d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
				})),
				fe = s("./src/reddit/pages/InternalServerError/index.m.less"),
				ve = s.n(fe);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(z.c)({
				showError: he.d.showVerboseErrors
			}), Oe = Object(V.b)(ye)(e => u.a.createElement(pe.a.Provider, {
				value: !1
			}, u.a.createElement(me.b, {
				subredditName: ""
			}, u.a.createElement("div", null, u.a.createElement(ue.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), u.a.createElement("div", {
				className: ve.a.container
			}, u.a.createElement("div", {
				className: ve.a.mainContent
			}, u.a.createElement(ge, {
				className: ve.a.dizzySnoo
			}), u.a.createElement("h3", {
				className: ve.a.title
			}, Ce._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), u.a.createElement("div", {
				className: ve.a.subTitle
			}, Ce._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), u.a.createElement(be.f, {
				onClick: () => window.location.reload(!0)
			}, Ce._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && u.a.createElement("div", {
				className: ve.a.subTitle
			}, e.error.message)), u.a.createElement("div", {
				className: ve.a.topImageContainer
			}, u.a.createElement("img", {
				className: ve.a.image,
				src: "".concat(o.a.assetPath, "/img/error/star_pattern.png")
			})), u.a.createElement("div", {
				className: ve.a.bottomImageContainer
			}, u.a.createElement("img", {
				className: ve.a.image,
				src: "".concat(o.a.assetPath, "/img/error/half_planet.png")
			})))))));

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(z.c)({
					theme: e => e.themes.current
				}),
				Ee = Object(V.b)(xe, {})(e => {
					let {
						children: t,
						theme: s
					} = e;
					const n = Object(le.a)({
						theme: s
					});
					return u.a.createElement("div", {
						className: K.a.container,
						style: {
							"--background": n.body,
							"--canvas": n.canvas
						}
					}, t)
				});
			var Se = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return u.a.createElement(J.a, null, u.a.createElement(Ee, null, u.a.createElement(ne, null), u.a.createElement(Y.a, null), u.a.createElement(re.a, null), u.a.createElement(de, null, u.a.createElement(t, null, u.a.createElement(Q.d, {
						component: je(s)
					})))))
				}
				return u.a.createElement(Oe, {
					error: e.error
				})
			};
			const je = e => t => u.a.createElement(ae.b, Pe({
				routes: e
			}, t));
			var _e = s("./src/reddit/constants/localStorage.ts"),
				we = s("./src/reddit/selectors/user.ts"),
				ke = s("./node_modules/lodash/throttle.js"),
				Me = s.n(ke),
				Ie = s("./src/reddit/helpers/localStorage/index.ts");
			const Ne = 1e3;
			class Te extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Me()(() => Object(Ie.W)(this.props.storageKey, this.props.value), Ne)
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
			Te.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Re = Object(z.a)(we.H, e => ({
				storageKey: _e.p,
				value: {},
				enabled: !e
			}));
			var Le = Object(V.b)(Re)(Te);
			var Ae = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Le, null)),
				Fe = s("./src/reddit/constants/headers.ts"),
				De = s("./src/reddit/constants/history.ts"),
				Ge = s("./src/reddit/constants/jsapiEvents.ts"),
				Ue = s("./src/reddit/constants/parameters.ts"),
				Be = s("./src/reddit/constants/screenWidths.ts"),
				He = s("./src/reddit/contexts/AdminEvents.ts"),
				qe = s("./src/reddit/contexts/ApiContext.tsx"),
				We = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Ve = s("./node_modules/brcast/dist/brcast.es.js"),
				Qe = s("./src/telemetry/helpers/sendEvent.ts"),
				ze = s("./src/reddit/selectors/runTimeEnvVars.ts");
			var Ze = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Ve.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(ze.b)(n) || Object(we.E)(n)) && (e = !0, Object(Qe.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(ze.b)(o)) {
									const s = Object(we.E)(o);
									e && !s ? (e = !1, Object(Qe.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(Qe.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(Ve.a)([]),
					middleware: () => e => t => e(t)
				}),
				Ke = s("./src/reddit/customMiddleware/gqlContext.ts"),
				Ye = s("./node_modules/lodash/debounce.js"),
				Xe = s.n(Ye),
				Je = s("./src/lib/domUtils/index.ts");
			const $e = 30 * g.eb;
			let et = Date.now();
			const tt = () => {
					et = Date.now()
				},
				st = !!Object(Je.f)() && {
					passive: !0
				};
			window.addEventListener("click", tt, !1), window.addEventListener("wheel", Xe()(tt, 250), st), window.addEventListener("mousemove", Xe()(tt, 250), st), window.addEventListener("keydown", Xe()(tt, 250), st);
			var nt = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - et >= $e ? (e.dispatch(U.h()), tt()) : tt()
					})), e => t => e(t)
				},
				at = s("./node_modules/lodash/pick.js"),
				rt = s.n(at),
				ot = s("./src/reddit/actions/header.ts"),
				it = s("./src/reddit/actions/preferences.ts"),
				ct = s("./src/reddit/constants/cookie.ts"),
				dt = s("./src/reddit/constants/preferences.ts");
			const lt = new Set([it.f, it.i, H.b, it.c, it.o, ot.d, ot.e, it.r]);
			var ut = e => t => s => {
					const n = t(s);
					if (lt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: rt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", dt.b, dt.d, dt.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), d.a.set(ct.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: o.a.cookieDomain
						})
					}
					return n
				},
				mt = s("./src/lib/fastdom/index.ts"),
				pt = s("./src/reddit/actions/tabBadging.ts"),
				bt = s("./src/reddit/selectors/chat.ts"),
				ht = s("./src/server/helpers/seoMetadata.tsx");
			var gt = "undefined" != typeof document ? e => t => s => {
					const n = t(s);
					if (s.type === D.e) {
						const t = e.getState(),
							n = Object(we.G)(t),
							{
								meta: a
							} = s.payload;
						n ? ((e, t) => {
							const s = Object(we.C)(e) || 0,
								n = Object(bt.a)(e) + s;
							Object(pt.b)(n, t)
						})(t, a.title) : mt.a.write(() => {
							document.title = a.title, Object(ht.c)(t, document)
						})
					}
					return n
				} : () => e => t => e(t),
				ft = s("./src/reddit/helpers/survey/index.ts");
			var vt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(ft.b).filter(t => t === e).length)(t.type) && (Object(Ie.C)(ft.b[t.type]), Object(ft.c)().setState(ft.b[t.type])), e(t)) : () => e => t => e(t);
			const Ct = 5 * g.eb;
			var yt = e => {
					const t = Me()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(U.g())
					}, Ct);
					let s, n;
					const a = () => {
							const s = e.getState().user.session;
							if (!s || !n) return;
							const a = new Date(s.expires),
								r = n + Math.floor(.8 * (a.getTime() - n));
							Date.now() > r && t && t()
						},
						r = e => {
							n = Date.now();
							const a = new Date(e.expires).getTime() - n,
								r = .8 + .1 * Math.random(),
								o = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * a));
							s = setTimeout(t, o)
						},
						o = e.getState();
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== U.a && t.type !== U.b && t.type !== U.c && t.type !== U.e || r(t.payload), t.type === U.d && (clearTimeout(s), s = null), e(t))
				},
				Ot = s("./src/reddit/singleton/tracing/index.ts");
			var Pt = e => e => t => {
					const s = () => e(t);
					return Ot.b.isEnabled ? Ot.b.recordLocalSpan(t.type, s) : e(t)
				},
				xt = s("./src/reddit/actions/frontpage.ts"),
				Et = s("./src/reddit/actions/page.ts"),
				St = s("./src/reddit/actions/pages/profileComments.ts"),
				jt = s("./src/reddit/actions/pages/profileOverview.ts"),
				_t = s("./src/reddit/actions/pages/profilePosts.ts"),
				wt = s("./src/reddit/actions/pages/search.ts"),
				kt = s("./src/reddit/actions/pages/subreddit.ts"),
				Mt = s("./src/reddit/actions/search.ts"),
				It = s("./src/reddit/actions/subreddit.ts"),
				Nt = s("./src/reddit/actions/tracking.ts"),
				Tt = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Rt = s("./src/reddit/helpers/history/index.ts"),
				Lt = s("./src/reddit/helpers/trackers/commentList.ts"),
				At = s("./src/reddit/helpers/trackers/postList.ts"),
				Ft = s("./src/reddit/helpers/trackers/screenview.ts"),
				Dt = s("./src/reddit/selectors/platform.ts"),
				Gt = s("./src/reddit/selectors/subreddit.ts"),
				Ut = s("./src/reddit/helpers/routeKey/index.ts");
			var Bt = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Nt.c({
							routeKey: t
						}))
					};
					if (s.type === D.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(Gt.F)(n, a) || "",
							i = (n.subreddits.about[o] || {}).advertiserCategory;
						r.trigger("pageview", Object.assign({}, rt()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(Ut.b)(c, n, Object(Tt.a)(n));
							if (e && j.c.has(e)) {
								const t = j.c.end(e);
								!Object(Dt.i)(n) && Object(Rt.b)(De.a.IsOverlay) || Object(Ft.h)(c, n, _.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(Tt.a)(n, d),
							u = Object(Ut.b)(d, n, l);
						if (!u) return t(s);
						j.c.start(u)
					}
					const a = t(s);
					switch (s.type) {
						case Et.g:
						case jt.b:
						case jt.e:
						case _t.e:
						case St.e:
						case kt.c: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case wt.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case xt.b:
						case It.i:
						case _t.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							At.j(r, t);
							break
						}
						case St.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							Lt.a(r, t);
							break
						}
						case Mt.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				Ht = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				qt = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Wt = s("./src/reddit/selectors/telemetry.ts");
			const Vt = e => t => Object.assign({}, Wt.defaults(t), {
				action: "leave",
				actionInfo: Wt.actionInfo(t, {
					reason: e
				}),
				noun: "app",
				source: "global"
			});
			let Qt = null;
			const zt = () => {
				Qt && window.clearTimeout(Qt), Qt = null
			};
			var Zt = e => {
					Qt = window.setTimeout(() => {
						zt(), Object(j.a)((e => t => Object.assign({}, Wt.defaults(t), {
							action: "view",
							noun: "heartbeat",
							source: "global",
							timer: {
								type: _.TimerType.GoodVisit,
								millis: e
							}
						}))(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", zt)
				},
				Kt = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var Yt = s("./node_modules/crypto-js/sha256.js"),
				Xt = s.n(Yt),
				Jt = s("./node_modules/uuid/v4.js"),
				$t = s.n(Jt),
				es = s("./src/lib/addQueryParams/index.ts"),
				ts = s("./src/lib/constants/euCookiePolicy.ts"),
				ss = s("./src/reddit/featureFlags/utils.ts"),
				ns = s("./src/reddit/helpers/chooseVariant/index.ts");
			const as = Object(ss.e)(ss.g, ss.h, e => !!Object(ns.c)(e, {
				experimentEligibilitySelector: Object(ss.d)(Object(ss.b)(...ts.b)),
				experimentName: "show_white_ops"
			}));
			var rs = s("./src/lib/permanentCookieOptions.ts");
			const os = e => {
				if (!e) return;
				const t = (d.a.get(ct.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(rs.a)();
					d.a.set(ct.h, s, n)
				}
			};
			var is = s("./src/lib/loadWithRetries/index.ts"),
				cs = s("./src/reddit/layout/page/Listing/index.tsx"),
				ds = s("./src/reddit/models/Toast/index.ts"),
				ls = s("./src/reddit/reducers/index.ts"),
				us = s("./src/reddit/routes/index.ts"),
				ms = s("./src/reddit/constants/experiments.ts");
			const ps = {
					displayDelay: 15,
					displayOnRoutes: [g.Bb.SUBREDDIT, g.Bb.COMMENTS],
					experimentName: ms.qb,
					experimentVariant: ms.ub.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				bs = e => {
					const {
						base_url: t
					} = Object(Wt.requestWithParams)(e), s = Object(Dt.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				hs = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(ps, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(ps)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(ps, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(ps, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(ns.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: ns.a
							}) === n
						})(ps, e)) return {
						displayDelay: ps.displayDelay,
						externalVars: bs(e)
					}
				};
			var gs = s("./src/reddit/singleton/EventSystem.ts"),
				fs = s("./src/reddit/actions/global.ts");
			Object(a.e)(a.b.EntryPointStart);
			const vs = Object(S.a)({
					actionDispatchers: {
						reddaidReceived: W.s,
						loidReceived: W.q,
						sessionTrackerReceived: W.x
					},
					authHeaders: {
						[Fe.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: W.d,
						loidReceived: W.b,
						sessionTrackerReceived: W.k,
						userAuthenticated: U.c,
						userLoggedOut: U.d,
						userReauthenticated: U.e,
						headersReceived: w.a
					},
					onBeforeRequestFactory: Kt.a,
					statsAppName: g.l.Redesign
				}),
				Cs = Object(Ke.a)(vs.apiContext),
				ys = Ze();
			let Os;
			Object(y.a)({
				reducerMap: ls.a,
				routes: us.a,
				apiContext: vs.apiContext,
				gqlContext: Cs.gqlContext,
				appFactory: (e, t) => u.a.createElement(He.a.Provider, {
					value: ys.broadcaster
				}, u.a.createElement(qe.a.Provider, {
					value: {
						apiContext: vs.apiContext,
						gqlContext: Cs.gqlContext
					}
				}, u.a.createElement(We.b, null, u.a.createElement(Se, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Ae, null)))),
				appName: g.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const s = Os;
						if (!s) return;
						s.dispatch(Object(D.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(D.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: us.a,
					apiContext: vs.apiContext,
					gqlContext: Cs.gqlContext
				}), ys.middleware, nt, vs.middleware, Cs.middleware, yt, ut, Pt, Bt, gt, vt],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: s
					} = e;
					const n = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (n) {
						const e = s.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const s of ["referrers", "metas"]) Object.keys(t.platform[s]).length && (t.platform[s] = {
							[e]: t.platform[s][n]
						})
					}
					return t
				},
				staticPages: {
					loading: u.a.createElement(cs.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: s,
						store: n
					} = e;
					window.addEventListener("message", e => {
							const t = o.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(T.h)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							((e, t) => {
								navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
									command: e,
									payload: t
								})
							})("sendV2Event", Vt("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(D.g)());
					const a = Object(we.S)(n.getState());
					n.dispatch(Object(H.c)({
						nightmode: a
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(ns.c)(e, {
							experimentEligibilitySelector: ns.a,
							experimentName: ms.q
						}) === ms.x.Enabled)(n.getState())) {
						Ot.b.enableTracing(!0);
						const e = Ot.b.createTraceFromId(r);
						Ot.b.setParent(e)
					}
					n.dispatch(Object(D.h)(s));
					t.listen((e, t) => {
						const a = Object(O.a)(Object(i.e)(e), s);
						n.dispatch(Object(D.i)(e, t, a))
					});
					const c = n.getState(),
						{
							currentPage: d
						} = c.platform;
					if (d) {
						const e = [];
						Object(Dt.j)(c) && e.push(Ue.e), e.length > 0 && n.dispatch(Object(m.c)(Object(v.a)(d.url, e)))
					}
					return Ht.a.initialize(), async function(e) {
						if (!as(e)) return;
						const t = e.user.account ? Xt()(e.user.account.id).toString() : void 0,
							s = document.createElement("script");
						s.src = Object(es.a)("https://s.udkcrj.com/ag/386183/clear.js", {
							dt: "3861831591810830724000",
							pd: "acc",
							mo: 0,
							et: 0,
							ti: $t()(),
							ui: t,
							si: "d2x"
						}), document.head.appendChild(s)
					}(n.getState()), {
						localStorageData: Object(Ie.p)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: i,
						serverDocumentLength: c,
						store: d,
						localStorageData: l
					} = e;
					Os = d;
					t.listen((e, t) => {
						const s = d.getState(),
							{
								urlParams: n,
								queryParams: a
							} = s.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: n,
								queryParams: a
							},
							o = n.subredditName,
							i = Object(Gt.F)(s, o) || "";
						os(i), gs.a.publish(Ge.c, r, document)
					});
					const u = d.getState(),
						m = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						p = Object(Gt.F)(u, m) || "",
						y = (u.subreddits.about[p] || {}).advertiserCategory;
					r.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: o.a.gtmContainerId,
						payload: {
							user: u.user.account ? u.user.account.id : u.user.loid.loid
						}
					}), r.trigger("pageview", {
						subreddit: m,
						advertiserCategory: y
					}), d.dispatch(Object(fs.b)({
						localStorageData: l
					})), window.addEventListener("load", () => {
						const e = d.getState(),
							{
								currentPage: r
							} = e.platform,
							o = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Gt.F)(e, o) || "";
						if (os(i), r && r.meta) {
							const t = r.meta.name;
							if (Object(j.b)(g.l.Redesign, {
									page: t,
									type: "rum"
								}), Object(C.c)(e.meta.userAgent) && window.innerWidth > Be.b) {
								const s = Object(a.f)(c);
								P.a && P.a.timing && Ot.b.isEnabled && (Ot.b.recordPerformanceTimings("".concat(t, "_time_to_first_byte"), P.a.timing.fetchStart, P.a.timing.responseStart), Ot.b.recordPerformanceTimings("".concat(t, "_time_to_interactive"), P.a.timing.fetchStart, P.a.timing.domInteractive));
								const n = [];
								if (Object(Dt.h)(e)) {
									const t = Object(qt.a)(e);
									n.push(Object(qt.c)(t))
								}
								const r = {
									isLoggedIn: Object(we.H)(e),
									name: t,
									statsdPathsForExperiments: n
								};
								Object(a.g)(r, s)
							}
							const s = P.a.timing.domInteractive - P.a.timing.navigationStart;
							Object(Ft.h)(r.routeMatch, d.getState(), _.TimerType.Initial, s);
							const o = Object(f.a)(window.location.href);
							o && o.get(Ue.a) && history.replaceState(history.state, "", Object(v.a)(window.location.href, [Ue.a])), Object(E.a)(o.get(Ue.v)) && d.dispatch(Object(q.e)({
								kind: ds.b.SuccessCommunity,
								text: n.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), o.get(Ue.w) && (d.dispatch(Object(N.a)(o.get(Ue.w))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [Ue.w])));
							let i = !1;
							if ((Object(Rt.b)(De.a.JustLoggedIn) || o && o.get(Ue.o) && Object(E.a)(o.get(Ue.o))) && (d.dispatch(Object(q.e)({
									text: n.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), i = !0, Object(Rt.c)(De.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [Ue.o]))), Object(Rt.b)(De.a.JustLoggedOut) && (i = !0, Object(Rt.c)(De.a.JustLoggedOut)), Object(A.b)(e), !1 !== Ie.D() && Object(L.a)().then(e => e.requestNotificationsPermissions).then(e => d.dispatch(e(i, !1))), t === g.Bb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								d.dispatch(Object(R.h)({
									multiredditName: e,
									username: t
								}))
							}
							d.dispatch(Object(I.c)())
						}
						Object(we.H)(d.getState()) && (d.dispatch(Object(M.d)()), d.dispatch(Object(k.d)())), Object(b.requestIdleCallback)(async () => {
							d.dispatch(Object(F.d)()), await Object(h.a)() && (e => Object(j.a)(Object.assign({}, Wt.defaults(e), {
								source: "global",
								action: "view",
								noun: "empty"
							})))(d.getState());
							const e = async () => {
								const e = d.getState(),
									t = hs(e);
								t && (await (async e => {
									return (await Object(is.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							"visible" !== document.visibilityState && Object(j.a)(Vt("tab_backgrounded")(d.getState()))
						}), Object(ee.j)(d.getState()) && Zt(d.getState), d.dispatch(Object(B.b)())
					}), window.history.scrollRestoration = "manual", gs.a.attachStore(d), d.dispatch(Object(G.b)(x.a.PageLoad))
				},
				raven: {
					tags: {
						project: g.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(n || (n = {}))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = {
				isBlacklistedSubredditsExcluded: !0,
				isNsfwExcluded: !0,
				maxRating: "R"
			}
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(n || (n = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, s) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/acknowledgements",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Acknowledgements").then(s.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: r.n,
					chunk: a.p.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.ACKNOWLEDGEMENTS
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = ["/appeal", "/appeals"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Appeal").then(s.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: r.n,
					chunk: a.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.APPEAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/coins",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Coins").then(s.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: r.p,
					chunk: a.p.COINS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.COINS
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/coins/mobile",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CoinsMobile").then(s.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: r.o,
					chunk: a.p.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.COINS_MOBILE
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				o = s("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
					}
				}),
				c = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"],
				d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				l = {
					action: r.e,
					chunk: a.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.COLLECTION_COMMENTS
					},
					prefetches: [a.p.FRONTPAGE, a.p.COMMENTS_PAGE, a.p.SUBREDDIT]
				},
				u = Object.assign({}, l, {
					path: c
				}),
				m = Object.assign({}, l, {
					path: d,
					routePredicate: o.a
				}),
				p = [u, m];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/index.tsx"
					}
				}),
				i = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"],
				c = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				l = (e, t) => ({
					action: r.t,
					chunk: a.p.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT]
				}),
				u = [l(a.Bb.COMMENTS, i), l(a.Bb.DUPLICATES, c), l(a.Bb.COMMENTS, d)];
			t.a = u
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/framedGild/:thingId",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("FramedGild~GildModal"), s.e("FramedGild")]).then(s.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: r.u,
					chunk: a.p.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.FRAMED_GILD
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/framedModal/:type",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FramedModal").then(s.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: r.v,
					chunk: a.p.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.FRAMED_MODAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object.keys(o.O).map(e => o.O[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				u = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("FrontpageSidebar"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				m = {
					action: i.y,
					chunk: o.p.FRONTPAGE,
					component: u,
					exact: !0,
					prefetches: [o.p.COMMENTS_PAGE, o.p.SUBREDDIT]
				},
				p = Object.assign({}, m, {
					path: d,
					meta: {
						name: o.Bb.INDEX
					}
				}),
				b = Object.assign({}, m, {
					path: l,
					meta: {
						name: o.Bb.LISTING
					}
				}),
				h = [p, b];
			t.a = h
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/topic.ts"),
				o = s("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(n.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Geotagging~Topic"), s.e("Geotagging")]).then(s.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				d = {
					action: e => async (e, t, s) => {
						let n, {
							gqlContext: a
						} = s; {
							const e = t();
							if (Object(o.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							n = await Object(r.g)(a(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch (c) {
							return void e(Object(r.i)())
						}
						if (!n) return;
						const i = t();
						e(Object(r.j)(Object.assign({}, n, {
							key: "tagging",
							meta: i.meta
						})))
					},
					chunk: a.p.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: a.Bb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("InboxPages").then(s.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				d = Object.keys(o.L).map(e => o.L[e]).join("|"),
				l = "/message/:pageName(".concat(d, ")/:rest(.+)?"),
				u = {
					action: i.A,
					chunk: o.p.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.INBOX_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				a = s("./src/reddit/routes/acknowledgements/index.ts"),
				r = s("./src/reddit/routes/appeal/index.ts"),
				o = s("./src/reddit/routes/coins/index.ts"),
				i = s("./src/reddit/routes/coinsMobile/index.ts"),
				c = s("./src/reddit/routes/commentsPage/index.ts"),
				d = (s("./node_modules/@loadable/component/dist/loadable.esm.js"), s("./src/lib/constants/index.ts"));
			s("./src/reddit/actions/page.ts");
			var l = [],
				u = s("./node_modules/react-router-redux/es/index.js"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				b = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				h = s("./src/reddit/models/EmailSettings/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/telemetry/index.ts"),
				v = s("./src/reddit/actions/emailVerification.ts");
			var C = {
					action: e => async (t, s) => {
						await t(m.z());
						const n = s(),
							a = e.params.verificationToken,
							r = e.queryParams && e.queryParams.source;
						if (r && Object(f.a)(Object(b.b)(r)(n)), !Object(g.H)(n)) return Object(p.a)(t, n);
						const o = await t(Object(v.b)(a));
						o === h.a.Success && Object(f.a)(Object(b.d)()(n)), t(Object(u.c)("/?verifiedEmail=".concat(o)))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				y = s("./src/lib/addQueryParams/index.ts");
			var O = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(u.c)(Object(y.a)("/", r)))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [d.p.COMMENTS_PAGE, d.p.FRONTPAGE]
				},
				P = s("./src/reddit/routes/framedGild/index.ts"),
				x = s("./src/reddit/routes/framedModal/index.ts"),
				E = s("./src/reddit/routes/frontpage/index.ts"),
				S = s("./src/reddit/routes/geotagging/index.ts"),
				j = s("./src/reddit/routes/inbox/index.ts"),
				_ = s("./src/reddit/routes/meta/index.ts"),
				w = s("./src/reddit/routes/moderationPages/index.ts"),
				k = s("./src/reddit/routes/modListing/index.ts"),
				M = s("./src/reddit/routes/modQueue/index.ts"),
				I = s("./src/reddit/routes/multireddit/index.ts"),
				N = s("./src/reddit/routes/postCreation/constants.ts");
			const T = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(u.c)("/"))
				},
				chunk: d.p.EMPTY,
				exact: !0,
				meta: {
					name: d.Bb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var R = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(u.c)(N.b))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...T],
				L = s("./src/reddit/routes/postCreation/index.ts"),
				A = s("./src/reddit/routes/postDraft/index.ts"),
				F = s("./src/reddit/routes/premium/index.ts"),
				D = s("./src/reddit/routes/profileComments/index.ts"),
				G = s("./src/reddit/endpoints/me/index.ts");
			var U = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(G.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(p.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(y.a)(d, o);
						await t(Object(u.c)(l))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				B = s("./src/reddit/routes/profileModSettings/index.ts"),
				H = s("./src/reddit/routes/profileOverview/index.ts"),
				q = s("./src/reddit/routes/profilePosts/index.ts"),
				W = s("./src/reddit/routes/profilePrivate/index.ts");
			var V = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(y.a)(r, a);
						await t(Object(u.c)(o))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Q = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var z = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(y.a)(r, a);
						t(Object(u.c)(o))
					},
					chunk: d.p.EMPTY,
					exact: !0,
					meta: {
						name: d.Bb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Z = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				K = s("./src/reddit/routes/report/index.ts"),
				Y = s("./src/reddit/routes/searchResults/index.ts"),
				X = s("./src/reddit/routes/settings/index.ts");
			var J = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(u.c)(n))
					},
					chunk: d.p.EMPTY,
					meta: {
						name: d.Bb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(u.c)("/settings/profile"))
					},
					chunk: d.p.EMPTY,
					meta: {
						name: d.Bb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				$ = s("./src/reddit/routes/subreddit/index.ts"),
				ee = s("./src/reddit/routes/subredditCreation/index.ts"),
				te = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				se = s("./src/reddit/routes/subredditWiki/index.ts"),
				ne = s("./src/reddit/routes/topic/index.ts");
			const ae = [a.a, r.a, o.a, i.a, U, V, z, ...n.a, ...c.a, C, ...E.a, S.a, F.a, P.a, x.a, L.a, A.a, ...R, O, ..._.a, I.a, M.a, k.c, j.a, D.a, B.a, H.a, q.a, Q.a, W.a, Z.a, ...X.a, ...J, Y.a, ...se.a, ne.a, $.a, ee.a, te.a, w.a, K.a, ...l];
			t.a = ae
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				o = s("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts");
			const i = {
					action: r.a,
					chunk: a.p.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), s.e("CommunityPointsLearnMore")]).then(s.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: a.Bb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				c = {
					action: o.a,
					chunk: a.p.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~MembershipPaywallPage"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("MembershipPaywallPage")]).then(s.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: a.Bb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				};
			t.a = [i, c]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts");
			const i = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ModQueuePages"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), s.e("ModQueue~ModQueuePages"), s.e("ChatPost~ModQueuePages"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				c = Object.keys(o.hb).map(e => o.hb[e]).join("|"),
				d = "/r/mod/about/:pageName(".concat(c, ")?"),
				l = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("ModQueue~ModQueuePages"), s.e("ModQueue")]).then(s.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested);
						await r(e)(t, n, a)
					},
					chunk: o.p.MODQUEUE_PAGES,
					component: i,
					exact: !0,
					meta: {
						name: o.Bb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = l
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return b
			}));
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/lib/constants/index.ts");
			const c = Object.keys(i.Qb).map(e => i.Qb[e]).join("|"),
				d = e => "/".concat(e, "/about/scheduledposts"),
				l = e => "/".concat(e, "/about/eventposts"),
				u = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				m = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				p = ["/r/:subredditName/about", "/r/:subredditName/about/:pageName(".concat(c, ")"), ...m],
				b = e => !!Object(o.h)(e, {
					path: "/r/:subredditName/about"
				}),
				h = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
					},
					chunk: i.p.MODERATION_PAGES,
					component: u,
					exact: !0,
					meta: {
						name: i.Bb.MODERATION_PAGES
					},
					path: p,
					prefetches: [i.p.SUBREDDIT]
				};
			t.a = h
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~Multireddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				d = "/me/m/:multiredditName",
				l = Object.keys(o.O).map(e => "".concat(d, "/:sort(").concat(o.O[e], ")?")),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(o.O).map(e => "".concat(u, "/:sort(").concat(o.O[e], ")?")),
				p = [d, u, ...l, ...m],
				b = {
					action: i.C,
					chunk: o.p.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.p.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/postDraft.ts");
			const o = "/user/:profileName/draft/:draftId",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.POST_DRAFT
					},
					path: o,
					prefetches: [a.p.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/premium",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Premium").then(s.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				c = {
					action: r.D,
					chunk: a.p.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PREMIUM
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileComments.ts");
			const o = "/user/:profileName/comments",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: r.h,
					chunk: a.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileModSettings.ts");
			const o = "/user/:profileName/about/edit/moderation",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("ProfileModeration")]).then(s.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.p.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_MODERATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileOverview.ts");
			const o = "/user/:profileName",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: r.g,
					chunk: a.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_OVERVIEW
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profilePosts.ts");
			const o = "/user/:profileName/posts",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: r.h,
					chunk: a.p.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_POSTS
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/models/Profile/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(i.a).map(e => i.a[e]).join("|"),
				l = ["/user/:profileName/:listingType(".concat(d, ")"), "/user/:profileName/gilded/:listingType(".concat(i.a.GivenGildings, ")")],
				u = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await r(e)(t, n, a)
					},
					chunk: o.p.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.PROFILE_PRIVATE
					},
					path: l,
					prefetches: [o.p.COMMENTS_PAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				i = "/user/:profileName/snoo",
				c = {
					path: i,
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await r(e)(t, n, a)
					},
					chunk: a.p.PROFILE_SNOOBUILDER,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.PROFILE_SNOOBUILDER
					},
					routePredicate: r.d.snoovatar30
				};
			t.a = c
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: r.E,
					chunk: a.p.PUBLIC_ACCESS_NETWORK,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [a.p.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts");
			const r = "/report/:rest(.+)?",
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportPage")]).then(s.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				i = {
					action: e => async (t, n, a) => {
						const r = await s.e("Report").then(s.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested);
						await r(e)(t, n, a)
					},
					chunk: a.p.REPORT_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.REPORT
					},
					path: r
				};
			t.a = i
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/search.ts");
			const o = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~SearchResults"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOv~8a8059b8"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: r.e,
					chunk: a.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT, a.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts"),
				c = s("./src/reddit/actions/pages/settings.ts");
			const d = Object.keys(o.Ob).map(e => o.Ob[e]).join("|"),
				l = [{
					action: c.a,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Settings~reddit-components-ProfileIdCard"), s.e("Settings")]).then(s.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: o.p.SETTINGS,
					exact: !0,
					meta: {
						name: o.Bb.SETTINGS
					},
					path: "/settings/:page(".concat(d, ")?")
				}, {
					action: i.H,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => s.e("UserDataRequestPage").then(s.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: o.p.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.Bb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subreddit/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Subreddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Subreddit/index.tsx"
					}
				}),
				d = Object.keys(o.O).map(e => "/r/:subredditName/:sort(".concat(o.O[e], ")?")),
				l = ["/r/:subredditName", ...d],
				u = {
					action: i.l,
					chunk: o.p.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.Bb.SUBREDDIT
					},
					path: l,
					prefetches: [o.p.COMMENTS_PAGE, o.p.FRONTPAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/subredditCreation.ts");
			const o = "/subreddits/create",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("SubredditCreation~SubredditInlineEditing"), s.e("SubredditCreation")]).then(s.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditCreation/index.tsx"
					}
				}),
				c = {
					action: r.a,
					component: i,
					chunk: a.p.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: a.Bb.SUBREDDIT_CREATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/subredditLeaderboard.ts");
			const o = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("SubredditLeaderboard").then(s.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.p.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: a.Bb.SUBREDDIT_LEADERBOARD
					},
					path: o,
					prefetches: [a.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditWiki/index.tsx"
					}
				}),
				c = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+", "/wiki/:wikiPageName+"],
				d = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				l = e => async t => {
					await t(Object(a.c)(Object(o.a)(e.url, e.params)))
				}, u = {
					action: l,
					chunk: r.p.EMPTY,
					exact: !0,
					meta: {
						name: r.Bb.SUBREDDIT_WIKI
					},
					path: d
				}, m = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.p.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.Bb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [r.p.SUBREDDIT]
				};
			t.a = [u, m]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/wiki.ts"),
				o = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = s("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const s = t.wikiSubRoute === r.m.Settings,
					n = Object(o.a)(t, Object(i.c)(e) || s),
					c = a.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== n ? (c.pathname = n, a.a.format(c)) : e
			}
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/topic.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Geotagging~Topic"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: r.k,
					chunk: a.p.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: a.Bb.TOPIC
					},
					prefetches: [a.p.COMMENTS_PAGE, a.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/reddit/constants/accountManager.ts"),
				i = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				d = s("./src/reddit/selectors/experiments/googleOneTap.ts"),
				l = s("./src/reddit/selectors/experiments/sso.ts"),
				u = s("./src/reddit/selectors/responsiveSettings.ts");
			const m = e => e.accountManagerModalData.actionSource,
				p = e => e.accountManagerModalData.redirectUrl,
				b = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, m, c.a, l.d, u.a, d.a, (e, t, s, a, c, d, u) => {
					let m = "".concat(n.a.accountManagerOrigin).concat(e);
					if (e === o.b.GoogleOneTap) return Object(r.a)(m, {
						[i.G]: u
					});
					if (a && (m = Object(r.a)(m, {
							[i.R]: a,
							uiMode: t
						})), c) {
						const e = Object(l.a)(c) || c;
						m = Object(r.a)(m, {
							[i.K]: e
						})
					}
					return d && (m = Object(r.a)(m, {
						mweb_responsive_settings: "treatment"
					})), e === o.b.Index || e === o.b.ChangePassword ? m : m = Object(r.a)(m, {
						actionSource: s
					})
				})
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(r.E)(e) || n.u.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.m
				})
			}
		},
		"./src/reddit/selectors/experiments/sso.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/Settings/modalIds.ts"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/activeModalId.ts"),
				c = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.K,
					experimentEligibilitySelector: e => !Object(d.G)(e)
				}), c.a),
				u = e => e === r.P.SSO,
				m = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.L,
					experimentEligibilitySelector: e => Object(d.G)(e) || Object(d.H)(e)
				}), c.a),
				p = Object(n.a)(m, e => e === r.C.SSO),
				b = Object(n.a)(i.a, e => !!e && [a.b, a.d, a.e, a.f].includes(e))
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.E)(e) || !(n.mc.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.jc
			}))
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			const n = e => e.user.notificationPrefs.api.getPreferences.loaded,
				a = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Product/index.ts");
			const a = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === n.a.Badge) return s
				},
				r = (e, t) => {
					let {
						productId: s
					} = t;
					const n = e.products.models[s];
					if (n) {
						const t = n.subredditId,
							a = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							o = Date.now();
						let i = !1;
						return a.forEach(e => {
							const t = r[e];
							t && t.type === s && t.endsAt > o && (i = !0)
						}), i
					}
					return !1
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (e.removalReasons.reasonOrder[s]) {
						return e.removalReasons.reasonOrder[s].map(t => e.removalReasons.models[t])
					}
					return []
				},
				a = e => e.removalReasons.removedItemIds && e.removalReasons.removedItemIds.itemIds.length ? e.removalReasons.removedItemIds : null,
				r = e => e.removalReasons.api.pending
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/subredditLeaderboard.ts"),
				a = s("./src/reddit/selectors/category.ts");
			const r = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				i = (e, t) => t === n.k ? n.j : t === n.i ? n.h : e || n.a,
				c = (e, t) => {
					const s = e.subreddits.rankings,
						n = t && Object(a.f)(e, {
							categoryName: t
						}),
						r = s[i(n && n.id || null, t)];
					return !(!r || !r.length)
				}
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.trending.models
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322", "vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.0fc646a3091daf6e1bf2.js.map