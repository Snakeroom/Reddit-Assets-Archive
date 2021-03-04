// https://www.redditstatic.com/desktop2x/Reddit.d0919f2bac51d06b1a8a.js
// Retrieved at 3/4/2021, 6:00:05 PM by Reddit Dataminer v1.0.0
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
		"./src/graphql/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"7537a71b4f14"}')
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
					}(s())).ok ? (Object(i.b)(), await u(s(), !0), e && window.location.reload()) : (u(s(), !1), t(Object(c.e)({
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
				return we
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
				w = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				_ = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
						endpoint: Object(y.a)(Object(w.a)(Object(_.a)(`${e.apiUrl}/api/comment.json`))),
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
				B = n("./src/reddit/models/Toast/index.ts"),
				G = n("./src/reddit/selectors/comments.ts"),
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
							headCommentId: Object(G.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(W.I)(h(), {
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
						})), m(Object(b.e)({
							duration: b.a,
							kind: B.b.Error,
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
						} else r(Object(m.a)(n)), r(Object(b.e)({
							duration: b.a,
							kind: B.b.Error,
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
						redirectUrl: Object(G.m)(r(), {
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
								endpoint: Object(y.a)(Object(_.a)(Object(w.a)(`${e.apiUrl}/api/editusertext`))),
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
				}, we = e => async (t, n, {
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
				return _
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "l", (function() {
				return q
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return K
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/actions/vote.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				b = n("./src/reddit/helpers/commentList/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			var g = n("./src/reddit/models/Comment/index.ts"),
				f = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				E = n("./src/reddit/selectors/moderatingComments.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				w = Object(a.a)(j.n),
				_ = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(P.J)(n())) return t(Object(c.j)()), void t(Object(d.k)({
						actionSource: d.a.Save,
						redirectUrl: Object(C.m)(n(), {
							commentId: e
						})
					}));
					const o = n().features.comments.models[e];
					if (!o) return;
					const a = o.isSaved ? p.k : p.g;
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
						t(Object(m.e)({
							text: n,
							kind: v.b.Undo,
							buttonText: s,
							buttonAction: _(e)
						}))
					} else t(w({
						[e]: {
							isSaved: o.isSaved
						}
					}))
				}, k = e => `viewing-comment-${e}`, I = s.a.telemetry.commentConsumedThreshold, N = e => async (t, n) => {
					const r = n();
					if (!Object(O.a)(r, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					(({
						state: e,
						commentId: t
					}) => Object(o.a)({
						source: "comment",
						action: "view",
						noun: "comment",
						...h.defaults(e),
						profile: h.profile(e),
						post: h.post(e, t),
						media: h.media(e, t),
						subreddit: h.subreddit(e),
						comment: h.comment(e, t)
					}))({
						state: r,
						commentId: e
					}), o.c.start(k(e));
					const a = setTimeout(() => (({
						state: e,
						commentId: t
					}) => Object(o.a)({
						source: "comment",
						action: "consume",
						noun: "comment",
						...h.defaults(e),
						profile: h.profile(e),
						post: h.post(e, t),
						media: h.media(e, t),
						subreddit: h.subreddit(e),
						comment: h.comment(e, t)
					}))({
						state: r,
						commentId: e
					}), I);
					S[e] = a
				}, M = (e, t) => async (n, s) => {
					const r = s(),
						a = k(e);
					if (Object(O.a)(r, {
							commentId: e
						}) && o.c.has(a)) {
						const n = o.c.end(a);
						!t && n < I && (clearTimeout(S[e]), delete S[e])
					}
				}, T = Object(a.a)(j.v), A = Object(a.a)(j.u), R = Object(a.a)(j.t), L = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						a = o.moreComments.models[t],
						c = o.platform.currentPage,
						d = c && c.routeMatch,
						l = d && d.match,
						{
							partialPostId: m
						} = l ? l.params : null;
					if (!m) return;
					const u = Object(f.r)(m);
					n(T({
						moreCommentsId: a.id
					}));
					const h = await Object(p.e)(r(), u, {
						token: a.token
					}, Object(y.a)(o));
					if (h.ok) {
						const t = h.body,
							s = Object(b.a)(t, u, o);
						n(A({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const r = o.posts.models[u];
						r && "subreddit" === r.belongsTo.type && t.comments && await n(Object(i.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: r.belongsTo.id
						}))
					} else n(R({
						moreCommentsItem: a,
						...h.error
					}))
				}, F = Object(u.a)(b.b, x.a.upvoted), D = Object(u.a)(b.b, x.a.downvoted), U = Object(a.a)(j.i), B = Object(a.a)(j.h), G = Object(a.a)(j.d), H = Object(a.a)(j.e), q = (Object(a.a)(j.b), Object(a.a)(j.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, r) => {
					const o = r(),
						a = Object(g.g)(e),
						i = Object(C.n)(o, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(E.b)(o, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					s(G({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(l.d)()
				}), W = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (r, o) => {
					const a = o(),
						i = Object(b.e)(t, e, n, a),
						c = Object(E.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(G({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(l.d)()
				}, Q = Object(a.a)(j.q), z = e => t => t(Q({
					draftKey: e
				})), K = Object(a.a)(j.a)
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
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.e)({
							kind: l.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.e)({
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
		"./src/reddit/actions/notifications/loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/loadWithRetries/index.ts");
			t.a = () => Object(s.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts")))
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/reddit/actions/notifications/utils.ts");
			const o = {
					isEnabled: !1,
					isSubscriptionActive: !1,
					permission: s.a.Default
				},
				a = {
					denied: s.a.Denied,
					granted: s.a.Granted
				};
			const i = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = s.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(r.a)(e) === s.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = a[Notification.permission] || s.a.Default
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
				c = i.subscribe,
				d = i.unsubscribe,
				l = i.initialize,
				m = i.recalculate
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
					})), r(f(t))) : (r(b(C)), r(Object(o.e)({
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
					t(Object(o.e)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: c
					})), Object(i.bb)(r + 1)
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
					else if (h.toaster[0]) Object(p.b)(i.b), n(Object(a.f)(h.toaster[0].id));
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
				w = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = n("./src/reddit/models/Sso/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/accountManager.ts"),
				N = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				R = n.n(A);
			const L = l.a.iframe("IFrame", R.a),
				F = l.a.button("CloseButton", R.a),
				D = l.a.wrapped(w.a, "Close", R.a),
				U = Object(c.c)({
					accountManagerSrc: I.c,
					actionSource: I.a,
					frontpageSignupVariant: N.a,
					isLoggedIn: T.J,
					redirectUrl: I.b
				}),
				B = Object(i.b)(U, (e, t) => ({
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
						})), e(Object(m.g)(s)), e(Object(f.e)(Object(f.d)(t, k.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(f.e)(Object(f.d)(t, k.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(f.e)(Object(f.d)(t, n)))
					}
				})),
				G = ({
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
						const t = e === _.a.Apple ? y.a.LINK_APPLE_SSO : y.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === _.a.Apple ? y.a.UNLINK_APPLE_SSO : y.a.UNLINK_GOOGLE_SSO;
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && G(e))
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
			t.a = B(Object(v.c)(q))
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
				return Em
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
				w = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				_ = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
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
				B = n("./src/reddit/components/Carousel/index.m.less"),
				G = n.n(B);
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
							className: Object(f.a)(G.a.item, G.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${U.a.assetPath}/${e.img}")`,
								width: r
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => u.a.createElement("div", {
						className: Object(f.a)(G.a.indicator, {
							[G.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(f.a)(e, G.a.container)
					}, u.a.createElement("article", {
						className: G.a.items
					}, this.state.items.map(this.renderItem)), t && u.a.createElement("footer", {
						className: G.a.indicators
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
					return u.a.createElement(_.a, {
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
				we = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				_e = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				ke = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ie = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Me = n("./src/reddit/selectors/activeModalId.ts"),
				Te = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Ae = n.n(Te);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = N.a.button("CloseButton", Ae.a), Fe = N.a.wrapped(Ne.a, "Close", Ae.a), De = N.a.div("Container", Ae.a), Ue = N.a.p("Description", Ae.a), Be = N.a.div("Footer", Ae.a), Ge = N.a.h3("Heading", Ae.a), He = N.a.img("SnooImage", Ae.a), qe = N.a.div("Wrapper", Ae.a), We = Object(g.c)({
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
					return u.a.createElement(qe, null, u.a.createElement(De, null, u.a.createElement(Ge, null, Re._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), u.a.createElement(Ue, null, Re._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), u.a.createElement(He, {
						src: `${U.a.assetPath}/img/magnifying-glass-snoo.png`
					})), u.a.createElement(Be, null, u.a.createElement(Ie.i, {
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
				wt = N.a.div("CheckboxText", Et.a);
			class _t extends u.a.Component {
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
						text: u.a.createElement(wt, null, r.fbt._("Show my user flair on this community", null, {
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
				isMod: (e, t) => !!Object(vt.i)(e, t),
				userFlairData: Ot.c
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(it.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(at.b)({
					username: null,
					subredditId: null
				}))
			}))(_t);
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
			const Bt = Object(g.c)({
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
			class Gt extends u.a.Component {
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
						const t = Object(Dt.u)(et.a.ALPHA_CONSUMER);
						t && Object(Dt.N)(et.a.ALPHA_CONSUMER), (e || t) && Object(Dt.kb)(et.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Dt.u)(et.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Dt.kb)(et.a.REDESIGN_MODAL, !0)
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
					return u.a.createElement(m.Fragment, null, s && n && u.a.createElement(_e.a, {
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
					}), t && o && u.a.createElement(we, {
						withOverlay: !0,
						productId: o
					}), d && u.a.createElement(Ze, null), a && u.a.createElement(Qe, {
						withOverlay: !0
					}))
				}
			}
			var Ht = Object(p.b)(Bt, e => ({
					markRedesignModalAsClosed: () => e(Object(je.j)()),
					toggleBanModal: () => e(Object(je.i)(et.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(je.i)(et.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(je.i)(et.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(je.i)(et.a.ADD_REMOVAL_REASON))
				}))(Object(T.c)(Gt)),
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
						this.props.closeModal(this.props.path), this.props.path === A.c.Register && Object(D.f)(this.props.frontpageSignupVariant) && Qt.a.throttleFeature(Wt.cb), this.props.sendEvent(Object(R.a)(this.subscriptions))
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
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CROWD_CONTROL, e => u.a.createElement(cn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx");
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ke.a)(() => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx"))).then(e => e.default)
			});
			Object(qt.b)(et.a.ECON_POWERUPS_MARKETING, e => u.a.createElement(dn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var ln = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ke.a)(() => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(ln.d)()])).then(e => e[0].default)
			});
			Object(qt.b)(et.a.ECON_POWERUPS_PURCHASE, e => u.a.createElement(mn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => u.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => u.a.createElement(pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bn = Object(Se.a)({
					getComponent: () => Object(Ke.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				hn = e => () => {
					e()
				};
			Object(qt.b)(et.a.GOLD_GILD_MODAL, e => u.a.createElement(bn, {
				onOverlayClick: hn(e),
				withOverlay: !0
			}));
			var gn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				fn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				vn = n.n(fn);
			const xn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = gn.SPARKLE_ASSET_PATH, document.createElement("img").src = gn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(qt.b)(et.a.GOLD_GILD_ANIMATION_OVERLAY, e => u.a.createElement(xn, {
				withOverlay: !0,
				className: vn.a.modalBody,
				overlayClassName: vn.a.modalOverlay
			}));
			const Cn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				On = e => () => {
					e()
				};
			Object(qt.b)(et.a.GOLD_TARGETED_OFFER_MODAL, e => u.a.createElement(Cn, {
				onOverlayClick: On(e),
				withOverlay: !0
			}));
			const yn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_BANNER_MANAGE, e => u.a.createElement(yn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const En = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_BANNER_PURCHASE, e => u.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => u.a.createElement(Pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const jn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => u.a.createElement(jn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Sn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.GOVERNANCE_RELEASE_NOTES, e => u.a.createElement(Sn, {
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
			const _n = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.WALLET_REGISTRATION_MODAL, e => u.a.createElement(_n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const kn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MOD_TO_MEMBER_SHARE, e => u.a.createElement(kn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const In = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_ADD_SUBREDDIT, e => u.a.createElement(In, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_CREATE, e => u.a.createElement(Nn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(qt.b)(et.a.MULTIREDDIT_DUPLICATE, e => u.a.createElement(Nn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_EDIT, e => u.a.createElement(Mn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Tn = () => null,
				An = Object(Se.a)({
					ErrorComponent: Tn,
					getComponent: () => Object(Ke.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Tn
				});
			Object(qt.b)(et.a.PINNED_POSTS_LIMIT_REACHED, e => u.a.createElement(An, null));
			var Rn = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Ln = n.n(Rn);
			const {
				fbt: Fn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dn = N.a.h2("ColumnLabel", Ln.a), Un = N.a.wrapped(bt.a, "ColumnWrapper", Ln.a), Bn = N.a.div("Column", Ln.a), Gn = N.a.div("Description", Ln.a), Hn = N.a.div("Key", Ln.a), qn = N.a.wrapped($e.k, "ModalMain", Ln.a), Wn = N.a.wrapped($e.d, "ModalBody", Ln.a), Vn = N.a.wrapped(Ie.i, "PrimaryButton", Ln.a), Qn = N.a.wrapped(tt.a, "TextButton", Ln.a), zn = Object(p.b)(null, e => ({
				closeModal: () => e(Object(je.i)(et.a.KEYBOARD_SHORTCUTS))
			})), Kn = N.a.wrapped(Object(ke.a)(zn(e => u.a.createElement(Wn, {
				onClick: e => e.stopPropagation()
			}, u.a.createElement($e.h, null, u.a.createElement(nt.a, null, u.a.createElement($e.p, null, Fn._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), u.a.createElement(Qn, {
				onClick: e.closeModal
			}, u.a.createElement($e.b, null)))), u.a.createElement(qn, null, u.a.createElement(Un, null, u.a.createElement(Bn, null, u.a.createElement(bt.a, null, u.a.createElement(Dn, null, Fn._("Navigation", null, {
				hk: "3zSWEe"
			}))), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), u.a.createElement(Hn, null, "Shift + ?")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Next post or comment", null, {
				hk: "1m8s9z"
			})), u.a.createElement(Hn, null, "J")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), u.a.createElement(Hn, null, "K")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), u.a.createElement(Hn, null, "N")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), u.a.createElement(Hn, null, "P")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Open post", null, {
				hk: "2wD7mh"
			})), u.a.createElement(Hn, null, "Enter")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Open/close expando", null, {
				hk: "1yDst0"
			})), u.a.createElement(Hn, null, "X")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Go to post link", null, {
				hk: "c0TNr"
			})), u.a.createElement(Hn, null, "L"))), u.a.createElement(Bn, null, u.a.createElement(bt.a, null, u.a.createElement(Dn, null, Fn._("Action", null, {
				hk: "3QI6pT"
			}))), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Upvote", null, {
				hk: "5i9NP"
			})), u.a.createElement(Hn, null, "A")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Downvote", null, {
				hk: "1ef3YP"
			})), u.a.createElement(Hn, null, "Z")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("New post", null, {
				hk: "4dtNWf"
			})), u.a.createElement(Hn, null, "C")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Reply to comment", null, {
				hk: "G8AbT"
			})), u.a.createElement(Hn, null, "R")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Submit comment/post", null, {
				hk: "13agk7"
			})), u.a.createElement(Hn, null, "Ctrl + Enter")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Save", null, {
				hk: "3Dtwo5"
			})), u.a.createElement(Hn, null, "S")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Hide", null, {
				hk: "2Dn9GF"
			})), u.a.createElement(Hn, null, "H")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Open navigation", null, {
				hk: "QdGe2"
			})), u.a.createElement(Hn, null, "Q")), u.a.createElement(bt.a, null, u.a.createElement(Gn, null, Fn._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), u.a.createElement(Hn, null, "Enter"))))), u.a.createElement($e.f, null, u.a.createElement(Vn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, Fn._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", Ln.a);
			Object(qt.b)(et.a.KEYBOARD_SHORTCUTS, e => u.a.createElement(Kn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Zn = Object(Se.a)({
					getComponent: () => Object(Ke.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Jn = e => () => {
					e()
				};
			Object(qt.b)(et.a.SNOOVATAR_MODAL, e => u.a.createElement(Zn, {
				onOverlayClick: Jn(e),
				withOverlay: !0
			}));
			const {
				fbt: Yn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xn = Object(g.c)({
				allowNavigationCallback: At.a
			}), $n = Object(p.b)(Xn, e => ({
				closeModal: () => e(Object(je.i)(et.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Xe.a)())
			}));
			class es extends u.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return u.a.createElement($e.d, null, u.a.createElement($e.h, null, u.a.createElement(nt.a, null, u.a.createElement($e.p, null, Yn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), u.a.createElement(tt.a, {
						onClick: this.onCancelClick
					}, u.a.createElement($e.b, null)))), u.a.createElement($e.k, null, u.a.createElement($e.o, null, Yn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), u.a.createElement($e.f, null, u.a.createElement($e.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Yn._("Cancel", null, {
						hk: "2TSLl5"
					})), u.a.createElement($e.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Yn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const ts = Object(ke.a)($n(es));
			Object(qt.b)(et.a.BLADE_UNSAVED_CHANGES, e => u.a.createElement(ts, {
				withOverlay: !0
			}));
			const ns = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ke.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("SubredditWelcomeMessageModal")]).then(n.bind(null, "./src/reddit/components/SubredditWelcomeMessageModal/index.tsx"))).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_WELCOME_MESSAGE, e => u.a.createElement(ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ss = Object(g.c)({
					activeModalId: Me.a
				}),
				rs = Object(p.b)(ss, e => ({
					toggleModal: t => e(Object(je.i)(t))
				})),
				os = 500,
				as = () => {};
			class is extends u.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					et.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ut.a)(), os) : setTimeout(() => Object(Ut.b)(), os))
				}
				componentWillUnmount() {
					Object(Ut.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(qt.a)(e)(e ? this.toggleModal : as)
				}
			}
			var cs, ds = rs(is),
				ls = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ms = n("./src/reddit/actions/page.ts"),
				us = n("./src/reddit/actions/shortcuts/utils.ts"),
				ps = n("./src/reddit/icons/fonts/index.tsx"),
				bs = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				hs = n("./src/reddit/icons/svgs/Pinmenu/index.tsx"),
				gs = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				fs = n("./src/reddit/selectors/header.ts"),
				vs = n("./src/reddit/selectors/userPrefs.ts"),
				xs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				Cs = n("./src/reddit/components/SEOTitle/index.tsx"),
				Os = n("./src/reddit/components/SubredditIcon/index.tsx"),
				ys = n("./src/reddit/components/UserIcon/index.tsx"),
				Es = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Ps = n("./src/reddit/icons/svgs/All/index.tsx"),
				js = n("./src/reddit/icons/svgs/Browse/index.tsx"),
				Ss = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				ws = n("./src/reddit/icons/svgs/Envelope/index.tsx"),
				_s = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				ks = n("./src/reddit/icons/svgs/Home/index.tsx"),
				Is = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ns = n("./src/reddit/icons/svgs/Multireddit/index.tsx"),
				Ms = n("./src/reddit/icons/svgs/Notify/index.tsx"),
				Ts = n("./src/reddit/icons/svgs/Popular/index.tsx"),
				As = n("./src/reddit/icons/svgs/Post/index.tsx"),
				Rs = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				Ls = n("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Fs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Ds = n.n(Fs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(cs || (cs = {}));
			const Us = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return u.a.createElement(u.a.Fragment, null, n && `${n}/`, s && u.a.createElement(Cs.b, {
					type: Cs.a.HeaderSelector
				}, s))
			};
			var Bs = n("./src/lib/objectSelector/index.ts"),
				Gs = n("./src/reddit/constants/wiki.ts"),
				Hs = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				qs = n("./src/reddit/selectors/subreddit.ts"),
				Ws = n("./src/reddit/selectors/topic.ts");
			var Vs = Object(Bs.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(Vt.U)(t);
					switch (s) {
						case "index":
						case "listing":
							return n ? {
								type: cs.Home
							} : {
								type: cs.Popular
							};
						case "modListing":
							return {
								type: cs.ModListing
							};
						case "modQueuePages":
							return {
								type: cs.ModQueue
							};
						case "postCreation":
							return {
								type: cs.CreatePost
							};
						case "postDraft":
							return {
								type: cs.ViewDraft
							};
						case "subredditCreation":
							return {
								type: cs.SubredditCreation
							};
						case "coins":
							return {
								type: cs.Coins
							};
						case "premium":
							return {
								type: cs.Premium
							};
						case "acknowledgements":
							return {
								type: cs.Acknowledgements
							};
						case "appeal":
							return {
								type: cs.Appeal
							};
						case "report":
							return {
								type: cs.Report
							};
						case "userDataRequest":
							return {
								type: cs.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: cs.DailyCharts
							};
						case "geotagging":
							return {
								type: cs.Geotagging
							};
						case "notificationsInbox":
							return {
								type: cs.NotificationsInbox
							};
						case "topic": {
							const n = Object(Vt.s)(t),
								s = n && Object(Ws.d)(e, n);
							if (s) return {
								type: cs.Topic,
								model: s
							}
						}
					}
					const r = e.user.account;
					if (r) switch (s) {
						case "inboxPages":
							return {
								type: cs.Inbox, model: r
							};
						case "settings":
							return {
								type: cs.Settings, model: r
							}
					}
					const o = Object(Vt.O)(e, {
						pageLayer: t
					});
					if ("all" === o) return {
						type: cs.All
					};
					if ("popular" === o) return {
						type: cs.Popular
					};
					const a = Object(Vt.q)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: cs.CommunitySearch,
						model: a
					} : {
						type: cs.Community,
						model: a
					};
					const i = Object(Vt.d)(e, {
						pageLayer: t
					});
					if (i) return {
						type: cs.Multi,
						model: i
					};
					const c = Object(Vt.j)(e, {
						pageLayer: t
					});
					if (c) return {
						type: cs.UserProfile,
						model: c
					};
					const d = Object(Vt.h)(t);
					if (d) return {
						type: cs.UserProfileName,
						name: `u/${d}`
					};
					if (s && "searchResults" === s) return {
						type: cs.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(Vt.n)(e, {
								pageLayer: t
							}) || Gs.e,
							s = Object(qs.A)(e, {
								subredditName: n
							});
						if (s) return {
							type: cs.Community,
							model: s
						}
					}
					return "rpan" === s && Object(Hs.a)(e) ? {
						type: cs.PublicAccessNetwork
					} : {
						type: cs.Unknown
					}
				}),
				Qs = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				zs = n.n(Qs);

			function Ks() {
				return (Ks = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Zs(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: u.a.createElement(u.a.Fragment, null, u.a.createElement(t, {
							className: zs.a.icon
						}), u.a.createElement(n, {
							className: zs.a.text
						})),
						className: Object(f.a)(zs.a.item, e.className, {
							[zs.a.mFocused]: !!e.isFocused,
							[zs.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? u.a.createElement("a", Ks({}, s, {
					href: e.to,
					target: "_blank"
				})) : u.a.createElement(ls.a, Ks({}, s, {
					to: e.to
				})) : u.a.createElement("button", s)
			}
			var Js = n("./src/reddit/constants/listings.ts"),
				Ys = n("./src/reddit/helpers/overlay/index.ts"),
				Xs = n("./src/reddit/routes/modListing/index.ts"),
				$s = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				er = n("./src/reddit/selectors/multireddit.ts"),
				tr = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				nr = n("./src/lib/LinkedListMap/index.ts");
			const sr = Object(g.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(er.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(er.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				isUserEnrolledInOldModmail: qs.o,
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var rr;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(rr || (rr = {}));
			const or = e => [t => ({
					id: cs.All,
					type: rr.GenericLink,
					model: {
						url: "/r/all/",
						displayText: r.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(ps.a, {
							name: "all"
						}) : u.a.createElement(Ps.a, {
							className: Object(f.a)(t, Ds.a.itemIcon)
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
					id: cs.DailyCharts,
					type: rr.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: r.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(ps.a, {
							name: "list_numbered"
						}) : u.a.createElement(_s.a, {
							className: Object(f.a)(t, Ds.a.itemIcon)
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
				ar = e => [e => ({
					id: "reddit-feeds",
					type: rr.Header,
					model: {
						displayText: r.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (t, n) => ({
					id: cs.Home,
					type: rr.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(ps.a, {
							name: "home"
						}) : u.a.createElement(ks.a, {
							className: Object(f.a)(t, Ds.a.itemIcon),
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
					id: cs.Popular,
					type: rr.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(ps.a, {
							name: "popular"
						}) : u.a.createElement(Ts.a, {
							className: Object(f.a)(t, Ds.a.itemIcon)
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
				}), ...or(e)],
				ir = e => [t => ({
					id: cs.Coins,
					type: rr.GenericLink,
					model: {
						url: "/coins",
						displayText: r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(ps.a, {
							name: "coins"
						}) : u.a.createElement(Ss.a, {
							className: Object(f.a)(t, Ds.a.itemCoin)
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
					id: cs.Premium,
					type: rr.GenericLink,
					model: {
						url: "/premium",
						displayText: r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: ({
							className: t
						}) => e ? u.a.createElement(ps.a, {
							name: "premium"
						}) : u.a.createElement(Rs.a, {
							className: Object(f.a)(t, Ds.a.itemPremium)
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

			function cr(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: rr.Header,
					model: {
						displayText: r.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: rr.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: rr.Header,
					model: {
						displayText: r.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: rr.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var dr = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				lr = n.n(dr);

			function mr(e) {
				return u.a.createElement("div", {
					className: Object(f.a)(lr.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ur = n("./src/reddit/actions/subscription/index.ts"),
				pr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				br = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				hr = n("./src/reddit/icons/svgs/Favorite/index.tsx"),
				gr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				fr = n.n(gr);

			function vr() {
				return (vr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xr = Object(g.c)({
					currentUser: Ct.i,
					hideNSFWPref: Ct.B,
					isLoggedIn: Ct.J
				}),
				Cr = Object(p.b)(xr, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case rr.Subreddit:
								e(Object(ur.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case rr.Profile:
								e(Object(ur.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case rr.Multi:
								e(Object(ur.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(pr.f)(t.model.url)) : t.sendEvent(Object(pr.c)(t.model.url))
						}
					}
				}));
			var Or = Object(T.c)(Cr((function(e) {
					const t = {
							className: Object(f.a)(fr.a.item, e.className, {
								[fr.a.mFocused]: !!e.isFocused
							}),
							id: e.id,
							role: "menuitem",
							tabIndex: -1,
							onFocus: e.onFocus,
							onMouseEnter: e.onMouseEnter,
							onMouseLeave: e.onMouseLeave,
							onClick: e.onClick
						},
						n = Object(br.b)();
					switch (e.type) {
						case rr.Subreddit:
							return u.a.createElement(ls.a, vr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(Os.b, {
								className: fr.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), u.a.createElement("span", {
								className: fr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? u.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: fr.a.favorite
							}) : u.a.createElement(hr.a, {
								className: Object(f.a)(fr.a.favorite, {
									[fr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case rr.SubredditAutocomplete:
							return u.a.createElement(ls.a, vr({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), u.a.createElement(Os.b, {
								className: fr.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), u.a.createElement("span", {
								className: fr.a.text
							}, e.model.name));
						case rr.Multi:
							return u.a.createElement(ls.a, vr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement("img", {
								src: e.model.icon,
								className: fr.a.customFeedIcon
							}), u.a.createElement("span", {
								className: fr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? u.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: fr.a.favorite
							}) : u.a.createElement(hr.a, {
								className: Object(f.a)(fr.a.favorite, {
									[fr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case rr.Profile:
							return u.a.createElement(ls.a, vr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), u.a.createElement(ys.a, {
								className: fr.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), u.a.createElement("span", {
								className: fr.a.text
							}, e.model.displayText), e.isLoggedIn && u.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? u.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite
							}) : u.a.createElement(hr.a, {
								className: Object(f.a)(fr.a.favorite, {
									[fr.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				yr = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Er = n.n(yr);

			function Pr(e) {
				return u.a.createElement("div", {
					className: e.className
				}, u.a.createElement("div", {
					className: Er.a.header
				}), u.a.createElement("div", {
					className: Er.a.item
				}), u.a.createElement("div", {
					className: Er.a.item
				}), u.a.createElement("div", {
					className: Er.a.item
				}), u.a.createElement("div", {
					className: Er.a.item
				}))
			}
			var jr = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Sr = n("./src/reddit/actions/subreddit.ts"),
				wr = n("./src/reddit/constants/keycodes.ts"),
				_r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				kr = n("./src/lib/loadableAction/index.ts"),
				Ir = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Nr = n.n(Ir);

			function Mr() {
				return (Mr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Tr(e) {
				return e.id === cs.ModMail || e.id === cs.CreateCommunity
			}

			function Ar(e) {
				const t = new nr.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== rr.Header && e.type !== rr.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Rr = Object(g.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = sr(e),
							s = new nr.a("id"),
							o = Object(gs.b)(e);
						if (n.account) {
							const a = n.account;
							if (ar(o).forEach(e => s.push(e(a))), a.isEmployee && (e => [t => ({
									id: cs.Employee,
									type: rr.GenericLink,
									model: {
										url: "/user/reddit/m/employee_subbies/new",
										displayText: "Employee Communities",
										icon: ({
											className: t
										}) => e ? u.a.createElement(ps.a, {
											name: "home"
										}) : u.a.createElement(ks.a, {
											className: Object(f.a)(t, Ds.a.itemIcon)
										}),
										text: ({
											className: e
										}) => u.a.createElement("span", {
											className: e
										}, "Employee Communities")
									},
									telemetryNoun: "employee"
								})])(o).forEach(e => s.push(e(a))), Object($s.c)(e) && s.push({
									id: cs.NotificationsInbox,
									type: rr.GenericLink,
									model: {
										url: "/notifications",
										displayText: r.fbt._("Notifications", null, {
											hk: "2xenVO"
										}).toString(),
										icon: ({
											className: e
										}) => o ? u.a.createElement(ps.a, {
											name: "notification"
										}) : u.a.createElement(Ms.a, {
											className: Object(f.a)(e, Ds.a.itemIcon)
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
								}), Object(Hs.a)(e) && s.push({
									id: cs.PublicAccessNetwork,
									type: rr.GenericClickable,
									model: {
										onClick: () => {
											t(Object(Ys.a)(Js.c[Js.b.Rpan]))
										},
										displayText: r.fbt._("Reddit live", null, {
											hk: "3zuymj"
										}).toString(),
										icon: ({
											className: e
										}) => o ? u.a.createElement(ps.a, {
											name: "video_live"
										}) : u.a.createElement(Ls.c, {
											className: Object(f.a)(e, Ds.a.itemIcon)
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
									type: rr.Header,
									model: {
										displayText: r.fbt._("favorites", null, {
											hk: "4Gg0k2"
										}).toString()
									}
								}), n.favoriteSubreddits.forEach(e => s.push({
									id: "fav" + e.id,
									type: rr.Subreddit,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteProfiles.forEach(e => s.push({
									id: "fav" + e.id,
									type: rr.Profile,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteMultireddits.forEach(e => s.push({
									id: "fav" + e.url,
									type: rr.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.multisPending ? s.push({
									id: "multis-pending",
									type: rr.LoadingState,
									model: {
										displayText: ""
									}
								}) : n.multis.length > 0 && (s.push({
									id: "header-multis",
									type: rr.Header,
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
											className: Object(f.a)(e, Ds.a.multiPlusButton)
										}, o ? u.a.createElement(ps.a, {
											name: "add"
										}) : u.a.createElement(tr.a, {
											className: Ds.a.multiPlusIcon
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), n.multis.forEach(e => s.push({
									id: e.url,
									type: rr.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.moderatingSubredditsPending ? s.push({
									id: "moderatingSubreddits-pending",
									type: rr.LoadingState,
									model: {
										displayText: ""
									}
								}) : n.moderatingSubreddits.length && (s.push({
									id: "header-moderating",
									type: rr.Header,
									model: {
										displayText: r.fbt._("moderating subreddits", null, {
											hk: "2z4AZS"
										}).toString()
									}
								}), s.push({
									id: cs.ModListing,
									type: rr.GenericLink,
									model: {
										url: Xs.a,
										displayText: "r/Mod",
										icon: ({
											className: e
										}) => u.a.createElement(Is.a, {
											className: Object(f.a)(e, Ds.a.itemModQueue)
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
									type: rr.Subreddit,
									model: e,
									telemetryNoun: "community_moderate"
								}))), n.subscriptionsPending ? s.push({
									id: "subscriptions-pending",
									type: rr.LoadingState,
									model: {
										displayText: ""
									}
								}) : cr(s, n), (e => [e => ({
									id: "reddit-other",
									type: rr.Header,
									model: {
										displayText: r.fbt._("Other", null, {
											hk: "1etY05"
										}).toString()
									}
								}), e => ({
									id: cs.Settings,
									type: rr.GenericLink,
									model: {
										url: "/settings",
										displayText: r.fbt._("User Settings", null, {
											hk: "36WFGd"
										}).toString(),
										icon: ({
											className: e
										}) => u.a.createElement(Es.a, {
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
									id: cs.Inbox,
									type: rr.GenericLink,
									model: {
										url: "/message/inbox/",
										displayText: r.fbt._("Messages", null, {
											hk: "43DUrY"
										}).toString(),
										icon: ({
											className: e
										}) => u.a.createElement(Es.a, {
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
									id: cs.CreatePost,
									type: rr.GenericLink,
									model: {
										url: "/submit",
										displayText: r.fbt._("Create Post", null, {
											hk: "dGck6"
										}).toString(),
										icon: ({
											className: t
										}) => e ? u.a.createElement(ps.a, {
											name: "add"
										}) : u.a.createElement(As.a, {
											className: Object(f.a)(t, Ds.a.itemIcon)
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
								})])(o).forEach(e => s.push(e(a))), Object(Ct.fb)(e) && s.push({
									id: cs.CreateCommunity,
									type: rr.GenericLink,
									model: {
										url: "/subreddits/create",
										displayText: r.fbt._("Create Community", null, {
											hk: "41sjx"
										}).toString(),
										icon: ({
											className: e
										}) => o ? u.a.createElement(ps.a, {
											name: "add"
										}) : u.a.createElement(As.a, {
											className: Object(f.a)(e, Ds.a.itemIcon)
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
								}), ir(o).forEach(e => s.push(e(a))), a.isMod) {
								const {
									isUserEnrolledInOldModmail: e
								} = n;
								(e => [t => ({
									id: cs.ModQueue,
									type: rr.GenericLink,
									model: {
										url: "/r/mod/about/modqueue",
										displayText: r.fbt._("Mod Queue", null, {
											hk: "12pTAg"
										}).toString(),
										icon: ({
											className: t
										}) => e ? u.a.createElement(ps.a, {
											name: "mod_queue"
										}) : u.a.createElement(Is.a, {
											className: Object(f.a)(t, Ds.a.itemModQueue)
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
										id: cs.ModMail,
										type: rr.GenericLink,
										model: {
											url: o,
											displayText: r.fbt._("Modmail", null, {
												hk: "1BtYh4"
											}).toString(),
											icon: ({
												className: t
											}) => e ? u.a.createElement(ps.a, {
												name: "mod_mail"
											}) : u.a.createElement(ws.a, {
												className: Object(f.a)(t, Ds.a.itemModQueue)
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
						} else n.subscriptions.length || Object(Ct.J)(e) ? ar(o).forEach(e => s.push(e(null))) : (e => [e => ({
							id: "reddit-feeds",
							type: rr.Header,
							model: {
								displayText: r.fbt._("Reddit Feeds", null, {
									hk: "3C1mtF"
								}).toString()
							}
						}), () => ({
							id: cs.Home,
							type: rr.GenericLink,
							model: {
								url: "/",
								displayText: r.fbt._("Popular", null, {
									hk: "1op8tD"
								}).toString(),
								icon: ({
									className: t
								}) => e ? u.a.createElement(ps.a, {
									name: "home"
								}) : u.a.createElement(Ts.a, {
									className: Object(f.a)(t, Ds.a.itemIcon)
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
						}), ...or(e)])(o).forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: rr.Header,
							model: {
								displayText: r.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), ir(o).forEach(e => s.push(e(null))), cr(s, n);
						return s
					}
				}),
				Lr = e => ({
					onHomeClicked: () => e(Object(kr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ur.e)()), e(Object(Sr.q)()), e(Object(kr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Fr = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Dr extends u.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Ar(n),
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
								e && e.type !== rr.Header && e.type !== rr.LoadingState && (this.fireTelemetryForListItem(e), e.type === rr.GenericClickable ? e.model.onClick() : Tr(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
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
							case cs.Coins:
							case cs.Premium:
								Object(_r.d)(_r.a.GoldPayment, !0), t = Object(_r.c)(_r.a.GoldPayment)
						}
						switch (e.type) {
							case rr.Category:
							case rr.GenericLink:
							case rr.GenericClickable:
							case rr.Multi:
							case rr.Profile:
							case rr.Subreddit:
								this.props.sendEvent(n => ({
									...Object(xt.defaults)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === rr.Multi ? Object(xt.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case rr.Header: {
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
						focusOrder: Ar(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = u.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Ar(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new nr.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case rr.Category:
								case rr.GenericLink:
								case rr.Multi:
								case rr.Profile:
								case rr.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case rr.Header: {
									const t = n.last();
									t && t.type === rr.Header && n.pop(), n.push(e);
									break
								}
								case rr.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === rr.Header && n.pop(), n
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
						className: Nr.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === cs.Home && this.props.onHomeClicked(), e.type === rr.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case rr.GenericClickable:
								return u.a.createElement(Zs, Mr({}, n, {
									className: Nr.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case rr.Category:
							case rr.GenericLink:
								return u.a.createElement(Zs, Mr({}, n, {
									externalLink: Tr(e),
									className: Nr.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case rr.Header: {
								const n = e.model.button;
								return u.a.createElement(mr, {
									className: Nr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && u.a.createElement(n, {
									className: Nr.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case rr.LoadingState:
								return u.a.createElement(Pr, {
									className: Nr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case rr.Multi:
								return u.a.createElement(Or, Mr({}, n, {
									className: Nr.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: rr.Multi
								}));
							case rr.Profile:
								return u.a.createElement(Or, Mr({}, n, {
									className: Nr.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: rr.Profile
								}));
							case rr.Subreddit:
								return u.a.createElement(Or, Mr({}, n, {
									className: Nr.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: rr.Subreddit
								}))
						}
					}))
				}
			}
			const Ur = Object(p.b)(Rr, Lr, Fr)(Object(T.c)(Dr)),
				Br = Object(p.b)(Rr, Lr, Fr)(Object(T.c)(Object(jr.b)(Dr))),
				Gr = Object(Vt.t)({
					isCommentsPage: Vt.w,
					pageLayer: e => e
				}),
				Hr = Object(g.c)({
					currentPage: Vs,
					hideNSFWPref: Ct.B,
					isDropdownOpen: fs.a,
					isInIcons2020: gs.b,
					isLoggedIn: Ct.J,
					isOverlayOpen: At.h,
					isPinnedSubscriptionsMenuDisabled: vs.a,
					isSubscriptionsPinned: vs.b
				});
			class qr extends u.a.Component {
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
						className: Object(f.a)(Ds.a.container, t, {
							[Ds.a.mOpen]: c,
							[Ds.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Ds.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, u.a.createElement("button", {
						className: Ds.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, u.a.createElement("span", {
						className: Ds.a.containerText
					}, " ", function(e) {
						switch (e.type) {
							case cs.Acknowledgements:
								return Us(r.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case cs.All:
								return Us(r.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case cs.Appeal:
								return Us(r.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case cs.Coins:
								return Us(r.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case cs.Community:
								return Us(e.model.displayText, !0);
							case cs.CommunitySearch:
								return Us(r.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case cs.CreateCommunity:
								return Us(r.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case cs.CreatePost:
								return Us(r.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case cs.DailyCharts:
								return Us(r.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case cs.GlobalSearch:
								return Us(r.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case cs.Geotagging:
								return Us(r.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case cs.Home:
								return Us(r.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case cs.Inbox:
								return Us(r.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case cs.ModListing:
								return Us("r/Mod");
							case cs.ModMail:
								return Us(r.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case cs.ModQueue:
								return Us(r.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case cs.Multi:
								return Us(e.model.displayText, !0);
							case cs.NotificationsInbox:
								return Us(r.fbt._("Notifications", null, {
									hk: "FiFRe"
								}).toString());
							case cs.Popular:
								return Us(r.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case cs.Premium:
								return Us(r.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case cs.PublicAccessNetwork:
								return Us(r.fbt._("Reddit Live", null, {
									hk: "4tlHX5"
								}).toString());
							case cs.Report:
								return Us(r.fbt._("Report", null, {
									hk: "4oVcnd"
								}).toString());
							case cs.Settings:
								return Us(r.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case cs.SubredditCreation:
								return Us(r.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case cs.Topic:
								return Us(e.model);
							case cs.Unknown:
								return Us("");
							case cs.UserDataRequest:
								return Us(r.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case cs.UserProfile:
								return Us(e.model.displayText, !0);
							case cs.UserProfileName:
								return Us(e.name, !0);
							case cs.ViewDraft:
								return Us(r.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e), " "), function(e, t, n) {
						if (n) {
							const n = e => u.a.createElement(ps.a, {
								name: e,
								isFilled: !0,
								className: Ds.a.defaultIcon
							});
							switch (e.type) {
								case cs.All:
									return n("all");
								case cs.Acknowledgements:
								case cs.Appeal:
									return n("edit");
								case cs.Coins:
									return n("coins");
								case cs.CreateCommunity:
								case cs.CreatePost:
									return n("add");
								case cs.DailyCharts:
									return n("list_numbered");
								case cs.GlobalSearch:
									return n("search");
								case cs.Home:
									return n("home");
								case cs.Inbox:
								case cs.Settings:
									return u.a.createElement(Es.a, {
										className: Ds.a.userIcon
									});
								case cs.ModListing:
									return n("mod_queue");
								case cs.SubredditCreation:
									return n("add");
								case cs.ModMail:
									return n("mod_mail");
								case cs.ModQueue:
									return n("mod_queue");
								case cs.Multi:
									return u.a.createElement("img", {
										src: e.model.icon,
										className: Ds.a.customFeedIcon
									});
								case cs.NotificationsInbox:
									return n("notification");
								case cs.Popular:
									return n("popular");
								case cs.Premium:
									return n("premium");
								case cs.PublicAccessNetwork:
									return n("video_live");
								case cs.Report:
									return n("report");
								case cs.Unknown:
									return u.a.createElement("div", {
										className: Ds.a.unknownIcon
									});
								case cs.UserDataRequest:
									return n("add");
								case cs.UserProfile: {
									const n = Object(xs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return u.a.createElement(ys.a, {
										className: Ds.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case cs.UserProfileName:
									return u.a.createElement("div", {
										className: Ds.a.defaultIcon
									});
								case cs.ViewDraft:
									return n("edit");
								case cs.Geotagging:
								case cs.Topic:
									return n("custom_feed")
							}
						}
						switch (e.type) {
							case cs.Acknowledgements:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.All:
								return u.a.createElement(Ps.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Appeal:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Coins:
								return u.a.createElement(Ss.a, {
									className: Ds.a.coinIcon
								});
							case cs.Community:
							case cs.CommunitySearch: {
								const n = Object(xs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(Os.b, {
									className: Ds.a.subredditIcon,
									iconUrl: n.url,
									primaryColor: n.color
								})
							}
							case cs.CreateCommunity:
							case cs.CreatePost:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.DailyCharts:
								return u.a.createElement(_s.a, {
									className: Ds.a.defaultIcon
								});
							case cs.GlobalSearch:
								return u.a.createElement(js.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Home:
								return u.a.createElement(ks.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Inbox:
							case cs.Settings:
								return u.a.createElement(Es.a, {
									className: Ds.a.userIcon
								});
							case cs.ModListing:
								return u.a.createElement(Is.a, {
									className: Ds.a.modQueueIcon
								});
							case cs.SubredditCreation:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.ModMail:
								return u.a.createElement(ws.a, {
									className: Ds.a.modQueueIcon
								});
							case cs.ModQueue:
								return u.a.createElement(Is.a, {
									className: Ds.a.modQueueIcon
								});
							case cs.Multi:
								return u.a.createElement("img", {
									src: e.model.icon,
									className: Ds.a.customFeedIcon
								});
							case cs.NotificationsInbox:
								return u.a.createElement(Ms.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Popular:
								return u.a.createElement(Ts.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Premium:
								return u.a.createElement(Rs.a, {
									className: Ds.a.premiumIcon
								});
							case cs.PublicAccessNetwork:
								return u.a.createElement(Ls.c, {
									className: Ds.a.defaultIcon
								});
							case cs.Report:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Unknown:
								return u.a.createElement("div", {
									className: Ds.a.unknownIcon
								});
							case cs.UserDataRequest:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.UserProfile: {
								const n = Object(xs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return u.a.createElement(ys.a, {
									className: Ds.a.userIcon,
									iconUrl: n.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case cs.UserProfileName:
								return u.a.createElement("div", {
									className: Ds.a.defaultIcon
								});
							case cs.ViewDraft:
								return u.a.createElement(As.a, {
									className: Ds.a.defaultIcon
								});
							case cs.Geotagging:
							case cs.Topic:
								return u.a.createElement(Ns.a, {
									className: Ds.a.defaultIcon
								})
						}
					}(e, n, o), !this.props.isSubscriptionsPinned && (o ? u.a.createElement(ps.a, {
						name: "caret_down",
						className: Ds.a.caretDown
					}) : u.a.createElement(bs.b, {
						className: Ds.a.caretDown
					}))), c && !this.props.isPinnedSubscriptionsMenuDisabled && (o ? u.a.createElement(ps.a, {
						name: "side_menu",
						className: Ds.a.pin,
						onClick: d ? void 0 : this.props.onPinSubscriptions
					}) : u.a.createElement(hs.a, {
						className: Object(f.a)(Ds.a.pin, {
							[Ds.a.disabled]: d
						}),
						onClick: d ? void 0 : this.props.onPinSubscriptions
					})), c && u.a.createElement(Br, {
						canAutofocus: !0,
						className: Ds.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Wr = Gr(Object(p.b)(Hr, (e, t) => ({
					closeDropdown: () => e(Object(j.f)()),
					onLocationRefresh: (n, s) => e(Object(ms.f)(n, t.pageLayer, s)),
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
				}))(Object(T.c)(qr))),
				Vr = n("./src/reddit/components/JumpToContent/index.tsx"),
				Qr = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				zr = n("./node_modules/history/esm/history.js"),
				Kr = n("./node_modules/lodash/debounce.js"),
				Zr = n.n(Kr),
				Jr = n("./node_modules/uuid/v4.js"),
				Yr = n.n(Jr),
				Xr = n("./src/lib/makeSearchKey/index.ts"),
				$r = n("./src/reddit/actions/post.ts"),
				eo = n("./src/reddit/actions/search.ts"),
				to = n("./src/reddit/actions/search/trending.ts"),
				no = n("./src/reddit/actions/tooltip.ts"),
				so = n("./src/higherOrderComponents/asTooltip.tsx"),
				ro = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				oo = n("./src/reddit/constants/history.ts"),
				ao = n("./src/lib/search/index.ts"),
				io = n("./src/reddit/constants/parameters.ts"),
				co = n("./src/reddit/models/Search/index.ts");
			var lo = (e, t, n, s, r, o) => {
					let a, i;
					if ("" !== s.searchQuery) {
						if (s.isTypeaheadSuggestion) a = `/${s.isProfile?s.searchQuery.replace("u/","user/"):s.searchQuery}`;
						else {
							if (i = `${io.p}=${Object(ao.b)(s.rawQuery||s.searchQuery)}`, a = "/search/", s.section !== co.c.trending && s.section !== co.c.recent || r && r.source && (i += `&source=${r.source}`), e && o ? (a = `/r/${e.name}${a}`, i = `${i}&${io.s}=1`) : !e && s.subredditOrProfileRestrictedName && (a = `/${s.subredditOrProfileRestrictedName}${a}`, i = `${i}&${io.s}=1`), t) {
								a = `/user/${t.url.split("/")[2]}/m/${t.name}${a}`, i = `${i}&${io.s}=1&${io.j}=1`
							}
							r && r.category && (i = `${i}&${io.b}=${r.category}`)
						}
						return {
							url: a,
							qs: i
						}
					}
				},
				mo = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				uo = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				po = n("./src/reddit/icons/svgs/Search/index.tsx"),
				bo = n("./src/reddit/components/SearchDropdown/index.m.less"),
				ho = n.n(bo);
			const go = Object(p.b)(() => Object(g.c)({
					currentPage: At.b,
					nightmode: Ct.U
				})),
				fo = Object(Vt.t)(),
				vo = Object(so.a)(ro.b);
			class xo extends u.a.Component {
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
					} = e, p = lo(null, null, null, l, {
						source: Xr.a.Recent
					}), b = p && p.url, h = p && p.qs, g = this.generateFullSearchQuery(l);
					let v;
					o && (v = this.generateFullSearchQuery(o));
					const x = s ? Object(xt.getPageTypeFromCurrentPage)(s) : d ? Object(xt.getPageTypeFromCurrentPage)(d) : void 0,
						C = e => {
							e.stopPropagation(), e.preventDefault(), c(l)
						};
					return u.a.createElement(ls.a, {
						"aria-label": l.searchQuery,
						className: Object(f.a)(ho.a.listItem, fr.a.item, n, {
							[ho.a.mFocused]: !(!o || o.section !== co.c.recent || v !== g)
						}),
						onClick: this.onRecentSearchItemClick,
						key: g,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: b || "",
							state: {
								[oo.a.SearchOriginPage]: x
							},
							search: h
						}
					}, l.displayInfo && l.isTypeaheadSuggestion ? l.displayInfo.iconUrl ? u.a.createElement("div", {
						className: ho.a.subredditIcon,
						style: {
							backgroundImage: `url('${l.displayInfo.iconUrl}')`
						}
					}) : a ? u.a.createElement(ps.a, {
						name: "community",
						isFilled: !i,
						className: Object(f.a)(ho.a.defaultCommunityIcon, {
							[ho.a.mNightmode]: i
						})
					}) : u.a.createElement(mo.a, {
						className: ho.a.planetIcon
					}) : a ? u.a.createElement(ps.a, {
						name: "search"
					}) : u.a.createElement(po.a, {
						className: Object(f.a)(ho.a.listItemIcon, fr.a.icon)
					}), u.a.createElement("span", {
						className: fr.a.text
					}, g), u.a.createElement("div", {
						onMouseEnter: () => m(g),
						onMouseLeave: () => m(null),
						id: g
					}, a ? u.a.createElement(ps.a, {
						name: "clear",
						onClick: C
					}) : u.a.createElement(uo.a, {
						className: Object(f.a)(ho.a.listItemIcon, ho.a.mHoverable, fr.a.icon),
						onClick: C
					}), u.a.createElement(vo, {
						className: ho.a.fixedTextTooltip,
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
			var Co = fo(go(xo)),
				Oo = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				yo = n("./src/reddit/components/PostTitle/index.tsx"),
				Eo = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				Po = n("./src/reddit/constants/adEvents.ts"),
				jo = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				So = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				wo = n("./src/reddit/helpers/trackers/discoveryUnit.ts");
			const _o = Object(p.b)(() => Object(g.c)({
				currentPage: At.b
			}), e => ({
				trackTrendingSearchClick: t => e((e, n) => wo.E(n(), t, wo.a.SEARCH_DROPDOWN))
			}));
			class ko extends u.a.Component {
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
						if (e.onSetRecentSearch(t), Object(_r.d)(_r.a.SearchResults), e.trackTrendingSearchClick(e.trendingItem), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							e && this.props.fireAdPixelsOfType(e, Po.a.Click)
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
					} = this.props, c = this.isSponsored(), d = lo(null, null, null, i, {
						source: c ? Xr.a.PromotedTrend : Xr.a.Trending
					}), l = d && d.url, m = d && d.qs, p = t ? Object(xt.getPageTypeFromCurrentPage)(t) : a ? Object(xt.getPageTypeFromCurrentPage)(a) : void 0, b = u.a.createElement(ls.a, {
						id: s,
						"aria-label": i.searchQuery,
						className: Object(f.a)(ho.a.listItem, ho.a.mTrending, fr.a.item, fr.a.trending, e, {
							[ho.a.mFocused]: !(!n || n.section !== co.c.trending || i.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: `trending-${i.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: l || "",
							state: {
								[oo.a.SearchOriginPage]: p
							},
							search: m
						}
					}, u.a.createElement("div", {
						className: fr.a.trendingContent
					}, c && u.a.createElement("div", {
						className: fr.a.promoted
					}, r.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), u.a.createElement("div", null, o ? u.a.createElement(ps.a, {
						name: "popular",
						className: ho.a.trendingIcon
					}) : u.a.createElement(Ts.a, {
						className: Object(f.a)(ho.a.listItemIcon, ho.a.mTrending, fr.a.icon, fr.a.trending)
					}), u.a.createElement("span", null, u.a.createElement(yo.a, {
						className: Object(f.a)(ho.a.listItemText, ho.a.mTrending, fr.a.text, fr.a.trending),
						redditStyle: !0,
						size: yo.b.Small
					}, i.searchQuery)), i.post && u.a.createElement("div", {
						className: ho.a.postTitle
					}, i.post.title)), i.subredditInfo && u.a.createElement(jo.a, {
						className: Object(f.a)(fr.a.relatedSubredditMetaData, ho.a.listItemSubtext, {
							[ho.a.mNoPostTitle]: !i.post
						}),
						iconUrl: i.subredditInfo.icon || void 0,
						suffix: r.fbt._("{subreddit name} and more", [r.fbt._param("subreddit name", i.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), i.post && Object(So.a)(i.post) && u.a.createElement(Oo.a, {
						post: i.post,
						removeLink: !0,
						usePreview: c
					}));
					return c ? u.a.createElement(Eo.a, {
						post: i.post
					}, b) : b
				}
			}
			var Io = Object(Vt.t)()(_o(ko)),
				No = n("./src/reddit/components/Flair/index.tsx");
			class Mo extends u.a.Component {
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
					return u.a.createElement(ls.a, {
						"aria-label": s.searchQuery,
						className: Object(f.a)(ho.a.listItem, ho.a.mTypeahead, fr.a.item, t, {
							[ho.a.mFocused]: !(!n || n.searchQuery !== s.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: s.searchQuery,
						role: "link",
						tabIndex: -1,
						to: `/${s.isProfile?s.searchQuery.replace("u/","user/"):s.searchQuery}`
					}, s.displayInfo && s.displayInfo.iconUrl ? u.a.createElement("div", {
						className: ho.a.subredditIcon,
						style: {
							backgroundImage: `url('${s.displayInfo.iconUrl}')`
						}
					}) : e.isInIcons2020 ? u.a.createElement(ps.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(f.a)(ho.a.defaultCommunityIcon, {
							[ho.a.mNightmode]: e.nightmode
						})
					}) : u.a.createElement(mo.a, {
						className: ho.a.planetIcon
					}), u.a.createElement("div", null, s.displayInfo && s.displayInfo.subredditOrProfileName && u.a.createElement("div", {
						className: Object(f.a)(ho.a.listItemText, ho.a.mTypeahead, fr.a.text)
					}, s.displayInfo.subredditOrProfileName), u.a.createElement("div", null, s.displayInfo && null != s.displayInfo.subscribers && u.a.createElement("div", {
						className: Object(f.a)(ho.a.listItemSubtext, fr.a.subText)
					}, r.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [r.fbt._plural(s.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), s.displayInfo && s.displayInfo.isNSFW && u.a.createElement(No.b, {
						flair: {
							type: ht.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var To = n("./src/reddit/constants/zIndex.ts"),
				Ao = n("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: Ro
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lo = "SearchDropdown", Fo = "SearchDropdownContent", Do = 5, Uo = Object(so.a)(Ao.a);

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
					i = e.trendingItems.slice(0, Do),
					[c, d] = Object(m.useState)(new Array(Do).fill(!1)),
					l = () => {
						const e = new Array(i.length).fill(!1);
						return i.forEach((t, n) => {
							if (t.id) {
								const s = document.getElementById(`${Lo}-${t.id}`),
									r = document.getElementById(Fo);
								if (s && r) {
									const t = s.getBoundingClientRect(),
										o = r.getBoundingClientRect();
									t.top < o.bottom && t.bottom > o.top && (e[n] = !0)
								}
							}
						}), e
					};
				Object(m.useLayoutEffect)(() => {
					if (!e.isTrendingPending && e.isOpen && document.getElementById(Fo)) {
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
				e.isFixed && (b.zIndex = To.h);
				const h = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending,
					{
						typeaheadSuggestions: g
					} = e,
					v = Object(m.useMemo)(() => g.filter(e => e.isSubreddit), g);
				return u.a.createElement(Uo, {
					className: Object(f.a)(ho.a.dropdown, Ds.a.listContainer),
					id: Fo,
					isFixed: n,
					isOpen: e.isOpen,
					isOverlay: s,
					tooltipId: Lo,
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
				}, e.typeaheadSuggestions.map((t, n) => u.a.createElement(Mo, {
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
				})), h && e.recentSearches.map((t, n) => u.a.createElement(Co, {
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
					className: Object(f.a)(fr.a.title, ho.a.listItemTitle, {
						[ho.a.mWithBorder]: !!e.recentSearches.length
					})
				}, Ro._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || !e.isInUISimplificationI18NExperiment && e.isTrendingPending) && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Object(f.a)(ho.a.loadingItem, Er.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(ho.a.loadingItem, Er.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(ho.a.loadingItem, Er.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(ho.a.loadingItem, Er.a.item)
				}), u.a.createElement("div", {
					className: Object(f.a)(ho.a.loadingItem, Er.a.item)
				})), h && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && i.map(t => u.a.createElement(Io, {
					id: `${Lo}-${t.id}`,
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t,
					isInIcons2020: e.isInIcons2020
				})))
			}
			var Go = n("./src/reddit/contexts/ApiContext.tsx"),
				Ho = n("./src/lib/makeApiRequest/index.ts"),
				qo = n("./src/lib/omitHeaders/index.ts"),
				Wo = n("./src/reddit/constants/headers.ts");
			const Vo = (e, t) => Object(Ho.a)(Object(qo.a)(e, [Wo.a]), {
				endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
				method: v.cb.GET,
				data: {
					query: t
				}
			});
			var Qo = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				zo = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Ko = e => {
				const t = [],
					n = {};
				return e.forEach(e => {
					const s = e.data,
						r = e.kind;
					r === v.zb.Subreddit ? (t.push(s.name), n[s.name] = Object(zo.a)(s)) : r === v.zb.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(Qo.a)(s.subreddit, s.name))
				}), {
					data: n,
					order: t
				}
			};
			var Zo = n("./src/reddit/helpers/isArrayEqual.ts"),
				Jo = n("./src/reddit/helpers/trackers/searchResults.ts"),
				Yo = n("./src/reddit/selectors/experiments/trending.ts"),
				Xo = n("./src/reddit/helpers/chooseVariant/index.ts");
			const $o = e => Object(Ct.G)(e) || Wt.hd.Treatment1 === Object(Xo.c)(e, {
				experimentEligibilitySelector: Xo.a,
				experimentName: Wt.ed
			});
			var ea = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				ta = n("./src/reddit/selectors/searchResults.ts"),
				na = n("./src/reddit/selectors/tooltip.ts"),
				sa = n("./src/reddit/selectors/trending.ts"),
				ra = n("./src/reddit/controls/Search/index.m.less"),
				oa = n.n(ra);
			const aa = Object(Vt.t)({
					searchQuery: Vt.V,
					pageLayer: e => e
				}),
				ia = (e, t, n, s) => e(e => ({
					...Object(Jo.c)(e),
					source: "search",
					action: "click",
					noun: t,
					actionInfo: xt.actionInfo(e),
					search: {
						...xt.search(e, n, !0, s || void 0),
						structureType: xt.structureType(e, s),
						queryId: Object(_r.c)(_r.a.SearchResults)
					}
				})),
				ca = Object(p.b)(() => Object(g.c)({
					currentPage: At.b,
					currentSubredditName: At.d,
					currentUser: Ct.i,
					dropdownIsOpen: Object(na.b)(Lo),
					typeaheadIdsByQuery: ta.c,
					isInIcons2020: gs.b,
					isInTrendingExperiment: Yo.a,
					isInTypeaheadExperiment: $o,
					isInUISimplificationI18NExperiment: ea.a,
					isLoggedIn: Ct.J,
					isSubredditSearchAllowed: (e, {
						pageLayer: t
					}) => Object(Vt.L)(t),
					multireddit: Vt.d,
					nightmode: Ct.U,
					routeName: At.p,
					subreddit: Vt.q,
					trendingItems: sa.a,
					typeaheadSuggestions: ta.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(to.b)()),
					fireAdPixelsOfType: (t, n) => e(Object($r.u)(t, n)),
					onChange: t => e(Object(eo.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(eo.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, n, s, r) => {
						e(Object(h.b)(Object(zr.c)({
							pathname: t,
							search: n,
							state: {
								fromPage: s,
								[oo.a.SearchOriginPage]: r
							}
						})))
					},
					onToggleDropdown: () => e(Object(no.h)({
						tooltipId: Lo
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(eo.i)(t))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onSearch: (s, r) => {
						s.preventDefault();
						const {
							currentUser: o = null
						} = e, a = lo(e.subreddit, e.multireddit, o, r, n.searchOptions, e.isSubredditSearchAllowed);
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
						Object(_r.c)(_r.a.SearchResults) || Object(_r.d)(_r.a.SearchResults);
						const e = n.searchOptions || Object(Xr.c)({
							q: n.searchQuery
						});
						ia(n.sendEvent, xt.OriginElement.SearchBar, e, n.pageLayer ? n.pageLayer : void 0)
					}
				}));
			class da extends u.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await Vo(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = Ko(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(Dt.O)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(Dt.rb)({
								...e,
								section: co.c.recent
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
					}, this.onFetchTypeaheadSuggestions = Zr()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery.trim()) {
							let t = {
								...co.a
							};
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = Yr()()), t.section === co.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === co.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, xt.StructureType.Search, xt.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									n = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									s = !!this.props.subreddit && this.props.subreddit.isNSFW,
									r = co.b.text;
								t = {
									id: Yr()(),
									searchQuery: this.state.searchQuery,
									type: r,
									section: co.c.recent,
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
						this.props.sendEvent(Object(Jo.s)(s, r))
					}, this.onSendSearchClickRecentEvent = (e, t, n) => {
						this.props.sendEvent(Object(Jo.u)(e, t, n))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, n, s) => {
						this.props.sendEvent(Object(Jo.w)(e, t, n, s))
					}, this.onSendDropdownViewEvent = (e, t, n, s) => {
						const r = {
							displayQuery: n,
							rawQuery: s || n,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Jo.t)(e, r))
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
							const e = Object(Dt.B)(this.props.currentUser.id);
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
						const t = this.props.searchOptions || Object(Xr.c)({});
						t.q || (t.q = this.state.searchQuery), ia(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(Zo.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						n = Object(Zo.a)(e.trendingItems, this.props.trendingItems);
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
						className: Object(f.a)(oa.a.relativeWrapper, Ds.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: Lo,
						ref: this.setContainerRef
					}, u.a.createElement("label", {
						className: oa.a.iconContainer,
						htmlFor: "header-search-bar"
					}, e.isInIcons2020 ? u.a.createElement(ps.a, {
						name: "search"
					}) : u.a.createElement(po.a, {
						className: oa.a.icon
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
						className: oa.a.input,
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
			var la = Object(T.c)(aa(Object(Go.b)(ca(da)))),
				ma = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ua = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				pa = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				ba = n.n(pa);
			var ha = e => {
					const {
						className: t
					} = e;
					return u.a.createElement("div", {
						className: Object(f.a)(ba.a.Container, t)
					}, u.a.createElement("a", {
						"aria-label": r.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: ba.a.HomeLink,
						href: U.a.redditUrl
					}, u.a.createElement(ma.a, {
						className: ba.a.Snoo
					}), u.a.createElement(ua.a, {
						className: ba.a.Wordmark,
						color: "inherit"
					})))
				},
				ga = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				fa = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				va = n("./src/reddit/hooks/useTracking.ts"),
				xa = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Ca = n.n(xa),
				Oa = u.a.memo((function(e) {
					const t = Object(br.b)(),
						n = Object(va.a)(),
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
							s(Object(Ys.a)(Js.c[Js.b.Rpan])), n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [s, n]),
						c = Object(p.e)(Ct.J),
						d = Object(p.e)(Hs.a),
						l = Object(fa.a)(),
						b = Object(fa.a)(),
						h = Object(fa.a)();
					return u.a.createElement("div", {
						className: Object(f.a)(Ca.a.container, e.className)
					}, u.a.createElement("div", {
						className: Ca.a.row
					}, u.a.createElement(ls.a, {
						className: Ca.a.icon,
						innerRef: l.target.ref,
						to: c ? Js.c[Js.b.Popular] : Js.c[Js.b.Home],
						onClick: o,
						onMouseEnter: l.show,
						onMouseLeave: l.hide
					}, t ? u.a.createElement(ps.a, {
						name: "popular"
					}) : u.a.createElement(Ts.a, null)), u.a.createElement(ga.a, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible
					}, r.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), u.a.createElement(u.a.Fragment, null, u.a.createElement(ls.a, {
						className: Ca.a.icon,
						innerRef: b.target.ref,
						to: Js.c[Js.b.All],
						onClick: a,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, t ? u.a.createElement(ps.a, {
						name: "all"
					}) : u.a.createElement(Ps.a, null)), u.a.createElement(ga.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, r.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && u.a.createElement(u.a.Fragment, null, u.a.createElement(ls.a, {
						className: Ca.a.icon,
						innerRef: h.target.ref,
						to: Js.c[Js.b.Rpan],
						onClick: i,
						onMouseEnter: h.show,
						onMouseLeave: h.hide
					}, t ? u.a.createElement(ps.a, {
						name: "video_live"
					}) : u.a.createElement(Ls.c, {
						className: Ca.a.rpanVideoIcon
					})), u.a.createElement(ga.a, {
						arrowProps: h.arrowProps,
						popperProps: h.popperProps,
						visible: h.visible
					}, r.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					})))))
				})),
				ya = n("./src/reddit/actions/login.ts"),
				Ea = n("./src/reddit/helpers/trackers/authControls.ts"),
				Pa = n("./node_modules/lodash/isEmpty.js"),
				ja = n.n(Pa),
				Sa = n("./src/lib/matchRoute/index.ts"),
				wa = n("./src/chat/helpers/dom.ts"),
				_a = n("./src/reddit/actions/changeUsername.ts"),
				ka = n("./src/reddit/actions/chat/toggle.ts"),
				Ia = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Na = n("./src/reddit/actions/postCreation/general.ts"),
				Ma = n("./src/reddit/actions/preferences.ts"),
				Ta = n("./src/reddit/actions/users.ts"),
				Aa = n("./src/reddit/components/Settings/modalIds.ts"),
				Ra = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				La = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Fa = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				Da = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Ua = Object(Se.a)({
					getComponent: () => Object(Ke.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Ba = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Ga = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				Ha = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				qa = n.n(Ha);
			class Wa extends u.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Ga.e)(Ga.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Ga.c)(Ga.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Ga.e)(Ga.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Wa.shouldSendViewEvent && (Wa.shouldSendViewEvent = !1, this.props.sendEvent(Object(Ga.g)(Ga.a)))
				}
				render() {
					return u.a.createElement("div", {
						className: qa.a.container
					}, u.a.createElement("div", {
						className: qa.a.topLine
					}), u.a.createElement("button", {
						className: qa.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, u.a.createElement(Ne.a, {
						className: qa.a.closeIcon
					})), u.a.createElement("h5", {
						className: qa.a.title
					}, r.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), u.a.createElement("p", {
						className: qa.a.subtitle
					}, this.props.email), u.a.createElement("p", {
						className: qa.a.description
					}, r.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), u.a.createElement("div", {
						className: qa.a.buttonWrapper
					}, u.a.createElement(Ie.l, {
						className: qa.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, r.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), u.a.createElement(Ie.i, {
						className: Object(f.a)(qa.a.commonBtn, qa.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, r.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			Wa.shouldSendViewEvent = !0;
			const Va = Object(Ba.a)(Wa, [jr.a.Click, jr.a.Keydown, jr.a.Resize]);
			var Qa = Object(T.c)(Va),
				za = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Ka = n.n(za);
			const Za = Object(g.c)({
				isLoggedIn: Ct.J
			});
			class Ja extends u.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return u.a.createElement(M.a, {
						className: Object(f.a)(Ka.a.IFrame, {
							[Ka.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: A.c.GoogleOneTap
					})
				}
			}
			var Ya = Object(p.b)(Za)(Ja),
				Xa = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				$a = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ei = n.n($a);

			function ti() {
				return (ti = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ni = N.a.button("Button", ei.a),
				si = N.a.div("Container", ei.a);

			function ri(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return u.a.createElement(ni, ti({}, s, {
					id: e.id,
					onClick: e.onClick
				}), u.a.createElement(si, {
					className: Object(f.a)({
						[ei.a.isOpen]: n
					})
				}, t))
			}
			var oi = n("./src/reddit/components/BadgeCounter/index.tsx"),
				ai = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				ii = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				ci = n.n(ii);
			var di = e => {
					const t = Object(br.b)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(oi.a, {
						isActive: !!e.hasUnreadMessages,
						unreadCount: e.badgeCount
					}), t ? u.a.createElement(ps.a, {
						name: "chat",
						className: Object(f.a)(ci.a.icon2020, {
							[ci.a.isActive]: !!e.hasUnreadMessages
						}),
						isFilled: !!e.hasUnreadMessages
					}) : u.a.createElement(ai.a, {
						className: Object(f.a)(ci.a.chatIcon, {
							[ci.a.isActive]: !!e.hasUnreadMessages
						})
					}))
				},
				li = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				mi = n.n(li);
			const {
				fbt: ui
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var pi = e => {
				const {
					onCloseFlyout: t
				} = e;
				return u.a.createElement("div", {
					className: mi.a.container
				}, u.a.createElement("p", {
					className: mi.a.title
				}, ui._("New User Settings", null, {
					hk: "1Sziu9"
				})), u.a.createElement("h5", {
					className: mi.a.subtitle
				}, ui._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), u.a.createElement("p", {
					className: mi.a.description
				}, ui._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), u.a.createElement(Ie.l, {
					className: mi.a.dismissBtn,
					onClick: t
				}, ui._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var bi = e => {
				const t = Object(br.b)();
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(oi.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), t ? u.a.createElement(ps.a, {
					name: "message",
					isFilled: !!e.unreadCount,
					className: Object(f.a)(ci.a.icon2020, {
						[ci.a.isActive]: !!e.unreadCount
					})
				}) : u.a.createElement(ws.a, {
					className: Object(f.a)(ci.a.envelopeIcon, {
						[ci.a.isUnread]: !!e.unreadCount
					})
				}))
			};
			var hi = e => {
					const t = Object(br.b)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(oi.a, {
						isActive: !!e.unreadCount,
						unreadCount: e.unreadCount
					}), t ? u.a.createElement(ps.a, {
						name: "notification",
						className: ci.a.icon2020
					}) : u.a.createElement(Ms.a, {
						className: ci.a.notificationInboxIcon
					}))
				},
				gi = n("./src/lib/prettyPrintNumber/index.ts"),
				fi = n("./src/reddit/actions/alpha.ts"),
				vi = n("./src/reddit/actions/modMode.ts"),
				xi = n("./src/reddit/actions/profile/index.ts"),
				Ci = n("./src/reddit/constants/elementClassNames.ts"),
				Oi = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				yi = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ei = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Pi = n("./src/reddit/helpers/trackers/modTools.ts");
			const ji = e => ({
				screen: xt.screen(e),
				profile: xt.profile(e),
				subreddit: xt.subreddit(e)
			});
			var Si = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				wi = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				_i = n("./src/reddit/icons/svgs/Circle/index.tsx"),
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
				Bi = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Gi = n("./src/reddit/selectors/modModeEnabled.ts"),
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
					const t = Object(br.b)(),
						n = Object(p.d)(),
						s = Object(va.a)(),
						o = Object(Vt.Y)(),
						a = Object(p.e)(e => e.user.account),
						i = Object(p.e)(vs.c),
						c = Object(p.e)(Zi.a),
						d = Object(p.e)(Ki.b),
						l = Object(p.e)(Ki.a);
					if ((null === (e = null == o ? void 0 : o.meta) || void 0 === e ? void 0 : e.name) === v.Db.AVATAR) return null;
					!d && c && n(Object(Hi.a)()), l && s(Vi.b);
					const m = Object(Ei.c)(t ? ac("avatar_style") : Qi.a, Xi(r.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}), l, i)),
						b = Object(Ei.c)(t ? ac("add") : tr.a, Xi(r.fbt._("Create Avatar", null, {
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
				rc = N.a.wrapped(Ao.a, "Dropdown", tc.a),
				oc = Object(so.a)(rc),
				ac = e => t => u.a.createElement(ps.a, nc({
					name: e
				}, t)),
				ic = e => u.a.createElement(Ei.a, {
					className: tc.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, u.a.createElement("div", {
					className: tc.a.buttonText
				}, e.displayText), u.a.createElement(Oi.a, {
					className: tc.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				cc = Object(p.b)(() => Object(g.c)({
					isModModeEnabled: Gi.a,
					isOpen: Object(na.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Bi.a,
					nightmode: Ct.U,
					showPresence: Ct.gb,
					url: At.q
				}), (e, t) => ({
					toggleNightmode: t => e(Object(Ma.y)(t)),
					toggleShowPresence: t => e(Object(Ma.H)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(fi.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Ee.a.get("rseor3") && Ee.a.remove("rseor3", {
							domain: U.a.cookieDomain
						}), e(Object(fi.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						t.user && e(Object(xi.f)(Object(gt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(ya.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(yi.a)())), e(Object(Ta.p)())
					},
					toggleModMode: () => e(Object(vi.b)())
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
					} = e, p = Object(br.b)(), b = l && l.id;
					Object(m.useEffect)(() => {
						i()
					}, [b]);
					const h = Object(Ei.c)(p ? ac("settings") : Fi.a, r.fbt._("User Settings", null, {
							hk: "46J4vT"
						})),
						g = Object(Ei.b)(p ? ac("help") : ki.a, r.fbt._("Help Center", null, {
							hk: "4sGjc0"
						})),
						v = Object(Ei.b)(p ? ac("external_link") : Ri.a, r.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						})),
						x = Object(Ei.c)(p ? ac("logout") : Ni.a, r.fbt._("Log In / Sign Up", null, {
							hk: "4xbfvS"
						})),
						C = Object(Ei.c)(p ? ac("logout") : Ni.a, r.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})),
						O = Object(Ei.c)(Di.a, r.fbt._("Opt In to New Reddit", null, {
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
						E = Object(Ei.c)(p ? ac("coins") : Ss.a, r.fbt._("Reddit Coins", null, {
							hk: "3jj6Cb"
						}), {
							meta: y
						}),
						j = Object(Ei.c)(p ? ac("premium") : Rs.a, r.fbt._("Reddit Premium", null, {
							hk: "3FNqVS"
						}));
					return u.a.createElement("div", {
						className: Object(f.a)(tc.a.container, Ci.e)
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
					}, e.accountIcon && u.a.createElement(Es.a, {
						className: tc.a.imgIcon,
						shouldShowPresenceIndicator: !0
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
					}, p ? u.a.createElement(ps.a, {
						name: "karma",
						isFilled: !0,
						className: tc.a.karmaIcon
					}) : u.a.createElement(Ii.a, null), u.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							n = Object(gi.b)(t);
						return r.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [r.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && u.a.createElement("span", {
						className: tc.a.accountCoins
					}, u.a.createElement(Si.a, {
						className: tc.a.coinFontIcon,
						isFilled: p
					}), u.a.createElement("span", null, (e => Object(gi.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(e)))))) : u.a.createElement("span", {
						className: Object(f.a)(tc.a.accountWrapper, tc.a.isLoggedOut)
					}, u.a.createElement(Li.a, {
						className: tc.a.myProfileIcon
					})))(e.user), p ? u.a.createElement(ps.a, {
						name: "caret_down"
					}) : u.a.createElement(bs.b, {
						className: tc.a.dropdownTriangle
					})), u.a.createElement(Qr.a, null, r.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), u.a.createElement(oc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, l && o && u.a.createElement(u.a.Fragment, null, u.a.createElement("h3", {
						className: tc.a.sectionHeader,
						role: "heading"
					}, r.fbt._("Status", null, {
						hk: "2DsuQN"
					})), u.a.createElement(ic, {
						displayText: c ? r.fbt._("Online", null, {
							hk: "3haTNl"
						}) : r.fbt._("Hiding", null, {
							hk: "3uxzWx"
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
								...ji(t)
							}))(!c)), e.toggleShowPresence(!c)
						}
					}, u.a.createElement(_i.a, {
						className: Object(f.a)(tc.a.showPresence, {
							[tc.a.isLit]: c
						})
					}))), l && u.a.createElement(m.Fragment, null, u.a.createElement("h3", {
						className: tc.a.sectionHeader,
						role: "heading"
					}, r.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = r.fbt._("Profile", null, {
								hk: "czKk9"
							}),
							n = Object(Ei.c)(p ? ac("profile") : Ti.a, t);
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
							e.sendEvent(Object(Pi.h)(!s)), d()
						}
					}, p ? u.a.createElement(ps.a, {
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
								...ji(t)
							}))(a)), e.toggleNightmode(!a)
						}
					}, p ? u.a.createElement(ps.a, {
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
							Object(_r.d)(_r.a.GoldPayment, !0), e.sendEvent((() => e => ({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Object(_r.c)(_r.a.GoldPayment),
								...ji(e)
							}))())
						}
					}), u.a.createElement(j, {
						href: "/premium",
						onClick: () => {
							Object(_r.d)(_r.a.GoldPayment, !0), e.sendEvent((() => e => ({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Object(_r.c)(_r.a.GoldPayment),
								...ji(e)
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
							Object(P.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(Ea.b)()))
						}
					})))
				}))),
				lc = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				mc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				uc = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				pc = n("./src/reddit/helpers/trackers/inbox.ts"),
				bc = n("./src/reddit/helpers/trackers/navigation.ts"),
				hc = n("./src/reddit/routes/index.ts"),
				gc = n("./src/reddit/selectors/appBadges.ts");
			var fc = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				vc = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				xc = n("./src/reddit/selectors/sso.ts");
			const Cc = "change-username-tooltip-id",
				Oc = "email-verification-tooltip-id",
				yc = u.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(br.b)(),
						s = Object(fa.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: ci.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, u.a.createElement(ri, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: uc.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, n ? u.a.createElement(ps.a, {
						className: Object(f.a)(ci.a.icon2020, {
							[ci.a.isActive]: t.isModerateIconLit
						}),
						isFilled: t.isModerateIconLit,
						name: "mod"
					}) : u.a.createElement(Is.a, {
						className: Object(f.a)(ci.a.moderateIcon, {
							[ci.a.isLit]: t.isModerateIconLit
						})
					})), u.a.createElement(ga.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, r.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), u.a.createElement(uc.b, {
						className: ci.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName,
						showLegacyModmailIcon: t.showLegacyModmailIcon
					}))
				})),
				Ec = u.a.memo((function(e) {
					const t = Object(fa.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: ci.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement("a", {
						className: ci.a.link,
						href: `${U.a.redditUrl}/chat`,
						onClick: Object(wa.a)(e.onClickChat)
					}, u.a.createElement(di, {
						badgeCount: e.badgeCount,
						hasUnreadMessages: e.hasUnreadMessages
					}))), u.a.createElement(ga.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Pc = u.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(fa.a)();
					return u.a.createElement("span", {
						className: ci.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, u.a.createElement("a", {
						className: ci.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, u.a.createElement(bi, {
						unreadCount: t && t.inboxCount || 0
					})), u.a.createElement(ga.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, r.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				jc = u.a.memo((function(e) {
					const t = Object(fa.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: ci.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, u.a.createElement(ri, {
						"aria-expanded": e.inboxDropdownOpen,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: ci.a.notificationInboxIconContainer,
						id: lc.a,
						onClick: () => {
							e.onOpenInboxDropdown(), e.sendNavClickInbox()
						},
						isOpen: e.inboxDropdownOpen
					}, u.a.createElement(hi, {
						unreadCount: e.unreadCount
					})), !e.inboxDropdownOpen && u.a.createElement(ga.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), u.a.createElement(mc.a, {
						isOpen: e.inboxDropdownOpen
					}))
				})),
				Sc = u.a.memo((function(e) {
					const t = Object(br.b)(),
						n = Object(fa.a)();
					return u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
						className: ci.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, u.a.createElement("button", {
						className: ci.a.link,
						"aria-label": r.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, t ? u.a.createElement(ps.a, {
						className: ci.a.icon2020,
						name: "add"
					}) : u.a.createElement(As.a, {
						className: ci.a.postIcon
					}))), u.a.createElement(ga.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, r.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				wc = Object(Vt.t)({
					pageLayer: e => e
				}),
				_c = Object(g.c)({
					activeDropdownId: na.a,
					appBadges: gc.b,
					chatDirectMessagesCount: gc.e,
					email: Ct.l,
					hasUnreadChatMessages: gc.f,
					inboxBadgeCount: gc.g,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: fc.c,
					isInboxAppBadgingGqlEnabled: vc.a,
					isInboxRedesignActive: $s.c,
					isModerator: vt.g,
					isNameEditable: Ct.L,
					isResponsiveSettingsEnabled: zt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(Vt.K)(t) && !!Object(Ct.l)(e) && !Object(Ct.z)(e) && Object(Ct.J)(e) && !Object(Ct.H)(e),
					shouldShowChangeUsernameModals: xc.c,
					shouldShowLegacyModmailIcon: qs.o,
					unreadNotifications: Ct.jb
				}),
				kc = Object(p.b)(_c, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(_a.d)()),
					closeEmailVerificationTooltip: () => e(Object(Ia.b)()),
					fetchAppBadges: () => e(Object(Ra.c)()),
					onChatClick: () => e(Object(ka.e)()),
					onDismissCustomizeFlyout: () => e(Object(Ma.t)()),
					onOpenInboxDropdown: () => {
						e(Object(no.h)({
							tooltipId: lc.a
						}))
					},
					onOpenModerationDropdown: () => {
						e(Object(no.h)({
							tooltipId: uc.a
						})), e(Object(Sr.q)())
					},
					onOpenUserDropdown: () => e(Object(no.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(je.h)(Aa.b))
					},
					openKeepUsernameModal: () => {
						e(Object(je.h)(Aa.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Ia.b)()), e(Object(je.i)(Aa.a))
					},
					resendEmail: () => e(Object(Ta.v)(Ga.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Na.n(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(_a.f)(n))
					}
				}));
			class Ic extends u.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(pc.o)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(bc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenInboxDropdown = () => {
						this.props.onOpenInboxDropdown()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(Sa.a)(e.pathname, hc.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== v.Db.POST_CREATION && n !== v.Db.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.isInboxAppBadgingGqlEnabled && ja()(this.props.appBadges) && this.props.fetchAppBadges()
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
						toggleChangeEmailModal: w,
						unreadNotifications: _,
						user: k
					} = this.props, {
						googleOneTapIFrame: I
					} = this.state, N = !(!_ || !_.hasUnreadModmail && !_.hasUnreadOldModmail), M = k && Object(gt.e)(k) || "", T = Object(f.a)({
						[ci.a["m-responsive"]]: v
					});
					return u.a.createElement(bt.a, {
						id: Oc,
						ref: e => this.container = e,
						className: n
					}, u.a.createElement(bt.a, {
						className: ci.a.headerLinks,
						id: Cc
					}, h && u.a.createElement(yc, {
						isModerateIconLit: N,
						moderationDropdownOpen: e === uc.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						showLegacyModmailIcon: !!S,
						unreadNotifications: _
					}), k && u.a.createElement(m.Fragment, null, u.a.createElement(Ec, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadMessages: a
					}), b ? u.a.createElement(jc, {
						inboxDropdownOpen: e === lc.a,
						onOpenInboxDropdown: this.onOpenInboxDropdown,
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i
					}) : u.a.createElement(Pc, {
						onClickMail: this.onClickMail,
						unreadNotifications: _
					}), u.a.createElement(Sc, {
						onClickCreatePost: this.onClickCreatePost
					}), u.a.createElement("span", {
						className: ci.a.iconWrapper
					}, u.a.createElement(Xa.a, null)))), u.a.createElement(dc, {
						className: ci.a.headerUserDropdown,
						googleOneTapIFrame: I,
						onClick: C,
						user: k,
						sendEventWithName: this.sendEventWithName
					}), p && u.a.createElement("div", {
						className: ci.a.loggedInGoogleOneTap
					}, u.a.createElement(Ya, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && u.a.createElement(pi, {
						onCloseFlyout: x
					}), u.a.createElement(Qa, {
						closeTooltip: r,
						email: o,
						isOpen: P && l,
						resendEmail: E,
						toggleChangeEmailModal: w,
						tooltipId: Oc
					}), u.a.createElement(Ua, {
						email: o,
						shouldOpenTooltip: P
					}), g && !v && u.a.createElement(m.Fragment, null, u.a.createElement(Da.a, {
						closeTooltip: s,
						isOpen: c && !j,
						openChangeUsernameModal: O,
						openKeepUsernameModal: y,
						tooltipId: Cc,
						username: M
					}), j && u.a.createElement(Fa.a, {
						isResponsiveSettingsEnabled: v,
						overlayClassName: T,
						username: M,
						withOverlay: !0
					}), u.a.createElement(La.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Nc = Object(T.c)(wc(kc(Ic))),
				Mc = n("./src/reddit/selectors/meta.ts"),
				Tc = n("./src/reddit/components/Header/User/index.m.less"),
				Ac = n.n(Tc);
			const {
				fbt: Rc
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lc = Object(g.c)({
				account: e => e.user.account,
				origin: Mc.l
			}), Fc = u.a.memo(e => u.a.createElement("div", {
				className: Object(f.a)(e.className, Ac.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					n = U.a.accountManagerOrigin,
					s = t ? t.url : "/",
					r = t && t.meta && t.meta.name === v.Db.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + s);
				return u.a.createElement("div", {
					className: Ac.a.loggedOutRow
				}, u.a.createElement(Ie.m, {
					redditStyle: !0,
					className: Object(f.a)(Ac.a.login, Ac.a.button),
					href: `${n}/login/?dest=${r}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(Ea.a)("nav")))
					}
				}, Rc._("Log In", null, {
					hk: "4Cxw0g"
				})), u.a.createElement(Ie.j, {
					redditStyle: !0,
					className: Object(f.a)(Ac.a.separator, Ac.a.register, Ac.a.button),
					href: `${n}/register/?dest=${r}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(Ea.c)("nav")))
					}
				}, Rc._("Sign Up", null, {
					hk: "2WZPuJ"
				})))
			}(e), u.a.createElement(Nc, {
				className: Object(f.a)({
					[Ac.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var Dc = Object(Vt.t)()(Object(p.b)(Lc, e => ({
					onOpenLoginModal: () => {
						e(Object(je.k)({
							actionSource: je.a.HeaderLogin
						})), e(Object(ya.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(je.k)({
							actionSource: je.a.HeaderSignup
						})), e(Object(ya.j)())
					}
				}))(Object(T.c)(Fc))),
				Uc = n("./src/reddit/components/Header/index.m.less"),
				Bc = n.n(Uc);

			function Gc() {
				return (Gc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Hc = N.a.header("HeaderDynamicStyles", Bc.a),
				qc = Object(g.c)({
					isLoggedIn: Ct.J,
					isNightmode: Ct.U,
					isResponsiveSettingsEnabled: zt.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Wc = Object(Vt.t)({
					categoryName: Vt.b,
					pageLayer: e => e
				}),
				Vc = e => u.a.createElement("div", {
					className: Bc.a.left
				}, u.a.createElement(Qr.a, null, r.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), u.a.createElement(Vr.b, null), u.a.createElement(ls.a, {
					"aria-label": r.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: Bc.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, u.a.createElement(ma.a, {
					className: Bc.a.snoo
				}), u.a.createElement(ua.a, {
					className: Bc.a.wordmark
				})), e.children),
				Qc = e => u.a.createElement("div", {
					className: Bc.a.right
				}, e.children, u.a.createElement(Dc, null)),
				zc = e => u.a.createElement("div", {
					className: Bc.a.layout
				}, u.a.createElement(Vc, Gc({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement(Wr, null), u.a.createElement(la, {
					className: Bc.a.search
				})), u.a.createElement(Qc, null, u.a.createElement(Oa, {
					className: Bc.a.quickLinks
				}))),
				Kc = e => u.a.createElement("div", {
					className: Bc.a.layout
				}, u.a.createElement(Vc, Gc({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), u.a.createElement("div", {
					className: Bc.a.searchContainer
				}, u.a.createElement(la, {
					className: Bc.a.search
				}))), u.a.createElement(Qc, null));
			var Zc = Wc(Object(p.b)(qc, e => ({
					onReloadFrontpage: () => e(Object(kr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? zc : Kc, u.a.createElement(Hc, {
						"data-redditstyle": !0,
						className: Object(f.a)(Bc.a.container, e.className, {
							[Bc.a.bladeIsOpen]: e.isBladeOpen
						})
					}, u.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && u.a.createElement(ha, {
						className: Bc.a.MwebResponsiveHeader
					}))
				}))),
				Jc = n("./src/reddit/components/LightboxHeader/index.tsx"),
				Yc = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Xc = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				$c = n.n(Xc);
			const {
				fbt: ed
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const td = Object(p.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(j.j)())
			}));
			var nd = N.a.wrapped(td((function(e) {
					const t = Object(br.b)();
					return u.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, u.a.createElement("div", {
						className: $c.a.title
					}, u.a.createElement(mr, {
						className: $c.a.listHeader
					}, ed._("My Communities", null, {
						hk: "1CmPOc"
					})), u.a.createElement("div", {
						className: $c.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, t ? u.a.createElement(ps.a, {
						name: "close"
					}) : u.a.createElement(Ne.a, {
						className: $c.a.icon
					}))), u.a.createElement(Ur, null))
				})), "Component", $c.a),
				sd = n("./src/reddit/components/Survey/index.tsx"),
				rd = n("./src/reddit/components/ThemeProvider/index.tsx"),
				od = n("./src/reddit/actions/toaster.ts");
			const ad = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				id = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "primary"
					}
				}),
				cd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "secondary"
					}
				});
			var dd = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				ld = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				md = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				ud = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				pd = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				bd = n("./src/reddit/models/Toast/index.ts"),
				hd = n("./src/reddit/selectors/experiments/euEssentialCookies.ts"),
				gd = n("./src/reddit/selectors/structuredStyles.ts"),
				fd = n("./src/reddit/constants/colors.ts"),
				vd = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				xd = n.n(vd);

			function Cd() {
				return (Cd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Od = e => {
				const t = fd.b;
				switch (e.kind) {
					case bd.b.Error:
					case bd.b.AuthError:
					case bd.b.SuccessEndBroadcast:
						return t.warning;
					case bd.b.SuccessCommunity:
						return t.op;
					case bd.b.SuccessCommunityGreen:
					case bd.b.SuccessMod:
					case bd.b.SuccessUnlockComment:
						return t.approved;
					case bd.b.SuccessLockComment:
						return t.reported;
					case bd.b.EuCookiePolicy:
					case bd.b.UappBanner:
					case bd.b.Undo:
					default:
						return t.op
				}
			};
			class yd extends u.a.Component {
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
			const Ed = N.a.wrapped(yd, "PlainBread", xd.a);
			var Pd = e => u.a.createElement(Ed, Cd({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Od(e)
					}
				})),
				jd = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Sd = n.n(jd);
			const wd = N.a.span("Text", Sd.a);
			var _d = n("./src/reddit/components/Toaster/index.m.less"),
				kd = n.n(_d);
			const {
				fbt: Id
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Nd = N.a.wrapped(md.a, "AuthErrorToastIcon", kd.a), Md = N.a.wrapped(Ie.i, "AuthErrorToastPrimaryButton", kd.a);
			class Td extends u.a.Component {
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
					}, u.a.createElement(Pd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, u.a.createElement(Nd, null), u.a.createElement(wd, null, Id._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), u.a.createElement(Md, {
						type: "submit"
					}, Id._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Ad = Td,
				Rd = n("./src/lib/constants/euCookiePolicy.ts"),
				Ld = n("./src/lib/cookieConsent/index.ts"),
				Fd = n("./src/lib/permanentCookieOptions.ts"),
				Dd = n("./src/reddit/controls/Link/index.tsx"),
				Ud = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Bd = n.n(Ud);
			const {
				fbt: Gd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Hd = N.a.div("Icon", Bd.a), qd = () => u.a.createElement(Hd, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Wd = N.a.wrapped(Ie.i, "PrimaryButton", Bd.a), Vd = N.a.wrapped(Pd, "Bread", Bd.a);
			class Qd extends u.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Ld.b)({
							opted: !0,
							nonessential: !0
						}), Ee.a.set(Lt.b, Rd.d.toString(), Object(Fd.a)(10)), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Ld.b)({
							opted: !0,
							nonessential: !1
						}), Ee.a.set(Lt.b, Rd.d.toString(), Object(Fd.a)(10)), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("section", null, u.a.createElement(Vd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, u.a.createElement(qd, null), u.a.createElement("section", {
						className: Bd.a.EuCookiePolicyBody
					}, u.a.createElement(wd, null, Gd._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", u.a.createElement(Dd.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, Gd._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), u.a.createElement("section", {
						className: Bd.a.EuCookiePolicyOptions
					}, u.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, u.a.createElement(Wd, {
						type: "submit"
					}, Gd._("Reject non-essential", null, {
						hk: "M79jf"
					}))), u.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, u.a.createElement(Wd, {
						type: "submit"
					}, Gd._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			class zd extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ee.a.set(Lt.b, Rd.d.toString(), Object(Fd.a)(10)), this.props.onClose()
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
					}, u.a.createElement(Vd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, u.a.createElement(qd, null), u.a.createElement(wd, null, Gd._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", u.a.createElement(Dd.a, {
						href: "https://redditinc.com/policies/cookies",
						target: "_blank"
					}, Gd._("Learn More", null, {
						hk: "MNKD5"
					})), "."), u.a.createElement(Wd, {
						type: "submit"
					}, Gd._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var Kd, Zd = zd;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Kd || (Kd = {}));
			var Jd = n("./src/reddit/controls/Typography/index.tsx"),
				Yd = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Xd = n.n(Yd);

			function $d() {
				return ($d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const el = N.a.div("Container", Xd.a),
				tl = N.a.img("SideImage", Xd.a),
				nl = N.a.div("Main", Xd.a),
				sl = N.a.div("SubTitle", Xd.a),
				rl = Jd.a,
				ol = N.a.wrapped(Ie.j, "PrimaryLinkButton", Xd.a),
				al = N.a.wrapped(Ne.a, "CloseIcon", Xd.a);
			class il extends u.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(id(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(ad(this.props.name))
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
					return u.a.createElement(el, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, u.a.createElement(al, {
						onClick: this.props.onClose
					}), u.a.createElement(tl, {
						srcSet: n
					}), u.a.createElement(nl, null, u.a.createElement(sl, null, o), u.a.createElement(Jd.b, null, a), u.a.createElement(rl, null, e), u.a.createElement(ol, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, r.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const cl = Object(p.b)(null, e => ({
					onSignup: () => e(Object(ya.j)())
				}))(Object(T.c)(il)),
				dl = `${ll("subscribe-cap.png")} 1x,\n  ${ll("subscribe-cap@2x.png")} 2x,`;

			function ll(e) {
				return `${U.a.assetPath}/img/banner/${e}`
			}
			const ml = 3,
				ul = e => `${e}:1527210000`;
			var pl = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				bl = n.n(pl);
			const {
				fbt: hl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), gl = N.a.div("Icon", bl.a), fl = () => u.a.createElement(gl, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), vl = N.a.wrapped(Ie.i, "PrimaryButton", bl.a), xl = N.a.wrapped(Pd, "Bread", bl.a);
			class Cl extends u.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ee.a.set(Lt.k, ul(ml), Object(Fd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return u.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, u.a.createElement(xl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, u.a.createElement(fl, null), u.a.createElement(wd, null, hl._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [hl._param("=User Agreement", u.a.createElement(Dd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, hl._("User Agreement", null, {
						hk: "XS57W"
					}))), hl._param("=Privacy Policy", u.a.createElement(Dd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, hl._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), u.a.createElement(vl, {
						type: "submit"
					}, hl._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Ol = Cl;

			function yl() {
				return (yl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const El = [],
				Pl = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				jl = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Sl = {
					opacity: Object(I.spring)(0),
					x: Object(I.spring)(.6),
					y: Object(I.spring)(80, Pl)
				},
				wl = N.a.wrapped(md.a, "SnooFacepalm", kd.a),
				_l = N.a.wrapped(ud.a, "SnooHappy", kd.a),
				kl = N.a.wrapped(Os.b, "SubredditIcon", kd.a),
				Il = N.a.img("CustomIcon", kd.a),
				Nl = N.a.div("Container", kd.a),
				Ml = N.a.wrapped(Ne.a, "Close", kd.a),
				Tl = N.a.wrapped(dd.a, "LockIcon", kd.a),
				Al = N.a.wrapped(pd.a, "UnlockIcon", kd.a),
				Rl = N.a.wrapped(ld.a, "RemoveIcon", kd.a),
				Ll = e => u.a.createElement(u.a.Fragment, null, u.a.createElement(Ml, yl({
					className: "CloseIcon"
				}, e))),
				Fl = N.a.wrapped(Pd, "Bread", kd.a),
				Dl = Object(g.c)({
					subredditIcon: gd.b,
					toastSlices: e => e.toaster,
					enableEssentialEuCookieToast: hd.a
				}),
				Ul = Object(p.b)(Dl, e => ({
					dismissToast: t => () => e(Object(od.f)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(od.f)(n))
					}
				}));
			class Bl extends u.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Gl(e, this.props.toastSlices), this.getWillEnterStyles = () => jl, this.getWillLeaveStyles = () => Sl
				}
				render() {
					return this.props.toastSlices.length ? u.a.createElement(I.TransitionMotion, {
						defaultStyles: El,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => u.a.createElement(Nl, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === bd.b.Custom && void 0 !== t.customToastType) {
							const s = ql[t.customToastType];
							return u.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === bd.b.UappBanner) return u.a.createElement(Ol, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === bd.b.EuCookiePolicy) return this.props.enableEssentialEuCookieToast ? u.a.createElement(Qd, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => ad("eu_essential_policy"),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(id("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(cd("eu_essential_cookie_policy"))
								}
							}
						}) : u.a.createElement(Zd, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => ad("eu_cookie_policy"),
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === bd.b.AuthError) return u.a.createElement(Ad, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === bd.b.Modal ? Ie.i : Ie.o,
							r = t.kind === bd.b.Modal ? Ie.l : Ie.o;
						return u.a.createElement(Fl, {
							className: t.kind === bd.b.Modal ? kd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(ad(t.name)) : void 0,
							style: n
						}, u.a.createElement("div", {
							className: kd.a.ContentWrapper
						}, Hl(t, this.props.subredditIcon), t.kind === bd.b.SuccessLockComment && u.a.createElement(Tl, null), t.kind === bd.b.SuccessUnlockComment && u.a.createElement(Al, null), u.a.createElement(wd, null, t.text)), u.a.createElement("div", {
							className: kd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && u.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(id(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && u.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(cd(t.name))
							}
						}, t.secondButtonText)), u.a.createElement(Ll, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Gl = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(I.spring)(1),
						x: Object(I.spring)(1, Pl),
						y: Object(I.spring)(0, Pl)
					}
				})),
				Hl = (e, t) => {
					if (e.customIconAsset) return u.a.createElement(Il, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case bd.b.Error:
							return u.a.createElement(wl, null);
						case bd.b.SuccessEndBroadcast:
							return u.a.createElement(Rl, null);
						case bd.b.SuccessAward:
						case bd.b.SuccessCommunity:
						case bd.b.SuccessCommunityGreen:
							return u.a.createElement(_l, null);
						case bd.b.SuccessMod:
							return u.a.createElement(kl, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				ql = {
					[bd.a.subscribeCap]: e => u.a.createElement(cl, $d({
						name: Kd.LoggedOutMaxSubscriptions,
						sideImage: dl,
						title: r.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: r.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Wl = Ul(Object(T.c)(Bl)),
				Vl = n("./src/reddit/featureFlags/profileCollections.ts");
			const Ql = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				zl = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var Kl = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Zl = n.n(Kl);
			var Jl = N.a.div("Wrapper", Zl.a),
				Yl = n("./src/reddit/components/AlertBanner/index.m.less"),
				Xl = n.n(Yl);
			const {
				fbt: $l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), em = () => u.a.createElement(Jl, {
				className: Object(f.a)(Xl.a.wrapper, Xl.a.suspended)
			}, u.a.createElement("span", null, $l._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), u.a.createElement("a", {
				className: Xl.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, $l._("Learn more", null, {
				hk: "1OTc8q"
			}))), tm = () => u.a.createElement(Jl, {
				className: Object(f.a)(Xl.a.wrapper, Xl.a.fpr)
			}, u.a.createElement("span", null, $l._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), u.a.createElement("a", {
				className: Xl.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, $l._("Learn more", null, {
				hk: "1OTc8q"
			}))), nm = ({
				updateLink: e,
				onClickOldReddit: t
			}) => u.a.createElement(Jl, {
				className: Object(f.a)(Xl.a.wrapper, Xl.a.deprecated)
			}, u.a.createElement("span", null, $l._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [$l._param("update your browser", u.a.createElement(sm, {
				link: e
			}, $l._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), u.a.createElement("span", null, $l._("If you do not update your browser, we suggest you visit {old reddit} .", [$l._param("old reddit", u.a.createElement("a", {
				className: Xl.a.underlineLink,
				href: U.a.oldRedditUrl,
				onClick: t
			}, $l._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), sm = ({
				children: e,
				link: t
			}) => null !== t ? u.a.createElement("a", {
				className: Xl.a.underlineLink,
				href: t
			}, e) : u.a.createElement("span", null, e);
			class rm extends u.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(zl())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Ql())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? u.a.createElement(nm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? u.a.createElement(tm, null) : n ? u.a.createElement(em, null) : null
				}
			}
			var om = Object(T.c)(rm),
				am = n("./src/reddit/components/AlertBanner/heights.ts"),
				im = n("./src/reddit/components/PopupPortal/index.tsx"),
				cm = n("./src/reddit/constants/componentSizes.ts"),
				dm = n("./src/reddit/constants/elementIds.ts"),
				lm = n("./src/reddit/constants/posts.ts"),
				mm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				um = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				pm = n("./src/reddit/helpers/postCollection.ts"),
				bm = n("./src/reddit/models/Theme/index.ts"),
				hm = n("./src/reddit/selectors/experiments/survey.ts"),
				gm = n("./src/reddit/selectors/notificationBanner.ts"),
				fm = n("./src/reddit/selectors/posts.ts"),
				vm = n("./src/reddit/components/AppRouter/index.m.less"),
				xm = n.n(vm);

			function Cm() {
				return (Cm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Om = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => u.a.createElement("div", Cm({
					className: Object(f.a)(xm.a.main, {
						[xm.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				ym = Object(x.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const r = Object(F.a)({
						theme: n,
						...s
					});
					return u.a.createElement("div", Cm({
						className: Object(f.a)(xm.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(bm.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Ut.c)(t)}px`
						}
					}, s))
				}),
				Em = ({
					className: e,
					divRef: t,
					...n
				}) => u.a.createElement("div", Cm({
					className: Object(f.a)(xm.a.lightboxHeaderWrapper, e)
				}, n, {
					ref: t
				})),
				Pm = Object(gm.a)(Yc.a.EmailCollectionBannerId),
				jm = Object(p.b)(() => Object(g.c)({
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
					isNpsSurveyEnabled: hm.c,
					isSubscriptionsPinned: vs.b,
					isSuspended: Ct.O,
					isFPR: Ct.H,
					posts: fm.L,
					profileCollectionsEnabled: Vl.a,
					showEmailCollectionBanner: e => !Object(Vt.J)(e.platform.currentPage) && Pm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(j.j)()),
					onPostDismissTrigger: () => e(Object(S.f)())
				})),
				Sm = (e, t) => !(!e.state || !e.state[oo.a.IsOverlay] || t === e);
			class wm extends u.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < cm.l && this.props.onUnpinSubscriptions()
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
								a = o && o.belongsTo.type === lm.a.PROFILE;
							return !(!o || !Object(pm.a)(o) || a && !n)
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
					} = this.props, s = n.state && n.state[oo.a.IsOverlay], r = Object(E.a)(this.previousLocation, e.location);
					t && s && r && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const o = Object(E.a)(this.previousLocation, this.props.location),
						a = s ? this.previousPage : this.props.currentPage;
					if (a) {
						const {
							meta: t,
							urlParams: n
						} = a, s = t && (t.name === v.Db.INDEX || t.name === v.Db.SUBREDDIT && n.subredditName === Js.b.Popular), r = Object(D.c)(this.props.frontpageSignupVariant), o = Object(D.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || r || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = Sm(e.location, this.previousLocation);
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
					} = this.state, f = this.context, x = Sm(d, this.previousLocation);
					d.state && d.state[oo.a.IsOverlay] && !x ? d.state[oo.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[oo.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[oo.a.CloseLocation] && this.previousLocation.state[oo.a.CloseLocation] === d.state[oo.a.CloseLocation] ? d.state[oo.a.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, oo.a.CloseLocation)
					} : d.state[oo.a.CloseLocation] = this.previousLocation);
					const C = Object(E.a)(this.previousLocation, d),
						O = x || C ? this.previousLocation : d,
						y = x || C ? this.previousPage : e,
						P = !(!(y && y.meta && y.meta.name === v.Db.SEARCH_RESULTS && y && y.queryParams) || y.queryParams[io.s]),
						j = !(!y || !y.meta || y.meta.name !== v.Db.MODERATION_PAGES),
						S = Object(Vt.w)(y),
						_ = this.getIsPostCollection(),
						k = h && !g;
					return n ? r.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Vt.a.Provider, {
						value: y
					}, u.a.createElement(Vr.c, {
						isOverlayOpen: x
					}, u.a.createElement(rd.a, {
						forceRedditTheme: P
					}, h && u.a.createElement(Oe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), u.a.createElement(_m, {
						browserInfo: f,
						isFPR: s,
						isInline: k,
						isSuspended: i
					})), u.a.createElement(mm.a.Provider, {
						value: !1
					}, u.a.createElement(rd.a, {
						forceRedditTheme: P || j,
						isCommentsPage: S
					}, u.a.createElement(km, {
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
					}, x && u.a.createElement(mm.a.Provider, {
						value: !0
					}, u.a.createElement(rd.a, {
						isOverlay: !0
					}, u.a.createElement(Im, {
						isPostCollection: _,
						location: d,
						onClickOutsideOverlay: l,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: f,
						showFPR: s,
						showSuspended: i
					}))), u.a.createElement(rd.a, null, u.a.createElement(m.Fragment, null, u.a.createElement("div", {
						id: im.a,
						className: xm.a.popupContainer
					}), u.a.createElement(Wl, null), u.a.createElement(sd.a, null), b && u.a.createElement(w.a, null), u.a.createElement(Ht, null), u.a.createElement(ds, null)))))
				}
			}
			wm.contextType = C.a;
			const _m = Object(T.c)(e => {
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
					return u.a.createElement(m.Fragment, null, u.a.createElement(om, o), u.a.createElement(Zc, {
						className: Object(f.a)(xm.a.header, Object(am.b)(xm.a, o), {
							[xm.a.inline]: s
						})
					}))
				}),
				km = Object(T.c)(class extends u.a.Component {
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
						return u.a.createElement(Om, {
							"aria-hidden": s,
							className: Object(f.a)(Object(am.b)(xm.a, this.props), {
								[xm.a.withUpsell]: !!e,
								[xm.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && u.a.createElement(nd, {
							className: Object(f.a)(xm.a.pinnedSubscriptions, Object(am.b)(xm.a, this.props)),
							"data-redditstyle": !0
						}), u.a.createElement(b.f, {
							location: t
						}, n), c && u.a.createElement("div", {
							className: Object(f.a)(xm.a.bottomSpacer, Object(am.a)(xm.a, this.props))
						}))
					}
				});
			class Im extends u.a.Component {
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
							t(e.state[oo.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = um.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(y.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && um.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === v.Db.SUBREDDIT_CREATION || t.meta.name === v.Db.PUBLIC_ACCESS_NETWORK), o = e;
					return u.a.createElement(ym, {
						className: Object(f.a)(Object(am.b)(xm.a, this.props), {
							[xm.a.mIsCommentsLightbox]: r,
							[xm.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, u.a.createElement("div", {
						className: Object(f.a)(xm.a.overlayWrapper, Object(am.b)(xm.a, this.props))
					}, u.a.createElement("div", {
						className: Object(f.a)(xm.a.overlayScrollContainer, {
							[xm.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: dm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && u.a.createElement(Em, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(f.a)(Object(am.b)(xm.a, this.props), {
							[xm.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, u.a.createElement(Jc.a, {
						page: t
					})), u.a.createElement(b.f, null, n), u.a.createElement("div", {
						className: Object(f.a)(xm.a.bottomSpacer, Object(am.a)(xm.a, this.props))
					}))))
				}
			}
			t.b = jm(Object(T.c)(wm))
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
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = n("./src/reddit/hooks/usePrevious.ts"),
				i = n("./src/reddit/components/CountAnimation/config.ts"),
				c = n("./src/reddit/components/CountAnimation/helpers.ts"),
				d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: n,
					incrementDelta: d,
					initialDelay: m,
					subsequentRecurringDelay: u,
					shouldDisjointAnimation: p,
					id: b
				} = e, [h, g] = Object(s.useState)(!1), [f, v] = Object(s.useState)(!0), [x, C] = Object(s.useState)([]), [O, y] = Object(s.useState)(Object(c.d)(t).reverse()), E = Object(s.useRef)(!1), P = Object(s.useRef)(null), j = Object(s.useRef)(e => {}), S = Object(s.useRef)();
				j.current = Object(s.useCallback)(e => {
					let t = e || d();
					const s = [...O].reverse().join("");
					let r = parseInt(s) + t;
					r > n && (t = n - parseInt(s), r = n);
					const o = Object(c.d)(r).reverse();
					g(!1), C(O), y(o), v(!1), S.current = setTimeout(() => {
						g(!0)
					}, 0)
				}, [n, d, O]);
				const w = Object(s.useRef)(() => {}),
					_ = Object(s.useRef)(),
					k = Object(s.useRef)();
				w.current = Object(s.useCallback)(() => {
					k.current = setTimeout(() => {
						j.current();
						const e = [...x].reverse().join("");
						parseInt(e) < n && w.current()
					}, u())
				}, [n, u, x]);
				const I = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (E.current || (E.current = !0, _.current = setTimeout(() => {
							j.current(), w.current()
						}, m())))
					})
				}, []);
				Object(o.a)(P, I);
				const N = Object(a.a)(n);
				Object(s.useEffect)(() => (void 0 !== N && N !== n && j.current(n - N), () => {
					clearTimeout(_.current), clearTimeout(k.current), clearTimeout(S.current)
				}), [n]);
				const M = Object(s.useCallback)(() => v(!0), [v]),
					T = 0 === x.length,
					A = f || T;
				return r.a.createElement("div", {
					className: l.a.countAnimation,
					ref: P
				}, O.map((e, t) => {
					const n = x[t] || 0,
						s = Object(c.f)(n, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: M,
						style: h && x.length > 0 && !f ? {
							transform: `translateY(-${p&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(p?i.b.disjointAnimationDuration:i.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, A ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!p || p && n) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					id: b,
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...O].reverse().join("")))
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
				w = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				_ = n.n(w);
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
					isInIcons2020: y.b,
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
					} = this.props, c = this.getButtonText(), d = !!e || r, m = Object(l.a)(_.a.icon, {
						[_.a.special]: d
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, _.a.ctaContainer, {
							[_.a.special]: d
						}),
						id: I,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(_.a.ctaContent, {
							[_.a.special]: d
						})
					}, o ? i.a.createElement(C.a, {
						name: "coins",
						className: m
					}) : i.a.createElement(O.a, {
						className: m
					}), i.a.createElement("span", {
						className: _.a.text
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
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				myProfileIcon: "VIlSggfRUkuuHTKa_h8jp",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				showPresence: "_3zM0xwFOZi-1iycB4YxfHZ",
				isLit: "_1YhJa_WJwwG8c3lmEqlun8",
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
				return A
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return H
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/omit.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				p = n("./src/reddit/components/ResizeSensor/index.tsx"),
				b = n("./src/reddit/components/InboxTooltip/index.m.less"),
				h = n.n(b);
			const g = 3;
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.ref = i.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= g) {
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
						index: o,
						isInboxPostEmbedEnabled: a,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l
					} = this.props, m = o + 1 <= g;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.ref,
						className: h.a.notificationResizeWrapper
					}, i.a.createElement(u.a, {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: a,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l
					}), !!m && i.a.createElement(p.a, {
						onResize: this.handleResize
					})))
				}
			}
			var v = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				x = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = {},
				y = "",
				E = 0,
				P = "200px";
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.container = i.a.createRef(), this.state = {
						notificationHeights: O
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > E && this.props.setActiveOverflowMenuId(y)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return 0 === t ? P : t
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.renderNotifications = () => {
						const e = o()(this.props, ["notifications"]),
							{
								notificationHeights: t
							} = this.state;
						return this.props.notifications.map((n, s) => i.a.createElement(f, C({}, e, {
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
					return i.a.createElement("div", {
						className: h.a.notificationList,
						ref: this.container,
						style: {
							height: s,
							maxHeight: s
						}
					}, n ? this.renderNotifications() : e ? i.a.createElement(v.a, null) : i.a.createElement(x.a, null))
				}
			}
			var S = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				k = n("./src/reddit/helpers/trackers/inbox.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				M = n("./src/reddit/icons/svgs/Settings/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "INBOX--TOOLTIP",
				R = [],
				L = l.a.wrapped(w.a, "StyledDropdown", h.a),
				F = Object(S.a)(L, [c.a.Click]),
				D = l.a.wrapped(M.a, "Gear", h.a),
				U = l.a.wrapped(N.a, "MarkAsRead", h.a),
				B = e => {
					const t = !!e.messagesBadgeCount;
					return i.a.createElement("nav", {
						className: h.a.topNav
					}, i.a.createElement("span", {
						className: h.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), i.a.createElement("span", {
						className: h.a.topNavLinks
					}, i.a.createElement("span", {
						className: h.a.messagesLinkContainer
					}, i.a.createElement(_.a, {
						className: Object(d.a)(h.a.messagesLink, {
							[h.a.mActive]: t
						}),
						onClick: e.onMessagesClick,
						to: t ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					})), i.a.createElement(m.a, {
						className: h.a.badgeCount,
						isActive: t,
						unreadCount: e.messagesBadgeCount
					})), e.isInboxMarkAllAsReadEnabled && i.a.createElement("button", {
						className: h.a.navLink,
						onClick: e.markAllAsRead
					}, i.a.createElement(U, null)), i.a.createElement(_.a, {
						className: h.a.navLink,
						onClick: e.sendInboxClickSettings,
						to: "/settings/notifications"
					}, i.a.createElement(D, null))))
				},
				G = e => i.a.createElement("div", {
					className: h.a.bottomBar
				}, i.a.createElement(_.a, {
					className: h.a.bottomLink,
					onClick: e.sendInboxClickSeeAll,
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				H = e => {
					const t = Object(I.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isInboxMarkAllAsReadEnabled: r,
							isOpen: a,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l
						} = e,
						m = !(!l || !l.length),
						u = o()(e, ["isOpen"]);
					return i.a.createElement(F, {
						id: A,
						isOpen: a,
						tooltipId: A,
						isFixed: !0,
						tooltipPosition: ["right", "top"]
					}, i.a.createElement("div", {
						className: h.a.tooltipContainer
					}, i.a.createElement(B, {
						isInboxMarkAllAsReadEnabled: r,
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(k.d)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(k.k)({
								badgeCount: s,
								tab: k.c.Messages
							})), t(Object(k.e)()), n()
						},
						sendInboxClickSettings: () => t(Object(k.j)(k.a.MiniInbox))
					}), i.a.createElement(j, T({}, u, {
						isPending: c
					})), (m || c) && i.a.createElement(G, {
						sendInboxClickSeeAll: () => t(Object(k.i)())
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
				close: "c_rRg_d32D6ZO5sV8DmMM",
				closeText: "C9XkFfcvNxFrFRVdKxc8x",
				closeIcon: "_3hSPveXgjl1l-8ltRYGAIh",
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
				w = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts"),
				I = n("./src/reddit/selectors/experiments/categories.ts"),
				N = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/LightboxHeader/index.m.less"),
				R = n.n(A);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(i.c)({
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
				D = Object(a.b)(F, (e, {
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
			class U extends o.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: n,
						page: a,
						post: i,
						isScoreDiscounted: l
					} = this.props, m = G[i && i.media ? i.media.type : _.o.EMBED], h = !i && a && a.meta && a.meta.name === d.Db.META_MEMBERSHIP_PAYWALL_PAGE;
					return o.a.createElement("div", {
						className: Object(c.a)(R.a.container, e, {
							[R.a.isCollection]: i && Object(v.a)(i)
						})
					}, o.a.createElement("div", {
						className: R.a.postDetails
					}, i && o.a.createElement(r.Fragment, null, l ? void 0 : o.a.createElement(u.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: i,
						onVoteClick: n,
						redditStyle: !0
					}), o.a.createElement(m, {
						className: R.a.mediaIcon
					}), o.a.createElement(b.c, {
						className: R.a.postTitle,
						post: i,
						size: b.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.b.lightboxHeaderText,
						titleLinkClassName: R.a.postTitleLink,
						showCategoryTag: !0
					}), o.a.createElement(p.a, {
						post: i,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), h && a && a.urlParams.subredditName && o.a.createElement("div", {
						className: R.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${a.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: R.a.actions
					}, o.a.createElement(B, {
						onClick: t || this.closeLightbox
					})))
				}
			}
			const B = o.a.memo(e => {
					const t = Object(x.a)(),
						n = Object(x.b)();
					return t ? o.a.createElement(f.q, {
						className: R.a.CloseButton,
						size: f.c.XS,
						onClick: e.onClick,
						priority: f.b.Plain,
						Icon: n ? e => o.a.createElement(C.a, L({
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
					}) : o.a.createElement(f.o, {
						className: R.a.close,
						onClick: e.onClick,
						title: s.fbt._("Close", null, {
							hk: "4gbyAA"
						}),
						"aria-label": s.fbt._("Close", null, {
							hk: "4gbyAA"
						})
					}, o.a.createElement(S.a, {
						className: R.a.closeIcon
					}), o.a.createElement("span", {
						className: R.a.closeText
					}, s.fbt._("Close", null, {
						hk: "4gbyAA"
					})))
				}),
				G = {
					[_.o.GIFVIDEO]: y.a,
					[_.o.IMAGE]: P.a,
					[_.o.TEXT]: j.a,
					[_.o.RTJSON]: j.a,
					[_.o.VIDEO]: O.a,
					[_.o.EMBED]: E.a,
					[_.o.LIVEVIDEO]: O.a,
					[_.o.GALLERY]: e => {
						const t = Object(x.b)();
						return o.a.createElement("i", {
							className: Object(c.a)(R.a.galleryIcon, e.className)
						}, t ? o.a.createElement(C.a, {
							name: "media_gallery"
						}) : o.a.createElement(w.a, null))
					}
				};
			t.a = Object(h.c)(D(U))
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
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overlowMenuContainer: "w_ehW50Lg2v1-XfJ1CWEe",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO"
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
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/CSSVariableProvider/index.tsx"),
				i = n("./src/reddit/constants/zIndex.ts");
			const c = "POPUP_CONTAINER";
			let d;
			const l = ["right", "top"],
				m = ["left", "top"];

			function u(e) {
				const [t, n] = Object(s.useState)(null);
				return Object(s.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const n = t.getBoundingClientRect(),
								{
									style: s
								} = Object(o.b)({
									isFixed: !1,
									targetBox: n,
									targetPosition: l,
									tooltipPosition: m,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: s.left,
								y: s.top
							}
						})(e);
						t && n(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function p(e) {
				const {
					children: t,
					rightOf: n
				} = e, s = u(n);
				return s && (d || (d = document.getElementById(c))) ? Object(a.d)(r.a.createElement("div", {
					style: {
						position: "absolute",
						transform: `translate(${s.x}px, ${s.y}px)`,
						zIndex: i.e
					}
				}, t), d) : null
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
					region: m.m
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
				return U
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
				j = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				S = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.tsx"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/pages/InternalServerError/index.tsx"),
				N = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				M = n("./src/reddit/selectors/theme.ts");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(s.a)({
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
				R = Object(s.a)({
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
				L = Object(c.c)({
					theme: M.a,
					isInButtons2020: N.a,
					isInIcons2020: N.b
				}),
				F = ({
					children: e,
					isInButtons2020: t,
					isInIcons2020: n,
					theme: s
				}) => {
					const r = Object(k.a)({
						theme: s
					});
					return o.a.createElement(_.b.Provider, {
						value: {
							[_.a.Buttons]: t,
							[_.a.Icons]: n
						}
					}, o.a.createElement("div", {
						className: Object(E.a)(C.a.container, t ? "isInButtons2020" : "isNotInButtons2020", n ? "isInIcons2020" : "isNotInIcons2020"),
						style: {
							"--background": r.body,
							"--canvas": r.canvas
						}
					}, n ? o.a.createElement(R, null) : o.a.createElement(A, null), e))
				},
				D = Object(a.b)(L, {})(F);

			function U(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return o.a.createElement(w.a, null, o.a.createElement(D, null, o.a.createElement(y.a, null), o.a.createElement(O.a, null), o.a.createElement(j.a, null), o.a.createElement(S.a, null, o.a.createElement(t, null, o.a.createElement(i.d, {
						component: B(n)
					})))))
				}
				return o.a.createElement(I.a, {
					error: e.error
				})
			}
			const B = e => t => o.a.createElement(P.b, T({
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
						d = Object(i.e)(O.qb),
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
							n(-1), o(0), c(!1), r(null), m > 1 && u(Object(d.e)({
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
				if (Object(p.i)(e) || Object(h.ib)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.F)(e, n);
				if (!s) return;
				if (Object(h.hb)(e, {
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
				return Object(h.tb)(e).nightmode
			}, (e, t) => {
				if (!Object(h.tb)(e).hideNSFW) return !0;
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				u = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = n.n(u);
			var b = e => {
					const {
						showPresence: t
					} = e;
					return r.a.createElement(m.a, {
						className: Object(l.a)(p.a.presenceDot, {
							[p.a.isLit]: t
						})
					})
				},
				h = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				g = n("./src/reddit/components/UserIcon/UserIcon.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(a.c)({
					currentUser: d.i,
					isNightMode: d.U,
					isPresenceExpEnabled: c.a,
					isPresenceUserPrefEnabled: d.gb,
					shouldHideNSFW: d.B
				}),
				x = Object(o.b)(v);
			t.a = x(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					isPresenceExpEnabled: o,
					...a
				} = e, c = Object(i.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: p.a.currentUserIconWrapper
				}, c ? r.a.createElement(h.a, {
					className: e.className,
					headshot: t.accountIcon
				}) : r.a.createElement(g.a, f({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), o && n && r.a.createElement(b, {
					showPresence: s
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/controls/Score/index.tsx"),
				u = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/VerticalVotes/index.m.less"),
				v = n.n(f);
			const x = Object(i.c)({
					isNightmode: g.U,
					totalDiscount: h.d,
					variantAnimationConfig: h.e
				}),
				C = Object(a.b)(x),
				O = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isNightmode: n,
							shouldShowScore: r = !0,
							upvoteButtonClassName: a,
							containerRef: i,
							model: d,
							totalDiscount: p,
							variantAnimationConfig: h,
							postId: g
						} = e,
						f = O(e),
						x = y(e),
						C = d.voteState;
					return o.a.createElement("div", {
						className: Object(c.a)(v.a.votesContainer, e.className),
						id: `vote-arrows-${d.id}`,
						ref: i
					}, f ? o.a.createElement(u.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": C === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: n,
						onClick: this.onUpvote,
						voteState: C
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": C === b.a.upvoted,
						className: Object(c.a)(l.n, a),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(u.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: C
					})), !e.compact && r && o.a.createElement(m.a, {
						className: Object(c.a)(v.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: C,
						isScoreHidden: e.model.isScoreHidden,
						totalDiscount: p,
						shouldDisjointAnimation: null == h ? void 0 : h.shouldDisjointAnimation,
						shouldShowPageTransPersistence: null == h ? void 0 : h.shouldShowPageTransPersistence,
						postId: g
					}), x ? o.a.createElement(u.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": C === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: n,
						onClick: this.onDownvote,
						voteState: C
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": C === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(u.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: C
					})))
				}
			}
			const P = Object(d.a)(C(E));
			t.a = P
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
				return N
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return A
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const r = e(s),
					a = t(s),
					i = !r && a;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: r,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				m = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(m);
			const p = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				b = ({
					voteState: e
				}) => e === l.a.downvoted,
				h = i(b, ({
					interactive: e
				}) => !1 !== e, p);
			var g = e => {
					const t = Object(c.b)();
					return r.a.createElement(d.b, {
						className: h(e),
						compact: e.compact,
						isFilled: t && b(e)
					})
				},
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = n("./src/reddit/controls/Upvote/index.m.less"),
				x = n.n(v);
			const C = {
					...x.a,
					baseClassName: x.a.Upvote
				},
				O = ({
					voteState: e
				}) => e === l.a.upvoted,
				y = i(O, ({
					interactive: e
				}) => !1 !== e, C);
			var E = e => {
					const t = Object(c.b)();
					return r.a.createElement(f.b, {
						className: y(e),
						compact: e.compact,
						isFilled: t && O(e)
					})
				},
				P = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				_ = n.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => Object(o.a)({
					[_.a.compact]: e.compact,
					[_.a.dark]: Object(j.b)(Object(P.a)(e)),
					[_.a.nightmode]: e.isNightmode
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						...a
					} = e;
					return r.a.createElement("button", k({}, a, {
						className: Object(o.a)(_.a.customDownvote, I(e), {
							[_.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				M = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						...a
					} = e;
					return r.a.createElement("button", k({}, a, {
						className: Object(o.a)(_.a.customUpvote, I(e), {
							[_.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				T = g,
				A = E
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
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/random.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/CountAnimation/config.ts"),
				u = n("./src/reddit/components/CountAnimation/helpers.ts"),
				p = n("./src/reddit/constants/colors.ts"),
				b = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/controls/Score/index.m.less"),
				x = n.n(v);
			const C = e => e.voteState === f.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === f.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(h.a)(Object(b.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: O,
							upper: y
						},
						subsequentRecurringDelayRange: {
							lower: E,
							upper: P
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: j,
							upper: S
						}
					}
				} = m.b,
				w = () => r()(O, y),
				_ = () => r()(E, P),
				k = Object(c.a)(e => {
					const t = {
							color: e.light ? p.b.lightboxHeaderText : C(e)
						},
						{
							totalDiscount: n,
							score: s,
							shouldDisjointAnimation: c,
							shouldShowPageTransPersistence: m,
							postId: b = ""
						} = e,
						h = e.isScoreHidden ? "Vote" : Object(d.b)(s),
						g = Object(o.useCallback)(() => r()(Math.ceil((n || 0) * j), Math.ceil((n || 0) * S)), [n]),
						f = Object(o.useRef)(Object(u.k)(b, u.a.Vote)),
						v = Object(o.useRef)(m && void 0 !== n && Object(u.e)(f.current));
					return a.a.createElement("div", {
						className: Object(i.a)(x.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === n ? h : a.a.createElement(l.a, {
						initialDisplayCount: v.current || s - n,
						countToUpperBound: s,
						initialDelay: w,
						subsequentRecurringDelay: _,
						incrementDelta: g,
						shouldDisjointAnimation: c,
						id: f.current
					}))
				});
			t.a = k
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
				is2020: "_2zIsUnTMNBBTNB6vw68Wdy",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = n.n(c);
			t.a = r.a.memo(e => {
				const t = Object(i.a)(),
					n = e.size || a.c.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(o.a)(d.a.toggleSwitch, e.className, d.a[n], {
						[d.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[d.a.mDisabled]: e.disabled,
						[d.a.is2020]: t
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
					className: Object(o.a)(d.a.toggleDisplay, t ? d.a.is2020 : "")
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
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
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
				if (!(t && n && s && r)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				}
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
				return Object(i.N)(e, {}) === o.g.Large && !Object(d.I)(e) && !Object(c.d)(e)
			}

			function m(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: r.Eb
				})
			}

			function u(e) {
				switch (e) {
					case r.Fb.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.Fb.Enabled:
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
				let r, o, a, i, c, d;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (o = s.a.SubredditBlockedForLegalReason) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
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
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				m = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				u = n.n(m);
			const p = i.a.button("button", u.a),
				b = e => t => r.a.createElement("div", {
					className: t.className
				}, e);

			function h(e, t, n) {
				return f(e, t, !0, {
					...n
				})
			}

			function g(e, t, n) {
				return f(e, t, !1, {
					...n
				})
			}

			function f(e, t, n, s) {
				const i = e,
					m = "function" == typeof t ? t : b(t),
					{
						meta: p
					} = s,
					h = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(a.a)(u.a.icon, {
							[u.a.isLit]: e
						})
					}), r.a.createElement(m, {
						className: u.a.body
					}), p && r.a.createElement("div", {
						className: u.a.metaContainer
					}, p));
				return n ? e => {
					const t = Object(c.b)();
					return r.a.createElement("a", {
						"data-redditstyle": !0,
						className: Object(a.a)(e.className, u.a.basicLink),
						href: e.href,
						onClick: e.onClick,
						target: "_blank",
						rel: "noopener noreferrer"
					}, h(e.isLit), t ? r.a.createElement(d.a, {
						name: "external_link",
						isFilled: !0,
						className: u.a.outboundLink
					}) : r.a.createElement(l.a, {
						className: u.a.outboundLink
					}))
				} : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, u.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, h(e.isLit)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, u.a.button),
					onClick: e.onClick
				}, h(e.isLit))
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
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			}));
			var s, r, o, a, i = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/index.ts");
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
			const d = ({
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
				l = ({
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
				m = ({
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
				u = ({
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
				p = ({
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
				b = ({
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
				h = ({
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
				g = ({
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
				f = e => t => ({
					...c.defaults(t),
					action: i.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...c.actionInfo(t),
						pageType: e
					}
				}),
				v = () => e => ({
					...c.defaults(e),
					action: i.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...c.actionInfo(e),
						pageType: o.MiniInbox
					}
				}),
				x = () => e => ({
					...c.defaults(e),
					action: i.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				C = ({
					isMiniInbox: e
				}) => t => ({
					...c.defaults(t),
					action: i.c.CLICK,
					noun: "marked_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...c.actionInfo(t),
						pageType: o.MiniInbox
					} : {}
				})
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(a.h)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: i.post(s, e)
				}),
				l = (e, t, n, s) => r => {
					const a = n ? i.comment(r, n) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...d(e, t, s)(r),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				m = (e, t) => n => {
					const s = i.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(a.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				u = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...i.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...r(n)
				}),
				i = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...r(n)
				}),
				c = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...r(n)
				}),
				d = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...r(n)
				}),
				l = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...r(n)
				}),
				m = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					...r(n)
				}),
				u = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...r(n)
				}),
				p = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				b = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
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
				return w
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
				w = e => a("r_comment", e);
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
				const t = Object(i.b)();
				return r.a.createElement("i", {
					className: Object(o.a)(e.className, Object(c.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || a.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = m
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
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.downvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
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
				const t = Object(o.b)();
				return r.a.createElement("i", {
					className: `${Object(a.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", c.a);
			t.a = d
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
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.upvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
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
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
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
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, n) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.defaultInactiveState, e.className),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12"
			}, r.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), r.a.createElement("path", {
				className: i.a.outline,
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
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
				w = n("./src/reduxMiddleware/apiContext.ts"),
				_ = n("./src/reduxMiddleware/gqlContext.ts"),
				k = n("./src/telemetry/index.ts"),
				I = n("./src/telemetry/models/Timer.ts"),
				N = n("./src/reddit/actions/apiRequestHeaders.ts"),
				M = n("./src/reddit/actions/chat/toggle.ts"),
				T = n("./src/reddit/actions/chat/unreadCount.ts"),
				A = n("./src/reddit/actions/emailCollection/index.ts"),
				R = n("./src/reddit/actions/emailVerification.ts"),
				L = n("./src/reddit/actions/googleOneTap/index.ts"),
				F = n("./src/reddit/actions/media.ts"),
				D = n("./src/reddit/actions/notifications/loader.ts"),
				U = n("./src/reddit/actions/notifications/state.ts"),
				B = n("./src/reddit/actions/nps.ts"),
				G = n("./src/reddit/actions/platform.ts"),
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
					super(...arguments), this.flush = ee()(() => Object(te.hb)(this.props.storageKey, this.props.value), ne)
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
				we = n("./node_modules/lodash/pick.js"),
				_e = n.n(we),
				ke = n("./src/reddit/actions/header.ts"),
				Ie = n("./src/reddit/actions/preferences.ts"),
				Ne = n("./src/reddit/constants/preferences.ts"),
				Me = n("./src/reddit/helpers/cookies/index.ts");
			const Te = new Set([Ie.f, Ie.i, V.b, Ie.c, Ie.o, ke.d, ke.e, Ie.r]);
			var Ae = e => t => n => {
					const s = t(n);
					if (Te.has(n.type)) {
						const t = e.getState().user,
							n = _e()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Ne.b, Ne.d, Ne.e]);
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
				Be = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Ge = n("./src/reddit/contexts/PageLayer/index.tsx"),
				He = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				qe = n("./src/reddit/selectors/platform.ts");
			const We = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Ve = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(qe.p)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = We.has(r), a = Object(Ge.k)(e, {
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
					if (n.type === G.e) {
						const t = e.getState(),
							s = Object(X.I)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Be.c)(e),
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
			var Ze = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Ke.b).filter(t => t === e).length)(t.type) && Object(te.H)(Ke.b[t.type]), e(t)) : () => e => t => e(t);
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
					if (n.type === G.a) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(bt.F)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", {
							..._e()(n.payload.location, "pathname", "search", "hash"),
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
				wt = n("./src/reddit/constants/cookie.ts");
			const _t = (e, t) => {
				if (!e) return;
				const n = (d.a.get(wt.h) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: wt.h,
							value: s,
							cookieOptions: Object(St.a)(),
							cookieContext: t
						};
					Object(jt.c)(r)
				}
			};
			var kt = n("./src/lib/loadWithRetries/index.ts"),
				It = n("./src/reddit/layout/page/Listing/index.tsx"),
				Nt = n("./src/reddit/models/Toast/index.ts"),
				Mt = n("./src/reddit/reducers/index.ts"),
				Tt = n("./src/reddit/routes/index.ts"),
				At = n("./src/reddit/selectors/experiments/index.ts"),
				Rt = n("./src/reddit/constants/experiments.ts"),
				Lt = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Ft = n("./src/reddit/selectors/experiments/euEssentialCookies.ts"),
				Dt = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Ut = n("./src/reddit/selectors/experiments/htmlResponseStreaming.ts");
			const Bt = {
					displayDelay: 15,
					displayOnRoutes: [g.Db.SUBREDDIT, g.Db.COMMENTS],
					experimentName: Rt.Lb,
					experimentVariant: Rt.Ob.On,
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
				Ht = e => {
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(Bt, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(Bt)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(Bt, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(Bt, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(Lt.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: Lt.a
						}) === t)(Bt, e)) return {
						displayDelay: Bt.displayDelay,
						externalVars: Gt(e)
					}
				};
			var qt = n("./src/reddit/selectors/meta.ts");
			var Wt = n("./src/reddit/singleton/EventSystem.ts"),
				Vt = n("./src/lib/initializeClient/installReducer.ts"),
				Qt = n("./src/reddit/reducers/features/categories/index.ts"),
				zt = n("./src/lib/makeActionCreator/index.ts"),
				Kt = n("./src/lib/sentry/index.ts"),
				Zt = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Jt = Object(zt.a)(Zt.C),
				Yt = () => {
					return Object(te.q)(Y.a.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var Xt = n("./src/reddit/actions/global/constants.ts");
			Object(Vt.a)({
				features: {
					categories: Qt.a
				}
			});
			const $t = Object(zt.a)(Xt.a),
				en = e => async (t, n) => {
					t((() => async e => {
						const t = Yt();
						t && e(Jt(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || Kt.c.withScope(e => {
						Object(Kt.a)(e, {
							serverLogging: !1
						}), Kt.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t($t(r))
				};
			var tn = n("./src/reddit/actions/login.ts");
			Object(r.e)(r.b.EntryPointStart);
			const nn = Object(w.a)({
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
				sn = Object(_.a)(nn.apiContext),
				rn = ve();
			let on;
			Object(C.a)({
				reducerMap: Mt.a,
				routes: Tt.a,
				apiContext: nn.apiContext,
				gqlContext: sn.gqlContext,
				appFactory: (e, t) => m.a.createElement(ue.a.Provider, {
					value: rn.broadcaster
				}, m.a.createElement(pe.a.Provider, {
					value: {
						apiContext: nn.apiContext,
						gqlContext: sn.gqlContext
					}
				}, m.a.createElement(be.b, null, m.a.createElement(K.a, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(ae, null)))),
				appName: g.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = on;
						if (!n) return;
						n.dispatch(Object(G.k)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(G.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: Tt.a,
					apiContext: nn.apiContext,
					gqlContext: sn.gqlContext
				}), rn.middleware, Se, nn.middleware, sn.middleware, Ye, Ae, $e, gt, ze, Ze],
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
					loading: m.a.createElement(It.a, {
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
						}(e.location.pathname) || n.dispatch(Object(G.g)());
					const s = Object(X.U)(n.getState());
					n.dispatch(Object(V.c)({
						nightmode: s
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(Lt.c)(e, {
							experimentEligibilitySelector: Lt.a,
							experimentName: Rt.x
						}) === Rt.C.Enabled)(n.getState())) {
						Xe.b.enableTracing(!0);
						const e = Xe.b.createTraceFromId(r);
						Xe.b.setParent(e)
					}
					n.dispatch(Object(G.h)(t));
					e.listen((e, s) => {
						const r = Object(y.a)(Object(i.e)(e), t);
						n.dispatch(Object(G.i)(e, s, r))
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
						localStorageData: Object(te.r)()
					}
				},
				postRender: ({
					browserHistory: e,
					routes: t,
					serverDocumentLength: i,
					store: c,
					localStorageData: d
				}) => {
					on = c;
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
								inExperiment: Object(Ft.a)(n),
								country: n.meta.country
							};
						_t(i, d), Wt.a.publish(de.c, o, document)
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
					}), c.dispatch(en({
						localStorageData: d
					})), Object(Dt.f)(l) && Object(L.d)(l), c.dispatch(Object(L.c)()), c.dispatch((() => async (e, t) => {
						const n = t(),
							{
								sessionReferrer: s
							} = n.platform;
						s && s.includes("account/magic_link/landing") && e(Object(tn.i)())
					})()), window.addEventListener("load", () => {
						const t = c.getState(),
							{
								currentPage: o
							} = t.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							d = Object(bt.F)(t, a) || "",
							l = {
								inExperiment: Object(Ft.a)(t),
								country: t.meta.country
							};
						if (_t(d, l), o && o.meta) {
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
								const o = Object(Ut.a)(t);
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
							l && l.get(le.a) && history.replaceState(history.state, "", Object(v.a)(window.location.href, [le.a])), Object(j.a)(l.get(le.y)) && c.dispatch(Object(Q.e)({
								kind: Nt.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), l.get(le.z) && (c.dispatch(Object(R.a)(l.get(le.z))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [le.z])));
							let m = !1;
							if ((Object(lt.b)(ce.a.JustLoggedIn) || l && l.get(le.o) && Object(j.a)(l.get(le.o))) && (c.dispatch(Object(Q.e)({
									text: s.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), m = !0, Object(lt.c)(ce.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [le.o]))), Object(lt.b)(ce.a.JustLoggedOut) && (m = !0, Object(lt.c)(ce.a.JustLoggedOut)), Object(U.b)(t), !1 !== te.I()) {
								let n;
								Object(Dt.a)(t) && (n = () => {
									const {
										dispatch: t
									} = c;
									e.listen(() => t(Object(L.b)())), t(Object(L.b)())
								}), Object(D.a)().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(m, !1, n)))
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
							c.dispatch(Object(B.d)()), await Object(h.a)() && (e => Object(k.a)({
								...xt.defaults(e),
								source: "global",
								action: "view",
								noun: "empty"
							}))(c.getState());
							const t = async () => {
								const e = c.getState(),
									t = Ht(e);
								t && (await (async e => {
									return (await Object(kt.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
							if ("visible" !== document.visibilityState && (te.vb(Date.now()), Object(k.a)(Ct("tab_backgrounded")(e))), (e => Object(Lt.c)(e, {
									experimentEligibilitySelector: e => !Object(qt.d)(e),
									experimentName: Rt.U
								}) === Rt.bb.Enabled)(e) && "visible" === document.visibilityState && t && Object(pt.k)(t.routeMatch, c.getState(), I.TimerType.Revisit, 0, t.urlParams, !0), "visible" === document.visibilityState) {
								const e = te.p(),
									t = te.w(),
									n = te.F();
								if (n && e && t) {
									const s = Date.now() - n;
									Object(k.a)(((e, t) => (n, s, r) => ({
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
										}
									}))("tab_backgrounded", t)(c.getState(), s, e))
								}(n || e || t) && (te.P(), te.S(), te.Q())
							}
						}), Object(qt.j)(c.getState()) && Et(c.getState), c.dispatch(Object(W.i)())
					}), window.history.scrollRestoration = "manual", Wt.a.attachStore(c), c.dispatch(Object(H.b)(P.a.PageLoad))
				},
				raven: {
					tags: {
						project: g.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1,
				perfExperimentNameSelector: e => Object(At.e)(e.getState())
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
					layout: (e, t) => t.forcedLayout || Object(d.N)(e, t)
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
				l = [`/message/:pageName(${d})`, "/message/messages/:messageId"],
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
				w = n("./src/reddit/routes/multireddit/index.ts"),
				_ = n("./src/reddit/routes/notificationsInbox/index.ts"),
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
				B = n("./src/reddit/routes/profileOverview/index.ts"),
				G = n("./src/reddit/routes/profilePosts/index.ts"),
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
			const ne = [r.a, o.a, a.b, d, l.a, m.a, D, q, V, ...s.a, ...u.a, h, ...C.a, O.a, A.a, v.a, x.a, M.a, T.a, ...N, f, ...E.a, w.a, S.a, j.c, _.a, y.a, R.a, U.a, B.a, G.a, W.a, H.a, Q.a, ...Z.a, ...J, K.a, ...ee.a, te.a, Y.a, X.a, $.a, P.a, z.a, ...b];
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
					Object(p.J)(n()) || await t(Object(d.r)()), setTimeout(async () => {
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
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
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
				b = Object(o.a)({
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
				h = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				g = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...h],
				f = e => !!Object(a.h)(e, {
					path: "/r/:subredditName/about"
				}),
				v = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: i.p.MODERATION_PAGES,
					component: b,
					exact: !0,
					meta: {
						name: i.Db.MODERATION_PAGES
					},
					path: g,
					prefetches: [i.p.SUBREDDIT]
				};
			t.a = v
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
		"./src/reddit/routes/subreddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Subreddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("Frontpage~ModListing~Subreddit"), n.e("Subreddit~SubredditWiki"), n.e("Subreddit")]).then(n.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Subreddit/index.tsx"
					}
				}),
				d = Object.keys(a.P).map(e => `/r/:subredditName/:sort(${a.P[e]})?`),
				l = ["/r/:subredditName", ...d],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("Frontpage~ModListing~Subreddit"), n.e("Subreddit~SubredditWiki"), n.e("Subreddit")]).then(n.bind(null, "./src/reddit/actions/pages/subreddit.ts")).then(e => e.subredditRequested)),
					chunk: a.p.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Db.SUBREDDIT
					},
					path: l,
					prefetches: [a.p.COMMENTS_PAGE, a.p.FRONTPAGE]
				};
			t.a = m
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
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("Subreddit~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWelcomeMessageMod~d61175c4"), n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("Subreddit~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
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
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return C
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/reddit/constants/accountManager.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				d = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				l = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				u = n("./src/reddit/selectors/experiments/utils.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(p.J, p.I, (e, t) => !e && !t),
				h = Object(r.a)(e => Object(m.c)(e, {
					experimentEligibilitySelector: b,
					experimentName: i.dc
				}), u.a),
				g = Object(r.a)(p.I, p.J, (e, t) => !e && !t);
			var f = n("./src/reddit/selectors/responsiveSettings.ts");
			const v = e => e.accountManagerModalData.actionSource,
				x = e => e.accountManagerModalData.redirectUrl,
				C = Object(r.a)((e, t) => t.path, (e, t) => t.uiMode, v, d.a, f.a, l.b, e => Object(m.c)(e, {
					experimentEligibilitySelector: g,
					experimentName: i.Sc
				}), c.a, h, (e, t, n, r, c, d, l, m, u) => {
					let p = `${s.a.accountManagerOrigin}${e}`;
					return m && (p = Object(o.a)(p, {
						[`experiment_${i.s}`]: "enabled"
					})), l && (p = Object(o.a)(p, {
						[`experiment_${i.Sc}`]: l
					})), e === a.c.GoogleOneTap ? Object(o.a)(p, {
						[i.N]: d
					}) : (r && (p = Object(o.a)(p, {
						[i.cb]: r,
						uiMode: t
					})), u && (p = Object(o.a)(p, {
						[`experiment_${i.dc}`]: u
					})), c && (p = Object(o.a)(p, {
						mweb_responsive_settings: "treatment"
					})), e === a.c.Index || e === a.c.ChangePassword ? p : p = Object(o.a)(p, {
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
					const s = Object(a.lb)(e, {
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
					return n ? n.map(n => e.features.banned.models[t][n]) : r.b
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
				return Object(o.G)(e) || s.B.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.w
				})
			}
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.v.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.s
				}),
				a = e => s.Xb.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Rb
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.mb)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => t => {
				const n = Object(r.c)(t, {
					experimentEligibilitySelector: r.a,
					experimentName: e
				});
				return !(!n || Object(s.qd)(n))
			}
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
					experimentName: s.xb
				});
				return !(!t || Object(s.qd)(t))
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
					experimentName: r.cb,
					throttledVariants: {
						[r.Gb.CurrentThrottled]: r.cb
					}
				}), i.a),
				u = e => e === r.Gb.CurrentThrottled,
				p = e => e === r.Gb.CurrentThrottled || e === r.Gb.CurrentUnthrottled || e === r.Gb.CurrentUnthrottledCopy || e === r.Gb.NewPopUnthrottledCopy,
				b = e => e === r.Gb.NewPopUnthrottledCopy,
				h = e => e === r.Gb.NewPageUnthrottledCopy || e === r.Gb.NewPageUnthrottledCopyFields,
				g = e => e === r.Gb.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.sc
				}) === s.Bc.Enabled
			}
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => Object(o.G)(e) || !(s.gd.Holdout === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.dd
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
				i = new Set([s.Pb.AllItems, s.Pb.TrendingSearch]),
				c = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: Object(r.d)(Object(r.b)(...a)),
						experimentName: s.Qb
					});
					return i.has(t)
				},
				d = e => s.Pb.AllItems === Object(o.c)(e, {
					experimentEligibilitySelector: Object(r.d)(Object(r.b)(...a)),
					experimentName: s.Qb
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
			Object(s.a)(i.pb, e => !(!e || !e.length));
			const c = Object(s.a)(i.y, e => !e),
				d = Object(s.a)(i.pb, e => e && e.find(e => e === o.a.Apple)),
				l = Object(s.a)(i.pb, e => !(!e || !e.includes(o.a.Google))),
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
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34", "Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d", "Chat~Governance~Reddit", "ModListing~Reddit~StandalonePostPage", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.d0919f2bac51d06b1a8a.js.map