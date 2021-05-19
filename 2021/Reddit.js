// https://www.redditstatic.com/desktop2x/Reddit.09d3366db016dea20390.js
// Retrieved at 5/19/2021, 3:30:08 PM by Reddit Dataminer v1.0.0
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
		"./src/graphql/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
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
			e.exports = JSON.parse('{"id":"43a931178716"}')
		},
		"./src/graphql/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/graphql/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
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
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
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
						}), Object(l.b)(), Object(i.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: i,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, h = p;
						return o.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, o.a.createElement(b, {
							className: i,
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
			const o = 120 * s.cb;
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
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = "/sw.js";
			async function o(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(s, e)
			}
			const r = (e, t) => {
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
					method: l.eb.POST,
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
				return $
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "t", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return de
			})), n.d(t, "l", (function() {
				return le
			})), n.d(t, "a", (function() {
				return me
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "p", (function() {
				return ge
			})), n.d(t, "f", (function() {
				return fe
			})), n.d(t, "g", (function() {
				return ve
			})), n.d(t, "j", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return Oe
			})), n.d(t, "c", (function() {
				return je
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return Me
			})), n.d(t, "r", (function() {
				return Ne
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
				v = n("./src/graphql/operations/CommentToxicity.json"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = n("./src/reddit/helpers/genericServerError/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				k = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, s) => {
					let o, r;
					if (s === w.h.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				M = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === w.h.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(Object(O.a)(e, [y.a]), {
						method: o.eb.POST,
						endpoint: Object(E.a)(Object(_.a)(Object(k.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {
							comment: Object(j.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(j.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(P.a)()
					})
				};
			var N = n("./src/graphql/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				D = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				G = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/PostDraft/index.ts"),
				H = n("./src/reddit/models/RichTextJson/index.ts"),
				q = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				W = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				J = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/actions/comment/index.ts"),
				Y = n("./src/reddit/actions/comment/constants.ts");
			const X = Object(r.a)(Y.k),
				$ = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(J.L)(o) && e) {
							const s = X({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n(X({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(r.a)(Y.H), te = Object(r.a)(Y.J), ne = Object(r.a)(Y.I), se = Object(r.a)(Y.G), oe = (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					U.f(e, n, t, r)
				}, re = "Toxicity_Warning__Modal", ae = (e, t, n, s, o, r) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						u = Object(z.e)(l);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await I(c(), m, s, o))) return void a(Object(d.i)(re))
					}
					a(ce(e, t, n, s, o, r))
				}, ie = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ce = (e, t, n, r, a, i, c) => async (u, h, {
					apiContext: f
				}) => {
					u(Object(d.g)(re));
					const v = h(),
						x = v.features.comments.submit.pending[n];
					if (!v.user.account || x) return;
					u(ee({
						draftKey: n,
						draft: r
					}));
					const C = v.user.account.displayText,
						O = r.commentMode;
					let y;
					if (c ? (y = await Object(R.i)(f(), e, r, C), u(Object(m.a)({
							streamId: e,
							level: y.body.automuteLevel
						}))) : y = await M(f(), e, r, C, O), y.ok) {
						let s;
						s = y.body, u(te({
							...s,
							headCommentId: Object(V.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(Q.F)(h(), {
							postId: e
						});
						u(Object(l.x)(o, g.a.CommentSubmitted))
					} else {
						y.error && y.error.type === o.Db && U.g(v, ie(r), e);
						const t = y.error && y.error.fields && y.error.fields[0] ? y.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: y.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: W.b.Error,
							text: t
						}))
					}
					oe(h(), t, a, y), i || Object(p.d)()
				}, de = e => async (t, n, {
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
						if (!(await I(s(), p, c, l))) return void t(Object(d.i)(re))
					}
					t(le({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: o,
						formData: c,
						editorMode: l
					}))
				}, le = e => async (t, n, {
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
					t(Object(d.g)(re));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(ee({
						draftKey: c,
						draft: l
					}));
					const h = m.user.account.displayText,
						g = l.commentMode,
						f = await M(s(), r, l, h, g);
					if (f.ok) t(ne({
						...f.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (f.error && f.error.type === o.Db) {
							const e = Object(K.a)(m, {
								commentId: r
							});
							if (!e) return;
							U.g(m, ie(l), e.postId, r)
						}
						t(se({
							draftKey: c,
							error: f.error
						}))
					}
					oe(n(), a, u, f), Object(p.d)()
				}, ue = Object(r.a)(Y.q), me = Object(r.a)(Y.p), pe = Object(r.a)(Y.l), be = (Object(r.a)(Y.g), Object(r.a)(Y.m)), he = (Object(r.a)(Y.t), (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const i = e === w.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(H.G)(t)) o(be({
						editorMode: e,
						draftKey: n,
						content: i ? H.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(A.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(be({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(b.f)({
							duration: b.a,
							kind: W.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ge = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						l = Object(a.a)(B.c.replyToComment, t);
					if (!Object(J.J)(o())) return s(Object(c.j)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(V.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(me({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = r.user.prefs.commentMode,
						g = Object(F.d)();
					if (g) {
						const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === w.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => q.s(e, null)).map(e => q.l([e])),
								n = q.s("", null),
								s = q.l([n]);
							b = {
								document: [q.c(t), s]
							}
						}
					}
					const f = r.features.comments.drafts[l];
					let v;
					if (v = g ? {
							commentMode: h,
							draftType: B.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : f || {
							commentMode: h,
							draftType: B.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(J.L)(r)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: v
						});
						s(Object(i.f)(n))
					} else s(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: v
					}))
				}, fe = e => async t => {
					t(Object(Z.p)(e)), t(Oe(e))
				}, ve = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(me({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ge({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Z.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => n => n(pe({
					draftKey: e,
					formData: t
				})), Ce = Object(r.a)(Y.s), Oe = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, a) => {
					const i = a();
					i.user.account && (U.c(i), r(Ce({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: B.c.edit,
							hasFocus: !0
						}
					})))
				}, ye = Object(r.a)(Y.C), Ee = Object(r.a)(Y.B), Pe = Object(r.a)(Y.D), je = Object(r.a)(Y.h), Se = ({
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
					n(ye({
						draftKey: s
					})), U.d(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, n, s, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === w.h.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(x.a)(Object(O.a)(e, [y.a]), {
								endpoint: Object(E.a)(Object(k.a)(Object(_.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.eb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(S.a)(e)
							} : {
								...e,
								body: {
									comment: Object(j.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(j.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(P.a)()
							})
						})(i(), e, 0, r, d, l);
					if (u.ok) {
						const o = u.body;
						n(Pe({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Z.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(Ee({
						draftKey: s,
						error: u.error
					}))
				}, we = Object(r.a)(Y.z), _e = Object(r.a)(Y.y), ke = Object(r.a)(Y.A), Ie = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					n(we({
						id: e
					})), U.a(e, a);
					const i = await ((e, t) => Object(x.a)(Object(O.a)(e, [y.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: o.eb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(P.a)()
					}))(r(), e);
					i.ok ? n(ke({
						id: e,
						postId: t
					})) : n(_e({
						id: e,
						error: i.error
					}))
				}, Me = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Z.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(T.q)(s(), e, o)).ok || t(Object(Z.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Ne = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var a, i, c, d, l, u;
					n(Object(Z.c)());
					const m = e => Object(b.f)(Object(b.e)(e, W.b.Error));
					if (((null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === f.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === G.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Z.n)(i)), (await ((e, t) => Object(C.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(D.nb)(null !== (l = null === (d = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(b.f)({
								kind: W.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Z.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return k
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "q", (function() {
				return U
			})), n.d(t, "j", (function() {
				return G
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "o", (function() {
				return V
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Z
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return X
			})), n.d(t, "k", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/presence.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				h = n("./src/reddit/endpoints/comment/index.tsx"),
				g = n("./src/reddit/helpers/commentList/index.ts"),
				f = n("./src/reddit/helpers/trackers/comment.ts"),
				v = n("./src/reddit/models/Comment/index.ts"),
				x = n("./src/reddit/models/Post/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				y = n("./src/reddit/selectors/comments.ts"),
				E = n("./src/reddit/selectors/commentSelector.ts"),
				P = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				j = n("./src/reddit/selectors/moderatingComments.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/comment/constants.ts");
			const _ = {},
				k = Object(a.a)(w.o),
				I = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(S.J)(n())) return t(Object(d.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(y.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? h.k : h.g;
					if (t(k({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await a(s(), e)).ok) {
						const n = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: n,
							kind: C.b.Undo,
							buttonText: s,
							buttonAction: I(e)
						}))
					} else t(k({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, M = e => `viewing-comment-${e}`, N = s.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const o = n();
					if (!Object(E.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					f.c({
						state: o,
						commentId: e
					}), r.c.start(M(e));
					const a = setTimeout(() => f.a({
						state: o,
						commentId: e
					}), N);
					_[e] = a
				}, A = (e, t) => async (n, s) => {
					const o = s(),
						a = M(e);
					if (Object(E.a)(o, {
							commentId: e
						}) && r.c.has(a)) {
						const n = r.c.end(a);
						!t && n < N && (clearTimeout(_[e]), delete _[e])
					}
				}, R = Object(a.a)(w.x), L = Object(a.a)(w.w), F = Object(a.a)(w.v), D = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = r.moreComments.models[t],
						d = r.platform.currentPage,
						l = d && d.routeMatch,
						m = l && l.match,
						{
							partialPostId: p
						} = m ? m.params : null;
					if (!p) return;
					const b = Object(x.s)(p);
					n(R({
						moreCommentsId: a.id
					}));
					const f = await Object(h.e)(o(), b, {
						token: a.token
					}, Object(P.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(g.a)(t, b, r);
						n(L({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[b];
						let d;
						o && "subreddit" === o.belongsTo.type && t.comments && (d = o.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = f.body.comments,
							m = f.body.posts;
						await n(Object(u.b)(m, l, d)), await n(Object(c.a)(d, l))
					} else n(F({
						moreCommentsItem: a,
						...f.error
					}))
				}, U = Object(b.a)(g.b, O.a.upvoted), G = Object(b.a)(g.b, O.a.downvoted), B = Object(a.a)(w.j), H = Object(a.a)(w.i), q = Object(a.a)(w.e), W = Object(a.a)(w.f), V = (Object(a.a)(w.c), Object(a.a)(w.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						a = Object(v.h)(e),
						i = Object(y.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(j.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					s(q({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(m.d)()
				}), K = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(W({
						commentId: e,
						commentsPageKey: t
					}))
				}, z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const a = r(),
						i = Object(g.e)(t, e, n, a),
						c = Object(j.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(q({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(m.d)()
				}, Q = Object(a.a)(w.r), J = e => t => t(Q({
					draftKey: e
				})), Z = Object(a.a)(w.a), Y = Object(a.a)(w.E), X = Object(a.a)(w.b), $ = Object(a.a)(w.u)
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
								method: s.eb.GET
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
			const m = o()(l.d),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.x)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(l.c)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(d.g))
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
					method: o.eb.POST,
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
					correlationId: Object(r.d)(r.a.GildingFlow),
					thingId: c
				})), Object(a.J)(i) || await t(o.r());
				const d = n();
				if (!Object(a.J)(d)) return t(Object(s.f)())
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
				Object(o.J)(n) || await e(s.r());
				const r = t();
				if (!Object(o.J)(r)) throw new Error("Failed to login")
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
				a = n("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: d.a
				}
			});
			const l = Object(o.a)(i.o),
				u = () => async (e, t, {
					gqlContext: n
				}) => {
					try {
						const t = await Object(a.d)(n());
						if (!t.ok) throw new Error(`Got bad response in GQL call for special events: ${JSON.stringify(t||{})}`); {
							const n = t.body.data.econSpecialEvents;
							await e(l(n))
						}
					} catch (o) {
						Object(s.b)() || console.error(o), r.c.captureException(o)
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
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
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
					(await Object(i.b)(o(), e)).ok ? (x(t, e), function(e) {
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
				o = n("./src/reddit/actions/notifications/utils.ts");
			s.a.Default;
			const r = {
				denied: s.a.Denied,
				granted: s.a.Granted
			};
			const a = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = s.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(o.a)(e) === s.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = r[Notification.permission] || s.a.Default
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
				o = n("./src/lib/notifications/featureFlags.ts"),
				r = n("./src/reddit/featureFlags/index.ts");
			const a = e => r.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : s.c.BrowserUnsupported
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return N
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "g", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/graphql/operations/BlockAwarder.json"),
				l = n("./src/lib/makeGqlRequest/index.ts");
			var u = (e, t) => Object(l.a)(e, {
					...d,
					variables: t
				}),
				m = n("./src/graphql/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts");
			var p = n("./src/graphql/operations/NotificationInboxFeed.json"),
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
				w = n("./src/reddit/selectors/appBadges.ts"),
				_ = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const k = Object(o.a)(a.e),
				I = Object(o.a)(a.b),
				M = Object(o.a)(a.a),
				N = e => async (t, n, {
					gqlContext: s
				}) => {
					var o, r;
					const a = n(),
						i = Object(_.a)(a);
					t(k());
					const d = await ((e, t) => Object(l.a)(e, {
						...p,
						variables: t
					}))(s(), e);
					if (null === (r = null === (o = d.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return t(M({
						error: d.error
					})), void t(Object(c.d)());
					const u = d && d.body,
						m = A(u);
					if (null === i) {
						const e = Object(_.f)(a);
						t(L(m.nodes, e.length))
					}
					t(I(m))
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, o;
					const r = await (e => Object(l.a)(e, {
						...b
					}))(n());
					if (null === (o = null === (s = r.error) || void 0 === s ? void 0 : s.fields) || void 0 === o ? void 0 : o.length) return;
					const a = r && r.body,
						i = R(a).nodes.filter(e => !e.viewedAt);
					i.length && i.forEach(e => {
						var n;
						Object(E.l)({
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
						r = Object(_.a)(o),
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
					a && a !== r && n(F({
						index: a
					}))
				}, F = Object(o.a)(a.g), D = (Object(o.a)(a.h), Object(o.a)(a.f)), U = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = [e];
					if ((await ((e, t) => Object(l.a)(e, {
							...m,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: r
						})).ok) {
						t(D({
							id: e
						}));
						const o = Object(_.f)(n());
						t(L(o)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, G = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					const a = () => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, S.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), ((e, t) => async (n, o, {
							gqlContext: r
						}) => {
							if (!e) return;
							(await Object(O.b)(r(), e, {
								isSubredditUpdatesInterestingPostEnabled: !0,
								isUpdateFromSubredditEnabled: !0
							})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
								hk: "1na0NP"
							}), S.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
								hk: "4jo7Pf"
							}), S.b.Error)))
						})(e, t)))
					};
					(await Object(O.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(a()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), S.b.Error)))
				}, B = e => async (t, n, {
					apiContext: o
				}) => {
					if (!e) return;
					(await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/sendreplies`),
						method: h.eb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, H = e => async (t, n, {
					gqlContext: o
				}) => {
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), S.b.Error)))
				}, q = Object(o.a)(a.d), W = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					let a;
					if (t === j.a.CommentReply || t === j.a.PostReply || t === j.a.PrivateMessage || t === j.a.UsernameMention) {
						if ((a = await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_message`),
								method: h.eb.POST,
								data: {
									id: t
								}
							}))(o(), e)).ok) {
							let e = Object(w.a)(s());
							if (e > 0) {
								e--;
								const t = Object(r.e)({
									count: e,
									key: P.c.ActivityTab
								});
								n(Object(r.a)(t)), n(Object(i.e)())
							}
						}
					} else a = await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/read_notification`),
						method: h.eb.POST,
						data: {
							id: t
						}
					}))(o(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(q({
							id: e,
							now: t
						}))
					}
				}, V = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = (new Date).toLocaleDateString(),
						o = await ((e, t) => Object(l.a)(e, {
							...y,
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
						if ((await ((e, t) => Object(g.a)(Object(f.a)(e, [v.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_all_messages`),
								method: h.eb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(n(), [C.Activity, C.Messages])).ok) {
							const t = Object(r.e)({
									count: 0,
									key: P.c.MessageTab
								}),
								n = Object(r.e)({
									count: 0,
									key: P.c.ActivityTab
								});
							e(Object(r.a)({
								...t,
								...n
							})), e(K({
								now: a.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), S.b.Error)))
					}
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
				o = n("./src/reddit/actions/pages/subreddit.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/pageTitle.ts"),
				i = n("./src/config.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/endpoints/me/index.ts"),
				u = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				m = n("./src/reddit/actions/pages/appeal/constants.ts");
			const p = `${i.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				b = Object(c.a)(m.b),
				h = Object(c.a)(m.a);
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
						o = await Object(l.a)(n());
					if (o.ok && o.body)
						if (o.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = p;
								window.location.href = e
							} else e(b(o.body));
					else Object(u.a)(e, s);
					else e(h(o.error))
				})())
			}, E = (e, t, n) => async (a, i, {
				routes: c
			}) => {
				const d = i(),
					l = (t || d.platform.currentPage).routeMatch.match,
					u = Object(C.a)(l.url, c);
				if (!u) return;
				const m = e.metaKey || e.ctrlKey || 1 === e.button;
				if (u.route && u.route.meta && (u.route.meta.name === r.Gb.INDEX || u.route.meta.name === r.Gb.MULTIREDDIT || u.route.meta.name === r.Gb.SUBREDDIT)) m ? window.open(l.url) : n ? a(Object(s.b)(l.url)) : await a(u.route.action(l, !0));
				else if (u.match && u.match.params && u.match.params.subredditName) {
					const {
						subredditName: e
					} = u.match.params, t = `/r/${e}/`;
					if (m) window.open(t);
					else if (n) a(Object(s.b)(t));
					else {
						const n = Object(x.a)(e, r.R.HOT);
						await a(Object(s.b)(t)), a(Object(o.subredditDataRequested)(n, e, {}))
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
				const o = s();
				t(d.l({
					title: a.f()
				})), Object(v.J)(o) || await t(f.r());
				const r = Object(v.J)(o);
				if (e.queryParams.thanks && r) {
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
				o = n("./src/reddit/selectors/user.ts"),
				r = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(s.r)()), Object(o.J)(t()) || e(Object(r.h)())
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.J)(t()) || await e(Object(o.r)()), await e(Object(s.b)()).then(() => {
					if (t().economics.me.data) return e(Object(s.a)())
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
						Object(c.J)(l) || n.push(e(Object(a.r)()));
						const u = Object(s.a)(d, null);
						n.push(e(Object(r.subredditDataRequested)(u, d, {}))), await Promise.all(n);
						const m = Object(i.F)(t(), d);
						await e(Object(o.a)({
							subredditId: m,
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
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.C),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.M),
				g = (e, t, n) => async (o, i, {
					apiContext: g
				}) => {
					c.i(i(), t);
					const v = t === d.h.MARKDOWN,
						x = t === d.h.RICH_TEXT,
						C = m.k;
					if (v && Object(l.G)(n)) return o(h({
						editorKey: e,
						editorMode: d.h.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (x && !n) return o(h({
						editorKey: e,
						editorMode: d.h.RICH_TEXT,
						content: l.i
					})), void o(f(t));
					o(p(C));
					const O = await Object(a.a)(g(), t, v ? JSON.stringify(n) : n);
					O.ok ? (o(b(C)), o(h({
						editorKey: e,
						editorMode: t,
						content: O.body.output
					})), o(f(t))) : (o(b(C)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.m)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? d.h.MARKDOWN : d.h.RICH_TEXT;
					if (e === a) return;
					const c = e === d.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(i.kb)(o + 1)
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
						activePostId: x
					} = h.shortcuts;
					e(t && x ? c.b(x, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/shortcuts.ts"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts");
			const a = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						s = Object(o.a)(e);
					return Object(r.b)(n, e, s)
				},
				i = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				c = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						s = window.scrollY;
					t && (t.focus(), window.scrollTo(n, s))
				},
				d = () => {
					c(s.b)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(s.a)(Object(c.b)(n)), e(Object(a.r)({
					forceFetch: !0
				})), await e(Object(r.g)(i.a.SNOOVATAR_MODAL))
			}, u = e => async (t, n) => {
				const a = n();
				Object(s.a)(Object(c.a)(e)(a)), Object(d.J)(a) ? await t(Object(r.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(o.h)())
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
			const o = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				r = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
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
				M = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				R = n.n(A);
			const L = l.a.iframe("IFrame", R.a),
				F = l.a.button("CloseButton", R.a),
				D = l.a.wrapped(w.a, "Close", R.a),
				U = Object(c.c)({
					accountManagerSrc: I.c,
					actionSource: I.a,
					frontpageSignupVariant: M.a,
					isLoggedIn: T.J,
					redirectUrl: I.b
				}),
				G = Object(i.b)(U, (e, t) => ({
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(N.defaults)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(P.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(m.x)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(f.f)(Object(f.e)(t, k.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(f.f)(Object(f.e)(t, k.b.SuccessCommunity)))
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
						const t = e === _.a.Apple ? y.a.LINK_APPLE_SSO : y.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === _.a.Apple ? y.a.UNLINK_APPLE_SSO : y.a.UNLINK_GOOGLE_SSO;
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
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), k.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), k.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
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
					}, this.props.setRef && this.props.setRef(this.iframeRef), this.props.exposeIFrameElement && this.props.exposeIFrameElement(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
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
				return o
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended
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
				return du
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
				M = n("./src/lib/lessComponent.tsx"),
				N = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
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
			class H extends m.a.Component {
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
						src: `${U.a.assetPath}/${e}`,
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
							className: Object(f.a)(B.a.item, B.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${U.a.assetPath}/${e.img}")`,
								width: o
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
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
					return m.a.createElement("div", {
						className: Object(f.a)(e, B.a.container)
					}, m.a.createElement("article", {
						className: B.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: B.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var q = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				W = n.n(q);
			const V = M.a.div("Container", W.a),
				K = M.a.wrapped(H, "Carousel", W.a),
				z = M.a.div("Phone", W.a),
				Q = M.a.img("Frame", W.a),
				J = `${U.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Z = `${U.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
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
					return m.a.createElement(V, {
						className: t
					}, m.a.createElement(z, {
						className: W.a.android
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: W.a.android,
						delay: 2500,
						items: Y,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(Q, {
						src: J
					})), m.a.createElement(z, {
						className: W.a.iphone
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: W.a.iphone,
						items: X,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(Q, {
						src: Z
					})))
				},
				ee = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				te = n.n(ee);
			const ne = M.a.div("Container", te.a),
				se = M.a.span("Disclaimer", te.a),
				oe = M.a.a("Link", te.a);
			var re = e => m.a.createElement(ne, {
					className: e.className
				}, m.a.createElement(oe, {
					href: "https://about.reddit.com"
				}, o.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/advertising"
				}, o.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(oe, {
					href: "http://www.redditblog.com/"
				}, o.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(oe, {
					href: "https://about.reddit.com/careers/"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(oe, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(oe, {
					href: "https://about.reddit.com/press/"
				}, o.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/mobile/download"
				}, o.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/coins"
				}, o.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(oe, {
					href: "https://redditgifts.com/"
				}, o.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/premium"
				}, o.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, o.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, o.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(se, null, o.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ae = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ie = n.n(ae);
			const ce = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				de = M.a.div("Container", ie.a),
				le = M.a.wrapped(N.a, "IFrame", ie.a),
				ue = M.a.wrapped($, "Images", ie.a),
				me = M.a.wrapped(re, "Links", ie.a),
				pe = M.a.div("MainContent", ie.a),
				be = M.a.div("MainContentColumn", ie.a),
				he = M.a.button("NotReady", ie.a),
				ge = M.a.span("NotReadyText", ie.a),
				fe = M.a.wrapped(L.a, "NotReadyIcon", ie.a),
				ve = Object(x.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return m.a.createElement(_.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(de, {
						className: t,
						innerRef: n
					}, m.a.createElement(pe, null, m.a.createElement(be, null, m.a.createElement(ue, null, "Images Placeholder")), m.a.createElement(be, null, m.a.createElement(le, {
						className: Object(f.a)({
							[ie.a.fields]: Object(D.b)(s)
						}),
						path: A.c.Register,
						uiMode: A.d.Embed
					}))), m.a.createElement(he, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(k.j)(.8, i)
						}
					}, m.a.createElement(ge, null, o.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(fe, null)), m.a.createElement(me, null)))
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
						}), this.props.sendEvent(Object(R.a)()))
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(ve, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(I.Motion, {
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
				Me = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ne = n("./src/reddit/selectors/activeModalId.ts"),
				Te = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Ae = n.n(Te);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = M.a.button("CloseButton", Ae.a), Fe = M.a.wrapped(Me.a, "Close", Ae.a), De = M.a.div("Container", Ae.a), Ue = M.a.p("Description", Ae.a), Ge = M.a.div("Footer", Ae.a), Be = M.a.h3("Heading", Ae.a), He = M.a.img("SnooImage", Ae.a), qe = M.a.div("Wrapper", Ae.a), We = Object(g.c)({
				activeModalId: Ne.a
			});
			class Ve extends m.a.Component {
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
					return m.a.createElement(qe, null, m.a.createElement(De, null, m.a.createElement(Be, null, Re._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(Ue, null, Re._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(He, {
						src: `${U.a.assetPath}/img/magnifying-glass-snoo.png`
					})), m.a.createElement(Ge, null, m.a.createElement(Ie.i, {
						onClick: this.onCloseButtonClick
					}, Re._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(Le, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(Fe, null)))
				}
			}
			var Ke = Object(p.b)(We, e => ({
					modalToggled: t => e(Object(je.i)(t))
				}))(Object(ke.a)(Object(T.c)(Ve))),
				ze = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Qe = n("./src/lib/loadWithRetries/index.ts");
			var Je = Object(Se.a)({
				getComponent: () => Object(Qe.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ze = () => null;
			var Ye = Object(Se.a)({
					ErrorComponent: Ze,
					getComponent: () => Object(Qe.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Ze
				}),
				Xe = n("./src/reddit/actions/structuredStyles/index.ts"),
				$e = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				et = n("./src/reddit/constants/modals.ts"),
				tt = n("./src/reddit/controls/TextButton/index.tsx"),
				nt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: st
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ot = Object(p.b)(null, (e, {
				subredditId: t
			}) => ({
				closeModal: () => {
					e(Object(je.i)(et.a.BLADE_NIGHTMODE)), e(Object(Xe.f)())
				},
				openBlade: () => {
					e(Object(Xe.e)(t))
				}
			}));
			var rt = Object(ke.a)(ot(e => m.a.createElement($e.d, null, m.a.createElement($e.h, null, m.a.createElement(nt.a, null, m.a.createElement($e.p, null, st._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(tt.a, {
					onClick: e.closeModal
				}, m.a.createElement($e.b, null)))), m.a.createElement($e.k, null, m.a.createElement($e.n, null, st._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement($e.f, null, m.a.createElement($e.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, st._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement($e.q, {
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
				ut = n("./src/reddit/components/FlairSearch/index.tsx"),
				mt = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
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
				St = M.a.wrapped(bt.a, "Section", Et.a),
				wt = M.a.div("CheckboxText", Et.a);
			class _t extends m.a.Component {
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
						isUserEnabled: o
					} = e.displaySettings, r = this.state.showFlair !== o, a = jt(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(mt.b)(n, t, a);
					return !(i || c !== mt.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s
					} = e, r = n.permissions.canUserChange, a = n.permissions.canUserChange, {
						templates: i,
						templateIds: c
					} = n, d = this.canSave(), l = Pt(e);
					return m.a.createElement(dt.a, null, m.a.createElement(ct.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(lt.a, {
						flair: t.previewFlair,
						flairTemplateType: ht.d.UserFlair,
						placeholderText: o.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), a && m.a.createElement(ut.a, {
						flair: t.previewFlair,
						flairTemplateType: ht.d.UserFlair,
						subredditId: s,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && m.a.createElement(St, null, m.a.createElement(pt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(wt, null, o.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: Et.a.buttonsRow
					}, m.a.createElement(Ie.i, {
						disabled: !d,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), r && m.a.createElement(Ie.l, {
						className: Et.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
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
				activeFlairChanged: (n, s, o, r) => e(Object(it.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(at.b)({
					username: null,
					subredditId: null
				}))
			}))(_t);
			var It = Object(ke.a)(Object(T.c)(kt)),
				Mt = n("./src/reddit/selectors/bannedUser.ts"),
				Nt = n("./src/reddit/selectors/muted.ts"),
				Tt = n("./src/reddit/selectors/notificationPrefs.ts"),
				At = n("./src/reddit/selectors/platform.ts"),
				Rt = n("./src/reddit/selectors/removalReasons.ts"),
				Lt = n("./src/reddit/constants/cookie.ts"),
				Ft = n("./src/reddit/featureFlags/index.ts"),
				Dt = n("./src/reddit/helpers/localStorage/index.ts"),
				Ut = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Gt = Object(g.c)({
				activeModalId: Ne.a,
				authorContext: ft.c,
				badgePurchaseModalIsOpen: Object(Ne.b)(et.a.BADGE_PURCHASE),
				banContext: Mt.a,
				banModalIsOpen: Object(Ne.b)(et.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Ne.b)(et.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Ne.b)(et.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Ft.d.introModal(e),
				isOverlayOpen: At.h,
				moderatorPermissions: e => {
					const t = Object(At.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Nt.a,
				muteModalIsOpen: Object(Ne.b)(et.a.MUTE_USER),
				notificationsPrePromptIsOpen: Tt.d,
				removalReasonContext: Rt.b,
				removalReasonModalIsOpen: Object(Ne.b)(et.a.ADD_REMOVAL_REASON),
				subredditId: At.c,
				userFlairModalIsOpen: Object(Ne.b)(et.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Ct.w,
				userInRedesignBeta: Ct.D,
				userIsLoggedIn: Ct.J,
				userIsMod: Ct.K,
				userIsNew: Ct.M
			});
			class Bt extends m.a.Component {
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
						const t = Object(Dt.A)(et.a.ALPHA_CONSUMER);
						t && Object(Dt.V)(et.a.ALPHA_CONSUMER), (e || t) && Object(Dt.xb)(et.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Dt.A)(et.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Dt.xb)(et.a.REDESIGN_MODAL, !0)
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
						userFlairModalIsOpen: x
					} = this.props, C = (e, t, n) => s => () => b(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(xt.comment)(o, n),
						post: n && Object(xt.post)(o, n),
						screen: Object(xt.screen)(o),
						subreddit: Object(xt.subredditById)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(_e.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: g,
						trackAddEvent: C("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: C("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && m.a.createElement(ze.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: f,
						trackAddEvent: C("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && l && m.a.createElement(Ye, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: v,
						trackClick: C("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), o && h && m.a.createElement(rt, {
						subredditId: h
					}), x && e && e.subredditId && m.a.createElement(It, {
						subredditId: e.subredditId
					}), t && r && m.a.createElement(we, {
						withOverlay: !0,
						productId: r
					}), d && m.a.createElement(Je, null), a && m.a.createElement(Ke, {
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
				Kt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				zt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Qt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Jt = n.n(Qt);
			const Zt = M.a.div("Overlay", Jt.a),
				Yt = M.a.div("IframeContainer", Jt.a),
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
			class nn extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === A.c.Register && Object(D.f)(this.props.frontpageSignupVariant) && Kt.a.throttleFeature(Wt.kb), this.props.sendEvent(Object(R.a)(this.subscriptions))
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
						containerSize: o,
						isSSOLinkActionFailedModal: r,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(D.c)(e) || Object(D.d)(e), d = s === A.c.LinkAppleSSO || s === A.c.LinkGoogleSSO || s === A.c.UnlinkAppleSSO || s === A.c.UnlinkGoogleSSO, l = s === A.c.GoogleOneTap, u = Object(f.a)({
						[Jt.a.small]: c,
						[Jt.a.ssoConfirmPassword]: d,
						[Jt.a.linkActionSSOFail]: r,
						[Jt.a.mResponsive]: t,
						[Jt.a.mGoogleOneTap]: l && !a
					}), p = Object(f.a)({
						[Jt.a.mGoogleOneTap]: l && !a,
						[Jt.a.mHiddenOverlay]: l && !i
					}), b = !c && !r && !t;
					return m.a.createElement(Zt, {
						className: p
					}, m.a.createElement(Yt, {
						className: u,
						style: o || Xt
					}, m.a.createElement(N.a, {
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
			Object(qt.b)(et.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(sn, {
				path: A.c.ChangePassword
			})), Object(qt.b)(et.a.LOGIN_MODAL_ID, e => m.a.createElement(sn, {
				path: A.c.Index
			})), Object(qt.b)(et.a.ONBOARDING_MODAL_ID, e => m.a.createElement(sn, {
				path: A.c.Onboarding
			})), Object(qt.b)(et.a.ENABLE_TWO_FACTOR, e => m.a.createElement(sn, {
				path: A.c.EnableTwoFactor
			})), Object(qt.b)(et.a.DISABLE_TWO_FACTOR, e => m.a.createElement(sn, {
				path: A.c.DisableTwoFactor
			})), Object(qt.b)(et.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(sn, {
				path: A.c.TwoFactorBackupCodes
			})), Object(qt.b)(et.a.REGISTER_MODAL_ID, e => m.a.createElement(sn, {
				path: A.c.Register
			})), Object(qt.b)(et.a.LINK_APPLE_SSO, e => m.a.createElement(sn, {
				path: A.c.LinkAppleSSO
			})), Object(qt.b)(et.a.LINK_GOOGLE_SSO, e => m.a.createElement(sn, {
				path: A.c.LinkGoogleSSO
			})), Object(qt.b)(et.a.UNLINK_APPLE_SSO, e => m.a.createElement(sn, {
				path: A.c.UnlinkAppleSSO
			})), Object(qt.b)(et.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(sn, {
				path: A.c.UnlinkGoogleSSO
			})), Object(qt.b)(et.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(sn, {
				path: A.c.GoogleOneTap
			}));
			const on = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("BadgePickerModal").then(n.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.BADGE_PICKER, e => m.a.createElement(on, {
				withOverlay: !0
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const rn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(rn, {
				withOverlay: !0
			}));
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(an, {
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(cn, {
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.CROWD_CONTROL, e => m.a.createElement(dn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(ln, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(Se.a)({
					getComponent: () => Object(Qe.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				pn = e => () => {
					e()
				};
			Object(qt.b)(et.a.GOLD_GILD_MODAL, e => m.a.createElement(mn, {
				onOverlayClick: pn(e),
				withOverlay: !0
			}));
			var bn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				hn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				gn = n.n(hn);
			const fn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = bn.SPARKLE_ASSET_PATH, document.createElement("img").src = bn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(qt.b)(et.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(fn, {
				withOverlay: !0,
				className: gn.a.modalBody,
				overlayClassName: gn.a.modalOverlay
			}));
			const vn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				xn = e => () => {
					e()
				};
			Object(qt.b)(et.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(vn, {
				onOverlayClick: xn(e),
				withOverlay: !0
			}));
			const Cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(Cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const On = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(On, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const yn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(yn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const En = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Pn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const jn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.TRANSFER_POINTS, e => m.a.createElement(jn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Sn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(Sn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const wn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(wn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const _n = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(_n, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const kn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_CREATE, e => m.a.createElement(kn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(qt.b)(et.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(kn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const In = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(qt.b)(et.a.MULTIREDDIT_EDIT, e => m.a.createElement(In, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx");
			const Mn = () => null,
				Nn = Object(Se.a)({
					ErrorComponent: Mn,
					getComponent: () => Object(Qe.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Mn
				});
			Object(qt.b)(et.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Nn, null));
			var Tn = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				An = n.n(Tn);
			const {
				fbt: Rn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ln = M.a.h2("ColumnLabel", An.a), Fn = M.a.wrapped(bt.a, "ColumnWrapper", An.a), Dn = M.a.div("Column", An.a), Un = M.a.div("Description", An.a), Gn = M.a.div("Key", An.a), Bn = M.a.wrapped($e.k, "ModalMain", An.a), Hn = M.a.wrapped($e.d, "ModalBody", An.a), qn = M.a.wrapped(Ie.i, "PrimaryButton", An.a), Wn = M.a.wrapped(tt.a, "TextButton", An.a), Vn = Object(p.b)(null, e => ({
				closeModal: () => e(Object(je.i)(et.a.KEYBOARD_SHORTCUTS))
			})), Kn = M.a.wrapped(Object(ke.a)(Vn(e => m.a.createElement(Hn, {
				onClick: e => e.stopPropagation()
			}, m.a.createElement($e.h, null, m.a.createElement(nt.a, null, m.a.createElement($e.p, null, Rn._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), m.a.createElement(Wn, {
				onClick: e.closeModal
			}, m.a.createElement($e.b, null)))), m.a.createElement(Bn, null, m.a.createElement(Fn, null, m.a.createElement(Dn, null, m.a.createElement(bt.a, null, m.a.createElement(Ln, null, Rn._("Navigation", null, {
				hk: "3zSWEe"
			}))), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), m.a.createElement(Gn, null, "Shift + ?")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Next post or comment", null, {
				hk: "1m8s9z"
			})), m.a.createElement(Gn, null, "J")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), m.a.createElement(Gn, null, "K")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), m.a.createElement(Gn, null, "N")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), m.a.createElement(Gn, null, "P")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Open post", null, {
				hk: "2wD7mh"
			})), m.a.createElement(Gn, null, "Enter")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Open/close expando", null, {
				hk: "1yDst0"
			})), m.a.createElement(Gn, null, "X")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Go to post link", null, {
				hk: "c0TNr"
			})), m.a.createElement(Gn, null, "L"))), m.a.createElement(Dn, null, m.a.createElement(bt.a, null, m.a.createElement(Ln, null, Rn._("Action", null, {
				hk: "3QI6pT"
			}))), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Upvote", null, {
				hk: "5i9NP"
			})), m.a.createElement(Gn, null, "A")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Downvote", null, {
				hk: "1ef3YP"
			})), m.a.createElement(Gn, null, "Z")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("New post", null, {
				hk: "4dtNWf"
			})), m.a.createElement(Gn, null, "C")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Reply to comment", null, {
				hk: "G8AbT"
			})), m.a.createElement(Gn, null, "R")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Submit comment/post", null, {
				hk: "13agk7"
			})), m.a.createElement(Gn, null, "Ctrl + Enter")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Save", null, {
				hk: "3Dtwo5"
			})), m.a.createElement(Gn, null, "S")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Hide", null, {
				hk: "2Dn9GF"
			})), m.a.createElement(Gn, null, "H")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Open navigation", null, {
				hk: "QdGe2"
			})), m.a.createElement(Gn, null, "Q")), m.a.createElement(bt.a, null, m.a.createElement(Un, null, Rn._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), m.a.createElement(Gn, null, "Enter"))))), m.a.createElement($e.f, null, m.a.createElement(qn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, Rn._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", An.a);
			Object(qt.b)(et.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Kn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const zn = Object(Se.a)({
					getComponent: () => Object(Qe.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Qn = e => () => {
					e()
				};
			Object(qt.b)(et.a.SNOOVATAR_MODAL, e => m.a.createElement(zn, {
				onOverlayClick: Qn(e),
				withOverlay: !0
			}));
			const {
				fbt: Jn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Zn = Object(g.c)({
				allowNavigationCallback: At.a
			}), Yn = Object(p.b)(Zn, e => ({
				closeModal: () => e(Object(je.i)(et.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Xe.a)())
			}));
			class Xn extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement($e.d, null, m.a.createElement($e.h, null, m.a.createElement(nt.a, null, m.a.createElement($e.p, null, Jn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(tt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement($e.b, null)))), m.a.createElement($e.k, null, m.a.createElement($e.o, null, Jn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement($e.f, null, m.a.createElement($e.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Jn._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement($e.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Jn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const $n = Object(ke.a)(Yn(Xn));
			Object(qt.b)(et.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement($n, {
				withOverlay: !0
			}));
			const es = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Qe.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("SubredditWelcomeMessageModal")]).then(n.bind(null, "./src/reddit/components/SubredditWelcomeMessageModal/index.tsx"))).then(e => e.default)
			});
			Object(qt.b)(et.a.SUBREDDIT_WELCOME_MESSAGE, e => m.a.createElement(es, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ts = Object(g.c)({
					activeModalId: Ne.a
				}),
				ns = Object(p.b)(ts, e => ({
					toggleModal: t => e(Object(je.i)(t))
				})),
				ss = 500,
				os = () => {};
			class rs extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					et.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ut.a)(), ss) : setTimeout(() => Object(Ut.b)(), ss))
				}
				componentWillUnmount() {
					Object(Ut.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(qt.a)(e)(e ? this.toggleModal : os)
				}
			}
			var as, is = ns(rs),
				cs = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ds = n("./src/reddit/actions/page.ts"),
				ls = n("./src/reddit/actions/shortcuts/utils.ts"),
				us = n("./src/reddit/icons/fonts/index.tsx"),
				ms = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ps = n("./src/reddit/icons/svgs/Pinmenu/index.tsx"),
				bs = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				hs = n("./src/reddit/selectors/header.ts"),
				gs = n("./src/reddit/selectors/userPrefs.ts"),
				fs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				vs = n("./src/reddit/components/SEOTitle/index.tsx"),
				xs = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Cs = n("./src/reddit/components/UserIcon/index.tsx"),
				Os = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				ys = n("./src/reddit/icons/svgs/All/index.tsx"),
				Es = n("./src/reddit/icons/svgs/Browse/index.tsx"),
				Ps = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				js = n("./src/reddit/icons/svgs/Envelope/index.tsx"),
				Ss = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				ws = n("./src/reddit/icons/svgs/Home/index.tsx"),
				_s = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				ks = n("./src/reddit/icons/svgs/Multireddit/index.tsx"),
				Is = n("./src/reddit/icons/svgs/Notify/index.tsx"),
				Ms = n("./src/reddit/icons/svgs/Popular/index.tsx"),
				Ns = n("./src/reddit/icons/svgs/Post/index.tsx"),
				Ts = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				As = n("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Rs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Ls = n.n(Rs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(as || (as = {}));
			const Fs = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(vs.b, {
					type: vs.a.HeaderSelector
				}, s))
			};
			var Ds = n("./src/lib/objectSelector/index.ts"),
				Us = n("./src/reddit/constants/wiki.ts"),
				Gs = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Bs = n("./src/reddit/selectors/subreddit.ts"),
				Hs = n("./src/reddit/selectors/topic.ts");
			var qs = Object(Ds.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(Vt.V)(t);
					switch (s) {
						case "index":
						case "listing":
							return n ? {
								type: as.Home
							} : {
								type: as.Popular
							};
						case "modListing":
							return {
								type: as.ModListing
							};
						case "modQueuePages":
							return {
								type: as.ModQueue
							};
						case "postCreation":
							return {
								type: as.CreatePost
							};
						case "postDraft":
							return {
								type: as.ViewDraft
							};
						case "subredditCreation":
							return {
								type: as.SubredditCreation
							};
						case "coins":
							return {
								type: as.Coins
							};
						case "premium":
							return {
								type: as.Premium
							};
						case "acknowledgements":
							return {
								type: as.Acknowledgements
							};
						case "appeal":
							return {
								type: as.Appeal
							};
						case "report":
							return {
								type: as.Report
							};
						case "userDataRequest":
							return {
								type: as.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: as.DailyCharts
							};
						case "geotagging":
							return {
								type: as.Geotagging
							};
						case "notificationsInbox":
							return {
								type: as.NotificationsInbox
							};
						case "topic": {
							const n = Object(Vt.s)(t),
								s = n && Object(Hs.d)(e, n);
							if (s) return {
								type: as.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (s) {
						case "inboxPages":
							return {
								type: as.Inbox, model: o
							};
						case "settings":
							return {
								type: as.Settings, model: o
							}
					}
					const r = Object(Vt.P)(e, {
						pageLayer: t
					});
					if ("all" === r) return {
						type: as.All
					};
					if ("popular" === r) return {
						type: as.Popular
					};
					const a = Object(Vt.q)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: as.CommunitySearch,
						model: a
					} : {
						type: as.Community,
						model: a
					};
					const i = Object(Vt.d)(e, {
						pageLayer: t
					});
					if (i) return {
						type: as.Multi,
						model: i
					};
					const c = Object(Vt.j)(e, {
						pageLayer: t
					});
					if (c) return {
						type: as.UserProfile,
						model: c
					};
					const d = Object(Vt.h)(t);
					if (d) return {
						type: as.UserProfileName,
						name: `u/${d}`
					};
					if (s && "searchResults" === s) return {
						type: as.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(Vt.n)(e, {
								pageLayer: t
							}) || Us.e,
							s = Object(Bs.A)(e, {
								subredditName: n
							});
						if (s) return {
							type: as.Community,
							model: s
						}
					}
					return "rpan" === s && Object(Gs.a)(e) ? {
						type: as.PublicAccessNetwork
					} : {
						type: as.Unknown
					}
				}),
				Ws = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Vs = n.n(Ws);

			function Ks() {
				return (Ks = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function zs(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Vs.a.icon
						}), m.a.createElement(n, {
							className: Vs.a.text
						})),
						className: Object(f.a)(Vs.a.item, e.className, {
							[Vs.a.mFocused]: !!e.isFocused,
							[Vs.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Ks({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(cs.a, Ks({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Qs = n("./src/reddit/constants/listings.ts"),
				Js = n("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				Zs = n("./src/reddit/helpers/overlay/index.ts"),
				Ys = n("./src/reddit/routes/modListing/index.ts"),
				Xs = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				$s = n("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				eo = n("./src/reddit/selectors/multireddit.ts"),
				to = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				no = n("./src/lib/LinkedListMap/index.ts");
			const so = Object(g.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(eo.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(eo.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				isUserEnrolledInOldModmail: Bs.o,
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var oo;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(oo || (oo = {}));
			const ro = e => ({
					id: as.DailyCharts,
					type: oo.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: o.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "list_numbered"
						}) : m.a.createElement(Ss.a, {
							className: Object(f.a)(t, Ls.a.itemIcon)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}))
					},
					telemetryNoun: "daily_charts"
				}),
				ao = (e, t) => [t => ({
					id: as.All,
					type: oo.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "all"
						}) : m.a.createElement(ys.a, {
							className: Object(f.a)(t, Ls.a.itemIcon)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("All", null, {
							hk: "2M8nEy"
						}))
					},
					telemetryNoun: "all"
				}), ...t ? [] : [t => ro(e)]],
				io = (e, t) => [e => ({
					id: "reddit-feeds",
					type: oo.Header,
					model: {
						displayText: t ? o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString() : o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (t, n) => ({
					id: as.Home,
					type: oo.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "home"
						}) : m.a.createElement(ws.a, {
							className: Object(f.a)(t, Ls.a.itemIcon),
							isBadged: n && n.isBadged
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Home", null, {
							hk: "2u56yo"
						}))
					},
					telemetryNoun: "home"
				}), t => ({
					id: as.Popular,
					type: oo.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "popular"
						}) : m.a.createElement(Ms.a, {
							className: Object(f.a)(t, Ls.a.itemIcon)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...ao(e, t)],
				co = e => [t => ({
					id: as.Coins,
					type: oo.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "coins"
						}) : m.a.createElement(Ps.a, {
							className: Object(f.a)(t, Ls.a.itemCoin)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}))
					},
					telemetryNoun: "coins"
				}), t => ({
					id: as.Premium,
					type: oo.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "premium"
						}) : m.a.createElement(Ts.a, {
							className: Object(f.a)(t, Ls.a.itemPremium)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}))
					},
					telemetryNoun: "premium"
				})],
				lo = e => [t => ({
					id: as.ModQueue,
					type: oo.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "mod_queue"
						}) : m.a.createElement(_s.a, {
							className: Object(f.a)(t, Ls.a.itemModQueue)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}))
					},
					telemetryNoun: "mod_queue"
				}), (t, n) => {
					const s = !!(null == n ? void 0 : n.isUserEnrolledInOldModmail),
						r = s ? "/message/moderator" : "https://mod.reddit.com/mail/all",
						a = s ? "modmail" : "modmail_beta";
					return {
						id: as.ModMail,
						type: oo.GenericLink,
						model: {
							url: r,
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: ({
								className: t
							}) => e ? m.a.createElement(us.a, {
								name: "mod_mail"
							}) : m.a.createElement(js.a, {
								className: Object(f.a)(t, Ls.a.itemModQueue)
							}),
							text: ({
								className: e
							}) => m.a.createElement("span", {
								className: e
							}, o.fbt._("Modmail", null, {
								hk: "2QQ3dU"
							}))
						},
						telemetryNoun: a
					}
				}];

			function uo(e, t, n, s, r, a, i) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: oo.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && mo(e, s, r, a, i), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: oo.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: oo.Header,
					model: {
						displayText: n ? o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString() : o.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: oo.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const mo = (e, t, n, s, r) => {
					const a = s === Wt.od.Modals,
						i = {
							id: as.CreateCommunity,
							telemetryNoun: "create_community"
						},
						c = {
							displayText: Object(Js.a)(n, o.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString()).toString(),
							icon: ({
								className: e
							}) => t ? m.a.createElement(us.a, {
								name: "add"
							}) : m.a.createElement(Ns.a, {
								className: Object(f.a)(e, Ls.a.itemIcon)
							}),
							text: ({
								className: e
							}) => m.a.createElement("span", {
								className: e
							}, Object(Js.a)(n, o.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString()).toString())
						};
					a ? e.push({
						...i,
						type: oo.GenericClickable,
						model: {
							...c,
							onClick: () => {
								r(Object(Zs.a)("/subreddits/create"))
							}
						}
					}) : e.push({
						...i,
						type: oo.GenericLink,
						model: {
							...c,
							url: "/subreddits/create"
						}
					})
				},
				po = (e, t) => e.push({
					id: as.NotificationsInbox,
					type: oo.GenericLink,
					model: {
						url: "/notifications",
						displayText: o.fbt._("Notifications", null, {
							hk: "2xenVO"
						}).toString(),
						icon: ({
							className: e
						}) => t ? m.a.createElement(us.a, {
							name: "notification"
						}) : m.a.createElement(Is.a, {
							className: Object(f.a)(e, Ls.a.itemIcon)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Notifications", null, {
							hk: "2xenVO"
						}))
					},
					telemetryNoun: "inbox"
				}),
				bo = (e, t, n, s, r, a) => (io(s, r).forEach(e => t.push(e(n))), n.isEmployee && (e => [t => ({
					id: as.Employee,
					type: oo.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: ({
							className: t
						}) => e ? m.a.createElement(us.a, {
							name: "home"
						}) : m.a.createElement(ws.a, {
							className: Object(f.a)(t, Ls.a.itemIcon)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, "Employee Communities")
					},
					telemetryNoun: "employee"
				})])(s).forEach(e => t.push(e(n))), Object(Xs.b)(e) && !r && po(t, s), Object(Gs.a)(e) && t.push({
					id: as.PublicAccessNetwork,
					type: oo.GenericClickable,
					model: {
						onClick: () => {
							a(Object(Zs.a)(Qs.c[Qs.b.Rpan]))
						},
						displayText: o.fbt._("Reddit live", null, {
							hk: "3zuymj"
						}).toString(),
						icon: ({
							className: e
						}) => s ? m.a.createElement(us.a, {
							name: "video_live"
						}) : m.a.createElement(As.c, {
							className: Object(f.a)(e, Ls.a.itemIcon)
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Reddit Live", null, {
							hk: "93lry"
						}))
					},
					telemetryNoun: "rpan"
				}), t),
				ho = (e, t, n, s) => {
					e.push({
						id: "header-multis",
						type: oo.Header,
						model: {
							displayText: o.fbt._("Custom feeds", null, {
								hk: "3K02MA"
							}).toString(),
							button: ({
								className: e,
								sendClickEvent: t
							}) => m.a.createElement("button", {
								onClick: () => {
									n(Object(je.h)(et.a.MULTIREDDIT_CREATE)), t()
								},
								className: Object(f.a)(e, Ls.a.multiPlusButton)
							}, s ? m.a.createElement(us.a, {
								name: "add"
							}) : m.a.createElement(to.a, {
								className: Ls.a.multiPlusIcon
							})),
							buttonTelemetryNoun: "create_new_custom_feed"
						}
					}), t.multis.forEach(t => e.push({
						id: t.url,
						type: oo.Multi,
						model: t,
						telemetryNoun: "custom_feed"
					}))
				};
			var go = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				fo = n.n(go);

			function vo(e) {
				return m.a.createElement("div", {
					className: Object(f.a)(fo.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var xo = n("./src/reddit/actions/subscription/index.ts"),
				Co = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Oo = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				yo = n("./src/reddit/icons/svgs/Favorite/index.tsx"),
				Eo = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Po = n.n(Eo);

			function jo() {
				return (jo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const So = Object(g.c)({
					currentUser: Ct.i,
					hideNSFWPref: Ct.B,
					isLoggedIn: Ct.J
				}),
				wo = Object(p.b)(So, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case oo.Subreddit:
								e(Object(xo.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case oo.Profile:
								e(Object(xo.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case oo.Multi:
								e(Object(xo.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Co.f)(t.model.url)) : t.sendEvent(Object(Co.c)(t.model.url))
						}
					}
				}));
			var _o = Object(T.c)(wo((function(e) {
					const t = {
							className: Object(f.a)(Po.a.item, e.className, {
								[Po.a.mFocused]: !!e.isFocused
							}),
							id: e.id,
							role: "menuitem",
							tabIndex: -1,
							onFocus: e.onFocus,
							onMouseEnter: e.onMouseEnter,
							onMouseLeave: e.onMouseLeave,
							onClick: e.onClick
						},
						n = Object(Oo.a)();
					switch (e.type) {
						case oo.Subreddit:
							return m.a.createElement(cs.a, jo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(xs.b, {
								className: Po.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? m.a.createElement(us.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Po.a.favorite
							}) : m.a.createElement(yo.a, {
								className: Object(f.a)(Po.a.favorite, {
									[Po.a.mFavorite]: !!e.isFavorite
								})
							})));
						case oo.SubredditAutocomplete:
							return m.a.createElement(cs.a, jo({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(xs.b, {
								className: Po.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.name));
						case oo.Multi:
							return m.a.createElement(cs.a, jo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Po.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? m.a.createElement(us.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Po.a.favorite
							}) : m.a.createElement(yo.a, {
								className: Object(f.a)(Po.a.favorite, {
									[Po.a.mFavorite]: !!e.isFavorite
								})
							})));
						case oo.Profile:
							return m.a.createElement(cs.a, jo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Cs.a, {
								className: Po.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, n ? m.a.createElement(us.a, {
								name: "star",
								isFilled: !!e.isFavorite
							}) : m.a.createElement(yo.a, {
								className: Object(f.a)(Po.a.favorite, {
									[Po.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				ko = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Io = n.n(ko);

			function Mo(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Io.a.header
				}), m.a.createElement("div", {
					className: Io.a.item
				}), m.a.createElement("div", {
					className: Io.a.item
				}), m.a.createElement("div", {
					className: Io.a.item
				}), m.a.createElement("div", {
					className: Io.a.item
				}))
			}
			var No = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				To = n("./src/reddit/actions/subreddit.ts"),
				Ao = n("./src/reddit/constants/keycodes.ts"),
				Ro = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Lo = n("./src/lib/loadableAction/index.ts"),
				Fo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Do = n.n(Fo);

			function Uo() {
				return (Uo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Go(e) {
				return e.id === as.ModMail || e.id === as.CreateCommunity
			}

			function Bo(e) {
				const t = new no.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== oo.Header && e.type !== oo.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Ho = Object(g.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = so(e),
							s = new no.a("id"),
							r = Object(bs.a)(e),
							a = Object(Ct.gb)(e),
							i = a && Object($s.a)(e),
							c = Object($s.d)(e),
							d = Object($s.c)(e);
						if (n.account) {
							const l = n.account;
							if (!i && bo(e, s, l, r, i, t), (n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
									id: "header-favorites",
									type: oo.Header,
									model: {
										displayText: o.fbt._("favorites", null, {
											hk: "4Gg0k2"
										}).toString()
									}
								}), n.favoriteSubreddits.forEach(e => s.push({
									id: "fav" + e.id,
									type: oo.Subreddit,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteProfiles.forEach(e => s.push({
									id: "fav" + e.id,
									type: oo.Profile,
									model: e,
									telemetryNoun: "community_favorite"
								})), n.favoriteMultireddits.forEach(e => s.push({
									id: "fav" + e.url,
									type: oo.Multi,
									model: e,
									telemetryNoun: "custom_feed"
								}))), n.multisPending ? s.push({
									id: "multis-pending",
									type: oo.LoadingState,
									model: {
										displayText: ""
									}
								}) : !i && n.multis.length > 0 && ho(s, n, t, r), n.moderatingSubredditsPending) s.push({
								id: "moderatingSubreddits-pending",
								type: oo.LoadingState,
								model: {
									displayText: ""
								}
							});
							else if (n.moderatingSubreddits.length) {
								if (s.push({
										id: "header-moderating",
										type: oo.Header,
										model: {
											displayText: i ? o.fbt._("moderating", null, {
												hk: "2du7dx"
											}).toString() : o.fbt._("moderating subreddits", null, {
												hk: "2z4AZS"
											}).toString()
										}
									}), i && l.isMod) {
									const {
										isUserEnrolledInOldModmail: e
									} = n;
									lo(r).forEach(t => s.push(t(l, {
										isUserEnrolledInOldModmail: e
									})))
								}
								s.push({
									id: as.ModListing,
									type: oo.GenericLink,
									model: {
										url: Ys.a,
										displayText: "r/Mod",
										icon: ({
											className: e
										}) => m.a.createElement(_s.a, {
											className: Object(f.a)(e, Ls.a.itemModQueue)
										}),
										text: ({
											className: e
										}) => m.a.createElement("span", {
											className: e
										}, "r/Mod")
									},
									telemetryNoun: "r_mod"
								}), n.moderatingSubreddits.forEach(e => s.push({
									id: "mod" + e.id,
									type: oo.Subreddit,
									model: e,
									telemetryNoun: "community_moderate"
								}))
							}
							if (i && n.multis.length > 0 && ho(s, n, t, r), n.subscriptionsPending ? s.push({
									id: "subscriptions-pending",
									type: oo.LoadingState,
									model: {
										displayText: ""
									}
								}) : uo(s, n, i, r, c, d, t), i && bo(e, s, l, r, i, t), (e => [e => ({
									id: "reddit-other",
									type: oo.Header,
									model: {
										displayText: o.fbt._("Other", null, {
											hk: "1etY05"
										}).toString()
									}
								}), e => ({
									id: as.Settings,
									type: oo.GenericLink,
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
									id: as.Inbox,
									type: oo.GenericLink,
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
								}), t => ({
									id: as.CreatePost,
									type: oo.GenericLink,
									model: {
										url: "/submit",
										displayText: o.fbt._("Create Post", null, {
											hk: "dGck6"
										}).toString(),
										icon: ({
											className: t
										}) => e ? m.a.createElement(us.a, {
											name: "add"
										}) : m.a.createElement(Ns.a, {
											className: Object(f.a)(t, Ls.a.itemIcon)
										}),
										text: ({
											className: e
										}) => m.a.createElement("span", {
											className: e
										}, o.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									},
									telemetryNoun: "create_post"
								})])(r).forEach(e => s.push(e(l))), a && !i && mo(s, r, c, d, t), i && s.push(ro(r)), Object(Xs.b)(e) && i && po(s, r), co(r).forEach(e => s.push(e(l))), !i && l.isMod) {
								const {
									isUserEnrolledInOldModmail: e
								} = n;
								lo(r).forEach(t => s.push(t(l, {
									isUserEnrolledInOldModmail: e
								})))
							}
						} else n.subscriptions.length || Object(Ct.J)(e) ? io(r, i).forEach(e => s.push(e(null))) : (e => [e => ({
							id: "reddit-feeds",
							type: oo.Header,
							model: {
								displayText: o.fbt._("Reddit Feeds", null, {
									hk: "3C1mtF"
								}).toString()
							}
						}), () => ({
							id: as.Home,
							type: oo.GenericLink,
							model: {
								url: "/",
								displayText: o.fbt._("Popular", null, {
									hk: "1op8tD"
								}).toString(),
								icon: ({
									className: t
								}) => e ? m.a.createElement(us.a, {
									name: "home"
								}) : m.a.createElement(Ms.a, {
									className: Object(f.a)(t, Ls.a.itemIcon)
								}),
								text: ({
									className: e
								}) => m.a.createElement("span", {
									className: e
								}, o.fbt._("Popular", null, {
									hk: "1op8tD"
								}))
							},
							telemetryNoun: "popular"
						}), ...ao(e, !1)])(r).forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: oo.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), co(r).forEach(e => s.push(e(null))), uo(s, n, i, r, c, d, t);
						return s
					}
				}),
				qo = e => ({
					onHomeClicked: () => e(Object(Lo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(xo.e)()), e(Object(To.q)()), e(Object(Lo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Wo = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Vo extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Bo(n),
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
						if (e.key === Ao.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Ao.b.Tab && this.props.onClose && this.props.onClose(), e.key === Ao.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== oo.Header && e.type !== oo.LoadingState && (this.fireTelemetryForListItem(e), e.type === oo.GenericClickable ? e.model.onClick() : Go(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Ao.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === Ao.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case as.Coins:
							case as.Premium:
								Object(Ro.d)(Ro.a.GoldPayment, !0), t = Object(Ro.c)(Ro.a.GoldPayment)
						}
						switch (e.type) {
							case oo.Category:
							case oo.GenericLink:
							case oo.GenericClickable:
							case oo.Multi:
							case oo.Profile:
							case oo.Subreddit:
								this.props.sendEvent(n => ({
									...Object(xt.defaults)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === oo.Multi ? Object(xt.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case oo.Header: {
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
						focusOrder: Bo(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Bo(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new no.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case oo.Category:
								case oo.GenericLink:
								case oo.Multi:
								case oo.Profile:
								case oo.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case oo.Header: {
									const t = n.last();
									t && t.type === oo.Header && n.pop(), n.push(e);
									break
								}
								case oo.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === oo.Header && n.pop(), n
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
						className: Do.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === as.Home && this.props.onHomeClicked(), e.type === oo.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case oo.GenericClickable:
								return m.a.createElement(zs, Uo({}, n, {
									className: Do.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case oo.Category:
							case oo.GenericLink:
								return m.a.createElement(zs, Uo({}, n, {
									externalLink: Go(e),
									className: Do.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case oo.Header: {
								const n = e.model.button;
								return m.a.createElement(vo, {
									className: Do.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Do.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case oo.LoadingState:
								return m.a.createElement(Mo, {
									className: Do.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case oo.Multi:
								return m.a.createElement(_o, Uo({}, n, {
									className: Do.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: oo.Multi
								}));
							case oo.Profile:
								return m.a.createElement(_o, Uo({}, n, {
									className: Do.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: oo.Profile
								}));
							case oo.Subreddit:
								return m.a.createElement(_o, Uo({}, n, {
									className: Do.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: oo.Subreddit
								}))
						}
					}))
				}
			}
			const Ko = Object(p.b)(Ho, qo, Wo)(Object(T.c)(Vo)),
				zo = Object(p.b)(Ho, qo, Wo)(Object(T.c)(Object(No.b)(Vo))),
				Qo = Object(Vt.t)({
					isCommentsPage: Vt.w,
					pageLayer: e => e
				}),
				Jo = Object(g.c)({
					currentPage: qs,
					hideNSFWPref: Ct.B,
					isDropdownOpen: hs.a,
					isInIcons2020: bs.a,
					isLoggedIn: Ct.J,
					isOverlayOpen: At.h,
					isPinnedSubscriptionsMenuDisabled: gs.a,
					isSubscriptionsPinned: gs.b
				});
			class Zo extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(ls.d)()
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
						isInIcons2020: r,
						isLoggedIn: a,
						isOverlayOpen: i
					} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = i || !a && s;
					return m.a.createElement("div", {
						"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(f.a)(Ls.a.container, t, {
							[Ls.a.mOpen]: c,
							[Ls.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Ls.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, m.a.createElement("button", {
						className: Ls.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, m.a.createElement("span", {
						className: Ls.a.containerText
					}, " ", function(e) {
						switch (e.type) {
							case as.Acknowledgements:
								return Fs(o.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case as.All:
								return Fs(o.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case as.Appeal:
								return Fs(o.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case as.Coins:
								return Fs(o.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case as.Community:
								return Fs(e.model.displayText, !0);
							case as.CommunitySearch:
								return Fs(o.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case as.CreateCommunity:
								return Fs(o.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case as.CreatePost:
								return Fs(o.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case as.DailyCharts:
								return Fs(o.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case as.GlobalSearch:
								return Fs(o.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case as.Geotagging:
								return Fs(o.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case as.Home:
								return Fs(o.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case as.Inbox:
								return Fs(o.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case as.ModListing:
								return Fs("r/Mod");
							case as.ModMail:
								return Fs(o.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case as.ModQueue:
								return Fs(o.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case as.Multi:
								return Fs(e.model.displayText, !0);
							case as.NotificationsInbox:
								return Fs(o.fbt._("Notifications", null, {
									hk: "FiFRe"
								}).toString());
							case as.Popular:
								return Fs(o.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case as.Premium:
								return Fs(o.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case as.PublicAccessNetwork:
								return Fs(o.fbt._("Reddit Live", null, {
									hk: "4tlHX5"
								}).toString());
							case as.Report:
								return Fs(o.fbt._("Report", null, {
									hk: "4oVcnd"
								}).toString());
							case as.Settings:
								return Fs(o.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case as.SubredditCreation:
								return Fs(o.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case as.Topic:
								return Fs(e.model);
							case as.Unknown:
								return Fs("");
							case as.UserDataRequest:
								return Fs(o.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case as.UserProfile:
								return Fs(e.model.displayText, !0);
							case as.UserProfileName:
								return Fs(e.name, !0);
							case as.ViewDraft:
								return Fs(o.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e), " "), function(e, t, n) {
						if (n) {
							const n = e => m.a.createElement(us.a, {
								name: e,
								isFilled: !0,
								className: Ls.a.defaultIcon
							});
							switch (e.type) {
								case as.All:
									return n("all");
								case as.Acknowledgements:
								case as.Appeal:
									return n("edit");
								case as.Coins:
									return n("coins");
								case as.CreateCommunity:
								case as.CreatePost:
									return n("add");
								case as.DailyCharts:
									return n("list_numbered");
								case as.GlobalSearch:
									return n("search");
								case as.Home:
									return n("home");
								case as.Inbox:
								case as.Settings:
									return m.a.createElement(Os.a, {
										wrapperClassName: Ls.a.userIcon
									});
								case as.ModListing:
									return n("mod_queue");
								case as.SubredditCreation:
									return n("add");
								case as.ModMail:
									return n("mod_mail");
								case as.ModQueue:
									return n("mod_queue");
								case as.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Ls.a.customFeedIcon
									});
								case as.NotificationsInbox:
									return n("notification");
								case as.Popular:
									return n("popular");
								case as.Premium:
									return n("premium");
								case as.PublicAccessNetwork:
									return n("video_live");
								case as.Report:
									return n("report");
								case as.Unknown:
									return m.a.createElement("div", {
										className: Ls.a.unknownIcon
									});
								case as.UserDataRequest:
									return n("add");
								case as.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Cs.a, {
										className: Ls.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case as.UserProfileName:
									return m.a.createElement("div", {
										className: Ls.a.defaultIcon
									});
								case as.ViewDraft:
									return n("edit");
								case as.Geotagging:
								case as.Topic:
									return n("custom_feed")
							}
						}
						switch (e.type) {
							case as.Acknowledgements:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.All:
								return m.a.createElement(ys.a, {
									className: Ls.a.defaultIcon
								});
							case as.Appeal:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.Coins:
								return m.a.createElement(Ps.a, {
									className: Ls.a.coinIcon
								});
							case as.Community:
							case as.CommunitySearch: {
								const n = Object(fs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(xs.b, {
									className: Ls.a.subredditIcon,
									iconUrl: n.url,
									primaryColor: n.color
								})
							}
							case as.CreateCommunity:
							case as.CreatePost:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.DailyCharts:
								return m.a.createElement(Ss.a, {
									className: Ls.a.defaultIcon
								});
							case as.GlobalSearch:
								return m.a.createElement(Es.a, {
									className: Ls.a.defaultIcon
								});
							case as.Home:
								return m.a.createElement(ws.a, {
									className: Ls.a.defaultIcon
								});
							case as.Inbox:
							case as.Settings:
								return m.a.createElement(Os.a, {
									wrapperClassName: Ls.a.userIcon
								});
							case as.ModListing:
								return m.a.createElement(_s.a, {
									className: Ls.a.modQueueIcon
								});
							case as.SubredditCreation:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.ModMail:
								return m.a.createElement(js.a, {
									className: Ls.a.modQueueIcon
								});
							case as.ModQueue:
								return m.a.createElement(_s.a, {
									className: Ls.a.modQueueIcon
								});
							case as.Multi:
								return m.a.createElement("img", {
									src: e.model.icon,
									className: Ls.a.customFeedIcon
								});
							case as.NotificationsInbox:
								return m.a.createElement(Is.a, {
									className: Ls.a.defaultIcon
								});
							case as.Popular:
								return m.a.createElement(Ms.a, {
									className: Ls.a.defaultIcon
								});
							case as.Premium:
								return m.a.createElement(Ts.a, {
									className: Ls.a.premiumIcon
								});
							case as.PublicAccessNetwork:
								return m.a.createElement(As.c, {
									className: Ls.a.defaultIcon
								});
							case as.Report:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.Unknown:
								return m.a.createElement("div", {
									className: Ls.a.unknownIcon
								});
							case as.UserDataRequest:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.UserProfile: {
								const n = Object(fs.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(Cs.a, {
									className: Ls.a.userIcon,
									iconUrl: n.url,
									isNSFW: e.model.isNSFW,
									omitResponsivePresenceWrapper: !0,
									userName: e.model.name
								})
							}
							case as.UserProfileName:
								return m.a.createElement("div", {
									className: Ls.a.defaultIcon
								});
							case as.ViewDraft:
								return m.a.createElement(Ns.a, {
									className: Ls.a.defaultIcon
								});
							case as.Geotagging:
							case as.Topic:
								return m.a.createElement(ks.a, {
									className: Ls.a.defaultIcon
								})
						}
					}(e, n, r), !this.props.isSubscriptionsPinned && (r ? m.a.createElement(us.a, {
						name: "caret_down",
						className: Ls.a.caretDown
					}) : m.a.createElement(ms.b, {
						className: Ls.a.caretDown
					}))), c && !this.props.isPinnedSubscriptionsMenuDisabled && (r ? m.a.createElement(us.a, {
						name: "side_menu",
						className: Ls.a.pin,
						onClick: d ? void 0 : this.props.onPinSubscriptions
					}) : m.a.createElement(ps.a, {
						className: Object(f.a)(Ls.a.pin, {
							[Ls.a.disabled]: d
						}),
						onClick: d ? void 0 : this.props.onPinSubscriptions
					})), c && m.a.createElement(zo, {
						canAutofocus: !0,
						className: Ls.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Yo = Qo(Object(p.b)(Jo, (e, t) => ({
					closeDropdown: () => e(Object(j.f)()),
					onLocationRefresh: (n, s) => e(Object(ds.f)(n, t.pageLayer, s)),
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
				}))(Object(T.c)(Zo))),
				Xo = n("./src/reddit/components/JumpToContent/index.tsx"),
				$o = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				er = n("./node_modules/history/esm/history.js"),
				tr = n("./node_modules/lodash/debounce.js"),
				nr = n.n(tr),
				sr = n("./node_modules/uuid/v4.js"),
				or = n.n(sr),
				rr = n("./src/lib/makeSearchKey/index.ts"),
				ar = n("./src/reddit/actions/post.ts"),
				ir = n("./src/reddit/actions/search.ts"),
				cr = n("./src/reddit/actions/search/trending.ts"),
				dr = n("./src/reddit/components/SearchDropdown/index.tsx"),
				lr = n("./src/reddit/constants/history.ts"),
				ur = n("./src/reddit/contexts/ApiContext.tsx"),
				mr = n("./src/lib/makeApiRequest/index.ts"),
				pr = n("./src/lib/omitHeaders/index.ts"),
				br = n("./src/reddit/constants/headers.ts");
			const hr = (e, t) => Object(mr.a)(Object(pr.a)(e, [br.a]), {
				endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
				method: v.eb.GET,
				data: {
					query: t
				}
			});
			var gr = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				fr = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const vr = e => {
				const t = [],
					n = {};
				return e.forEach(e => {
					const s = e.data,
						o = e.kind;
					o === v.Cb.Subreddit ? (t.push(s.name), n[s.name] = Object(fr.a)(s)) : o === v.Cb.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(gr.a)(s.subreddit, s.name))
				}), {
					data: n,
					order: t
				}
			};
			var xr = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Cr = n("./src/reddit/helpers/isArrayEqual.ts"),
				Or = n("./src/reddit/helpers/trackers/searchResults.ts"),
				yr = n("./src/reddit/icons/svgs/Search/index.tsx"),
				Er = n("./src/reddit/models/Search/index.ts"),
				Pr = n("./src/reddit/selectors/experiments/trending.ts"),
				jr = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Sr = e => Object(Ct.G)(e) || Wt.zd.Treatment1 === Object(jr.c)(e, {
				experimentEligibilitySelector: jr.a,
				experimentName: Wt.wd
			});
			var wr = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				_r = n("./src/reddit/selectors/searchResults.ts"),
				kr = n("./src/reddit/selectors/trending.ts"),
				Ir = n("./src/reddit/controls/Search/index.m.less"),
				Mr = n.n(Ir);
			const Nr = Object(Vt.t)({
					searchQuery: Vt.W,
					pageLayer: e => e
				}),
				Tr = (e, t, n, s) => e(e => ({
					...Object(Or.c)(e),
					source: "search",
					action: "click",
					noun: t,
					actionInfo: xt.actionInfo(e),
					search: {
						...xt.search(e, n, !0, s || void 0),
						structureType: xt.structureType(e, s),
						queryId: Object(Ro.c)(Ro.a.SearchResults)
					}
				})),
				Ar = Object(p.b)(() => Object(g.c)({
					currentPage: At.b,
					currentSubredditName: At.d,
					currentUser: Ct.i,
					dropdownIsOpen: _r.d,
					typeaheadIdsByQuery: _r.c,
					isInIcons2020: bs.a,
					isInTrendingExperiment: Pr.a,
					isInTypeaheadExperiment: Sr,
					isInUISimplificationI18NExperiment: wr.a,
					isLoggedIn: Ct.J,
					isSubredditSearchAllowed: (e, {
						pageLayer: t
					}) => Object(Vt.M)(t),
					multireddit: Vt.d,
					nightmode: Ct.V,
					routeName: At.p,
					subreddit: Vt.q,
					trendingItems: kr.a,
					typeaheadSuggestions: _r.j
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(cr.b)()),
					fireAdPixelsOfType: (t, n) => e(Object(ar.x)(t, n)),
					onChange: t => e(Object(ir.n)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(ir.n)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, n, s, o) => {
						e(Object(h.b)(Object(er.c)({
							pathname: t,
							search: n,
							state: {
								fromPage: s,
								[lr.a.SearchOriginPage]: o
							}
						})))
					},
					onToggleDropdown: () => e(Object(ir.j)()),
					onCloseDropdown: () => e(Object(ir.i)()),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(ir.m)(t))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onSearch: (s, o) => {
						s.preventDefault();
						const {
							currentUser: r = null
						} = e, a = Object(xr.a)(e.subreddit, e.multireddit, r, o, n.searchOptions, e.isSubredditSearchAllowed);
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
						Object(Ro.c)(Ro.a.SearchResults) || Object(Ro.d)(Ro.a.SearchResults);
						const e = n.searchOptions || Object(rr.c)({
							q: n.searchQuery
						});
						Tr(n.sendEvent, xt.OriginElement.SearchBar, e, n.pageLayer ? n.pageLayer : void 0)
					}
				}));
			class Rr extends m.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await hr(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = vr(e.body.data.children);
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
						this.props.onCloseDropdown()
					}, this.onRemoveRecentSearch = e => {
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(Dt.W)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(Dt.Eb)({
								...e,
								section: Er.c.recent
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
					}, this.onFetchTypeaheadSuggestions = nr()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery.trim()) {
							let t = {
								...Er.a
							};
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = or()()), t.section === Er.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === Er.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, xt.StructureType.Search, xt.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									n = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									s = !!this.props.subreddit && this.props.subreddit.isNSFW,
									o = Er.b.text;
								t = {
									id: or()(),
									searchQuery: this.state.searchQuery,
									type: o,
									section: Er.c.recent,
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
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(Or.s)(s, o))
					}, this.onSendSearchClickRecentEvent = (e, t, n) => {
						this.props.sendEvent(Object(Or.u)(e, t, n))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, n, s) => {
						this.props.sendEvent(Object(Or.w)(e, t, n, s))
					}, this.onSendDropdownViewEvent = (e, t, n, s) => {
						const o = {
							displayQuery: n,
							rawQuery: s || n,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Or.t)(e, o))
					}, this.onKeyDown = e => {
						if (e.key === Ao.b.Escape && this.close(), e.key === Ao.b.Tab && this.close(), e.key === Ao.b.ArrowDown) {
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
						if (e.key === Ao.b.ArrowUp) {
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
							const e = Object(Dt.H)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(xt.SearchDropdownNouns.Recent, xt.StructureType.Recent, e.searchQuery)
							}))
						}
						this.props.dropdownIsOpen || this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						if (e.preventDefault(), !this.state.searchQuery.trim()) return;
						this.onSearch(e);
						const t = this.props.searchOptions || Object(rr.c)({});
						t.q || (t.q = this.state.searchQuery), Tr(this.props.sendEvent, "full_search_button", t), this.close()
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
					const t = Object(Cr.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						n = Object(Cr.a)(e.trendingItems, this.props.trendingItems);
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
					return m.a.createElement("div", {
						className: Object(f.a)(Mr.a.relativeWrapper, Ls.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: dr.b,
						ref: this.setContainerRef
					}, m.a.createElement("label", {
						className: Mr.a.iconContainer,
						htmlFor: "header-search-bar"
					}, e.isInIcons2020 ? m.a.createElement(us.a, {
						name: "search"
					}) : m.a.createElement(yr.a, {
						className: Mr.a.icon
					})), m.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, m.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Mr.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: o.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), m.a.createElement(dr.c, {
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
			var Lr = Object(T.c)(Nr(Object(ur.b)(Ar(Rr)))),
				Fr = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Dr = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Ur = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Gr = n.n(Ur);
			var Br = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(f.a)(Gr.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Gr.a.HomeLink,
						href: U.a.redditUrl
					}, m.a.createElement(Fr.a, {
						className: Gr.a.Snoo
					}), m.a.createElement(Dr.a, {
						className: Gr.a.Wordmark,
						color: "inherit"
					})))
				},
				Hr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				qr = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Wr = n("./src/reddit/hooks/useTracking.ts"),
				Vr = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Kr = n.n(Vr),
				zr = m.a.memo((function(e) {
					const t = Object(Oo.a)(),
						n = Object(Wr.a)(),
						s = Object(p.d)(),
						r = Object(u.useCallback)(() => {
							n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [n]),
						a = Object(u.useCallback)(() => {
							n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [n]),
						i = Object(u.useCallback)(() => {
							s(Object(Zs.a)(Qs.c[Qs.b.Rpan])), n(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [s, n]),
						c = Object(p.e)(Ct.J),
						d = Object(p.e)(Gs.a),
						l = Object(qr.a)(),
						b = Object(qr.a)(),
						h = Object(qr.a)();
					return m.a.createElement("div", {
						className: Object(f.a)(Kr.a.container, e.className)
					}, m.a.createElement("div", {
						className: Kr.a.row
					}, m.a.createElement(cs.a, {
						className: Kr.a.icon,
						innerRef: l.target.ref,
						to: c ? Qs.c[Qs.b.Popular] : Qs.c[Qs.b.Home],
						onClick: r,
						onMouseEnter: l.show,
						onMouseLeave: l.hide
					}, t ? m.a.createElement(us.a, {
						name: "popular"
					}) : m.a.createElement(Ms.a, null)), m.a.createElement(Hr.a, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(cs.a, {
						className: Kr.a.icon,
						innerRef: b.target.ref,
						to: Qs.c[Qs.b.All],
						onClick: a,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, t ? m.a.createElement(us.a, {
						name: "all"
					}) : m.a.createElement(ys.a, null)), m.a.createElement(Hr.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(cs.a, {
						className: Kr.a.icon,
						innerRef: h.target.ref,
						to: Qs.c[Qs.b.Rpan],
						onClick: i,
						onMouseEnter: h.show,
						onMouseLeave: h.hide
					}, t ? m.a.createElement(us.a, {
						name: "video_live"
					}) : m.a.createElement(As.c, {
						className: Kr.a.rpanVideoIcon
					})), m.a.createElement(Hr.a, {
						arrowProps: h.arrowProps,
						popperProps: h.popperProps,
						visible: h.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					})))))
				})),
				Qr = n("./src/reddit/actions/login.ts"),
				Jr = n("./src/reddit/helpers/trackers/authControls.ts"),
				Zr = n("./node_modules/lodash/isEmpty.js"),
				Yr = n.n(Zr),
				Xr = n("./src/lib/combineRefs/index.tsx"),
				$r = n("./src/lib/matchRoute/index.ts"),
				ea = n("./src/chat/helpers/dom.ts"),
				ta = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				na = n("./src/reddit/actions/changeUsername.ts"),
				sa = n("./src/reddit/actions/chat/toggle.ts"),
				oa = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				ra = n("./src/reddit/actions/postCreation/general.ts"),
				aa = n("./src/reddit/actions/preferences.ts"),
				ia = n("./src/reddit/actions/tooltip.ts"),
				ca = n("./src/reddit/actions/users.ts"),
				da = n("./src/reddit/components/BlockNavigation/index.tsx"),
				la = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				ua = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var ma = Object(Se.a)({
					getComponent: () => Object(Qe.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				pa = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ba = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				ha = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				ga = n.n(ha);
			class fa extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(ba.e)(ba.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(ba.c)(ba.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(ba.e)(ba.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					fa.shouldSendViewEvent && (fa.shouldSendViewEvent = !1, this.props.sendEvent(Object(ba.g)(ba.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: ga.a.container
					}, m.a.createElement("div", {
						className: ga.a.topLine
					}), m.a.createElement("button", {
						className: ga.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Me.a, {
						className: ga.a.closeIcon
					})), m.a.createElement("h5", {
						className: ga.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: ga.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: ga.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: ga.a.buttonWrapper
					}, m.a.createElement(Ie.l, {
						className: ga.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ie.i, {
						className: Object(f.a)(ga.a.commonBtn, ga.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			fa.shouldSendViewEvent = !0;
			const va = Object(pa.a)(fa, [No.a.Click, No.a.Keydown, No.a.Resize]);
			var xa = Object(T.c)(va),
				Ca = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Oa = n.n(Ca);
			const ya = Object(g.c)({
				isLoggedIn: Ct.J
			});
			class Ea extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(N.a, {
						className: Object(f.a)(Oa.a.IFrame, {
							[Oa.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: A.c.GoogleOneTap
					})
				}
			}
			var Pa = Object(p.b)(ya)(Ea),
				ja = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				Sa = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				wa = n.n(Sa);

			function _a() {
				return (_a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ka = M.a.button("Button", wa.a),
				Ia = M.a.div("Container", wa.a);

			function Ma(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(ka, _a({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Ia, {
					className: Object(f.a)({
						[wa.a.isOpen]: n
					})
				}, t))
			}
			var Na = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Ta = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				Aa = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				Ra = n.n(Aa);
			var La = e => {
					const t = Object(Oo.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Na.a, {
						isActive: !!e.hasUnreadMessages,
						unreadCount: e.badgeCount
					}), t ? m.a.createElement(us.a, {
						name: "chat",
						className: Object(f.a)(Ra.a.icon2020, {
							[Ra.a.isActive]: !!e.hasUnreadMessages
						}),
						isFilled: !!e.hasUnreadMessages
					}) : m.a.createElement(Ta.a, {
						className: Object(f.a)(Ra.a.chatIcon, {
							[Ra.a.isActive]: !!e.hasUnreadMessages
						})
					}))
				},
				Fa = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Da = n.n(Fa);
			const {
				fbt: Ua
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ga = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: Da.a.container
				}, m.a.createElement("p", {
					className: Da.a.title
				}, Ua._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: Da.a.subtitle
				}, Ua._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: Da.a.description
				}, Ua._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Ie.l, {
					className: Da.a.dismissBtn,
					onClick: t
				}, Ua._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Ba = e => {
				const t = Object(Oo.a)();
				return m.a.createElement(m.a.Fragment, null, m.a.createElement(Na.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), t ? m.a.createElement(us.a, {
					name: "message",
					isFilled: !!e.unreadCount,
					className: Object(f.a)(Ra.a.icon2020, {
						[Ra.a.isActive]: !!e.unreadCount
					})
				}) : m.a.createElement(js.a, {
					className: Object(f.a)(Ra.a.envelopeIcon, {
						[Ra.a.isUnread]: !!e.unreadCount
					})
				}))
			};
			var Ha = e => {
					const t = Object(Oo.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Na.a, {
						isActive: !!e.unreadCount,
						unreadCount: e.unreadCount
					}), t ? m.a.createElement(us.a, {
						name: "notification",
						className: Ra.a.icon2020
					}) : m.a.createElement(Is.a, {
						className: Ra.a.notificationInboxIcon
					}))
				},
				qa = n("./src/lib/prettyPrintNumber/index.ts"),
				Wa = n("./src/reddit/actions/alpha.ts"),
				Va = n("./src/reddit/actions/modMode.ts"),
				Ka = n("./src/reddit/actions/profile/index.ts"),
				za = n("./src/reddit/constants/elementClassNames.ts"),
				Qa = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ja = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Za = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Ya = n("./src/reddit/icons/svgs/KarmaGray/index.tsx"),
				Xa = n("./src/reddit/icons/svgs/Redditor/index.tsx"),
				$a = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				ei = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				ti = n("./src/reddit/selectors/modModeEnabled.ts"),
				ni = n("./src/reddit/selectors/tooltip.ts"),
				si = n("./src/higherOrderComponents/asTooltip.tsx"),
				oi = n("./src/reddit/controls/Dropdown/index.tsx"),
				ri = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				ai = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				ii = n("./src/reddit/helpers/trackers/modTools.ts"),
				ci = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const di = e => ({
				screen: xt.screen(e),
				profile: xt.profile(e),
				subreddit: xt.subreddit(e)
			});
			var li = n("./src/reddit/icons/svgs/Help/index.tsx"),
				ui = n("./src/reddit/icons/svgs/Logout/index.tsx"),
				mi = n("./src/reddit/icons/svgs/ModMode/index.tsx"),
				pi = n("./src/reddit/icons/svgs/MyProfile/index.tsx"),
				bi = n("./src/reddit/icons/svgs/Night/index.tsx"),
				hi = n("./src/reddit/icons/svgs/OutboundLink/index.tsx");
			var gi = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18 9C18 13.9706 13.9706 18 9 18C4.02943 18 0 13.9706 0 9C0 4.02942 4.02943 0 9 0C11.2449 0 13.2978 0.821838 14.8742 2.18115L8.51613 14.5L8 15.5H9.12534H10L16.1658 3.55383C17.3167 5.06586 18 6.95312 18 9ZM5 5.20428V13.2043H7.5V8.20435C7.92914 7.82715 8.3036 7.57568 8.66219 7.4303C8.79153 7.37787 8.91881 7.33923 9.04584 7.31348C9.13606 7.29523 9.22617 7.28339 9.3168 7.27777C9.82347 7.2464 10.3466 7.40784 11 7.70428L11.5 5.20428C11.2536 5.14636 11.0239 5.09973 10.8075 5.0658C10.3162 4.98865 9.89362 4.9765 9.5 5.04449L9.49207 5.0459C9.3017 5.07935 9.11803 5.13153 8.93658 5.20428C8.82437 5.24927 8.71298 5.30206 8.60139 5.3631C8.24785 5.55652 7.89206 5.83264 7.5 6.20428V5.20428H5Z"
				})),
				fi = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				vi = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				xi = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Ci = n("./src/reddit/actions/snoovatar.ts"),
				Oi = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				yi = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ei = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				Pi = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				ji = n("./src/reddit/selectors/avatarMarketing.ts"),
				Si = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts"),
				wi = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				_i = n.n(wi);
			const ki = (e, t, n) => s => m.a.createElement("div", {
				className: `${_i.a.avatarLinkBody} ${s.className}`
			}, e, t && m.a.createElement("div", {
				className: _i.a.marketingBadge
			}, m.a.createElement(Oi.a, {
				className: _i.a.marketingAsset,
				headshot: t
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !n && m.a.createElement(m.a.Fragment, null, m.a.createElement(Pi.a, {
				className: Object(f.a)(_i.a.sparkle, _i.a.sparkle1)
			}), m.a.createElement(Pi.a, {
				className: Object(f.a)(_i.a.sparkle, _i.a.sparkle2)
			}), m.a.createElement(Pi.a, {
				className: Object(f.a)(_i.a.sparkle, _i.a.sparkle3)
			}), m.a.createElement(Pi.a, {
				className: Object(f.a)(_i.a.sparkle, _i.a.sparkle4)
			}))));
			var Ii = () => {
					var e;
					const t = Object(Oo.a)(),
						n = Object(p.d)(),
						s = Object(Wr.a)(),
						r = Object(Vt.Z)(),
						a = Object(p.e)(e => e.user.account),
						i = Object(p.e)(gs.c),
						c = Object(p.e)(Si.a),
						d = Object(p.e)(ji.b),
						l = Object(p.e)(ji.a);
					if ((null === (e = null == r ? void 0 : r.meta) || void 0 === e ? void 0 : e.name) === v.Gb.AVATAR) return null;
					!d && c && n(Object(xi.a)()), l && s(yi.c);
					const u = Object(ai.c)(t ? Bi("avatar_style") : Ei.a, ki(o.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}), l, i)),
						b = Object(ai.c)(t ? Bi("add") : to.a, ki(o.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}), l, i)),
						h = a && a.snoovatarFullBodyAsset ? u : b;
					return m.a.createElement(h, {
						onClick: () => n(Object(Ci.b)("nav"))
					})
				},
				Mi = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Ni = n.n(Mi);

			function Ti() {
				return (Ti = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ai = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				Ri = M.a.wrapped(oi.a, "Dropdown", Ni.a),
				Li = Object(si.a)(Ri),
				Fi = e => t => m.a.createElement(us.a, Ti({
					name: e
				}, t)),
				Di = e => m.a.createElement(ai.a, {
					className: Object(f.a)(Ni.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: Ni.a.buttonText
				}, e.displayText), m.a.createElement(ri.a, {
					className: Ni.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var Ui = Object(T.c)(e => {
				const {
					logoutUser: t,
					dispatchOpenLoginModal: n,
					isModModeEnabled: s,
					isPresenceToggleEnabled: r,
					nightmode: a,
					requestAwardKarma: i,
					showPresence: c,
					toggleModMode: d,
					user: l,
					isNewSrCreationEntrypointEnabled: p,
					isInSrCreationEntrypointCopyExperiment: b,
					isInSrCreationEntrypointBehaviorExperiment: h,
					shouldShowCreateCommunityItem: g,
					openCommunityCreationModal: f
				} = e, v = Object(Oo.a)(), x = l && l.id;
				Object(u.useEffect)(() => {
					i()
				}, [x]);
				const C = Object(ai.c)(v ? Fi("settings") : fi.a, o.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					O = Object(ai.b)(v ? Fi("help") : li.a, o.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					y = Object(ai.b)(v ? Fi("external_link") : hi.a, o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					E = Object(ai.c)(v ? Fi("logout") : ui.a, o.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					j = Object(ai.c)(v ? Fi("logout") : ui.a, o.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					S = Object(ai.c)(vi.a, o.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					w = (e => {
						const t = e && e.coins || 0;
						return o.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [o.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(l),
					_ = Object(ai.c)(v ? Fi("coins") : Ps.a, o.fbt._("Reddit Coins", null, {
						hk: "3jj6Cb"
					}), {
						meta: w
					}),
					k = Object(ai.c)(v ? Fi("premium") : Ts.a, o.fbt._("Reddit Premium", null, {
						hk: "3FNqVS"
					})),
					I = Object(ai.c)(gi, Object(Js.a)(b, o.fbt._("Create a Community", null, {
						hk: "3QGru4"
					})));
				return m.a.createElement(Li, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, l && r && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: Ni.a.sectionHeader,
					role: "heading"
				}, o.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(Di, {
					className: Ni.a.presenceToggle,
					displayText: c ? o.fbt._("On", null, {
						hk: "3aW5MW"
					}) : o.fbt._("Off", null, {
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
							...di(t)
						}))(!c)), e.toggleShowPresence(!c)
					}
				})), l && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: Ni.a.sectionHeader,
					role: "heading"
				}, o.fbt._("My Stuff", null, {
					hk: "47vhMb"
				})), (e => {
					const t = o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(ai.c)(v ? Fi("profile") : pi.a, t);
					return m.a.createElement(n, {
						href: e.url
					})
				})(l), m.a.createElement(Ii, null), m.a.createElement(C, {
					href: "/settings"
				})), m.a.createElement("h3", {
					className: Ni.a.sectionHeader,
					role: "heading"
				}, o.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), l && l.isMod && m.a.createElement(Di, {
					displayText: o.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: s,
					onClick: () => {
						e.sendEvent(Object(ii.i)(!s)), d()
					}
				}, v ? m.a.createElement(us.a, {
					name: "mod_mode",
					className: Ni.a.modModeIcon
				}) : m.a.createElement(mi.a, {
					className: Ni.a.modModeIcon
				})), m.a.createElement(Di, {
					displayText: o.fbt._("Night Mode", null, {
						hk: "2lyxcc"
					}),
					isEnabled: a,
					onClick: () => {
						e.sendEvent((e => t => ({
							source: "user_dropdown",
							action: "click",
							noun: e ? "night_mode_off" : "night_mode_on",
							...di(t)
						}))(a)), e.toggleNightmode(!a)
					}
				}, v ? m.a.createElement(us.a, {
					name: "night",
					className: Ni.a.nightIcon
				}) : m.a.createElement(bi.a, {
					className: Ni.a.nightIcon
				})), m.a.createElement("h3", {
					className: Ni.a.sectionHeader,
					role: "heading"
				}, o.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), g && p && m.a.createElement(I, {
					className: Ni.a.entrypointLink,
					onClick: () => {
						h === Wt.od.Tabs ? window.open("/subreddits/create", "_blank") : f(), e.sendEvent(Object(ci.a)())
					}
				}), m.a.createElement(u.Fragment, null, m.a.createElement(_, {
					href: "/coins",
					onClick: () => {
						Object(Ro.d)(Ro.a.GoldPayment, !0), e.sendEvent((() => e => ({
							source: "user_dropdown",
							action: "click",
							noun: "coins",
							correlationId: Object(Ro.c)(Ro.a.GoldPayment),
							...di(e)
						}))())
					}
				}), m.a.createElement(k, {
					href: "/premium",
					onClick: () => {
						Object(Ro.d)(Ro.a.GoldPayment, !0), e.sendEvent((() => e => ({
							source: "user_dropdown",
							action: "click",
							noun: "premium",
							correlationId: Object(Ro.c)(Ro.a.GoldPayment),
							...di(e)
						}))())
					}
				})), m.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}), l && m.a.createElement(y, {
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
				}), !Ai && l && m.a.createElement(S, {
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
				}), m.a.createElement("div", {
					className: Ni.a.divider
				}), l ? m.a.createElement(j, {
					href: "#",
					onClick: e => {
						t(), e.preventDefault()
					}
				}) : m.a.createElement(E, {
					href: "#",
					onClick: t => {
						Object(P.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(Jr.b)()))
					}
				}))
			});

			function Gi() {
				return (Gi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Bi = e => t => m.a.createElement(us.a, Gi({
					name: e
				}, t)),
				Hi = Object(p.b)(() => Object(g.c)({
					isModModeEnabled: ti.a,
					isOpen: Object(ni.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: ei.b,
					isNewSrCreationEntrypointEnabled: $s.b,
					isInSrCreationEntrypointBehaviorExperiment: $s.c,
					isInSrCreationEntrypointCopyExperiment: $s.d,
					shouldShowCreateCommunityItem: Ct.gb,
					nightmode: Ct.V,
					showPresence: Ct.hb,
					url: At.q
				}), (e, t) => ({
					toggleNightmode: t => e(Object(aa.w)(t)),
					toggleShowPresence: t => e(Object(aa.F)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Wa.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Ee.a.get("rseor3") && Ee.a.remove("rseor3", {
							domain: U.a.cookieDomain
						}), e(Object(Wa.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						t.user && !t.user.totalKarma && e(Object(Ka.f)(Object(gt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(Qr.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Qa.a)())), e(Object(ca.p)())
					},
					toggleModMode: () => e(Object(Va.b)()),
					openCommunityCreationModal: () => e(Object(Zs.a)("/subreddits/create"))
				}));
			var qi = Object(Vt.t)({
					pageLayer: e => e
				})(Hi(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: s,
						user: r
					} = e, a = Object(Oo.a)(), i = r && r.id;
					Object(u.useEffect)(() => {
						n()
					}, [i]);
					return m.a.createElement("div", {
						className: Object(f.a)(Ni.a.container, za.e)
					}, m.a.createElement($a.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(f.a)(e.className, Ni.a.inlineButton, {
							[Ni.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: Ni.a.accountDisplayText
					}, (e => e ? m.a.createElement("span", {
						className: Object(f.a)(Ni.a.accountWrapper, Ni.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && m.a.createElement(Os.a, {
						className: Ni.a.imgIcon,
						wrapperClassName: Ni.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && s
					}), m.a.createElement("span", {
						className: Ni.a.accountDetails
					}, m.a.createElement("span", {
						className: Ni.a.username
					}, e.displayText, e.isGold && m.a.createElement(Za.a, {
						className: Ni.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: a
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ni.a.accountKarma
					}, a ? m.a.createElement(us.a, {
						name: "karma",
						isFilled: !0,
						className: Ni.a.karmaIcon
					}) : m.a.createElement(Ya.a, null), m.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							n = Object(qa.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && m.a.createElement("span", {
						className: Ni.a.accountCoins
					}, m.a.createElement(Ja.a, {
						className: Ni.a.coinFontIcon,
						isFilled: a
					}), m.a.createElement("span", null, (e => Object(qa.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(e)))))) : m.a.createElement("span", {
						className: Object(f.a)(Ni.a.accountWrapper, Ni.a.isLoggedOut)
					}, m.a.createElement(Xa.a, {
						className: Ni.a.myProfileIcon
					})))(e.user), a ? m.a.createElement(us.a, {
						name: "caret_down"
					}) : m.a.createElement(ms.b, {
						className: Ni.a.dropdownTriangle
					})), m.a.createElement($o.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(Ui, e))
				})),
				Wi = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Vi = n.n(Wi);

			function Ki() {
				return (Ki = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var zi = m.a.memo((function({
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
					}, [e]), e ? m.a.createElement("div", Ki({
						id: "INBOX--TOOLTIP",
						className: Object(f.a)(Vi.a.tooltip, {
							[Vi.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				Qi = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Ji = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Zi = n("./src/reddit/components/Settings/modalIds.ts"),
				Yi = n("./src/reddit/helpers/trackers/inbox.ts"),
				Xi = n("./src/reddit/helpers/trackers/navigation.ts"),
				$i = n("./node_modules/icepick/icepick.js"),
				ec = n("./src/reddit/hooks/useTooltip.ts");
			const tc = Object($i.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var nc = n("./src/reddit/hooks/useOnClickOutside.ts"),
				sc = n("./src/reddit/routes/index.ts"),
				oc = n("./src/reddit/selectors/appBadges.ts");
			var rc = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				ac = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				ic = n("./src/reddit/selectors/sso.ts");
			const cc = "change-username-tooltip-id",
				dc = "email-verification-tooltip-id",
				lc = m.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(Oo.a)(),
						s = Object(qr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ra.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement(Ma, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Ji.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, n ? m.a.createElement(us.a, {
						className: Object(f.a)(Ra.a.icon2020, {
							[Ra.a.isActive]: t.isModerateIconLit
						}),
						isFilled: t.isModerateIconLit,
						name: "mod"
					}) : m.a.createElement(_s.a, {
						className: Object(f.a)(Ra.a.moderateIcon, {
							[Ra.a.isLit]: t.isModerateIconLit
						})
					})), m.a.createElement(Hr.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Ji.b, {
						className: Ra.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName,
						showLegacyModmailIcon: t.showLegacyModmailIcon
					}))
				})),
				uc = m.a.memo((function(e) {
					const t = Object(qr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ra.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: Ra.a.link,
						href: `${U.a.redditUrl}/chat`,
						onClick: Object(ea.a)(e.onClickChat)
					}, m.a.createElement(La, {
						badgeCount: e.badgeCount,
						hasUnreadMessages: e.hasUnreadMessages
					}))), m.a.createElement(Hr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				mc = m.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(qr.a)();
					return m.a.createElement("span", {
						className: Ra.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("a", {
						className: Ra.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, m.a.createElement(Ba, {
						unreadCount: t && t.inboxCount || 0
					})), m.a.createElement(Hr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				pc = m.a.memo((function(e) {
					const t = Object(qr.a)(),
						n = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(ec.a)(e);
								return Object($i.updateIn)(t, ["modifiers"], e => Object($i.push)(e, tc))
							}, [e]);
							return Object(ec.b)(t)
						}(),
						s = Object(u.useCallback)(() => {
							n.hide(), t.hide()
						}, [n, t]);
					Object(nc.a)("INBOX--TOOLTIP", s);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ra.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: Object(Xr.a)(t.target.ref, n.target.ref)
					}, m.a.createElement(Ma, {
						"aria-expanded": n.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Ra.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), n.visible ? n.hide() : n.show(), e.sendNavClickInbox()
						},
						isOpen: n.visible
					}, m.a.createElement(Ha, {
						unreadCount: e.unreadCount
					})), !n.visible && m.a.createElement(Hr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(zi, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement(Qi.a, {
						isOpen: n.visible,
						hideTooltip: s
					}))))
				})),
				bc = m.a.memo((function(e) {
					const t = Object(Oo.a)(),
						n = Object(qr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ra.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("button", {
						className: Ra.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, t ? m.a.createElement(us.a, {
						className: Ra.a.icon2020,
						name: "add"
					}) : m.a.createElement(Ns.a, {
						className: Ra.a.postIcon
					}))), m.a.createElement(Hr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				hc = Object(Vt.t)({
					pageLayer: e => e
				}),
				gc = Object(g.c)({
					activeDropdownId: ni.a,
					appBadges: oc.b,
					chatDirectMessagesCount: oc.e,
					email: Ct.l,
					hasUnreadChatMessages: oc.f,
					inboxBadgeCount: oc.g,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: rc.c,
					isInboxAppBadgingGqlEnabled: ac.a,
					isInboxRedesignActive: Xs.b,
					isModerator: vt.i,
					isNameEditable: Ct.L,
					isResponsiveSettingsEnabled: zt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(Vt.K)(t) && !!Object(Ct.l)(e) && !Object(Ct.z)(e) && Object(Ct.J)(e) && !Object(Ct.H)(e),
					shouldShowChangeUsernameModals: ic.c,
					shouldShowLegacyModmailIcon: Bs.o,
					unreadNotifications: Ct.kb
				}),
				fc = Object(p.b)(gc, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(na.d)()),
					closeEmailVerificationTooltip: () => e(Object(oa.b)()),
					showEmailVerficiationTooltip: () => e(Object(oa.b)()),
					fetchAppBadges: () => e(Object(ta.c)()),
					onChatClick: () => e(Object(sa.f)()),
					onDismissCustomizeFlyout: () => e(Object(aa.s)()),
					onOpenModerationDropdown: () => {
						e(Object(ia.h)({
							tooltipId: Ji.a
						})), e(Object(To.q)())
					},
					onOpenUserDropdown: () => e(Object(ia.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(je.h)(Zi.b))
					},
					openKeepUsernameModal: () => {
						e(Object(je.h)(Zi.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(oa.b)()), e(Object(je.i)(Zi.a))
					},
					resendEmail: () => e(Object(ca.v)(ba.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ra.n(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(na.f)(n))
					}
				}));
			class vc extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Yi.q)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Xi.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object($r.a)(e.pathname, sc.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== v.Gb.POST_CREATION && n !== v.Gb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), this.props.isInboxAppBadgingGqlEnabled && Yr()(this.props.appBadges) && this.props.fetchAppBadges()
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
					} = this.state, M = !(!_ || !_.hasUnreadModmail && !_.hasUnreadOldModmail), N = k && Object(gt.e)(k) || "", T = Object(f.a)({
						[Ra.a["m-responsive"]]: v
					});
					return m.a.createElement(bt.a, {
						id: dc,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(bt.a, {
						className: Ra.a.headerLinks,
						id: cc
					}, h && m.a.createElement(lc, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === Ji.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						showLegacyModmailIcon: !!S,
						unreadNotifications: _
					}), k && m.a.createElement(u.Fragment, null, m.a.createElement(uc, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadMessages: a
					}), b ? m.a.createElement(pc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i
					}) : m.a.createElement(mc, {
						onClickMail: this.onClickMail,
						unreadNotifications: _
					}), m.a.createElement(bc, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement("span", {
						className: Ra.a.iconWrapper
					}, m.a.createElement(ja.a, null)))), m.a.createElement(qi, {
						className: Ra.a.headerUserDropdown,
						googleOneTapIFrame: I,
						onClick: C,
						user: k,
						sendEventWithName: this.sendEventWithName
					}), p && m.a.createElement("div", {
						className: Ra.a.loggedInGoogleOneTap
					}, m.a.createElement(Pa, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && m.a.createElement(Ga, {
						onCloseFlyout: x
					}), m.a.createElement(xa, {
						closeTooltip: o,
						email: r,
						isOpen: P && l,
						resendEmail: E,
						toggleChangeEmailModal: w,
						tooltipId: dc
					}), m.a.createElement(ma, {
						email: r,
						shouldOpenTooltip: P
					}), g && !v && m.a.createElement(u.Fragment, null, m.a.createElement(ua.a, {
						closeTooltip: s,
						isOpen: c && !j,
						openChangeUsernameModal: O,
						openKeepUsernameModal: y,
						tooltipId: cc,
						username: N
					}), j && m.a.createElement(la.a, {
						isResponsiveSettingsEnabled: v,
						overlayClassName: T,
						username: N,
						withOverlay: !0
					}), m.a.createElement(da.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var xc = Object(T.c)(hc(fc(vc))),
				Cc = n("./src/reddit/selectors/meta.ts"),
				Oc = n("./src/reddit/components/Header/User/index.m.less"),
				yc = n.n(Oc);
			const {
				fbt: Ec
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pc = Object(g.c)({
				account: e => e.user.account,
				origin: Cc.j
			}), jc = m.a.memo(e => m.a.createElement("div", {
				className: Object(f.a)(e.className, yc.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					n = U.a.accountManagerOrigin,
					s = t ? t.url : "/",
					o = t && t.meta && t.meta.name === v.Gb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + s);
				return m.a.createElement("div", {
					className: yc.a.loggedOutRow
				}, m.a.createElement(Ie.m, {
					redditStyle: !0,
					className: Object(f.a)(yc.a.login, yc.a.button),
					href: `${n}/login/?dest=${o}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(Jr.a)("nav")))
					}
				}, Ec._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ie.j, {
					redditStyle: !0,
					className: Object(f.a)(yc.a.separator, yc.a.register, yc.a.button),
					href: `${n}/register/?dest=${o}`,
					onClick: t => {
						Object(P.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(Jr.c)("nav")))
					}
				}, Ec._("Sign Up", null, {
					hk: "2WZPuJ"
				})))
			}(e), m.a.createElement(xc, {
				className: Object(f.a)({
					[yc.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var Sc = Object(Vt.t)()(Object(p.b)(Pc, e => ({
					onOpenLoginModal: () => {
						e(Object(je.k)({
							actionSource: je.a.HeaderLogin
						})), e(Object(Qr.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(je.k)({
							actionSource: je.a.HeaderSignup
						})), e(Object(Qr.j)())
					}
				}))(Object(T.c)(jc))),
				wc = n("./src/reddit/components/Header/index.m.less"),
				_c = n.n(wc);

			function kc() {
				return (kc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ic = M.a.header("HeaderDynamicStyles", _c.a),
				Mc = Object(g.c)({
					isLoggedIn: Ct.J,
					isNightMode: Ct.V,
					isResponsiveSettingsEnabled: zt.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Nc = Object(Vt.t)({
					categoryName: Vt.b,
					pageLayer: e => e
				}),
				Tc = e => m.a.createElement("div", {
					className: _c.a.left
				}, m.a.createElement($o.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), m.a.createElement(Xo.b, null), m.a.createElement(cs.a, {
					"aria-label": o.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: _c.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, m.a.createElement(Fr.a, {
					className: _c.a.snoo
				}), m.a.createElement(Dr.a, {
					className: _c.a.wordmark
				})), e.children),
				Ac = e => m.a.createElement("div", {
					className: _c.a.right
				}, e.children, m.a.createElement(Sc, null)),
				Rc = e => m.a.createElement("div", {
					className: _c.a.layout
				}, m.a.createElement(Tc, kc({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement(Yo, null), m.a.createElement(Lr, {
					className: _c.a.search
				})), m.a.createElement(Ac, null, m.a.createElement(zr, {
					className: _c.a.quickLinks
				}))),
				Lc = e => m.a.createElement("div", {
					className: _c.a.layout
				}, m.a.createElement(Tc, kc({}, e, {
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement("div", {
					className: _c.a.searchContainer
				}, m.a.createElement(Lr, {
					className: _c.a.search
				}))), m.a.createElement(Ac, null));
			var Fc = Nc(Object(p.b)(Mc, e => ({
					onReloadFrontpage: () => e(Object(Lo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? Rc : Lc, m.a.createElement(Ic, {
						"data-redditstyle": !0,
						className: Object(f.a)(_c.a.container, e.className, {
							[_c.a.bladeIsOpen]: e.isBladeOpen
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && m.a.createElement(Br, {
						className: _c.a.MwebResponsiveHeader
					}))
				}))),
				Dc = n("./src/reddit/components/LightboxHeader/index.tsx"),
				Uc = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Gc = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Bc = n.n(Gc);
			const {
				fbt: Hc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const qc = Object(p.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(j.j)())
			}));
			var Wc = M.a.wrapped(qc((function(e) {
					const t = Object(Oo.a)();
					return m.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, m.a.createElement("div", {
						className: Bc.a.title
					}, m.a.createElement(vo, {
						className: Bc.a.listHeader
					}, Hc._("My Communities", null, {
						hk: "1CmPOc"
					})), m.a.createElement("div", {
						className: Bc.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, t ? m.a.createElement(us.a, {
						name: "close"
					}) : m.a.createElement(Me.a, {
						className: Bc.a.icon
					}))), m.a.createElement(Ko, null))
				})), "Component", Bc.a),
				Vc = n("./src/reddit/components/Survey/index.tsx"),
				Kc = n("./src/reddit/components/ThemeProvider/index.tsx"),
				zc = n("./src/reddit/actions/toaster.ts");
			const Qc = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Jc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "primary"
					}
				}),
				Zc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "secondary"
					}
				});
			var Yc = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Xc = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				$c = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				ed = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				td = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				nd = n("./src/reddit/models/Toast/index.ts"),
				sd = n("./src/reddit/selectors/structuredStyles.ts"),
				od = n("./src/reddit/constants/colors.ts"),
				rd = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				ad = n.n(rd);

			function id() {
				return (id = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cd = e => {
				const t = od.b;
				switch (e.kind) {
					case nd.b.Error:
					case nd.b.AuthError:
					case nd.b.SuccessEndBroadcast:
						return t.warning;
					case nd.b.SuccessCommunity:
						return t.op;
					case nd.b.SuccessCommunityGreen:
					case nd.b.SuccessMod:
					case nd.b.SuccessUnlockComment:
						return t.approved;
					case nd.b.SuccessLockComment:
						return t.reported;
					case nd.b.EuCookiePolicy:
					case nd.b.UappBanner:
					case nd.b.Undo:
					default:
						return t.op
				}
			};
			class dd extends m.a.Component {
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
			const ld = M.a.wrapped(dd, "PlainBread", ad.a);
			var ud = e => m.a.createElement(ld, id({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": cd(e)
					}
				})),
				md = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				pd = n.n(md);
			const bd = M.a.span("Text", pd.a);
			var hd = n("./src/reddit/components/Toaster/index.m.less"),
				gd = n.n(hd);
			const {
				fbt: fd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vd = M.a.wrapped($c.a, "AuthErrorToastIcon", gd.a), xd = M.a.wrapped(Ie.i, "AuthErrorToastPrimaryButton", gd.a);
			class Cd extends m.a.Component {
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
					}, m.a.createElement(ud, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(vd, null), m.a.createElement(bd, null, fd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(xd, {
						type: "submit"
					}, fd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Od = Cd,
				yd = n("./src/lib/cookieConsent/index.ts"),
				Ed = n("./src/reddit/controls/Link/index.tsx"),
				Pd = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				jd = n.n(Pd);
			const {
				fbt: Sd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wd = M.a.div("Icon", jd.a), _d = () => m.a.createElement(wd, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), kd = M.a.wrapped(Ie.i, "PrimaryButton", jd.a), Id = M.a.wrapped(ud, "Bread", jd.a);
			class Md extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(yd.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(yd.b)({
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
					return m.a.createElement("section", null, m.a.createElement(Id, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(_d, null), m.a.createElement("section", {
						className: jd.a.EuCookiePolicyBody
					}, m.a.createElement(bd, null, Sd._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Ed.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, Sd._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: jd.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(kd, {
						type: "submit"
					}, Sd._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(kd, {
						type: "submit"
					}, Sd._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var Nd, Td = Md;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Nd || (Nd = {}));
			var Ad = n("./src/reddit/controls/Typography/index.tsx"),
				Rd = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Ld = n.n(Rd);

			function Fd() {
				return (Fd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Dd = M.a.div("Container", Ld.a),
				Ud = M.a.img("SideImage", Ld.a),
				Gd = M.a.div("Main", Ld.a),
				Bd = M.a.div("SubTitle", Ld.a),
				Hd = Ad.a,
				qd = M.a.wrapped(Ie.j, "PrimaryLinkButton", Ld.a),
				Wd = M.a.wrapped(Me.a, "CloseIcon", Ld.a);
			class Vd extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Jc(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Qc(this.props.name))
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
					return m.a.createElement(Dd, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(Wd, {
						onClick: this.props.onClose
					}), m.a.createElement(Ud, {
						srcSet: n
					}), m.a.createElement(Gd, null, m.a.createElement(Bd, null, r), m.a.createElement(Ad.b, null, a), m.a.createElement(Hd, null, e), m.a.createElement(qd, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Kd = Object(p.b)(null, e => ({
					onSignup: () => e(Object(Qr.j)())
				}))(Object(T.c)(Vd)),
				zd = `${Qd("subscribe-cap.png")} 1x,\n  ${Qd("subscribe-cap@2x.png")} 2x,`;

			function Qd(e) {
				return `${U.a.assetPath}/img/banner/${e}`
			}
			const Jd = 3;
			var Zd = n("./src/lib/permanentCookieOptions.ts");
			const Yd = e => `${e}:1527210000`;
			var Xd = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				$d = n.n(Xd);
			const {
				fbt: el
			} = n("./node_modules/fbt/lib/FbtPublic.js"), tl = M.a.div("Icon", $d.a), nl = () => m.a.createElement(tl, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), sl = M.a.wrapped(Ie.i, "PrimaryButton", $d.a), ol = M.a.wrapped(ud, "Bread", $d.a);
			class rl extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ee.a.set(Lt.j, Yd(Jd), Object(Zd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(ol, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(nl, null), m.a.createElement(bd, null, el._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [el._param("=User Agreement", m.a.createElement(Ed.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, el._("User Agreement", null, {
						hk: "XS57W"
					}))), el._param("=Privacy Policy", m.a.createElement(Ed.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, el._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(sl, {
						type: "submit"
					}, el._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var al = rl;

			function il() {
				return (il = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cl = [],
				dl = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				ll = {
					opacity: .5,
					x: .5,
					y: 50
				},
				ul = {
					opacity: Object(I.spring)(0),
					x: Object(I.spring)(.6),
					y: Object(I.spring)(80, dl)
				},
				ml = M.a.wrapped($c.a, "SnooFacepalm", gd.a),
				pl = M.a.wrapped(ed.a, "SnooHappy", gd.a),
				bl = M.a.wrapped(xs.b, "SubredditIcon", gd.a),
				hl = M.a.img("CustomIcon", gd.a),
				gl = M.a.div("Container", gd.a),
				fl = M.a.wrapped(Me.a, "Close", gd.a),
				vl = M.a.wrapped(Yc.a, "LockIcon", gd.a),
				xl = M.a.wrapped(td.a, "UnlockIcon", gd.a),
				Cl = M.a.wrapped(Xc.a, "RemoveIcon", gd.a),
				Ol = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(fl, il({
					className: "CloseIcon"
				}, e))),
				yl = M.a.wrapped(ud, "Bread", gd.a),
				El = Object(g.c)({
					subredditIcon: sd.b,
					toastSlices: e => e.toaster
				}),
				Pl = Object(p.b)(El, e => ({
					dismissToast: t => () => e(Object(zc.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(zc.g)(n))
					}
				}));
			class jl extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Sl(e, this.props.toastSlices), this.getWillEnterStyles = () => ll, this.getWillLeaveStyles = () => ul
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(I.TransitionMotion, {
						defaultStyles: cl,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(gl, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === nd.b.Custom && void 0 !== t.customToastType) {
							const s = _l[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === nd.b.UappBanner) return m.a.createElement(al, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === nd.b.EuCookiePolicy) return m.a.createElement(Td, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Qc("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Jc("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Zc("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === nd.b.AuthError) return m.a.createElement(Od, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === nd.b.Modal ? Ie.i : Ie.o,
							o = t.kind === nd.b.Modal ? Ie.l : Ie.o;
						return m.a.createElement(yl, {
							className: t.kind === nd.b.Modal ? gd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Qc(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: gd.a.ContentWrapper
						}, wl(t, this.props.subredditIcon), t.kind === nd.b.SuccessLockComment && m.a.createElement(vl, null), t.kind === nd.b.SuccessUnlockComment && m.a.createElement(xl, null), m.a.createElement(bd, null, t.text)), m.a.createElement("div", {
							className: gd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Jc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Zc(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Ol, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Sl = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(I.spring)(1),
						x: Object(I.spring)(1, dl),
						y: Object(I.spring)(0, dl)
					}
				})),
				wl = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(hl, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case nd.b.Error:
							return m.a.createElement(ml, null);
						case nd.b.SuccessEndBroadcast:
							return m.a.createElement(Cl, null);
						case nd.b.SuccessAward:
						case nd.b.SuccessCommunity:
						case nd.b.SuccessCommunityGreen:
							return m.a.createElement(pl, null);
						case nd.b.SuccessMod:
							return m.a.createElement(bl, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				_l = {
					[nd.a.subscribeCap]: e => m.a.createElement(Kd, Fd({
						name: Nd.LoggedOutMaxSubscriptions,
						sideImage: zd,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var kl = Pl(Object(T.c)(jl)),
				Il = n("./src/reddit/featureFlags/profileCollections.ts");
			const Ml = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				Nl = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var Tl = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Al = n.n(Tl);
			var Rl = M.a.div("Wrapper", Al.a),
				Ll = n("./src/reddit/components/AlertBanner/index.m.less"),
				Fl = n.n(Ll);
			const {
				fbt: Dl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ul = () => m.a.createElement(Rl, {
				className: Object(f.a)(Fl.a.wrapper, Fl.a.suspended)
			}, m.a.createElement("span", null, Dl._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: Fl.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Dl._("Learn more", null, {
				hk: "1OTc8q"
			}))), Gl = () => m.a.createElement(Rl, {
				className: Object(f.a)(Fl.a.wrapper, Fl.a.fpr)
			}, m.a.createElement("span", null, Dl._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Fl.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Dl._("Learn more", null, {
				hk: "1OTc8q"
			}))), Bl = ({
				updateLink: e,
				onClickOldReddit: t
			}) => m.a.createElement(Rl, {
				className: Object(f.a)(Fl.a.wrapper, Fl.a.deprecated)
			}, m.a.createElement("span", null, Dl._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Dl._param("update your browser", m.a.createElement(Hl, {
				link: e
			}, Dl._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), m.a.createElement("span", null, Dl._("If you do not update your browser, we suggest you visit {old reddit} .", [Dl._param("old reddit", m.a.createElement("a", {
				className: Fl.a.underlineLink,
				href: U.a.oldRedditUrl,
				onClick: t
			}, Dl._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), Hl = ({
				children: e,
				link: t
			}) => null !== t ? m.a.createElement("a", {
				className: Fl.a.underlineLink,
				href: t
			}, e) : m.a.createElement("span", null, e);
			class ql extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Nl())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Ml())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Bl, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Gl, null) : n ? m.a.createElement(Ul, null) : null
				}
			}
			var Wl = Object(T.c)(ql),
				Vl = n("./src/reddit/components/AlertBanner/heights.ts"),
				Kl = n("./src/reddit/components/PopupPortal/index.tsx"),
				zl = n("./src/reddit/constants/componentSizes.ts"),
				Ql = n("./src/reddit/constants/elementIds.ts"),
				Jl = n("./src/reddit/constants/parameters.ts"),
				Zl = n("./src/reddit/constants/posts.ts"),
				Yl = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Xl = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				$l = n("./src/reddit/helpers/postCollection.ts"),
				eu = n("./src/reddit/models/Theme/index.ts"),
				tu = n("./src/reddit/selectors/experiments/survey.ts"),
				nu = n("./src/reddit/selectors/notificationBanner.ts"),
				su = n("./src/reddit/selectors/posts.ts"),
				ou = n("./src/reddit/components/AppRouter/index.m.less"),
				ru = n.n(ou);

			function au() {
				return (au = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const iu = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => m.a.createElement("div", au({
					className: Object(f.a)(ru.a.main, {
						[ru.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				cu = Object(x.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const o = Object(F.a)({
						theme: n,
						...s
					});
					return m.a.createElement("div", au({
						className: Object(f.a)(ru.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(eu.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Ut.c)(t)}px`
						}
					}, s))
				}),
				du = ({
					className: e,
					divRef: t,
					...n
				}) => m.a.createElement("div", au({
					className: Object(f.a)(ru.a.lightboxHeaderWrapper, e)
				}, n, {
					ref: t
				})),
				lu = Object(nu.a)(Uc.a.EmailCollectionBannerId),
				uu = Object(p.b)(() => Object(g.c)({
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
					isNpsSurveyEnabled: tu.c,
					isSubscriptionsPinned: gs.b,
					isSuspended: Ct.O,
					isFPR: Ct.H,
					posts: su.I,
					profileCollectionsEnabled: Il.a,
					showEmailCollectionBanner: e => !Object(Vt.J)(e.platform.currentPage) && lu(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(j.j)()),
					onPostDismissTrigger: () => e(Object(S.g)())
				})),
				mu = (e, t) => !(!e.state || !e.state[lr.a.IsOverlay] || t === e);
			class pu extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < zl.l && this.props.onUnpinSubscriptions()
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
								o = `${v.Cb.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === Zl.a.PROFILE;
							return !(!r || !Object($l.a)(r) || a && !n)
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
					} = this.props, s = n.state && n.state[lr.a.IsOverlay], o = Object(E.a)(this.previousLocation, e.location);
					t && s && o && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const r = Object(E.a)(this.previousLocation, this.props.location),
						a = s ? this.previousPage : this.props.currentPage;
					if (a) {
						const {
							meta: t,
							urlParams: n
						} = a, s = t && (t.name === v.Gb.INDEX || t.name === v.Gb.SUBREDDIT && n.subredditName === Qs.b.Popular), o = Object(D.c)(this.props.frontpageSignupVariant), r = Object(D.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || o || r || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = mu(e.location, this.previousLocation);
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
						isLoggedIn: r,
						isSubscriptionsPinned: a,
						isSuspended: i,
						location: d,
						onClickOutsideOverlay: l,
						routes: p,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: h,
						isSignupUpsellHidden: g
					} = this.state, f = this.context, x = mu(d, this.previousLocation);
					d.state && d.state[lr.a.IsOverlay] && !x ? d.state[lr.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[lr.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[lr.a.CloseLocation] && this.previousLocation.state[lr.a.CloseLocation] === d.state[lr.a.CloseLocation] ? d.state[lr.a.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, lr.a.CloseLocation)
					} : d.state[lr.a.CloseLocation] = this.previousLocation);
					const C = Object(E.a)(this.previousLocation, d),
						O = x || C ? this.previousLocation : d,
						y = x || C ? this.previousPage : e,
						P = !(!(y && y.meta && y.meta.name === v.Gb.SEARCH_RESULTS && y && y.queryParams) || y.queryParams[Jl.s]),
						j = !(!y || !y.meta || y.meta.name !== v.Gb.MODERATION_PAGES),
						S = Object(Vt.w)(y),
						_ = this.getIsPostCollection(),
						k = h && !g;
					return n ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Vt.a.Provider, {
						value: y
					}, m.a.createElement(Xo.c, {
						isOverlayOpen: x
					}, m.a.createElement(Kc.a, {
						forceRedditTheme: P
					}, h && m.a.createElement(Oe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(bu, {
						browserInfo: f,
						isFPR: s,
						isInline: k,
						isSuspended: i
					})), m.a.createElement(Yl.a.Provider, {
						value: !1
					}, m.a.createElement(Kc.a, {
						forceRedditTheme: P || j,
						isCommentsPage: S
					}, m.a.createElement(hu, {
						frontpageSignupVariant: t,
						isCommentsPage: S,
						isInline: k,
						isLoggedIn: r,
						isSubscriptionsPinned: a,
						location: O,
						overlayIsOpen: x,
						page: y,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: f,
						showFPR: s,
						showSuspended: i
					}))))), m.a.createElement(Vt.a.Provider, {
						value: e
					}, x && m.a.createElement(Yl.a.Provider, {
						value: !0
					}, m.a.createElement(Kc.a, {
						isOverlay: !0
					}, m.a.createElement(gu, {
						browserInfo: f,
						isPostCollection: _,
						location: d,
						onClickOutsideOverlay: l,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						showFPR: s,
						showSuspended: i
					}))), m.a.createElement(Kc.a, null, m.a.createElement(u.Fragment, null, m.a.createElement("div", {
						id: Kl.a,
						className: ru.a.popupContainer
					}), m.a.createElement(kl, null), m.a.createElement(Vc.a, null), b && m.a.createElement(w.a, null), m.a.createElement(Ht, null), m.a.createElement(is, null)))))
				}
			}
			pu.contextType = C.a;
			const bu = Object(T.c)(e => {
					const {
						browserInfo: t,
						isFPR: n,
						isInline: s,
						isSuspended: o
					} = e, r = {
						browserInfo: t,
						showFPR: n,
						showSuspended: o
					};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Wl, r), m.a.createElement(Fc, {
						className: Object(f.a)(ru.a.header, Object(Vl.b)(ru.a, r), {
							[ru.a.inline]: s
						})
					}))
				}),
				hu = Object(T.c)(class extends m.a.Component {
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
							isCommentsPage: o,
							isInline: r,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!a && !s && o);
						return m.a.createElement(iu, {
							"aria-hidden": s,
							className: Object(f.a)(Object(Vl.b)(ru.a, this.props), {
								[ru.a.withUpsell]: !!e,
								[ru.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Wc, {
							className: Object(f.a)(ru.a.pinnedSubscriptions, Object(Vl.b)(ru.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), c && m.a.createElement("div", {
							className: Object(f.a)(ru.a.bottomSpacer, Object(Vl.a)(ru.a, this.props))
						}))
					}
				});
			class gu extends m.a.Component {
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
							t(e.state[lr.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Xl.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(y.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Xl.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === v.Gb.SUBREDDIT_CREATION || t.meta.name === v.Gb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(cu, {
						className: Object(f.a)(Object(Vl.b)(ru.a, this.props), {
							[ru.a.mIsCommentsLightbox]: o,
							[ru.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(f.a)(ru.a.overlayWrapper, Object(Vl.b)(ru.a, this.props))
					}, m.a.createElement("div", {
						className: Object(f.a)(ru.a.overlayScrollContainer, {
							[ru.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Ql.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(du, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(f.a)(Object(Vl.b)(ru.a, this.props), {
							[ru.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(Dc.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(f.a)(ru.a.bottomSpacer, Object(Vl.a)(ru.a, this.props))
					}))))
				}
			}
			t.b = uu(Object(T.c)(pu))
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				unreadCount: n
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.isHighlighted]: t && n <= 0
				})
			}, n > 0 && Object(a.b)(n)) : null
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
			const l = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PennyPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)()])).then(e => e[0].default),
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
		"./src/reddit/components/DataProviders/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/contexts/User/index.tsx");

			function a(e) {
				return o.a.createElement(r.b, null, e.children)
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
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("ClaimFreeAwardModal")]).then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
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
			const l = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)()]),
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
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("PowerupSuccessModal")]).then(n.bind(null, "./src/reddit/components/Econ/PowerupsSuccess/index.tsx")),
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
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
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
				x = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				C = Object(i.b)(x, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(C(e => {
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
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
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
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
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
				x = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				y = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				E = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				P = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = n("./src/reddit/selectors/tooltip.ts"),
				S = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				w = n.n(S);
			const _ = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("reddit-components-CoinPurchaseDropdown")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
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
				k = Object(f.a)(),
				I = Object(d.c)({
					activeSaleConfig: P.a,
					activeTooltipId: j.a,
					coinPurchaseDropdownIsOpen: e => Object(j.b)(k)(e),
					isFreeAwardEventEnabled: e => Object(E.a)(e) && Object(P.g)(e),
					isInIcons2020: y.a
				}),
				M = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === k ? Object(m.i)() : Object(m.f)({
							tooltipId: k
						}))
					}
				}),
				N = Object(c.b)(I, M);
			class T extends i.a.Component {
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
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.b)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(x.d)("get_coins_cta", e))
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
						isFreeAwardEventEnabled: o,
						isInIcons2020: r
					} = this.props, a = this.getButtonText(), c = !!e || o, d = Object(l.a)(w.a.icon, {
						[w.a.special]: c
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, w.a.ctaContainer, {
							[w.a.special]: c
						}),
						id: k,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(w.a.ctaContent, {
							[w.a.special]: c
						})
					}, r ? i.a.createElement(C.a, {
						name: "coins",
						className: d
					}) : i.a.createElement(O.a, {
						className: d
					}), i.a.createElement("span", {
						className: w.a.text
					}, a)), s && i.a.createElement(_, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: k
					}))
				}
			}
			t.a = N(Object(g.c)(T))
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
				o = n.n(s),
				r = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				i = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(a.a, "Logo", l.a),
				p = u.a.wrapped(i.a, "Wordmark", l.a),
				b = u.a.div("SparseContainer", l.a),
				h = u.a.a("HomeExternalLink", l.a);

			function g(e) {
				return o.a.createElement(b, {
					id: r.c
				}, o.a.createElement(h, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(c.a, null, o.a.createElement(m, null), o.a.createElement(p, null))))
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
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return F
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				d = n("./node_modules/lodash/omit.js"),
				l = n.n(d),
				u = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				m = n("./src/reddit/components/ResizeSensor/index.tsx"),
				p = n("./src/reddit/components/InboxTooltip/index.m.less"),
				b = n.n(p);
			const h = 3;
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = r.a.createRef(), this.handleResize = () => {
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
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						blockAwarder: o,
						index: a,
						isInboxPostEmbedEnabled: i,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: p
					} = this.props, g = a + 1 <= h;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.ref,
						className: b.a.notificationResizeWrapper
					}, r.a.createElement(u.a, {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						isInboxPostEmbedEnabled: i,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: p,
						blockAwarder: o
					}), !!g && r.a.createElement(m.a, {
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
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.container = r.a.createRef(), this.state = {
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
						return this.props.notifications.map((n, s) => r.a.createElement(g, x({}, e, {
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
					return r.a.createElement("div", {
						className: b.a.notificationList,
						ref: this.container,
						style: {
							height: s,
							maxHeight: s
						}
					}, n ? this.renderNotifications() : e ? r.a.createElement(f.a, null) : r.a.createElement(v.a, null))
				}
			}
			var j = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/helpers/trackers/inbox.ts"),
				w = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
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
			const M = [],
				N = i.a.div("StyledDropdown", b.a),
				T = i.a.wrapped(k.a, "Gear", b.a),
				A = i.a.wrapped(_.a, "MarkAsRead", b.a),
				R = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: i,
					sendInboxClickSettings: d
				}) => {
					const l = !!i,
						u = Object(o.useCallback)(() => {
							e(), t()
						}, [e, t]),
						m = Object(o.useCallback)(() => {
							d(), t()
						}, [d, t]);
					return r.a.createElement("nav", {
						className: b.a.topNav
					}, r.a.createElement("span", {
						className: b.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), r.a.createElement("span", {
						className: b.a.topNavLinks
					}, r.a.createElement("span", {
						className: b.a.messagesLinkContainer
					}, r.a.createElement(j.a, {
						className: Object(a.a)(b.a.messagesLink, {
							[b.a.mActive]: l
						}),
						onClick: u,
						to: l ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					})), r.a.createElement(c.a, {
						className: b.a.badgeCount,
						isActive: l,
						unreadCount: i
					})), r.a.createElement("button", {
						className: b.a.navLink,
						onClick: n
					}, r.a.createElement(A, null)), r.a.createElement(j.a, {
						className: b.a.navLink,
						onClick: m,
						to: "/settings/notifications"
					}, r.a.createElement(T, null))))
				},
				L = e => r.a.createElement("div", {
					className: b.a.bottomBar
				}, r.a.createElement(j.a, {
					className: b.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				F = e => {
					const t = Object(w.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: o,
							messagesBadgeCount: a,
							notifications: i,
							hideTooltip: c
						} = e,
						d = !(!i || !i.length);
					return r.a.createElement(N, null, r.a.createElement("div", {
						className: b.a.tooltipContainer
					}, r.a.createElement(R, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(S.e)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: a,
						onMessagesClick: () => {
							t(Object(S.m)({
								badgeCount: s,
								tab: S.d.Messages
							})), t(Object(S.f)()), n()
						},
						sendInboxClickSettings: () => t(Object(S.k)(S.a.MiniInbox)),
						onBarClick: c
					}), r.a.createElement(P, I({}, e, {
						isPending: o,
						onItemClick: c
					})), (d || o) && r.a.createElement(L, {
						sendInboxClickSeeAll: () => t(Object(S.j)()),
						onBarClick: c
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
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(o.createContext)(null),
				u = Object(o.createContext)(null);
			class m extends r.a.Component {
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
					return r.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = a.f + 10,
				b = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px");
					return r.a.createElement(l.Consumer, null, n => n && r.a.createElement("div", {
						className: d.a.wrapper
					}, r.a.createElement(i.q, {
						kind: i.a.Button,
						priority: i.b.Plain,
						className: d.a.button,
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
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -p)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: d.a.rightBorder
					})))
				}),
				h = r.a.memo(() => r.a.createElement(u.Consumer, null, e => r.a.createElement("div", {
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/shortcuts/close.ts"),
				m = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
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
				M = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
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
					post: N.l,
					isScoreDiscounted: (e, {
						page: t,
						post: n
					}) => {
						var s;
						if (!t && !n) return !1;
						const o = e.platform.lastPage,
							r = e.platform.currentPage,
							a = (null === (s = null == r ? void 0 : r.meta) || void 0 === s ? void 0 : s.name) === d.Gb.COMMENTS,
							i = !Object(T.I)(e) && a && !o;
						if (i && !Object(M.b)(e)) return !1;
						const c = t && Object(N.l)(e, {
							page: t
						}) || n;
						return void 0 !== Object(M.d)(e, {
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
						e(Object(u.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === k.a.upvoted ? Object(l.bb)(t) : Object(l.u)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				}));
			class G extends r.a.Component {
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
						isScoreDiscounted: u
					} = this.props, h = H[l && l.media ? l.media.type : _.o.EMBED], f = !l && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === d.Gb.META_MEMBERSHIP_PAYWALL_PAGE, x = l ? A.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return r.a.createElement("div", {
						className: Object(c.a)(L.a.container, t, {
							[L.a.isCollection]: l && Object(v.a)(l)
						})
					}, r.a.createElement(x, {
						postId: null == l ? void 0 : l.id
					}, r.a.createElement("div", {
						className: L.a.postDetails
					}, l && r.a.createElement(o.Fragment, null, u ? void 0 : r.a.createElement(m.a, {
						className: L.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: l,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(h, {
						className: L.a.mediaIcon
					}), r.a.createElement(b.c, {
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
					}), r.a.createElement(p.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), f && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: L.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: L.a.actions
					}, r.a.createElement(B, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const B = r.a.memo(e => {
					const t = Object(x.a)();
					return r.a.createElement(f.q, {
						className: L.a.CloseButton,
						size: f.c.XS,
						onClick: e.onClick,
						priority: f.b.Plain,
						Icon: t ? e => r.a.createElement(C.a, F({
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
					[_.o.GIFVIDEO]: y.a,
					[_.o.IMAGE]: P.a,
					[_.o.TEXT]: j.a,
					[_.o.RTJSON]: j.a,
					[_.o.VIDEO]: O.a,
					[_.o.EMBED]: E.a,
					[_.o.LIVEVIDEO]: O.a,
					[_.o.GALLERY]: e => {
						const t = Object(x.a)();
						return r.a.createElement("i", {
							className: Object(c.a)(L.a.galleryIcon, e.className)
						}, t ? r.a.createElement(C.a, {
							name: "media_gallery"
						}) : r.a.createElement(w.a, null))
					}
				};
			t.a = Object(h.c)(U(G))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "r", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(i);
			const d = s.a.wrapped(a.a, "CloseIcon", c.a),
				l = s.a.section("ModalBody", c.a),
				u = s.a.section("ModalPostPreview", c.a),
				m = s.a.p("ModalText", c.a),
				p = s.a.div("ModalSmallText", c.a),
				b = s.a.div("ModalDescriptionText", c.a),
				h = s.a.div("ModalMetaText", c.a),
				g = s.a.label("ModalFormItem", c.a),
				f = s.a.wrapped(r.a, "ModalInput", c.a),
				v = s.a.label("ModalInputLabel", c.a),
				x = s.a.footer("ModalFooter", c.a),
				C = s.a.header("ModalHeader", c.a),
				O = s.a.div("ModalTitle", c.a),
				y = s.a.div("ModalAnnotation", c.a),
				E = s.a.div("ModalMain", c.a),
				P = s.a.textarea("TextArea", c.a),
				j = s.a.wrapped(o.i, "WarningButton", c.a),
				S = s.a.wrapped(o.i, "PrimaryButton", c.a),
				w = s.a.wrapped(o.l, "CancelButton", c.a),
				_ = s.a.wrapped(o.o, "RemoveButton", c.a)
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
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				r = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = () => Object(o.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.d)()])).then(e => e[0].default),
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
				return Object(a.e)(e => Object(i.b)(e) || Object(c.G)(e)) ? r.a.createElement(d, null) : null
			}
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./assets/fonts/BentonSans/font.less"),
				l = n.n(d),
				u = n("./assets/fonts/IBMPlexSans/font.less"),
				m = n.n(u),
				p = n("./assets/fonts/NotoMono/font.less"),
				b = n.n(p),
				h = n("./assets/fonts/NotoSans/font.less"),
				g = n.n(h),
				f = n("./assets/fonts/VCR/font.less"),
				v = n.n(f),
				x = n("./src/reddit/components/Root/index.m.less"),
				C = n.n(x),
				O = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				y = n("./src/lib/classNames/index.ts"),
				E = n("./src/reddit/components/AppRouter/index.tsx"),
				P = n("./src/reddit/components/DataProviders/index.tsx"),
				j = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				S = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.tsx"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/pages/InternalServerError/index.tsx"),
				M = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				N = n("./src/reddit/selectors/theme.ts");

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
					theme: N.a,
					isInIcons2020: M.a
				}),
				F = ({
					children: e,
					isInIcons2020: t,
					theme: n
				}) => {
					const s = Object(k.a)({
						theme: n
					});
					return r.a.createElement(_.b.Provider, {
						value: {
							[_.a.Icons]: t
						}
					}, r.a.createElement("div", {
						className: Object(y.a)(C.a.container, t ? "isInIcons2020" : "isNotInIcons2020"),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, t ? r.a.createElement(R, null) : r.a.createElement(A, null), e))
				},
				D = Object(a.b)(L, {})(F);

			function U(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return r.a.createElement(w.a, null, r.a.createElement(D, null, r.a.createElement(P.a, null, r.a.createElement(O.a, null), r.a.createElement(j.a, null), r.a.createElement(S.a, null, r.a.createElement(t, null, r.a.createElement(i.d, {
						component: G(n)
					}))))))
				}
				return r.a.createElement(I.a, {
					error: e.error
				})
			}
			const G = e => t => r.a.createElement(E.b, T({
				routes: e
			}, t))
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
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/shortcuts.ts"),
				a = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				i = n.n(a);
			t.a = ({
				children: e
			}) => o.a.createElement("div", {
				className: i.a.shortcutDiv,
				id: r.b,
				tabIndex: -1
			}, o.a.Children.only(e))
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
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/helpers/survey/index.ts"),
				u = n("./src/reddit/selectors/survey.ts"),
				m = n("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => {
					const n = Object(u.c)(e),
						s = Object(u.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = m.experiment(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
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
					...m.defaults(n),
					survey: p(n, e)
				}),
				g = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					type: o
				}) => r => ({
					source: "survey",
					action: e,
					noun: "rating",
					...m.defaults(r),
					survey: {
						type: b(o),
						min: o === l.a.NPS ? 0 : 1,
						max: o === l.a.NPS ? 10 : 7,
						question: n,
						score: s,
						...p(r, t)
					}
				}),
				f = ({
					action: e,
					experimentName: t,
					question: n,
					text: s,
					type: o
				}) => r => ({
					source: "survey",
					action: e,
					noun: "freeform_text",
					...m.defaults(r),
					survey: {
						question: n,
						type: b(o),
						text: s,
						...p(r, t)
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
						o = Object(i.e)(O.g),
						d = Object(i.e)(O.rb),
						m = Object(i.e)(C.a, r.a),
						p = Object(i.e)(u.c),
						b = Object(i.e)(u.a),
						g = Object(i.e)(u.b),
						f = Object(i.e)(u.d),
						x = Object(a.useMemo)(() => {
							const e = Object(l.g)(),
								t = {};
							for (const n of e) t[n] = m[n];
							return t
						}, [m]),
						y = Object(a.useCallback)(e => {
							const s = Object(l.f)({
								triggerName: e,
								surveyExperimentVariants: x,
								samplingId: o || d,
								isDemoEnabled: p,
								activeDemoTrigger: b,
								demoTriggerThreshold: g,
								isSampleFactorEnabled: f
							});
							if (p) return void(s && n(s));
							if (!s || s === t) return;
							const r = x[s.experiment_name];
							(null == r ? void 0 : r.variant) && s.variants[r.variant] && setTimeout(() => n(s), 500)
						}, [t, x, o, d, f, p, b, g]);
					return Object(a.useEffect)(() => {
						const e = Object(l.d)(),
							t = e.subscribe(y);
						return () => e.unsubscribe(t)
					}, [y]), Object(a.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(l.i)(t, n), e(Object(c.F)({
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
					setTextResponse: o,
					setIsSurveyDismissed: r
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
					const [i, c] = Object(a.useState)(!1), d = Object(v.a)(), l = t.experiment_name, u = t.steps[e], m = null == u ? void 0 : u.type, p = null == u ? void 0 : u.question, b = Object(a.useCallback)(() => {
						e >= 0 ? c(!0) : (r(!0), d(h(t.experiment_name, "dismiss")))
					}, [e, t, d, r]), x = Object(a.useCallback)(() => {
						o(""), r(!0), d(n ? f({
							experimentName: l,
							action: "dismiss",
							type: m,
							question: p
						}) : g({
							experimentName: l,
							action: "dismiss",
							type: m,
							question: p
						}))
					}, [l, n, p, d, r, o, m]);
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
					setTextResponse: o,
					textResponse: r
				}) => {
					const [i, c] = Object(a.useState)(-1), [d, u] = Object(a.useState)(0), [m, p] = Object(a.useState)(!1), b = Object(v.a)(), x = Object(a.useCallback)(() => {
						const a = e.experiment_name,
							v = e.steps[i],
							x = null == v ? void 0 : v.type,
							C = null == v ? void 0 : v.question,
							O = null == v ? void 0 : v.follow_up_question,
							y = e.steps[i + 1],
							E = null == y ? void 0 : y.type,
							P = null == y ? void 0 : y.question;
						if (u(d + 1), -1 === i) return b(h(a, "agree")), c(0), void b(g({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						}));
						b(m ? f({
							experimentName: a,
							action: "submit",
							type: x,
							text: r,
							question: O
						}) : g({
							experimentName: a,
							action: "submit",
							question: C,
							type: x,
							score: t && t + (x === l.a.NPS ? 0 : 1)
						})), s(void 0), o(""), m || !O ? (p(!1), i + 1 >= e.steps.length ? n(!0) : (c(i + 1), b(g({
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
					}, [i, e, m, r, t, b, n, s, o, d]);
					return {
						activeStepNum: i,
						isFollowUp: m,
						onStepComplete: x,
						uiStep: d,
						setActiveStepNum: c,
						setUIStep: u,
						setIsFollowUp: p
					}
				},
				j = ({
					isSurveyDismissed: e,
					setIsSurveyDismissed: t,
					setActiveStepNum: n,
					setActiveSurvey: o,
					setUIStep: r,
					setIsFollowUp: c,
					shouldMount: l,
					uiStep: u
				}) => {
					const m = Object(i.d)();
					Object(a.useEffect)(() => {
						e && !l && setTimeout(() => {
							n(-1), r(0), c(!1), o(null), u > 1 && m(Object(d.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: x.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [m, e, l, u, t, n, o, r, c])
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
				return O
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
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
			class x extends r.a.Component {
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
				if (Object(p.i)(e) || Object(h.jb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.F)(e, n);
				if (!s) return;
				if (Object(h.ib)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
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
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.a, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.a, {
					showPresence: !0
				}))
			})
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
				return x
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "l", (function() {
				return O
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
				x = 5,
				C = 16,
				O = 1250,
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
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
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
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "g", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/controls/Button/index.m.less"),
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
			const u = {
				role: "button",
				tabIndex: 0
			};
			var m, p, b, h;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(m || (m = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(b || (b = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(h || (h = {}));
			const g = (e, t) => n => o.a.createElement(e, {
					className: Object(r.a)(t, n.className)
				}),
				f = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: s = b.C,
						isFullWidth: a = !1,
						isSquare: c = !1,
						children: g,
						className: f,
						kind: O = h.Button,
						priority: y = p.Primary,
						redditStyle: E,
						size: P = m.S,
						text: j,
						...S
					} = e, w = Object(i.a)(), _ = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: s,
						isFullWidth: o,
						isSquare: a,
						priority: i,
						size: c,
						text: l
					}) => Object(r.a)(e, d.a.Button, i && d.a[i], c && d.a[c], {
						[d.a.isFullWidth]: o,
						[d.a.isIconOnly]: !!s && !l,
						[d.a.isSquare]: a,
						[d.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: f,
						children: g,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: a,
						isSquare: c,
						priority: y,
						redditStyle: E,
						size: P,
						text: j
					}), k = (({
						children: e,
						text: t,
						Icon: n,
						iconPosition: s,
						priority: a,
						isInIcons2020: i
					}) => !n && t ? o.a.createElement("span", null, t) : o.a.createElement(o.a.Fragment, null, n && (s === b.C || s === b.L) && o.a.createElement(n, {
						className: Object(r.a)(d.a.Icon, {
							[d.a.isLeft]: s === b.L
						}),
						isFilled: i && a === p.Primary
					}), t && o.a.createElement("span", {
						className: d.a.Text
					}, t), e && e, n && s === b.R && o.a.createElement(n, {
						className: Object(r.a)(d.a.Icon, d.a.isRight),
						isFilled: i && a === p.Primary
					})))({
						children: g,
						text: j,
						Icon: n,
						iconPosition: s,
						priority: y,
						isInIcons2020: w
					});
					return O === h.InternalLink && (e => "to" in e)(S) ? o.a.createElement(v, l({}, u, S, {
						className: _
					}), k) : O === h.ExternalLink && (e => "href" in e)(S) ? o.a.createElement(x, l({}, u, S, {
						className: _
					}), k) : o.a.createElement(C, l({}, u, S, {
						className: _
					}), k)
				},
				v = e => o.a.createElement(a.a, e),
				x = e => o.a.createElement("a", e),
				C = e => o.a.createElement("button", e),
				O = e => o.a.createElement(f, l({
					kind: h.ExternalLink,
					priority: p.Primary
				}, e)),
				y = e => o.a.createElement(f, l({
					kind: h.InternalLink,
					priority: p.Primary
				}, e)),
				E = e => o.a.createElement(f, l({
					kind: h.Button,
					priority: p.Primary
				}, e)),
				P = e => o.a.createElement(f, l({
					kind: h.ExternalLink,
					priority: p.Secondary
				}, e)),
				j = e => o.a.createElement(f, l({
					kind: h.InternalLink,
					priority: p.Secondary
				}, e)),
				S = e => o.a.createElement(f, l({
					kind: h.Button,
					priority: p.Secondary
				}, e)),
				w = e => o.a.createElement(f, l({
					kind: h.InternalLink,
					priority: p.Plain
				}, e)),
				_ = e => o.a.createElement(f, l({
					kind: h.Button,
					priority: p.Plain
				}, e)),
				k = ({
					className: e,
					...t
				}) => o.a.createElement(f, l({
					kind: h.Button,
					priority: p.Primary,
					className: Object(r.a)(e, d.a.DangerButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => o.a.createElement(f, l({
					kind: h.Button,
					className: Object(r.a)(e, d.a.GoldButtonColors)
				}, t)),
				M = ({
					className: e,
					...t
				}) => o.a.createElement(f, l({
					kind: h.Button,
					className: Object(r.a)(e, d.a.PremiumButtonColors)
				}, t)),
				N = ({
					className: e,
					...t
				}) => o.a.createElement(f, l({
					kind: h.Button,
					className: Object(r.a)(e, d.a.ChatButton)
				}, t)),
				T = ({
					className: e,
					...t
				}) => o.a.createElement(f, l({
					kind: h.Button,
					className: Object(r.a)(e, d.a.InlineTextButton)
				}, t));
			t.q = f
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
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
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
			t.a = o.a.memo(e => {
				const t = e.size || a.c.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[t], {
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
				}, o.a.createElement("div", {
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
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const a = s.a.h5("heading5", r.a),
				i = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.eb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				v = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t, n, a) => {
					let i = Object(u.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return a && (i = Object(d.a)(i)), Object(r.a)(e, {
						data: n,
						endpoint: i,
						method: o.eb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				y = (e, t, n, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.eb.POST,
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
				o = n("./src/graphql/operations/FetchSpecialEvents.json"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
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
						o = n && "undefined" != typeof window ? `${window.location.origin}${s}` : `${e.apiUrl}${s}`,
						i = Object(l.a)(o);
					return Object(a.a)(Object(c.a)(e, [d.a]), {
						method: r.eb.GET,
						endpoint: i,
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
			const x = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const s = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					o = Object(l.a)(s);
				return Object(a.a)(Object(c.a)(e, [d.a]), {
					method: r.eb.GET,
					endpoint: o,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(C)
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
					...o
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
				return u
			})), n.d(t, "d", (function() {
				return m
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
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
				u = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: c,
					pennies: d,
					rememberCard: u,
					token: m,
					savedCardId: p
				}) => {
					const b = {
							token: m ? m.id : void 0,
							coins: e,
							offer_context: c,
							pennies: d,
							remember_card: u,
							card_id: p,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(i.a)(h);
					return Object(o.a)(Object(r.a)(t, [a.a]), {
						method: s.eb.POST,
						endpoint: g,
						data: b
					}).then(l)
				}, m = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: c,
					isOldReddit: d,
					offerContext: u,
					pennies: m,
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
						offer_context: u,
						pennies: m,
						thing_id: b,
						gild_type: f,
						message: x ? x.trim() : "",
						is_anonymous: v,
						remember_card: p,
						card_id: g,
						correlation_id: n
					}, O = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, y = d ? O : Object(i.a)(O);
					return Object(o.a)(Object(r.a)(t, [a.a]), {
						method: s.eb.POST,
						endpoint: y,
						data: C
					}).then(l)
				}, p = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: c,
					pennies: d,
					rememberCard: u,
					thingId: m,
					token: p,
					savedCardId: b
				}) => {
					const {
						gildType: h,
						isAnonymous: g,
						message: f
					} = n, v = {
						token: p ? p.id : void 0,
						thing_id: m,
						award_id: h,
						message: f ? f.trim() : "",
						is_anonymous: g,
						pennies: d,
						remember_card: u,
						card_id: b,
						correlation_id: t
					}, x = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, C = c ? x : Object(i.a)(x);
					return Object(o.a)(Object(r.a)(e, [a.a]), {
						method: s.eb.POST,
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
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						m = Object(i.a)(u);
					return Object(o.a)(Object(r.a)(e, [a.a]), {
						method: s.eb.POST,
						endpoint: m,
						data: d
					}).then(l)
				}, h = async (e, t) => {
					const n = {
						token: t.id
					};
					return Object(o.a)(Object(r.a)(e, [a.a]), {
						method: s.eb.POST,
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
					return Object(o.a)(Object(r.a)(e, [a.a]), {
						method: s.eb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(d.a)(e)
					})
				}, f = async e => Object(o.a)(Object(r.a)(e, [a.a]), {
					method: s.eb.GET,
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
				o = n("./src/graphql/operations/UpdateNotificationPreferences.json"),
				r = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				i = (e, t) => Object(r.a)(e, {
					...o,
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
				return t === c.h.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.eb.POST,
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
				return Object(i.O)(e, {}) === r.g.Large && !Object(d.I)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: o.Pb
				})
			}

			function m(e) {
				switch (e) {
					case o.Qb.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.Qb.Enabled:
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
		"./src/reddit/helpers/getSrCreationEntrypointCopy.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/reddit/constants/experiments.ts");
			t.a = (e, t) => {
				switch (e) {
					case o.pd.Add:
						return s.fbt._("Add Community", null, {
							hk: "nuvEI"
						});
					case o.pd.Start:
						return s.fbt._("Start Community", null, {
							hk: "244eL5"
						});
					case o.pd.Create:
						return s.fbt._("Create Subreddit", null, {
							hk: "1Qw5ax"
						});
					default:
						return t
				}
			}
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
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				l = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				u = n.n(l);
			const m = i.a.button("button", u.a),
				p = e => t => o.a.createElement("div", {
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
						meta: m
					} = s,
					b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(u.a.icon, {
							[u.a.isLit]: e
						})
					}), o.a.createElement(l, {
						className: u.a.body
					}), m && o.a.createElement("div", {
						className: u.a.metaContainer
					}, m));
				return n ? e => {
					const t = Object(c.a)();
					return o.a.createElement("a", {
						"data-redditstyle": !0,
						className: Object(a.a)(e.className, u.a.basicLink),
						href: e.href,
						onClick: e.onClick,
						target: "_blank",
						rel: "noopener noreferrer"
					}, b(e.isLit), !t && o.a.createElement(d.a, {
						className: u.a.outboundLink
					}))
				} : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, u.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, b(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, u.a.button),
					onClick: e.onClick
				}, b(e.isLit))
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
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			let o;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(s.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, o || (o = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${o}px`;
					const t = document.getElementById(s.c);
					t && (t.style.marginRight = `${o}px`)
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				c = e => {
					if (!e || !document.body) return 0;
					const t = i(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
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
					const t = Object(o.m)(e);
					return {
						actionInfo: Object(r.actionInfo)(e),
						post: t && Object(r.post)(e, t) || null,
						profile: Object(r.profile)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e)
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
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				a = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: o.user(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					actionInfo: o.actionInfo(t),
					app: o.app(t),
					referrer: o.referrer(t),
					session: o.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/userFlair.ts");

			function i(e) {
				const t = Object(r.subreddit)(e);
				if (!t || !t.id) return;
				const n = Object(a.c)(e, {
					subredditId: t.id
				});
				if (!(null == n ? void 0 : n.displaySettings.isUserEnabled) || !(null == n ? void 0 : n.applied)) return {
					isActive: !1
				};
				const s = Object(o.g)(n.applied);
				return s ? {
					isActive: !0,
					title: s
				} : {
					isActive: !1
				}
			}
			var c = n("./src/reddit/models/PostDraft/index.ts"),
				d = n("./src/reddit/selectors/comments.ts"),
				l = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/telemetry/index.ts");
			const m = e => {
					const t = Object(l.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(r.defaults)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e),
						post: t ? Object(r.post)(e, t) : null,
						profile: Object(r.profile)(e)
					}
				},
				p = (e, t, n, s) => {
					const o = {
							commentId: s,
							commentsPageKey: n
						},
						a = s && Object(d.j)(e, o) || 0;
					return Object(u.a)({
						noun: "comment",
						...m(e),
						comment: s ? Object(r.comment)(e, s) : null,
						listing: Object(r.listing)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: i(e)
					})
				},
				b = (e, t, n, s) => {
					const o = m(e);
					return Object(u.a)({
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
				},
				h = e => Object(u.a)({
					noun: "cancel",
					...m(e)
				}),
				g = (e, t) => {
					t === c.c.replyToPost && Object(u.a)({
						noun: "input",
						...m(e)
					})
				},
				f = (e, t) => Object(u.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(r.defaults)(t),
					screen: Object(r.screen)(t),
					subreddit: Object(r.subreddit)(t),
					post: Object(r.post)(t, e)
				}),
				v = e => Object(u.a)({
					noun: "edit",
					...m(e)
				}),
				x = e => Object(u.a)({
					noun: "save_edit",
					...m(e)
				})
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
					...Object(s.defaults)(t),
					customFeed: Object(s.customFeedByPath)(t, e),
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
					...Object(o.h)(e, t),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
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
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			}));
			var s, o, r, a, i, c = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(r || (r = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {}));
			const u = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...d.defaults(o),
					action: c.c.VIEW,
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
					type: s,
					awardId: o
				}) => r => {
					Object(l.a)({
						...d.defaults(r),
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
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o,
					position: r
				}) => i => ({
					...d.defaults(i),
					action: c.c.CLICK,
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
				b = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...d.defaults(n),
					action: c.c.VIEW,
					noun: "inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...d.defaults(t),
					action: c.c.VIEW,
					noun: "mini_inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				g = ({
					badgeCount: e
				}) => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "inbox",
					source: a.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => ({
					...d.defaults(r),
					action: c.c.CLICK,
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
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...d.defaults(o),
					action: c.c.VIEW,
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
					...d.defaults(r),
					action: c.c.CLICK,
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
						...d.actionInfo(r),
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
					...d.defaults(r),
					action: c.c.UNDO,
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
						...d.actionInfo(r),
						type: e
					}
				}),
				O = e => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(t),
						pageType: e
					}
				}),
				y = () => e => ({
					...d.defaults(e),
					action: c.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(e),
						pageType: r.MiniInbox
					}
				}),
				E = () => e => ({
					...d.defaults(e),
					action: c.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				P = ({
					isMiniInbox: e
				}) => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "mark_all_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...d.actionInfo(t),
						pageType: r.MiniInbox
					} : {}
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
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				r = e => t => ({
					source: "nav",
					action: "click",
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
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				r = (e = o) => t => ({
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
			const o = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => n => ({
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
				x = e => r("h_hide", e),
				C = e => r("x_expando", e),
				O = e => r("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				S = e => r("l_go_to_link", e),
				w = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
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
						...r.defaults(t)
					};
					return Object(o.a)(t) && Object.assign(n, a), n
				},
				c = e => ({
					...r.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				d = e => ({
					...r.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				l = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...r.defaults(e),
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
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(d);
			const u = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return o.a.createElement("i", {
					className: Object(r.a)(e.className, Object(c.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || a.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = u
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
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				c = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(a.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/All/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z"
			}))
		},
		"./src/reddit/icons/svgs/Browse/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), o.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), o.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
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
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
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
				return d
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
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => o.a.createElement("svg", c({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), o.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), o.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/Favorite/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), o.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), o.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), o.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), o.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), o.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Home/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(({
				className: e,
				isBadged: t,
				...n
			}) => o.a.createElement("svg", {
				className: e,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
			}), o.a.createElement("path", {
				d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
			}), o.a.createElement("circle", {
				cx: "16",
				cy: "4",
				r: "4",
				fill: t ? Object(i.a)(n).body : "none"
			}), o.a.createElement("circle", {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.karma, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
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
		"./src/reddit/icons/svgs/Logout/index.tsx": function(e, t, n) {
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
				d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
			})))
		},
		"./src/reddit/icons/svgs/MarkAsRead/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				clipRule: "evenodd",
				d: "M14.03 9.53l-5 5a.748.748 0 01-1.06 0l-2-2a.75.75 0 111.06-1.061l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.061m4.5-3.378l-8-5a.999.999 0 00-1.06 0l-8 5A.999.999 0 001 7v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7a1 1 0 00-.47-.848",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/ModMode/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
			}))
		},
		"./src/reddit/icons/svgs/Multireddit/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
			}), o.a.createElement("path", {
				d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
			}))
		},
		"./src/reddit/icons/svgs/MyProfile/index.tsx": function(e, t, n) {
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
				d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
			})))
		},
		"./src/reddit/icons/svgs/Night/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
			})))
		},
		"./src/reddit/icons/svgs/Notify/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 12.988c0 .554.449 1.002 1 1.002a1 1 0 110 2H3a1 1 0 110-2c.551 0 1-.448 1-1l.01-5.002A5.996 5.996 0 0110 2a5.997 5.997 0 015.99 5.99l.01 4.998zM8 16.99h4c0 1.103-.897 2-2 2s-2-.897-2-2z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), o.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Pinmenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
			}), o.a.createElement("path", {
				d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = e => o.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				a = e => o.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				i = e => o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), o.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), o.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), o.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
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
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = function({
				className: e
			}) {
				return o.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
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
				fill: r.b.snoo,
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
				fill: a.b.snoo,
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
				M = n("./src/reddit/actions/apiRequestHeaders.ts"),
				N = n("./src/reddit/actions/chat/toggle.ts"),
				T = n("./src/reddit/actions/chat/unreadCount.ts"),
				A = n("./src/reddit/actions/comment/index.ts"),
				R = n("./src/reddit/actions/emailCollection/index.ts"),
				L = n("./src/reddit/actions/emailVerification.ts"),
				F = n("./src/reddit/actions/googleOneTap/index.ts"),
				D = n("./src/reddit/actions/media.ts"),
				U = n("./src/lib/loadWithRetries/index.ts"),
				G = n("./src/reddit/actions/notifications/state.ts"),
				B = n("./src/reddit/actions/nps.ts"),
				H = n("./src/reddit/actions/platform.ts"),
				q = n("./src/reddit/actions/post.ts"),
				W = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				V = n("./src/reddit/actions/session.ts"),
				K = n("./src/reddit/actions/survey/index.ts"),
				z = n("./src/reddit/actions/theme.ts"),
				Q = n("./src/reddit/actions/toaster.ts"),
				J = n("./src/reddit/actions/users.ts"),
				Z = n("./src/reddit/components/Root/index.tsx"),
				Y = n("./node_modules/react-redux/es/index.js"),
				X = n("./node_modules/reselect/es/index.js"),
				$ = n("./src/reddit/constants/localStorage.ts"),
				ee = n("./src/reddit/selectors/user.ts"),
				te = n("./node_modules/lodash/throttle.js"),
				ne = n.n(te),
				se = n("./src/reddit/helpers/localStorage/index.ts");
			const oe = 1e3;
			class re extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = ne()(() => Object(se.ub)(this.props.storageKey, this.props.value), oe)
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
			re.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const ae = Object(X.a)(ee.J, e => ({
				storageKey: $.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var ie = Object(Y.b)(ae)(re);
			var ce = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(ie, null)),
				de = n("./src/reddit/constants/headers.ts"),
				le = n("./src/reddit/constants/history.ts"),
				ue = n("./src/reddit/constants/jsapiEvents.ts"),
				me = n("./src/reddit/constants/parameters.ts"),
				pe = n("./src/reddit/constants/screenWidths.ts"),
				be = n("./src/reddit/contexts/AdminEvents.ts"),
				he = n("./src/reddit/contexts/ApiContext.tsx"),
				ge = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				fe = n("./node_modules/brcast/dist/brcast.es.js"),
				ve = n("./src/telemetry/helpers/sendEvent.ts"),
				xe = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var Ce = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(fe.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(xe.b)(s) || Object(ee.G)(s)) && (e = !0, Object(ve.c)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(xe.b)(a)) {
									const n = Object(ee.G)(a);
									e && !n ? (e = !1, Object(ve.c)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(ve.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(fe.a)([]),
					middleware: () => e => t => e(t)
				}),
				Oe = n("./node_modules/lodash/debounce.js"),
				ye = n.n(Oe),
				Ee = n("./src/lib/domUtils/index.ts");
			const Pe = 30 * g.fb;
			let je = Date.now();
			const Se = () => {
					je = Date.now()
				},
				we = !!Object(Ee.f)() && {
					passive: !0
				};
			window.addEventListener("click", Se, !1), window.addEventListener("wheel", ye()(Se, 250), we), window.addEventListener("mousemove", ye()(Se, 250), we), window.addEventListener("keydown", ye()(Se, 250), we);
			var _e = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - je >= Pe ? (e.dispatch(V.h()), Se()) : Se()
					})), e => t => e(t)
				},
				ke = n("./node_modules/lodash/pick.js"),
				Ie = n.n(ke),
				Me = n("./src/reddit/actions/header.ts"),
				Ne = n("./src/reddit/actions/preferences.ts"),
				Te = n("./src/reddit/constants/preferences.ts"),
				Ae = n("./src/reddit/helpers/cookies/index.ts");
			const Re = new Set([Ne.f, Ne.h, z.b, Ne.c, Ne.n, Me.d, Me.e, Ne.q]);
			var Le = e => t => n => {
					const s = t(n);
					if (Re.has(n.type)) {
						const t = e.getState().user,
							n = Ie()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Te.b, Te.d, Te.e]);
						Object(Ae.a)({
							prefs: n
						})
					}
					return s
				},
				Fe = n("./src/lib/fastdom/index.ts"),
				De = n("./src/reddit/actions/tabBadging.ts"),
				Ue = n("./src/reddit/selectors/appBadges.ts"),
				Ge = n("./src/reddit/selectors/chat.ts"),
				Be = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				He = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				qe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				We = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ve = n("./src/reddit/selectors/platform.ts");
			const Ke = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				ze = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Ve.p)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Ke.has(o), a = Object(qe.k)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Qe(e), d = n && n.isRobotIndexable, l = s === g.Gb.COMMENTS || s === g.Gb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === g.Gb.SEARCH_RESULTS || s === g.Gb.SUBREDDIT_LEADERBOARD || l && u;
					return i || r || c || (!1 === d || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Qe = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(ee.e)(e, s);
						n = !!Object(We.a)(t, !1, s)
					}
					return n
				};
			var Je = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === H.e) {
						const t = e.getState(),
							s = Object(ee.I)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(He.b)(e),
								s = Object(Be.a)(e);
							let o = 0;
							if (n) o = Object(Ue.i)(e);
							else if (s) o = Object(Ue.j)(e);
							else {
								const t = Object(ee.E)(e) || 0;
								o = Object(Ge.a)(e) + t
							}
							Object(De.c)(o, t)
						})(t, o.title) : Fe.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = ze(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
								}
							})(t, document)
						})
					}
					return s
				} : () => e => t => e(t),
				Ze = n("./src/reddit/helpers/survey/index.ts");
			var Ye = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Ze.b).filter(t => t === e).length)(t.type) && Object(se.P)(Ze.b[t.type]), e(t)) : () => e => t => e(t);
			const Xe = 5 * g.fb;
			var $e = e => {
					const t = ne()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(V.g())
					}, Xe);
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
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== V.a && t.type !== V.b && t.type !== V.c && t.type !== V.e || r(t.payload), t.type === V.d && (clearTimeout(n), n = null), e(t))
				},
				et = n("./src/reddit/singleton/tracing/index.ts");
			var tt = e => e => t => {
					const n = () => e(t);
					return et.b.isEnabled ? et.b.recordLocalSpan(t.type, n) : e(t)
				},
				nt = n("./src/reddit/actions/frontpage/constants.ts"),
				st = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				ot = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				rt = n("./src/reddit/actions/pages/profilePosts.ts"),
				at = n("./src/reddit/actions/pages/search.ts"),
				it = n("./src/reddit/actions/pages/subreddit.ts"),
				ct = n("./src/reddit/actions/search.ts"),
				dt = n("./src/reddit/actions/subreddit.ts"),
				lt = n("./src/reddit/actions/tracking.ts"),
				ut = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				mt = n("./src/reddit/helpers/history/index.ts"),
				pt = n("./src/reddit/helpers/trackers/commentList.ts"),
				bt = n("./src/reddit/helpers/trackers/postList.ts"),
				ht = n("./src/reddit/helpers/trackers/screenview.ts"),
				gt = n("./src/reddit/selectors/subreddit.ts"),
				ft = n("./src/reddit/helpers/routeKey/index.ts");
			var vt = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(lt.c({
							routeKey: t
						}))
					};
					if (n.type === H.a) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(gt.F)(s, o) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						r.trigger("pageview", {
							...Ie()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(ft.b)(c, s, Object(ut.a)(s));
							if (e && k.c.has(e)) {
								const t = k.c.end(e);
								!Object(Ve.h)(s) && Object(mt.b)(le.a.IsOverlay) || Object(ht.k)(c, s, I.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(ut.a)(s, d),
							u = Object(ft.b)(d, s, l);
						if (!u) return t(n);
						k.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case nt.b:
						case ot.b:
						case ot.e:
						case rt.PROFILE_POSTS_LOADED:
						case st.e:
						case it.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case at.SEARCH_RESULTS_RECEIVED: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case nt.f:
						case dt.i:
						case rt.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							bt.l(r, t);
							break
						}
						case st.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							pt.a(r, t);
							break
						}
						case ct.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				xt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Ct = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Ot = n("./src/reddit/helpers/trackers/global.ts");
			let yt = null;
			const Et = () => {
				yt && window.clearTimeout(yt), yt = null
			};
			var Pt = e => {
					yt = window.setTimeout(() => {
						Et(), Object(k.a)(Object(Ot.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Et)
				},
				jt = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				St = n("./src/lib/cookieConsent/index.ts"),
				wt = n("./src/lib/permanentCookieOptions.ts"),
				_t = n("./src/reddit/constants/cookie.ts");
			const kt = (e, t) => {
				if (!e) return;
				const n = (d.a.get(_t.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: _t.g,
							value: s,
							cookieOptions: Object(wt.a)(),
							cookieContext: t
						};
					Object(St.c)(o)
				}
			};
			var It = n("./src/reddit/layout/page/Listing/index.tsx"),
				Mt = n("./src/reddit/models/Toast/index.ts"),
				Nt = n("./src/reddit/reducers/index.ts"),
				Tt = n("./src/reddit/routes/index.ts"),
				At = n("./src/reddit/selectors/experiments/index.ts"),
				Rt = n("./src/reddit/constants/experiments.ts"),
				Lt = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Ft = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Dt = n("./src/reddit/selectors/experiments/htmlResponseStreaming.ts"),
				Ut = n("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Gt = n("./src/reddit/selectors/telemetry.ts");
			const Bt = {
					displayDelay: 15,
					displayOnRoutes: [g.Gb.SUBREDDIT, g.Gb.COMMENTS],
					experimentName: Rt.Vb,
					experimentVariant: Rt.Zb.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Ht = e => {
					const {
						base_url: t
					} = Object(Gt.requestWithParams)(e), n = Object(Ve.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
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
				qt = e => {
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
						externalVars: Ht(e)
					}
				};
			var Wt = n("./src/reddit/selectors/meta.ts");
			var Vt = n("./src/reddit/singleton/EventSystem.ts"),
				Kt = n("./src/lib/initializeClient/installReducer.ts"),
				zt = n("./src/reddit/reducers/features/categories/index.ts"),
				Qt = n("./src/lib/makeActionCreator/index.ts"),
				Jt = n("./src/lib/sentry/index.ts"),
				Zt = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Yt = Object(Qt.a)(Zt.C),
				Xt = () => {
					return Object(se.w)($.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var $t = n("./src/reddit/actions/global/constants.ts");
			Object(Kt.a)({
				features: {
					categories: zt.a
				}
			});
			const en = Object(Qt.a)($t.a),
				tn = e => async (t, n) => {
					t((() => async e => {
						const t = Xt();
						t && e(Yt(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || Jt.c.withScope(e => {
						Object(Jt.a)(e, {
							serverLogging: !1
						}), Jt.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(en(o))
				};
			var nn = n("./src/reddit/actions/login.ts");
			const sn = /account\/magic_link\/landing\/[^\/]+\/?$/;
			var on = n("./src/reddit/actions/notificationsInbox/index.ts"),
				rn = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				an = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts");
			Object(o.e)(o.b.EntryPointStart);
			const cn = Object(w.a)({
					actionDispatchers: {
						reddaidReceived: J.s,
						loidReceived: J.q,
						sessionTrackerReceived: J.x
					},
					authHeaders: {
						[de.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: J.d,
						loidReceived: J.b,
						sessionTrackerReceived: J.k,
						userAuthenticated: V.c,
						userLoggedOut: V.d,
						userReauthenticated: V.e,
						headersReceived: M.a
					},
					onBeforeRequestFactory: jt.a,
					statsAppName: g.l.Redesign
				}),
				dn = Object(_.a)(cn.apiContext),
				ln = Ce();
			let un;
			Object(C.a)({
				reducerMap: Nt.a,
				routes: Tt.a,
				apiContext: cn.apiContext,
				gqlContext: dn.gqlContext,
				appFactory: (e, t) => u.a.createElement(be.a.Provider, {
					value: ln.broadcaster
				}, u.a.createElement(he.a.Provider, {
					value: {
						apiContext: cn.apiContext,
						gqlContext: dn.gqlContext
					}
				}, u.a.createElement(ge.b, null, u.a.createElement(Z.a, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(ce, null)))),
				appName: g.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = un;
						if (!n) return;
						n.dispatch(Object(H.k)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(H.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: Tt.a,
					apiContext: cn.apiContext,
					gqlContext: dn.gqlContext
				}), ln.middleware, _e, cn.middleware, dn.middleware, $e, Le, tt, vt, Je, Ye],
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
					loading: u.a.createElement(It.a, {
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
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(D.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							Object(S.b)("sendV2Event", Object(Ot.a)("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(H.g)());
					const s = Object(ee.V)(n.getState());
					n.dispatch(Object(z.c)({
						nightmode: s
					}));
					const o = (e => e.tracing.traceId)(n.getState());
					if (o && (e => Object(Lt.c)(e, {
							experimentEligibilitySelector: Lt.a,
							experimentName: Rt.w
						}) === Rt.C.Enabled)(n.getState())) {
						et.b.enableTracing(!0);
						const e = et.b.createTraceFromId(o);
						et.b.setParent(e)
					}
					n.dispatch(Object(H.h)(t));
					e.listen((e, s) => {
						const o = Object(y.a)(Object(i.e)(e), t);
						n.dispatch(Object(H.i)(e, s, o))
					});
					const r = n.getState(),
						{
							currentPage: c
						} = r.platform;
					if (c) {
						const e = [];
						Object(Ve.i)(r) && e.push(me.e), e.length > 0 && n.dispatch(Object(m.c)(Object(v.a)(c.url, e)))
					}
					return xt.a.initialize(), {
						localStorageData: Object(se.x)()
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
					un = c;
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
							i = Object(gt.F)(n, a) || "";
						kt(i, {
							country: n.meta.country
						}), Vt.a.publish(ue.c, r, document)
					});
					const m = c.getState(),
						p = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						C = Object(gt.F)(m, p) || "",
						y = (m.subreddits.about[C] || {}).advertiserCategory;
					if (r.setup({
							jailUrl: "https://www.redditmedia.com/gtm/jail",
							containerId: a.a.gtmContainerId,
							payload: {
								user: m.user.account ? m.user.account.id : m.user.loid.loid
							}
						}), r.trigger("pageview", {
							subreddit: p,
							advertiserCategory: y
						}), c.dispatch(tn({
							localStorageData: d
						})), Object(Ft.f)(m) && Object(F.d)(m), c.dispatch(Object(F.c)()), c.dispatch((() => async (e, t) => {
							const n = t(),
								{
									sessionReferrer: s
								} = n.platform;
							s && sn.test(s) && e(Object(nn.i)())
						})()), window.addEventListener("load", () => {
							const t = c.getState(),
								{
									currentPage: r
								} = t.platform,
								a = (r.urlParams.subredditName || "").toLowerCase(),
								d = Object(gt.F)(t, a) || "";
							if (kt(d, {
									country: t.meta.country
								}), r && r.meta) {
								const a = r.meta.name;
								if (Object(k.b)(g.l.Redesign, {
										page: a,
										type: "rum"
									}), Object(x.c)(t.meta.userAgent) && window.innerWidth > pe.b) {
									const e = Object(o.f)(i);
									E.a && E.a.timing && et.b.isEnabled && (et.b.recordPerformanceTimings(`${a}_time_to_first_byte`, E.a.timing.fetchStart, E.a.timing.responseStart), et.b.recordPerformanceTimings(`${a}_time_to_interactive`, E.a.timing.fetchStart, E.a.timing.domInteractive));
									const n = [];
									let s = !0;
									if (Object(Ve.g)(t)) {
										const e = Object(Ct.a)(t);
										n.push(Object(Ct.c)(e))
									}
									const r = Object(Dt.a)(t);
									r && (n.push(r), s = !1);
									const c = {
										isLoggedIn: Object(ee.J)(t),
										name: a,
										statsdPathsForExperiments: n
									};
									Object(o.g)(c, e, s)
								}
								const d = E.a.timing.domInteractive - E.a.timing.navigationStart;
								Object(ht.k)(r.routeMatch, c.getState(), I.TimerType.Initial, d, r.urlParams);
								const l = Object(f.a)(window.location.href);
								l && l.get(me.a) && history.replaceState(history.state, "", Object(v.a)(window.location.href, [me.a])), Object(j.a)(l.get(me.y)) && c.dispatch(Object(Q.f)({
									kind: Mt.b.SuccessCommunity,
									text: s.fbt._("Email verification complete", null, {
										hk: "bqMP6"
									})
								})), l.get(me.z) && (c.dispatch(Object(L.a)(l.get(me.z))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [me.z])));
								let u = !1;
								if ((Object(mt.b)(le.a.JustLoggedIn) || l && l.get(me.o) && Object(j.a)(l.get(me.o))) && (c.dispatch(Object(Q.f)({
										text: s.fbt._("Successfully logged in!", null, {
											hk: "2POUVB"
										})
									})), u = !0, Object(mt.c)(le.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [me.o]))), Object(mt.b)(le.a.JustLoggedOut) && (u = !0, Object(mt.c)(le.a.JustLoggedOut)), Object(G.a)(t), !1 !== se.Q()) {
									let s;
									Object(Ft.a)(t) && (s = () => {
										const {
											dispatch: t
										} = c;
										e.listen(() => t(Object(F.b)())), t(Object(F.b)())
									}), (() => Object(U.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))))().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(u, !1, s)))
								}
								if (a === g.Gb.MULTIREDDIT && r.routeMatch) {
									const {
										multiredditName: e,
										username: t
									} = r.routeMatch.match.params;
									c.dispatch(Object(O.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
										multiredditName: e,
										username: t
									}))
								}
								c.dispatch(Object(R.c)())
							}
							Object(ee.J)(c.getState()) && (Object(Be.a)(c.getState()) || c.dispatch(Object(T.d)()), c.dispatch(Object(N.e)())), Object(b.requestIdleCallback)(async () => {
								c.dispatch(Object(B.d)()), await Object(h.a)() && Object(Ot.b)(c.getState());
								const t = async () => {
									const e = c.getState(),
										t = qt(e);
									t && (await (async e => {
										return (await Object(U.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
								if ("visible" !== document.visibilityState && (se.Ib(Date.now()), Object(k.a)(Object(Ot.a)("tab_backgrounded")(t))), (e => Object(Lt.c)(e, {
										experimentEligibilitySelector: e => !Object(Wt.d)(e),
										experimentName: Rt.cb
									}) === Rt.jb.Enabled)(t) && "visible" === document.visibilityState && n && Object(ht.k)(n.routeMatch, c.getState(), I.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
									const e = se.t(),
										t = se.u(),
										n = se.C(),
										s = se.M();
									if (s && e && n) {
										const o = Date.now() - s;
										Object(k.a)(Object(Ot.e)("tab_backgrounded", n)(c.getState(), o, e, t))
									}(s || e || n || t) && (se.Y(), se.cb(), se.ab(), se.Z())
								}
								Object(an.a)(c.getState()) && (null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && rn.d[n.locationState.clickId] && !rn.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(rn.b)(n.locationState.clickId) : Object(rn.c)(n.locationState.clickId))
							}), Object(Wt.g)(c.getState()) && Pt(c.getState), c.dispatch(Object(K.j)())
						}), window.history.scrollRestoration = "manual", Vt.a.attachStore(c), c.dispatch(Object(W.b)(P.a.PageLoad)), Object(He.c)(c.getState()) && c.dispatch(Object(on.e)()), Object(Ut.b)(c.getState())) {
						const e = se.q(null === (l = c.getState().user.account) || void 0 === l ? void 0 : l.id);
						c.dispatch(Object(q.A)({
							posts: null != e ? e : []
						}))
					}
					if (Object(Ut.a)(c.getState())) {
						const e = se.p(null === (u = c.getState().user.account) || void 0 === u ? void 0 : u.id);
						c.dispatch(Object(A.k)({
							comments: null != e ? e : []
						}))
					}
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
			const b = Object(d.t)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				g = Object(r.b)(h),
				f = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: s,
					isCollectionLayout: r,
					isEditing: a,
					layout: i,
					pageLayer: c,
					...d
				}) => o.a.createElement("div", d);
			t.a = b(g(({
				className: e,
				...t
			}) => o.a.createElement(f, p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
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
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class h extends o.a.Component {
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
			var g = Object(b.a)(h);
			var f = e => o.a.createElement(g, e),
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
						theme: r,
						...i
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return o.a.createElement("div", C({
						className: Object(a.a)(x.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				y = c.a.div("Body", x.a),
				E = c.a.div("Sidebar", x.a),
				P = e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null;

			function j(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					s = e.sidebar && o.a.createElement(E, {
						className: e.isCollectionLayout ? x.a["m-collectionLayout"] : x.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = o.a.createElement(r.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? o.a.createElement(o.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? o.a.createElement(o.a.Fragment, null, s, i) : o.a.createElement(o.a.Fragment, null, i, s);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%";
				return o.a.createElement(f, {
					subredditId: e.subredditId
				}, o.a.createElement("div", {
					className: Object(a.a)(x.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, o.a.createElement(O, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), o.a.createElement("div", {
					className: x.a.innerContainer
				}, o.a.createElement("div", {
					className: x.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, P(e), o.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), o.a.createElement(y, {
					style: {
						maxWidth: m
					}
				}, c))))
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
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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
			var s, o, r, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER", e.AwardReceived = "AWARD_RECEIVED", e.PostFollow = "POST_FOLLOW", e.CommentFollow = "COMMENT_FOLLOW"
				}(s || (s = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE", e.Award = "AWARD"
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/Header/Sparse.tsx"),
				d = n("./src/reddit/components/ThemeProvider/index.tsx"),
				l = n("./src/reddit/contexts/InsideOverlay.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				b = n("./src/reddit/pages/InternalServerError/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(i.c)({
				showError: m.d.showVerboseErrors
			}), v = Object(a.b)(f)(e => r.a.createElement(l.a.Provider, {
				value: !1
			}, r.a.createElement(d.b, {
				subredditName: ""
			}, r.a.createElement("div", null, r.a.createElement(c.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), r.a.createElement("div", {
				className: h.a.container
			}, r.a.createElement("div", {
				className: h.a.mainContent
			}, r.a.createElement(p.a, {
				className: h.a.dizzySnoo
			}), r.a.createElement("h3", {
				className: h.a.title
			}, g._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), r.a.createElement("div", {
				className: h.a.subTitle
			}, g._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), r.a.createElement(u.i, {
				onClick: () => window.location.reload(!0)
			}, g._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: h.a.subTitle
			}, e.error.message), r.a.createElement("pre", null, r.a.createElement("code", null, e.error.stack)))), r.a.createElement("div", {
				className: h.a.topImageContainer
			}, r.a.createElement("img", {
				className: h.a.image,
				src: `${s.a.assetPath}/img/error/star_pattern.png`
			})), r.a.createElement("div", {
				className: h.a.bottomImageContainer
			}, r.a.createElement("img", {
				className: h.a.image,
				src: `${s.a.assetPath}/img/error/half_planet.png`
			})))))))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx");
			var i = e => r.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				c = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				d = n.n(c);
			const l = a.a.wrapped(i, "BellOutline", d.a),
				u = () => r.a.createElement("div", {
					className: d.a.emptyState
				}, r.a.createElement(l, null), r.a.createElement("h1", {
					className: d.a.emptyTitle
				}, s.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), r.a.createElement("p", {
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
				o = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case o.o:
						const {
							avatarMarketingEvent: s
						} = t.payload;
						return s ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: s
							} = e, o = t && new Date(t) <= new Date, r = !!n && new Date(n) < new Date, a = s || null;
							return {
								active: !!o && !r && !!a,
								assetUrls: a
							}
						}(s) : i;
					case r.c:
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
					chunk: o.p.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.ACKNOWLEDGEMENTS
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
					chunk: o.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.APPEAL
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
				i = {
					action: r.a,
					chunk: o.p.AVATAR,
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
						name: o.Gb.AVATAR
					},
					path: a
				};
			t.b = i
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
					chunk: o.p.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.COINS
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
					chunk: o.p.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.COLLECTION_COMMENTS
					},
					prefetches: [o.p.FRONTPAGE, o.p.COMMENTS_PAGE, o.p.SUBREDDIT]
				},
				u = {
					...l,
					path: c
				},
				m = {
					...l,
					path: d,
					routePredicate: a.a
				},
				p = [u, m];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.p.COMMENTS_PAGE,
					component: a,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.p.FRONTPAGE, o.p.SUBREDDIT]
				}),
				u = [l(o.Gb.COMMENTS, i), l(o.Gb.DUPLICATES, c), l(o.Gb.COMMENTS, d)];
			t.a = u
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
					action: r.a,
					chunk: o.p.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.FRAMED_GILD
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
					chunk: o.p.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.FRAMED_MODAL
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
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.R).map(e => a.R[e]).join("|"),
				d = "/",
				l = `/:sort(${c})?`,
				u = Object(r.a)({
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
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.p.FRONTPAGE,
					component: u,
					exact: !0,
					prefetches: [a.p.COMMENTS_PAGE, a.p.SUBREDDIT]
				},
				p = {
					...m,
					path: d,
					meta: {
						name: a.Gb.INDEX
					}
				},
				b = {
					...m,
					path: l,
					meta: {
						name: a.Gb.LISTING
					}
				},
				h = [p, b];
			t.a = h
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
					chunk: o.p.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Gb.GEOTAGGING
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
				d = Object.keys(a.N).map(e => a.N[e]).join("|"),
				l = [`/message/:pageName(${d})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.p.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Gb.INBOX_PAGES
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
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				l = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var b = [];
			var h = {
					action: Object(p.a)(() => n.e(2).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				g = n("./src/lib/addQueryParams/index.ts");
			var f = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(g.a)("/", o)))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.EXPLORE
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
					name: c.Gb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var M = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(k.b))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...I],
				N = n("./src/reddit/routes/postCreation/index.ts"),
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
							rest: o
						} = e.params, {
							queryParams: r
						} = e, a = await Object(L.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(F.a)(t, e)
						}
						const c = a.body.account.displayText,
							d = o ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${c}/`,
							l = Object(g.a)(d, r);
						await t(Object(i.c)(l))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.PROFILE_ME
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
							queryParams: o
						} = e, r = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(g.a)(r, o);
						await t(Object(i.c)(a))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.PROFILE_REDIRECT
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
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(g.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.p.EMPTY,
					exact: !0,
					meta: {
						name: c.Gb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				K = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				z = n("./src/reddit/routes/report/index.ts"),
				Q = n("./src/reddit/routes/searchResults/index.ts"),
				J = n("./src/reddit/routes/settings/index.ts");
			var Z = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.p.EMPTY,
					meta: {
						name: c.Gb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.p.EMPTY,
					meta: {
						name: c.Gb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				Y = n("./src/reddit/routes/subreddit/index.ts"),
				X = n("./src/reddit/routes/subredditCreation/index.ts"),
				$ = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ee = n("./src/reddit/routes/subredditWiki/index.ts"),
				te = n("./src/reddit/routes/topic/index.ts");
			const ne = [o.a, r.a, a.b, d, l.a, u.a, D, q, V, ...s.a, ...m.a, h, ...C.a, O.a, A.a, v.a, x.a, N.a, T.a, ...M, f, ...E.a, w.a, S.a, j.c, _.a, y.a, R.a, U.a, G.a, B.a, W.a, H.a, K.a, ...J.a, ...Z, Q.a, ...ee.a, te.a, Y.b, X.a, $.a, P.a, z.a, ...b];
			t.a = ne
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
				p = n("./src/reddit/selectors/user.ts");
			const b = {
					action: i.a,
					chunk: o.p.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: o.Gb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				h = {
					action: c.a,
					chunk: o.p.META_MEMBERSHIP_PAYWALL_PAGE,
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
						name: o.Gb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				g = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.J)(n()) || await t(Object(d.r)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(l.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, f = {
					action: g,
					chunk: o.p.EMPTY,
					exact: !0,
					meta: {
						name: o.Gb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [b, h, f]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				d = Object.keys(a.mb).map(e => a.mb[e]).join("|"),
				l = `/r/mod/about/:pageName(${d})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.p.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Gb.MODQUEUE_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/loadableAction/index.ts");
			const d = Object.keys(i.Wb).map(e => i.Wb[e]).join("|"),
				l = [i.Wb.Awards],
				u = l.join("|"),
				m = e => `/${e}/about/scheduledposts`,
				p = e => `/${e}/about/eventposts`,
				b = e => `/${e}/about/predictions`,
				h = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				f = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${u})`, ...g],
				v = e => !!Object(a.h)(e, {
					path: "/r/:subredditName/about"
				}),
				x = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: i.p.MODERATION_PAGES,
					component: h,
					exact: !0,
					meta: {
						name: i.Gb.MODERATION_PAGES
					},
					path: f,
					prefetches: [i.p.SUBREDDIT]
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
				l = Object.keys(a.R).map(e => `${d}/:sort(${a.R[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.R).map(e => `${u}/:sort(${a.R[e]})?`),
				p = [d, u, ...l, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.p.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Gb.MULTIREDDIT
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
					chunk: o.p.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.p.FRONTPAGE]
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.POST_DRAFT
					},
					path: a,
					prefetches: [o.p.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.e,
					chunk: o.p.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.PREMIUM
					},
					path: a
				};
			t.a = c
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.p.COMMENTS_PAGE]
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
					chunk: o.p.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.p.COMMENTS_PAGE]
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.p.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
				u = [`/user/:profileName/:listingType(${l})`, `/user/:profileName/gilded/:listingType(${c.a.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.p.PROFILE_PRIVATE,
					component: d,
					exact: !0,
					meta: {
						name: a.Gb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.p.COMMENTS_PAGE]
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.p.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.PROFILE_SNOOBUILDER
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.p.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Gb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.p.PUBLIC_ACCESS_NETWORK]
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
					chunk: o.p.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.REPORT
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search.ts")).then(e => e.searchResultsRequested)),
					chunk: o.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.p.FRONTPAGE, o.p.SUBREDDIT, o.p.COMMENTS_PAGE]
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
			const c = Object.keys(a.Tb).map(e => a.Tb[e]).join("|"),
				d = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
						name: a.Gb.SETTINGS
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
					chunk: a.p.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Gb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = d
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/actions/pages/subredditCreation.ts")).then(e => e.subredditCreationPageRequested)),
					component: i,
					chunk: o.p.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: o.Gb.SUBREDDIT_CREATION
					},
					path: a
				};
			t.a = c
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
					chunk: o.p.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Gb.SUBREDDIT_LEADERBOARD
					},
					path: a,
					prefetches: [o.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
				u = e => async t => {
					await t(Object(o.c)(Object(i.a)(e.url, e.params)))
				}, m = {
					action: u,
					chunk: r.p.EMPTY,
					exact: !0,
					meta: {
						name: r.Gb.SUBREDDIT_WIKI
					},
					path: l
				}, p = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.p.SUBREDDIT_WIKI,
					component: c,
					exact: !0,
					meta: {
						name: r.Gb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.p.SUBREDDIT]
				};
			t.a = [m, p]
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.p.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Gb.TOPIC
					},
					prefetches: [o.p.COMMENTS_PAGE, o.p.FRONTPAGE]
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
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/selectors/experiments/magicLink.ts"),
				p = n("./src/reddit/selectors/meta.ts"),
				b = n("./src/reddit/helpers/chooseVariant/index.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const g = Object(a.a)(h.I, h.J, (e, t) => !e && !t);
			var f = n("./src/reddit/selectors/responsiveSettings.ts");
			const v = e => e.accountManagerModalData.actionSource,
				x = e => e.accountManagerModalData.redirectUrl,
				C = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, v, l.a, f.a, u.b, e => Object(b.c)(e, {
					experimentEligibilitySelector: g,
					experimentName: d.id
				}), m.a, p.i, (e, t, n, a, l, u, m, p, b) => {
					let h = `${r.a.accountManagerOrigin}${e}`;
					if (h = Object(i.a)(h, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), m && (h = Object(i.a)(h, {
							[`experiment_${d.id}`]: m
						})), e === c.c.GoogleOneTap) return Object(i.a)(h, {
						[d.R]: u
					});
					if (a && (h = Object(i.a)(h, {
							[d.kb]: a,
							uiMode: t
						})), p && (h = Object(i.a)(h, {
							[`experiment_${d.oc}`]: p
						})), l && (h = Object(i.a)(h, {
							mweb_responsive_settings: "treatment"
						})), b) {
						const e = Object(s.isoLocaleToR2Language)(b);
						b !== o.DEFAULT_LOCALE && e && (h = Object(i.a)(h, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? h : h = Object(i.a)(h, {
						actionSource: n
					})
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
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(o.a)({
				features: {
					avatar: r.a
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
					const s = Object(a.mb)(e, {
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
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				return Object(r.G)(e) || s.B.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.v
				})
			}
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.qb)
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
					experimentEligibilitySelector: r.J,
					experimentName: s.Jb
				});
				return !(!t || Object(s.Hd)(t))
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
			const l = Object(s.a)(d.Q, (e, {
					pageLayer: t
				}) => !t || Object(r.y)(t), c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: o.kb,
					throttledVariants: {
						[o.Rb.CurrentThrottled]: o.kb
					}
				}), i.a),
				m = e => e === o.Rb.CurrentThrottled,
				p = e => e === o.Rb.CurrentThrottled || e === o.Rb.CurrentUnthrottled || e === o.Rb.CurrentUnthrottledCopy || e === o.Rb.NewPopUnthrottledCopy,
				b = e => e === o.Rb.NewPopUnthrottledCopy,
				h = e => e === o.Rb.NewPageUnthrottledCopy || e === o.Rb.NewPageUnthrottledCopyFields,
				g = e => e === o.Rb.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/postCommentFollow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = e => (Object(c.I)(e) || Object(c.J)(e)) && Object(s.a)(),
				l = Object(o.a)(e => Object(a.c)(e, {
					experimentName: r.X,
					experimentEligibilitySelector: d
				}), i.a),
				u = Object(o.a)(l, e => e === r.Ic.Enabled),
				m = Object(o.a)(e => Object(a.c)(e, {
					experimentName: r.Q,
					experimentEligibilitySelector: d
				}), i.a),
				p = Object(o.a)(m, e => e === r.E.Enabled)
		},
		"./src/reddit/selectors/experiments/srCreationEntrypoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = e => Object(i.I)(e) || Object(i.J)(e),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.uc,
					experimentEligibilitySelector: c
				}), a.a),
				l = Object(s.a)(d, e => e === o.yc.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.tc,
					experimentEligibilitySelector: c
				}), a.a),
				m = Object(s.a)(u, e => e === o.xc.Enabled),
				p = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.gd,
					experimentEligibilitySelector: c
				}), a.a),
				b = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.hd,
					experimentEligibilitySelector: c
				}), a.a)
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => Object(r.G)(e) || !(s.yd.Holdout === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.vd
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
				o = n("./src/reddit/featureFlags/utils.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["AU", "CA", "GB", "US"],
				i = new Set([s.bc.AllItems, s.bc.TrendingSearch]),
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
						experimentName: s.cc
					});
					return i.has(t)
				},
				d = e => s.bc.AllItems === Object(r.c)(e, {
					experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
					experimentName: s.cc
				})
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
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
				o = (e, {
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
				return o
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
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js");
			const o = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				r = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				a = Object(s.a)(r, e => !(!e || !e.hasNextPage)),
				i = Object(s.a)(r, e => e && e.endCursor),
				c = e => e.notificationsInbox && e.notificationsInbox.notifications,
				d = Object(s.a)(c, e => e.slice(0, 5)),
				l = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				u = Object(s.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				m = Object(s.a)(c, l, (e, t) => {
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
			Object(s.a)(i.qb, e => !(!e || !e.length));
			const c = Object(s.a)(i.y, e => !e),
				d = Object(s.a)(i.qb, e => e && e.find(e => e === r.a.Apple)),
				l = Object(s.a)(i.qb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.f].includes(e))
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
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~Subreddit", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "Governance~ModListing~Reddit~Subreddit", "Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost", "Chat~Governance~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.09d3366db016dea20390.js.map