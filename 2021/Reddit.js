// https://www.redditstatic.com/desktop2x/Reddit.c9be386bc5950e556f01.js
// Retrieved at 3/18/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
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
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				o = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(n("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, r.v4)(),
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
				m = t.trigger = function(e, t) {
					var n = d();
					n && i ? (t && o.postMessage(n.contentWindow, "data.gtm", t), o.postMessage(n.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						c.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				u = function() {
					if (d() && i) {
						var e = c.slice();
						c = [], e.forEach((function(e) {
							var t = e.eventName,
								n = e.payload;
							return m(t, n)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					n = e.jailUrl,
					r = e.payload;
				if (t)
					if (n) {
						o.listen("gtm"), o.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, o.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, l(), r)), c.src = n + "?id=" + t, c.onload = u, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				o = r;
			o.v1 = s, o.v4 = r, e.exports = o
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var n = [], s = 0; s < 256; ++s) n[s] = (s + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var s = t || 0,
					r = n;
				return r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, n) {
			(function(t) {
				var n, s = t.crypto || t.msCrypto;
				if (s && s.getRandomValues) {
					var r = new Uint8Array(16);
					n = function() {
						return s.getRandomValues(r), r
					}
				}
				if (!n) {
					var o = new Array(16);
					n = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
						return o
					}
				}
				e.exports = n
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				o = s(),
				a = [1 | o[0], o[1], o[2], o[3], o[4], o[5]],
				i = 16383 & (o[6] << 8 | o[7]),
				c = 0,
				d = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					o = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					m = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					u = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = m - c + (u - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || m > c) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = m, d = u, i = l;
				var b = (1e4 * (268435455 & (m += 122192928e5)) + u) % 4294967296;
				o[s++] = b >>> 24 & 255, o[s++] = b >>> 16 & 255, o[s++] = b >>> 8 & 255, o[s++] = 255 & b;
				var h = m / 4294967296 * 1e4 & 268435455;
				o[s++] = h >>> 8 & 255, o[s++] = 255 & h, o[s++] = h >>> 24 & 15 | 16, o[s++] = h >>> 16 & 255, o[s++] = l >>> 8 | 128, o[s++] = 255 & l;
				for (var g = e.node || a, f = 0; f < 6; ++f) o[s + f] = g[f];
				return t || r(o)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, n) {
				var o = t && n || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || s)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[o + i] = a[i];
				return t || r(a)
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				r = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/graphql/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/graphql/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/graphql/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/graphql/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"7537a71b4f14"}')
		},
		"./src/graphql/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"1ac2da208d51"}')
		},
		"./src/graphql/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
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
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
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
			const r = 120 * s.ab;
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
						return !e || e <= r
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
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/isFakeSubreddit/index.ts"),
				a = n("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const n = [s.a.dfpSlotPrefix];
					return t !== r.Db.PROFILE && (Object(o.a)(e) ? n.push("frontpage") : n.push(`r.${e}`)), t === r.Db.INDEX ? n.push(r.Db.LISTING) : t && n.push(t), n.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const n in t.properties) e.setTargeting(n, t.properties[n])
				},
				l = (e, t) => {
					p(e);
					const {
						id: n,
						slot: s,
						sizes: r
					} = t, o = window.googletag = window.googletag || {};
					return o.cmd = o.cmd || [], new Promise(c => {
						o.cmd.push(() => {
							a.a.write(() => {
								const a = o.defineSlot(s, r, n);
								if (!a) return c();
								a.addService(o.pubads()), i.set(e, a), a.setCollapseEmptyDiv(!0), d(a, t), o.display(n), c()
							})
						})
					})
				},
				m = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						Object.keys(t).forEach(e => n.setTargeting(e, t[e]))
					})
				},
				u = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					d(n, t);
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && s.cmd.push(() => {
							s.pubads().refresh([n])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						s.cmd.push(() => {
							window.apstag.setDisplayBids(), s.pubads().refresh([n])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						a.a.write(() => {
							n.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const n = document.getElementsByTagName("script")[0];
						n && n.parentNode && n.parentNode.insertBefore(t, n)
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
						const n = document.createElement("link");
						n.href = e, n.rel = "preload", n.as = "script", n.onload = t, document.head.insertBefore(n, document.head.firstChild)
					} else t()
				},
				h = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = (...e) => {
						window.apstag._Q.push(["i", e])
					}, window.apstag.fetchBids = (...e) => {
						window.apstag._Q.push(["f", e])
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
					}, b(`//c.aaxads.com/aax.js?pub=${window.aax.pubId}&hst=${window.aax.hst}&ver=${window.aax.ver}`))
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
		"./src/lib/serviceWorker/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = "/sw.js";
			async function r(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(s, e)
			}
			const o = (e, t) => {
				navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: e,
					payload: t
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
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeRequest/index.ts");
			async function u(e, t) {
				return await Object(m.b)({
					method: l.cb.POST,
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
						return Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(s())).ok ? (Object(i.b)(), await u(s(), !0), e && window.location.reload()) : (u(s(), !1), t(Object(c.f)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, {
				apiContext: n
			}) => {
				Object(i.a)(),
					function(e) {
						Object(r.a)(Object(o.a)(e, [a.a]), {
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
				return Z
			})), n.d(t, "o", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return X
			})), n.d(t, "q", (function() {
				return te
			})), n.d(t, "s", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return re
			})), n.d(t, "r", (function() {
				return oe
			})), n.d(t, "l", (function() {
				return ae
			})), n.d(t, "a", (function() {
				return ce
			})), n.d(t, "b", (function() {
				return me
			})), n.d(t, "p", (function() {
				return ue
			})), n.d(t, "f", (function() {
				return pe
			})), n.d(t, "g", (function() {
				return be
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "d", (function() {
				return fe
			})), n.d(t, "c", (function() {
				return Oe
			})), n.d(t, "i", (function() {
				return ye
			})), n.d(t, "h", (function() {
				return Se
			})), n.d(t, "k", (function() {
				return _e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCreation/editorContent.ts"),
				u = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				g = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/graphql/operations/CommentToxicity.json"),
				v = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/reddit/constants/headers.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = n("./src/reddit/helpers/genericServerError/index.ts"),
				P = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t, n, s) => {
					let r, o;
					if (s === S.h.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...f,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				I = async (e, t, n, s, o) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (o === S.h.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(v.a)(Object(C.a)(e, [O.a]), {
						method: r.cb.POST,
						endpoint: Object(y.a)(Object(_.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
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
						error: e.error || Object(E.a)()
					})
				};
			var N = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				T = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				A = n("./src/reddit/featureFlags/index.ts"),
				R = n("./src/reddit/helpers/dom/index.ts"),
				L = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/PostDraft/index.ts"),
				D = n("./src/reddit/models/RichTextJson/index.ts"),
				U = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				G = n("./src/reddit/models/Toast/index.ts"),
				B = n("./src/reddit/selectors/comments.ts"),
				H = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/platform.ts"),
				W = n("./src/reddit/selectors/posts.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				z = n("./src/reddit/actions/comment/constants.ts");
			const K = Object(o.a)(z.j),
				Z = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const r = s();
					if (!!r.features.comments.drafts[t])
						if (Object(V.L)(r) && e) {
							const s = K({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n(K({
							hasFocus: e,
							draftKey: t
						}))
				}, J = Object(o.a)(z.E), Y = Object(o.a)(z.G), X = Object(o.a)(z.F), $ = Object(o.a)(z.D), ee = (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					L.f(e, n, t, o)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, s, r, o) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						m = Object(q.e)(l);
					let u = "";
					if (m && (u = m.name), A.d.enableToxicityWarning(l)) {
						if (!(await k(c(), u, s, r))) return void a(Object(d.i)(te))
					}
					a(re(e, t, n, s, r, o))
				}, se = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, re = (e, t, n, o, a, i, c) => async (m, h, {
					apiContext: f
				}) => {
					m(Object(d.g)(te));
					const v = h(),
						x = v.features.comments.submit.pending[n];
					if (!v.user.account || x) return;
					m(J({
						draftKey: n,
						draft: o
					}));
					const C = v.user.account.displayText,
						O = o.commentMode;
					let y;
					if (c ? (y = await Object(T.i)(f(), e, o, C), m(Object(u.a)({
							streamId: e,
							level: y.body.automuteLevel
						}))) : y = await I(f(), e, o, C, O), y.ok) {
						let s;
						s = y.body, m(Y({
							...s,
							headCommentId: Object(B.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(W.D)(h(), {
							postId: e
						});
						m(Object(l.u)(r, g.a.CommentSubmitted))
					} else {
						y.error && y.error.type === r.Ab && L.g(v, se(o), e);
						const t = y.error && y.error.fields && y.error.fields[0] ? y.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						m($({
							draftKey: n,
							error: y.error
						})), m(Object(b.f)({
							duration: b.a,
							kind: G.b.Error,
							text: t
						}))
					}
					ee(h(), t, a, y), i || Object(p.d)()
				}, oe = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: o,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: l
					} = e, m = n(), u = Object(q.e)(m);
					let p = "";
					if (u && (p = u.name), A.d.enableToxicityWarning(m)) {
						if (!(await k(s(), p, c, l))) return void t(Object(d.i)(te))
					}
					t(ae({
						commentsPageKey: o,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: c,
						editorMode: l
					}))
				}, ae = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: m
					} = e;
					t(Object(d.g)(te));
					const u = n(),
						b = u.features.comments.submit.pending[c];
					if (!u.user.account || b) return;
					t(J({
						draftKey: c,
						draft: l
					}));
					const h = u.user.account.displayText,
						g = l.commentMode,
						f = await I(s(), o, l, h, g);
					if (f.ok) t(X({
						...f.body,
						parentCommentId: o,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (f.error && f.error.type === r.Ab) {
							const e = Object(H.a)(u, {
								commentId: o
							});
							if (!e) return;
							L.g(u, se(l), e.postId, o)
						}
						t($({
							draftKey: c,
							error: f.error
						}))
					}
					ee(n(), a, m, f), Object(p.d)()
				}, ie = Object(o.a)(z.p), ce = Object(o.a)(z.o), de = Object(o.a)(z.k), le = (Object(o.a)(z.f), Object(o.a)(z.l)), me = (Object(o.a)(z.s), (e, t, n) => async (r, o, {
					apiContext: a
				}) => {
					const i = e === S.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(D.G)(t)) r(le({
						editorMode: e,
						draftKey: n,
						content: i ? D.i : ""
					})), r(Object(m.c)(e));
					else {
						r(Object(m.b)(n));
						const o = await Object(M.a)(a(), e, i ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(m.a)(n)), r(le({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(m.c)(e))
						} else r(Object(m.a)(n)), r(Object(b.f)({
							duration: b.a,
							kind: G.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ue = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, r) => {
					const o = r(),
						l = Object(a.a)(F.c.replyToComment, t);
					if (!Object(V.J)(r())) return s(Object(c.j)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(B.m)(r(), {
							commentId: t
						})
					}));
					const m = o.features.comments.replyFormOpen[e],
						u = m && m[t];
					if ((u || m && n) && (Object.keys(m).forEach(t => m[t] && s(ce({
							parentCommentId: t,
							commentsPageKey: e
						}))), u)) return;
					let p = "",
						b = null;
					const h = o.user.prefs.commentMode,
						g = Object(R.d)();
					if (g) {
						const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === S.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => U.s(e, null)).map(e => U.l([e])),
								n = U.s("", null),
								s = U.l([n]);
							b = {
								document: [U.c(t), s]
							}
						}
					}
					const f = o.features.comments.drafts[l];
					let v;
					if (v = g ? {
							commentMode: h,
							draftType: F.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : f || {
							commentMode: h,
							draftType: F.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(V.L)(o)) {
						const n = ie({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: v
						});
						s(Object(i.f)(n))
					} else s(ie({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: v
					}))
				}, pe = e => async t => {
					t(Object(Q.m)(e)), t(fe(e))
				}, be = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(ce({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ue({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Q.m)({
						commentId: e,
						commentsPageKey: t
					}))
				}, he = (e, t) => n => n(de({
					draftKey: e,
					formData: t
				})), ge = Object(o.a)(z.r), fe = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: r
				}) => async (o, a) => {
					const i = a();
					i.user.account && (L.c(i), o(ge({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: F.c.edit,
							hasFocus: !0
						}
					})))
				}, ve = Object(o.a)(z.A), xe = Object(o.a)(z.z), Ce = Object(o.a)(z.B), Oe = Object(o.a)(z.g), ye = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: o
				}) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					n(ve({
						draftKey: s
					})), L.d(c);
					const d = c.user.account.displayText || "",
						l = o.commentMode,
						m = await (async (e, t, n, s, o, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === S.h.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(v.a)(Object(C.a)(e, [O.a]), {
								endpoint: Object(y.a)(Object(w.a)(Object(_.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.cb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(j.a)(e)
							} : {
								...e,
								body: {
									comment: Object(P.a)(e.body.json.data.things[0].data, o)
								}
							} : {
								...e,
								body: {
									comment: Object(P.a)(e.body, o)
								}
							} : {
								...e,
								error: e.error || Object(E.a)()
							})
						})(i(), e, 0, o, d, l);
					if (m.ok) {
						const r = m.body;
						n(Ce({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Q.h)({
							[e]: {
								...r.comment
							}
						}))
					} else n(xe({
						draftKey: s,
						error: m.error
					}))
				}, Ee = Object(o.a)(z.x), Pe = Object(o.a)(z.w), je = Object(o.a)(z.y), Se = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s();
					n(Ee({
						id: e
					})), L.a(e, a);
					const i = await ((e, t) => Object(v.a)(Object(C.a)(e, [O.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/del`),
						method: r.cb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(E.a)()
					}))(o(), e);
					i.ok ? n(je({
						id: e,
						postId: t
					})) : n(Pe({
						id: e,
						error: i.error
					}))
				}, _e = e => async (t, n, {
					apiContext: s
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(Q.h)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(N.q)(s(), e, r)).ok || t(Object(Q.h)({
						[e]: {
							sendReplies: !r
						}
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return w
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "l", (function() {
				return W
			})), n.d(t, "m", (function() {
				return V
			})), n.d(t, "c", (function() {
				return Q
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "b", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/presence.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				b = n("./src/reddit/endpoints/comment/index.tsx"),
				h = n("./src/reddit/helpers/commentList/index.ts"),
				g = n("./src/reddit/helpers/trackers/comment.ts"),
				f = n("./src/reddit/models/Comment/index.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/comments.ts"),
				y = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				P = n("./src/reddit/selectors/moderatingComments.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/actions/comment/constants.ts");
			const _ = {},
				w = Object(a.a)(S.n),
				k = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(j.J)(n())) return t(Object(c.j)()), void t(Object(d.k)({
						actionSource: d.a.Save,
						redirectUrl: Object(O.m)(n(), {
							commentId: e
						})
					}));
					const o = n().features.comments.models[e];
					if (!o) return;
					const a = o.isSaved ? b.k : b.g;
					if (t(w({
							[e]: {
								isSaved: !o.isSaved
							}
						})), (await a(s(), e)).ok) {
						const n = o.isSaved ? r.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : r.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = r.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(u.f)({
							text: n,
							kind: x.b.Undo,
							buttonText: s,
							buttonAction: k(e)
						}))
					} else t(w({
						[e]: {
							isSaved: o.isSaved
						}
					}))
				}, I = e => `viewing-comment-${e}`, N = s.a.telemetry.commentConsumedThreshold, M = e => async (t, n) => {
					const r = n();
					if (!Object(y.a)(r, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					g.c({
						state: r,
						commentId: e
					}), o.c.start(I(e));
					const a = setTimeout(() => g.a({
						state: r,
						commentId: e
					}), N);
					_[e] = a
				}, T = (e, t) => async (n, s) => {
					const r = s(),
						a = I(e);
					if (Object(y.a)(r, {
							commentId: e
						}) && o.c.has(a)) {
						const n = o.c.end(a);
						!t && n < N && (clearTimeout(_[e]), delete _[e])
					}
				}, A = Object(a.a)(S.v), R = Object(a.a)(S.u), L = Object(a.a)(S.t), F = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						a = o.moreComments.models[t],
						c = o.platform.currentPage,
						d = c && c.routeMatch,
						m = d && d.match,
						{
							partialPostId: u
						} = m ? m.params : null;
					if (!u) return;
					const p = Object(v.r)(u);
					n(A({
						moreCommentsId: a.id
					}));
					const g = await Object(b.e)(r(), p, {
						token: a.token
					}, Object(E.a)(o));
					if (g.ok) {
						const t = g.body,
							s = Object(h.a)(t, p, o);
						n(R({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const r = o.posts.models[p];
						let c;
						r && "subreddit" === r.belongsTo.type && t.comments && (c = r.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(g.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const d = g.body.comments,
							m = g.body.posts;
						await n(Object(l.b)(m, d, c))
					} else n(L({
						moreCommentsItem: a,
						...g.error
					}))
				}, D = Object(p.a)(h.b, C.a.upvoted), U = Object(p.a)(h.b, C.a.downvoted), G = Object(a.a)(S.i), B = Object(a.a)(S.h), H = Object(a.a)(S.d), q = Object(a.a)(S.e), W = (Object(a.a)(S.b), Object(a.a)(S.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, r) => {
					const o = r(),
						a = Object(f.g)(e),
						i = Object(O.n)(o, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(P.b)(o, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(m.d)()
				}), V = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(q({
						commentId: e,
						commentsPageKey: t
					}))
				}, Q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (r, o) => {
					const a = o(),
						i = Object(h.e)(t, e, n, a),
						c = Object(P.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(H({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(m.d)()
				}, z = Object(a.a)(S.q), K = e => t => t(z({
					draftKey: e
				})), Z = Object(a.a)(S.a)
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				m = Object(i.a)(c.c),
				u = e => async (t, n, {
					apiContext: s
				}) => {
					const r = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || r && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), r);
						if (e.ok) {
							const n = e.body;
							r && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: s.cb.GET
							});
						n.ok && n.body && e(m(n.body))
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
				r = n.n(s),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				d = n("./src/reddit/components/Settings/modalIds.ts"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/selectors/emailCollection.ts");
			const u = r()(l.c),
				p = () => async (e, t) => {
					const n = t();
					u(), Object(m.a)(n) && (await e(Object(i.z)()), Object(m.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(m.a)(n) && (Object(l.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(o.g)(d.g))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/EmailSettings/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const m = e => async (t, n, {
				apiContext: r
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
			}, u = e => async (t, n, {
				apiContext: s
			}) => {
				const c = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: r.cb.POST,
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
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(o.d)(o.a.GildingFlow),
					thingId: c
				})), Object(a.J)(i) || await t(r.r());
				const d = n();
				if (!Object(a.J)(d)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => async (e, t) => {
				const n = t();
				Object(r.J)(n) || await e(s.r());
				const o = t();
				if (!Object(r.J)(o)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: d.a
				}
			});
			const l = Object(r.a)(i.o),
				m = () => async (e, t, {
					gqlContext: n
				}) => {
					try {
						const t = await Object(a.d)(n());
						if (!t.ok) throw new Error(`Got bad response in GQL call for special events: ${JSON.stringify(t||{})}`); {
							const n = t.body.data.econSpecialEvents;
							await e(l(n))
						}
					} catch (r) {
						Object(s.b)() || console.error(r), o.c.captureException(r)
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
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(r.a)(o.c),
				m = Object(r.a)(o.b),
				u = Object(r.a)(o.a),
				p = Object(r.a)(o.f),
				b = Object(r.a)(o.e),
				h = Object(r.a)(o.d),
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
										r = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const r = e.rows[s],
														o = r.messageType;
													t.push(o), n[o] = r
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...a
										}, r = [...r, ...o];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: o
										}
									};
									for (let a = 0; a < e.length; a++) o(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: r
										}
									}
								}(s)
							}(s.body);
							t === c.a.Push ? n(b(e)) : n(m(e))
						} else t === c.a.Push ? n(h({
							error: s.error
						})) : n(u({
							error: s.error
						}))
					}(s, e, t)
				};
			const f = Object(r.a)(o.g),
				v = e => async (t, n, {
					gqlContext: r
				}) => {
					(await Object(i.b)(r(), e)).ok ? (x(t, e), function(e) {
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

			function x(e, t) {
				e(f({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/reddit/actions/notifications/utils.ts");
			s.a.Default;
			const o = {
				denied: s.a.Denied,
				granted: s.a.Granted
			};
			const a = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = s.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(r.a)(e) === s.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = o[Notification.permission] || s.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === s.a.Granted,
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
				i = (a.subscribe, a.unsubscribe, a.initialize),
				c = a.recalculate
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts");
			const a = e => o.d.pushNotificationsBrowserSupported(e) ? Object(r.a)() : s.c.BrowserUnsupported
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "h", (function() {
				return Q
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "g", (function() {
				return K
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = n("./src/reddit/actions/notificationsInbox/constants.ts"),
				c = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/graphql/operations/DeleteInboxNotifications.json"),
				m = n("./src/lib/makeGqlRequest/index.ts");
			var u = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				p = n("./src/graphql/operations/NotificationInboxFeed.json"),
				b = n("./src/graphql/operations/NotificationInboxFeedSlimmed.json"),
				h = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var C;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(C || (C = {}));
			var O = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				y = n("./src/graphql/operations/UpdateInboxActivitySeenState.json");
			var E = n("./src/reddit/helpers/trackers/inbox.ts"),
				P = n("./src/reddit/models/Badge/index.ts"),
				j = n("./src/reddit/models/NotificationInbox/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/appBadges.ts"),
				w = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				k = n("./src/reddit/selectors/notificationPrefs.ts"),
				I = n("./src/reddit/selectors/notificationsInbox.tsx");
			const N = Object(r.a)(i.d),
				M = Object(r.a)(i.b),
				T = Object(r.a)(i.a),
				A = e => async (t, n, {
					gqlContext: s
				}) => {
					var r, o;
					const a = n(),
						i = Object(I.a)(a);
					t(N());
					const c = await ((e, t) => Object(m.a)(e, {
						...p,
						variables: t
					}))(s(), e);
					if (null === (o = null === (r = c.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) return t(T({
						error: c.error
					})), void t(Object(d.d)());
					const l = c && c.body,
						u = L(l);
					if (null === i) {
						const e = Object(I.f)(a);
						t(D(u.nodes, e.length))
					}
					t(M(u))
				}, R = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, r;
					const o = await (e => Object(m.a)(e, {
						...b
					}))(n());
					if (null === (r = null === (s = o.error) || void 0 === s ? void 0 : s.fields) || void 0 === r ? void 0 : r.length) return;
					const a = o && o.body,
						i = F(a).nodes.filter(e => !e.viewedAt);
					i.length && i.forEach(e => {
						var n;
						Object(E.k)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, L = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						s = n && n.elements,
						r = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: r
					}
				}, F = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, D = (e, t) => async (n, s) => {
					const r = s(),
						o = Object(I.a)(r),
						a = ((e, t) => {
							let n, s = 0;
							const r = new Date,
								o = r.getDate(),
								a = r.getMonth(),
								i = r.getFullYear();
							for (; s < e.length && !n;) {
								const r = e[s],
									c = new Date(r.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									m = c.getFullYear();
								if ((d !== o || l !== a || m !== i) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					a && a !== o && n(U({
						index: a
					}))
				}, U = Object(r.a)(i.f), G = (Object(r.a)(i.g), Object(r.a)(i.e)), B = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = [e];
					if ((await ((e, t) => Object(m.a)(e, {
							...l,
							variables: {
								input: t
							}
						}))(r(), {
							notificationIds: o
						})).ok) {
						t(G({
							id: e
						}));
						const r = Object(I.f)(n());
						t(D(r)), t(Object(d.f)(Object(d.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(d.f)(Object(d.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, H = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					if (!e) return;
					const a = r(),
						i = () => {
							const n = Object(w.f)(a),
								r = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
									hk: "2tkhbk"
								});
							return n ? Object(d.f)(Object(d.e)(r, S.b.Undo, s.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((e, t) => async (n, r, {
								gqlContext: o
							}) => {
								if (!e) return;
								(await Object(O.b)(o(), e, {
									isSubredditUpdatesInterestingPostEnabled: !0,
									isUpdateFromSubredditEnabled: !0
								})).ok ? (t && t(), n(Object(d.f)(Object(d.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
									hk: "1na0NP"
								}), S.b.SuccessCommunityGreen)))) : n(Object(d.f)(Object(d.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
									hk: "4jo7Pf"
								}), S.b.Error)))
							})(e, t))) : Object(d.f)(Object(d.e)(r, S.b.SuccessCommunityGreen))
						};
					(await Object(O.b)(o(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(i()) : n(Object(d.f)(Object(d.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), S.b.Error)))
				}, q = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					if (!e) return;
					const i = r(),
						c = () => {
							const n = Object(w.f)(i),
								r = s.fbt._("Success! You won't see notifications like this in the future.", null, {
									hk: "1ijcqU"
								});
							return n ? Object(d.f)(Object(d.e)(r, S.b.Undo, s.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((e, t) => async (n, r, {
								gqlContext: o
							}) => {
								(await Object(u.b)(o(), {
									isEnabled: !0,
									messageType: e
								})).ok ? (Object(k.c)(r(), e) && Object(a.c)(n, {
									isEnabled: !1,
									messageType: e
								}), t && t(), n(Object(d.f)(Object(d.e)(s.fbt._("Success! Notifications like this were turned on.", null, {
									hk: "2krVMd"
								}), S.b.SuccessCommunityGreen)))) : n(Object(d.f)(Object(d.e)(s.fbt._("Failed to turn on these types of notifications.", null, {
									hk: "1dBLEQ"
								}), S.b.Error)))
							})(e, t))) : Object(d.f)(Object(d.e)(r, S.b.SuccessCommunityGreen))
						};
					(await Object(u.b)(o(), {
						isEnabled: !1,
						messageType: e
					})).ok ? (Object(k.c)(i, e) && Object(a.c)(n, {
						isEnabled: !1,
						messageType: e
					}), n(c())) : n(Object(d.f)(Object(d.e)(s.fbt._("Failed to turn off these types of notifications, please try again.", null, {
						hk: "2pNRDO"
					}), S.b.Error)))
				}, W = e => async (t, n, {
					apiContext: r
				}) => {
					if (!e) return;
					(await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/sendreplies`),
						method: h.cb.POST,
						data: {
							id: t
						}
					}))(r(), e)).ok ? t(Object(d.f)(Object(d.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, V = Object(r.a)(i.c), Q = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					let a;
					if (t === j.a.CommentReply || t === j.a.PostReply || t === j.a.PrivateMessage || t === j.a.UsernameMention) {
						if ((a = await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_message`),
								method: h.cb.POST,
								data: {
									id: t
								}
							}))(r(), e)).ok) {
							let e = Object(_.a)(s());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: P.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(c.e)())
							}
						}
					} else a = await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/read_notification`),
						method: h.cb.POST,
						data: {
							id: t
						}
					}))(r(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(V({
							id: e,
							now: t
						}))
					}
				}, z = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = (new Date).toLocaleDateString(),
						r = await ((e, t) => Object(m.a)(e, {
							...y,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: s
						});
					if (r.ok) {
						const t = r.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(c.d)()))
					}
				}, K = () => async (e, t, {
					apiContext: n
				}) => {
					if ((await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
							endpoint: Object(x.a)(`${e.apiUrl}/api/read_all_messages`),
							method: h.cb.POST,
							data: {
								filter_type: t
							}
						}))(n())).ok) {
						const t = Object(o.e)({
								count: 0,
								key: P.c.MessageTab
							}),
							n = Object(o.e)({
								count: 0,
								key: P.c.ActivityTab
							});
						e(Object(o.a)({
							...t,
							...n
						}))
					} else e(Object(d.f)(Object(d.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
						hk: "VW7c3"
					}), S.b.Error)))
				}
		},
		"./src/reddit/actions/page.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "e", (function() {
				return S
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/pages/subreddit.ts"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/pageTitle.ts"),
				i = n("./src/config.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/endpoints/me/index.ts"),
				m = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = n("./src/reddit/actions/pages/appeal/constants.ts");
			const p = `${i.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				b = Object(c.a)(u.b),
				h = Object(c.a)(u.a);
			var g = n("./src/reddit/actions/redditEmbed.ts"),
				f = n("./src/reddit/actions/users.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/lib/makeListingKey/index.ts"),
				C = n("./src/lib/matchRoute/index.ts");
			const O = e => async t => {
				await t(Object(g.c)(e, !0))
			}, y = () => async e => {
				await e((() => async (e, t, {
					apiContext: n
				}) => {
					const s = t(),
						r = await Object(l.a)(n());
					if (r.ok && r.body)
						if (r.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = p;
								window.location.href = e
							} else e(b(r.body));
					else Object(m.a)(e, s);
					else e(h(r.error))
				})())
			}, E = (e, t, n) => async (a, i, {
				routes: c
			}) => {
				const d = i(),
					l = (t || d.platform.currentPage).routeMatch.match,
					m = Object(C.a)(l.url, c);
				if (!m) return;
				const u = e.metaKey || e.ctrlKey || 1 === e.button;
				if (m.route && m.route.meta && (m.route.meta.name === o.Db.INDEX || m.route.meta.name === o.Db.MULTIREDDIT || m.route.meta.name === o.Db.SUBREDDIT)) u ? window.open(l.url) : n ? a(Object(s.b)(l.url)) : await a(m.route.action(l, !0));
				else if (m.match && m.match.params && m.match.params.subredditName) {
					const {
						subredditName: e
					} = m.match.params, t = `/r/${e}/`;
					if (u) window.open(t);
					else if (n) a(Object(s.b)(t));
					else {
						const n = Object(x.a)(e, o.P.HOT);
						await a(Object(s.b)(t)), a(Object(r.subredditDataRequested)(n, e, {}))
					}
				}
			}, P = () => async (e, t) => {
				const n = t();
				e(d.l({
					title: a.a()
				})), Object(v.J)(n) || await e(f.r())
			}, j = () => async e => e(d.l({
				title: a.a()
			})), S = e => async (t, s) => {
				const r = s();
				t(d.l({
					title: a.f()
				})), Object(v.J)(r) || await t(f.r());
				const o = Object(v.J)(r);
				if (e.queryParams.thanks && o) {
					const e = await n.e("GoldPurchasePaymentActions").then(n.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted),
						s = await n.e("GoldPurchasePaymentActions").then(n.bind(null, "./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts")).then(e => e.openPremiumPurchaseModal);
					setTimeout(() => {
						t(s()), t(e({
							confirmed: !1
						}))
					}, 1e3)
				}
			}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				o = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(s.r)()), Object(r.J)(t()) || e(Object(o.h)())
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(o.J)(t()) || await e(Object(r.r)()), await e(Object(s.b)()).then(() => {
					if (t().economics.me.data) return e(Object(s.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				o = n("./src/reddit/actions/pages/subreddit.ts"),
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
						Object(c.J)(l) || n.push(e(Object(a.r)()));
						const m = Object(s.a)(d, null);
						n.push(e(Object(o.subredditDataRequested)(m, d, {}))), await Promise.all(n);
						const u = Object(i.F)(t(), d);
						await e(Object(r.a)({
							subredditId: u,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(u.C),
				b = Object(r.a)(u.p),
				h = Object(r.a)(u.M),
				g = (e, t, n) => async (r, i, {
					apiContext: g
				}) => {
					c.i(i(), t);
					const v = t === d.h.MARKDOWN,
						x = t === d.h.RICH_TEXT,
						C = u.k;
					if (v && Object(l.G)(n)) return r(h({
						editorKey: e,
						editorMode: d.h.MARKDOWN,
						content: ""
					})), void r(f(t));
					if (x && !n) return r(h({
						editorKey: e,
						editorMode: d.h.RICH_TEXT,
						content: l.i
					})), void r(f(t));
					r(p(C));
					const O = await Object(a.a)(g(), t, v ? JSON.stringify(n) : n);
					O.ok ? (r(b(C)), r(h({
						editorKey: e,
						editorMode: t,
						content: O.body.output
					})), r(f(t))) : (r(b(C)), r(Object(o.f)({
						duration: o.a,
						kind: m.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const r = Object(i.k)();
					if (r >= 3) return;
					const a = n().user.prefs.useMarkdown ? d.h.MARKDOWN : d.h.RICH_TEXT;
					if (e === a) return;
					const c = e === d.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(o.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: c
					})), Object(i.cb)(r + 1)
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
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(o.r),
				i = Object(s.a)(o.F),
				c = e => async (t, n, {
					apiContext: s
				}) => {
					const o = await Object(r.a)(s(), e);
					o && o.ok ? t(a({
						streamId: e,
						level: o.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/comment/authoring.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/shortcuts.ts"),
				c = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = n("./src/reddit/selectors/activeModal.ts"),
				m = n("./src/reddit/selectors/gild.ts"),
				u = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts");
			const b = [u.t, u.o, e => !!Object(m.d)(e)],
				h = (e, t) => async (n, m, {
					apiContext: u
				}) => {
					const h = m();
					for (const e of b)
						if (e(h)) return;
					const g = document.activeElement,
						f = h.shortcuts.activeCommentId,
						v = Object(p.c)(h);
					if (g && "true" === g.contentEditable && f && v) n(r.a({
						parentCommentId: f,
						commentsPageKey: v
					})), Object(p.a)(f);
					else if (Object(l.b)(h)) Object(p.b)(i.b), n(Object(o.i)(Object(l.b)(h)));
					else if (h.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: x
					} = h.shortcuts;
					e(t && x ? c.b(x, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => async e => {
				e(Object(a.r)({
					forceFetch: !0
				})), await e(Object(o.g)(i.a.SNOOVATAR_MODAL))
			}, m = e => async (t, n) => {
				const a = n();
				Object(s.a)(Object(c.a)(e)(a)), Object(d.J)(a) ? await t(Object(o.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(r.h)())
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
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
			const r = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/sso/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b);
			var f = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				C = n("./src/reddit/constants/history.ts"),
				O = n("./src/reddit/constants/listings.ts"),
				y = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				j = n("./src/reddit/helpers/history/index.ts"),
				S = n("./src/reddit/helpers/trackers/onboarding.ts"),
				_ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				w = n("./src/reddit/models/Sso/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/accountManager.ts"),
				N = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				R = n.n(A);
			const L = l.a.iframe("IFrame", R.a),
				F = l.a.button("CloseButton", R.a),
				D = l.a.wrapped(_.a, "Close", R.a),
				U = Object(c.c)({
					accountManagerSrc: I.c,
					actionSource: I.a,
					frontpageSignupVariant: N.a,
					isLoggedIn: T.J,
					redirectUrl: I.b
				}),
				G = Object(i.b)(U, (e, t) => ({
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(M.defaults)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(P.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(u.z)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(f.f)(Object(f.e)(t, k.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(f.f)(Object(f.e)(t, k.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(f.f)(Object(f.e)(t, n)))
					}
				})),
				B = ({
					data: e,
					origin: t
				}) => e && e.success && (e.type === x.a.ChangePassword || e.type === x.a.Close || e.type === x.a.CreateAccount || e.type === x.a.GoogleOneTapDisplayed || e.type === x.a.GoogleOneTapFlowFailed || e.type === x.a.GoogleOneTapSkipped || e.type === x.a.Login || e.type === x.a.PreferenceStatus || e.type === x.a.Register || e.type === x.a.Resize || e.type === x.a.ShowStep || e.type === x.a.SSOLinkFail || e.type === x.a.SSOLinkSuccess || e.type === x.a.SSOUnlinkFail || e.type === x.a.SSOUnlinkSuccess || e.type === x.a.Subscribe || e.type === x.a.TwoFactorChanged) && t === s.a.accountManagerOrigin,
				H = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
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
						const t = e === w.a.Apple ? y.a.LINK_APPLE_SSO : y.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === w.a.Apple ? y.a.UNLINK_APPLE_SSO : y.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(r.fbt._("Account disconnected", null, {
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && B(e))
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
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(j.a)(C.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let n = "";
						if (this.props.redirectUrl) n = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) n = window.location.href;
						else {
							const s = 0;
							n = (e || t && t.length || 0) > s ? O.c[O.b.Home] : O.c[O.b.Popular]
						}
						this.redirectTo(n)
					}, this.onShowStep = e => {
						this.currentStep = e, e === x.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), k.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), k.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), k.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = e => {
						window.location.replace(Object(d.a)(e, {
							[E.o]: "true"
						}))
					}, this.closedByUser = () => {
						if (this.currentStep) {
							const e = H[this.currentStep];
							e && this.props.sendEvent(Object(S.d)(e))
						}
						this.close()
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
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}, this.props.setRef && this.props.setRef(this.iframeRef.current), this.props.exposeIFrameElement && this.props.exposeIFrameElement(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
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
						className: t,
						showCloseButton: n
					} = this.props, {
						iframeStyles: s
					} = this.state;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(L, {
						className: t,
						innerRef: this.iframeRef,
						src: e,
						style: s,
						onLoad: this.onIFrameLoad
					}), n && a.a.createElement(F, {
						onClick: this.closedByUser
					}, a.a.createElement(D, null)))
				}
			}
			t.a = G(Object(v.c)(q))
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
				return r
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended
				}),
				r = (e, t) => ({
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
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Nm
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				a = n.n(o),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				d = n("./node_modules/lodash/throttle.js"),
				l = n.n(d),
				m = n("./node_modules/react/index.js"),
				u = n.n(m),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./node_modules/reselect/es/index.js"),
				f = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				O = n("./src/lib/fastdom/index.ts"),
				y = n("./src/lib/FocusTrap/index.ts"),
				E = n("./src/lib/isEqualWithoutKey/index.ts"),
				P = n("./src/lib/isSimpleClick/index.ts"),
				j = n("./src/reddit/actions/header.ts"),
				S = n("./src/reddit/actions/survey/index.ts"),
				_ = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				k = n("./node_modules/polished/dist/polished.es.js"),
				I = n("./node_modules/react-motion/lib/react-motion.js"),
				N = n("./src/lib/lessComponent.tsx"),
				M = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				T = n("./src/reddit/components/TrackingHelper/index.tsx"),
				A = n("./src/reddit/constants/accountManager.ts"),
				R = n("./src/reddit/helpers/trackers/onboarding.ts"),
				L = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				U = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				B = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class H extends u.a.Component {
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
					}) => u.a.createElement("img", {
						key: e,
						src: `${U.a.assetPath}/${e}`,
						style: t
					}), this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: r,
							shouldHandleMouseClicks: o
						} = this.props, {
							pageNumber: a
						} = this.state, i = n === s.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -r * a : void 0
						};
						return u.a.createElement("div", {
							className: Object(f.a)(B.a.item, B.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${U.a.assetPath}/${e.img}")`,
								width: r
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => u.a.createElement("div", {
						className: Object(f.a)(B.a.indicator, {
							[B.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
					return u.a.createElement("div", {
						className: Object(f.a)(e, B.a.container)
					}, u.a.createElement("article", {
						className: B.a.items
					}, this.state.items.map(this.renderItem)), t && u.a.createElement("footer", {
						className: B.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var q = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				W = n.n(q);
			const V = N.a.div("Container", W.a),
				Q = N.a.wrapped(H, "Carousel", W.a),
				z = N.a.div("Phone", W.a),
				K = N.a.img("Frame", W.a),
				Z = `${U.a.assetPath}/img/frontpage-signup/android-frame.png`,
				J = `${U.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				Y = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				X = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var $ = e => {
					const {
						className: t
					} = e;
					return u.a.createElement(V, {
						className: t
					}, u.a.createElement(z, {
						className: W.a.android
					}, u.a.createElement(Q, {
						animationType: s.Fade,
						className: W.a.android,
						delay: 2500,
						items: Y,
						itemTime: 5e3,
						itemWidth: 240
					}), u.a.createElement(K, {
						src: Z
					})), u.a.createElement(z, {
						className: W.a.iphone
					}, u.a.createElement(Q, {
						animationType: s.Fade,
						className: W.a.iphone,
						items: X,
						itemTime: 5e3,
						itemWidth: 232
					}), u.a.createElement(K, {
						src: J
					})))
				},
				ee = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				te = n.n(ee);
			const ne = N.a.div("Container", te.a),
				se = N.a.span("Disclaimer", te.a),
				re = N.a.a("Link", te.a);
			var oe = e => u.a.createElement(ne, {
					className: e.className
				}, u.a.createElement(re, {
					href: "https://about.reddit.com"
				}, r.fbt._("about", null, {
					hk: "4n6gdA"
				})), u.a.createElement(re, {
					href: "https://www.redditinc.com/advertising"
				}, r.fbt._("advertise", null, {
					hk: "3M40BX"
				})), u.a.createElement(re, {
					href: "http://www.redditblog.com/"
				}, r.fbt._("blog", null, {
					hk: "iEUEu"
				})), u.a.createElement(re, {
					href: "https://about.reddit.com/careers/"
				}, r.fbt._("careers", null, {
					hk: "1nRiZW"
				})), u.a.createElement(re, {
					href: "https://www.reddithelp.com"
				}, r.fbt._("help", null, {
					hk: "3CJ8k2"
				})), u.a.createElement(re, {
					href: "https://about.reddit.com/press/"
				}, r.fbt._("press", null, {
					hk: "x8wb0"
				})), u.a.createElement(re, {
					href: "https://www.reddit.com/mobile/download"
				}, r.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), u.a.createElement(re, {
					href: "https://www.reddit.com/coins"
				}, r.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), u.a.createElement(re, {
					href: "https://redditgifts.com/"
				}, r.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), u.a.createElement(re, {
					href: "https://www.reddit.com/premium"
				}, r.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), u.a.createElement(re, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, r.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), u.a.createElement(re, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, r.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), u.a.createElement(se, null, r.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ae = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ie = n.n(ae);
			const ce = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				de = N.a.div("Container", ie.a),
				le = N.a.wrapped(M.a, "IFrame", ie.a),
				me = N.a.wrapped($, "Images", ie.a),
				ue = N.a.wrapped(oe, "Links", ie.a),
				pe = N.a.div("MainContent", ie.a),
				be = N.a.div("MainContentColumn", ie.a),
				he = N.a.button("NotReady", ie.a),
				ge = N.a.span("NotReadyText", ie.a),
				fe = N.a.wrapped(L.a, "NotReadyIcon", ie.a),
				ve = Object(x.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return u.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, u.a.createElement(de, {
						className: t,
						innerRef: n
					}, u.a.createElement(pe, null, u.a.createElement(be, null, u.a.createElement(me, null, "Images Placeholder")), u.a.createElement(be, null, u.a.createElement(le, {
						className: Object(f.a)({
							[ie.a.fields]: Object(D.b)(s)
						}),
						path: A.c.Register,
						uiMode: A.d.Embed
					}))), u.a.createElement(he, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(k.j)(.8, i)
						}
					}, u.a.createElement(ge, null, r.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), u.a.createElement(fe, null)), u.a.createElement(ue, null)))
				});
			class xe extends u.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ce extends u.a.Component {
				constructor() {
					super(...arguments), this.containerRef = u.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(R.a)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = ({
						scrollTo: e
					}) => u.a.createElement(xe, {
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
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ve, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), u.a.createElement(I.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(I.spring)(s, ce)
						}
					}, this.renderScroller))
				}
			}
			var Oe = Object(T.c)(Ce),
				ye = n("./node_modules/js-cookie/src/js.cookie.js"),
				Ee = n.n(ye),
				Pe = n("./src/lib/localStorageAvailable/index.ts"),
				je = n("./src/reddit/actions/modal.ts"),
				Se = n("./src/higherOrderComponents/makeAsync.tsx"),
				_e = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				ke = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ie = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Me = n("./src/reddit/selectors/activeModalId.ts"),
				Te = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Ae = n.n(Te);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = N.a.button("CloseButton", Ae.a), Fe = N.a.wrapped(Ne.a, "Close", Ae.a), De = N.a.div("Container", Ae.a), Ue = N.a.p("Description", Ae.a), Ge = N.a.div("Footer", Ae.a), Be = N.a.h3("Heading", Ae.a), He = N.a.img("SnooImage", Ae.a), qe = N.a.div("Wrapper", Ae.a), We = Object(g.c)({
				activeModalId: Me.a
			});
			class Ve extends u.a.Component {
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
					return u.a.createElement(qe, null, u.a.createElement(De, null, u.a.createElement(Be, null, Re._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), u.a.createElement(Ue, null, Re._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), u.a.createElement(He, {
						src: `${U.a.assetPath}/img/magnifying-glass-snoo.png`
					})), u.a.createElement(Ge, null, u.a.createElement(Ie.i, {
						onClick: this.onCloseButtonClick
					}, Re._("Sounds good", null, {
						hk: "1OMLn5"
					}))), u.a.createElement(Le, {
						onClick: this.onCloseButtonClick
					}, u.a.createElement(Fe, null)))
				}
			}
			var Qe = Object(p.b)(We, e => ({
					modalToggled: t => e(Object(je.i)(t))
				}))(Object(ke.a)(Object(T.c)(Ve))),
				ze = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Ke = n("./src/lib/loadWithRetries/index.ts");
			var Ze = Object(Se.a)({
				getComponent: () => Object(Ke.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Je = () => null;
			var Ye = Object(Se.a)({
					ErrorComponent: Je,
					getComponent: () => Object(Ke.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Je
				}),
				Xe = n("./src/reddit/actions/structuredStyles/index.ts"),
				$e = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				et = n("./src/reddit/constants/modals.ts"),
				tt = n("./src/reddit/controls/TextButton/index.tsx"),
				nt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: st
			} = n("./node_modules/fbt/lib/FbtPublic.js"), rt = Object(p.b)(null, (e, {
				subredditId: t
			}) => ({
				closeModal: () => {
					e(Object(je.i)(et.a.BLADE_NIGHTMODE)), e(Object(Xe.f)())
				},
				openBlade: () => {
					e(Object(Xe.e)(t))
				}
			}));
			var ot = Object(ke.a)(rt(e => u.a.createElement($e.d, null, u.a.createElement($e.h, null, u.a.createElement(nt.a, null, u.a.createElement($e.p, null, st._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), u.a.createElement(tt.a, {
					onClick: e.closeModal
				}, u.a.createElement($e.b, null)))), u.a.createElement($e.k, null, u.a.createElement($e.n, null, st._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), u.a.createElement($e.f, null, u.a.createElement($e.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, st._("Cancel", null, {
					hk: "2TSLl5"
				})), u.a.createElement($e.q, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, st._("Continue", null, {
					hk: "413jMZ"
				})))))),
				at = n("./src/reddit/actions/authorFlair.ts"),
				it = n("./src/reddit/actions/userFlair/index.ts"),
				ct = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				dt = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				lt = n("./src/reddit/components/FlairPreview/index.tsx"),
				mt = n("./src/reddit/components/FlairSearch/index.tsx"),
				ut = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				pt = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				bt = n("./src/reddit/layout/row/Inline/index.tsx"),
				ht = n("./src/reddit/models/Flair/index.ts"),
				gt = n("./src/reddit/models/User/index.ts"),
				ft = n("./src/reddit/selectors/authorFlair.ts"),
				vt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = n("./src/reddit/selectors/telemetry.ts"),
				Ct = n("./src/reddit/selectors/user.ts"),
				Ot = n("./src/reddit/selectors/userFlair.ts"),
				yt = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				Et = n.n(yt);
			const Pt = e => e.inContextAuthor && e.currentUser && Object(gt.e)(e.currentUser) === e.inContextAuthor.username,
				jt = e => e.authorFlair || Pt(e) && e.userFlairData.applied || null,
				St = N.a.wrapped(bt.a, "Section", Et.a),
				_t = N.a.div("CheckboxText", Et.a);
			class wt extends u.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(xt.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						const {
							props: e,
							state: t
						} = this, n = t.previewFlair ? t.previewFlair.templateId : void 0;
						e.activeFlairChanged(t.previewFlair, n, t.showFlair, e.inContextAuthor), e.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: jt(e),
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
						isUserEnabled: r
					} = e.displaySettings, o = this.state.showFlair !== r, a = jt(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(ut.b)(n, t, a);
					return !(i || c !== ut.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s
					} = e, o = n.permissions.canUserChange, a = n.permissions.canUserChange, {
						templates: i,
						templateIds: c
					} = n, d = this.canSave(), l = Pt(e);
					return u.a.createElement(dt.a, null, u.a.createElement(ct.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), u.a.createElement(lt.a, {
						flair: t.previewFlair,
						flairTemplateType: ht.d.UserFlair,
						placeholderText: r.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), a && u.a.createElement(mt.a, {
						flair: t.previewFlair,
						flairTemplateType: ht.d.UserFlair,
						subredditId: s,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && u.a.createElement(St, null, u.a.createElement(pt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: u.a.createElement(_t, null, r.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), u.a.createElement("div", {
						className: Et.a.buttonsRow
					}, u.a.createElement(Ie.i, {
						disabled: !d,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), o && u.a.createElement(Ie.l, {
						className: Et.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "23i2at"
					}))))
				}
			}
			const kt = Object(p.b)(() => Object(g.c)({
				authorFlair: ft.b,
				currentUser: Ct.i,
				inContextAuthor: ft.c,
				isMod: (e, t) => !!Object(vt.k)(e, t),
				userFlairData: Ot.c
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(it.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(at.b)({
					username: null,
					subredditId: null
				}))
			}))(wt);
			var It = Object(ke.a)(Object(T.c)(kt)),
				Nt = n("./src/reddit/selectors/bannedUser.ts"),
				Mt = n("./src/reddit/selectors/muted.ts"),
				Tt = n("./src/reddit/selectors/notificationPrefs.ts"),
				At = n("./src/reddit/selectors/platform.ts"),
				Rt = n("./src/reddit/selectors/removalReasons.ts"),
				Lt = n("./src/reddit/constants/cookie.ts"),
				Ft = n("./src/reddit/featureFlags/index.ts"),
				Dt = n("./src/reddit/helpers/localStorage/index.ts"),
				Ut = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Gt = Object(g.c)({
				activeModalId: Me.a,
				authorContext: ft.c,
				badgePurchaseModalIsOpen: Object(Me.b)(et.a.BADGE_PURCHASE),
				banContext: Nt.a,
				banModalIsOpen: Object(Me.b)(et.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Me.b)(et.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Me.b)(et.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Ft.d.introModal(e),
				isOverlayOpen: At.h,
				moderatorPermissions: e => {
					const t = Object(At.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Mt.a,
				muteModalIsOpen: Object(Me.b)(et.a.MUTE_USER),
				notificationsPrePromptIsOpen: Tt.d,
				removalReasonContext: Rt.b,
				removalReasonModalIsOpen: Object(Me.b)(et.a.ADD_REMOVAL_REASON),
				subredditId: At.c,
				userFlairModalIsOpen: Object(Me.b)(et.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Ct.w,
				userInRedesignBeta: Ct.D,
				userIsLoggedIn: Ct.J,
				userIsMod: Ct.K,
				userIsNew: Ct.M
			});
			class Bt extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Pe.a)()) return; {
						const e = Ee.a.get(Lt.a);
						e && Ee.a.remove(Lt.a, {
							domain: U.a.cookieDomain
						});
						const t = Object(Dt.v)(et.a.ALPHA_CONSUMER);
						t && Object(Dt.O)(et.a.ALPHA_CONSUMER), (e || t) && Object(Dt.mb)(et.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Dt.v)(et.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Dt.mb)(et.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), et.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ut.a)(), 500) : setTimeout(() => Object(Ut.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						currentBadgePurchase: o,
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
						userFlairModalIsOpen: x
					} = this.props, C = (e, t, n) => s => () => b(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(xt.comment)(r, n),
						post: n && Object(xt.post)(r, n),
						screen: Object(xt.screen)(r),
						subreddit: Object(xt.subredditById)(r, t)
					}));
					return u.a.createElement(m.Fragment, null, s && n && u.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: g,
						trackAddEvent: C("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: C("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && u.a.createElement(ze.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: f,
						trackAddEvent: C("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && l && u.a.createElement(Ye, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: v,
						trackClick: C("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), r && h && u.a.createElement(ot, {
						subredditId: h
					}), x && e && e.subredditId && u.a.createElement(It, {
						subredditId: e.subredditId
					}), t && o && u.a.createElement(_e, {
						withOverlay: !0,
						productId: o
					}), d && u.a.createElement(Ze, null), a && u.a.createElement(Qe, {
						withOverlay: !0
					}))
				}
			}
			var Ht = Object(p.b)(Gt, e => ({
					markRedesignModalAsClosed: () => e(Object(je.j)()),
					toggleBanModal: () => e(Object(je.i)(et.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(je.i)(et.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(je.i)(et.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(je.i)(et.a.ADD_REMOVAL_REASON))
				}))(Object(T.c)(Bt)),
				qt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Wt = n("./src/reddit/constants/experiments.ts"),
				Vt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Qt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				zt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Kt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Zt = n.n(Kt);
			const Jt = N.a.div("Overlay", Zt.a),
				Yt = N.a.div("IframeContainer", Zt.a),
				Xt = {},
				$t = Object(Vt.t)(),
				en = Object(g.c)({
					frontpageSignupVariant: D.a,
					isResponsiveSettingsEnabled: zt.a
				}),
				tn = {
					[A.c.ChangePassword]: et.a.CHANGE_PASSWORD_MODAL_ID,
					[A.c.Index]: et.a.LOGIN_MODAL_ID,
					[A.c.Register]: et.a.REGISTER_MODAL_ID,
					[A.c.EnableTwoFactor]: et.a.ENABLE_TWO_FACTOR,
					[A.c.DisableTwoFactor]: et.a.DISABLE_TWO_FACTOR,
					[A.c.TwoFactorBackupCodes]: et.a.TWO_FACTOR_BACKUP_CODES,
					[A.c.LinkAppleSSO]: et.a.LINK_APPLE_SSO,
					[A.c.UnlinkAppleSSO]: et.a.UNLINK_APPLE_SSO,
					[A.c.LinkGoogleSSO]: et.a.LINK_GOOGLE_SSO,
					[A.c.UnlinkGoogleSSO]: et.a.UNLINK_GOOGLE_SSO,
					[A.c.GoogleOneTap]: et.a.GOOGLE_ONE_TAP_MODAL_ID,
					[A.c.Onboarding]: et.a.ONBOARDING_MODAL_ID
				};
			class nn extends u.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === A.c.Register && Object(D.f)(this.props.frontpageSignupVariant) && Qt.a.throttleFeature(Wt.lb), this.props.sendEvent(Object(R.a)(this.subscriptions))
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
						"user_cancel" === e && this.props.sendEvent(Object(R.b)())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(R.c)())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === A.c.Index || t === A.c.Register, s = t === A.c.GoogleOneTap;
						e === A.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === A.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === A.b.Email || e === A.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== A.b.EmailOptIn && e !== A.b.GoogleUI || this.setState({
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
						containerSize: r,
						isSSOLinkActionFailedModal: o,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(D.c)(e) || Object(D.d)(e), d = s === A.c.LinkAppleSSO || s === A.c.LinkGoogleSSO || s === A.c.UnlinkAppleSSO || s === A.c.UnlinkGoogleSSO, l = s === A.c.GoogleOneTap, m = Object(f.a)({
						[Zt.a.small]: c,
						[Zt.a.ssoConfirmPassword]: d,
						[Zt.a.linkActionSSOFail]: o,
						[Zt.a.mResponsive]: t,
						[Zt.a.mGoogleOneTap]: l && !a
					}), p = Object(f.a)({
						[Zt.a.mGoogleOneTap]: l && !a,
						[Zt.a.mHiddenOverlay]: l && !i
					}), b = !c && !o && !t;
					return u.a.createElement(Jt, {
						className: p
					}, u.a.createElement(Yt, {
						className: m,
						style: r || Xt
					}, u.a.createElement(M.a, {
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
			const sn = $t(Object(p.b)(en, (e, t) => ({
				closeModal: t => {
					e(Object(je.g)(tn[t]))
				}
			}))(Object(T.c)(nn)));
			Object(qt.b)(et.a.CHANGE_PASSWORD_MODAL_ID, e => u.a.createElement(sn, {
				path: A.c.ChangePassword
			})), Object(qt.b)(et.a.LOGIN_MODAL_ID, e => u.a.createElement(sn, {
				path: A.c.Index
			})), Object(qt.b)(et.a.ONBOARDING_MODAL_ID, e => u.a.createElement(sn, {
				path: A.c.Onboarding
			})), Object(qt.b)(et.a.ENABLE_TWO_FACTOR, e => u.a.createElement(sn, {
				path: A.c.EnableTwoFactor
			})), Object(qt.b)(et.a.DISABLE_TWO_FACTOR, e => u.a.createElement(sn, {
				path: A.c.DisableTwoFactor
			})), Object(qt.b)(et.a.TWO_FACTOR_BACKUP_CODES, e => u.a.createElement(sn, {
				path: A.c.TwoFactorBackupCodes
			})), Object(qt.b)(et.a.REGISTER_MODAL_ID, e => u.a.createElement(sn, {
				path: A.c.Register
			})), Object(qt.b)(et.a.LINK_APPLE_SSO, e => u.a.createElement(sn, {
				path: A.c.LinkAppleSSO
			})), Object(qt.b)(et.a.LINK_GOOGLE_SSO, e => u.a.createElement(sn, {
				path: A.c.LinkGoogleSSO
			})), Object(qt.b)(et.a.UNLINK_APPLE_SSO, e => u.a.createElement(sn, {
				path: A.c.UnlinkAppleSSO
			})), Object(qt.b)(et.a.UNLINK_GOOGLE_SSO, e => u.a.createElement(sn, {
				path: A.c.UnlinkGoogleSSO
			})), Object(qt.b)(et.a.GOOGLE_ONE_TAP_MODAL_ID, e => u.a.createElement(sn, {
				path: A.c.GoogleOneTap
			}));
			const rn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("BadgePickerModal").then(n.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.BADGE_PICKER, e => u.a.createElement(rn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const on = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CONTRIBUTOR_REQUEST_PENDING, e => u.a.createElement(on, {
				withOverlay: !0
			}));
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CONTRIBUTOR_REQUEST, e => u.a.createElement(an, {
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => u.a.createElement(cn, {
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CROWD_CONTROL, e => u.a.createElement(dn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx");
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ke.a)(() => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx"))).then(e => e.default)
			});
			Object(qt.b)(et.a.ECON_POWERUPS_MARKETING, e => u.a.createElement(ln, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var mn = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ke.a)(() => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(mn.d)()])).then(e => e[0].default)
			});
			Object(qt.b)(et.a.ECON_POWERUPS_PURCHASE, e => u.a.createElement(un, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => u.a.createElement(pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => u.a.createElement(bn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hn = Object(Se.a)({
					getComponent: () => Object(Ke.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				gn = e => () => {
					e()
				};
			Object(qt.b)(et.a.GOLD_GILD_MODAL, e => u.a.createElement(hn, {
				onOverlayClick: gn(e),
				withOverlay: !0
			}));
			var fn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				vn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				xn = n.n(vn);
			const Cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = fn.SPARKLE_ASSET_PATH, document.createElement("img").src = fn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(qt.b)(et.a.GOLD_GILD_ANIMATION_OVERLAY, e => u.a.createElement(Cn, {
				withOverlay: !0,
				className: xn.a.modalBody,
				overlayClassName: xn.a.modalOverlay
			}));
			const On = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				yn = e => () => {
					e()
				};
			Object(qt.b)(et.a.GOLD_TARGETED_OFFER_MODAL, e => u.a.createElement(On, {
				onOverlayClick: yn(e),
				withOverlay: !0
			}));
			const En = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_BANNER_MANAGE, e => u.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_BANNER_PURCHASE, e => u.a.createElement(Pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const jn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => u.a.createElement(jn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Sn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => u.a.createElement(Sn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const _n = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.GOVERNANCE_RELEASE_NOTES, e => u.a.createElement(_n, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const wn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.TRANSFER_POINTS, e => u.a.createElement(wn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const kn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.WALLET_REGISTRATION_MODAL, e => u.a.createElement(kn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const In = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MOD_TO_MEMBER_SHARE, e => u.a.createElement(In, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_ADD_SUBREDDIT, e => u.a.createElement(Nn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_CREATE, e => u.a.createElement(Mn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(qt.b)(et.a.MULTIREDDIT_DUPLICATE, e => u.a.createElement(Mn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Tn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_EDIT, e => u.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const An = () => null,
				Rn = Object(Se.a)({
					ErrorComponent: An,
					getComponent: () => Object(Ke.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: An
				});
			Object(qt.b)(et.a.PINNED_POSTS_LIMIT_REACHED, e => u.a.createElement(Rn, null));
			var Ln = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Fn = n.n(Ln);
			const {
				fbt: Dn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Un = N.a.h2("ColumnLabel", Fn.a), Gn = N.a.wrapped(bt.a, "ColumnWrapper", Fn.a), Bn = N.a.div("Column", Fn.a), Hn = N.a.div("Description", Fn.a), qn = N.a.div("Key", Fn.a), Wn = N.a.wrapped($e.k, "ModalMain", Fn.a), Vn = N.a.wrapped($e.d, "ModalBody", Fn.a), Qn = N.a.wrapped(Ie.i, "PrimaryButton", Fn.a), zn = N.a.wrapped(tt.a, "TextButton", Fn.a), Kn = Object(p.b)(null, e => ({
				closeModal: () => e(Object(je.i)(et.a.KEYBOARD_SHORTCUTS))
			})), Zn = N.a.wrapped(Object(ke.a)(Kn(e => u.a.createElement(Vn, {
				onClick: e => e.stopPropagation()
			}, u.a.createElement($e.h, null, u.a.createElement(nt.a, null, u.a.createElement($e.p, null, Dn._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), u.a.createElement(zn, {
				onClick: e.closeModal
			}, u.a.createElement($e.b, null)))), u.a.createElement(Wn, null, u.a.createElement(Gn, null, u.a.createElement(Bn, null, u.a.createElement(bt.a, null, u.a.createElement(Un, null, Dn._("Navigation", null, {
				hk: "3zSWEe"
			}))), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), u.a.createElement(qn, null, "Shift + ?")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Next post or comment", null, {
				hk: "1m8s9z"
			})), u.a.createElement(qn, null, "J")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), u.a.createElement(qn, null, "K")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), u.a.createElement(qn, null, "N")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), u.a.createElement(qn, null, "P")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Open post", null, {
				hk: "2wD7mh"
			})), u.a.createElement(qn, null, "Enter")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Open/close expando", null, {
				hk: "1yDst0"
			})), u.a.createElement(qn, null, "X")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Go to post link", null, {
				hk: "c0TNr"
			})), u.a.createElement(qn, null, "L"))), u.a.createElement(Bn, null, u.a.createElement(bt.a, null, u.a.createElement(Un, null, Dn._("Action", null, {
				hk: "3QI6pT"
			}))), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Upvote", null, {
				hk: "5i9NP"
			})), u.a.createElement(qn, null, "A")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Downvote", null, {
				hk: "1ef3YP"
			})), u.a.createElement(qn, null, "Z")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("New post", null, {
				hk: "4dtNWf"
			})), u.a.createElement(qn, null, "C")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Reply to comment", null, {
				hk: "G8AbT"
			})), u.a.createElement(qn, null, "R")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Submit comment/post", null, {
				hk: "13agk7"
			})), u.a.createElement(qn, null, "Ctrl + Enter")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Save", null, {
				hk: "3Dtwo5"
			})), u.a.createElement(qn, null, "S")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Hide", null, {
				hk: "2Dn9GF"
			})), u.a.createElement(qn, null, "H")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Open navigation", null, {
				hk: "QdGe2"
			})), u.a.createElement(qn, null, "Q")), u.a.createElement(bt.a, null, u.a.createElement(Hn, null, Dn._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), u.a.createElement(qn, null, "Enter"))))), u.a.createElement($e.f, null, u.a.createElement(Qn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, Dn._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", Fn.a);
			Object(qt.b)(et.a.KEYBOARD_SHORTCUTS, e => u.a.createElement(Zn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Jn = Object(Se.a)({
					getComponent: () => Object(Ke.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Yn = e => () => {
					e()
				};
			Object(qt.b)(et.a.SNOOVATAR_MODAL, e => u.a.createElement(Jn, {
				onOverlayClick: Yn(e),
				withOverlay: !0
			}));
			const {
				fbt: Xn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $n = Object(g.c)({
				allowNavigationCallback: At.a
			}), es = Object(p.b)($n, e => ({
				closeModal: () => e(Object(je.i)(et.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Xe.a)())
			}));
			class ts extends u.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return u.a.createElement($e.d, null, u.a.createElement($e.h, null, u.a.createElement(nt.a, null, u.a.createElement($e.p, null, Xn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), u.a.createElement(tt.a, {
						onClick: this.onCancelClick
					}, u.a.createElement($e.b, null)))), u.a.createElement($e.k, null, u.a.createElement($e.o, null, Xn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), u.a.createElement($e.f, null, u.a.createElement($e.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Xn._("Cancel", null, {
						hk: "2TSLl5"
					})), u.a.createElement($e.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Xn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const ns = Object(ke.a)(es(ts));
			Object(qt.b)(et.a.BLADE_UNSAVED_CHANGES, e => u.a.createElement(ns, {
				withOverlay: !0
			}));
			const ss = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ke.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("SubredditWelcomeMessageModal")]).then(n.bind(null, "./src/reddit/components/SubredditWelcomeMessageModal/index.tsx"))).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_WELCOME_MESSAGE, e => u.a.createElement(ss, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const rs = Object(g.c)({
					activeModalId: Me.a
				}),
				os = Object(p.b)(rs, e => ({
					toggleModal: t => e(Object(je.i)(t))
				})),
				as = 500,
				is = () => {};
			class cs extends u.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					et.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ut.a)(), as) : setTimeout(() => Object(Ut.b)(), as))
				}
				componentWillUnmount() {
					Object(Ut.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(qt.a)(e)(e ? this.toggleModal : is)
				}
			}
			var ds, ls = os(cs),
				ms = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				us = n("./src/reddit/actions/page.ts"),
				ps = n("./src/reddit/actions/shortcuts/utils.ts"),
				bs = n("./src/reddit/icons/fonts/index.tsx"),
				hs = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				gs = n("./src/reddit/icons/svgs/Pinmenu/index.tsx"),
				fs = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				vs = n("./src/reddit/selectors/header.ts"),
				xs = n("./src/reddit/selectors/userPrefs.ts"),
				Cs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				Os = n("./src/reddit/components/SEOTitle/index.tsx"),
				ys = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Es = n("./src/reddit/components/UserIcon/index.tsx"),
				Ps = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				js = n("./src/reddit/icons/svgs/All/index.tsx"),
				Ss = n("./src/reddit/icons/svgs/Browse/index.tsx"),
				_s = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				ws = n("./src/reddit/icons/svgs/Envelope/index.tsx"),
				ks = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				Is = n("./src/reddit/icons/svgs/Home/index.tsx"),
				Ns = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ms = n("./src/reddit/icons/svgs/Multireddit/index.tsx"),
				Ts = n("./src/reddit/icons/svgs/Notify/index.tsx"),
				As = n("./src/reddit/icons/svgs/Popular/index.tsx"),
				Rs = n("./src/reddit/icons/svgs/Post/index.tsx"),
				Ls = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				Fs = n("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Ds = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Us = n.n(Ds);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(ds || (ds = {}));
			const Gs = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return u.a.createElement(u.a.Fragment, null, n && `${n}/`, s && u.a.createElement(Os.b, {
					type: Os.a.HeaderSelector
				}, s))
			};
			var Bs = n("./src/lib/objectSelector/index.ts"),
				Hs = n("./src/reddit/constants/wiki.ts"),
				qs = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ws = n("./src/reddit/selectors/subreddit.ts"),
				Vs = n("./src/reddit/selectors/topic.ts");
			var Qs = Object(Bs.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(Vt.V)(t);
					switch (s) {
						case "index":
						case "listing":
							return n ? {
								type: ds.Home
							} : {
								type: ds.Popular
							};
						case "modListing":
							return {
								type: ds.ModListing
							};
						case "modQueuePages":
							return {
								type: ds.ModQueue
							};
						case "postCreation":
							return {
								type: ds.CreatePost
							};
						case "postDraft":
							return {
								type: ds.ViewDraft
							};
						case "subredditCreation":
							return {
								type: ds.SubredditCreation
							};
						case "coins":
							return {
								type: ds.Coins
							};
						case "premium":
							return {
								type: ds.Premium
							};
						case "acknowledgements":
							return {
								type: ds.Acknowledgements
							};
						case "appeal":
							return {
								type: ds.Appeal
							};
						case "report":
							return {
								type: ds.Report
							};
						case "userDataRequest":
							return {
								type: ds.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: ds.DailyCharts
							};
						case "geotagging":
							return {
								type: ds.Geotagging
							};
						case "notificationsInbox":
							return {
								type: ds.NotificationsInbox
							};
						case "topic": {
							const n = Object(Vt.s)(t),
								s = n && Object(Vs.d)(e, n);
							if (s) return {
								type: ds.Topic,
								model: s
							}
						}
					}
					const r = e.user.account;
					if (r) switch (s) {
						case "inboxPages":
							return {
								type: ds.Inbox, model: r
							};
						case "settings":
							return {
								type: ds.Settings, model: r
							}
					}
					const o = Object(Vt.P)(e, {
						pageLayer: t
					});
					if ("all" === o) return {
						type: ds.All
					};
					if ("popular" === o) return {
						type: ds.Popular
					};
					const a = Object(Vt.q)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: ds.CommunitySearch,
						model: a
					} : {
						type: ds.Community,
						model: a
					};
					const i = Object(Vt.d)(e, {
						pageLayer: t
					});
					if (i) return {
						type: ds.Multi,
						model: i
					};
					const c = Object(Vt.j)(e, {
						pageLayer: t
					});
					if (c) return {
						type: ds.UserProfile,
						model: c
					};
					const d = Object(Vt.h)(t);
					if (d) return {
						type: ds.UserProfileName,
						name: `u/${d}`
					};
					if (s && "searchResults" === s) return {
						type: ds.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(Vt.n)(e, {
								pageLayer: t
							}) || Hs.e,
							s = Object(Ws.A)(e, {
								subredditName: n
							});
						if (s) return {
							type: ds.Community,
							model: s
						}
					}
					return "rpan" === s && Object(qs.a)(e) ? {
						type: ds.PublicAccessNetwork
					} : {
						type: ds.Unknown
					}
				}),
				zs = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Ks = n.n(zs);

			function Zs() {
				return (Zs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Js(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: u.a.createElement(u.a.Fragment, null, u.a.createElement(t, {
							className: Ks.a.icon
						}), u.a.createElement(n, {
							className: Ks.a.text
						})),
						className: Object(f.a)(Ks.a.item, e.className, {
							[Ks.a.mFocused]: !!e.isFocused,
							[Ks.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? u.a.createElement("a", Zs({}, s, {
					href: e.to,
					target: "_blank"
				})) : u.a.createElement(ms.a, Zs({}, s, {
					to: e.to
				})) : u.a.createElement("button", s)
			}
			var Ys = n("./src/reddit/constants/listings.ts"),
				Xs = n("./src/reddit/helpers/overlay/index.ts"),
				$s = n("./src/reddit/routes/modListing/index.ts"),
				er = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				tr = n("./src/reddit/selectors/multireddit.ts"),
				nr = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				sr = n("./src/lib/LinkedListMap/index.ts");
			const rr = Object(g.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(tr.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(tr.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				isUserEnrolledInOldModmail: Ws.o,
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var or;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(or || (or = {}));
			const ar = e => [t => ({
					id: ds.All,
					type: or.GenericLink,
					model: {
						url: "/r/all/",
						displayText: r.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(bs.a, {
							name: "all"
						}) : u.a.createElement(js.a, {
							className: Object(f.a)(t, Us.a.itemIcon)
						}),
						text: ({
							className: e
						}) => u.a.createElement("span", {
							className: e
						}, r.fbt._("All", null, {
							hk: "2M8nEy"
						}))
					},
					telemetryNoun: "all"
				}), t => ({
					id: ds.DailyCharts,
					type: or.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: r.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(bs.a, {
							name: "list_numbered"
						}) : u.a.createElement(ks.a, {
							className: Object(f.a)(t, Us.a.itemIcon)
						}),
						text: ({
							className: e
						}) => u.a.createElement("span", {
							className: e
						}, r.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}))
					},
					telemetryNoun: "daily_charts"
				})],
				ir = e => [e => ({
					id: "reddit-feeds",
					type: or.Header,
					model: {
						displayText: r.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (t, n) => ({
					id: ds.Home,
					type: or.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(bs.a, {
							name: "home"
						}) : u.a.createElement(Is.a, {
							className: Object(f.a)(t, Us.a.itemIcon),
							isBadged: n && n.isBadged
						}),
						text: ({
							className: e
						}) => u.a.createElement("span", {
							className: e
						}, r.fbt._("Home", null, {
							hk: "2u56yo"
						}))
					},
					telemetryNoun: "home"
				}), t => ({
					id: ds.Popular,
					type: or.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(bs.a, {
							name: "popular"
						}) : u.a.createElement(As.a, {
							className: Object(f.a)(t, Us.a.itemIcon)
						}),
						text: ({
							className: e
						}) => u.a.createElement("span", {
							className: e
						}, r.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...ar(e)],
				cr = e => [t => ({
					id: ds.Coins,
					type: or.GenericLink,
					model: {
						url: "/coins",
						displayText: r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(bs.a, {
							name: "coins"
						}) : u.a.createElement(_s.a, {
							className: Object(f.a)(t, Us.a.itemCoin)
						}),
						text: ({
							className: e
						}) => u.a.createElement("span", {
							className: e
						}, r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}))
					},
					telemetryNoun: "coins"
				}), t => ({
					id: ds.Premium,
					type: or.GenericLink,
					model: {
						url: "/premium",
						displayText: r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(bs.a, {
							name: "premium"
						}) : u.a.createElement(Ls.a, {
							className: Object(f.a)(t, Us.a.itemPremium)
						}),
						text: ({
							className: e
						}) => u.a.createElement("span", {
							className: e
						}, r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}))
					},
					telemetryNoun: "premium"
				})];

			function dr(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: or.Header,
					model: {
						displayText: r.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: or.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: or.Header,
					model: {
						displayText: r.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: or.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var lr = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				mr = n.n(lr);

			function ur(e) {
				return u.a.createElement("div", {
					className: Object(f.a)(mr.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var pr = n("./src/reddit/actions/subscription/index.ts"),
				br = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				hr = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				gr = n("./src/reddit/icons/svgs/Favorite/index.tsx"),
				fr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				vr = n.n(fr);

			function xr() {
				return (xr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Cr = Object(g.c)({
					currentUser: Ct.i,
					hideNSFWPref: Ct.B,
					isLoggedIn: Ct.J
				}),
				Or = Object(p.b)(Cr, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case or.Subreddit:
								e(Object(pr.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case or.Profile:
								e(Object(pr.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case or.Multi:
								e(Object(pr.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(br.f)(t.model.url)) : t.sendEvent(Object(br.c)(t.model.url))
						}
					}
				}));
			var yr = Object(T.c)(Or((function(e) {
					const t = {
							className: Object(f.a)(vr.a.item, e.className, {
								[vr.a.mFocused]: !!e.isFocused
							}),
							id: e.id,
							role: "menuitem",
							tabIndex: -1,
							onFocus: e.onFocus,
							onMouseEnter: e.onMouseEnter,
							onMouseLeave: e.onMouseLeave,
							onClick: e.onClick
						},
						n = Object(hr.a)();
					switch (e.type) {
						case or.Subreddit:
							return u.a.createElement(ms.a, xr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(ys.b, {
								className: vr.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), u.a.createElement("span", {
								className: vr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? u.a.createElement(bs.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: vr.a.favorite
							}) : u.a.createElement(gr.a, {
								className: Object(f.a)(vr.a.favorite, {
									[vr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case or.SubredditAutocomplete:
							return u.a.createElement(ms.a, xr({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), u.a.createElement(ys.b, {
								className: vr.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), u.a.createElement("span", {
								className: vr.a.text
							}, e.model.name));
						case or.Multi:
							return u.a.createElement(ms.a, xr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement("img", {
								src: e.model.icon,
								className: vr.a.customFeedIcon
							}), u.a.createElement("span", {
								className: vr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? u.a.createElement(bs.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: vr.a.favorite
							}) : u.a.createElement(gr.a, {
								className: Object(f.a)(vr.a.favorite, {
									[vr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case or.Profile:
							return u.a.createElement(ms.a, xr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Es.a, {
								className: vr.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), u.a.createElement("span", {
								className: vr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? u.a.createElement(bs.a, {
								name: "star",
								isFilled: !!e.isFavorite
							}) : u.a.createElement(gr.a, {
								className: Object(f.a)(vr.a.favorite, {
									[vr.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Er = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Pr = n.n(Er);

			function jr(e) {
				return u.a.createElement("div", {
					className: e.className
				}, u.a.createElement("div", {
					className: Pr.a.header
				}), u.a.createElement("div", {
					className: Pr.a.item
				}), u.a.createElement("div", {
					className: Pr.a.item
				}), u.a.createElement("div", {
					className: Pr.a.item
				}), u.a.createElement("div", {
					className: Pr.a.item
				}))
			}
			var Sr = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				_r = n("./src/reddit/actions/subreddit.ts"),
				wr = n("./src/reddit/constants/keycodes.ts"),
				kr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Ir = n("./src/lib/loadableAction/index.ts"),
				Nr = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Mr = n.n(Nr);

			function Tr() {
				return (Tr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Ar(e) {
				return e.id === ds.ModMail || e.id === ds.CreateCommunity
			}

			function Rr(e) {
				const t = new sr.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== or.Header && e.type !== or.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Lr = Object(g.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = rr(e),
							s = new sr.a("id"),
							o = Object(fs.a)(e);
						if (n.account) {
							const a = n.account;
							if (ir(o).forEach(e => s.push(e(a))), a.isEmployee && (e => [t => ({
									id: ds.Employee,
									type: or.GenericLink,
									model: {
										url: "/user/reddit/m/employee_subbies/new",
										displayText: "Employee Communities",
										icon: ({
											className: t
										}) => e ? u.a.createElement(bs.a, {
											name: "home"
										}) : u.a.createElement(Is.a, {
											className: Object(f.a)(t, Us.a.itemIcon)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, "Employee Communities")
									},
									telemetryNoun: "employee"
								})])(o).forEach(e => s.push(e(a))), Object(er.d)(e) && s.push({
									id: ds.NotificationsInbox,
									type: or.GenericLink,
									model: {
										url: "/notifications",
										displayText: r.fbt._("Notifications", null, {
											hk: "2xenVO"
										}).toString(),
										icon: ({
											className: e
										}) => o ? u.a.createElement(bs.a, {
											name: "notification"
										}) : u.a.createElement(Ts.a, {
											className: Object(f.a)(e, Us.a.itemIcon)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									},
									telemetryNoun: "inbox"
								}), Object(qs.a)(e) && s.push({
									id: ds.PublicAccessNetwork,
									type: or.GenericClickable,
									model: {
										onClick: () => {
											t(Object(Xs.a)(Ys.c[Ys.b.Rpan]))
										},
										displayText: r.fbt._("Reddit live", null, {
											hk: "3zuymj"
										}).toString(),
										icon: ({
											className: e
										}) => o ? u.a.createElement(bs.a, {
											name: "video_live"
										}) : u.a.createElement(Fs.c, {
											className: Object(f.a)(e, Us.a.itemIcon)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									},
									telemetryNoun: "rpan"
								}), (n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
									id: "header-favorites",
									type: or.Header,
									model: {
										displayText: r.fbt._("favorites", null, {
											hk: "4Gg0k2"
										}).toString()
									}
								}), n.favoriteSubreddits.forEach(e => s.push({
									id: "fav" + e.id,
									type: or.Subreddit,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteProfiles.forEach(e => s.push({
									id: "fav" + e.id,
									type: or.Profile,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteMultireddits.forEach(e => s.push({
									id: "fav" + e.url,
									type: or.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.multisPending ? s.push({
									id: "multis-pending",
									type: or.LoadingState,
									model: {
										displayText: ""
									}
								}) : n.multis.length > 0 && (s.push({
									id: "header-multis",
									type: or.Header,
									model: {
										displayText: r.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button: ({
											className: e,
											sendClickEvent: n
										}) => u.a.createElement("button", {
											onClick: () => {
												t(Object(je.h)(et.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(f.a)(e, Us.a.multiPlusButton)
										}, o ? u.a.createElement(bs.a, {
											name: "add"
										}) : u.a.createElement(nr.a, {
											className: Us.a.multiPlusIcon
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), n.multis.forEach(e => s.push({
									id: e.url,
									type: or.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.moderatingSubredditsPending ? s.push({
									id: "moderatingSubreddits-pending",
									type: or.LoadingState,
									model: {
										displayText: ""
									}
								}) : n.moderatingSubreddits.length && (s.push({
									id: "header-moderating",
									type: or.Header,
									model: {
										displayText: r.fbt._("moderating subreddits", null, {
											hk: "2z4AZS"
										}).toString()
									}
								}), s.push({
									id: ds.ModListing,
									type: or.GenericLink,
									model: {
										url: $s.a,
										displayText: "r/Mod",
										icon: ({
											className: e
										}) => u.a.createElement(Ns.a, {
											className: Object(f.a)(e, Us.a.itemModQueue)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, "r/Mod")
									},
									telemetryNoun: "r_mod"
								}), n.moderatingSubreddits.forEach(e => s.push({
									id: "mod" + e.id,
									type: or.Subreddit,
									model: e,
									telemetryNoun: "community_moderate"
								}))), n.subscriptionsPending ? s.push({
									id: "subscriptions-pending",
									type: or.LoadingState,
									model: {
										displayText: ""
									}
								}) : dr(s, n), (e => [e => ({
									id: "reddit-other",
									type: or.Header,
									model: {
										displayText: r.fbt._("Other", null, {
											hk: "1etY05"
										}).toString()
									}
								}), e => ({
									id: ds.Settings,
									type: or.GenericLink,
									model: {
										url: "/settings",
										displayText: r.fbt._("User Settings", null, {
											hk: "36WFGd"
										}).toString(),
										icon: ({
											className: e
										}) => u.a.createElement(Ps.a, {
											className: e
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("User Settings", null, {
											hk: "36WFGd"
										}))
									},
									telemetryNoun: "settings"
								}), e => ({
									id: ds.Inbox,
									type: or.GenericLink,
									model: {
										url: "/message/inbox/",
										displayText: r.fbt._("Messages", null, {
											hk: "43DUrY"
										}).toString(),
										icon: ({
											className: e
										}) => u.a.createElement(Ps.a, {
											className: e
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("Messages", null, {
											hk: "43DUrY"
										}))
									},
									telemetryNoun: "mail"
								}), t => ({
									id: ds.CreatePost,
									type: or.GenericLink,
									model: {
										url: "/submit",
										displayText: r.fbt._("Create Post", null, {
											hk: "dGck6"
										}).toString(),
										icon: ({
											className: t
										}) => e ? u.a.createElement(bs.a, {
											name: "add"
										}) : u.a.createElement(Rs.a, {
											className: Object(f.a)(t, Us.a.itemIcon)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									},
									telemetryNoun: "create_post"
								})])(o).forEach(e => s.push(e(a))), Object(Ct.gb)(e) && s.push({
									id: ds.CreateCommunity,
									type: or.GenericLink,
									model: {
										url: "/subreddits/create",
										displayText: r.fbt._("Create Community", null, {
											hk: "41sjx"
										}).toString(),
										icon: ({
											className: e
										}) => o ? u.a.createElement(bs.a, {
											name: "add"
										}) : u.a.createElement(Rs.a, {
											className: Object(f.a)(e, Us.a.itemIcon)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("Create Community", null, {
											hk: "41sjx"
										}))
									},
									telemetryNoun: "create_community"
								}), cr(o).forEach(e => s.push(e(a))), a.isMod) {
								const {
									isUserEnrolledInOldModmail: e
								} = n;
								(e => [t => ({
									id: ds.ModQueue,
									type: or.GenericLink,
									model: {
										url: "/r/mod/about/modqueue",
										displayText: r.fbt._("Mod Queue", null, {
											hk: "12pTAg"
										}).toString(),
										icon: ({
											className: t
										}) => e ? u.a.createElement(bs.a, {
											name: "mod_queue"
										}) : u.a.createElement(Ns.a, {
											className: Object(f.a)(t, Us.a.itemModQueue)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, r.fbt._("Mod Queue", null, {
											hk: "12pTAg"
										}))
									},
									telemetryNoun: "mod_queue"
								}), (t, n) => {
									const s = !!(null == n ? void 0 : n.isUserEnrolledInOldModmail),
										o = s ? "/message/moderator" : "https://mod.reddit.com/mail/all",
										a = s ? "modmail" : "modmail_beta";
									return {
										id: ds.ModMail,
										type: or.GenericLink,
										model: {
											url: o,
											displayText: r.fbt._("Modmail", null, {
												hk: "1BtYh4"
											}).toString(),
											icon: ({
												className: t
											}) => e ? u.a.createElement(bs.a, {
												name: "mod_mail"
											}) : u.a.createElement(ws.a, {
												className: Object(f.a)(t, Us.a.itemModQueue)
											}),
											text: ({
												className: e
											}) => u.a.createElement("span", {
												className: e
											}, r.fbt._("Modmail", null, {
												hk: "2QQ3dU"
											}))
										},
										telemetryNoun: a
									}
								}])(o).forEach(t => s.push(t(a, {
									isUserEnrolledInOldModmail: e
								})))
							}
						} else n.subscriptions.length || Object(Ct.J)(e) ? ir(o).forEach(e => s.push(e(null))) : (e => [e => ({
							id: "reddit-feeds",
							type: or.Header,
							model: {
								displayText: r.fbt._("Reddit Feeds", null, {
									hk: "3C1mtF"
								}).toString()
							}
						}), () => ({
							id: ds.Home,
							type: or.GenericLink,
							model: {
								url: "/",
								displayText: r.fbt._("Popular", null, {
									hk: "1op8tD"
								}).toString(),
								icon: ({
									className: t
								}) => e ? u.a.createElement(bs.a, {
									name: "home"
								}) : u.a.createElement(As.a, {
									className: Object(f.a)(t, Us.a.itemIcon)
								}),
								text: ({
									className: e
								}) => u.a.createElement("span", {
									className: e
								}, r.fbt._("Popular", null, {
									hk: "1op8tD"
								}))
							},
							telemetryNoun: "popular"
						}), ...ar(e)])(o).forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: or.Header,
							model: {
								displayText: r.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), cr(o).forEach(e => s.push(e(null))), dr(s, n);
						return s
					}
				}),
				Fr = e => ({
					onHomeClicked: () => e(Object(Ir.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(pr.e)()), e(Object(_r.q)()), e(Object(Ir.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Dr = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Ur extends u.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Rr(n),
							r = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: r ? r.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === wr.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === wr.b.Tab && this.props.onClose && this.props.onClose(), e.key === wr.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== or.Header && e.type !== or.LoadingState && (this.fireTelemetryForListItem(e), e.type === or.GenericClickable ? e.model.onClick() : Ar(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === wr.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === wr.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case ds.Coins:
							case ds.Premium:
								Object(kr.d)(kr.a.GoldPayment, !0), t = Object(kr.c)(kr.a.GoldPayment)
						}
						switch (e.type) {
							case or.Category:
							case or.GenericLink:
							case or.GenericClickable:
							case or.Multi:
							case or.Profile:
							case or.Subreddit:
								this.props.sendEvent(n => ({
									...Object(xt.defaults)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === or.Multi ? Object(xt.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case or.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(xt.defaults)(e),
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
						focusOrder: Rr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = u.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Rr(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new sr.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case or.Category:
								case or.GenericLink:
								case or.Multi:
								case or.Profile:
								case or.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case or.Header: {
									const t = n.last();
									t && t.type === or.Header && n.pop(), n.push(e);
									break
								}
								case or.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === or.Header && n.pop(), n
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
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${r.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), u.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Mr.a.filter,
						id: "header-subreddit-filter",
						placeholder: r.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === ds.Home && this.props.onHomeClicked(), e.type === or.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case or.GenericClickable:
								return u.a.createElement(Js, Tr({}, n, {
									className: Mr.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case or.Category:
							case or.GenericLink:
								return u.a.createElement(Js, Tr({}, n, {
									externalLink: Ar(e),
									className: Mr.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case or.Header: {
								const n = e.model.button;
								return u.a.createElement(ur, {
									className: Mr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && u.a.createElement(n, {
									className: Mr.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case or.LoadingState:
								return u.a.createElement(jr, {
									className: Mr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case or.Multi:
								return u.a.createElement(yr, Tr({}, n, {
									className: Mr.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: or.Multi
								}));
							case or.Profile:
								return u.a.createElement(yr, Tr({}, n, {
									className: Mr.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: or.Profile
								}));
							case or.Subreddit:
								return u.a.createElement(yr, Tr({}, n, {
									className: Mr.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: or.Subreddit
								}))
						}
					}))
				}
			}
			const Gr = Object(p.b)(Lr, Fr, Dr)(Object(T.c)(Ur)),
				Br = Object(p.b)(Lr, Fr, Dr)(Object(T.c)(Object(Sr.b)(Ur))),
				Hr = Object(Vt.t)({
					isCommentsPage: Vt.w,
					pageLayer: e => e
				}),
				qr = Object(g.c)({
					currentPage: Qs,
					hideNSFWPref: Ct.B,
					isDropdownOpen: vs.a,
					isInIcons2020: fs.a,
					isLoggedIn: Ct.J,
					isOverlayOpen: At.h,
					isPinnedSubscriptionsMenuDisabled: xs.a,
					isSubscriptionsPinned: xs.b
				});
			class Wr extends u.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(ps.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(xt.defaults)(e),
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
						hideNSFWPref: n,
						isCommentsPage: s,
						isInIcons2020: o,
						isLoggedIn: a,
						isOverlayOpen: i
					} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = i || !a && s;
					return u.a.createElement("div", {
						"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(f.a)(Us.a.container, t, {
							[Us.a.mOpen]: c,
							[Us.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Us.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, u.a.createElement("button", {
						className: Us.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, u.a.createElement("span", {
						className: Us.a.containerText
					}, " ", function(e) {
						switch (e.type) {
							case ds.Acknowledgements:
								return Gs(r.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case ds.All:
								return Gs(r.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case ds.Appeal:
								return Gs(r.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case ds.Coins:
								return Gs(r.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case ds.Community:
								return Gs(e.model.displayText, !0);
							case ds.CommunitySearch:
								return Gs(r.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case ds.CreateCommunity:
								return Gs(r.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case ds.CreatePost:
								return Gs(r.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case ds.DailyCharts:
								return Gs(r.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case ds.GlobalSearch:
								return Gs(r.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case ds.Geotagging:
								return Gs(r.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case ds.Home:
								return Gs(r.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case ds.Inbox:
								return Gs(r.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case ds.ModListing:
								return Gs("r/Mod");
							case ds.ModMail:
								return Gs(r.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case ds.ModQueue:
								return Gs(r.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case ds.Multi:
								return Gs(e.model.displayText, !0);
							case ds.NotificationsInbox:
								return Gs(r.fbt._("Notifications", null, {
									hk: "FiFRe"
								}).toString());
							case ds.Popular:
								return Gs(r.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case ds.Premium:
								return Gs(r.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case ds.PublicAccessNetwork:
								return Gs(r.fbt._("Reddit Live", null, {
									hk: "4tlHX5"
								}).toString());
							case ds.Report:
								return Gs(r.fbt._("Report", null, {
									hk: "4oVcnd"
								}).toString());
							case ds.Settings:
								return Gs(r.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case ds.SubredditCreation:
								return Gs(r.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case ds.Topic:
								return Gs(e.model);
							case ds.Unknown:
								return Gs("");
							case ds.UserDataRequest:
								return Gs(r.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case ds.UserProfile:
								return Gs(e.model.displayText, !0);
							case ds.UserProfileName:
								return Gs(e.name, !0);
							case ds.ViewDraft:
								return Gs(r.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e), " "), function(e, t, n) {
						if (n) {
							const n = e => u.a.createElement(bs.a, {
								name: e,
								isFilled: !0,
								className: Us.a.defaultIcon
							});
							switch (e.type) {
								case ds.All:
									return n("all");
								case ds.Acknowledgements:
								case ds.Appeal:
									return n("edit");
								case ds.Coins:
									return n("coins");
								case ds.CreateCommunity:
								case ds.CreatePost:
									return n("add");
								case ds.DailyCharts:
									return n("list_numbered");
								case ds.GlobalSearch:
									return n("search");
								case ds.Home:
									return n("home");
								case ds.Inbox:
								case ds.Settings:
									return u.a.createElement(Ps.a, {
										wrapperClassName: Us.a.userIcon
									});
								case ds.ModListing:
									return n("mod_queue");
								case ds.SubredditCreation:
									return n("add");
								case ds.ModMail:
									return n("mod_mail");
								case ds.ModQueue:
									return n("mod_queue");
								case ds.Multi:
									return u.a.createElement("img", {
										src: e.model.icon,
										className: Us.a.customFeedIcon
									});
								case ds.NotificationsInbox:
									return n("notification");
								case ds.Popular:
									return n("popular");
								case ds.Premium:
									return n("premium");
								case ds.PublicAccessNetwork:
									return n("video_live");
								case ds.Report:
									return n("report");
								case ds.Unknown:
									return u.a.createElement("div", {
										className: Us.a.unknownIcon
									});
								case ds.UserDataRequest:
									return n("add");
								case ds.UserProfile: {
									const n = Object(Cs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return u.a.createElement(Es.a, {
										className: Us.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case ds.UserProfileName:
									return u.a.createElement("div", {
										className: Us.a.defaultIcon
									});
								case ds.ViewDraft:
									return n("edit");
								case ds.Geotagging:
								case ds.Topic:
									return n("custom_feed")
							}
						}
						switch (e.type) {
							case ds.Acknowledgements:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.All:
								return u.a.createElement(js.a, {
									className: Us.a.defaultIcon
								});
							case ds.Appeal:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.Coins:
								return u.a.createElement(_s.a, {
									className: Us.a.coinIcon
								});
							case ds.Community:
							case ds.CommunitySearch: {
								const n = Object(Cs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(ys.b, {
									className: Us.a.subredditIcon,
									iconUrl: n.url,
									primaryColor: n.color
								})
							}
							case ds.CreateCommunity:
							case ds.CreatePost:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.DailyCharts:
								return u.a.createElement(ks.a, {
									className: Us.a.defaultIcon
								});
							case ds.GlobalSearch:
								return u.a.createElement(Ss.a, {
									className: Us.a.defaultIcon
								});
							case ds.Home:
								return u.a.createElement(Is.a, {
									className: Us.a.defaultIcon
								});
							case ds.Inbox:
							case ds.Settings:
								return u.a.createElement(Ps.a, {
									wrapperClassName: Us.a.userIcon
								});
							case ds.ModListing:
								return u.a.createElement(Ns.a, {
									className: Us.a.modQueueIcon
								});
							case ds.SubredditCreation:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.ModMail:
								return u.a.createElement(ws.a, {
									className: Us.a.modQueueIcon
								});
							case ds.ModQueue:
								return u.a.createElement(Ns.a, {
									className: Us.a.modQueueIcon
								});
							case ds.Multi:
								return u.a.createElement("img", {
									src: e.model.icon,
									className: Us.a.customFeedIcon
								});
							case ds.NotificationsInbox:
								return u.a.createElement(Ts.a, {
									className: Us.a.defaultIcon
								});
							case ds.Popular:
								return u.a.createElement(As.a, {
									className: Us.a.defaultIcon
								});
							case ds.Premium:
								return u.a.createElement(Ls.a, {
									className: Us.a.premiumIcon
								});
							case ds.PublicAccessNetwork:
								return u.a.createElement(Fs.c, {
									className: Us.a.defaultIcon
								});
							case ds.Report:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.Unknown:
								return u.a.createElement("div", {
									className: Us.a.unknownIcon
								});
							case ds.UserDataRequest:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.UserProfile: {
								const n = Object(Cs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Es.a, {
									className: Us.a.userIcon,
									iconUrl: n.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case ds.UserProfileName:
								return u.a.createElement("div", {
									className: Us.a.defaultIcon
								});
							case ds.ViewDraft:
								return u.a.createElement(Rs.a, {
									className: Us.a.defaultIcon
								});
							case ds.Geotagging:
							case ds.Topic:
								return u.a.createElement(Ms.a, {
									className: Us.a.defaultIcon
								})
						}
					}(e, n, o), !this.props.isSubscriptionsPinned && (o ? u.a.createElement(bs.a, {
						name: "caret_down",
						className: Us.a.caretDown
					}) : u.a.createElement(hs.b, {
						className: Us.a.caretDown
					}))), c && !this.props.isPinnedSubscriptionsMenuDisabled && (o ? u.a.createElement(bs.a, {
						name: "side_menu",
						className: Us.a.pin,
						onClick: d ? void 0 : this.props.onPinSubscriptions
					}) : u.a.createElement(gs.a, {
						className: Object(f.a)(Us.a.pin, {
							[Us.a.disabled]: d
						}),
						onClick: d ? void 0 : this.props.onPinSubscriptions
					})), c && u.a.createElement(Br, {
						canAutofocus: !0,
						className: Us.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Vr = Hr(Object(p.b)(qr, (e, t) => ({
					closeDropdown: () => e(Object(j.f)()),
					onLocationRefresh: (n, s) => e(Object(us.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(j.i)()), e(Object(j.f)())
					},
					openDropdown: () => e(Object(j.g)()),
					toggleDropdown: () => e(Object(j.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(T.c)(Wr))),
				Qr = n("./src/reddit/components/JumpToContent/index.tsx"),
				zr = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Kr = n("./node_modules/history/esm/history.js"),
				Zr = n("./node_modules/lodash/debounce.js"),
				Jr = n.n(Zr),
				Yr = n("./node_modules/uuid/v4.js"),
				Xr = n.n(Yr),
				$r = n("./src/lib/makeSearchKey/index.ts"),
				eo = n("./src/reddit/actions/post.ts"),
				to = n("./src/reddit/actions/search.ts"),
				no = n("./src/reddit/actions/search/trending.ts"),
				so = n("./src/reddit/actions/tooltip.ts"),
				ro = n("./src/higherOrderComponents/asTooltip.tsx"),
				oo = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ao = n("./src/reddit/constants/history.ts"),
				io = n("./src/lib/search/index.ts"),
				co = n("./src/reddit/constants/parameters.ts"),
				lo = n("./src/reddit/models/Search/index.ts");
			var mo = (e, t, n, s, r, o) => {
					let a, i;
					if ("" !== s.searchQuery) {
						if (s.isTypeaheadSuggestion) a = `/${s.isProfile?s.searchQuery.replace("u/","user/"):s.searchQuery}`;
						else {
							if (i = `${co.p}=${Object(io.b)(s.rawQuery||s.searchQuery)}`, a = "/search/", s.section !== lo.c.trending && s.section !== lo.c.recent || r && r.source && (i += `&source=${r.source}`), e && o ? (a = `/r/${e.name}${a}`, i = `${i}&${co.s}=1`) : !e && s.subredditOrProfileRestrictedName && (a = `/${s.subredditOrProfileRestrictedName}${a}`, i = `${i}&${co.s}=1`), t) {
								a = `/user/${t.url.split("/")[2]}/m/${t.name}${a}`, i = `${i}&${co.s}=1&${co.j}=1`
							}
							r && r.category && (i = `${i}&${co.b}=${r.category}`)
						}
						return {
							url: a,
							qs: i
						}
					}
				},
				uo = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				po = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				bo = n("./src/reddit/icons/svgs/Search/index.tsx"),
				ho = n("./src/reddit/components/SearchDropdown/index.m.less"),
				go = n.n(ho);
			const fo = Object(p.b)(() => Object(g.c)({
					currentPage: At.b,
					nightmode: Ct.V
				})),
				vo = Object(Vt.t)(),
				xo = Object(ro.a)(oo.b);
			class Co extends u.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						const {
							props: e
						} = this;
						e.recentSearch.isTypeaheadSuggestion ? e.onClearSearchQuery() : e.onUpdateSearchQuery(e.recentSearch.searchQuery), e.onSendSearchClickRecentEvent(e.recentSearch.searchQuery, e.recentSearch, e.indexOfItem)
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: n,
						currentPage: s,
						focusedItem: o,
						isInIcons2020: a,
						nightmode: i,
						onRemoveRecentSearch: c,
						pageLayer: d,
						recentSearch: l,
						toggleTooltip: m
					} = e, p = mo(null, null, null, l, {
						source: $r.a.Recent
					}), b = p && p.url, h = p && p.qs, g = this.generateFullSearchQuery(l);
					let v;
					o && (v = this.generateFullSearchQuery(o));
					const x = s ? Object(xt.getPageTypeFromCurrentPage)(s) : d ? Object(xt.getPageTypeFromCurrentPage)(d) : void 0,
						C = e => {
							e.stopPropagation(), e.preventDefault(), c(l)
						};
					return u.a.createElement(ms.a, {
						"aria-label": l.searchQuery,
						className: Object(f.a)(go.a.listItem, vr.a.item, n, {
							[go.a.mFocused]: !(!o || o.section !== lo.c.recent || v !== g)
						}),
						onClick: this.onRecentSearchItemClick,
						key: g,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: b || "",
							state: {
								[ao.a.SearchOriginPage]: x
							},
							search: h
						}
					}, l.displayInfo && l.isTypeaheadSuggestion ? l.displayInfo.iconUrl ? u.a.createElement("div", {
						className: go.a.subredditIcon,
						style: {
							backgroundImage: `url('${l.displayInfo.iconUrl}')`
						}
					}) : a ? u.a.createElement(bs.a, {
						name: "community",
						isFilled: !i,
						className: Object(f.a)(go.a.defaultCommunityIcon, {
							[go.a.mNightmode]: i
						})
					}) : u.a.createElement(uo.a, {
						className: go.a.planetIcon
					}) : a ? u.a.createElement(bs.a, {
						name: "search"
					}) : u.a.createElement(bo.a, {
						className: Object(f.a)(go.a.listItemIcon, vr.a.icon)
					}), u.a.createElement("span", {
						className: vr.a.text
					}, g), u.a.createElement("div", {
						onMouseEnter: () => m(g),
						onMouseLeave: () => m(null),
						id: g
					}, a ? u.a.createElement(bs.a, {
						name: "clear",
						onClick: C
					}) : u.a.createElement(po.a, {
						className: Object(f.a)(go.a.listItemIcon, go.a.mHoverable, vr.a.icon),
						onClick: C
					}), u.a.createElement(xo, {
						className: go.a.fixedTextTooltip,
						isOpen: t === g,
						text: r.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: g,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var Oo = vo(fo(Co)),
				yo = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Eo = n("./src/reddit/components/PostTitle/index.tsx"),
				Po = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				jo = n("./src/reddit/constants/adEvents.ts"),
				So = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				_o = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				wo = n("./src/reddit/helpers/trackers/discoveryUnit.ts");
			const ko = Object(p.b)(() => Object(g.c)({
				currentPage: At.b
			}), e => ({
				trackTrendingSearchClick: t => e((e, n) => wo.E(n(), t, wo.a.SEARCH_DROPDOWN))
			}));
			class Io extends u.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const {
							post: e,
							subredditInfo: t,
							subredditOccurrences: n,
							...s
						} = this.props.trendingItem;
						return s
					}, this.onTrendingItemClick = () => {
						const {
							props: e
						} = this;
						e.onUpdateSearchQuery(e.trendingItem.searchQuery);
						const t = this.transformTrendingToRecentSearch();
						if (e.onSetRecentSearch(t), Object(kr.d)(kr.a.SearchResults), e.trackTrendingSearchClick(e.trendingItem), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							e && this.props.fireAdPixelsOfType(e, jo.a.Click)
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
						focusedItem: n,
						id: s,
						isInIcons2020: o,
						pageLayer: a,
						trendingItem: i
					} = this.props, c = this.isSponsored(), d = mo(null, null, null, i, {
						source: c ? $r.a.PromotedTrend : $r.a.Trending
					}), l = d && d.url, m = d && d.qs, p = t ? Object(xt.getPageTypeFromCurrentPage)(t) : a ? Object(xt.getPageTypeFromCurrentPage)(a) : void 0, b = u.a.createElement(ms.a, {
						id: s,
						"aria-label": i.searchQuery,
						className: Object(f.a)(go.a.listItem, go.a.mTrending, vr.a.item, vr.a.trending, e, {
							[go.a.mFocused]: !(!n || n.section !== lo.c.trending || i.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: `trending-${i.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: l || "",
							state: {
								[ao.a.SearchOriginPage]: p
							},
							search: m
						}
					}, u.a.createElement("div", {
						className: vr.a.trendingContent
					}, c && u.a.createElement("div", {
						className: vr.a.promoted
					}, r.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), u.a.createElement("div", null, o ? u.a.createElement(bs.a, {
						name: "popular",
						className: go.a.trendingIcon
					}) : u.a.createElement(As.a, {
						className: Object(f.a)(go.a.listItemIcon, go.a.mTrending, vr.a.icon, vr.a.trending)
					}), u.a.createElement("span", null, u.a.createElement(Eo.a, {
						className: Object(f.a)(go.a.listItemText, go.a.mTrending, vr.a.text, vr.a.trending),
						redditStyle: !0,
						size: Eo.b.Small
					}, i.searchQuery)), i.post && u.a.createElement("div", {
						className: go.a.postTitle
					}, i.post.title)), i.subredditInfo && u.a.createElement(So.a, {
						className: Object(f.a)(vr.a.relatedSubredditMetaData, go.a.listItemSubtext, {
							[go.a.mNoPostTitle]: !i.post
						}),
						iconUrl: i.subredditInfo.icon || void 0,
						suffix: r.fbt._("{subreddit name} and more", [r.fbt._param("subreddit name", i.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), i.post && Object(_o.a)(i.post) && u.a.createElement(yo.a, {
						post: i.post,
						removeLink: !0,
						usePreview: c
					}));
					return c ? u.a.createElement(Po.a, {
						post: i.post
					}, b) : b
				}
			}
			var No = Object(Vt.t)()(ko(Io)),
				Mo = n("./src/reddit/components/Flair/index.tsx");
			class To extends u.a.Component {
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
						focusedItem: n,
						item: s
					} = e;
					return u.a.createElement(ms.a, {
						"aria-label": s.searchQuery,
						className: Object(f.a)(go.a.listItem, go.a.mTypeahead, vr.a.item, t, {
							[go.a.mFocused]: !(!n || n.searchQuery !== s.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: s.searchQuery,
						role: "link",
						tabIndex: -1,
						to: `/${s.isProfile?s.searchQuery.replace("u/","user/"):s.searchQuery}`
					}, s.displayInfo && s.displayInfo.iconUrl ? u.a.createElement("div", {
						className: go.a.subredditIcon,
						style: {
							backgroundImage: `url('${s.displayInfo.iconUrl}')`
						}
					}) : e.isInIcons2020 ? u.a.createElement(bs.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(f.a)(go.a.defaultCommunityIcon, {
							[go.a.mNightmode]: e.nightmode
						})
					}) : u.a.createElement(uo.a, {
						className: go.a.planetIcon
					}), u.a.createElement("div", null, s.displayInfo && s.displayInfo.subredditOrProfileName && u.a.createElement("div", {
						className: Object(f.a)(go.a.listItemText, go.a.mTypeahead, vr.a.text)
					}, s.displayInfo.subredditOrProfileName), u.a.createElement("div", null, s.displayInfo && null != s.displayInfo.subscribers && u.a.createElement("div", {
						className: Object(f.a)(go.a.listItemSubtext, vr.a.subText)
					}, r.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [r.fbt._plural(s.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), s.displayInfo && s.displayInfo.isNSFW && u.a.createElement(Mo.b, {
						flair: {
							type: ht.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var Ao = n("./src/reddit/constants/zIndex.ts"),
				Ro = n("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: Lo
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fo = "SearchDropdown", Do = "SearchDropdownContent", Uo = 5, Go = Object(ro.a)(Ro.a);

			function Bo(e) {
				const t = Object(p.d)(),
					{
						isFixed: n = !0,
						isOverlay: s = !0
					} = e,
					[r, o] = Object(m.useState)(null),
					a = function(e) {
						const [t, n] = Object(m.useState)(null), s = Object(m.useCallback)(() => {
							e && n(e.offsetWidth)
						}, [e]);
						return Object(m.useLayoutEffect)(s, [s]), Object(m.useEffect)(() => (window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), [s]), t
					}(e.container),
					i = e.trendingItems.slice(0, Uo),
					[c, d] = Object(m.useState)(new Array(Uo).fill(!1)),
					l = () => {
						const e = new Array(i.length).fill(!1);
						return i.forEach((t, n) => {
							if (t.id) {
								const s = document.getElementById(`${Fo}-${t.id}`),
									r = document.getElementById(Do);
								if (s && r) {
									const t = s.getBoundingClientRect(),
										o = r.getBoundingClientRect();
									t.top < o.bottom && t.bottom > o.top && (e[n] = !0)
								}
							}
						}), e
					};
				Object(m.useLayoutEffect)(() => {
					if (!e.isTrendingPending && e.isOpen && document.getElementById(Do)) {
						const e = l();
						d(e), i.forEach((n, s) => {
							e[s] && t((e, t) => wo.F(t(), n, wo.a.SEARCH_DROPDOWN))
						})
					}
				}, [e.isTrendingPending, e.isOpen, t]);
				const b = {
					width: a ? `${a}px` : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (b.zIndex = Ao.h);
				const h = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending,
					{
						typeaheadSuggestions: g
					} = e,
					v = Object(m.useMemo)(() => g.filter(e => e.isSubreddit), [g]);
				return u.a.createElement(Go, {
					className: Object(f.a)(go.a.dropdown, Us.a.listContainer),
					id: Do,
					isFixed: n,
					isOpen: e.isOpen,
					isOverlay: s,
					tooltipId: Fo,
					noFocus: !0,
					renderContentsHidden: !0,
					style: b,
					onDropdownMounted: () => {
						if (!e.isTrendingPending && i.length > 0) {
							const e = l();
							d(e), i.forEach((n, s) => {
								e[s] && t((e, t) => wo.F(t(), n, wo.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = l();
						i.forEach((n, s) => {
							c[s] || !e[s] || n.post && n.post.isSponsored || t((e, t) => wo.F(t(), n, wo.a.SEARCH_DROPDOWN))
						}), d(e)
					}
				}, e.typeaheadSuggestions.map((t, n) => u.a.createElement(To, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					indexOfItem: n,
					subredditSuggestions: v,
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendSearchClickTypeaheadEvent: e.onSendSearchClickTypeaheadEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					isInIcons2020: e.isInIcons2020,
					nightmode: e.nightmode
				})), h && e.recentSearches.map((t, n) => u.a.createElement(Oo, {
					activeTooltipId: r,
					focusedItem: e.itemList[e.focusedItemIndex],
					indexOfItem: n,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onRemoveRecentSearch: e.onRemoveRecentSearch,
					onSendSearchClickRecentEvent: e.onSendSearchClickRecentEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					recentSearch: t,
					toggleTooltip: o,
					isInIcons2020: e.isInIcons2020,
					nightmode: e.nightmode
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && u.a.createElement("div", {
					className: Object(f.a)(vr.a.title, go.a.listItemTitle, {
						[go.a.mWithBorder]: !!e.recentSearches.length
					})
				}, Lo._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || !e.isInUISimplificationI18NExperiment && e.isTrendingPending) && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Object(f.a)(go.a.loadingItem, Pr.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(go.a.loadingItem, Pr.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(go.a.loadingItem, Pr.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(go.a.loadingItem, Pr.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(go.a.loadingItem, Pr.a.item)
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && i.map(t => u.a.createElement(No, {
					id: `${Fo}-${t.id}`,
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t,
					isInIcons2020: e.isInIcons2020
				})))
			}
			var Ho = n("./src/reddit/contexts/ApiContext.tsx"),
				qo = n("./src/lib/makeApiRequest/index.ts"),
				Wo = n("./src/lib/omitHeaders/index.ts"),
				Vo = n("./src/reddit/constants/headers.ts");
			const Qo = (e, t) => Object(qo.a)(Object(Wo.a)(e, [Vo.a]), {
				endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
				method: v.cb.GET,
				data: {
					query: t
				}
			});
			var zo = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Ko = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Zo = e => {
				const t = [],
					n = {};
				return e.forEach(e => {
					const s = e.data,
						r = e.kind;
					r === v.zb.Subreddit ? (t.push(s.name), n[s.name] = Object(Ko.a)(s)) : r === v.zb.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(zo.a)(s.subreddit, s.name))
				}), {
					data: n,
					order: t
				}
			};
			var Jo = n("./src/reddit/helpers/isArrayEqual.ts"),
				Yo = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Xo = n("./src/reddit/selectors/experiments/trending.ts"),
				$o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const ea = e => Object(Ct.G)(e) || Wt.sd.Treatment1 === Object($o.c)(e, {
				experimentEligibilitySelector: $o.a,
				experimentName: Wt.pd
			});
			var ta = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				na = n("./src/reddit/selectors/searchResults.ts"),
				sa = n("./src/reddit/selectors/tooltip.ts"),
				ra = n("./src/reddit/selectors/trending.ts"),
				oa = n("./src/reddit/controls/Search/index.m.less"),
				aa = n.n(oa);
			const ia = Object(Vt.t)({
					searchQuery: Vt.W,
					pageLayer: e => e
				}),
				ca = (e, t, n, s) => e(e => ({
					...Object(Yo.c)(e),
					source: "search",
					action: "click",
					noun: t,
					actionInfo: xt.actionInfo(e),
					search: {
						...xt.search(e, n, !0, s || void 0),
						structureType: xt.structureType(e, s),
						queryId: Object(kr.c)(kr.a.SearchResults)
					}
				})),
				da = Object(p.b)(() => Object(g.c)({
					currentPage: At.b,
					currentSubredditName: At.d,
					currentUser: Ct.i,
					dropdownIsOpen: Object(sa.b)(Fo),
					typeaheadIdsByQuery: na.c,
					isInIcons2020: fs.a,
					isInTrendingExperiment: Xo.a,
					isInTypeaheadExperiment: ea,
					isInUISimplificationI18NExperiment: ta.a,
					isLoggedIn: Ct.J,
					isSubredditSearchAllowed: (e, {
						pageLayer: t
					}) => Object(Vt.M)(t),
					multireddit: Vt.d,
					nightmode: Ct.V,
					routeName: At.p,
					subreddit: Vt.q,
					trendingItems: ra.a,
					typeaheadSuggestions: na.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(no.b)()),
					fireAdPixelsOfType: (t, n) => e(Object(eo.u)(t, n)),
					onChange: t => e(Object(to.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(to.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, n, s, r) => {
						e(Object(h.b)(Object(Kr.c)({
							pathname: t,
							search: n,
							state: {
								fromPage: s,
								[ao.a.SearchOriginPage]: r
							}
						})))
					},
					onToggleDropdown: () => e(Object(so.h)({
						tooltipId: Fo
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(to.i)(t))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onSearch: (s, r) => {
						s.preventDefault();
						const {
							currentUser: o = null
						} = e, a = mo(e.subreddit, e.multireddit, o, r, n.searchOptions, e.isSubredditSearchAllowed);
						if (!a) return;
						const i = a.url,
							c = a.qs,
							d = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							},
							l = e.currentPage ? xt.getPageTypeFromCurrentPage(e.currentPage) : n.pageLayer ? xt.getPageTypeFromCurrentPage(n.pageLayer) : void 0;
						t.onSearch(i, c, d, l)
					},
					onFocusSearchBar: () => {
						Object(kr.c)(kr.a.SearchResults) || Object(kr.d)(kr.a.SearchResults);
						const e = n.searchOptions || Object($r.c)({
							q: n.searchQuery
						});
						ca(n.sendEvent, xt.OriginElement.SearchBar, e, n.pageLayer ? n.pageLayer : void 0)
					}
				}));
			class la extends u.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await Qo(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = Zo(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(Dt.P)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(Dt.tb)({
								...e,
								section: lo.c.recent
							}, this.props.currentUser.id)
						})
					}, this.onChange = e => {
						const t = e.currentTarget.value,
							n = {
								searchQuery: t
							};
						if (this.setState(n), this.props.onChange(t), this.props.isInTypeaheadExperiment) {
							if (!(!this.props.typeaheadIdsByQuery || !this.props.typeaheadIdsByQuery[t]) || !t) return;
							this.onFetchTypeaheadSuggestions()
						}
					}, this.onFetchTypeaheadSuggestions = Jr()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery.trim()) {
							let t = {
								...lo.a
							};
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = Xr()()), t.section === lo.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === lo.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, xt.StructureType.Search, xt.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									n = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									s = !!this.props.subreddit && this.props.subreddit.isNSFW,
									r = lo.b.text;
								t = {
									id: Xr()(),
									searchQuery: this.state.searchQuery,
									type: r,
									section: lo.c.recent,
									subredditOrProfileRestrictedName: n,
									displayInfo: {
										iconUrl: e,
										isNSFW: s
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
					}, this.onSendDropdownClickEvent = (e, t, n, s) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(Yo.s)(s, r))
					}, this.onSendSearchClickRecentEvent = (e, t, n) => {
						this.props.sendEvent(Object(Yo.u)(e, t, n))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, n, s) => {
						this.props.sendEvent(Object(Yo.w)(e, t, n, s))
					}, this.onSendDropdownViewEvent = (e, t, n, s) => {
						const r = {
							displayQuery: n,
							rawQuery: s || n,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Yo.t)(e, r))
					}, this.onKeyDown = e => {
						if (e.key === wr.b.Escape && this.close(), e.key === wr.b.Tab && this.close(), e.key === wr.b.ArrowDown) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (this.state.focusedItemIndex >= this.state.itemList.length - 1) return;
							const t = this.state.focusedItemIndex + 1,
								n = this.state.itemList[t] || null,
								s = n ? n.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: s,
								selectedItem: n
							})
						}
						if (e.key === wr.b.ArrowUp) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (-1 === this.state.focusedItemIndex) return;
							const t = this.state.focusedItemIndex - 1,
								n = this.state.itemList[t] || null,
								s = n ? n.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: s,
								selectedItem: n
							})
						}
					}, this.toggleDropdownAndGetTrending = () => {
						if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser) {
							const e = Object(Dt.C)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(xt.SearchDropdownNouns.Recent, xt.StructureType.Recent, e.searchQuery)
							}))
						}
						this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						if (e.preventDefault(), !this.state.searchQuery.trim()) return;
						this.onSearch(e);
						const t = this.props.searchOptions || Object($r.c)({});
						t.q || (t.q = this.state.searchQuery), ca(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(Jo.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						n = Object(Jo.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !n) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? xt.SearchDropdownNouns.TypeaheadProfile : xt.SearchDropdownNouns.TypeaheadSubreddit, xt.StructureType.Search, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return u.a.createElement("div", {
						className: Object(f.a)(aa.a.relativeWrapper, Us.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: Fo,
						ref: this.setContainerRef
					}, u.a.createElement("label", {
						className: aa.a.iconContainer,
						htmlFor: "header-search-bar"
					}, e.isInIcons2020 ? u.a.createElement(bs.a, {
						name: "search"
					}) : u.a.createElement(bo.a, {
						className: aa.a.icon
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
						className: aa.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: r.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), u.a.createElement(Bo, {
						container: this.container,
						focusedItemIndex: t.focusedItemIndex,
						isFixed: e.isFixed,
						isInIcons2020: e.isInIcons2020,
						isInTrendingExperiment: e.isInTrendingExperiment,
						isInUISimplificationI18NExperiment: e.isInUISimplificationI18NExperiment,
						isOpen: e.dropdownIsOpen,
						isTrendingPending: t.isTrendingPending,
						isTypeaheadPending: t.isTypeaheadPending,
						itemList: t.itemList,
						nightmode: e.nightmode,
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
			var ma = Object(T.c)(ia(Object(Ho.b)(da(la)))),
				ua = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				pa = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ba = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				ha = n.n(ba);
			var ga = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(f.a)(ha.a.Container, t)
					}, u.a.createElement("a", {
						"aria-label": r.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: ha.a.HomeLink,
						href: U.a.redditUrl
					}, u.a.createElement(ua.a, {
						className: ha.a.Snoo
					}), u.a.createElement(pa.a, {
						className: ha.a.Wordmark,
						color: "inherit"
					})))
				},
				fa = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				va = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				xa = n("./src/reddit/hooks/useTracking.ts"),
				Ca = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Oa = n.n(Ca),
				ya = u.a.memo((function(e) {
					const t = Object(hr.a)(),
						n = Object(xa.a)(),
						s = Object(p.d)(),
						o = Object(m.useCallback)(() => {
							n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [n]),
						a = Object(m.useCallback)(() => {
							n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [n]),
						i = Object(m.useCallback)(() => {
							s(Object(Xs.a)(Ys.c[Ys.b.Rpan])), n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [s, n]),
						c = Object(p.e)(Ct.J),
						d = Object(p.e)(qs.a),
						l = Object(va.a)(),
						b = Object(va.a)(),
						h = Object(va.a)();
					return u.a.createElement("div", {
						className: Object(f.a)(Oa.a.container, e.className)
					}, u.a.createElement("div", {
						className: Oa.a.row
					}, u.a.createElement(ms.a, {
						className: Oa.a.icon,
						innerRef: l.target.ref,
						to: c ? Ys.c[Ys.b.Popular] : Ys.c[Ys.b.Home],
						onClick: o,
						onMouseEnter: l.show,
						onMouseLeave: l.hide
					}, t ? u.a.createElement(bs.a, {
						name: "popular"
					}) : u.a.createElement(As.a, null)), u.a.createElement(fa.a, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible
					}, r.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), u.a.createElement(u.a.Fragment, null, u.a.createElement(ms.a, {
						className: Oa.a.icon,
						innerRef: b.target.ref,
						to: Ys.c[Ys.b.All],
						onClick: a,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, t ? u.a.createElement(bs.a, {
						name: "all"
					}) : u.a.createElement(js.a, null)), u.a.createElement(fa.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, r.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && u.a.createElement(u.a.Fragment, null, u.a.createElement(ms.a, {
						className: Oa.a.icon,
						innerRef: h.target.ref,
						to: Ys.c[Ys.b.Rpan],
						onClick: i,
						onMouseEnter: h.show,
						onMouseLeave: h.hide
					}, t ? u.a.createElement(bs.a, {
						name: "video_live"
					}) : u.a.createElement(Fs.c, {
						className: Oa.a.rpanVideoIcon
					})), u.a.createElement(fa.a, {
						arrowProps: h.arrowProps,
						popperProps: h.popperProps,
						visible: h.visible
					}, r.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					})))))
				})),
				Ea = n("./src/reddit/actions/login.ts"),
				Pa = n("./src/reddit/helpers/trackers/authControls.ts"),
				ja = n("./node_modules/lodash/isEmpty.js"),
				Sa = n.n(ja),
				_a = n("./src/lib/combineRefs/index.tsx"),
				wa = n("./src/lib/matchRoute/index.ts"),
				ka = n("./src/chat/helpers/dom.ts"),
				Ia = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				Na = n("./src/reddit/actions/changeUsername.ts"),
				Ma = n("./src/reddit/actions/chat/toggle.ts"),
				Ta = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Aa = n("./src/reddit/actions/postCreation/general.ts"),
				Ra = n("./src/reddit/actions/preferences.ts"),
				La = n("./src/reddit/actions/users.ts"),
				Fa = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Da = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				Ua = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Ga = Object(Se.a)({
					getComponent: () => Object(Ke.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Ba = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Ha = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				qa = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Wa = n.n(qa);
			class Va extends u.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Ha.e)(Ha.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Ha.c)(Ha.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Ha.e)(Ha.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Va.shouldSendViewEvent && (Va.shouldSendViewEvent = !1, this.props.sendEvent(Object(Ha.g)(Ha.a)))
				}
				render() {
					return u.a.createElement("div", {
						className: Wa.a.container
					}, u.a.createElement("div", {
						className: Wa.a.topLine
					}), u.a.createElement("button", {
						className: Wa.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, u.a.createElement(Ne.a, {
						className: Wa.a.closeIcon
					})), u.a.createElement("h5", {
						className: Wa.a.title
					}, r.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), u.a.createElement("p", {
						className: Wa.a.subtitle
					}, this.props.email), u.a.createElement("p", {
						className: Wa.a.description
					}, r.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), u.a.createElement("div", {
						className: Wa.a.buttonWrapper
					}, u.a.createElement(Ie.l, {
						className: Wa.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, r.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), u.a.createElement(Ie.i, {
						className: Object(f.a)(Wa.a.commonBtn, Wa.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, r.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			Va.shouldSendViewEvent = !0;
			const Qa = Object(Ba.a)(Va, [Sr.a.Click, Sr.a.Keydown, Sr.a.Resize]);
			var za = Object(T.c)(Qa),
				Ka = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Za = n.n(Ka);
			const Ja = Object(g.c)({
				isLoggedIn: Ct.J
			});
			class Ya extends u.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return u.a.createElement(M.a, {
						className: Object(f.a)(Za.a.IFrame, {
							[Za.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: A.c.GoogleOneTap
					})
				}
			}
			var Xa = Object(p.b)(Ja)(Ya),
				$a = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				ei = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ti = n.n(ei);

			function ni() {
				return (ni = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const si = N.a.button("Button", ti.a),
				ri = N.a.div("Container", ti.a);

			function oi(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return u.a.createElement(si, ni({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), u.a.createElement(ri, {
					className: Object(f.a)({
						[ti.a.isOpen]: n
					})
				}, t))
			}
			var ai = n("./src/reddit/components/BadgeCounter/index.tsx"),
				ii = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				ci = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				di = n.n(ci);
			var li = e => {
					const t = Object(hr.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ai.a, {
						isActive: !!e.hasUnreadMessages,
						unreadCount: e.badgeCount
					}), t ? u.a.createElement(bs.a, {
						name: "chat",
						className: Object(f.a)(di.a.icon2020, {
							[di.a.isActive]: !!e.hasUnreadMessages
						}),
						isFilled: !!e.hasUnreadMessages
					}) : u.a.createElement(ii.a, {
						className: Object(f.a)(di.a.chatIcon, {
							[di.a.isActive]: !!e.hasUnreadMessages
						})
					}))
				},
				mi = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				ui = n.n(mi);
			const {
				fbt: pi
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var bi = e => {
				const {
					onCloseFlyout: t
				} = e;
				return u.a.createElement("div", {
					className: ui.a.container
				}, u.a.createElement("p", {
					className: ui.a.title
				}, pi._("New User Settings", null, {
					hk: "1Sziu9"
				})), u.a.createElement("h5", {
					className: ui.a.subtitle
				}, pi._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), u.a.createElement("p", {
					className: ui.a.description
				}, pi._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), u.a.createElement(Ie.l, {
					className: ui.a.dismissBtn,
					onClick: t
				}, pi._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var hi = e => {
				const t = Object(hr.a)();
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(ai.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), t ? u.a.createElement(bs.a, {
					name: "message",
					isFilled: !!e.unreadCount,
					className: Object(f.a)(di.a.icon2020, {
						[di.a.isActive]: !!e.unreadCount
					})
				}) : u.a.createElement(ws.a, {
					className: Object(f.a)(di.a.envelopeIcon, {
						[di.a.isUnread]: !!e.unreadCount
					})
				}))
			};
			var gi = e => {
					const t = Object(hr.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ai.a, {
						isActive: !!e.unreadCount,
						unreadCount: e.unreadCount
					}), t ? u.a.createElement(bs.a, {
						name: "notification",
						className: di.a.icon2020
					}) : u.a.createElement(Ts.a, {
						className: di.a.notificationInboxIcon
					}))
				},
				fi = n("./src/lib/prettyPrintNumber/index.ts"),
				vi = n("./src/reddit/actions/alpha.ts"),
				xi = n("./src/reddit/actions/modMode.ts"),
				Ci = n("./src/reddit/actions/profile/index.ts"),
				Oi = n("./src/reddit/constants/elementClassNames.ts"),
				yi = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Ei = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Pi = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				ji = n("./src/reddit/helpers/trackers/modTools.ts");
			const Si = e => ({
				screen: xt.screen(e),
				profile: xt.profile(e),
				subreddit: xt.subreddit(e)
			});
			var _i = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				wi = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				ki = n("./src/reddit/icons/svgs/Help/index.tsx"),
				Ii = n("./src/reddit/icons/svgs/KarmaGray/index.tsx"),
				Ni = n("./src/reddit/icons/svgs/Logout/index.tsx"),
				Mi = n("./src/reddit/icons/svgs/ModMode/index.tsx"),
				Ti = n("./src/reddit/icons/svgs/MyProfile/index.tsx"),
				Ai = n("./src/reddit/icons/svgs/Night/index.tsx"),
				Ri = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				Li = n("./src/reddit/icons/svgs/Redditor/index.tsx"),
				Fi = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				Di = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				Ui = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Gi = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Bi = n("./src/reddit/selectors/modModeEnabled.ts"),
				Hi = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				qi = n("./src/reddit/actions/snoovatar.ts"),
				Wi = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Vi = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Qi = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				zi = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Ki = n("./src/reddit/selectors/avatarMarketing.ts"),
				Zi = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts"),
				Ji = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Yi = n.n(Ji);
			const Xi = (e, t, n) => s => u.a.createElement("div", {
				className: `${Yi.a.avatarLinkBody} ${s.className}`
			}, e, t && u.a.createElement("div", {
				className: Yi.a.marketingBadge
			}, u.a.createElement(Wi.a, {
				className: Yi.a.marketingAsset,
				headshot: t
			}), r.fbt._("New", null, {
				hk: "2TRcjA"
			}), !n && u.a.createElement(u.a.Fragment, null, u.a.createElement(zi.a, {
				className: Object(f.a)(Yi.a.sparkle, Yi.a.sparkle1)
			}), u.a.createElement(zi.a, {
				className: Object(f.a)(Yi.a.sparkle, Yi.a.sparkle2)
			}), u.a.createElement(zi.a, {
				className: Object(f.a)(Yi.a.sparkle, Yi.a.sparkle3)
			}), u.a.createElement(zi.a, {
				className: Object(f.a)(Yi.a.sparkle, Yi.a.sparkle4)
			}))));
			var $i = () => {
					var e;
					const t = Object(hr.a)(),
						n = Object(p.d)(),
						s = Object(xa.a)(),
						o = Object(Vt.Z)(),
						a = Object(p.e)(e => e.user.account),
						i = Object(p.e)(xs.c),
						c = Object(p.e)(Zi.a),
						d = Object(p.e)(Ki.b),
						l = Object(p.e)(Ki.a);
					if ((null === (e = null == o ? void 0 : o.meta) || void 0 === e ? void 0 : e.name) === v.Db.AVATAR) return null;
					!d && c && n(Object(Hi.a)()), l && s(Vi.b);
					const m = Object(Pi.c)(t ? ac("avatar_style") : Qi.a, Xi(r.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}), l, i)),
						b = Object(Pi.c)(t ? ac("add") : nr.a, Xi(r.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}), l, i)),
						h = a && a.snoovatarFullBodyAsset ? m : b;
					return u.a.createElement(h, {
						onClick: () => n(Object(qi.b)("nav"))
					})
				},
				ec = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				tc = n.n(ec);

			function nc() {
				return (nc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const sc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				rc = N.a.wrapped(Ro.a, "Dropdown", tc.a),
				oc = Object(ro.a)(rc),
				ac = e => t => u.a.createElement(bs.a, nc({
					name: e
				}, t)),
				ic = e => u.a.createElement(Pi.a, {
					className: Object(f.a)(tc.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, u.a.createElement("div", {
					className: tc.a.buttonText
				}, e.displayText), u.a.createElement(yi.a, {
					className: tc.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				cc = Object(p.b)(() => Object(g.c)({
					isModModeEnabled: Bi.a,
					isOpen: Object(sa.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Gi.b,
					nightmode: Ct.V,
					showPresence: Ct.hb,
					url: At.q
				}), (e, t) => ({
					toggleNightmode: t => e(Object(Ra.y)(t)),
					toggleShowPresence: t => e(Object(Ra.H)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(vi.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Ee.a.get("rseor3") && Ee.a.remove("rseor3", {
							domain: U.a.cookieDomain
						}), e(Object(vi.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						t.user && e(Object(Ci.f)(Object(gt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(Ea.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ei.a)())), e(Object(La.p)())
					},
					toggleModMode: () => e(Object(xi.b)())
				}));
			var dc = Object(Vt.t)({
					pageLayer: e => e
				})(cc(Object(T.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: n,
						isModModeEnabled: s,
						isPresenceToggleEnabled: o,
						nightmode: a,
						requestAwardKarma: i,
						showPresence: c,
						toggleModMode: d,
						user: l
					} = e, p = Object(hr.a)(), b = l && l.id;
					Object(m.useEffect)(() => {
						i()
					}, [b]);
					const h = Object(Pi.c)(p ? ac("settings") : Fi.a, r.fbt._("User Settings", null, {
							hk: "46J4vT"
						})),
						g = Object(Pi.b)(p ? ac("help") : ki.a, r.fbt._("Help Center", null, {
							hk: "4sGjc0"
						})),
						v = Object(Pi.b)(p ? ac("external_link") : Ri.a, r.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						})),
						x = Object(Pi.c)(p ? ac("logout") : Ni.a, r.fbt._("Log In / Sign Up", null, {
							hk: "4xbfvS"
						})),
						C = Object(Pi.c)(p ? ac("logout") : Ni.a, r.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})),
						O = Object(Pi.c)(Di.a, r.fbt._("Opt In to New Reddit", null, {
							hk: "4jiTxA"
						})),
						y = (e => {
							const t = e && e.coins || 0;
							return r.fbt._({
								"*": "{number of coins} coins",
								_1: "1 coin"
							}, [r.fbt._plural(t, "number of coins")], {
								hk: "qmnnm"
							})
						})(l),
						E = Object(Pi.c)(p ? ac("coins") : _s.a, r.fbt._("Reddit Coins", null, {
							hk: "3jj6Cb"
						}), {
							meta: y
						}),
						j = Object(Pi.c)(p ? ac("premium") : Ls.a, r.fbt._("Reddit Premium", null, {
							hk: "3FNqVS"
						}));
					return u.a.createElement("div", {
						className: Object(f.a)(tc.a.container, Oi.e)
					}, u.a.createElement(Ui.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(f.a)(e.className, tc.a.inlineButton, {
							[tc.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, u.a.createElement("span", {
						className: tc.a.accountDisplayText
					}, (e => e ? u.a.createElement("span", {
						className: Object(f.a)(tc.a.accountWrapper, tc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && u.a.createElement(Ps.a, {
						className: tc.a.imgIcon,
						wrapperClassName: tc.a.imgIconWrapper,
						shouldShowPresenceIndicator: o && c
					}), u.a.createElement("span", {
						className: tc.a.accountDetails
					}, u.a.createElement("span", {
						className: tc.a.username
					}, e.displayText, e.isGold && u.a.createElement(wi.a, {
						className: tc.a.premiumFontIcon,
						title: r.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: p
					})), u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: tc.a.accountKarma
					}, p ? u.a.createElement(bs.a, {
						name: "karma",
						isFilled: !0,
						className: tc.a.karmaIcon
					}) : u.a.createElement(Ii.a, null), u.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							n = Object(fi.b)(t);
						return r.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [r.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && u.a.createElement("span", {
						className: tc.a.accountCoins
					}, u.a.createElement(_i.a, {
						className: tc.a.coinFontIcon,
						isFilled: p
					}), u.a.createElement("span", null, (e => Object(fi.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(e)))))) : u.a.createElement("span", {
						className: Object(f.a)(tc.a.accountWrapper, tc.a.isLoggedOut)
					}, u.a.createElement(Li.a, {
						className: tc.a.myProfileIcon
					})))(e.user), p ? u.a.createElement(bs.a, {
						name: "caret_down"
					}) : u.a.createElement(hs.b, {
						className: tc.a.dropdownTriangle
					})), u.a.createElement(zr.a, null, r.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), u.a.createElement(oc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, l && o && u.a.createElement(u.a.Fragment, null, u.a.createElement("h3", {
						className: tc.a.sectionHeader,
						role: "heading"
					}, r.fbt._("Online Status", null, {
						hk: "23SMHV"
					})), u.a.createElement(ic, {
						className: tc.a.presenceToggle,
						displayText: c ? r.fbt._("On", null, {
							hk: "3aW5MW"
						}) : r.fbt._("Off", null, {
							hk: "pRgYU"
						}),
						isEnabled: c,
						onClick: () => {
							e.sendEvent((e => t => ({
								source: "nav",
								action: "click",
								actionInfo: {
									pageType: t.platform.currentPage ? xt.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
									settingValue: e ? "online" : "hidden"
								},
								noun: "online_presence_toggle",
								...Si(t)
							}))(!c)), e.toggleShowPresence(!c)
						}
					})), l && u.a.createElement(m.Fragment, null, u.a.createElement("h3", {
						className: tc.a.sectionHeader,
						role: "heading"
					}, r.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = r.fbt._("Profile", null, {
								hk: "czKk9"
							}),
							n = Object(Pi.c)(p ? ac("profile") : Ti.a, t);
						return u.a.createElement(n, {
							href: e.url
						})
					})(l), u.a.createElement($i, null), u.a.createElement(h, {
						href: "/settings"
					})), u.a.createElement("h3", {
						className: tc.a.sectionHeader,
						role: "heading"
					}, r.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), l && l.isMod && u.a.createElement(ic, {
						displayText: r.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: s,
						onClick: () => {
							e.sendEvent(Object(ji.h)(!s)), d()
						}
					}, p ? u.a.createElement(bs.a, {
						name: "mod_mode",
						className: tc.a.modModeIcon
					}) : u.a.createElement(Mi.a, {
						className: tc.a.modModeIcon
					})), u.a.createElement(ic, {
						displayText: "Night Mode",
						isEnabled: a,
						onClick: () => {
							e.sendEvent((e => t => ({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on",
								...Si(t)
							}))(a)), e.toggleNightmode(!a)
						}
					}, p ? u.a.createElement(bs.a, {
						name: "night",
						className: tc.a.nightIcon
					}) : u.a.createElement(Ai.a, {
						className: tc.a.nightIcon
					})), u.a.createElement("h3", {
						className: tc.a.sectionHeader,
						role: "heading"
					}, r.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), u.a.createElement(m.Fragment, null, u.a.createElement(E, {
						href: "/coins",
						onClick: () => {
							Object(kr.d)(kr.a.GoldPayment, !0), e.sendEvent((() => e => ({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Object(kr.c)(kr.a.GoldPayment),
								...Si(e)
							}))())
						}
					}), u.a.createElement(j, {
						href: "/premium",
						onClick: () => {
							Object(kr.d)(kr.a.GoldPayment, !0), e.sendEvent((() => e => ({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Object(kr.c)(kr.a.GoldPayment),
								...Si(e)
							}))())
						}
					})), u.a.createElement(g, {
						href: "https://www.reddithelp.com"
					}), l && u.a.createElement(v, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: xt.screen(e),
								subreddit: xt.subreddit(e)
							}))
						}
					}), !sc && l && u.a.createElement(O, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: xt.screen(e),
								subreddit: xt.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), u.a.createElement("div", {
						className: tc.a.divider
					}), l ? u.a.createElement(C, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : u.a.createElement(x, {
						href: "#",
						onClick: t => {
							Object(P.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(Pa.b)()))
						}
					})))
				}))),
				lc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				mc = n.n(lc);

			function uc() {
				return (uc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var pc = u.a.memo((function({
					visible: e,
					...t
				}) {
					const [n, s] = Object(m.useState)(e);
					return Object(m.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, s(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), s(!1)
						}
					}, [e]), e ? u.a.createElement("div", uc({
						id: "INBOX--TOOLTIP",
						className: Object(f.a)(mc.a.tooltip, {
							[mc.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				bc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				hc = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				gc = n("./src/reddit/components/Settings/modalIds.ts"),
				fc = n("./src/reddit/helpers/trackers/inbox.ts"),
				vc = n("./src/reddit/helpers/trackers/navigation.ts"),
				xc = n("./node_modules/icepick/icepick.js"),
				Cc = n("./src/reddit/hooks/useTooltip.ts");
			const Oc = Object(xc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var yc = n("./src/reddit/hooks/useOnClickOutside.ts"),
				Ec = n("./src/reddit/routes/index.ts"),
				Pc = n("./src/reddit/selectors/appBadges.ts");
			var jc = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Sc = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				_c = n("./src/reddit/selectors/sso.ts");
			const wc = "change-username-tooltip-id",
				kc = "email-verification-tooltip-id",
				Ic = u.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(hr.a)(),
						s = Object(va.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: di.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, u.a.createElement(oi, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: hc.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, n ? u.a.createElement(bs.a, {
						className: Object(f.a)(di.a.icon2020, {
							[di.a.isActive]: t.isModerateIconLit
						}),
						isFilled: t.isModerateIconLit,
						name: "mod"
					}) : u.a.createElement(Ns.a, {
						className: Object(f.a)(di.a.moderateIcon, {
							[di.a.isLit]: t.isModerateIconLit
						})
					})), u.a.createElement(fa.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, r.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), u.a.createElement(hc.b, {
						className: di.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName,
						showLegacyModmailIcon: t.showLegacyModmailIcon
					}))
				})),
				Nc = u.a.memo((function(e) {
					const t = Object(va.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: di.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("a", {
						className: di.a.link,
						href: `${U.a.redditUrl}/chat`,
						onClick: Object(ka.a)(e.onClickChat)
					}, u.a.createElement(li, {
						badgeCount: e.badgeCount,
						hasUnreadMessages: e.hasUnreadMessages
					}))), u.a.createElement(fa.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Mc = u.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(va.a)();
					return u.a.createElement("span", {
						className: di.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, u.a.createElement("a", {
						className: di.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, u.a.createElement(hi, {
						unreadCount: t && t.inboxCount || 0
					})), u.a.createElement(fa.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, r.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Tc = u.a.memo((function(e) {
					const t = Object(va.a)(),
						n = function(e) {
							const t = Object(m.useMemo)(() => {
								const t = Object(Cc.a)(e);
								return Object(xc.updateIn)(t, ["modifiers"], e => Object(xc.push)(e, Oc))
							}, [e]);
							return Object(Cc.b)(t)
						}(),
						s = Object(m.useCallback)(() => {
							n.hide(), t.hide()
						}, [n, t]);
					Object(yc.a)("INBOX--TOOLTIP", s);
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: di.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: Object(_a.a)(t.target.ref, n.target.ref)
					}, u.a.createElement(oi, {
						"aria-expanded": n.visible,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: di.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), n.visible ? n.hide() : n.show(), e.sendNavClickInbox()
						},
						isOpen: n.visible
					}, u.a.createElement(gi, {
						unreadCount: e.unreadCount
					})), !n.visible && u.a.createElement(fa.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, u.a.createElement("div", null, r.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), u.a.createElement(pc, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, u.a.createElement(bc.a, {
						isOpen: n.visible,
						hideTooltip: s
					}))))
				})),
				Ac = u.a.memo((function(e) {
					const t = Object(hr.a)(),
						n = Object(va.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: di.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, u.a.createElement("button", {
						className: di.a.link,
						"aria-label": r.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, t ? u.a.createElement(bs.a, {
						className: di.a.icon2020,
						name: "add"
					}) : u.a.createElement(Rs.a, {
						className: di.a.postIcon
					}))), u.a.createElement(fa.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, r.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Rc = Object(Vt.t)({
					pageLayer: e => e
				}),
				Lc = Object(g.c)({
					activeDropdownId: sa.a,
					appBadges: Pc.b,
					chatDirectMessagesCount: Pc.e,
					email: Ct.l,
					hasUnreadChatMessages: Pc.f,
					inboxBadgeCount: Pc.g,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: jc.c,
					isInboxAppBadgingGqlEnabled: Sc.a,
					isInboxRedesignActive: er.d,
					isModerator: vt.i,
					isNameEditable: Ct.L,
					isResponsiveSettingsEnabled: zt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(Vt.K)(t) && !!Object(Ct.l)(e) && !Object(Ct.z)(e) && Object(Ct.J)(e) && !Object(Ct.H)(e),
					shouldShowChangeUsernameModals: _c.c,
					shouldShowLegacyModmailIcon: Ws.o,
					unreadNotifications: Ct.kb
				}),
				Fc = Object(p.b)(Lc, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Na.d)()),
					closeEmailVerificationTooltip: () => e(Object(Ta.b)()),
					fetchAppBadges: () => e(Object(Ia.c)()),
					onChatClick: () => e(Object(Ma.e)()),
					onDismissCustomizeFlyout: () => e(Object(Ra.t)()),
					onOpenModerationDropdown: () => {
						e(Object(so.h)({
							tooltipId: hc.a
						})), e(Object(_r.q)())
					},
					onOpenUserDropdown: () => e(Object(so.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(je.h)(gc.b))
					},
					openKeepUsernameModal: () => {
						e(Object(je.h)(gc.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Ta.b)()), e(Object(je.i)(gc.a))
					},
					resendEmail: () => e(Object(La.v)(Ha.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Aa.n(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(Na.f)(n))
					}
				}));
			class Dc extends u.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(fc.p)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(vc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(wa.a)(e.pathname, Ec.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== v.Db.POST_CREATION && n !== v.Db.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.isInboxAppBadgingGqlEnabled && Sa()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: r,
						email: o,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: d,
						isEmailVerificationTooltipShowing: l,
						isGoogleOneTapEnabled: p,
						isInboxRedesignActive: b,
						isModerator: h,
						isNameEditable: g,
						isResponsiveSettingsEnabled: v,
						onDismissCustomizeFlyout: x,
						onOpenUserDropdown: C,
						openChangeUsernameModal: O,
						openKeepUsernameModal: y,
						resendEmail: E,
						shouldOpenEmailVerificationTooltip: P,
						shouldShowChangeUsernameModals: j,
						shouldShowLegacyModmailIcon: S,
						toggleChangeEmailModal: _,
						unreadNotifications: w,
						user: k
					} = this.props, {
						googleOneTapIFrame: I
					} = this.state, N = !(!w || !w.hasUnreadModmail && !w.hasUnreadOldModmail), M = k && Object(gt.e)(k) || "", T = Object(f.a)({
						[di.a["m-responsive"]]: v
					});
					return u.a.createElement(bt.a, {
						id: kc,
						ref: e => this.container = e,
						className: n
					}, u.a.createElement(bt.a, {
						className: di.a.headerLinks,
						id: wc
					}, h && u.a.createElement(Ic, {
						isModerateIconLit: N,
						moderationDropdownOpen: e === hc.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						showLegacyModmailIcon: !!S,
						unreadNotifications: w
					}), k && u.a.createElement(m.Fragment, null, u.a.createElement(Nc, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadMessages: a
					}), b ? u.a.createElement(Tc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i
					}) : u.a.createElement(Mc, {
						onClickMail: this.onClickMail,
						unreadNotifications: w
					}), u.a.createElement(Ac, {
						onClickCreatePost: this.onClickCreatePost
					}), u.a.createElement("span", {
						className: di.a.iconWrapper
					}, u.a.createElement($a.a, null)))), u.a.createElement(dc, {
						className: di.a.headerUserDropdown,
						googleOneTapIFrame: I,
						onClick: C,
						user: k,
						sendEventWithName: this.sendEventWithName
					}), p && u.a.createElement("div", {
						className: di.a.loggedInGoogleOneTap
					}, u.a.createElement(Xa, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && u.a.createElement(bi, {
						onCloseFlyout: x
					}), u.a.createElement(za, {
						closeTooltip: r,
						email: o,
						isOpen: P && l,
						resendEmail: E,
						toggleChangeEmailModal: _,
						tooltipId: kc
					}), u.a.createElement(Ga, {
						email: o,
						shouldOpenTooltip: P
					}), g && !v && u.a.createElement(m.Fragment, null, u.a.createElement(Ua.a, {
						closeTooltip: s,
						isOpen: c && !j,
						openChangeUsernameModal: O,
						openKeepUsernameModal: y,
						tooltipId: wc,
						username: M
					}), j && u.a.createElement(Da.a, {
						isResponsiveSettingsEnabled: v,
						overlayClassName: T,
						username: M,
						withOverlay: !0
					}), u.a.createElement(Fa.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Uc = Object(T.c)(Rc(Fc(Dc))),
				Gc = n("./src/reddit/selectors/meta.ts"),
				Bc = n("./src/reddit/components/Header/User/index.m.less"),
				Hc = n.n(Bc);
			const {
				fbt: qc
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wc = Object(g.c)({
				account: e => e.user.account,
				origin: Gc.i
			}), Vc = u.a.memo(e => u.a.createElement("div", {
				className: Object(f.a)(e.className, Hc.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					n = U.a.accountManagerOrigin,
					s = t ? t.url : "/",
					r = t && t.meta && t.meta.name === v.Db.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + s);
				return u.a.createElement("div", {
					className: Hc.a.loggedOutRow
				}, u.a.createElement(Ie.m, {
					redditStyle: !0,
					className: Object(f.a)(Hc.a.login, Hc.a.button),
					href: `${n}/login/?dest=${r}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(Pa.a)("nav")))
					}
				}, qc._("Log In", null, {
					hk: "4Cxw0g"
				})), u.a.createElement(Ie.j, {
					redditStyle: !0,
					className: Object(f.a)(Hc.a.separator, Hc.a.register, Hc.a.button),
					href: `${n}/register/?dest=${r}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(Pa.c)("nav")))
					}
				}, qc._("Sign Up", null, {
					hk: "2WZPuJ"
				})))
			}(e), u.a.createElement(Uc, {
				className: Object(f.a)({
					[Hc.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var Qc = Object(Vt.t)()(Object(p.b)(Wc, e => ({
					onOpenLoginModal: () => {
						e(Object(je.k)({
							actionSource: je.a.HeaderLogin
						})), e(Object(Ea.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(je.k)({
							actionSource: je.a.HeaderSignup
						})), e(Object(Ea.j)())
					}
				}))(Object(T.c)(Vc))),
				zc = n("./src/reddit/components/Header/index.m.less"),
				Kc = n.n(zc);

			function Zc() {
				return (Zc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Jc = N.a.header("HeaderDynamicStyles", Kc.a),
				Yc = Object(g.c)({
					isLoggedIn: Ct.J,
					isNightmode: Ct.V,
					isResponsiveSettingsEnabled: zt.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Xc = Object(Vt.t)({
					categoryName: Vt.b,
					pageLayer: e => e
				}),
				$c = e => u.a.createElement("div", {
					className: Kc.a.left
				}, u.a.createElement(zr.a, null, r.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), u.a.createElement(Qr.b, null), u.a.createElement(ms.a, {
					"aria-label": r.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: Kc.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, u.a.createElement(ua.a, {
					className: Kc.a.snoo
				}), u.a.createElement(pa.a, {
					className: Kc.a.wordmark
				})), e.children),
				ed = e => u.a.createElement("div", {
					className: Kc.a.right
				}, e.children, u.a.createElement(Qc, null)),
				td = e => u.a.createElement("div", {
					className: Kc.a.layout
				}, u.a.createElement($c, Zc({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement(Vr, null), u.a.createElement(ma, {
					className: Kc.a.search
				})), u.a.createElement(ed, null, u.a.createElement(ya, {
					className: Kc.a.quickLinks
				}))),
				nd = e => u.a.createElement("div", {
					className: Kc.a.layout
				}, u.a.createElement($c, Zc({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement("div", {
					className: Kc.a.searchContainer
				}, u.a.createElement(ma, {
					className: Kc.a.search
				}))), u.a.createElement(ed, null));
			var sd = Xc(Object(p.b)(Yc, e => ({
					onReloadFrontpage: () => e(Object(Ir.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? td : nd, u.a.createElement(Jc, {
						"data-redditstyle": !0,
						className: Object(f.a)(Kc.a.container, e.className, {
							[Kc.a.bladeIsOpen]: e.isBladeOpen
						})
					}, u.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && u.a.createElement(ga, {
						className: Kc.a.MwebResponsiveHeader
					}))
				}))),
				rd = n("./src/reddit/components/LightboxHeader/index.tsx"),
				od = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				ad = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				id = n.n(ad);
			const {
				fbt: cd
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const dd = Object(p.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(j.j)())
			}));
			var ld = N.a.wrapped(dd((function(e) {
					const t = Object(hr.a)();
					return u.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, u.a.createElement("div", {
						className: id.a.title
					}, u.a.createElement(ur, {
						className: id.a.listHeader
					}, cd._("My Communities", null, {
						hk: "1CmPOc"
					})), u.a.createElement("div", {
						className: id.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, t ? u.a.createElement(bs.a, {
						name: "close"
					}) : u.a.createElement(Ne.a, {
						className: id.a.icon
					}))), u.a.createElement(Gr, null))
				})), "Component", id.a),
				md = n("./src/reddit/components/Survey/index.tsx"),
				ud = n("./src/reddit/components/ThemeProvider/index.tsx"),
				pd = n("./src/reddit/actions/toaster.ts");
			const bd = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				hd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "primary"
					}
				}),
				gd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "secondary"
					}
				});
			var fd = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				vd = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				xd = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Cd = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Od = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				yd = n("./src/reddit/models/Toast/index.ts"),
				Ed = n("./src/reddit/selectors/experiments/euEssentialCookies.ts"),
				Pd = n("./src/reddit/selectors/structuredStyles.ts"),
				jd = n("./src/reddit/constants/colors.ts"),
				Sd = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				_d = n.n(Sd);

			function wd() {
				return (wd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const kd = e => {
				const t = jd.b;
				switch (e.kind) {
					case yd.b.Error:
					case yd.b.AuthError:
					case yd.b.SuccessEndBroadcast:
						return t.warning;
					case yd.b.SuccessCommunity:
						return t.op;
					case yd.b.SuccessCommunityGreen:
					case yd.b.SuccessMod:
					case yd.b.SuccessUnlockComment:
						return t.approved;
					case yd.b.SuccessLockComment:
						return t.reported;
					case yd.b.EuCookiePolicy:
					case yd.b.UappBanner:
					case yd.b.Undo:
					default:
						return t.op
				}
			};
			class Id extends u.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return u.a.createElement("div", n)
				}
			}
			const Nd = N.a.wrapped(Id, "PlainBread", _d.a);
			var Md = e => u.a.createElement(Nd, wd({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": kd(e)
					}
				})),
				Td = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Ad = n.n(Td);
			const Rd = N.a.span("Text", Ad.a);
			var Ld = n("./src/reddit/components/Toaster/index.m.less"),
				Fd = n.n(Ld);
			const {
				fbt: Dd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ud = N.a.wrapped(xd.a, "AuthErrorToastIcon", Fd.a), Gd = N.a.wrapped(Ie.i, "AuthErrorToastPrimaryButton", Fd.a);
			class Bd extends u.a.Component {
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
					}, u.a.createElement(Md, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, u.a.createElement(Ud, null), u.a.createElement(Rd, null, Dd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), u.a.createElement(Gd, {
						type: "submit"
					}, Dd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Hd = Bd,
				qd = n("./src/lib/constants/euCookiePolicy.ts"),
				Wd = n("./src/lib/cookieConsent/index.ts"),
				Vd = n("./src/lib/permanentCookieOptions.ts"),
				Qd = n("./src/reddit/controls/Link/index.tsx"),
				zd = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Kd = n.n(zd);
			const {
				fbt: Zd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Jd = N.a.div("Icon", Kd.a), Yd = () => u.a.createElement(Jd, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Xd = N.a.wrapped(Ie.i, "PrimaryButton", Kd.a), $d = N.a.wrapped(Md, "Bread", Kd.a);
			class el extends u.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Wd.b)({
							opted: !0,
							nonessential: !0
						}), Ee.a.set(Lt.b, qd.d.toString(), Object(Vd.a)(10)), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Wd.b)({
							opted: !0,
							nonessential: !1
						}), Ee.a.set(Lt.b, qd.d.toString(), Object(Vd.a)(10)), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("section", null, u.a.createElement($d, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, u.a.createElement(Yd, null), u.a.createElement("section", {
						className: Kd.a.EuCookiePolicyBody
					}, u.a.createElement(Rd, null, Zd._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", u.a.createElement(Qd.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, Zd._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), u.a.createElement("section", {
						className: Kd.a.EuCookiePolicyOptions
					}, u.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, u.a.createElement(Xd, {
						type: "submit"
					}, Zd._("Reject non-essential", null, {
						hk: "M79jf"
					}))), u.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, u.a.createElement(Xd, {
						type: "submit"
					}, Zd._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			class tl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ee.a.set(Lt.b, qd.d.toString(), Object(Vd.a)(10)), this.props.onClose()
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement($d, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, u.a.createElement(Yd, null), u.a.createElement(Rd, null, Zd._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", u.a.createElement(Qd.a, {
						href: "https://redditinc.com/policies/cookies",
						target: "_blank"
					}, Zd._("Learn More", null, {
						hk: "MNKD5"
					})), "."), u.a.createElement(Xd, {
						type: "submit"
					}, Zd._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var nl, sl = tl;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(nl || (nl = {}));
			var rl = n("./src/reddit/controls/Typography/index.tsx"),
				ol = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				al = n.n(ol);

			function il() {
				return (il = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cl = N.a.div("Container", al.a),
				dl = N.a.img("SideImage", al.a),
				ll = N.a.div("Main", al.a),
				ml = N.a.div("SubTitle", al.a),
				ul = rl.a,
				pl = N.a.wrapped(Ie.j, "PrimaryLinkButton", al.a),
				bl = N.a.wrapped(Ne.a, "CloseIcon", al.a);
			class hl extends u.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(hd(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(bd(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: s,
						subTitle: o,
						title: a
					} = this.props;
					return u.a.createElement(cl, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, u.a.createElement(bl, {
						onClick: this.props.onClose
					}), u.a.createElement(dl, {
						srcSet: n
					}), u.a.createElement(ll, null, u.a.createElement(ml, null, o), u.a.createElement(rl.b, null, a), u.a.createElement(ul, null, e), u.a.createElement(pl, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, r.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const gl = Object(p.b)(null, e => ({
					onSignup: () => e(Object(Ea.j)())
				}))(Object(T.c)(hl)),
				fl = `${vl("subscribe-cap.png")} 1x,\n  ${vl("subscribe-cap@2x.png")} 2x,`;

			function vl(e) {
				return `${U.a.assetPath}/img/banner/${e}`
			}
			const xl = 3,
				Cl = e => `${e}:1527210000`;
			var Ol = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				yl = n.n(Ol);
			const {
				fbt: El
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pl = N.a.div("Icon", yl.a), jl = () => u.a.createElement(Pl, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Sl = N.a.wrapped(Ie.i, "PrimaryButton", yl.a), _l = N.a.wrapped(Md, "Bread", yl.a);
			class wl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ee.a.set(Lt.k, Cl(xl), Object(Vd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(_l, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, u.a.createElement(jl, null), u.a.createElement(Rd, null, El._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [El._param("=User Agreement", u.a.createElement(Qd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, El._("User Agreement", null, {
						hk: "XS57W"
					}))), El._param("=Privacy Policy", u.a.createElement(Qd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, El._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), u.a.createElement(Sl, {
						type: "submit"
					}, El._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var kl = wl;

			function Il() {
				return (Il = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Nl = [],
				Ml = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Tl = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Al = {
					opacity: Object(I.spring)(0),
					x: Object(I.spring)(.6),
					y: Object(I.spring)(80, Ml)
				},
				Rl = N.a.wrapped(xd.a, "SnooFacepalm", Fd.a),
				Ll = N.a.wrapped(Cd.a, "SnooHappy", Fd.a),
				Fl = N.a.wrapped(ys.b, "SubredditIcon", Fd.a),
				Dl = N.a.img("CustomIcon", Fd.a),
				Ul = N.a.div("Container", Fd.a),
				Gl = N.a.wrapped(Ne.a, "Close", Fd.a),
				Bl = N.a.wrapped(fd.a, "LockIcon", Fd.a),
				Hl = N.a.wrapped(Od.a, "UnlockIcon", Fd.a),
				ql = N.a.wrapped(vd.a, "RemoveIcon", Fd.a),
				Wl = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(Gl, Il({
					className: "CloseIcon"
				}, e))),
				Vl = N.a.wrapped(Md, "Bread", Fd.a),
				Ql = Object(g.c)({
					subredditIcon: Pd.b,
					toastSlices: e => e.toaster,
					enableEssentialEuCookieToast: Ed.a
				}),
				zl = Object(p.b)(Ql, e => ({
					dismissToast: t => () => e(Object(pd.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(pd.g)(n))
					}
				}));
			class Kl extends u.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Zl(e, this.props.toastSlices), this.getWillEnterStyles = () => Tl, this.getWillLeaveStyles = () => Al
				}
				render() {
					return this.props.toastSlices.length ? u.a.createElement(I.TransitionMotion, {
						defaultStyles: Nl,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => u.a.createElement(Ul, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === yd.b.Custom && void 0 !== t.customToastType) {
							const s = Yl[t.customToastType];
							return u.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === yd.b.UappBanner) return u.a.createElement(kl, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === yd.b.EuCookiePolicy) return this.props.enableEssentialEuCookieToast ? u.a.createElement(el, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(bd("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(hd("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(gd("eu_essential_cookie_policy"))
								}
							}
						}) : u.a.createElement(sl, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(bd("eu_cookie_policy")),
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === yd.b.AuthError) return u.a.createElement(Hd, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === yd.b.Modal ? Ie.i : Ie.o,
							r = t.kind === yd.b.Modal ? Ie.l : Ie.o;
						return u.a.createElement(Vl, {
							className: t.kind === yd.b.Modal ? Fd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(bd(t.name)) : void 0,
							style: n
						}, u.a.createElement("div", {
							className: Fd.a.ContentWrapper
						}, Jl(t, this.props.subredditIcon), t.kind === yd.b.SuccessLockComment && u.a.createElement(Bl, null), t.kind === yd.b.SuccessUnlockComment && u.a.createElement(Hl, null), u.a.createElement(Rd, null, t.text)), u.a.createElement("div", {
							className: Fd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && u.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(hd(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && u.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(gd(t.name))
							}
						}, t.secondButtonText)), u.a.createElement(Wl, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Zl = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(I.spring)(1),
						x: Object(I.spring)(1, Ml),
						y: Object(I.spring)(0, Ml)
					}
				})),
				Jl = (e, t) => {
					if (e.customIconAsset) return u.a.createElement(Dl, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case yd.b.Error:
							return u.a.createElement(Rl, null);
						case yd.b.SuccessEndBroadcast:
							return u.a.createElement(ql, null);
						case yd.b.SuccessAward:
						case yd.b.SuccessCommunity:
						case yd.b.SuccessCommunityGreen:
							return u.a.createElement(Ll, null);
						case yd.b.SuccessMod:
							return u.a.createElement(Fl, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Yl = {
					[yd.a.subscribeCap]: e => u.a.createElement(gl, il({
						name: nl.LoggedOutMaxSubscriptions,
						sideImage: fl,
						title: r.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: r.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Xl = zl(Object(T.c)(Kl)),
				$l = n("./src/reddit/featureFlags/profileCollections.ts");
			const em = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				tm = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var nm = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				sm = n.n(nm);
			var rm = N.a.div("Wrapper", sm.a),
				om = n("./src/reddit/components/AlertBanner/index.m.less"),
				am = n.n(om);
			const {
				fbt: im
			} = n("./node_modules/fbt/lib/FbtPublic.js"), cm = () => u.a.createElement(rm, {
				className: Object(f.a)(am.a.wrapper, am.a.suspended)
			}, u.a.createElement("span", null, im._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), u.a.createElement("a", {
				className: am.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, im._("Learn more", null, {
				hk: "1OTc8q"
			}))), dm = () => u.a.createElement(rm, {
				className: Object(f.a)(am.a.wrapper, am.a.fpr)
			}, u.a.createElement("span", null, im._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), u.a.createElement("a", {
				className: am.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, im._("Learn more", null, {
				hk: "1OTc8q"
			}))), lm = ({
				updateLink: e,
				onClickOldReddit: t
			}) => u.a.createElement(rm, {
				className: Object(f.a)(am.a.wrapper, am.a.deprecated)
			}, u.a.createElement("span", null, im._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [im._param("update your browser", u.a.createElement(mm, {
				link: e
			}, im._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), u.a.createElement("span", null, im._("If you do not update your browser, we suggest you visit {old reddit} .", [im._param("old reddit", u.a.createElement("a", {
				className: am.a.underlineLink,
				href: U.a.oldRedditUrl,
				onClick: t
			}, im._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), mm = ({
				children: e,
				link: t
			}) => null !== t ? u.a.createElement("a", {
				className: am.a.underlineLink,
				href: t
			}, e) : u.a.createElement("span", null, e);
			class um extends u.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(tm())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(em())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? u.a.createElement(lm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? u.a.createElement(dm, null) : n ? u.a.createElement(cm, null) : null
				}
			}
			var pm = Object(T.c)(um),
				bm = n("./src/reddit/components/AlertBanner/heights.ts"),
				hm = n("./src/reddit/components/PopupPortal/index.tsx"),
				gm = n("./src/reddit/constants/componentSizes.ts"),
				fm = n("./src/reddit/constants/elementIds.ts"),
				vm = n("./src/reddit/constants/posts.ts"),
				xm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Cm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Om = n("./src/reddit/helpers/postCollection.ts"),
				ym = n("./src/reddit/models/Theme/index.ts"),
				Em = n("./src/reddit/selectors/experiments/survey.ts"),
				Pm = n("./src/reddit/selectors/notificationBanner.ts"),
				jm = n("./src/reddit/selectors/posts.ts"),
				Sm = n("./src/reddit/components/AppRouter/index.m.less"),
				_m = n.n(Sm);

			function wm() {
				return (wm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const km = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => u.a.createElement("div", wm({
					className: Object(f.a)(_m.a.main, {
						[_m.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				Im = Object(x.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const r = Object(F.a)({
						theme: n,
						...s
					});
					return u.a.createElement("div", wm({
						className: Object(f.a)(_m.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(ym.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Ut.c)(t)}px`
						}
					}, s))
				}),
				Nm = ({
					className: e,
					divRef: t,
					...n
				}) => u.a.createElement("div", wm({
					className: Object(f.a)(_m.a.lightboxHeaderWrapper, e)
				}, n, {
					ref: t
				})),
				Mm = Object(Pm.a)(od.a.EmailCollectionBannerId),
				Tm = Object(p.b)(() => Object(g.c)({
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(D.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Ct.u,
					isLoggedIn: Ct.J,
					isNpsSurveyEnabled: Em.c,
					isSubscriptionsPinned: xs.b,
					isSuspended: Ct.O,
					isFPR: Ct.H,
					posts: jm.G,
					profileCollectionsEnabled: $l.a,
					showEmailCollectionBanner: e => !Object(Vt.J)(e.platform.currentPage) && Mm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(j.j)()),
					onPostDismissTrigger: () => e(Object(S.g)())
				})),
				Am = (e, t) => !(!e.state || !e.state[ao.a.IsOverlay] || t === e);
			class Rm extends u.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < gm.l && this.props.onUnpinSubscriptions()
					}, v.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Vt.w)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${v.zb.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === vm.a.PROFILE;
							return !(!o || !Object(Om.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(D.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n
					} = this.props, s = n.state && n.state[ao.a.IsOverlay], r = Object(E.a)(this.previousLocation, e.location);
					t && s && r && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const o = Object(E.a)(this.previousLocation, this.props.location),
						a = s ? this.previousPage : this.props.currentPage;
					if (a) {
						const {
							meta: t,
							urlParams: n
						} = a, s = t && (t.name === v.Db.INDEX || t.name === v.Db.SUBREDDIT && n.subredditName === Ys.b.Popular), r = Object(D.c)(this.props.frontpageSignupVariant), o = Object(D.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || r || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = Am(e.location, this.previousLocation);
					O.a.write(() => {
						document.body.style.overflow = i ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: n,
						isFPR: s,
						isLoggedIn: o,
						isSubscriptionsPinned: a,
						isSuspended: i,
						location: d,
						onClickOutsideOverlay: l,
						routes: p,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: h,
						isSignupUpsellHidden: g
					} = this.state, f = this.context, x = Am(d, this.previousLocation);
					d.state && d.state[ao.a.IsOverlay] && !x ? d.state[ao.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[ao.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[ao.a.CloseLocation] && this.previousLocation.state[ao.a.CloseLocation] === d.state[ao.a.CloseLocation] ? d.state[ao.a.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, ao.a.CloseLocation)
					} : d.state[ao.a.CloseLocation] = this.previousLocation);
					const C = Object(E.a)(this.previousLocation, d),
						O = x || C ? this.previousLocation : d,
						y = x || C ? this.previousPage : e,
						P = !(!(y && y.meta && y.meta.name === v.Db.SEARCH_RESULTS && y && y.queryParams) || y.queryParams[co.s]),
						j = !(!y || !y.meta || y.meta.name !== v.Db.MODERATION_PAGES),
						S = Object(Vt.w)(y),
						w = this.getIsPostCollection(),
						k = h && !g;
					return n ? r.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Vt.a.Provider, {
						value: y
					}, u.a.createElement(Qr.c, {
						isOverlayOpen: x
					}, u.a.createElement(ud.a, {
						forceRedditTheme: P
					}, h && u.a.createElement(Oe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), u.a.createElement(Lm, {
						browserInfo: f,
						isFPR: s,
						isInline: k,
						isSuspended: i
					})), u.a.createElement(xm.a.Provider, {
						value: !1
					}, u.a.createElement(ud.a, {
						forceRedditTheme: P || j,
						isCommentsPage: S
					}, u.a.createElement(Fm, {
						frontpageSignupVariant: t,
						isCommentsPage: S,
						isInline: k,
						isLoggedIn: o,
						isSubscriptionsPinned: a,
						location: O,
						overlayIsOpen: x,
						page: y,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: f,
						showFPR: s,
						showSuspended: i
					}))))), u.a.createElement(Vt.a.Provider, {
						value: e
					}, x && u.a.createElement(xm.a.Provider, {
						value: !0
					}, u.a.createElement(ud.a, {
						isOverlay: !0
					}, u.a.createElement(Dm, {
						isPostCollection: w,
						location: d,
						onClickOutsideOverlay: l,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: f,
						showFPR: s,
						showSuspended: i
					}))), u.a.createElement(ud.a, null, u.a.createElement(m.Fragment, null, u.a.createElement("div", {
						id: hm.a,
						className: _m.a.popupContainer
					}), u.a.createElement(Xl, null), u.a.createElement(md.a, null), b && u.a.createElement(_.a, null), u.a.createElement(Ht, null), u.a.createElement(ls, null)))))
				}
			}
			Rm.contextType = C.a;
			const Lm = Object(T.c)(e => {
					const {
						browserInfo: t,
						isFPR: n,
						isInline: s,
						isSuspended: r
					} = e, o = {
						browserInfo: t,
						showFPR: n,
						showSuspended: r
					};
					return u.a.createElement(m.Fragment, null, u.a.createElement(pm, o), u.a.createElement(sd, {
						className: Object(f.a)(_m.a.header, Object(bm.b)(_m.a, o), {
							[_m.a.inline]: s
						})
					}))
				}),
				Fm = Object(T.c)(class extends u.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
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
							isCommentsPage: r,
							isInline: o,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!a && !s && r);
						return u.a.createElement(km, {
							"aria-hidden": s,
							className: Object(f.a)(Object(bm.b)(_m.a, this.props), {
								[_m.a.withUpsell]: !!e,
								[_m.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && u.a.createElement(ld, {
							className: Object(f.a)(_m.a.pinnedSubscriptions, Object(bm.b)(_m.a, this.props)),
							"data-redditstyle": !0
						}), u.a.createElement(b.f, {
							location: t
						}, n), c && u.a.createElement("div", {
							className: Object(f.a)(_m.a.bottomSpacer, Object(bm.a)(_m.a, this.props))
						}))
					}
				});
			class Dm extends u.a.Component {
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
							t(e.state[ao.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Cm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(y.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Cm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === v.Db.SUBREDDIT_CREATION || t.meta.name === v.Db.PUBLIC_ACCESS_NETWORK), o = e;
					return u.a.createElement(Im, {
						className: Object(f.a)(Object(bm.b)(_m.a, this.props), {
							[_m.a.mIsCommentsLightbox]: r,
							[_m.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, u.a.createElement("div", {
						className: Object(f.a)(_m.a.overlayWrapper, Object(bm.b)(_m.a, this.props))
					}, u.a.createElement("div", {
						className: Object(f.a)(_m.a.overlayScrollContainer, {
							[_m.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: fm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && u.a.createElement(Nm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(f.a)(Object(bm.b)(_m.a, this.props), {
							[_m.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, u.a.createElement(rd.a, {
						page: t
					})), u.a.createElement(b.f, null, n), u.a.createElement("div", {
						className: Object(f.a)(_m.a.bottomSpacer, Object(bm.a)(_m.a, this.props))
					}))))
				}
			}
			t.b = Tm(Object(T.c)(Rm))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				isHighlighted: "_2fUisaQtUa1Fxx6-R5fDhH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				unreadCount: n
			}) => t ? r.a.createElement("span", {
				className: Object(o.a)(e, c.a.badgeCounter, {
					[c.a.isHighlighted]: t && n <= 0
				})
			}, n > 0 && Object(a.b)(n)) : null
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/connectors/PostViewable/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(a.a)(null),
				l = ({
					className: e,
					post: t
				}) => t.isSponsored ? r.a.createElement(o.a, {
					post: t,
					trackDisplay: !0
				}, r.a.createElement("div", {
					className: Object(i.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: r,
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && r(), !1)
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
					return r.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
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
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				i = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: n,
				forceShowNSFW: s,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: m,
				templatePlaceholderImage: u,
				thumbnailContainerClassName: p,
				url: b,
				usePreview: h
			}) => r.a.createElement("div", {
				className: Object(o.a)(c.a.thumbnailContainer, e)
			}, r.a.createElement(a.a, {
				className: Object(o.a)(c.a.thumbnail, t),
				containerClassName: p,
				crosspost: n,
				forceShowNSFW: s,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: m,
				templatePlaceholderImage: u,
				url: m ? void 0 : b,
				usePreview: h
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PennyPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)()])).then(e => e[0].default),
				m = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => r.a.createElement(m, {
				onOverlayClick: e,
				withOverlay: !0
			}))
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
			const m = Object(a.a)(({
				className: e,
				...t
			}) => r.a.createElement(i.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = m
		},
		"./src/reddit/components/DataProviders/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/contexts/User/index.tsx");

			function a(e) {
				return r.a.createElement(o.b, null, e.children)
			}
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("ClaimFreeAwardModal")]).then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
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
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
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
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
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
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				r = () => null;

			function o(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : r
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = n.n(h);
			const f = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				x = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				C = Object(i.b)(x, e => ({
					onClose: () => e(Object(m.g)(u.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(C(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const o = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
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
					alt: o,
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
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
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
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
			Object(a.b)(i.a.CONVERT_TO_COINS, e => o.a.createElement(c, null))
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				y = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				E = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				P = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				S = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				w = n.n(_);
			const k = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("reddit-components-CoinPurchaseDropdown")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
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
				I = Object(f.a)(),
				N = Object(d.c)({
					activeSaleConfig: P.a,
					activeTooltipId: S.a,
					coinPurchaseDropdownIsOpen: e => Object(S.b)(I)(e),
					isFreeAwardEventEnabled: e => Object(E.a)(e) && Object(P.g)(e),
					isInIcons2020: y.a,
					premiumPurchaseModalIsOpen: j.o
				}),
				M = (e, t) => ({
					closeTooltip: () => e(Object(u.i)()),
					requestSpecialEvents: () => e(Object(m.a)()),
					toggleTooltip: t => {
						e(t === I ? Object(u.i)() : Object(u.f)({
							tooltipId: I
						}))
					}
				}),
				T = Object(c.b)(N, M);
			class A extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: r,
							sendEvent: o,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.b)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							o(Object(x.d)("get_coins_cta", e))
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
					return e ? e.ctaText || r.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? r.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : r.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: r,
						isInIcons2020: o,
						premiumPurchaseModalIsOpen: a
					} = this.props, c = this.getButtonText(), d = !!e || r, m = Object(l.a)(w.a.icon, {
						[w.a.special]: d
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, w.a.ctaContainer, {
							[w.a.special]: d
						}),
						id: I,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(w.a.ctaContent, {
							[w.a.special]: d
						})
					}, o ? i.a.createElement(C.a, {
						name: "coins",
						className: m
					}) : i.a.createElement(O.a, {
						className: m
					}), i.a.createElement("span", {
						className: w.a.text
					}, c)), s && i.a.createElement(k, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: I
					}), a && i.a.createElement(h.a, null))
				}
			}
			t.a = T(Object(g.c)(A))
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
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				rpanVideoIcon: "_2BMLeQ_Q2tfBzrcfsUAQZi"
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
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				i = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				l = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const u = m.a.wrapped(a.a, "Logo", l.a),
				p = m.a.wrapped(i.a, "Wordmark", l.a),
				b = m.a.div("SparseContainer", l.a),
				h = m.a.a("HomeExternalLink", l.a);

			function g(e) {
				return r.a.createElement(b, {
					id: o.c
				}, r.a.createElement(h, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, r.a.createElement(c.a, null, r.a.createElement(u, null), r.a.createElement(p, null))))
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
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
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
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
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
				chatIcon: "ra_3TRn5G7dbrfbhx8kYi",
				isActive: "_3aintJ344BVk82tG06NQea",
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
				notificationInboxIconContainer: "_3AUJR143r5MT-j2-3Y0teA",
				loggedInGoogleOneTap: "GmCFJz0Lv_7OTbtdvK2me",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv"
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
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				myProfileIcon: "VIlSggfRUkuuHTKa_h8jp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return F
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				d = n("./node_modules/lodash/omit.js"),
				l = n.n(d),
				m = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				u = n("./src/reddit/components/ResizeSensor/index.tsx"),
				p = n("./src/reddit/components/InboxTooltip/index.m.less"),
				b = n.n(p);
			const h = 3;
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= h) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						index: a,
						isInboxPostEmbedEnabled: i,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: p
					} = this.props, g = a + 1 <= h;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: b.a.notificationResizeWrapper
					}, o.a.createElement(m.a, {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: i,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: p
					}), !!g && o.a.createElement(u.a, {
						onResize: this.handleResize
					})))
				}
			}
			var f = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				v = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = {},
				O = "",
				y = 0,
				E = "200px";
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: C
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > y && this.props.setActiveOverflowMenuId(O)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return 0 === t ? E : t
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.renderNotifications = () => {
						const e = l()(this.props, ["notifications"]),
							{
								notificationHeights: t
							} = this.state;
						return this.props.notifications.map((n, s) => o.a.createElement(g, x({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
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
						isPending: e,
						notifications: t
					} = this.props, n = !(!t || !t.length), s = this.getContainerHeight();
					return o.a.createElement("div", {
						className: b.a.notificationList,
						ref: this.container,
						style: {
							height: s,
							maxHeight: s
						}
					}, n ? this.renderNotifications() : e ? o.a.createElement(f.a, null) : o.a.createElement(v.a, null))
				}
			}
			var j = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/helpers/trackers/inbox.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				w = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				k = n("./src/reddit/icons/svgs/Settings/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const N = [],
				M = i.a.div("StyledDropdown", b.a),
				T = i.a.wrapped(k.a, "Gear", b.a),
				A = i.a.wrapped(w.a, "MarkAsRead", b.a),
				R = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: i,
					isInboxMarkAllAsReadEnabled: d,
					sendInboxClickSettings: l
				}) => {
					const m = !!i,
						u = Object(r.useCallback)(() => {
							e(), t()
						}, [e, t]),
						p = Object(r.useCallback)(() => {
							l(), t()
						}, [l, t]);
					return o.a.createElement("nav", {
						className: b.a.topNav
					}, o.a.createElement("span", {
						className: b.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), o.a.createElement("span", {
						className: b.a.topNavLinks
					}, o.a.createElement("span", {
						className: b.a.messagesLinkContainer
					}, o.a.createElement(j.a, {
						className: Object(a.a)(b.a.messagesLink, {
							[b.a.mActive]: m
						}),
						onClick: u,
						to: m ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					})), o.a.createElement(c.a, {
						className: b.a.badgeCount,
						isActive: m,
						unreadCount: i
					})), d && o.a.createElement("button", {
						className: b.a.navLink,
						onClick: n
					}, o.a.createElement(A, null)), o.a.createElement(j.a, {
						className: b.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, o.a.createElement(T, null))))
				},
				L = e => o.a.createElement("div", {
					className: b.a.bottomBar
				}, o.a.createElement(j.a, {
					className: b.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				F = e => {
					const t = Object(_.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isInboxMarkAllAsReadEnabled: r,
							isPending: a,
							messagesBadgeCount: i,
							notifications: c,
							hideTooltip: d
						} = e,
						l = !(!c || !c.length);
					return o.a.createElement(M, null, o.a.createElement("div", {
						className: b.a.tooltipContainer
					}, o.a.createElement(R, {
						isInboxMarkAllAsReadEnabled: r,
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(S.d)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: i,
						onMessagesClick: () => {
							t(Object(S.l)({
								badgeCount: s,
								tab: S.c.Messages
							})), t(Object(S.e)()), n()
						},
						sendInboxClickSettings: () => t(Object(S.j)(S.a.MiniInbox)),
						onBarClick: d
					}), o.a.createElement(P, I({}, e, {
						isPending: a,
						onItemClick: d
					})), (l || a) && o.a.createElement(L, {
						sendInboxClickSeeAll: () => t(Object(S.i)()),
						onBarClick: d
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
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
				Gear: "_3KogLgBmag36_tCz2x_A4v",
				gear: "_3KogLgBmag36_tCz2x_A4v",
				MarkAsRead: "y24rxfGSKrlV1jVQxeu3I",
				markAsRead: "y24rxfGSKrlV1jVQxeu3I",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(r.createContext)(null),
				m = Object(r.createContext)(null);
			class u extends o.a.Component {
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
					return o.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(m.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = a.f + 10,
				b = o.a.memo(() => o.a.createElement(l.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(i.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, s.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				h = o.a.memo(() => o.a.createElement(m.Consumer, null, e => o.a.createElement("div", {
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
				galleryIcon: "_16ZfB-TEDZe7GTSTpIP-RR",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				u = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = n("./src/reddit/components/FlairWrapper/index.tsx"),
				b = n("./src/reddit/components/PostTitle/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = n("./src/reddit/icons/fonts/Link/index.tsx"),
				P = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = n("./src/reddit/icons/fonts/Text/index.tsx"),
				S = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				w = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts"),
				I = n("./src/reddit/selectors/experiments/categories.ts"),
				N = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/contexts/Post/index.tsx"),
				R = n("./src/reddit/components/LightboxHeader/index.m.less"),
				L = n.n(R);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(i.c)({
					isInCategoriesExperiment: I.a,
					post: M.l,
					isScoreDiscounted: (e, {
						page: t,
						post: n
					}) => {
						var s;
						if (!t && !n) return !1;
						const r = e.platform.lastPage,
							o = e.platform.currentPage,
							a = (null === (s = null == o ? void 0 : o.meta) || void 0 === s ? void 0 : s.name) === d.Db.COMMENTS,
							i = !Object(T.I)(e) && a && !r;
						if (i && !Object(N.b)(e)) return !1;
						const c = t && Object(M.l)(e, {
							page: t
						}) || n;
						return void 0 !== Object(N.d)(e, {
							isActionBarAnimationEnabled: !0,
							postId: c && c.id,
							isForceSelected: i
						})
					}
				}),
				U = Object(a.b)(D, (e, {
					sendEvent: t
				}) => ({
					close: () => {
						e(Object(m.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === k.a.upvoted ? Object(l.U)(t) : Object(l.r)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				}));
			class G extends o.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: l,
						isScoreDiscounted: m
					} = this.props, h = H[l && l.media ? l.media.type : w.o.EMBED], f = !l && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === d.Db.META_MEMBERSHIP_PAYWALL_PAGE, x = l ? A.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return o.a.createElement("div", {
						className: Object(c.a)(L.a.container, t, {
							[L.a.isCollection]: l && Object(v.a)(l)
						})
					}, o.a.createElement(x, {
						postId: null == l ? void 0 : l.id
					}, o.a.createElement("div", {
						className: L.a.postDetails
					}, l && o.a.createElement(r.Fragment, null, m ? void 0 : o.a.createElement(u.a, {
						className: L.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: l,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(h, {
						className: L.a.mediaIcon
					}), o.a.createElement(b.c, {
						className: L.a.postTitle,
						post: l,
						size: b.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.b.lightboxHeaderText,
						titleLinkClassName: L.a.postTitleLink,
						showCategoryTag: !0
					}), o.a.createElement(p.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), f && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: L.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: L.a.actions
					}, o.a.createElement(B, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const B = o.a.memo(e => {
					const t = Object(x.a)();
					return o.a.createElement(f.q, {
						className: L.a.CloseButton,
						size: f.c.XS,
						onClick: e.onClick,
						priority: f.b.Plain,
						Icon: t ? e => o.a.createElement(C.a, F({
							name: "close"
						}, e)) : S.a,
						text: s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						title: s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": s.fbt._("Close", null, {
							hk: "4gbyAA"
						})
					})
				}),
				H = {
					[w.o.GIFVIDEO]: y.a,
					[w.o.IMAGE]: P.a,
					[w.o.TEXT]: j.a,
					[w.o.RTJSON]: j.a,
					[w.o.VIDEO]: O.a,
					[w.o.EMBED]: E.a,
					[w.o.LIVEVIDEO]: O.a,
					[w.o.GALLERY]: e => {
						const t = Object(x.a)();
						return o.a.createElement("i", {
							className: Object(c.a)(L.a.galleryIcon, e.className)
						}, t ? o.a.createElement(C.a, {
							name: "media_gallery"
						}) : o.a.createElement(_.a, null))
					}
				};
			t.a = Object(h.c)(U(G))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(o);
			const i = () => r.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(i, null), r.a.createElement(i, null), r.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
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
				NotificationButton: "_3Ai1gn9teWMTX_g8CIyRdY",
				notificationButton: "_3Ai1gn9teWMTX_g8CIyRdY",
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
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts"),
				o = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = () => Object(r.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(o.d)()])).then(e => e[0].default),
				i = Object(s.a)({
					getComponent: a,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				return Object(a.e)(e => Object(i.b)(e) || Object(c.G)(e)) ? o.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/DoubleClickForPublishers.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/doubleclickForPublishers/index.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/trackers/ads.ts"),
				m = n("./src/reddit/selectors/meta.ts");
			const u = Object(i.c)({
					region: m.j
				}),
				p = Object(a.b)(u);
			class b extends o.a.Component {
				constructor(e) {
					super(e), Object(c.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(l.b)()),
						onAdView: (e, t) => {
							Math.random() <= s.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(l.c)(e, t))
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
			t.a = p(Object(d.c)(b))
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL"
			}
		},
		"./src/reddit/components/Root/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return G
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./assets/fonts/BentonSans/font.less"),
				l = n.n(d),
				m = n("./assets/fonts/IBMPlexSans/font.less"),
				u = n.n(m),
				p = n("./assets/fonts/NotoMono/font.less"),
				b = n.n(p),
				h = n("./assets/fonts/NotoSans/font.less"),
				g = n.n(h),
				f = n("./assets/fonts/VCR/font.less"),
				v = n.n(f),
				x = n("./src/reddit/components/Root/index.m.less"),
				C = n.n(x),
				O = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				y = n("./src/reddit/components/Root/DoubleClickForPublishers.tsx"),
				E = n("./src/lib/classNames/index.ts"),
				P = n("./src/reddit/components/AppRouter/index.tsx"),
				j = n("./src/reddit/components/DataProviders/index.tsx"),
				S = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				_ = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.tsx"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = n("./src/reddit/pages/InternalServerError/index.tsx"),
				M = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				T = n("./src/reddit/selectors/theme.ts");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const R = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-Root-IconFontLoaders-RedesignFont",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-Root-IconFontLoaders-RedesignFont").then(n.bind(null, "./src/reddit/components/Root/IconFontLoaders/RedesignFont.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Root/IconFontLoaders/RedesignFont.tsx"
					}
				}),
				L = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-Root-IconFontLoaders-RedesignFont2020",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-Root-IconFontLoaders-RedesignFont2020").then(n.bind(null, "./src/reddit/components/Root/IconFontLoaders/RedesignFont2020.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Root/IconFontLoaders/RedesignFont2020.tsx"
					}
				}),
				F = Object(c.c)({
					theme: T.a,
					isInIcons2020: M.a
				}),
				D = ({
					children: e,
					isInIcons2020: t,
					theme: n
				}) => {
					const s = Object(I.a)({
						theme: n
					});
					return o.a.createElement(k.b.Provider, {
						value: {
							[k.a.Icons]: t
						}
					}, o.a.createElement("div", {
						className: Object(E.a)(C.a.container, t ? "isInIcons2020" : "isNotInIcons2020"),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, t ? o.a.createElement(L, null) : o.a.createElement(R, null), e))
				},
				U = Object(a.b)(F, {})(D);

			function G(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return o.a.createElement(w.a, null, o.a.createElement(U, null, o.a.createElement(j.a, null, o.a.createElement(y.a, null), o.a.createElement(O.a, null), o.a.createElement(S.a, null), o.a.createElement(_.a, null, o.a.createElement(t, null, o.a.createElement(i.d, {
						component: B(n)
					}))))))
				}
				return o.a.createElement(N.a, {
					error: e.error
				})
			}
			const B = e => t => o.a.createElement(P.b, A({
				routes: e
			}, t))
		},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, n) {
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
				postTitle: "YeMwUP22Up8CVxmgTayyQ",
				trendingIcon: "_2VyZLE_5g-CDpUucbfHyOg",
				defaultCommunityIcon: "nltZBKTbnoPZEcEaIufmh",
				mNightmode: "TiWmxUzfBQADxToVGHQeM"
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
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/shortcuts.ts"),
				a = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				i = n.n(a);
			t.a = ({
				children: e
			}) => r.a.createElement("div", {
				className: i.a.shortcutDiv,
				id: o.b,
				tabIndex: -1
			}, r.a.Children.only(e))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/helpers/survey/index.ts"),
				m = n("./src/reddit/selectors/survey.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => {
					const n = Object(m.c)(e),
						s = Object(m.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const r = u.experiment(e, t);
					return r ? {
						experiment_name: r.name,
						experiment_variant: r.variant,
						experiment_version: r.version
					} : {}
				},
				b = e => {
					switch (e) {
						case l.a.CES:
							return "ces";
						case l.a.CSAT:
							return "csat";
						case l.a.NPS:
							return "nps"
					}
				},
				h = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...u.defaults(n),
					survey: p(n, e)
				}),
				g = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					type: r
				}) => o => ({
					source: "survey",
					action: e,
					noun: "rating",
					...u.defaults(o),
					survey: {
						type: b(r),
						min: r === l.a.NPS ? 0 : 1,
						max: r === l.a.NPS ? 10 : 7,
						question: n,
						score: s,
						...p(o, t)
					}
				}),
				f = ({
					action: e,
					experimentName: t,
					question: n,
					text: s,
					type: r
				}) => o => ({
					source: "survey",
					action: e,
					noun: "freeform_text",
					...u.defaults(o),
					survey: {
						question: n,
						type: b(r),
						text: s,
						...p(o, t)
					}
				});
			var v = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/experiments/index.ts"),
				O = n("./src/reddit/selectors/user.ts");
			const y = () => {
					const e = Object(i.d)(),
						[t, n] = Object(a.useState)(null),
						s = Object(v.a)(),
						r = Object(i.e)(O.g),
						d = Object(i.e)(O.rb),
						u = Object(i.e)(C.a, o.a),
						p = Object(i.e)(m.c),
						b = Object(i.e)(m.a),
						g = Object(i.e)(m.b),
						f = Object(i.e)(m.d),
						x = Object(a.useMemo)(() => {
							const e = Object(l.g)(),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u]),
						y = Object(a.useCallback)(e => {
							const s = Object(l.f)({
								triggerName: e,
								surveyExperimentVariants: x,
								samplingId: r || d,
								isDemoEnabled: p,
								activeDemoTrigger: b,
								demoTriggerThreshold: g,
								isSampleFactorEnabled: f
							});
							if (p) return void(s && n(s));
							if (!s || s === t) return;
							const o = x[s.experiment_name];
							(null == o ? void 0 : o.variant) && s.variants[o.variant] && setTimeout(() => n(s), 500)
						}, [t, x, r, d, f, p, b, g]);
					return Object(a.useEffect)(() => {
						const e = Object(l.d)(),
							t = e.subscribe(y);
						return () => e.unsubscribe(t)
					}, [y]), Object(a.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(l.i)(t, n), e(Object(c.H)({
							surveyLastSeenTime: n
						}, !1)), s(h(t.experiment_name, "display"))
					}, [t, e, s]), {
						activeSurvey: t,
						setActiveSurvey: n
					}
				},
				E = ({
					activeStepNum: e,
					activeSurvey: t,
					isFollowUp: n,
					textResponse: s,
					setTextResponse: r,
					setIsSurveyDismissed: o
				}) => {
					(({
						isFollowUp: e,
						textResponse: t
					}) => {
						const n = Object(a.useCallback)(n => {
							if (e && t.length) return n.preventDefault(), n.returnValue = "sure?", "sure?"
						}, [e, t]);
						Object(a.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: s
					});
					const [i, c] = Object(a.useState)(!1), d = Object(v.a)(), l = t.experiment_name, m = t.steps[e], u = null == m ? void 0 : m.type, p = null == m ? void 0 : m.question, b = Object(a.useCallback)(() => {
						e >= 0 ? c(!0) : (o(!0), d(h(t.experiment_name, "dismiss")))
					}, [e, t, d, o]), x = Object(a.useCallback)(() => {
						r(""), o(!0), d(n ? f({
							experimentName: l,
							action: "dismiss",
							type: u,
							question: p
						}) : g({
							experimentName: l,
							action: "dismiss",
							type: u,
							question: p
						}))
					}, [l, n, p, d, o, r, u]);
					return {
						isLeavingModalShowing: i,
						onClose: b,
						onLeaveCancel: Object(a.useCallback)(() => c(!1), []),
						onLeaveConfirm: x
					}
				},
				P = ({
					activeSurvey: e,
					selectedNumber: t,
					setIsSurveyDismissed: n,
					setSelectedNumber: s,
					setTextResponse: r,
					textResponse: o
				}) => {
					const [i, c] = Object(a.useState)(-1), [d, m] = Object(a.useState)(0), [u, p] = Object(a.useState)(!1), b = Object(v.a)(), x = Object(a.useCallback)(() => {
						const a = e.experiment_name,
							v = e.steps[i],
							x = null == v ? void 0 : v.type,
							C = null == v ? void 0 : v.question,
							O = null == v ? void 0 : v.follow_up_question,
							y = e.steps[i + 1],
							E = null == y ? void 0 : y.type,
							P = null == y ? void 0 : y.question;
						if (m(d + 1), -1 === i) return b(h(a, "agree")), c(0), void b(g({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						}));
						b(u ? f({
							experimentName: a,
							action: "submit",
							type: x,
							text: o,
							question: O
						}) : g({
							experimentName: a,
							action: "submit",
							question: C,
							type: x,
							score: t && t + (x === l.a.NPS ? 0 : 1)
						})), s(void 0), r(""), u || !O ? (p(!1), i + 1 >= e.steps.length ? n(!0) : (c(i + 1), b(g({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						})))) : (p(!0), b(f({
							experimentName: a,
							action: "display",
							type: x,
							question: O
						})))
					}, [i, e, u, o, t, b, n, s, r, d]);
					return {
						activeStepNum: i,
						isFollowUp: u,
						onStepComplete: x,
						uiStep: d,
						setActiveStepNum: c,
						setUIStep: m,
						setIsFollowUp: p
					}
				},
				j = ({
					isSurveyDismissed: e,
					setIsSurveyDismissed: t,
					setActiveStepNum: n,
					setActiveSurvey: r,
					setUIStep: o,
					setIsFollowUp: c,
					shouldMount: l,
					uiStep: m
				}) => {
					const u = Object(i.d)();
					Object(a.useEffect)(() => {
						e && !l && setTimeout(() => {
							n(-1), o(0), c(!1), r(null), m > 1 && u(Object(d.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: x.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [u, e, l, m, t, n, r, o, c])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				return e ? o.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				m = n("./src/reddit/models/StructuredStyles/index.ts"),
				u = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
			class x extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(g.e, {
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
				if (Object(p.i)(e) || Object(h.jb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.F)(e, n);
				if (!s) return;
				if (Object(h.ib)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.x)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.ub)(e).nightmode
			}, (e, t) => {
				if (!Object(h.ub)(e).hideNSFW) return !0;
				const n = v(e, t);
				if (n) {
					const t = Object(b.A)(e, {
						subredditName: n
					});
					return !(!t || !t.isNSFW)
				}
				const s = Object(l.d)(e, t);
				return !!s && s.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, o, a, i, c, d, l, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					},
					h = o && o.length && !Object(f.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : g.c;
				if (t && n && r) {
					const e = Object(m.h)(n, r);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(u.i)(e, b)
					}
				}
				if (a) {
					const e = Object(m.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(u.h)(e, b) : Object(u.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(x);
			t.b = C;
			const O = Object(d.t)()(C)
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
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/components/BlankPost/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends r.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? r.a.createElement(a.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : r.a.createElement(o.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				m = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				u = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
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
					currentUser: d.i,
					isNightMode: d.V,
					isPresenceUserPrefEnabled: d.hb,
					shouldHideNSFW: d.B
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, d ? o.a.createElement(m.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(u.a, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(l.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(o || (o = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
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
				return t => r.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => r.a.createElement(e, o({
					apiContext: n,
					gqlContext: s
				}, t)))
			}
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
				r = n.n(s),
				o = n("./src/reddit/constants/featureThrottling.ts"),
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
				c = Object.keys(o.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class d extends r.a.Component {
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
							const t = Object.keys(o.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return r.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(o.a).reduce((e, t) => (e[t] = {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : r.a.createElement(a.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				o = n.n(r);
			t.a = s.a.span("invisibleText", o.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Link/index.m.less"),
				o = n.n(r);
			t.a = s.a.a("link", o.a)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(u),
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
			const g = Object(o.b)(() => Object(a.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(m.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}));
			t.a = g(e => r.a.createElement("div", {
				className: Object(i.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => r.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, r.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : r.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && r.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = r.a.memo(e => {
				const t = e.size || a.c.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(o.a)(c.a.toggleSwitch, e.className, c.a[t], {
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
					onClick: () => !e.disabled && e.onToggle && e.onToggle()
				}, r.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			})
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
				r = n("./src/reddit/controls/Typography/index.m.less"),
				o = n.n(r);
			s.a.h1("heading1", o.a), s.a.h2("heading2", o.a), s.a.h3("heading3", o.a), s.a.h4("heading4", o.a);
			const a = s.a.h5("heading5", o.a),
				i = (s.a.h6("heading6", o.a), s.a.p("body1", o.a), s.a.p("body2", o.a)),
				c = (s.a.p("actionFont", o.a), s.a.p("metadata", o.a));
			s.a.p("metadata3", o.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return u
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t, n) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: r.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				v = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.cb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t, n, a) => {
					let i = Object(m.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return a && (i = Object(d.a)(i)), Object(o.a)(e, {
						data: n,
						endpoint: i,
						method: r.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				y = (e, t, n, s) => Object(o.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.cb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/gold/productCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/graphql/operations/ClaimAwardOffer.json"),
				r = n("./src/graphql/operations/FetchSpecialEvents.json"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = n("./src/reddit/endpoints/gold/purchase.ts");
			const u = e => ({
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
				p = e => e.map(u),
				b = e => e.map(e => {
					return {
						...u(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				h = e => e.map(e => ({
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
					const s = "/api/v2/gold/purchase_package_details",
						r = n && "undefined" != typeof window ? `${window.location.origin}${s}` : `${e.apiUrl}${s}`,
						i = Object(l.a)(r);
					return Object(a.a)(Object(c.a)(e, [d.a]), {
						method: o.cb.GET,
						endpoint: i,
						data: {
							correlation_id: t
						}
					}).then(m.c).then(v)
				};

			function v(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: s,
					premium_packages: r
				} = e.body, o = {
					activeSaleConfig: g(t),
					coinPackages: p(n),
					dealCoinPackages: b(s),
					premiumPackages: h(r)
				};
				return {
					...e,
					body: o
				}
			}
			const x = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const s = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					r = Object(l.a)(s);
				return Object(a.a)(Object(c.a)(e, [d.a]), {
					method: o.cb.GET,
					endpoint: r,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(m.c).then(C)
			};

			function C(e) {
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
			const O = e => Object(i.a)(e, {
					...r
				}),
				y = e => Object(i.a)(e, {
					...s,
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
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/helpers/genericServerError/index.ts"),
				d = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const l = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(d.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(c.a)()
				},
				m = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: c,
					pennies: d,
					rememberCard: m,
					token: u,
					savedCardId: p
				}) => {
					const b = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: c,
							pennies: d,
							remember_card: m,
							card_id: p,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(i.a)(h);
					return Object(r.a)(Object(o.a)(t, [a.a]), {
						method: s.cb.POST,
						endpoint: g,
						data: b
					}).then(l)
				}, u = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: c,
					isOldReddit: d,
					offerContext: m,
					pennies: u,
					rememberCard: p,
					thingId: b,
					token: h,
					savedCardId: g
				}) => {
					const {
						gildType: f,
						isAnonymous: v,
						message: x
					} = c, C = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: m,
						pennies: u,
						thing_id: b,
						gild_type: f,
						message: x ? x.trim() : "",
						is_anonymous: v,
						remember_card: p,
						card_id: g,
						correlation_id: n
					}, O = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, y = d ? O : Object(i.a)(O);
					return Object(r.a)(Object(o.a)(t, [a.a]), {
						method: s.cb.POST,
						endpoint: y,
						data: C
					}).then(l)
				}, p = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: c,
					pennies: d,
					rememberCard: m,
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
						pennies: d,
						remember_card: m,
						card_id: b,
						correlation_id: t
					}, x = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, C = c ? x : Object(i.a)(x);
					return Object(r.a)(Object(o.a)(e, [a.a]), {
						method: s.cb.POST,
						endpoint: C,
						data: v
					}).then(l)
				}, b = async ({
					context: e,
					correlationId: t,
					pennies: n,
					token: c
				}) => {
					const d = {
							token: c.id,
							pennies: n,
							correlation_id: t
						},
						m = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(i.a)(m);
					return Object(r.a)(Object(o.a)(e, [a.a]), {
						method: s.cb.POST,
						endpoint: u,
						data: d
					}).then(l)
				}, h = async (e, t) => {
					const n = {
						token: t.id
					};
					return Object(r.a)(Object(o.a)(e, [a.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/update_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(d.a)(e)
					})
				}, g = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(r.a)(Object(o.a)(e, [a.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(d.a)(e)
					})
				}, f = async e => Object(r.a)(Object(o.a)(e, [a.a]), {
					method: s.cb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(d.a)(e)
				})
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				r = n("./src/graphql/operations/UpdateNotificationPreferences.json"),
				o = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(o.a)(e, {
					...s,
					variables: t
				}),
				i = (e, t) => Object(o.a)(e, {
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
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.h.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(r.a)(Object(o.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.cb.POST,
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
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/thumbnails.ts"),
				r = n("./src/reddit/models/Media/index.ts");

			function o(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(r.E)(e.media))
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/user.ts");

			function l(e) {
				return Object(i.O)(e, {}) === o.g.Large && !Object(d.I)(e) && !Object(c.d)(e)
			}

			function m(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: r.Nb
				})
			}

			function u(e) {
				switch (e) {
					case r.Ob.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.Ob.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, a, i, c, d, l, m;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, m = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (o = s.a.SubredditBlockedForLegalReason) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: m,
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
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
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
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				l = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				m = n.n(l);
			const u = i.a.button("button", m.a),
				p = e => t => r.a.createElement("div", {
					className: t.className
				}, e);

			function b(e, t, n) {
				return g(e, t, !0, {
					...n
				})
			}

			function h(e, t, n) {
				return g(e, t, !1, {
					...n
				})
			}

			function g(e, t, n, s) {
				const i = e,
					l = "function" == typeof t ? t : p(t),
					{
						meta: u
					} = s,
					b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(a.a)(m.a.icon, {
							[m.a.isLit]: e
						})
					}), r.a.createElement(l, {
						className: m.a.body
					}), u && r.a.createElement("div", {
						className: m.a.metaContainer
					}, u));
				return n ? e => {
					const t = Object(c.a)();
					return r.a.createElement("a", {
						"data-redditstyle": !0,
						className: Object(a.a)(e.className, m.a.basicLink),
						href: e.href,
						onClick: e.onClick,
						target: "_blank",
						rel: "noopener noreferrer"
					}, b(e.isLit), !t && r.a.createElement(d.a, {
						className: m.a.outboundLink
					}))
				} : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, m.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, b(e.isLit)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, m.a.button),
					onClick: e.onClick
				}, b(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "dfp",
					action: "request",
					noun: "ad",
					...r.defaults(e),
					subreddit: r.subreddit(e)
				}),
				a = () => e => ({
					source: "dfp",
					action: "define",
					noun: "ad",
					...r.defaults(e),
					subreddit: r.subreddit(e)
				}),
				i = (e, t) => n => {
					const o = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						a = -1 !== o.indexOf(s.c.ABOVE_THE_FOLD) ? s.c.ABOVE_THE_FOLD : s.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + o);
					let c, d;
					if (i && (c = s.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = s.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = `${e.offsetWidth}x${e.offsetHeight}`
					}
					const l = t ? "aax" : void 0;
					return {
						source: "post",
						action: "view",
						noun: "programmatic_ad",
						...r.defaults(n),
						subreddit: r.subreddit(n),
						programmatic: {
							adUnit: d ? `DESKTOP ${d} ${a}` : `DESKTOP ${a}`,
							count: 1,
							partner: l,
							type: c
						}
					}
				},
				c = (e, t, n) => o => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...r.defaults(o),
					subreddit: r.subreddit(o),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: s.f.SWITCH_HOUSE_AD
					}
				})
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
				r = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(r.m)(e);
					return {
						actionInfo: Object(o.actionInfo)(e),
						post: t && Object(o.post)(e, t) || null,
						profile: Object(o.profile)(e),
						screen: Object(o.screen)(e),
						subreddit: Object(o.subreddit)(e)
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
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				a = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: r.user(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					actionInfo: r.actionInfo(t),
					app: r.app(t),
					referrer: r.referrer(t),
					session: r.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = e => {
					const t = Object(i.m)(e);
					return {
						source: "comment_composer",
						action: r.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
					}
				},
				l = (e, t, n, r) => {
					const o = {
							commentId: r,
							commentsPageKey: n
						},
						i = r && Object(a.j)(e, o) || 0;
					return Object(s.a)({
						noun: "comment",
						...d(e),
						comment: r ? Object(c.comment)(e, r) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						}
					})
				},
				m = (e, t, n, r) => {
					const o = d(e);
					return Object(s.a)({
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
							parentId: r,
							postId: n
						}
					})
				},
				u = e => Object(s.a)({
					noun: "cancel",
					...d(e)
				}),
				p = (e, t) => {
					t === o.c.replyToPost && Object(s.a)({
						noun: "input",
						...d(e)
					})
				},
				b = (e, t) => Object(s.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				h = e => Object(s.a)({
					noun: "edit",
					...d(e)
				}),
				g = e => Object(s.a)({
					noun: "save_edit",
					...d(e)
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
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
				return m
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(s.defaults)(t),
					customFeed: Object(s.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...r(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...r(e, t),
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => ({
					...r(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
					...r(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				m = e => t => ({
					...r(e, t),
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
				return m
			})), n.d(t, "e", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = (e, t = {}) => ({
					...Object(r.h)(e, t),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: o.profile(e),
					subreddit: o.subreddit(e)
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
				m = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				u = e => t => ({
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			}));
			var s, r, o, a, i = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.DisableNotificationType = "disable_notification_type"
			}(r || (r = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {}));
			const l = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...c.defaults(r),
					action: i.c.VIEW,
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
				m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => {
					Object(d.a)({
						...c.defaults(r),
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
						}
					})
				},
				u = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...c.defaults(r),
					action: i.c.CLICK,
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
					badgeCount: e,
					tab: t
				}) => n => ({
					...c.defaults(n),
					action: i.c.VIEW,
					noun: "inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				b = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...c.defaults(t),
					action: i.c.VIEW,
					noun: "mini_inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				h = ({
					badgeCount: e
				}) => t => ({
					...c.defaults(t),
					action: i.c.CLICK,
					noun: "inbox",
					source: a.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				g = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...c.defaults(r),
					action: i.c.CLICK,
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
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...c.defaults(r),
					action: i.c.VIEW,
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
				v = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: r
				}) => o => ({
					...c.defaults(o),
					action: i.c.CLICK,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: r
					},
					actionInfo: {
						...c.actionInfo(o),
						type: e
					}
				}),
				x = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: r
				}) => o => ({
					...c.defaults(o),
					action: i.c.UNDO,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: r
					},
					actionInfo: {
						...c.actionInfo(o),
						type: e
					}
				}),
				C = e => t => ({
					...c.defaults(t),
					action: i.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...c.actionInfo(t),
						pageType: e
					}
				}),
				O = () => e => ({
					...c.defaults(e),
					action: i.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...c.actionInfo(e),
						pageType: o.MiniInbox
					}
				}),
				y = () => e => ({
					...c.defaults(e),
					action: i.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				E = ({
					isMiniInbox: e
				}) => t => ({
					...c.defaults(t),
					action: i.c.CLICK,
					noun: "mark_all_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...c.actionInfo(t),
						pageType: o.MiniInbox
					} : {}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...r(t)
				}),
				a = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				o = (e = r) => t => ({
					...s.defaults(t),
					action: "click",
					noun: "exit",
					onboarding: {
						processNotes: "exited",
						numberSubredditsSelected: e.length,
						subredditsSelected: e
					},
					source: "onboarding"
				}),
				a = () => e => ({
					...s.defaults(e),
					action: "dismiss",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				i = () => e => ({
					...s.defaults(e),
					action: "view",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				c = e => t => ({
					...s.defaults(t),
					action: "dismiss",
					noun: e,
					source: "onboarding"
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
				return m
			})), n.d(t, "j", (function() {
				return u
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
				return x
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.post(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.comment(n, t)
				}),
				i = r("show_panel"),
				c = r("esc_close"),
				d = e => o("enter_open_post", e),
				l = e => a("enter_comment_collapse", e),
				m = e => o("j_next", e),
				u = e => a("j_next", e),
				p = e => o("k_previous", e),
				b = e => a("k_previous", e),
				h = e => o("n_next", e),
				g = e => o("p_previous", e),
				f = e => o("s_save", e),
				v = e => a("s_save", e),
				x = e => o("h_hide", e),
				C = e => o("x_expando", e),
				O = e => o("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => o("z_downvote", e),
				P = e => a("z_downvote", e),
				j = r("c_create_post"),
				S = e => o("l_go_to_link", e),
				_ = e => a("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				i = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(r.a)(t) && Object.assign(n, a), n
				},
				c = e => ({
					...o.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				d = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.defaults(e),
					...a
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = (e, t = !1) => {
				let n = "/wiki";
				return e.subredditName && (n = t ? `/r/${e.subredditName}/about/wiki` : `/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(d);
			const m = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return r.a.createElement("i", {
					className: Object(o.a)(e.className, Object(c.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || a.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = m
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				c = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return r.a.createElement("i", {
					className: `${Object(a.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/All/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z"
			}))
		},
		"./src/reddit/icons/svgs/Browse/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), r.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), r.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, r.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), r.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), r.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), r.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), r.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), r.a.createElement("path", {
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
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), r.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/Favorite/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
			})))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), r.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), r.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), r.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Home/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(o.a)(({
				className: e,
				isBadged: t,
				...n
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
			}), r.a.createElement("path", {
				d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
			}), r.a.createElement("circle", {
				cx: "16",
				cy: "4",
				r: "4",
				fill: t ? Object(i.a)(n).body : "none"
			}), r.a.createElement("circle", {
				cx: "16",
				cy: "4",
				r: "3",
				fill: t ? a.b.orangered : "none"
			})))
		},
		"./src/reddit/icons/svgs/KarmaGray/index.m.less": function(e, t, n) {
			e.exports = {
				karma: "_2HCuqd3NYACKYaSTmrITE3"
			}
		},
		"./src/reddit/icons/svgs/KarmaGray/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.karma, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Logout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
			})))
		},
		"./src/reddit/icons/svgs/MarkAsRead/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				clipRule: "evenodd",
				d: "M14.03 9.53l-5 5a.748.748 0 01-1.06 0l-2-2a.75.75 0 111.06-1.061l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.061m4.5-3.378l-8-5a.999.999 0 00-1.06 0l-8 5A.999.999 0 001 7v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7a1 1 0 00-.47-.848",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/ModMode/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
			}))
		},
		"./src/reddit/icons/svgs/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
			}), r.a.createElement("path", {
				d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
			}))
		},
		"./src/reddit/icons/svgs/MyProfile/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
			})))
		},
		"./src/reddit/icons/svgs/Night/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
			})))
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 12.988c0 .554.449 1.002 1 1.002a1 1 0 110 2H3a1 1 0 110-2c.551 0 1-.448 1-1l.01-5.002A5.996 5.996 0 0110 2a5.997 5.997 0 015.99 5.99l.01 4.998zM8 16.99h4c0 1.103-.897 2-2 2s-2-.897-2-2z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Pinmenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
			}), r.a.createElement("path", {
				d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
			}))
		},
		"./src/reddit/icons/svgs/Popular/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("polygon", {
				points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const o = e => r.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				a = e => r.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				i = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), r.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), r.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), r.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: o.b.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SnooNoEyes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
			})))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, r.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#orangeYellowGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "orangeYellowGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#EC0623"
				}), r.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(o.a)(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, r.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), r.a.createElement("circle", {
				fill: a.b.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), r.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), r.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), r.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = (n("./src/polyfill.ts"), n("./src/lib/performanceTimings/index.tsx")),
				o = n("./node_modules/@r/google-tag-manager/compiled.js"),
				a = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				m = n.n(l),
				u = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./node_modules/redux-thunk/es/index.js"),
				b = n("./node_modules/request-idle-callback/index.js"),
				h = n("./src/lib/browser/isIncognito.ts"),
				g = n("./src/lib/constants/index.ts"),
				f = n("./src/lib/extractQueryParams/index.ts"),
				v = n("./src/lib/filterQueryParams/index.ts"),
				x = n("./src/lib/getParsedUserAgent/index.ts"),
				C = n("./src/lib/initializeClient/index.tsx"),
				O = n("./src/lib/loadableAction/index.ts"),
				y = n("./src/lib/matchRoute/index.ts"),
				E = n("./src/lib/performance.js"),
				P = n("./src/lib/reCaptchaEnterprise/index.ts"),
				j = n("./src/lib/safeJSONParse/index.ts"),
				S = n("./src/lib/serviceWorker/index.ts"),
				_ = n("./src/reduxMiddleware/apiContext.ts"),
				w = n("./src/reduxMiddleware/gqlContext.ts"),
				k = n("./src/telemetry/index.ts"),
				I = n("./src/telemetry/models/Timer.ts"),
				N = n("./src/reddit/actions/apiRequestHeaders.ts"),
				M = n("./src/reddit/actions/chat/toggle.ts"),
				T = n("./src/reddit/actions/chat/unreadCount.ts"),
				A = n("./src/reddit/actions/emailCollection/index.ts"),
				R = n("./src/reddit/actions/emailVerification.ts"),
				L = n("./src/reddit/actions/googleOneTap/index.ts"),
				F = n("./src/reddit/actions/media.ts"),
				D = n("./src/lib/loadWithRetries/index.ts"),
				U = n("./src/reddit/actions/notifications/state.ts"),
				G = n("./src/reddit/actions/nps.ts"),
				B = n("./src/reddit/actions/platform.ts"),
				H = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				q = n("./src/reddit/actions/session.ts"),
				W = n("./src/reddit/actions/survey/index.ts"),
				V = n("./src/reddit/actions/theme.ts"),
				Q = n("./src/reddit/actions/toaster.ts"),
				z = n("./src/reddit/actions/users.ts"),
				K = n("./src/reddit/components/Root/index.tsx"),
				Z = n("./node_modules/react-redux/es/index.js"),
				J = n("./node_modules/reselect/es/index.js"),
				Y = n("./src/reddit/constants/localStorage.ts"),
				X = n("./src/reddit/selectors/user.ts"),
				$ = n("./node_modules/lodash/throttle.js"),
				ee = n.n($),
				te = n("./src/reddit/helpers/localStorage/index.ts");
			const ne = 1e3;
			class se extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = ee()(() => Object(te.jb)(this.props.storageKey, this.props.value), ne)
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
			se.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const re = Object(J.a)(X.J, e => ({
				storageKey: Y.a.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var oe = Object(Z.b)(re)(se);
			var ae = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(oe, null)),
				ie = n("./src/reddit/constants/headers.ts"),
				ce = n("./src/reddit/constants/history.ts"),
				de = n("./src/reddit/constants/jsapiEvents.ts"),
				le = n("./src/reddit/constants/parameters.ts"),
				me = n("./src/reddit/constants/screenWidths.ts"),
				ue = n("./src/reddit/contexts/AdminEvents.ts"),
				pe = n("./src/reddit/contexts/ApiContext.tsx"),
				be = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				he = n("./node_modules/brcast/dist/brcast.es.js"),
				ge = n("./src/telemetry/helpers/sendEvent.ts"),
				fe = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var ve = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(he.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(fe.b)(s) || Object(X.G)(s)) && (e = !0, Object(ge.c)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(fe.b)(a)) {
									const n = Object(X.G)(a);
									e && !n ? (e = !1, Object(ge.c)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(ge.c)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(he.a)([]),
					middleware: () => e => t => e(t)
				}),
				xe = n("./node_modules/lodash/debounce.js"),
				Ce = n.n(xe),
				Oe = n("./src/lib/domUtils/index.ts");
			const ye = 30 * g.db;
			let Ee = Date.now();
			const Pe = () => {
					Ee = Date.now()
				},
				je = !!Object(Oe.f)() && {
					passive: !0
				};
			window.addEventListener("click", Pe, !1), window.addEventListener("wheel", Ce()(Pe, 250), je), window.addEventListener("mousemove", Ce()(Pe, 250), je), window.addEventListener("keydown", Ce()(Pe, 250), je);
			var Se = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Ee >= ye ? (e.dispatch(q.h()), Pe()) : Pe()
					})), e => t => e(t)
				},
				_e = n("./node_modules/lodash/pick.js"),
				we = n.n(_e),
				ke = n("./src/reddit/actions/header.ts"),
				Ie = n("./src/reddit/actions/preferences.ts"),
				Ne = n("./src/reddit/constants/preferences.ts"),
				Me = n("./src/reddit/helpers/cookies/index.ts");
			const Te = new Set([Ie.f, Ie.i, V.b, Ie.c, Ie.o, ke.d, ke.e, Ie.r]);
			var Ae = e => t => n => {
					const s = t(n);
					if (Te.has(n.type)) {
						const t = e.getState().user,
							n = we()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Ne.b, Ne.d, Ne.e]);
						Object(Me.a)({
							prefs: n
						})
					}
					return s
				},
				Re = n("./src/lib/fastdom/index.ts"),
				Le = n("./src/reddit/actions/tabBadging.ts"),
				Fe = n("./src/reddit/selectors/appBadges.ts"),
				De = n("./src/reddit/selectors/chat.ts"),
				Ue = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				Ge = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Be = n("./src/reddit/contexts/PageLayer/index.tsx"),
				He = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				qe = n("./src/reddit/selectors/platform.ts");
			const We = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Ve = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(qe.p)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = We.has(r), a = Object(Be.k)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Qe(e), d = n && n.isRobotIndexable, l = s === g.Db.COMMENTS || s === g.Db.COLLECTION_COMMENTS, m = !(!n || !n.urlParams.partialCommentId), u = s === g.Db.SEARCH_RESULTS || s === g.Db.SUBREDDIT_LEADERBOARD || l && m;
					return i || o || c || (!1 === d || u) ? u ? "noindex" : "noindex,nofollow" : null
				},
				Qe = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(X.e)(e, s);
						n = !!Object(He.a)(t, !1, s)
					}
					return n
				};
			var ze = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === B.e) {
						const t = e.getState(),
							s = Object(X.I)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Ge.d)(e),
								s = Object(Ue.a)(e);
							let r = 0;
							if (n) r = Object(Fe.i)(e);
							else if (s) r = Object(Fe.j)(e);
							else {
								const t = Object(X.E)(e) || 0;
								r = Object(De.a)(e) + t
							}
							Object(Le.c)(r, t)
						})(t, r.title) : Re.a.write(() => {
							document.title = r.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Ve(e),
										{
											head: r
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
								}
							})(t, document)
						})
					}
					return s
				} : () => e => t => e(t),
				Ke = n("./src/reddit/helpers/survey/index.ts");
			var Ze = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Ke.b).filter(t => t === e).length)(t.type) && Object(te.I)(Ke.b[t.type]), e(t)) : () => e => t => e(t);
			const Je = 5 * g.db;
			var Ye = e => {
					const t = ee()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(q.g())
					}, Je);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								o = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > o && t && t()
						},
						o = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								o = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(o * e.expiresIn * 1e3), Math.floor(o * r));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && o(a.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== q.a && t.type !== q.b && t.type !== q.c && t.type !== q.e || o(t.payload), t.type === q.d && (clearTimeout(n), n = null), e(t))
				},
				Xe = n("./src/reddit/singleton/tracing/index.ts");
			var $e = e => e => t => {
					const n = () => e(t);
					return Xe.b.isEnabled ? Xe.b.recordLocalSpan(t.type, n) : e(t)
				},
				et = n("./src/reddit/actions/frontpage/constants.ts"),
				tt = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				nt = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				st = n("./src/reddit/actions/pages/profilePosts.ts"),
				rt = n("./src/reddit/actions/pages/search.ts"),
				ot = n("./src/reddit/actions/pages/subreddit.ts"),
				at = n("./src/reddit/actions/search.ts"),
				it = n("./src/reddit/actions/subreddit.ts"),
				ct = n("./src/reddit/actions/tracking.ts"),
				dt = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				lt = n("./src/reddit/helpers/history/index.ts"),
				mt = n("./src/reddit/helpers/trackers/commentList.ts"),
				ut = n("./src/reddit/helpers/trackers/postList.ts"),
				pt = n("./src/reddit/helpers/trackers/screenview.ts"),
				bt = n("./src/reddit/selectors/subreddit.ts"),
				ht = n("./src/reddit/helpers/routeKey/index.ts");
			var gt = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(ct.c({
							routeKey: t
						}))
					};
					if (n.type === B.a) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(bt.F)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", {
							...we()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(ht.b)(c, s, Object(dt.a)(s));
							if (e && k.c.has(e)) {
								const t = k.c.end(e);
								!Object(qe.h)(s) && Object(lt.b)(ce.a.IsOverlay) || Object(pt.k)(c, s, I.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(dt.a)(s, d),
							m = Object(ht.b)(d, s, l);
						if (!m) return t(n);
						k.c.start(m)
					}
					const r = t(n);
					switch (n.type) {
						case et.b:
						case nt.b:
						case nt.e:
						case st.PROFILE_POSTS_LOADED:
						case tt.e:
						case ot.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case rt.SEARCH_RESULTS_RECEIVED: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case et.f:
						case it.i:
						case st.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							ut.j(o, t);
							break
						}
						case tt.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							mt.a(o, t);
							break
						}
						case at.c: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				ft = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				vt = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				xt = n("./src/reddit/selectors/telemetry.ts");
			const Ct = e => t => ({
				...xt.defaults(t),
				action: "leave",
				actionInfo: xt.actionInfo(t, {
					reason: e
				}),
				noun: "app",
				source: "global"
			});
			let Ot = null;
			const yt = () => {
				Ot && window.clearTimeout(Ot), Ot = null
			};
			var Et = e => {
					Ot = window.setTimeout(() => {
						yt(), Object(k.a)((e => t => ({
							...xt.defaults(t),
							action: "view",
							noun: "heartbeat",
							source: "global",
							timer: {
								type: I.TimerType.GoodVisit,
								millis: e
							}
						}))(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", yt)
				},
				Pt = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				jt = n("./src/lib/cookieConsent/index.ts"),
				St = n("./src/lib/permanentCookieOptions.ts"),
				_t = n("./src/reddit/constants/cookie.ts");
			const wt = (e, t) => {
				if (!e) return;
				const n = (d.a.get(_t.h) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: _t.h,
							value: s,
							cookieOptions: Object(St.a)(),
							cookieContext: t
						};
					Object(jt.c)(r)
				}
			};
			var kt = n("./src/reddit/layout/page/Listing/index.tsx"),
				It = n("./src/reddit/models/Toast/index.ts"),
				Nt = n("./src/reddit/reducers/index.ts"),
				Mt = n("./src/reddit/routes/index.ts"),
				Tt = n("./src/reddit/selectors/experiments/index.ts"),
				At = n("./src/reddit/constants/experiments.ts"),
				Rt = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Lt = n("./src/reddit/selectors/experiments/euEssentialCookies.ts"),
				Ft = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Dt = n("./src/reddit/selectors/experiments/htmlResponseStreaming.ts");
			const Ut = {
					displayDelay: 15,
					displayOnRoutes: [g.Db.SUBREDDIT, g.Db.COMMENTS],
					experimentName: At.Ub,
					experimentVariant: At.Xb.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Gt = e => {
					const {
						base_url: t
					} = Object(xt.requestWithParams)(e), n = Object(qe.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...r && {
							s: r
						},
						...s && {
							p: s
						}
					}
				},
				Bt = e => {
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(Ut, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(Ut)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(Ut, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(Ut, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(Rt.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: Rt.a
						}) === t)(Ut, e)) return {
						displayDelay: Ut.displayDelay,
						externalVars: Gt(e)
					}
				};
			var Ht = n("./src/reddit/selectors/meta.ts");
			var qt = n("./src/reddit/singleton/EventSystem.ts"),
				Wt = n("./src/lib/initializeClient/installReducer.ts"),
				Vt = n("./src/reddit/reducers/features/categories/index.ts"),
				Qt = n("./src/lib/makeActionCreator/index.ts"),
				zt = n("./src/lib/sentry/index.ts"),
				Kt = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Zt = Object(Qt.a)(Kt.C),
				Jt = () => {
					return Object(te.r)(Y.a.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var Yt = n("./src/reddit/actions/global/constants.ts");
			Object(Wt.a)({
				features: {
					categories: Vt.a
				}
			});
			const Xt = Object(Qt.a)(Yt.a),
				$t = e => async (t, n) => {
					t((() => async e => {
						const t = Jt();
						t && e(Zt(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || zt.c.withScope(e => {
						Object(zt.a)(e, {
							serverLogging: !1
						}), zt.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(Xt(r))
				};
			var en = n("./src/reddit/actions/login.ts");
			const tn = /account\/magic_link\/landing\/[^\/]+\/?$/;
			var nn = n("./src/reddit/actions/notificationsInbox/index.ts");
			Object(r.e)(r.b.EntryPointStart);
			const sn = Object(_.a)({
					actionDispatchers: {
						reddaidReceived: z.s,
						loidReceived: z.q,
						sessionTrackerReceived: z.x
					},
					authHeaders: {
						[ie.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: z.d,
						loidReceived: z.b,
						sessionTrackerReceived: z.k,
						userAuthenticated: q.c,
						userLoggedOut: q.d,
						userReauthenticated: q.e,
						headersReceived: N.a
					},
					onBeforeRequestFactory: Pt.a,
					statsAppName: g.l.Redesign
				}),
				rn = Object(w.a)(sn.apiContext),
				on = ve();
			let an;
			Object(C.a)({
				reducerMap: Nt.a,
				routes: Mt.a,
				apiContext: sn.apiContext,
				gqlContext: rn.gqlContext,
				appFactory: (e, t) => m.a.createElement(ue.a.Provider, {
					value: on.broadcaster
				}, m.a.createElement(pe.a.Provider, {
					value: {
						apiContext: sn.apiContext,
						gqlContext: rn.gqlContext
					}
				}, m.a.createElement(be.b, null, m.a.createElement(K.a, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(ae, null)))),
				appName: g.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = an;
						if (!n) return;
						n.dispatch(Object(B.k)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(B.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: Mt.a,
					apiContext: sn.apiContext,
					gqlContext: rn.gqlContext
				}), on.middleware, Se, sn.middleware, rn.middleware, Ye, Ae, $e, gt, ze, Ze],
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
					loading: m.a.createElement(kt.a, {
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
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(F.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							Object(S.b)("sendV2Event", Ct("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(B.g)());
					const s = Object(X.V)(n.getState());
					n.dispatch(Object(V.c)({
						nightmode: s
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(Rt.c)(e, {
							experimentEligibilitySelector: Rt.a,
							experimentName: At.v
						}) === At.B.Enabled)(n.getState())) {
						Xe.b.enableTracing(!0);
						const e = Xe.b.createTraceFromId(r);
						Xe.b.setParent(e)
					}
					n.dispatch(Object(B.h)(t));
					e.listen((e, s) => {
						const r = Object(y.a)(Object(i.e)(e), t);
						n.dispatch(Object(B.i)(e, s, r))
					});
					const o = n.getState(),
						{
							currentPage: c
						} = o.platform;
					if (c) {
						const e = [];
						Object(qe.i)(o) && e.push(le.e), e.length > 0 && n.dispatch(Object(u.c)(Object(v.a)(c.url, e)))
					}
					return ft.a.initialize(), {
						localStorageData: Object(te.s)()
					}
				},
				postRender: ({
					browserHistory: e,
					routes: t,
					serverDocumentLength: i,
					store: c,
					localStorageData: d
				}) => {
					an = c;
					e.listen((e, t) => {
						const n = c.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							o = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							a = s.subredditName,
							i = Object(bt.F)(n, a) || "",
							d = {
								inExperiment: Object(Lt.a)(n),
								country: n.meta.country
							};
						wt(i, d), qt.a.publish(de.c, o, document)
					});
					const l = c.getState(),
						m = (l.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						u = Object(bt.F)(l, m) || "",
						p = (l.subreddits.about[u] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: a.a.gtmContainerId,
						payload: {
							user: l.user.account ? l.user.account.id : l.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: m,
						advertiserCategory: p
					}), c.dispatch($t({
						localStorageData: d
					})), Object(Ft.f)(l) && Object(L.d)(l), c.dispatch(Object(L.c)()), c.dispatch((() => async (e, t) => {
						const n = t(),
							{
								sessionReferrer: s
							} = n.platform;
						s && tn.test(s) && e(Object(en.i)())
					})()), window.addEventListener("load", () => {
						const t = c.getState(),
							{
								currentPage: o
							} = t.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							d = Object(bt.F)(t, a) || "",
							l = {
								inExperiment: Object(Lt.a)(t),
								country: t.meta.country
							};
						if (wt(d, l), o && o.meta) {
							const a = o.meta.name;
							if (Object(k.b)(g.l.Redesign, {
									page: a,
									type: "rum"
								}), Object(x.c)(t.meta.userAgent) && window.innerWidth > me.b) {
								const e = Object(r.f)(i);
								E.a && E.a.timing && Xe.b.isEnabled && (Xe.b.recordPerformanceTimings(`${a}_time_to_first_byte`, E.a.timing.fetchStart, E.a.timing.responseStart), Xe.b.recordPerformanceTimings(`${a}_time_to_interactive`, E.a.timing.fetchStart, E.a.timing.domInteractive));
								const n = [];
								let s = !0;
								if (Object(qe.g)(t)) {
									const e = Object(vt.a)(t);
									n.push(Object(vt.c)(e))
								}
								const o = Object(Dt.a)(t);
								o && (n.push(o), s = !1);
								const c = {
									isLoggedIn: Object(X.J)(t),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(c, e, s)
							}
							const d = E.a.timing.domInteractive - E.a.timing.navigationStart;
							Object(pt.k)(o.routeMatch, c.getState(), I.TimerType.Initial, d, o.urlParams);
							const l = Object(f.a)(window.location.href);
							l && l.get(le.a) && history.replaceState(history.state, "", Object(v.a)(window.location.href, [le.a])), Object(j.a)(l.get(le.y)) && c.dispatch(Object(Q.f)({
								kind: It.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), l.get(le.z) && (c.dispatch(Object(R.a)(l.get(le.z))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [le.z])));
							let m = !1;
							if ((Object(lt.b)(ce.a.JustLoggedIn) || l && l.get(le.o) && Object(j.a)(l.get(le.o))) && (c.dispatch(Object(Q.f)({
									text: s.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), m = !0, Object(lt.c)(ce.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [le.o]))), Object(lt.b)(ce.a.JustLoggedOut) && (m = !0, Object(lt.c)(ce.a.JustLoggedOut)), Object(U.a)(t), !1 !== te.J()) {
								let s;
								Object(Ft.a)(t) && (s = () => {
									const {
										dispatch: t
									} = c;
									e.listen(() => t(Object(L.b)())), t(Object(L.b)())
								}), (() => Object(D.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))))().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(m, !1, s)))
							}
							if (a === g.Db.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								c.dispatch(Object(O.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							c.dispatch(Object(A.c)())
						}
						Object(X.J)(c.getState()) && (Object(Ue.a)(c.getState()) || c.dispatch(Object(T.d)()), c.dispatch(Object(M.d)())), Object(b.requestIdleCallback)(async () => {
							c.dispatch(Object(G.d)()), await Object(h.a)() && (e => Object(k.a)({
								...xt.defaults(e),
								source: "global",
								action: "view",
								noun: "empty"
							}))(c.getState());
							const t = async () => {
								const e = c.getState(),
									t = Bt(e);
								t && (await (async e => {
									return (await Object(D.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = e.listen((e, n) => {
								"POP" !== n && t()
							});
							t()
						}), document.addEventListener("visibilitychange", () => {
							const e = c.getState(),
								{
									currentPage: t
								} = e.platform;
							if ("visible" !== document.visibilityState && (te.xb(Date.now()), Object(k.a)(Ct("tab_backgrounded")(e))), (e => Object(Rt.c)(e, {
									experimentEligibilitySelector: e => !Object(Ht.d)(e),
									experimentName: At.ab
								}) === At.kb.Enabled)(e) && "visible" === document.visibilityState && t && Object(pt.k)(t.routeMatch, c.getState(), I.TimerType.Revisit, 0, t.urlParams, !0), "visible" === document.visibilityState) {
								const e = te.p(),
									t = te.q(),
									n = te.x(),
									s = te.G();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(k.a)(((e, t) => (n, s, r, o) => ({
										...xt.defaults(n),
										action: "refocus",
										actionInfo: {
											reason: xt.actionInfo(n, {
												reason: e
											}).reason,
											pageType: t
										},
										noun: "ad",
										source: "post",
										post: xt.post(n, r),
										adClick: {
											landingPageDuration: s
										},
										adMetadata: {
											impressionId: o
										}
									}))("tab_backgrounded", n)(c.getState(), r, e, t))
								}(s || e || n || t) && (te.Q(), te.U(), te.S(), te.R())
							}
						}), Object(Ht.g)(c.getState()) && Et(c.getState), c.dispatch(Object(W.j)())
					}), window.history.scrollRestoration = "manual", qt.a.attachStore(c), c.dispatch(Object(H.b)(P.a.PageLoad)), Object(Ge.e)(c.getState()) && c.dispatch(Object(nn.e)())
				},
				raven: {
					tags: {
						project: g.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1,
				perfExperimentNameSelector: e => Object(Tt.e)(e.getState())
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				m = n("./src/reddit/layout/page/Listing/Content.m.less"),
				u = n.n(m);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.t)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				g = Object(o.b)(h),
				f = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: s,
					isCollectionLayout: o,
					isEditing: a,
					layout: i,
					pageLayer: c,
					...d
				}) => r.a.createElement("div", d);
			t.a = b(g(({
				className: e,
				...t
			}) => r.a.createElement(f, p({
				className: Object(i.a)(e, u.a.styledContent, {
					[u.a.mLargePostLayout]: t.layout === c.g.Large,
					[u.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[u.a.mClassicWidth]: t.isCollectionLayout,
					[u.a.mIsEditing]: !!t.isEditing,
					[u.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var g = Object(b.a)(h);
			var f = e => r.a.createElement(g, e),
				v = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: o,
						...i
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(u.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return r.a.createElement("div", C({
						className: Object(a.a)(x.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				y = c.a.div("Body", x.a),
				E = c.a.div("Sidebar", x.a),
				P = e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null;

			function j(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					s = e.sidebar && r.a.createElement(E, {
						className: e.isCollectionLayout ? x.a["m-collectionLayout"] : x.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = r.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? r.a.createElement(r.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? r.a.createElement(r.a.Fragment, null, s, i) : r.a.createElement(r.a.Fragment, null, i, s);
				const u = e.disableFullscreen ? `${e.maxWidth||m.a+2*d.m}px` : "100%";
				return r.a.createElement(f, {
					subredditId: e.subredditId
				}, r.a.createElement("div", {
					className: Object(a.a)(x.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, r.a.createElement(O, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), r.a.createElement("div", {
					className: x.a.innerContainer
				}, r.a.createElement("div", {
					className: x.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, P(e), r.a.createElement("div", {
					style: {
						maxWidth: u
					}
				}, e.trendingUnit), r.a.createElement(y, {
					style: {
						maxWidth: u
					}
				}, c))))
			}
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
			var s, r, o;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(s || (s = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE"
				}(r || (r = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(o || (o = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH"
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
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR"
			}
		},
		"./src/reddit/pages/InternalServerError/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/Header/Sparse.tsx"),
				d = n("./src/reddit/components/ThemeProvider/index.tsx"),
				l = n("./src/reddit/contexts/InsideOverlay.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				b = n("./src/reddit/pages/InternalServerError/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(i.c)({
				showError: u.d.showVerboseErrors
			}), v = Object(a.b)(f)(e => o.a.createElement(l.a.Provider, {
				value: !1
			}, o.a.createElement(d.b, {
				subredditName: ""
			}, o.a.createElement("div", null, o.a.createElement(c.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), o.a.createElement("div", {
				className: h.a.container
			}, o.a.createElement("div", {
				className: h.a.mainContent
			}, o.a.createElement(p.a, {
				className: h.a.dizzySnoo
			}), o.a.createElement("h3", {
				className: h.a.title
			}, g._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), o.a.createElement("div", {
				className: h.a.subTitle
			}, g._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), o.a.createElement(m.i, {
				onClick: () => window.location.reload(!0)
			}, g._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: h.a.subTitle
			}, e.error.message), o.a.createElement("pre", null, o.a.createElement("code", null, e.error.stack)))), o.a.createElement("div", {
				className: h.a.topImageContainer
			}, o.a.createElement("img", {
				className: h.a.image,
				src: `${s.a.assetPath}/img/error/star_pattern.png`
			})), o.a.createElement("div", {
				className: h.a.bottomImageContainer
			}, o.a.createElement("img", {
				className: h.a.image,
				src: `${s.a.assetPath}/img/error/half_planet.png`
			})))))))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx");
			var i = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				c = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				d = n.n(c);
			const l = a.a.wrapped(i, "BellOutline", d.a),
				m = () => o.a.createElement("div", {
					className: d.a.emptyState
				}, o.a.createElement(l, null), o.a.createElement("h1", {
					className: d.a.emptyTitle
				}, s.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), o.a.createElement("p", {
					className: d.a.emptyDescription
				}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
					hk: "27V2PG"
				})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case r.o:
						const {
							avatarMarketingEvent: s
						} = t.payload;
						return s ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: s
							} = e, r = t && new Date(t) <= new Date, o = !!n && new Date(n) < new Date, a = s || null;
							return {
								active: !!r && !o && !!a,
								assetUrls: a
							}
						}(s) : i;
					case o.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === a.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: c
			})
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.a,
					chunk: r.p.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.a,
					chunk: r.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.APPEAL
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = {
					action: o.a,
					chunk: r.p.AVATAR,
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
						name: r.Db.AVATAR
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.c,
					chunk: r.p.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.b,
					chunk: r.p.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
				}),
				c = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"],
				d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				l = {
					action: Object(o.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.COLLECTION_COMMENTS
					},
					prefetches: [r.p.FRONTPAGE, r.p.COMMENTS_PAGE, r.p.SUBREDDIT]
				},
				m = {
					...l,
					path: c
				},
				u = {
					...l,
					path: d,
					routePredicate: a.a
				},
				p = [m, u];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
				}),
				i = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"],
				c = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				l = (e, t) => ({
					action: Object(o.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: r.p.COMMENTS_PAGE,
					component: a,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [r.p.FRONTPAGE, r.p.SUBREDDIT]
				}),
				m = [l(r.Db.COMMENTS, i), l(r.Db.DUPLICATES, c), l(r.Db.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					action: o.a,
					chunk: r.p.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedModal/index.ts");
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
					action: o.a,
					chunk: r.p.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.P).map(e => a.P[e]).join("|"),
				d = "/",
				l = `/:sort(${c})?`,
				m = Object(o.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
				u = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.p.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [a.p.COMMENTS_PAGE, a.p.SUBREDDIT]
				},
				p = {
					...u,
					path: d,
					meta: {
						name: a.Db.INDEX
					}
				},
				b = {
					...u,
					path: l,
					meta: {
						name: a.Db.LISTING
					}
				},
				h = [p, b];
			t.a = h
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts"),
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
							s = await Object(o.fetchTopicPage)(n(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(o.topicFailed)())
						}
						if (!s) return;
						const r = t();
						e(Object(o.topicLoaded)({
							...s,
							key: "tagging",
							meta: r.meta
						}))
					},
					chunk: r.p.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Db.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
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
				d = Object.keys(a.L).map(e => a.L[e]).join("|"),
				l = [`/message/:pageName(${d})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				m = {
					action: i.d,
					chunk: a.p.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Db.INBOX_PAGES
					},
					path: l
				};
			t.a = m
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				r = n("./src/reddit/routes/acknowledgements/index.ts"),
				o = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/avatar/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts");
			var d = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				l = n("./src/reddit/routes/coins/index.ts"),
				m = n("./src/reddit/routes/coinsMobile/index.ts"),
				u = n("./src/reddit/routes/commentsPage/index.ts"),
				p = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var b = [];
			var h = {
					action: Object(p.a)(() => n.e(2).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				g = n("./src/lib/addQueryParams/index.ts");
			var f = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: r
						} = e;
						await t(Object(i.c)(Object(g.a)("/", r)))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.p.COMMENTS_PAGE, c.p.FRONTPAGE]
				},
				v = n("./src/reddit/routes/framedGild/index.ts"),
				x = n("./src/reddit/routes/framedModal/index.ts"),
				C = n("./src/reddit/routes/frontpage/index.ts"),
				O = n("./src/reddit/routes/geotagging/index.ts"),
				y = n("./src/reddit/routes/inbox/index.ts"),
				E = n("./src/reddit/routes/meta/index.ts"),
				P = n("./src/reddit/routes/moderationPages/index.ts"),
				j = n("./src/reddit/routes/modListing/index.ts"),
				S = n("./src/reddit/routes/modQueue/index.ts"),
				_ = n("./src/reddit/routes/multireddit/index.ts"),
				w = n("./src/reddit/routes/notificationsInbox/index.ts"),
				k = n("./src/reddit/routes/postCreation/constants.ts");
			const I = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.p.EMPTY,
				exact: !0,
				meta: {
					name: c.Db.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var N = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(k.b))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...I],
				M = n("./src/reddit/routes/postCreation/index.ts"),
				T = n("./src/reddit/routes/postDraft/index.ts"),
				A = n("./src/reddit/routes/premium/index.ts"),
				R = n("./src/reddit/routes/profileComments/index.ts"),
				L = n("./src/reddit/endpoints/me/index.ts"),
				F = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var D = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, a = await Object(L.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(F.a)(t, e)
						}
						const c = a.body.account.displayText,
							d = r ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(r)}` : `/user/${c}/`,
							l = Object(g.a)(d, o);
						await t(Object(i.c)(l))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				U = n("./src/reddit/routes/profileModSettings/index.ts"),
				G = n("./src/reddit/routes/profileOverview/index.ts"),
				B = n("./src/reddit/routes/profilePosts/index.ts"),
				H = n("./src/reddit/routes/profilePrivate/index.ts");
			var q = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(g.a)(o, r);
						await t(Object(i.c)(a))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				W = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var V = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(g.a)(o, r);
						t(Object(i.c)(a))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Db.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Q = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				z = n("./src/reddit/routes/report/index.ts"),
				K = n("./src/reddit/routes/searchResults/index.ts"),
				Z = n("./src/reddit/routes/settings/index.ts");
			var J = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.p.EMPTY,
					meta: {
						name: c.Db.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.p.EMPTY,
					meta: {
						name: c.Db.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				Y = n("./src/reddit/routes/subreddit/index.ts"),
				X = n("./src/reddit/routes/subredditCreation/index.ts"),
				$ = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ee = n("./src/reddit/routes/subredditWiki/index.ts"),
				te = n("./src/reddit/routes/topic/index.ts");
			const ne = [r.a, o.a, a.b, d, l.a, m.a, D, q, V, ...s.a, ...u.a, h, ...C.a, O.a, A.a, v.a, x.a, M.a, T.a, ...N, f, ...E.a, _.a, S.a, j.c, w.a, y.a, R.a, U.a, G.a, B.a, W.a, H.a, Q.a, ...Z.a, ...J, K.a, ...ee.a, te.a, Y.b, X.a, $.a, P.a, z.a, ...b];
			t.a = ne
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				d = n("./src/reddit/actions/users.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = {
					action: i.a,
					chunk: r.p.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: r.Db.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				h = {
					action: c.a,
					chunk: r.p.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: r.Db.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				g = e => async (t, n) => {
					const s = Object(u.a)(e.queryParams);
					Object(p.J)(n()) || await t(Object(d.r)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(a.h)(l.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, f = {
					action: g,
					chunk: r.p.EMPTY,
					exact: !0,
					meta: {
						name: r.Db.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [b, h, f]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueuePages~ModerationPages"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				d = Object.keys(a.jb).map(e => a.jb[e]).join("|"),
				l = `/r/mod/about/:pageName(${d})?`,
				m = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.p.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Db.MODQUEUE_PAGES
					},
					path: l
				};
			t.a = m
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/loadableAction/index.ts");
			const d = Object.keys(i.Sb).map(e => i.Sb[e]).join("|"),
				l = [i.Sb.Awards],
				m = l.join("|"),
				u = e => `/${e}/about/scheduledposts`,
				p = e => `/${e}/about/eventposts`,
				b = e => `/${e}/about/predictions`,
				h = Object(o.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				g = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				f = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...g],
				v = e => !!Object(a.h)(e, {
					path: "/r/:subredditName/about"
				}),
				x = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: i.p.MODERATION_PAGES,
					component: h,
					exact: !0,
					meta: {
						name: i.Db.MODERATION_PAGES
					},
					path: f,
					prefetches: [i.p.SUBREDDIT]
				};
			t.a = x
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				l = Object.keys(a.P).map(e => `${d}/:sort(${a.P[e]})?`),
				m = "/user/:username/m/:multiredditName",
				u = Object.keys(a.P).map(e => `${m}/:sort(${a.P[e]})?`),
				p = [d, m, ...l, ...u],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.p.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Db.MULTIREDDIT
					},
					path: p,
					prefetches: [a.p.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: r.p.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [r.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.POST_DRAFT
					},
					path: a,
					prefetches: [r.p.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/premium",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Premium").then(n.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				c = {
					action: o.e,
					chunk: r.p.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.PREMIUM
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: r.p.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.p.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const d = Object(o.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
				l = Object.keys(c.a).map(e => c.a[e]).join("|"),
				m = [`/user/:profileName/:listingType(${l})`, `/user/:profileName/gilded/:listingType(${c.a.GivenGildings})`],
				u = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.p.PROFILE_PRIVATE,
					component: d,
					exact: !0,
					meta: {
						name: a.Db.PROFILE_PRIVATE
					},
					path: m,
					prefetches: [a.p.COMMENTS_PAGE]
				};
			t.a = u
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.p.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = d
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.p.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Db.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.p.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: r.p.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search.ts")).then(e => e.searchResultsRequested)),
					chunk: r.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.p.FRONTPAGE, r.p.SUBREDDIT, r.p.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.Qb).map(e => a.Qb[e]).join("|"),
				d = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
					chunk: a.p.SETTINGS,
					exact: !0,
					meta: {
						name: a.Db.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(o.a)({
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
					chunk: a.p.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Db.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = d
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/subreddits/create",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditCreation/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/actions/pages/subredditCreation.ts")).then(e => e.subredditCreationPageRequested)),
					component: i,
					chunk: r.p.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: r.Db.SUBREDDIT_CREATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: r.p.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Db.SUBREDDIT_LEADERBOARD
					},
					path: a,
					prefetches: [r.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
				}),
				d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+", "/wiki/:wikiPageName+"],
				l = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(r.c)(Object(i.a)(e.url, e.params)))
				}, u = {
					action: m,
					chunk: o.p.EMPTY,
					exact: !0,
					meta: {
						name: o.Db.SUBREDDIT_WIKI
					},
					path: l
				}, p = {
					action: Object(a.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.p.SUBREDDIT_WIKI,
					component: c,
					exact: !0,
					meta: {
						name: o.Db.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [o.p.SUBREDDIT]
				};
			t.a = [u, p]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === o.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = r.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, r.a.format(c)) : e
			}
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.p.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Db.TOPIC
					},
					prefetches: [r.p.COMMENTS_PAGE, r.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/reddit/constants/accountManager.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				d = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				l = n("./src/reddit/selectors/experiments/magicLink.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				u = n("./src/reddit/selectors/user.ts");
			const p = Object(r.a)(u.I, u.J, (e, t) => !e && !t);
			var b = n("./src/reddit/selectors/responsiveSettings.ts");
			const h = e => e.accountManagerModalData.actionSource,
				g = e => e.accountManagerModalData.redirectUrl,
				f = Object(r.a)((e, t) => t.path, (e, t) => t.uiMode, h, c.a, b.a, d.b, e => Object(m.c)(e, {
					experimentEligibilitySelector: p,
					experimentName: i.dd
				}), l.a, (e, t, n, r, c, d, l, m) => {
					let u = `${s.a.accountManagerOrigin}${e}`;
					return u = Object(o.a)(u, {
						experiment_d2x_2020ify_buttons: "enabled"
					}), l && (u = Object(o.a)(u, {
						[`experiment_${i.dd}`]: l
					})), e === a.c.GoogleOneTap ? Object(o.a)(u, {
						[i.N]: d
					}) : (r && (u = Object(o.a)(u, {
						[i.lb]: r,
						uiMode: t
					})), m && (u = Object(o.a)(u, {
						[`experiment_${i.mc}`]: m
					})), c && (u = Object(o.a)(u, {
						mweb_responsive_settings: "treatment"
					})), e === a.c.Index || e === a.c.ChangePassword ? u : u = Object(o.a)(u, {
						actionSource: n
					}))
				})
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(s.a)(a.a, e => {
					var t, n;
					const s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing;
					return (null == s ? void 0 : s.active) ? s.assetUrls && s.assetUrls[0] : null
				}, (e, t) => e ? t : null)
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
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(a.mb)(e, {
						userName: n
					});
					if (!s) return;
					const r = i(e, {
						subredditId: t
					});
					return r ? r[s.id] : void 0
				},
				d = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : r.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(o.d)(t);
					return e.features.banned.api.pending[n]
				},
				m = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				u = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
				return Object(o.G)(e) || s.A.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.u
				})
			}
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.rb)
		},
		"./src/reddit/selectors/experiments/econStorefrontClaim.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: o.J,
					experimentName: s.Fb
				});
				return !(!t || Object(s.Dd)(t))
			}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
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
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(d.Q, (e, {
					pageLayer: t
				}) => !t || Object(o.y)(t), c.c, (e, t, n) => !e && t && !n),
				m = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: r.lb,
					throttledVariants: {
						[r.Pb.CurrentThrottled]: r.lb
					}
				}), i.a),
				u = e => e === r.Pb.CurrentThrottled,
				p = e => e === r.Pb.CurrentThrottled || e === r.Pb.CurrentUnthrottled || e === r.Pb.CurrentUnthrottledCopy || e === r.Pb.NewPopUnthrottledCopy,
				b = e => e === r.Pb.NewPopUnthrottledCopy,
				h = e => e === r.Pb.NewPageUnthrottledCopy || e === r.Pb.NewPageUnthrottledCopyFields,
				g = e => e === r.Pb.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => Object(o.G)(e) || !(s.rd.Holdout === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.od
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/utils.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["AU", "CA", "GB", "US"],
				i = new Set([s.Yb.AllItems, s.Yb.TrendingSearch]),
				c = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: Object(r.d)(Object(r.b)(...a)),
						experimentName: s.Zb
					});
					return i.has(t)
				},
				d = e => s.Yb.AllItems === Object(o.c)(e, {
					experimentEligibilitySelector: Object(r.d)(Object(r.b)(...a)),
					experimentName: s.Zb
				})
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				r = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
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
				return m
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts");
			const o = [],
				a = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.pages.modHub.muted.userOrder[t];
					return n ? n.map(n => e.pages.modHub.muted.models[t][n]) : o
				}),
				i = (e, {
					subredditId: t
				}) => {
					const n = Object(r.d)(t);
					return !!e.pages.modHub.muted.api.pending[n]
				},
				c = e => !!e.pages.modHub.muted.search.api.pending,
				d = e => e.pages.modHub.muted.search.result,
				l = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				m = (e, {
					subredditId: t
				}) => e.pages.modHub.muted.loadMore[t]
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				r = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, s;
					const r = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == r ? void 0 : r.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (s = o[t]) || void 0 === s ? void 0 : s.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js");
			const r = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				o = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				a = Object(s.a)(o, e => !(!e || !e.hasNextPage)),
				i = Object(s.a)(o, e => e && e.endCursor),
				c = e => e.notificationsInbox && e.notificationsInbox.notifications,
				d = Object(s.a)(c, e => e.slice(0, 5)),
				l = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				m = Object(s.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				u = Object(s.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				})
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, {
					subredditId: t
				}) => {
					if (e.features.removalReasons.reasonOrder[t]) {
						return e.features.removalReasons.reasonOrder[t].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				r = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				o = e => e.features.removalReasons.api.pending
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
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/components/Settings/modalIds.ts"),
				o = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.qb, e => !(!e || !e.length));
			const c = Object(s.a)(i.y, e => !e),
				d = Object(s.a)(i.qb, e => e && e.find(e => e === o.a.Apple)),
				l = Object(s.a)(i.qb, e => !(!e || !e.includes(o.a.Google))),
				m = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.f].includes(e))
		},
		"./src/reddit/selectors/theme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.themes.current
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.trending.models
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit", "Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost", "Chat~Governance~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.c9be386bc5950e556f01.js.map